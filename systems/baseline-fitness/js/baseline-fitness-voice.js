/* Baseline Fitness — load the preserved voice runtime, then render side-plank sides as standard rows. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_SIDE_PLANK_THREE_ROWS_20260713_4';
  const SOURCE='/systems/baseline-fitness/js/baseline-fitness-voice-original.js?v='+BUILD;
  let renderQueued=false;

  function targetFor(row,manual){
    return String(row?.querySelector(':scope > .current-step-head b')?.textContent||'').match(/\((\d+)\)/)?.[1]
      || String(manual?.textContent||'').match(/\b(\d+)\b/)?.[1]
      || '0';
  }

  function actionMarkup(side,enabled){
    const disabled=enabled?'':' disabled';
    return `<div class="actions-inline">
      <button class="compact-action compact-action--ghost" type="button" data-side-timer="${side}"${disabled}>Start Timer</button>
      <button class="compact-action compact-action--success" type="button" data-side-success="${side}" aria-label="Success"${disabled}>✓</button>
      <button class="compact-action compact-action--danger" type="button" data-side-fail="${side}" aria-label="Fail"${disabled}>✕</button>
    </div>`;
  }

  function resultMarkup(result){
    if(!result) return '';
    const symbol=result.status==='success'?'✓':'✕';
    const label=result.status==='success'?'Success':'Fail';
    const seconds=Number.isFinite(Number(result.seconds))?` · ${Math.round(Number(result.seconds))} seconds`:'';
    return `<div class="step-status ${result.status==='success'?'success':'failed'}">${symbol} ${label}${seconds}</div>`;
  }

  function sideStorageState(row,target){
    const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    const rows=Array.from(document.querySelectorAll('#currentWorkoutOut > .current-step, #currentWorkoutOut .current-workout > .current-step'));
    const index=rows.indexOf(row);
    const active=Boolean(context&&index===context.stepIndex&&context.started&&context.canStart);
    const key=`__baseline_fitness_side_plank_v1__::${context?.planId||0}::${context?.sessionIndex||0}::${index}`;
    let results={left:null,right:null};
    try{ results=Object.assign(results,JSON.parse(localStorage.getItem(key)||'null')||{}); }catch(_error){}
    return {active,results,target,index};
  }

  function sideRow(side,state){
    const label=side==='left'?'Left':'Right';
    const result=state.results[side];
    const enabled=state.active&&!result&&(side==='left'||Boolean(state.results.left));
    return `<section class="current-step side-plank-standard-row${enabled?' active':''}${result?' done':''}${side==='right'&&!state.results.left?' is-locked':''}" data-manual-side="${side}">
      <div class="current-step-head">
        <div><b>Elbow Side Plank ${label} - (${state.target})</b></div>
        <div class="step-actions">${result?resultMarkup(result):actionMarkup(side,enabled)}</div>
      </div>
      <div data-side-failure-entry="${side}" hidden>
        <input type="number" min="0" max="${state.target}" inputmode="numeric" placeholder="Seconds achieved">
        <button class="compact-action compact-action--danger" type="button" data-side-fail-save="${side}">Save</button>
      </div>
    </section>`;
  }

  function normaliseSidePlankRows(){
    renderQueued=false;
    document.querySelectorAll('#currentWorkoutOut .current-step').forEach(row=>{
      const manual=row.querySelector(':scope > .side-plank-manual');
      if(!manual) return;

      const target=targetFor(row,manual);
      const state=sideStorageState(row,target);
      const signature=JSON.stringify({
        target:state.target,
        active:state.active,
        index:state.index,
        left:state.results.left,
        right:state.results.right
      });

      row.classList.add('side-plank-source-row');
      const heading=row.querySelector(':scope > .current-step-head');
      if(heading&&!heading.hidden) heading.hidden=true;
      if(manual.hidden) manual.hidden=false;
      if(!manual.classList.contains('side-plank-standard-list')) manual.classList.add('side-plank-standard-list');

      // Only replace the DOM when the actual workout state changed. The prior
      // implementation rewrote innerHTML on every observer callback, causing an
      // endless mutation loop that froze the My Plan page.
      if(manual.dataset.renderSignature===signature) return;
      manual.dataset.renderSignature=signature;
      manual.innerHTML=sideRow('left',state)+sideRow('right',state);
    });
  }

  function scheduleNormalise(){
    if(renderQueued) return;
    renderQueued=true;
    if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(normaliseSidePlankRows);
    else global.setTimeout(normaliseSidePlankRows,0);
  }

  function installStyles(){
    if(document.getElementById('baseline-side-plank-three-rows')) return;
    const style=document.createElement('style');
    style.id='baseline-side-plank-three-rows';
    style.textContent=`
      #currentWorkoutOut .side-plank-source-row{display:contents!important}
      #currentWorkoutOut .side-plank-source-row>.current-step-head{display:none!important}
      #currentWorkoutOut .side-plank-standard-list{display:contents!important}
      #currentWorkoutOut .side-plank-standard-row{
        min-height:0!important;
        padding:10px 12px!important;
        border-radius:16px!important;
        border:1px solid rgba(255,255,255,.12)!important;
        background:rgba(255,255,255,.05)!important;
        box-shadow:none!important;
        margin:0!important;
      }
      #currentWorkoutOut .side-plank-standard-row>.current-step-head{
        display:flex!important;
        align-items:center!important;
        justify-content:space-between!important;
        gap:10px!important;
        flex-wrap:wrap!important;
      }
      #currentWorkoutOut .side-plank-standard-row .step-actions,
      #currentWorkoutOut .side-plank-standard-row .actions-inline{
        display:flex!important;
        align-items:center!important;
        justify-content:flex-end!important;
        gap:8px!important;
        margin:0!important;
      }
      #currentWorkoutOut .side-plank-standard-row .compact-action{
        min-height:42px!important;
        height:42px!important;
        font-size:inherit!important;
      }
      #currentWorkoutOut .side-plank-standard-row [data-side-success],
      #currentWorkoutOut .side-plank-standard-row [data-side-fail]{
        width:44px!important;
        min-width:44px!important;
        padding:0!important;
      }
      #currentWorkoutOut .side-plank-standard-row [data-side-failure-entry]{
        margin-top:10px!important;
        display:flex;
        gap:10px;
        align-items:center;
        flex-wrap:wrap;
      }
      #currentWorkoutOut .side-plank-standard-row [data-side-failure-entry][hidden]{display:none!important}
      #currentWorkoutOut .side-plank-standard-row.is-locked{opacity:.55!important}
    `;
    document.head.appendChild(style);
  }

  function installPatch(){
    installStyles();
    scheduleNormalise();
    const root=document.getElementById('currentWorkoutOut');
    if(root){
      new MutationObserver(scheduleNormalise).observe(root,{childList:true,subtree:true});
    }
    document.addEventListener('baseline:fitness-workout-updated',scheduleNormalise);
    document.documentElement.setAttribute('data-baseline-side-plank-rows',BUILD);
  }

  const script=document.createElement('script');
  script.src=SOURCE;
  script.defer=true;
  script.onload=installPatch;
  script.onerror=installPatch;
  document.head.appendChild(script);
})(window);
