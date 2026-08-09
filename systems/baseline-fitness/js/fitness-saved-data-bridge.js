/* Baseline Fitness — protected browser-owned Saved Data bridge v2.

   OWNERSHIP CONTRACT
   ------------------
   This module synchronises the browser-owned body profile and active-workout
   state with the protected Saved Data API. It does not calculate exercise
   progression, alter workout targets, render the page, poll for authorities or
   observe the document. Calisthenics progression belongs to the active
   generator/live-policy chain.
*/
(function (global) {
  'use strict';
  if (!global || !global.localStorage || typeof Storage === 'undefined' || global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE_V2__) return;
  global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE_V2__ = true;

  const API='/systems/baseline-fitness/api/fitness_state.php';
  const BODY_PREFIX='__bl_fitness_body_profile_v1__::';
  const STEP_PREFIX='__bl_fitness_workout_progress_v2__::';
  const nativeSet=Storage.prototype.setItem;
  const nativeRemove=Storage.prototype.removeItem;
  const timers=new Map();
  let enabled=false;
  let revision=0;
  let authName='';
  let syncing=false;
  let serverActive=null;

  function normalise(value) { return String(value || '').trim().toLocaleLowerCase('en-GB'); }
  function bodyKey() { return BODY_PREFIX+normalise(authName); }
  function parseJson(raw) {
    try { const value=JSON.parse(String(raw));return value && typeof value==='object'?value:null; }
    catch (_error) { return null; }
  }
  function activeFromKey(key,state) {
    const parts=String(key).slice(STEP_PREFIX.length).split('::');
    const planId=Number(parts[0] || 0);const sessionIndex=Number(parts[1] || 0);const owner=normalise(parts.slice(2).join('::'));
    if (!planId || !sessionIndex || owner!==normalise(authName) || !state || typeof state!=='object') return null;
    return { planId,sessionIndex,state };
  }
  function stepKey(active) { return `${STEP_PREFIX}${Number(active.planId) || 0}::${Number(active.sessionIndex) || 0}::${normalise(authName)}`; }
  function localBody() { return parseJson(global.localStorage.getItem(bodyKey())); }
  function localActive() {
    const suffix=`::${normalise(authName)}`;
    for (let index=0;index<global.localStorage.length;index+=1) {
      const key=global.localStorage.key(index) || '';
      if (!key.startsWith(STEP_PREFIX) || !key.endsWith(suffix)) continue;
      const active=activeFromKey(key,parseJson(global.localStorage.getItem(key)));
      if (active) return active;
    }
    return null;
  }
  function writeLocal(key,value) { nativeSet.call(global.localStorage,key,JSON.stringify(value)); }

  async function request(options={}) {
    const response=await fetch(API,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body?{ 'Content-Type':'application/json' }:{}),body:options.body?JSON.stringify(options.body):undefined });
    let data=null;try { data=await response.json(); }catch (_error) { data=null; }
    if (response.status===409 && data?.error==='saved_data_not_enabled') return { ok:false,disabled:true };
    return data && typeof data==='object'?data:{ ok:false,error:`http_${response.status}` };
  }
  function applyServer(data) {
    if (!data?.ok) return;
    revision=Number(data.revision) || 0;
    serverActive=data.activeWorkout && typeof data.activeWorkout==='object'?data.activeWorkout:null;
    if (data.profile && typeof data.profile==='object') writeLocal(bodyKey(),data.profile);
    if (serverActive?.state) writeLocal(stepKey(serverActive),serverActive.state);
  }
  async function reload() {
    const data=await request();
    if (data.disabled) { enabled=false;return data; }
    enabled=Boolean(data.ok);if (enabled) applyServer(data);return data;
  }
  async function post(body,retry=true) {
    if (!enabled || syncing) return null;syncing=true;
    try {
      const data=await request({ method:'POST',body:Object.assign({},body,{ expectedRevision:revision }) });
      if (data?.ok) { applyServer(data);return data; }
      if (retry && data?.error==='revision_conflict') { await reload();return post(body,false); }
      if (data?.error==='profile_conflict' && data.serverProfile) writeLocal(bodyKey(),data.serverProfile);
      if (data?.error==='active_workout_conflict' && data.serverActiveWorkout?.state) writeLocal(stepKey(data.serverActiveWorkout),data.serverActiveWorkout.state);
      return data;
    } finally { syncing=false; }
  }
  async function importExisting(server) {
    if (!enabled) return;const profile=localBody();const activeWorkout=localActive();const payload={ action:'import_local' };
    if (!server?.profile && profile) payload.profile=profile;
    if (!server?.activeWorkout && activeWorkout) payload.activeWorkout=activeWorkout;
    if (!Object.hasOwn(payload,'profile') && !Object.hasOwn(payload,'activeWorkout')) return;
    await post(payload);
  }
  function schedule(key,value) {
    clearTimeout(timers.get(key));
    timers.set(key,global.setTimeout(() => {
      timers.delete(key);if (!enabled) return;
      if (key===bodyKey()) post({ action:'save_profile',profile:value });
      else if (key.startsWith(STEP_PREFIX)) { const activeWorkout=activeFromKey(key,value);if (activeWorkout) post({ action:'save_active_workout',activeWorkout }); }
    },450));
  }

  Storage.prototype.setItem=function(key,rawValue) {
    const result=nativeSet.apply(this,arguments);
    if (this===global.localStorage && typeof key==='string') {
      const value=parseJson(rawValue);
      if (value && (key===bodyKey() || key.startsWith(STEP_PREFIX))) schedule(key,value);
    }
    return result;
  };
  Storage.prototype.removeItem=function(key) {
    const result=nativeRemove.apply(this,arguments);
    if (this===global.localStorage && enabled && typeof key==='string' && key.startsWith(STEP_PREFIX)) {
      const removed=activeFromKey(key,serverActive?.state || {});
      if (removed && serverActive && Number(serverActive.planId)===removed.planId && Number(serverActive.sessionIndex)===removed.sessionIndex) post({ action:'clear_active_workout' });
    }
    return result;
  };

  async function syncForAuth(snapshot) {
    const nextName=snapshot?.authed?String(snapshot.name || snapshot.user?.name || '').trim():'';
    if (!nextName) { enabled=false;authName='';revision=0;serverActive=null;return; }
    if (normalise(nextName)!==normalise(authName)) { revision=0;serverActive=null; }
    authName=nextName;const server=await reload();if (enabled) await importExisting(server);
  }
  function attachAuth() {
    const auth=global.BASELINE_auth;
    if (!auth || typeof auth.get!=='function') return;
    syncForAuth(auth.get());if (typeof auth.onChange==='function') auth.onChange(syncForAuth);
  }

  global.BASELINE_FITNESS_SAVED_DATA=Object.freeze({ reload,get enabled(){ return enabled; },get revision(){ return revision; } });
  attachAuth();
  global.addEventListener?.('pagehide',() => timers.forEach((timer) => clearTimeout(timer)),{ once:true });
})(typeof window!=='undefined'?window:globalThis);
