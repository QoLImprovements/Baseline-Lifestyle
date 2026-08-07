/* Baseline Lifestyle — ONE shared My Routine coherence authority.

   SITEWIDE CONTRACT — FITNESS + SKINCARE
   --------------------------------------
   This file owns ONLY rules that must be identical across both systems:
   - exact My Routine view persistence across browser refreshes;
   - stable numbering/group completion/filter decorations;
   - public-control alignment and duplicate-control cleanup;
   - calendar completion markers linking to Routine Summary;
   - opaque, top-layer dropdown/picker behaviour;
   - completed-log disclosure behaviour;
   - Fitness generator alignment and exercise-row reordering.

   System adapters continue to own their data. DO NOT add another renderer that
   rebuilds Routine Log, Routine Summary, Routine Plan or Public Routines here.
   A second renderer is what previously caused shaking, view switching and
   controls fighting each other. Keep this authority non-destructive. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_AUTHORITY_V8__) return;
  global.__BASELINE_ROUTINE_AUTHORITY_V8__ = true;
  global.__BASELINE_ROUTINE_AUTHORITY_V7__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const UI = global.BASELINE_RoutineSystem;
  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const VIEW_PARAM = 'routine-view';
  const PLAN_PARAM = 'routine-plan';
  const SKIN_VIEW_KEY = '__bl_skincare_routine_view_v1__';
  const FITNESS_VIEW_KEY = '__bl_fitness_routine_view_v2__';
  const FITNESS_PLAN_KEY = '__bl_fitness_plan_view_v4__';
  const observers = [];
  let frame = 0;
  let groupedMoveRunning = false;
  let completingGroup = false;
  let restoringView = false;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[character]));
  }

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key,fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function writeJson(key,value) {
    try { global.localStorage?.setItem(key,JSON.stringify(value)); } catch (_error) {}
  }

  function skinRoutineState() {
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`,{});
    return {
      visibility:value?.visibility === 'public' ? 'public' : 'private',
      items:Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [],
      logs:value?.logs && typeof value.logs === 'object' ? value.logs : {}
    };
  }

  function skinGroupState() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{});
    const groups = (Array.isArray(value?.groups) ? value.groups : []).filter((group) => group?.id && group?.title);
    const valid = new Set(groups.map((group) => String(group.id)));
    const assignments = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([itemId,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)] = String(groupId);
    });
    return { groups,assignments };
  }

  function fitnessState() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }

  function fitnessPlans() {
    try { return global.BASELINE_fitnessPlans?.getPlans?.() || []; }
    catch (_error) { return []; }
  }

  function fitnessGroupState() {
    try {
      const settings = UI?.readSettings?.(owner()) || {};
      const groups = (Array.isArray(settings.fitnessRoutineGroups) ? settings.fitnessRoutineGroups : []).filter((group) => group?.id && group?.title);
      const valid = new Set(groups.map((group) => String(group.id)));
      const assignments = {};
      Object.entries(settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object' ? settings.fitnessRoutineAssignments : {}).forEach(([key,groupId]) => {
        if (valid.has(String(groupId))) assignments[String(key)] = String(groupId);
      });
      return { groups,assignments };
    } catch (_error) { return { groups:[],assignments:{} }; }
  }

  function injectStyles() {
    if ($('#baselineRoutineAuthorityV8Style')) return;
    const style = document.createElement('style');
    style.id = 'baselineRoutineAuthorityV8Style';
    style.textContent = `
      /* STABILITY: My Routine cards must never animate/reflow on completion. */
      #routine :is(.routine-item,.routine-log-item,.routine-summary-item,.routine-plan-group,.routine-log-group),
      #my-plan :is(.fitness-routine-card,.fitness-summary-group,.fitness-exercise-summary-item,.fitness-routine-log-item,.fitness-calisthenics-log-card,#exerciseList>.ex-row){
        transition:none!important;animation:none!important
      }

      /* GROUP NUMBERING: groups own numbers; grouped children do not. */
      #routineItems{counter-reset:blPlanNumber}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped){counter-increment:blPlanNumber}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped)>.routine-plan-group-head>div:first-child{display:flex;align-items:center;gap:12px}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped)>.routine-plan-group-head>div:first-child::before{
        content:counter(blPlanNumber);display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:999px;background:var(--accent-soft);font-weight:900
      }
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped) .routine-item .routine-order,
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped) .routine-item .bl-v4-number{display:none!important}
      #routineItems>.routine-plan-group-ungrouped .routine-item{counter-increment:blPlanNumber}
      #routineItems>.routine-plan-group-ungrouped .routine-item .routine-order{display:grid!important;place-items:center!important;font-size:0!important}
      #routineItems>.routine-plan-group-ungrouped .routine-item .routine-order::before{content:counter(blPlanNumber);font-size:1rem}

      #routineLogItems{counter-reset:blLogNumber}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"]){counter-increment:blLogNumber}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"])>.routine-log-group-head{display:flex;align-items:center;gap:12px}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"])>.routine-log-group-head::before{
        content:counter(blLogNumber);display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:999px;background:var(--accent-soft);font-weight:900
      }
      #routineLogItems>.routine-log-group[data-bl-ungrouped="true"]>.routine-log-item{counter-increment:blLogNumber}
      #routineLogItems>.routine-log-group[data-bl-ungrouped="true"]>.routine-log-item::before{
        content:counter(blLogNumber);display:grid;place-items:center;float:left;margin:10px 10px 0 0;width:34px;height:34px;border-radius:999px;background:var(--accent-soft);font-weight:900
      }
      .bl-routine-group-complete{display:inline-flex!important;align-items:center!important;margin:0!important;padding:0!important}
      .bl-routine-group-complete input{margin:0!important}
      .bl-routine-summary-filter{display:grid;gap:6px;margin:0 0 14px}

      /* PUBLIC CONTROLS: one compact row, aligned with the card title. */
      .bl-authority-public-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:12px}
      .bl-authority-public-title{min-width:0;flex:1 1 420px}
      .bl-release-public-visibility{display:grid!important;grid-template-columns:auto minmax(150px,210px);align-items:center;gap:10px;margin-left:auto!important;padding:0!important;background:none!important;border:0!important}
      .bl-release-public-visibility>span{white-space:nowrap}
      [data-routine-panel="public"] .routine-card,
      [data-fitness-routine-panel="public"] .fitness-routine-card{padding:18px!important}

      /* PICKER/DROPDOWN CONTRACT — MUST STAY OPAQUE AND ABOVE ALL CARDS. */
      #exerciseList .ex-field-exercise,
      .fitness-activity-combobox,
      .routine-action-combobox{position:relative!important;z-index:30!important;overflow:visible!important}
      #exerciseList .ex-row:has(.ex-picker-menu:not([hidden])),
      .fitness-routine-panel:has(.fitness-activity-menu:not([hidden])),
      .routine-card:has(.routine-action-menu:not([hidden])){position:relative!important;z-index:100000!important;overflow:visible!important}
      .ex-picker-menu,.fitness-activity-menu,.routine-action-menu{
        position:absolute!important;z-index:2147483000!important;isolation:isolate!important;opacity:1!important;
        background:var(--card-bg)!important;color:var(--ink)!important;border:1px solid var(--border-2)!important;
        box-shadow:var(--shadow)!important;pointer-events:auto!important;overflow:auto!important
      }
      .ex-picker-menu{left:0!important;right:0!important;top:calc(100% + 8px)!important;max-height:min(62vh,620px)!important}
      .fitness-activity-menu,.routine-action-menu{left:0!important;right:0!important;top:calc(100% + 6px)!important;max-height:min(62vh,620px)!important}
      .ex-picker-option,.fitness-activity-menu [role="option"],.routine-action-option{background:var(--card-bg)!important;color:var(--ink)!important;pointer-events:auto!important}
      .ex-picker-option:hover,.fitness-activity-menu [role="option"]:hover,.routine-action-option:hover{background:var(--filter-bg)!important}

      /* FITNESS PALETTE CONTRACT: use system tokens only; no foreign hard-coded panel colours. */
      html[data-app="fitness"] :is(.fitness-routine-card,.fitness-calisthenics-plan-workspace .card,#exerciseList>.ex-row,.ex-details-card){background:var(--card-bg)!important;color:var(--ink)!important;border-color:var(--border)!important}
      html[data-app="fitness"] :is(input,select,textarea,.ex-picker-control){background:var(--filter-bg);color:var(--ink);border-color:var(--border-2)}

      /* GENERATOR GRID CONTRACT — future fields must not destroy alignment.
         Row 1 is fixed semantic columns; details always span the full card. */
      #exerciseList>.ex-row{
        display:grid!important;grid-template-columns:minmax(250px,1.65fr) minmax(220px,1.25fr) minmax(170px,.85fr) minmax(92px,.42fr) minmax(175px,.9fr) auto!important;
        grid-template-areas:"exercise mode baseline sets increase actions" "details details details details details details"!important;
        gap:14px!important;align-items:end!important;padding:18px!important;border:1px solid var(--border)!important;border-radius:18px!important;overflow:visible!important
      }
      #exerciseList>.ex-row>.ex-field-exercise{grid-area:exercise!important;min-width:0}
      #exerciseList>.ex-row>.ex-field-progression-mode{grid-area:mode!important;min-width:0}
      #exerciseList>.ex-row>.ex-field-baseline{grid-area:baseline!important;min-width:0}
      #exerciseList>.ex-row>.ex-field-sets{grid-area:sets!important;min-width:0}
      #exerciseList>.ex-row>.ex-field-rep-increase{grid-area:increase!important;min-width:0}
      #exerciseList>.ex-row>.ex-remove-wrap{grid-area:actions!important;display:flex!important;align-items:end!important;gap:7px!important;justify-content:flex-end!important}
      #exerciseList>.ex-row>.ex-details-card{grid-area:details!important;width:100%!important;display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:10px!important;margin:2px 0 0!important;padding:12px 14px!important;border-radius:13px!important}
      #exerciseList>.ex-row>.ex-details-card>span{min-width:0}
      #exerciseList>.ex-row>.ex-details-card b{display:block;margin-bottom:3px}
      .bl-exercise-order{display:flex;gap:6px;align-items:center}
      .bl-exercise-order button{min-width:38px;height:42px}
      @media(max-width:1250px){
        #exerciseList>.ex-row{grid-template-columns:minmax(220px,1.3fr) minmax(210px,1fr) minmax(160px,.8fr)!important;grid-template-areas:"exercise mode baseline" "sets increase actions" "details details details"!important}
        #exerciseList>.ex-row>.ex-details-card{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      }
      @media(max-width:760px){
        #exerciseList>.ex-row{grid-template-columns:1fr!important;grid-template-areas:"exercise" "mode" "baseline" "sets" "increase" "actions" "details"!important}
        #exerciseList>.ex-row>.ex-details-card{grid-template-columns:1fr!important}
      }

      /* LOG DISCLOSURES: activity details begin collapsed. */
      .bl-log-detail-toggle{margin-left:auto}
      .bl-log-details-collapsed :is(.fitness-metric-fieldset,.fitness-log-note){display:none!important}
      .bl-completed-routines{margin-top:14px;border:1px solid var(--border);border-radius:16px;background:var(--card-bg);padding:0}
      .bl-completed-routines>summary{cursor:pointer;padding:13px 15px;font-weight:850}
      .bl-completed-routines-list{display:grid;gap:8px;padding:0 12px 12px}
      .bl-completed-routine-row{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--filter-bg)}

      /* Calendar completion badges are controls, not decorative text. */
      .bl-calendar-markers{display:flex!important;gap:5px!important;flex-wrap:wrap!important;position:relative!important;z-index:4!important}
      .bl-calendar-marker{appearance:none;border:1px solid var(--border-2);border-radius:999px;background:var(--filter-bg);color:var(--ink);font:inherit;font-size:.75rem;font-weight:900;padding:3px 7px;cursor:pointer}
    `;
    document.head.appendChild(style);
  }

  function persistView(main,plan='') {
    if (restoringView) return;
    try {
      if (app === 'skin') global.sessionStorage?.setItem(SKIN_VIEW_KEY,main);
      else {
        global.sessionStorage?.setItem(FITNESS_VIEW_KEY,main);
        if (plan) global.sessionStorage?.setItem(FITNESS_PLAN_KEY,plan);
      }
      const url = new URL(global.location.href);
      url.searchParams.set(VIEW_PARAM,main);
      if (app === 'fitness' && plan) url.searchParams.set(PLAN_PARAM,plan); else url.searchParams.delete(PLAN_PARAM);
      /* new-plan is a one-shot command. Leaving it in the URL made every later
         browser refresh force Routine Plan again. Consume it once, then remove. */
      if (main !== 'plan') url.searchParams.delete('new-plan');
      global.history.replaceState(global.history.state,'',url.pathname+url.search+url.hash);
    } catch (_error) {}
  }

  function requestedView() {
    let main = 'log';
    let plan = 'calisthenics';
    try {
      const url = new URL(global.location.href);
      const queryMain = String(url.searchParams.get(VIEW_PARAM) || '');
      const queryPlan = String(url.searchParams.get(PLAN_PARAM) || '');
      if (app === 'skin') {
        const stored = String(global.sessionStorage?.getItem(SKIN_VIEW_KEY) || '');
        main = ['log','summary','plan','public'].includes(queryMain) ? queryMain : ['log','summary','plan','public'].includes(stored) ? stored : 'log';
      } else {
        const stored = String(global.sessionStorage?.getItem(FITNESS_VIEW_KEY) || '');
        const storedPlan = String(global.sessionStorage?.getItem(FITNESS_PLAN_KEY) || '');
        main = ['log','summary','plan','public'].includes(queryMain) ? queryMain : ['log','summary','plan','public'].includes(stored) ? stored : 'log';
        plan = ['calisthenics','cardio','other','sports'].includes(queryPlan) ? queryPlan : ['calisthenics','cardio','other','sports'].includes(storedPlan) ? storedPlan : 'calisthenics';
      }
    } catch (_error) {}
    return { main,plan };
  }

  function restoreView() {
    const requested = requestedView();
    restoringView = true;
    try {
      if (app === 'skin') {
        const button = $(`[data-routine-view="${requested.main}"]`);
        if (button && button.getAttribute('aria-selected') !== 'true') button.click();
      } else {
        const button = $(`[data-fitness-routine-view="${requested.main}"]`);
        if (button && button.getAttribute('aria-selected') !== 'true') button.click();
        if (requested.main === 'plan') {
          const planButton = $(`[data-fitness-plan-view="${requested.plan}"]`);
          if (planButton && planButton.getAttribute('aria-selected') !== 'true') planButton.click();
        }
      }
    } finally { restoringView=false; }
  }

  function moveVisibilityControl() {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]') : $('[data-fitness-routine-panel="public"]');
    const card = panel?.querySelector(app === 'skin' ? '.routine-card' : '.fitness-routine-card');
    const select = document.getElementById(app === 'skin' ? 'routineVisibility' : 'fitnessRoutineVisibility');
    if (!card || !select) return;
    let control = select.closest('label,.bl-release-public-visibility');
    if (!control) {
      control=document.createElement('label');
      select.parentElement?.insertBefore(control,select);
      control.appendChild(select);
    }
    control.classList.add('bl-release-public-visibility');
    let label = control.querySelector(':scope>span');
    if (!label) { label=document.createElement('span');control.prepend(label); }
    label.textContent='My Routine Visibility';
    let row = card.querySelector(':scope>.bl-authority-public-head');
    if (!row) {
      const heading = Array.from(card.children).find((child) => child.matches?.('h1,h2,h3') || child.querySelector?.('h1,h2,h3'));
      if (!heading) return;
      const title=document.createElement('div');title.className='bl-authority-public-title';
      if (heading.matches?.('h1,h2,h3')) {
        const next=heading.nextElementSibling;
        title.appendChild(heading);
        if (next?.matches?.('p,.note')) title.appendChild(next);
      } else title.appendChild(heading);
      row=document.createElement('div');row.className='bl-authority-public-head';card.prepend(row);row.appendChild(title);
    }
    if (control.parentElement !== row) row.appendChild(control);
  }

  function removeDuplicateControls() {
    if (app !== 'skin') return;
    /* A renderer must never create a second visible control for the same state. */
    const summarySelect=$('#skinRoutineSummaryFilter');
    if (summarySelect) {
      const canonical=summarySelect.closest('label') || summarySelect;
      const panel=$('[data-routine-panel="summary"]');
      $$('select',panel).forEach((candidate) => {
        if (candidate === summarySelect || candidate.closest('.routine-summary-item')) return;
        const text=Array.from(candidate.options || []).map((option) => option.textContent).join('|');
        if (/All routine items/i.test(text)) (candidate.closest('label') || candidate).remove();
      });
      canonical.hidden=false;
    }
    const publicPanel=$('[data-routine-panel="public"]');
    if (publicPanel) {
      $$('select',publicPanel).forEach((candidate) => {
        if (['routineVisibility','publicRoutineName'].includes(candidate.id)) return;
        const options=Array.from(candidate.options || []).map((option) => String(option.value || '').toLowerCase());
        if (options.includes('public') && options.includes('private')) (candidate.closest('label') || candidate).remove();
        else if (Array.from(candidate.options || []).some((option) => /Choose a public profile/i.test(option.textContent || ''))) (candidate.closest('label') || candidate).remove();
      });
    }
  }

  function expandSkinProducts() {
    if (app !== 'skin') return;
    const library=global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const products=Array.isArray(library?.PRODUCTS) ? library.PRODUCTS : [];
    if (!products.length) return;
    const byBrand=new Map();
    products.forEach((product) => {
      const brand=String(product?.brand || 'Other').trim() || 'Other';
      if (!byBrand.has(brand)) byBrand.set(brand,[]);
      byBrand.get(brand).push(product);
    });
    const brands=Array.from(byBrand.keys()).sort((a,b) => a.localeCompare(b,'en-GB',{ sensitivity:'base' }));
    const signature=products.map((product) => `${product.id}:${product.brand}:${product.name}`).join('|');
    $$('#routineItems [data-field="productSelection"]').forEach((select) => {
      if (select.dataset.blFullProductCatalogue === signature) return;
      const selected=String(select.value || '');
      const recipes=Array.from(select.querySelectorAll('optgroup[label="My Recipes"] option')).map((option) => ({ value:option.value,text:option.textContent }));
      select.innerHTML=`<option value="">No product selected</option>${recipes.length ? `<optgroup label="My Recipes">${recipes.map((option) => `<option value="${esc(option.value)}">${esc(option.text)}</option>`).join('')}</optgroup>` : ''}${brands.map((brand) => `<optgroup label="${esc(brand)}">${byBrand.get(brand).slice().sort((a,b) => String(a.name).localeCompare(String(b.name),'en-GB',{ sensitivity:'base' })).map((product) => `<option value="product:${esc(product.id)}">${esc(product.name)}</option>`).join('')}</optgroup>`).join('')}<optgroup label="Other"><option value="custom">Custom product…</option></optgroup>`;
      if (Array.from(select.options).some((option) => option.value === selected)) select.value=selected;
      select.dataset.blFullProductCatalogue=signature;
    });
  }

  function ensureSkinSummaryFilter() {
    if (app !== 'skin') return null;
    const target=$('#routineSummary');
    if (!target) return null;
    let select=$('#skinRoutineSummaryFilter');
    if (!select) {
      const control=document.createElement('label');
      control.className='bl-routine-summary-filter';
      control.innerHTML='<span>Show</span><select id="skinRoutineSummaryFilter" aria-label="Filter routine summary"></select>';
      target.insertAdjacentElement('beforebegin',control);
      select=control.querySelector('select');
    }
    const old=String(select.value || 'all');
    const data=skinGroupState();
    const routine=skinRoutineState().items;
    const signature=JSON.stringify({ groups:data.groups.map((group) => [group.id,group.title]),items:routine.map((item) => [item.id,item.title]) });
    if (select.dataset.signature !== signature) {
      select.innerHTML=`<option value="all">All routine items</option>${data.groups.length ? `<optgroup label="Routine groups">${data.groups.map((group) => `<option value="group:${esc(group.id)}">${esc(group.title)}</option>`).join('')}</optgroup>` : ''}${routine.length ? `<optgroup label="Individual routine items">${routine.map((item) => `<option value="item:${esc(item.id)}">${esc(item.title || 'Routine action')}</option>`).join('')}</optgroup>` : ''}`;
      select.dataset.signature=signature;
      if (Array.from(select.options).some((option) => option.value===old)) select.value=old;
    }
    return select;
  }

  function normalTitle(value) { return String(value || '').replace(/^\s*\d+\.?\s*/,'').trim().toLocaleLowerCase('en-GB'); }

  function applySkinSummaryFilter() {
    if (app !== 'skin') return;
    const select=ensureSkinSummaryFilter();
    const target=$('#routineSummary');
    if (!select || !target) return;
    const value=String(select.value || 'all');
    const data=skinGroupState();
    const routine=skinRoutineState().items;
    const itemId=value.startsWith('item:') ? value.slice(5) : '';
    const item=itemId ? routine.find((candidate) => String(candidate.id)===itemId) : null;
    const itemGroup=item ? String(data.assignments[itemId] || '') : '';
    $$('.routine-summary-group',target).forEach((section) => {
      const title=normalTitle(section.querySelector('h3')?.textContent);
      const group=data.groups.find((candidate) => normalTitle(candidate.title)===title);
      const groupId=group?.id || '';
      let visible=value==='all';
      if (value.startsWith('group:')) visible=groupId===value.slice(6);
      if (item) visible=itemGroup ? groupId===itemGroup : !groupId;
      section.hidden=!visible;
      $$('.routine-summary-item',section).forEach((card) => {
        if (!item) { card.hidden=!visible;return; }
        const cardTitle=String(card.querySelector('.routine-summary-title strong')?.textContent || '').trim();
        card.hidden=!(visible && cardTitle.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' })===0);
      });
    });
  }

  function ensureGroupCheckboxes() {
    if (app !== 'skin') return;
    $$('#routineLogItems>.routine-log-group').forEach((section) => {
      const heading=section.querySelector(':scope>.routine-log-group-head');
      if (!heading) return;
      const boxes=$$('[data-log-complete]',section);
      if (!boxes.length) return;
      let label=heading.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label=document.createElement('label');label.className='bl-routine-group-complete';
        label.innerHTML='<input type="checkbox" data-v8-group-complete><span class="sr-only">Complete group</span>';
        heading.appendChild(label);
      }
      const box=label.querySelector('[data-v8-group-complete]');
      const checked=boxes.filter((candidate) => candidate.checked).length;
      box.checked=checked===boxes.length;
      box.indeterminate=checked>0 && checked<boxes.length;
      box.dataset.itemIds=JSON.stringify(boxes.map((candidate) => String(candidate.dataset.logComplete || '')).filter(Boolean));
      box.setAttribute('aria-label',`Mark all actions in ${heading.querySelector('h3')?.textContent || 'group'} complete`);
    });
  }

  function calendarMarkersSkin(date) {
    const routine=skinRoutineState();
    const groups=skinGroupState();
    const entries=routine.logs?.[date] || {};
    const ungrouped=routine.items.filter((item) => !groups.assignments[item.id]);
    const markers=[];const seen=new Set();
    Object.entries(entries).forEach(([itemId,entry]) => {
      if (!entry?.completed) return;
      const item=routine.items.find((candidate) => String(candidate.id)===String(itemId));
      if (!item) return;
      const groupId=groups.assignments[itemId];
      if (groupId) {
        if (seen.has(`g:${groupId}`)) return;seen.add(`g:${groupId}`);
        const index=groups.groups.findIndex((group) => String(group.id)===String(groupId));
        if (index>=0) markers.push({ number:index+1,caption:groups.groups[index].title,filter:`group:${groupId}` });
      } else {
        const index=ungrouped.findIndex((candidate) => String(candidate.id)===String(itemId));
        markers.push({ number:groups.groups.length+Math.max(0,index)+1,caption:item.title,filter:`item:${item.id}` });
      }
    });
    return markers;
  }

  function completedDate(session) {
    if (session?.completedAt) return String(session.completedAt).slice(0,10);
    if (Number(session?.completed_at)) return new Date(Number(session.completed_at)*1000).toISOString().slice(0,10);
    return '';
  }

  function calendarMarkersFitness(date) {
    const routine=fitnessState();
    const plans=fitnessPlans();
    const group=fitnessGroupState();
    const entities=[];
    Object.entries(routine.logs?.[date] || {}).forEach(([id,entry]) => {
      if (!entry?.completed) return;
      const item=(routine.activities || []).find((candidate) => String(candidate.id)===String(id));
      if (item) entities.push({ key:`activity:${id}`,name:item.name || 'Fitness activity' });
    });
    plans.forEach((plan) => {
      (plan.sessions || []).forEach((session) => {
        const status=String(session.status || '');
        if (status==='done' && completedDate(session)===date) entities.push({ key:`plan:${Number(plan.planId)}`,name:String(plan.planJson?.name || 'Calisthenics Plan') });
      });
    });
    const ungrouped=(plans.map((plan) => ({ key:`plan:${Number(plan.planId)}`,name:String(plan.planJson?.name || 'Calisthenics Plan') }))).concat((routine.activities || []).map((item) => ({ key:`activity:${item.id}`,name:item.name || 'Fitness activity' }))).filter((entity) => !group.assignments[entity.key]);
    const seen=new Set();const markers=[];
    entities.forEach((entity) => {
      const groupId=group.assignments[entity.key];
      if (groupId) {
        if (seen.has(`g:${groupId}`)) return;seen.add(`g:${groupId}`);
        const index=group.groups.findIndex((candidate) => String(candidate.id)===String(groupId));
        if (index>=0) markers.push({ number:index+1,caption:group.groups[index].title,filter:`group:${groupId}` });
      } else {
        const index=ungrouped.findIndex((candidate) => candidate.key===entity.key);
        markers.push({ number:group.groups.length+Math.max(0,index)+1,caption:entity.name,filter:`entity:${entity.key}` });
      }
    });
    return markers;
  }

  function decorateCalendar() {
    const days=app==='skin' ? $$('.routine-calendar-card [data-calendar-date]') : $$('#fitnessCalendarGrid [data-calendar-date]');
    days.forEach((day) => {
      const date=String(day.dataset.calendarDate || '');
      const markers=app==='skin' ? calendarMarkersSkin(date) : calendarMarkersFitness(date);
      let wrap=day.querySelector(':scope>.bl-calendar-markers');
      if (!markers.length) { wrap?.remove();return; }
      if (!wrap) { wrap=document.createElement('span');wrap.className='bl-calendar-markers';day.appendChild(wrap); }
      const signature=markers.map((marker) => `${marker.number}:${marker.caption}:${marker.filter}`).join('|');
      if (wrap.dataset.signature===signature) return;
      wrap.dataset.signature=signature;
      wrap.innerHTML=markers.map((marker) => `<button type="button" class="bl-calendar-marker" data-calendar-summary-filter="${esc(marker.filter)}" title="${esc(marker.caption)}" aria-label="Open Routine Summary: ${esc(marker.caption)}">${marker.number}</button>`).join('');
    });
  }

  function collapseFitnessLogDetails() {
    if (app!=='fitness') return;
    $$('.fitness-routine-log-item').forEach((card) => {
      if (!card.dataset.blDisclosureReady) {
        card.dataset.blDisclosureReady='true';
        card.classList.add('bl-log-details-collapsed');
        const head=card.querySelector('.fitness-log-item-head');
        if (head) {
          const toggle=document.createElement('button');
          toggle.type='button';toggle.className='tiny-btn bl-log-detail-toggle';toggle.dataset.logDetailToggle='true';toggle.textContent='Details';toggle.setAttribute('aria-expanded','false');
          head.appendChild(toggle);
        }
      }
    });
  }

  function completedCards() {
    return app==='skin'
      ? $$('#routineLogItems .routine-log-item.complete')
      : $$('#fitnessRoutineLogItems .fitness-routine-log-item.complete');
  }

  function renderCompletedDisclosure() {
    const host=app==='skin' ? $('#routineLogItems') : $('#fitnessRoutineLogItems');
    if (!host) return;
    const cards=completedCards();
    let details=host.parentElement?.querySelector(':scope>.bl-completed-routines');
    if (!cards.length) { details?.remove();return; }
    if (!details) {
      details=document.createElement('details');details.className='bl-completed-routines';details.innerHTML='<summary></summary><div class="bl-completed-routines-list"></div>';
      host.insertAdjacentElement('afterend',details);
    }
    details.querySelector('summary').textContent=`Completed exercises / routines (${cards.length})`;
    const list=details.querySelector('.bl-completed-routines-list');
    list.innerHTML=cards.map((card,index) => {
      const source=card.querySelector('[data-log-complete],[data-fitness-log-complete]');
      const name=card.querySelector('strong')?.textContent || `Completed item ${index+1}`;
      const id=source?.dataset.logComplete || source?.dataset.fitnessLogComplete || '';
      return `<label class="bl-completed-routine-row"><input type="checkbox" checked data-completed-proxy="${esc(id)}"><span>${esc(name)}</span></label>`;
    }).join('');
    cards.forEach((card) => { card.hidden=true; });
    const groups=app==='skin' ? $$('#routineLogItems>.routine-log-group') : $$('#fitnessRoutineLogItems>[data-fitness-routine-log-group]');
    groups.forEach((group) => {
      const visible=Array.from(group.children).some((child) => !child.hidden && !child.matches('.routine-log-group-head,.bl-fitness-log-group-head'));
      if (!visible) group.hidden=true;
    });
  }

  function addFitnessExerciseOrderControls() {
    if (app!=='fitness') return;
    const rows=$$('#exerciseList>.ex-row');
    rows.forEach((row,index) => {
      const wrap=row.querySelector('.ex-remove-wrap');
      if (!wrap) return;
      let order=wrap.querySelector('.bl-exercise-order');
      if (!order) {
        order=document.createElement('span');order.className='bl-exercise-order';
        order.innerHTML='<button type="button" class="tiny-btn" data-exercise-move="up" aria-label="Move exercise up">↑</button><button type="button" class="tiny-btn" data-exercise-move="down" aria-label="Move exercise down">↓</button>';
        wrap.prepend(order);
      }
      order.querySelector('[data-exercise-move="up"]').disabled=index===0;
      order.querySelector('[data-exercise-move="down"]').disabled=index===rows.length-1;
    });
  }

  function cleanExerciseValidation() {
    if (app!=='fitness') return;
    $$('#exerciseList .ex-search-input').forEach((input) => {
      input.removeAttribute('required');
      try { input.setCustomValidity(''); } catch (_error) {}
    });
    $$('#exerciseList .ex-select').forEach((select) => {
      select.removeAttribute('required');
      select.setAttribute('aria-hidden','true');
      select.tabIndex=-1;
    });
  }

  function wrapFitnessPlanAvailability() {
    if (app!=='fitness') return;
    const api=global.BASELINE_fitnessPlans;
    if (!api || api.__baselineWeeklyCountAvailabilityV8) return;
    const originalGet=api.getPlansForDate?.bind(api);
    const wrapped=Object.assign({},api,{
      __baselineWeeklyCountAvailabilityV8:true,
      getPlansForDate(date) {
        const today=UI?.todayIso?.() || new Date().toISOString().slice(0,10);
        const target=String(date || today);
        const output=Array.isArray(originalGet?.(target)) ? originalGet(target).slice() : [];
        if (target!==today) return output;
        const existing=new Set(output.map((entry) => Number(entry.planId)));
        (api.getPlans?.() || []).forEach((plan,index) => {
          if (plan?.planJson?.scheduleMode==='specific-days' || existing.has(Number(plan.planId))) return;
          const sessions=Array.isArray(plan.sessions) ? plan.sessions : [];
          const next=sessions.find((session) => String(session.status || '')!=='done');
          if (!next) return;
          output.push({
            planId:Number(plan.planId),
            planName:String(plan.planJson?.name || `Calisthenics Plan ${index+1}`),
            sessionIndex:Number(next.session_index || next.sessionIndex || 1),
            detail:'Available this week',status:'available'
          });
        });
        return output;
      }
    });
    global.BASELINE_fitnessPlans=Object.freeze(wrapped);
  }

  function applyFitnessSummaryFilter() {
    if (app!=='fitness') return;
    const select=$('#fitnessSummaryGroupFilter');
    const target=$('#fitnessExerciseSummary');
    if (!select || !target) return;
    const value=String(select.value || 'all');
    $$('.fitness-summary-group',target).forEach((section) => {
      const groupId=String(section.dataset.summaryGroup || '');
      const cards=$$('.fitness-exercise-summary-item',section);
      let visible=value==='all' || (value.startsWith('group:') && groupId===value.slice(6));
      if (value.startsWith('entity:')) {
        visible=false;
        cards.forEach((card) => {
          const match=String(card.dataset.v4Entity || '')===value.slice(7);
          card.hidden=!match;if (match) visible=true;
        });
      } else cards.forEach((card) => { card.hidden=!visible; });
      section.hidden=!visible;
    });
  }

  function moveSkinGroup(direction,button) {
    const row=button.closest('[data-routine-group]');
    const id=String(row?.dataset.routineGroup || '');
    if (!id) return;
    const state=skinGroupState();
    const index=state.groups.findIndex((group) => String(group.id)===id);
    const next=direction==='up' ? index-1 : index+1;
    if (index<0 || next<0 || next>=state.groups.length) return;
    [state.groups[index],state.groups[next]]=[state.groups[next],state.groups[index]];
    writeJson(`__bl_skincare_routine_groups_v3__::${owner()}`,{ groups:state.groups,assignments:state.assignments,updatedAt:new Date().toISOString() });
    if (owner()!=='guest') {
      fetch('/systems/baseline-natural-skincare/api/routine_groups.php',{ method:'POST',credentials:'same-origin',headers:{ 'Content-Type':'application/json',Accept:'application/json' },body:JSON.stringify({ groups:state.groups,assignments:state.assignments }) }).catch(() => {});
    }
    /* The Skincare group adapter keeps an internal group array. A same-view
       reload is intentional here so that array and persisted order become one
       source of truth immediately, rather than allowing two orders to compete. */
    persistView('plan');
    global.setTimeout(() => global.location.reload(),20);
  }

  function decorateSkinGroupOrder() {
    if (app!=='skin') return;
    const rows=$$('#routineGroupList>[data-routine-group]');
    rows.forEach((row,index) => {
      const head=row.querySelector('.routine-group-row-head');
      if (!head) return;
      let controls=head.querySelector('.bl-skin-group-order');
      if (!controls) {
        controls=document.createElement('span');controls.className='bl-skin-group-order';
        controls.innerHTML='<button type="button" class="routine-mini" data-skin-group-move="up" aria-label="Move group up">↑</button><button type="button" class="routine-mini" data-skin-group-move="down" aria-label="Move group down">↓</button>';
        head.appendChild(controls);
      }
      controls.querySelector('[data-skin-group-move="up"]').disabled=index===0;
      controls.querySelector('[data-skin-group-move="down"]').disabled=index===rows.length-1;
    });
  }

  function groupedMoveDistance(itemId,direction) {
    const routine=skinRoutineState().items;
    const data=skinGroupState();
    const groupId=data.assignments[itemId];
    if (!groupId) return 0;
    const index=routine.findIndex((item) => String(item.id)===String(itemId));
    if (index<0) return 0;
    if (direction==='up') {
      for (let cursor=index-1;cursor>=0;cursor-=1) if (data.assignments[routine[cursor]?.id]===groupId) return index-cursor;
    } else {
      for (let cursor=index+1;cursor<routine.length;cursor+=1) if (data.assignments[routine[cursor]?.id]===groupId) return cursor-index;
    }
    return 0;
  }

  function startGroupedMove(button) {
    if (groupedMoveRunning) return;
    const article=button.closest('[data-routine-item]');
    const itemId=String(article?.dataset.routineItem || button.dataset.id || '');
    const direction=button.dataset.move==='up' ? 'up' : 'down';
    let remaining=groupedMoveDistance(itemId,direction);
    if (remaining<=0) return;
    groupedMoveRunning=true;
    const step=() => {
      if (remaining<=0) { groupedMoveRunning=false;schedule();return; }
      const current=document.querySelector(`#routineItems [data-routine-item="${CSS.escape(itemId)}"] [data-move="${direction}"]`);
      if (!current || current.disabled) { groupedMoveRunning=false;schedule();return; }
      remaining-=1;
      current.dispatchEvent(new MouseEvent('click',{ bubbles:true,cancelable:true,view:global }));
      global.requestAnimationFrame(step);
    };
    global.requestAnimationFrame(step);
  }

  function apply() {
    frame=0;
    moveVisibilityControl();
    removeDuplicateControls();
    if (app==='skin') {
      expandSkinProducts();
      ensureSkinSummaryFilter();
      applySkinSummaryFilter();
      ensureGroupCheckboxes();
      decorateSkinGroupOrder();
    } else {
      applyFitnessSummaryFilter();
      collapseFitnessLogDetails();
      addFitnessExerciseOrderControls();
      cleanExerciseValidation();
      wrapFitnessPlanAvailability();
    }
    renderCompletedDisclosure();
    decorateCalendar();
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(apply);
  }

  function watchRoot() {
    const root=app==='skin' ? $('#routine') : $('#my-plan');
    if (!root || typeof MutationObserver==='undefined') return;
    const observer=new MutationObserver((mutations) => {
      /* One observer only; it never renders core content. It batches lightweight
         decoration after the owning system has finished its render. */
      if (mutations.some((mutation) => mutation.type==='childList')) schedule();
    });
    observer.observe(root,{ childList:true,subtree:true });
    observers.push(observer);
  }

  function bindEvents() {
    document.addEventListener('click',(event) => {
      const main=event.target?.closest?.('[data-routine-view],[data-fitness-routine-view]');
      if (main) {
        const value=main.dataset.routineView || main.dataset.fitnessRoutineView;
        if (['log','summary','plan','public'].includes(value)) persistView(value,app==='fitness' ? requestedView().plan : '');
      }
      const plan=event.target?.closest?.('[data-fitness-plan-view]');
      if (plan) persistView('plan',String(plan.dataset.fitnessPlanView || 'calisthenics'));

      const marker=event.target?.closest?.('[data-calendar-summary-filter]');
      if (marker) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        const filter=String(marker.dataset.calendarSummaryFilter || '');
        if (app==='skin') {
          $('[data-routine-view="summary"]')?.click();
          const select=ensureSkinSummaryFilter();if (select) { select.value=filter;select.dispatchEvent(new Event('change',{ bubbles:true })); }
        } else {
          $('[data-fitness-routine-view="summary"]')?.click();
          const select=$('#fitnessSummaryGroupFilter');if (select) { select.value=filter;select.dispatchEvent(new Event('change',{ bubbles:true })); }
        }
        return;
      }

      const detail=event.target?.closest?.('[data-log-detail-toggle]');
      if (detail) {
        const card=detail.closest('.fitness-routine-log-item');
        const collapsed=card?.classList.toggle('bl-log-details-collapsed');
        detail.setAttribute('aria-expanded',collapsed ? 'false' : 'true');
        detail.textContent=collapsed ? 'Details' : 'Hide details';
        return;
      }

      const exerciseMove=event.target?.closest?.('[data-exercise-move]');
      if (exerciseMove) {
        event.preventDefault();event.stopPropagation();
        const row=exerciseMove.closest('.ex-row');
        if (!row) return;
        if (exerciseMove.dataset.exerciseMove==='up') {
          const previous=row.previousElementSibling;
          if (previous?.classList.contains('ex-row')) row.parentElement.insertBefore(row,previous);
        } else {
          const next=row.nextElementSibling;
          if (next?.classList.contains('ex-row')) row.parentElement.insertBefore(next,row);
        }
        addFitnessExerciseOrderControls();
        document.dispatchEvent(new CustomEvent('baseline:fitness-generator-order-changed'));
        return;
      }

      const groupMove=event.target?.closest?.('[data-skin-group-move]');
      if (groupMove) { event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();moveSkinGroup(groupMove.dataset.skinGroupMove,groupMove);return; }

      if (app==='skin' && !groupedMoveRunning) {
        const move=event.target?.closest?.('#routineItems [data-move]');
        if (move && groupedMoveDistance(String(move.closest('[data-routine-item]')?.dataset.routineItem || move.dataset.id || ''),move.dataset.move==='up'?'up':'down')>0) {
          event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();startGroupedMove(move);return;
        }
      }
    },true);

    document.addEventListener('pointerdown',(event) => {
      if (event.target?.closest?.('.ex-picker-menu,.fitness-activity-menu,.routine-action-menu')) event.stopPropagation();
    },true);

    document.addEventListener('change',(event) => {
      if (event.target?.id==='skinRoutineSummaryFilter' || event.target?.id==='fitnessSummaryGroupFilter') schedule();
      const groupBox=event.target?.closest?.('[data-v8-group-complete]');
      if (groupBox && !completingGroup) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();
        let ids=[];try { ids=JSON.parse(groupBox.dataset.itemIds || '[]'); } catch (_error) {}
        completingGroup=true;
        ids.forEach((id) => {
          const box=document.querySelector(`#routineLogItems [data-log-complete="${CSS.escape(String(id))}"]`);
          if (box && box.checked!==groupBox.checked) { box.checked=groupBox.checked;box.dispatchEvent(new Event('change',{ bubbles:true })); }
        });
        completingGroup=false;schedule();
      }
      const proxy=event.target?.closest?.('[data-completed-proxy]');
      if (proxy && !proxy.checked) {
        const id=String(proxy.dataset.completedProxy || '');
        const source=app==='skin' ? document.querySelector(`[data-log-complete="${CSS.escape(id)}"]`) : document.querySelector(`[data-fitness-log-complete="${CSS.escape(id)}"]`);
        if (source) { source.checked=false;source.dispatchEvent(new Event('change',{ bubbles:true })); }
      }
    },true);

    ['baseline:skincare-routine-updated','baseline:fitness-routine-updated','baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed','baseline:fitness-summary-rendered'].forEach((name) => document.addEventListener(name,schedule));
    global.addEventListener('pageshow',() => { restoreView();schedule(); });
  }

  function boot() {
    injectStyles();bindEvents();watchRoot();
    restoreView();schedule();
    [80,240,600,1200].forEach((delay) => global.setTimeout(() => { restoreView();schedule(); },delay));
    document.documentElement.setAttribute('data-baseline-routine-authority','v8-coherent');
  }

  global.addEventListener('pagehide',() => observers.forEach((observer) => observer.disconnect()),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);