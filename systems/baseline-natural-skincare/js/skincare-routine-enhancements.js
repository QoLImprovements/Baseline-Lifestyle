/* Baseline Natural Skincare — load the reusable sitewide My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V5__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V5__ = true;

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

  function refreshSharedRoutineEnhancements() {
    [0, 120, 360, 900, 1800].forEach((delay) => {
      global.setTimeout(() => {
        document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed'));
      }, delay);
    });
  }

  function loadStableRoutineGroupSettings() {
    const NativeObserver = global.MutationObserver;
    let replaced = false;
    if (typeof NativeObserver === 'function') {
      global.MutationObserver = class BaselineQuietRoutineObserver {
        observe() {}
        disconnect() {}
        takeRecords() { return []; }
      };
      replaced = true;
    }
    return load('/sitewide/js/baseline-routine-groups-settings.js?v=SITEWIDE_ROUTINE_GROUP_SETTINGS_20260806_2')
      .finally(() => {
        if (replaced) global.MutationObserver = NativeObserver;
        refreshSharedRoutineEnhancements();
      });
  }

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_2'))
    .then(() => load('/sitewide/js/baseline-routine-coherence-v3.js?v=SITEWIDE_ROUTINE_COHERENCE_20260806_3'))
    .then(loadStableRoutineGroupSettings)
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
