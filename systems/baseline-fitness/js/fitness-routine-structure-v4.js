/* Baseline Fitness — canonical structure adapter for sitewide My Routine.

   OWNERSHIP CONTRACT
   ------------------
   The base Fitness workspace owns activity/log data. fitness-multiple-plans.js
   owns saved Calisthenics plans. This adapter owns only the Fitness mapping into
   the shared four-view My Routine structure: Log, Summary, Plan and Public.

   Fitness Summary is rendered correctly here in the same comprehensive shell as
   Skincare. Do not add a second Summary-enrichment module after this renderer.
   Visual rules belong in CSS; this file never injects <style> blocks or polls
   for DOM that an earlier ordered dependency already creates.
*/
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
  const esc = UI.escapeHtml || ((value) => String(value == null ? '' : value));

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
    return (Array.isArray(raw) ? raw : [])
      .map((group) => ({ id:String(group?.id || '').trim(),title:String(group?.title || '').trim() }))
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

  function exerciseDefinition(name) {
    const target=String(name || '').replace(/\s+(Left|Right)$/i,'').trim();
    return (global.BASELINE_FITNESS_EXERCISE_CATALOGUE?.EXERCISES || []).find((exercise) => String(exercise.name || '').localeCompare(target,'en-GB',{ sensitivity:'base' })===0) || null;
  }
  function activityDefinition(id) {
    return global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(id || '')) || null;
  }
  function progressionText(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Timed isometric progression: the hold target advances after successful sessions and is shared across plans containing the same exercise.';
    const increase=Number(item?.repIncrease || 0);
    if (item?.progressionMode==='straight-sets') return `Straight sets: equal working sets begin from the Max Baseline calculation; +${increase} rep${increase===1?'':'s'} is added to every set after a successful session.`;
    return `Linear fixed progression: the working sets are calculated from Max Baseline with a deliberate within-session rise; +${increase} rep${increase===1?'':'s'} is added after a successful session.`;
  }
  function exerciseMuscles(definition) {
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''} ${definition?.name || ''}`.toLocaleLowerCase('en-GB');
    if (/reverse plank|posterior core/.test(text)) return 'Glutes, hamstrings, spinal extensors and posterior shoulder stabilisers, with trunk bracing throughout.';
    if (/plank|core|climber|hollow|side/.test(text)) return 'Abdominals, obliques and deep trunk stabilisers, with shoulder and hip stabilisers according to the variation.';
    if (/lunge|squat|leg|cossack|step/.test(text)) return 'Quadriceps, glutes, hamstrings and adductors, with calves and trunk stabilisers supporting balance and control.';
    if (/push|dip|chest/.test(text)) return 'Chest, triceps and anterior shoulders, with the trunk maintaining body position.';
    if (/pull|row|chin|back/.test(text)) return 'Latissimus dorsi, upper back, biceps and grip, with trunk stabilisers resisting unwanted movement.';
    if (/calf/.test(text)) return 'Calves and ankle stabilisers, with the rest of the leg contributing to balance.';
    return 'Exercise-specific prime movers plus the trunk and joint stabilisers required to control the bodyweight movement.';
  }
  function exerciseDemand(item,definition) {
    if (definition?.unit==='seconds' || item?.progressionMode==='timed-hold') return 'Predominantly anaerobic / isometric muscular endurance';
    const text=`${definition?.family || ''} ${definition?.movementCategory || ''}`.toLocaleLowerCase('en-GB');
    if (/climber|burpee|dynamic/.test(text)) return 'Mixed anaerobic muscular work with increasing aerobic demand at sustained pace';
    return 'Predominantly anaerobic resistance and muscular-endurance work';
  }
  function planMuscleSummary(items) {
    const movementNames=Array.from(new Set(items.map((item) => exerciseDefinition(item.exercise)?.movementCategory).filter(Boolean)));
    return movementNames.length ? `${movementNames.join(', ')} movements; individual exercise cards below identify the principal muscle involvement.` : 'Whole-body involvement depends on the exercises saved in this plan.';
  }
  function planBenefits(items) {
    const timed=items.some((item) => exerciseDefinition(item.exercise)?.unit==='seconds' || item.progressionMode==='timed-hold');
    const unilateral=items.some((item) => /lunge|split|side/i.test(String(item.exercise || '')));
    const parts=['Builds progressive bodyweight strength and muscular endurance while preserving an exercise-by-exercise progression record.'];
    if (timed) parts.push('Timed holds add isometric strength-endurance and positional control.');
    if (unilateral) parts.push('Unilateral and lateral movements add balance, hip control and side-to-side strength exposure.');
    return parts.join(' ');
  }
  function activityProfile(definition,activity) {
    const profile=String(definition?.metricProfile || 'duration');
    const activityType=String(definition?.group || activity.section || 'Fitness activity');
    const energyDemand=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Predominantly aerobic / cardiorespiratory'
      : profile==='intervals'
        ? 'Mixed aerobic and anaerobic interval conditioning'
        : profile==='strength'||profile==='climbing'
          ? 'Resistance / predominantly anaerobic strength work'
          : profile==='martial'||profile==='racket'||profile==='teamSport'||profile==='batBall'
            ? 'Mixed aerobic and anaerobic skill-based activity'
            : profile==='yoga'||profile==='mindful'||profile==='mobility'
              ? 'Mobility, control, balance and low-to-moderate intensity conditioning'
              : 'General physical activity / conditioning';
    const muscles=profile==='running'||profile==='walking'
      ? 'Glutes, quadriceps, hamstrings, calves, hip stabilisers and trunk.'
      : profile==='cycling'
        ? 'Quadriceps, glutes, hamstrings and calves, with trunk stabilisers supporting posture.'
        : profile==='swimming'
          ? 'Shoulders, upper back, chest, arms and trunk, with hips and legs contributing according to stroke.'
          : profile==='racket'
            ? 'Legs and hips for court movement; trunk rotation; shoulder, forearm and grip for racket control.'
            : profile==='martial'
              ? 'Full body: legs and hips, trunk, shoulders, arms and grip according to the discipline.'
              : profile==='strength'||profile==='climbing'
                ? 'Exercise-dependent whole-body musculature, with substantial trunk, grip and joint-stabiliser involvement.'
                : profile==='yoga'||profile==='mindful'||profile==='mobility'
                  ? 'Trunk and postural stabilisers plus the muscles surrounding the joints trained through the selected positions.'
                  : 'Whole-body contribution varies with the selected activity.';
    const benefit=profile==='running'||profile==='walking'||profile==='cycling'||profile==='swimming'||profile==='cardioMachine'
      ? 'Builds cardiovascular capacity, repeatable endurance and local muscular endurance through sustained cyclical work.'
      : profile==='racket'
        ? 'Combines acceleration, deceleration and direction change with reaction speed, coordination and sport-specific skill.'
        : profile==='yoga'||profile==='mindful'||profile==='mobility'
          ? 'Develops usable range, positional control, balance and body awareness while providing lower-load movement practice.'
          : profile==='strength'||profile==='climbing'
            ? 'Builds force production, muscular endurance and movement control, with progression determined by the specific exercise or route demands.'
            : profile==='martial'||profile==='teamSport'||profile==='batBall'
              ? 'Combines conditioning with coordination, reaction, movement skill and repeated changes in intensity.'
              : 'Develops the physical capacities and movement skills specific to the activity while contributing to overall weekly training volume.';
    return { activityType,energyDemand,muscles,benefit };
  }
  function summaryRows(rows) {
    return typeof UI.summaryRows==='function' ? UI.summaryRows(rows) : '';
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
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2></div></div><div class="divider"></div><label class="bl-routine-summary-filter"><span>Show</span><select id="fitnessSummaryGroupFilter" aria-label="Filter Routine Summary"></select></label><div id="fitnessExerciseSummary" class="fitness-routine-summary-list bl-routine-summary-list" aria-live="polite"></div></div>`;
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
      panel.innerHTML = `<nav class="fitness-routine-plan-tabs bl-routine-tabs" role="tablist" aria-label="Routine Plan types"></nav><div class="fitness-routine-plan-panels"></div>`;
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
      panel.innerHTML = `<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Public Routines</h2><p class="note">Choose a public profile to view their My Routine in View Only format.</p></div><label class="field-stack bl-routine-visibility-control"><span>My Routine Visibility</span><select id="fitnessRoutineVisibility"><option value="private">Private</option><option value="public">Public</option></select></label></div><div class="divider"></div><div class="bl-public-profile-row"><label class="field-stack"><span>Public profile</span><select id="fitnessPublicRoutineName"><option value="">Choose a public profile…</option></select></label><button class="action" type="button" id="fitnessViewPublicRoutine">View Routine</button></div><div id="fitnessPublicRoutineResult" aria-live="polite"></div></div>`;
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
    UI.applyTemplate?.($('#my-plan'));
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
    const individual = entities.filter((entity) => !assigned.has(entity.key));
    if (individual.length) sections.push({ id:'individual',title:'Individual Routine Steps',items:individual });
    return { sections,groups:data.groups,entities };
  }

  function planSummaryContent(plan) {
    const items=Array.isArray(plan?.planJson?.items) ? plan.planJson.items : [];
    const sessions=Array.isArray(plan?.sessions) ? plan.sessions : [];
    const date=String(plan?.planJson?.startDate || plan?.planJson?.start_date || '').trim();
    const main=`<div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Routine type',value:'Calisthenics / bodyweight resistance plan' },
      { label:'Days per week',value:planFrequencyText(plan) },
      { label:'Workout date',value:date },
      { label:'Progress',value:`${sessions.filter((session) => session?.status==='done').length}/${sessions.length} sessions completed` },
      { label:'Exercises',value:`${items.length} saved exercise${items.length===1?'':'s'}` },
      { label:'Energy demand',value:'Predominantly anaerobic strength and muscular endurance, with aerobic demand increasing as session density rises.' },
      { label:'Movement emphasis',value:planMuscleSummary(items) }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(planBenefits(items))}</p></section></div>`;
    const details=items.length ? `<div class="bl-fitness-summary-exercise-details">${items.map((item,index) => {
      const definition=exerciseDefinition(item.exercise);
      return `<section class="bl-routine-summary-section"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong>${summaryRows([
        { label:'Movement',value:definition?.movementCategory || definition?.family || 'Bodyweight' },
        { label:'Exercise demand',value:exerciseDemand(item,definition) },
        { label:'Muscle involvement',value:exerciseMuscles(definition) }
      ])}${definition?.goodFor?`<p><b>Benefits / purpose:</b> ${esc(definition.goodFor)}</p>`:''}${definition?.how?`<p><b>Technique:</b> ${esc(definition.how)}</p>`:''}<p><b>Progression:</b> ${esc(progressionText(item,definition))}</p></section>`;
    }).join('')}</div>` : '';
    return main+details;
  }
  function activitySummaryContent(activity) {
    const definition=activityDefinition(activity.activityId);
    const metrics=(definition?.metrics || []).map((metric) => `${metric.label}${metric.unit?` (${metric.unit})`:''}`).join(', ');
    const profile=activityProfile(definition,activity);
    return `<div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${summaryRows([
      { label:'Routine type',value:profile.activityType },
      { label:'Time of day',value:String(activity.timeOfDay || 'Any time') },
      { label:'Frequency',value:frequencyText(activity.frequency) },
      { label:'Energy demand',value:profile.energyDemand },
      { label:'Primary muscle involvement',value:profile.muscles },
      { label:'Relevant session measures',value:metrics || 'Duration, quality and activity-specific session details.' }
    ])}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(profile.benefit)}</p>${activity.notes?`<p><strong>Your notes:</strong> ${esc(activity.notes)}</p>`:''}</section></div>`;
  }
  function summaryCard(entity,index) {
    const content=entity.type==='plan' ? planSummaryContent(entity.value) : activitySummaryContent(entity.value);
    return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card" data-v4-entity="${esc(entity.key)}"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(entityName(entity))}</strong></div></div>${content}</article>`;
  }
  function renderSummaryFilter(grouped) {
    const select = $('#fitnessSummaryGroupFilter');
    if (!select) return;
    const old = String(select.value || 'all');
    const groupOptions = grouped.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('');
    const entityOptions = grouped.entities.map((entity) => `<option value="entity:${esc(entity.key)}">${esc(entityName(entity))}</option>`).join('');
    select.innerHTML = `<option value="all">All Routine Steps</option>${groupOptions ? `<optgroup label="Routine Groups">${groupOptions}</optgroup>` : ''}${entityOptions ? `<optgroup label="Individual Routine Steps">${entityOptions}</optgroup>` : ''}`;
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
        ? grouped.sections.map((section) => `<section class="fitness-summary-group routine-summary-group bl-routine-group" data-summary-group="${esc(section.id)}"><h3>${esc(section.title)}</h3>${section.items.map((entity,index) => summaryCard(entity,index)).join('')}</section>`).join('')
        : '<div class="fitness-routine-empty">No Routine Steps are currently available to summarise.</div>';
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
        event.preventDefault();
        event.stopPropagation();
        activateTopView(top.dataset.fitnessRoutineView,true);
        return;
      }
      const plan = event.target?.closest?.('[data-fitness-plan-view]');
      if (plan) {
        event.preventDefault();
        event.stopPropagation();
        activateTopView('plan',true);
        activatePlanView(plan.dataset.fitnessPlanView,true);
      }
    },true);
    root.addEventListener('change',(event) => {
      if (event.target?.id === 'fitnessRoutineVisibility') saveVisibility(event.target.value);
    });
    document.addEventListener('baseline:fitness-plans-updated',() => { renderSummary();wrapRoutineApi(); });
    document.addEventListener('baseline:routine-settings-changed',renderSummary);
    document.addEventListener('baseline:fitness-workout-updated',renderSummary);
  }

  function boot() {
    if (!rebuildStructure()) {
      try { console.error('Fitness My Routine structure could not find its ordered workspace dependency.'); } catch (_error) {}
      return;
    }
    bindEvents();
    wrapRoutineApi();
    restoreRemembered();
    renderSummary();
    document.documentElement.setAttribute('data-fitness-routine-structure','v4');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
