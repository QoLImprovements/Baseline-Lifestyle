/* Baseline Fitness — exercise picker validation/focus safety.

   The grouped exercise picker is authoritative. An older search enhancer still
   owns a blur listener that calls reportValidity('Choose an exercise...'). That
   native popup can steal focus and block Cancel/navigation. This adapter does
   not render another picker: it only neutralises that obsolete validation path.

   FUTURE EDIT RULE: invalid free text must never trap the user on this page.
   On blur, keep a valid catalogue choice or restore the row's current exercise. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_EXERCISE_PICKER_SAFETY_V1__) return;
  global.__BASELINE_FITNESS_EXERCISE_PICKER_SAFETY_V1__=true;

  const document=global.document;
  if ((document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;
  let observer=null;

  function catalogueMatch(value) {
    const text=String(value || '').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((exercise) =>
      String(exercise?.name || '').localeCompare(text,'en-GB',{ sensitivity:'base' })===0
    ) || null;
  }

  function makeSafe(input) {
    if (!input || input.dataset.pickerValidationSafe==='true') return;
    input.dataset.pickerValidationSafe='true';
    input.removeAttribute('required');
    try { input.setCustomValidity(''); } catch (_error) {}

    /* Capture on the input itself executes before the legacy target/bubble blur
       listener, so reportValidity() is never reached. */
    input.addEventListener('blur',(event) => {
      const row=input.closest('.ex-row');
      const select=row?.querySelector('.ex-select');
      const match=catalogueMatch(input.value);
      event.stopImmediatePropagation();
      try { input.setCustomValidity(''); } catch (_error) {}
      if (match && select) {
        if (select.value!==match.name) {
          select.value=match.name;
          select.dispatchEvent(new Event('change',{ bubbles:true }));
        }
        input.value=match.name;
        return;
      }
      if (select) input.value=select.options?.[select.selectedIndex]?.textContent || select.value || '';
    },true);

    input.addEventListener('invalid',(event) => {
      event.preventDefault();
      try { input.setCustomValidity(''); } catch (_error) {}
    },true);
  }

  function patch() {
    document.querySelectorAll('#exerciseList .ex-search-input').forEach(makeSafe);
  }

  function boot() {
    patch();
    const list=document.getElementById('exerciseList');
    if (list && typeof MutationObserver!=='undefined') {
      observer=new MutationObserver(patch);
      observer.observe(list,{ childList:true,subtree:true });
    }
    document.documentElement.setAttribute('data-fitness-exercise-picker-safety','v1');
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);