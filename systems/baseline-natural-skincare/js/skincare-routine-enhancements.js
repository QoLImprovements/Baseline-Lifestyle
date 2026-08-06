/* Baseline Natural Skincare — load the reusable sitewide My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V15__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V15__ = true;

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

  function loadWithoutMutationObserver(src) {
    const NativeObserver = global.MutationObserver;
    let replaced = false;
    if (typeof NativeObserver === 'function') {
      global.MutationObserver = class BaselineQuietRoutineObserver {
        constructor(callback) { this.callback = callback; }
        observe() {}
        disconnect() {}
        takeRecords() { return []; }
      };
      replaced = true;
    }
    return load(src).finally(() => {
      if (replaced) global.MutationObserver = NativeObserver;
    });
  }

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    /* The Skincare renderer already refreshes itself through its own click,
       change and group handlers. A second DOM observer would treat the shared
       number/caption decorations as new routine content and rebuild the
       calendar continuously, detaching a marker while it is being hovered. */
    .then(() => loadWithoutMutationObserver('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_7'))
    .then(() => loadWithoutMutationObserver('/sitewide/js/baseline-routine-coherence-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_20260806_10'))
    .then(() => load('/sitewide/js/baseline-skincare-routine-state-bridge-v1.js?v=SKINCARE_ROUTINE_STATE_BRIDGE_20260806_3'))
    .then(() => load('/sitewide/js/baseline-routine-coherence-events-v4.js?v=SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_4'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
