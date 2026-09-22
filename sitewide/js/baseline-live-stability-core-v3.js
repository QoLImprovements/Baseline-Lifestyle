/* Baseline Lifestyle — live route, first-paint and persistence stability. */
(function(){
  'use strict';

  const BUILD = 'BASELINE_LIVE_STABILITY_20260922_1';
  if(window.__BASELINE_LIVE_STABILITY__) return;
  window.__BASELINE_LIVE_STABILITY__ = BUILD;
  try{ document.documentElement.setAttribute('data-baseline-live-stability', BUILD); }catch(_error){}

  const RECIPE_PENDING_KEY = '__baseline_pending_recipe_route_v1__';
  const BADMINTON_STORAGE_KEY = '__baseline_badminton_session_v4__';
  const BADMINTON_API = '/systems/baseline-badminton-session/api/badminton_session.php';

  function safeJson(raw, fallback){
    try{ return JSON.parse(String(raw || '')); }catch(_error){ return fallback; }
  }

  function cssEscape(value){
    const text = String(value || '');
    try{ if(window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(text); }catch(_error){}
    return text.replace(/(["\\])/g, '\\$1');
  }

  function currentRecipeRoute(){
    const match = String(location.pathname || '').match(/^\/(baseline-food-approach|baseline-natural-skincare)\/recipes\/([^/?#]+)\/?$/i);
    if(!match) return null;
    let slug = match[2];
    try{ slug = decodeURIComponent(slug); }catch(_error){}
    return { app:match[1].toLowerCase(), slug:String(slug || '').trim().toLowerCase() };
  }

  function redirectStandaloneRecipeShell(){
    const route = currentRecipeRoute();
    if(!route || !route.slug) return false;
    const standalone = document.body && (
      document.body.classList.contains('phase4b-recipe-shell') ||
      document.querySelector('.phase4b-recipe-shell, .recipe-shell-topbar')
    );
    if(!standalone) return false;
    try{ sessionStorage.setItem(RECIPE_PENDING_KEY, JSON.stringify(route)); }catch(_error){}
    const target = route.app === 'baseline-natural-skincare'
      ? '/baseline-natural-skincare/recipes'
      : '/baseline-food-approach/recipes';
    location.replace(target);
    return true;
  }

  function restorePendingRecipe(){
    let pending = null;
    try{ pending = safeJson(sessionStorage.getItem(RECIPE_PENDING_KEY), null); }catch(_error){}
    if(!pending || !pending.slug) return;
    const path = String(location.pathname || '').toLowerCase();
    const expectedBase = pending.app === 'baseline-natural-skincare'
      ? '/baseline-natural-skincare/'
      : '/baseline-food-approach/';
    if(path.indexOf(expectedBase) !== 0) return;

    let attempts = 0;
    const open = function(){
      attempts += 1;
      const selector = '[data-recipe-slug="' + cssEscape(pending.slug) + '"]';
      const card = document.querySelector(selector);
      const recipeId = card && (card.id || card.getAttribute('data-recipe-id'));
      if(card && recipeId && typeof window.BASELINE_openRecipe === 'function'){
        try{ sessionStorage.removeItem(RECIPE_PENDING_KEY); }catch(_error){}
        window.BASELINE_openRecipe(recipeId, { silentHistory:false, noScroll:true });
        return;
      }
      if(attempts < 80) window.setTimeout(open, 50);
    };
    open();
  }

  function installFastHomeNavigation(){
    document.addEventListener('click', function(event){
      if(event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if(!link) return;
      let url;
      try{ url = new URL(link.href, location.href); }catch(_error){ return; }
      if(url.origin !== location.origin || url.pathname !== '/home/1') return;
      if(String(location.pathname || '') === '/home/1') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign('/home/1');
    }, true);
  }

  function markGamesStable(){
    if(!document.body || document.body.dataset.app !== 'games') return;
    document.documentElement.removeAttribute('data-baseline-games-stable');
    const startedAt = Date.now();
    const finish = function(){
      const list = document.getElementById('gamesList');
      const auth = document.getElementById('authStateNote');
      const ready = !!(
        document.documentElement.getAttribute('data-baseline-games-hub-js') &&
        list && list.children.length &&
        auth && String(auth.textContent || '').trim()
      );
      if(ready || Date.now() - startedAt > 2600){
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            document.documentElement.setAttribute('data-baseline-games-stable','true');
          });
        });
        return;
      }
      window.setTimeout(finish, 50);
    };
    finish();
  }

  function correctVoiceConfigurationMessage(){
    if(!document.body || document.body.dataset.app !== 'fitness') return;
    const update = function(){
      const prompt = document.getElementById('voiceWorkoutPrompt');
      if(!prompt) return;
      const message = String(prompt.textContent || '').trim();
      if([
        'Enhanced voice recognition is not configured on the server.',
        'Voice recognition could not connect. Spoken responses are off, but that setting does not disable recognition.'
      ].includes(message)){
        prompt.textContent = 'Voice recognition unavailable.';
      }
    };
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList:true, subtree:true, characterData:true });
    update();
  }

  function installBadmintonSavedDataReconciliation(){
    if(!document.body || document.body.dataset.app !== 'badminton' || !window.fetch || window.__BASELINE_BADMINTON_CANONICAL_SAVED_DATA__) return;
    let lastObserved = 0;
    let inFlight = false;
    let revision = null;
    let booted = false;

    function localState(){
      let raw = '';
      try{ raw = localStorage.getItem(BADMINTON_STORAGE_KEY) || ''; }catch(_error){}
      const parsed = safeJson(raw, null);
      return parsed && typeof parsed === 'object' ? parsed : null;
    }

    async function request(method, body){
      const options = { method:method, credentials:'same-origin', headers:{ Accept:'application/json' } };
      if(body !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
      }
      const response = await fetch(BADMINTON_API, options);
      const data = await response.json().catch(function(){ return { ok:false, error:'bad_json' }; });
      data.__status = response.status;
      return data;
    }

    function announceFailure(error){
      const text = 'Badminton could not save to the server' + (error ? ': ' + error : '.');
      const status = document.querySelector('[data-plan-alert], #planAlert, .plan-alert');
      if(status) status.textContent = text;
      try{ console.error(text); }catch(_error){}
    }

    async function reconcile(force){
      if(window.__BASELINE_BADMINTON_CANONICAL_SAVED_DATA__) return;
      if(inFlight) return;
      const local = localState();
      if(!local) return;
      const updatedAt = Number(local.localUpdatedAt || 0) || 0;
      if(!force && (!booted || updatedAt <= lastObserved)){
        lastObserved = Math.max(lastObserved, updatedAt);
        booted = true;
        return;
      }
      inFlight = true;
      try{
        const remote = await request('GET');
        if(remote && remote.ok){
          if(Number.isInteger(Number(remote.revision))) revision = Number(remote.revision);
          const remoteUpdatedAt = Number(remote.state && remote.state.localUpdatedAt || 0) || 0;
          if(remoteUpdatedAt >= updatedAt){
            lastObserved = updatedAt;
            booted = true;
            return;
          }
        }
        let payload = { state:local };
        if(Number.isInteger(revision) && revision >= 0) payload.expectedRevision = revision;
        let saved = await request('POST', payload);
        if(saved && saved.error === 'revision_conflict'){
          announceFailure('revision conflict; shared state changed elsewhere and was not overwritten');
          return;
        }
        if(!saved || !saved.ok){
          announceFailure(saved && (saved.error || saved.__status));
          return;
        }
        if(Number.isInteger(Number(saved.revision))) revision = Number(saved.revision);
        lastObserved = updatedAt;
        booted = true;
      }catch(error){
        announceFailure(error && error.message ? error.message : 'network error');
      }finally{
        inFlight = false;
      }
    }

    const initial = localState();
    lastObserved = Number(initial && initial.localUpdatedAt || 0) || 0;
    booted = true;
    window.setInterval(function(){ reconcile(false); }, 850);
    document.addEventListener('click', function(event){
      const button = event.target && event.target.closest ? event.target.closest('[data-save-court]') : null;
      if(button) window.setTimeout(function(){ reconcile(true); }, 700);
    }, true);
  }

  function boot(){
    if(redirectStandaloneRecipeShell()) return;
    installFastHomeNavigation();
    restorePendingRecipe();
    markGamesStable();
    correctVoiceConfigurationMessage();
    installBadmintonSavedDataReconciliation();
  }

  if(document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot, { once:true });
})();
