/* Baseline Fitness — My Routine workspace for calisthenics, cardio, other activity and sports. */
(function (global) {
  'use strict';

  const CATALOGUE = global.BASELINE_FITNESS_ACTIVITY_CATALOGUE;
  if (!CATALOGUE || !global.document || global.__BASELINE_FITNESS_ROUTINE_WORKSPACE__) return;
  global.__BASELINE_FITNESS_ROUTINE_WORKSPACE__ = true;

  const API = '/systems/baseline-fitness/api/routine_state.php';
  const STORAGE_PREFIX = '__bl_fitness_routine_v1__::';
  const VIEW_KEY = '__bl_fitness_routine_view_v1__';
  const SAVE_DELAY = 450;
  const DAYS = Object.freeze(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
  const TIMES = Object.freeze([{value:'morning',label:'Morning'},{value:'afternoon',label:'Afternoon'},{value:'evening',label:'Evening'},{value:'anytime',label:'Any time'}]);
  const FREQUENCIES = Object.freeze([{value:'daily',label:'Every day'},{value:'days',label:'Specific days'},{value:'weekly',label:'A number of times each week'},{value:'as-needed',label:'As needed'}]);
  const VIEWS = Object.freeze(['log','calisthenics','cardio','other','sports']);
  const state = {
    owner:'guest', authed:false, activeView:'log', selectedDate:isoDate(new Date()),
    activities:[], logs:{}, saveTimer:0, loaded:false,
    openPicker:'', pickerQuery:{cardio:'',other:'',sports:''}, pendingRemoveId:''
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  }
  function cleanText(value, maximum) { return String(value == null ? '' : value).trim().slice(0, maximum); }
  function normaliseOwner(value) { return String(value || '').trim().toLocaleLowerCase('en-GB') || 'guest'; }
  function uniqueId() { return global.crypto?.randomUUID ? `activity-${global.crypto.randomUUID()}` : `activity-${Date.now()}-${Math.random().toString(36).slice(2,9)}`; }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date();
  }
  function isoDate(value) {
    const date = localDate(value); const pad = (number) => String(number).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
  }
  function dayName(value) { return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][localDate(value).getDay()]; }
  function weekBounds(value) {
    const date = localDate(value); const offset = (date.getDay()+6)%7;
    const start = new Date(date); start.setDate(start.getDate()-offset);
    const end = new Date(start); end.setDate(end.getDate()+6);
    return {start:isoDate(start),end:isoDate(end)};
  }

  function normaliseFrequency(value) {
    const source = value && typeof value === 'object' ? value : {};
    const mode = FREQUENCIES.some((entry) => entry.value === source.mode) ? source.mode : 'weekly';
    const days = Array.isArray(source.days) ? DAYS.filter((day) => source.days.includes(day)) : [];
    return { mode, days, timesPerWeek:Math.max(1,Math.min(14,Math.round(Number(source.timesPerWeek)||1))) };
  }
  function normaliseActivity(value, index = 0) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = CATALOGUE.ACTIVITY_BY_ID.get(String(source.activityId || '')) || CATALOGUE.ACTIVITIES[0];
    const section = ['cardio','other','sports'].includes(source.section) ? source.section : definition.section;
    const measure = cleanText(source.measure || definition.measure || 'minutes', 24);
    return {
      id:cleanText(source.id || `activity-${index+1}`,80), activityId:definition.id,
      name:cleanText(source.name || definition.name,100), section,
      timeOfDay:TIMES.some((entry)=>entry.value===source.timeOfDay)?source.timeOfDay:'anytime',
      frequency:normaliseFrequency(source.frequency),
      target:Math.max(0,Math.min(100000,Number(source.target)||0)), measure,
      notes:cleanText(source.notes,800)
    };
  }
  function normaliseActivities(value) {
    const source = Array.isArray(value) ? value : []; const seen = new Set(); const output=[];
    source.slice(0,150).forEach((raw,index)=>{ const item=normaliseActivity(raw,index); if(!item.id||seen.has(item.id)) item.id=`${item.id||'activity'}-${index+1}`; seen.add(item.id); output.push(item); });
    return output;
  }
  function normaliseLogs(value) {
    const source=value&&typeof value==='object'?value:{}; const logs={};
    Object.keys(source).sort().slice(-730).forEach((date)=>{
      if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
      const entries={}; Object.entries(source[date]&&typeof source[date]==='object'?source[date]:{}).slice(0,200).forEach(([id,raw])=>{
        if(!raw||typeof raw!=='object') return;
        entries[cleanText(id,100)]={completed:Boolean(raw.completed),note:cleanText(raw.note,500),actual:Math.max(0,Math.min(100000,Number(raw.actual)||0)),completedAt:cleanText(raw.completedAt,40)};
      }); logs[date]=entries;
    }); return logs;
  }
  function frequencyText(value) {
    const frequency=normaliseFrequency(value);
    if(frequency.mode==='daily') return 'Every day';
    if(frequency.mode==='days') return frequency.days.length?frequency.days.join(', '):'Specific days not selected';
    if(frequency.mode==='weekly') return `${frequency.timesPerWeek}× each week`;
    return 'As needed';
  }
  function timeLabel(value) { return TIMES.find((entry)=>entry.value===value)?.label || 'Any time'; }
  function completedCountForWeek(itemId,date) {
    const bounds=weekBounds(date); return Object.entries(state.logs).reduce((count,[entryDate,entries])=>entryDate>=bounds.start&&entryDate<=bounds.end&&entries[itemId]?.completed?count+1:count,0);
  }
  function dueStatus(item,date) {
    if(item.frequency.mode==='daily') return {due:true,detail:'Due today'};
    if(item.frequency.mode==='days') { const due=item.frequency.days.includes(dayName(date)); return {due,detail:due?'Scheduled today':'Not scheduled today'}; }
    if(item.frequency.mode==='weekly') { const remaining=Math.max(0,item.frequency.timesPerWeek-completedCountForWeek(item.id,date)); return {due:remaining>0,detail:remaining>0?`${remaining} remaining this week`:'Weekly target complete'}; }
    return {due:true,detail:'Optional / as needed'};
  }

  function storageKey(owner=state.owner){ return STORAGE_PREFIX+normaliseOwner(owner); }
  function readLocal(owner=state.owner){
    try{ const raw=global.localStorage?.getItem(storageKey(owner)); const value=raw?JSON.parse(raw):null; return value&&typeof value==='object'?{activities:normaliseActivities(value.activities),logs:normaliseLogs(value.logs)}:null; }catch(_error){ return null; }
  }
  function writeLocal(){ try{global.localStorage?.setItem(storageKey(),JSON.stringify({activities:state.activities,logs:state.logs,updatedAt:new Date().toISOString()}));}catch(_error){} }
  async function request(options={}){
    try{ const response=await fetch(API,{method:options.method||'GET',credentials:'same-origin',headers:Object.assign({Accept:'application/json'},options.body?{'Content-Type':'application/json'}:{}),body:options.body?JSON.stringify(options.body):undefined}); let data=null; try{data=await response.json();}catch(_error){} return data&&typeof data==='object'?data:{ok:false,error:`http_${response.status}`}; }catch(_error){ return {ok:false,error:'network_error'}; }
  }
  async function saveNow(){ clearTimeout(state.saveTimer);state.saveTimer=0;writeLocal(); if(!state.authed)return; await request({method:'POST',body:{activities:state.activities,logs:state.logs}}); }
  function scheduleSave(){writeLocal();clearTimeout(state.saveTimer);state.saveTimer=global.setTimeout(saveNow,SAVE_DELAY);}

  function makeWorkspace(){
    const section=$('#my-plan'); if(!section||section.dataset.routineWorkspace==='true')return;
    section.dataset.routineWorkspace='true';
    const topTab=$('.tab[data-target="my-plan"]'); if(topTab) topTab.textContent='My Routine';
    const original=Array.from(section.childNodes); const shell=document.createElement('div'); shell.className='fitness-routine-shell';
    shell.innerHTML=`<div class="fitness-routine-subtabs" role="tablist" aria-label="My Routine views">${[
      ['log','Routine Log'],['calisthenics','Calisthenics'],['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']
    ].map(([key,label],index)=>`<button type="button" class="fitness-routine-subtab${index===0?' active':''}" role="tab" aria-selected="${index===0?'true':'false'}" data-fitness-routine-view="${key}">${label}</button>`).join('')}</div>
    <div class="fitness-routine-panel active" data-fitness-routine-panel="log"><div class="card fitness-routine-card"><div class="fitness-routine-log-head"><div><h2>Routine Log</h2><p class="note">Record calisthenics and other planned fitness activity for the selected date.</p></div><label><span>Log date</span><input id="fitnessRoutineLogDate" type="date"></label></div><div id="fitnessRoutineLogProgress" class="status"></div><div id="fitnessRoutineLogItems"></div></div></div>
    <div class="fitness-routine-panel" data-fitness-routine-panel="calisthenics" hidden></div>
    <div class="fitness-routine-panel" data-fitness-routine-panel="cardio" hidden></div>
    <div class="fitness-routine-panel" data-fitness-routine-panel="other" hidden></div>
    <div class="fitness-routine-panel" data-fitness-routine-panel="sports" hidden></div>`;
    section.replaceChildren(shell); const calisthenics=$('[data-fitness-routine-panel="calisthenics"]',shell); original.forEach((node)=>calisthenics.append(node));
    const savedTitle=$('#myPlanSavedWrap h2'); if(savedTitle) savedTitle.textContent='Calisthenics';
    ['cardio','other','sports'].forEach((key)=>buildActivityPanel(key));
    const remembered=global.sessionStorage?.getItem(VIEW_KEY);
    const legacyPlanRoute=/\/baseline-fitness\/my-plan\/?$/.test(global.location?.pathname||'');
    activateView(VIEWS.includes(remembered)?remembered:(legacyPlanRoute?'calisthenics':'log'));
  }

  function buildActivityPanel(section){
    const panel=$(`[data-fitness-routine-panel="${section}"]`); if(!panel)return;
    const label=CATALOGUE.SECTIONS.find((entry)=>entry.key===section)?.label||section;
    panel.innerHTML=`<div class="card fitness-routine-card"><h2>${escapeHtml(label)}</h2><p class="note">Search the grouped catalogue, add an activity and set its schedule, target and personal notes.</p><div class="fitness-activity-add"><div class="fitness-activity-combobox"><input type="search" autocomplete="off" role="combobox" aria-expanded="false" placeholder="Type or choose an activity…" data-activity-search="${section}"><button type="button" data-activity-toggle="${section}" aria-label="Open ${escapeHtml(label)} list">⌄</button><div class="fitness-activity-menu" data-activity-menu="${section}" role="listbox" hidden></div></div><button type="button" class="action" data-add-activity="${section}">Add to routine</button></div><div class="fitness-activity-list" data-activity-list="${section}"></div></div>`;
    renderPicker(section); renderActivityList(section);
  }

  function pickerHtml(section,query=''){
    const matches=CATALOGUE.search(section,query); if(!matches.length)return '<div class="fitness-activity-no-results">No matching activity.</div>';
    return CATALOGUE.groupsFor(section).map((group)=>{const items=matches.filter((activity)=>activity.group===group);if(!items.length)return '';return `<div class="fitness-activity-group" role="group"><div class="fitness-activity-group-label">${escapeHtml(group)}</div>${items.map((activity)=>`<button type="button" role="option" data-activity-option="${escapeHtml(activity.id)}">${escapeHtml(activity.name)}</button>`).join('')}</div>`;}).join('');
  }
  function renderPicker(section){const menu=$(`[data-activity-menu="${section}"]`);if(menu)menu.innerHTML=pickerHtml(section,state.pickerQuery[section]);}
  function setPickerOpen(section,open){state.openPicker=open?section:'';$$('[data-activity-menu]').forEach((menu)=>menu.hidden=menu.dataset.activityMenu!==section||!open);$$('[data-activity-search]').forEach((input)=>input.setAttribute('aria-expanded',input.dataset.activitySearch===section&&open?'true':'false'));}
  function selectedDefinition(section){const input=$(`[data-activity-search="${section}"]`);const id=input?.dataset.selectedActivity||'';return CATALOGUE.ACTIVITY_BY_ID.get(id)||null;}
  function chooseActivity(section,id){const activity=CATALOGUE.ACTIVITY_BY_ID.get(id);const input=$(`[data-activity-search="${section}"]`);if(!activity||activity.section!==section||!input)return;input.value=activity.name;input.dataset.selectedActivity=activity.id;setPickerOpen(section,false);}
  function addActivity(section){const definition=selectedDefinition(section);if(!definition){setPickerOpen(section,true);$(`[data-activity-search="${section}"]`)?.focus();return;}state.activities.push(normaliseActivity({id:uniqueId(),activityId:definition.id,name:definition.name,section,timeOfDay:'anytime',frequency:{mode:'weekly',timesPerWeek:1,days:[]},target:0,measure:definition.measure,notes:''},state.activities.length));const input=$(`[data-activity-search="${section}"]`);if(input){input.value='';delete input.dataset.selectedActivity;}scheduleSave();renderAll();}

  function selectOptions(values,selected){return values.map((entry)=>`<option value="${escapeHtml(entry.value)}"${entry.value===selected?' selected':''}>${escapeHtml(entry.label)}</option>`).join('');}
  function dayControls(item){if(item.frequency.mode!=='days')return '';return `<fieldset class="fitness-activity-days"><legend>Days</legend>${DAYS.map((day)=>`<label><input type="checkbox" data-activity-day="${escapeHtml(day)}" data-activity-id="${escapeHtml(item.id)}"${item.frequency.days.includes(day)?' checked':''}><span>${day.slice(0,3)}</span></label>`).join('')}</fieldset>`;}
  function weeklyControl(item){if(item.frequency.mode!=='weekly')return '';return `<label><span>Times each week</span><input type="number" min="1" max="14" value="${item.frequency.timesPerWeek}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="timesPerWeek"></label>`;}
  function renderActivityList(section){
    const target=$(`[data-activity-list="${section}"]`);if(!target)return;const items=state.activities.filter((item)=>item.section===section);
    if(!items.length){target.innerHTML='<div class="fitness-routine-empty">No activities have been added to this section.</div>';return;}
    target.innerHTML=items.map((item,index)=>`<article class="fitness-activity-item"><div class="fitness-activity-item-head"><div><span>${index+1}</span><strong>${escapeHtml(item.name)}</strong></div>${state.pendingRemoveId===item.id?`<span class="fitness-remove-confirm"><span>Remove?</span><button type="button" data-activity-remove-confirm="${escapeHtml(item.id)}">Yes</button><button type="button" data-activity-remove-cancel>Cancel</button></span>`:`<button type="button" class="fitness-remove" data-activity-remove-request="${escapeHtml(item.id)}">×</button>`}</div><div class="fitness-activity-fields"><label><span>Activity name</span><input type="text" maxlength="100" value="${escapeHtml(item.name)}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="name"></label><label><span>Time of day</span><select data-activity-id="${escapeHtml(item.id)}" data-activity-field="timeOfDay">${selectOptions(TIMES,item.timeOfDay)}</select></label><label><span>How often</span><select data-activity-id="${escapeHtml(item.id)}" data-activity-field="frequencyMode">${selectOptions(FREQUENCIES,item.frequency.mode)}</select></label>${weeklyControl(item)}<label><span>Target amount</span><input type="number" min="0" step="0.1" value="${item.target||''}" placeholder="Optional" data-activity-id="${escapeHtml(item.id)}" data-activity-field="target"></label><label><span>Measure</span><input type="text" maxlength="24" value="${escapeHtml(item.measure)}" data-activity-id="${escapeHtml(item.id)}" data-activity-field="measure"></label><label class="fitness-activity-notes"><span>Personal notes</span><textarea rows="2" maxlength="800" data-activity-id="${escapeHtml(item.id)}" data-activity-field="notes">${escapeHtml(item.notes)}</textarea></label></div>${dayControls(item)}</article>`).join('');
  }

  function currentCalisthenics(){try{return global.BASELINE_fitnessWorkout?.getCurrentContext?.()||null;}catch(_error){return null;}}
  function ensureLogDate(date){if(!state.logs[date]||typeof state.logs[date]!=='object')state.logs[date]={};return state.logs[date];}
  function activityLogItem(item,status,entry){const target=item.target>0?`${item.target} ${item.measure}`:'';return `<article class="fitness-routine-log-item${entry.completed?' complete':''}"><label><input type="checkbox" data-fitness-log-complete="${escapeHtml(item.id)}"${entry.completed?' checked':''}><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml([timeLabel(item.timeOfDay),status.detail,target].filter(Boolean).join(' · '))}</small></span></label><input type="number" min="0" step="0.1" placeholder="Actual" value="${entry.actual||''}" data-fitness-log-actual="${escapeHtml(item.id)}"><input type="text" maxlength="500" placeholder="Optional note" value="${escapeHtml(entry.note||'')}" data-fitness-log-note="${escapeHtml(item.id)}"></article>`;}
  function renderLog(){
    const dateInput=$('#fitnessRoutineLogDate');if(dateInput&&dateInput.value!==state.selectedDate)dateInput.value=state.selectedDate;
    const target=$('#fitnessRoutineLogItems');const progress=$('#fitnessRoutineLogProgress');if(!target)return;
    const entries=ensureLogDate(state.selectedDate);const due=state.activities.map((item)=>({item,status:dueStatus(item,state.selectedDate)})).filter((entry)=>entry.status.due);
    const sections=[];const cal=currentCalisthenics();
    if(cal?.available&&!cal.planComplete){const completed=Boolean(cal.allComplete);sections.push(`<section class="fitness-routine-log-group"><h3>Calisthenics</h3><article class="fitness-routine-log-item${completed?' complete':''}"><div><strong>Session ${escapeHtml(cal.sessionIndex||'')}</strong><small>${escapeHtml(`${cal.completedSteps||0}/${cal.totalSteps||0} steps completed`)}</small></div><button type="button" class="compact-action compact-action--primary" data-open-fitness-view="calisthenics">Open Calisthenics</button></article></section>`);}
    [['cardio','Cardio'],['other','Other Fitness Activity'],['sports','Sports']].forEach(([section,label])=>{const items=due.filter(({item})=>item.section===section);if(items.length)sections.push(`<section class="fitness-routine-log-group"><h3>${label}</h3>${items.map(({item,status})=>activityLogItem(item,status,entries[item.id]||{completed:false,note:'',actual:0})).join('')}</section>`);});
    if(!sections.length)sections.push('<div class="fitness-routine-empty">No fitness activities are scheduled for this date. Add activities in Cardio, Other Fitness Activity or Sports.</div>');
    target.innerHTML=sections.join('');const completed=due.filter(({item})=>entries[item.id]?.completed).length;if(progress)progress.textContent=`${completed}/${due.length} non-calisthenics activities completed`;
  }

  function activateView(view,focus=false){const selected=VIEWS.includes(view)?view:'log';state.activeView=selected;try{global.sessionStorage?.setItem(VIEW_KEY,selected);}catch(_error){}$$('.fitness-routine-subtab').forEach((button)=>{const active=button.dataset.fitnessRoutineView===selected;button.classList.toggle('active',active);button.setAttribute('aria-selected',active?'true':'false');button.tabIndex=active?0:-1;});$$('[data-fitness-routine-panel]').forEach((panel)=>{const active=panel.dataset.fitnessRoutinePanel===selected;panel.hidden=!active;panel.classList.toggle('active',active);});if(focus)$(`[data-fitness-routine-view="${selected}"]`)?.focus();}
  function renderAll(){['cardio','other','sports'].forEach(renderActivityList);renderLog();}
  function itemById(id){return state.activities.find((item)=>item.id===id)||null;}
  function updateActivity(control){const item=itemById(control.dataset.activityId);if(!item)return;const field=control.dataset.activityField;if(field==='name'||field==='measure'||field==='notes')item[field]=cleanText(control.value,field==='notes'?800:field==='name'?100:24);if(field==='timeOfDay')item.timeOfDay=TIMES.some((entry)=>entry.value===control.value)?control.value:'anytime';if(field==='frequencyMode')item.frequency.mode=FREQUENCIES.some((entry)=>entry.value===control.value)?control.value:'weekly';if(field==='timesPerWeek')item.frequency.timesPerWeek=Math.max(1,Math.min(14,Math.round(Number(control.value)||1)));if(field==='target')item.target=Math.max(0,Math.min(100000,Number(control.value)||0));state.activities=normaliseActivities(state.activities);scheduleSave();renderAll();}
  function updateDay(control){const item=itemById(control.dataset.activityId);const day=control.dataset.activityDay;if(!item||!DAYS.includes(day))return;item.frequency.days=DAYS.filter((entry)=>entry===day?control.checked:item.frequency.days.includes(entry));scheduleSave();renderLog();}
  function removeActivity(id){state.activities=state.activities.filter((item)=>item.id!==id);Object.values(state.logs).forEach((entries)=>{if(entries&&typeof entries==='object')delete entries[id];});state.pendingRemoveId='';scheduleSave();renderAll();}
  function updateLog(id,field,value){const entry=ensureLogDate(state.selectedDate)[id]||{completed:false,note:'',actual:0,completedAt:''};if(field==='completed'){entry.completed=Boolean(value);entry.completedAt=value?new Date().toISOString():'';}if(field==='note')entry.note=cleanText(value,500);if(field==='actual')entry.actual=Math.max(0,Math.min(100000,Number(value)||0));ensureLogDate(state.selectedDate)[id]=entry;scheduleSave();renderLog();}

  function bindEvents(){
    $('#my-plan')?.addEventListener('click',(event)=>{const tab=event.target.closest('[data-fitness-routine-view],[data-open-fitness-view]');if(tab){activateView(tab.dataset.fitnessRoutineView||tab.dataset.openFitnessView,true);return;}const toggle=event.target.closest('[data-activity-toggle]');if(toggle){const section=toggle.dataset.activityToggle;setPickerOpen(section,state.openPicker!==section);return;}const option=event.target.closest('[data-activity-option]');if(option){chooseActivity(CATALOGUE.ACTIVITY_BY_ID.get(option.dataset.activityOption)?.section,option.dataset.activityOption);return;}const add=event.target.closest('[data-add-activity]');if(add){addActivity(add.dataset.addActivity);return;}const removeRequest=event.target.closest('[data-activity-remove-request]');if(removeRequest){state.pendingRemoveId=removeRequest.dataset.activityRemoveRequest;renderAll();return;}const removeConfirm=event.target.closest('[data-activity-remove-confirm]');if(removeConfirm){removeActivity(removeConfirm.dataset.activityRemoveConfirm);return;}if(event.target.closest('[data-activity-remove-cancel]')){state.pendingRemoveId='';renderAll();}});
    $('#my-plan')?.addEventListener('input',(event)=>{const search=event.target.closest('[data-activity-search]');if(search){const section=search.dataset.activitySearch;state.pickerQuery[section]=search.value;delete search.dataset.selectedActivity;renderPicker(section);setPickerOpen(section,true);return;}const control=event.target.closest('[data-activity-field]');if(control&&['name','measure','notes','target'].includes(control.dataset.activityField))updateActivity(control);const note=event.target.closest('[data-fitness-log-note]');if(note)updateLog(note.dataset.fitnessLogNote,'note',note.value);const actual=event.target.closest('[data-fitness-log-actual]');if(actual)updateLog(actual.dataset.fitnessLogActual,'actual',actual.value);});
    $('#my-plan')?.addEventListener('change',(event)=>{const control=event.target.closest('[data-activity-field]');if(control)updateActivity(control);const day=event.target.closest('[data-activity-day]');if(day)updateDay(day);const complete=event.target.closest('[data-fitness-log-complete]');if(complete)updateLog(complete.dataset.fitnessLogComplete,'completed',complete.checked);if(event.target?.id==='fitnessRoutineLogDate'){state.selectedDate=isoDate(event.target.value);renderLog();}});
    $('#my-plan')?.addEventListener('keydown',(event)=>{const search=event.target.closest('[data-activity-search]');if(search&&event.key==='Enter'){event.preventDefault();const section=search.dataset.activitySearch;const matches=CATALOGUE.search(section,search.value);if(matches.length===1){chooseActivity(section,matches[0].id);addActivity(section);}return;}if(search&&event.key==='Escape'){setPickerOpen(search.dataset.activitySearch,false);}});
    document.addEventListener('click',(event)=>{if(!event.target.closest('.fitness-activity-combobox'))setPickerOpen('',false);});
  }

  function applySnapshot(snapshot,owner){state.owner=owner||state.owner||'guest';state.activities=normaliseActivities(snapshot?.activities);state.logs=normaliseLogs(snapshot?.logs);state.loaded=true;writeLocal();renderAll();}
  async function loadForAuth(snapshot){const authed=Boolean(snapshot?.authed);const owner=authed?String(snapshot.name||snapshot.user?.name||'').trim():'guest';const changed=normaliseOwner(owner)!==normaliseOwner(state.owner);state.authed=authed;state.owner=owner||'guest';if(!changed&&state.loaded)return;const local=readLocal(state.owner)||(authed?readLocal('guest'):null)||{activities:[],logs:{}};if(!authed){applySnapshot(local,'guest');return;}const data=await request();if(data.ok&&data.hasRoutine)applySnapshot(data,owner);else if(local.activities.length){applySnapshot(local,owner);saveNow();}else applySnapshot({activities:[],logs:{}},owner);}
  function attachAuth(){let attempts=0;const connect=()=>{const auth=global.BASELINE_auth;if(auth&&typeof auth.get==='function'){loadForAuth(auth.get());if(typeof auth.onChange==='function')auth.onChange(loadForAuth);return;}attempts+=1;if(attempts<60)global.setTimeout(connect,100);else loadForAuth(null);};connect();}
  function observeCalisthenics(){const target=$('[data-fitness-routine-panel="calisthenics"]');if(!target||typeof MutationObserver==='undefined')return;const observer=new MutationObserver(()=>{if(state.activeView==='log')renderLog();});observer.observe(target,{childList:true,subtree:true,characterData:true});global.addEventListener?.('pagehide',()=>observer.disconnect(),{once:true});}

  function boot(){makeWorkspace();bindEvents();attachAuth();observeCalisthenics();renderAll();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();

  global.BASELINE_FITNESS_ROUTINE_DEBUG=Object.freeze({normaliseActivity,normaliseActivities,normaliseLogs,dueStatus,frequencyText});
  if(typeof module!=='undefined'&&module.exports)module.exports=global.BASELINE_FITNESS_ROUTINE_DEBUG;
})(typeof window !== 'undefined' ? window : globalThis);
