/* Baseline Lifestyle — canonical My Routine experience v10.

   SITEWIDE CONTRACT — DO NOT ADD SYSTEM-SPECIFIC COPIES
   -----------------------------------------------------
   This is the final, shared presentation/interaction normaliser for My Routine.
   Skincare and Fitness continue to own their data, but both must pass through
   this same layer for typography, dropdowns, calendars, summary geometry,
   public read-only views, visibility controls, date controls and terminology.

   Keep this layer non-destructive: do not create another data renderer here.
   It decorates the DOM after the owning renderer finishes, so future systems
   can opt in without copying UI rules. */
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_ROUTINE_EXPERIENCE_V10__) return;
  global.__BASELINE_ROUTINE_EXPERIENCE_V10__=true;

  const document=global.document;
  const app=document.documentElement.dataset.app || document.body?.dataset.app || '';
  if (!['skin','fitness'].includes(app)) return;
  const rootSelector=app==='skin' ? '#routine' : '#my-plan';
  const $=(selector,root=document) => root?.querySelector?.(selector) || null;
  const $$=(selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  let frame=0;
  let observer=null;
  let removing=false;

  const COPY_TO_REMOVE=new Set([
    'Record calisthenics and other planned fitness activity for the selected date.',
    'Search the grouped catalogue, add an activity, then set its schedule and the details relevant to that activity.',
    'Keep separate plans for muscle groups, sports preparation or training days.',
    'The current workout is shown first. Completed workouts and upcoming workouts are separated into their own tabs.',
    'Current workout available within your weekly frequency.',
    'Type to find an action or open the grouped dropdown, then set its time, frequency, benefit summary and personal notes.'
  ]);

  function loadCss() {
    if (document.querySelector('link[data-baseline-routine-experience-v10-css]')) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='/sitewide/css/baseline-routine-experience-v10.css?v=BASELINE_ROUTINE_EXPERIENCE_20260808_1';
    link.setAttribute('data-baseline-routine-experience-v10-css','true');
    document.head.appendChild(link);
  }

  function todayIso() {
    try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); }
    catch (_error) { return new Date().toISOString().slice(0,10); }
  }

  function selectedPlan() {
    try {
      const api=global.BASELINE_fitnessPlans;
      const plans=api?.getPlans?.() || [];
      const id=Number(api?.getSelectedPlanId?.() || 0);
      return plans.find((plan) => Number(plan?.planId)===id) || plans[0] || null;
    } catch (_error) { return null; }
  }

  function planName(plan) {
    return String(plan?.planJson?.name || plan?.name || 'Calisthenics').trim() || 'Calisthenics';
  }

  function walkText(node,callback) {
    if (!node) return;
    const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
    const nodes=[];let current=null;
    while ((current=walker.nextNode())) nodes.push(current);
    nodes.forEach((textNode) => { const next=callback(String(textNode.nodeValue || ''));if (typeof next==='string' && next!==textNode.nodeValue) textNode.nodeValue=next; });
  }

  function removeUnwantedCopy(root) {
    $$('p,.note,.status',root).forEach((node) => {
      const text=String(node.textContent || '').replace(/\s+/g,' ').trim();
      if (COPY_TO_REMOVE.has(text)) { node.classList.add('bl-v10-empty-copy');node.remove(); }
    });
  }

  function normaliseTerminology(root) {
    const exact=new Map([
      ['Ungrouped routine actions','Individual Routine Steps'],
      ['Ungrouped routine items','Individual Routine Steps'],
      ['Ungrouped','Individual Routine Steps'],
      ['All routine items','All Routine Steps'],
      ['All routine actions','All Routine Steps'],
      ['Routine groups','Routine Groups'],
      ['Individual routine items','Individual Routine Steps'],
      ['Individual routine actions','Individual Routine Steps'],
      ['No matching routine item.','No matching Routine Step.'],
      ['No matching routine items.','No matching Routine Steps.']
    ]);
    $$('h1,h2,h3,h4,h5,span,div,option,optgroup,label,button',root).forEach((node) => {
      if (node.children.length && !node.matches('option,optgroup')) return;
      const text=String(node.textContent || '').trim();
      if (exact.has(text)) node.textContent=exact.get(text);
    });
    const searchInput=$('#skinRoutineSummaryFilterSearch',root) || $('.bl-search-select input',root);
    if (searchInput && /All routine items/i.test(searchInput.value || '')) searchInput.value='All Routine Steps';
  }

  function ensureSelectShell(select) {
    if (!select || select.hidden || select.classList.contains('bl-search-select-source') || select.closest('.bl-select')) return;
    if (select.parentElement?.classList.contains('bl-routine-select-shell')) return;
    const shell=document.createElement('span');shell.className='bl-routine-select-shell';
    select.parentElement?.insertBefore(shell,select);shell.appendChild(select);
  }

  function normaliseDropdowns(root) {
    $$('select',root).forEach((select) => ensureSelectShell(select));
    $$('.bl-search-select-toggle,[data-activity-toggle],.routine-action-toggle,.ex-picker-toggle',root).forEach((button) => {
      button.classList.add('bl-routine-chevron-button');
      const text=String(button.textContent || '').trim();
      if (['⌄','⌃','▾','▼','v','V'].includes(text)) button.textContent='';
    });
    $$('.bl-select',root).forEach((wrap) => wrap.classList.add('bl-routine-select-shell'));
  }

  function removeDuplicateRoutineGroupHeading(root) {
    if (app!=='fitness') return;
    $$('.bl-routine-group-editor',root).forEach((details) => {
      const summaryText=String(details.querySelector(':scope>summary')?.textContent || '').replace(/\s+/g,' ').trim();
      const body=details.querySelector('.bl-routine-group-editor-body') || details;
      const headings=$$('h1,h2,h3',body);
      headings.forEach((heading,index) => {
        const text=String(heading.textContent || '').replace(/\s+/g,' ').trim();
        if (/^Routine Groups$/i.test(text) && (/Routine Groups/i.test(summaryText) || index>0)) heading.remove();
      });
    });
  }

  function ensureSkinGroupCheckboxes(root) {
    if (app!=='skin') return;
    $$('#routineLogItems>.routine-log-group',root).forEach((section) => {
      const head=section.querySelector(':scope>.routine-log-group-head');
      if (!head) return; // Individual Routine Steps deliberately have no group checkbox.
      const children=$$('[data-log-complete]',section);
      if (!children.length) return;
      let label=head.querySelector(':scope>.bl-routine-group-complete');
      if (!label) {
        label=document.createElement('label');label.className='bl-routine-group-complete';
        label.innerHTML='<input type="checkbox" data-v10-group-complete><span class="sr-only">Complete routine group</span>';
        head.appendChild(label);
      }
      const box=label.querySelector('input');
      const complete=children.filter((child) => child.checked).length;
      box.checked=complete===children.length;
      box.indeterminate=complete>0 && complete<children.length;
      box.dataset.v10GroupIds=JSON.stringify(children.map((child) => String(child.dataset.logComplete || '')).filter(Boolean));
      box.setAttribute('aria-label',`Complete ${String(head.querySelector('h3')?.textContent || 'routine group').trim()}`);
    });
  }

  function dedupeCalendarMarkers(root) {
    $$('[data-calendar-date]',root).forEach((day) => {
      const seen=new Set();
      $$('[data-calendar-summary-filter]',day).forEach((marker) => {
        const key=String(marker.dataset.calendarSummaryFilter || marker.textContent || '').trim();
        if (!key || !seen.has(key)) { if (key) seen.add(key);return; }
        const caption=marker.nextElementSibling?.classList?.contains('bl-calendar-marker-caption') ? marker.nextElementSibling : null;
        caption?.remove();marker.remove();
      });
    });
  }

  function ensureMarkerCaptions(root) {
    $$('[data-calendar-summary-filter]',root).forEach((marker) => {
      const label=String(marker.getAttribute('title') || marker.getAttribute('aria-label') || '').replace(/^Open Routine Summary:\s*/i,'').trim();
      if (!label) return;
      marker.setAttribute('aria-label',`Open Routine Summary: ${label}`);
      marker.title=label;
      if (marker.nextElementSibling?.classList?.contains('bl-calendar-marker-caption')) return;
      const caption=document.createElement('span');caption.className='bl-calendar-marker-caption';caption.textContent=label;caption.setAttribute('aria-hidden','true');
      marker.insertAdjacentElement('afterend',caption);
    });
  }

  function normaliseVisibility(root) {
    const publicPanel=app==='skin' ? $('[data-routine-panel="public"]',root) : $('[data-fitness-routine-panel="public"]',root);
    if (!publicPanel) return;
    $$('h1,h2,h3',publicPanel).forEach((heading) => {
      const text=String(heading.textContent || '').replace(/\s+/g,' ').trim();
      if (/^(?:Public )?Routine Visibility$/i.test(text) || /^My Routine Visibility$/i.test(text)) heading.remove();
    });
    const select=$(app==='skin' ? '#routineVisibility' : '#fitnessRoutineVisibility',publicPanel);
    if (!select) return;
    let label=select.closest('label');
    if (!label) { label=document.createElement('label');select.parentElement?.insertBefore(label,select);label.appendChild(select); }
    label.classList.add('bl-public-visibility-slot');
    let text=label.querySelector(':scope>span');
    if (!text) { text=document.createElement('span');label.prepend(text); }
    text.textContent='My Routine Visibility';
    const card=select.closest('.routine-card,.fitness-routine-card,.card');
    if (!card) return;
    let head=card.querySelector(':scope>.bl-authority-public-head');
    if (!head) {
      const title=Array.from(card.children).find((child) => child.matches?.('h1,h2,h3') || child.querySelector?.('h1,h2,h3'));
      if (title) {
        head=document.createElement('div');head.className='bl-authority-public-head bl-v10-public-head';
        card.insertBefore(head,card.firstChild);head.appendChild(title);
      }
    }
    if (head && label.parentElement!==head) head.appendChild(label);
  }

  function normalisePublicViewer(root) {
    $$('.bl-public-v3-tabs',root).forEach((tabs) => tabs.classList.add('bl-routine-tabs'));
    $$('.bl-public-v3-tab',root).forEach((tab) => { tab.classList.add('bl-routine-tab');tab.type='button';tab.style.pointerEvents='auto'; });
    $$('.bl-public-v3-panel',root).forEach((panel) => panel.classList.add('bl-routine-panel'));
    $$('.bl-public-v3-group',root).forEach((group) => group.classList.add('bl-routine-group'));
    $$('.bl-public-v3-item',root).forEach((item) => item.classList.add('bl-routine-summary-card'));
    $$('.bl-public-v3-detail-grid',root).forEach((grid) => grid.classList.add('bl-routine-summary-grid'));
    $$('.bl-public-v3-detail',root).forEach((section) => section.classList.add('bl-routine-summary-section'));
  }

  function normaliseDates(root) {
    const today=todayIso();
    const logInputs=['#fitnessRoutineLogDate','#routineLogDate'].map((selector) => $(selector,root)).filter(Boolean);
    logInputs.forEach((input) => {
      input.max=today;
      input.removeAttribute('min');
      input.setAttribute('aria-label','Date');
      const label=input.closest('label');
      const span=label?.querySelector(':scope>span');
      if (span) span.textContent='Date';
      else if (label) walkText(label,(text) => text.replace(/Activity performed date|Log date/gi,'Date'));
      input.dataset.blRoutineDatePicker='log';
    });
    const start=$('#startDate',root);
    if (start) { start.removeAttribute('max');start.dataset.blRoutineDatePicker='plan'; }
  }

  function normaliseFitnessPlanText(root) {
    if (app!=='fitness') return;
    walkText(root,(text) => text
      .replace(/Session\s+(\d+)\s*[-–—]\s*Current/gi,'Session $1')
      .replace(/Saved plan\s*[-–—]\s*/gi,'')
      .replace(/\bStart:\s*/g,'Workout Date: '));

    const plan=selectedPlan();
    const name=planName(plan);
    const outer=$('#myPlanSavedWrap>.card>h2',root) || $('#myPlanSavedWrap>.grid>.card>h2',root);
    if (outer && plan) outer.textContent=name;
    const inner=$('#myPlanOut .my-plan-saved-head h2',root);
    if (inner && plan) {
      inner.textContent=name;
      if (outer && outer!==inner) inner.classList.add('bl-v10-duplicate-plan-title');
    }
  }

  function normaliseFrequencyRange(root) {
    if (app!=='fitness') return;
    const freq=$('#freq',root);if (!freq) return;
    Array.from(freq.options || []).forEach((option) => {
      const number=Math.max(1,Math.min(7,Number(String(option.value || option.textContent || '').replace(/\D/g,'')) || 1));
      option.textContent=String(number);
    });
    const freqLabel=freq.closest('.field-stack')?.querySelector('label,span');if (freqLabel) freqLabel.textContent='Days Per Week';
    const min=Math.max(1,Math.min(7,Number(String(freq.value || '1').replace(/\D/g,'')) || 1));
    const range=$('#frequencyRangeMax',root);if (!range) return;
    const old=Math.max(0,Number(range.value || 0));
    const values=[0,...Array.from({ length:Math.max(0,7-min) },(_,index) => min+index+1)];
    const signature=values.join('|');
    if (range.dataset.blV10RangeSignature!==signature) {
      range.replaceChildren(...values.map((value) => {
        const option=document.createElement('option');option.value=String(value);option.textContent=value===0?'Not Selected':String(value);return option;
      }));
      range.dataset.blV10RangeSignature=signature;
    }
    range.value=values.includes(old) ? String(old) : '0';
    const rangeField=range.closest('.field-stack');if (rangeField) rangeField.classList.add('bl-v10-range-label-hidden');
    const grid=range.closest('.fitness-frequency-grid,.bl-frequency-range-row');
    if (grid && !grid.querySelector('.bl-frequency-range-dash')) {
      const dash=document.createElement('span');dash.className='bl-frequency-range-dash';dash.textContent='–';dash.setAttribute('aria-hidden','true');
      const fields=$$('.field-stack',grid);if (fields[1]) grid.insertBefore(dash,fields[1]);
    }
  }

  function normaliseExerciseCards(root) {
    if (app!=='fitness') return;
    $$('#exerciseList>.ex-row',root).forEach((row) => {
      row.classList.add('bl-v10-exercise-card');
      const exercise=row.querySelector('.ex-field-exercise');
      const select=exercise?.querySelector('.ex-select');
      if (select) {
        select.hidden=false;select.removeAttribute('aria-hidden');select.tabIndex=0;
        select.classList.add('bl-v10-exercise-heading-select');
        ensureSelectShell(select);
      }
      let columns=row.querySelector(':scope>.bl-v10-exercise-columns');
      if (!columns) {
        columns=document.createElement('div');columns.className='bl-v10-exercise-columns';row.appendChild(columns);
      }
      let controls=columns.querySelector(':scope>.bl-v10-exercise-controls');
      if (!controls) { controls=document.createElement('section');controls.className='bl-v10-exercise-controls';columns.appendChild(controls); }
      let details=columns.querySelector(':scope>.bl-v10-exercise-details');
      if (!details) { details=document.createElement('section');details.className='bl-v10-exercise-details';details.innerHTML='<h4>Details</h4>';columns.appendChild(details); }
      ['.ex-field-progression-mode','.ex-field-baseline','.ex-field-sets','.ex-field-rep-increase','.ex-remove-wrap'].forEach((selector) => {
        const field=row.querySelector(selector);if (field && field.parentElement!==controls) controls.appendChild(field);
      });
      const detailCard=row.querySelector('.ex-details-card');if (detailCard && detailCard.parentElement!==details) details.appendChild(detailCard);
    });
  }

  function addLogRemovalControls(root) {
    if (app==='fitness') {
      $$('.fitness-routine-log-item',root).forEach((card) => {
        const id=String(card.querySelector('[data-fitness-log-complete]')?.dataset.fitnessLogComplete || '');
        const head=card.querySelector('.fitness-log-item-head');
        if (!id || !head || head.querySelector('[data-v10-remove-activity]')) return;
        const button=document.createElement('button');button.type='button';button.className='tiny-btn bl-v10-remove-log-entry';button.dataset.v10RemoveActivity=id;button.textContent='Remove';button.setAttribute('aria-label','Remove this activity from My Routine');head.appendChild(button);
      });
    } else {
      $$('.routine-log-item',root).forEach((card) => {
        const id=String(card.querySelector('[data-log-complete]')?.dataset.logComplete || '');
        const head=card.querySelector('.routine-log-item-head') || card.querySelector('label')?.parentElement;
        if (!id || !head || head.querySelector('[data-v10-remove-skin-step]')) return;
        const button=document.createElement('button');button.type='button';button.className='routine-mini bl-v10-remove-log-entry';button.dataset.v10RemoveSkinStep=id;button.textContent='Remove';button.setAttribute('aria-label','Remove this Routine Step');head.appendChild(button);
      });
    }
  }

  function startExistingRemoval(id,type,card) {
    if (removing) return;
    let confirm=card.querySelector('.bl-v10-inline-remove-confirm');
    if (confirm) return;
    confirm=document.createElement('span');confirm.className='bl-v10-inline-remove-confirm';confirm.innerHTML='<span>Remove?</span><button type="button" class="tiny-btn" data-v10-remove-confirm>Yes</button><button type="button" class="tiny-btn" data-v10-remove-cancel>Cancel</button>';
    const trigger=card.querySelector(type==='fitness'?'[data-v10-remove-activity]':'[data-v10-remove-skin-step]');trigger?.insertAdjacentElement('afterend',confirm);if (trigger) trigger.hidden=true;
    confirm.dataset.removeId=id;confirm.dataset.removeType=type;
  }

  function confirmExistingRemoval(confirm) {
    const id=String(confirm?.dataset.removeId || '');const type=confirm?.dataset.removeType;if (!id) return;
    removing=true;
    try {
      if (type==='fitness') {
        const request=document.querySelector(`[data-activity-remove-request="${CSS.escape(id)}"]`);
        request?.click();
        global.requestAnimationFrame(() => {
          document.querySelector(`[data-activity-remove-confirm="${CSS.escape(id)}"]`)?.click();
          removing=false;schedule();
        });
      } else {
        const item=document.querySelector(`#routineItems [data-routine-item="${CSS.escape(id)}"]`);
        const request=item?.querySelector('[data-remove-request]');request?.click();
        global.requestAnimationFrame(() => { item?.querySelector('[data-remove-confirm]')?.click();removing=false;schedule(); });
      }
    } catch (_error) { removing=false; }
  }

  function makeCollapseFallback(button) {
    const group=button.closest('.routine-plan-group,.routine-group-row');
    const body=group?.querySelector('.routine-plan-group-body,.routine-group-settings,.bl-routine-details');
    if (!body) return;
    const before=body.hidden;
    global.requestAnimationFrame(() => {
      if (body.hidden!==before) return; // owning adapter handled it.
      body.hidden=!before;
      button.setAttribute('aria-expanded',body.hidden?'false':'true');
      if (/^(?:Expand|Collapse)(?: group)?$/i.test(String(button.textContent || '').trim())) button.textContent=body.hidden?'Expand group':'Collapse group';
    });
  }

  function patch() {
    frame=0;
    const root=$(rootSelector);if (!root) return;
    root.classList.add('bl-routine-experience','bl-routine-experience-v10');
    removeUnwantedCopy(root);
    normaliseTerminology(root);
    normaliseDropdowns(root);
    ensureSkinGroupCheckboxes(root);
    dedupeCalendarMarkers(root);
    ensureMarkerCaptions(root);
    normaliseVisibility(root);
    normalisePublicViewer(root);
    normaliseDates(root);
    removeDuplicateRoutineGroupHeading(root);
    normaliseFitnessPlanText(root);
    normaliseFrequencyRange(root);
    normaliseExerciseCards(root);
    addLogRemovalControls(root);
    document.documentElement.setAttribute('data-baseline-routine-experience','v10');
  }

  function schedule() {
    if (frame) return;
    frame=global.requestAnimationFrame(patch);
  }

  function bind() {
    document.addEventListener('pointerdown',(event) => {
      if (event.target?.closest?.(`${rootSelector} :is(.bl-select-menu,.bl-search-select-menu,.ex-picker-menu,.fitness-activity-menu,.routine-action-menu)`)) event.stopPropagation();
    },true);

    document.addEventListener('click',(event) => {
      const collapse=event.target?.closest?.(`${rootSelector} [data-plan-group-collapse],${rootSelector} [data-group-collapse]`);
      if (collapse) makeCollapseFallback(collapse);

      const removeFitness=event.target?.closest?.(`${rootSelector} [data-v10-remove-activity]`);
      if (removeFitness) { event.preventDefault();event.stopPropagation();startExistingRemoval(removeFitness.dataset.v10RemoveActivity,'fitness',removeFitness.closest('.fitness-routine-log-item'));return; }
      const removeSkin=event.target?.closest?.(`${rootSelector} [data-v10-remove-skin-step]`);
      if (removeSkin) { event.preventDefault();event.stopPropagation();startExistingRemoval(removeSkin.dataset.v10RemoveSkinStep,'skin',removeSkin.closest('.routine-log-item'));return; }
      const cancel=event.target?.closest?.(`${rootSelector} [data-v10-remove-cancel]`);
      if (cancel) { const confirm=cancel.closest('.bl-v10-inline-remove-confirm');const trigger=confirm?.previousElementSibling;confirm?.remove();if (trigger) trigger.hidden=false;return; }
      const confirm=event.target?.closest?.(`${rootSelector} [data-v10-remove-confirm]`);
      if (confirm) { event.preventDefault();event.stopPropagation();confirmExistingRemoval(confirm.closest('.bl-v10-inline-remove-confirm'));return; }

      const date=event.target?.closest?.(`${rootSelector} input[data-bl-routine-date-picker]`);
      if (date && typeof date.showPicker==='function') { try { date.showPicker(); } catch (_error) {} }
      if (event.target?.closest?.(`${rootSelector} [data-public-view],${rootSelector} [data-calendar-summary-filter]`)) global.setTimeout(schedule,0);
    },true);

    document.addEventListener('change',(event) => {
      if (event.target?.id==='freq') global.setTimeout(() => { normaliseFrequencyRange($(rootSelector));schedule(); },0);
      if (event.target?.matches?.(`${rootSelector} input[data-v10-group-complete]`)) {
        const box=event.target;let ids=[];try { ids=JSON.parse(box.dataset.v10GroupIds || '[]'); } catch (_error) {}
        ids.forEach((id) => {
          const child=document.querySelector(`#routineLogItems [data-log-complete="${CSS.escape(String(id))}"]`);
          if (child && child.checked!==box.checked) { child.checked=box.checked;child.dispatchEvent(new Event('change',{ bubbles:true })); }
        });
      }
      global.setTimeout(schedule,0);
    },true);

    ['baseline:skincare-routine-updated','baseline:fitness-routine-updated','baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:routine-settings-changed','baseline:fitness-summary-rendered','baseline:routine-rendered'].forEach((name) => document.addEventListener(name,schedule));
  }

  function boot() {
    loadCss();bind();
    const root=$(rootSelector);
    if (root && typeof MutationObserver!=='undefined') {
      observer=new MutationObserver((mutations) => { if (mutations.some((mutation) => mutation.type==='childList')) schedule(); });
      observer.observe(root,{ childList:true,subtree:true });
    }
    schedule();
    [80,220,500,900].forEach((delay) => global.setTimeout(schedule,delay));
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
