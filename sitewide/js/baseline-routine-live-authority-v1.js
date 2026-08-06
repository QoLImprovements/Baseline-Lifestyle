/* Baseline Lifestyle — event-driven final authority for live My Routine repairs.
   No MutationObserver: this module only reacts to explicit routine/user events. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V1__) return;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  let frame = 0;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));

  function todayIso() {
    const date = new Date();
    const pad = (value) => String(value).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  }

  function movePublicVisibility() {
    const panel = app === 'skin'
      ? $('[data-routine-panel="public"]')
      : $('[data-fitness-routine-panel="public"]');
    const card = panel?.querySelector(app === 'skin' ? '.routine-card' : '.fitness-routine-card');
    if (!card) return;
    const visibility = card.querySelector('.bl-release-public-visibility,.bl-v4-visibility');
    if (!visibility) return;

    let row = card.querySelector(':scope > .bl-live-public-head');
    if (!row) {
      const headingBlock = Array.from(card.children).find((child) => child !== visibility && child.querySelector?.('h2,h3'));
      if (!headingBlock) return;
      row = document.createElement('div');
      row.className = 'bl-live-public-head';
      card.insertBefore(row, headingBlock);
      row.appendChild(headingBlock);
    }
    if (visibility.parentElement !== row) row.appendChild(visibility);
  }

  function skincareSnapshot() {
    try { return global.BASELINE_SKINCARE_ROUTINE?.getState?.() || {}; }
    catch (_error) { return {}; }
  }

  function expandSkincareProductSelects() {
    if (app !== 'skin') return;
    const library = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const products = Array.isArray(library?.PRODUCTS) ? library.PRODUCTS : [];
    if (!products.length) return;
    const snapshot = skincareSnapshot();
    const routine = Array.isArray(snapshot?.routine) ? snapshot.routine : Array.isArray(snapshot?.items) ? snapshot.items : [];
    const byId = new Map(routine.map((item) => [String(item?.id || ''), item]));
    const byBrand = new Map();
    products.forEach((product) => {
      const brand = String(product?.brand || 'Other').trim() || 'Other';
      if (!byBrand.has(brand)) byBrand.set(brand, []);
      byBrand.get(brand).push(product);
    });
    const brands = Array.from(byBrand.keys()).sort((left,right) => left.localeCompare(right,'en-GB',{ sensitivity:'base' }));
    const catalogueSignature = products.map((product) => `${product.id}:${product.brand}`).join('|');

    $$('#routineItems [data-field="productSelection"]').forEach((select) => {
      const article = select.closest('[data-routine-item]');
      const item = byId.get(String(article?.dataset.routineItem || ''));
      const actionId = String(item?.actionId || 'custom');
      const selected = String(select.value || item?.productSelection || '');
      const recipes = typeof library.recipeProducts === 'function' ? library.recipeProducts(actionId) : [];
      const signature = `${actionId}::${catalogueSignature}::${recipes.map((recipe) => recipe.id).join('|')}`;
      if (select.dataset.blAllUkProducts === signature) return;

      const recipeOptions = (Array.isArray(recipes) ? recipes : []).map((recipe) =>
        `<option value="recipe:${esc(recipe.id)}"${selected === `recipe:${recipe.id}` ? ' selected' : ''}>${esc(recipe.title)}</option>`
      ).join('');
      const brandGroups = brands.map((brand) => {
        const options = byBrand.get(brand).slice().sort((left,right) => String(left.name).localeCompare(String(right.name),'en-GB',{ sensitivity:'base' })).map((product) =>
          `<option value="product:${esc(product.id)}"${selected === `product:${product.id}` ? ' selected' : ''}>${esc(product.name)}</option>`
        ).join('');
        return `<optgroup label="${esc(brand)}">${options}</optgroup>`;
      }).join('');
      select.innerHTML = `<option value=""${selected === '' ? ' selected' : ''}>No product selected</option>${recipeOptions ? `<optgroup label="My Recipes">${recipeOptions}</optgroup>` : ''}${brandGroups}<optgroup label="Other"><option value="custom"${selected === 'custom' ? ' selected' : ''}>Custom product…</option></optgroup>`;
      if (selected && Array.from(select.options).some((option) => option.value === selected)) select.value = selected;
      select.dataset.blAllUkProducts = signature;
      select.setAttribute('aria-label', select.getAttribute('aria-label') || 'Product or recipe');
    });
  }

  function fitnessRoutine() {
    try {
      const state = global.BASELINE_fitnessRoutine?.getState?.();
      return state && typeof state === 'object' ? state : { activities:[] };
    } catch (_error) { return { activities:[] }; }
  }

  function fitnessSettings() {
    try { return global.BASELINE_RoutineSystem?.readSettings?.() || {}; }
    catch (_error) { return {}; }
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function cardEntityKey(card, activities) {
    const explicit = String(card?.dataset?.v4Entity || '');
    const title = String(card?.querySelector?.('.routine-summary-title strong,.fitness-summary-title strong,h3,h4')?.textContent || '').trim();
    const badge = String(card?.querySelector?.('.badge')?.textContent || '').trim().toLocaleLowerCase('en-GB');
    if (badge.includes('calisthenics')) return selectedPlanId() ? `plan:${selectedPlanId()}` : explicit;
    const activity = activities.find((item) => String(item?.name || '').trim().localeCompare(title,'en-GB',{ sensitivity:'base' }) === 0);
    return activity ? `activity:${String(activity.id)}` : explicit;
  }

  function applyFitnessSummaryFilter() {
    if (app !== 'fitness') return;
    const select = $('#fitnessSummaryGroupFilter');
    const target = $('#fitnessExerciseSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const routine = fitnessRoutine();
    const activities = Array.isArray(routine.activities) ? routine.activities : [];
    const settings = fitnessSettings();
    const assignments = settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object'
      ? settings.fitnessRoutineAssignments : {};

    $$('.fitness-summary-group', target).forEach((section) => {
      let visible = 0;
      $$('.fitness-exercise-summary-item', section).forEach((card) => {
        const key = cardEntityKey(card, activities);
        if (key) card.dataset.v4Entity = key;
        let show = value === 'all';
        if (value.startsWith('entity:')) show = key === value.slice(7);
        else if (value.startsWith('group:')) show = String(assignments[key] || '') === value.slice(6);
        if (show) {
          card.removeAttribute('data-bl-live-filter-hidden');
          card.hidden = false;
          card.style.removeProperty('display');
          visible += 1;
        } else {
          card.dataset.blLiveFilterHidden = 'true';
          card.hidden = true;
        }
      });
      if (visible) {
        section.removeAttribute('data-bl-live-filter-hidden');
        section.hidden = false;
        section.style.removeProperty('display');
      } else {
        section.dataset.blLiveFilterHidden = 'true';
        section.hidden = true;
      }
    });
  }

  function enableStartDatePicker() {
    if (app !== 'fitness') return;
    const input = $('#startDate');
    if (!input) return;
    input.disabled = false;
    input.readOnly = false;
    input.min = todayIso();
    if (input.dataset.blDatePickerBound === 'true') return;
    input.dataset.blDatePickerBound = 'true';
    input.addEventListener('click', () => {
      try { if (typeof input.showPicker === 'function') input.showPicker(); } catch (_error) {}
    });
    input.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && typeof input.showPicker === 'function') {
        event.preventDefault();
        try { input.showPicker(); } catch (_error) {}
      }
    });
  }

  function formatDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    if (!match) return String(value || '');
    const date = new Date(Number(match[1]), Number(match[2])-1, Number(match[3]));
    return date.toLocaleDateString('en-GB',{ weekday:'short', day:'2-digit', month:'short', year:'numeric' });
  }

  function ensureNextDueDate() {
    if (app !== 'fitness') return;
    const meta = $('#myPlanOut .my-plan-saved-head .session-plan-meta');
    if (!meta) return;
    const plans = global.BASELINE_fitnessPlans?.getPlans?.() || [];
    const selected = selectedPlanId();
    const plan = plans.find((entry) => Number(entry.planId) === selected) || plans[0];
    const next = Array.isArray(plan?.sessions) ? plan.sessions.find((session) => session.status !== 'done') : null;
    let badge = $('#blFitnessNextDueBadge', meta);
    if (!next?.scheduled_date) { badge?.remove(); return; }
    if (!badge) {
      badge = document.createElement('span');
      badge.id = 'blFitnessNextDueBadge';
      badge.className = 'badge';
      meta.appendChild(badge);
    }
    badge.textContent = `Next due: ${formatDate(next.scheduled_date)}`;
  }

  function apply() {
    frame = 0;
    movePublicVisibility();
    expandSkincareProductSelects();
    applyFitnessSummaryFilter();
    enableStartDatePicker();
    ensureNextDueDate();
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(apply);
  }

  document.addEventListener('baseline:routine-rendered', schedule);
  document.addEventListener('baseline:skincare-routine-updated', schedule);
  document.addEventListener('baseline:fitness-plans-updated', schedule);
  document.addEventListener('baseline:fitness-workout-updated', schedule);
  document.addEventListener('baseline:routine-settings-changed', schedule);
  document.addEventListener('baseline:fitness-tab-changed', schedule);
  global.addEventListener('change', (event) => {
    if (event.target?.id === 'fitnessSummaryGroupFilter' || event.target?.closest?.('#routineItems [data-field="productSelection"]')) schedule();
  }, true);
  global.addEventListener('click', (event) => {
    if (event.target?.closest?.('.bl-v4-calendar-marker,[data-fitness-routine-view],[data-fitness-plan-view],.my-plan-subtab')) schedule();
  }, true);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule, { once:true });
  else schedule();
})(typeof window !== 'undefined' ? window : globalThis);
