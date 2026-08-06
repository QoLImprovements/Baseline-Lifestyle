/* Baseline Natural Skincare — load the reusable sitewide My Routine system without competing render loops. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V21__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V21__ = true;

  function load(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function withTemporaryMutationObserver(createObserver, src) {
    const NativeObserver = global.MutationObserver;
    if (typeof NativeObserver !== 'function') return load(src);
    global.MutationObserver = createObserver(NativeObserver);
    return load(src).finally(() => { global.MutationObserver = NativeObserver; });
  }

  function loadWithRoutineMutationObserver(src) {
    const coreRenderRoots = new Set(['routineItems', 'routineSummary', 'routineLogItems']);
    const relevantMutations = (mutations) => (mutations || []).filter((mutation) => {
      const target = mutation?.target;
      return Boolean(target && target.nodeType === 1 && coreRenderRoots.has(target.id));
    });
    return withTemporaryMutationObserver((NativeObserver) => class BaselineRoutineRenderObserver {
      constructor(callback) {
        this.observer = new NativeObserver((mutations, observer) => {
          const relevant = relevantMutations(mutations);
          if (relevant.length) callback(relevant, observer);
        });
      }
      observe(target, options) { this.observer.observe(target, options); }
      disconnect() { this.observer.disconnect(); }
      takeRecords() { return relevantMutations(this.observer.takeRecords()); }
    }, src);
  }

  function loadWithoutMutationObserver(src) {
    return withTemporaryMutationObserver(() => class BaselineQuietRoutineObserver {
      observe() {}
      disconnect() {}
      takeRecords() { return []; }
    }, src);
  }

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    .then(() => loadWithRoutineMutationObserver('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_8'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260806_1'))
    .then(() => load('/sitewide/js/baseline-routine-group-completion-v1.js?v=BASELINE_ROUTINE_GROUP_COMPLETION_20260806_3'))
    .then(() => loadWithoutMutationObserver('/sitewide/js/baseline-routine-coherence-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_20260806_10'))
    .then(() => load('/sitewide/js/baseline-skincare-routine-state-bridge-v1.js?v=SKINCARE_ROUTINE_STATE_BRIDGE_20260806_3'))
    .then(() => load('/sitewide/js/baseline-routine-coherence-events-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_5'))
    .then(() => load('/sitewide/js/baseline-routine-live-authority-v1.js?v=BASELINE_ROUTINE_LIVE_AUTHORITY_20260806_4'))
    .catch((error) => { try { console.error('Skincare My Routine enhancement failed to load.', error); } catch (_error) {} });
})(typeof window !== 'undefined' ? window : globalThis);
