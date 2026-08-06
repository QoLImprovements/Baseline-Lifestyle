/* Baseline Fitness — keep the expanded exercise family filter keyed correctly. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_FAMILY_FILTER__) return;
  global.__BASELINE_FITNESS_FAMILY_FILTER__ = true;

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
  }

  function sync() {
    const select = document.getElementById('exGroup');
    const catalogue = global.BASELINE_FITNESS_EXERCISE_CATALOGUE;
    if (!select || !catalogue?.FAMILIES) return;
    const selected = select.value;
    const signature = catalogue.FAMILIES.map((family) => `${family.key}:${family.label}`).join('|');
    if (select.dataset.canonicalFamilySignature !== signature) {
      select.dataset.canonicalFamilySignature = signature;
      select.innerHTML = '<option value="all">All groups</option>' + catalogue.FAMILIES.map((family) => `<option value="${escapeHtml(family.key)}">${escapeHtml(family.label)}</option>`).join('');
    }
    select.value = Array.from(select.options).some((option) => option.value === selected) ? selected : 'all';
  }

  document.addEventListener('baseline:fitness-plans-updated', sync);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync, { once:true });
  else sync();
})(typeof window !== 'undefined' ? window : globalThis);
