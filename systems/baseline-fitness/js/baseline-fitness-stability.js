/* Baseline Fitness — targeted runtime stability guards. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_STABILITY_20260713_3';
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

    global.__BASELINE_FITNESS_MUTATION_GUARD__=true;
  }

  function installRecognitionProxy(){
    const NativeRecognition=global.SpeechRecognition||global.webkitSpeechRecognition;
    if(typeof NativeRecognition!=='function'||global.__BASELINE_FITNESS_RECOGNITION_PROXY__) return;
    global.__BASELINE_FITNESS_RECOGNITION_PROXY__=true;

    function FitnessRecognition(){
      const native=new NativeRecognition();
      let resultHandler=null;

      try{
        native.addEventListener('result',event=>{
          if(typeof resultHandler!=='function') return;
          const results=Array.from(event?.results||[],result=>{
            const alternatives=Array.from(result||[],alternative=>({
              transcript:String(alternative?.transcript==null?'':alternative.transcript),
              confidence:Number(alternative?.confidence)||0
            }));
            alternatives.isFinal=Boolean(result?.isFinal);
            return alternatives;
          });
          resultHandler.call(native,{resultIndex:Number(event?.resultIndex)||0,results});
        });
        Object.defineProperty(native,'onresult',{
          configurable:true,
          enumerable:true,
          get(){ return resultHandler; },
          set(value){ resultHandler=typeof value==='function'?value:null; }
        });
      }catch(_error){}

      return native;
    }

    FitnessRecognition.prototype=NativeRecognition.prototype;
    try{ Object.setPrototypeOf(FitnessRecognition,NativeRecognition); }catch(_error){}
    global.SpeechRecognition=FitnessRecognition;
    global.webkitSpeechRecognition=FitnessRecognition;

    global.__BASELINE_FITNESS_PERSISTENT_RECOGNITION__=true;
    root?.setAttribute('data-baseline-fitness-recognition-proxy',BUILD);
  }

  function whitenBinauralIcon(){
    const button=global.document?.getElementById?.('bl-beats-toggle');
    if(!button) return false;
    button.style.setProperty('color','#fff','important');
    button.querySelectorAll('.bl-btn-icon,.bl-icon-svg,svg,path,use').forEach(node=>{
      node.style.setProperty('color','#fff','important');
      if(/^(svg|path|use)$/i.test(String(node.tagName||''))){
        node.style.setProperty('fill','#fff','important');
        node.style.setProperty('stroke','#fff','important');
      }
    });
    return true;
  }

  function installIconGuard(){
    whitenBinauralIcon();
    [0,50,250,1000].forEach(delay=>global.setTimeout(whitenBinauralIcon,delay));
    const homebar=global.document?.querySelector?.('.bl-homebar');
    if(!homebar||typeof NativeMutationObserver!=='function') return;
    const observer=new NativeMutationObserver(()=>whitenBinauralIcon());
    observer.observe(homebar,{childList:true,subtree:true});
  }

  installRecognitionProxy();
  root?.setAttribute('data-baseline-fitness-stability',BUILD);
  if(global.document?.readyState==='loading') global.document.addEventListener('DOMContentLoaded',installIconGuard,{once:true});
  else installIconGuard();
})(window);
