/* Baseline Lifestyle — one stable My Routine coherence layer for Skincare, Fitness and future systems. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_V4__) return;
  global.__BASELINE_ROUTINE_COHERENCE_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const UI = global.BASELINE_RoutineSystem;
  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => UI?.escapeHtml?.(value) || String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));
  const state = {
    frame:0,
    applying:false,
    observer:null,
    tooltip:null,
    tooltipMarker:null,
    longPressTimer:0,
    longPressed:false,
    fitnessVisibility:'private',
    fitnessVisibilityLoaded:false,
    fitnessPublicLoaded:false,
    fitnessPlanView:'calisthenics',
    skinSummary:'all',
    fitnessSummary:'all'
  };

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

  function injectCss() {
    if ($('#baselineRoutineCoherenceV4Css')) return;
    const link = document.createElement('link');
    link.id = 'baselineRoutineCoherenceV4Css';
    link.rel = 'stylesheet';
    link.href = '/sitewide/css/baseline-routine-coherence-v4.css?v=SITEWIDE_ROUTINE_COHERENCE_20260806_6';
    document.head.append(link);
  }

  function nativeSelect(select) {
    if (!select) return null;
    select.dataset.nativeSelect = 'true';
    select.classList.add('bl-v4-native-select');
    const wrapper = select.parentElement?.classList?.contains('bl-select') ? select.parentElement : null;
    if (wrapper) {
      wrapper.parentNode?.insertBefore(select, wrapper);
      wrapper.remove();
    }
    return select;
  }

  function removeDuplicateIds(id) {
    const nodes = $$(`[id="${CSS.escape(id)}"]`);
    nodes.slice(1).forEach((node) => {
      const wrapper = node.closest('.bl-select');
      (wrapper || node).remove();
    });
    return nativeSelect(nodes[0]);
  }

  function settings() {
    return UI?.readSettings?.(owner()) || {};
  }

  function writeSettings(patch) {
    return UI?.writeSettings?.(patch, owner()) || Object.assign(settings(), patch || {});
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
      groups:Array.isArray(value?.groups) ? value.groups : [],
      assignments:value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}
    };
  }

  function fitnessRoutine() {
    try {
      const value = global.BASELINE_fitnessRoutine?.getState?.();
      if (value) return { activities:Array.isArray(value.activities) ? value.activities : [], logs:value.logs && typeof value.logs === 'object' ? value.logs : {} };
    } catch (_error) {}
    const value = readJson(`__bl_fitness_routine_v2__::${owner()}`, {});
    return { activities:Array.isArray(value?.activities) ? value.activities : [], logs:value?.logs && typeof value.logs === 'object' ? value.logs : {} };
  }

  function fitnessPlans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function planLabel(plan, index) {
    return String(plan?.planJson?.name || plan?.name || `Calisthenics Plan ${index + 1}`).trim();
  }

  function fitnessGroupData() {
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

  function saveFitnessGroupData(data) {
    writeSettings({ fitnessRoutineGroups:data.groups, fitnessRoutineAssignments:data.assignments });
  }

  function uniqueGroupId() {
    return global.crypto?.randomUUID ? `fitness-group-${global.crypto.randomUUID()}` : `fitness-group-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  }

  function fitnessEntities() {
    const plans = fitnessPlans().map((plan, index) => ({
      key:`plan:${Number(plan.planId)}`,
      label:planLabel(plan, index),
      section:'calisthenics',
      type:'plan',
      planId:Number(plan.planId)
    }));
    const activities = fitnessRoutine().activities.map((activity) => ({
      key:`activity:${activity.id}`,
      label:String(activity.name || 'Fitness activity'),
      section:String(activity.section || 'other'),
      type:'activity',
      activityId:String(activity.id)
    }));
    return plans.concat(activities);
  }

  function fitnessEntityNumber(key, data = fitnessGroupData(), entities = fitnessEntities()) {
    const groupId = data.assignments[key];
    if (groupId) {
      const groupIndex = data.groups.findIndex((group) => group.id === groupId);
      if (groupIndex >= 0) return groupIndex + 1;
    }
    const ungrouped = entities.filter((entity) => !data.assignments[entity.key]);
    const index = ungrouped.findIndex((entity) => entity.key === key);
    return index >= 0 ? data.groups.length + index + 1 : 0;
  }

  function completed(entry) {
    return entry === true || Boolean(entry?.completed);
  }

  function numberNode(number, label = '') {
    const span = document.createElement('span');
    span.className = 'bl-v4-number';
    span.textContent = String(number);
    if (label) span.setAttribute('aria-label', `${number}. ${label}`);
    return span;
  }

  function ensureFitnessPlanLayer() {
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs', shell);
    if (!shell || !nav) return;
    nav.classList.add('bl-v4-main-tabs');

    const oldSections = ['calisthenics','cardio','other','sports'];
    oldSections.forEach((view) => {
      const button = $(`[data-fitness-routine-view="${view}"]`, nav);
      if (button) button.remove();
    });

    let planButton = $('[data-fitness-routine-view="plan"]', nav);
    if (!planButton) {
      planButton = document.createElement('button');
      planButton.type = 'button';
      planButton.className = 'tab fitness-routine-subtab bl-routine-tab';
      planButton.dataset.fitnessRoutineView = 'plan';
      planButton.setAttribute('role', 'tab');
      planButton.setAttribute('aria-selected', 'false');
      planButton.textContent = 'Routine Plan';
    }

    let planPanel = $('[data-fitness-routine-panel="plan"]', shell);
    if (!planPanel) {
      planPanel = document.createElement('div');
      planPanel.className = 'fitness-routine-panel bl-routine-panel bl-v4-plan-shell';
      planPanel.dataset.fitnessRoutinePanel = 'plan';
      planPanel.hidden = true;
      planPanel.innerHTML = '<nav class="bl-v4-plan-tabs" role="tablist" aria-label="Routine Plan sections"></nav><div class="bl-v4-plan-host"></div>';
      const summary = $('[data-fitness-routine-panel="summary"]', shell);
      (summary || $('[data-fitness-routine-panel="log"]', shell))?.insertAdjacentElement('afterend', planPanel);
    }

    const planNav = $('.bl-v4-plan-tabs', planPanel);
    const host = $('.bl-v4-plan-host', planPanel);
    const labels = {
      calisthenics:'Calisthenics',
      cardio:'Cardio',
      other:'Other Fitness Activities',
      sports:'Sports'
    };
    oldSections.forEach((view) => {
      let button = $(`[data-fitness-plan-view="${view}"]`, planNav);
      if (!button) {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'tab bl-routine-tab';
        button.dataset.fitnessPlanView = view;
        button.setAttribute('role', 'tab');
        button.textContent = labels[view];
        planNav.append(button);
      }
      let panel = $(`[data-fitness-plan-panel="${view}"]`, host);
      if (!panel) {
        panel = $(`[data-fitness-routine-panel="${view}"]`, shell);
        if (panel) {
          panel.dataset.fitnessPlanPanel = view;
          panel.classList.remove('fitness-routine-panel','bl-routine-panel','active');
          panel.classList.add('bl-v4-plan-panel');
          host.append(panel);
        }
      }
    });

    const logButton = $('[data-fitness-routine-view="log"]', nav);
    const summaryButton = $('[data-fitness-routine-view="summary"]', nav);
    const publicButton = $('[data-fitness-routine-view="public"]', nav);
    [logButton,summaryButton,planButton,publicButton].filter(Boolean).forEach((button) => nav.append(button));

    let remembered = '';
    try { remembered = String(global.sessionStorage?.getItem('__bl_fitness_plan_view_v4__') || ''); } catch (_error) {}
    if (oldSections.includes(remembered)) state.fitnessPlanView = remembered;
    activateFitnessPlanView(state.fitnessPlanView, false);
  }

  function activateFitnessPlanView(view, remember = true) {
    const valid = ['calisthenics','cardio','other','sports'];
    const next = valid.includes(view) ? view : 'calisthenics';
    state.fitnessPlanView = next;
    $$('.bl-v4-plan-tabs [data-fitness-plan-view]').forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.fitnessPlanView === next ? 'true' : 'false');
    });
    $$('[data-fitness-plan-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.fitnessPlanPanel !== next;
    });
    if (remember) {
      try { global.sessionStorage?.setItem('__bl_fitness_plan_view_v4__', next); } catch (_error) {}
    }
  }

  function activateFitnessMain(view) {
    const shell = $('.fitness-routine-shell');
    if (!shell) return;
    $$('.fitness-routine-subtabs [data-fitness-routine-view]', shell).forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.fitnessRoutineView === view ? 'true' : 'false');
    });
    $$(':scope > [data-fitness-routine-panel]', shell).forEach((panel) => {
      const active = panel.dataset.fitnessRoutinePanel === view;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    try { global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', view); } catch (_error) {}
    if (view === 'plan') activateFitnessPlanView(state.fitnessPlanView, false);
  }

  function groupOptions(selected, data = fitnessGroupData()) {
    return `<option value="">No routine group</option>${data.groups.map((group, index) => `<option value="${esc(group.id)}"${group.id === selected ? ' selected' : ''}>${index + 1}. ${esc(group.title)}</option>`).join('')}`;
  }

  function ensureFitnessGroupCards() {
    const data = fitnessGroupData();
    const entities = fitnessEntities();
    const labels = { calisthenics:'Calisthenics plans', cardio:'Cardio activities', other:'Other fitness activities', sports:'Sports activities' };
    ['calisthenics','cardio','other','sports'].forEach((section) => {
      const panel = $(`[data-fitness-plan-panel="${section}"]`);
      if (!panel) return;
      let card = panel.querySelector(':scope > .bl-v4-group-card');
      if (!card) {
        card = document.createElement('section');
        card.className = 'bl-v4-group-card';
        card.dataset.v4GroupCard = section;
        card.innerHTML = `<div><h3>Create Routine Group</h3><p class="note">Create a group once, then place plans or activities from any Routine Plan section into it.</p></div><div class="bl-v4-group-create"><label class="field-stack"><span>Group name</span><input type="text" maxlength="80" data-v4-group-name="${section}" placeholder="Name a routine group…"></label><button type="button" class="action secondary" data-v4-create-group="${section}">Create Group</button></div><div class="bl-v4-group-list" data-v4-group-list="${section}"></div><div><h4>${esc(labels[section])}</h4><div class="bl-v4-assignment-list" data-v4-assignment-list="${section}"></div></div>`;
        panel.prepend(card);
      }
      const groupList = $(`[data-v4-group-list="${section}"]`, card);
      const groupsHtml = data.groups.length ? data.groups.map((group, index) => `<div class="bl-v4-group-row"><span class="bl-v4-number">${index + 1}</span><strong>${esc(group.title)}</strong><button type="button" class="tiny-btn bl-v4-group-remove" data-v4-remove-group="${esc(group.id)}" aria-label="Remove ${esc(group.title)}">×</button></div>`).join('') : '<p class="note">No routine groups created yet.</p>';
      if (groupList && groupList.innerHTML !== groupsHtml) groupList.innerHTML = groupsHtml;

      const list = $(`[data-v4-assignment-list="${section}"]`, card);
      const sectionEntities = entities.filter((entity) => entity.section === section);
      const assignmentsHtml = sectionEntities.length ? sectionEntities.map((entity) => {
        const number = fitnessEntityNumber(entity.key, data, entities);
        return `<label class="bl-v4-assignment-row"><span class="bl-v4-number">${number}</span><strong>${esc(entity.label)}</strong><select data-v4-entity-group="${esc(entity.key)}">${groupOptions(data.assignments[entity.key] || '', data)}</select></label>`;
      }).join('') : `<p class="note">No ${esc(labels[section].toLocaleLowerCase('en-GB'))} are currently saved.</p>`;
      if (list && list.innerHTML !== assignmentsHtml && !list.contains(document.activeElement)) list.innerHTML = assignmentsHtml;
      $$('select', card).forEach(nativeSelect);
    });
  }

  function decorateFitnessEntityNumbers() {
    const data = fitnessGroupData();
    const entities = fitnessEntities();
    $$('.fitness-activity-item[data-activity-card]').forEach((card) => {
      const key = `activity:${card.dataset.activityCard}`;
      const entity = entities.find((item) => item.key === key);
      const head = card.querySelector('.fitness-activity-item-head>div:first-child');
      if (!head || !entity) return;
      head.querySelectorAll(':scope > .bl-v4-number,.badge').forEach((node) => node.remove());
      head.insertAdjacentElement('afterbegin', numberNode(fitnessEntityNumber(key, data, entities), entity.label));
    });
  }

  function decorateSkinNumbers() {
    const data = skinGroups();
    const routine = skinRoutine();
    const byTitle = new Map(data.groups.map((group, index) => [String(group.title || '').trim().toLocaleLowerCase('en-GB'), { group, number:index + 1 }]));

    $$('.routine-plan-group[data-plan-group]').forEach((section) => {
      const index = data.groups.findIndex((group) => String(group.id) === String(section.dataset.planGroup));
      if (index < 0) return;
      const heading = section.querySelector(':scope > .routine-plan-group-head h3');
      if (!heading) return;
      heading.parentElement?.classList.add('bl-v4-numbered-heading');
      heading.parentElement?.querySelectorAll(':scope > .bl-v4-number,:scope > .bl-routine-group-number').forEach((node) => node.remove());
      heading.insertAdjacentElement('beforebegin', numberNode(index + 1, data.groups[index].title));
      section.querySelectorAll('.routine-item .routine-order,.routine-item .bl-v4-number').forEach((badge) => badge.remove());
    });

    const ungrouped = $('.routine-plan-group-ungrouped');
    if (ungrouped) {
      $$('.routine-item[data-routine-item]', ungrouped).forEach((item, index) => {
        const head = item.querySelector('.routine-item-head');
        const title = head?.querySelector('strong,h3');
        if (!head || !title) return;
        head.querySelectorAll('.routine-order,.bl-v4-number').forEach((node) => node.remove());
        head.insertAdjacentElement('afterbegin', numberNode(data.groups.length + index + 1, title.textContent.trim()));
      });
    }

    $$('#routineSummary .routine-summary-group').forEach((section) => {
      const heading = section.querySelector('.routine-summary-group-head h3, :scope > h3');
      const title = heading?.textContent?.trim() || '';
      const record = byTitle.get(title.toLocaleLowerCase('en-GB'));
      const head = heading?.parentElement;
      if (record && head) {
        head.classList.add('bl-v4-numbered-heading');
        head.querySelectorAll(':scope > .bl-v4-number,:scope > .bl-routine-group-number').forEach((node) => node.remove());
        heading.insertAdjacentElement('beforebegin', numberNode(record.number, record.group.title));
        section.querySelectorAll('.routine-summary-title > span').forEach((node) => node.remove());
      } else if (/ungrouped/i.test(title)) {
        const items = routine.items.filter((item) => !data.assignments[item.id]);
        $$('.routine-summary-item', section).forEach((card, index) => {
          const titleWrap = card.querySelector('.routine-summary-title');
          if (!titleWrap) return;
          titleWrap.querySelectorAll(':scope > span').forEach((node) => node.remove());
          const label = items[index]?.title || titleWrap.textContent.trim();
          titleWrap.insertAdjacentElement('afterbegin', numberNode(data.groups.length + index + 1, label));
        });
      }
    });
  }

  function compactVisibility(system) {
    const panel = system === 'skin' ? $('[data-routine-panel="summary"]') : $('[data-fitness-routine-panel="summary"]');
    const card = panel?.querySelector(system === 'skin' ? '.routine-card' : '.fitness-routine-card');
    if (!card) return;
    const heading = card.querySelector('.section-head-actions') || card.querySelector('h2')?.parentElement || card;
    heading.classList.add('bl-v4-summary-head');
    let control = card.querySelector(':scope .bl-v4-visibility');
    if (!control) {
      control = document.createElement('label');
      control.className = 'bl-v4-visibility';
      control.innerHTML = `<span>My Routine Visibility</span><select id="${system === 'skin' ? 'routineVisibility' : 'fitnessRoutineVisibility'}" data-native-select="true"><option value="private">Private</option><option value="public">Public</option></select>`;
      heading.append(control);
    }

    if (system === 'skin') {
      const existing = $$('.routine-visibility-control select#routineVisibility').find((select) => select !== control.querySelector('select'));
      const value = existing?.value || skinRoutine().visibility;
      if (existing) {
        control.querySelector('select').replaceWith(existing);
        existing.id = 'routineVisibility';
      }
      removeDuplicateIds('routineVisibility');
      const select = nativeSelect($('#routineVisibility', control));
      if (select) select.value = value;
      $$('.routine-visibility-control').forEach((node) => node.remove());
    } else {
      const select = nativeSelect($('#fitnessRoutineVisibility', control));
      if (select) select.value = state.fitnessVisibility;
      if (!state.fitnessVisibilityLoaded) loadFitnessVisibility();
    }
  }

  async function loadFitnessVisibility() {
    state.fitnessVisibilityLoaded = true;
    try {
      const response = await fetch('/systems/baseline-fitness/api/routine_state.php', { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (response.ok && data?.ok) state.fitnessVisibility = data.visibility === 'public' ? 'public' : 'private';
    } catch (_error) {}
    const select = $('#fitnessRoutineVisibility');
    if (select) select.value = state.fitnessVisibility;
  }

  async function saveFitnessVisibility(value) {
    state.fitnessVisibility = value === 'public' ? 'public' : 'private';
    const routine = fitnessRoutine();
    try {
      await fetch('/systems/baseline-fitness/api/routine_state.php', {
        method:'POST', credentials:'same-origin', headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body:JSON.stringify({ visibility:state.fitnessVisibility, activities:routine.activities, logs:routine.logs })
      });
    } catch (_error) {}
  }

  function ensureSummaryFilter(system) {
    const target = system === 'skin' ? $('#routineSummary') : $('#fitnessExerciseSummary');
    if (!target) return;
    let row = target.previousElementSibling?.classList?.contains('bl-v4-summary-filter-row') ? target.previousElementSibling : null;
    if (!row) {
      row = document.createElement('div');
      row.className = 'bl-v4-summary-filter-row';
      row.innerHTML = `<label class="bl-v4-summary-filter"><span>Show Routine Group</span><select id="${system === 'skin' ? 'skinRoutineSummaryFilter' : 'fitnessSummaryGroupFilter'}" data-native-select="true"></select></label>`;
      target.insertAdjacentElement('beforebegin', row);
    }
    const select = nativeSelect($('select', row));
    if (!select) return;

    if (system === 'skin') {
      const data = skinGroups();
      const routine = skinRoutine();
      const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
      const options = `<option value="all">All Routine Groups</option>${data.groups.map((group, index) => `<option value="group:${esc(group.id)}">${index + 1}. ${esc(group.title)}</option>`).join('')}${ungrouped.map((item, index) => `<option value="item:${esc(item.id)}">${data.groups.length + index + 1}. ${esc(item.title)}</option>`).join('')}`;
      if (select.innerHTML !== options) select.innerHTML = options;
      if (![...select.options].some((option) => option.value === state.skinSummary)) state.skinSummary = 'all';
      select.value = state.skinSummary;
      applySkinSummaryFilter();
    } else {
      const data = fitnessGroupData();
      const entities = fitnessEntities();
      const ungrouped = entities.filter((entity) => !data.assignments[entity.key]);
      const options = `<option value="all">All Routine Groups</option>${data.groups.map((group, index) => `<option value="group:${esc(group.id)}">${index + 1}. ${esc(group.title)}</option>`).join('')}${ungrouped.map((entity) => `<option value="entity:${esc(entity.key)}">${fitnessEntityNumber(entity.key, data, entities)}. ${esc(entity.label)}</option>`).join('')}`;
      if (select.innerHTML !== options) select.innerHTML = options;
      if (![...select.options].some((option) => option.value === state.fitnessSummary)) state.fitnessSummary = 'all';
      select.value = state.fitnessSummary;
      applyFitnessSummaryFilter();
    }
  }

  function applySkinSummaryFilter() {
    const value = state.skinSummary;
    const data = skinGroups();
    const routine = skinRoutine();
    const groupByTitle = new Map(data.groups.map((group) => [String(group.title || '').trim().toLocaleLowerCase('en-GB'), group.id]));
    $$('#routineSummary .routine-summary-group').forEach((section) => {
      const title = section.querySelector('h3')?.textContent?.trim().toLocaleLowerCase('en-GB') || '';
      const groupId = groupByTitle.get(title) || '';
      let show = value === 'all';
      if (value.startsWith('group:')) show = groupId === value.slice(6);
      if (value.startsWith('item:')) {
        const id = value.slice(5);
        const item = routine.items.find((entry) => String(entry.id) === id);
        show = !groupId && Boolean(item);
        $$('.routine-summary-item', section).forEach((card) => {
          const cardTitle = card.querySelector('.routine-summary-title strong')?.textContent?.trim();
          card.hidden = show && cardTitle !== item?.title;
        });
      } else {
        $$('.routine-summary-item', section).forEach((card) => { card.hidden = false; });
      }
      section.hidden = !show;
    });
  }

  function mapFitnessSummaryCards() {
    const routine = fitnessRoutine();
    const currentPlan = selectedPlanId();
    $$('#fitnessExerciseSummary .fitness-exercise-summary-item').forEach((card) => {
      const badge = card.querySelector('.badge')?.textContent?.trim() || '';
      const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
      if (badge === 'Calisthenics') card.dataset.v4Entity = `plan:${currentPlan}`;
      else {
        const activity = routine.activities.find((item) => String(item.name || '').trim() === title);
        if (activity) card.dataset.v4Entity = `activity:${activity.id}`;
      }
    });
  }

  function applyFitnessSummaryFilter() {
    mapFitnessSummaryCards();
    const value = state.fitnessSummary;
    const data = fitnessGroupData();
    $$('#fitnessExerciseSummary .fitness-summary-group').forEach((section) => {
      let visible = 0;
      $$('.fitness-exercise-summary-item', section).forEach((card) => {
        const key = card.dataset.v4Entity || '';
        let show = value === 'all';
        if (value.startsWith('group:')) show = data.assignments[key] === value.slice(6);
        if (value.startsWith('entity:')) show = key === value.slice(7);
        card.hidden = !show;
        if (show) visible += 1;
      });
      section.hidden = visible === 0;
    });
  }

  function splitPoints(text) {
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    const points = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9])|;\s+/).map((point) => point.trim()).filter(Boolean);
    return points.length ? points : [clean];
  }

  function bulletiseSummary(root) {
    if (!root) return;
    $$('.bl-routine-summary-section p:not(.routine-summary-notes)', root).forEach((paragraph) => {
      if (paragraph.dataset.v4Bulletised === 'true') return;
      const points = splitPoints(paragraph.textContent);
      if (!points.length) return;
      const list = document.createElement('ul');
      list.className = 'bl-v4-summary-list';
      points.forEach((point) => {
        const item = document.createElement('li');
        item.textContent = point;
        list.append(item);
      });
      paragraph.replaceWith(list);
    });
  }

  function muscleProfile(name, family, movement, activitySection) {
    const value = `${name} ${family} ${movement}`.toLocaleLowerCase('en-GB');
    if (value.includes('push-up')) return {
      muscles:['Chest drives the body away from the floor.','Triceps straighten the elbows.','Front shoulders guide the pressing movement.','Serratus, abdominals and glutes keep the shoulder blades and body line stable.'],
      daily:['Pushing open a heavy door.','Rising from the floor using the hands.','Supporting body weight through the arms.']
    };
    if (value.includes('squat')) return {
      muscles:['Quadriceps straighten the knees.','Glutes extend the hips and provide upward drive.','Adductors control the thighs and assist hip extension.','Calves and trunk muscles stabilise the ankles, pelvis and torso.'],
      daily:['Standing from a chair or low seat.','Climbing stairs.','Lifting an object from a low position.']
    };
    if (value.includes('lunge')) return {
      muscles:['Quadriceps and glutes lower and raise the body over the working leg.','Gluteus medius steadies the pelvis and knee.','Hamstrings and adductors control the hip.','Calves and foot muscles maintain balance.'],
      daily:['Stepping over obstacles.','Recovering balance after a long step.','Walking uphill, climbing stairs and kneeling.']
    };
    if (value.includes('side plank')) return {
      muscles:['Obliques and quadratus lumborum resist sideways collapse.','Gluteus medius keeps the pelvis lifted.','Shoulder stabilisers support the upper body.','Adductors organise the legs and pelvis.'],
      daily:['Carrying a bag on one side without leaning.','Reaching sideways while staying balanced.','Controlling the pelvis during walking and running.']
    };
    if (value.includes('plank')) return {
      muscles:['Deep abdominals resist lower-back arching.','Obliques prevent unwanted rotation.','Shoulders and serratus support the upper body.','Glutes and quadriceps hold the pelvis and legs in line.'],
      daily:['Keeping the trunk stable while carrying shopping.','Maintaining posture while pushing, pulling or reaching.','Transferring force between the upper and lower body.']
    };
    if (value.includes('row') || value.includes('pull-up')) return {
      muscles:['Latissimus dorsi draws the upper arms towards the body.','Rhomboids and middle trapezius control the shoulder blades.','Biceps and brachialis bend the elbows.','Rear shoulders, forearms and grip muscles stabilise the pull.'],
      daily:['Pulling a door or object towards you.','Carrying bags with steadier shoulders and grip.','Maintaining upper-back posture during lifting.']
    };
    if (value.includes('running') || activitySection === 'cardio') return {
      muscles:['Glutes and quadriceps propel and support each step.','Hamstrings and calves control the stride and push-off.','Hip stabilisers and trunk muscles keep the pelvis and torso steady.'],
      daily:['Walking farther with less fatigue.','Climbing stairs and hills.','Sustaining active work and errands for longer.']
    };
    if (value.includes('yoga')) return {
      muscles:['Deep trunk muscles organise posture and controlled transitions.','Hip and shoulder stabilisers maintain joint position.','Leg and arm muscles create active support through each pose.'],
      daily:['Reaching, bending and turning with control.','Moving between the floor and standing.','Maintaining balance during slow or awkward tasks.']
    };
    return {
      muscles:['Prime movers create the main action.','Joint stabilisers preserve alignment.','The trunk transfers force between the working limbs.'],
      daily:['Performing comparable pushing, pulling, lifting or stabilising tasks.','Moving with greater control during sport and ordinary activity.','Sustaining repeated physical effort.']
    };
  }

  function enhanceFitnessSummary() {
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    const exercises = Array.isArray(global.BASELINE_FITNESS_DEBUG?.EXERCISES) ? global.BASELINE_FITNESS_DEBUG.EXERCISES : [];
    const routine = fitnessRoutine();
    const data = fitnessGroupData();
    const entities = fitnessEntities();
    $$('.fitness-exercise-summary-item', target).forEach((card) => {
      const title = card.querySelector('.routine-summary-title strong')?.textContent?.trim() || '';
      const badge = card.querySelector('.badge')?.textContent?.trim() || '';
      const exercise = exercises.find((item) => item.name === title);
      const activity = routine.activities.find((item) => String(item.name || '').trim() === title);
      const key = badge === 'Calisthenics' ? `plan:${selectedPlanId()}` : activity ? `activity:${activity.id}` : '';
      if (key) {
        card.dataset.v4Entity = key;
        const titleWrap = card.querySelector('.routine-summary-title');
        if (titleWrap) {
          titleWrap.querySelectorAll(':scope > span').forEach((node) => node.remove());
          titleWrap.insertAdjacentElement('afterbegin', numberNode(fitnessEntityNumber(key, data, entities), title));
        }
      }
      const sections = $$('.bl-routine-summary-section', card);
      const role = sections[1] || sections[0];
      if (!role || role.dataset.v4Comprehensive === 'true') return;
      role.dataset.v4Comprehensive = 'true';
      const profile = muscleProfile(title, exercise?.family || '', exercise?.movementCategory || '', activity?.section || '');
      role.insertAdjacentHTML('beforeend', `<h4>Muscles worked — and how they contribute</h4><ul class="bl-v4-muscle-list">${profile.muscles.map((point) => `<li>${esc(point)}</li>`).join('')}</ul><h4>Everyday activities this supports</h4><ul class="bl-v4-daily-list">${profile.daily.map((point) => `<li>${esc(point)}</li>`).join('')}</ul>`);
    });
    bulletiseSummary(target);
  }

  function repairSkinPublicRoutines() {
    const panel = $('[data-routine-panel="public"]');
    const card = panel?.querySelector('.routine-card');
    if (!card) return;
    card.classList.add('bl-v4-public-card');
    const select = removeDuplicateIds('publicRoutineName');
    const result = $('#publicRoutineResult', card);
    if (result) result.classList.add('bl-v4-public-result');
    const control = card.querySelector('.routine-public-select');
    if (control) control.classList.add('bl-v4-public-controls');
    const button = $('#findPublicRoutineBtn', card);
    if (button && select) button.disabled = select.disabled || !select.options.length || !select.value;
    const duplicateMessages = $$('input,div,p', card).filter((node) => node !== result && node.textContent?.trim() === 'No public routines available');
    duplicateMessages.slice(1).forEach((node) => node.remove());
  }

  function ensureFitnessPublicRoutines() {
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs', shell);
    if (!shell || !nav) return;
    let button = $('[data-fitness-routine-view="public"]', nav);
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'tab fitness-routine-subtab bl-routine-tab';
      button.dataset.fitnessRoutineView = 'public';
      button.setAttribute('role', 'tab');
      button.textContent = 'Public Routines';
      nav.append(button);
    }
    let panel = $('[data-fitness-routine-panel="public"]', shell);
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'public';
      panel.hidden = true;
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card bl-v4-public-card"><div><h2>Public Routines</h2><p class="note">Choose a public profile to view its routine plan and summaries. Completion records remain private.</p></div><div class="bl-v4-public-controls"><label class="field-stack"><span>Public profile</span><select id="fitnessPublicRoutineName" data-native-select="true"><option value="">Loading public routines…</option></select></label><button type="button" class="action secondary" id="fitnessViewPublicRoutine">View Routine</button></div><div id="fitnessPublicRoutineResult" class="bl-v4-public-result" aria-live="polite"></div></div>`;
      shell.append(panel);
    }
    nativeSelect($('#fitnessPublicRoutineName', panel));
  }

  async function loadFitnessPublicProfiles() {
    const select = $('#fitnessPublicRoutineName');
    if (!select || state.fitnessPublicLoaded) return;
    try {
      const response = await fetch('/systems/baseline-fitness/api/routine_state.php?list=public', { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      const profiles = response.ok && Array.isArray(data?.profiles) ? data.profiles : [];
      select.innerHTML = `<option value="">${profiles.length ? 'Choose a public profile…' : 'No public routines available'}</option>${profiles.map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join('')}`;
      select.disabled = !profiles.length;
      const button = $('#fitnessViewPublicRoutine');
      if (button) button.disabled = !profiles.length;
    } catch (_error) {
      select.innerHTML = '<option value="">Public routines could not be loaded</option>';
      select.disabled = true;
    }
    state.fitnessPublicLoaded = true;
  }

  async function viewFitnessPublicRoutine() {
    const select = $('#fitnessPublicRoutineName');
    const name = String(select?.value || '').trim();
    if (!name) { select?.focus(); return; }
    const target = $('#fitnessPublicRoutineResult');
    if (target) target.innerHTML = '<p>Loading public routine…</p>';
    try {
      const response = await fetch(`/systems/baseline-fitness/api/routine_state.php?name=${encodeURIComponent(name)}`, { credentials:'same-origin', headers:{ Accept:'application/json' } });
      const data = await response.json();
      if (!response.ok || !data?.ok || !data.publicRoutine) throw new Error('load_failed');
      const routine = data.publicRoutine;
      const plans = Array.isArray(routine.plans) ? routine.plans : [];
      const activities = Array.isArray(routine.activities) ? routine.activities : [];
      const planHtml = plans.map((plan, index) => `<section class="bl-v4-public-group"><h3>${index + 1}. ${esc(plan?.planJson?.name || `Calisthenics Plan ${index + 1}`)}</h3>${(plan?.planJson?.items || []).map((item) => `<article class="bl-v4-public-item"><h4>${esc(item.exercise || item.name || 'Exercise')}</h4><ul><li>${esc(item.sets ? `${item.sets} sets` : 'Progressive exercise plan')}</li>${item.baseline ? `<li>Baseline: ${esc(item.baseline)}</li>` : ''}</ul></article>`).join('') || '<p>No exercises are listed.</p>'}</section>`).join('');
      const activitiesHtml = activities.length ? `<section class="bl-v4-public-group"><h3>${plans.length + 1}. Other Fitness Activities</h3>${activities.map((activity) => `<article class="bl-v4-public-item"><h4>${esc(activity.name)}</h4><ul>${splitPoints(activity.notes || 'A scheduled activity in this public routine.').map((point) => `<li>${esc(point)}</li>`).join('')}</ul></article>`).join('')}</section>` : '';
      target.innerHTML = `<h3>${esc(routine.owner)}’s Routine</h3>${planHtml}${activitiesHtml || (!planHtml ? '<p>This public routine does not currently contain plans or activities.</p>' : '')}`;
    } catch (_error) {
      if (target) target.innerHTML = '<p>The public routine could not be loaded.</p>';
    }
  }

  function ensureSettingsControl(system) {
    const panel = system === 'skin' ? $('[data-routine-panel="log"]') : $('[data-fitness-routine-panel="log"]');
    const card = panel?.querySelector(system === 'skin' ? '.routine-card' : '.fitness-routine-card');
    if (!card) return;
    const header = system === 'skin' ? card.querySelector('.routine-log-head,.section-head-actions') : card.querySelector('.fitness-routine-log-head,.section-head-actions');
    if (!header) return;
    let button = card.querySelector(`[data-v4-settings-toggle="${system}"]`);
    if (!button) {
      button = card.querySelector('[data-bl-routine-log-settings-toggle]') || document.createElement('button');
      button.type = 'button';
      button.className = `${system === 'skin' ? 'routine-mini' : 'tiny-btn'} bl-v4-settings-button`;
      button.dataset.v4SettingsToggle = system;
      button.textContent = 'Settings';
      button.setAttribute('aria-expanded', 'false');
      header.append(button);
    }
    let settingsPanel = card.querySelector(`[data-v4-settings-panel="${system}"]`);
    if (!settingsPanel) {
      settingsPanel = document.createElement('section');
      settingsPanel.className = 'bl-v4-settings-panel';
      settingsPanel.dataset.v4SettingsPanel = system;
      settingsPanel.hidden = true;
      settingsPanel.innerHTML = `<label class="field-stack"><span>Start day of week for My Routine</span><select data-v4-start-day="${system}">${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => `<option value="${day}">${day}</option>`).join('')}</select></label>`;
      header.insertAdjacentElement('afterend', settingsPanel);
    }
    const select = nativeSelect($('select', settingsPanel));
    if (select) select.value = settings().startDay || 'Monday';
    card.querySelectorAll('[data-bl-routine-log-settings]').forEach((node) => node.remove());
  }

  function skinCalendarMarkers(date) {
    const data = skinGroups();
    const routine = skinRoutine();
    const entries = routine.logs?.[date] || {};
    const ungrouped = routine.items.filter((item) => !data.assignments[item.id]);
    const markers = [];
    const seen = new Set();
    Object.entries(entries).filter(([,entry]) => completed(entry)).forEach(([itemId]) => {
      const item = routine.items.find((entry) => String(entry.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        if (seen.has(`group:${groupId}`)) return;
        seen.add(`group:${groupId}`);
        const index = data.groups.findIndex((group) => String(group.id) === String(groupId));
        if (index >= 0) markers.push({ number:index + 1, caption:data.groups[index].title, target:`group:${groupId}` });
      } else {
        const index = ungrouped.findIndex((entry) => String(entry.id) === String(itemId));
        if (index >= 0) markers.push({ number:data.groups.length + index + 1, caption:item.title, target:`item:${itemId}` });
      }
    });
    return markers.sort((left,right) => left.number - right.number);
  }

  function fitnessCalendarMarkers(date) {
    const data = fitnessGroupData();
    const entities = fitnessEntities();
    const markers = [];
    const seen = new Set();
    try {
      (global.BASELINE_fitnessPlans?.getPlansForDate?.(date) || []).filter((entry) => entry.status === 'done').forEach((entry) => {
        const key = `plan:${Number(entry.planId)}`;
        const entity = entities.find((item) => item.key === key);
        if (!entity) return;
        const groupId = data.assignments[key];
        const unique = groupId ? `group:${groupId}` : `entity:${key}`;
        if (seen.has(unique)) return;
        seen.add(unique);
        const group = data.groups.find((item) => item.id === groupId);
        markers.push({ number:fitnessEntityNumber(key, data, entities), caption:group?.title || entity.label, target:groupId ? `group:${groupId}` : `entity:${key}` });
      });
    } catch (_error) {}
    const routine = fitnessRoutine();
    Object.entries(routine.logs?.[date] || {}).filter(([,entry]) => completed(entry)).forEach(([activityId]) => {
      const key = `activity:${activityId}`;
      const entity = entities.find((item) => item.key === key);
      if (!entity) return;
      const groupId = data.assignments[key];
      const unique = groupId ? `group:${groupId}` : `entity:${key}`;
      if (seen.has(unique)) return;
      seen.add(unique);
      const group = data.groups.find((item) => item.id === groupId);
      markers.push({ number:fitnessEntityNumber(key, data, entities), caption:group?.title || entity.label, target:groupId ? `group:${groupId}` : `entity:${key}` });
    });
    return markers.sort((left,right) => left.number - right.number);
  }

  function ensureCalendarCell(day) {
    if (!day?.parentNode) return null;
    if (day.parentElement?.classList?.contains('bl-v4-calendar-cell')) return day.parentElement;
    const cell = document.createElement('div');
    cell.className = 'bl-v4-calendar-cell';
    day.parentNode.insertBefore(cell, day);
    cell.append(day);
    return cell;
  }

  function decorateCalendar(system) {
    const selector = system === 'skin' ? '.routine-calendar-card [data-calendar-date]' : '.fitness-calendar-card [data-calendar-date]';
    $$(selector).forEach((day) => {
      day.querySelectorAll(':scope > b,:scope > .routine-calendar-count,:scope > .bl-routine-calendar-markers').forEach((node) => node.remove());
      const cell = ensureCalendarCell(day);
      if (!cell) return;
      cell.querySelectorAll(':scope > .bl-routine-calendar-markers').forEach((node) => node.remove());
      const markers = system === 'skin' ? skinCalendarMarkers(day.dataset.calendarDate) : fitnessCalendarMarkers(day.dataset.calendarDate);
      const signature = markers.map((marker) => `${marker.number}|${marker.caption}|${marker.target}`).join('::');
      let wrap = cell.querySelector(':scope > .bl-v4-calendar-markers');
      if (!markers.length) { wrap?.remove(); return; }
      if (wrap?.dataset.signature === signature) return;
      if (!wrap) {
        wrap = document.createElement('span');
        wrap.className = 'bl-v4-calendar-markers';
        cell.append(wrap);
      }
      wrap.dataset.signature = signature;
      wrap.replaceChildren(...markers.map((marker) => {
        const node = document.createElement('span');
        node.className = 'bl-v4-calendar-marker';
        node.setAttribute('role', 'button');
        node.tabIndex = 0;
        node.textContent = String(marker.number);
        node.dataset.v4Caption = marker.caption;
        node.dataset.v4SummaryTarget = marker.target;
        node.dataset.v4System = system;
        node.setAttribute('aria-label', `${marker.caption}. Open in Routine Summary.`);
        return node;
      }));
    });
  }

  function showTooltip(marker) {
    if (!marker) return;
    if (!state.tooltip) {
      state.tooltip = document.createElement('div');
      state.tooltip.className = 'bl-v4-calendar-tooltip';
      state.tooltip.hidden = true;
      document.body.append(state.tooltip);
    }
    state.tooltipMarker = marker;
    state.tooltip.textContent = marker.dataset.v4Caption || '';
    state.tooltip.hidden = false;
    state.tooltip.style.left = '0px';
    state.tooltip.style.top = '0px';
    const markerRect = marker.getBoundingClientRect();
    const tooltipRect = state.tooltip.getBoundingClientRect();
    const left = Math.max(12, Math.min(global.innerWidth - tooltipRect.width - 12, markerRect.left + (markerRect.width - tooltipRect.width) / 2));
    let top = markerRect.top - tooltipRect.height - 10;
    if (top < 12) top = markerRect.bottom + 10;
    state.tooltip.style.left = `${Math.round(left)}px`;
    state.tooltip.style.top = `${Math.round(top)}px`;
  }

  function hideTooltip(marker = null) {
    if (marker && state.tooltipMarker !== marker) return;
    if (state.tooltip) state.tooltip.hidden = true;
    state.tooltipMarker = null;
  }

  function openSummaryTarget(system, target) {
    if (system === 'skin') {
      state.skinSummary = target || 'all';
      $('[data-routine-view="summary"]')?.click();
      global.setTimeout(() => {
        schedule();
        const select = $('#skinRoutineSummaryFilter');
        if (select) { select.value = state.skinSummary; applySkinSummaryFilter(); }
        $('#routineSummary')?.scrollIntoView({ behavior:'smooth', block:'start' });
      }, 100);
    } else {
      state.fitnessSummary = target || 'all';
      $('[data-fitness-routine-view="summary"]')?.click();
      global.setTimeout(() => {
        schedule();
        const select = $('#fitnessSummaryGroupFilter');
        if (select) { select.value = state.fitnessSummary; applyFitnessSummaryFilter(); }
        $('#fitnessExerciseSummary')?.scrollIntoView({ behavior:'smooth', block:'start' });
      }, 100);
    }
  }

  function fixPlanControls() {
    const create = $('#createCalisthenicsPlan');
    if (create) create.textContent = 'Create Another Plan';
    const select = nativeSelect($('#calisthenicsPlanSelect'));
    if (select) select.disabled = select.options.length <= 1;
  }

  function createAnotherPlan() {
    const keyOwner = owner();
    try {
      global.localStorage?.setItem(`__bl_fitness_creating_plan_v1__::${keyOwner}`, '1');
      global.localStorage?.removeItem(`__bl_fitness_selected_plan_v1__::${keyOwner}`);
      global.sessionStorage?.setItem('__bl_fitness_routine_view_v2__', 'plan');
      global.sessionStorage?.setItem('__bl_fitness_plan_view_v4__', 'calisthenics');
    } catch (_error) {}
    const url = new URL('/baseline-fitness/my-routine', global.location.origin);
    url.searchParams.set('new-plan', String(Date.now()));
    global.location.assign(url.toString());
  }

  function removeDoneBadges() {
    $$('#completedWorkoutOut .session-card>.top>.badge').forEach((badge) => badge.remove());
  }

  function applySkin() {
    compactVisibility('skin');
    ensureSummaryFilter('skin');
    decorateSkinNumbers();
    bulletiseSummary($('#routineSummary'));
    repairSkinPublicRoutines();
    ensureSettingsControl('skin');
    decorateCalendar('skin');
  }

  function applyFitness() {
    ensureFitnessPublicRoutines();
    ensureFitnessPlanLayer();
    compactVisibility('fitness');
    ensureSummaryFilter('fitness');
    ensureFitnessGroupCards();
    decorateFitnessEntityNumbers();
    enhanceFitnessSummary();
    applyFitnessSummaryFilter();
    ensureSettingsControl('fitness');
    decorateCalendar('fitness');
    fixPlanControls();
    removeDoneBadges();
  }

  function apply() {
    state.frame = 0;
    if (state.applying) return;
    state.applying = true;
    state.observer?.disconnect();
    try {
      injectCss();
      if (app === 'skin') applySkin();
      else applyFitness();
    } finally {
      state.applying = false;
      const root = app === 'skin' ? $('#routine') : $('#my-plan');
      if (root && state.observer) state.observer.observe(root, { childList:true, subtree:true });
    }
  }

  function schedule() {
    if (state.frame) return;
    state.frame = global.requestAnimationFrame(apply);
  }

  function handleWindowClick(event) {
    const createPlan = event.target.closest?.('#createCalisthenicsPlan');
    if (app === 'fitness' && createPlan) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      createAnotherPlan();
      return;
    }
    const mainPlan = event.target.closest?.('[data-fitness-routine-view="plan"]');
    if (app === 'fitness' && mainPlan) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      activateFitnessMain('plan');
      return;
    }
    const planTab = event.target.closest?.('[data-fitness-plan-view]');
    if (app === 'fitness' && planTab) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      activateFitnessMain('plan');
      activateFitnessPlanView(planTab.dataset.fitnessPlanView);
      return;
    }
    const publicTab = event.target.closest?.('[data-fitness-routine-view="public"]');
    if (app === 'fitness' && publicTab) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      activateFitnessMain('public');
      loadFitnessPublicProfiles();
      return;
    }
    const viewPublic = event.target.closest?.('#fitnessViewPublicRoutine');
    if (viewPublic) {
      event.preventDefault();
      viewFitnessPublicRoutine();
      return;
    }
    const groupCreate = event.target.closest?.('[data-v4-create-group]');
    if (groupCreate) {
      event.preventDefault();
      const section = groupCreate.dataset.v4CreateGroup;
      const input = $(`[data-v4-group-name="${section}"]`);
      const title = String(input?.value || '').trim().slice(0,80);
      if (!title) { input?.focus(); return; }
      const data = fitnessGroupData();
      if (!data.groups.some((group) => group.title.localeCompare(title, 'en-GB', { sensitivity:'base' }) === 0)) {
        data.groups.push({ id:uniqueGroupId(), title });
        saveFitnessGroupData(data);
      }
      if (input) input.value = '';
      schedule();
      return;
    }
    const removeGroup = event.target.closest?.('[data-v4-remove-group]');
    if (removeGroup) {
      event.preventDefault();
      const id = removeGroup.dataset.v4RemoveGroup;
      const data = fitnessGroupData();
      data.groups = data.groups.filter((group) => group.id !== id);
      Object.keys(data.assignments).forEach((key) => { if (data.assignments[key] === id) delete data.assignments[key]; });
      saveFitnessGroupData(data);
      schedule();
      return;
    }
    const settingsButton = event.target.closest?.('[data-v4-settings-toggle]');
    if (settingsButton) {
      event.preventDefault();
      event.stopPropagation();
      const system = settingsButton.dataset.v4SettingsToggle;
      const panel = $(`[data-v4-settings-panel="${system}"]`);
      if (panel) {
        panel.hidden = !panel.hidden;
        settingsButton.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');
      }
      return;
    }
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (marker) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      if (state.longPressed) { state.longPressed = false; return; }
      hideTooltip(marker);
      openSummaryTarget(marker.dataset.v4System, marker.dataset.v4SummaryTarget);
    }
  }

  function handleWindowChange(event) {
    const groupSelect = event.target.closest?.('[data-v4-entity-group]');
    if (groupSelect) {
      const data = fitnessGroupData();
      if (groupSelect.value) data.assignments[groupSelect.dataset.v4EntityGroup] = groupSelect.value;
      else delete data.assignments[groupSelect.dataset.v4EntityGroup];
      saveFitnessGroupData(data);
      schedule();
      return;
    }
    if (event.target?.id === 'skinRoutineSummaryFilter') {
      state.skinSummary = event.target.value;
      applySkinSummaryFilter();
      return;
    }
    if (event.target?.id === 'fitnessSummaryGroupFilter') {
      state.fitnessSummary = event.target.value;
      applyFitnessSummaryFilter();
      return;
    }
    if (event.target?.id === 'fitnessRoutineVisibility') {
      saveFitnessVisibility(event.target.value);
      return;
    }
    const startDay = event.target.closest?.('[data-v4-start-day]');
    if (startDay) {
      writeSettings({ startDay:startDay.value });
      if (startDay.dataset.v4StartDay === 'fitness') global.BASELINE_fitnessRoutine?.render?.();
      else $('[data-skincare-calendar-view][aria-selected="true"]')?.click();
      schedule();
      return;
    }
    if (event.target?.id === 'calisthenicsPlanSelect' && event.target.value) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      global.BASELINE_fitnessPlans?.openPlan?.(Number(event.target.value));
      return;
    }
    if (event.target?.id === 'fitnessPublicRoutineName') {
      const button = $('#fitnessViewPublicRoutine');
      if (button) button.disabled = !event.target.value;
      return;
    }
    if (event.target?.id === 'publicRoutineName') {
      const button = $('#findPublicRoutineBtn');
      if (button) button.disabled = !event.target.value;
    }
    global.setTimeout(schedule, 0);
  }

  function handleKeydown(event) {
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (marker && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      marker.click();
      return;
    }
    const input = event.target.closest?.('[data-v4-group-name]');
    if (input && event.key === 'Enter') {
      event.preventDefault();
      $(`[data-v4-create-group="${input.dataset.v4GroupName}"]`)?.click();
    }
  }

  function handlePointerOver(event) {
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (!marker || marker.contains(event.relatedTarget)) return;
    showTooltip(marker);
  }

  function handlePointerOut(event) {
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (!marker || marker.contains(event.relatedTarget)) return;
    hideTooltip(marker);
  }

  function handlePointerDown(event) {
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (!marker) return;
    clearTimeout(state.longPressTimer);
    state.longPressed = false;
    state.longPressTimer = global.setTimeout(() => {
      state.longPressed = true;
      showTooltip(marker);
      try { global.navigator?.vibrate?.(20); } catch (_error) {}
    }, 550);
  }

  function handlePointerUp(event) {
    const marker = event.target.closest?.('.bl-v4-calendar-marker');
    if (!marker) return;
    clearTimeout(state.longPressTimer);
    if (state.longPressed) {
      event.preventDefault();
      global.setTimeout(() => hideTooltip(marker), 1800);
    }
  }

  function boot() {
    injectCss();
    const root = app === 'skin' ? $('#routine') : $('#my-plan');
    if (!root) return;
    state.observer = new MutationObserver(schedule);
    state.observer.observe(root, { childList:true, subtree:true });
    global.addEventListener('click', handleWindowClick, true);
    global.addEventListener('change', handleWindowChange, true);
    global.addEventListener('keydown', handleKeydown, true);
    global.addEventListener('pointerover', handlePointerOver, true);
    global.addEventListener('pointerout', handlePointerOut, true);
    global.addEventListener('pointerdown', handlePointerDown, true);
    global.addEventListener('pointerup', handlePointerUp, true);
    global.addEventListener('pointercancel', () => clearTimeout(state.longPressTimer), true);
    document.addEventListener('baseline:routine-settings-changed', schedule);
    document.addEventListener('baseline:fitness-plans-updated', schedule);
    document.addEventListener('baseline:fitness-workout-updated', schedule);
    [0,120,350,900,1800].forEach((delay) => global.setTimeout(schedule, delay));
    global.addEventListener('pagehide', () => {
      state.observer?.disconnect();
      hideTooltip();
      clearTimeout(state.longPressTimer);
    }, { once:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
