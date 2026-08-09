/* Baseline Fitness — Calisthenics schedule-mode owner v3.

   OWNERSHIP CONTRACT
   ------------------
   This module is the single owner of the primary scheduling choice:
   - Number Of Days vs Specify Weekdays;
   - the first Number Of Days dropdown (1–6);
   - conditional visibility of that dropdown vs weekday checkboxes.

   The optional upper range (2–7 / Not Specified) and persistence belong to
   fitness-live-policy-v1.js. Generator layout belongs to
   fitness-generator-progression-v1.js. Do not duplicate either responsibility.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS_V3__) return;
  global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS_V3__ = true;

  const document = global.document;

  function normalisePrimaryFrequency(frequency) {
    if (!frequency) return;
    const current=Math.min(6,Math.max(1,Number(String(frequency.value || '1x').replace(/\D/g,'')) || 1));
    const signature='1|2|3|4|5|6';
    if (frequency.dataset.scheduleOptions!==signature) {
      frequency.dataset.scheduleOptions=signature;
      frequency.innerHTML=Array.from({ length:6 },(_,index) => `<option value="${index+1}x">${index+1}</option>`).join('');
    }
    frequency.value=`${current}x`;
    frequency.setAttribute('aria-label','Number Of Days');
    const directLabel=frequency.closest('.field-stack')?.querySelector(':scope>label[for="freq"],:scope>span');
    if (directLabel) directLabel.textContent='Number Of Days';
  }

  function sync() {
    const mode=document.getElementById('scheduleMode');
    const frequency=document.getElementById('freq');
    const days=document.getElementById('specificDayControls');
    if (!mode || !frequency || !days) return;

    Array.from(mode.options || []).forEach((option) => {
      if (option.value==='weekly-count') option.textContent='Number Of Days';
      if (option.value==='specific-days') option.textContent='Specify Weekdays';
    });
    const modeLabel=mode.closest('.field-stack')?.querySelector(':scope>label[for="scheduleMode"],:scope>span');
    if (modeLabel) modeLabel.textContent='Choose schedule by';

    normalisePrimaryFrequency(frequency);
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
