/* Baseline Lifestyle — immediate reuse of an already-approved microphone. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260712_4';
  const FITNESS_GUARD_BUILD='BASELINE_FITNESS_MUTATION_GUARD_20260712_1';
  const FITNESS_LIVE_BUILD='BASELINE_FITNESS_LIVE_RECOGNITION_20260712_1';
  const APPROVED_KEY='__baseline_microphone_approved_v1__';
  if(global.__BASELINE_VOICE_ACCESS__) return;
  global.__BASELINE_VOICE_ACCESS__=true;

  /*
   * The Fitness voice controller enhances workout markup with a MutationObserver.
   * Its callback schedules DOM work in a microtask. Without disconnecting first,
   * those writes are observed again and create a permanent refresh loop.
   *
   * Guard only that named Fitness observer. Other sitewide observers remain native.
   * The observer is resumed on the next animation frame, after its queued DOM work.
   */
  function installFitnessMutationGuard(){
    const root=global.document?.documentElement;
    const NativeMutationObserver=global.MutationObserver;
    if(root?.getAttribute('data-app')!=='fitness') return;
    if(typeof NativeMutationObserver!=='function'||global.__BASELINE_FITNESS_MUTATION_GUARD__) return;

    global.__BASELINE_FITNESS_MUTATION_GUARD__=true;

    function GuardedMutationObserver(callback){
      if(typeof callback!=='function') return new NativeMutationObserver(callback);
      if(callback.name!=='scheduleEnhancement') return new NativeMutationObserver(callback);

      let observedTarget=null;
      let observedOptions=null;
      let deliberatelyDisconnected=false;
      let resumeHandle=0;
      let nativeDisconnect=()=>{};
      let nativeObserve=()=>{};

      const observer=new NativeMutationObserver((records,instance)=>{
        nativeDisconnect();
        try{
          callback(records,instance);
        }finally{
          if(deliberatelyDisconnected||!observedTarget) return;
          const resume=()=>{
            resumeHandle=0;
            if(deliberatelyDisconnected||!observedTarget) return;
            try{ nativeObserve(observedTarget,observedOptions); }catch(_error){}
          };
          if(typeof global.requestAnimationFrame==='function') resumeHandle=global.requestAnimationFrame(resume);
          else resumeHandle=global.setTimeout(resume,0);
        }
      });

      nativeObserve=observer.observe.bind(observer);
      nativeDisconnect=observer.disconnect.bind(observer);
      const nativeTakeRecords=observer.takeRecords.bind(observer);

      observer.observe=(target,options)=>{
        observedTarget=target;
        observedOptions=options;
        deliberatelyDisconnected=false;
        return nativeObserve(target,options);
      };
      observer.disconnect=()=>{
        deliberatelyDisconnected=true;
        observedTarget=null;
        observedOptions=null;
        if(resumeHandle){
          if(typeof global.cancelAnimationFrame==='function') global.cancelAnimationFrame(resumeHandle);
          else global.clearTimeout(resumeHandle);
          resumeHandle=0;
        }
        return nativeDisconnect();
      };
      observer.takeRecords=()=>nativeTakeRecords();
      return observer;
    }

    GuardedMutationObserver.prototype=NativeMutationObserver.prototype;
    try{ Object.setPrototypeOf(GuardedMutationObserver,NativeMutationObserver); }catch(_error){}
    global.MutationObserver=GuardedMutationObserver;
    root.setAttribute('data-baseline-fitness-mutation-guard',FITNESS_GUARD_BUILD);
  }

  function normaliseTranscript(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ').replace(/\s+/g,' ').trim();
  }

  function isImmediateFitnessCommand(value){
    const text=normaliseTranscript(value);
    if(text==='go'||text==='next') return true;
    if(/\b(fail|failed|failure)\b/i.test(text)) return true;
    return /\b(success|succeeded|successful)\b/i.test(text);
  }

  /*
   * Chrome normally waits for a final recognition result before the Fitness
   * controller sees a command. A short command such as “Go” can therefore sit in
   * the Processing state for several seconds. This wrapper enables interim results
   * immediately before recognition starts and allows only command-like interim
   * transcripts through. Numerical answers remain blocked until the result is final,
   * preventing “twenty-five” from being saved prematurely as “twenty”.
   */
  function installFitnessLiveRecognition(){
    const root=global.document?.documentElement;
    if(root?.getAttribute('data-app')!=='fitness') return;
    if(global.__BASELINE_FITNESS_LIVE_RECOGNITION__) return;

    const NativeRecognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
    global.BASELINE_fitnessLiveRecognition=Object.freeze({
      BUILD:FITNESS_LIVE_BUILD,
      isImmediateCommand:isImmediateFitnessCommand,
      normalise:normaliseTranscript
    });
    if(typeof NativeRecognition!=='function') return;

    global.__BASELINE_FITNESS_LIVE_RECOGNITION__=true;

    function LiveSpeechRecognition(){
      const recognition=new NativeRecognition();
      const nativeStart=recognition.start.bind(recognition);

      try{ recognition.interimResults=true; }catch(_error){}

      recognition.addEventListener('result',event=>{
        let allow=false;
        let finalResult=false;
        const first=Math.max(0,Number(event?.resultIndex)||0);
        const results=event?.results||[];

        for(let index=first;index<results.length;index+=1){
          const result=results[index];
          if(!result) continue;
          if(result.isFinal){
            finalResult=true;
            allow=true;
            break;
          }
          for(let alternative=0;alternative<result.length;alternative+=1){
            if(isImmediateFitnessCommand(result[alternative]?.transcript)){
              allow=true;
              break;
            }
          }
          if(allow) break;
        }

        if(!allow){
          event.stopImmediatePropagation?.();
          root.setAttribute('data-baseline-fitness-voice-input','hearing');
          return;
        }

        root.setAttribute('data-baseline-fitness-voice-input',finalResult?'final':'live');
        if(finalResult){
          global.queueMicrotask?.(()=>{
            const status=global.document?.querySelector?.('#voiceWorkoutModal .voice-mic-status');
            if(status?.textContent==='Processing') status.textContent='Listening';
          });
        }
      });

      recognition.addEventListener('speechend',()=>{
        const status=global.document?.querySelector?.('#voiceWorkoutModal .voice-mic-status');
        if(status?.textContent==='Processing') status.textContent='Listening';
      });

      recognition.start=()=>{
        try{ recognition.interimResults=true; }catch(_error){}
        return nativeStart();
      };
      return recognition;
    }

    LiveSpeechRecognition.prototype=NativeRecognition.prototype;
    try{ Object.setPrototypeOf(LiveSpeechRecognition,NativeRecognition); }catch(_error){}

    if(global.SpeechRecognition) global.SpeechRecognition=LiveSpeechRecognition;
    if(global.webkitSpeechRecognition) global.webkitSpeechRecognition=LiveSpeechRecognition;
    if(!global.SpeechRecognition) global.SpeechRecognition=LiveSpeechRecognition;

    root.setAttribute('data-baseline-fitness-live-recognition',FITNESS_LIVE_BUILD);
  }

  installFitnessMutationGuard();
  installFitnessLiveRecognition();

  const base=global.BASELINE_voice;
  if(!base) return;

  function readRememberedApproval(){
    try{ return global.sessionStorage?.getItem(APPROVED_KEY)==='1'; }
    catch(_error){ return false; }
  }
  function rememberApproval(value){
    try{
      if(value) global.sessionStorage?.setItem(APPROVED_KEY,'1');
      else global.sessionStorage?.removeItem(APPROVED_KEY);
    }catch(_error){}
  }

  let permissionState='unknown';
  let approvalRemembered=readRememberedApproval();
  let pending=null;

  async function primePermissionState(){
    try{
      if(!global.navigator?.permissions?.query) return permissionState;
      const status=await global.navigator.permissions.query({name:'microphone'});
      permissionState=String(status?.state||'unknown');
      if(permissionState==='granted'){
        approvalRemembered=true;
        rememberApproval(true);
      }else if(permissionState==='denied'){
        approvalRemembered=false;
        rememberApproval(false);
      }
      if(status){
        status.onchange=()=>{
          permissionState=String(status.state||'unknown');
          approvalRemembered=permissionState==='granted';
          rememberApproval(approvalRemembered);
        };
      }
    }catch(_error){}
    return permissionState;
  }

  // Resolve permission state before the user starts a workout. Session memory
  // removes the media-device reacquisition delay even when the permission query
  // has not yet completed after navigation.
  primePermissionState();

  async function prepareMicrophone(){
    const support=base.support?.()||{};
    if(!support.secureContext) throw new Error('secure_context_required');
    if(!support.recognition) throw new Error('speech_recognition_unsupported');

    if(approvalRemembered||permissionState==='granted') return true;
    if(permissionState==='denied') throw new Error('microphone_permission_denied');
    if(pending) return pending;

    // The first permission request remains inside the user's click gesture.
    pending=Promise.resolve(base.prepareMicrophone())
      .then(result=>{
        approvalRemembered=true;
        permissionState='granted';
        rememberApproval(true);
        return result;
      })
      .finally(()=>{ pending=null; });
    return pending;
  }

  const wrapped=Object.freeze(Object.assign({},base,{
    BUILD:String(base.BUILD||'')+'+'+BUILD,
    prepareMicrophone,
    microphonePermissionState:()=>permissionState,
    primeMicrophonePermission:primePermissionState
  }));

  global.BASELINE_voice=wrapped;
  document.documentElement.setAttribute('data-baseline-voice-access',BUILD);
})(window);