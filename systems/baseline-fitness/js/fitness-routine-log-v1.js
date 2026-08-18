/* Baseline Fitness — canonical Routine Log interaction owner v2.

   OWNERSHIP CONTRACT
   ------------------
   The base Fitness workspace owns routine/activity data and renders Log/Calendar.
   This module owns Fitness-only Routine Log interactions that sit on that output:
   - collapsible Session details + Optional note for non-calisthenics activities;
   - a second, synchronised Log Date control in the Fitness Calendar header;
   - Open Plan and reversible removal for completed Calisthenics sessions;
   - clearing an accidentally recorded non-calisthenics Routine Log entry.

   REMOVE ENTRY CONTRACT
   ---------------------
   "Remove Entry" means remove the performed/logged result for the selected date.
   It must NOT delete the activity from Routine Plan. Calisthenics completion is
   reverted to planned through update_session.php; activity log values are cleared
   through the base workspace's existing controls so its private state/save owner
   remains authoritative.

   Shared My Routine coherence must not create these Fitness-specific controls.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOG_V2__) return;
  global.__BASELINE_FITNESS_ROUTINE_LOG_V2__ = true;
  global.__BASELINE_FITNESS_ROUTINE_LOG_V1__ = true;

  const document = global.document;
  const SESSION_API = '/systems/baseline-fitness/api/update_session.php';
  const expandedDetails = new Set();
  const removeBusy = new Set();
  let pendingRemove = '';
  let removeError = '';
  let pendingActivityRemove = '';
  let activityRemoveError = '';
  let observer = null;
  let frame = 0;
  let patching = false;

  const $ = (selector,root=document) => root?.querySelector?.(selector) || null;
  const $$ = (selector,root=document) => Array.from(root?.querySelectorAll?.(selector) || []);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g,(character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));

  function root() { return document.getElementById('my-plan'); }
  function todayIso() {
    try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); }
    catch (_error) { return new Date().toISOString().slice(0,10); }
  }
  function clampDate(value) {
    try { return global.BASELINE_RoutineSystem?.clampLogDate?.(value) || (String(value || '') > todayIso() ? todayIso() : String(value || todayIso())); }
    catch (_error) { return String(value || todayIso()); }
  }
  function selectedDate() { return String($('#fitnessRoutineLogDate',root())?.value || todayIso()); }
  function detailsKey(id) { return `${selectedDate()}::${String(id || '')}`; }
  function safeId(value) { return String(value || '').replace(/[^a-zA-Z0-9_-]/g,'-'); }

  function installPolish() {
    if (document.getElementById('fitnessRoutineLogV2Polish')) return;
    const style=document.createElement('style');
    style.id='fitnessRoutineLogV2Polish';
    style.textContent=`
      /* Activity picker must read as one normal Fitness field. The old brighter
         border-2 top edge looked like an isolated white horizontal rule. */
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>input{
        border-color:var(--border)!important;
        border-right:0!important;
      }
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>input:not(:focus){box-shadow:none!important}
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>[data-activity-toggle]{
        border:1px solid var(--border)!important;
        border-left:0!important;
      }
      html[data-app="fitness"] #my-plan .fitness-activity-add::before,
      html[data-app="fitness"] #my-plan .fitness-activity-add::after,
      html[data-app="fitness"] #my-plan .fitness-activity-combobox::before,
      html[data-app="fitness"] #my-plan .fitness-activity-combobox::after{content:none!important;display:none!important}
      #my-plan .fitness-log-activity-remove-confirm,
      #my-plan .fitness-log-remove-confirm{display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap}
      #my-plan .fitness-log-activity-remove-status,
      #my-plan .fitness-log-remove-status{display:inline-block;color:var(--muted);font-size:18px;line-height:1.3}
    `;
    document.head.appendChild(style);
  }

  function schedule() {
    if (!frame) frame=global.requestAnimationFrame(patch);
  }

  function routineSnapshot() {
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }

  function meaningfulActivityEntry(id) {
    const entry=routineSnapshot()?.logs?.[selectedDate()]?.[id];
    if (!entry || typeof entry!=='object') return false;
    return Boolean(entry.completed || String(entry.note || '').trim() || String(entry.completedAt || '').trim() || Object.keys(entry.metrics && typeof entry.metrics==='object' ? entry.metrics : {}).length);
  }

  function ensureCalendarLogDate(host) {
    const controls=$('.fitness-calendar-controls',host);
    const primary=$('#fitnessRoutineLogDate',host);
    if (!controls || !primary) return;
    let label=$('.fitness-calendar-log-date',controls);
    if (!label) {
      label=document.createElement('label');
      label.className='field-stack fitness-calendar-log-date';
      label.innerHTML='<span>Log Date</span><input id="fitnessCalendarLogDate" type="date" aria-label="Log Date">';
      controls.appendChild(label);
    }
    const mirror=$('#fitnessCalendarLogDate',controls);
    if (!mirror) return;
    mirror.max=primary.max || todayIso();
    if (mirror.value!==primary.value) mirror.value=primary.value || selectedDate();
  }

  function ensureLogDetails(host) {
    $$('#fitnessRoutineLogItems .fitness-routine-log-item',host).forEach((card) => {
      const complete=card.querySelector('[data-fitness-log-complete]');
      const itemId=String(complete?.dataset.fitnessLogComplete || '');
      if (!itemId) return;
      const head=card.querySelector(':scope>.fitness-log-item-head');
      const metric=card.querySelector(':scope>.fitness-metric-fieldset');
      const note=card.querySelector(':scope>.fitness-log-note');
      if (!head || (!metric && !note)) return;

      const panelId=`fitnessLogDetails-${safeId(itemId)}`;
      let panel=card.querySelector(':scope>.fitness-log-details-panel');
      if (!panel) {
        panel=document.createElement('div');
        panel.className='fitness-log-details-panel';
        panel.id=panelId;
        if (metric) card.insertBefore(panel,metric); else card.appendChild(panel);
      }
      panel.id=panelId;
      if (metric && metric.parentElement!==panel) panel.appendChild(metric);
      if (note && note.parentElement!==panel) panel.appendChild(note);

      let actions=head.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) {
        actions=document.createElement('span');
        actions.className='bl-routine-entry-actions';
        head.appendChild(actions);
      }
      let toggle=actions.querySelector('[data-fitness-log-details-toggle]');
      if (!toggle) {
        toggle=document.createElement('button');
        toggle.type='button';
        toggle.className='tiny-btn fitness-log-details-toggle';
        toggle.dataset.fitnessLogDetailsToggle=itemId;
        actions.appendChild(toggle);
      }
      const open=expandedDetails.has(detailsKey(itemId));
      panel.hidden=!open;
      toggle.setAttribute('aria-controls',panelId);
      toggle.setAttribute('aria-expanded',open?'true':'false');
      toggle.textContent=open?'Close details':'Details';
    });
  }

  function ensureActivityRemoveActions(host) {
    $$('#fitnessRoutineLogItems .fitness-routine-log-item',host).forEach((card) => {
      const complete=card.querySelector('[data-fitness-log-complete]');
      const itemId=String(complete?.dataset.fitnessLogComplete || '');
      const head=card.querySelector(':scope>.fitness-log-item-head');
      if (!itemId || !head) return;
      let actions=head.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) {
        actions=document.createElement('span');
        actions.className='bl-routine-entry-actions';
        head.appendChild(actions);
      }
      actions.querySelectorAll('[data-fitness-activity-log-remove-request],.fitness-log-activity-remove-confirm,.fitness-log-activity-remove-status').forEach((node)=>node.remove());
      if (!meaningfulActivityEntry(itemId)) {
        if (pendingActivityRemove===itemId) pendingActivityRemove='';
        return;
      }
      if (pendingActivityRemove===itemId) {
        const confirm=document.createElement('span');
        confirm.className='fitness-log-activity-remove-confirm';
        confirm.innerHTML=`<span>Remove entry?</span><button type="button" class="tiny-btn" data-fitness-activity-log-remove-confirm="${esc(itemId)}">Yes</button><button type="button" class="tiny-btn" data-fitness-activity-log-remove-cancel="${esc(itemId)}">Cancel</button>`;
        actions.appendChild(confirm);
        if (activityRemoveError===itemId) {
          const status=document.createElement('span');
          status.className='fitness-log-activity-remove-status';
          status.setAttribute('role','status');
          status.textContent='Could not remove entry. Try again.';
          actions.appendChild(status);
        }
      } else {
        const button=document.createElement('button');
        button.type='button';
        button.className='tiny-btn';
        button.dataset.fitnessActivityLogRemoveRequest=itemId;
        button.textContent='Remove Entry';
        actions.appendChild(button);
      }
    });
  }

  function calisthenicsContext(card) {
    const open=card.querySelector('[data-fitness-log-open-plan],[data-open-calisthenics-plan]');
    const planId=Number(open?.dataset.fitnessLogOpenPlan || open?.dataset.openCalisthenicsPlan || 0);
    const match=String(card.querySelector('small')?.textContent || '').match(/Session\s+(\d+)/i);
    const sessionIndex=match?Number(match[1]):0;
    if (!planId || !sessionIndex) return null;
    const entry=(global.BASELINE_fitnessPlans?.getPlansForDate?.(selectedDate()) || [])
      .find((candidate) => Number(candidate.planId)===planId && Number(candidate.sessionIndex)===sessionIndex);
    const status=String(entry?.status || '').toLowerCase();
    return { planId,sessionIndex,status,identity:`${planId}:${sessionIndex}` };
  }

  function ensureCalisthenicsActions(host) {
    $$('#fitnessRoutineLogItems .fitness-calisthenics-log-card',host).forEach((card) => {
      const context=calisthenicsContext(card);
      if (!context) return;
      const open=card.querySelector('[data-fitness-log-open-plan],[data-open-calisthenics-plan]');
      if (open?.hasAttribute('data-open-calisthenics-plan')) {
        open.dataset.fitnessLogOpenPlan=String(context.planId);
        open.removeAttribute('data-open-calisthenics-plan');
      }
      let actions=card.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) {
        actions=document.createElement('span');
        actions.className='bl-routine-entry-actions';
        card.appendChild(actions);
      }
      if (open && open.parentElement!==actions) actions.appendChild(open);
      actions.querySelectorAll('[data-fitness-log-remove-request],.fitness-log-remove-confirm,.fitness-log-remove-status,[data-fitness-remove-entry],.bl-fitness-remove-confirm').forEach((node) => node.remove());
      if (context.status!=='done') return;

      if (pendingRemove===context.identity) {
        const confirm=document.createElement('span');
        confirm.className='fitness-log-remove-confirm';
        confirm.innerHTML=`<span>Remove entry?</span><button type="button" class="tiny-btn" data-fitness-log-remove-confirm="${esc(context.identity)}"${removeBusy.has(context.identity)?' disabled':''}>Yes</button><button type="button" class="tiny-btn" data-fitness-log-remove-cancel="${esc(context.identity)}"${removeBusy.has(context.identity)?' disabled':''}>Cancel</button>`;
        actions.appendChild(confirm);
        if (removeError===context.identity) {
          const status=document.createElement('span');
          status.className='fitness-log-remove-status';
          status.setAttribute('role','status');
          status.textContent='Could not remove entry. Try again.';
          actions.appendChild(status);
        }
      } else {
        const button=document.createElement('button');
        button.type='button';
        button.className='tiny-btn';
        button.dataset.fitnessLogRemoveRequest=context.identity;
        button.textContent='Remove Entry';
        actions.appendChild(button);
      }
    });
  }

  async function removeCalisthenicsEntry(identity) {
    const [planRaw,sessionRaw]=String(identity || '').split(':');
    const planId=Number(planRaw || 0);
    const sessionIndex=Number(sessionRaw || 0);
    if (!planId || !sessionIndex || removeBusy.has(identity)) return;
    removeBusy.add(identity);
    removeError='';
    schedule();
    try {
      const response=await global.fetch(SESSION_API,{
        method:'POST',
        credentials:'same-origin',
        headers:{ 'Content-Type':'application/json',Accept:'application/json' },
        body:JSON.stringify({ planId,sessionIndex,action:'set_status',status:'planned' })
      });
      const result=await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || `http_${response.status}`);
      pendingRemove='';
      removeError='';
      await global.BASELINE_fitnessPlans?.refresh?.();
      global.BASELINE_fitnessRoutine?.render?.();
      try {
        document.dispatchEvent(new CustomEvent('baseline:fitness-workout-updated',{
          detail:{ planId,sessionIndex,completed:false,source:'fitness-routine-log-remove' }
        }));
      } catch (_error) {}
    } catch (_error) {
      removeError=identity;
    } finally {
      removeBusy.delete(identity);
      schedule();
    }
  }

  function clearActivityLogEntry(itemId) {
    const host=root();
    const checkbox=host?.querySelector(`[data-fitness-log-complete="${global.CSS?.escape?global.CSS.escape(itemId):safeId(itemId)}"]`);
    const card=checkbox?.closest('.fitness-routine-log-item');
    if (!checkbox || !card) {
      activityRemoveError=itemId;
      schedule();
      return;
    }
    try {
      card.querySelectorAll('[data-fitness-log-note]').forEach((field)=>{
        if (field.value!=='') { field.value='';field.dispatchEvent(new Event('input',{ bubbles:true })); }
      });
      card.querySelectorAll('[data-log-metric]').forEach((field)=>{
        if (field.value!=='') {
          field.value='';
          field.dispatchEvent(new Event(field.tagName==='SELECT'?'change':'input',{ bubbles:true }));
        }
      });
      if (checkbox.checked) {
        checkbox.checked=false;
        checkbox.dispatchEvent(new Event('change',{ bubbles:true }));
      } else {
        global.BASELINE_fitnessRoutine?.render?.();
      }
      pendingActivityRemove='';
      activityRemoveError='';
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-updated',{ detail:{ source:'fitness-routine-log-remove',activityId:itemId,date:selectedDate() } })); } catch (_error) {}
    } catch (_error) {
      activityRemoveError=itemId;
      schedule();
    }
  }

  function patch() {
    frame=0;
    if (patching) return;
    const host=root();
    if (!host) return;
    patching=true;
    try {
      ensureCalendarLogDate(host);
      ensureLogDetails(host);
      ensureActivityRemoveActions(host);
      ensureCalisthenicsActions(host);
    } finally { patching=false; }
  }

  function relevantMutation(mutation) {
    const target=mutation.target?.nodeType===1?mutation.target:mutation.target?.parentElement;
    if (!target?.closest?.('#fitnessRoutineLogItems,.fitness-calendar-controls,.fitness-routine-log-head')) return false;
    const nodes=[...Array.from(mutation.addedNodes || []),...Array.from(mutation.removedNodes || [])];
    return nodes.some((node) => node?.nodeType===1 && !node.matches?.('.fitness-log-details-panel,.fitness-calendar-log-date,.fitness-log-remove-confirm,.fitness-log-remove-status,.fitness-log-activity-remove-confirm,.fitness-log-activity-remove-status,.bl-routine-entry-actions'));
  }

  function bind(host) {
    host.addEventListener('click',(event) => {
      const open=event.target?.closest?.('[data-fitness-log-open-plan]');
      if (open) {
        event.preventDefault();
        global.BASELINE_fitnessPlans?.openPlan?.(Number(open.dataset.fitnessLogOpenPlan || 0));
        return;
      }
      const details=event.target?.closest?.('[data-fitness-log-details-toggle]');
      if (details) {
        event.preventDefault();
        event.stopPropagation();
        const itemId=String(details.dataset.fitnessLogDetailsToggle || '');
        const key=detailsKey(itemId);
        const openDetails=!expandedDetails.has(key);
        if (openDetails) expandedDetails.add(key); else expandedDetails.delete(key);
        const card=details.closest('.fitness-routine-log-item');
        const panel=card?.querySelector(':scope>.fitness-log-details-panel');
        if (panel) panel.hidden=!openDetails;
        details.setAttribute('aria-expanded',openDetails?'true':'false');
        details.textContent=openDetails?'Close details':'Details';
        return;
      }
      const activityRemove=event.target?.closest?.('[data-fitness-activity-log-remove-request]');
      if (activityRemove) {
        event.preventDefault();
        event.stopPropagation();
        pendingActivityRemove=String(activityRemove.dataset.fitnessActivityLogRemoveRequest || '');
        activityRemoveError='';
        patch();
        return;
      }
      const activityConfirm=event.target?.closest?.('[data-fitness-activity-log-remove-confirm]');
      if (activityConfirm) {
        event.preventDefault();
        event.stopPropagation();
        clearActivityLogEntry(String(activityConfirm.dataset.fitnessActivityLogRemoveConfirm || ''));
        return;
      }
      const activityCancel=event.target?.closest?.('[data-fitness-activity-log-remove-cancel]');
      if (activityCancel) {
        event.preventDefault();
        event.stopPropagation();
        pendingActivityRemove='';
        activityRemoveError='';
        patch();
        return;
      }
      const remove=event.target?.closest?.('[data-fitness-log-remove-request]');
      if (remove) {
        event.preventDefault();
        event.stopPropagation();
        pendingRemove=String(remove.dataset.fitnessLogRemoveRequest || '');
        removeError='';
        patch();
        return;
      }
      const confirm=event.target?.closest?.('[data-fitness-log-remove-confirm]');
      if (confirm) {
        event.preventDefault();
        event.stopPropagation();
        removeCalisthenicsEntry(String(confirm.dataset.fitnessLogRemoveConfirm || ''));
        return;
      }
      const cancel=event.target?.closest?.('[data-fitness-log-remove-cancel]');
      if (cancel) {
        event.preventDefault();
        event.stopPropagation();
        pendingRemove='';
        removeError='';
        patch();
      }
    },true);

    host.addEventListener('change',(event) => {
      if (event.target?.id==='fitnessCalendarLogDate') {
        const primary=$('#fitnessRoutineLogDate',host);
        if (!primary) return;
        const value=clampDate(event.target.value);
        event.target.value=value;
        primary.value=value;
        primary.dispatchEvent(new Event('change',{ bubbles:true }));
        return;
      }
      if (event.target?.id==='fitnessRoutineLogDate') {
        pendingActivityRemove='';
        pendingRemove='';
        schedule();
      }
    });

    [
      'baseline:fitness-plans-updated',
      'baseline:fitness-workout-updated',
      'baseline:fitness-routine-updated',
      'baseline:fitness-routine-view-changed'
    ].forEach((name) => document.addEventListener(name,schedule));
  }

  function boot() {
    const host=root();
    if (!host) return;
    installPolish();
    bind(host);
    if (typeof MutationObserver!=='undefined') {
      observer=new MutationObserver((mutations) => {
        if (!patching && mutations.some(relevantMutation)) schedule();
      });
      observer.observe(host,{ childList:true,subtree:true });
    }
    patch();
  }

  global.addEventListener('pagehide',() => observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });
  else boot();
})(typeof window!=='undefined'?window:globalThis);
