/* Baseline Natural Skincare — load the reusable sitewide My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V8__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V8__ = true;

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

  function withQuietObserver(src, afterLoad) {
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
      if (typeof afterLoad === 'function') afterLoad();
    });
  }

  function refreshSharedRoutineEnhancements() {
    [0, 120, 360, 900].forEach((delay) => {
      global.setTimeout(() => {
        document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed'));
      }, delay);
    });
  }

  function loadSkincareWorkspace() {
    return load('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_5');
  }

  function loadStableCoherenceLayer() {
    return withQuietObserver(
      '/sitewide/js/baseline-routine-coherence-v3.js?v=SITEWIDE_ROUTINE_COHERENCE_20260806_5'
    );
  }

  function loadStableRoutineGroupSettings() {
    return withQuietObserver(
      '/sitewide/js/baseline-routine-groups-settings.js?v=SITEWIDE_ROUTINE_GROUP_SETTINGS_20260806_2',
      refreshSharedRoutineEnhancements
    );
  }

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    .then(loadSkincareWorkspace)
    .then(loadStableCoherenceLayer)
    .then(() => load('/sitewide/js/baseline-routine-coherence-events-v1.js?v=SITEWIDE_ROUTINE_COHERENCE_EVENTS_20260806_1'))
    .then(loadStableRoutineGroupSettings)
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
