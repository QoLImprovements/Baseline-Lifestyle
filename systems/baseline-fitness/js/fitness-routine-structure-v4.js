/* Baseline Fitness — single structural adapter for sitewide My Routine v4.
   The base workspace owns Fitness activity/log data. This adapter owns the
   Fitness-specific mapping into the shared four-view My Routine structure:
   Routine Log, Routine Summary, Routine Plan and Public Routines. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_STRUCTURE_V4__) return;
  global.__BASELINE_FITNESS_ROUTINE_STRUCTURE_V4__ = true;

  const document = global.document;
  const UI = global.BASELINE_RoutineSystem;
  if (!UI || (document.documentElement.dataset.app || document.body?.dataset.app) !== 'fitness') return;

  const VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';
  const TOP_VIEWS = Object.freeze(['log','summary','plan','public']);
  const PLAN_VIEWS = Object.freeze(['calisthenics','cardio','other','sports']);
  const ROUTINE_API = '/systems/baseline-fitness/api/routine_state.php';
  let activeView = 'log';
  let activePlanView = 'calisthenics';
  let renderingSummary = false;
  let profileLoading = false;

  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));

  function routineState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }

  function plans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function settings() {
    try { return UI.readSettings?.() || {}; }
    catch (_error) { return {}; }
  }

  function normaliseGroups(raw) {
    const seen = new Set();
    return (Array.isArray(raw) ? raw : []).map((group) => ({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
      .filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
  }

  function groupData() {
    const value = settings();
    const groups = normaliseGroups(value.fitnessRoutineGroups);
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(value.fitnessRoutineAssignments && typeof value.fitnessRoutineAssignments === 'object' ? value.fitnessRoutineAssignments : {}).forEach(([key,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
    });
    return { groups,assignments };
  }

  function frequencyText(frequency) {
    const value = frequency && typeof frequency === 'object' ? frequency : {};
    if (value.mode === 'daily') return 'Every day';
    if (value.mode === 'days') return Array.isArray(value.days) && value.days.length ? value.days.join(', ') : 'Specific days';
    if (value.mode === 'weekly') return `${Math.max(1,Number(value.timesPerWeek || 1))}× each week`;
    if (value.mode === 'monthly') return `${Math.max(1,Number(value.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }

  function planFrequencyText(plan) {
    const value = plan?.planJson || {};
    if (value.scheduleMode === 'specific-days') {
      const days = Array.isArray(value.days) ? value.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min = Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const max = Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max > min ? `${min}–${max} days each week` : `${min} day${min === 1 ? '' : 's'} each week`;
  }

  function injectStyles() {
    if ($('#fitnessRoutineStructureV4Style')) return;
    const style = document.createElement('style');
    style.id = 'fitnessRoutineStructureV4Style';
    style.textContent = `
      .fitness-routine-plan-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
      .fitness-routine-plan-tab{border-radius:999px}
      .fitness-routine-plan-panel[hidden]{display:none!important}
      .fitness-routine-summary-list{display:grid;gap:12px}
      .fitness-summary-group{display:grid;gap:10px}
      .fitness-summary-group>h3{margin:4px 0}
      .fitness-exercise-summary-item{display:grid;gap:9px;padding:14px;border:1px solid color-mix(in srgb,currentColor 16%,transparent);border-radius:15px;background:color-mix(in srgb,currentColor 3%,transparent)}
      .fitness-summary-head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
      .fitness-summary-head strong{font-size:1.02rem}
      .fitness-summary-meta{display:flex;gap:8px;flex-wrap:wrap;font-size:.88rem;opacity:.78}
      .fitness-summary-exercises{display:flex;gap:7px;flex-wrap:wrap}
      .fitness-summary-exercises span{padding:5px 8px;border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:999px;font-size:.82rem}
      .fitness-public-select-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:end}
      .fitness-public-select-row>.field-stack{margin:0!important}
      @media(max-width:700px){.fitness-public-select-row{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function directPanels(shell) {
    return Array.from(shell?.children || []).filter((child) => child.classList?.contains('fitness-routine-panel'));
  }

  function ensureTopButton(nav,view,label) {
    let button = nav.querySelector(`[data-fitness-routine-view="${view}"]`);
    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = 'tab fitness-routine-subtab bl-routine-tab';
      button.setAttribute('role','tab');
      button.dataset.fitnessRoutineView = view;
      nav.appendChild(button);
    }
    button.textContent = label;
    button.setAttribute('aria-selected',activeView === view ? 'true' : 'false');
    return button;
  }

  function ensureSummaryPanel(shell,logPanel) {
    let panel = shell.querySelector(':scope>[data-fitness-routine-panel="summary"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'summary';
      panel.hidden = true;
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2><p class="note">View the activities and Calisthenics plans in the same routine groups used throughout My Routine.</p></div></div><div class="divider"></div><label class="field-stack"><span>Show</span><select id="fitnessSummaryGroupFilter"></select></label><div id="fitnessExerciseSummary" class="fitness-routine-summary-list" aria-live="polite"></div></div>`;
      logPanel.insertAdjacentElement('afterend',panel);
    }
    return panel;
  }

  function ensurePlanPanel(shell,summaryPanel) {
    let panel = shell.querySelector(':scope>[data-fitness-routine-panel="plan"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'plan';
      panel.hidden = true;
      panel.innerHTML = `<nav class="fitness-routine-plan-tabs" role="tablist" aria-label="Routine Plan types"></nav><div class="fitness-routine-plan-panels"></div>`;
      summaryPanel.insertAdjacentElement('afterend',panel);
    }
    const nav = panel.querySelector('.fitness-routine-plan-tabs');
    const host = panel.querySelector('.fitness-routine-plan-panels');
    const labels = { calisthenics:'Calisthenics',cardio:'Cardio',other:'Other Fitness Activity',sports:'Sports' };
    PLAN_VIEWS.forEach((view) => {
      let button = nav.querySelector(`[data-fitness-plan-view="${view}"]`);
      if (!button) {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'tab fitness-routine-plan-tab';
        button.setAttribute('role','tab');
        button.dataset.fitnessPlanView = view;
        nav.appendChild(button);
      }
      button.textContent = labels[view];
      button.setAttribute('aria-selected',activePlanView === view ? 'true' : 'false');
      const child = shell.querySelector(`:scope>[data-fitness-routine-panel="${view}"]`) || host.querySelector(`[data-fitness-routine-panel="${view}"]`);
      if (child) {
        child.classList.add('fitness-routine-plan-panel');
        if (child.parentElement !== host) host.appendChild(child);
        child.hidden = activePlanView !== view;
        child.classList.toggle('active',activePlanView === view);
      }
    });
    return panel;
  }

  function ensurePublicPanel(shell,planPanel) {
    let panel = shell.querySelector(':scope>[data-fitness-routine-panel="public"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel = 'public';
      panel.hidden = true;
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Public Routines</h2><p class="note">Choose a public profile to view their week log, routine summary and plan.</p></div><label class="field-stack bl-release-public-visibility"><span>My Routine Visibility</span><select id="fitnessRoutineVisibility"><option value="private">Private</option><option value="public">Public</option></select></label></div><div class="divider"></div><div class="fitness-public-select-row"><label class="field-stack"><span>Public profile</span><select id="fitnessPublicRoutineName"><option value="">Choose a public profile…</option></select></label><button class="action" type="button" id="fitnessViewPublicRoutine">View Routine</button></div><div id="fitnessPublicRoutineResult" aria-live="polite"></div></div>`;
      planPanel.insertAdjacentElement('afterend',panel);
    }
    return panel;
  }

  function removeLegacyTopButtons(nav) {
    $$(':scope>[data-fitness-routine-view]',nav).forEach((button) => {
      if (!TOP_VIEWS.includes(String(button.dataset.fitnessRoutineView || ''))) button.remove();
    });
  }

  function rebuildStructure() {
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs',shell);
    const logPanel = shell?.querySelector(':scope>[data-fitness-routine-panel="log"]');
    if (!shell || !nav || !logPanel) return false;

    removeLegacyTopButtons(nav);
    const logButton = ensureTopButton(nav,'log','Routine Log');
    const summaryButton = ensureTopButton(nav,'summary','Routine Summary');
    const planButton = ensureTopButton(nav,'plan','Routine Plan');
    const publicButton = ensureTopButton(nav,'public','Public Routines');
    [logButton,summaryButton,planButton,publicButton].forEach((button) => nav.appendChild(button));

    const summaryPanel = ensureSummaryPanel(shell,logPanel);
    const planPanel = ensurePlanPanel(shell,summaryPanel);
    const publicPanel = ensurePublicPanel(shell,planPanel);
    [logPanel,summaryPanel,planPanel,publicPanel].forEach((panel) => shell.appendChild(panel));
    shell.dataset.fitnessRoutineStructure = 'v4';
    return true;
  }

  function activatePlanView(view,remember=true) {
    const next = PLAN_VIEWS.includes(view) ? view : 'calisthenics';
    activePlanView = next;
    const planPanel = $('[data-fitness-routine-panel="plan"]');
    if (!planPanel) return;
    $$('[data-fitness-plan-view]',planPanel).forEach((button) => button.setAttribute('aria-selected',button.dataset.fitnessPlanView === next ? 'true' : 'false'));
    $$('.fitness-routine-plan-panel',planPanel).forEach((panel) => {
      const selected = panel.dataset.fitnessRoutinePanel === next;
      panel.hidden = !selected;
      panel.classList.toggle('active',selected);
    });
    if (remember) {
      try { global.sessionStorage?.setItem(PLAN_VIEW_KEY,next); } catch (_error) {}
    }
  }

  function activateTopView(view,remember=true) {
    const next = TOP_VIEWS.includes(view) ? view : 'log';
    activeView = next;
    const shell = $('.fitness-routine-shell');
    const nav = $('.fitness-routine-subtabs',shell);
    if (!shell || !nav) return;
    $$(':scope>[data-fitness-routine-view]',nav).forEach((button) => button.setAttribute('aria-selected',button.dataset.fitnessRoutineView === next ? 'true' : 'false'));
    directPanels(shell).forEach((panel) => {
      const selected = panel.dataset.fitnessRoutinePanel === next;
      panel.hidden = !selected;
      panel.classList.toggle('active',selected);
    });
    if (next === 'plan') activatePlanView(activePlanView,false);
    if (next === 'summary') renderSummary();
    if (next === 'public') { loadPublicProfiles();loadVisibility(); }
    if (next === 'log') global.BASELINE_fitnessRoutine?.render?.();
    if (remember) {
      try { global.sessionStorage?.setItem(VIEW_KEY,next); } catch (_error) {}
    }
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-view-changed',{ detail:{ view:next,planView:activePlanView } })); } catch (_error) {}
  }

  function restoreRemembered() {
    try {
      const remembered = String(global.sessionStorage?.getItem(VIEW_KEY) || 'log');
      const rememberedPlan = String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || 'calisthenics');
      if (PLAN_VIEWS.includes(remembered)) {
        activeView = 'plan';
        activePlanView = remembered;
        global.sessionStorage?.setItem(VIEW_KEY,'plan');
        global.sessionStorage?.setItem(PLAN_VIEW_KEY,remembered);
      } else {
        activeView = TOP_VIEWS.includes(remembered) ? remembered : 'log';
        activePlanView = PLAN_VIEWS.includes(rememberedPlan) ? rememberedPlan : 'calisthenics';
      }
    } catch (_error) {
      activeView = 'log';activePlanView = 'calisthenics';
    }
    activateTopView(activeView,false);
  }

  function entityList() {
    const routine = routineState();
    return plans().map((plan) => ({ key:`plan:${Number(plan.planId)}`,type:'plan',value:plan }))
      .concat((Array.isArray(routine.activities) ? routine.activities : []).map((activity) => ({ key:`activity:${String(activity.id)}`,type:'activity',value:activity })));
  }

  function entityName(entity) {
    return entity.type === 'plan' ? String(entity.value?.planJson?.name || `Calisthenics Plan ${Number(entity.value?.planId || '')}`) : String(entity.value?.name || 'Fitness activity');
  }

  function groupedEntities() {
    const data = groupData();
    const entities = entityList();
    const assigned = new Set();
    const sections = [];
    data.groups.forEach((group) => {
      const members = entities.filter((entity) => data.assignments[entity.key] === group.id);
      members.forEach((entity) => assigned.add(entity.key));
      if (members.length) sections.push({ id:group.id,title:group.title,items:members });
    });
    const ungrouped = entities.filter((entity) => !assigned.has(entity.key));
    if (ungrouped.length) sections.push({ id:'ungrouped',title:'Ungrouped routine items',items:ungrouped });
    return { sections,groups:data.groups,entities };
  }

  function summaryCard(entity) {
    if (entity.type === 'plan') {
      const plan = entity.value;
      const items = Array.isArray(plan?.planJson?.items) ? plan.planJson.items : [];
      const sessions = Array.isArray(plan?.sessions) ? plan.sessions : [];
      const done = sessions.filter((session) => session?.status === 'done').length;
      return `<article class="fitness-exercise-summary-item" data-v4-entity="${esc(entity.key)}"><div class="fitness-summary-head"><strong>${esc(entityName(entity))}</strong><span class="badge">Plan</span></div><div class="fitness-summary-meta"><span>${esc(planFrequencyText(plan))}</span><span>${done}/${sessions.length} sessions completed</span></div><div class="fitness-summary-exercises">${items.map((item) => `<span>${esc(item.exercise || 'Exercise')}</span>`).join('')}</div></article>`;
    }
    const activity = entity.value;
    return `<article class="fitness-exercise-summary-item" data-v4-entity="${esc(entity.key)}"><div class="fitness-summary-head"><strong>${esc(entityName(entity))}</strong><span class="badge">${esc(activity.section || 'Activity')}</span></div><div class="fitness-summary-meta"><span>${esc(frequencyText(activity.frequency))}</span><span>${esc(activity.timeOfDay || 'Any time')}</span></div>${activity.notes ? `<div>${esc(activity.notes)}</div>` : ''}</article>`;
  }

  function renderSummaryFilter(grouped) {
    const select = $('#fitnessSummaryGroupFilter');
    if (!select) return;
    const old = String(select.value || 'all');
    const groupOptions = grouped.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('');
    const entityOptions = grouped.entities.map((entity) => `<option value="entity:${esc(entity.key)}">${esc(entityName(entity))}</option>`).join('');
    select.innerHTML = `<option value="all">All routine items</option>${groupOptions ? `<optgroup label="Routine groups">${groupOptions}</optgroup>` : ''}${entityOptions ? `<optgroup label="Individual routine items">${entityOptions}</optgroup>` : ''}`;
    if (Array.from(select.options).some((option) => option.value === old)) select.value = old;
  }

  function renderSummary() {
    if (renderingSummary) return;
    const target = $('#fitnessExerciseSummary');
    if (!target) return;
    renderingSummary = true;
    try {
      const grouped = groupedEntities();
      renderSummaryFilter(grouped);
      target.innerHTML = grouped.sections.length
        ? grouped.sections.map((section) => `<section class="fitness-summary-group" data-summary-group="${esc(section.id)}"><h3>${esc(section.title)}</h3>${section.items.map(summaryCard).join('')}</section>`).join('')
        : '<div class="fitness-routine-empty">No routine items are currently available to summarise.</div>';
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-summary-rendered')); } catch (_error) {}
    } finally { renderingSummary = false; }
  }

  async function apiJson(url,options={}) {
    try {
      const response = await fetch(url,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body ? { 'Content-Type':'application/json' } : {}),body:options.body ? JSON.stringify(options.body) : undefined });
      const data = await response.json().catch(() => null);
      return data && typeof data === 'object' ? data : { ok:false };
    } catch (_error) { return { ok:false }; }
  }

  async function loadPublicProfiles() {
    if (profileLoading) return;
    const select = $('#fitnessPublicRoutineName');
    if (!select) return;
    profileLoading = true;
    try {
      const old = String(select.value || '');
      const response = await apiJson(`${ROUTINE_API}?list=public`);
      const names = response?.ok && Array.isArray(response.profiles) ? response.profiles : [];
      select.innerHTML = '<option value="">Choose a public profile…</option>' + names.map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join('');
      if (names.includes(old)) select.value = old;
    } finally { profileLoading = false; }
  }

  async function loadVisibility() {
    const select = $('#fitnessRoutineVisibility');
    if (!select) return;
    const response = await apiJson(ROUTINE_API);
    if (response?.ok) select.value = response.visibility === 'public' ? 'public' : 'private';
  }

  async function saveVisibility(value) {
    const state = routineState();
    const select = $('#fitnessRoutineVisibility');
    if (select) select.disabled = true;
    try {
      await apiJson(ROUTINE_API,{ method:'POST',body:{ visibility:value === 'public' ? 'public' : 'private',activities:Array.isArray(state.activities) ? state.activities : [],logs:state.logs && typeof state.logs === 'object' ? state.logs : {} } });
    } finally { if (select) select.disabled = false; }
  }

  function wrapRoutineApi() {
    const api = global.BASELINE_fitnessRoutine;
    if (!api || api.__baselineRoutineStructureV4) return;
    global.BASELINE_fitnessRoutine = Object.freeze(Object.assign({},api,{
      __baselineRoutineStructureV4:true,
      getState() {
        const state = api.getState?.() || {};
        return Object.assign({},state,{ activeView,planView:activePlanView });
      },
      selectView(view) {
        if (PLAN_VIEWS.includes(view)) { activateTopView('plan',true);activatePlanView(view,true);return; }
        activateTopView(view,true);
      },
      selectPlanView(view) { activateTopView('plan',true);activatePlanView(view,true); }
    }));
  }

  function bindEvents() {
    const root = $('#my-plan');
    if (!root || root.dataset.fitnessRoutineStructureEvents === 'true') return;
    root.dataset.fitnessRoutineStructureEvents = 'true';
    root.addEventListener('click',(event) => {
      const top = event.target?.closest?.('.fitness-routine-subtabs>[data-fitness-routine-view]');
      if (top) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        activateTopView(top.dataset.fitnessRoutineView,true);
        return;
      }
      const plan = event.target?.closest?.('[data-fitness-plan-view]');
      if (plan) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        activateTopView('plan',true);activatePlanView(plan.dataset.fitnessPlanView,true);
      }
    },true);
    root.addEventListener('change',(event) => {
      if (event.target?.id === 'fitnessRoutineVisibility') saveVisibility(event.target.value);
      if (event.target?.id === 'fitnessSummaryGroupFilter') global.setTimeout(() => document.dispatchEvent(new CustomEvent('baseline:fitness-summary-rendered')),0);
    });
    document.addEventListener('baseline:fitness-plans-updated',() => { renderSummary();wrapRoutineApi(); });
    document.addEventListener('baseline:routine-settings-changed',renderSummary);
    document.addEventListener('baseline:fitness-workout-updated',renderSummary);
  }

  function boot() {
    injectStyles();
    if (!rebuildStructure()) {
      global.setTimeout(boot,50);
      return;
    }
    bindEvents();
    wrapRoutineApi();
    restoreRemembered();
    renderSummary();
    global.setTimeout(() => { wrapRoutineApi();renderSummary(); },400);
    document.documentElement.setAttribute('data-fitness-routine-structure','v4');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
