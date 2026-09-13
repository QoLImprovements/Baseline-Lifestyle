/* Baseline Lifestyle — Fitness Routine Saved Data revision + legacy-import bridge. */
(function(scope){
  'use strict';
  if(!scope.document || scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE__) return;
  scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE__ = true;

  const api = scope.BASELINE_api;
  if(!api || typeof scope.fetch !== 'function') return;
  const revisions = api.revisions;
  const nativeFetch = scope.fetch.bind(scope);
  const resource = 'fitness-routine';
  const routineStatePath = '/systems/baseline-fitness/api/routine_state.php';
  const endpoints = new Set([
    routineStatePath,
    '/systems/baseline-fitness/api/routine_groups.php',
  ]);
  const ACTIVE_LOCAL_PREFIXES = Object.freeze([
    '__bl_fitness_routine_v2__::',
    '__bl_fitness_routine_v1__::',
  ]);
  const LEGACY_IMPORT_PREFIX = '__bl_fitness_routine_legacy_import__::';
  let blocked = false;
  let currentOwner = '';
  let legacyImport = null;

  function endpointPath(url){
    try{
      return new URL(String(url || ''), scope.location?.href || 'https://baseline.invalid/').pathname;
    }catch(_error){
      return String(url || '').split('?')[0];
    }
  }

  function endpoint(url){
    return endpoints.has(endpointPath(url));
  }

  function normaliseOwner(value){
    return String(value || '').trim().toLocaleLowerCase('en-GB');
  }

  function authSnapshot(){
    try{
      const auth = scope.BASELINE_auth;
      return auth && typeof auth.get === 'function' ? auth.get() : null;
    }catch(_error){
      return null;
    }
  }

  function authenticatedOwner(snapshot = authSnapshot()){
    if(!snapshot?.authed) return '';
    return normaliseOwner(snapshot.name || snapshot.user?.name || '');
  }

  function importStorageKey(owner){
    return `${LEGACY_IMPORT_PREFIX}${normaliseOwner(owner)}`;
  }

  function parseLegacyRecord(raw, owner, sourceKey){
    try{
      const parsed = JSON.parse(String(raw || ''));
      if(!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
      return {
        schemaVersion:1,
        owner:normaliseOwner(owner),
        sourceKey:String(sourceKey || ''),
        capturedAt:new Date().toISOString(),
        data:{
          activities:Array.isArray(parsed.activities) ? parsed.activities : [],
          logs:parsed.logs && typeof parsed.logs === 'object' && !Array.isArray(parsed.logs) ? parsed.logs : {},
        },
      };
    }catch(_error){
      return null;
    }
  }

  function readQuarantined(owner){
    try{
      const raw = scope.localStorage?.getItem(importStorageKey(owner));
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && parsed.data && typeof parsed.data === 'object' ? parsed : null;
    }catch(_error){
      return null;
    }
  }

  function quarantineAuthenticatedLocal(snapshot = authSnapshot()){
    const owner = authenticatedOwner(snapshot);
    if(!owner) return null;
    currentOwner = owner;
    const storage = scope.localStorage;
    if(!storage) return null;

    let quarantined = readQuarantined(owner);
    try{
      if(!quarantined){
        for(const prefix of ACTIVE_LOCAL_PREFIXES){
          const sourceKey = `${prefix}${owner}`;
          const raw = storage.getItem(sourceKey);
          if(!raw) continue;
          const candidate = parseLegacyRecord(raw, owner, sourceKey);
          if(candidate){
            storage.setItem(importStorageKey(owner), JSON.stringify(candidate));
            quarantined = candidate;
            break;
          }
        }
      }
      // Authenticated routine data is server-owned. Active local copies are
      // never a normal-runtime authority; keep only the separate import copy.
      for(const prefix of ACTIVE_LOCAL_PREFIXES) storage.removeItem(`${prefix}${owner}`);
    }catch(_error){}
    legacyImport = quarantined;
    return quarantined;
  }

  function hideLegacyImport(){
    scope.document.getElementById('baselineFitnessRoutineLegacyImport')?.remove();
  }

  function failureMessage(code){
    if(code === 'revision_conflict') return 'This Fitness Routine changed elsewhere. Saving has stopped. Reload the latest server data before editing again.';
    return 'Saving Fitness Routine data failed. Saving has stopped; this change was not stored to your account.';
  }

  function showFailure(code){
    blocked = true;
    scope.document.documentElement.setAttribute('data-fitness-routine-save-blocked', String(code || 'save_failed'));
    let banner = scope.document.getElementById('baselineFitnessRoutineSaveFailure');
    if(!banner){
      banner = scope.document.createElement('div');
      banner.id = 'baselineFitnessRoutineSaveFailure';
      banner.setAttribute('role', 'alert');
      banner.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483647;padding:14px 16px;border:2px solid currentColor;border-radius:10px;background:Canvas;color:CanvasText;box-shadow:0 8px 30px rgba(0,0,0,.35);font:600 14px/1.4 system-ui,sans-serif;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap';
      const message = scope.document.createElement('span');
      message.dataset.fitnessRoutineFailureMessage = 'true';
      const reload = scope.document.createElement('button');
      reload.type = 'button';
      reload.textContent = 'Reload latest server data';
      reload.style.cssText = 'font:inherit;padding:8px 12px;cursor:pointer';
      reload.addEventListener('click', () => scope.location?.reload?.());
      banner.append(message, reload);
      (scope.document.body || scope.document.documentElement).appendChild(banner);
    }
    const message = banner.querySelector('[data-fitness-routine-failure-message]');
    if(message) message.textContent = failureMessage(String(code || 'save_failed'));
  }

  function blockedResponse(){
    const body = JSON.stringify({ ok:false, error:'save_blocked', resource });
    if(typeof scope.Response === 'function'){
      return new scope.Response(body, { status:409, headers:{ 'Content-Type':'application/json' } });
    }
    return {
      ok:false,
      status:409,
      clone(){ return this; },
      json:async () => JSON.parse(body),
      text:async () => body,
      headers:{ get:() => 'application/json' },
    };
  }

  function authoritativeRoutineResponse(response, payload){
    if(!payload?.ok || payload.hasRoutine) return response;
    const authoritative = Object.assign({}, payload, { hasRoutine:true });
    if(typeof scope.Response !== 'function') return response;
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/json');
    return new scope.Response(JSON.stringify(authoritative), {
      status:response.status,
      statusText:response.statusText,
      headers,
    });
  }

  async function importLegacyRoutine(){
    const record = legacyImport || readQuarantined(currentOwner);
    if(!record?.data || blocked) return;
    const result = await scope.fetch(routineStatePath, {
      method:'POST',
      credentials:'same-origin',
      headers:{ Accept:'application/json', 'Content-Type':'application/json' },
      body:JSON.stringify({
        activities:Array.isArray(record.data.activities) ? record.data.activities : [],
        logs:record.data.logs && typeof record.data.logs === 'object' ? record.data.logs : {},
      }),
    });
    let payload = null;
    try{ payload = await result.clone().json(); }catch(_error){}
    if(!result.ok || !payload?.ok) return;
    try{ scope.localStorage?.removeItem(importStorageKey(currentOwner)); }catch(_error){}
    legacyImport = null;
    hideLegacyImport();
    scope.location?.reload?.();
  }

  function showLegacyImport(){
    if(!legacyImport || scope.document.getElementById('baselineFitnessRoutineLegacyImport')) return;
    const banner = scope.document.createElement('div');
    banner.id = 'baselineFitnessRoutineLegacyImport';
    banner.setAttribute('role', 'status');
    banner.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483646;padding:14px 16px;border:2px solid currentColor;border-radius:10px;background:Canvas;color:CanvasText;box-shadow:0 8px 30px rgba(0,0,0,.3);font:600 14px/1.4 system-ui,sans-serif;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap';
    const message = scope.document.createElement('span');
    message.textContent = 'Legacy Fitness Routine data was found on this device. The server version remains authoritative unless you explicitly import the legacy copy.';
    const button = scope.document.createElement('button');
    button.type = 'button';
    button.textContent = 'Import legacy routine';
    button.style.cssText = 'font:inherit;padding:8px 12px;cursor:pointer';
    button.addEventListener('click', importLegacyRoutine);
    banner.append(message, button);
    (scope.document.body || scope.document.documentElement).appendChild(banner);
  }

  function attachAuthQuarantine(){
    const auth = scope.BASELINE_auth;
    if(!auth || typeof auth.get !== 'function') return;
    quarantineAuthenticatedLocal(auth.get());
    if(typeof auth.onChange === 'function') auth.onChange((snapshot)=>quarantineAuthenticatedLocal(snapshot));
  }

  // Register this before the Fitness workspace DOM-ready listener. If auth is
  // already available, quarantine immediately as well.
  attachAuthQuarantine();
  if(scope.document.readyState === 'loading'){
    scope.document.addEventListener('DOMContentLoaded', attachAuthQuarantine, { once:true });
  }

  scope.fetch = async function(input, init){
    const url = typeof input === 'string' || (typeof URL !== 'undefined' && input instanceof URL)
      ? String(input)
      : String(input?.url || '');
    if(!endpoint(url)) return nativeFetch(input, init);

    const path = endpointPath(url);
    const options = Object.assign({}, init || {});
    const method = String(options.method || input?.method || 'GET').toUpperCase();
    const mutating = method !== 'GET' && method !== 'HEAD';

    // The old workspace reads local data immediately before its GET. Capture
    // and remove that copy here as a final guard before the GET can resolve.
    if(method === 'GET') quarantineAuthenticatedLocal();

    if(mutating){
      if(blocked) return blockedResponse();
      if(typeof options.body === 'string'){
        try{
          const body = JSON.parse(options.body);
          if(body && typeof body === 'object' && !Array.isArray(body)){
            options.body = JSON.stringify(revisions?.withExpected?.(resource, body) || Object.assign({ expectedRevision:0 }, body));
          }
        }catch(_error){}
      }
    }

    let response;
    try{
      response = await nativeFetch(input, options);
    }catch(error){
      if(mutating) showFailure('network_error');
      throw error;
    }

    let payload = null;
    try{ payload = await response.clone().json(); }catch(_error){}
    revisions?.remember?.(resource, payload);
    if(mutating && (!response.ok || !payload?.ok)) showFailure(payload?.error || `http_${response.status}`);

    if(method === 'GET' && path === routineStatePath && payload?.ok){
      // Successful empty server state is still authoritative. The legacy
      // workspace's `hasRoutine` gate must never auto-upload a local copy.
      if(!payload.hasRoutine && legacyImport) showLegacyImport();
      return authoritativeRoutineResponse(response, payload);
    }
    return response;
  };

  scope.BASELINE_FitnessRoutineSavedDataBridge = Object.freeze({
    resource,
    isBlocked:() => blocked,
    legacyImportAvailable:() => Boolean(legacyImport || readQuarantined(currentOwner)),
    importLegacy:importLegacyRoutine,
  });
})(window);
