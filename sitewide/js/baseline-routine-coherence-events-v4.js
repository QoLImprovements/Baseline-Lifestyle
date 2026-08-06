/* Baseline Lifestyle — event-driven refreshes and final My Routine interaction repairs. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V4__) return;
  global.__BASELINE_ROUTINE_COHERENCE_EVENTS_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  let refreshFrame = 0;
  let settleTimer = 0;
  let repairFrame = 0;
  let createStarted = false;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));

  function root() {
    return app === 'skin' ? document.getElementById('routine') : document.getElementById('my-plan');
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
    } catch (_error) {
      return fallback;
    }
  }

  function settings() {
    try { return global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {}; }
    catch (_error) { return {}; }
  }

  function skinRoutine() {
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`, {});
    return {
      visibility:value?.visibility === 'public' ? 'public' : 'private',
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [],
      logs:value?.logs && typeof value.logs === 'object' ? value.logs : {}
    };
  }

  function skinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`, {});
    return {
      groups:Array.isArray(value?.groups) ? value.groups.filter((group) => group && group.id && group.title) : [],
      assignments:value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}
    };
  }

  function fitnessRoutine() {
    try {
      const value = global.BASELINE_fitnessRoutine?.getState?.();
      if (value) return { activities:Array.isArray(value.activities) ? value.activities : [], logs:value.logs || {} };
    } catch (_error) {}
    const value = readJson(`__bl_fitness_routine_v2__::${owner()}`, {});
    return { activities:Array.isArray(value?.activities) ? value.activities : [], logs:value?.logs || {} };
  }

  function fitnessPlans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function fitnessGroups() {
    const value = settings();
    const groups = Array.isArray(value.fitnessRoutineGroups)
      ? value.fitnessRoutineGroups.filter((group) => group && group.id && group.title).map((group) => ({ id:String(group.id), title:String(group.title) }))
      : [];
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(value.fitnessRoutineAssignments && typeof value.fitnessRoutineAssignments === 'object' ? value.fitnessRoutineAssignments : {}).forEach(([key, groupId]) => {
      if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
    });
    return { groups, assignments };
  }

  function fitnessEntities() {
    const plans = fitnessPlans().map((plan, index) => ({
      key:`plan:${Number(plan.planId)}`,
      label:String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index + 1}`),
      section:'calisthenics'
    }));
    const activities = fitnessRoutine().activities.map((activity) => ({
      key:`activity:${activity.id}`,
      label:String(activity.name || 'Fitness activity'),
      section:String(activity.section || 'other')
    }));
    return plans.concat(activities);
  }

  function fitnessEntityNumber(key, data = fitnessGroups(), entities = fitnessEntities()) {
    const groupId = data.assignments[key];
    if (groupId) {
      const groupIndex = data.groups.findIndex((group) => group.id === groupId);
      if (groupIndex >= 0) return groupIndex + 1;
    }
    const ungrouped = entities.filter((entity) => !data.assignments[entity.key]);
    const index = ungrouped.findIndex((entity) => entity.key === key);
    return index >= 0 ? data.groups.length + index + 1 : 0;
  }

  function ensureStyle() {
    if ($('#baselineRoutineReleaseRepairsCss')) return;
    const style = document.createElement('style');
    style.id = 'baselineRoutineReleaseRepairsCss';
    style.textContent = `
      .bl-release-public-visibility{display:flex;align-items:center;justify-content:flex-end;gap:.75rem;flex-wrap:wrap;margin:1rem 0}
      .bl-release-public-visibility>span{font-weight:800}
      .bl-release-public-visibility select{min-width:150px;pointer-events:auto!important;position:relative;z-index:2}
      .bl-release-log-heading{display:flex;align-items:center;gap:.7rem}
      .routine-log-check>span,.fitness-log-completion>span,.fitness-calisthenics-log-card>div{position:relative}
      .routine-log-check>span>.bl-v4-number,.fitness-log-completion>span>.bl-v4-number,.fitness-calisthenics-log-card>div>.bl-v4-number{margin-right:.65rem;vertical-align:middle}
      #publicRoutineName,#fitnessPublicRoutineName{pointer-events:auto!important;position:relative!important;z-index:4!important}
    `;
    document.head.append(style);
  }

  function setVisible(node, visible) {
    if (!node) return;
    node.hidden = !visible;
    if (visible) node.style.removeProperty('display');
    else node.style.setProperty('display', 'none', 'important');
  }

  function ensureNumber(parent, number, label = '') {
    if (!parent || !number) return null;
    let node = parent.querySelector(':scope > .bl-v4-number[data-release-number="true"]');
    if (!node) {
      node = document.createElement('span');
      node.className = 'bl-v4-number';
      node.dataset.releaseNumber = 'true';
      parent.insertAdjacentElement('afterbegin', node);
    }
    if (node.textContent !== String(number)) node.textContent = String(number);
    if (label) node.setAttribute('aria-label', `${number}. ${label}`);
    return node;
  }

  function hideSummaryVisibility(original) {
    const control = original?.closest?.('.bl-v4-visibility,.routine-visibility-control');
    if (!control) return;
    control.hidden = true;
    control.setAttribute('aria-hidden', 'true');
    control.style.setProperty('display', 'none', 'important');
  }

  function publicCard(system) {
    const panel = system === 'skin' ? $('[data-routine-panel="public"]') : $('[data-fitness-routine-panel="public"]');
    return panel?.querySelector(system === 'skin' ? '.routine-card' : '.fitness-routine-card') || null;
  }

  function moveVisibilityToPublic(system) {
    const originalId = system === 'skin' ? 'routineVisibility' : 'fitnessRoutineVisibility';
    const publicId = system === 'skin' ? 'publicRoutineVisibility' : 'fitnessPublicRoutineVisibility';
    const original = document.getElementById(originalId);
    const card = publicCard(system);
    if (!original || !card) return;
    hideSummaryVisibility(original);

    let control = card.querySelector('.bl-release-public-visibility');
    if (!control) {
      control = document.createElement('label');
      control.className = 'bl-release-public-visibility';
      control.innerHTML = `<span>My Routine Visibility</span><select id="${publicId}" data-native-select="true"><option value="private">Private</option><option value="public">Public</option></select>`;
      const controls = card.querySelector(system === 'skin' ? '.routine-public-select,.bl-v4-public-controls' : '.bl-v4-public-controls');
      (controls || card.firstElementChild || card).insertAdjacentElement(controls ? 'beforebegin' : 'afterend', control);
    }
    const publicSelect = $(`#${publicId}`, control);
    if (!publicSelect) return;
    if (publicSelect.value !== original.value) publicSelect.value = original.value || 'private';
    if (publicSelect.dataset.releaseVisibilityBound !== 'true') {
      publicSelect.dataset.releaseVisibilityBound = 'true';
      publicSelect.addEventListener('change', () => {
        original.value = publicSelect.value;
        original.dispatchEvent(new Event('change', { bubbles:true }));
      });
    }
  }

  function applySkinSummaryFilter() {
    const select = $('#skinRoutineSummaryFilter');
    const target = $('#routineSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const data = skinGroups();
    const routine = skinRoutine();
    const groupsByTitle = new Map(data.groups.map((group) => [String(group.title).trim().toLocaleLowerCase('en-GB'), String(group.id)]));
    const selectedItem = value.startsWith('item:') ? routine.items.find((item) => String(item.id) === value.slice(5)) : null;

    $$('.routine-summary-group', target).forEach((section) => {
      const title = section.querySelector('h3')?.textContent?.trim().toLocaleLowerCase('en-GB') || '';
      const groupId = groupsByTitle.get(title) || '';
      let showSection = value === 'all';
      if (value.startsWith('group:')) showSection = groupId === value.slice(6);
      if (value.startsWith('item:')) showSection = !groupId && Boolean(selectedItem);

      $$('.routine-summary-item', section).forEach((card) => {
        let showCard = showSection;
        if (selectedItem) {
          const cardTitle = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
          showCard = showSection && cardTitle === String(selectedItem.title || '').trim();
        }
        setVisible(card, showCard);
      });
      setVisible(section, showSection && (value !== 'item:' || Boolean(selectedItem)));
    });
  }

  function mapFitnessCard(card, routine) {
    if (card.dataset.v4Entity) return card.dataset.v4Entity;
    const badge = card.querySelector('.badge')?.textContent?.trim() || '';
    const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
    if (badge === 'Calisthenics') return `plan:${selectedPlanId()}`;
    const activity = routine.activities.find((item) => String(item.name || '').trim() === title);
    return activity ? `activity:${activity.id}` : '';
  }

  function applyFitnessSummaryFilter() {
    const select = $('#fitnessSummaryGroupFilter');
    const target = $('#fitnessExerciseSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const data = fitnessGroups();
    const routine = fitnessRoutine();
    $$('.fitness-summary-group', target).forEach((section) => {
      let visible = 0;
      $$('.fitness-exercise-summary-item', section).forEach((card) => {
        const key = mapFitnessCard(card, routine);
        if (key) card.dataset.v4Entity = key;
        let show = value === 'all';
        if (value.startsWith('group:')) show = data.assignments[key] === value.slice(6);
        if (value.startsWith('entity:')) show = key === value.slice(7);
        setVisible(card, show);
        if (show) visible += 1;
      });
      setVisible(section, visible > 0);
    });
  }

  function decorateSkinLogNumbers() {
    const target = $('#routineLogItems');
    if (!target) return;
    const data = skinGroups();
    const routine = skinRoutine();
    const groupIndex = new Map(data.groups.map((group, index) => [String(group.id), index + 1]));
    const groupByTitle = new Map(data.groups.map((group, index) => [String(group.title).trim().toLocaleLowerCase('en-GB'), index + 1]));
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    const ungroupedIndex = new Map(ungrouped.map((item, index) => [String(item.id), data.groups.length + index + 1]));

    $$('.routine-log-group', target).forEach((section) => {
      const heading = section.querySelector(':scope > .routine-log-group-head h3,:scope > h3');
      const title = heading?.textContent?.trim() || '';
      const number = groupByTitle.get(title.toLocaleLowerCase('en-GB')) || 0;
      if (heading && number) {
        const head = heading.parentElement;
        head?.classList.add('bl-release-log-heading');
        ensureNumber(head, number, title);
      }
    });

    $$('.routine-log-item', target).forEach((card) => {
      const id = card.querySelector('[data-log-complete]')?.dataset.logComplete || '';
      const titleWrap = card.querySelector('.routine-log-check > span');
      const title = titleWrap?.querySelector('strong')?.textContent?.trim() || '';
      const groupNumber = groupIndex.get(String(data.assignments[id] || '')) || 0;
      const number = groupNumber || ungroupedIndex.get(String(id)) || 0;
      ensureNumber(titleWrap, number, title);
    });
  }

  function fitnessLogKey(card) {
    const planId = card.querySelector('[data-open-calisthenics-plan]')?.dataset.openCalisthenicsPlan;
    if (planId) return `plan:${Number(planId)}`;
    if (card.classList.contains('fitness-calisthenics-log-card')) {
      const selected = selectedPlanId();
      return selected ? `plan:${selected}` : '';
    }
    const activityId = card.querySelector('[data-fitness-log-complete]')?.dataset.fitnessLogComplete;
    return activityId ? `activity:${activityId}` : '';
  }

  function decorateFitnessLogNumbers() {
    const target = $('#fitnessRoutineLogItems');
    if (!target) return;
    const data = fitnessGroups();
    const entities = fitnessEntities();

    $$('.fitness-routine-log-item,.fitness-calisthenics-log-card', target).forEach((card) => {
      const key = fitnessLogKey(card);
      if (!key) return;
      const number = fitnessEntityNumber(key, data, entities);
      const titleWrap = card.classList.contains('fitness-calisthenics-log-card')
        ? card.querySelector(':scope > div')
        : card.querySelector('.fitness-log-completion > span');
      const title = titleWrap?.querySelector('strong')?.textContent?.trim() || '';
      ensureNumber(titleWrap, number, title);
      card.dataset.releaseEntity = key;
    });

    $$('.fitness-routine-log-group', target).forEach((section) => {
      const keys = $$('[data-release-entity]', section).map((card) => card.dataset.releaseEntity).filter(Boolean);
      const groupIds = Array.from(new Set(keys.map((key) => data.assignments[key]).filter(Boolean)));
      if (groupIds.length !== 1) return;
      const index = data.groups.findIndex((group) => group.id === groupIds[0]);
      const heading = section.querySelector(':scope > h3');
      if (index >= 0 && heading) {
        heading.classList.add('bl-release-log-heading');
        ensureNumber(heading, index + 1, data.groups[index].title);
      }
    });
  }

  function nativePublicSelect(select) {
    if (!select) return null;
    const wrapper = select.parentElement?.classList?.contains('bl-select') ? select.parentElement : null;
    if (wrapper) {
      wrapper.parentNode?.insertBefore(select, wrapper);
      wrapper.remove();
    }
    select.dataset.nativeSelect = 'true';
    select.disabled = select.options.length <= 1 && /No public routines|could not be loaded|Loading/i.test(select.options[0]?.textContent || '');
    return select;
  }

  function frequencyText(item) {
    const frequency = item?.frequency || {};
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return Array.isArray(frequency.days) && frequency.days.length ? frequency.days.join(', ') : 'Specific days';
    if (frequency.mode === 'weekly') return `${Number(frequency.timesPerWeek || 1)}× each week`;
    if (frequency.mode === 'monthly') return `${Number(frequency.timesPerMonth || 1)}× each month`;
    return 'As needed';
  }

  async function loadSkinPublicRoutine(name) {
    const target = $('#publicRoutineResult');
    if (!name) return;
    if (target) target.innerHTML = '<div class="routine-empty">Loading public routine…</div>';
    try {
      const response = await fetch(`/systems/baseline-natural-skincare/api/routine_state.php?name=${encodeURIComponent(name)}`, { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (!response.ok || !data?.ok || !data.publicRoutine) throw new Error('load_failed');
      const routine = Array.isArray(data.publicRoutine.routine) ? data.publicRoutine.routine : [];
      const order = ['morning','evening','anytime'];
      const labels = { morning:'Morning', evening:'Evening', anytime:'Any time' };
      const groups = order.map((time) => {
        const items = routine.filter((item) => String(item.timeOfDay || 'anytime') === time);
        if (!items.length) return '';
        return `<section class="public-routine-group"><h4>${labels[time]}</h4>${items.map((item) => `<article><strong>${esc(item.title || 'Routine action')}</strong><span>${esc(frequencyText(item))}</span>${item.benefit ? `<p>${esc(item.benefit)}</p>` : ''}${item.notes ? `<p><strong>Notes:</strong> ${esc(item.notes)}</p>` : ''}</article>`).join('')}</section>`;
      }).join('');
      if (target) target.innerHTML = `<h3>${esc(data.publicRoutine.owner || name)}’s Routine</h3>${groups || '<p>This public routine has no actions.</p>'}`;
    } catch (_error) {
      if (target) target.innerHTML = '<div class="routine-empty">The public routine could not be loaded.</div>';
    }
  }

  async function loadFitnessPublicRoutine(name) {
    const target = $('#fitnessPublicRoutineResult');
    if (!name) return;
    if (target) target.innerHTML = '<p>Loading public routine…</p>';
    try {
      const response = await fetch(`/systems/baseline-fitness/api/routine_state.php?name=${encodeURIComponent(name)}`, { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (!response.ok || !data?.ok || !data.publicRoutine) throw new Error('load_failed');
      const routine = data.publicRoutine;
      const plans = Array.isArray(routine.plans) ? routine.plans : [];
      const activities = Array.isArray(routine.activities) ? routine.activities : [];
      const planHtml = plans.map((plan, index) => `<section class="bl-v4-public-group"><h3>${index + 1}. ${esc(plan?.planJson?.name || `Calisthenics Plan ${index + 1}`)}</h3>${(plan?.planJson?.items || []).map((item) => `<article class="bl-v4-public-item"><h4>${esc(item.exercise || item.name || 'Exercise')}</h4><ul><li>${esc(item.sets ? `${item.sets} sets` : 'Progressive exercise plan')}</li>${item.baseline ? `<li>Baseline: ${esc(item.baseline)}</li>` : ''}</ul></article>`).join('') || '<p>No exercises are listed.</p>'}</section>`).join('');
      const activitiesHtml = activities.length ? `<section class="bl-v4-public-group"><h3>${plans.length + 1}. Other Fitness Activities</h3>${activities.map((activity) => `<article class="bl-v4-public-item"><h4>${esc(activity.name)}</h4><p>${esc(activity.notes || 'A scheduled activity in this public routine.')}</p></article>`).join('')}</section>` : '';
      if (target) target.innerHTML = `<h3>${esc(routine.owner || name)}’s Routine</h3>${planHtml}${activitiesHtml || (!planHtml ? '<p>This public routine does not currently contain plans or activities.</p>' : '')}`;
    } catch (_error) {
      if (target) target.innerHTML = '<p>The public routine could not be loaded.</p>';
    }
  }

  function repairPublicSelectors() {
    const skinSelect = nativePublicSelect($('#publicRoutineName'));
    if (skinSelect && skinSelect.dataset.releasePublicBound !== 'true') {
      skinSelect.dataset.releasePublicBound = 'true';
      skinSelect.addEventListener('change', () => {
        const name = String(skinSelect.value || '').trim();
        const button = $('#findPublicRoutineBtn');
        if (button) button.disabled = !name;
        if (name) loadSkinPublicRoutine(name);
      });
    }

    const fitnessSelect = nativePublicSelect($('#fitnessPublicRoutineName'));
    if (fitnessSelect && fitnessSelect.dataset.releasePublicBound !== 'true') {
      fitnessSelect.dataset.releasePublicBound = 'true';
      fitnessSelect.addEventListener('change', () => {
        const name = String(fitnessSelect.value || '').trim();
        const button = $('#fitnessViewPublicRoutine');
        if (button) button.disabled = !name;
        if (name) loadFitnessPublicRoutine(name);
      });
    }
  }

  function clearFitnessPlanCaches() {
    try {
      const keys = [];
      for (let index = 0; index < global.localStorage.length; index += 1) {
        const key = global.localStorage.key(index) || '';
        if (key.startsWith('__bl_fitness_plan_cache_v1__::')) keys.push(key);
      }
      keys.forEach((key) => global.localStorage.removeItem(key));
    } catch (_error) {}
  }

  function startAnotherPlan() {
    if (createStarted) return;
    createStarted = true;
    const keyOwner = owner();
    try {
      global.localStorage?.setItem(`__bl_fitness_creating_plan_v1__::${keyOwner}`, '1');
      global.localStorage?.removeItem(`__bl_fitness_selected_plan_v1__::${keyOwner}`);
      global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'plan');
      global.sessionStorage?.setItem('__bl_fitness_plan_view_v4__', 'calisthenics');
      global.sessionStorage?.setItem('__bl_fitness_new_plan_requested_v1__', String(Date.now()));
    } catch (_error) {}
    clearFitnessPlanCaches();
    const url = new URL('/baseline-fitness/my-routine', global.location.origin);
    url.searchParams.set('new-plan', String(Date.now()));
    global.location.replace(url.toString());
  }

  function applyReleaseRepairs() {
    repairFrame = 0;
    ensureStyle();
    if (app === 'skin') {
      moveVisibilityToPublic('skin');
      applySkinSummaryFilter();
      decorateSkinLogNumbers();
    } else {
      moveVisibilityToPublic('fitness');
      applyFitnessSummaryFilter();
      decorateFitnessLogNumbers();
    }
    repairPublicSelectors();
  }

  function scheduleRepairs() {
    if (repairFrame) return;
    repairFrame = global.requestAnimationFrame(applyReleaseRepairs);
  }

  function dispatchSharedRefresh() {
    try { document.dispatchEvent(new CustomEvent('baseline:routine-settings-changed')); } catch (_error) {}
    global.setTimeout(scheduleRepairs, 0);
  }

  function refreshAfterRender() {
    if (!refreshFrame) {
      refreshFrame = global.requestAnimationFrame(() => {
        refreshFrame = 0;
        dispatchSharedRefresh();
      });
    }
    global.clearTimeout(settleTimer);
    settleTimer = global.setTimeout(dispatchSharedRefresh, 160);
  }

  function insideRoutine(event) {
    const container = root();
    return Boolean(container && event.target && container.contains(event.target));
  }

  function captureRoutineInteraction(event) {
    if (insideRoutine(event)) refreshAfterRender();
  }

  function captureRoutineInput(event) {
    if (insideRoutine(event) && event.target?.matches?.('select,input[type="checkbox"],input[type="radio"]')) refreshAfterRender();
  }

  function handlePointerDown(event) {
    if (app !== 'fitness' || !event.target?.closest?.('#createCalisthenicsPlan')) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    startAnotherPlan();
  }

  function handleClick(event) {
    if (app === 'fitness' && event.target?.closest?.('#createCalisthenicsPlan')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      startAnotherPlan();
      return;
    }
    if (event.target?.closest?.('#findPublicRoutineBtn')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      const name = String($('#publicRoutineName')?.value || '').trim();
      if (name) loadSkinPublicRoutine(name);
      else $('#publicRoutineName')?.focus();
      return;
    }
    if (event.target?.closest?.('#fitnessViewPublicRoutine')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      const name = String($('#fitnessPublicRoutineName')?.value || '').trim();
      if (name) loadFitnessPublicRoutine(name);
      else $('#fitnessPublicRoutineName')?.focus();
      return;
    }
    captureRoutineInteraction(event);
  }

  function handleChange(event) {
    if (event.target?.id === 'skinRoutineSummaryFilter') {
      applySkinSummaryFilter();
      return;
    }
    if (event.target?.id === 'fitnessSummaryGroupFilter') {
      applyFitnessSummaryFilter();
      return;
    }
    captureRoutineInteraction(event);
  }

  global.addEventListener('pointerdown', handlePointerDown, true);
  global.addEventListener('click', handleClick, true);
  global.addEventListener('change', handleChange, true);
  global.addEventListener('input', captureRoutineInput, true);
  document.addEventListener('baseline:skincare-routine-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-plans-updated', refreshAfterRender);
  document.addEventListener('baseline:fitness-workout-updated', refreshAfterRender);
  global.addEventListener('pageshow', refreshAfterRender);
  global.addEventListener('pagehide', () => {
    if (refreshFrame) global.cancelAnimationFrame(refreshFrame);
    if (repairFrame) global.cancelAnimationFrame(repairFrame);
    global.clearTimeout(settleTimer);
  }, { once:true });

  refreshAfterRender();
})(typeof window !== 'undefined' ? window : globalThis);
