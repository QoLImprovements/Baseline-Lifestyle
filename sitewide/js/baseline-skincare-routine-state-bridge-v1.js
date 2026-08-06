/* Baseline Lifestyle — expose the live Skincare routine state to shared My Routine decorators. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_STATE_BRIDGE_V1__) return;
  global.__BASELINE_SKINCARE_ROUTINE_STATE_BRIDGE_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (app !== 'skin') return;

  let syncTimer = 0;

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) {
        return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
      }
    } catch (_error) {}
    return 'guest';
  }

  function liveSnapshot() {
    try {
      const snapshot = global.BASELINE_SKINCARE_ROUTINE?.getState?.();
      if (!snapshot || typeof snapshot !== 'object') return null;
      return {
        visibility:snapshot.visibility === 'public' ? 'public' : 'private',
        items:Array.isArray(snapshot.items) ? snapshot.items : Array.isArray(snapshot.routine) ? snapshot.routine : [],
        logs:snapshot.logs && typeof snapshot.logs === 'object' ? snapshot.logs : {},
        updatedAt:new Date().toISOString()
      };
    } catch (_error) {
      return null;
    }
  }

  function syncNow() {
    syncTimer = 0;
    const snapshot = liveSnapshot();
    if (!snapshot) return;
    try {
      global.localStorage?.setItem(`__bl_skincare_routine_v1__::${owner()}`, JSON.stringify(snapshot));
    } catch (_error) {}
    document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed', {
      detail:{ source:'skincare-live-state', logs:snapshot.logs }
    }));
  }

  function scheduleSync(delay = 0) {
    global.clearTimeout(syncTimer);
    syncTimer = global.setTimeout(syncNow, delay);
  }

  global.addEventListener('change', (event) => {
    if (event.target?.closest?.('#routine [data-log-complete],#routine [data-log-note],#routine [data-field],#routine #routineVisibility')) {
      scheduleSync(20);
    }
  }, true);
  global.addEventListener('input', (event) => {
    if (event.target?.closest?.('#routine [data-log-note]')) scheduleSync(80);
  }, true);
  document.addEventListener('baseline:skincare-routine-updated', () => scheduleSync(20));
  global.addEventListener('pageshow', () => scheduleSync(120));
  [120,500,1200].forEach((delay) => global.setTimeout(syncNow, delay));
  global.addEventListener('pagehide', () => global.clearTimeout(syncTimer), { once:true });
})(typeof window !== 'undefined' ? window : globalThis);
