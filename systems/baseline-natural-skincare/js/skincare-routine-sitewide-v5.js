/* Baseline Personal Care — canonical My Routine group/calendar adapter v5.

   OWNERSHIP CONTRACT
   ------------------
   This module owns Skincare group definitions/assignments, grouped Log/Plan/
   Summary rendering and the Skincare calendar source. Group configuration lives
   in the actual Routine Plan group, not in a second expandable group manager.
   Shared filtering, marker captions/navigation, refresh state and shared layout
   belong to baseline-routine-coherence-v12.js.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__) return;
  global.__BASELINE_SKINCARE_ROUTINE_SITEWIDE_V5__ = true;

  const document = global.document;
  const UI = global.BASELINE_RoutineSystem;
  const MODEL = global.BASELINE_SKINCARE_ROUTINE_MODEL;
  const PRODUCTS = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
  if (!UI || !MODEL) return;

  const GROUP_API = '/systems/baseline-natural-skincare/api/routine_groups.php';
  const SAVE_DELAY = 450;
  const MAX_GROUPS = 30;
  const DAYS = MODEL.DAYS || ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  const state = {
    owner:'guest',authed:false,groups:[],assignments:{},pendingRemoveGroupId:'',
    calendarView:'month',calendarAnchor:new Date(),expandedSteps:new Set(),openGroupSettings:new Set(),
    saveTimer:0,loaded:false,observer:null,patching:false,revision:0,saveBlocked:false,saveInFlight:false,saveQueued:false,serverSignature:''
  };

  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = UI.escapeHtml;

  function cleanText(value,maximum) { return String(value == null ? '' : value).trim().slice(0,maximum); }
  function normaliseOwner(value) { return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest'; }
  function uniqueId(prefix='group') {
    return global.crypto?.randomUUID ? `${prefix}-${global.crypto.randomUUID()}` : `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
  }
  function normaliseGroup(raw,index=0) {
    const source=raw && typeof raw==='object' ? raw : {};
    const id=cleanText(source.id || `routine-group-${index+1}`,80).replace(/[^a-zA-Z0-9_-]/g,'-');
    const title=cleanText(source.title,80);
    if (!id || !title) return null;
    return {
      id,title,collapsed:source.collapsed!==false,
      frequency:MODEL.normaliseFrequency(source.frequency),
      timeOfDay:MODEL.TIMES.some((entry) => entry.value===source.timeOfDay)?source.timeOfDay:'anytime'
    };
  }
  function normaliseGroups(value) {
    const output=[];const ids=new Set();const titles=new Set();
    (Array.isArray(value)?value:[]).slice(0,MAX_GROUPS).forEach((raw,index) => {
      const group=normaliseGroup(raw,index);if (!group) return;
      if (ids.has(group.id)) group.id=`${group.id}-${index+1}`;
      const key=group.title.toLocaleLowerCase('en-GB');if (titles.has(key)) return;
      ids.add(group.id);titles.add(key);output.push(group);
    });
    return output;
  }
  function normaliseAssignments(value,groups=state.groups) {
    const valid=new Set(groups.map((group) => group.id));const output={};
    Object.entries(value && typeof value==='object'?value:{}).slice(0,200).forEach(([itemId,groupId]) => {
      const item=cleanText(itemId,80);const group=cleanText(groupId,80);
      if (item && valid.has(group)) output[item]=group;
    });
    return output;
  }
  function readRoutineState() {
    try {
      const value=global.BASELINE_SKINCARE_ROUTINE?.getState?.() || {};
      return {
        visibility:value.visibility==='public'?'public':'private',
        items:MODEL.normaliseRoutine(value.routine),
        logs:MODEL.normaliseLogs(value.logs),
        groups:Array.isArray(value.groups)?value.groups:[],
        assignments:value.assignments && typeof value.assignments==='object'?value.assignments:{},
        revision:Number(value.revision || 0),
        loaded:Boolean(value.loaded),
        loadFailed:Boolean(value.loadFailed)
      };
    } catch (_error) { return { visibility:'private',items:[],logs:{},groups:[],assignments:{},revision:0,loaded:false,loadFailed:false }; }
  }
  function syncFromCanonical() {
    const routine=readRoutineState();
    if (!routine.loaded || routine.loadFailed) return false;
    /* A local group edit is already the live owner while its revisioned save is
       pending. Mutation-driven refreshes must not replace it with the previous
       canonical snapshot before that save has resolved. */
    if (state.loaded && (state.saveTimer || state.saveInFlight || state.saveQueued)) return true;
    const auth=global.BASELINE_auth?.get?.() || {};
    const nextAuthed=Boolean(auth.authed);
    const nextOwner=nextAuthed?String(auth.name || '').trim() || 'user':'guest';
    if (normaliseOwner(nextOwner)!==normaliseOwner(state.owner)) {
      state.saveBlocked=false;
      state.serverSignature='';
    }
    state.authed=nextAuthed;
    state.owner=nextOwner;
    const groups=normaliseGroups(routine.groups);
    const assignments=normaliseAssignments(routine.assignments,groups);
    state.groups=groups;
    state.assignments=assignments;
    state.revision=routine.revision;
    state.serverSignature=groupSignature(groups,assignments);
    state.loaded=true;
    return true;
  }
  function groupSignature(groups=state.groups,assignments=state.assignments) {
    return JSON.stringify({ groups:normaliseGroups(groups),assignments:normaliseAssignments(assignments,normaliseGroups(groups)) });
  }
  function announceRevision() {
    try { document.dispatchEvent(new CustomEvent('baseline:skincare-resource-revision',{ detail:{ revision:state.revision } })); } catch (_error) {}
  }
  function setSaveStatus(text,kind='') {
    const target=$('#routineSaveStatus');if (!target) return;target.textContent=text;if (kind) target.dataset.kind=kind;else delete target.dataset.kind;
  }
  async function groupRequest(options={}) {
    try {
      const response=await fetch(GROUP_API,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body?{ 'Content-Type':'application/json' }:{}),body:options.body?JSON.stringify(options.body):undefined });
      const data=await response.json().catch(() => null);
      return { ok:response.ok,status:response.status,data:data && typeof data==='object'?data:{ ok:false,error:`http_${response.status}` } };
    } catch (_error) { return { ok:false,status:0,data:{ ok:false,error:'network_error' } }; }
  }
  async function saveGroupsNow() {
    clearTimeout(state.saveTimer);state.saveTimer=0;
    if (!state.authed || state.saveBlocked) return;
    if (state.saveInFlight) { state.saveQueued=true;return; }
    state.saveInFlight=true;
    const payloadGroups=normaliseGroups(JSON.parse(JSON.stringify(state.groups)));
    const payloadAssignments=normaliseAssignments(Object.assign({},state.assignments),payloadGroups);
    const payloadSignature=groupSignature(payloadGroups,payloadAssignments);

    const current=await groupRequest();
    if (!current.ok || !current.data?.ok) {
      state.saveInFlight=false;
      state.saveBlocked=true;
      setSaveStatus('Could not verify the account copy. Group saving has stopped.','warning');
      return;
    }
    const serverGroups=normaliseGroups(current.data.groups);
    const serverAssignments=normaliseAssignments(current.data.assignments,serverGroups);
    const currentSignature=groupSignature(serverGroups,serverAssignments);
    if (state.serverSignature && currentSignature!==state.serverSignature) {
      state.saveInFlight=false;
      state.saveBlocked=true;
      setSaveStatus('Saving stopped because the account groups changed elsewhere. Refresh before making further changes.','warning');
      return;
    }

    state.revision=Number(current.data.revision || 0);
    const response=await groupRequest({ method:'POST',body:{ groups:payloadGroups,assignments:payloadAssignments,expectedRevision:state.revision } });
    if (!response.ok || !response.data?.ok) {
      state.saveBlocked=true;
      setSaveStatus(response.status===409 || response.data?.error==='revision_conflict' ? 'Saving stopped because the account copy changed elsewhere. Refresh before making further changes.' : 'Could not save routine groups to your account.','warning');
    } else {
      state.revision=Number(response.data.revision || state.revision || 0);
      state.serverSignature=payloadSignature;
      global.BASELINE_SKINCARE_ROUTINE?.applyGroupState?.(response.data.groups,response.data.assignments,state.revision);
      announceRevision();
      setSaveStatus('Saved to account.','saved');
    }
    state.saveInFlight=false;
    if (state.saveQueued && !state.saveBlocked) { state.saveQueued=false;saveGroupsNow(); }
  }
  function scheduleGroupSave() {
    if (!state.authed || state.saveBlocked) return;
    clearTimeout(state.saveTimer);state.saveTimer=global.setTimeout(saveGroupsNow,SAVE_DELAY);
  }
  function groupById(id) { return state.groups.find((group) => group.id===id) || null; }
  function groupForItem(itemId) { return groupById(state.assignments[itemId]); }
  function effectiveItem(item) {
    const group=groupForItem(item.id);if (!group) return item;
    const copy=Object.assign({},item);
    copy.frequency=MODEL.normaliseFrequency(group.frequency);
    copy.timeOfDay=group.timeOfDay;
    return copy;
  }
  function groupOptions(selected='') { return `<option value="">No routine group</option>${state.groups.map((group) => `<option value="${esc(group.id)}"${group.id===selected?' selected':''}>${esc(group.title)}</option>`).join('')}`; }
  function selectOptions(values,selected) { return (values || []).map((entry) => `<option value="${esc(entry.value)}"${entry.value===selected?' selected':''}>${esc(entry.label)}</option>`).join(''); }
  function productText(item) {
    if (item.productSelection==='custom') return item.customProductName || item.productName || '';
    return item.productName || PRODUCTS?.selectionDetails(item.productSelection,item.actionId)?.name || '';
  }
  function methodText(item) {
    if (!MODEL.supportsShavingMethod?.(item.actionId)) return '';
    return MODEL.SHAVING_METHODS?.find((entry) => entry.value===item.shavingMethod)?.label || '';
  }

  function ensureTemplateClasses() {
    const root=$('#routine');if (!root) return;UI.applyTemplate(root);
    root.querySelector('.routine-shell')?.classList.add('bl-routine-shell');
    root.querySelector('.routine-subtabs')?.classList.add('bl-routine-tabs');
    $$('.routine-subtab',root).forEach((button) => button.classList.add('bl-routine-tab'));
    $$('.routine-panel',root).forEach((panel) => panel.classList.add('bl-routine-panel'));
    $$('.routine-card',root).forEach((card) => card.classList.add('bl-routine-card'));
  }
  function ensureCalendarCard() {
    const card=$('[data-routine-panel="log"] .routine-calendar-card');
    if (!card) return false;
    card.classList.add('bl-routine-card','bl-routine-calendar');
    return true;
  }
  function ensureGroupManager() {
    const manager=$('[data-routine-panel="plan"] .routine-group-manager');
    if (!manager) return false;
    manager.classList.add('bl-routine-group-manager');
    return true;
  }

  function groupDayControls(group) {
    if (group.frequency.mode!=='days') return '';
    return `<fieldset class="routine-group-days"><legend>Group days</legend>${DAYS.map((day) => `<label><input type="checkbox" data-group-day="${esc(day)}" data-group-id="${esc(group.id)}"${group.frequency.days.includes(day)?' checked':''}><span>${esc(day.slice(0,3))}</span></label>`).join('')}</fieldset>`;
  }
  function groupWeeklyControl(group) {
    if (group.frequency.mode!=='weekly') return '';
    return `<label class="routine-field routine-group-weekly"><span>Times each week</span><input type="number" min="1" max="14" value="${group.frequency.timesPerWeek}" data-group-field="timesPerWeek" data-group-id="${esc(group.id)}"></label>`;
  }
  function groupSettingsHtml(group) {
    if (!state.openGroupSettings.has(group.id)) return '';
    const removing=state.pendingRemoveGroupId===group.id;
    return `<div class="routine-plan-group-settings bl-routine-details"><div class="routine-plan-group-settings-grid"><label class="routine-field"><span>Group time</span><select data-group-field="timeOfDay" data-group-id="${esc(group.id)}">${selectOptions(MODEL.TIMES,group.timeOfDay)}</select></label><label class="routine-field"><span>Group frequency</span><select data-group-field="frequencyMode" data-group-id="${esc(group.id)}">${selectOptions(MODEL.FREQUENCIES,group.frequency.mode)}</select></label>${groupWeeklyControl(group)}</div>${groupDayControls(group)}<div class="routine-plan-group-settings-actions">${removing?`<span class="routine-group-remove-confirm"><span>Remove group?</span><button type="button" data-group-remove-confirm="${esc(group.id)}">Yes</button><button type="button" data-group-remove-cancel>Cancel</button></span>`:`<button type="button" class="routine-group-remove" data-group-remove-request="${esc(group.id)}">Remove group</button>`}</div></div>`;
  }

  function enhanceRoutineItems() {
    const routine=readRoutineState();const itemMap=new Map(routine.items.map((item) => [item.id,item]));
    Object.keys(state.assignments).forEach((itemId) => { if (!itemMap.has(itemId)) delete state.assignments[itemId]; });
    $$('.routine-item[data-routine-item]').forEach((article) => {
      const itemId=article.dataset.routineItem;const item=itemMap.get(itemId);if (!item) return;
      article.classList.add('bl-routine-summary-card');article.dataset.blRoutineDisclosureCard='true';
      const grid=article.querySelector('.routine-item-grid');if (!grid) return;
      let groupField=grid.querySelector('[data-routine-group-field]');
      if (!groupField) { groupField=document.createElement('label');groupField.className='routine-field routine-group-field';groupField.dataset.routineGroupField=itemId;groupField.innerHTML=`<span>Routine group</span><select data-routine-group-select="${esc(itemId)}"></select>`;grid.prepend(groupField); }
      const groupSelect=groupField.querySelector('select');if (groupSelect) { const options=groupOptions(state.assignments[itemId] || '');if (groupSelect.innerHTML!==options) groupSelect.innerHTML=options;groupSelect.value=state.assignments[itemId] || ''; }
      const group=groupForItem(itemId);const frequencySelect=grid.querySelector('[data-field="frequencyMode"]');const timeSelect=grid.querySelector('[data-field="timeOfDay"]');
      const frequencyField=frequencySelect?.closest('.routine-field');const timeField=timeSelect?.closest('.routine-field');
      const itemFrequency=MODEL.normaliseFrequency(item.frequency);
      const days=article.querySelector(':scope>.routine-days,:scope>.bl-routine-details>.routine-days');
      const weekly=article.querySelector(':scope>.routine-weekly,:scope>.bl-routine-details>.routine-weekly');
      if (frequencySelect) frequencySelect.disabled=Boolean(group);if (timeSelect) timeSelect.disabled=Boolean(group);
      if (frequencyField) frequencyField.hidden=Boolean(group);if (timeField) timeField.hidden=Boolean(group);
      if (days) days.hidden=Boolean(group) || itemFrequency.mode!=='days';
      if (weekly) weekly.hidden=Boolean(group) || itemFrequency.mode!=='weekly';
      const header=article.querySelector('.routine-item-head');const actions=article.querySelector('.routine-item-actions');if (!header || !actions) return;
      const detailId=`skincareRoutineDetails-${itemId.replace(/[^a-zA-Z0-9_-]/g,'-')}`;let body=article.querySelector(':scope>.bl-routine-details');
      if (!body) { body=document.createElement('div');body.className='bl-routine-details';body.id=detailId;header.insertAdjacentElement('afterend',body);body.append(grid);const directDays=article.querySelector(':scope>.routine-days');if (directDays) body.append(directDays);const directWeekly=article.querySelector(':scope>.routine-weekly');if (directWeekly) body.append(directWeekly); }
      body.id=detailId;body.hidden=!state.expandedSteps.has(itemId);
      let toggle=actions.querySelector('[data-skincare-step-toggle]');if (!toggle) { toggle=document.createElement('button');toggle.type='button';toggle.className='bl-routine-disclosure';toggle.dataset.skincareStepToggle=itemId;actions.prepend(toggle); }
      toggle.setAttribute('aria-controls',detailId);toggle.setAttribute('aria-expanded',state.expandedSteps.has(itemId)?'true':'false');toggle.textContent=state.expandedSteps.has(itemId)?'Close step':'Edit step';
      let preview=article.querySelector(':scope>.bl-routine-preview-chips');if (!preview) { preview=document.createElement('div');preview.className='bl-routine-preview-chips';header.insertAdjacentElement('afterend',preview); }
      const effective=effectiveItem(item);const chips=[group?.title || '',MODEL.timeLabel(effective.timeOfDay),MODEL.frequencyText(effective.frequency),methodText(item),productText(item)?`Product / Recipe: ${productText(item)}`:'Product / Recipe: Choose…'].filter(Boolean);
      preview.innerHTML=chips.map((value,index) => index===chips.length-1?`<button type="button" class="routine-product-preview-button" data-open-product-step="${esc(itemId)}">${esc(value)}</button>`:`<span>${esc(value)}</span>`).join('');preview.hidden=state.expandedSteps.has(itemId);
    });
  }

  function planGroupHeader(group,count) {
    const schedule=group?[MODEL.timeLabel(group.timeOfDay),MODEL.frequencyText(group.frequency)]:[];
    if (!group) return `<div class="routine-plan-group-head bl-routine-entry-head"><div><h3>Individual Routine Steps</h3></div><span class="routine-group-count">${count} action${count===1?'':'s'}</span><span></span></div>`;
    return `<div class="routine-plan-group-head bl-routine-entry-head"><div><h3>${esc(group.title)}</h3>${schedule.length?`<p>${esc(schedule.join(' · '))}</p>`:''}</div><span class="routine-group-count">${count} action${count===1?'':'s'}</span><span class="bl-routine-entry-actions"><button type="button" class="bl-routine-disclosure" data-plan-group-settings="${esc(group.id)}" aria-expanded="${state.openGroupSettings.has(group.id)?'true':'false'}">${state.openGroupSettings.has(group.id)?'Close settings':'Settings'}</button><button type="button" class="bl-routine-disclosure" data-plan-group-collapse="${esc(group.id)}" aria-expanded="${group.collapsed?'false':'true'}">${group.collapsed?'Expand group':'Collapse group'}</button></span></div>`;
  }
  function organisePlanGroups() {
    const target=$('#routineItems');if (!target) return;
    const articles=$$('.routine-item[data-routine-item]',target);const byId=new Map(articles.map((article) => [article.dataset.routineItem,article]));const fragment=document.createDocumentFragment();const placed=new Set();
    state.groups.forEach((group) => {
      const itemIds=Object.entries(state.assignments).filter(([,groupId]) => groupId===group.id).map(([itemId]) => itemId).filter((itemId) => byId.has(itemId));
      const section=document.createElement('section');section.className='routine-plan-group bl-routine-group';section.dataset.planGroup=group.id;section.innerHTML=planGroupHeader(group,itemIds.length)+groupSettingsHtml(group);
      const body=document.createElement('div');body.className='routine-plan-group-body bl-routine-details';body.hidden=group.collapsed;
      if (itemIds.length) itemIds.forEach((itemId) => { body.append(byId.get(itemId));placed.add(itemId); });
      else body.innerHTML='<div class="routine-group-empty">No routine steps are assigned to this group yet.</div>';
      section.append(body);fragment.append(section);
    });
    const ungrouped=articles.filter((article) => !placed.has(article.dataset.routineItem));
    if (ungrouped.length) { const section=document.createElement('section');section.className='routine-plan-group routine-plan-group-ungrouped bl-routine-group';section.innerHTML=planGroupHeader(null,ungrouped.length);const body=document.createElement('div');body.className='routine-plan-group-body bl-routine-details';ungrouped.forEach((article) => body.append(article));section.append(body);fragment.append(section); }
    target.replaceChildren(fragment);
  }

  function summaryCard(item,index) {
    const effective=effectiveItem(item);const rows=[{ label:'Routine group',value:groupForItem(item.id)?.title || 'Individual Routine Steps' },{ label:'Time of day',value:MODEL.timeLabel(effective.timeOfDay) },{ label:'Frequency',value:MODEL.frequencyText(effective.frequency) },{ label:'Method',value:methodText(item) },{ label:'Product / recipe',value:productText(item) || 'Not selected' }];
    return `<article class="routine-summary-item routine-summary-item-comprehensive bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(item.title)}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4>${UI.summaryRows(rows)}</section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(MODEL.benefitText(item,'comprehensive'))}</p>${item.notes?`<p class="routine-summary-notes"><strong>Your notes:</strong> ${esc(item.notes)}</p>`:''}</section></div></article>`;
  }
  function renderSummary() {
    const target=$('#routineSummary');if (!target) return;const items=readRoutineState().items;if (!items.length) return;const used=new Set();const sections=[];
    state.groups.forEach((group) => { const groupItems=items.filter((item) => state.assignments[item.id]===group.id);if (!groupItems.length) return;groupItems.forEach((item) => used.add(item.id));sections.push(`<section class="routine-summary-group bl-routine-group" data-summary-group="${esc(group.id)}"><div class="routine-summary-group-head"><h3>${esc(group.title)}</h3></div><div class="bl-routine-summary-list">${groupItems.map(summaryCard).join('')}</div></section>`); });
    const ungrouped=items.filter((item) => !used.has(item.id));if (ungrouped.length) sections.push(`<section class="routine-summary-group bl-routine-group" data-summary-group="individual"><div class="routine-summary-group-head"><h3>Individual Routine Steps</h3></div><div class="bl-routine-summary-list">${ungrouped.map(summaryCard).join('')}</div></section>`);
    UI.renderHtml(target,sections.join(''));
  }
  function logItem(item,status,entry,selectedDate) {
    const effective=effectiveItem(item);const details=[MODEL.timeLabel(effective.timeOfDay),status.detail,methodText(item),productText(item)].filter(Boolean).join(' · ');
    return `<article class="routine-log-item bl-routine-entry${entry.completed?' complete':''}"><label class="routine-log-check"><input type="checkbox" data-log-complete="${esc(item.id)}" data-log-date="${esc(selectedDate)}"${entry.completed?' checked':''}><span><strong>${esc(item.title)}</strong><small>${esc(details)}</small></span></label><input class="routine-log-note" type="text" maxlength="500" placeholder="Optional note" value="${esc(entry.note || '')}" data-log-note="${esc(item.id)}" data-log-date="${esc(selectedDate)}"></article>`;
  }
  function renderGroupedLog() {
    const target=$('#routineLogItems');const progress=$('#routineLogProgress');if (!target) return;const routine=readRoutineState();const selectedDate=$('#routineLogDate')?.value || UI.isoDate(new Date());if (!routine.items.length) return;
    const due=routine.items.map((item) => { const effective=effectiveItem(item);return { item,status:MODEL.dueStatus(effective,selectedDate,routine.logs) }; }).filter((entry) => entry.status.due);const entries=routine.logs[selectedDate] || {};const completed=due.filter(({item}) => entries[item.id]?.completed).length;if (progress) progress.textContent=`${completed}/${due.length} completed`;
    if (!due.length) { UI.renderHtml(target,'<div class="routine-empty">No routine actions are scheduled for this date.</div>');return; }
    const sections=[];const used=new Set();state.groups.forEach((group) => { const groupDue=due.filter(({item}) => state.assignments[item.id]===group.id);if (!groupDue.length) return;groupDue.forEach(({item}) => used.add(item.id));sections.push(`<section class="routine-log-group bl-routine-group"><div class="routine-log-group-head"><h3>${esc(group.title)}</h3></div>${groupDue.map(({item,status}) => logItem(item,status,entries[item.id] || { completed:false,note:'',completedAt:'' },selectedDate)).join('')}</section>`); });
    const ungrouped=due.filter(({item}) => !used.has(item.id));if (ungrouped.length) sections.push(`<section class="routine-log-group bl-routine-group"><div class="routine-log-group-head"><h3>Individual Routine Steps</h3></div>${ungrouped.map(({item,status}) => logItem(item,status,entries[item.id] || { completed:false,note:'',completedAt:'' },selectedDate)).join('')}</section>`);UI.renderHtml(target,sections.join(''));
  }

  function completedForDate(date,routine) {
    const entries=routine.logs[date] || {};const names=new Map(routine.items.map((item) => [item.id,item.title]));return Object.entries(entries).filter(([,entry]) => entry?.completed).map(([itemId]) => names.get(itemId)).filter(Boolean);
  }
  function monthDayButton(date,anchor,routine) {
    const iso=UI.isoDate(date);const completed=completedForDate(iso,routine);const selected=iso===($('#routineLogDate')?.value || UI.isoDate(new Date()));const today=iso===UI.todayIso();const future=UI.isFutureDate(iso);const classes=['routine-calendar-day'];if (completed.length) classes.push('has-routine');if (selected) classes.push('selected');if (today) classes.push('today');if (future) classes.push('future-date');if (date.getMonth()!==anchor.getMonth()) classes.push('outside-month');
    return `<button type="button" class="${classes.join(' ')}" data-calendar-date="${iso}"${future?' disabled aria-disabled="true"':''} title="${esc(completed.length?completed.join(', '):'No completed routine actions')}"><span class="routine-calendar-number">${date.getDate()}</span>${completed.length?`<span class="routine-calendar-count">${completed.length}</span>`:''}</button>`;
  }
  function renderCalendar() {
    const grid=$('#routineCalendarGrid');const label=$('#routineCalendarLabel');const weekdays=$('#routineCalendarWeekdays');if (!grid || !label || !weekdays) return;const routine=readRoutineState();const selectedDate=$('#routineLogDate')?.value || UI.isoDate(new Date());$$('.routine-calendar-view').forEach((button) => button.setAttribute('aria-selected',button.dataset.skincareCalendarView===state.calendarView?'true':'false'));
    if (state.calendarView==='week') { const bounds=UI.weekBounds(state.calendarAnchor);label.textContent=`${bounds.start.toLocaleDateString('en-GB',{ day:'numeric',month:'short' })} – ${bounds.end.toLocaleDateString('en-GB',{ day:'numeric',month:'short',year:'numeric' })}`;weekdays.hidden=true;grid.className='routine-calendar-grid bl-routine-week-list';UI.renderHtml(grid,UI.weekDates(state.calendarAnchor).map((date) => { const completed=completedForDate(UI.isoDate(date),routine);return UI.weekRow(date,{ count:completed.length,details:completed,selectedDate,disabled:UI.isFutureDate(UI.isoDate(date)) }); }).join(''),{ preserveFocus:false });return; }
    const anchor=new Date(state.calendarAnchor.getFullYear(),state.calendarAnchor.getMonth(),1);label.textContent=anchor.toLocaleDateString('en-GB',{ month:'long',year:'numeric' });weekdays.hidden=false;const orderedWeekdays=UI.orderedDays?.(DAYS) || DAYS;weekdays.innerHTML=orderedWeekdays.map((day) => `<span>${esc(day.slice(0,3))}</span>`).join('');grid.className='routine-calendar-grid month-view';UI.renderHtml(grid,UI.monthDates(anchor).map((date) => monthDayButton(date,anchor,routine)).join(''),{ preserveFocus:false });
  }

  function patch() {
    if (!state.loaded || state.patching) return;state.patching=true;
    try { ensureTemplateClasses();ensureCalendarCard();ensureGroupManager();enhanceRoutineItems();organisePlanGroups();renderSummary();renderGroupedLog();renderCalendar();UI.applyTemplate($('#routine')); }
    finally { state.patching=false; }
  }
  function schedulePatch() { if (state.observer?.refresh) state.observer.refresh();else global.requestAnimationFrame(patch); }

  function createGroup() {
    const field=$('#routineGroupName');const title=cleanText(field?.value,80);if (!title || state.groups.length>=MAX_GROUPS || state.groups.some((group) => group.title.localeCompare(title,'en-GB',{ sensitivity:'base' })===0)) { field?.focus();return; }
    const group=normaliseGroup({ id:uniqueId('routine-group'),title,frequency:{ mode:'daily',days:[],timesPerWeek:1 } },state.groups.length);state.groups.push(group);if (field) field.value='';scheduleGroupSave();schedulePatch();
  }
  function updateGroup(id,field,value) {
    const group=groupById(id);if (!group) return;
    if (field==='frequencyMode') group.frequency.mode=MODEL.FREQUENCIES.some((entry) => entry.value===value)?value:'daily';
    if (field==='timesPerWeek') group.frequency.timesPerWeek=Math.max(1,Math.min(14,Math.round(Number(value) || 1)));
    if (field==='timeOfDay') group.timeOfDay=MODEL.TIMES.some((entry) => entry.value===value)?value:'anytime';
    scheduleGroupSave();schedulePatch();
  }
  function updateGroupDay(id,day,checked) {
    const group=groupById(id);if (!group || !DAYS.includes(day)) return;group.frequency.days=DAYS.filter((entry) => entry===day?checked:group.frequency.days.includes(entry));scheduleGroupSave();schedulePatch();
  }
  function removeGroup(id) {
    state.groups=state.groups.filter((group) => group.id!==id);Object.keys(state.assignments).forEach((itemId) => { if (state.assignments[itemId]===id) delete state.assignments[itemId]; });state.pendingRemoveGroupId='';state.openGroupSettings.delete(id);scheduleGroupSave();schedulePatch();
  }
  function assignItem(itemId,groupId) { if (groupId && groupById(groupId)) state.assignments[itemId]=groupId;else delete state.assignments[itemId];scheduleGroupSave();schedulePatch(); }
  function readCalendarRoute() { try { const params=new URLSearchParams(global.location.search||'');const view=params.get('calendar-view');const anchor=params.get('calendar-anchor');return { view:view==='week'?'week':'month',anchor:/^\d{4}-\d{2}-\d{2}$/.test(anchor||'')?UI.localDate(anchor):null }; } catch (_error) { return { view:'month',anchor:null }; } }
  function writeCalendarRoute(mode='replace') { try { const url=new URL(global.location.href);url.searchParams.delete('calendar-view');url.searchParams.delete('calendar-anchor');if (state.calendarView!=='month') url.searchParams.set('calendar-view',state.calendarView);const anchorIso=UI.isoDate(state.calendarAnchor);const defaultIso=UI.isoDate(new Date());if (anchorIso!==defaultIso) url.searchParams.set('calendar-anchor',anchorIso);const next=url.pathname+(url.searchParams.toString()?'?'+url.searchParams.toString():'')+url.hash;const payload=Object.assign({},global.history.state||{},{skincareCalendar:true,calendarView:state.calendarView,calendarAnchor:anchorIso});if(mode==='push') global.history.pushState(payload,'',next);else global.history.replaceState(payload,'',next); } catch (_error) {} }
  function applyCalendarRoute() { const route=readCalendarRoute();state.calendarView=route.view;if(route.anchor) state.calendarAnchor=route.anchor; }
  function moveCalendar(direction) { const amount=direction==='next'?1:-1;const anchor=new Date(state.calendarAnchor);if (state.calendarView==='week') anchor.setDate(anchor.getDate()+(amount*7));else anchor.setMonth(anchor.getMonth()+amount,1);state.calendarAnchor=anchor;writeCalendarRoute('push');schedulePatch(); }
  function selectDate(date) { const clamped=UI.clampLogDate(date);const parsed=UI.parseIsoDate(clamped);if (!parsed || UI.isFutureDate(date)) return;state.calendarAnchor=parsed;const input=$('#routineLogDate');if (input) { input.value=clamped;input.dispatchEvent(new Event('change',{ bubbles:true })); }schedulePatch(); }

  function bindEvents() {
    document.addEventListener('input',(event) => { const control=event.target?.closest?.('#routineItems [data-field="title"],#routineItems [data-field="notes"],#routineItems [data-field="customProductName"]');if (control) event.stopImmediatePropagation(); },true);
    document.addEventListener('click',(event) => {
      if (event.target.closest('#createRoutineGroup')) { createGroup();return; }
      const settings=event.target.closest('[data-plan-group-settings]');if (settings) { const id=settings.dataset.planGroupSettings;if (state.openGroupSettings.has(id)) state.openGroupSettings.delete(id);else state.openGroupSettings.add(id);schedulePatch();return; }
      const collapse=event.target.closest('[data-plan-group-collapse]');if (collapse) { const group=groupById(collapse.dataset.planGroupCollapse);if (group) { group.collapsed=!group.collapsed;scheduleGroupSave();schedulePatch(); }return; }
      const stepToggle=event.target.closest('[data-skincare-step-toggle]');if (stepToggle) { event.preventDefault();event.stopPropagation();const id=stepToggle.dataset.skincareStepToggle;if (state.expandedSteps.has(id)) state.expandedSteps.delete(id);else state.expandedSteps.add(id);schedulePatch();return; }
      const productButton=event.target.closest('[data-open-product-step]');if (productButton) { event.preventDefault();const id=productButton.dataset.openProductStep;state.expandedSteps.add(id);schedulePatch();global.setTimeout(() => $(`[data-routine-item="${CSS.escape(id)}"] [data-field="productSelection"]`)?.focus(),40);return; }
      const removeRequest=event.target.closest('[data-group-remove-request]');if (removeRequest) { state.pendingRemoveGroupId=removeRequest.dataset.groupRemoveRequest;schedulePatch();return; }
      const removeConfirm=event.target.closest('[data-group-remove-confirm]');if (removeConfirm) { removeGroup(removeConfirm.dataset.groupRemoveConfirm);return; }
      if (event.target.closest('[data-group-remove-cancel]')) { state.pendingRemoveGroupId='';schedulePatch();return; }
      const view=event.target.closest('[data-skincare-calendar-view]');if (view) { state.calendarView=view.dataset.skincareCalendarView==='week'?'week':'month';state.calendarAnchor=UI.localDate($('#routineLogDate')?.value || new Date());writeCalendarRoute('push');schedulePatch();return; }
      const move=event.target.closest('[data-skincare-calendar-move]');if (move) { moveCalendar(move.dataset.skincareCalendarMove);return; }
      if (event.target.closest('[data-skincare-calendar-today]')) { selectDate(UI.isoDate(new Date()));return; }
      const date=event.target.closest('[data-calendar-date]');if (date && date.closest('.routine-calendar-card')) selectDate(date.dataset.calendarDate);
    },true);
    document.addEventListener('change',(event) => {
      const groupSelect=event.target.closest('[data-routine-group-select]');if (groupSelect) { assignItem(groupSelect.dataset.routineGroupSelect,groupSelect.value);return; }
      const groupField=event.target.closest('[data-group-field]');if (groupField) { updateGroup(groupField.dataset.groupId,groupField.dataset.groupField,groupField.value);return; }
      const groupDay=event.target.closest('[data-group-day]');if (groupDay) { updateGroupDay(groupDay.dataset.groupId,groupDay.dataset.groupDay,groupDay.checked);return; }
      if (event.target?.id==='routineLogDate') { event.target.value=UI.configureLogDateInput(event.target,event.target.value);state.calendarAnchor=UI.localDate(event.target.value);global.setTimeout(schedulePatch,0); }
      if (event.target.closest('#routineLogItems [data-log-complete]')) {
        /* Completion is a data/value change, not a structural Log change. Keep
           the clicked checkbox node stable and refresh only calendar output. */
        global.setTimeout(renderCalendar,0);
        return;
      }
      if (event.target.closest('#routineItems [data-field],#routineLogItems [data-log-note]')) global.setTimeout(schedulePatch,0);
    });
    document.addEventListener('baseline:skincare-routine-updated',()=>{ if(state.loaded) schedulePatch(); });
    document.addEventListener('baseline:skincare-routine-loaded',renderCanonical);
    document.addEventListener('keydown',(event) => { if (event.target?.id==='routineGroupName' && event.key==='Enter') { event.preventDefault();createGroup(); } });
  }

  function renderCanonical() {
    if (!syncFromCanonical()) return;
    patch();
  }
  global.BASELINE_SKINCARE_ROUTINE_GROUPS=Object.freeze({
    getState:()=>({ groups:normaliseGroups(state.groups),assignments:normaliseAssignments(state.assignments,state.groups),revision:state.revision,loaded:state.loaded,saveBlocked:state.saveBlocked }),
    render:renderCanonical
  });

  function boot() {
    const root=$('#routine');if (!root) return;
    applyCalendarRoute();
    bindEvents();
    state.observer=UI.observe(root,renderCanonical);
    renderCanonical();
    writeCalendarRoute('replace');
    global.addEventListener('popstate',()=>{ applyCalendarRoute();schedulePatch(); });
    global.addEventListener('pagehide',() => state.observer?.disconnect(),{ once:true });
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);