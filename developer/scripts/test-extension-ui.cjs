const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'src/components/Popup/EntryComponent.vue'), 'utf8');
const script = source.match(/<script lang="ts">([\s\S]*?)<\/script>/)[1];
const output = ts.transpileModule(script, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const localRequire = createRequire(path.join(root, 'src/components/Popup/EntryComponent.vue'));
const moduleStub = { exports: {} };
const CodeState = { Encrypted: 'Encrypted', Invalid: 'Invalid' };
new Function('require', 'module', 'exports', output)((id) => {
  if (id === 'vue') return { default: { extend: (options) => options } };
  if (id === '../../models/otp') return { CodeState };
  if (id.endsWith('.svg') || id.startsWith('../../')) return {};
  return localRequire(id);
}, moduleStub, moduleStub.exports);
const methods = moduleStub.exports.default.methods;
const context = { i18n: { encrypted: 'Encrypted', invalid: 'Invalid' } };

test('OTP display groups six and eight digits without changing raw data', () => {
  assert.equal(methods.showCode.call(context, '123456'), '123 456');
  assert.equal(methods.showCode.call(context, '12345678'), '1234 5678');
  assert.equal(methods.showCode.call(context, 'ABCDE'), 'ABCDE');
  assert.equal(methods.showCode.call(context, '1234567890'), '1234567890');
  assert.equal(methods.showCode.call(context, '&bull;&bull;'), '&bull;&bull;');
  assert.equal(methods.showCode.call(context, CodeState.Encrypted), 'Encrypted');
  assert.equal(methods.showCode.call(context, CodeState.Invalid), 'Invalid');
});

test('clipboard and autofill still consume the raw code, never display grouping', () => {
  assert.match(source, /codeClipboard\.value = entry\.code/);
  assert.match(source, /code: entry\.code/);
  assert.match(source, /v-on:click\.stop="showQr\(entry\)"/);
});
