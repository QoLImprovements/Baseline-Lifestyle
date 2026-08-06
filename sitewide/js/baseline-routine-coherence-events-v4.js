/* Baseline Lifestyle — event-driven refreshes for My Routine v4. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V4__) return;
  global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  let timers = [];
  function root() {
    return app === 'skin' ? document.getElementById('routine') : document.getElementById('my-plan');
  }
  function refresh() {
    try { document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed')); } catch (_error) {}
  }
  function refreshAfterRender() {
    timers.forEach((timer) => global.clearTimeout(timer));
    timers = [0,60,160,360].map((delay) => global.setTimeout(refresh, delay));
  }
  function insideRoutine(event) {
    const container = root();
    return Boolean(container && event.target && container.contains(event.target));
  }

  document.addEventListener('click', (event) => {
    if (insideRoutine(event)) refreshAfterRender();
  });
  document.addEventListener('change', (event) => {
    if (insideRoutine(event)) refreshAfterRender();
  });
  document.addEventListener('input', (event) => {
    if (insideRoutine(event) && event.target?.matches?.('select,input[type="checkbox"],input[type="radio"]')) refreshAfterRender();
  });
  document.addEventListener('baseline:skincare-routine-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-plans-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-workout-updated', refreshAfterRender);
  global.addEventListener('pageshow', refreshAfterRender);
  global.addEventListener('pagehide', () => timers.forEach((timer) => global.clearTimeout(timer)), { once:true });
})(typeof window !== 'undefined' ? window : globalThis);
