/* Baseline Lifestyle — event-driven refreshes for the shared My Routine layer. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V1__) return;
  global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (app !== 'skin') return;

  let timers = [];
  function refreshAfterRender() {
    timers.forEach((timer) => global.clearTimeout(timer));
    timers = [40, 140, 320].map((delay) => global.setTimeout(() => {
      document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed'));
    }, delay));
  }

  document.addEventListener('click', (event) => {
    if (event.target?.closest?.('#routine')) refreshAfterRender();
  });
  document.addEventListener('change', (event) => {
    if (event.target?.closest?.('#routine')) refreshAfterRender();
  });
  document.addEventListener('baseline:skincare-routine-updated', refreshAfterRender);
  global.addEventListener('pagehide', () => timers.forEach((timer) => global.clearTimeout(timer)), { once:true });
})(typeof window !== 'undefined' ? window : globalThis);
