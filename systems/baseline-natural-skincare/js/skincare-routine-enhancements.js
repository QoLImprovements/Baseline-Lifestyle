/* Baseline Natural Skincare — deterministic Routine workspace loader. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V5__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V5__ = true;

  const BUILD = 'SKINCARE_ROUTINE_CANONICAL_20260806_1';

  function ensureStyle(href, marker) {
    if (document.querySelector(`link[${marker}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${href}?v=${BUILD}`;
    link.setAttribute(marker, 'true');
    document.head.appendChild(link);
  }

  function loadScript(src, marker) {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) return existing.dataset.loaded === 'true'
      ? Promise.resolve()
      : new Promise((resolve) => existing.addEventListener('load', resolve, { once:true }));
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${src}?v=${BUILD}`;
      script.async = false;
      script.setAttribute(marker, 'true');
      script.addEventListener('load', () => { script.dataset.loaded = 'true'; resolve(); }, { once:true });
      script.addEventListener('error', reject, { once:true });
      document.head.appendChild(script);
    });
  }

  function waitForRoutine(attempt = 0) {
    if (global.BASELINE_SKINCARE_ROUTINE) {
      return loadScript('/systems/baseline-natural-skincare/js/skincare-routine-canonical.js', 'data-skincare-routine-canonical');
    }
    if (attempt >= 80) return Promise.resolve();
    return new Promise((resolve) => global.setTimeout(resolve, 50)).then(() => waitForRoutine(attempt + 1));
  }

  ensureStyle('/sitewide/css/baseline-routine-canonical-v1.css', 'data-baseline-routine-canonical-style');
  loadScript('/sitewide/js/baseline-routine-system.js', 'data-baseline-routine-system-script')
    .then(() => document.readyState === 'loading'
      ? new Promise((resolve) => document.addEventListener('DOMContentLoaded', resolve, { once:true }))
      : undefined)
    .then(() => waitForRoutine())
    .catch((error) => { try { console.error('Skincare Routine failed to load.', error); } catch (_error) {} });
})(typeof window !== 'undefined' ? window : globalThis);
