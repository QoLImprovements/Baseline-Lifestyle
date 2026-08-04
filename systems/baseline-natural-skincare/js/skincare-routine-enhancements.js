/* Baseline Natural Skincare — load the preserved routine core, then group-first controls. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V3__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V3__ = true;
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
  load('/systems/baseline-natural-skincare/js/skincare-routine-enhancements-core.js?v=SKINCARE_ROUTINE_CORE_20260805_1')
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-group-ui-v3.js?v=SKINCARE_GROUP_FIRST_UI_20260805_2'))
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-product-accessibility-v3.js?v=SKINCARE_PRODUCT_ACCESS_20260805_1'))
    .catch(() => {});
})(typeof window !== 'undefined' ? window : globalThis);
