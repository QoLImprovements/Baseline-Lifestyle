/* Baseline Lifestyle — immediate reuse of an already-approved microphone. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260712_2';
  const APPROVED_KEY='__baseline_microphone_approved_v1__';
  if(global.__BASELINE_VOICE_ACCESS__) return;
  global.__BASELINE_VOICE_ACCESS__=true;

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
