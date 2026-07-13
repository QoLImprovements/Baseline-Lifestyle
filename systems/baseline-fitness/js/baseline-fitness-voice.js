/* Baseline Fitness — load the preserved voice runtime, then split side planks by cloning the native timed row. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_SIDE_PLANK_NATIVE_ROWS_20260713_8';
  const SOURCE='/systems/baseline-fitness/js/baseline-fitness-voice-original.js?v='+BUILD;
  let renderQueued=false;

  function targetFor(row,manual){
    return String(row?.querySelector(':scope > .current-step-head b')?.textContent||'').match(/\((\d+)\)/)?.[1]
      || String(manual?.textContent||'').match(/\b(\d+)\b/)?.[1]
      || '0';
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

  function clearActionData(button){
    Array.from(button.attributes).forEach(attribute=>{
      if(attribute.name.startsWith('data-')||attribute.name==='id') button.removeAttribute(attribute.name);
    });
    button.type='button';
  }

  function configureAction(button,attribute,side,enabled,label){
    clearActionData(button);
    button.setAttribute(attribute,side);
    button.setAttribute('aria-label',label);
    if(enabled) button.removeAttribute('disabled');
    else button.setAttribute('disabled','');
    return button;
  }

  function fallbackControls(side,enabled){
    const disabled=enabled?'':' disabled';
    const wrap=document.createElement('div');
    wrap.innerHTML=`<button class="compact-action compact-action--ghost" type="button" data-side-timer="${side}"${disabled}>Start Timer</button>
      <button class="compact-action compact-action--success step-icon-btn" type="button" data-side-success="${side}" aria-label="Success"${disabled}>✓</button>
      <button class="compact-action compact-action--danger step-icon-btn" type="button" data-side-fail="${side}" aria-label="Fail"${disabled}>✕</button>`;
    return Array.from(wrap.children);
  }

  function nativeControls(sourceRow,side,enabled){
    const sourceActions=sourceRow.querySelector(':scope > .current-step-head .step-actions');
    if(!sourceActions) return fallbackControls(side,enabled);

    const timer=Array.from(sourceActions.querySelectorAll('button')).find(button=>/start\s*timer/i.test(button.textContent||''));
    const success=sourceActions.querySelector('button.compact-action--success');
    const fail=sourceActions.querySelector('button.compact-action--danger');
    if(!timer||!success||!fail) return fallbackControls(side,enabled);

    return [
      configureAction(timer.cloneNode(true),'data-side-timer',side,enabled,'Start Timer'),
      configureAction(success.cloneNode(true),'data-side-success',side,enabled,'Success'),
      configureAction(fail.cloneNode(true),'data-side-fail',side,enabled,'Fail')
    ];
  }

  function sideRow(side,state,sourceRow){
    const label=side==='left'?'Left':'Right';
    const result=state.results[side];
    const enabled=state.active&&!result&&(side==='left'||Boolean(state.results.left));
    const clone=sourceRow.cloneNode(true);

    clone.removeAttribute('id');
    clone.removeAttribute('hidden');
    clone.classList.remove('side-plank-source-row','active','done','failed','is-locked');
    clone.classList.add('side-plank-standard-row');
    clone.classList.toggle('active',enabled);
    clone.classList.toggle('done',Boolean(result));
    clone.classList.toggle('is-locked',side==='right'&&!state.results.left);
    clone.dataset.manualSide=side;

    clone.querySelectorAll('.side-plank-manual').forEach(node=>node.remove());
    clone.querySelectorAll('.current-step-text,.step-subnote,.failure-entry,[data-side-failure-entry]').forEach(node=>node.remove());

    const heading=clone.querySelector(':scope > .current-step-head');
    if(heading){
      heading.hidden=false;
      heading.removeAttribute('hidden');
    }

    let nameNode=clone.querySelector(':scope > .current-step-head > div:first-child b');
    if(!nameNode&&heading){
      const main=document.createElement('div');
      nameNode=document.createElement('b');
      main.appendChild(nameNode);
      heading.prepend(main);
    }
    if(nameNode) nameNode.textContent=`Elbow Side Plank ${label} - (${state.target})`;

    let actions=clone.querySelector(':scope > .current-step-head .step-actions');
    if(!actions&&heading){
      actions=document.createElement('div');
      actions.className='step-actions';
      heading.appendChild(actions);
    }
    if(actions){
      actions.classList.remove('side-plank-original-actions-hidden');
      actions.hidden=false;
      actions.removeAttribute('hidden');
      if(result) actions.innerHTML=resultMarkup(result);
      else actions.replaceChildren(...nativeControls(sourceRow,side,enabled));
    }

    const failure=document.createElement('div');
    failure.setAttribute('data-side-failure-entry',side);
    failure.hidden=true;
    failure.innerHTML=`<input type="number" min="0" max="${state.target}" inputmode="numeric" placeholder="Seconds achieved">
      <button class="compact-action compact-action--danger" type="button" data-side-fail-save="${side}">Save</button>`;
    clone.appendChild(failure);

    return clone;
  }

  function normaliseSidePlankRows(){
    renderQueued=false;
    document.querySelectorAll('#currentWorkoutOut .current-step').forEach(row=>{
      const manual=row.querySelector(':scope > .side-plank-manual');
      if(!manual) return;

      const target=targetFor(row,manual);
      const state=sideStorageState(row,target);
      const signature=JSON.stringify({
        build:BUILD,
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
      manual.classList.add('side-plank-standard-list');

      if(manual.dataset.renderSignature===signature) return;
      manual.dataset.renderSignature=signature;
      manual.replaceChildren(sideRow('left',state,row),sideRow('right',state,row));
    });
  }

  function scheduleNormalise(){
    if(renderQueued) return;
    renderQueued=true;
    if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(normaliseSidePlankRows);
    else global.setTimeout(normaliseSidePlankRows,0);
  }

  function installStyles(){
    if(document.getElementById('baseline-side-plank-native-rows')) return;
    const oldStyle=document.getElementById('baseline-side-plank-three-rows');
    if(oldStyle) oldStyle.remove();
    const style=document.createElement('style');
    style.id='baseline-side-plank-native-rows';
    style.textContent=`
      #currentWorkoutOut .side-plank-source-row{display:contents!important}
      #currentWorkoutOut .side-plank-source-row>:scope.current-step-head,
      #currentWorkoutOut .side-plank-source-row>.current-step-head{display:none!important}
      #currentWorkoutOut .side-plank-standard-list{display:contents!important;margin:0!important;padding:0!important}
      #currentWorkoutOut .side-plank-standard-row .side-plank-original-actions-hidden{display:flex!important}
      #currentWorkoutOut .side-plank-standard-row [data-side-failure-entry]{margin-top:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
      #currentWorkoutOut .side-plank-standard-row [data-side-failure-entry][hidden]{display:none!important}
    `;
    document.head.appendChild(style);
  }

  function installPatch(){
    installStyles();
    scheduleNormalise();
    const root=document.getElementById('currentWorkoutOut');
    if(root) new MutationObserver(scheduleNormalise).observe(root,{childList:true,subtree:true});
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
