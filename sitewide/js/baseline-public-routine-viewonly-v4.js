/* Baseline Lifestyle — Public My Routine, View Only v4.

   PUBLIC ROUTINE INVARIANT
   ------------------------
   Viewing another user is not a second product or mini-dashboard. Reuse the
   same Routine Log, Routine Summary, Routine Plan, calendar, group and theme
   classes as the owner-facing My Routine. The only difference is authority:
   controls which would alter their data are disabled/read-only.

   PUBLIC CALENDAR INVARIANT
   -------------------------
   Fitness Public Routines must use the SAME calendar control geometry/classes
   as the owner's Fitness Routine Log. Week/Month, Date and period navigation
   therefore remain visually synchronised with the Fitness system palette and
   navigation stays on one coherent row at desktop sizes. Calendar number
   markers use only the shared data-caption tooltip; never add a native title
   tooltip as a second competing caption.

   Fitness User's Plan also mirrors the owner's nested Plan views:
   Calisthenics, Cardio, Other Fitness Activity and Sports.

   Do not add component colours here. Do not add a second profile dropdown.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_PUBLIC_ROUTINE_VIEWONLY_V4__) return;
  global.__BASELINE_PUBLIC_ROUTINE_VIEWONLY_V4__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  const UI = global.BASELINE_RoutineSystem;
  const PUBLIC_API = app === 'skin' ? '/systems/baseline-natural-skincare/api/public_routine_v2.php' : '/systems/baseline-fitness/api/public_routine_v2.php';
  const GROUP_API = '/systems/baseline-fitness/api/routine_groups.php';
  const VIEW_KEY = `__bl_public_routine_viewonly_v4__::${app}`;
  const PLAN_VIEW_KEY = `__bl_public_routine_plan_view_v4__::${app}`;
  const CAL_KEY = `__bl_public_routine_calendar_v4__::${app}`;
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));

  let routine = null;
  let activeView = 'log';
  let activePlanView = 'calisthenics';
  let selectedDate = todayIso();
  let calendarAnchor = localDate(selectedDate);
  let calendarView = 'month';
  let summaryFilter = 'all';
  let syncingGroups = false;
  let groupSaveTimer = 0;
  let serverGroupSignature = '';

  function owner() {
    try { const auth=global.BASELINE_auth?.get?.();return auth?.authed ? String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user' : 'guest'; }
    catch (_error) { return 'guest'; }
  }
  function field() { return app === 'skin' ? $('#publicRoutineName') : $('#fitnessPublicRoutineName'); }
  function target() { return app === 'skin' ? $('#publicRoutineResult') : $('#fitnessPublicRoutineResult'); }

  async function request(url,options={}) {
    try {
      const response=await fetch(url,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body ? { 'Content-Type':'application/json' } : {}),body:options.body ? JSON.stringify(options.body) : undefined });
      const data=await response.json().catch(() => null);return data && typeof data === 'object' ? data : { ok:false,error:`http_${response.status}` };
    } catch (_error) { return { ok:false,error:'network_error' }; }
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(),value.getMonth(),value.getDate());
    const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    if (match) return new Date(Number(match[1]),Number(match[2])-1,Number(match[3]));
    const parsed=new Date(value || Date.now());return Number.isNaN(parsed.getTime()) ? new Date() : new Date(parsed.getFullYear(),parsed.getMonth(),parsed.getDate());
  }
  function isoDate(value) { const date=localDate(value);const pad=(number) => String(number).padStart(2,'0');return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`; }
  function todayIso() { try { return UI?.todayIso?.() || isoDate(new Date()); } catch (_error) { return isoDate(new Date()); } }
  function isFuture(value) { return isoDate(value)>todayIso(); }
  function dayName(value) { return localDate(value).toLocaleDateString('en-GB',{ weekday:'long' }); }
  function weekDates(value=calendarAnchor) {
    if (UI?.weekDates) return UI.weekDates(value);
    const date=localDate(value);const start=Number(UI?.startDayIndex?.() ?? 1);date.setDate(date.getDate()-(((date.getDay()-start)+7)%7));
    return Array.from({ length:7 },(_,index) => { const next=new Date(date);next.setDate(next.getDate()+index);return next; });
  }
  function monthDates(value=calendarAnchor) {
    if (UI?.monthDates) return UI.monthDates(value);
    const anchor=localDate(value);const first=new Date(anchor.getFullYear(),anchor.getMonth(),1);const start=Number(UI?.startDayIndex?.() ?? 1);first.setDate(first.getDate()-(((first.getDay()-start)+7)%7));
    return Array.from({ length:42 },(_,index) => { const next=new Date(first);next.setDate(next.getDate()+index);return next; });
  }
  function completionDate(session) {
    const raw=session?.completedAt ?? session?.completed_at ?? '';if (!raw) return '';
    if (typeof raw === 'number' || /^\d+$/.test(String(raw))) { const number=Number(raw);return isoDate(new Date(number>9999999999?number:number*1000)); }
    const text=String(raw);if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);const parsed=new Date(text);return Number.isNaN(parsed.getTime())?'':isoDate(parsed);
  }
  function sessionIndex(session) { return Number(session?.sessionIndex ?? session?.session_index ?? 0); }
  function scheduledDate(session) { return String(session?.scheduledDate ?? session?.scheduled_date ?? '').slice(0,10); }

  function groupModel() {
    const seen=new Set();const groups=(Array.isArray(routine?.groups)?routine.groups:[]).map((group) => ({ id:String(group?.id || ''),title:String(group?.title || ''),applyFrequency:Boolean(group?.applyFrequency),frequency:group?.frequency || null,applyTime:Boolean(group?.applyTime),timeOfDay:String(group?.timeOfDay || 'anytime') })).filter((group) => group.id && group.title && !seen.has(group.id) && seen.add(group.id));
    const valid=new Set(groups.map((group) => group.id));const assignments={};Object.entries(routine?.assignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });
    return { groups,assignments };
  }
  function frequencyText(value) {
    const frequency=value && typeof value === 'object' ? value : {};
    if (frequency.mode==='daily') return 'Every day';if (frequency.mode==='days') return (frequency.days || []).join(', ') || 'Specific days';
    if (frequency.mode==='weekly') { const min=Math.max(1,Math.min(14,Number(frequency.timesPerWeekMin ?? frequency.timesPerWeek) || 1)),max=Math.max(min,Math.min(14,Number(frequency.timesPerWeekMax ?? frequency.timesPerWeek) || min));return max>min?`${min}–${max}× each week`:`${min}× each week`; }if (frequency.mode==='monthly') return `${Math.max(1,Number(frequency.timesPerMonth || 1))}× each month`;return 'As needed';
  }
  function weeklyMaximum(frequency) { const value=frequency && typeof frequency==='object'?frequency:{};const min=Math.max(1,Math.min(14,Number(value.timesPerWeekMin ?? value.timesPerWeek) || 1));return Math.max(min,Math.min(14,Number(value.timesPerWeekMax ?? value.timesPerWeek) || min)); }
  function planFrequency(plan) {
    const value=plan?.planJson || {};if (value.scheduleMode==='specific-days') return (value.days || []).filter(Boolean).join(', ') || 'Specific weekdays';
    const min=Math.max(1,Math.min(7,Number(value.frequencyMin || String(value.frequency || '1x').replace(/\D/g,'')) || 1));const max=Math.max(0,Math.min(7,Number(value.frequencyRangeMax || 0)));
    return max>min ? `${min}–${max} days each week` : `${min} day${min===1?'':'s'} each week`;
  }

  function skinModel() {
    const grouping=groupModel();const items=Array.isArray(routine?.routine)?routine.routine:[];const used=new Set();const sections=[];
    grouping.groups.forEach((group,index) => { const members=items.filter((item) => grouping.assignments[String(item.id)]===group.id);members.forEach((item) => used.add(String(item.id)));if (members.length) sections.push({ number:index+1,id:group.id,title:group.title,group,items:members }); });
    const individual=items.filter((item) => !used.has(String(item.id)));if (individual.length) sections.push({ number:grouping.groups.length+1,id:'individual',title:'Individual Routine Steps',group:null,items:individual });
    return { ...grouping,items,sections };
  }
  function fitnessEntities() { return (routine?.plans || []).map((plan) => ({ key:`plan:${Number(plan.planId)}`,type:'plan',value:plan })).concat((routine?.activities || []).map((activity) => ({ key:`activity:${String(activity.id)}`,type:'activity',value:activity }))); }
  function fitnessModel() {
    const grouping=groupModel();const entities=fitnessEntities();const used=new Set();const sections=[];
    grouping.groups.forEach((group,index) => { const members=entities.filter((entity) => grouping.assignments[entity.key]===group.id);members.forEach((entity) => used.add(entity.key));if (members.length) sections.push({ number:index+1,id:group.id,title:group.title,group,items:members }); });
    const individual=entities.filter((entity) => !used.has(entity.key));if (individual.length) sections.push({ number:grouping.groups.length+1,id:'individual',title:'Individual Routine Steps',group:null,items:individual });
    return { ...grouping,entities,sections };
  }
  function entityName(entity) { return entity.type==='plan' ? String(entity.value?.planJson?.name || entity.value?.name || 'Calisthenics Plan') : String(entity.value?.name || 'Fitness activity'); }
  function activityPlanView(activity) {
    const section=String(activity?.section || '').trim().toLocaleLowerCase('en-GB');
    if (section.includes('cardio')) return 'cardio';
    if (section.includes('sport')) return 'sports';
    return 'other';
  }
  function effectiveSkin(item,group) { const copy=Object.assign({},item);if (group?.applyFrequency && group.frequency) copy.frequency=group.frequency;if (group?.applyTime) copy.timeOfDay=group.timeOfDay;return copy; }

  function completedThisWeek(id,date) { const dates=new Set(weekDates(date).map(isoDate));return Object.entries(routine?.logs || {}).reduce((count,[logDate,entries]) => count+(dates.has(logDate) && entries?.[id]?.completed ? 1:0),0); }
  function itemDue(item,date,group) {
    if (routine?.logs?.[date]?.[item.id]?.completed) return true;const frequency=effectiveSkin(item,group).frequency || {};
    if (frequency.mode==='daily') return true;if (frequency.mode==='days') return (frequency.days || []).includes(dayName(date));if (frequency.mode==='weekly') return completedThisWeek(item.id,date)<weeklyMaximum(frequency);return true;
  }
  function activityDue(activity,date) {
    if (routine?.logs?.[date]?.[activity.id]?.completed) return true;const frequency=activity.frequency || {};
    if (frequency.mode==='daily') return true;if (frequency.mode==='days') return (frequency.days || []).includes(dayName(date));if (frequency.mode==='weekly') return completedThisWeek(activity.id,date)<weeklyMaximum(frequency);return true;
  }
  function planState(plan,date) {
    const sessions=Array.isArray(plan?.sessions)?plan.sessions:[];const complete=sessions.find((session) => String(session.status || '')==='done' && completionDate(session)===date);if (complete) return { due:true,complete:true,label:`Session ${sessionIndex(complete)}` };
    const scheduled=sessions.find((session) => scheduledDate(session)===date && String(session.status || '')!=='done');if (scheduled) return { due:true,complete:false,label:`Session ${sessionIndex(scheduled)}` };
    const planJson=plan?.planJson || {};if (planJson.scheduleMode==='specific-days' || isFuture(date)) return { due:false,complete:false,label:'' };
    const week=new Set(weekDates(date).map(isoDate));const done=sessions.filter((session) => String(session.status || '')==='done' && week.has(completionDate(session))).length;const minimum=Math.max(1,Math.min(7,Number(planJson.frequencyMin || String(planJson.frequency || '1x').replace(/\D/g,'')) || 1)),maximum=Math.max(minimum,Math.min(7,Number(planJson.frequencyRangeMax || minimum)));
    return { due:done<maximum,complete:false,label:done>=minimum?`Weekly goal met · ${Math.max(0,done-minimum)} extra`:`Weekly goal ${done}/${minimum}` };
  }

  function markers(date) {
    const output=[];const seen=new Set();
    if (app==='skin') {
      const model=skinModel();Object.entries(routine?.logs?.[date] || {}).forEach(([id,entry]) => { if (!entry?.completed) return;const item=model.items.find((candidate) => String(candidate.id)===String(id));if (!item) return;const groupId=model.assignments[id];
        if (groupId) { const key=`group:${groupId}`;if (seen.has(key)) return;seen.add(key);const index=model.groups.findIndex((group) => group.id===groupId);if (index>=0) output.push({ number:index+1,label:model.groups[index].title,target:key }); }
        else { const key=`item:${item.id}`;if (seen.has(key)) return;seen.add(key);const individual=model.items.filter((candidate) => !model.assignments[candidate.id]);output.push({ number:model.groups.length+Math.max(0,individual.findIndex((candidate) => String(candidate.id)===String(item.id)))+1,label:item.title || 'Routine Step',target:key }); }
      });return output;
    }
    const model=fitnessModel();const completed=[];Object.entries(routine?.logs?.[date] || {}).forEach(([id,entry]) => { if (!entry?.completed) return;const activity=(routine?.activities || []).find((candidate) => String(candidate.id)===String(id));if (activity) completed.push({ key:`activity:${activity.id}`,label:activity.name || 'Fitness activity' }); });
    (routine?.plans || []).forEach((plan) => { if ((plan.sessions || []).some((session) => String(session.status || '')==='done' && completionDate(session)===date)) completed.push({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') }); });
    const individual=model.entities.filter((entity) => !model.assignments[entity.key]);completed.forEach((entity) => { const groupId=model.assignments[entity.key];if (groupId) { const key=`group:${groupId}`;if (seen.has(key)) return;seen.add(key);const index=model.groups.findIndex((group) => group.id===groupId);if (index>=0) output.push({ number:index+1,label:model.groups[index].title,target:key }); } else { const key=`entity:${entity.key}`;if (seen.has(key)) return;seen.add(key);output.push({ number:model.groups.length+Math.max(0,individual.findIndex((candidate) => candidate.key===entity.key))+1,label:entity.label,target:key }); } });return output;
  }
  function markerHtml(date) {
    const list=markers(date);
    return list.length ? `<span class="bl-routine-calendar-markers">${list.map((marker) => `<span role="button" tabindex="0" class="bl-routine-calendar-marker" data-public-summary-target="${esc(marker.target)}" data-caption="${esc(marker.label)}" aria-label="Open User's Routine Summary: ${esc(marker.label)}">${marker.number}</span>`).join('')}</span>` : '';
  }

  function calendarHtml() {
    const anchor=localDate(calendarAnchor);const dates=calendarView==='week'?weekDates(anchor):monthDates(anchor);const month=anchor.getMonth();const prefix=app==='skin'?'routine':'fitness';const dayClass=app==='skin'?'routine-calendar-day':'fitness-calendar-day';
    const label=calendarView==='week'?`${dates[0].toLocaleDateString('en-GB',{ day:'numeric',month:'short' })} – ${dates[6].toLocaleDateString('en-GB',{ day:'numeric',month:'short',year:'numeric' })}`:anchor.toLocaleDateString('en-GB',{ month:'long',year:'numeric' });
    const weekdays=calendarView==='month'?`<div class="${prefix}-calendar-weekdays" aria-hidden="true">${(UI?.orderedDays?.(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']) || ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']).map((day) => `<span>${day.slice(0,3)}</span>`).join('')}</div>`:'';
    const days=dates.map((date) => { const iso=isoDate(date);const classes=[dayClass];if (iso===selectedDate) classes.push('selected');if (iso===todayIso()) classes.push('today');if (calendarView==='month' && date.getMonth()!==month) classes.push('outside-month');if (markers(iso).length) classes.push('has-completion');return `<button type="button" class="${classes.join(' ')}" data-public-calendar-date="${iso}"${isFuture(iso)?' disabled aria-disabled="true"':''}><span>${date.getDate()}</span>${markerHtml(iso)}</button>`; }).join('');

    if (app==='fitness') {
      return `<section class="card fitness-routine-card fitness-calendar-card bl-routine-card"><div class="section-head-actions fitness-calendar-head"><div><h2>Fitness Calendar</h2><p class="note">Completed fitness activity is highlighted. Select a day to open it in Routine Log.</p></div><div class="fitness-calendar-controls"><div class="fitness-calendar-view-tabs" role="tablist" aria-label="Calendar view"><button type="button" class="tab fitness-calendar-view" data-public-calendar-view="week" aria-selected="${calendarView==='week'}">Week</button><button type="button" class="tab fitness-calendar-view" data-public-calendar-view="month" aria-selected="${calendarView==='month'}">Month</button></div><label class="field-stack fitness-calendar-log-date"><span>Date</span><input type="date" data-public-log-date max="${todayIso()}" value="${selectedDate}" aria-label="Date"></label><div class="actions-inline fitness-calendar-navigation"><button type="button" class="tiny-btn" data-public-calendar-move="previous" aria-label="Previous period">←</button><strong>${esc(label)}</strong><button type="button" class="tiny-btn" data-public-calendar-today>Today</button><button type="button" class="tiny-btn" data-public-calendar-move="next" aria-label="Next period">→</button></div></div></div>${weekdays}<div class="fitness-calendar-grid ${calendarView==='month'?'month-view':'week-view'}">${days}</div></section>`;
    }

    return `<section class="card routine-card routine-card-full routine-calendar-card bl-routine-card"><div class="routine-calendar-head bl-routine-calendar-head"><div><h2>Skincare Calendar</h2></div><div class="routine-calendar-controls bl-routine-calendar-controls"><div class="routine-calendar-view-tabs bl-routine-calendar-view-tabs" role="tablist" aria-label="Calendar view"><button type="button" class="routine-mini routine-calendar-view" data-public-calendar-view="week" aria-selected="${calendarView==='week'}">Week</button><button type="button" class="routine-mini routine-calendar-view" data-public-calendar-view="month" aria-selected="${calendarView==='month'}">Month</button></div><div class="routine-calendar-nav bl-routine-calendar-nav"><button type="button" data-public-calendar-move="previous">←</button><strong>${esc(label)}</strong><button type="button" data-public-calendar-today>Today</button><button type="button" data-public-calendar-move="next">→</button></div></div></div>${weekdays}<div class="routine-calendar-grid ${calendarView==='month'?'month-view':'bl-routine-week-list'}">${days}</div></section>`;
  }

  function skinLog() {
    const model=skinModel();const log=routine?.logs?.[selectedDate] || {};const sections=model.sections.map((section) => { const due=section.items.filter((item) => itemDue(item,selectedDate,section.group));if (!due.length) return '';const complete=due.filter((item) => log?.[item.id]?.completed).length;const partial=complete>0 && complete<due.length;return `<section class="routine-log-group bl-routine-group"><div class="routine-log-group-head"><h3>${esc(section.title)}</h3>${section.group?`<label class="bl-routine-group-complete bl-public-readonly-check"><input type="checkbox" disabled ${complete===due.length?'checked':''} data-public-indeterminate="${partial}"></label>`:''}</div>${due.map((item) => { const entry=log?.[item.id] || {};return `<article class="routine-log-item bl-routine-entry${entry.completed?' complete':''}"><label class="routine-log-check bl-public-readonly-check"><input type="checkbox" disabled ${entry.completed?'checked':''}><span><strong>${esc(item.title || 'Routine Step')}</strong><small>${esc(frequencyText(effectiveSkin(item,section.group).frequency))}</small></span></label><input class="routine-log-note" disabled value="${esc(entry.note || '')}" placeholder="Optional note"></article>`; }).join('')}</section>`; }).join('');
    return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-log-head"><div><h2>Routine Log</h2></div><label class="routine-log-date"><span>Date</span><input type="date" data-public-log-date max="${todayIso()}" value="${selectedDate}"></label></div><div class="routine-log-items">${sections || '<div class="routine-empty">No routine actions are scheduled for this date.</div>'}</div></section>${calendarHtml()}`;
  }
  function fitnessLog() {
    const model=fitnessModel();const log=routine?.logs?.[selectedDate] || {};const sections=model.sections.map((section) => { const rows=section.items.map((entity) => { if (entity.type==='plan') { const state=planState(entity.value,selectedDate);if (!state.due) return '';return `<article class="session-card fitness-routine-log-item${state.complete?' complete':''}"><div class="fitness-log-item-head"><label class="fitness-log-completion bl-public-readonly-check"><input type="checkbox" disabled ${state.complete?'checked':''}><span><strong>${esc(entityName(entity))}</strong><small>${esc(state.label)}</small></span></label></div></article>`; }const activity=entity.value;if (!activityDue(activity,selectedDate)) return '';const entry=log?.[activity.id] || {};return `<article class="session-card fitness-routine-log-item${entry.completed?' complete':''}"><div class="fitness-log-item-head"><label class="fitness-log-completion bl-public-readonly-check"><input type="checkbox" disabled ${entry.completed?'checked':''}><span><strong>${esc(activity.name || 'Fitness activity')}</strong><small>${esc(frequencyText(activity.frequency))}</small></span></label></div>${entry.note?`<label class="field-stack fitness-log-note"><span>Optional note</span><textarea disabled>${esc(entry.note)}</textarea></label>`:''}</article>`; }).filter(Boolean).join('');return rows?`<section class="fitness-routine-log-group"><h3>${esc(section.title)}</h3>${rows}</section>`:''; }).join('');
    return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions fitness-routine-log-head"><div><h2>Routine Log</h2></div><label class="field-stack fitness-log-date"><span>Date</span><input type="date" data-public-log-date max="${todayIso()}" value="${selectedDate}"></label></div>${sections || '<div class="fitness-routine-empty">No planned fitness activity is due for this date.</div>'}</section>${calendarHtml()}`;
  }

  function summaryOptions() {
    if (app==='skin') { const model=skinModel();return `<option value="all">All Routine Steps</option>${model.groups.length?`<optgroup label="Routine Groups">${model.groups.map((group) => `<option value="group:${esc(group.id)}"${summaryFilter===`group:${group.id}`?' selected':''}>${esc(group.title)}</option>`).join('')}</optgroup>`:''}<optgroup label="Individual Routine Steps">${model.items.map((item) => `<option value="item:${esc(item.id)}"${summaryFilter===`item:${item.id}`?' selected':''}>${esc(item.title || 'Routine Step')}</option>`).join('')}</optgroup>`; }
    const model=fitnessModel();return `<option value="all">All Routine Steps</option>${model.groups.length?`<optgroup label="Routine Groups">${model.groups.map((group) => `<option value="group:${esc(group.id)}"${summaryFilter===`group:${group.id}`?' selected':''}>${esc(group.title)}</option>`).join('')}</optgroup>`:''}<optgroup label="Individual Routine Steps">${model.entities.map((entity) => `<option value="entity:${esc(entity.key)}"${summaryFilter===`entity:${entity.key}`?' selected':''}>${esc(entityName(entity))}</option>`).join('')}</optgroup>`;
  }
  function filteredSections(model) {
    let sections=model.sections;if (summaryFilter==='all') return sections;if (summaryFilter.startsWith('group:')) return sections.filter((section) => section.id===summaryFilter.slice(6));
    const prefix=app==='skin'?'item:':'entity:';const id=summaryFilter.startsWith(prefix)?summaryFilter.slice(prefix.length):'';if (!id) return sections;
    return sections.map((section) => ({ ...section,items:section.items.filter((item) => app==='skin'?String(item.id)===id:item.key===id) })).filter((section) => section.items.length);
  }
  function skinSummary() {
    const model=skinModel();return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-summary-head"><div><h2>Routine Summary</h2></div></div><label class="bl-routine-summary-filter"><span>Show</span><select data-public-summary-filter>${summaryOptions()}</select></label><div class="routine-summary">${filteredSections(model).map((section) => `<section class="routine-summary-group bl-routine-group"><div class="routine-summary-group-head"><h3>${esc(section.title)}</h3></div><div class="bl-routine-summary-list">${section.items.map((item,index) => { const effective=effectiveSkin(item,section.group);let benefit=item.benefit || '';try { benefit=global.BASELINE_SKINCARE_ROUTINE_MODEL?.benefitText?.(item,'comprehensive') || benefit; } catch (_error) {}return `<article class="routine-summary-item routine-summary-item-comprehensive bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(item.title || 'Routine Step')}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl class="bl-routine-summary-rows"><div><dt>Routine group</dt><dd>${esc(section.group?.title || 'Individual Routine Steps')}</dd></div><div><dt>Time of day</dt><dd>${esc(effective.timeOfDay || 'Any time')}</dd></div><div><dt>Frequency</dt><dd>${esc(frequencyText(effective.frequency))}</dd></div>${item.productName?`<div><dt>Product / recipe</dt><dd>${esc(item.productName)}</dd></div>`:''}</dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(benefit || 'No description has been recorded.')}</p>${item.notes?`<p class="routine-summary-notes"><strong>Personal notes:</strong> ${esc(item.notes)}</p>`:''}</section></div></article>`; }).join('')}</div></section>`).join('')}</div></section>`;
  }
  function fitnessSummary() {
    const model=fitnessModel();return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2></div></div><label class="bl-routine-summary-filter"><span>Show</span><select data-public-summary-filter>${summaryOptions()}</select></label>${filteredSections(model).map((section) => `<section class="fitness-summary-group routine-summary-group bl-routine-group"><h3>${esc(section.title)}</h3>${section.items.map((entity,index) => { const name=entityName(entity);const plan=entity.type==='plan'?entity.value:null;const activity=entity.type==='activity'?entity.value:null;const sessions=plan?.sessions || [];const items=plan?.planJson?.items || [];return `<article class="fitness-exercise-summary-item routine-summary-item bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(name)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl class="bl-routine-summary-rows"><div><dt>Routine type</dt><dd>${plan?'Calisthenics Plan':esc(activity?.section || 'Fitness Activity')}</dd></div><div><dt>Frequency</dt><dd>${esc(plan?planFrequency(plan):frequencyText(activity?.frequency))}</dd></div>${plan?`<div><dt>Progress</dt><dd>${sessions.filter((session) => String(session.status || '')==='done').length}/${sessions.length} sessions completed</dd></div><div><dt>Exercises</dt><dd>${items.length}</dd></div>`:`<div><dt>Time of day</dt><dd>${esc(activity?.timeOfDay || 'Any time')}</dd></div>`}</dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(activity?.notes || (plan?'Progressive bodyweight training using the saved exercise plan.':'Fitness activity within the saved routine.'))}</p></section></div>${plan?`<div class="fitness-summary-exercises">${items.map((item) => `<span>${esc(item.exercise || 'Exercise')}</span>`).join('')}</div>`:''}</article>`; }).join('')}</section>`).join('')}</section>`;
  }
  function skinPlan() {
    const model=skinModel();return `<section class="card routine-card routine-card-full bl-routine-card"><div class="routine-builder-head"><div><h2>Routine Plan</h2></div></div><div class="routine-items">${model.sections.map((section) => `<section class="routine-plan-group bl-routine-group"><div class="routine-plan-group-head bl-routine-entry-head"><h3>${esc(section.title)}</h3><span>${section.items.length} action${section.items.length===1?'':'s'}</span></div><div class="routine-plan-group-body">${section.items.map((item) => { const effective=effectiveSkin(item,section.group);const product=String(item.productName || item.customProductName || '').trim();return `<article class="routine-item bl-routine-summary-card"><div class="routine-item-head"><strong>${esc(item.title || 'Routine Step')}</strong></div><div class="bl-routine-preview-chips"><span>${esc(effective.timeOfDay || 'Any time')}</span><span>${esc(frequencyText(effective.frequency))}</span>${product?`<span>Product / Recipe: ${esc(product)}</span>`:''}</div></article>`; }).join('')}</div></section>`).join('')}</div></section>`;
  }
  function fitnessPlanSections(view) {
    const model=fitnessModel();
    return model.sections.map((section) => ({ ...section,items:section.items.filter((entity) => view==='calisthenics' ? entity.type==='plan' : entity.type==='activity' && activityPlanView(entity.value)===view) })).filter((section) => section.items.length);
  }
  function fitnessPlanTab(view,label) {
    return `<button type="button" class="tab fitness-routine-plan-tab bl-routine-tab" role="tab" data-public-plan-view="${view}" aria-selected="${activePlanView===view}">${label}</button>`;
  }
  function fitnessPlanEntity(entity) {
    if (entity.type==='activity') {
      const activity=entity.value;return `<article class="session-card fitness-activity-item"><div class="fitness-activity-item-head"><strong>${esc(entityName(entity))}</strong></div><div class="bl-routine-preview-chips"><span>${esc(frequencyText(activity.frequency))}</span><span>${esc(activity.timeOfDay || 'Any time')}</span></div></article>`;
    }
    const plan=entity.value;const sessions=plan.sessions || [];const completed=sessions.filter((session) => String(session.status || '')==='done').length;return `<article class="session-card fitness-activity-item"><div class="fitness-activity-item-head"><strong>${esc(entityName(entity))}</strong></div><div class="bl-routine-preview-chips"><span>${esc(planFrequency(plan))}</span><span>${completed}/${sessions.length} sessions completed</span></div><div class="bl-routine-details">${(plan.planJson?.items || []).map((item,index) => `<div class="bl-routine-summary-card"><strong>${index+1}. ${esc(item.exercise || 'Exercise')}</strong></div>`).join('')}</div></article>`;
  }
  function fitnessPlan() {
    const sections=fitnessPlanSections(activePlanView);const label={ calisthenics:'Calisthenics',cardio:'Cardio',other:'Other Fitness Activity',sports:'Sports' }[activePlanView] || 'Routine Plan';
    const content=sections.length ? sections.map((section) => `<section class="routine-plan-group bl-routine-group"><div class="routine-plan-group-head bl-routine-entry-head"><h3>${esc(section.title)}</h3><span>${section.items.length} routine${section.items.length===1?'':'s'}</span></div><div class="routine-plan-group-body">${section.items.map(fitnessPlanEntity).join('')}</div></section>`).join('') : `<div class="fitness-routine-empty">No ${esc(label)} routine has been added.</div>`;
    return `<section class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Plan</h2></div></div><nav class="fitness-routine-plan-tabs bl-routine-tabs" role="tablist" aria-label="Routine Plan type">${fitnessPlanTab('calisthenics','Calisthenics')}${fitnessPlanTab('cardio','Cardio')}${fitnessPlanTab('other','Other Fitness Activity')}${fitnessPlanTab('sports','Sports')}</nav><div class="fitness-routine-plan-panels"><section class="fitness-routine-plan-panel" data-fitness-plan-panel="${activePlanView}"><div class="section-head-actions"><h3>${esc(label)}</h3></div>${content}</section></div></section>`;
  }

  function body() { return activeView==='summary'?(app==='skin'?skinSummary():fitnessSummary()):activeView==='plan'?(app==='skin'?skinPlan():fitnessPlan()):(app==='skin'?skinLog():fitnessLog()); }
  function tab(view,label) { return `<button type="button" class="${app==='skin'?'routine-subtab bl-routine-tab':'tab fitness-routine-subtab bl-routine-tab'}" role="tab" data-public-view="${view}" aria-selected="${activeView===view}">${label}</button>`; }
  function render() {
    if (!routine) return;const host=target();if (!host) return;const name=String(routine.owner || routine.name || 'User');
    host.innerHTML=`<div class="bl-public-routine-viewonly bl-routine-shell"><div class="bl-routine-entry-head"><h2>${esc(name)}’s Routine</h2><span class="badge">View Only</span></div><nav class="bl-public-routine-viewonly-nav ${app==='skin'?'routine-subtabs bl-routine-tabs':'fitness-routine-subtabs bl-routine-tabs'}">${tab('log',"User's Log")}${tab('summary',"User's Routine Summary")}${tab('plan',"User's Plan")}</nav><div class="bl-public-routine-viewonly-panel">${body()}</div></div>`;
    $$('[data-public-indeterminate="true"]',host).forEach((box) => { box.indeterminate=true; });
  }
  async function loadPublic() {
    const input=field();const name=String(input?.value || '').trim();if (!name) { input?.focus();return; }const host=target();host?.setAttribute('aria-busy','true');const response=await request(`${PUBLIC_API}?name=${encodeURIComponent(name)}`);host?.removeAttribute('aria-busy');
    if (!response?.ok || !response.publicRoutine) { routine=null;if (host) host.innerHTML=`<p>${esc(response?.error==='routine_private'?'That routine is private.':'The public routine could not be loaded.')}</p>`;return; }
    routine=response.publicRoutine;selectedDate=todayIso();calendarAnchor=localDate(selectedDate);summaryFilter='all';try { const view=global.sessionStorage?.getItem(VIEW_KEY);const planView=global.sessionStorage?.getItem(PLAN_VIEW_KEY);const cal=global.sessionStorage?.getItem(CAL_KEY);activeView=['log','summary','plan'].includes(view)?view:'log';activePlanView=['calisthenics','cardio','other','sports'].includes(planView)?planView:'calisthenics';calendarView=['week','month'].includes(cal)?cal:'month'; } catch (_error) {}render();
  }
  function remember() { try { global.sessionStorage?.setItem(VIEW_KEY,activeView);global.sessionStorage?.setItem(PLAN_VIEW_KEY,activePlanView);global.sessionStorage?.setItem(CAL_KEY,calendarView); } catch (_error) {} }
  function moveCalendar(direction) { const anchor=localDate(calendarAnchor);if (calendarView==='week') anchor.setDate(anchor.getDate()+(direction==='next'?7:-7));else anchor.setMonth(anchor.getMonth()+(direction==='next'?1:-1),1);calendarAnchor=anchor;render(); }

  function activateMarker(marker) { activeView='summary';summaryFilter=String(marker.dataset.publicSummaryTarget || 'all');remember();render(); }
  function click(event) {
    const view=event.target?.closest?.('[data-public-view]');if (view) { event.preventDefault();event.stopPropagation();activeView=view.dataset.publicView;remember();render();return; }
    const planView=event.target?.closest?.('[data-public-plan-view]');if (planView) { event.preventDefault();event.stopPropagation();activePlanView=['calisthenics','cardio','other','sports'].includes(planView.dataset.publicPlanView)?planView.dataset.publicPlanView:'calisthenics';remember();render();return; }
    const marker=event.target?.closest?.('[data-public-summary-target]');if (marker) { event.preventDefault();event.stopPropagation();activateMarker(marker);return; }
    const cal=event.target?.closest?.('[data-public-calendar-view]');if (cal) { event.preventDefault();event.stopPropagation();calendarView=cal.dataset.publicCalendarView==='week'?'week':'month';remember();render();return; }
    const move=event.target?.closest?.('[data-public-calendar-move]');if (move) { event.preventDefault();event.stopPropagation();moveCalendar(move.dataset.publicCalendarMove);return; }
    if (event.target?.closest?.('[data-public-calendar-today]')) { event.preventDefault();selectedDate=todayIso();calendarAnchor=localDate(selectedDate);render();return; }
    const day=event.target?.closest?.('[data-public-calendar-date]');if (day && !event.target?.closest?.('[data-public-summary-target]')) { event.preventDefault();if (!isFuture(day.dataset.publicCalendarDate)) { selectedDate=isoDate(day.dataset.publicCalendarDate);calendarAnchor=localDate(selectedDate);render(); }return; }
    if (app==='skin' && event.target?.closest?.('#findPublicRoutineBtn')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic();return; }
    if (app==='fitness' && event.target?.closest?.('#fitnessViewPublicRoutine')) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();loadPublic(); }
  }
  function keydown(event) { const marker=event.target?.closest?.('[data-public-summary-target]');if (marker && (event.key==='Enter' || event.key===' ')) { event.preventDefault();event.stopPropagation();activateMarker(marker); } }
  function change(event) {
    const id=app==='skin'?'publicRoutineName':'fitnessPublicRoutineName';if (event.target?.id===id && event.target.value) { event.stopPropagation();event.stopImmediatePropagation();loadPublic();return; }
    if (event.target?.matches?.('[data-public-log-date]')) { selectedDate=isoDate(event.target.value);if (selectedDate>todayIso()) selectedDate=todayIso();calendarAnchor=localDate(selectedDate);render();return; }
    if (event.target?.matches?.('[data-public-summary-filter]')) { summaryFilter=String(event.target.value || 'all');render(); }
  }
  function updateIntro() { const panel=app==='skin'?$('[data-routine-panel="public"]'):$('[data-fitness-routine-panel="public"]');if (!panel) return;const heading=Array.from(panel.querySelectorAll('h1,h2,h3')).find((node) => /Public Routines/i.test(node.textContent || ''));const intro=heading?.parentElement?.querySelector('p') || heading?.nextElementSibling;if (intro) intro.textContent='Choose a public profile to view their My Routine in View Only format.';const input=field();if (input) $$(`#${input.id}`,panel).slice(1).forEach((duplicate) => duplicate.remove()); }

  function localGroups(settings=UI?.readSettings?.(owner()) || {}) { const groups=(settings.fitnessRoutineGroups || []).map((group) => ({ id:String(group?.id || ''),title:String(group?.title || '') })).filter((group) => group.id && group.title);const valid=new Set(groups.map((group) => group.id));const assignments={};Object.entries(settings.fitnessRoutineAssignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });return { groups,assignments }; }
  function signature(value) { return JSON.stringify(value); }
  async function pushGroups(value) { if (app!=='fitness' || owner()==='guest' || signature(value)===serverGroupSignature) return;const response=await request(GROUP_API,{ method:'POST',body:value });if (response?.ok) serverGroupSignature=signature({ groups:response.groups || [],assignments:response.assignments || {} }); }
  function scheduleGroups(settings) { if (app!=='fitness' || syncingGroups) return;clearTimeout(groupSaveTimer);const value=localGroups(settings);groupSaveTimer=global.setTimeout(() => pushGroups(value),250); }
  async function reconcileGroups() { if (app!=='fitness' || owner()==='guest' || !UI?.writeSettings) return;const local=localGroups();const response=await request(GROUP_API);if (!response?.ok) return;if (response.hasState) { const server={ groups:response.groups || [],assignments:response.assignments || {} };serverGroupSignature=signature(server);if (signature(local)!==serverGroupSignature) { syncingGroups=true;try { UI.writeSettings({ fitnessRoutineGroups:server.groups,fitnessRoutineAssignments:server.assignments },owner()); } finally { syncingGroups=false; } } } else if (local.groups.length || Object.keys(local.assignments).length) await pushGroups(local); }

  function boot() {
    updateIntro();document.addEventListener('click',click,true);document.addEventListener('keydown',keydown,true);document.addEventListener('change',change,true);
    if (app==='fitness') { document.addEventListener('baseline:routine-settings-changed',(event) => scheduleGroups(event.detail?.settings));reconcileGroups();try { global.BASELINE_auth?.onChange?.(reconcileGroups); } catch (_error) {} }
    document.documentElement.setAttribute('data-baseline-public-routine-viewer','v4-readonly');
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window !== 'undefined' ? window : globalThis);
