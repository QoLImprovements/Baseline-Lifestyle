/* Baseline Games — Detect The Word feedback colours and labels only. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_DETECT_WORD_FEEDBACK_V1__) return;
  global.__BASELINE_DETECT_WORD_FEEDBACK_V1__ = true;
  if ((document.body?.dataset.app || document.documentElement.dataset.app) !== 'games') return;

  if (!document.getElementById('baselineDetectWordFeedbackRepairCss')) {
    const style = document.createElement('style');
    style.id = 'baselineDetectWordFeedbackRepairCss';
    style.textContent = `
      body[data-app="games"] :is(.letter-cell.correct,.word-feedback-dot--correct){background:#2F7A62!important;background-image:none!important;border-color:#83D8B9!important;color:#FFFFFF!important;-webkit-text-fill-color:#FFFFFF!important}
      body[data-app="games"] :is(.letter-cell.present,.word-feedback-dot--present){background:#A96F16!important;background-image:none!important;border-color:#F0C56B!important;color:#FFF9EA!important;-webkit-text-fill-color:#FFF9EA!important}
      body[data-app="games"] :is(.letter-cell.absent,.word-feedback-dot--absent){background:#111936!important;background-image:none!important;border-color:#5F72BC!important;color:#D7DFF6!important;-webkit-text-fill-color:#D7DFF6!important}
    `;
    document.head.appendChild(style);
  }

  let frame = 0;
  function sync() {
    frame = 0;
    [
      { className:'correct', label:'Correct place' },
      { className:'present', label:'In word, different place' },
      { className:'absent', label:'Not in word' }
    ].forEach((state) => {
      document.querySelectorAll(`.letter-cell.${state.className}`).forEach((cell) => {
        const letter = String(cell.textContent || '').trim();
        cell.dataset.wordFeedback = state.className;
        cell.title = state.label;
        cell.setAttribute('aria-label', `${letter ? `${letter}: ` : ''}${state.label}`);
      });
      document.querySelectorAll(`.word-feedback-dot--${state.className}`).forEach((dot) => {
        dot.dataset.wordFeedback = state.className;
        dot.title = state.label;
      });
    });
  }
  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(sync);
  }
  const observer = new MutationObserver(schedule);
  if (document.body) observer.observe(document.body, { childList:true, subtree:true });
  schedule();
})(typeof window !== 'undefined' ? window : globalThis);
