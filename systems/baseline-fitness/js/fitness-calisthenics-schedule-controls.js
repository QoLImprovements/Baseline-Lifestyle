/* Baseline Fitness — Calisthenics schedule-mode owner.

   This module owns only weekly-count vs specific-weekday behaviour. Start Date
   is owned by the canonical generator module; do not duplicate its defaulting or
   editability here.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__) return;
  global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__ = true;

  function sync() {
    const mode=document.getElementById('scheduleMode');
    const frequency=document.getElementById('freq');
    const days=document.getElementById('specificDayControls');
    if (!mode || !frequency || !days) return;

    const specific=mode.value==='specific-days';
    days.hidden=!specific;
    frequency.disabled=specific;
    const frequencyField=frequency.closest('.field-stack');
    if (frequencyField) frequencyField.hidden=specific;
    if (specific) {
      const count=days.querySelectorAll('input[data-plan-day]:checked').length;
      frequency.value=`${Math.max(1,count)}x`;
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
