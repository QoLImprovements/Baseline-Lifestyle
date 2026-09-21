/* Baseline Fitness — protected Saved Data bridge v3.

   OWNERSHIP CONTRACT
   ------------------
   Account Saved Data is the only persistent authority for body profile,
   active-workout and progression-history state. Browser keys are compatibility
   mirrors for the current runtime only; retired browser saves/import candidates
   are discarded before account hydration and are never offered for import.
   This module does not calculate exercise progression or alter workout targets.
*/
(function (global) {
  'use strict';
  if (!global || !global.localStorage || typeof Storage === 'undefined' || global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE_V2__) return;
  global.__BASELINE_FITNESS_SAVED_DATA_BRIDGE_V2__ = true;

  const API='/systems/baseline-fitness/api/fitness_state.php';
  const BODY_PREFIX='__bl_fitness_body_profile_v1__::';
  const STEP_PREFIX='__bl_fitness_workout_progress_v2__::';
  const OUTCOME_PREFIX='__bl_fitness_exercise_outcomes_v4__::';
  const FAILURE_PREFIX='__bl_fitness_exercise_failed_sessions_v3__::';
  const RETIRED_IMPORT_BACKUP_PREFIX='__bl_fitness_saved_data_import_backup_v1__::';
  const nativeGet=Storage.prototype.getItem;
  const nativeSet=Storage.prototype.setItem;
  const nativeRemove=Storage.prototype.removeItem;
  const timers=new Map();
  let enabled=false;
  let savedDataDisabled=false;
  let revision=0;
  let authName='';
  let syncing=false;
  let serverActive=null;
  let saveBlocked=false;
  let lastError='';

  function normalise(value) { return String(value || '').trim().toLocaleLowerCase('en-GB'); }
  function bodyKey() { return BODY_PREFIX+normalise(authName); }
  function outcomeKey() { return OUTCOME_PREFIX+normalise(authName); }
  function failureKey() { return FAILURE_PREFIX+normalise(authName); }
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
  function purgeRetiredBrowserState() {
    const owner=normalise(authName);
    if (!owner) return;
    try {
      nativeRemove.call(global.localStorage,bodyKey());
      nativeRemove.call(global.localStorage,outcomeKey());
      nativeRemove.call(global.localStorage,failureKey());
      const suffix=`::${owner}`;
      const staleSteps=[];
      for (let index=0;index<global.localStorage.length;index+=1) {
        const key=global.localStorage.key(index) || '';
        if (key.startsWith(STEP_PREFIX) && key.endsWith(suffix)) staleSteps.push(key);
      }
      staleSteps.forEach((key)=>nativeRemove.call(global.localStorage,key));
      ['profile','activeWorkout','progressionHistory'].forEach((kind)=>{
        nativeRemove.call(global.localStorage,`${RETIRED_IMPORT_BACKUP_PREFIX}${owner}::${kind}`);
      });
    } catch (_error) {}
  }
  function writeLocal(key,value) { nativeSet.call(global.localStorage,key,JSON.stringify(value)); }
  function revisionClient() { return global.BASELINE_api?.revisions || null; }
  function rememberRevision(data) {
    const remembered=revisionClient()?.remember?.('fitness',data);
    if (Number.isInteger(Number(remembered))) revision=Number(remembered);
  }
  function revisionedBody(body) {
    return revisionClient()?.withExpected?.('fitness',body) || Object.assign({},body,{ expectedRevision:revision });
  }

  async function request(options={}) {
    const response=await fetch(API,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body?{ 'Content-Type':'application/json' }:{}),body:options.body?JSON.stringify(options.body):undefined });
    let data=null;try { data=await response.json(); }catch (_error) { data=null; }
    if (response.status===409 && data?.error==='saved_data_not_enabled') return { ok:false,disabled:true };
    return data && typeof data==='object'?data:{ ok:false,error:`http_${response.status}` };
  }
  function applyServer(data) {
    if (!data?.ok) return;
    revision=Number(data.revision) || 0;
    rememberRevision(data);
    serverActive=data.activeWorkout && typeof data.activeWorkout==='object'?data.activeWorkout:null;
    if (data.profile && typeof data.profile==='object') writeLocal(bodyKey(),data.profile);
    if (serverActive?.state) writeLocal(stepKey(serverActive),serverActive.state);
    const progression=data.progressionHistory && typeof data.progressionHistory==='object'?data.progressionHistory:{ outcomes:[],failures:[] };
    writeLocal(outcomeKey(),Array.isArray(progression.outcomes)?progression.outcomes:[]);
    writeLocal(failureKey(),Array.isArray(progression.failures)?progression.failures:[]);
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-progression-history-updated')); } catch (_error) {}
  }
  function renderAuthorityStatus() {
    const existing=document.getElementById('fitnessSavedDataAuthorityStatus');
    if (!saveBlocked) { existing?.remove();return; }
    const host=document.querySelector('main')||document.body;
    if (!host) return;
    const panel=existing||document.createElement('div');
    panel.id='fitnessSavedDataAuthorityStatus';
    panel.className='card';
    panel.setAttribute('data-fitness-save-blocked','true');
    panel.innerHTML='<strong>Fitness saving has stopped.</strong><p class="note">The authoritative account Fitness data could not be safely saved. Reload the account copy before making more persistent changes.</p>';
    const button=document.createElement('button');
    button.type='button';
    button.textContent='Reload account Fitness data';
    button.addEventListener('click',()=>reload());
    panel.appendChild(button);
    if (!existing) host.prepend(panel);
  }
  function blockSaving(error) {
    saveBlocked=true;
    lastError=String(error||'save_failed');
    document.documentElement.setAttribute('data-fitness-server-save-error',lastError);
    renderAuthorityStatus();
  }
  async function reload() {
    try {
      const data=await request();
      if (data.disabled) { enabled=false;savedDataDisabled=true;return data; }
      savedDataDisabled=false;
      enabled=Boolean(data.ok);
      if (enabled) {
        applyServer(data);
        saveBlocked=false;
        lastError='';
        document.documentElement.removeAttribute('data-fitness-server-save-error');
        renderAuthorityStatus();
      }
      return data;
    } catch (error) {
      enabled=false;
      savedDataDisabled=false;
      blockSaving(error&&error.message||'fitness_load_failed');
      return {ok:false,error:lastError};
    }
  }
  async function post(body) {
    if (!enabled || syncing || saveBlocked) return null;syncing=true;
    try {
      const data=await request({ method:'POST',body:revisionedBody(body) });
      if (data?.ok) { applyServer(data);return data; }
      blockSaving(data?.error||'save_failed');
      return data;
    } catch (error) {
      blockSaving(error&&error.message||'save_failed');
      return {ok:false,error:lastError};
    } finally { syncing=false; }
  }
  async function saveProgressionHistory(value) {
    const history=value && typeof value==='object'?value:{};
    return post({
      action:'save_progression_history',
      progressionHistory:{
        outcomes:Array.isArray(history.outcomes)?history.outcomes:[],
        failures:Array.isArray(history.failures)?history.failures:[],
      },
    });
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
    if (this===global.localStorage && typeof key==='string') {
      if (saveBlocked && (key===bodyKey() || key.startsWith(STEP_PREFIX))) {
        renderAuthorityStatus();
        return;
      }
    }
    const result=nativeSet.apply(this,arguments);
    if (this===global.localStorage && typeof key==='string') {
      const value=parseJson(rawValue);
      if (value && (key===bodyKey() || key.startsWith(STEP_PREFIX))) schedule(key,value);
    }
    return result;
  };
  Storage.prototype.removeItem=function(key) {
    if (this===global.localStorage && typeof key==='string') {
      if (saveBlocked && (key===bodyKey() || key.startsWith(STEP_PREFIX))) {
        renderAuthorityStatus();
        return;
      }
    }
    const result=nativeRemove.apply(this,arguments);
    if (this===global.localStorage && enabled && typeof key==='string' && key.startsWith(STEP_PREFIX)) {
      const removed=activeFromKey(key,serverActive?.state || {});
      if (removed && serverActive && Number(serverActive.planId)===removed.planId && Number(serverActive.sessionIndex)===removed.sessionIndex) post({ action:'clear_active_workout' });
    }
    return result;
  };

  async function syncForAuth(snapshot) {
    const nextName=snapshot?.authed?String(snapshot.name || snapshot.user?.name || '').trim():'';
    if (!nextName) {
      enabled=false;savedDataDisabled=false;authName='';revision=0;serverActive=null;
      return;
    }
    if (normalise(nextName)!==normalise(authName)) {
      revision=0;serverActive=null;saveBlocked=false;lastError='';
    }
    authName=nextName;
    purgeRetiredBrowserState();
    await reload();
  }
  function attachAuth() {
    const auth=global.BASELINE_auth;
    if (!auth || typeof auth.get!=='function') return;
    syncForAuth(auth.get());if (typeof auth.onChange==='function') auth.onChange(syncForAuth);
  }

  global.BASELINE_FITNESS_SAVED_DATA=Object.freeze({
    reload,
    get enabled(){ return enabled; },
    get savedDataDisabled(){ return savedDataDisabled; },
    get revision(){ return revision; },
    saveProgressionHistory
  });
  attachAuth();
  global.addEventListener?.('pagehide',() => timers.forEach((timer) => clearTimeout(timer)),{ once:true });
})(typeof window!=='undefined'?window:globalThis);
