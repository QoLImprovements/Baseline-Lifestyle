import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const source = fs.readFileSync(path.join(root, 'sitewide/js/baseline-api.js'), 'utf8');

const plain = (value) => JSON.parse(JSON.stringify(value));

function loadClient({ protocol='https:', fetchImpl }={}){
  const warnings = [];
  const calls = [];
  const window = {
    location:{ protocol },
    console:{ warn:(...args)=>warnings.push(args) },
    fetch:async (...args)=>{
      calls.push(args);
      if(fetchImpl) return fetchImpl(...args);
      return {
        ok:true,
        status:200,
        headers:{ get:()=> 'application/json; charset=utf-8' },
        text:async ()=> '{"ok":true}',
      };
    },
  };
  vm.runInNewContext(source, { window }, { filename:'baseline-api.js' });
  return { api:window.BASELINE_api, calls, warnings };
}

test('the API client exposes the canonical server base', () => {
  const { api } = loadClient();
  assert.equal(api.base, '/api');
  assert.equal(api.isFile, false);
});

test('GET requests retain same-origin credentials and JSON response handling', async () => {
  const { api, calls } = loadClient();
  const result = await api.get('/api/me.php');
  assert.deepEqual(plain(result), { ok:true, status:200, data:{ ok:true } });
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], '/api/me.php');
  assert.equal(calls[0][1].method, 'GET');
  assert.equal(calls[0][1].credentials, 'same-origin');
  assert.equal(calls[0][1].headers.Accept, 'application/json');
});

test('POST requests retain the established JSON request body', async () => {
  const { api, calls } = loadClient();
  await api.post('/api/login.php', { identifier:'person', password:'secret' });
  assert.equal(calls[0][1].method, 'POST');
  assert.equal(calls[0][1].headers['Content-Type'], 'application/json');
  assert.equal(calls[0][1].body, '{"identifier":"person","password":"secret"}');
});

test('resource revisions are shared across independently loaded feature clients', () => {
  const { api } = loadClient();
  assert.equal(api.revisions.expected('fitness'), 0);
  assert.equal(api.revisions.remember('fitness', { revision:4 }), 4);
  assert.equal(api.revisions.expected('fitness'), 4);
  assert.deepEqual(plain(api.revisions.withExpected('fitness', { planId:9 })), {
    planId:9,
    expectedRevision:4,
  });
  assert.deepEqual(plain(api.revisions.withExpected('fitness', { planId:9,expectedRevision:2 })), {
    planId:9,
    expectedRevision:2,
  });
});

test('per-game bootstrap revisions retain independent conflict boundaries', () => {
  const { api } = loadClient();
  api.revisions.rememberMap('games', { pairs:3,trackcoin:8,invalid:-1 });
  assert.equal(api.revisions.expected('games:pairs'), 3);
  assert.equal(api.revisions.expected('games:trackcoin'), 8);
  assert.equal(api.revisions.expected('games:invalid'), 0);
  api.revisions.clear('games:pairs');
  assert.equal(api.revisions.expected('games:pairs'), 0);
});

test('HTML API failures remain identifiable without exposing an unbounded response', async () => {
  const html = '<!doctype html><body>' + 'failure '.repeat(100) + '</body>';
  const { api, warnings } = loadClient({ fetchImpl:async ()=>({
    ok:false,
    status:500,
    headers:{ get:()=> 'text/html' },
    text:async ()=> html,
  }) });
  const result = plain(await api.json('/api/login.php'));
  assert.equal(result.ok, false);
  assert.equal(result.status, 500);
  assert.equal(result.data.error, 'api_returned_html');
  assert.equal(result.data.endpoint, '/api/login.php');
  assert.equal(result.data.rawPreview.length, 220);
  assert.equal(warnings.length, 1);
});

test('network failures retain their stable error contract', async () => {
  const { api } = loadClient({ fetchImpl:async ()=>{ throw new Error('offline'); } });
  assert.deepEqual(plain(await api.json('/api/me.php')), {
    ok:false,
    status:0,
    data:{ ok:false, error:'network_error', endpoint:'/api/me.php' },
  });
});

test('local file previews do not attempt server requests', async () => {
  const { api, calls } = loadClient({ protocol:'file:' });
  assert.equal(api.base, './api');
  assert.equal(api.isFile, true);
  assert.deepEqual(plain(await api.get('./api/me.php')), {
    ok:false,
    status:0,
    data:{ ok:false, error:'server_required' },
  });
  assert.equal(calls.length, 0);
});
