/* Baseline Fitness — load the preserved voice runtime, then keep side plank as one workout row. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_SIDE_PLANK_SINGLE_ROW_20260713_2';
  const SOURCE='/systems/baseline-fitness/js/baseline-fitness-voice-original.js?v='+BUILD;

  function isSidePlankStep(node){
    const text=String(node?.querySelector('.current-step-head b')?.textContent||'');
    return /elbow\s+(?:side\s+)?plank/i.test(text);
  }

  function normaliseSingleRow(){
    document.querySelectorAll('#currentWorkoutOut .current-step').forEach(row=>{
      const manual=row.querySelector(':scope > .side-plank-manual');
      if(!manual&&!isSidePlankStep(row)) return;

      const heading=row.querySelector('.current-step-head');
      const label=heading?.querySelector('b');
      const actions=heading?.querySelector('.step-actions');
      const target=String(label?.textContent||'').match(/\((\d+)\)/)?.[1]
        || String(manual?.textContent||'').match(/\b(\d+)\b/)?.[1]
        || '';

      row.classList.add('side-plank-single-row');
      if(heading) heading.style.removeProperty('display');
      if(actions) actions.classList.remove('side-plank-original-actions-hidden');
      if(label&&target) label.textContent=`Elbow Plank - (${target})`;
      if(manual) manual.hidden=true;
    });
  }

  function installStyles(){
    if(document.getElementById('baseline-side-plank-single-row')) return;
    const style=document.createElement('style');
    style.id='baseline-side-plank-single-row';
    style.textContent=`
      #currentWorkoutOut .side-plank-single-row{
        display:block!important;
        min-height:0!important;
        padding:10px 12px!important;
        border-radius:16px!important;
        border:1px solid rgba(255,255,255,.12)!important;
        background:rgba(255,255,255,.05)!important;
      }
      #currentWorkoutOut .side-plank-single-row>.current-step-head{
        display:flex!important;
      }
      #currentWorkoutOut .side-plank-single-row .step-actions{
        display:flex!important;
      }
      #currentWorkoutOut .side-plank-single-row>.side-plank-manual{
        display:none!important;
      }
    `;
    document.head.appendChild(style);
  }

  function installPatch(){
    installStyles();
    normaliseSingleRow();
    new MutationObserver(()=>queueMicrotask(normaliseSingleRow)).observe(document.body,{childList:true,subtree:true,characterData:true});
    document.addEventListener('baseline:fitness-workout-updated',normaliseSingleRow);
    document.documentElement.setAttribute('data-baseline-side-plank-row',BUILD);
  }

  const script=document.createElement('script');
  script.src=SOURCE;
  script.defer=true;
  script.onload=installPatch;
  script.onerror=installPatch;
  document.head.appendChild(script);
})(window);
