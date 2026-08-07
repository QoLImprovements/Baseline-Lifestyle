/* Baseline Lifestyle — shared My Routine experience authority v9.

   This module NEVER owns routine data and NEVER creates a competing Log,
   Summary, Plan or Public renderer. It normalises the DOM produced by each
   system adapter so Skincare, Fitness and future My Routine systems share the
   same interaction and presentation contract.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_EXPERIENCE_V9__) return;
  global.__BASELINE_ROUTINE_EXPERIENCE_V9__=true;

  const document=global.document;
  const app=document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  const root=app==='skin' ? document.getElementById('routine') : document.getElementById('my-plan');
  if (!root) return;
  const $=(selector,scope=document) => scope?.querySelector?.(selector) || null;
  const $$=(selector,scope=document) => Array.from(scope?.querySelectorAll?.(selector) || []);
  let observer=null;
  let frame=0;
  let patching=false;

  function injectCss() {
    if (document.querySelector('link[data-baseline-routine-experience-v9]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='/sitewide/css/baseline-routine-experience-v9.css?v=BASELINE_ROUTINE_EXPERIENCE_20260807_1';
    link.dataset.baselineRoutineExperienceV9='true';
    document.head.appendChild(link);
  }

  function esc(value) {
    return String(value==null?'':value).replace(/[&<>"']/g,(character) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[character]));
  }

  function optionRows(select,query='') {
    const words=String(query || '').trim().toLocaleLowerCase('en-GB').split(/\s+/).filter(Boolean);
    const rows=[];
    let lastGroup='';
    Array.from(select?.options || []).forEach((option) => {
      if (!option.value) return;
      const group=option.parentElement?.tagName==='OPTGROUP' ? String(option.parentElement.label || '') : '';
      const text=String(option.textContent || '').trim();
      const haystack=`${text} ${group}`.toLocaleLowerCase('en-GB');
      if (words.length && !words.every((word) => haystack.includes(word))) return;
      if (group && group!==lastGroup) {
        rows.push({ type:'group',label:group });
        lastGroup=group;
      }
      rows.push({ type:'option',value:option.value,label:text });
    });
    return rows;
  }

  function searchableSignature(select) {
    return Array.from(select?.options || []).map((option) => `${option.parentElement?.tagName==='OPTGROUP'?option.parentElement.label:''}:${option.value}:${option.textContent}`).join('|');
  }

  function renderSearchMenu(wrap,query='') {
    const select=wrap?._sourceSelect;
    const menu=$('.bl-search-select-menu',wrap);
    if (!select || !menu) return;
    const rows=optionRows(select,query);
    menu.innerHTML=rows.length ? rows.map((row) => row.type==='group'
      ? `<div class="bl-search-select-group">${esc(row.label)}</div>`
      : `<button type="button" class="bl-search-select-option" data-search-select-value="${esc(row.value)}">${esc(row.label)}</button>`).join('')
      : '<div class="bl-search-select-group">No matching routine item</div>';
  }

  function syncSearchControl(select) {
    const wrap=select?._searchWrap;
    if (!wrap) return;
    const input=$('input[role="combobox"]',wrap);
    const option=select.options[select.selectedIndex];
    if (input && document.activeElement!==input) input.value=option?.value ? String(option.textContent || '').trim() : 'All routine items';
    const signature=searchableSignature(select);
    if (wrap.dataset.optionSignature!==signature) {
      wrap.dataset.optionSignature=signature;
      renderSearchMenu(wrap,input?.value || '');
    }
  }

  function ensureSearchableSelect(select,label='Filter routine summary') {
    if (!select) return;
    if (select._searchWrap?.isConnected) { syncSearchControl(select);return; }
    select.classList.add('bl-search-select-source');
    const wrap=document.createElement('div');
    wrap.className='bl-search-select';
    wrap._sourceSelect=select;
    wrap.innerHTML=`<input type="search" role="combobox" aria-autocomplete="list" aria-expanded="false" autocomplete="off" aria-label="${esc(label)}" placeholder="Type or choose a routine group or task…"><button type="button" class="bl-search-select-toggle" aria-label="Open routine summary filter" aria-expanded="false">⌄</button><div class="bl-search-select-menu" role="listbox" hidden></div>`;
    select.insertAdjacentElement('afterend',wrap);
    select._searchWrap=wrap;
    const input=$('input',wrap);const toggle=$('.bl-search-select-toggle',wrap);const menu=$('.bl-search-select-menu',wrap);

    function open() {
      renderSearchMenu(wrap,input.value);
      menu.hidden=false;input.setAttribute('aria-expanded','true');toggle.setAttribute('aria-expanded','true');
    }
    function close() { menu.hidden=true;input.setAttribute('aria-expanded','false');toggle.setAttribute('aria-expanded','false'); }
    function choose(value) {
      if (!Array.from(select.options).some((option) => option.value===value)) return;
      select.value=value;
      const option=select.options[select.selectedIndex];
      input.value=option?.value ? String(option.textContent || '').trim() : 'All routine items';
      select.dispatchEvent(new Event('change',{ bubbles:true }));
      close();
    }
    input.addEventListener('focus',open);
    input.addEventListener('input',open);
    input.addEventListener('keydown',(event) => {
      const options=$$('.bl-search-select-option',menu);
      if (event.key==='ArrowDown') { event.preventDefault();open();options[0]?.focus(); }
      if (event.key==='Enter') {
        const exact=Array.from(select.options).find((option) => option.value && String(option.textContent || '').trim().localeCompare(input.value.trim(),'en-GB',{ sensitivity:'base' })===0);
        if (exact) { event.preventDefault();choose(exact.value); }
        else if (options.length===1) { event.preventDefault();choose(options[0].dataset.searchSelectValue); }
      }
      if (event.key==='Escape') { event.preventDefault();close(); }
    });
    toggle.addEventListener('click',() => menu.hidden ? open() : close());
    menu.addEventListener('click',(event) => {
      const option=event.target.closest('[data-search-select-value]');if (option) choose(option.dataset.searchSelectValue);
    });
    menu.addEventListener('keydown',(event) => {
      const option=event.target.closest('.bl-search-select-option');if (!option) return;
      const options=$$('.bl-search-select-option',menu);const index=options.indexOf(option);
      if (event.key==='ArrowDown') { event.preventDefault();options[Math.min(options.length-1,index+1)]?.focus(); }
      if (event.key==='ArrowUp') { event.preventDefault();index<=0?input.focus():options[index-1]?.focus(); }
      if (event.key==='Enter' || event.key===' ') { event.preventDefault();choose(option.dataset.searchSelectValue); }
      if (event.key==='Escape') { event.preventDefault();close();input.focus(); }
    });
    select.addEventListener('change',() => syncSearchControl(select));
    document.addEventListener('pointerdown',(event) => { if (!event.target.closest('.bl-search-select')) close(); },true);
    syncSearchControl(select);
  }

  function dedupeSummaryControls() {
    const panel=app==='skin' ? $('[data-routine-panel="summary"]',root) : $('[data-fitness-routine-panel="summary"]',root);
    if (!panel) return;
    const canonical=app==='skin' ? $('#skinRoutineSummaryFilter',panel) : $('#fitnessSummaryGroupFilter',panel);
    if (!canonical) return;
    $$('select',panel).forEach((candidate) => {
      if (candidate===canonical) return;
      const text=Array.from(candidate.options || []).map((option) => option.textContent).join(' ').toLocaleLowerCase('en-GB');
      if (/all routine|routine group|individual routine|all groups/.test(text)) {
        const field=candidate.closest('.bl-routine-summary-filter,.field-stack,label');
        if (field && !field.contains(canonical)) field.remove(); else candidate.remove();
      }
    });
    let host=canonical.closest('.bl-routine-summary-filter');
    if (!host) {
      host=document.createElement('div');host.className='bl-routine-summary-filter';
      canonical.parentElement?.insertBefore(host,canonical);host.appendChild(canonical);
    }
    ensureSearchableSelect(canonical,'Filter Routine Summary');
  }

  function cleanGroupCompletionControls() {
    $$('.bl-routine-group-complete',root).forEach((label) => {
      const checkbox=label.querySelector('[data-v8-group-complete]');
      if (checkbox) {
        checkbox.setAttribute('aria-label',checkbox.getAttribute('aria-label') || 'Mark routine group complete');
        checkbox.setAttribute('title',checkbox.getAttribute('title') || 'Mark routine group complete');
      }
      label.querySelectorAll('.sr-only').forEach((node) => {
        if (/Complete group/i.test(String(node.textContent || ''))) node.remove();
      });
    });
  }

  function markerCaption(button) {
    const raw=button.getAttribute('title') || button.getAttribute('aria-label') || '';
    return raw.replace(/^Open Routine Summary:\s*/i,'').replace(/^Open .*Routine Summary:\s*/i,'').trim();
  }

  function normaliseCalendar() {
    $$('.routine-calendar-count',root).forEach((node) => node.remove());
    $$('#fitnessCalendarGrid .fitness-calendar-day>b',root).forEach((node) => node.remove());
    $$('[data-skincare-calendar-view],[data-calendar-view]',root).forEach((button) => {
      button.closest('.routine-calendar-view-tabs,.fitness-calendar-view-tabs')?.classList.add('bl-routine-calendar-toggle');
    });
    $$('.bl-calendar-marker,.bl-routine-calendar-marker',root).forEach((button) => {
      const caption=markerCaption(button);
      if (!caption) return;
      button.dataset.caption=caption;
      let label=$(':scope>.bl-calendar-marker-caption',button);
      if (!label) { label=document.createElement('span');label.className='bl-calendar-marker-caption';button.appendChild(label); }
      if (label.textContent!==caption) label.textContent=caption;
    });
  }

  function openSummaryForMarker(button) {
    const filter=String(button.dataset.calendarSummaryFilter || '');
    const select=app==='skin' ? $('#skinRoutineSummaryFilter',root) : $('#fitnessSummaryGroupFilter',root);
    if (select && filter) {
      let value=filter;
      if (app==='fitness' && !value.startsWith('group:') && !value.startsWith('entity:')) value=`entity:${value}`;
      if (Array.from(select.options || []).some((option) => option.value===value)) {
        select.value=value;select.dispatchEvent(new Event('change',{ bubbles:true }));syncSearchControl(select);
      }
    }
    const tab=app==='skin' ? $('[data-routine-view="summary"]',root) : $('[data-fitness-routine-view="summary"]',root);
    tab?.click();
  }

  function dedupePublicProfileControls(panel) {
    const canonical=app==='skin' ? $('#publicRoutineName',panel) : $('#fitnessPublicRoutineName',panel);
    if (!canonical) return;
    $$('select',panel).forEach((select) => {
      if (select===canonical) return;
      const text=Array.from(select.options || []).map((option) => String(option.textContent || '')).join(' ');
      if (/public profile/i.test(text) || (canonical.value && select.value===canonical.value && select.options.length===canonical.options.length)) {
        const parent=select.closest('.field-stack,label,.routine-public-select,.fitness-public-select-row');
        if (parent && !parent.contains(canonical)) parent.remove(); else select.remove();
      }
    });
  }

  function normaliseVisibility(panel) {
    const id=app==='skin' ? 'routineVisibility' : 'fitnessRoutineVisibility';
    const candidates=$$(`select#${id}`,root);
    if (!candidates.length) return;
    const keep=candidates[0];
    candidates.slice(1).forEach((select) => {
      const parent=select.closest('.routine-visibility-control,.field-stack,label,.bl-release-public-visibility');
      if (parent && !parent.contains(keep)) parent.remove(); else select.remove();
    });
    if (!panel) return;
    let slot=$('.bl-public-visibility-slot',panel);
    if (!slot) {
      slot=document.createElement('label');slot.className='bl-public-visibility-slot';slot.innerHTML='<span>My Routine Visibility</span>';
      const head=$('.routine-public-head,.section-head-actions',panel) || panel.firstElementChild;
      (head || panel).appendChild(slot);
    }
    if (keep.parentElement!==slot) slot.appendChild(keep);
  }

  function normalisePublic() {
    const panel=app==='skin' ? $('[data-routine-panel="public"]',root) : $('[data-fitness-routine-panel="public"]',root);
    if (!panel) return;
    dedupePublicProfileControls(panel);
    normaliseVisibility(panel);
    const button=app==='skin' ? $('#findPublicRoutineBtn',panel) : $('#fitnessViewPublicRoutine',panel);
    button?.classList.add('bl-routine-compact-action');
    $$('.bl-public-v3',panel).forEach((viewer) => {
      viewer.classList.add('bl-routine-experience');
      const head=$('.bl-public-v3-head',viewer);const tabs=$('.bl-public-v3-tabs',viewer);
      if (head && tabs && tabs.parentElement===head) head.appendChild(tabs);
      $$('.bl-public-v3-group',viewer).forEach((section) => section.classList.add('bl-routine-group'));
      $$('.bl-public-v3-item',viewer).forEach((card) => card.classList.add('bl-routine-summary-card'));
      $$('.bl-public-v3-detail-grid',viewer).forEach((grid) => grid.classList.add('bl-routine-summary-grid'));
      $$('.bl-public-v3-detail',viewer).forEach((section) => section.classList.add('bl-routine-summary-section'));
    });
  }

  function skinOwner() {
    try { const auth=global.BASELINE_auth?.get?.();if (auth?.authed) return String(auth.name || auth.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user'; }
    catch (_error) {}
    return 'guest';
  }

  function readJson(key,fallback={}) { try { const raw=global.localStorage?.getItem(key);return raw?JSON.parse(raw):fallback; } catch (_error) { return fallback; } }

  function skinRoutineOrder() {
    const owner=skinOwner();const data=readJson(`__bl_skincare_routine_v1__::${owner}`,{});
    const items=Array.isArray(data.items) ? data.items : Array.isArray(data.routine) ? data.routine : [];
    return new Map(items.map((item,index) => [String(item?.id || ''),index]));
  }

  function normaliseSkinPlanOrder() {
    if (app!=='skin') return;
    const order=skinRoutineOrder();
    $$('.routine-plan-group-body',root).forEach((body) => {
      const items=$$('.routine-item[data-routine-item]',body);
      if (items.length<2) return;
      const sorted=items.slice().sort((a,b) => (order.get(String(a.dataset.routineItem)) ?? 9999)-(order.get(String(b.dataset.routineItem)) ?? 9999));
      if (sorted.some((node,index) => node!==items[index])) sorted.forEach((node) => body.appendChild(node));
    });
  }

  function normaliseSkinPlanHeaders() {
    if (app!=='skin') return;
    $$('.routine-plan-group-head',root).forEach((head) => {
      const direct=Array.from(head.children);
      const count=direct.find((node) => node.tagName==='SPAN' && /action/i.test(node.textContent || ''));
      const button=direct.find((node) => node.matches?.('[data-plan-group-collapse]'));
      if (count) count.classList.add('bl-routine-group-meta');
      if (button && !button.parentElement.classList.contains('bl-routine-group-actions')) {
        const actions=document.createElement('div');actions.className='bl-routine-group-actions';
        button.insertAdjacentElement('beforebegin',actions);actions.appendChild(button);
      }
    });
  }

  function cleanFitnessPlanShell() {
    if (app!=='fitness') return;
    const panel=$('[data-fitness-routine-panel="plan"]',root);if (!panel) return;
    const nav=$(':scope>.fitness-routine-plan-tabs',panel);
    const host=$(':scope>.fitness-routine-plan-panels',panel);
    if (!nav || !host) return;
    let card=$(':scope>.bl-routine-plan-shell-card',panel);
    if (!card) {
      card=document.createElement('section');card.className='card fitness-routine-card bl-routine-card bl-routine-plan-shell-card';
      panel.insertBefore(card,nav);card.appendChild(nav);card.appendChild(host);
    } else {
      if (nav.parentElement!==card) card.appendChild(nav);
      if (host.parentElement!==card) card.appendChild(host);
    }
  }

  function collapseFitnessGroupEditors() {
    if (app!=='fitness') return;
    $$('.bl-v4-group-card',root).forEach((card) => {
      if (card.matches('details.bl-routine-group-editor')) return;
      const section=String(card.dataset.v4GroupCard || 'routine');
      const details=document.createElement('details');details.className='bl-v4-group-card bl-routine-group-editor';details.dataset.v4GroupCard=section;
      details.innerHTML='<summary>Routine Groups</summary><div class="bl-routine-group-editor-body"></div>';
      const body=$('.bl-routine-group-editor-body',details);
      while (card.firstChild) body.appendChild(card.firstChild);
      card.replaceWith(details);
    });
    $$('.bl-v4-group-row',root).forEach((row) => {
      row.classList.add('bl-routine-group-row-clean');
      row.querySelector('.bl-v4-number')?.remove();
      row.querySelector('[data-v4-remove-group]')?.classList.add('bl-routine-group-remove-clean');
    });
  }

  function mergeCalisthenicsPlanCards() {
    if (app!=='fitness') return;
    const panel=$('[data-fitness-plan-panel="calisthenics"], [data-fitness-routine-panel="calisthenics"]',root);
    if (!panel) return;
    const manager=$('#calisthenicsPlanManager',panel);
    if (!manager) return;
    const cards=$$(':scope>.card',panel).filter((card) => card!==manager);
    const target=cards.find((card) => $('#myPlanOut,#currentWorkoutOut,#exerciseList',card)) || cards[0];
    if (!target) return;
    manager.classList.remove('card');manager.classList.add('bl-calisthenics-plan-manager-inline');
    if (manager.parentElement!==target) target.insertBefore(manager,target.firstChild);
    const title=manager.querySelector('h2');if (title) title.textContent='Calisthenics Plans';
    $$(':scope>h2',target).forEach((heading,index) => { if (index>0 || /^Calisthenics$/i.test(heading.textContent || '')) heading.remove(); });
  }

  function singleOptionSelects() {
    if (app!=='fitness') return;
    $$('#exerciseList .ex-row select',root).forEach((select) => {
      const options=Array.from(select.options || []).filter((option) => !option.disabled && option.value!=='' );
      if (options.length!==1) return;
      const field=select.closest('.field-stack,label');if (!field) return;
      field.classList.add('bl-single-option-field');
      let value=$('.bl-single-option-value',field);
      if (!value) { value=document.createElement('div');value.className='bl-single-option-value';select.insertAdjacentElement('afterend',value); }
      value.textContent=String(options[0].textContent || '').trim();
      select.tabIndex=-1;select.setAttribute('aria-hidden','true');
    });
  }

  function normaliseFitnessLog() {
    if (app!=='fitness') return;
    const progress=$('#fitnessRoutineLogProgress',root);
    if (progress && /non-calisthenics/i.test(progress.textContent || '')) progress.textContent=String(progress.textContent || '').replace(/planned non-calisthenics activities/i,'planned routine activities');
    $$('#fitnessRoutineLogItems>.bl-fitness-log-group',root).forEach((section) => section.classList.add('bl-routine-group'));
  }

  function patch() {
    if (patching) return;
    patching=true;
    try {
      root.classList.add('bl-routine-experience');
      dedupeSummaryControls();
      cleanGroupCompletionControls();
      normaliseCalendar();
      normalisePublic();
      normaliseSkinPlanOrder();
      normaliseSkinPlanHeaders();
      cleanFitnessPlanShell();
      collapseFitnessGroupEditors();
      mergeCalisthenicsPlanCards();
      singleOptionSelects();
      normaliseFitnessLog();
      document.documentElement.setAttribute('data-baseline-routine-experience','v9');
    } finally { patching=false; }
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(() => { frame=0;patch(); });
  }

  function bind() {
    document.addEventListener('click',(event) => {
      const marker=event.target?.closest?.('[data-calendar-summary-filter]');
      if (marker && root.contains(marker)) {
        event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();openSummaryForMarker(marker);return;
      }
    },true);
    ['baseline:routine-rendered','baseline:fitness-summary-rendered','baseline:fitness-plans-updated','baseline:routine-settings-changed','baseline:fitness-workout-updated'].forEach((name) => document.addEventListener(name,schedule));
    if (typeof MutationObserver!=='undefined') {
      observer=new MutationObserver(schedule);observer.observe(root,{ childList:true,subtree:true });
    }
  }

  injectCss();bind();patch();
  global.setTimeout(patch,80);global.setTimeout(patch,350);
  global.addEventListener('pagehide',() => { observer?.disconnect();if (frame) global.cancelAnimationFrame(frame); },{ once:true });
})(typeof window!=='undefined'?window:globalThis);
