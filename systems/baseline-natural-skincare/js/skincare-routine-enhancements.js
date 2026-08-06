/* Baseline Natural Skincare — load the reusable sitewide My Routine system. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V4__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V4__ = true;

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

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_1')
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260806_1'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
