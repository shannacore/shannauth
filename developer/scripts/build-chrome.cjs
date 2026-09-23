// Standalone Chrome-only build. No Git, Bash, formatter, or other browser target.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const sass = require('sass');
const root = path.resolve(__dirname, '..');
process.chdir(root);
function run(script, args) {
  const result = spawnSync(process.execPath, [require.resolve(script), ...args], {
    cwd: root, stdio: 'inherit', env: process.env,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
for (const directory of ['dist', 'chrome']) {
  fs.rmSync(path.join(root, directory), { recursive: true, force: true });
}
run('webpack-cli/bin/cli.js', ['--config', 'webpack.chrome.cjs']);
const output = path.join(root, 'chrome');
fs.mkdirSync(path.join(output, 'css'), { recursive: true });
for (const name of ['content', 'import', 'permissions', 'popup']) {
  const result = sass.compile(path.join(root, 'sass', `${name}.scss`), {
    style: 'compressed', sourceMap: false,
  });
  fs.writeFileSync(path.join(output, 'css', `${name}.css`), result.css);
}
fs.copyFileSync('sass/DroidSansMono.woff2', path.join(output, 'css/DroidSansMono.woff2'));
for (const name of ['dist', 'images', '_locales', 'view']) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
fs.copyFileSync('manifests/manifest-chrome.json', path.join(output, 'manifest.json'));
fs.copyFileSync('manifests/schema-chrome.json', path.join(output, 'schema.json'));
fs.copyFileSync('LICENSE', path.join(output, 'LICENSE'));
fs.copyFileSync('README-RUNTIME.md', path.join(output, 'README.md'));
console.log('Chrome 5.1.3 runtime built: chrome/ (no source maps).');
console.log('Load chrome/ in chrome://extensions. Optional cloud OAuth is unconfigured.');
