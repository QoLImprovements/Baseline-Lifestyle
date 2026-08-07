/* Baseline Lifestyle — single shared Public Routine viewer for Skincare and Fitness.
   The selected public profile is read only. Public rendering never writes into
   the signed-in user's routine state, calendar or selected Routine Log date. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V2__) return;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V2__ = true;
  global.__BASELINE_PUBLIC_ROUTINE_GROUPS_V1__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const UI = global.BASELINE_RoutineSystem;
  const GROUP_API = '/systems/baseline-fitness/api/routine_groups.php';
  const PUBLIC_API = app === 'skin'
    ? '/systems/baseline-natural-skincare/api/public_routine_v2.php'
    : '/systems/baseline-fitness/api/public_routine_v2.php';
  const VIEW_KEY = `__bl_public_routine_view_v2__::${app}`;
  let activeView = 'log';
  let currentData = null;
  let syncingGroups = false;
  let groupSaveTimer = 0;
  let serverGroupSignature = '';

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[character]));

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  async function jsonRequest(url, options = {}) {
    try {
      const response = await fetch(url, {
        method:options.method || 'GET',
        credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' }, options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      const data = await response.json().catch(() => null);
      return { response, data:data && typeof data === 'object' ? data : { ok:false,error:`http_${response.status}` } };
    } catch (_error) {
      return { response:null, data:{ ok:false,error:'network_error' } };
    }
  }

  function normaliseGroups(raw) {
    const seen = new Set();
    return (Array.isArray(raw) ? raw : []).map((group) => ({
      id:String(group?.id || '').trim(),
      title:String(group?.title || '').trim(),
      applyFrequency:Boolean(group?.applyFrequency),
      frequency:group?.frequency && typeof group.frequency === 'object' ? group.frequency : null,
      applyTime:Boolean(group?.applyTime),
      timeOfDay:String(group?.timeOfDay || 'anytime')
    })).filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
  }

  function normaliseAssignments(raw, groups) {
    const valid = new Set(groups.map((group) => group.id));
    const output = {};
    Object.entries(raw && typeof raw === 'object' ? raw : {}).forEach(([key, groupId]) => {
      if (valid.has(String(groupId))) output[String(key)] = String(groupId);
    });
    return output;
  }

  function injectStyles() {
    if ($('#baselinePublicRoutineV2Style')) return;
    const style = document.createElement('style');
    style.id = 'baselinePublicRoutineV2Style';
    style.textContent = `
      .bl-public-v2{display:grid;gap:14px;margin-top:16px}
      .bl-public-v2-head{display:flex;align-items:end;justify-content:space-between;gap:12px;flex-wrap:wrap}
      .bl-public-v2-head h3{margin:0}
      .bl-public-v2-tabs{display:flex;gap:8px;flex-wrap:wrap}
      .bl-public-v2-tab{border:1px solid currentColor;border-radius:999px;padding:9px 14px;background:transparent;color:inherit;font:inherit;font-weight:800;cursor:pointer}
      .bl-public-v2-tab[aria-selected="true"]{background:color-mix(in srgb,currentColor 14%,transparent)}
      .bl-public-v2-panel[hidden]{display:none!important}
      .bl-public-v2-panel{display:grid;gap:12px}
      .bl-public-v2-calendar{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:7px}
      .bl-public-v2-day{min-width:0;padding:9px;border:1px solid color-mix(in srgb,currentColor 18%,transparent);border-radius:12px;background:color-mix(in srgb,currentColor 4%,transparent)}
      .bl-public-v2-day strong{display:block;font-size:.82rem}
      .bl-public-v2-day span{display:block;margin-top:4px;font-size:.8rem;opacity:.72}
      .bl-public-v2-day.has-completion{background:color-mix(in srgb,currentColor 10%,transparent)}
      .bl-public-v2-groups{display:grid;gap:12px}
      .bl-public-v2-group{display:grid;gap:8px;padding:13px;border:1px solid color-mix(in srgb,currentColor 16%,transparent);border-radius:16px;background:color-mix(in srgb,currentColor 3%,transparent)}
      .bl-public-v2-group>h4{margin:0;font-size:1.04rem}
      .bl-public-v2-item{display:grid;gap:5px;padding:10px 11px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);border-radius:12px;background:color-mix(in srgb,currentColor 3%,transparent)}
      .bl-public-v2-item strong{font-weight:850}
      .bl-public-v2-meta{display:flex;gap:7px;flex-wrap:wrap;font-size:.82rem;opacity:.78}
      .bl-public-v2-progress{display:flex;align-items:center;gap:8px;font-size:.9rem}
      .bl-public-v2-check{width:20px;height:20px;flex:0 0 20px;border:1px solid currentColor;border-radius:4px;display:grid;place-items:center;font-weight:900}
      .bl-public-v2-check.done::before{content:'✓'}
      .bl-public-v2-item.done{opacity:.7}
      .bl-public-v2-plan-sessions{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:7px;margin-top:5px}
      .bl-public-v2-session{padding:8px 9px;border-radius:10px;border:1px solid color-mix(in srgb,currentColor 12%,transparent);font-size:.82rem}
      .bl-public-v2-session.done{opacity:.68}
      [data-routine-panel="public"] .routine-card,
      [data-fitness-routine-panel="public"] .fitness-routine-card{padding:18px!important}
      [data-routine-panel="public"] .routine-card>*+*,
      [data-fitness-routine-panel="public"] .fitness-routine-card>*+*{margin-top:12px!important}
      @media(max-width:760px){.bl-public-v2-calendar{grid-template-columns:1fr}.bl-public-v2-day{display:flex;justify-content:space-between;gap:12px}.bl-public-v2-day span{margin-top:0}}
    `;
    document.head.appendChild(style);
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]),Number(match[2])-1,Number(match[3])) : new Date();
  }

  function isoDate(value) {
    const date = localDate(value);
    const pad = (number) => String(number).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  }

  function weekDates(anchor = new Date()) {
    const date = localDate(anchor);
    const startIndex = Number(UI?.startDayIndex?.() ?? 1);
    const offset = ((date.getDay() - startIndex) + 7) % 7;
    date.setDate(date.getDate() - offset);
    return Array.from({ length:7 }, (_,index) => {
      const next = new Date(date);
      next.setDate(next.getDate()+index);
      return next;
    });
  }

  function frequencyText(value) {
    const frequency = value && typeof value === 'object' ? value : {};
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return Array.isArray(frequency.days) && frequency.days.length ? frequency.days.join(', ') : 'Specific days';
    if (frequency.mode === 'weekly') return `${Math.max(1, Number(frequency.timesPerWeek || 1))}× each week`;
    if (frequency.mode === 'monthly') return `${Math.max(1, Number(frequency.timesPerMonth || 1))}× each month`;
    return 'As needed';
  }

  function planFrequencyText(plan) {
    const value = plan?.planJson || plan || {};
    if (value.scheduleMode === 'specific-days') {
      const days = Array.isArray(value.days) ? value.days.filter(Boolean) : [];
      return days.length ? days.join(', ') : 'Specific weekdays';
    }
    const min = Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));
    const max = Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max > min ? `${min}–${max}× each week` : `${min}× each week`;
  }

  function completionMap(data) {
    const map = new Map();
    const logs = data?.logs && typeof data.logs === 'object' ? data.logs : {};
    Object.entries(logs).forEach(([date,entries]) => {
      const names = [];
      Object.entries(entries && typeof entries === 'object' ? entries : {}).forEach(([id,entry]) => {
        if (!entry?.completed) return;
        const item = (data.routine || data.activities || []).find((candidate) => String(candidate?.id) === String(id));
        names.push(item?.title || item?.name || 'Completed routine item');
      });
      if (names.length) map.set(date,(map.get(date) || []).concat(names));
    });
    (Array.isArray(data?.plans) ? data.plans : []).forEach((plan) => {
      (Array.isArray(plan?.sessions) ? plan.sessions : []).forEach((session) => {
        if (session?.status !== 'done' || !session.completedAt) return;
        const date = isoDate(new Date(session.completedAt));
        const name = String(plan?.planJson?.name || 'Calisthenics');
        map.set(date,(map.get(date) || []).concat(`${name} · Session ${Number(session.sessionIndex || 0)}`));
      });
    });
    return map;
  }

  function renderWeekCalendar(data) {
    const completions = completionMap(data);
    return `<div class="bl-public-v2-calendar" aria-label="This week's completed routine activity">${weekDates().map((date) => {
      const iso = isoDate(date);
      const entries = completions.get(iso) || [];
      const label = date.toLocaleDateString('en-GB',{ weekday:'short',day:'numeric',month:'short' });
      return `<div class="bl-public-v2-day${entries.length ? ' has-completion' : ''}" title="${esc(entries.join(', '))}"><strong>${esc(label)}</strong><span>${entries.length ? `${entries.length} completed` : 'No completions'}</span></div>`;
    }).join('')}</div>`;
  }

  function effectiveSkinItem(item, group) {
    const copy = Object.assign({},item);
    if (group?.applyFrequency && group.frequency) copy.frequency = group.frequency;
    if (group?.applyTime) copy.timeOfDay = group.timeOfDay;
    return copy;
  }

  function countSkinWeek(item, data, group = null) {
    const effective = effectiveSkinItem(item,group);
    const days = weekDates();
    const frequency = effective.frequency || {};
    const logs = data.logs || {};
    let target = 0;
    let done = 0;
    if (frequency.mode === 'weekly') {
      target = Math.max(1,Number(frequency.timesPerWeek || 1));
      done = days.reduce((sum,date) => sum + (logs[isoDate(date)]?.[item.id]?.completed ? 1 : 0),0);
    } else if (frequency.mode === 'daily') {
      target = 7;
      done = days.reduce((sum,date) => sum + (logs[isoDate(date)]?.[item.id]?.completed ? 1 : 0),0);
    } else if (frequency.mode === 'days') {
      const selected = Array.isArray(frequency.days) ? frequency.days : [];
      const due = days.filter((date) => selected.includes(date.toLocaleDateString('en-GB',{ weekday:'long' })));
      target = due.length;
      done = due.reduce((sum,date) => sum + (logs[isoDate(date)]?.[item.id]?.completed ? 1 : 0),0);
    } else {
      done = days.reduce((sum,date) => sum + (logs[isoDate(date)]?.[item.id]?.completed ? 1 : 0),0);
      target = done;
    }
    return { done,target,remaining:Math.max(0,target-done) };
  }

  function skinGroups(data) {
    const groups = normaliseGroups(data.groups);
    const assignments = normaliseAssignments(data.assignments,groups);
    const routine = Array.isArray(data.routine) ? data.routine : [];
    const output = [];
    const assigned = new Set();
    groups.forEach((group,index) => {
      const items = routine.filter((item) => assignments[String(item.id)] === group.id);
      items.forEach((item) => assigned.add(String(item.id)));
      if (items.length) output.push({ number:index+1,id:group.id,title:group.title,group,items });
    });
    const ungrouped = routine.filter((item) => !assigned.has(String(item.id)));
    if (ungrouped.length) output.push({ number:groups.length+1,id:'ungrouped',title:'Ungrouped routine actions',group:null,items:ungrouped });
    return output;
  }

  function skinLogHtml(data) {
    return `<div class="bl-public-v2-panel-content">${renderWeekCalendar(data)}<div class="bl-public-v2-groups">${skinGroups(data).map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item) => {
      const progress = countSkinWeek(item,data,section.group);
      return `<div class="bl-public-v2-item${progress.target > 0 && progress.done >= progress.target ? ' done' : ''}"><div class="bl-public-v2-progress"><span class="bl-public-v2-check${progress.target > 0 && progress.done >= progress.target ? ' done' : ''}" aria-hidden="true"></span><strong>${esc(item.title || 'Routine action')}</strong></div><div class="bl-public-v2-meta"><span>${esc(frequencyText(effectiveSkinItem(item,section.group).frequency))}</span><span>${progress.done}/${progress.target} completed</span><span>${progress.remaining} left this week</span></div></div>`;
    }).join('')}</section>`).join('')}</div></div>`;
  }

  function skinSummaryHtml(data) {
    return `<div class="bl-public-v2-groups">${skinGroups(data).map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item) => {
      const effective = effectiveSkinItem(item,section.group);
      const benefit = String(item.benefit || '').trim();
      return `<article class="bl-public-v2-item"><strong>${esc(item.title || 'Routine action')}</strong><div class="bl-public-v2-meta"><span>${esc(frequencyText(effective.frequency))}</span><span>${esc(effective.timeOfDay || 'Any time')}</span></div>${benefit ? `<div>${esc(benefit)}</div>` : ''}</article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function skinPlanHtml(data) {
    return `<div class="bl-public-v2-groups">${skinGroups(data).map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((item,index) => {
      const effective = effectiveSkinItem(item,section.group);
      return `<article class="bl-public-v2-item"><strong>${esc(item.title || `Routine action ${index+1}`)}</strong><div class="bl-public-v2-meta"><span>${esc(effective.timeOfDay || 'Any time')}</span><span>${esc(frequencyText(effective.frequency))}</span>${item.productName || item.customProductName ? `<span>${esc(item.productName || item.customProductName)}</span>` : ''}</div></article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function fitnessEntities(data) {
    const plans = (Array.isArray(data.plans) ? data.plans : []).map((plan) => ({ key:`plan:${Number(plan.planId)}`,type:'plan',value:plan }));
    const activities = (Array.isArray(data.activities) ? data.activities : []).map((activity) => ({ key:`activity:${String(activity.id)}`,type:'activity',value:activity }));
    return plans.concat(activities);
  }

  function fitnessGroups(data) {
    const groups = normaliseGroups(data.groups);
    const assignments = normaliseAssignments(data.assignments,groups);
    const entities = fitnessEntities(data);
    const output = [];
    const assigned = new Set();
    groups.forEach((group,index) => {
      const items = entities.filter((entity) => assignments[entity.key] === group.id);
      items.forEach((entity) => assigned.add(entity.key));
      if (items.length) output.push({ number:index+1,id:group.id,title:group.title,items });
    });
    const ungrouped = entities.filter((entity) => !assigned.has(entity.key));
    if (ungrouped.length) output.push({ number:groups.length+1,id:'ungrouped',title:'Ungrouped routine items',items:ungrouped });
    return output;
  }

  function fitnessEntityWeekProgress(entity,data) {
    const week = new Set(weekDates().map(isoDate));
    if (entity.type === 'plan') {
      const plan = entity.value;
      const completed = (plan.sessions || []).filter((session) => session.status === 'done' && session.completedAt && week.has(isoDate(new Date(session.completedAt)))).length;
      const min = Math.max(1,Number(plan.planJson?.frequencyMin || String(plan.planJson?.frequency || '1x').replace(/\D/g,'')) || 1);
      const max = Math.max(0,Number(plan.planJson?.frequencyRangeMax || 0));
      return { done:completed,target:min,remaining:Math.max(0,min-completed),rangeMax:max > min ? max : 0 };
    }
    const activity = entity.value;
    const frequency = activity.frequency || {};
    const logs = data.logs || {};
    let target = 0;
    let done = 0;
    if (frequency.mode === 'weekly') {
      target = Math.max(1,Number(frequency.timesPerWeek || 1));
      done = Array.from(week).reduce((sum,date) => sum + (logs[date]?.[activity.id]?.completed ? 1 : 0),0);
    } else if (frequency.mode === 'daily') {
      target = 7;
      done = Array.from(week).reduce((sum,date) => sum + (logs[date]?.[activity.id]?.completed ? 1 : 0),0);
    } else if (frequency.mode === 'days') {
      const selected = Array.isArray(frequency.days) ? frequency.days : [];
      const dueDates = weekDates().filter((date) => selected.includes(date.toLocaleDateString('en-GB',{ weekday:'long' })));
      target = dueDates.length;
      done = dueDates.reduce((sum,date) => sum + (logs[isoDate(date)]?.[activity.id]?.completed ? 1 : 0),0);
    } else {
      done = Array.from(week).reduce((sum,date) => sum + (logs[date]?.[activity.id]?.completed ? 1 : 0),0);
      target = done;
    }
    return { done,target,remaining:Math.max(0,target-done),rangeMax:0 };
  }

  function fitnessEntityName(entity) {
    return entity.type === 'plan' ? String(entity.value?.planJson?.name || 'Calisthenics Plan') : String(entity.value?.name || 'Fitness activity');
  }

  function fitnessLogHtml(data) {
    return `<div class="bl-public-v2-panel-content">${renderWeekCalendar(data)}<div class="bl-public-v2-groups">${fitnessGroups(data).map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => {
      const progress = fitnessEntityWeekProgress(entity,data);
      const frequency = entity.type === 'plan' ? planFrequencyText(entity.value) : frequencyText(entity.value.frequency);
      const targetText = progress.rangeMax ? `${progress.done} completed · ${progress.remaining} left to minimum · maximum ${progress.rangeMax}` : `${progress.done}/${progress.target} completed · ${progress.remaining} left this week`;
      return `<div class="bl-public-v2-item${progress.target > 0 && progress.done >= progress.target ? ' done' : ''}"><div class="bl-public-v2-progress"><span class="bl-public-v2-check${progress.target > 0 && progress.done >= progress.target ? ' done' : ''}" aria-hidden="true"></span><strong>${esc(fitnessEntityName(entity))}</strong></div><div class="bl-public-v2-meta"><span>${esc(frequency)}</span><span>${esc(targetText)}</span></div></div>`;
    }).join('')}</section>`).join('')}</div></div>`;
  }

  function fitnessSummaryHtml(data) {
    return `<div class="bl-public-v2-groups">${fitnessGroups(data).map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => {
      if (entity.type === 'plan') {
        const plan = entity.value;
        const exercises = Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
        return `<article class="bl-public-v2-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v2-meta"><span>${esc(planFrequencyText(plan))}</span><span>${exercises.length} exercise${exercises.length === 1 ? '' : 's'}</span></div>${exercises.length ? `<div>${exercises.map((item) => esc(item.exercise || 'Exercise')).join(' · ')}</div>` : ''}</article>`;
      }
      return `<article class="bl-public-v2-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v2-meta"><span>${esc(frequencyText(entity.value.frequency))}</span><span>${esc(entity.value.timeOfDay || 'Any time')}</span></div>${entity.value.notes ? `<div>${esc(entity.value.notes)}</div>` : ''}</article>`;
    }).join('')}</section>`).join('')}</div>`;
  }

  function fitnessPlanHtml(data) {
    const planEntities = fitnessGroups(data).map((section) => Object.assign({},section,{ items:section.items.filter((entity) => entity.type === 'plan') })).filter((section) => section.items.length);
    return `<div class="bl-public-v2-groups">${planEntities.map((section) => `<section class="bl-public-v2-group"><h4>${section.number}. ${esc(section.title)}</h4>${section.items.map((entity) => {
      const plan = entity.value;
      const sessions = Array.isArray(plan.sessions) ? plan.sessions : [];
      const done = sessions.filter((session) => session.status === 'done').length;
      const remaining = Math.max(0,sessions.length-done);
      const exercises = Array.isArray(plan.planJson?.items) ? plan.planJson.items : [];
      return `<article class="bl-public-v2-item"><strong>${esc(fitnessEntityName(entity))}</strong><div class="bl-public-v2-meta"><span>${esc(planFrequencyText(plan))}</span><span>${done}/${sessions.length} sessions completed</span><span>${remaining} remaining</span></div>${exercises.length ? `<div class="bl-public-v2-meta">${exercises.map((item) => `<span>${esc(item.exercise || 'Exercise')}</span>`).join('')}</div>` : ''}<div class="bl-public-v2-plan-sessions">${sessions.map((session) => `<div class="bl-public-v2-session${session.status === 'done' ? ' done' : ''}"><strong>Session ${Number(session.sessionIndex || 0)}</strong><div>${session.status === 'done' ? '✓ Completed' : 'Remaining'}${plan.planJson?.scheduleMode === 'specific-days' && session.scheduledDate ? ` · ${esc(session.scheduledDate)}` : ''}</div></div>`).join('')}</div></article>`;
    }).join('')}</section>`).join('') || '<p>No public Calisthenics plans are available.</p>'}</div>`;
  }

  function renderActiveView() {
    if (!currentData) return;
    const target = app === 'skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult');
    if (!target) return;
    const ownerName = String(currentData.owner || 'User');
    let body = '';
    if (activeView === 'summary') body = app === 'skin' ? skinSummaryHtml(currentData) : fitnessSummaryHtml(currentData);
    else if (activeView === 'plan') body = app === 'skin' ? skinPlanHtml(currentData) : fitnessPlanHtml(currentData);
    else body = app === 'skin' ? skinLogHtml(currentData) : fitnessLogHtml(currentData);
    target.innerHTML = `<div class="bl-public-v2"><div class="bl-public-v2-head"><h3>${esc(ownerName)}’s Routine</h3><div class="bl-public-v2-tabs" role="tablist" aria-label="Public routine views"><button type="button" class="bl-public-v2-tab" data-public-view="log" aria-selected="${activeView === 'log'}">User's Log</button><button type="button" class="bl-public-v2-tab" data-public-view="summary" aria-selected="${activeView === 'summary'}">User's Routine Summary</button><button type="button" class="bl-public-v2-tab" data-public-view="plan" aria-selected="${activeView === 'plan'}">User's Plan</button></div></div><div class="bl-public-v2-panel">${body}</div></div>`;
  }

  function publicField() {
    return app === 'skin' ? $('#publicRoutineName') : $('#fitnessPublicRoutineName');
  }

  function publicTarget() {
    return app === 'skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult');
  }

  async function loadPublic() {
    const field = publicField();
    const name = String(field?.value || '').trim();
    if (!name) { field?.focus(); return; }
    const target = publicTarget();
    if (target) target.innerHTML = '<div class="bl-public-v2"><p>Loading public routine…</p></div>';
    const { data } = await jsonRequest(`${PUBLIC_API}?name=${encodeURIComponent(name)}`);
    if (!data?.ok || !data.publicRoutine) {
      currentData = null;
      if (target) target.innerHTML = `<p>${esc(data?.error === 'routine_private' ? 'That routine is private.' : 'The public routine could not be loaded.')}</p>`;
      return;
    }
    currentData = data.publicRoutine;
    try {
      const remembered = global.sessionStorage?.getItem(VIEW_KEY);
      activeView = ['log','summary','plan'].includes(remembered) ? remembered : 'log';
    } catch (_error) { activeView = 'log'; }
    renderActiveView();
  }

  function updatePublicIntro() {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]') : $('[data-fitness-routine-panel="public"]');
    if (!panel) return;
    const heading = Array.from(panel.querySelectorAll('h1,h2,h3')).find((node) => /Public Routines/i.test(node.textContent || ''));
    const intro = heading?.parentElement?.querySelector('p') || heading?.nextElementSibling;
    if (intro && /completion|routine plan|summar/i.test(intro.textContent || '')) intro.textContent = 'Choose a public profile to view their week log, routine summary and plan.';
  }

  function handleClick(event) {
    const tab = event.target?.closest?.('[data-public-view]');
    if (tab) {
      event.preventDefault();
      activeView = ['log','summary','plan'].includes(tab.dataset.publicView) ? tab.dataset.publicView : 'log';
      try { global.sessionStorage?.setItem(VIEW_KEY,activeView); } catch (_error) {}
      renderActiveView();
      return;
    }
    if (app === 'skin' && event.target?.closest?.('#findPublicRoutineBtn')) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); loadPublic(); return;
    }
    if (app === 'fitness' && event.target?.closest?.('#fitnessViewPublicRoutine')) {
      event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); loadPublic(); return;
    }
  }

  function handleChange(event) {
    if (app === 'skin' && event.target?.id === 'publicRoutineName' && event.target.value) {
      event.stopPropagation(); event.stopImmediatePropagation(); loadPublic(); return;
    }
  }

  /* Fitness group persistence stays here because Public Routine grouping and
     the owner-visible group assignments must use the same saved state. */
  function groupStateFromSettings(settings = UI?.readSettings?.(owner()) || {}) {
    const groups = normaliseGroups(settings.fitnessRoutineGroups).map((group) => ({ id:group.id,title:group.title }));
    return { groups,assignments:normaliseAssignments(settings.fitnessRoutineAssignments,groups) };
  }

  function groupSignature(state) {
    return JSON.stringify({ groups:state.groups,assignments:state.assignments });
  }

  async function pushFitnessGroups(state) {
    if (app !== 'fitness' || owner() === 'guest') return;
    const signature = groupSignature(state);
    if (signature === serverGroupSignature) return;
    const { data } = await jsonRequest(GROUP_API,{ method:'POST',body:state });
    if (data?.ok) {
      const groups = normaliseGroups(data.groups).map((group) => ({ id:group.id,title:group.title }));
      serverGroupSignature = groupSignature({ groups,assignments:normaliseAssignments(data.assignments,groups) });
    }
  }

  function scheduleFitnessGroupPush(settings) {
    if (app !== 'fitness' || syncingGroups) return;
    const state = groupStateFromSettings(settings);
    clearTimeout(groupSaveTimer);
    groupSaveTimer = global.setTimeout(() => pushFitnessGroups(state),250);
  }

  async function reconcileFitnessGroups() {
    if (app !== 'fitness' || owner() === 'guest' || !UI?.readSettings || !UI?.writeSettings) return;
    const local = groupStateFromSettings();
    const { data } = await jsonRequest(GROUP_API);
    if (!data?.ok) return;
    if (data.hasState) {
      const groups = normaliseGroups(data.groups).map((group) => ({ id:group.id,title:group.title }));
      const assignments = normaliseAssignments(data.assignments,groups);
      serverGroupSignature = groupSignature({ groups,assignments });
      if (groupSignature(local) !== serverGroupSignature) {
        syncingGroups = true;
        try { UI.writeSettings({ fitnessRoutineGroups:groups,fitnessRoutineAssignments:assignments },owner()); }
        finally { syncingGroups = false; }
      }
    } else if (local.groups.length || Object.keys(local.assignments).length) {
      await pushFitnessGroups(local);
    } else {
      serverGroupSignature = groupSignature(local);
    }
  }

  function boot() {
    injectStyles();
    updatePublicIntro();
    document.addEventListener('click',handleClick,true);
    document.addEventListener('change',handleChange,true);
    if (app === 'fitness') {
      document.addEventListener('baseline:routine-settings-changed',(event) => scheduleFitnessGroupPush(event.detail?.settings));
      reconcileFitnessGroups();
      try { global.BASELINE_auth?.onChange?.(() => reconcileFitnessGroups()); } catch (_error) {}
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
