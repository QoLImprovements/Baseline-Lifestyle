import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const source = fs.readFileSync(path.join(root, 'sitewide/js/baseline-store.js'), 'utf8');

function loadStore({ protocol='https:', storage }={}){
  const values = new Map();
  const localStorage = storage || {
    getItem:(key)=>values.has(key) ? values.get(key) : null,
    setItem:(key, value)=>values.set(key, value),
    removeItem:(key)=>values.delete(key),
  };
  const window = {
    location:{ protocol },
    BASELINE_api:{ isFile:protocol === 'file:' },
    localStorage,
  };
  vm.runInNewContext(source, { window }, { filename:'baseline-store.js' });
  return { store:window.BASELINE_store, values };
}

test('the local cache exposes the established stable keys', () => {
  const { store } = loadStore();
  assert.deepEqual(JSON.parse(JSON.stringify(store.keys)), {
    users:'__bl_local_users_v1__',
    session:'__bl_local_session_v1__',
    fitnessPlan:'__bl_fitness_plan_v1__',
    voiceSettings:'__baseline_voice_settings_v1__',
  });
});

test('values retain JSON serialization and deletion behavior', () => {
  const { store, values } = loadStore();
  store.write('contract', { enabled:true, count:2 });
  assert.equal(values.get('contract'), '{"enabled":true,"count":2}');
  assert.deepEqual(JSON.parse(JSON.stringify(store.read('contract', null))), { enabled:true, count:2 });
  store.del('contract');
  assert.equal(values.has('contract'), false);
});

test('missing, malformed and inaccessible storage return the supplied fallback', () => {
  const normal = loadStore().store;
  assert.equal(normal.read('missing', 'fallback'), 'fallback');

  const malformed = loadStore({ storage:{
    getItem:()=>'{broken',
    setItem:()=>{},
    removeItem:()=>{},
  } }).store;
  assert.equal(malformed.read('broken', 'fallback'), 'fallback');

  const denied = loadStore({ storage:{
    getItem:()=>{ throw new Error('denied'); },
    setItem:()=>{ throw new Error('denied'); },
    removeItem:()=>{ throw new Error('denied'); },
  } }).store;
  assert.equal(denied.read('denied', 'fallback'), 'fallback');
  assert.doesNotThrow(()=>denied.write('denied', true));
  assert.doesNotThrow(()=>denied.del('denied'));
});

test('user cache keys remain trimmed and case-insensitive', () => {
  const { store } = loadStore();
  assert.equal(store.userKey('favs_food', '  Person Name  '), 'favs_food::person name');
});

test('file-preview state follows the API boundary', () => {
  assert.equal(loadStore({ protocol:'file:' }).store.isFile, true);
  assert.equal(loadStore().store.isFile, false);
});
