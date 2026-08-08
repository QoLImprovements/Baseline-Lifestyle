/* Baseline Fitness — Calisthenics schedule-mode owner v2.

   Owns only the Number Of Days vs Specify Weekdays choice and conditional
   visibility. Generator layout and frequency range content are owned elsewhere.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS_V2__) return;
  global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS_V2__ = true;

  function sync() {
    const mode=document.getElementById('scheduleMode');
    const frequency=document.getElementById('freq');
    const days=document.getElementById('specificDayControls');
    if (!mode || !frequency || !days) return;

    Array.from(mode.options || []).forEach((option) => {
      if (option.value==='weekly-count') option.textContent='Number Of Days';
      if (option.value==='specific-days') option.textContent='Specify Weekdays';
    });
    const specific=mode.value==='specific-days';
    days.hidden=!specific;
    frequency.disabled=specific;
    const range=frequency.closest('.fitness-frequency-grid');
    const frequencyField=range || frequency.closest('.field-stack');
    if (frequencyField) frequencyField.hidden=specific;
    if (specific) {
      const count=days.querySelectorAll('input[data-plan-day]:checked').length;
      frequency.value=`${Math.max(1,Math.min(6,count || 1))}x`;
    }
  }

  function bind() {
    document.getElementById('scheduleMode')?.addEventListener('change',sync);
    document.getElementById('specificDayControls')?.addEventListener('change',sync);
    sync();
  }

  global.BASELINE_syncCalisthenicsSchedule=sync;
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{ once:true });
  else bind();
})(typeof window!=='undefined'?window:globalThis);
