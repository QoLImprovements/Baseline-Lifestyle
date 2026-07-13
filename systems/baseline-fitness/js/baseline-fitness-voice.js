/* Baseline Fitness — load the preserved voice runtime, then apply side-plank row coherence. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_SIDE_PLANK_ROWS_20260713_2';
  const SOURCE='/systems/baseline-fitness/js/baseline-fitness-voice-original.js?v='+BUILD;

  function rowMarkup(side,target,enabled,result){
    const label=side==='left'?'Left':'Right';
    const disabled=enabled?'':' disabled';
    const resultMarkup=result
      ? `<div class="side-plank-result">${result.status==='success'?'✓ Succeeded':'✕ Failed'}${Number.isFinite(Number(result.seconds))?` · Achieved ${Math.round(Number(result.seconds))}`:''}</div>`
      : `<div class="actions-inline"><button class="compact-action compact-action--ghost" type="button" data-side-timer="${side}"${disabled}>Start Timer</button><button class="compact-action compact-action--success" type="button" data-side-success="${side}" aria-label="Succeeded" title="Succeeded"${disabled}><span aria-hidden="true">✓</span></button><button class="compact-action compact-action--danger" type="button" data-side-fail="${side}" aria-label="Failed" title="Failed"${disabled}><span aria-hidden="true">✕</span></button></div>`;
    return `<div class="side-plank-row-main"><b>Elbow Plank ${label} - (${target})</b></div>${resultMarkup}<div data-side-failure-entry="${side}" hidden><input type="number" min="0" max="${target}" inputmode="numeric" placeholder="Seconds achieved"><button class="compact-action compact-action--danger" type="button" data-side-fail-save="${side}">Save</button></div>`;
  }

  function readSideState(node){
    const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    if(!context?.steps?.length) return null;
    const steps=Array.from(document.querySelectorAll('#currentWorkoutOut .current-step'));
    const index=steps.indexOf(node.closest('.current-step'));
    const step=context.steps[index];
    if(!step||!/\bside\s+plank\b/i.test(String(step.name||''))) return null;
    const target=Math.round(Number(step.target)||0);
    const key=`__baseline_fitness_side_plank_v1__::${context.planId||0}::${context.sessionIndex||0}::${index}`;
    let results={left:null,right:null};
    try{ results=Object.assign(results,JSON.parse(localStorage.getItem(key)||'null')||{}); }catch(_error){}
    const active=index===context.stepIndex&&context.started&&context.canStart;
    return {target,results,active};
  }

  function normaliseSideRows(){
    document.querySelectorAll('#currentWorkoutOut .side-plank-manual').forEach(wrap=>{
      const state=readSideState(wrap);
      if(!state) return;
      const signature=JSON.stringify({target:state.target,active:state.active,left:state.results.left,right:state.results.right});
      if(wrap.dataset.coherentSignature===signature) return;
      wrap.dataset.coherentSignature=signature;
      const left=wrap.querySelector('[data-manual-side="left"]');
      const right=wrap.querySelector('[data-manual-side="right"]');
      if(!left||!right) return;
      left.classList.add('current-step-like-row');
      right.classList.add('current-step-like-row');
      left.innerHTML=rowMarkup('left',state.target,state.active&&!state.results.left,state.results.left);
      right.innerHTML=rowMarkup('right',state.target,state.active&&Boolean(state.results.left)&&!state.results.right,state.results.right);
      right.classList.toggle('is-locked',!state.results.left);
    });
  }

  function installStyles(){
    if(document.getElementById('baseline-side-plank-row-coherence')) return;
    const style=document.createElement('style');
    style.id='baseline-side-plank-row-coherence';
    style.textContent=`
      #currentWorkoutOut .current-step:has(> .side-plank-manual){display:block!important}
      #currentWorkoutOut .current-step:has(> .side-plank-manual)>.current-step-head{display:flex!important}
      #currentWorkoutOut .current-step:has(> .side-plank-manual) .side-plank-original-actions-hidden{display:flex!important}
      #currentWorkoutOut .side-plank-manual{display:block!important;margin:0!important}
      #currentWorkoutOut .side-plank-side.current-step-like-row{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;min-height:72px!important;padding:14px 0!important;border:0!important;border-top:1px solid rgba(255,255,255,.12)!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
      #currentWorkoutOut .side-plank-side.current-step-like-row:last-child{border-bottom:1px solid rgba(255,255,255,.12)!important}
      #currentWorkoutOut .side-plank-row-main{min-width:0;font-weight:850}
      #currentWorkoutOut .side-plank-side .actions-inline{display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:8px!important;margin:0!important}
      #currentWorkoutOut .side-plank-side [data-side-success],#currentWorkoutOut .side-plank-side [data-side-fail]{width:58px!important;min-width:58px!important;height:58px!important;min-height:58px!important;padding:0!important;display:grid!important;place-items:center!important;font-size:1.7rem!important}
      #currentWorkoutOut .side-plank-side [data-side-success]::before,#currentWorkoutOut .side-plank-side [data-side-fail]::before{content:none!important}
      #currentWorkoutOut .side-plank-side .side-plank-result{margin-left:auto!important}
      #currentWorkoutOut .side-plank-side [data-side-failure-entry]{width:100%;margin-top:8px}
      #currentWorkoutOut .side-plank-side [data-side-failure-entry][hidden]{display:none!important}
      #currentWorkoutOut .side-plank-side.is-locked{opacity:.55!important}
      @media(max-width:620px){#currentWorkoutOut .side-plank-side.current-step-like-row{align-items:flex-start!important;flex-wrap:wrap!important}}
    `;
    document.head.appendChild(style);
  }

  function installPatch(){
    installStyles();
    normaliseSideRows();
    new MutationObserver(()=>queueMicrotask(normaliseSideRows)).observe(document.body,{childList:true,subtree:true});
    document.addEventListener('baseline:fitness-workout-updated',normaliseSideRows);
    document.documentElement.setAttribute('data-baseline-side-plank-rows',BUILD);
  }

  const script=document.createElement('script');
  script.src=SOURCE;
  script.defer=true;
  script.onload=installPatch;
  script.onerror=installPatch;
  document.head.appendChild(script);
})(window);
