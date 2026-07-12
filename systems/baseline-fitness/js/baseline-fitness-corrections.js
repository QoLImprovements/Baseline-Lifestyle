/* Baseline Fitness runtime/state corrections — 2026-07-12. */
(function(global){
  'use strict';

  if(global.__BASELINE_FITNESS_CORRECTIONS__) return;
  global.__BASELINE_FITNESS_CORRECTIONS__=true;

  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  let microphoneReady=false;
  let microphonePreparing=null;
  let applying=false;

  function numericTarget(text){
    const match=String(text||'').match(/\d+(?:\.\d+)?/);
    return match?match[0]:'';
  }

  function compactExerciseRows(){
    $$('.session-step-list .current-step').forEach(row=>{
      const head=$('.current-step-head',row);
      const text=$('.current-step-text',row);
      if(!head||!text) return;
      const main=head.firstElementChild;
      const nameNode=main?.querySelector('b');
      if(!main||!nameNode) return;
      main.classList.add('current-step-main');
      nameNode.classList.add('current-step-label');
      const target=numericTarget(text.textContent);
      const name=String(nameNode.textContent||'').replace(/\s*-\s*\([^)]*\)\s*$/,'').trim();
      nameNode.textContent=target?`${name} - (${target})`:name;
      text.hidden=true;
    });
  }

  function savedPlanExists(){
    const fitness=global.BASELINE_fitnessWorkout;
    const context=fitness?.getCurrentContext?.();
    return Boolean(context&&context.available&&context.planId);
  }

  function restoreSavedPlanShell(){
    const generator=$('#myPlanGeneratorWrap');
    const saved=$('#myPlanSavedWrap');
    const cancel=$('#cancelEditPlanBtn');
    if(!generator||!saved||!savedPlanExists()) return;
    // Do not interfere with a deliberate Edit Options session.
    if(cancel&&!cancel.hidden) return;
    if(!generator.hidden||saved.hidden){
      generator.hidden=true;
      saved.hidden=false;
    }
  }

  async function prepareKnownMicrophonePermission(){
    if(microphoneReady) return true;
    if(microphonePreparing) return microphonePreparing;
    const voice=global.BASELINE_voice;
    if(!voice?.prepareMicrophone) return false;
    microphonePreparing=(async()=>{
      try{
        if(global.navigator?.permissions?.query){
          const permission=await global.navigator.permissions.query({name:'microphone'});
          if(permission.state!=='granted') return false;
        }else{
          return false;
        }
        await voice.prepareMicrophone();
        microphoneReady=true;
        document.documentElement.setAttribute('data-baseline-microphone-ready','true');
        return true;
      }catch(_error){
        return false;
      }finally{
        microphonePreparing=null;
      }
    })();
    return microphonePreparing;
  }

  function makeVoiceControlsImmediate(){
    // Build the flyout during initial page setup rather than on its first click.
    const voice=global.BASELINE_voice;
    if(voice?.openSettings&&voice?.closeSettings&&!$('#bl-voice-flyout')){
      voice.openSettings();
      voice.closeSettings();
    }
    prepareKnownMicrophonePermission();
  }

  function applyCorrections(){
    if(applying) return;
    applying=true;
    try{
      compactExerciseRows();
      restoreSavedPlanShell();
    }finally{
      applying=false;
    }
  }

  function boot(){
    makeVoiceControlsImmediate();
    applyCorrections();
    document.addEventListener('baseline:fitness-workout-updated',applyCorrections);
    document.addEventListener('baseline:auth',()=>setTimeout(applyCorrections,0));
    document.addEventListener('baseline:voice-settings',prepareKnownMicrophonePermission);
    document.addEventListener('click',event=>{
      const button=event.target?.closest?.('button');
      if(!button) return;
      if(button.id==='endVoiceWorkoutBtn') setTimeout(restoreSavedPlanShell,0);
      if(button.id==='bl-voice-save'||button.id==='bl-voice-test-mic') setTimeout(prepareKnownMicrophonePermission,0);
    },true);
    new MutationObserver(applyCorrections).observe(document.body,{childList:true,subtree:true});
  }

  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot,{once:true}):boot();
})(window);
