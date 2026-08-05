/* Baseline Fitness — calisthenics schedule mode controls. */
(function (global) {
  'use strict';
  if (global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__) return;
  global.__BASELINE_CALISTHENICS_SCHEDULE_CONTROLS__ = true;

  function today() {
    const date = new Date();
    const pad = (value) => String(value).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function sync() {
    const mode = document.getElementById('scheduleMode');
    const frequency = document.getElementById('freq');
    const days = document.getElementById('specificDayControls');
    const start = document.getElementById('startDate');
    if (start) {
      start.min = today();
      if (!start.value || start.value < today()) start.value = today();
    }
    if (!mode || !frequency || !days) return;
    const specific = mode.value === 'specific-days';
    days.hidden = !specific;
    frequency.disabled = specific;
    const frequencyField = frequency.closest('.field-stack');
    if (frequencyField) frequencyField.hidden = specific;
    if (specific) {
      const count = days.querySelectorAll('input[data-plan-day]:checked').length;
      frequency.value = `${Math.max(1, count)}x`;
    }
  }

  function bind() {
    const mode = document.getElementById('scheduleMode');
    const days = document.getElementById('specificDayControls');
    const start = document.getElementById('startDate');
    mode?.addEventListener('change', sync);
    days?.addEventListener('change', sync);
    start?.addEventListener('change', sync);
    sync();
  }

  global.BASELINE_syncCalisthenicsSchedule = sync;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind, { once:true });
  else bind();
})(typeof window !== 'undefined' ? window : globalThis);
