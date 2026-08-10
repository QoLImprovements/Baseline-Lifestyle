/* Baseline Fitness — canonical My Routine structure adapter v6.

   OWNERSHIP CONTRACT
   ------------------
   The base Fitness workspace owns activity/log data. fitness-multiple-plans.js
   owns saved Calisthenics plans. This adapter owns only the four-view My Routine
   shell, Plan subtabs, Public visibility/profile controls and canonical clean
   path routing.

   Fitness Routine Summary contents and filtering belong exclusively to
   fitness-routine-summary-v2.js. No Summary renderer/filter is allowed here.

   ROUTING CONTRACT
   ----------------
   Public URLs describe pages, not implementation state:
   /baseline-fitness/my-routine/log
   /baseline-fitness/my-routine/summary
   /baseline-fitness/my-routine/plan[/calisthenics|cardio|other|sports]
   /baseline-fitness/my-routine/public
   Summary filters and Log Dates remain session-side and never pollute the URL.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_STRUCTURE_V6__) return;
  global.__BASELINE_FITNESS_ROUTINE_STRUCTURE_V6__ = true;

  const document=global.document;
  const UI=global.BASELINE_RoutineSystem;
  if (!UI || (document.documentElement.dataset.app || document.body?.dataset.app)!=='fitness') return;

  const VIEW_KEY='__bl_fitness_routine_view_v2__';
  const PLAN_VIEW_KEY='__bl_fitness_plan_view_v4__';
  const ROUTE_BASE='/baseline-fitness/my-routine';
  const TOP_VIEWS=Object.freeze(['log','summary','plan','public']);
  const PLAN_VIEWS=Object.freeze(['calisthenics','cardio','other','sports']);
  const ROUTINE_API='/systems/baseline-fitness/api/routine_state.php';
  let activeView='log';
  let activePlanView='calisthenics';
  let profileLoading=false;

  const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
  const $$=(selector,root=document)=>Array.from(root?.querySelectorAll?.(selector)||[]);
  const esc=UI.escapeHtml || ((value)=>String(value==null?'':value));

  function routineState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }
  function directPanels(shell) {
    return Array.from(shell?.children || []).filter((child)=>child.classList?.contains('fitness-routine-panel'));
  }
  function routeFromPath() {
    const path=String(global.location?.pathname || '').replace(/\/+$/,'');
    let match=path.match(/^\/baseline-fitness\/my-routine\/(log|summary|public)$/i);
    if (match) return { view:String(match[1]).toLowerCase(),plan:'calisthenics',clean:true };
    match=path.match(/^\/baseline-fitness\/my-routine\/plan(?:\/(calisthenics|cardio|other|sports))?$/i);
    if (match) return { view:'plan',plan:String(match[1] || 'calisthenics').toLowerCase(),clean:true };
    if (/^\/baseline-fitness\/my-routine$/i.test(path)) return { view:'log',plan:'calisthenics',clean:false };
    if (/^\/baseline-fitness\/(?:my-plan|workout-routine)$/i.test(path)) return { view:'plan',plan:'calisthenics',clean:false };
    return null;
  }
  function currentRoute() {
    const pathRoute=routeFromPath();
    if (pathRoute) return pathRoute;
    let view='';let plan='';
    try {
      const url=new URL(global.location.href);
      view=String(url.searchParams.get('routine-view') || '');
      plan=String(url.searchParams.get('routine-plan') || '');
    } catch (_error) {}
    if (!TOP_VIEWS.includes(view)) {
      try { view=String(global.sessionStorage?.getItem(VIEW_KEY) || ''); } catch (_error) { view=''; }
    }
    if (!TOP_VIEWS.includes(view)) view='log';
    if (!PLAN_VIEWS.includes(plan)) {
      try { plan=String(global.sessionStorage?.getItem(PLAN_VIEW_KEY) || ''); } catch (_error) { plan=''; }
    }
    if (!PLAN_VIEWS.includes(plan)) plan='calisthenics';
    return { view,plan,clean:false };
  }
  function cleanPath(view=activeView,plan=activePlanView) {
    if (view==='plan') return `${ROUTE_BASE}/plan/${PLAN_VIEWS.includes(plan)?plan:'calisthenics'}`;
    return `${ROUTE_BASE}/${TOP_VIEWS.includes(view)?view:'log'}`;
  }
  function writeRoute() {
    try {
      const url=new URL(global.location.href);
      url.pathname=cleanPath();
      ['routine-view','routine-plan','routine-filter','routine-date','new-plan'].forEach((key)=>url.searchParams.delete(key));
      url.hash='';
      global.history.replaceState(global.history.state,'',url.pathname+url.search);
    } catch (_error) {}
  }

  function ensureTopButton(nav,view,label) {
    let button=nav.querySelector(`[data-fitness-routine-view="${view}"]`);
    if (!button) {
      button=document.createElement('button');
      button.type='button';
      button.className='tab fitness-routine-subtab bl-routine-tab';
      button.setAttribute('role','tab');
      button.dataset.fitnessRoutineView=view;
      nav.appendChild(button);
    }
    button.textContent=label;
    button.setAttribute('aria-selected',activeView===view?'true':'false');
    return button;
  }
  function ensureSingleSummaryFilter(panel) {
    const target=panel?.querySelector('#fitnessExerciseSummary');
    if (!panel || !target) return;
    const selects=$$('#fitnessSummaryGroupFilter',panel);
    let keep=selects[0] || null;
    if (!keep) {
      const label=document.createElement('label');
      label.className='bl-routine-summary-filter';
      label.dataset.summaryFilterOwner='fitness';
      label.innerHTML='<span>Show</span><select id="fitnessSummaryGroupFilter" aria-label="Filter Routine Summary"></select>';
      target.before(label);
      keep=label.querySelector('select');
    }
    const keepWrapper=keep.closest('.bl-select,label,.bl-routine-summary-filter');
    selects.slice(1).forEach((select)=>{
      const wrapper=select.closest('.bl-select,label,.bl-routine-summary-filter');
      if (wrapper && wrapper!==keepWrapper && !wrapper.contains(keep)) wrapper.remove();
      else select.remove();
    });
    $$('.bl-routine-summary-filter',panel).forEach((wrapper)=>{
      if (!wrapper.contains(keep)) wrapper.remove();
    });
    const label=keep.closest('label');
    if (label) {
      label.classList.add('bl-routine-summary-filter');
      label.dataset.summaryFilterOwner='fitness';
      let caption=label.querySelector(':scope>span');
      if (!caption) { caption=document.createElement('span');label.prepend(caption); }
      caption.textContent='Show';
    }
  }
  function ensureSummaryPanel(shell,logPanel) {
    let panel=shell.querySelector(':scope>[data-fitness-routine-panel="summary"]');
    if (!panel) {
      panel=document.createElement('div');
      panel.className='fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel='summary';
      panel.hidden=true;
      panel.innerHTML='<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Routine Summary</h2></div></div><div class="divider"></div><label class="bl-routine-summary-filter" data-summary-filter-owner="fitness"><span>Show</span><select id="fitnessSummaryGroupFilter" aria-label="Filter Routine Summary"></select></label><div id="fitnessExerciseSummary" class="fitness-routine-summary-list bl-routine-summary-list" aria-live="polite"></div></div>';
      logPanel.insertAdjacentElement('afterend',panel);
    }
    ensureSingleSummaryFilter(panel);
    return panel;
  }
  function ensurePlanPanel(shell,summaryPanel) {
    let panel=shell.querySelector(':scope>[data-fitness-routine-panel="plan"]');
    if (!panel) {
      panel=document.createElement('div');
      panel.className='fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel='plan';
      panel.hidden=true;
      panel.innerHTML='<nav class="fitness-routine-plan-tabs bl-routine-tabs" role="tablist" aria-label="Routine Plan types"></nav><div class="fitness-routine-plan-panels"></div>';
      summaryPanel.insertAdjacentElement('afterend',panel);
    }
    const nav=panel.querySelector('.fitness-routine-plan-tabs');
    const host=panel.querySelector('.fitness-routine-plan-panels');
    if (!nav || !host) return panel;
    const labels={ calisthenics:'Calisthenics',cardio:'Cardio',other:'Other Fitness Activity',sports:'Sports' };
    PLAN_VIEWS.forEach((view)=>{
      let button=nav.querySelector(`[data-fitness-plan-view="${view}"]`);
      if (!button) {
        button=document.createElement('button');button.type='button';button.className='tab fitness-routine-plan-tab';button.setAttribute('role','tab');button.dataset.fitnessPlanView=view;nav.appendChild(button);
      }
      button.textContent=labels[view];
      button.setAttribute('aria-selected',activePlanView===view?'true':'false');
      const child=shell.querySelector(`:scope>[data-fitness-routine-panel="${view}"]`) || host.querySelector(`[data-fitness-routine-panel="${view}"]`);
      if (child) {
        child.classList.add('fitness-routine-plan-panel');
        if (child.parentElement!==host) host.appendChild(child);
        child.hidden=activePlanView!==view;
        child.classList.toggle('active',activePlanView===view);
      }
    });
    return panel;
  }
  function ensurePublicPanel(shell,planPanel) {
    let panel=shell.querySelector(':scope>[data-fitness-routine-panel="public"]');
    if (!panel) {
      panel=document.createElement('div');
      panel.className='fitness-routine-panel bl-routine-panel';
      panel.dataset.fitnessRoutinePanel='public';
      panel.hidden=true;
      panel.innerHTML=`<div class="card fitness-routine-card bl-routine-card"><div class="section-head-actions"><div><h2>Public Routines</h2><p class="note">Choose a public profile to view their My Routine in View Only format.</p></div><label class="field-stack bl-routine-visibility-control"><span>My Routine Visibility</span><select id="fitnessRoutineVisibility"><option value="private">Private</option><option value="public">Public</option></select></label></div><div class="divider"></div><div class="bl-public-profile-row"><label class="field-stack"><span>Public profile</span><select id="fitnessPublicRoutineName"><option value="">Choose a public profile…</option></select></label><button class="action" type="button" id="fitnessViewPublicRoutine">View Routine</button></div><div id="fitnessPublicRoutineResult" aria-live="polite"></div></div>`;
      planPanel.insertAdjacentElement('afterend',panel);
    }
    return panel;
  }
  function removeLegacyTopButtons(nav) {
    $$(':scope>[data-fitness-routine-view]',nav).forEach((button)=>{
      if (!TOP_VIEWS.includes(String(button.dataset.fitnessRoutineView || ''))) button.remove();
    });
  }
  function rebuildStructure() {
    const shell=$('.fitness-routine-shell');
    const nav=$('.fitness-routine-subtabs',shell);
    const logPanel=shell?.querySelector(':scope>[data-fitness-routine-panel="log"]');
    if (!shell || !nav || !logPanel) return false;
    removeLegacyTopButtons(nav);
    const buttons=[
      ensureTopButton(nav,'log','Routine Log'),
      ensureTopButton(nav,'summary','Routine Summary'),
      ensureTopButton(nav,'plan','Routine Plan'),
      ensureTopButton(nav,'public','Public Routines')
    ];
    buttons.forEach((button)=>nav.appendChild(button));
    const summaryPanel=ensureSummaryPanel(shell,logPanel);
    const planPanel=ensurePlanPanel(shell,summaryPanel);
    const publicPanel=ensurePublicPanel(shell,planPanel);
    [logPanel,summaryPanel,planPanel,publicPanel].forEach((panel)=>shell.appendChild(panel));
    UI.applyTemplate?.($('#my-plan'));
    shell.dataset.fitnessRoutineStructure='v6';
    return true;
  }

  function activatePlanView(view,remember=true) {
    const next=PLAN_VIEWS.includes(view)?view:'calisthenics';
    activePlanView=next;
    const planPanel=$('[data-fitness-routine-panel="plan"]');
    if (!planPanel) return;
    $$('[data-fitness-plan-view]',planPanel).forEach((button)=>button.setAttribute('aria-selected',button.dataset.fitnessPlanView===next?'true':'false'));
    $$('.fitness-routine-plan-panel',planPanel).forEach((panel)=>{
      const selected=panel.dataset.fitnessRoutinePanel===next;
      panel.hidden=!selected;panel.classList.toggle('active',selected);
    });
    if (remember) {
      try { global.sessionStorage?.setItem(PLAN_VIEW_KEY,next); } catch (_error) {}
      writeRoute();
    }
  }
  function activateTopView(view,remember=true) {
    const next=TOP_VIEWS.includes(view)?view:'log';
    activeView=next;
    const shell=$('.fitness-routine-shell');
    const nav=$('.fitness-routine-subtabs',shell);
    if (!shell || !nav) return;
    $$(':scope>[data-fitness-routine-view]',nav).forEach((button)=>button.setAttribute('aria-selected',button.dataset.fitnessRoutineView===next?'true':'false'));
    directPanels(shell).forEach((panel)=>{
      const selected=panel.dataset.fitnessRoutinePanel===next;
      panel.hidden=!selected;panel.classList.toggle('active',selected);
    });
    if (next==='plan') activatePlanView(activePlanView,false);
    if (next==='summary') global.BASELINE_fitnessRoutineSummary?.render?.();
    if (next==='public') { loadPublicProfiles();loadVisibility(); }
    if (next==='log') global.BASELINE_fitnessRoutine?.render?.();
    if (remember) {
      try { global.sessionStorage?.setItem(VIEW_KEY,next); } catch (_error) {}
      writeRoute();
    }
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-view-changed',{ detail:{ view:next,planView:activePlanView } })); } catch (_error) {}
  }
  function restoreRoute() {
    const route=currentRoute();
    activeView=route.view;
    activePlanView=route.plan;
    try {
      global.sessionStorage?.setItem(VIEW_KEY,activeView);
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,activePlanView);
    } catch (_error) {}
    activateTopView(activeView,false);
    if (activeView==='plan') activatePlanView(activePlanView,false);
    writeRoute();
  }

  async function apiJson(url,options={}) {
    try {
      const response=await fetch(url,{ method:options.method || 'GET',credentials:'same-origin',headers:Object.assign({ Accept:'application/json' },options.body?{ 'Content-Type':'application/json' }:{}),body:options.body?JSON.stringify(options.body):undefined });
      const data=await response.json().catch(()=>null);
      return data && typeof data==='object'?data:{ ok:false };
    } catch (_error) { return { ok:false }; }
  }
  async function loadPublicProfiles() {
    if (profileLoading) return;
    const select=$('#fitnessPublicRoutineName');
    if (!select) return;
    profileLoading=true;
    try {
      const old=String(select.value || '');
      const response=await apiJson(`${ROUTINE_API}?list=public`);
      const names=response?.ok && Array.isArray(response.profiles)?response.profiles:[];
      select.innerHTML='<option value="">Choose a public profile…</option>'+names.map((name)=>`<option value="${esc(name)}">${esc(name)}</option>`).join('');
      if (names.includes(old)) select.value=old;
    } finally { profileLoading=false; }
  }
  async function loadVisibility() {
    const select=$('#fitnessRoutineVisibility');
    if (!select) return;
    const response=await apiJson(ROUTINE_API);
    if (response?.ok) select.value=response.visibility==='public'?'public':'private';
  }
  async function saveVisibility(value) {
    const state=routineState();
    const select=$('#fitnessRoutineVisibility');
    if (select) select.disabled=true;
    try {
      await apiJson(ROUTINE_API,{ method:'POST',body:{ visibility:value==='public'?'public':'private',activities:Array.isArray(state.activities)?state.activities:[],logs:state.logs && typeof state.logs==='object'?state.logs:{} } });
    } finally { if (select) select.disabled=false; }
  }

  function wrapRoutineApi() {
    const api=global.BASELINE_fitnessRoutine;
    if (!api || api.__baselineRoutineStructureV6) return;
    global.BASELINE_fitnessRoutine=Object.freeze(Object.assign({},api,{
      __baselineRoutineStructureV6:true,
      getState() {
        const state=api.getState?.() || {};
        return Object.assign({},state,{ activeView,planView:activePlanView });
      },
      selectView(view) {
        if (PLAN_VIEWS.includes(view)) { activeView='plan';activateTopView('plan',true);activatePlanView(view,true);return; }
        activateTopView(view,true);
      },
      selectPlanView(view) { activeView='plan';activateTopView('plan',true);activatePlanView(view,true); }
    }));
  }
  function bindEvents() {
    const root=$('#my-plan');
    if (!root || root.dataset.fitnessRoutineStructureEvents==='true') return;
    root.dataset.fitnessRoutineStructureEvents='true';
    root.addEventListener('click',(event)=>{
      const top=event.target?.closest?.('.fitness-routine-subtabs>[data-fitness-routine-view]');
      if (top) {
        event.preventDefault();event.stopPropagation();activateTopView(top.dataset.fitnessRoutineView,true);return;
      }
      const plan=event.target?.closest?.('[data-fitness-plan-view]');
      if (plan) {
        event.preventDefault();event.stopPropagation();activeView='plan';activateTopView('plan',false);activatePlanView(plan.dataset.fitnessPlanView,true);return;
      }
      if (event.target?.closest?.('#fitnessViewPublicRoutine')) {
        const name=String($('#fitnessPublicRoutineName')?.value || '').trim();
        if (name) global.BASELINE_publicRoutineView?.render?.('fitness',name,$('#fitnessPublicRoutineResult'));
      }
    },true);
    root.addEventListener('change',(event)=>{
      if (event.target?.id==='fitnessRoutineVisibility') saveVisibility(event.target.value);
      if (event.target?.id==='fitnessPublicRoutineName') {
        const name=String(event.target.value || '').trim();
        const target=$('#fitnessPublicRoutineResult');
        if (target && !name) target.innerHTML='';
      }
    });
    global.addEventListener('popstate',()=>{
      const route=currentRoute();activeView=route.view;activePlanView=route.plan;
      activateTopView(activeView,false);if (activeView==='plan') activatePlanView(activePlanView,false);
    });
  }

  function boot() {
    const route=currentRoute();
    activeView=route.view;
    activePlanView=route.plan;
    if (!rebuildStructure()) return;
    bindEvents();
    wrapRoutineApi();
    try {
      global.sessionStorage?.setItem(VIEW_KEY,activeView);
      global.sessionStorage?.setItem(PLAN_VIEW_KEY,activePlanView);
    } catch (_error) {}
    activateTopView(activeView,false);
    if (activeView==='plan') activatePlanView(activePlanView,false);
    writeRoute();
    try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-structure-ready',{ detail:{ view:activeView,planView:activePlanView } })); } catch (_error) {}
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);
