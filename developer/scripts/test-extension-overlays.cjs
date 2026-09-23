const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs/promises');
const puppeteer = require('puppeteer');
const root = path.resolve(__dirname, '..');
const extension = path.resolve(root, process.argv[2] || 'chrome');
const output = path.join(root, 'artifacts/extension');
(async () => {
  await fs.mkdir(output, { recursive: true });
  const browser = await puppeteer.launch({ headless: false, protocolTimeout: 20000,
    ignoreDefaultArgs: ['--disable-extensions'],
    args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`, '--lang=en-US'],
    defaultViewport: { width: 360, height: 560 } });
  const results = [];
  try {
    const worker = await browser.waitForTarget(t => t.type() === 'service_worker' && t.url().startsWith('chrome-extension://'));
    const id = new URL(worker.url()).hostname;
    const page = await browser.newPage();
    await page.goto(`chrome-extension://${id}/view/popup.html`);
    await page.bringToFront();
    console.log('Opened extension');
    for (const theme of ['normal', 'dark']) {
      console.log('Testing theme', theme);
      await page.evaluate(async theme => {
        await chrome.storage.local.set({ UserSettings: { storageLocation: 'local', theme } });
      }, theme);
      await page.reload();
      await page.waitForSelector('#i-menu');
      console.log('Header ready');
      const add = await page.$eval('#i-plus', el => { const r = el.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
      await page.click('#i-menu');
      await page.waitForFunction(() => document.querySelector('#menu').classList.contains('slidein'));
      await page.waitForFunction(() => Math.abs(document.querySelector('#menu').getBoundingClientRect().left) < 1);
      const top = await page.evaluate(({ x, y }) => {
        const el = document.elementFromPoint(x, y);
        return { inMenu: !!el?.closest('#menu'), isAdd: !!el?.closest('#i-plus'), tag: el?.tagName };
      }, add);
      console.log(JSON.stringify({ theme, settingsHitTest: top }));
      assert.equal(top.isAdd, false, 'Add account must not cover the settings panel');
      assert.equal(top.inMenu, true, 'Settings panel owns pointer events over the old header');
      await page.screenshot({ path: path.join(output, `settings-${theme}.png`) });
      await page.$$eval('#menu .menuList p', items => items.find(el => el.textContent.trim() === 'About').click());
      await page.waitForSelector('.about-copyright');
      await page.waitForFunction(() => document.querySelector('#info').getBoundingClientRect().top <= 11);
      const metrics = await page.evaluate(() => {
        const copy = document.querySelector('.about-copyright');
        const links = document.querySelector('.about-links');
        const panel = document.querySelector('.about-page');
        const c = copy.getBoundingClientRect(), l = links.getBoundingClientRect();
        return { gap: c.top - l.bottom, bottomPadding: parseFloat(getComputedStyle(panel).paddingBottom),
          overflow: panel.scrollWidth > panel.clientWidth, text: copy.textContent.trim() };
      });
      console.log(JSON.stringify({ theme, copyright: metrics }));
      assert.ok(metrics.gap >= 20, 'Copyright needs at least 20px clearance below links');
      assert.ok(metrics.bottomPadding >= 20, 'About needs comfortable bottom padding');
      assert.equal(metrics.overflow, false);
      await page.screenshot({ path: path.join(output, `about-${theme}.png`) });
      await page.click('#infoClose');
      await page.waitForFunction(() => !document.querySelector('#info').classList.contains('fadeout'));
      await page.click('#i-close');
      await page.waitForFunction(() => !document.querySelector('#menu').classList.contains('slideout'));
      await page.click('#i-plus');
      await page.waitForFunction(() => document.querySelector('#info').classList.contains('fadein'));
      assert.match(await page.$eval('#infoContent', el => el.textContent), /Manual Entry/);
      results.push({ theme, settingsOverlay: 'pass', copyrightSpacing: 'pass', addAccountAfterClose: 'pass' });
    }
    await fs.writeFile(path.join(output, 'overlays-report.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
