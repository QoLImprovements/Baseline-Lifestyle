/* Baseline Lifestyle — canonical My Routine coherence v12.

   SITEWIDE OWNERSHIP INVARIANTS
   -----------------------------
   - My Routine is one product across Skincare, Fitness and Public Routines.
   - Skincare's comprehensive Routine Summary is the shared structural template.
   - Public Routines are read-only My Routine views, not a second mini interface.
   - System renderers own their data and renderer-owned cards/fields.
   - System palette adapters own colour; this file never invents a palette.
   - Fitness-only Routine Log interactions belong to fitness-routine-log-v1.js.
   - Fitness Routine Summary contents/filtering belong only to fitness-routine-summary-v2.js.
   - This file owns only genuinely shared live behaviour/state plus the Skincare Summary filter.
   - Summary filters and Log Dates are transient session state; system routers alone
     own public My Routine paths. This layer never writes routing query parameters.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_COHERENCE_V12__) return;
  global.__BASELINE_ROUTINE_COHERENCE_V12__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const rootSelector = app === 'skin' ? '#routine' : '#my-plan';
  const SUMMARY_STORAGE_KEY = `__bl_${app}_routine_summary_filter_v12__`;
  const DATE_STORAGE_KEY = `__bl_${app}_routine_log_date_v12__`;
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  const cssEscape = (value) => global.CSS?.escape ? global.CSS.escape(String(value)) : String(value).replace(/[^a-zA-Z0-9_-]/g,'\\$&');
  let observer = null;
  let frame = 0;
  let patching = false;
  let groupBusy = false;
  let restoringState = false;

  function owner() {
    try {
      const auth = global.BASELINE_auth?.get?.();
      return auth?.authed ? String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user' : 'guest';
    } catch (_error) { return 'guest'; }
  }
  function readSession(key,fallback='') {
    try { return String(global.sessionStorage?.getItem(key) || fallback); }
    catch (_error) { return String(fallback || ''); }
  }
  function writeSession(key,value) {
    try {
      if (value) global.sessionStorage?.setItem(key,String(value));
      else global.sessionStorage?.removeItem(key);
    } catch (_error) {}
  }
  function todayIso() {
    try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); }
    catch (_error) { return new Date().toISOString().slice(0,10); }
  }
  function selectedDate() {
    return String($(app==='skin'?'#routineLogDate':'#fitnessRoutineLogDate')?.value || todayIso());
  }

  function skinState() {
    try {
      const live=global.BASELINE_SKINCARE_ROUTINE?.getState?.();
      if (live) return {
        items:Array.isArray(live.routine)?live.routine:Array.isArray(live.items)?live.items:[],
        logs:live.logs && typeof live.logs==='object'?live.logs:{}
      };
    } catch (_error) {}
    return { items:[],logs:{} };
  }
  function skinGroups() {
    try {
      const value=global.BASELINE_SKINCARE_ROUTINE_GROUPS?.getState?.() || {};
      const groups=(Array.isArray(value.groups)?value.groups:[]).filter((group) => group?.id && group?.title);
      const valid=new Set(groups.map((group) => String(group.id)));
      const assignments={};
      Object.entries(value.assignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });
      return { groups,assignments };
    } catch (_error) { return { groups:[],assignments:{} }; }
  }
  function skinCatalogueActions() {
    const actions=global.BASELINE_SKINCARE_ROUTINE_MODEL?.ACTIONS;
    return Array.isArray(actions)?actions:[];
  }
  function fitnessState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }
  function fitnessPlans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }
  function fitnessGroups() {
    try {
      const value=global.BASELINE_RoutineSystem?.readSettings?.(owner()) || {};
      const groups=(Array.isArray(value.fitnessRoutineGroups)?value.fitnessRoutineGroups:[]).filter((group) => group?.id && group?.title);
      const valid=new Set(groups.map((group) => String(group.id)));
      const assignments={};
      Object.entries(value.fitnessRoutineAssignments || {}).forEach(([key,id]) => { if (valid.has(String(id))) assignments[String(key)]=String(id); });
      return { groups,assignments };
    } catch (_error) { return { groups:[],assignments:{} }; }
  }
  function completionDate(session) {
    const raw=session?.completedAt ?? session?.completed_at ?? '';
    if (!raw) return '';
    if (typeof raw==='number' || /^\d+$/.test(String(raw))) {
      const number=Number(raw);
      return new Date(number>9999999999?number:number*1000).toLocaleDateString('sv-SE');
    }
    const text=String(raw);
    if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0,10);
    const parsed=new Date(text);
    return Number.isNaN(parsed.getTime())?'':parsed.toLocaleDateString('sv-SE');
  }

  function dedupeCanonicalControls(root) {
    const controls=[
      ['routineVisibility','[data-routine-panel="public"]'],
      ['publicRoutineName','[data-routine-panel="public"]'],
      ['skinRoutineSummaryFilter','[data-routine-panel="summary"]'],
      ['fitnessRoutineVisibility','[data-fitness-routine-panel="public"]'],
      ['fitnessPublicRoutineName','[data-fitness-routine-panel="public"]'],
      ['fitnessSummaryGroupFilter','[data-fitness-routine-panel="summary"]']
    ];
    if (app==='fitness') controls.push(
      ['scheduleMode','#myPlanGeneratorWrap'],
      ['freq','#myPlanGeneratorWrap'],
      ['frequencyRangeMax','#myPlanGeneratorWrap'],
      ['lengthMode','#myPlanGeneratorWrap'],
      ['sessions','#myPlanGeneratorWrap'],
      ['goalExercise','#myPlanGeneratorWrap'],
      ['goalAmount','#myPlanGeneratorWrap']
    );
    controls.forEach(([id,scope]) => {
      const matches=$$(`#${cssEscape(id)}`,root);
      if (matches.length<2) return;
      const keep=matches.find((node) => node.closest(scope)) || matches[0];
      matches.forEach((node) => {
        if (node===keep) return;
        const wrapper=node.closest('.bl-select,label,.bl-routine-summary-filter');
        if (wrapper && !wrapper.contains(keep)) wrapper.remove();
        else node.remove();
      });
    });
  }

  function normaliseActiveTerminology(root) {
    const map=new Map([
      ['Ungrouped routine actions','Individual Routine Steps'],
      ['Ungrouped routine items','Individual Routine Steps'],
      ['All routine items','All Routine Steps'],
      ['All routine actions','All Routine Steps'],
      ['Individual routine items','Individual Routine Steps']
    ]);
    $$('h2,h3,h4,option,optgroup',root).forEach((node) => {
      const value=String(node.tagName==='OPTGROUP'?node.label:node.textContent || '').trim();
      const replacement=map.get(value);
      if (!replacement) return;
      if (node.tagName==='OPTGROUP') node.label=replacement; else node.textContent=replacement;
    });
    const removable=new Set([
      'Record calisthenics and other planned fitness activity for the selected date.',
      'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
      'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
      'Keep separate plans for muscle groups, sports preparation or training days.',
      'Current workout available within your weekly frequency.',
      'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
    ]);
    $$('p.note,p.status,p',root).forEach((node) => { if (removable.has(String(node.textContent || '').trim())) node.remove(); });
  }

  function ensureLogDateLabel(root) {
    const input=$(app==='skin'?'#routineLogDate':'#fitnessRoutineLogDate',root);
    if (!input) return;
    const nestedLabel=input.closest('label');
    if (nestedLabel) {
      nestedLabel.classList.add('bl-routine-log-date');
      let span=nestedLabel.querySelector(':scope>span');
      if (!span) { span=document.createElement('span');nestedLabel.prepend(span); }
      span.textContent='Log Date';
    } else {
      const holder=input.parentElement;
      const externalLabel=input.id ? root.querySelector(`label[for="${cssEscape(input.id)}"]`) : null;
      if (holder) {
        holder.classList.add('bl-routine-log-date');
        let span=holder.querySelector(':scope>.bl-routine-log-date-text');
        if (!span) {
          span=document.createElement('span');
          span.className='bl-routine-log-date-text';
          holder.insertBefore(span,input);
        }
        span.textContent='Log Date';
      }
      externalLabel?.remove();
    }
    input.setAttribute('aria-label','Log Date');
  }

  function ensureVisibility(root) {
    const panel=app==='skin'?$('[data-routine-panel="public"]',root):$('[data-fitness-routine-panel="public"]',root);
    const select=$(app==='skin'?'#routineVisibility':'#fitnessRoutineVisibility',root);
    if (!panel || !select) return;
    let label=select.closest('label');
    if (!label) {
      label=document.createElement('label');
      select.before(label);
      label.appendChild(select);
    }
    label.classList.add('bl-routine-visibility-control');
    let text=label.querySelector(':scope>span');
    if (!text) { text=document.createElement('span');label.prepend(text); }
    text.textContent='My Routine Visibility';
    const head=app==='skin'?$('.routine-public-head',panel):$('.section-head-actions',panel);
    if (head && label.parentElement!==head) head.appendChild(label);
    $$('h1,h2,h3,h4',panel).forEach((heading) => {
      if (String(heading.textContent || '').trim()==='Public Routine Visibility') heading.remove();
    });
  }

  function ensureFitnessFrequency(root) {
    if (app!=='fitness') return;
    const minimum=$('#freq',root);
    const maximum=$('#frequencyRangeMax',root);
    if (minimum) {
      const label=root.querySelector('label[for="freq"]');
      if (label) label.textContent='Number Of Days';
      Array.from(minimum.options || []).forEach((option) => {
        const number=Number(String(option.value || option.textContent || '').replace(/\D/g,''));
        if (number>=1 && number<=7) option.textContent=String(number);
      });
      minimum.setAttribute('aria-label','Number Of Days');
    }
    if (!maximum) return;
    maximum.setAttribute('aria-label','Optional upper end of days range');
    root.querySelector('label[for="frequencyRangeMax"]')?.remove();
    const first=Number(String(minimum?.value || '1').replace(/\D/g,'')) || 1;
    Array.from(maximum.options || []).forEach((option) => {
      if (!option.value) { option.textContent='(Not Specified)';option.disabled=false;return; }
      const number=Number(option.value);
      option.disabled=number<=first;
    });
  }

  function normaliseFitnessSummaryStructure(root) {
    if (app!=='fitness') return;
    $$('#fitnessExerciseSummary .fitness-summary-group',root).forEach((section) => section.classList.add('routine-summary-group','bl-routine-group'));
    $$('#fitnessExerciseSummary .fitness-exercise-summary-item',root).forEach((card) => card.classList.add('routine-summary-item','routine-summary-item-comprehensive','bl-routine-summary-card'));
  }

  function preferredSummaryFilter() {
    return readSession(SUMMARY_STORAGE_KEY,'all') || 'all';
  }
  function persistSummaryFilter(value) {
    writeSession(SUMMARY_STORAGE_KEY,String(value || 'all'));
  }

  function removeDuplicateSkinSummarySelectors(summary,keep) {
    const panel=summary?.closest?.('[data-routine-panel="summary"]');
    if (!panel || !keep) return;
    const keepLabel=keep.closest('label');
    $$('select',panel).forEach((select) => {
      if (select===keep) return;
      const wrapper=select.closest('.bl-select,label,.bl-routine-summary-filter,.routine-summary-filter');
      if (wrapper && wrapper!==keepLabel && !wrapper.contains(keep)) wrapper.remove();
      else select.remove();
    });
    $$('.bl-routine-summary-filter',panel).forEach((wrapper) => {
      if (!wrapper.contains(keep)) wrapper.remove();
    });
  }
  function skinLibraryGroups() {
    const groups=new Map();
    skinCatalogueActions().filter((action) => action?.id).forEach((action) => {
      const category=String(action.group || 'Other').trim() || 'Other';
      if (!groups.has(category)) groups.set(category,[]);
      groups.get(category).push(action);
    });
    return Array.from(groups.entries())
      .sort((a,b) => a[0].localeCompare(b[0],'en-GB',{ sensitivity:'base' }))
      .map(([category,actions]) => ({
        category,
        actions:actions.slice().sort((a,b) => String(a.title || '').localeCompare(String(b.title || ''),'en-GB',{ sensitivity:'base' }))
      }));
  }
  function skinSummaryFilter(root) {
    if (app!=='skin') return null;
    const summary=$('#routineSummary',root);
    if (!summary) return null;
    let select=$('#skinRoutineSummaryFilter',root);
    if (!select) {
      const label=document.createElement('label');
      label.className='bl-routine-summary-filter';
      label.dataset.summaryFilterOwner='skincare';
      label.innerHTML='<span>Show</span><select id="skinRoutineSummaryFilter" aria-label="Filter Routine Summary"></select>';
      summary.before(label);
      select=label.querySelector('select');
    }
    removeDuplicateSkinSummarySelectors(summary,select);
    const state=skinState();
    const grouping=skinGroups();
    const mySteps=state.items.slice().sort((a,b) => String(a.title || '').localeCompare(String(b.title || ''),'en-GB',{ sensitivity:'base' }));
    const libraryGroups=skinLibraryGroups();
    const signature=JSON.stringify([
      grouping.groups.map((group) => [group.id,group.title]),
      mySteps.map((item) => [item.id,item.title,grouping.assignments[item.id] || '']),
      libraryGroups.map((group) => [group.category,group.actions.map((action) => [action.id,action.title])])
    ]);
    if (select.dataset.signature!==signature) {
      const old=String(select.value || preferredSummaryFilter() || 'all');
      const groupOptions=grouping.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('');
      const stepOptions=mySteps.map((item) => `<option value="item:${esc(item.id)}">${esc(item.title || 'Routine Step')}</option>`).join('');
      const libraryOptions=libraryGroups.map((group) => `<optgroup label="Routine Library — ${esc(group.category)}">${group.actions.map((action) => `<option value="catalogue:${esc(action.id)}">${esc(action.title || 'Routine Step')}</option>`).join('')}</optgroup>`).join('');
      select.innerHTML=`<option value="all">All My Routine</option>${groupOptions?`<optgroup label="My Routine — Routine Groups">${groupOptions}</optgroup>`:''}${stepOptions?`<optgroup label="My Routine — Routine Steps">${stepOptions}</optgroup>`:''}${libraryOptions}`;
      select.dataset.signature=signature;
      select.value=Array.from(select.options).some((option) => option.value===old)?old:'all';
    }
    return select;
  }
  function renderSkinCatalogueSummary(summary,action) {
    let preview=summary.querySelector(':scope>.bl-routine-summary-catalogue');
    if (!action) { preview?.remove();return; }
    if (!preview) {
      preview=document.createElement('section');
      preview.className='routine-summary-group bl-routine-group bl-routine-summary-catalogue';
      summary.appendChild(preview);
    }
    const model=global.BASELINE_SKINCARE_ROUTINE_MODEL;
    const benefit=model?.benefitText?.(action,'comprehensive') || action.benefitComprehensive || action.benefit || '';
    const signature=JSON.stringify([action.id,action.title,action.group,benefit]);
    if (preview.dataset.signature===signature) return;
    preview.dataset.signature=signature;
    preview.innerHTML=`<div class="routine-summary-group-head"><h3>${esc(action.title || 'Routine Step')}</h3></div><article class="routine-summary-item routine-summary-item-comprehensive bl-routine-summary-card"><div class="bl-routine-summary-head-row"><div class="routine-summary-title"><span>+</span><strong>${esc(action.title || 'Routine Step')}</strong></div></div><div class="bl-routine-summary-grid"><section class="bl-routine-summary-section"><h4>Routine details</h4><dl><div><dt>Source</dt><dd>Routine Library</dd></div><div><dt>Routine category</dt><dd>${esc(action.group || 'Other')}</dd></div></dl></section><section class="bl-routine-summary-section"><h4>Benefits and practical role</h4><p>${esc(benefit)}</p></section></div></article>`;
  }
  function applySkinSummary(root) {
    const select=skinSummaryFilter(root);
    const summary=$('#routineSummary',root);
    if (!select || !summary) return;
    const value=String(select.value || 'all');
    const state=skinState();
    const grouping=skinGroups();
    const catalogueId=value.startsWith('catalogue:')?value.slice(10):'';
    const catalogueAction=catalogueId?skinCatalogueActions().find((action) => String(action.id)===catalogueId):null;
    renderSkinCatalogueSummary(summary,catalogueAction || null);
    const itemId=value.startsWith('item:')?value.slice(5):'';
    const item=itemId?state.items.find((candidate) => String(candidate.id)===itemId):null;
    const itemGroupId=item?String(grouping.assignments[item.id] || ''):'';
    $$('.routine-summary-group:not(.bl-routine-summary-catalogue)',summary).forEach((section) => {
      const stableId=String(section.dataset.summaryGroup || '');
      let visible=value==='all';
      if (value.startsWith('group:')) visible=stableId===value.slice(6);
      if (item) visible=itemGroupId ? stableId===itemGroupId : stableId==='individual';
      if (catalogueAction) visible=false;
      section.hidden=!visible;
      $$('.routine-summary-item',section).forEach((card) => {
        if (!item) { card.hidden=!visible;return; }
        const title=String(card.querySelector('.routine-summary-title strong')?.textContent || card.querySelector('strong')?.textContent || '').trim();
        card.hidden=!(visible && title.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' })===0);
      });
    });
  }

  function skinGroupCheckboxes(root) {
    if (app!=='skin') return;
    $$('#routineLogItems>.routine-log-group',root).forEach((section) => {
      const head=section.querySelector(':scope>.routine-log-group-head');
      const children=$$('[data-log-complete]',section);
      if (!head || !children.length) return;
      let label=head.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label=document.createElement('label');
        label.className='bl-routine-group-complete';
        label.innerHTML='<input type="checkbox" data-routine-group-complete>';
        head.appendChild(label);
      }
      const box=label.querySelector('[data-routine-group-complete]');
      const checked=children.filter((child) => child.checked).length;
      box.checked=checked===children.length;
      box.indeterminate=checked>0 && checked<children.length;
      box.dataset.itemIds=JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));
      const name=String(head.querySelector('h3')?.textContent || 'routine group').trim();
      box.title=`Complete ${name}`;
      box.setAttribute('aria-label',`Complete ${name}`);
    });
  }
  async function setSkinGroup(box) {
    if (groupBusy) return;
    let ids=[];
    try { ids=JSON.parse(box.dataset.itemIds || '[]'); } catch (_error) {}
    if (!ids.length) return;
    const checked=box.checked;
    groupBusy=true;
    try {
      for (const id of ids) {
        const child=document.querySelector(`#routineLogItems [data-log-complete="${cssEscape(id)}"]`);
        if (!child || child.checked===checked) continue;
        child.checked=checked;
        child.dispatchEvent(new Event('change',{ bubbles:true }));
        await Promise.resolve();
      }
    } finally { groupBusy=false;schedule(); }
  }

  function preserveFitnessCompleted(root) {
    if (app!=='fitness') return;
    const host=$('#fitnessRoutineLogItems',root);
    if (!host) return;
    const state=fitnessState();
    const date=selectedDate();
    const log=state.logs?.[date] || {};
    const visible=new Set($$('[data-fitness-log-complete]',host).map((box) => String(box.dataset.fitnessLogComplete || '')));
    const missing=(state.activities || []).filter((item) => log[item.id]?.completed && !visible.has(String(item.id)));
    let section=host.querySelector(':scope>.bl-routine-preserved-log');
    if (!missing.length) { section?.remove();return; }
    const signature=missing.map((item) => `${item.id}:${item.name}`).join('|');
    if (!section) {
      section=document.createElement('section');
      section.className='fitness-routine-log-group bl-routine-preserved-log';
      host.appendChild(section);
    }
    if (section.dataset.signature===signature) return;
    section.dataset.signature=signature;
    section.innerHTML=`<h3>Completed on this date</h3>${missing.map((item) => `<article class="session-card fitness-routine-log-item complete"><div class="fitness-log-item-head"><label class="fitness-log-completion"><input type="checkbox" checked data-fitness-log-complete="${esc(item.id)}" data-fitness-log-date="${esc(date)}"><span><strong>${esc(item.name || 'Fitness activity')}</strong><small>Completed on this date</small></span></label></div></article>`).join('')}`;
  }

  function skinMarkers(date) {
    const state=skinState();
    const grouping=skinGroups();
    const individual=state.items.filter((item) => !grouping.assignments[item.id]);
    const seen=new Set();
    const markers=[];
    Object.entries(state.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const item=state.items.find((candidate) => String(candidate.id)===String(id));
      if (!item) return;
      const groupId=String(grouping.assignments[id] || '');
      if (groupId) {
        const target=`group:${groupId}`;
        if (seen.has(target)) return;
        seen.add(target);
        const index=grouping.groups.findIndex((group) => String(group.id)===groupId);
        if (index>=0) markers.push({ number:index+1,label:grouping.groups[index].title,target });
        return;
      }
      const target=`item:${item.id}`;
      if (seen.has(target)) return;
      seen.add(target);
      const index=individual.findIndex((candidate) => String(candidate.id)===String(item.id));
      markers.push({ number:grouping.groups.length+Math.max(0,index)+1,label:item.title || 'Routine Step',target });
    });
    return markers;
  }
  function fitnessActivityCaption(item,entry) {
    const definition=global.BASELINE_FITNESS_ACTIVITY_CATALOGUE?.ACTIVITY_BY_ID?.get?.(String(item?.activityId || '')) || null;
    const values=entry?.metrics && typeof entry.metrics==='object'?entry.metrics:{};
    const details=(definition?.metrics || []).map((metric) => {
      const value=values[metric.key];
      if (value===undefined || value===null || value==='') return '';
      if (metric.key==='durationMinutes') return global.BASELINE_fitnessRoutineCodes?.compactDuration?.(value) || `${value} minutes`;
      return `${metric.label}: ${value}${metric.unit?` ${metric.unit}`:''}`;
    }).filter(Boolean);
    return `${String(item?.name || 'Fitness activity')}${details.length?` - ${details.join(' · ')}`:''}`;
  }
  function fitnessPlanCaption(plan,sessions) {
    const planName=String(plan?.planJson?.name || plan?.name || 'Calisthenics');
    const items=Array.isArray(plan?.planJson?.items)?plan.planJson.items:[];
    const workForSession=global.BASELINE_FITNESS_DEBUG?.workForSession;
    const sections=(Array.isArray(sessions)?sessions:[]).map((session) => {
      const index=Math.max(1,Number(session?.session_index || session?.sessionIndex) || 1);
      let work=[];
      try { work=typeof workForSession==='function'?workForSession(items,index):[]; }
      catch (_error) { work=[]; }
      const steps=work.map((entry) => entry.unit==='seconds'
        ? `${entry.item?.name || 'Timed hold'} - ${entry.hold}s`
        : `${entry.item?.name || 'Exercise'} - ${(entry.values || []).join('/')}`);
      return [`${planName} · Session ${index}`].concat(steps).join('\n');
    });
    return sections.length?sections.join('\n'):planName;
  }
  function fitnessMarkers(date) {
    const state=fitnessState();
    const plans=fitnessPlans();
    const grouping=fitnessGroups();
    const codes=global.BASELINE_fitnessRoutineCodes;
    const entities=codes?.buildEntities?.(plans,state.activities || []) || [];
    const completedKeys=[];
    const captions={};
    Object.entries(state.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const item=(state.activities || []).find((candidate) => String(candidate.id)===String(id));
      if (!item) return;
      const key=`activity:${item.id}`;
      completedKeys.push(key);
      captions[key]=fitnessActivityCaption(item,entry);
    });
    plans.forEach((plan) => {
      const sessions=(plan.sessions || []).filter((session) => String(session.status || '')==='done' && completionDate(session)===date);
      if (!sessions.length) return;
      const key=`plan:${Number(plan.planId)}`;
      completedKeys.push(key);
      captions[key]=fitnessPlanCaption(plan,sessions);
    });
    return codes?.completionMarkers?.({ entities,completedKeys,captions,groups:grouping.groups,assignments:grouping.assignments }) || [];
  }

  function removeLegacyCalendarPayload(day) {
    day.querySelector(':scope>.routine-calendar-count')?.remove();
    day.querySelector(':scope>.bl-routine-day-count')?.remove();
    day.querySelector(':scope>.bl-routine-day-details')?.remove();
    if (app==='fitness') day.querySelector(':scope>b')?.remove();
  }
  function calendarMarkers(root) {
    const days=app==='skin'?$$('#routineCalendarGrid [data-calendar-date]',root):$$('#fitnessCalendarGrid [data-calendar-date]',root);
    days.forEach((day) => {
      const date=String(day.dataset.calendarDate || '');
      if (!date) return;
      const markers=app==='skin'?skinMarkers(date):fitnessMarkers(date);
      let wrap=day.querySelector(':scope>.bl-routine-calendar-markers');
      if (!markers.length) { wrap?.remove();return; }
      removeLegacyCalendarPayload(day);
      if (!wrap) {
        wrap=document.createElement('span');
        wrap.className='bl-routine-calendar-markers';
        day.appendChild(wrap);
      }
      const signature=markers.map((marker) => `${marker.code || marker.number}:${marker.caption || marker.label}:${marker.target}`).join('|');
      if (wrap.dataset.signature===signature) return;
      wrap.dataset.signature=signature;
      wrap.innerHTML=markers.map((marker) => `<span role="button" tabindex="0" class="bl-routine-calendar-marker" data-routine-summary-target="${esc(marker.target)}" data-caption="${esc(marker.caption || marker.label)}" aria-label="Open Routine Summary: ${esc(marker.label)}">${esc(marker.code || marker.number)}</span>`).join('');
    });
  }

  function openSummary(target,root) {
    if (!target) return;
    persistSummaryFilter(target);
    if (app==='skin') {
      $('[data-routine-view="summary"]',root)?.click();
      global.requestAnimationFrame(() => {
        const select=skinSummaryFilter(root);
        if (select && Array.from(select.options).some((option) => option.value===target)) {
          select.value=target;
          applySkinSummary(root);
          select.focus({ preventScroll:true });
        }
      });
      return;
    }
    $('[data-fitness-routine-view="summary"]',root)?.click();
    global.requestAnimationFrame(() => {
      const select=$('#fitnessSummaryGroupFilter',root);
      if (!select) return;
      const option=Array.from(select.options || []).find((candidate) => String(candidate.dataset.filterKey || candidate.value)===target);
      if (!option) return;
      option.selected=true;
      select.dispatchEvent(new Event('change',{ bubbles:true }));
      select.focus({ preventScroll:true });
    });
  }

  function restoreLogDate(root) {
    if (restoringState) return;
    const wanted=readSession(DATE_STORAGE_KEY,'');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(wanted) || wanted>todayIso()) return;
    const input=$(app==='skin'?'#routineLogDate':'#fitnessRoutineLogDate',root);
    if (!input || input.dataset.routeDateRestored==='true' || input.value===wanted) return;
    restoringState=true;
    try {
      input.dataset.routeDateRestored='true';
      input.value=wanted;
      input.dispatchEvent(new Event('change',{ bubbles:true }));
    } finally { restoringState=false; }
  }

  function patch() {
    frame=0;
    if (patching) return;
    const root=$(rootSelector);
    if (!root) return;
    patching=true;
    try {
      root.classList.add('bl-routine-coherence-v12');
      dedupeCanonicalControls(root);
      normaliseActiveTerminology(root);
      ensureLogDateLabel(root);
      ensureVisibility(root);
      restoreLogDate(root);
      if (app==='skin') {
        skinSummaryFilter(root);
        applySkinSummary(root);
        skinGroupCheckboxes(root);
      } else {
        ensureFitnessFrequency(root);
        normaliseFitnessSummaryStructure(root);
        preserveFitnessCompleted(root);
      }
      calendarMarkers(root);
      document.documentElement.setAttribute('data-baseline-routine-coherence','v12');
    } finally { patching=false; }
  }
  function schedule() {
    if (!frame) frame=global.requestAnimationFrame(patch);
  }

  function relevantMutation(mutation) {
    const target=mutation.target?.nodeType===1?mutation.target:mutation.target?.parentElement;
    if (!target) return false;
    if (target.closest?.('.bl-routine-summary-catalogue')) return false;
    if (!target.closest?.('#routineCalendarGrid,#fitnessCalendarGrid,#routineLogItems,#fitnessRoutineLogItems,#routineSummary,#fitnessExerciseSummary,[data-routine-panel="public"],[data-fitness-routine-panel="public"],#myPlanGeneratorWrap,#myPlanSavedWrap')) return false;
    const changed=Array.from(mutation.addedNodes || []).concat(Array.from(mutation.removedNodes || []));
    return changed.some((node) => node?.nodeType===1 && !node.matches?.('.bl-routine-calendar-markers,.bl-routine-group-complete,.bl-routine-preserved-log,.bl-routine-entry-actions,.bl-routine-summary-catalogue'));
  }
  function observe(root) {
    if (typeof MutationObserver==='undefined') return;
    observer=new MutationObserver((mutations) => {
      if (!patching && mutations.some(relevantMutation)) schedule();
    });
    observer.observe(root,{ childList:true,subtree:true });
  }
  function bind(root) {
    root.addEventListener('click',(event) => {
      const marker=event.target?.closest?.('[data-routine-summary-target]');
      if (marker) {
        event.preventDefault();event.stopPropagation();
        openSummary(String(marker.dataset.routineSummaryTarget || ''),root);
      }
    },true);
    root.addEventListener('keydown',(event) => {
      const marker=event.target?.closest?.('[data-routine-summary-target]');
      if (marker && (event.key==='Enter' || event.key===' ')) {
        event.preventDefault();event.stopPropagation();
        openSummary(String(marker.dataset.routineSummaryTarget || ''),root);
      }
    },true);
    root.addEventListener('change',(event) => {
      if (event.target?.matches?.('[data-routine-group-complete]')) { event.stopPropagation();setSkinGroup(event.target);return; }
      if (event.target?.id==='skinRoutineSummaryFilter') { persistSummaryFilter(event.target.value);applySkinSummary(root);return; }
      if (event.target?.id==='routineLogDate' || event.target?.id==='fitnessRoutineLogDate') {
        const value=String(event.target.value || '');
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) writeSession(DATE_STORAGE_KEY,value);
      }
    },true);
    [
      'baseline:routine-rendered','baseline:skincare-routine-updated','baseline:fitness-routine-updated',
      'baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed',
      'baseline:fitness-routine-view-changed'
    ].forEach((name) => document.addEventListener(name,schedule));
  }

  function boot() {
    const root=$(rootSelector);
    if (!root) return;
    bind(root);
    observe(root);
    patch();
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
