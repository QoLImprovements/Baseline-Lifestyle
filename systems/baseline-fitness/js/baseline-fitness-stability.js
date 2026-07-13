/* Baseline Fitness — targeted DOM stability and one Binaural icon owner. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_STABILITY_20260713_4';
  const root=global.document?.documentElement;
  if(global.__BASELINE_FITNESS_STABILITY__) return;
  global.__BASELINE_FITNESS_STABILITY__=true;

  const NativeMutationObserver=global.MutationObserver;
  const guardedCallbacks=new Set(['scheduleEnhancement','scheduleCoherence','scheduleNormalise']);

  if(typeof NativeMutationObserver==='function'){
    function StableMutationObserver(callback){
      if(typeof callback!=='function'||!guardedCallbacks.has(String(callback.name||''))){
        return new NativeMutationObserver(callback);
      }

      let target=null;
      let options=null;
      let disconnected=false;
      let callbackQueued=false;
      let reattachQueued=false;
      let pendingRecords=[];

      const native=new NativeMutationObserver(records=>{
        if(disconnected) return;
        if(records?.length) pendingRecords.push(...records);
        if(callbackQueued) return;
        callbackQueued=true;
        native.disconnect();

        const run=()=>{
          callbackQueued=false;
          const recordsToDeliver=pendingRecords.splice(0);
          try{ callback(recordsToDeliver,wrapper); }
          catch(error){ console.error('[Baseline Fitness observer] callback failed:',error); }
          scheduleReattach();
        };

        if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(run);
        else global.setTimeout(run,16);
      });

      function scheduleReattach(){
        if(disconnected||!target||reattachQueued) return;
        reattachQueued=true;
        const attach=()=>{
          reattachQueued=false;
          if(disconnected||!target) return;
          try{ native.observe(target,options); }
          catch(error){ console.error('[Baseline Fitness observer] could not resume:',error); }
        };
        if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(attach);
        else global.setTimeout(attach,32);
      }

      const wrapper={
        observe(nextTarget,nextOptions){
          target=nextTarget;
          options=nextOptions;
          disconnected=false;
          pendingRecords=[];
          native.observe(nextTarget,nextOptions);
        },
        disconnect(){
          disconnected=true;
          target=null;
          options=null;
          pendingRecords=[];
          native.disconnect();
        },
        takeRecords(){
          const records=native.takeRecords();
          if(records?.length) pendingRecords.push(...records);
          return pendingRecords.splice(0);
        }
      };

      try{ Object.setPrototypeOf(wrapper,NativeMutationObserver.prototype); }catch(_error){}
      return wrapper;
    }

    StableMutationObserver.prototype=NativeMutationObserver.prototype;
    try{ Object.setPrototypeOf(StableMutationObserver,NativeMutationObserver); }catch(_error){}
    global.MutationObserver=StableMutationObserver;

    // The observer contract has one owner. Do not allow the older access layer
    // to replace MutationObserver a second time.
    global.__BASELINE_FITNESS_MUTATION_GUARD__=true;
  }

  // Do not replace the browser SpeechRecognition constructor on page entry.
  // The Fitness workout runtime remains available without a global constructor proxy.
  global.__BASELINE_FITNESS_PERSISTENT_RECOGNITION__=true;

  function makeBinauralIconWhite(){
    const button=global.document?.getElementById?.('bl-beats-toggle');
    if(!button) return false;
    button.style.setProperty('color','#fff','important');
    const icon=button.querySelector('.bl-icon-svg');
    if(icon) icon.style.setProperty('color','#fff','important');
    const path=icon?.querySelector('path');
    if(path) path.style.setProperty('fill','#fff','important');
    return true;
  }

  function installBinauralIcon(){
    if(makeBinauralIconWhite()) return;
    const homebar=global.document?.querySelector?.('.bl-homebar');
    if(!homebar||typeof NativeMutationObserver!=='function') return;
    const observer=new NativeMutationObserver(()=>{
      if(makeBinauralIconWhite()) observer.disconnect();
    });
    observer.observe(homebar,{childList:true,subtree:true});
  }

  root?.setAttribute('data-baseline-fitness-stability',BUILD);
  if(global.document?.readyState==='loading') global.document.addEventListener('DOMContentLoaded',installBinauralIcon,{once:true});
  else installBinauralIcon();
})(window);
