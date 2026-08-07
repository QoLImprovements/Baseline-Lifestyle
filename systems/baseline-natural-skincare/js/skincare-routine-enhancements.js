/* Baseline Natural Skincare — deterministic My Routine enhancement loader.
   The base Skincare routine owns data. The Skincare grouping adapter owns its
   grouped rendering. One shared sitewide authority owns cross-system rules. */
(function (global) {
  'use strict';
  if (global.__BASELINE_SKINCARE_ROUTINE_LOADER_V23__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V23__ = true;

  function installBootShield() {
    document.documentElement.setAttribute('data-skincare-routine-booting','true');
    if (document.getElementById('skincareRoutineBootShieldStyle')) return;
    const style = document.createElement('style');
    style.id = 'skincareRoutineBootShieldStyle';
    style.textContent = 'html[data-skincare-routine-booting="true"] #routine{visibility:hidden!important}#routineSummary .routine-summary-group[hidden],#routineSummary .routine-summary-item[hidden]{display:none!important}';
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => {
      document.documentElement.removeAttribute('data-skincare-routine-booting');
    }));
  }

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
    const coreRenderRoots = new Set(['routineItems','routineSummary','routineLogItems']);
    const relevantMutations = (mutations) => (mutations || []).filter((mutation) => {
      const target = mutation?.target;
      return Boolean(target && target.nodeType === 1 && coreRenderRoots.has(target.id));
    });
    return withTemporaryMutationObserver((NativeObserver) => class BaselineRoutineRenderObserver {
      constructor(callback) {
        this.observer = new NativeObserver((mutations,observer) => {
          const relevant = relevantMutations(mutations);
          if (relevant.length) callback(relevant,observer);
        });
      }
      observe(target,options) { this.observer.observe(target,options); }
      disconnect() { this.observer.disconnect(); }
      takeRecords() { return relevantMutations(this.observer.takeRecords()); }
    },src);
  }

  installBootShield();

  load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260806_2')
    .then(() => loadWithRoutineMutationObserver('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260807_9'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_2'))
    .then(() => load('/sitewide/js/baseline-routine-authority-v7.js?v=BASELINE_ROUTINE_AUTHORITY_20260807_1'))
    .then(releaseBootShield)
    .catch((error) => {
      releaseBootShield();
      try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {}
    });
})(typeof window !== 'undefined' ? window : globalThis);
