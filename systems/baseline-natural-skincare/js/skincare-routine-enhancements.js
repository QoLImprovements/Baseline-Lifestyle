/* Baseline Natural Skincare — retained no-op compatibility module.

   My Routine is owned by skincare-routine.js, skincare-routine-sitewide-v5.js,
   and the existing shared routine infrastructure. Recipe code is deliberately
   not loaded or owned from this routine-named file.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS_COMPAT__) return;
  global.__BASELINE_SKINCARE_ROUTINE_ENHANCEMENTS_COMPAT__ = true;
})(typeof window !== 'undefined' ? window : globalThis);
