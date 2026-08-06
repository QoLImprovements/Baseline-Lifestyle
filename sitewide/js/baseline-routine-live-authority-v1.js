/* Baseline Lifestyle — final sitewide authority for live My Routine behaviour.

   This module does not render a second routine. The Skincare/Fitness adapters
   remain the data renderers; this layer only applies shared post-render rules
   (filtering/order/layout) and watches the few output containers that those
   renderers replace. No whole-page or whole-My-Routine observer is used. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V5__) return;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V5__ = true;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V4__ = true;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V3__ = true;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V2__ = true;
  global.__BASELINE_ROUTINE_LIVE_AUTHORITY_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  let frame = 0;
  const observers = [];

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

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key, fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function skinRoutine() {
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`, {});
    return {
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : []
    };
  }

  function skinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`, {});
    const groups = Array.isArray(value?.groups)
      ? value.groups.filter((group) => group?.id && group?.title).map((group) => ({ id:String(group.id), title:String(group.title) }))
      : [];
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([itemId, groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)] = String(groupId);
    });
    return { groups, assignments };
  }

  function publicVisibilityControl(card) {
    const selectId = app === 'skin' ? 'routineVisibility' : 'fitnessRoutineVisibility';
    const select = document.getElementById(selectId);
    let control = card.querySelector(':scope .bl-release-public-visibility,:scope .bl-v4-visibility');
    if (!control && select) control = select.closest('.bl-v4-visibility,.routine-visibility-control,label');
    if (!control && select) {
      control = document.createElement('label');
      control.className = 'bl-v4-visibility';
      control.appendChild(select);
    }
    if (!control) return null;

    control.classList.add('bl-release-public-visibility');
    control.hidden = false;
    control.removeAttribute('aria-hidden');
    control.style.removeProperty('display');
    let label = control.querySelector(':scope > span');
    if (!label) {
      label = document.createElement('span');
      control.insertBefore(label, control.firstChild);
    }
    label.textContent = 'My Routine Visibility';
    return control;
  }

  function movePublicVisibility() {
    const panel = app === 'skin'
      ? $('[data-routine-panel="public"]')
      : $('[data-fitness-routine-panel="public"]');
    const card = panel?.querySelector(app === 'skin' ? '.routine-card' : '.fitness-routine-card');
    if (!card) return;
    card.classList.add('bl-v4-public-card');
    const visibility = publicVisibilityControl(card);
    if (!visibility) return;

    let row = card.querySelector(':scope > .bl-live-public-head');
    if (!row) {
      let headingBlock = Array.from(card.children).find((child) => child !== visibility && (
        child.matches?.('.section-head-actions') || child.matches?.('h1,h2,h3') || child.querySelector?.('h1,h2,h3')
      ));
      if (!headingBlock) return;

      if (headingBlock.matches?.('h1,h2,h3')) {
        const heading = headingBlock;
        const block = document.createElement('div');
        card.insertBefore(block, heading);
        block.appendChild(heading);
        const next = block.nextElementSibling;
        if (next && next !== visibility && next.matches('p,.note')) block.appendChild(next);
        headingBlock = block;
      }

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
    const routine = Array.isArray(snapshot?.routine) ? snapshot.routine : Array.isArray(snapshot?.items) ? snapshot.items : skinRoutine().items;
    const byId = new Map(routine.map((item) => [String(item?.id || ''), item]));
    const byBrand = new Map();
    products.forEach((product) => {
      const brand = String(product?.brand || 'Other').trim() || 'Other';
      if (!byBrand.has(brand)) byBrand.set(brand, []);
      byBrand.get(brand).push(product);
    });
    const brands = Array.from(byBrand.keys()).sort((left,right) => left.localeCompare(right,'en-GB',{ sensitivity:'base' }));
    const catalogueSignature = products.map((product) => `${product.id}:${product.brand}:${product.name}`).join('|');

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

  function setFilterVisibility(node, visible) {
    if (!node) return;
    if (visible) {
      node.removeAttribute('data-bl-live-filter-hidden');
      node.hidden = false;
      node.style.removeProperty('display');
    } else {
      node.dataset.blLiveFilterHidden = 'true';
      node.hidden = true;
    }
  }

  function normalTitle(value) {
    return String(value || '').replace(/^\s*\d+\.?\s*/, '').trim().toLocaleLowerCase('en-GB');
  }

  function applySkinSummaryFilter() {
    if (app !== 'skin') return;
    const select = $('#skinRoutineSummaryFilter');
    const target = $('#routineSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const data = skinGroups();
    const routine = skinRoutine();
    const sectionByGroup = new Map();
    let ungroupedSection = null;

    $$('.routine-summary-group', target).forEach((section) => {
      const title = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((entry) => normalTitle(entry.title) === title);
      if (group) sectionByGroup.set(group.id, section);
      else if (/ungrouped|no routine group/i.test(title)) ungroupedSection = section;
    });

    /* The Summary follows the exact saved Routine Group order. Reorder only
       when the current sequence is actually different; an already-correct
       summary causes no child mutation and therefore cannot shake/reloop. */
    const currentSections = $$('.routine-summary-group', target);
    const desired = data.groups.map((group) => sectionByGroup.get(group.id)).filter(Boolean);
    if (ungroupedSection) desired.push(ungroupedSection);
    currentSections.forEach((section) => { if (!desired.includes(section)) desired.push(section); });
    const sameOrder = currentSections.length === desired.length && currentSections.every((section,index) => desired[index] === section);
    if (!sameOrder) {
      const fragment = document.createDocumentFragment();
      desired.forEach((section) => fragment.appendChild(section));
      target.appendChild(fragment);
    }

    const selectedItemId = value.startsWith('item:') ? value.slice(5) : '';
    const selectedItem = selectedItemId ? routine.items.find((item) => String(item.id) === selectedItemId) : null;
    const selectedItemGroup = selectedItem ? String(data.assignments[selectedItemId] || '') : '';

    $$('.routine-summary-group', target).forEach((section) => {
      const title = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((entry) => normalTitle(entry.title) === title);
      const groupId = group?.id || '';
      let showSection = value === 'all';
      if (value.startsWith('group:')) showSection = groupId === value.slice(6);
      if (selectedItem) showSection = selectedItemGroup ? groupId === selectedItemGroup : section === ungroupedSection;

      $$('.routine-summary-item', section).forEach((card) => {
        let showCard = showSection;
        if (selectedItem) {
          const cardTitle = String(card.querySelector('.routine-summary-title strong')?.textContent || '').trim();
          showCard = showSection && cardTitle.localeCompare(String(selectedItem.title || '').trim(),'en-GB',{ sensitivity:'base' }) === 0;
        }
        setFilterVisibility(card, showCard);
      });
      setFilterVisibility(section, showSection);
    });
  }

  function fitnessRoutine() {
    try {
      const state = global.BASELINE_fitnessRoutine?.getState?.();
      return state && typeof state === 'object' ? state : { activities:[] };
    } catch (_error) { return { activities:[] }; }
  }

  function fitnessSettings() {
    try { return global.BASELINE_RoutineSystem?.readSettings?.() || {};
    } catch (_error) { return {}; }
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
        setFilterVisibility(card, show);
        if (show) visible += 1;
      });
      setFilterVisibility(section, visible > 0);
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
    input.addEventListener('focus', () => {
      /* A normal focus still permits keyboard entry; showPicker is only a
         convenience for pointing-device users. */
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

  function ensureRoutineLogDueDate() {
    if (app !== 'fitness') return;
    let context = null;
    try { context = global.BASELINE_fitnessWorkout?.getCurrentContext?.() || null; } catch (_error) {}
    const scheduledDate = String(context?.scheduledDate || '');
    if (!scheduledDate) return;
    $$('#fitnessRoutineLogItems .fitness-calisthenics-log-card').forEach((card) => {
      /* Cards with a direct plan link already describe a completed/due entry
         for the selected log date. The current-workout fallback is the place
         where weekly-count scheduling previously lacked a visible due date. */
      if (card.querySelector('[data-open-calisthenics-plan]')) return;
      const host = card.querySelector(':scope > div') || card;
      let due = host.querySelector('[data-bl-calisthenics-due]');
      if (!due) {
        due = document.createElement('small');
        due.dataset.blCalisthenicsDue = 'true';
        host.appendChild(due);
      }
      due.textContent = `Due ${formatDate(scheduledDate)}`;
    });
  }

  function apply() {
    frame = 0;
    movePublicVisibility();
    expandSkincareProductSelects();
    applySkinSummaryFilter();
    applyFitnessSummaryFilter();
    enableStartDatePicker();
    ensureNextDueDate();
    ensureRoutineLogDueDate();
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(apply);
  }

  function watchOutput(selector) {
    const target = $(selector);
    if (!target || typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(schedule);
    observer.observe(target, { childList:true, subtree:true });
    observers.push(observer);
  }

  function attachOutputObservers() {
    if (app === 'skin') {
      watchOutput('#routineSummary');
      watchOutput('#routineItems');
    } else {
      watchOutput('#fitnessExerciseSummary');
      watchOutput('#fitnessRoutineLogItems');
      watchOutput('#myPlanOut');
    }
  }

  document.addEventListener('baseline:routine-rendered', schedule);
  document.addEventListener('baseline:skincare-routine-updated', schedule);
  document.addEventListener('baseline:fitness-plans-updated', schedule);
  document.addEventListener('baseline:fitness-workout-updated', schedule);
  document.addEventListener('baseline:routine-settings-changed', schedule);
  document.addEventListener('baseline:fitness-tab-changed', schedule);
  global.addEventListener('change', (event) => {
    if (['fitnessSummaryGroupFilter','skinRoutineSummaryFilter'].includes(event.target?.id)
      || event.target?.closest?.('#routineItems [data-field="productSelection"]')) {
      global.setTimeout(schedule, 0);
    }
  }, true);
  global.addEventListener('click', (event) => {
    if (event.target?.closest?.('.bl-v4-calendar-marker,[data-fitness-routine-view],[data-fitness-plan-view],.my-plan-subtab,[data-skincare-step-toggle],[data-open-product-step]')) {
      global.setTimeout(schedule, 0);
    }
  }, true);

  function boot() {
    attachOutputObservers();
    schedule();
    document.documentElement.setAttribute('data-baseline-routine-live-authority', 'SITEWIDE_ROUTINE_LIVE_AUTHORITY_20260806_5');
  }

  global.addEventListener('pagehide', () => observers.forEach((observer) => observer.disconnect()), { once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
