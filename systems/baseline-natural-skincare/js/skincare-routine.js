/* Baseline Natural Skincare — canonical My Routine data/workspace owner v3.

   OWNERSHIP CONTRACT
   ------------------
   This module owns the signed-in user's Skincare routine data, editable Plan,
   completion Log, base calendar, visibility setting, public-profile list and
   canonical My Routine subview routing.

   Public My Routine URLs are clean page paths:
   /baseline-natural-skincare/my-routine/log
   /baseline-natural-skincare/my-routine/summary
   /baseline-natural-skincare/my-routine/plan
   /baseline-natural-skincare/my-routine/public

   Summary filters, Log Dates and other transient interface state remain in
   session storage. They are not public routing parameters.

   This module is present on every Skincare page, but it owns navigation only
   while the current location actually targets My Routine. It must never pull
   System, Recipes, Ingredient Library or Skin Support into My Routine.

   It does NOT fetch or render another user's routine. Public routine content is
   owned exclusively by baseline-public-routine-viewonly-v4.js.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_SKINCARE_ROUTINE_V3__) return;
  global.__BASELINE_SKINCARE_ROUTINE_V3__=true;
  global.__BASELINE_SKINCARE_ROUTINE__=true;

  const document=global.document;
  const MODEL=global.BASELINE_SKINCARE_ROUTINE_MODEL;
  if (!MODEL) return;

  const STORAGE_PREFIX='__bl_skincare_routine_v1__::';
  const ROUTINE_API='/systems/baseline-natural-skincare/api/routine_state.php';
  const ROUTE_BASE='/baseline-natural-skincare/my-routine';
  const VIEW_KEY='__bl_skincare_routine_view__';
  const VIEWS=['log','summary','plan','public'];
  const state={ routine:[],logs:{},visibility:'private',activeView:'log',selectedDate:MODEL.todayIso(),calendarView:'month',calendarAnchor:MODEL.localDate(MODEL.todayIso()),pendingRemoveId:'',saveTimer:0,profileLoading:false };

  const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
  const $$=(selector,root=document)=>Array.from(root?.querySelectorAll?.(selector)||[]);
  const esc=MODEL.escapeHtml;

  function owner() {
    try {
      const snapshot=global.BASELINE_auth?.get?.();
      return snapshot?.authed?String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user':'guest';
    } catch (_error) { return 'guest'; }
  }
  function authed() { try { return Boolean(global.BASELINE_auth?.get?.()?.authed); } catch (_error) { return false; } }
  function storageKey() { return `${STORAGE_PREFIX}${owner()}`; }
  function readLocal() { try { const raw=global.localStorage?.getItem(storageKey());return raw?JSON.parse(raw):null; } catch (_error) { return null; } }
  function writeLocal() {
    try { global.localStorage?.setItem(storageKey(),JSON.stringify({ routine:state.routine,logs:state.logs,visibility:state.visibility,updatedAt:new Date().toISOString() })); } catch (_error) {}
  }
  function persistLocal() { writeLocal(); }

  function locationTargetsRoutine() {
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    if (/^\/baseline-natural-skincare\/my-routine(?:\/(?:log|summary|plan|public))?$/i.test(path)) return true;
    try {
      const url=new URL(global.location.href);
      if (VIEWS.includes(String(url.searchParams.get('routine-view') || ''))) return true;
      if (String(url.hash || '').toLowerCase()==='#tab=routine') return true;
    } catch (_error) {}
    return document.documentElement.getAttribute('data-initial-skincare-tab')==='routine';
  }
  function routeViewFromLocation() {
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    const clean=path.match(/^\/baseline-natural-skincare\/my-routine\/(log|summary|plan|public)$/i);
    if (clean) return String(clean[1]).toLowerCase();
    try {
      const url=new URL(global.location.href);
      const legacy=String(url.searchParams.get('routine-view') || '');
      if (VIEWS.includes(legacy)) return legacy;
    } catch (_error) {}
    try {
      const saved=String(global.sessionStorage?.getItem(VIEW_KEY) || '');
      if (VIEWS.includes(saved)) return saved;
    } catch (_error) {}
    return 'log';
  }
  function cleanViewPath(view) {
    return `${ROUTE_BASE}/${VIEWS.includes(view)?view:'log'}`;
  }
  function writeViewRoute(view) {
    const next=VIEWS.includes(view)?view:'log';
    try {
      const url=new URL(global.location.href);
      url.pathname=cleanViewPath(next);
      ['routine-view','routine-plan','routine-filter','routine-date'].forEach((key)=>url.searchParams.delete(key));
      url.hash='';
      global.history.replaceState(global.history.state,'',url.pathname+url.search);
    } catch (_error) {}
  }
  function selectOuterRoutine() {
    try { global.BASELINE_selectTab?.('routine',{ silentHistory:true }); } catch (_error) {}
    $$('.tab[data-target]').forEach((button)=>{
      const selected=button.dataset.target==='routine';
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',selected?'true':'false');
    });
    const root=$('#routine');
    if (root) { root.hidden=false;root.classList.add('active'); }
    $$('main.wrap>.section').forEach((section)=>{ if (section!==root) section.classList.remove('active'); });
    document.documentElement.setAttribute('data-initial-skincare-tab','routine');
    document.documentElement.setAttribute('data-initial-routine-view',state.activeView);
  }

  function emit(scope='all') { try { document.dispatchEvent(new CustomEvent('baseline:skincare-routine-updated',{ detail:{ scope } })); } catch (_error) {} }
  async function request(url,options={}) {
    try {
      const response=await fetch(url,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body?{ 'Content-Type':'application/json' }:{}),body:options.body?JSON.stringify(options.body):undefined });
      const data=await response.json().catch(()=>null);return { ok:response.ok,data };
    } catch (_error) { return { ok:false,data:null }; }
  }
  function setStatus(text='',kind='') {
    const target=$('#routineSaveStatus');if (!target) return;target.textContent=text;if (kind) target.dataset.kind=kind;else delete target.dataset.kind;
  }
  async function saveRemote() {
    if (!authed()) return;
    const response=await request(ROUTINE_API,{ method:'POST',body:{ routine:state.routine,logs:state.logs,visibility:state.visibility } });
    if (!response.ok || !response.data?.ok) { setStatus('Could not save routine.','warning');return; }
    state.routine=MODEL.normaliseRoutine(response.data.routine);state.logs=MODEL.normaliseLogs(response.data.logs);state.visibility=response.data.visibility==='public'?'public':'private';writeLocal();setStatus('Saved.','saved');
  }
  function scheduleSave() {
    writeLocal();clearTimeout(state.saveTimer);setStatus(authed()?'Saving…':'Saved on this device.');if (authed()) state.saveTimer=global.setTimeout(saveRemote,450);
  }
  function loadLocalState() {
    const local=readLocal();
    if (!local) return;
    state.routine=MODEL.normaliseRoutine(local.routine);
    state.logs=MODEL.normaliseLogs(local.logs);
    state.visibility=local.visibility==='public'?'public':'private';
  }
  async function loadRemoteState() {
    if (!authed()) return false;
    const before=JSON.stringify({ routine:state.routine,logs:state.logs,visibility:state.visibility });
    const response=await request(ROUTINE_API);
    if (response.ok && response.data?.ok) {
      state.routine=MODEL.normaliseRoutine(response.data.routine);
      state.logs=MODEL.normaliseLogs(response.data.logs);
      state.visibility=response.data.visibility==='public'?'public':'private';
      writeLocal();
    }
    const after=JSON.stringify({ routine:state.routine,logs:state.logs,visibility:state.visibility });
    return after!==before;
  }

  function ensureShell() {
    const root=$('#routine');
    if (!root || $('.routine-shell',root)) return;
    const shell=document.createElement('div');shell.className='routine-shell';
    shell.innerHTML=`
      <div class="routine-subtabs" role="tablist" aria-label="My Routine views">
        <button type="button" class="routine-subtab active" data-routine-view="log" role="tab" aria-selected="true">Routine Log</button>
        <button type="button" class="routine-subtab" data-routine-view="summary" role="tab" aria-selected="false">Routine Summary</button>
        <button type="button" class="routine-subtab" data-routine-view="plan" role="tab" aria-selected="false">Routine Plan</button>
        <button type="button" class="routine-subtab" data-routine-view="public" role="tab" aria-selected="false">Public Routines</button>
      </div>
      <div class="routine-panel active" data-routine-panel="log">
        <section class="card routine-card routine-card-full">
          <div class="routine-log-head"><div><h2>Routine Log</h2><p class="note">Record completed actions for the selected date. Weekly actions remain available until their weekly target is reached.</p></div><label class="routine-log-date"><span>Date</span><input type="date" id="routineLogDate"></label></div>
          <div id="routineLogProgress" class="routine-log-progress"></div><div id="routineLogItems" class="routine-log-items"></div>
        </section>
        <section class="card routine-card routine-card-full routine-calendar-card">
          <div class="routine-calendar-head"><div><h2>Skincare Calendar</h2><p class="note">Select Week or Month. Each day opens directly in Routine Log.</p></div><div class="routine-calendar-controls"><div class="routine-calendar-view-tabs" role="tablist" aria-label="Calendar view"><button type="button" class="routine-mini routine-calendar-view" data-calendar-view="week" aria-selected="false">Week</button><button type="button" class="routine-mini routine-calendar-view active" data-calendar-view="month" aria-selected="true">Month</button></div><div class="routine-calendar-nav"><button type="button" class="routine-mini" data-calendar-move="previous" aria-label="Previous period">←</button><strong id="routineCalendarLabel"></strong><button type="button" class="routine-mini" data-calendar-today>Today</button><button type="button" class="routine-mini" data-calendar-move="next" aria-label="Next period">→</button></div></div></div>
          <div class="routine-calendar-weekdays" aria-hidden="true"></div><div id="routineCalendarGrid" class="routine-calendar-grid month-view"></div>
        </section>
      </div>
      <div class="routine-panel" data-routine-panel="summary" hidden><section class="card routine-card routine-card-full"><div class="routine-summary-head"><div><h2>Routine Summary</h2><p class="note">A complete view of every routine action, its schedule, benefits and personal notes. The plan may remain private or be shared publicly, while the completion log always stays private.</p></div></div><div id="routineSummary" class="routine-summary"></div></section></div>
      <div class="routine-panel" data-routine-panel="plan" hidden><section class="card routine-card routine-card-full"><div class="routine-builder-head"><div><h2>Routine Plan</h2></div></div><div class="routine-add-row"><div class="routine-action-combobox"><div class="routine-action-input-wrap"><input id="routineActionSearch" type="search" autocomplete="off" placeholder="Type or choose a routine action…" role="combobox" aria-autocomplete="list" aria-controls="routineActionMenu" aria-expanded="false"><button type="button" class="routine-action-toggle" id="routineActionToggle" aria-label="Show routine actions" aria-expanded="false">⌄</button></div><select id="routineActionSelect" class="routine-action-native" aria-hidden="true" tabindex="-1"></select><div id="routineActionMenu" class="routine-action-menu" role="listbox" hidden></div></div><button id="addRoutineAction" type="button" class="routine-add-button">Add to routine</button></div><div id="routineItems" class="routine-items"></div><div id="routineSaveStatus" class="routine-save-status" aria-live="polite"></div></section></div>
      <div class="routine-panel" data-routine-panel="public" hidden><section class="card routine-card routine-card-full"><div class="routine-public-head"><div><h2>Public Routines</h2><p class="note">Choose a public profile to view their My Routine in View Only format.</p></div><label><span>My Routine Visibility</span><select id="routineVisibility" class="routine-visibility-select"><option value="private">Private</option><option value="public">Public</option></select></label></div><div class="routine-public-select"><select id="publicRoutineName"><option value="">Choose a public profile…</option></select><button type="button" id="findPublicRoutineBtn" class="routine-add-button">View Routine</button></div><div id="publicRoutineResult" class="routine-public-result" aria-live="polite"></div></section></div>`;
    root.appendChild(shell);
  }

  function activateView(view,remember=true) {
    const next=VIEWS.includes(view)?view:'log';state.activeView=next;
    $$('[data-routine-view]').forEach((button)=>{ const selected=button.dataset.routineView===next;button.classList.toggle('active',selected);button.setAttribute('aria-selected',selected?'true':'false'); });
    $$('[data-routine-panel]').forEach((panel)=>{ const selected=panel.dataset.routinePanel===next;panel.hidden=!selected;panel.classList.toggle('active',selected); });
    if (next==='log') { renderLog();renderCalendar(); }
    if (next==='summary') renderSummary();
    if (next==='plan') renderPlan();
    if (next==='public') renderPublicProfiles();
    try { global.sessionStorage?.setItem(VIEW_KEY,next); } catch (_error) {}
    if (remember) writeViewRoute(next);
  }
  function restoreRoute() {
    if (!locationTargetsRoutine()) return;
    const next=routeViewFromLocation();
    state.activeView=next;
    selectOuterRoutine();
    activateView(next,false);
    writeViewRoute(next);
  }

  function optionHtml(options,selected) { return options.map((option)=>`<option value="${esc(option.value)}"${option.value===selected?' selected':''}>${esc(option.label)}</option>`).join(''); }
  function productOptionsHtml(item) {
    const library=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;if (!library) return '<option value="">No product selected</option>';
    const selected=String(item.productSelection || '');if (typeof library.optionsHtml==='function') return library.optionsHtml(item.actionId,selected);return '<option value="">No product selected</option>';
  }
  function benefitText(item) { return MODEL.benefitText(item,'comprehensive'); }
  function frequencyText(frequency) {
    const value=MODEL.normaliseFrequency(frequency);if (value.mode==='daily') return 'Every day';if (value.mode==='days') return value.days.length?value.days.join(', '):'Specific days';if (value.mode==='weekly') return `${value.timesPerWeek}× each week`;return 'As needed';
  }
  function timeText(value) { return MODEL.TIME_OPTIONS.find((option)=>option.value===value)?.label || 'Any time'; }

  function renderActionPicker() {
    const select=$('#routineActionSelect');const menu=$('#routineActionMenu');const search=$('#routineActionSearch');if (!select || !menu || !search) return;
    const grouped=MODEL.ACTION_GROUPS.map((group)=>({ label:group.label,options:group.ids.map((id)=>MODEL.actionById(id)).filter(Boolean) }));
    select.innerHTML='<option value="">Choose a routine action…</option>'+grouped.map((group)=>`<optgroup label="${esc(group.label)}">${group.options.map((action)=>`<option value="${esc(action.id)}">${esc(action.title)}</option>`).join('')}</optgroup>`).join('')+'<optgroup label="Other"><option value="custom">Custom action</option></optgroup>';
    const query=String(search.value || '').trim().toLocaleLowerCase('en-GB');
    menu.innerHTML=grouped.map((group)=>{ const matches=group.options.filter((action)=>!query || `${action.title} ${action.summary}`.toLocaleLowerCase('en-GB').includes(query));if (!matches.length) return '';return `<div class="routine-action-group"><div class="routine-action-group-label">${esc(group.label)}</div>${matches.map((action)=>`<button type="button" class="routine-action-option" role="option" data-routine-action-option="${esc(action.id)}"><strong>${esc(action.title)}</strong></button>`).join('')}</div>`; }).join('') + ((!query || 'custom action'.includes(query))?'<div class="routine-action-group"><div class="routine-action-group-label">Other</div><button type="button" class="routine-action-option" role="option" data-routine-action-option="custom"><strong>Custom action</strong></button></div>':'');
    if (!menu.innerHTML.trim()) menu.innerHTML='<div class="routine-action-no-results">No matching routine actions.</div>';
  }
  function setActionPickerOpen(open) {
    const menu=$('#routineActionMenu');const search=$('#routineActionSearch');const toggle=$('#routineActionToggle');if (!menu || !search || !toggle) return;if (open) renderActionPicker();menu.hidden=!open;search.setAttribute('aria-expanded',open?'true':'false');toggle.setAttribute('aria-expanded',open?'true':'false');
  }
  function selectActionFromPicker(value) {
    const select=$('#routineActionSelect');const search=$('#routineActionSearch');if (!select || !search) return;select.value=value;const action=MODEL.actionById(value);search.value=action?.title || (value==='custom'?'Custom action':'');setActionPickerOpen(false);
  }

  function itemEditor(item,index) {
    const frequency=MODEL.normaliseFrequency(item.frequency);const daysHidden=frequency.mode!=='days'?' hidden':'';const weeklyHidden=frequency.mode!=='weekly'?' hidden':'';const selection=String(item.productSelection || '');const customProductHidden=selection==='custom'?'':' hidden';
    const shaving=MODEL.SHAVING_ACTION_IDS.includes(item.actionId)?`<label class="routine-field"><span>Shaving method</span><select data-id="${esc(item.id)}" data-field="shavingMethod">${optionHtml(MODEL.SHAVING_METHOD_OPTIONS,item.shavingMethod)}</select></label>`:'';
    return `<article class="routine-item" data-routine-item="${esc(item.id)}"><div class="routine-item-head"><div><span class="routine-order">${index+1}</span><strong>${esc(item.title)}</strong></div><div class="routine-item-actions"><button type="button" class="routine-mini" data-move="up" data-id="${esc(item.id)}" aria-label="Move ${esc(item.title)} up"${index===0?' disabled':''}>↑</button><button type="button" class="routine-mini" data-move="down" data-id="${esc(item.id)}" aria-label="Move ${esc(item.title)} down"${index===state.routine.length-1?' disabled':''}>↓</button>${state.pendingRemoveId===item.id?`<span class="routine-remove-confirm"><span>Remove?</span><button type="button" data-remove-confirm="${esc(item.id)}">Yes</button><button type="button" data-remove-cancel>Cancel</button></span>`:`<button type="button" class="routine-mini routine-remove" data-remove-request="${esc(item.id)}" aria-label="Remove ${esc(item.title)}">×</button>`}</div></div><div class="routine-item-grid"><label class="routine-field routine-field-wide"><span>Action name</span><input type="text" maxlength="100" value="${esc(item.title)}" data-id="${esc(item.id)}" data-field="title"></label><label class="routine-field"><span>Time of day</span><select data-id="${esc(item.id)}" data-field="timeOfDay">${optionHtml(MODEL.TIME_OPTIONS,item.timeOfDay)}</select></label><label class="routine-field"><span>Frequency</span><select data-id="${esc(item.id)}" data-field="frequencyMode">${optionHtml(MODEL.FREQUENCY_OPTIONS,frequency.mode)}</select></label>${shaving}<label class="routine-field routine-field-wide routine-product-field"><span>Product / Recipe</span><select data-id="${esc(item.id)}" data-field="productSelection">${productOptionsHtml(item)}</select><input type="text" maxlength="160" value="${esc(item.customProductName || '')}" data-id="${esc(item.id)}" data-field="customProductName" placeholder="Product name"${customProductHidden}></label><div class="routine-field routine-field-wide routine-benefit-field"><span>Benefits and practical role</span><p>${esc(benefitText(item))}</p></div><label class="routine-field routine-field-wide"><span>Personal notes</span><textarea rows="3" maxlength="1200" data-id="${esc(item.id)}" data-field="notes" placeholder="Optional notes about technique, sensation, timing or product use">${esc(item.notes || '')}</textarea></label></div><fieldset class="routine-days" data-days-for="${esc(item.id)}"${daysHidden}><legend>Days</legend>${MODEL.DAYS.map((day)=>`<label><input type="checkbox" data-day="${esc(day)}" data-id="${esc(item.id)}"${frequency.days.includes(day)?' checked':''}>${esc(day.slice(0,3))}</label>`).join('')}</fieldset><label class="routine-field routine-weekly" data-weekly-for="${esc(item.id)}"${weeklyHidden}><span>Times each week</span><input type="number" min="1" max="14" value="${frequency.timesPerWeek}" data-id="${esc(item.id)}" data-field="timesPerWeek"></label></article>`;
  }
  function renderPlan() { const target=$('#routineItems');if (!target) return;target.innerHTML=state.routine.length?state.routine.map(itemEditor).join(''):'<div class="routine-empty">No routine actions added yet.</div>';renderActionPicker();emit('plan'); }
  function renderSummary() {
    const target=$('#routineSummary');if (!target) return;
    if (!state.routine.length) { target.innerHTML='<div class="routine-empty">Build your Routine Plan to see the complete summary here.</div>';emit('summary');return; }
    target.innerHTML=state.routine.map((item,index)=>{ const product=item.productName || item.customProductName || '';return `<article class="routine-summary-item routine-summary-item-comprehensive"><div class="routine-summary-title"><span>${index+1}</span><strong>${esc(item.title)}</strong></div><div class="routine-summary-grid"><section><h3>Routine details</h3><dl><div><dt>Time of day</dt><dd>${esc(timeText(item.timeOfDay))}</dd></div><div><dt>Frequency</dt><dd>${esc(frequencyText(item.frequency))}</dd></div><div><dt>Product / recipe</dt><dd>${esc(product || 'Not selected')}</dd></div>${MODEL.SHAVING_ACTION_IDS.includes(item.actionId)?`<div><dt>Shaving method</dt><dd>${esc(MODEL.SHAVING_METHOD_OPTIONS.find((option)=>option.value===item.shavingMethod)?.label || 'Manual / classic razor')}</dd></div>`:''}</dl></section><section><h3>Benefits and practical role</h3><p>${esc(benefitText(item))}</p>${item.notes?`<p class="routine-summary-notes"><strong>Personal notes:</strong> ${esc(item.notes)}</p>`:''}</section></div></article>`; }).join('');emit('summary');
  }

  function logItem(item,date) {
    const log=state.logs[date]?.[item.id] || { completed:false,note:'',completedAt:'' };const due=MODEL.dueStatus(item,date,state.logs);
    return `<article class="routine-log-item${log.completed?' complete':''}"><label class="routine-log-check"><input type="checkbox" data-log-complete="${esc(item.id)}" data-log-date="${esc(date)}"${log.completed?' checked':''}><span><strong>${esc(item.title)}</strong><small>${esc(timeText(item.timeOfDay))} · ${esc(due.detail)}</small></span></label><input type="text" class="routine-log-note" maxlength="500" value="${esc(log.note || '')}" data-log-note="${esc(item.id)}" data-log-date="${esc(date)}" placeholder="Optional note"></article>`;
  }
  function renderLog() {
    state.selectedDate=MODEL.configureLogDateInput?.($('#routineLogDate'),state.selectedDate) || state.selectedDate;const target=$('#routineLogItems');const progress=$('#routineLogProgress');if (!target) return;
    const due=state.routine.filter((item)=>MODEL.dueStatus(item,state.selectedDate,state.logs).due);const entries=state.logs[state.selectedDate] || {};const completed=due.filter((item)=>entries[item.id]?.completed).length;if (progress) progress.textContent=`${completed}/${due.length} completed`;
    target.innerHTML=due.length?due.map((item)=>logItem(item,state.selectedDate)).join(''):'<div class="routine-empty">There is no routine to log yet. Create one in <button type="button" class="routine-text-button" data-open-routine-plan>Routine Plan</button>.</div>';emit('log');
  }
  function completedCount(date) { const entries=state.logs[date] || {};return Object.values(entries).filter((entry)=>entry?.completed).length; }
  function calendarButton(date,inMonth=true) {
    const iso=MODEL.isoDate(date);const count=completedCount(iso);const selected=iso===state.selectedDate;const today=iso===MODEL.todayIso();const future=MODEL.isFutureDate(iso);
    return `<button type="button" class="routine-calendar-day${count?' has-routine':''}${selected?' selected':''}${today?' today':''}${future?' future-date':''}${inMonth?'':' outside-month'}" data-calendar-date="${iso}"${future?' disabled aria-disabled="true"':''} aria-label="${esc(date.toLocaleDateString('en-GB',{ weekday:'long',day:'numeric',month:'long',year:'numeric' }))}${count?`, ${count} completed action${count===1?'':'s'}`:''}"><span>${date.getDate()}</span>${count?`<span class="routine-calendar-count">${count}</span>`:''}</button>`;
  }
  function renderCalendar() {
    const grid=$('#routineCalendarGrid');const label=$('#routineCalendarLabel');const weekdays=$('.routine-calendar-weekdays');if (!grid || !label || !weekdays) return;
    $$('.routine-calendar-view').forEach((button)=>{ const selected=button.dataset.calendarView===state.calendarView;button.classList.toggle('active',selected);button.setAttribute('aria-selected',selected?'true':'false'); });
    weekdays.innerHTML=(global.BASELINE_RoutineSystem?.orderedDays?.(MODEL.DAYS) || MODEL.DAYS).map((day)=>`<span>${esc(day.slice(0,3))}</span>`).join('');
    if (state.calendarView==='week') {
      const bounds=global.BASELINE_RoutineSystem?.weekBounds?.(state.calendarAnchor) || MODEL.weekBounds(state.calendarAnchor);label.textContent=`${bounds.start.toLocaleDateString('en-GB',{ day:'numeric',month:'short' })} – ${bounds.end.toLocaleDateString('en-GB',{ day:'numeric',month:'short',year:'numeric' })}`;grid.className='routine-calendar-grid week-view';grid.innerHTML=(global.BASELINE_RoutineSystem?.weekDates?.(state.calendarAnchor) || Array.from({ length:7 },(_,index)=>{ const date=new Date(bounds.start);date.setDate(date.getDate()+index);return date; })).map((date)=>global.BASELINE_RoutineSystem?.weekRow?global.BASELINE_RoutineSystem.weekRow(date,{ count:completedCount(MODEL.isoDate(date)),selectedDate:state.selectedDate,details:[] }):calendarButton(date)).join('');return;
    }
    const month=new Date(state.calendarAnchor.getFullYear(),state.calendarAnchor.getMonth(),1);label.textContent=month.toLocaleDateString('en-GB',{ month:'long',year:'numeric' });grid.className='routine-calendar-grid month-view';const dates=global.BASELINE_RoutineSystem?.monthDates?.(month) || [];
    if (dates.length) { grid.innerHTML=dates.map((date)=>calendarButton(date,date.getMonth()===month.getMonth())).join('');return; }
    const first=new Date(month);const startIndex=global.BASELINE_RoutineSystem?.startDayIndex?.() ?? 1;first.setDate(first.getDate()-(((month.getDay()-startIndex)+7)%7));grid.innerHTML=Array.from({ length:42 },(_,index)=>{ const date=new Date(first);date.setDate(date.getDate()+index);return calendarButton(date,date.getMonth()===month.getMonth()); }).join('');
  }

  function ensureLogDate(date) { if (!state.logs[date]) state.logs[date]={};return state.logs[date]; }
  function updateLog(itemId,date,patch) {
    const entries=ensureLogDate(date);entries[itemId]=Object.assign({ completed:false,note:'',completedAt:'' },entries[itemId] || {},patch);if (entries[itemId].completed && !entries[itemId].completedAt) entries[itemId].completedAt=new Date().toISOString();if (!entries[itemId].completed) entries[itemId].completedAt='';scheduleSave();
  }
  function renderPublicProfiles() { const select=$('#publicRoutineName');if (!select) return;if (!select.options.length) select.innerHTML='<option value="">Choose a public profile…</option>';const visibility=$('#routineVisibility');if (visibility) visibility.value=state.visibility;loadPublicProfiles(); }
  async function loadPublicProfiles() {
    if (state.profileLoading) return;const select=$('#publicRoutineName');if (!select) return;state.profileLoading=true;
    try { const response=await request(`${ROUTINE_API}?list=public`);if (!response.ok || !response.data?.ok || !Array.isArray(response.data.profiles)) return;const old=select.value;select.innerHTML='<option value="">Choose a public profile…</option>'+response.data.profiles.map((name)=>`<option value="${esc(name)}">${esc(name)}</option>`).join('');if (response.data.profiles.includes(old)) select.value=old; } finally { state.profileLoading=false; }
  }

  function itemById(id) { return state.routine.find((item)=>item.id===id) || null; }
  function addRoutineItem() {
    const select=$('#routineActionSelect');const actionId=select?.value || '';if (!actionId) { $('#routineActionSearch')?.focus();return; }const item=MODEL.createItem(actionId);state.routine.push(item);state.pendingRemoveId='';if (select) select.value='';const search=$('#routineActionSearch');if (search) search.value='';setActionPickerOpen(false);renderPlan();scheduleSave();
  }
  function removeRoutineItem(id) { state.routine=state.routine.filter((item)=>item.id!==id);Object.values(state.logs).forEach((entries)=>{ if (entries && typeof entries==='object') delete entries[id]; });state.pendingRemoveId='';renderPlan();renderSummary();renderLog();renderCalendar();scheduleSave(); }
  function moveRoutineItem(id,direction) {
    const index=state.routine.findIndex((item)=>item.id===id);if (index<0) return;const target=direction==='up'?index-1:index+1;if (target<0 || target>=state.routine.length) return;const [item]=state.routine.splice(index,1);state.routine.splice(target,0,item);renderPlan();scheduleSave();
  }
  function updateItemField(control) {
    const item=itemById(control.dataset.id);if (!item) return;const field=control.dataset.field;
    if (field==='title') item.title=MODEL.cleanText(control.value,100) || 'Self-Care Action';
    if (field==='timeOfDay') item.timeOfDay=MODEL.normaliseTime(control.value);
    if (field==='frequencyMode') item.frequency.mode=MODEL.FREQUENCY_OPTIONS.some((option)=>option.value===control.value)?control.value:'daily';
    if (field==='timesPerWeek') item.frequency.timesPerWeek=Math.max(1,Math.min(14,Math.round(Number(control.value)||1)));
    if (field==='notes') item.notes=MODEL.cleanText(control.value,1200);
    if (field==='shavingMethod') item.shavingMethod=MODEL.normaliseShavingMethod(control.value);
    if (field==='productSelection') { item.productSelection=MODEL.cleanText(control.value,180);const details=global.BASELINE_SKINCARE_PRODUCT_LIBRARY?.selectionDetails?.(item.productSelection,item.actionId) || { source:'',name:'' };item.productSource=details.source;item.productName=details.name;if (item.productSelection!=='custom') item.customProductName=''; }
    if (field==='customProductName') { item.customProductName=MODEL.cleanText(control.value,160);if (item.productSelection==='custom') item.productName=item.customProductName; }
    item.frequency=MODEL.normaliseFrequency(item.frequency);scheduleSave();
  }
  function toggleDay(control) {
    const item=itemById(control.dataset.id);if (!item) return;const day=control.dataset.day;const days=new Set(item.frequency.days);if (control.checked) days.add(day);else days.delete(day);item.frequency.days=MODEL.DAYS.filter((entry)=>days.has(entry));scheduleSave();
  }
  function moveCalendar(direction) { const anchor=new Date(state.calendarAnchor);if (state.calendarView==='week') anchor.setDate(anchor.getDate()+(direction==='next'?7:-7));else anchor.setMonth(anchor.getMonth()+(direction==='next'?1:-1),1);state.calendarAnchor=anchor;renderCalendar(); }

  function enterRoutineFromOuterTab() {
    state.activeView=routeViewFromLocation();
    selectOuterRoutine();
    activateView(state.activeView,true);
  }
  function bindEvents() {
    const root=$('#routine');if (!root || root.dataset.routineBound==='1') return;root.dataset.routineBound='1';
    root.addEventListener('click',(event)=>{
      const view=event.target.closest('[data-routine-view]');if (view) { activateView(view.dataset.routineView);return; }
      const actionToggle=event.target.closest('#routineActionToggle');if (actionToggle) { setActionPickerOpen($('#routineActionMenu')?.hidden!==false);return; }
      const actionOption=event.target.closest('[data-routine-action-option]');if (actionOption) { selectActionFromPicker(actionOption.dataset.routineActionOption);return; }
      if (event.target.closest('#addRoutineAction')) { addRoutineItem();return; }
      const move=event.target.closest('[data-move]');if (move) { moveRoutineItem(move.dataset.id,move.dataset.move);return; }
      const removeRequest=event.target.closest('[data-remove-request]');if (removeRequest) { state.pendingRemoveId=removeRequest.dataset.removeRequest;renderPlan();return; }
      if (event.target.closest('[data-remove-cancel]')) { state.pendingRemoveId='';renderPlan();return; }
      const removeConfirm=event.target.closest('[data-remove-confirm]');if (removeConfirm) { removeRoutineItem(removeConfirm.dataset.removeConfirm);return; }
      if (event.target.closest('[data-open-routine-plan]')) { activateView('plan');return; }
      const calendarView=event.target.closest('[data-calendar-view]');if (calendarView) { state.calendarView=calendarView.dataset.calendarView==='week'?'week':'month';renderCalendar();return; }
      const calendarMove=event.target.closest('[data-calendar-move]');if (calendarMove) { moveCalendar(calendarMove.dataset.calendarMove);return; }
      if (event.target.closest('[data-calendar-today]')) { state.calendarAnchor=MODEL.localDate(MODEL.todayIso());state.selectedDate=MODEL.todayIso();renderLog();renderCalendar();return; }
      const day=event.target.closest('[data-calendar-date]');if (day && !MODEL.isFutureDate(day.dataset.calendarDate)) { state.selectedDate=day.dataset.calendarDate;state.calendarAnchor=MODEL.localDate(state.selectedDate);activateView('log'); }
    });
    root.addEventListener('input',(event)=>{
      if (event.target.id==='routineActionSearch') { renderActionPicker();setActionPickerOpen(true);return; }
      if (event.target.matches('[data-field]')) updateItemField(event.target);
      if (event.target.matches('[data-log-note]')) updateLog(event.target.dataset.logNote,event.target.dataset.logDate,{ note:MODEL.cleanText(event.target.value,500) });
    });
    root.addEventListener('change',(event)=>{
      if (event.target.matches('[data-field]')) { updateItemField(event.target);renderPlan(); }
      if (event.target.matches('[data-day]')) toggleDay(event.target);
      if (event.target.matches('[data-log-complete]')) { updateLog(event.target.dataset.logComplete,event.target.dataset.logDate,{ completed:event.target.checked });renderLog();renderCalendar(); }
      if (event.target.id==='routineLogDate') { state.selectedDate=MODEL.configureLogDateInput?.(event.target,event.target.value) || MODEL.clampLogDate(event.target.value);state.calendarAnchor=MODEL.localDate(state.selectedDate);renderLog();renderCalendar(); }
      if (event.target.id==='routineVisibility') { state.visibility=event.target.value==='public'?'public':'private';scheduleSave(); }
    });
    root.addEventListener('keydown',(event)=>{
      if (event.target.id==='routineActionSearch' && event.key==='ArrowDown') { setActionPickerOpen(true);$('#routineActionMenu .routine-action-option')?.focus(); }
      if (event.key==='Escape' && !$('#routineActionMenu')?.hidden) { setActionPickerOpen(false);$('#routineActionSearch')?.focus(); }
    });
    document.addEventListener('click',(event)=>{
      if (!event.target.closest('.routine-action-combobox')) setActionPickerOpen(false);
      if (event.target.closest('.tab[data-target="routine"]')) global.requestAnimationFrame(enterRoutineFromOuterTab);
    });
    global.addEventListener('popstate',restoreRoute);
  }

  function renderAll() { renderPlan();renderSummary();renderLog();renderCalendar();renderPublicProfiles(); }
  async function init() {
    const routing=locationTargetsRoutine();
    state.activeView=routeViewFromLocation();
    try { global.sessionStorage?.setItem(VIEW_KEY,state.activeView); } catch (_error) {}

    ensureShell();
    bindEvents();
    loadLocalState();

    if (routing) {
      selectOuterRoutine();
      activateView(state.activeView,false);
      writeViewRoute(state.activeView);
    }

    const changed=await loadRemoteState();
    if (changed && locationTargetsRoutine()) renderAll();
  }
  global.BASELINE_SKINCARE_ROUTINE=Object.freeze({ getState:()=>({ routine:MODEL.normaliseRoutine(state.routine),logs:MODEL.normaliseLogs(state.logs),visibility:state.visibility,activeView:state.activeView,selectedDate:state.selectedDate }),selectView(view){ selectOuterRoutine();activateView(view,true); },refresh:renderAll });
  function boot() {
    init();
    try { global.BASELINE_auth?.onChange?.(()=>{ state.pendingRemoveId='';init(); }); } catch (_error) {}
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
