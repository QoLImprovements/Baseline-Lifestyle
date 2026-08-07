/* Baseline Natural Skincare — deterministic My Routine enhancement loader.

   OWNERSHIP CONTRACT — DO NOT BREAK IN FUTURE EDITS
   --------------------------------------------------
   1. skincare-routine.js is the data/editor owner. It must initialise first.
   2. skincare-routine-sitewide-v4.js is the Skincare grouping/calendar adapter.
   3. baseline-public-routine-groups-v1.js is the one shared Public Routine viewer.
   4. baseline-routine-authority-v7.js is the one shared cross-system coherence layer.
   5. skincare-routine-interactions-v1.js owns only Skin controls that must survive
      core renders: group checkbox/order controls and calendar summary markers.

   Never load a second renderer for Log/Summary/Plan/Public and never start an
   adapter before BASELINE_SKINCARE_ROUTINE exists. The old race between the
   base renderer and enhancement renderers caused visible switching/shaking. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_LOADER_V25__) return;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V25__ = true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V24__ = true;
  global.__BASELINE_SKINCARE_ROUTINE_LOADER_V23__ = true;

  const document = global.document;
  const MAX_WAIT_MS = 6000;

  function installBootShield() {
    document.documentElement.setAttribute('data-skincare-routine-booting','true');
    if (document.getElementById('skincareRoutineBootShieldStyle')) return;
    const style = document.createElement('style');
    style.id = 'skincareRoutineBootShieldStyle';
    style.textContent = `
      html[data-skincare-routine-booting="true"] #routine{visibility:hidden!important}
      #routine :is(.routine-item,.routine-log-item,.routine-summary-item,.routine-plan-group,.routine-log-group){transition:none!important;animation:none!important}
      #routineSummary .routine-summary-group[hidden],
      #routineSummary .routine-summary-item[hidden]{display:none!important}
    `;
    document.head.appendChild(style);
  }

  function releaseBootShield() {
    global.requestAnimationFrame(() => global.requestAnimationFrame(() => {
      document.documentElement.removeAttribute('data-skincare-routine-booting');
    }));
  }

  function load(src, marker) {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') return Promise.resolve();
      return new Promise((resolve,reject) => {
        existing.addEventListener('load',resolve,{ once:true });
        existing.addEventListener('error',reject,{ once:true });
      });
    }
    return new Promise((resolve,reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.setAttribute(marker,'true');
      script.addEventListener('load',() => { script.dataset.loaded='true';resolve(); },{ once:true });
      script.addEventListener('error',reject,{ once:true });
      document.head.appendChild(script);
    });
  }

  function waitForBaseRoutine() {
    const started = Date.now();
    return new Promise((resolve,reject) => {
      const check = () => {
        if (global.BASELINE_SKINCARE_ROUTINE && global.BASELINE_SKINCARE_ROUTINE_MODEL) {
          resolve();
          return;
        }
        if (Date.now() - started >= MAX_WAIT_MS) {
          reject(new Error('Skincare base routine did not initialise.'));
          return;
        }
        global.setTimeout(check,25);
      };
      check();
    });
  }

  installBootShield();

  waitForBaseRoutine()
    .then(() => load('/sitewide/js/baseline-routine-system.js?v=SITEWIDE_MY_ROUTINE_SYSTEM_20260807_5','data-baseline-routine-system'))
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-sitewide-v4.js?v=SKINCARE_SITEWIDE_ROUTINE_20260807_10','data-skincare-routine-sitewide-v4'))
    .then(() => load('/sitewide/js/baseline-public-routine-groups-v1.js?v=BASELINE_PUBLIC_ROUTINE_GROUPS_20260807_3','data-baseline-public-routine-groups'))
    .then(() => load('/sitewide/js/baseline-routine-authority-v7.js?v=BASELINE_ROUTINE_AUTHORITY_20260807_3','data-baseline-routine-authority-v7'))
    .then(() => load('/systems/baseline-natural-skincare/js/skincare-routine-interactions-v1.js?v=SKINCARE_ROUTINE_INTERACTIONS_20260807_1','data-skincare-routine-interactions-v1'))
    .then(releaseBootShield)
    .catch((error) => {
      releaseBootShield();
      try { console.error('Skincare My Routine enhancement failed to load.',error); } catch (_error) {}
    });
})(typeof window !== 'undefined' ? window : globalThis);