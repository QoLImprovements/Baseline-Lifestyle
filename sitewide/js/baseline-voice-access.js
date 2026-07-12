/* Baseline Lifestyle — immediate reuse of an already-approved microphone. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260712_3';
  const FITNESS_GUARD_BUILD='BASELINE_FITNESS_MUTATION_GUARD_20260712_1';
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

  installFitnessMutationGuard();

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
