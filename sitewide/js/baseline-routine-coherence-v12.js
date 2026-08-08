/* Baseline Lifestyle — My Routine coherence v12.

   SITEWIDE INVARIANTS
   -------------------
   - My Routine is one product across Skincare, Fitness and Public Routines.
   - Skincare's comprehensive Routine Summary is the structural template.
   - Public Routines are read-only My Routine views, never a separate mini UI.
   - Dropdowns are shared: one control, one centred chevron, opaque top-layer menu.
   - Calendar markers are group/plan identities. A Calisthenics plan gets one marker,
     never one marker per exercise. A marker visibly contains ONLY its circled number;
     its caption is title/aria-label and clicking it selects that Summary filter.
   - System palettes own colour. Shared code never invents outsider colours.
   - Routine Log completion is reversible on the exact date being viewed.
   - Routine Log has no extra Remove button: checking/unchecking controls completion.
   - Fitness Calisthenics completion is also a real checkbox backed by update_session.php;
     checking adds that plan completion to the viewed day and unchecking removes it.
   - This layer never hides the page behind a loading screen and never owns page scroll.
   - Renderer-owned cards/fields are never re-parented merely for presentation.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_V12__) return;
  global.__BASELINE_ROUTINE_COHERENCE_V12__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  const rootSelector = app === 'skin' ? '#routine' : '#my-plan';
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  const cssEscape = (value) => global.CSS?.escape ? global.CSS.escape(String(value)) : String(value).replace(/[^a-zA-Z0-9_-]/g,'\\$&');
  const observers = [];
  const fitnessPlanCompletionBusy = new Set();
  let frame = 0;
  let patching = false;
  let groupBusy = false;

  function owner() {
    try { const auth=global.BASELINE_auth?.get?.();return auth?.authed ? String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user' : 'guest'; }
    catch (_error) { return 'guest'; }
  }
  function readJson(key,fallback={}) { try { const raw=global.localStorage?.getItem(key);return raw?JSON.parse(raw):fallback; } catch (_error) { return fallback; } }
  function todayIso() { try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); } catch (_error) { return new Date().toISOString().slice(0,10); } }
  function selectedDate() { return String($(app==='skin'?'#routineLogDate':'#fitnessRoutineLogDate')?.value || todayIso()); }

  function skinState() {
    try { const live=global.BASELINE_SKINCARE_ROUTINE?.getState?.();if (live) return { items:Array.isArray(live.routine)?live.routine:Array.isArray(live.items)?live.items:[],logs:live.logs && typeof live.logs==='object'?live.logs:{} }; } catch (_error) {}
    const value=readJson(`__bl_skincare_routine_v1__::${owner()}`,{});return { items:Array.isArray(value?.items)?value.items:Array.isArray(value?.routine)?value.routine:[],logs:value?.logs && typeof value.logs==='object'?value.logs:{} };
  }
  function skinGroups() {
    const value=readJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{});const groups=(Array.isArray(value?.groups)?value.groups:[]).filter((group) => group?.id && group?.title);const valid=new Set(groups.map((group) => String(group.id)));const assignments={};
    Object.entries(value?.assignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });return { groups,assignments };
  }
  function fitnessState() { try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; } catch (_error) { return { activities:[],logs:{} }; } }
  function fitnessPlans() { try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; } catch (_error) { return []; } }
  function fitnessGroups() {
    try { const value=global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {};const groups=(Array.isArray(value.fitnessRoutineGroups)?value.fitnessRoutineGroups:[]).filter((group) => group?.id && group?.title);const valid=new Set(groups.map((group) => String(group.id)));const assignments={};Object.entries(value.fitnessRoutineAssignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });return { groups,assignments }; }
    catch (_error) { return { groups:[],assignments:{} }; }
  }
  function completionDate(session) {
    const raw=session?.completedAt ?? session?.completed_at ?? '';if (!raw) return '';
    if (typeof raw==='number' || /^\d+$/.test(String(raw))) { const number=Number(raw);return new Date(number>9999999999?number:number*1000).toLocaleDateString('sv-SE'); }
    const text=String(raw);if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);const parsed=new Date(text);return Number.isNaN(parsed.getTime())?'':parsed.toLocaleDateString('sv-SE');
  }

  function removeDuplicateControls(root) {
    $$('.bl-search-select',root).forEach((node) => node.remove());
    $$('.bl-routine-select-shell',root).forEach((shell) => { const select=shell.querySelector(':scope>select');if (select) shell.replaceWith(select);else shell.remove(); });
    $$('.bl-v11-calendar-markers,.bl-v11-log-actions,.bl-v11-completed-log-group,.bl-completed-routines',root).forEach((node) => node.remove());
    [
      ['routineVisibility','[data-routine-panel="public"]'],['publicRoutineName','[data-routine-panel="public"]'],['skinRoutineSummaryFilter','[data-routine-panel="summary"]'],
      ['fitnessRoutineVisibility','[data-fitness-routine-panel="public"]'],['fitnessPublicRoutineName','[data-fitness-routine-panel="public"]'],['fitnessSummaryGroupFilter','[data-fitness-routine-panel="summary"]']
    ].forEach(([id,scope]) => { const matches=$$(`#${cssEscape(id)}`,root);if (matches.length<2) return;const keep=matches.find((node) => node.closest(scope)) || matches[0];matches.forEach((node) => { if (node!==keep) node.remove(); }); });
  }

  function visibility(root) {
    const panel=app==='skin'?$('[data-routine-panel="public"]',root):$('[data-fitness-routine-panel="public"]',root);const select=$(app==='skin'?'#routineVisibility':'#fitnessRoutineVisibility',root);if (!panel || !select) return;
    let label=select.closest('label');if (!label) { label=document.createElement('label');select.before(label);label.appendChild(select); }
    label.classList.add('bl-routine-visibility-control');let text=label.querySelector(':scope>span');if (!text) { text=document.createElement('span');label.prepend(text); }text.textContent='My Routine Visibility';
    const head=app==='skin'?$('.routine-public-head',panel):$('.section-head-actions',panel);if (head && label.parentElement!==head) head.appendChild(label);
    $$('h1,h2,h3,h4',panel).forEach((heading) => { if (String(heading.textContent || '').trim()==='Public Routine Visibility') heading.remove(); });
  }

  function textNodeReplace(root,exact,replacement) {
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { const value=String(node.nodeValue || '');if (value.trim()===exact) node.nodeValue=value.replace(exact,replacement); });
  }
  function normaliseText(root) {
    [
      ['Ungrouped routine actions','Individual Routine Steps'],['Ungrouped routine items','Individual Routine Steps'],['Ungrouped','Individual Routine Steps'],
      ['All routine items','All Routine Steps'],['All routine actions','All Routine Steps'],['Individual routine items','Individual Routine Steps'],['Individual routine actions','Individual Routine Steps'],
      ['Activity performed date','Date'],['Log date','Date'],['Days each week','Days Per Week']
    ].forEach(([from,to]) => textNodeReplace(root,from,to));
    $$('option,optgroup',root).forEach((node) => { const value=String(node.tagName==='OPTGROUP'?node.label:node.textContent || '').trim();const map={ 'Ungrouped routine actions':'Individual Routine Steps','Ungrouped routine items':'Individual Routine Steps','Ungrouped':'Individual Routine Steps','All routine items':'All Routine Steps','All routine actions':'All Routine Steps','Individual routine items':'Individual Routine Steps','Individual routine actions':'Individual Routine Steps' };if (!map[value]) return;if (node.tagName==='OPTGROUP') node.label=map[value];else node.textContent=map[value]; });
    const removable=[
      'Record calisthenics and other planned fitness activity for the selected date.',
      'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
      'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
      'Keep separate plans for muscle groups, sports preparation or training days.',
      'Current workout available within your weekly frequency.',
      'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
    ];
    $$('p,.note,.status',root).forEach((node) => { if (removable.includes(String(node.textContent || '').trim())) node.remove(); });
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { let value=String(node.nodeValue || '');value=value.replace(/Session\s+(\d+)\s*[-–—]\s*Current\b/g,'Session $1').replace(/\bStart:\s*/g,'Workout Date: ').replace(/^Saved plan\s*[—–-]\s*/i,'');node.nodeValue=value; });
  }

  function fitnessFrequency(root) {
    if (app!=='fitness') return;const minimum=$('#freq',root);const maximum=$('#frequencyRangeMax',root);
    if (minimum) { const label=root.querySelector('label[for="freq"]');if (label) label.textContent='Days Per Week';Array.from(minimum.options || []).forEach((option) => { const number=Number(String(option.value || option.textContent || '').replace(/\D/g,''));if (number>=1 && number<=7) option.textContent=String(number); });minimum.setAttribute('aria-label','Days Per Week minimum'); }
    if (!maximum) return;maximum.setAttribute('aria-label','Maximum days per week');root.querySelector('label[for="frequencyRangeMax"]')?.remove();const grid=maximum.closest('.fitness-frequency-grid');if (grid && !grid.querySelector(':scope>.bl-frequency-range-dash')) { const dash=document.createElement('span');dash.className='bl-frequency-range-dash';dash.textContent='–';const field=maximum.closest('.field-stack');if (field) grid.insertBefore(dash,field); }
  }

  function dedupeRoutineGroupHeadings(root) {
    if (app!=='fitness') return;
    $$('[data-fitness-plan-panel],.fitness-routine-plan-panel',root).forEach((panel) => {
      const headings=$$('h2,h3,h4',panel).filter((heading) => String(heading.textContent || '').trim()==='Routine Groups');headings.slice(1).forEach((heading) => heading.remove());
    });
  }
  function savedPlanHeading(root) {
    if (app!=='fitness') return;const heading=$('#myPlanSavedWrap h2,#myPlanOut .my-plan-saved-head h2',root);if (!heading) return;
    try { const plans=fitnessPlans();const selected=Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0);const plan=plans.find((candidate) => Number(candidate.planId)===selected) || plans[0];const name=String(plan?.planJson?.name || plan?.name || '').trim();if (name) heading.textContent=name; } catch (_error) {}
  }

  function skinSummaryFilter(root) {
    if (app!=='skin') return null;const summary=$('#routineSummary',root);if (!summary) return null;let select=$('#skinRoutineSummaryFilter',root);
    if (!select) { const label=document.createElement('label');label.className='bl-routine-summary-filter';label.innerHTML='<span>Show</span><select id="skinRoutineSummaryFilter" aria-label="Filter Routine Summary"></select>';summary.before(label);select=label.querySelector('select'); }
    const state=skinState();const grouping=skinGroups();const signature=JSON.stringify([grouping.groups.map((group) => [group.id,group.title]),state.items.map((item) => [item.id,item.title])]);
    if (select.dataset.signature!==signature) { const old=String(select.value || 'all');select.innerHTML=`<option value="all">All Routine Steps</option>${grouping.groups.length?`<optgroup label="Routine Groups">${grouping.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('')}</optgroup>`:''}<optgroup label="Individual Routine Steps">${state.items.map((item) => `<option value="item:${esc(item.id)}">${esc(item.title || 'Routine Step')}</option>`).join('')}</optgroup>`;select.dataset.signature=signature;if (Array.from(select.options).some((option) => option.value===old)) select.value=old; }
    return select;
  }
  function normalTitle(value) { return String(value || '').replace(/^\s*\d+\.?\s*/,'').trim().toLocaleLowerCase('en-GB'); }
  function applySkinSummary(root) {
    const select=skinSummaryFilter(root);const summary=$('#routineSummary',root);if (!select || !summary) return;const value=String(select.value || 'all');const state=skinState();const grouping=skinGroups();const itemId=value.startsWith('item:')?value.slice(5):'';const item=itemId?state.items.find((candidate) => String(candidate.id)===itemId):null;const itemGroup=item?String(grouping.assignments[itemId] || ''):'';
    $$('.routine-summary-group',summary).forEach((section) => { const heading=normalTitle(section.querySelector('h3')?.textContent);const group=grouping.groups.find((candidate) => normalTitle(candidate.title)===heading);const groupId=String(group?.id || '');let visible=value==='all';if (value.startsWith('group:')) visible=groupId===value.slice(6);if (item) visible=itemGroup?groupId===itemGroup:heading==='individual routine steps';section.hidden=!visible;$$('.routine-summary-item',section).forEach((card) => { if (!item) { card.hidden=!visible;return; }const title=String(card.querySelector('.routine-summary-title strong')?.textContent || card.querySelector('strong')?.textContent || '').trim();card.hidden=!(visible && title.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' })===0); }); });
  }
  function fitnessSummaryFilter(root) {
    if (app!=='fitness') return null;const select=$('#fitnessSummaryGroupFilter',root);if (!select) return null;Array.from(select.options || []).forEach((option) => { if (option.value==='all') option.textContent='All Routine Steps'; });Array.from(select.querySelectorAll('optgroup')).forEach((group) => { const label=String(group.label || '').toLocaleLowerCase('en-GB');if (label.includes('routine group')) group.label='Routine Groups';if (label.includes('individual') || label.includes('ungrouped')) group.label='Individual Routine Steps'; });return select;
  }
  function applyFitnessSummary(root) {
    const select=fitnessSummaryFilter(root);const summary=$('#fitnessExerciseSummary',root);if (!select || !summary) return;const value=String(select.value || 'all');
    $$('.fitness-summary-group',summary).forEach((section) => { const groupId=String(section.dataset.summaryGroup || '');let visible=value==='all';if (value.startsWith('group:')) visible=groupId===value.slice(6);if (value.startsWith('entity:')) visible=Boolean(section.querySelector(`[data-v4-entity="${cssEscape(value.slice(7))}"]`));section.hidden=!visible;$$('[data-v4-entity]',section).forEach((card) => { card.hidden=value.startsWith('entity:')?card.dataset.v4Entity!==value.slice(7):!visible; }); });
  }

  function skinGroupCheckboxes(root) {
    if (app!=='skin') return;$$('#routineLogItems>.routine-log-group',root).forEach((section) => { const head=section.querySelector(':scope>.routine-log-group-head');const children=$$('[data-log-complete]',section);if (!head || !children.length) return;let label=head.querySelector(':scope>.bl-routine-group-complete');if (!label) { label=document.createElement('label');label.className='bl-routine-group-complete';label.innerHTML='<input type="checkbox" data-routine-group-complete>';head.appendChild(label); }const box=label.querySelector('[data-routine-group-complete]');const checked=children.filter((child) => child.checked).length;box.checked=checked===children.length;box.indeterminate=checked>0 && checked<children.length;box.dataset.itemIds=JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));const name=String(head.querySelector('h3')?.textContent || 'routine group').trim();box.title=`Complete ${name}`;box.setAttribute('aria-label',`Complete ${name}`); });
  }
  async function setSkinGroup(box) {
    if (groupBusy) return;let ids=[];try { ids=JSON.parse(box.dataset.itemIds || '[]'); } catch (_error) {}if (!ids.length) return;const checked=box.checked;groupBusy=true;
    try { for (const id of ids) { const child=document.querySelector(`#routineLogItems [data-log-complete="${cssEscape(id)}"]`);if (!child || child.checked===checked) continue;child.checked=checked;child.dispatchEvent(new Event('change',{ bubbles:true }));await new Promise((resolve) => global.setTimeout(resolve,0)); } } finally { groupBusy=false;schedule(); }
  }

  function decorateFitnessPlanCompletion(root) {
    if (app!=='fitness') return;
    $$('#fitnessRoutineLogItems [data-fitness-plan-log]',root).forEach((card) => {
      const identity=String(card.dataset.fitnessPlanLog || '');const [planIdRaw,sessionIndexRaw]=identity.split(':');const planId=Number(planIdRaw || 0);const sessionIndex=Number(sessionIndexRaw || 0);if (!planId || !sessionIndex) return;
      const title=card.querySelector('.bl-routine-entry-title');if (!title) return;
      let box=title.querySelector(':scope>[data-fitness-plan-log-complete]');
      if (!box) { box=document.createElement('input');box.type='checkbox';box.dataset.fitnessPlanLogComplete=identity;box.className='bl-fitness-plan-log-complete';title.prepend(box); }
      const plan=fitnessPlans().find((candidate) => Number(candidate.planId)===planId);const session=(plan?.sessions || []).find((candidate) => Number(candidate.sessionIndex ?? candidate.session_index)===sessionIndex);const done=String(session?.status || '')==='done';
      if (!fitnessPlanCompletionBusy.has(identity)) box.checked=done;
      box.disabled=fitnessPlanCompletionBusy.has(identity);
      const name=String(plan?.planJson?.name || plan?.name || 'Calisthenics plan');box.title=done?'Uncheck to remove this completion from the calendar':'Check to add this completion to the calendar';box.setAttribute('aria-label',`${done?'Undo':'Complete'} ${name}, Session ${sessionIndex}`);
    });
  }
  async function setFitnessPlanCompletion(box) {
    const identity=String(box?.dataset.fitnessPlanLogComplete || '');const [planIdRaw,sessionIndexRaw]=identity.split(':');const planId=Number(planIdRaw || 0);const sessionIndex=Number(sessionIndexRaw || 0);if (!identity || !planId || !sessionIndex || fitnessPlanCompletionBusy.has(identity)) return;
    const desired=Boolean(box.checked);fitnessPlanCompletionBusy.add(identity);box.disabled=true;
    try {
      const response=await fetch('/systems/baseline-fitness/api/update_session.php',{ method:'POST',credentials:'same-origin',headers:{ 'Content-Type':'application/json',Accept:'application/json' },body:JSON.stringify({ planId,sessionIndex,action:'set_status',status:desired?'done':'planned' }) });
      const result=await response.json().catch(() => null);if (!response.ok || !result?.ok) throw new Error(result?.error || `http_${response.status}`);
      await global.BASELINE_fitnessPlans?.refresh?.();
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-workout-updated',{ detail:{ planId,sessionIndex,completed:desired,source:'routine-log' } })); } catch (_error) {}
    } catch (_error) {
      box.checked=!desired;
    } finally {
      fitnessPlanCompletionBusy.delete(identity);box.disabled=false;schedule();
    }
  }

  function preserveFitnessCompleted(root) {
    if (app!=='fitness') return;const host=$('#fitnessRoutineLogItems',root);if (!host) return;const state=fitnessState();const date=selectedDate();const log=state.logs?.[date] || {};const visible=new Set($$('[data-fitness-log-complete]',host).map((box) => String(box.dataset.fitnessLogComplete || '')));const missing=(state.activities || []).filter((item) => log[item.id]?.completed && !visible.has(String(item.id)));
    let section=host.querySelector(':scope>.bl-routine-preserved-log');if (!missing.length) { section?.remove();return; }const signature=missing.map((item) => `${item.id}:${item.name}`).join('|');if (!section) { section=document.createElement('section');section.className='fitness-routine-log-group bl-routine-preserved-log';host.appendChild(section); }if (section.dataset.signature===signature) return;section.dataset.signature=signature;section.innerHTML=`<h3>Completed on this date</h3>${missing.map((item) => `<article class="session-card fitness-routine-log-item complete"><div class="fitness-log-item-head"><label class="fitness-log-completion"><input type="checkbox" checked data-fitness-log-complete="${esc(item.id)}" data-fitness-log-date="${esc(date)}"><span><strong>${esc(item.name || 'Fitness activity')}</strong><small>Completed on this date</small></span></label></div></article>`).join('')}`;
  }

  function skinMarkers(date) {
    const state=skinState();const grouping=skinGroups();const ungrouped=state.items.filter((item) => !grouping.assignments[item.id]);const seen=new Set();const markers=[];
    Object.entries(state.logs?.[date] || {}).forEach(([id,entry]) => { if (!entry?.completed) return;const item=state.items.find((candidate) => String(candidate.id)===String(id));if (!item) return;const groupId=String(grouping.assignments[id] || '');if (groupId) { const target=`group:${groupId}`;if (seen.has(target)) return;seen.add(target);const index=grouping.groups.findIndex((group) => String(group.id)===groupId);if (index>=0) markers.push({ number:index+1,label:grouping.groups[index].title,target }); } else { const target=`item:${item.id}`;if (seen.has(target)) return;seen.add(target);const index=ungrouped.findIndex((candidate) => String(candidate.id)===String(item.id));markers.push({ number:grouping.groups.length+Math.max(0,index)+1,label:item.title || 'Routine Step',target }); } });return markers;
  }
  function fitnessMarkers(date) {
    const state=fitnessState();const plans=fitnessPlans();const grouping=fitnessGroups();const complete=[];const seen=new Set();const markers=[];
    Object.entries(state.logs?.[date] || {}).forEach(([id,entry]) => { if (!entry?.completed) return;const item=(state.activities || []).find((candidate) => String(candidate.id)===String(id));if (item) complete.push({ key:`activity:${item.id}`,label:item.name || 'Fitness activity' }); });
    plans.forEach((plan) => { if ((plan.sessions || []).some((session) => String(session.status || '')==='done' && completionDate(session)===date)) complete.push({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') }); });
    const all=plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`,label:String(plan.planJson?.name || plan.name || 'Calisthenics') })).concat((state.activities || []).map((item) => ({ key:`activity:${item.id}`,label:item.name || 'Fitness activity' })));const individual=all.filter((entity) => !grouping.assignments[entity.key]);
    complete.forEach((entity) => { const groupId=String(grouping.assignments[entity.key] || '');if (groupId) { const target=`group:${groupId}`;if (seen.has(target)) return;seen.add(target);const index=grouping.groups.findIndex((group) => String(group.id)===groupId);if (index>=0) markers.push({ number:index+1,label:grouping.groups[index].title,target }); } else { const target=`entity:${entity.key}`;if (seen.has(target)) return;seen.add(target);const index=individual.findIndex((candidate) => candidate.key===entity.key);markers.push({ number:grouping.groups.length+Math.max(0,index)+1,label:entity.label,target }); } });return markers;
  }
  function calendarMarkers(root) {
    const days=app==='skin'?$$('#routineCalendarGrid [data-calendar-date]',root):$$('#fitnessCalendarGrid [data-calendar-date]',root);days.forEach((day) => { const date=String(day.dataset.calendarDate || '');if (!date) return;const markers=app==='skin'?skinMarkers(date):fitnessMarkers(date);let wrap=day.querySelector(':scope>.bl-routine-calendar-markers');if (!markers.length) { wrap?.remove();return; }if (!wrap) { wrap=document.createElement('span');wrap.className='bl-routine-calendar-markers';day.appendChild(wrap); }const signature=markers.map((marker) => `${marker.number}:${marker.label}:${marker.target}`).join('|');if (wrap.dataset.signature===signature) return;wrap.dataset.signature=signature;wrap.innerHTML=markers.map((marker) => `<span role="button" tabindex="0" class="bl-routine-calendar-marker" data-routine-summary-target="${esc(marker.target)}" title="${esc(marker.label)}" aria-label="Open Routine Summary: ${esc(marker.label)}">${marker.number}</span>`).join(''); });
  }
  function openSummary(target,root) {
    if (!target) return;if (app==='skin') { $('[data-routine-view="summary"]',root)?.click();global.setTimeout(() => { const select=skinSummaryFilter(root);if (select && Array.from(select.options).some((option) => option.value===target)) { select.value=target;applySkinSummary(root);select.focus({ preventScroll:true }); } },0);return; }
    $('[data-fitness-routine-view="summary"]',root)?.click();global.setTimeout(() => { const select=fitnessSummaryFilter(root);if (select && Array.from(select.options).some((option) => option.value===target)) { select.value=target;applyFitnessSummary(root);select.focus({ preventScroll:true }); } },0);
  }

  function patch() {
    frame=0;if (patching) return;const root=$(rootSelector);if (!root) return;patching=true;
    try { root.classList.add('bl-routine-coherence-v12');removeDuplicateControls(root);normaliseText(root);fitnessFrequency(root);dedupeRoutineGroupHeadings(root);savedPlanHeading(root);visibility(root);if (app==='skin') { skinSummaryFilter(root);applySkinSummary(root);skinGroupCheckboxes(root); } else { fitnessSummaryFilter(root);applyFitnessSummary(root);decorateFitnessPlanCompletion(root);preserveFitnessCompleted(root); }calendarMarkers(root);document.documentElement.setAttribute('data-baseline-routine-coherence','v12'); } finally { patching=false; }
  }
  function schedule() { if (!frame) frame=global.requestAnimationFrame(patch); }
  function observe(root) {
    if (typeof MutationObserver==='undefined') return;['#routineCalendarGrid','#fitnessCalendarGrid','#routineLogItems','#fitnessRoutineLogItems','#routineSummary','#fitnessExerciseSummary'].forEach((selector) => { const node=$(selector,root);if (!node) return;const observer=new MutationObserver((mutations) => { if (patching) return;const relevant=mutations.some((mutation) => Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || [])).some((changed) => changed?.nodeType===1 && !changed.matches?.('.bl-routine-calendar-markers,.bl-routine-group-complete,.bl-routine-preserved-log,.bl-fitness-plan-log-complete') && !changed.closest?.('.bl-routine-calendar-markers,.bl-routine-group-complete,.bl-routine-preserved-log')));if (relevant) schedule(); });observer.observe(node,{ childList:true,subtree:true });observers.push(observer); });
  }
  function bind(root) {
    root.addEventListener('click',(event) => { const marker=event.target?.closest?.('[data-routine-summary-target]');if (marker) { event.preventDefault();event.stopPropagation();openSummary(String(marker.dataset.routineSummaryTarget || ''),root); } },true);
    root.addEventListener('keydown',(event) => { const marker=event.target?.closest?.('[data-routine-summary-target]');if (marker && (event.key==='Enter' || event.key===' ')) { event.preventDefault();event.stopPropagation();openSummary(String(marker.dataset.routineSummaryTarget || ''),root); } },true);
    root.addEventListener('change',(event) => { if (event.target?.matches?.('[data-routine-group-complete]')) { event.stopPropagation();setSkinGroup(event.target);return; }if (event.target?.matches?.('[data-fitness-plan-log-complete]')) { event.stopPropagation();setFitnessPlanCompletion(event.target);return; }if (event.target?.id==='skinRoutineSummaryFilter') applySkinSummary(root);if (event.target?.id==='fitnessSummaryGroupFilter') applyFitnessSummary(root);global.setTimeout(schedule,0); },true);
    ['baseline:routine-rendered','baseline:skincare-routine-updated','baseline:fitness-routine-updated','baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed','baseline:fitness-summary-rendered','baseline:fitness-routine-view-changed'].forEach((name) => document.addEventListener(name,schedule));
  }
  function boot() { const root=$(rootSelector);if (!root) return;bind(root);observe(root);patch();global.setTimeout(schedule,40);global.setTimeout(schedule,180); }
  global.addEventListener('pagehide',() => observers.forEach((observer) => observer.disconnect()),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window !== 'undefined' ? window : globalThis);
