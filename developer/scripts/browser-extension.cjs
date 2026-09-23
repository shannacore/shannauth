const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const puppeteer = require('puppeteer');
const root = path.resolve(__dirname, '..');
const extension = path.resolve(root, process.argv[2] || 'chrome');
const out = path.join(root, 'artifacts/extension');
const seed = 'GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ'; // Public RFC 4226 fixture, never a user account.
const fixtures = [
  ['RFC Test', 'sample@example.test', 'totp', 6],
  ['Eight digits', 'sample@example.test', 'totp', 8],
  ['HOTP Test', 'counter@example.test', 'hotp', 6],
  ['Very long issuer name that should wrap safely', 'Long.MixedCase.Account@example.test', 'totp', 6],
  ['Last card', 'scroll@example.test', 'totp', 6],
].map(([issuer, account, type, digits], index) => ({
  dataType: 'OTPStorage', encrypted: false, index, issuer, account, type, digits,
  secret: seed, counter: 0, period: 30, algorithm: 'SHA1', pinned: false,
  hash: `00000000-0000-4000-8000-${String(index + 1).padStart(12, '0')}`,
}));
const checks = [];
function otp(counter, digits = 6) {
  const input = Buffer.alloc(8);
  input.writeBigUInt64BE(BigInt(counter));
  const digest = crypto.createHmac('sha1', '12345678901234567890').update(input).digest();
  const offset = digest[digest.length - 1] & 15;
  return String((digest.readUInt32BE(offset) & 0x7fffffff) % (10 ** digits)).padStart(digits, '0');
}
(async () => {
  await fs.mkdir(out, { recursive: true });
  const browser = await puppeteer.launch({
    headless: false, ignoreDefaultArgs: ['--disable-extensions'],
    args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`, '--lang=en-US'],
    defaultViewport: { width: 360, height: 560 },
  });
  const errors = [];
  try {
    const worker = await browser.waitForTarget(t => t.type() === 'service_worker' && t.url().startsWith('chrome-extension://'));
    const id = new URL(worker.url()).hostname;
    const page = await browser.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`chrome-extension://${id}/view/popup.html`);
    await page.waitForSelector('.no-entry');
    assert.equal(await page.title(), 'SHANNA Authenticator');
    assert.equal(await page.$eval('.brand-tagline', el => el.textContent.trim()), 'Secure your accounts with two-factor authentication');
    await page.screenshot({ path: path.join(out, 'empty.png') });
    await page.click('#i-plus');
    await page.waitForFunction(() => document.querySelector('#info').classList.contains('fadein'));
    assert.match(await page.$eval('#infoContent', el => el.textContent), /Manual Entry/);
    await page.click('#infoClose');
    checks.push('Empty state, official brand, direct Add account opens all existing methods');
    await page.evaluate(async records => {
      await chrome.storage.local.set({ UserSettings: { storageLocation: 'local', theme: 'normal' }, ...Object.fromEntries(records.map(r => [r.hash, r])) });
    }, fixtures);
    await page.reload();
    await page.waitForFunction(() => document.querySelectorAll('.entry').length === 5);
    // Existing HOTP intentionally stays concealed until Next is pressed.
    await page.$$eval('.entry', entries => entries[2].querySelector('.counter').click());
    await page.waitForFunction(() => [...document.querySelectorAll('.entry .code')].every(el => /[0-9]/.test(el.textContent)));
    const codes = await page.$$eval('.entry', entries => entries.map(el => ({
      issuer: el.querySelector('.issuer').textContent.trim(),
      text: el.querySelector('.code').textContent.trim(), raw: el.__vue__.entry.code,
      counter: Math.floor(Date.now() / 30000),
    })));
    for (const [index, code] of codes.entries()) {
      assert.match(code.text, index === 1 ? /^\d{4} \d{4}$/ : /^\d{3} \d{3}$/);
      assert.equal(code.text.replace(/ /g, ''), code.raw);
      assert.equal(code.raw, otp(index === 2 ? 0 : code.counter, index === 1 ? 8 : 6));
    }
    assert.equal(codes[0].issuer, 'RFC Test');
    const metrics = await page.evaluate(() => {
      const entry = document.querySelector('.entry'), code = entry.querySelector('.code');
      return { background: getComputedStyle(document.querySelector('#codes')).backgroundColor,
        codeColor: getComputedStyle(code).color, timeout: code.classList.contains('timeout'), panel: getComputedStyle(code).backgroundColor,
        font: parseFloat(getComputedStyle(code).fontSize), radius: parseFloat(getComputedStyle(entry).borderRadius),
        overflow: document.body.scrollWidth > 360, countdown: entry.querySelector('.countdown-value')?.textContent.trim() };
    });
    assert.equal(metrics.background, 'rgb(246, 245, 241)');
    assert.equal(metrics.codeColor, metrics.timeout ? 'rgb(163, 71, 52)' : 'rgb(105, 80, 200)');
    assert.equal(metrics.panel, 'rgb(240, 235, 255)');
    assert.ok(metrics.font >= 28 && metrics.radius >= 18 && !metrics.overflow);
    assert.match(metrics.countdown, /^\d+$/);
    await page.screenshot({ path: path.join(out, 'accounts-light.png') });
    checks.push('Real persisted RFC TOTP 6/8-digit and HOTP vectors; grouped display; warm white/lilac styling and countdown');
    await page.$eval('.entry .showqr', el => el.click());
    await page.waitForFunction(() => document.querySelector('#qr').classList.contains('qrfadein'));
    assert.match(await page.$eval('#qr', el => el.style.backgroundImage), /data:image/);
    await page.click('#qr');
    await page.waitForFunction(() => !document.querySelector('#qr').classList.contains('qrfadeout'));
    await page.$eval('.entry .pin', el => el.click());
    await page.waitForFunction(() => document.querySelector('.entry').classList.contains('pinnedEntry'));
    await page.waitForFunction(async hash => (await chrome.storage.local.get(hash))[hash].pinned === true, {}, fixtures[0].hash);
    const pinned = await page.evaluate(hash => chrome.storage.local.get(hash), fixtures[0].hash);
    assert.equal(pinned[fixtures[0].hash].pinned, true);
    await page.$$eval('.entry', entries => entries[2].querySelector('.counter').click());
    await page.waitForFunction(() => [...document.querySelectorAll('.entry')].find(e => e.__vue__.entry.issuer === 'HOTP Test').__vue__.entry.code === '287082');
    await page.waitForFunction(async hash => (await chrome.storage.local.get(hash))[hash].counter === 2, {}, fixtures[2].hash);
    const persisted = await page.evaluate(hash => chrome.storage.local.get(hash), fixtures[2].hash);
    assert.equal(persisted[fixtures[2].hash].counter, 2);
    checks.push('Existing QR, pin persistence, HOTP advance and counter persistence');
    await page.click('#i-edit');
    await page.waitForFunction(() => document.querySelector('#codes').classList.contains('edit'));
    assert.ok(await page.$eval('.entry:not(.pinnedEntry) .movehandle', el => getComputedStyle(el).display !== 'none'));
    await page.$eval('.issuerEdit input', el => { el.value = 'Edited RFC Test'; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); });
    await page.click('#i-edit');
    await page.waitForFunction(() => document.querySelector('.entry .issuer').textContent.includes('Edited RFC Test'));
    await page.keyboard.press('/');
    await page.waitForFunction(() => document.querySelector('#codes').classList.contains('search'));
    await page.type('#searchInput', 'Last card');
    await page.waitForFunction(() => document.querySelectorAll('.entry[notSearched]').length === 4);
    const visible = await page.$$eval('.entry', entries => entries.filter(el => el.getBoundingClientRect().height > 1).map(el => el.querySelector('.issuer').textContent.trim()));
    assert.deepEqual(visible, ['Last card']);
    await page.$eval('#searchInput', el => { el.value = ''; el.dispatchEvent(new Event('input', { bubbles: true })); });
    checks.push('Edit controls, reorder handle, issuer edit and search retained');
    await page.click('#i-menu');
    await page.waitForFunction(() => document.querySelector('#menu').classList.contains('slidein'));
    await page.$$eval('#menu p', items => items.find(el => el.textContent.includes('Preferences')).click());
    await page.waitForSelector('#infoContent select');
    await page.select('#infoContent select', 'dark');
    await page.reload();
    await page.waitForSelector('.theme-dark .entry');
    assert.notEqual(await page.$eval('#codes', el => getComputedStyle(el).backgroundColor), metrics.background);
    await page.screenshot({ path: path.join(out, 'accounts-dark.png') });
    checks.push('Explicit dark preference selected through UI persists after reload');
    await page.evaluate(async () => {
      const { UserSettings } = await chrome.storage.local.get('UserSettings');
      await chrome.storage.local.set({ UserSettings: { ...UserSettings, theme: 'normal' } });
    });
    await page.reload();
    await page.waitForSelector('.theme-normal .entry');
    await page.$eval('#codes', el => el.scrollTop = el.scrollHeight);
    const last = await page.$eval('.entry:last-child', el => ({ bottom: el.getBoundingClientRect().bottom, top: el.getBoundingClientRect().top }));
    assert.ok(last.bottom <= 560 && last.top >= 0);
    checks.push('Last card reachable, no page errors');
    checks.push(...await require('./extension-vault-checks.cjs')(page, browser, id, fixtures));
    assert.deepEqual(errors, []);
    const report = { passed: true, extension: id, chrome: await browser.version(), fixtureCount: fixtures.length, checks, errors };
    await fs.writeFile(path.join(out, 'browser-report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
