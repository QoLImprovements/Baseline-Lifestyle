/* Baseline Fitness — canonical Public Routine visibility control. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_VISIBILITY__) return;
  global.__BASELINE_FITNESS_ROUTINE_VISIBILITY__ = true;

  const API = '/systems/baseline-fitness/api/routine_state.php';
  let currentVisibility = 'private';

  function authSnapshot() {
    try { return global.BASELINE_auth?.get?.() || null; } catch (_error) { return null; }
  }

  function routineState() {
    try {
      const value = global.BASELINE_fitnessRoutine?.getState?.() || {};
      return {
        activities:Array.isArray(value.activities) ? value.activities : [],
        logs:value.logs && typeof value.logs === 'object' ? value.logs : {}
      };
    } catch (_error) {
      return { activities:[],logs:{} };
    }
  }

  async function request(options = {}) {
    try {
      const response = await fetch(API, {
        method:options.method || 'GET',
        credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      const data = await response.json().catch(() => null);
      return data && typeof data === 'object' ? data : { ok:false,error:`http_${response.status}` };
    } catch (_error) {
      return { ok:false,error:'network_error' };
    }
  }

  function ensureControl() {
    const title = document.querySelector('[data-canonical-fitness-panel="public"] .bl-canonical-public-title');
    if (!title) return null;
    let label = title.querySelector('[data-canonical-fitness-visibility]');
    if (!label) {
      label = document.createElement('label');
      label.className = 'bl-canonical-public-visibility';
      label.dataset.canonicalFitnessVisibility = 'true';
      label.innerHTML = '<strong>My Routine Visibility</strong><select aria-label="My Routine Visibility"><option value="private">Private</option><option value="public">Public</option></select>';
      title.appendChild(label);
    }
    return label.querySelector('select');
  }

  async function refresh() {
    const select = ensureControl();
    if (!select) return;
    const snapshot = authSnapshot();
    if (!snapshot?.authed) {
      currentVisibility = 'private';
      select.value = 'private';
      select.disabled = true;
      select.title = 'Log in to publish your fitness routine.';
      return;
    }
    select.disabled = true;
    const data = await request();
    currentVisibility = data?.visibility === 'public' ? 'public' : 'private';
    select.value = currentVisibility;
    select.disabled = false;
    select.removeAttribute('title');
  }

  async function save(select) {
    const snapshot = authSnapshot();
    if (!snapshot?.authed) { await refresh(); return; }
    const next = select.value === 'public' ? 'public' : 'private';
    const previous = currentVisibility;
    select.disabled = true;
    const routine = routineState();
    const data = await request({
      method:'POST',
      body:{ visibility:next, activities:routine.activities, logs:routine.logs }
    });
    if (data?.ok) currentVisibility = data.visibility === 'public' ? 'public' : next;
    else currentVisibility = previous;
    select.value = currentVisibility;
    select.disabled = false;
  }

  function bind() {
    const select = ensureControl();
    if (!select || select.dataset.bound === 'true') return;
    select.dataset.bound = 'true';
    select.addEventListener('change',() => save(select));
  }

  function boot() {
    bind();
    refresh();
    const auth = global.BASELINE_auth;
    if (auth && typeof auth.onChange === 'function') auth.onChange(() => { bind(); refresh(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
