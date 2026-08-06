/* Baseline Lifestyle — compatibility event bridge only.

   The former version of this file re-rendered numbering, public routines,
   visibility controls and summary filters after virtually every click/input.
   Those jobs now have one owner each:
     - baseline-routine-system.js: shared structure
     - system routine adapters: system data/rendering
     - baseline-public-routine-groups-v1.js: grouped public routines
     - baseline-routine-live-authority-v1.js: final sitewide layout/filter authority
     - baseline-fitness-plan-control-authority-v1.js: Fitness plan controls

   Keeping this filename as a tiny bridge means older loaders remain compatible
   without reintroducing a second renderer or broad interaction repair loop. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V5__) return;
  global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V5__ = true;
  global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  let frame = 0;
  function emit(scope) {
    if (frame) return;
    frame = global.requestAnimationFrame(() => {
      frame = 0;
      try {
        document.dispatchEvent(new CustomEvent('baseline:routine-rendered', {
          detail:{ system:app === 'skin' ? 'skincare' : 'fitness', scope:String(scope || 'state') }
        }));
      } catch (_error) {}
    });
  }

  document.addEventListener('baseline:skincare-routine-updated', () => emit('routine'));
  document.addEventListener('baseline:fitness-plans-updated', () => emit('plans'));
  document.addEventListener('baseline:fitness-workout-updated', () => emit('workout'));
  document.addEventListener('baseline:routine-settings-changed', () => emit('settings'));
  global.addEventListener('pageshow', () => emit('page'));
  global.addEventListener('pagehide', () => {
    if (frame) global.cancelAnimationFrame(frame);
    frame = 0;
  }, { once:true });

  document.documentElement.setAttribute('data-baseline-routine-event-owner', 'SITEWIDE_ROUTINE_EVENTS_20260806_5');
  emit('boot');
})(typeof window !== 'undefined' ? window : globalThis);
