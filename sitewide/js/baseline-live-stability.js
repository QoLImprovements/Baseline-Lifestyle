/* Baseline Lifestyle — stable bootstrap. Routine UI ownership lives in its routine modules, not here. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_LIVE_STABILITY_BOOTSTRAP_V3__) return;
  global.__BASELINE_LIVE_STABILITY_BOOTSTRAP_V3__ = true;

  function load(src, marker) {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') return Promise.resolve();
      return new Promise((resolve, reject) => {
        existing.addEventListener('load', resolve, { once:true });
        existing.addEventListener('error', reject, { once:true });
      });
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.setAttribute(marker, 'true');
      script.addEventListener('load', () => { script.dataset.loaded = 'true'; resolve(); }, { once:true });
      script.addEventListener('error', reject, { once:true });
      document.head.appendChild(script);
    });
  }

  load('/sitewide/js/baseline-live-stability-core-v3.js?v=RECIPE_VIEW_STATE_20261003_1', 'data-baseline-live-stability-core')
    .then(() => load('/sitewide/js/baseline-unified-favorites-v1.js?v=BASELINE_UNIFIED_FAVORITES_20260806_1', 'data-baseline-unified-favorites'))
    .then(() => load('/sitewide/js/baseline-detect-word-feedback-v1.js?v=BASELINE_DETECT_WORD_FEEDBACK_20260806_1', 'data-baseline-detect-word-feedback'))
    .catch((error) => { try { console.error('Baseline stability module failed to load.', error); } catch (_error) {} });
})(typeof window !== 'undefined' ? window : globalThis);
