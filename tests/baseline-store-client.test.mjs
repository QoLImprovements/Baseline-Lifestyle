import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const source = fs.readFileSync(path.join(root, 'sitewide/js/baseline-store.js'), 'utf8');
const plain = value => JSON.parse(JSON.stringify(value));

function loadStore({ protocol='https:' }={}){
  const window = {
    location:{ protocol },
    BASELINE_api:{ isFile:protocol === 'file:' },
  };
  vm.runInNewContext(source, { window, Map, Object, String, JSON }, { filename:'baseline-store.js' });
  return window.BASELINE_store;
}

test('the compatibility store exposes the established stable keys without browser persistence', () => {
  const store = loadStore();
  assert.deepEqual(plain(store.keys), {
    users:'__bl_local_users_v1__',
    session:'__bl_local_session_v1__',
    fitnessPlan:'__bl_fitness_plan_v1__',
    voiceSettings:'__baseline_voice_settings_v1__',
  });
  assert.equal(store.persistent, false);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|Storage\.prototype/);
});

test('values are memory-only, cloned on write/read, and deletable', () => {
  const store = loadStore();
  const original={ enabled:true, nested:{ count:2 } };
  store.write('contract', original);
  original.nested.count=99;
  assert.deepEqual(plain(store.read('contract', null)), { enabled:true, nested:{ count:2 } });
  const returned=store.read('contract', null);
  returned.nested.count=88;
  assert.deepEqual(plain(store.read('contract', null)), { enabled:true, nested:{ count:2 } });
  store.del('contract');
  assert.equal(store.read('contract', 'fallback'), 'fallback');
});

test('missing values return the supplied fallback and clear removes all memory state', () => {
  const store = loadStore();
  assert.equal(store.read('missing', 'fallback'), 'fallback');
  store.write('a',1);
  store.write('b',2);
  assert.equal(store.read('a',null),1);
  assert.equal(store.read('b',null),2);
  store.clear();
  assert.equal(store.read('a','cleared'),'cleared');
  assert.equal(store.read('b','cleared'),'cleared');
});

test('user cache keys remain trimmed and case-insensitive', () => {
  const store = loadStore();
  assert.equal(store.userKey('favs_food', '  Person Name  '), 'favs_food::person name');
});

test('file-preview state follows the API boundary', () => {
  assert.equal(loadStore({ protocol:'file:' }).isFile, true);
  assert.equal(loadStore().isFile, false);
});
