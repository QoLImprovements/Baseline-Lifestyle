/* Baseline Fitness — canonical Routine Log interaction owner v3.

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
   "Remove Entry" removes the performed/logged result for the selected date. It
   must NOT delete the Routine Activity or Calisthenics plan itself.

   IMPORTANT COMPATIBILITY RULE
   ----------------------------
   Older copies of this module used a root capture-phase click listener and rebuilt
   Remove Entry buttons during DOM patches. If an older cached copy is present it
   can therefore intercept a click or replace the button between pointerdown and
   click. V3 owns removal from DOCUMENT CAPTURE on pointerdown/click and opens a
   confirmation dialog outside #my-plan. This places the removal interaction ahead
   of any legacy root listener and outside legacy Log MutationObservers.

   Remove buttons are now patched idempotently: an existing interactive button is
   preserved rather than destroyed/recreated on every render pass.
*/
(function (global) {
  'use strict';
  if (!global.document || global.__BASELINE_FITNESS_ROUTINE_LOG_V3__) return;

  const legacyOwnerPresent=Boolean(global.__BASELINE_FITNESS_ROUTINE_LOG_V2__ || global.__BASELINE_FITNESS_ROUTINE_LOG_V1__);
  global.__BASELINE_FITNESS_ROUTINE_LOG_V3__=true;
  global.__BASELINE_FITNESS_ROUTINE_LOG_V2__=true;
  global.__BASELINE_FITNESS_ROUTINE_LOG_V1__=true;

  const document=global.document;
  const SESSION_API='/systems/baseline-fitness/api/update_session.php';
  const expandedDetails=new Set();
  const removeBusy=new Set();
  let observer=null;
  let frame=0;
  let patching=false;
  let suppressRemoveClickUntil=0;
  let removeDialogState=null;

  const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
  const $$=(selector,root=document)=>Array.from(root?.querySelectorAll?.(selector)||[]);
  const esc=(value)=>String(value==null?'':value).replace(/[&<>"']/g,(character)=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));

  function root(){ return document.getElementById('my-plan'); }
  function todayIso(){
    try { return global.BASELINE_RoutineSystem?.todayIso?.() || new Date().toLocaleDateString('sv-SE'); }
    catch (_error) { return new Date().toISOString().slice(0,10); }
  }
  function clampDate(value){
    try { return global.BASELINE_RoutineSystem?.clampLogDate?.(value) || (String(value||'')>todayIso()?todayIso():String(value||todayIso())); }
    catch (_error) { return String(value||todayIso()); }
  }
  function selectedDate(){ return String($('#fitnessRoutineLogDate',root())?.value||todayIso()); }
  function detailsKey(id){ return `${selectedDate()}::${String(id||'')}`; }
  function safeId(value){ return String(value||'').replace(/[^a-zA-Z0-9_-]/g,'-'); }

  function installPolish(){
    if (document.getElementById('fitnessRoutineLogV3Polish')) return;
    document.getElementById('fitnessRoutineLogV2Polish')?.remove();
    const style=document.createElement('style');
    style.id='fitnessRoutineLogV3Polish';
    style.textContent=`
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>input{
        border-color:var(--border)!important;border-top:0!important;border-right:0!important;
      }
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>input:not(:focus){box-shadow:none!important}
      html[data-app="fitness"] #my-plan .fitness-activity-combobox>[data-activity-toggle]{
        border:1px solid var(--border)!important;border-top:0!important;border-left:0!important;
      }
      html[data-app="fitness"] #my-plan .fitness-activity-add::before,
      html[data-app="fitness"] #my-plan .fitness-activity-add::after,
      html[data-app="fitness"] #my-plan .fitness-activity-combobox::before,
      html[data-app="fitness"] #my-plan .fitness-activity-combobox::after{content:none!important;display:none!important}
      html[data-app="fitness"] #fitnessRoutineLogItems .bl-routine-entry-actions,
      html[data-app="fitness"] #fitnessRoutineLogItems .bl-routine-entry-actions button{
        position:relative!important;z-index:30!important;pointer-events:auto!important;touch-action:manipulation;
      }
      html[data-app="fitness"] #fitnessRoutineLogItems :is(.fitness-calisthenics-log-card,.fitness-routine-log-item)::before,
      html[data-app="fitness"] #fitnessRoutineLogItems :is(.fitness-calisthenics-log-card,.fitness-routine-log-item)::after{
        pointer-events:none!important;
      }
      #fitnessLogRemoveEntryModal .fitness-log-remove-modal-status{min-height:22px;margin-top:10px;color:var(--muted)}
      #fitnessLogRemoveEntryModal .fitness-log-remove-modal-status[data-kind="error"]{color:var(--ink)}
    `;
    document.head.appendChild(style);
  }

  function schedule(){ if (!frame) frame=global.requestAnimationFrame(patch); }
  function routineSnapshot(){
    try { return global.BASELINE_fitnessRoutine?.getState?.() || { activities:[],logs:{} }; }
    catch (_error) { return { activities:[],logs:{} }; }
  }
  function meaningfulActivityEntry(id){
    const entry=routineSnapshot()?.logs?.[selectedDate()]?.[id];
    if (!entry || typeof entry!=='object') return false;
    return Boolean(entry.completed || String(entry.note||'').trim() || String(entry.completedAt||'').trim() || Object.keys(entry.metrics&&typeof entry.metrics==='object'?entry.metrics:{}).length);
  }

  function ensureRemoveDialog(){
    let overlay=document.getElementById('fitnessLogRemoveEntryModal');
    if (overlay) return overlay;
    overlay=document.createElement('div');
    overlay.id='fitnessLogRemoveEntryModal';
    overlay.className='modal-overlay';
    overlay.hidden=true;
    overlay.innerHTML=`<div class="confirm-modal card" role="dialog" aria-modal="true" aria-labelledby="fitnessLogRemoveEntryTitle" aria-describedby="fitnessLogRemoveEntryMessage">
      <h3 id="fitnessLogRemoveEntryTitle" style="margin-top:0">Remove Entry</h3>
      <p id="fitnessLogRemoveEntryMessage">Remove this completed Routine Log entry?</p>
      <p class="note">The routine activity or plan itself will remain in Routine Plan.</p>
      <div class="actions-inline" style="margin-top:14px">
        <button type="button" class="compact-action compact-action--ghost" data-fitness-log-modal-cancel>Cancel</button>
        <button type="button" class="compact-action compact-action--danger" data-fitness-log-modal-confirm>Remove Entry</button>
      </div>
      <div class="fitness-log-remove-modal-status" data-fitness-log-modal-status role="status"></div>
    </div>`;
    document.body.appendChild(overlay);
    return overlay;
  }

  function openRemoveDialog(kind,identity,label='this entry'){
    if (!identity) return;
    const overlay=ensureRemoveDialog();
    removeDialogState={ kind,identity,label };
    const message=$('#fitnessLogRemoveEntryMessage',overlay);
    const status=$('[data-fitness-log-modal-status]',overlay);
    const confirm=$('[data-fitness-log-modal-confirm]',overlay);
    if (message) message.textContent=`Remove ${label} from the Routine Log for ${selectedDate()}?`;
    if (status) { status.textContent='';status.removeAttribute('data-kind'); }
    if (confirm) confirm.disabled=false;
    overlay.hidden=false;
    global.requestAnimationFrame(()=>confirm?.focus());
  }

  function closeRemoveDialog(){
    const overlay=document.getElementById('fitnessLogRemoveEntryModal');
    if (overlay) overlay.hidden=true;
    removeDialogState=null;
  }

  function setRemoveDialogBusy(busy,message='',error=false){
    const overlay=document.getElementById('fitnessLogRemoveEntryModal');
    if (!overlay) return;
    const confirm=$('[data-fitness-log-modal-confirm]',overlay);
    const cancel=$('[data-fitness-log-modal-cancel]',overlay);
    const status=$('[data-fitness-log-modal-status]',overlay);
    if (confirm) confirm.disabled=Boolean(busy);
    if (cancel) cancel.disabled=Boolean(busy);
    if (status) {
      status.textContent=message;
      if (error) status.dataset.kind='error'; else status.removeAttribute('data-kind');
    }
  }

  function ensureCalendarLogDate(host){
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
    mirror.max=primary.max||todayIso();
    if (mirror.value!==primary.value) mirror.value=primary.value||selectedDate();
  }

  function ensureLogDetails(host){
    $$('#fitnessRoutineLogItems .fitness-routine-log-item',host).forEach((card)=>{
      const complete=card.querySelector('[data-fitness-log-complete]');
      const itemId=String(complete?.dataset.fitnessLogComplete||'');
      if (!itemId) return;
      const head=card.querySelector(':scope>.fitness-log-item-head');
      const metric=card.querySelector(':scope>.fitness-metric-fieldset');
      const note=card.querySelector(':scope>.fitness-log-note');
      if (!head || (!metric&&!note)) return;
      const panelId=`fitnessLogDetails-${safeId(itemId)}`;
      let panel=card.querySelector(':scope>.fitness-log-details-panel');
      if (!panel) {
        panel=document.createElement('div');panel.className='fitness-log-details-panel';panel.id=panelId;
        if (metric) card.insertBefore(panel,metric); else card.appendChild(panel);
      }
      panel.id=panelId;
      if (metric&&metric.parentElement!==panel) panel.appendChild(metric);
      if (note&&note.parentElement!==panel) panel.appendChild(note);
      let actions=head.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) { actions=document.createElement('span');actions.className='bl-routine-entry-actions';head.appendChild(actions); }
      let toggle=actions.querySelector('[data-fitness-log-details-toggle]');
      if (!toggle) {
        toggle=document.createElement('button');toggle.type='button';toggle.className='tiny-btn fitness-log-details-toggle';toggle.dataset.fitnessLogDetailsToggle=itemId;actions.appendChild(toggle);
      }
      const open=expandedDetails.has(detailsKey(itemId));
      panel.hidden=!open;toggle.setAttribute('aria-controls',panelId);toggle.setAttribute('aria-expanded',open?'true':'false');toggle.textContent=open?'Close details':'Details';
    });
  }

  function ensureActivityRemoveActions(host){
    $$('#fitnessRoutineLogItems .fitness-routine-log-item',host).forEach((card)=>{
      const complete=card.querySelector('[data-fitness-log-complete]');
      const itemId=String(complete?.dataset.fitnessLogComplete||'');
      const head=card.querySelector(':scope>.fitness-log-item-head');
      if (!itemId||!head) return;
      let actions=head.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) { actions=document.createElement('span');actions.className='bl-routine-entry-actions';head.appendChild(actions); }
      actions.querySelectorAll('.fitness-log-activity-remove-confirm,.fitness-log-activity-remove-status').forEach((node)=>node.remove());
      let button=actions.querySelector('[data-fitness-activity-log-remove-request]');
      if (!meaningfulActivityEntry(itemId)) { button?.remove();return; }
      if (!button) {
        button=document.createElement('button');button.type='button';button.className='tiny-btn';actions.appendChild(button);
      }
      button.dataset.fitnessActivityLogRemoveRequest=itemId;
      button.textContent='Remove Entry';
      button.setAttribute('aria-label',`Remove ${String(card.querySelector('strong')?.textContent||'activity')} entry for ${selectedDate()}`);
    });
  }

  function calisthenicsContext(card){
    const open=card.querySelector('[data-fitness-log-open-plan],[data-open-calisthenics-plan]');
    const detailText=String(card.querySelector('small')?.textContent||'');
    const planId=Number(card.dataset.fitnessLogPlanId || open?.dataset.fitnessLogOpenPlan || open?.dataset.openCalisthenicsPlan || 0);
    const match=detailText.match(/Session\s+(\d+)/i);
    const sessionIndex=Number(card.dataset.fitnessLogSessionIndex || (match?match[1]:0));
    if (!planId||!sessionIndex) return null;
    card.dataset.fitnessLogPlanId=String(planId);
    card.dataset.fitnessLogSessionIndex=String(sessionIndex);
    const entry=(global.BASELINE_fitnessPlans?.getPlansForDate?.(selectedDate())||[])
      .find((candidate)=>Number(candidate.planId)===planId&&Number(candidate.sessionIndex)===sessionIndex);
    const status=String(entry?.status || (/Completed on this date/i.test(detailText)?'done':'')).toLowerCase();
    return { planId,sessionIndex,status,identity:`${planId}:${sessionIndex}` };
  }

  function ensureCalisthenicsActions(host){
    $$('#fitnessRoutineLogItems .fitness-calisthenics-log-card',host).forEach((card)=>{
      const context=calisthenicsContext(card);
      if (!context) return;
      const open=card.querySelector('[data-fitness-log-open-plan],[data-open-calisthenics-plan]');
      if (open?.hasAttribute('data-open-calisthenics-plan')) {
        open.dataset.fitnessLogOpenPlan=String(context.planId);
        open.removeAttribute('data-open-calisthenics-plan');
      }
      let actions=card.querySelector(':scope>.bl-routine-entry-actions');
      if (!actions) { actions=document.createElement('span');actions.className='bl-routine-entry-actions';card.appendChild(actions); }
      if (open&&open.parentElement!==actions) actions.appendChild(open);
      actions.querySelectorAll('.fitness-log-remove-confirm,.fitness-log-remove-status,[data-fitness-remove-entry],.bl-fitness-remove-confirm').forEach((node)=>node.remove());
      let button=actions.querySelector('[data-fitness-log-remove-request]');
      if (context.status!=='done') { button?.remove();return; }
      if (!button) {
        button=document.createElement('button');button.type='button';button.className='tiny-btn';actions.appendChild(button);
      }
      button.dataset.fitnessLogRemoveRequest=context.identity;
      button.textContent='Remove Entry';
      button.setAttribute('aria-label',`Remove ${String(card.querySelector('.session-title,strong')?.textContent||'Calisthenics')} Session ${context.sessionIndex} entry for ${selectedDate()}`);
    });
  }

  async function removeCalisthenicsEntry(identity){
    const [planRaw,sessionRaw]=String(identity||'').split(':');
    const planId=Number(planRaw||0),sessionIndex=Number(sessionRaw||0);
    if (!planId||!sessionIndex||removeBusy.has(identity)) return false;
    removeBusy.add(identity);setRemoveDialogBusy(true,'Removing entry…');
    try {
      const response=await global.fetch(SESSION_API,{
        method:'POST',credentials:'same-origin',headers:{ 'Content-Type':'application/json',Accept:'application/json' },
        body:JSON.stringify({ planId,sessionIndex,action:'set_status',status:'planned' })
      });
      const result=await response.json().catch(()=>null);
      if (!response.ok||!result?.ok) throw new Error(result?.error||`http_${response.status}`);
      await global.BASELINE_fitnessPlans?.refresh?.();
      global.BASELINE_fitnessRoutine?.render?.();
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-workout-updated',{ detail:{ planId,sessionIndex,completed:false,source:'fitness-routine-log-remove-v3' } })); } catch (_error) {}
      closeRemoveDialog();schedule();return true;
    } catch (_error) {
      setRemoveDialogBusy(false,'Could not remove entry. Try again.',true);return false;
    } finally { removeBusy.delete(identity); }
  }

  function clearActivityLogEntry(itemId){
    const host=root();
    const selectorValue=global.CSS?.escape?global.CSS.escape(itemId):safeId(itemId);
    const checkbox=host?.querySelector(`[data-fitness-log-complete="${selectorValue}"]`);
    const card=checkbox?.closest('.fitness-routine-log-item');
    if (!checkbox||!card) { setRemoveDialogBusy(false,'Could not remove entry. Try again.',true);return false; }
    try {
      setRemoveDialogBusy(true,'Removing entry…');
      card.querySelectorAll('[data-fitness-log-note]').forEach((field)=>{ if (field.value!=='') { field.value='';field.dispatchEvent(new Event('input',{ bubbles:true })); } });
      card.querySelectorAll('[data-log-metric]').forEach((field)=>{
        if (field.value!=='') { field.value='';field.dispatchEvent(new Event(field.tagName==='SELECT'?'change':'input',{ bubbles:true })); }
      });
      if (checkbox.checked) { checkbox.checked=false;checkbox.dispatchEvent(new Event('change',{ bubbles:true })); }
      else global.BASELINE_fitnessRoutine?.render?.();
      try { document.dispatchEvent(new CustomEvent('baseline:fitness-routine-updated',{ detail:{ source:'fitness-routine-log-remove-v3',activityId:itemId,date:selectedDate() } })); } catch (_error) {}
      closeRemoveDialog();schedule();return true;
    } catch (_error) { setRemoveDialogBusy(false,'Could not remove entry. Try again.',true);return false; }
  }

  function removeTarget(event){
    const target=event.target?.closest?.('[data-fitness-log-remove-request],[data-fitness-activity-log-remove-request]');
    return target&&target.closest('#fitnessRoutineLogItems')?target:null;
  }
  function labelForRemoveTarget(target){
    const card=target.closest('.fitness-calisthenics-log-card,.fitness-routine-log-item');
    const title=String(card?.querySelector('.session-title,strong')?.textContent||'this entry').trim();
    const session=String(card?.querySelector('small')?.textContent||'').match(/Session\s+(\d+)/i)?.[1]||'';
    return session?`${title} — Session ${session}`:title;
  }
  function interceptRemovePointer(event){
    if (event.button!==undefined&&event.button!==0) return;
    const target=removeTarget(event);if (!target) return;
    event.preventDefault();event.stopImmediatePropagation();
    suppressRemoveClickUntil=(global.performance?.now?.()||Date.now())+700;
    const identity=String(target.dataset.fitnessLogRemoveRequest||target.dataset.fitnessActivityLogRemoveRequest||'');
    const kind=target.hasAttribute('data-fitness-log-remove-request')?'calisthenics':'activity';
    openRemoveDialog(kind,identity,labelForRemoveTarget(target));
  }
  function interceptRemoveClick(event){
    const target=removeTarget(event);if (!target) return;
    event.preventDefault();event.stopImmediatePropagation();
    const now=global.performance?.now?.()||Date.now();
    if (now<suppressRemoveClickUntil) return;
    const identity=String(target.dataset.fitnessLogRemoveRequest||target.dataset.fitnessActivityLogRemoveRequest||'');
    const kind=target.hasAttribute('data-fitness-log-remove-request')?'calisthenics':'activity';
    openRemoveDialog(kind,identity,labelForRemoveTarget(target));
  }

  function handleRootClick(event){
    const open=event.target?.closest?.('[data-fitness-log-open-plan]');
    if (open) { event.preventDefault();global.BASELINE_fitnessPlans?.openPlan?.(Number(open.dataset.fitnessLogOpenPlan||0));return; }
    const details=event.target?.closest?.('[data-fitness-log-details-toggle]');
    if (!details) return;
    event.preventDefault();event.stopPropagation();
    const itemId=String(details.dataset.fitnessLogDetailsToggle||''),key=detailsKey(itemId),openDetails=!expandedDetails.has(key);
    if (openDetails) expandedDetails.add(key);else expandedDetails.delete(key);
    const card=details.closest('.fitness-routine-log-item'),panel=card?.querySelector(':scope>.fitness-log-details-panel');
    if (panel) panel.hidden=!openDetails;
    details.setAttribute('aria-expanded',openDetails?'true':'false');details.textContent=openDetails?'Close details':'Details';
  }

  function bind(host){
    document.addEventListener('pointerdown',interceptRemovePointer,true);
    document.addEventListener('click',interceptRemoveClick,true);
    const overlay=ensureRemoveDialog();
    overlay.addEventListener('click',(event)=>{
      if (event.target===overlay || event.target?.closest?.('[data-fitness-log-modal-cancel]')) { event.preventDefault();closeRemoveDialog();return; }
      if (!event.target?.closest?.('[data-fitness-log-modal-confirm]') || !removeDialogState) return;
      event.preventDefault();
      const state={...removeDialogState};
      if (state.kind==='calisthenics') removeCalisthenicsEntry(state.identity);
      else clearActivityLogEntry(state.identity);
    });
    document.addEventListener('keydown',(event)=>{
      if (event.key==='Escape'&&!overlay.hidden) { event.preventDefault();closeRemoveDialog(); }
    });

    if (!legacyOwnerPresent) {
      host.addEventListener('click',handleRootClick);
      host.addEventListener('change',(event)=>{
        if (event.target?.id==='fitnessCalendarLogDate') {
          const primary=$('#fitnessRoutineLogDate',host);if (!primary) return;
          const value=clampDate(event.target.value);event.target.value=value;primary.value=value;primary.dispatchEvent(new Event('change',{ bubbles:true }));return;
        }
        if (event.target?.id==='fitnessRoutineLogDate') schedule();
      });
    }
    ['baseline:fitness-plans-updated','baseline:fitness-workout-updated','baseline:fitness-routine-updated','baseline:fitness-routine-view-changed']
      .forEach((name)=>document.addEventListener(name,schedule));
  }

  function patch(){
    frame=0;if (patching) return;
    const host=root();if (!host) return;
    patching=true;
    try {
      if (!legacyOwnerPresent) { ensureCalendarLogDate(host);ensureLogDetails(host); }
      ensureActivityRemoveActions(host);ensureCalisthenicsActions(host);
    } finally { patching=false; }
  }

  function relevantMutation(mutation){
    const target=mutation.target?.nodeType===1?mutation.target:mutation.target?.parentElement;
    return Boolean(target?.closest?.('#fitnessRoutineLogItems'));
  }

  function boot(){
    const host=root();if (!host) return;
    installPolish();bind(host);
    if (typeof MutationObserver!=='undefined') {
      observer=new MutationObserver((mutations)=>{ if (!patching&&mutations.some(relevantMutation)) schedule(); });
      observer.observe(host,{ childList:true,subtree:true });
    }
    patch();
  }

  global.addEventListener('pagehide',()=>observer?.disconnect(),{ once:true });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{ once:true });else boot();
})(typeof window!=='undefined'?window:globalThis);
