/* Baseline Lifestyle — Public My Routine, View Only v4.

   PUBLIC ROUTINE INVARIANT
   ------------------------
   Viewing another user is not a second product or mini-dashboard. It reuses the
   same Routine Log, Routine Summary, Routine Plan, calendar, grouping and theme
   classes as the owner-facing My Routine. The only difference is authority:
   completion and plan controls are read-only/disabled.

   Do not add component colours here. Skincare/Fitness theme tokens own colour.
   Do not add a second public-profile dropdown. The existing system field is used.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_PUBLIC_ROUTINE_VIEWONLY_V4__) return;
  global.__BASELINE_PUBLIC_ROUTINE_VIEWONLY_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const UI = global.BASELINE_RoutineSystem;
  const PUBLIC_API = app === 'skin'
    ? '/systems/baseline-natural-skincare/api/public_routine_v2.php'
    : '/systems/baseline-fitness/api/public_routine_v2.php';
  const GROUP_API = '/systems/baseline-fitness/api/routine_groups.php';
  const VIEW_KEY = `__bl_public_routine_viewonly_v4__::${app}`;
  const CAL_KEY = `__bl_public_routine_calendar_v4__::${app}`;
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));

  let data = null;
  let activeView = 'log';
  let selectedDate = todayIso();
  let calendarView = 'month';
  let calendarAnchor = localDate(selectedDate);
  let summaryFilter = 'all';
  let syncingGroups = false;
  let groupSaveTimer = 0;
  let serverGroupSignature = '';

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function publicField() { return app === 'skin' ? $('#publicRoutineName') : $('#fitnessPublicRoutineName'); }
  function publicTarget() { return app === 'skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult'); }

  async function request(url,options={}) {
    try {
      const response = await fetch(url,{
        method:options.method || 'GET',credentials:'same-origin',
        headers:Object.assign({ Accept:'application/json' },options.body ? { 'Content-Type':'application/json' } : {}),
        body:options.body ? JSON.stringify(options.body) : undefined
      });
      const value = await response.json().catch(() => null);
      return value && typeof value === 'object' ? value : { ok:false,error:`http_${response.status}` };
    } catch (_error) { return { ok:false,error:'network_error' }; }
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    if (match) return new Date(Number(match[1]),Number(match[2])-1,Number(match[3]));
    const parsed = new Date(value || Date.now());
    return Number.isNaN(parsed.getTime()) ? new Date() : new Date(parsed.getFullYear(),parsed.getMonth(),parsed.getDate());
  }

  function isoDate(value) {
    const date = localDate(value);
    const pad = (number) => String(number).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  }

  function todayIso() { try { return UI?.todayIso?.() || isoDate(new Date()); } catch (_error) { return isoDate(new Date()); } }
  function isFuture(value) { return isoDate(value) > todayIso(); }
  function dayName(value) { return localDate(value).toLocaleDateString('en-GB',{ weekday:'long' }); }

  function weekDates(value=calendarAnchor) {
    if (UI?.weekDates) return UI.weekDates(value);
    const date = localDate(value);
    const start = Number(UI?.startDayIndex?.() ?? 1);
    const offset = ((date.getDay()-start)+7)%7;
    date.setDate(date.getDate()-offset);
    return Array.from({ length:7 },(_,index) => { const next=new Date(date);next.setDate(next.getDate()+index);return next; });
  }

  function monthDates(value=calendarAnchor) {
    if (UI?.monthDates) return UI.monthDates(value);
    const anchor = localDate(value);
    const month = new Date(anchor.getFullYear(),anchor.getMonth(),1);
    const start = Number(UI?.startDayIndex?.() ?? 1);
    const offset = ((month.getDay()-start)+7)%7;
    const first = new Date(month);first.setDate(first.getDate()-offset);
    return Array.from({ length:42 },(_,index) => { const next=new Date(first);next.setDate(next.getDate()+index);return next; });
  }

  function sessionIndex(session) { return Number(session?.sessionIndex ?? session?.session_index ?? 0); }
  function completedDate(session) {
    const raw = session?.completedAt ?? session?.completed_at ?? '';
    if (!raw) return '';
    if (typeof raw === 'number' || /^\d+$/.test(String(raw))) {
      const number = Number(raw);return isoDate(new Date(number > 9999999999 ? number : number*1000));
    }
    const text = String(raw);
    if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);
    const parsed = new Date(text);return Number.isNaN(parsed.getTime()) ? '' : isoDate(parsed);
  }
  function scheduledDate(session) { return String(session?.scheduledDate ?? session?.scheduled_date ?? '').slice(0,10); }

  function groups(value=data) {
    const seen = new Set();
    return (Array.isArray(value?.groups) ? value.groups : []).map((group) => ({
      id:String(group?.id || '').trim(),title:String(group?.title || '').trim(),
      applyFrequency:Boolean(group?.applyFrequency),frequency:group?.frequency || null,
      applyTime:Boolean(group?.applyTime),timeOfDay:String(group?.timeOfDay || 'anytime')
    })).filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
  }

  function assignments(value=data) {
    const list = groups(value);const valid = new Set(list.map((group) => group.id));const output = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([key,groupId]) => {
      if (valid.has(String(groupId))) output[String(key)] = String(groupId);
    });
    return output;
  }

  function frequencyText(value) {
    const frequency = value && typeof value === 'object' ? value : {};
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return Array.isArray(frequency.days) && frequency.days.length ? frequency.days.join(', ') : 'Specific days';
    if (frequency.mode === 'weekly') return `${Math.max(1,Number(frequency.timesPerWeek || 1))}× each week`;
    if (frequency.mode === 'monthly') return `${Math.max(1,Number(frequency.timesPerMonth || 1))}× each month`;
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
    return max > min ? `${min}–${max} days each week` : `${min} day${min===1?'':'s'} each week`;
  }

  function skinData() {
    const groupList = groups();const map = assignments();const routine = Array.isArray(data?.routine) ? data.routine : [];
    const assigned = new Set();const sections = [];
    groupList.forEach((group,index) => {
      const items = routine.filter((item) => map[String(item.id)] === group.id);
      items.forEach((item) => assigned.add(String(item.id)));
      if (items.length) sections.push({ number:index+1,id:group.id,title:group.title,group,items });
    });
    const individual = routine.filter((item) => !assigned.has(String(item.id)));
    if (individual.length) sections.push({ number:groupList.length+1,id:'individual',title:'Individual Routine Steps',group:null,items:individual });
    return { groupList,map,routine,sections };
  }

  function fitnessEntities() {
    return (data?.plans || []).map((plan) => ({ key:`plan:${Number(plan.planId)}`,type:'plan',value:plan }))
      .concat((data?.activities || []).map((activity) => ({ key:`activity:${String(activity.id)}`,type:'activity',value:activity })));
  }

  function fitnessData() {
    const groupList = groups();const map = assignments();const entities = fitnessEntities();const assigned = new Set();const sections = [];
    groupList.forEach((group,index) => {
      const items = entities.filter((entity) => map[entity.key] === group.id);
      items.forEach((entity) => assigned.add(entity.key));
      if (items.length) sections.push({ number:index+1,id:group.id,title:group.title,group,items });
    });
    const individual = entities.filter((entity) => !assigned.has(entity.key));
    if (individual.length) sections.push({ number:groupList.length+1,id:'individual',title:'Individual Routine Steps',group:null,items:individual });
    return { groupList,map,entities,sections };
  }

  function entityName(entity) {
    return entity.type === 'plan' ? String(entity.value?.planJson?.name || entity.value?.name || 'Calisthenics Plan') : String(entity.value?.name || 'Fitness activity');
  }

  function effectiveSkin(item,group) {
    const copy = Object.assign({},item);
    if (group?.applyFrequency && group.frequency) copy.frequency = group.frequency;
    if (group?.applyTime) copy.timeOfDay = group.timeOfDay;
    return copy;
  }

  function completedInWeek(id,date) {
    const dates = new Set(weekDates(date).map(isoDate));
    return Object.entries(data?.logs || {}).reduce((count,[logDate,entries]) => count + (dates.has(logDate) && entries?.[id]?.completed ? 1 : 0),0);
  }

  function skinDue(item,date,group) {
    if (data?.logs?.[date]?.[item.id]?.completed) return true;
    const frequency = effectiveSkin(item,group).frequency || {};
    if (frequency.mode === 'daily') return true;
    if (frequency.mode === 'days') return (frequency.days || []).includes(dayName(date));
    if (frequency.mode === 'weekly') return completedInWeek(item.id,date) < Math.max(1,Number(frequency.timesPerWeek || 1));
    return true;
  }

  function activityDue(activity,date) {
    if (data?.logs?.[date]?.[activity.id]?.completed) return true;
    const frequency = activity.frequency || {};
    if (frequency.mode === 'daily') return true;
    if (frequency.mode === 'days') return (frequency.days || []).includes(dayName(date));
    if (frequency.mode === 'weekly') return completedInWeek(activity.id,date) < Math.max(1,Number(frequency.timesPerWeek || 1));
    if (frequency.mode === 'monthly') {
      const month = date.slice(0,7);
      const completed = Object.entries(data?.logs || {}).reduce((count,[logDate,entries]) => count + (logDate.startsWith(month) && entries?.[activity.id]?.completed ? 1 : 0),0);
      return completed < Math.max(1,Number(frequency.timesPerMonth || 1));
    }
    return true;
  }

  function planForDate(plan,date) {
    const sessions = Array.isArray(plan?.sessions) ? plan.sessions : [];
    const completed = sessions.find((session) => String(session.status || '') === 'done' && completedDate(session) === date);
    if (completed) return { due:true,done:true,label:`Session ${sessionIndex(completed)}` };
    const scheduled = sessions.find((session) => scheduledDate(session) === date && String(session.status || '') !== 'done');
    if (scheduled) return { due:true,done:false,label:`Session ${sessionIndex(scheduled)}` };
    const planJson = plan?.planJson || {};
    if (planJson.scheduleMode === 'specific-days' || isFuture(date)) return { due:false,done:false,label:'' };
    const week = new Set(weekDates(date).map(isoDate));
    const done = sessions.filter((session) => String(session.status || '') === 'done' && week.has(completedDate(session))).length;
    const min = Math.max(1,Math.min(7,Number(planJson.frequencyMin || String(planJson.frequency || '1x').replace(/\D/g,'')) || 1));
    return { due:done < min,done:false,label:'Session' };
  }

  function markers(date) {
    const output = [];const seen = new Set();
    if (app === 'skin') {
      const model = skinData();
      Object.entries(data?.logs?.[date] || {}).forEach(([id,entry]) => {
        if (!entry?.completed) return;
        const item = model.routine.find((candidate) => String(candidate.id) === String(id));if (!item) return;
        const groupId = model.map[id];
        if (groupId) {
          const target = `group:${groupId}`;if (seen.has(target)) return;seen.add(target);
          const index = model.groupList.findIndex((group) => group.id === groupId);
          if (index >= 0) output.push({ number:index+1,label:model.groupList[index].title,target });
        } else {
          const target = `item:${item.id}`;if (seen.has(target)) return;seen.add(target);
          const individual = model.routine.filter((candidate) => !model.map[candidate.id]);
          output.push({ number:model.groupList.length+Math.max(0,individual.findIndex((candidate) => String(candidate.id) === String(item.id)))+1,label:item.title || 'Routine Step',target });
        }
      });
      return output;
    }
    const model = fitnessData();const entities = [];
    Object.entries(data?.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const activity = (data?.activities || []).find((candidate) => String(candidate.id) === String(id));
      if (activity) entities.push({ key:`activity:${activity.id}`,label:activity.name || 'Fitness activity' });
    });
    (data?.plans || []).forEach((plan) => {
      if ((plan.sessions || []).some((session) => String(session.status || '') === 'done' && completedDate(session) === date)) entities.push({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') });
    });
    const individual = model.entities.filter((entity) => !model.map[entity.key]);
    entities.forEach((entity) => {
      const groupId = model.map[entity.key];
      if (groupId) {
        const target = `group:${groupId}`;if (seen.has(target)) return;seen.add(target);
        const index = model.groupList.findIndex((group) => group.id === groupId);
        if (index >= 0) output.push({ number:index+1,label:model.groupList[index].title,target });
      } else {
        const target = `entity:${entity.key}`;if (seen.has(target)) return;seen.add(target);
        output.push({ number:model.groupList.length+Math.max(0,individual.findIndex((candidate) => candidate.key === entity.key))+1,label:entity.label,target });
      }
    });
    return output;
  }

  function markerHtml(date) {
    const list = markers(date);
    return list.length ? `<span class="bl-routine-calendar-markers">${list.map((marker) => `<button type="button" class="bl-routine-calendar-marker" data-public-summary-target="${esc(marker.target)}" title="${esc(marker.label)}" aria-label="Open User's Routine Summary: ${esc(marker.label)}">${marker.number}</button>`).join('')}</span>` : '';
  }

  function calendarHtml() {
    const anchor = localDate(calendarAnchor);const dates = calendarView === 'week' ? weekDates(anchor) : monthDates(anchor);const month = anchor.getMonth();
    const label = calendarView === 'week'
      ? `${dates[0].toLocaleDateString('en-GB',{ day:'numeric',month:'short' })} – ${dates[6].toLocaleDateString('en-GB',{ day:'numeric',month:'short',year:'numeric' })}`
      : anchor.toLocaleDateString('en-GB',{ month:'long',year:'numeric' });
    const prefix = app === 'skin' ? 'routine' : 'fitness';
    const dayClass = app === 'skin' ? 'routine-calendar-day' : 'fitness-calendar-day';
    const weekdays = calendarView === 'month' ? `<div class="${prefix}-calendar-weekdays" aria-hidden="true">${(UI?.orderedDays?.(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']) || ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']).map((day) => `<span>${day.slice(0,3)}</span>`).join('')}</div>` : '';
    const buttons = dates.map((date) => {
      const iso = isoDate(date);const classes = [dayClass];
      if (iso === selectedDate) classes.push('selected');if (iso === todayIso()) classes.push('today');
      if (calendarView === 'month' && date.getMonth() !== month) classes.push('outside-month');if (markers(iso).length) classes.push('has-completion');
      return `<button type="button" class="${classes.join(' ')}" data-public-calendar-date="${iso}"${isFuture(iso) ? ' disabled aria-disabled="true"' : ''}><span>${date.getDate()}</span>${markerHtml(iso)}</button>`;
    }).join('');
    return `<section class="card ${app === 'skin' ? 'routine-card routine-card-full routine-calendar-card' : 'fitness-routine-card fitness-calendar-card'} bl-routine-card"><div class="${prefix}-calendar-head bl-routine-calendar-head"><div><h2>${app === 'skin' ? 'Skincare' : 'Fitness'} Calendar</h2></div><div class="${prefix}-calendar-controls bl-routine-calendar-controls"><div class="${prefix}-calendar-view-tabs bl-routine-calendar-view-tabs" role="tablist" aria-label="Calendar view"><button type="button" class="${app === 'skin' ? 'routine-mini routine-calendar-view' : 'tab fitness-calendar-view'}" data-public-calendar-view="week" aria-selected="${calendarView === 'week'}">Week</button><button type="button" class="${app === 'skin' ? 'routine-mini routine-calendar-view' : 'tab fitness-calendar-view'}" data-public-calendar-view="month" aria-selected="${calendarView === 'month'}">Month</button></div><div class="${prefix}-calendar-nav bl-routine-calendar-nav"><button type="button" data-public-calendar-move="previous" aria-label="Previous period">←</button><strong>${esc(label)}</strong><button type="button" data-public-calendar-today>Today</button><button type="button" data-public-calendar-move="next" aria-label="Next period">→</button></div></div></div>${weekdays}<div class="${prefix}-calendar-grid ${calendarView === 'month' ? 'month-view' : 'bl-routine-week-list'}">${buttons}</div></section>`;
  }

  function skinLog() {
    const model = skinData();const log = data?.logs?.[selectedDate] || {};
    const sections = model.sections.map((section) => {
      const due = section.items.filter((item) => skinDue(item,selectedDate,section.group));if (!due.length) return '';
      const complete = due.filter((item) => log?.[item.id]?.completed).length;const partial = complete > 0 && complete < due.length;
      return `<section class="routine-log-group bl-routine-group"><div class="routine-log-group-head"><h3>${esc(section.title)}</h3>${section.group ? `<label class="bl-routine-group-complete bl-public-readonly-check"><input type="checkbox" disabled ${complete === due.length ? 'checked' : ''} data-public-indeterminate="${partial}" aria-label="${esc(section.title)} completion"></label>` : ''}</div>${due.map((item) => { const entry=log?.[item.id] || {};const effective=effectiveSkin(item,section.group);return `<article class="routine-log-item bl-routine-entry${entry.completed ? ' complete' : ''}"><label class="routine-log-check bl-public-readonly-check"><input type="checkbox" disabled ${entry.completed ? 'checked' : ''}><span><strong>${esc(item.title || 'Routine Step')}</strong><small>${esc(frequencyText(effective.frequency))}</small></span></label><input class="routine-log-note" type="text" disabled value="${esc(entry.note || '')}" placeholder="Optional note"></article>`; }).join('')}</section>`;
    }).join('');
    return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-log-head"><div><h2>Routine Log</h2></div><label class="routine-log-date"><span>Date</span><input type="date" data-public-log-date max="${todayIso()}" value="${selectedDate}"></label></div><div class="routine-log-items">${sections || '<div class="routine-empty">No routine actions are scheduled for this date.</div>'}</div></section>${calendarHtml()}`;
  }

  function fitnessLog() {
    const model = fitnessData();const log = data?.logs?.[selectedDate] || {};
    const sections = model.sections.map((section) => {
      const rows = section.items.map((entity) => {
        if (entity.type === 'plan') {
          const state = planForDate(entity.value,selectedDate);if (!state.due) return '';
          return `<article class="session-card fitness-routine-log-item${state.done ? ' complete' : ''}"><div class="fitness-log-item-head"><label class="fitness-log-completion bl-public-readonly-check"><input type="checkbox" disabled ${state.done ? 'checked' : ''}><span><strong>${esc(entityName(entity))}</strong><small>${esc(state.label || 'Session')}</small></span></label></div></article>`;
        }
        const activity = entity.value;if (!activityDue(activity,selectedDate)) return '';const entry=log?.[activity.id] || {};
        return `<article class="session-card fitness-routine-log-item${entry.completed ? ' complete' : ''}"><div class="fitness-log-item-head"><label class="fitness-log-completion bl-public-readonly-check"><input type="checkbox" disabled ${entry.completed ? 'checked' : ''}><span><strong>${esc(activity.name || 'Fitness activity')}</strong><small>${esc(frequencyText(activity.frequency))}</small></span></label></div>${entry.note ? `<label class="field-stack fitness-log-note"><span>Optional note</span><textarea disabled rows="2">${esc(entry.note)}</textarea></label>` : ''}</article>`;
      }).filter(Boolean).join('');
      return rows ? `<section class="fitness-routine-log-group"><h3>${esc(section.title)}</h3>${rows}</section>` : '';
    }).join('');
    return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions fitness-routine-log-head"><div><h2>Routine Log</h2></div><label class="field-stack fitness-log-date"><span>Date</span><input type="date" data-public-log-date max="${todayIso()}" value="${selectedDate}"></label></div>${sections || '<div class="fitness-routine-empty">No planned fitness activity is due for this date.</div>'}</section>${calendarHtml()}`;
  }

  function summaryOptions() {
    if (app === 'skin') {
      const model=skinData();return `<option value="all">All Routine Steps</option>${model.groupList.length ? `<optgroup label="Routine Groups">${model.groupList.map((group) => `<option value="group:${esc(group.id)}"${summaryFilter === `group:${group.id}` ? ' selected' : ''}>${esc(group.title)}</option>`).join('')}</optgroup>` : ''}<optgroup label="Individual Routine Steps">${model.routine.map((item) => `<option value="item:${esc(item.id)}"${summaryFilter === `item:${item.id}` ? ' selected' : ''}>${esc(item.title || 'Routine Step')}</option>`).join('')}</optgroup>`;
    }
    const model=fitnessData();return `<option value="all">All Routine Steps</option>${model.groupList.length ? `<optgroup label="Routine Groups">${model.groupList.map((group) => `<option value="group:${esc(group.id)}"${summaryFilter === `group:${group.id}` ? ' selected' : ''}>${esc(group.title)}</option>`).join('')}</optgroup>` : ''}<optgroup label="Individual Routine Steps">${model.entities.map((entity) => `<option value="entity:${esc(entity.key)}"${summaryFilter === `entity:${entity.key}` ? ' selected' : ''}>${esc(entityName(entity))}</option>`).join('')}</optgroup>`;
  }

  function skinSummary() {
    const model=skinData();let sections=model.sections;
    if (summaryFilter.startsWith('group:')) sections=sections.filter((section) => section.id === summaryFilter.slice(6));
    if (summaryFilter.startsWith('item:')) { const id=summaryFilter.slice(5);sections=sections.map((section) => ({ ...section,items:section.items.filter((item) => String(item.id) === id) })).filter((section) => section.items.length); }
    return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-summary-head"><div><h2>Routine Summary</h2></div></div><label class="bl-routine-summary-filter"><span>Show</span><select data-public-summary-filter>${summaryOptions()}</select></label><div class="routine-summary">${sections.map((section) => `<section class="routine-summary-group bl-routine-group"><div class="routine-summary-group-head"><h3>${esc(section.title)}</h3></div><div class="bl-routine-summary-list">${section.items.map((item,index) => { const effective=effectiveSkin(item,section.group);const product=item.productName || item.customProductName || '';let benefit='';try { benefit=global.BASELINE_SKINCARE_ROUTINE_MODEL?.benefitText?.(item,'comprehensive') || item.benefit || ''; } catch (_error) { benefit=item.benefit || ''; }return `<article class="routine-summary-item routine-summary-item-comprehensive bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(item.title || 'Routine Step')}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl class="bl-routine-summary-rows"><div><dt>Routine group</dt><dd>${esc(section.group?.title || 'Individual Routine Steps')}</dd></div><div><dt>Time of day</dt><dd>${esc(effective.timeOfDay || 'Any time')}</dd></div><div><dt>Frequency</dt><dd>${esc(frequencyText(effective.frequency))}</dd></div>${product ? `<div><dt>Product / recipe</dt><dd>${esc(product)}</dd></div>` : ''}</dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(benefit || 'No description has been recorded.')}</p>${item.notes ? `<p class="routine-summary-notes"><strong>Personal notes:</strong> ${esc(item.notes)}</p>` : ''}</section></div></article>`; }).join('')}</div></section>`).join('')}</div></section>`;
  }

  function fitnessSummary() {
    const model=fitnessData();let sections=model.sections;
    if (summaryFilter.startsWith('group:')) sections=sections.filter((section) => section.id === summaryFilter.slice(6));
    if (summaryFilter.startsWith('entity:')) { const key=summaryFilter.slice(7);sections=sections.map((section) => ({ ...section,items:section.items.filter((entity) => entity.key === key) })).filter((section) => section.items.length); }
    return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2></div></div><label class="bl-routine-summary-filter"><span>Show</span><select data-public-summary-filter>${summaryOptions()}</select></label><div class="fitness-routine-summary-list">${sections.map((section) => `<section class="fitness-summary-group routine-summary-group bl-routine-group"><h3>${esc(section.title)}</h3>${section.items.map((entity,index) => { const name=entityName(entity);if (entity.type === 'activity') { const activity=entity.value;return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(name)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl class="bl-routine-summary-rows"><div><dt>Routine type</dt><dd>${esc(activity.section || 'Fitness Activity')}</dd></div><div><dt>Time of day</dt><dd>${esc(activity.timeOfDay || 'Any time')}</dd></div><div><dt>Frequency</dt><dd>${esc(frequencyText(activity.frequency))}</dd></div></dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(activity.notes || 'Fitness activity recorded within the saved routine.')}</p></section></div></article>`; }const plan=entity.value;const items=Array.isArray(plan.planJson?.items)?plan.planJson.items:[];const sessions=Array.isArray(plan.sessions)?plan.sessions:[];const done=sessions.filter((session) => String(session.status || '') === 'done').length;return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(name)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl class="bl-routine-summary-rows"><div><dt>Routine type</dt><dd>Calisthenics Plan</dd></div><div><dt>Frequency</dt><dd>${esc(planFrequencyText(plan))}</dd></div><div><dt>Progress</dt><dd>${done}/${sessions.length} sessions completed</dd></div><div><dt>Exercises</dt><dd>${items.length}</dd></div></dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>Progressive bodyweight training using the saved exercise plan.</p></section></div><div class="fitness-summary-exercises">${items.map((item) => `<span>${esc(item.exercise || 'Exercise')}</span>`).join('')}</div></article>`; }).join('')}</section>`).join('')}</div></section>`;
  }

  function skinPlan() { const model=skinData();return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-builder-head"><div><h2>Routine Plan</h2></div></div><div class="routine-items">${model.sections.map((section) => `<section class="routine-plan-group bl-routine-group"><div class="routine-plan-group-head bl-routine-entry-head"><div><h3>${esc(section.title)}</h3></div><span>${section.items.length} action${section.items.length===1?'':'s'}</span></div><div class="routine-plan-group-body bl-routine-details">${section.items.map((item) => { const effective=effectiveSkin(item,section.group);return `<article class="routine-item bl-routine-summary-card"><div class="routine-item-head"><div><strong>${esc(item.title || 'Routine Step')}</strong></div></div><div class="bl-routine-preview-chips"><span>${esc(effective.timeOfDay || 'Any time')}</span><span>${esc(frequencyText(effective.frequency))}</span></div></article>`; }).join('')}</div></section>`).join('')}</div></section>`; }

  function fitnessPlan() { const model=fitnessData();return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Plan</h2></div></div>${model.sections.map((section) => `<section class="routine-plan-group bl-routine-group"><div class="routine-plan-group-head bl-routine-entry-head"><div><h3>${esc(section.title)}</h3></div><span>${section.items.length} routine${section.items.length===1?'':'s'}</span></div><div class="routine-plan-group-body bl-routine-details">${section.items.map((entity) => { if (entity.type === 'activity') { const activity=entity.value;return `<article class="session-card fitness-activity-item"><div class="fitness-activity-item-head"><strong>${esc(entityName(entity))}</strong></div><div class="bl-routine-preview-chips"><span>${esc(frequencyText(activity.frequency))}</span><span>${esc(activity.timeOfDay || 'Any time')}</span></div></article>`; }const plan=entity.value;const items=Array.isArray(plan.planJson?.items)?plan.planJson.items:[];const sessions=Array.isArray(plan.sessions)?plan.sessions:[];const done=sessions.filter((session) => String(session.status || '') === 'done').length;return `<article class="session-card fitness-activity-item"><div class="fitness-activity-item-head"><strong>${esc(entityName(entity))}</strong></div><div class="bl-routine-preview-chips"><span>${esc(planFrequencyText(plan))}</span><span>${done}/${sessions.length} sessions completed</span></div><div class="bl-routine-details">${items.map((item,index) => `<div class="bl-routine-summary-card"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong></div>`).join('')}</div></article>`; }).join('')}</div></section>`).join('')}</section>`; }

  function body() { if (activeView === 'summary') return app === 'skin' ? skinSummary() : fitnessSummary();if (activeView === 'plan') return app === 'skin' ? skinPlan() : fitnessPlan();return app === 'skin' ? skinLog() : fitnessLog(); }
  function tab(view,label) { const className=app === 'skin' ? 'routine-subtab bl-routine-tab' : 'tab fitness-routine-subtab bl-routine-tab';return `<button type="button" class="${className}" role="tab" data-public-view="${view}" aria-selected="${activeView === view}">${label}</button>`; }

  function syncIndeterminate(target) { $$('[data-public-indeterminate="true"]',target).forEach((box) => { box.indeterminate=true; }); }
  function render() {
    if (!data) return;const target=publicTarget();if (!target) return;const name=String(data.owner || data.name || 'User');
    target.innerHTML=`<div class="bl-public-routine-viewonly bl-routine-shell"><div class="bl-routine-entry-head"><h2>${esc(name)}’s Routine</h2><span class="badge">View Only</span></div><nav class="bl-public-routine-viewonly-nav ${app === 'skin' ? 'routine-subtabs bl-routine-tabs' : 'fitness-routine-subtabs bl-routine-tabs'}" role="tablist" aria-label="${esc(name)} routine views">${tab('log',"User's Log")}${tab('summary',"User's Routine Summary")}${tab('plan',"User's Plan")}</nav><div class="bl-public-routine-viewonly-panel">${body()}</div></div>`;
    syncIndeterminate(target);
  }

  async function loadPublic() {
    const field=publicField();const name=String(field?.value || '').trim();if (!name) { field?.focus();return; }
    const target=publicTarget();target?.setAttribute('aria-busy','true');
    const response=await request(`${PUBLIC_API}?name=${encodeURIComponent(name)}`);target?.removeAttribute('aria-busy');
    if (!response?.ok || !response.publicRoutine) { data=null;if (target) target.innerHTML=`<p>${esc(response?.error === 'routine_private' ? 'That routine is private.' : 'The public routine could not be loaded.')}</p>`;return; }
    data=response.publicRoutine;selectedDate=todayIso();calendarAnchor=localDate(selectedDate);summaryFilter='all';
    try { const view=global.sessionStorage?.getItem(VIEW_KEY);const calendar=global.sessionStorage?.getItem(CAL_KEY);activeView=['log','summary','plan'].includes(view)?view:'log';calendarView=['week','month'].includes(calendar)?calendar:'month'; } catch (_error) { activeView='log';calendarView='month'; }
    render();
  }

  function remember() { try { global.sessionStorage?.setItem(VIEW_KEY,activeView);global.sessionStorage?.setItem(CAL_KEY,calendarView); } catch (_error) {} }
  function moveCalendar(direction) { const anchor=localDate(calendarAnchor);if (calendarView === 'week') anchor.setDate(anchor.getDate()+(direction === 'next'?7:-7));else anchor.setMonth(anchor.getMonth()+(direction === 'next'?1:-1),1);calendarAnchor=anchor;render(); }

  function click(event) {
    const publicTab=event.target?.closest?.('[data-public-view]');if (publicTab) { event.preventDefault();event.stopPropagation();activeView=['log','summary','plan'].includes(publicTab.dataset.publicView)?publicTab.dataset.publicView:'log';remember();render();return; }
    const marker=event.target?.closest?.('[data-public-summary-target]');if (marker) { event.preventDefault();event.stopPropagation();activeView='summary';summaryFilter=String(marker.dataset.publicSummaryTarget || 'all');remember();render();return; }
    const calendar=event.target?.closest?.('[data-public-calendar-view]');if (calendar) { event.preventDefault();event.stopPropagation();calendarView=calendar.dataset.publicCalendarView === 'week'?'week':'month';remember();render();return; }
    const move=event.target?.closest?.('[data-public-calendar-move]');if (move) { event.preventDefault();event.stopPropagation();moveCalendar(move.dataset.publicCalendarMove);return; }
    if (event.target?.closest?.('[data-public-calendar-today]')) { event.preventDefault();event.stopPropagation();selectedDate=todayIso();calendarAnchor=localDate(selectedDate);render();return; }
    const day=event.target?.closest?.('[data-public-calendar-date]');if (day) { event.preventDefault();event.stopPropagation();if (!isFuture(day.dataset.publicCalendarDate)) { selectedDate=isoDate(day.dataset.publicCalendarDate);calendarAnchor=localDate(selectedDate);render(); }return; }
    if (app === 'skin' && event.target?.closest?.('#findPublicRoutineBtn')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic();return; }
    if (app === 'fitness' && event.target?.closest?.('#fitnessViewPublicRoutine')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic(); }
  }

  function change(event) {
    const fieldId=app === 'skin'?'publicRoutineName':'fitnessPublicRoutineName';
    if (event.target?.id === fieldId && event.target.value) { event.stopPropagation();event.stopImmediatePropagation();loadPublic();return; }
    if (event.target?.matches?.('[data-public-log-date]')) { selectedDate=isoDate(event.target.value);if (selectedDate>todayIso()) selectedDate=todayIso();calendarAnchor=localDate(selectedDate);render();return; }
    if (event.target?.matches?.('[data-public-summary-filter]')) { summaryFilter=String(event.target.value || 'all');render(); }
  }

  function updateIntro() {
    const panel=app === 'skin'?$('[data-routine-panel="public"]'):$('[data-fitness-routine-panel="public"]');if (!panel) return;
    const heading=Array.from(panel.querySelectorAll('h1,h2,h3')).find((node) => /Public Routines/i.test(node.textContent || ''));
    const intro=heading?.parentElement?.querySelector('p') || heading?.nextElementSibling;if (intro) intro.textContent='Choose a public profile to view their My Routine in View Only format.';
    const field=publicField();if (field) $$(`#${field.id}`,panel).slice(1).forEach((duplicate) => duplicate.remove());
  }

  /* Fitness grouping must be the same state the public API reads. */
  function localGroupState(settings=UI?.readSettings?.(owner()) || {}) {
    const list=(Array.isArray(settings.fitnessRoutineGroups)?settings.fitnessRoutineGroups:[]).map((group) => ({ id:String(group?.id || ''),title:String(group?.title || '') })).filter((group) => group.id && group.title);
    const valid=new Set(list.map((group) => group.id));const map={};Object.entries(settings.fitnessRoutineAssignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) map[String(key)]=String(id); });return { groups:list,assignments:map };
  }
  function signature(state) { return JSON.stringify(state); }
  async function pushGroups(state) { if (app !== 'fitness' || owner() === 'guest' || signature(state) === serverGroupSignature) return;const response=await request(GROUP_API,{ method:'POST',body:state });if (response?.ok) serverGroupSignature=signature({ groups:response.groups || [],assignments:response.assignments || {} }); }
  function scheduleGroups(settings) { if (app !== 'fitness' || syncingGroups) return;clearTimeout(groupSaveTimer);const state=localGroupState(settings);groupSaveTimer=global.setTimeout(() => pushGroups(state),250); }
  async function reconcileGroups() {
    if (app !== 'fitness' || owner() === 'guest' || !UI?.readSettings || !UI?.writeSettings) return;const local=localGroupState();const response=await request(GROUP_API);if (!response?.ok) return;
    if (response.hasState) { const server={ groups:response.groups || [],assignments:response.assignments || {} };serverGroupSignature=signature(server);if (signature(local)!==serverGroupSignature) { syncingGroups=true;try { UI.writeSettings({ fitnessRoutineGroups:server.groups,fitnessRoutineAssignments:server.assignments },owner()); } finally { syncingGroups=false; } } }
    else if (local.groups.length || Object.keys(local.assignments).length) await pushGroups(local);else serverGroupSignature=signature(local);
  }

  function boot() {
    updateIntro();document.addEventListener('click',click,true);document.addEventListener('change',change,true);
    if (app === 'fitness') { document.addEventListener('baseline:routine-settings-changed',(event) => scheduleGroups(event.detail?.settings));reconcileGroups();try { global.BASELINE_auth?.onChange?.(reconcileGroups); } catch (_error) {} }
    document.documentElement.setAttribute('data-baseline-public-routine-viewer','v4-readonly');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window !== 'undefined' ? window : globalThis);
