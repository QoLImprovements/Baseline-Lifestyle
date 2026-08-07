/* Baseline Fitness — theme/stacking guard for dynamic My Routine controls.

   FUTURE EDIT RULE
   ----------------
   Do not hard-code a new colour inside Fitness My Routine / plan-generator
   widgets. Use the existing Fitness theme tokens below. Dropdowns/pickers are
   opaque top-layer controls: they must never sit behind cards or click through
   to controls underneath them. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_THEME_GUARD_V1__) return;
  global.__BASELINE_FITNESS_THEME_GUARD_V1__=true;
  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  function boot() {
    if (document.getElementById('baselineFitnessThemeGuardV1Style')) return;
    const style=document.createElement('style');
    style.id='baselineFitnessThemeGuardV1Style';
    style.textContent=`
      html[data-app="fitness"] #my-plan :is(.card,.fitness-routine-card,.session-card,#exerciseList>.ex-row,.ex-details-card){
        background:var(--card-bg)!important;color:var(--ink)!important;border-color:var(--border)!important
      }
      html[data-app="fitness"] #my-plan :is(input,select,textarea,.ex-picker-control,.fitness-frequency-grid select){
        background:var(--filter-bg)!important;background-color:var(--filter-bg)!important;color:var(--ink)!important;border-color:var(--border-2)!important
      }
      html[data-app="fitness"] #exerciseList .ex-picker-menu,
      html[data-app="fitness"] #my-plan .fitness-activity-menu{
        z-index:2147483600!important;opacity:1!important;background:var(--card-bg)!important;background-color:var(--card-bg)!important;
        color:var(--ink)!important;border-color:var(--border-2)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
        pointer-events:auto!important;isolation:isolate!important;box-shadow:var(--shadow)!important
      }
      html[data-app="fitness"] #exerciseList .ex-picker-menu :is(button,.ex-picker-option),
      html[data-app="fitness"] #my-plan .fitness-activity-menu :is(button,[role="option"]){
        background:var(--card-bg)!important;color:var(--ink)!important;pointer-events:auto!important
      }
      html[data-app="fitness"] #exerciseList .ex-picker-menu :is(button,.ex-picker-option):hover,
      html[data-app="fitness"] #my-plan .fitness-activity-menu :is(button,[role="option"]):hover{background:var(--filter-bg)!important}
      html[data-app="fitness"] .ex-picker-inline-status{background:var(--filter-bg)!important;color:var(--ink)!important;border-color:var(--border-2)!important}
      html[data-app="fitness"] .fitness-start-early-overlay{background:color-mix(in srgb,var(--bg) 78%,transparent)!important}
      html[data-app="fitness"] .fitness-start-early-dialog{background:var(--card-bg)!important;color:var(--ink)!important;border-color:var(--border-2)!important}
    `;
    document.head.appendChild(style);
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);