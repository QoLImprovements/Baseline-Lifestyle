import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here, '..');
const source = fs.readFileSync(path.join(root, 'sitewide/js/baseline-auth.js'), 'utf8');
const plain = (value) => JSON.parse(JSON.stringify(value));

function loadAuth({ isFile=false, cachedSession=null, responses=[] }={}){
  const calls = [];
  const events = [];
  const values = new Map();
  if(cachedSession) values.set('__bl_local_session_v1__', JSON.stringify(cachedSession));
  const store = {
    keys:{ session:'__bl_local_session_v1__' },
    read:(key, fallback)=>values.has(key) ? JSON.parse(values.get(key)) : fallback,
    write:(key, value)=>values.set(key, JSON.stringify(value)),
    del:(key)=>values.delete(key),
  };
  const api = {
    base:isFile ? './api' : '/api',
    isFile,
    json:async (url, options={})=>{
      calls.push({ url, options:plain(options) });
      const next = responses.shift();
      return typeof next === 'function' ? next(url, options) : (next || { ok:false, status:500, data:{ ok:false } });
    },
  };
  class CustomEvent {
    constructor(type, options){ this.type = type; this.detail = options && options.detail; }
  }
  const window = {
    BASELINE_api:api,
    BASELINE_store:store,
    CustomEvent,
    document:{ dispatchEvent:(event)=>events.push(event) },
  };
  vm.runInNewContext(source, { window, Set, Object, String, encodeURIComponent }, { filename:'baseline-auth.js' });
  return { auth:window.BASELINE_auth, calls, events, values };
}

test('obsolete cached account state is ignored until the server confirms authentication', () => {
  const { auth, values } = loadAuth({ cachedSession:{ name:'Cached Person', email:'cached@example.test' } });
  assert.deepEqual(plain(auth.get()), {
    authed:false,
    name:'',
    email:'',
    providers:{ password:true, google:false },
  });
  assert.equal(values.has('__bl_local_session_v1__'), false);
  assert.equal(Object.isFrozen(auth.state), true);
  assert.equal(auth.state.authed, false);
  assert.throws(()=>{ auth.state.authed = true; }, TypeError);
});

test('login validates input then updates server-derived state without creating a browser auth cache', async () => {
  const response = { ok:true, status:200, data:{
    ok:true,
    user:{ name:'Signed In', email:'signed@example.test' },
    providers:{ password:true, google:false },
  } };
  const { auth, calls, events, values } = loadAuth({ responses:[response] });
  assert.equal((await auth.login('', '')).data.error, 'missing_fields');
  assert.equal(calls.length, 0);

  const updates = [];
  auth.onChange(snapshot=>updates.push(plain(snapshot)));
  assert.equal((await auth.login(' person ', 'secret')).ok, true);
  assert.deepEqual(calls[0], {
    url:'/api/login.php',
    options:{ method:'POST', body:{ identifier:'person', password:'secret' } },
  });
  assert.equal(auth.state.authed, true);
  assert.equal(auth.state.name, 'Signed In');
  assert.equal(values.has('__bl_local_session_v1__'), false);
  assert.equal(updates.length, 1);
  assert.equal(events[0].type, 'baseline:auth');
});

test('refresh clears stale cached state when the server is signed out', async () => {
  const { auth, values } = loadAuth({
    cachedSession:{ name:'Stale', email:'stale@example.test' },
    responses:[{ ok:true, status:200, data:{ ok:true, authed:false, providers:{ password:true, google:false } } }],
  });
  const snapshot = await auth.refresh();
  assert.equal(snapshot.authed, false);
  assert.equal(auth.state.name, '');
  assert.equal(values.has('__bl_local_session_v1__'), false);
});

test('registration and password reset retain their established request contracts', async () => {
  const { auth, calls } = loadAuth({ responses:[
    { ok:true, status:201, data:{ ok:true, user:{ name:'New Person', email:'new@example.test' } } },
    { ok:true, status:200, data:{ ok:true } },
    { ok:true, status:200, data:{ ok:true, valid:true } },
    { ok:true, status:200, data:{ ok:true, user:{ name:'New Person', email:'new@example.test' } } },
  ] });
  await auth.register({ name:' New Person ', email:' new@example.test ', password:'password' });
  await auth.requestPasswordReset(' new@example.test ');
  await auth.verifyPasswordReset('selector.verifier');
  await auth.completePasswordReset('selector.verifier', 'replacement', 'replacement');
  assert.deepEqual(calls.map(call=>call.url), [
    '/api/register.php',
    '/api/forgot_password.php',
    '/api/password_reset.php?token=selector.verifier',
    '/api/password_reset.php',
  ]);
  assert.deepEqual(calls[3].options.body, {
    token:'selector.verifier',
    password:'replacement',
    passwordConfirm:'replacement',
  });
});

test('logout clears local state after the server refresh', async () => {
  const { auth, calls, values } = loadAuth({
    cachedSession:{ name:'Signed In', email:'signed@example.test' },
    responses:[
      { ok:true, status:200, data:{ ok:true } },
      { ok:true, status:200, data:{ ok:true, authed:false } },
    ],
  });
  const result = await auth.logout();
  assert.equal(result.ok, true);
  assert.deepEqual(calls.map(call=>call.url), ['/api/logout.php','/api/me.php']);
  assert.equal(values.has('__bl_local_session_v1__'), false);
  assert.equal(auth.state.authed, false);
});

test('file previews never attempt authentication requests', async () => {
  const { auth, calls } = loadAuth({ isFile:true, cachedSession:{ name:'Cached' } });
  assert.equal((await auth.login('person', 'secret')).data.error, 'server_required');
  assert.equal((await auth.requestPasswordReset('person@example.test')).data.error, 'server_required');
  assert.equal((await auth.refresh()).authed, false);
  assert.equal(calls.length, 0);
  assert.equal(auth.startGoogleSignIn().data.error, 'google_sign_in_removed');
});
