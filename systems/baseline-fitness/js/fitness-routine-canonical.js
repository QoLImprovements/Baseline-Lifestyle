/* Baseline Fitness — canonical Routine Log, Summary, Plan and Public Routine. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_CANONICAL__) return;
  global.__BASELINE_FITNESS_ROUTINE_CANONICAL__ = true;

  const API = '/systems/baseline-fitness/api/routine_state.php';
  const MAIN_VIEW_KEY = '__bl_fitness_canonical_view_v1__';
  const PLAN_VIEW_KEY = '__bl_fitness_plan_view_v4__';
  const DAYS = Object.freeze(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
  const MAIN_VIEWS = Object.freeze(['log','summary','plan','public']);
  const PLAN_VIEWS = Object.freeze(['calisthenics','cardio','other','sports']);
  const state = {
    mainView:'log',
    planView:'calisthenics',
    publicProfiles:[],
    publicRoutine:null,
    refreshing:false,
    publicLoaded:false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));

  function routineApi() {
    return global.BASELINE_fitnessRoutine || null;
  }

  function planApi() {
    return global.BASELINE_fitnessPlans || null;
  }

  function routineState() {
    try {
      const snapshot = routineApi()?.getState?.() || {};
      return {
        activities:Array.isArray(snapshot.activities) ? snapshot.activities : [],
        logs:snapshot.logs && typeof snapshot.logs === 'object' ? snapshot.logs : {},
        selectedDate:String(snapshot.selectedDate || '')
      };
    } catch (_error) {
      return { activities:[], logs:{}, selectedDate:'' };
    }
  }

  function plansState() {
    try {
      const plans = planApi()?.getPlans?.();
      return Array.isArray(plans) ? plans : [];
    } catch (_error) {
      return [];
    }
  }

  function safeSessionRead(key, allowed, fallback) {
    try {
      const value = String(global.sessionStorage?.getItem(key) || '');
      return allowed.includes(value) ? value : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function saveSession(key, value) {
    try { global.sessionStorage?.setItem(key, value); } catch (_error) {}
  }

  function stableHtml(target, signature, html) {
    if (!target || target.dataset.canonicalSignature === signature) return;
    target.dataset.canonicalSignature = signature;
    target.innerHTML = html;
  }

  async function request(options = {}) {
    const url = new URL(API, global.location.origin);
    if (options.list) url.searchParams.set('list', options.list);
    if (options.name) url.searchParams.set('name', options.name);
    try {
      const response = await fetch(url, {
        method:options.method || 'GET',
        credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      const data = await response.json().catch(() => null);
      return data && typeof data === 'object' ? data : { ok:false, error:`http_${response.status}` };
    } catch (_error) {
      return { ok:false, error:'network_error' };
    }
  }

  function activitySectionLabel(section) {
    return section === 'cardio' ? 'Cardio'
      : section === 'sports' ? 'Sports'
      : 'Other Fitness Activity';
  }

  function timeLabel(value) {
    return value === 'morning' ? 'Morning'
      : value === 'afternoon' ? 'Afternoon'
      : value === 'evening' ? 'Evening'
      : 'Any time';
  }

  function normaliseFrequency(value) {
    const source = value && typeof value === 'object' ? value : {};
    const mode = ['daily','days','weekly','monthly','as-needed'].includes(source.mode) ? source.mode : 'weekly';
    return {
      mode,
      days:DAYS.filter((day) => Array.isArray(source.days) && source.days.includes(day)),
      timesPerWeek:Math.max(1,Math.min(14,Math.round(Number(source.timesPerWeek)||1))),
      timesPerMonth:Math.max(1,Math.min(31,Math.round(Number(source.timesPerMonth)||1)))
    };
  }

  function frequencyText(value) {
    const frequency = normaliseFrequency(value);
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return frequency.days.length ? frequency.days.join(', ') : 'Specific days not selected';
    if (frequency.mode === 'weekly') return `${frequency.timesPerWeek}× each week`;
    if (frequency.mode === 'monthly') return `${frequency.timesPerMonth}× each month`;
    return 'As needed';
  }

  function planName(plan, index = 0) {
    return String(plan?.planJson?.name || plan?.name || '').trim() || `Calisthenics Plan ${index + 1}`;
  }

  function planFrequency(plan) {
    const json = plan?.planJson || {};
    if (json.scheduleMode === 'specific-days' && Array.isArray(json.days) && json.days.length) {
      return json.days.join(', ');
    }
    const frequency = String(json.frequency || '').trim();
    return frequency ? `${frequency.replace('x','')}× each week` : 'Schedule not set';
  }

  function planProgress(plan) {
    const progress = plan?.progress || {};
    const total = Number(progress.total || plan?.planJson?.sessions || 0);
    const done = Number(progress.done || 0);
    return `${done}/${total} sessions completed`;
  }

  function planExerciseText(plan) {
    const items = Array.isArray(plan?.planJson?.items) ? plan.planJson.items : [];
    return items.map((item) => String(item?.exercise || '')).filter(Boolean).join(' · ');
  }

  function ensureStructure() {
    const shell = $('.fitness-routine-shell');
    if (!shell || shell.dataset.canonicalStructure === 'true') return Boolean(shell);
    shell.dataset.canonicalStructure = 'true';
    shell.classList.add('bl-canonical-plan-shell');

    const existingTabs = $('.fitness-routine-subtabs', shell);
    const logPanel = $('[data-fitness-routine-panel="log"]', shell);
    if (!existingTabs || !logPanel) return false;

    const mainTabs = document.createElement('nav');
    mainTabs.className = 'bl-canonical-tabs fitness-routine-main-tabs';
    mainTabs.setAttribute('role','tablist');
    mainTabs.setAttribute('aria-label','My Routine views');
    mainTabs.innerHTML = [
      ['log','Routine Log'],
      ['summary','Routine Summary'],
      ['plan','Routine Plan'],
      ['public','Public Routines']
    ].map(([key,label]) => `<button type="button" class="tab" role="tab" data-canonical-fitness-view="${key}" aria-selected="false">${label}</button>`).join('');
    shell.prepend(mainTabs);

    const oldLogTab = existingTabs.querySelector('[data-fitness-routine-view="log"]');
    oldLogTab?.remove();
    existingTabs.classList.add('bl-canonical-plan-tabs');
    existingTabs.setAttribute('aria-label','Routine Plan sections');

    const summaryPanel = document.createElement('section');
    summaryPanel.className = 'bl-canonical-panel';
    summaryPanel.dataset.canonicalFitnessPanel = 'summary';
    summaryPanel.hidden = true;
    summaryPanel.innerHTML = `<section class="card fitness-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2><p class="note">One stable summary of your calisthenics plans and other scheduled fitness activity.</p></div></div><div id="canonicalFitnessSummary" class="bl-canonical-fitness-summary"></div></section>`;

    const planPanel = document.createElement('section');
    planPanel.className = 'bl-canonical-panel bl-canonical-plan-shell';
    planPanel.dataset.canonicalFitnessPanel = 'plan';
    planPanel.hidden = true;
    planPanel.append(existingTabs);
    PLAN_VIEWS.forEach((view) => {
      const panel = shell.querySelector(`[data-fitness-routine-panel="${view}"]`);
      if (panel) planPanel.append(panel);
    });

    const publicPanel = document.createElement('section');
    publicPanel.className = 'bl-canonical-panel';
    publicPanel.dataset.canonicalFitnessPanel = 'public';
    publicPanel.hidden = true;
    publicPanel.innerHTML = `<section class="card fitness-routine-card bl-canonical-public-card">
      <div class="bl-canonical-public-title"><h2>Public Routines</h2><p class="note">View a public fitness routine, its categories and its planned calendar. Completion logs remain private.</p></div>
      <div class="bl-canonical-public-controls"><label class="field-stack"><span>Public profile</span><select id="canonicalFitnessPublicProfile"><option value="">Loading public routines…</option></select></label><button type="button" class="action" id="canonicalFitnessPublicOpen">View routine</button></div>
      <div id="canonicalFitnessPublicResult" class="bl-canonical-public-result"></div>
    </section>`;

    logPanel.insertAdjacentElement('afterend', summaryPanel);
    summaryPanel.insertAdjacentElement('afterend', planPanel);
    planPanel.insertAdjacentElement('afterend', publicPanel);
    return true;
  }

  function setPlanView(view, remember = true) {
    const selected = PLAN_VIEWS.includes(view) ? view : 'calisthenics';
    state.planView = selected;
    if (remember) saveSession(PLAN_VIEW_KEY, selected);
    try { routineApi()?.selectView?.(selected); } catch (_error) {}
    const planPanel = $('[data-canonical-fitness-panel="plan"]');
    if (!planPanel) return;
    $$('[data-fitness-routine-view]', planPanel).forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.fitnessRoutineView === selected ? 'true' : 'false');
    });
    $$('[data-fitness-routine-panel]', planPanel).forEach((panel) => {
      const active = panel.dataset.fitnessRoutinePanel === selected;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
  }

  function setMainView(view, remember = true) {
    const selected = MAIN_VIEWS.includes(view) ? view : 'log';
    state.mainView = selected;
    if (remember) saveSession(MAIN_VIEW_KEY, selected);
    const shell = $('.fitness-routine-shell');
    if (!shell) return;

    $$('[data-canonical-fitness-view]', shell).forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.canonicalFitnessView === selected ? 'true' : 'false');
    });
    const logPanel = $('[data-fitness-routine-panel="log"]', shell);
    if (logPanel) {
      logPanel.hidden = selected !== 'log';
      logPanel.classList.toggle('active', selected === 'log');
    }
    $$('[data-canonical-fitness-panel]', shell).forEach((panel) => {
      panel.hidden = panel.dataset.canonicalFitnessPanel !== selected;
    });

    if (selected === 'log') {
      try { routineApi()?.selectView?.('log'); } catch (_error) {}
    } else if (selected === 'plan') {
      setPlanView(state.planView, false);
    } else if (selected === 'summary') {
      renderSummary();
    } else if (selected === 'public') {
      if (!state.publicLoaded) loadPublicProfiles();
    }
  }

  function summaryActivityCard(activity) {
    const targets = Object.entries(activity.targetMetrics || {}).map(([key,value]) => `${key}: ${value}`).join(' · ');
    return `<article class="bl-canonical-summary-card"><h4>${esc(activity.name)}</h4><dl>
      <div><dt>Category</dt><dd>${esc(activitySectionLabel(activity.section))}</dd></div>
      <div><dt>Time</dt><dd>${esc(timeLabel(activity.timeOfDay))}</dd></div>
      <div><dt>Frequency</dt><dd>${esc(frequencyText(activity.frequency))}</dd></div>
      <div><dt>Targets</dt><dd>${esc(targets || 'No target set')}</dd></div>
    </dl>${activity.notes ? `<p><strong>Notes:</strong> ${esc(activity.notes)}</p>` : ''}</article>`;
  }

  function summaryPlanCard(plan, index) {
    return `<article class="bl-canonical-summary-card"><h4>${esc(planName(plan,index))}</h4><dl>
      <div><dt>Schedule</dt><dd>${esc(planFrequency(plan))}</dd></div>
      <div><dt>Progress</dt><dd>${esc(planProgress(plan))}</dd></div>
      <div><dt>Start date</dt><dd>${esc(plan?.planJson?.startDate || 'Not set')}</dd></div>
      <div><dt>Exercises</dt><dd>${esc(planExerciseText(plan) || 'No exercises')}</dd></div>
    </dl></article>`;
  }

  function weeklyCalendar(activities, plans) {
    const fixed = new Map(DAYS.map((day) => [day, []]));
    const flexible = [];

    activities.forEach((activity) => {
      const frequency = normaliseFrequency(activity.frequency);
      if (frequency.mode === 'daily') DAYS.forEach((day) => fixed.get(day).push(activity.name));
      else if (frequency.mode === 'days') frequency.days.forEach((day) => fixed.get(day)?.push(activity.name));
      else flexible.push(`${activity.name} — ${frequencyText(frequency)}`);
    });

    plans.forEach((plan,index) => {
      const json = plan?.planJson || {};
      const name = planName(plan,index);
      if (json.scheduleMode === 'specific-days' && Array.isArray(json.days) && json.days.length) {
        json.days.forEach((day) => fixed.get(day)?.push(name));
      } else {
        flexible.push(`${name} — ${planFrequency(plan)}`);
      }
    });

    return `<section class="bl-canonical-public-group"><h3>Planned calendar</h3><div class="bl-canonical-week">${DAYS.map((day) => `<div class="bl-canonical-day"><strong>${day}</strong>${fixed.get(day).length ? fixed.get(day).map((name) => `<span>${esc(name)}</span>`).join('') : '<span>No fixed activity</span>'}</div>`).join('')}</div>${flexible.length ? `<div class="bl-canonical-flexible"><strong>Flexible schedule</strong>${flexible.map((entry) => `<span>${esc(entry)}</span>`).join('')}</div>` : ''}</section>`;
  }

  function renderSummary() {
    const target = $('#canonicalFitnessSummary');
    if (!target) return;
    const routine = routineState();
    const plans = plansState();
    const signature = JSON.stringify({ activities:routine.activities, plans });
    if (!routine.activities.length && !plans.length) {
      stableHtml(target, signature, '<div class="fitness-routine-empty">No fitness routine has been created yet.</div>');
      return;
    }
    const sections = [];
    if (plans.length) {
      sections.push(`<section class="bl-canonical-summary-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">1</span><h3>Calisthenics</h3></div></div>${plans.map(summaryPlanCard).join('')}</section>`);
    }
    [['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']].forEach(([key,label]) => {
      const items = routine.activities.filter((activity) => activity.section === key);
      if (!items.length) return;
      sections.push(`<section class="bl-canonical-summary-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">${sections.length + 1}</span><h3>${label}</h3></div></div>${items.map(summaryActivityCard).join('')}</section>`);
    });
    sections.push(weeklyCalendar(routine.activities,plans));
    stableHtml(target,signature,sections.join(''));
  }

  function publicPlanCard(plan,index) {
    const json = plan?.planJson || {};
    const exercises = Array.isArray(json.items) ? json.items.map((item) => item.exercise).filter(Boolean).join(' · ') : '';
    return `<article class="bl-canonical-public-item"><strong>${esc(json.name || `Calisthenics Plan ${index + 1}`)}</strong><span>${esc(planFrequency(plan))}</span><p>${esc(exercises || 'No exercises listed')}</p></article>`;
  }

  function publicActivityCard(activity) {
    return `<article class="bl-canonical-public-item"><strong>${esc(activity.name)}</strong><span>${esc(timeLabel(activity.timeOfDay))} · ${esc(frequencyText(activity.frequency))}</span>${activity.notes ? `<p>${esc(activity.notes)}</p>` : ''}</article>`;
  }

  function renderPublicRoutine(data) {
    const target = $('#canonicalFitnessPublicResult');
    if (!target) return;
    if (!data?.ok || !data.publicRoutine) {
      stableHtml(target,`error:${data?.error || 'unknown'}`,`<div class="fitness-routine-empty">${esc(data?.error === 'routine_private' ? 'That routine is private.' : 'The public routine could not be loaded.')}</div>`);
      return;
    }
    const publicRoutine = data.publicRoutine;
    const activities = Array.isArray(publicRoutine.activities) ? publicRoutine.activities : [];
    const plans = Array.isArray(publicRoutine.plans) ? publicRoutine.plans : [];
    const sections = [];
    if (plans.length) sections.push(`<section class="bl-canonical-public-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">1</span><h3>Calisthenics</h3></div></div>${plans.map(publicPlanCard).join('')}</section>`);
    [['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']].forEach(([key,label]) => {
      const items = activities.filter((activity) => activity.section === key);
      if (!items.length) return;
      sections.push(`<section class="bl-canonical-public-group"><div class="bl-canonical-group-head"><div class="bl-canonical-heading"><span class="bl-canonical-number">${sections.length + 1}</span><h3>${label}</h3></div></div>${items.map(publicActivityCard).join('')}</section>`);
    });
    const html = `<div class="public-routine-head"><h3>${esc(publicRoutine.owner)}’s fitness routine</h3><span class="routine-public-badge">Public</span></div>${sections.join('') || '<div class="fitness-routine-empty">This public routine has no activities.</div>'}${weeklyCalendar(activities,plans)}`;
    stableHtml(target,JSON.stringify(publicRoutine),html);
  }

  async function loadPublicProfiles() {
    const select = $('#canonicalFitnessPublicProfile');
    if (!select) return;
    const data = await request({ list:'public' });
    state.publicProfiles = Array.isArray(data?.profiles)
      ? Array.from(new Set(data.profiles.map((name) => String(name || '').trim()).filter(Boolean))).sort((left,right) => left.localeCompare(right,'en-GB',{sensitivity:'base'}))
      : [];
    select.innerHTML = `<option value="">${state.publicProfiles.length ? 'Choose a public profile…' : 'No public routines available'}</option>${state.publicProfiles.map((name) => `<option value="${esc(name)}">${esc(name)}</option>`).join('')}`;
    select.disabled = !state.publicProfiles.length;
    state.publicLoaded = true;
  }

  async function openPublicRoutine() {
    const select = $('#canonicalFitnessPublicProfile');
    const name = String(select?.value || '').trim();
    if (!name) { select?.focus(); return; }
    const target = $('#canonicalFitnessPublicResult');
    if (target) target.innerHTML = '<div class="fitness-routine-empty">Loading public routine…</div>';
    renderPublicRoutine(await request({ name }));
  }

  function bindEvents() {
    const shell = $('.fitness-routine-shell');
    if (!shell || shell.dataset.canonicalBound === 'true') return;
    shell.dataset.canonicalBound = 'true';

    shell.addEventListener('click',(event) => {
      const main = event.target.closest('[data-canonical-fitness-view]');
      if (main) { setMainView(main.dataset.canonicalFitnessView); return; }
      const plan = event.target.closest('[data-fitness-routine-view]');
      if (plan) {
        const view = plan.dataset.fitnessRoutineView;
        if (PLAN_VIEWS.includes(view)) {
          event.preventDefault();
          event.stopPropagation();
          setPlanView(view);
        }
        return;
      }
      if (event.target.closest('#canonicalFitnessPublicOpen')) { openPublicRoutine(); return; }
    },true);

    shell.addEventListener('change',(event) => {
      if (event.target?.id === 'canonicalFitnessPublicProfile' && event.target.value) {
        openPublicRoutine();
        return;
      }
      if (event.target.closest('[data-activity-field],[data-activity-day],[data-target-metric],[data-fitness-log-complete]')) queueMicrotask(renderSummary);
    });

    shell.addEventListener('input',(event) => {
      if (event.target.closest('[data-activity-field],[data-target-metric]')) queueMicrotask(renderSummary);
    });

    document.addEventListener('baseline:fitness-plans-updated',renderSummary);
    document.addEventListener('baseline:fitness-workout-updated',renderSummary);
  }

  function attachAuth() {
    let attempts = 0;
    const connect = () => {
      const auth = global.BASELINE_auth;
      if (auth && typeof auth.get === 'function') {
        if (typeof auth.onChange === 'function') auth.onChange(() => {
          state.publicLoaded = false;
          state.publicProfiles = [];
          renderSummary();
          if (state.mainView === 'public') loadPublicProfiles();
        });
        return;
      }
      attempts += 1;
      if (attempts < 80) global.setTimeout(connect,100);
    };
    connect();
  }

  function boot() {
    if (!ensureStructure()) return;
    state.mainView = safeSessionRead(MAIN_VIEW_KEY,MAIN_VIEWS,'log');
    state.planView = safeSessionRead(PLAN_VIEW_KEY,PLAN_VIEWS,'calisthenics');
    bindEvents();
    attachAuth();
    setMainView(state.mainView,false);
    renderSummary();
    loadPublicProfiles();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
