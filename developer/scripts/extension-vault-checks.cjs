const assert = require('node:assert/strict');

// Exercises the existing vault UI with public RFC fixtures in the disposable profile.
module.exports = async function vaultChecks(page, browser, id, fixtures) {
  const openMenuPage = async title => {
    await page.click('#i-menu');
    await page.waitForFunction(() => document.querySelector('#menu').classList.contains('slidein'));
    await page.$$eval('#menu p', (items, title) => items.find(el => el.getAttribute('title') === title).click(), title);
    await page.waitForFunction(() => document.querySelector('#info').classList.contains('fadein'));
  };
  await openMenuPage('Backup');
  const fs = require('node:fs/promises');
  const path = require('node:path');
  const dir = await fs.mkdtemp(path.join(require('node:os').tmpdir(), 'shanna-export-'));
  await page._client().send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: dir });
  await page.click('a[download="authenticator.txt"]');
  let backup;
  for (let i = 0; i < 100; i++) {
    try { backup = await fs.readFile(path.join(dir, 'authenticator.txt'), 'utf8'); break; } catch { await new Promise(resolve => setTimeout(resolve, 100)); }
  }
  assert.ok(backup, 'real backup download completed');
  await fs.rm(dir, { recursive: true, force: true });
  const lines = backup.trim().split(/\r?\n/);
  assert.equal(lines.length, fixtures.length);
  assert.ok(lines.every(line => line.startsWith('otpauth://') && line.includes('secret=')));
  assert.match(await page.$eval('#infoContent', el => el.textContent), /Google Drive[\s\S]*OneDrive[\s\S]*Dropbox/);
  return ['Real backup download contains all five OTP URI fixtures; Google Drive, OneDrive and Dropbox controls retained'];
};
