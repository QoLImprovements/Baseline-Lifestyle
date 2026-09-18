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
  const IMPORT_BACKUP_PREFIX='__bl_fitness_saved_data_import_backup_v1__::';
  const nativeGet=Storage.prototype.getItem;
  const nativeSet=Storage.prototype.setItem;
  const nativeRemove=Storage.prototype.removeItem;
  const timers=new Map();
  let enabled=false;
  let revision=0;
  let authName='';
  let syncing=false;
  let serverActive=null;
  let saveBlocked=false;
  let lastError='';
  let imports={profile:null,activeWorkout:null};

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
  function importBackupKey(kind) { return IMPORT_BACKUP_PREFIX+normalise(authName)+'::'+kind; }
  function readImportBackup(kind) { return parseJson(nativeGet.call(global.localStorage,importBackupKey(kind))); }
  function writeImportBackup(kind,value) { if (value) nativeSet.call(global.localStorage,importBackupKey(kind),JSON.stringify(value)); }
  function clearImportBackup(kind) { nativeRemove.call(global.localStorage,importBackupKey(kind)); }
  function equivalent(left,right) { try { return JSON.stringify(left)===JSON.stringify(right); } catch (_error) { return false; } }
  function equivalentActive(left,right) {
    if (!left || !right) return false;
    return Number(left.planId)===Number(right.planId)
      && Number(left.sessionIndex)===Number(right.sessionIndex)
      && equivalent(left.state,right.state);
  }
  function quarantineLegacyLocal() {
    const profile=localBody();
    if (profile) {
      if (!readImportBackup('profile')) writeImportBackup('profile',profile);
      nativeRemove.call(global.localStorage,bodyKey());
    }
    const activeWorkout=localActive();
    if (activeWorkout) {
      if (!readImportBackup('activeWorkout')) writeImportBackup('activeWorkout',activeWorkout);
      nativeRemove.call(global.localStorage,stepKey(activeWorkout));
    }
  }
  function prepareImportCandidates(server) {
    const profile=readImportBackup('profile');
    const activeWorkout=readImportBackup('activeWorkout');
    imports={profile:null,activeWorkout:null};
    if (profile) {
      if (server?.profile && equivalent(profile,server.profile)) clearImportBackup('profile');
      else imports.profile=profile;
    }
    if (activeWorkout) {
      if (server?.activeWorkout && equivalentActive(activeWorkout,server.activeWorkout)) clearImportBackup('activeWorkout');
      else imports.activeWorkout=activeWorkout;
    }
    renderMigrationReview();
  }
  function hasImportCandidate() { return Boolean(imports.profile||imports.activeWorkout); }
  function importKindForKey(key) {
    if (key===bodyKey()) return 'profile';
    if (String(key).startsWith(STEP_PREFIX)) return 'activeWorkout';
    return '';
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
      if (data.disabled) { enabled=false;return data; }
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
      blockSaving(error&&error.message||'fitness_load_failed');
      return {ok:false,error:lastError};
    }
  }
  async function post(body) {
    if (!enabled || syncing || saveBlocked) return null;syncing=true;
    try {
      const data=await request({ method:'POST',body:revisionedBody(body) });
      if (data?.ok) { applyServer(data);return data; }
      if (data?.error==='profile_conflict' && data.serverProfile) writeLocal(bodyKey(),data.serverProfile);
      if (data?.error==='active_workout_conflict' && data.serverActiveWorkout?.state) writeLocal(stepKey(data.serverActiveWorkout),data.serverActiveWorkout.state);
      blockSaving(data?.error||'save_failed');
      return data;
    } catch (error) {
      blockSaving(error&&error.message||'save_failed');
      return {ok:false,error:lastError};
    } finally { syncing=false; }
  }
  function keepAccount(kind) {
    if (!Object.hasOwn(imports,kind) || !imports[kind]) return false;
    clearImportBackup(kind);
    imports[kind]=null;
    renderMigrationReview();
    return true;
  }
  async function importLegacy(kind) {
    if (!enabled || saveBlocked || !Object.hasOwn(imports,kind) || !imports[kind]) return false;
    const payload={action:'import_local'};
    if (kind==='profile') payload.profile=imports.profile;
    else if (kind==='activeWorkout') payload.activeWorkout=imports.activeWorkout;
    else return false;
    const result=await post(payload);
    if (!result?.ok) return false;
    clearImportBackup(kind);
    imports[kind]=null;
    renderMigrationReview();
    return true;
  }
  function renderMigrationReview() {
    const existing=document.getElementById('fitnessSavedDataMigrationReview');
    if (!hasImportCandidate()) { existing?.remove();return; }
    const host=document.querySelector('main')||document.body;
    if (!host) return;
    const panel=existing||document.createElement('div');
    panel.id='fitnessSavedDataMigrationReview';
    panel.className='card';
    panel.setAttribute('data-fitness-migration-review','true');
    panel.innerHTML='<strong>Browser Fitness data is available.</strong><p class="note">Account data is authoritative, including an empty account state. The browser copy was preserved and was not imported automatically.</p>';
    const labels={profile:'Body profile',activeWorkout:'Active workout'};
    Object.keys(labels).forEach(kind=>{
      if (!imports[kind]) return;
      const row=document.createElement('div');
      row.className='actions';
      const label=document.createElement('span');
      label.textContent=labels[kind];
      const importButton=document.createElement('button');
      importButton.type='button';
      importButton.textContent='Import browser copy';
      importButton.addEventListener('click',()=>importLegacy(kind));
      const keepButton=document.createElement('button');
      keepButton.type='button';
      keepButton.textContent='Keep account copy';
      keepButton.addEventListener('click',()=>keepAccount(kind));
      row.append(label,importButton,keepButton);
      panel.appendChild(row);
    });
    if (!existing) host.prepend(panel);
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
      const importKind=importKindForKey(key);
      if (imports[importKind]) {
        renderMigrationReview();
        return;
      }
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
      const importKind=importKindForKey(key);
      if (imports[importKind]) {
        renderMigrationReview();
        return;
      }
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
      enabled=false;authName='';revision=0;serverActive=null;imports={profile:null,activeWorkout:null};
      renderMigrationReview();
      return;
    }
    if (normalise(nextName)!==normalise(authName)) {
      revision=0;serverActive=null;saveBlocked=false;lastError='';imports={profile:null,activeWorkout:null};
    }
    authName=nextName;
    quarantineLegacyLocal();
    const server=await reload();
    if (enabled) prepareImportCandidates(server);
  }
  function attachAuth() {
    const auth=global.BASELINE_auth;
    if (!auth || typeof auth.get!=='function') return;
    syncForAuth(auth.get());if (typeof auth.onChange==='function') auth.onChange(syncForAuth);
  }

  global.BASELINE_FITNESS_SAVED_DATA=Object.freeze({
    reload,
    get enabled(){ return enabled; },
    get revision(){ return revision; },
    hasImportCandidate,
    importLegacy,
    keepAccount
  });
  attachAuth();
  global.addEventListener?.('pagehide',() => timers.forEach((timer) => clearTimeout(timer)),{ once:true });
})(typeof window!=='undefined'?window:globalThis);
