/* Baseline Lifestyle — immediate reuse of an already-approved microphone. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260712_1';
  if(global.__BASELINE_VOICE_ACCESS__) return;
  global.__BASELINE_VOICE_ACCESS__=true;

  const base=global.BASELINE_voice;
  if(!base) return;

  let permissionState='unknown';
  let approvalRemembered=false;
  let pending=null;

  async function primePermissionState(){
    try{
      if(!global.navigator?.permissions?.query) return permissionState;
      const status=await global.navigator.permissions.query({name:'microphone'});
      permissionState=String(status?.state||'unknown');
      if(permissionState==='granted') approvalRemembered=true;
      if(status){
        status.onchange=()=>{
          permissionState=String(status.state||'unknown');
          approvalRemembered=permissionState==='granted';
        };
      }
    }catch(_error){}
    return permissionState;
  }

  // Resolve permission state before the user starts a workout. This avoids
  // opening and immediately closing a second media stream after permission has
  // already been granted in the browser.
  primePermissionState();

  async function prepareMicrophone(){
    const support=base.support?.()||{};
    if(!support.secureContext) throw new Error('secure_context_required');
    if(!support.recognition) throw new Error('speech_recognition_unsupported');

    if(approvalRemembered||permissionState==='granted') return true;
    if(permissionState==='denied') throw new Error('microphone_permission_denied');
    if(pending) return pending;

    // When the Permissions API has not resolved, preserve the click's user
    // activation and request through the original implementation immediately.
    pending=Promise.resolve(base.prepareMicrophone())
      .then(result=>{
        approvalRemembered=true;
        permissionState='granted';
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
