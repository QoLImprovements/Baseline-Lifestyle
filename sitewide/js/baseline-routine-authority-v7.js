/* Baseline Lifestyle — shared My Routine presentation authority v7.
   System adapters own their data. This module owns only rules that must be
   identical across Skincare and Fitness: stable grouping/numbering, compact
   public controls, filters, and non-destructive post-render decoration. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_AUTHORITY_V7__) return;
  global.__BASELINE_ROUTINE_AUTHORITY_V7__ = true;

  const document = global.document;
  const app = document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;

  const $ = (selector, root = document) => root?.querySelector?.(selector) || null;
  const $$ = (selector, root = document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let frame = 0;
  const observers = [];
  let allowingBaseGroupMove = false;
  let completingGroup = false;

  function owner() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      if (snapshot?.authed) return String(snapshot.name || snapshot.user?.name || 'user').trim().toLocaleLowerCase('en-GB') || 'user';
    } catch (_error) {}
    return 'guest';
  }

  function readJson(key, fallback) {
    try {
      const raw = global.localStorage?.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_error) { return fallback; }
  }

  function skinRoutine() {
    const value = readJson(`__bl_skincare_routine_v1__::${owner()}`, {});
    return Array.isArray(value?.items) ? value.items : Array.isArray(value?.routine) ? value.routine : [];
  }

  function skinGroups() {
    const value = readJson(`__bl_skincare_routine_groups_v3__::${owner()}`, {});
    const groups = Array.isArray(value?.groups)
      ? value.groups.filter((group) => group?.id && group?.title).map((group) => ({ id:String(group.id), title:String(group.title) }))
      : [];
    const valid = new Set(groups.map((group) => group.id));
    const assignments = {};
    Object.entries(value?.assignments && typeof value.assignments === 'object' ? value.assignments : {}).forEach(([itemId,groupId]) => {
      if (valid.has(String(groupId))) assignments[String(itemId)] = String(groupId);
    });
    return { groups,assignments };
  }

  function injectStyles() {
    if ($('#baselineRoutineAuthorityV7Style')) return;
    const style = document.createElement('style');
    style.id = 'baselineRoutineAuthorityV7Style';
    style.textContent = `
      /* Stable numbering is CSS-owned. It therefore cannot disappear while
         a renderer replaces cards or a completion checkbox is saved. */
      #routineItems{counter-reset:blPlanNumber}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped){counter-increment:blPlanNumber}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped)>.routine-plan-group-head>div:first-child{display:flex;align-items:center;gap:12px}
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped)>.routine-plan-group-head>div:first-child::before{
        content:counter(blPlanNumber);display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:999px;
        background:color-mix(in srgb,currentColor 15%,transparent);font-weight:900
      }
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped) .routine-item .routine-order,
      #routineItems>.routine-plan-group:not(.routine-plan-group-ungrouped) .routine-item .bl-v4-number{display:none!important}
      #routineItems>.routine-plan-group-ungrouped .routine-item{counter-increment:blPlanNumber}
      #routineItems>.routine-plan-group-ungrouped .routine-item .routine-order{display:grid!important;place-items:center!important}
      #routineItems>.routine-plan-group-ungrouped .routine-item .routine-order::before{content:counter(blPlanNumber);font-size:inherit}
      #routineItems>.routine-plan-group-ungrouped .routine-item .routine-order{font-size:0!important}

      #routineLogItems{counter-reset:blLogNumber}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"]){counter-increment:blLogNumber}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"])>.routine-log-group-head{display:flex;align-items:center;gap:12px}
      #routineLogItems>.routine-log-group:not([data-bl-ungrouped="true"])>.routine-log-group-head::before{
        content:counter(blLogNumber);display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:999px;
        background:color-mix(in srgb,currentColor 15%,transparent);font-weight:900
      }
      #routineLogItems>.routine-log-group[data-bl-ungrouped="true"]>.routine-log-item{counter-increment:blLogNumber}
      #routineLogItems>.routine-log-group[data-bl-ungrouped="true"]>.routine-log-item::before{
        content:counter(blLogNumber);display:grid;place-items:center;float:left;margin:10px 10px 0 0;width:34px;height:34px;border-radius:999px;
        background:color-mix(in srgb,currentColor 15%,transparent);font-weight:900
      }

      #routineSummary{counter-reset:blSummaryNumber}
      #routineSummary>.routine-summary-group{counter-increment:blSummaryNumber}
      #routineSummary>.routine-summary-group>.routine-summary-group-head,
      #routineSummary>.routine-summary-group>h3{position:relative}
      #routineSummary>.routine-summary-group>.routine-summary-group-head{display:flex;align-items:center;gap:12px}
      #routineSummary>.routine-summary-group>.routine-summary-group-head::before{
        content:counter(blSummaryNumber);display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:999px;
        background:color-mix(in srgb,currentColor 15%,transparent);font-weight:900
      }
      #routineSummary>.routine-summary-group:not([data-bl-ungrouped="true"]) .routine-summary-title>span:first-child{display:none!important}

      .bl-routine-group-complete{display:inline-flex!important;align-items:center!important;margin:0!important;padding:0!important}
      .bl-routine-group-complete input{margin:0!important}
      .bl-v4-number,.bl-routine-group-number{display:none!important}

      /* Prevent cosmetic movement effects inside My Routine while state is
         being committed. A tick/order change should look stationary. */
      #routine :is(.routine-item,.routine-log-item,.routine-summary-item,.routine-plan-group,.routine-log-group),
      #my-plan :is(.fitness-routine-card,.fitness-summary-group,.fitness-exercise-summary-item){
        transition:none!important;animation:none!important
      }

      [data-routine-panel="public"] .routine-card,
      [data-fitness-routine-panel="public"] .fitness-routine-card{padding:18px!important}
      .bl-authority-public-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap}
      .bl-authority-public-head>.bl-authority-public-title{min-width:0;flex:1 1 420px}
      .bl-authority-public-head .bl-release-public-visibility{margin-left:auto!important;align-self:flex-start!important}
    `;
    document.head.appendChild(style);
  }

  function moveVisibilityControl() {
    const panel = app === 'skin' ? $('[data-routine-panel="public"]') : $('[data-fitness-routine-panel="public"]');
    const card = panel?.querySelector(app === 'skin' ? '.routine-card' : '.fitness-routine-card');
    if (!card) return;
    const select = document.getElementById(app === 'skin' ? 'routineVisibility' : 'fitnessRoutineVisibility');
    if (!select) return;
    let control = select.closest('.bl-release-public-visibility,.bl-v4-visibility,.routine-visibility-control,label');
    if (!control) {
      control = document.createElement('label');
      control.appendChild(select);
    }
    control.classList.add('bl-release-public-visibility');
    control.hidden = false;
    let text = control.querySelector(':scope>span');
    if (!text) {
      text = document.createElement('span');
      control.insertBefore(text,control.firstChild);
    }
    text.textContent = 'My Routine Visibility';

    let row = card.querySelector(':scope>.bl-authority-public-head');
    if (!row) {
      const heading = Array.from(card.children).find((child) => child.matches?.('h1,h2,h3') || child.querySelector?.('h1,h2,h3'));
      if (!heading) return;
      const title = document.createElement('div');
      title.className = 'bl-authority-public-title';
      if (heading.matches?.('h1,h2,h3')) {
        const next = heading.nextElementSibling;
        title.appendChild(heading);
        if (next && next.matches?.('p,.note')) title.appendChild(next);
      } else {
        title.appendChild(heading);
      }
      row = document.createElement('div');
      row.className = 'bl-authority-public-head';
      card.insertBefore(row,card.firstChild);
      row.appendChild(title);
    }
    if (control.parentElement !== row) row.appendChild(control);
  }

  function expandSkinProducts() {
    if (app !== 'skin') return;
    const library = global.BASELINE_SKINCARE_PRODUCT_LIBRARY;
    const products = Array.isArray(library?.PRODUCTS) ? library.PRODUCTS : [];
    if (!products.length) return;
    const byBrand = new Map();
    products.forEach((product) => {
      const brand = String(product?.brand || 'Other').trim() || 'Other';
      if (!byBrand.has(brand)) byBrand.set(brand,[]);
      byBrand.get(brand).push(product);
    });
    const brands = Array.from(byBrand.keys()).sort((a,b) => a.localeCompare(b,'en-GB',{ sensitivity:'base' }));
    const signature = products.map((product) => `${product.id}:${product.brand}:${product.name}`).join('|');
    $$('#routineItems [data-field="productSelection"]').forEach((select) => {
      if (select.dataset.blFullProductCatalogue === signature) return;
      const selected = String(select.value || '');
      const currentOptions = Array.from(select.querySelectorAll('optgroup[label="My Recipes"] option')).map((option) => ({ value:option.value,text:option.textContent }));
      const recipes = currentOptions.length ? `<optgroup label="My Recipes">${currentOptions.map((option) => `<option value="${option.value.replace(/"/g,'&quot;')}">${String(option.text).replace(/</g,'&lt;')}</option>`).join('')}</optgroup>` : '';
      const catalogue = brands.map((brand) => `<optgroup label="${brand.replace(/"/g,'&quot;')}">${byBrand.get(brand).slice().sort((a,b) => String(a.name).localeCompare(String(b.name),'en-GB',{ sensitivity:'base' })).map((product) => `<option value="product:${String(product.id).replace(/"/g,'&quot;')}">${String(product.name).replace(/</g,'&lt;')}</option>`).join('')}</optgroup>`).join('');
      select.innerHTML = `<option value="">No product selected</option>${recipes}${catalogue}<optgroup label="Other"><option value="custom">Custom product…</option></optgroup>`;
      if (Array.from(select.options).some((option) => option.value === selected)) select.value = selected;
      select.dataset.blFullProductCatalogue = signature;
    });
  }

  function normalTitle(value) {
    return String(value || '').replace(/^\s*\d+\.?\s*/,'').trim().toLocaleLowerCase('en-GB');
  }

  function setVisible(node,visible) {
    if (!node) return;
    node.hidden = !visible;
    if (visible) node.style.removeProperty('display');
  }

  function applySkinSummaryFilter() {
    if (app !== 'skin') return;
    const select = $('#skinRoutineSummaryFilter');
    const target = $('#routineSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const data = skinGroups();
    const routine = skinRoutine();
    const byGroup = new Map();
    let ungrouped = null;
    $$('.routine-summary-group',target).forEach((section) => {
      const title = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === title);
      if (group) byGroup.set(group.id,section);
      else if (/ungrouped|no routine group/i.test(title)) ungrouped = section;
      section.dataset.blUngrouped = group ? 'false' : 'true';
    });
    const desired = data.groups.map((group) => byGroup.get(group.id)).filter(Boolean);
    if (ungrouped) desired.push(ungrouped);
    const current = $$('.routine-summary-group',target);
    current.forEach((section) => { if (!desired.includes(section)) desired.push(section); });
    if (current.length === desired.length && !current.every((section,index) => desired[index] === section)) {
      const fragment = document.createDocumentFragment();
      desired.forEach((section) => fragment.appendChild(section));
      target.appendChild(fragment);
    }
    const itemId = value.startsWith('item:') ? value.slice(5) : '';
    const item = itemId ? routine.find((candidate) => String(candidate.id) === itemId) : null;
    const itemGroup = item ? String(data.assignments[itemId] || '') : '';
    $$('.routine-summary-group',target).forEach((section) => {
      const title = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === title);
      const groupId = group?.id || '';
      let showSection = value === 'all';
      if (value.startsWith('group:')) showSection = groupId === value.slice(6);
      if (item) showSection = itemGroup ? groupId === itemGroup : section === ungrouped;
      $$('.routine-summary-item',section).forEach((card) => {
        let show = showSection;
        if (item) {
          const titleText = String(card.querySelector('.routine-summary-title strong')?.textContent || '').trim();
          show = showSection && titleText.localeCompare(String(item.title || '').trim(),'en-GB',{ sensitivity:'base' }) === 0;
        }
        setVisible(card,show);
      });
      setVisible(section,showSection);
    });
  }

  function fitnessRoutine() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[] }; }
    catch (_error) { return { activities:[] }; }
  }

  function fitnessSettings() {
    try { return global.BASELINE_RoutineSystem?.readSettings?.() || {}; }
    catch (_error) { return {}; }
  }

  function selectedPlanId() {
    try { return Number(global.BASELINE_fitnessPlans?.getSelectedPlanId?.() || 0); }
    catch (_error) { return 0; }
  }

  function fitnessEntityKey(card,activities) {
    const explicit = String(card?.dataset?.v4Entity || '');
    const title = String(card?.querySelector?.('.routine-summary-title strong,.fitness-summary-title strong,h3,h4')?.textContent || '').trim();
    const badge = String(card?.querySelector?.('.badge')?.textContent || '').toLocaleLowerCase('en-GB');
    if (badge.includes('calisthenics')) return selectedPlanId() ? `plan:${selectedPlanId()}` : explicit;
    const activity = activities.find((item) => String(item?.name || '').trim().localeCompare(title,'en-GB',{ sensitivity:'base' }) === 0);
    return activity ? `activity:${String(activity.id)}` : explicit;
  }

  function applyFitnessSummaryFilter() {
    if (app !== 'fitness') return;
    const select = $('#fitnessSummaryGroupFilter');
    const target = $('#fitnessExerciseSummary');
    if (!select || !target) return;
    const value = String(select.value || 'all');
    const routine = fitnessRoutine();
    const activities = Array.isArray(routine.activities) ? routine.activities : [];
    const settings = fitnessSettings();
    const assignments = settings.fitnessRoutineAssignments && typeof settings.fitnessRoutineAssignments === 'object' ? settings.fitnessRoutineAssignments : {};
    $$('.fitness-summary-group',target).forEach((section) => {
      let count = 0;
      $$('.fitness-exercise-summary-item',section).forEach((card) => {
        const key = fitnessEntityKey(card,activities);
        if (key) card.dataset.v4Entity = key;
        let show = value === 'all';
        if (value.startsWith('entity:')) show = key === value.slice(7);
        else if (value.startsWith('group:')) show = String(assignments[key] || '') === value.slice(6);
        setVisible(card,show);
        if (show) count += 1;
      });
      setVisible(section,count > 0);
    });
  }

  function enableStartDate() {
    if (app !== 'fitness') return;
    const input = $('#startDate');
    if (!input) return;
    input.disabled = false;
    input.readOnly = false;
    if (input.dataset.blV7DateBound === 'true') return;
    input.dataset.blV7DateBound = 'true';
    input.addEventListener('click',() => { try { input.showPicker?.(); } catch (_error) {} });
    input.addEventListener('keydown',(event) => {
      if ((event.key === 'Enter' || event.key === ' ') && typeof input.showPicker === 'function') {
        event.preventDefault();
        try { input.showPicker(); } catch (_error) {}
      }
    });
  }

  function decorateSkinSections() {
    if (app !== 'skin') return;
    const data = skinGroups();
    const groupedIds = new Set(data.groups.map((group) => group.id));
    $$('#routineItems>.routine-plan-group').forEach((section) => {
      section.dataset.blUngrouped = section.classList.contains('routine-plan-group-ungrouped') ? 'true' : 'false';
    });
    $$('#routineLogItems>.routine-log-group').forEach((section) => {
      const title = normalTitle(section.querySelector('h3')?.textContent);
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === title);
      section.dataset.blUngrouped = group && groupedIds.has(group.id) ? 'false' : 'true';
    });
  }

  function ensureGroupCheckboxes() {
    if (app !== 'skin') return;
    const data = skinGroups();
    $$('#routineLogItems>.routine-log-group').forEach((section) => {
      if (section.dataset.blUngrouped === 'true') return;
      const head = section.querySelector(':scope>.routine-log-group-head');
      const title = String(head?.querySelector('h3')?.textContent || '').trim();
      const group = data.groups.find((candidate) => normalTitle(candidate.title) === normalTitle(title));
      if (!head || !group) return;
      const boxes = $$('.routine-log-item [data-log-complete]',section);
      let label = head.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label = document.createElement('label');
        label.className = 'bl-routine-group-complete';
        label.innerHTML = '<input type="checkbox" data-v7-group-complete="true">';
        head.appendChild(label);
      }
      const checkbox = label.querySelector('[data-v7-group-complete]');
      const checked = boxes.filter((box) => box.checked).length;
      checkbox.checked = boxes.length > 0 && checked === boxes.length;
      checkbox.indeterminate = checked > 0 && checked < boxes.length;
      checkbox.disabled = boxes.length === 0;
      checkbox.dataset.itemIds = JSON.stringify(boxes.map((box) => String(box.dataset.logComplete || '')).filter(Boolean));
      checkbox.setAttribute('aria-label',`Mark all actions in ${group.title} complete`);
      label.title = `Mark all actions in ${group.title} complete`;
    });
  }

  function calendarMarkers(date) {
    const routineValue = readJson(`__bl_skincare_routine_v1__::${owner()}`, {});
    const items = Array.isArray(routineValue?.items) ? routineValue.items : [];
    const logs = routineValue?.logs && typeof routineValue.logs === 'object' ? routineValue.logs : {};
    const data = skinGroups();
    const entries = logs[date] || {};
    const ungrouped = items.filter((item) => !data.assignments[item.id]);
    const markers = [];
    const seen = new Set();
    Object.entries(entries).forEach(([itemId,entry]) => {
      if (!entry?.completed) return;
      const item = items.find((candidate) => String(candidate.id) === String(itemId));
      if (!item) return;
      const groupId = data.assignments[itemId];
      if (groupId) {
        if (seen.has(`group:${groupId}`)) return;
        seen.add(`group:${groupId}`);
        const index = data.groups.findIndex((group) => group.id === groupId);
        if (index >= 0) markers.push({ number:index+1,caption:data.groups[index].title });
      } else {
        const index = ungrouped.findIndex((candidate) => String(candidate.id) === String(itemId));
        if (index >= 0) markers.push({ number:data.groups.length+index+1,caption:item.title });
      }
    });
    return markers.sort((a,b) => a.number-b.number);
  }

  function decorateSkinCalendar() {
    if (app !== 'skin') return;
    $$('.routine-calendar-card [data-calendar-date]').forEach((day) => {
      const markers = calendarMarkers(day.dataset.calendarDate);
      const signature = markers.map((marker) => `${marker.number}:${marker.caption}`).join('|');
      let wrap = day.querySelector(':scope>.bl-v7-calendar-markers');
      if (!markers.length) { wrap?.remove(); return; }
      if (!wrap) {
        wrap = document.createElement('span');
        wrap.className = 'bl-v7-calendar-markers';
        day.appendChild(wrap);
      }
      if (wrap.dataset.signature === signature) return;
      wrap.dataset.signature = signature;
      wrap.replaceChildren(...markers.map((marker) => {
        const badge = document.createElement('span');
        badge.className = 'bl-v4-calendar-marker';
        badge.textContent = String(marker.number);
        badge.title = marker.caption;
        badge.setAttribute('aria-label',marker.caption);
        return badge;
      }));
    });
  }

  function groupedMoveDistance(itemId,direction) {
    const routine = skinRoutine();
    const data = skinGroups();
    const groupId = data.assignments[itemId];
    if (!groupId) return 0;
    const index = routine.findIndex((item) => String(item.id) === String(itemId));
    if (index < 0) return 0;
    if (direction === 'up') {
      for (let cursor=index-1; cursor>=0; cursor-=1) if (data.assignments[routine[cursor]?.id] === groupId) return index-cursor;
    } else {
      for (let cursor=index+1; cursor<routine.length; cursor+=1) if (data.assignments[routine[cursor]?.id] === groupId) return cursor-index;
    }
    return 0;
  }

  function handleGroupedMove(event) {
    if (app !== 'skin' || allowingBaseGroupMove) return false;
    const button = event.target?.closest?.('#routineItems [data-move]');
    if (!button) return false;
    const article = button.closest('[data-routine-item]');
    const itemId = String(article?.dataset.routineItem || button.dataset.id || '');
    const direction = button.dataset.move === 'up' ? 'up' : 'down';
    const distance = groupedMoveDistance(itemId,direction);
    if (distance <= 0) return false;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    allowingBaseGroupMove = true;
    try {
      for (let step=0; step<distance; step+=1) {
        const current = document.querySelector(`#routineItems [data-routine-item="${CSS.escape(itemId)}"] [data-move="${direction}"]`);
        if (!current || current.disabled) break;
        current.click();
      }
    } finally {
      allowingBaseGroupMove = false;
    }
    try { document.dispatchEvent(new CustomEvent('baseline:skincare-routine-updated',{ detail:{ source:'group-aware-reorder',itemId,direction } })); } catch (_error) {}
    schedule();
    return true;
  }

  function apply() {
    frame = 0;
    moveVisibilityControl();
    if (app === 'skin') {
      expandSkinProducts();
      decorateSkinSections();
      ensureGroupCheckboxes();
      applySkinSummaryFilter();
      decorateSkinCalendar();
    } else {
      applyFitnessSummaryFilter();
      enableStartDate();
    }
  }

  function schedule() {
    if (frame) return;
    frame = global.requestAnimationFrame(apply);
  }

  function watch(selector) {
    const target = $(selector);
    if (!target || typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver(schedule);
    observer.observe(target,{ childList:true,subtree:false });
    observers.push(observer);
  }

  function bindEvents() {
    document.addEventListener('click',(event) => {
      if (handleGroupedMove(event)) return;
      if (event.target?.closest?.('[data-fitness-routine-view],[data-fitness-plan-view],[data-routine-view],[data-skincare-calendar-view],[data-skincare-calendar-move]')) global.setTimeout(schedule,0);
    },true);
    document.addEventListener('change',(event) => {
      const groupBox = event.target?.closest?.('[data-v7-group-complete]');
      if (groupBox && !completingGroup) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        let ids = [];
        try { ids = JSON.parse(groupBox.dataset.itemIds || '[]'); } catch (_error) {}
        completingGroup = true;
        try {
          ids.forEach((id) => {
            const box = document.querySelector(`#routineLogItems [data-log-complete="${CSS.escape(String(id))}"]`);
            if (box && box.checked !== groupBox.checked) {
              box.checked = groupBox.checked;
              box.dispatchEvent(new Event('change',{ bubbles:true }));
            }
          });
        } finally { completingGroup = false; }
        schedule();
        return;
      }
      if (['skinRoutineSummaryFilter','fitnessSummaryGroupFilter'].includes(event.target?.id)
        || event.target?.closest?.('#routineItems [data-field="productSelection"],#routineLogItems [data-log-complete]')) global.setTimeout(schedule,0);
    },true);
    document.addEventListener('baseline:skincare-routine-updated',schedule);
    document.addEventListener('baseline:fitness-plans-updated',schedule);
    document.addEventListener('baseline:fitness-workout-updated',schedule);
    document.addEventListener('baseline:routine-settings-changed',schedule);
    global.addEventListener('pageshow',schedule);
  }

  function boot() {
    injectStyles();
    if (app === 'skin') {
      watch('#routineItems');
      watch('#routineSummary');
      watch('#routineLogItems');
      watch('#routineCalendarGrid');
    } else {
      watch('#fitnessExerciseSummary');
    }
    bindEvents();
    schedule();
    document.documentElement.setAttribute('data-baseline-routine-authority','v7');
  }

  global.addEventListener('pagehide',() => observers.forEach((observer) => observer.disconnect()),{ once:true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
