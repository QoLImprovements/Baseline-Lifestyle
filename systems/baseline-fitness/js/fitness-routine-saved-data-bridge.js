/* Baseline Lifestyle — Fitness Routine Saved Data revision bridge. */
(function(scope){
  'use strict';
  if(!scope.document || scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE__) return;
  scope.__BASELINE_FITNESS_ROUTINE_SAVED_DATA_BRIDGE__ = true;

  const api = scope.BASELINE_api;
  if(!api || typeof scope.fetch !== 'function') return;
  const revisions = api.revisions;
  const nativeFetch = scope.fetch.bind(scope);
  const resource = 'fitness-routine';
  const endpoints = new Set([
    '/systems/baseline-fitness/api/routine_state.php',
    '/systems/baseline-fitness/api/routine_groups.php',
  ]);
  let blocked = false;

  function endpoint(url){
    try{
      return endpoints.has(new URL(String(url || ''), scope.location?.href || 'https://baseline.invalid/').pathname);
    }catch(_error){
      return endpoints.has(String(url || '').split('?')[0]);
    }
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

  scope.fetch = async function(input, init){
    const url = typeof input === 'string' || (typeof URL !== 'undefined' && input instanceof URL)
      ? String(input)
      : String(input?.url || '');
    if(!endpoint(url)) return nativeFetch(input, init);

    const options = Object.assign({}, init || {});
    const method = String(options.method || input?.method || 'GET').toUpperCase();
    const mutating = method !== 'GET' && method !== 'HEAD';

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
    return response;
  };

  scope.BASELINE_FitnessRoutineSavedDataBridge = Object.freeze({
    resource,
    isBlocked:() => blocked,
  });
})(window);
