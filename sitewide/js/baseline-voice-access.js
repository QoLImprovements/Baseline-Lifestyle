/* Baseline Lifestyle — microphone permission and continuous Fitness recognition. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260712_7';
  const FITNESS_RECOGNITION_BUILD='BASELINE_FITNESS_PERSISTENT_RECOGNITION_20260712_1';
  const FITNESS_GUARD_BUILD='BASELINE_FITNESS_MUTATION_GUARD_20260712_2';
  const APPROVED_KEY='__baseline_microphone_approved_v1__';
  if(global.__BASELINE_VOICE_ACCESS__) return;
  global.__BASELINE_VOICE_ACCESS__=true;

  const root=global.document?.documentElement;
  const isFitness=root?.getAttribute('data-app')==='fitness';
  const NativeRecognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;

  function installFitnessMutationGuard(){
    const NativeMutationObserver=global.MutationObserver;
    if(!isFitness||typeof NativeMutationObserver!=='function'||global.__BASELINE_FITNESS_MUTATION_GUARD__) return;
    global.__BASELINE_FITNESS_MUTATION_GUARD__=true;

    function GuardedMutationObserver(callback){
      if(typeof callback!=='function'||callback.name!=='scheduleEnhancement'){
        return new NativeMutationObserver(callback);
      }

      let target=null;
      let options=null;
      let disconnected=false;
      let resumeHandle=0;
      let nativeObserve=()=>{};
      let nativeDisconnect=()=>{};

      const observer=new NativeMutationObserver((records,instance)=>{
        nativeDisconnect();
        try{
          callback(records,instance);
        }finally{
          if(disconnected||!target) return;
          const resume=()=>{
            resumeHandle=0;
            if(disconnected||!target) return;
            try{ nativeObserve(target,options); }catch(_error){}
          };
          if(typeof global.requestAnimationFrame==='function') resumeHandle=global.requestAnimationFrame(resume);
          else resumeHandle=global.setTimeout(resume,0);
        }
      });

      nativeObserve=observer.observe.bind(observer);
      nativeDisconnect=observer.disconnect.bind(observer);
      const nativeTakeRecords=observer.takeRecords.bind(observer);

      observer.observe=(nextTarget,nextOptions)=>{
        target=nextTarget;
        options=nextOptions;
        disconnected=false;
        return nativeObserve(nextTarget,nextOptions);
      };
      observer.disconnect=()=>{
        disconnected=true;
        target=null;
        options=null;
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
    root?.setAttribute('data-baseline-fitness-mutation-guard',FITNESS_GUARD_BUILD);
  }

  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  const ONES=Object.freeze({
    zero:0,oh:0,o:0,one:1,two:2,to:2,too:2,three:3,four:4,for:4,
    five:5,six:6,seven:7,eight:8,ate:8,nine:9,ten:10,eleven:11,
    twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,
    seventeen:17,eighteen:18,nineteen:19
  });
  const TENS=Object.freeze({
    twenty:20,thirty:30,forty:40,fifty:50,sixty:60,
    seventy:70,eighty:80,ninety:90
  });
  const FILLERS=new Set([
    'i','ive','completed','complete','achieved','managed','did','done','got','made',
    'about','approximately','sets','set','seconds','second','a','around','roughly',
    'only','it','was','that','is','the','number','and'
  ]);

  function parseNumber(value){
    const text=normalise(value);
    if(!text||/\bthousand\b/.test(text)) return null;
    const digit=text.match(/\b\d{1,3}\b/);
    if(digit){
      const number=Number(digit[0]);
      return number>=0&&number<=999?number:null;
    }
    let current=0,seen=false,hundredSeen=false;
    for(const token of text.split(' ').filter(Boolean)){
      if(FILLERS.has(token)) continue;
      if(Object.prototype.hasOwnProperty.call(ONES,token)){
        current+=ONES[token];seen=true;continue;
      }
      if(Object.prototype.hasOwnProperty.call(TENS,token)){
        current+=TENS[token];seen=true;continue;
      }
      if(token==='hundred'){
        if(hundredSeen) return null;
        if(current===0) current=1;
        current*=100;hundredSeen=true;seen=true;
      }
    }
    return seen&&current>=0&&current<=999?current:null;
  }

  function canonicalCommand(state,value){
    const text=normalise(value);
    if(!text) return null;
    if(state==='awaiting_go'&&/\bgo\b/i.test(text)) return 'go';
    if((state==='exercise_active'||state==='awaiting_result')&&/\b(fail|failed|failure)\b/i.test(text)) return 'fail';
    if((state==='exercise_active'||state==='awaiting_result')&&/\b(success|succeeded|successful)\b/i.test(text)) return 'success';
    if(state==='resting'&&/\bnext\b/i.test(text)) return 'next';
    return null;
  }

  function makeResult(transcript){
    const result=[{transcript:String(transcript),confidence:1}];
    result.isFinal=true;
    return {resultIndex:0,results:[result]};
  }

  function installPersistentFitnessRecognition(){
    if(!isFitness||typeof NativeRecognition!=='function'||global.__BASELINE_FITNESS_PERSISTENT_RECOGNITION__) return;
    global.__BASELINE_FITNESS_PERSISTENT_RECOGNITION__=true;

    let native=null;
    let nativeRunning=false;
    let nativeWanted=false;
    let nativeRestart=0;
    let activeVirtual=null;
    let pendingNumber=null;
    let numberTimer=0;
    let ignoreInputUntil=0;

    function clearNumber(){
      if(numberTimer){ global.clearTimeout(numberTimer);numberTimer=0; }
      pendingNumber=null;
    }

    function currentState(){
      try{ return String(global.BASELINE_fitnessVoice?.state?.()||''); }
      catch(_error){ return ''; }
    }

    function call(target,name,...args){
      try{ target?.[name]?.(...args); }catch(_error){}
    }

    function emit(transcript){
      const target=activeVirtual;
      if(!target||Date.now()<ignoreInputUntil) return false;
      call(target,'onresult',makeResult(transcript));
      return true;
    }

    function commitNumber(){
      if(numberTimer){ global.clearTimeout(numberTimer);numberTimer=0; }
      const candidate=pendingNumber;pendingNumber=null;
      if(!candidate||candidate.state!==currentState()) return false;
      return emit(String(candidate.value));
    }

    function queueNumber(value,state,isFinal){
      pendingNumber={value,state,updatedAt:Date.now()};
      if(numberTimer) global.clearTimeout(numberTimer);
      numberTimer=global.setTimeout(commitNumber,isFinal?60:430);
      const status=global.document?.querySelector?.('#voiceWorkoutModal .voice-mic-status');
      if(status) status.textContent=`Heard ${value}`;
    }

    function alternatives(result){
      const output=[];
      for(let index=0;index<(result?.length||0);index+=1){
        const transcript=String(result[index]?.transcript||'').trim();
        if(transcript) output.push(transcript);
      }
      return output;
    }

    function handleNativeResult(event){
      if(!activeVirtual||Date.now()<ignoreInputUntil) return;
      if(global.speechSynthesis?.speaking||global.speechSynthesis?.pending) return;

      const state=currentState();
      const numberState=state==='awaiting_sets_number'||state==='awaiting_seconds_number';
      const first=Math.max(0,Number(event?.resultIndex)||0);
      const results=event?.results||[];

      for(let resultIndex=first;resultIndex<results.length;resultIndex+=1){
        const result=results[resultIndex];
        const options=alternatives(result);
        if(!options.length) continue;

        if(numberState){
          for(const transcript of options){
            const value=parseNumber(transcript);
            if(value!==null){ queueNumber(value,state,Boolean(result.isFinal));break; }
          }
          continue;
        }

        for(const transcript of options){
          const command=canonicalCommand(state,transcript);
          if(command){
            clearNumber();
            emit(command);
            return;
          }
        }
      }
    }

    function shouldRemainOpen(){
      if(activeVirtual) return true;
      const modal=global.document?.getElementById?.('voiceWorkoutModal');
      const pause=global.document?.getElementById?.('pauseVoiceListeningBtn');
      const visible=Boolean(modal&&!modal.hidden&&global.document?.body?.classList?.contains('voice-workout-active'));
      const paused=/resume listening/i.test(String(pause?.textContent||''));
      const speaking=Boolean(global.speechSynthesis?.speaking||global.speechSynthesis?.pending);
      return visible&&!paused&&speaking;
    }

    function stopNative(){
      nativeWanted=false;
      if(nativeRestart){ global.clearTimeout(nativeRestart);nativeRestart=0; }
      const current=native;native=null;nativeRunning=false;
      try{ current?.abort?.(); }catch(_error){}
    }

    function schedulePolicyCheck(){
      global.setTimeout(()=>{
        if(!shouldRemainOpen()&&!activeVirtual) stopNative();
      },220);
    }

    function scheduleNativeRestart(delay=35){
      if(nativeRestart){ global.clearTimeout(nativeRestart);nativeRestart=0; }
      if(!nativeWanted) return;
      nativeRestart=global.setTimeout(startNative,delay);
    }

    function startNative(){
      if(nativeRestart){ global.clearTimeout(nativeRestart);nativeRestart=0; }
      if(!nativeWanted||nativeRunning) return;
      try{
        const recognition=new NativeRecognition();
        native=recognition;
        recognition.lang='en-GB';
        recognition.continuous=true;
        recognition.interimResults=true;
        recognition.maxAlternatives=5;
        recognition.onstart=()=>{
          if(native!==recognition) return;
          nativeRunning=true;
          call(activeVirtual,'onstart');
        };
        recognition.onaudiostart=()=>call(activeVirtual,'onaudiostart');
        recognition.onsoundstart=()=>call(activeVirtual,'onsoundstart');
        recognition.onspeechstart=()=>call(activeVirtual,'onspeechstart');
        recognition.onresult=handleNativeResult;
        recognition.onspeechend=()=>{
          if(pendingNumber){
            if(numberTimer) global.clearTimeout(numberTimer);
            numberTimer=global.setTimeout(commitNumber,100);
          }
          call(activeVirtual,'onspeechend');
        };
        recognition.onsoundend=()=>{
          if(pendingNumber&&numberTimer){
            global.clearTimeout(numberTimer);
            numberTimer=global.setTimeout(commitNumber,130);
          }
          call(activeVirtual,'onsoundend');
        };
        recognition.onerror=event=>call(activeVirtual,'onerror',event);
        recognition.onend=()=>{
          if(native!==recognition) return;
          native=null;nativeRunning=false;
          const ended=activeVirtual;activeVirtual=null;
          call(ended,'onend');
          if(nativeWanted) scheduleNativeRestart(35);
        };
        recognition.start();
      }catch(_error){
        native=null;nativeRunning=false;scheduleNativeRestart(90);
      }
    }

    function attach(target){
      activeVirtual=target;
      nativeWanted=true;
      clearNumber();
      ignoreInputUntil=Date.now()+90;
      if(nativeRunning) global.queueMicrotask?.(()=>call(target,'onstart'));
      else startNative();
    }

    function detach(target){
      if(activeVirtual===target) activeVirtual=null;
      clearNumber();
      schedulePolicyCheck();
    }

    function PersistentSpeechRecognition(){
      this.lang='en-GB';
      this.continuous=true;
      this.interimResults=true;
      this.maxAlternatives=5;
      this.onstart=null;
      this.onaudiostart=null;
      this.onsoundstart=null;
      this.onspeechstart=null;
      this.onresult=null;
      this.onspeechend=null;
      this.onsoundend=null;
      this.onerror=null;
      this.onend=null;
    }
    PersistentSpeechRecognition.prototype.start=function(){ attach(this); };
    PersistentSpeechRecognition.prototype.abort=function(){ detach(this); };
    PersistentSpeechRecognition.prototype.stop=function(){ detach(this); };

    try{ Object.setPrototypeOf(PersistentSpeechRecognition,NativeRecognition); }catch(_error){}
    global.SpeechRecognition=PersistentSpeechRecognition;
    global.webkitSpeechRecognition=PersistentSpeechRecognition;
    global.BASELINE_fitnessPersistentRecognition=Object.freeze({
      BUILD:FITNESS_RECOGNITION_BUILD,
      parseNumber,
      commandFor:canonicalCommand
    });
    root.setAttribute('data-baseline-fitness-persistent-recognition',FITNESS_RECOGNITION_BUILD);
  }

  installFitnessMutationGuard();
  installPersistentFitnessRecognition();

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

  primePermissionState();

  async function prepareMicrophone(){
    const support=base.support?.()||{};
    if(!support.secureContext) throw new Error('secure_context_required');
    if(!support.recognition) throw new Error('speech_recognition_unsupported');
    if(approvalRemembered||permissionState==='granted') return true;
    if(permissionState==='denied') throw new Error('microphone_permission_denied');
    if(pending) return pending;

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
  root?.setAttribute('data-baseline-voice-access',BUILD);
})(window);
