/* Baseline Lifestyle — microphone permission and noise-gated Fitness recognition. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_ACCESS_20260713_9';
  const FITNESS_RECOGNITION_BUILD='BASELINE_FITNESS_PERSISTENT_RECOGNITION_20260713_3';
  const FITNESS_GUARD_BUILD='BASELINE_FITNESS_MUTATION_GUARD_20260712_2';
  const FITNESS_UI_BUILD='BASELINE_FITNESS_VOICE_UI_CORRECTIONS_20260713_2';
  const APPROVED_KEY='__baseline_microphone_approved_v1__';
  if(global.__BASELINE_VOICE_ACCESS__) return;
  global.__BASELINE_VOICE_ACCESS__=true;

  const root=global.document?.documentElement;
  const isFitness=root?.getAttribute('data-app')==='fitness';
  const NativeRecognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
  const AudioContextClass=global.AudioContext||global.webkitAudioContext||null;
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,Number(value)||0));

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
          if(!disconnected&&target){
            const resume=()=>{
              resumeHandle=0;
              if(disconnected||!target) return;
              try{ nativeObserve(target,options); }catch(_error){}
            };
            if(typeof global.requestAnimationFrame==='function') resumeHandle=global.requestAnimationFrame(resume);
            else resumeHandle=global.setTimeout(resume,0);
          }
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

  function installFitnessVoiceUiCorrections(){
    if(!isFitness||global.__BASELINE_FITNESS_VOICE_UI_CORRECTIONS__) return;
    global.__BASELINE_FITNESS_VOICE_UI_CORRECTIONS__=true;

    const style=global.document?.createElement?.('style');
    if(style){
      style.id='baseline-fitness-voice-ui-corrections';
      style.textContent=`
        #voiceSettingsPanel{margin-top:18px!important}
        #voiceSettingsPanel .voice-settings-toggles{
          display:grid!important;
          grid-template-columns:repeat(2,minmax(0,1fr))!important;
          gap:12px!important;
          align-items:stretch!important;
        }
        #voiceSettingsPanel .voice-setting-toggle{
          position:relative!important;
          display:grid!important;
          grid-template-columns:minmax(0,1fr) auto!important;
          align-items:center!important;
          gap:16px!important;
          min-height:64px!important;
          margin:0!important;
          padding:14px 16px!important;
          border:1px solid var(--border-2,var(--border,rgba(255,255,255,.18)))!important;
          border-radius:14px!important;
          background:var(--filter-bg,rgba(255,255,255,.045))!important;
          text-align:left!important;
          line-height:1.3!important;
          cursor:pointer!important;
        }
        #voiceSettingsPanel .voice-setting-label{
          min-width:0!important;
          font-weight:800!important;
        }
        #voiceSettingsPanel .voice-setting-toggle>input[type="checkbox"]{
          position:absolute!important;
          inline-size:1px!important;
          block-size:1px!important;
          opacity:0!important;
          pointer-events:none!important;
        }
        #voiceSettingsPanel .voice-setting-switch{
          position:relative!important;
          display:block!important;
          width:52px!important;
          height:30px!important;
          border:1px solid rgba(255,255,255,.28)!important;
          border-radius:999px!important;
          background:rgba(255,255,255,.10)!important;
          box-shadow:inset 0 1px 2px rgba(0,0,0,.28)!important;
          transition:background .18s ease,border-color .18s ease!important;
        }
        #voiceSettingsPanel .voice-setting-switch::after{
          content:""!important;
          position:absolute!important;
          top:3px!important;
          left:3px!important;
          width:22px!important;
          height:22px!important;
          border-radius:50%!important;
          background:#f5f1f2!important;
          box-shadow:0 2px 6px rgba(0,0,0,.32)!important;
          transition:transform .18s ease!important;
        }
        #voiceSettingsPanel .voice-setting-toggle>input[type="checkbox"]:checked+.voice-setting-switch{
          border-color:rgba(180,35,63,.9)!important;
          background:rgba(180,35,63,.88)!important;
        }
        #voiceSettingsPanel .voice-setting-toggle>input[type="checkbox"]:checked+.voice-setting-switch::after{
          transform:translateX(22px)!important;
        }
        #voiceSettingsPanel .voice-setting-toggle>input[type="checkbox"]:focus-visible+.voice-setting-switch{
          outline:3px solid currentColor!important;
          outline-offset:3px!important;
        }
        @media(max-width:760px){
          #voiceSettingsPanel .voice-settings-toggles{grid-template-columns:1fr!important}
        }
      `;
      global.document.head?.appendChild(style);
    }

    const promptLabels=Object.freeze({
      exerciseInstructions:'Exercise instructions',
      startInstructions:'Start instructions',
      timerStartAnnouncement:'Timer-start announcement',
      holdProgressPrompts:'Hold progress prompts',
      completionAnnouncements:'Completion announcements',
      resultQuestions:'Result questions'
    });
    function enhanceSettingsToggles(){
      global.document?.querySelectorAll?.('#voiceSettingsPanel .voice-setting-toggle').forEach(toggle=>{
        if(toggle.querySelector('.voice-setting-switch')) return;
        const input=toggle.querySelector('input[type="checkbox"][data-voice-setting]');
        if(!input) return;
        const label=global.document.createElement('span');
        label.className='voice-setting-label';
        label.textContent=promptLabels[input.dataset.voiceSetting]||String(toggle.textContent||'').trim();
        const switchControl=global.document.createElement('span');
        switchControl.className='voice-setting-switch';
        switchControl.setAttribute('aria-hidden','true');
        toggle.replaceChildren(label,input,switchControl);
      });
    }
    enhanceSettingsToggles();
    if(global.MutationObserver&&global.document?.body){
      new global.MutationObserver(()=>enhanceSettingsToggles()).observe(global.document.body,{childList:true,subtree:true});
    }

    global.addEventListener('click',event=>{
      const button=event.target?.closest?.('#endVoiceWorkoutBtn');
      if(!button) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      try{ global.BASELINE_fitnessVoice?.stop?.(); }catch(_error){}
    },true);

    root?.setAttribute('data-baseline-fitness-voice-ui-corrections',FITNESS_UI_BUILD);
  }

  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  const ONES=Object.freeze({
    zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,
    nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,
    fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19
  });
  const TENS=Object.freeze({
    twenty:20,thirty:30,forty:40,fifty:50,sixty:60,
    seventy:70,eighty:80,ninety:90
  });
  const DIRECT_ALIASES=Object.freeze({oh:0,o:0,won:1,to:2,too:2,for:4,ate:8});
  const FILLERS=new Set([
    'i','ive','im','am','completed','complete','achieved','managed','did','done',
    'got','made','about','approximately','sets','set','seconds','second','reps',
    'rep','repetitions','repetition','a','around','roughly','only','it','was',
    'that','is','the','number','and','do','of'
  ]);

  function directAlias(text){
    const exact=text.match(/^(oh|o|won|to|too|for|ate)(?:\s+(?:sets?|seconds?|reps?|repetitions?))?$/);
    if(exact) return DIRECT_ALIASES[exact[1]];
    const withUnit=text.match(/\b(oh|o|won|to|too|for|ate)\s+(?:sets?|seconds?|reps?|repetitions?)\b/);
    return withUnit?DIRECT_ALIASES[withUnit[1]]:null;
  }

  function parseNumber(value){
    const text=normalise(value);
    if(!text||/\bthousand\b/.test(text)) return null;
    const digit=text.match(/\b\d{1,3}\b/);
    if(digit){
      const number=Number(digit[0]);
      return number>=0&&number<=999?number:null;
    }
    const alias=directAlias(text);
    if(alias!==null) return alias;

    let current=0;
    let seen=false;
    let hundredSeen=false;
    for(const token of text.split(' ').filter(Boolean)){
      if(FILLERS.has(token)||Object.prototype.hasOwnProperty.call(DIRECT_ALIASES,token)) continue;
      if(Object.prototype.hasOwnProperty.call(ONES,token)){
        current+=ONES[token];
        seen=true;
        continue;
      }
      if(Object.prototype.hasOwnProperty.call(TENS,token)){
        current+=TENS[token];
        seen=true;
        continue;
      }
      if(token==='hundred'){
        if(hundredSeen) return null;
        if(current===0) current=1;
        current*=100;
        hundredSeen=true;
        seen=true;
      }
    }
    return seen&&current>=0&&current<=999?current:null;
  }

  function canonicalCommand(state,value){
    const text=normalise(value);
    if(!text) return null;
    if(state==='awaiting_go') return text==='done'?'done':null;
    if(state==='resting') return text==='next'?'next':null;
    if(state==='exercise_active'||state==='awaiting_result'){
      if(/^(?:fail|failed|failure|i fail|i failed|it failed|that failed|that was a failure)$/.test(text)) return 'fail';
      if(/^(?:success|succeeded|successful|i succeeded|it succeeded|that succeeded|that was successful|that was a success)$/.test(text)) return 'success';
    }
    return null;
  }

  function makeResult(transcript,confidence=1){
    const result=[{transcript:String(transcript),confidence:clamp(confidence,0,1)}];
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
    let assistantSpeechBlockedUntil=0;
    let meter=null;

    const gate={
      available:false,ready:false,startedAt:0,noiseFloor:.008,lastRms:.008,
      lastVoiceAt:0,peakRatio:1,peakModulation:0,soundStartedAt:0,
      speechStartedAt:0,speechEndedAt:0
    };

    function resetGateWindow(){
      gate.peakRatio=1;
      gate.peakModulation=0;
      gate.soundStartedAt=0;
      gate.speechStartedAt=0;
      gate.speechEndedAt=0;
      gate.lastVoiceAt=0;
    }

    function installSpeechOutputGuard(){
      const synthesis=global.speechSynthesis;
      if(!synthesis||typeof synthesis.speak!=='function'||global.__BASELINE_FITNESS_SPEECH_OUTPUT_GUARD__) return;
      global.__BASELINE_FITNESS_SPEECH_OUTPUT_GUARD__=true;
      const nativeSpeak=synthesis.speak.bind(synthesis);
      synthesis.speak=utterance=>{
        assistantSpeechBlockedUntil=Math.max(assistantSpeechBlockedUntil,Date.now()+500);
        const originalEnd=utterance?.onend;
        const originalError=utterance?.onerror;
        if(utterance){
          utterance.onend=event=>{
            assistantSpeechBlockedUntil=Date.now()+750;
            try{ originalEnd?.call(utterance,event); }catch(_error){}
          };
          utterance.onerror=event=>{
            assistantSpeechBlockedUntil=Date.now()+500;
            try{ originalError?.call(utterance,event); }catch(_error){}
          };
        }
        return nativeSpeak(utterance);
      };
    }

    function stopVoiceActivityMeter(){
      const current=meter;
      meter=null;
      gate.available=false;
      gate.ready=false;
      if(!current) return;
      if(current.frame){
        if(current.frameType==='raf') global.cancelAnimationFrame?.(current.frame);
        else global.clearTimeout(current.frame);
      }
      try{ current.source?.disconnect?.(); }catch(_error){}
      try{ current.analyser?.disconnect?.(); }catch(_error){}
      try{ current.stream?.getTracks?.().forEach(track=>track.stop()); }catch(_error){}
      try{ current.context?.close?.(); }catch(_error){}
    }

    async function startVoiceActivityMeter(){
      if(meter||!global.navigator?.mediaDevices?.getUserMedia||!AudioContextClass) return Boolean(meter);
      try{
        const stream=await global.navigator.mediaDevices.getUserMedia({audio:{
          echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1
        }});
        const context=new AudioContextClass();
        if(context.state==='suspended') await context.resume();
        const analyser=context.createAnalyser();
        analyser.fftSize=512;
        analyser.smoothingTimeConstant=.28;
        const source=context.createMediaStreamSource(stream);
        source.connect(analyser);
        const samples=new Uint8Array(analyser.fftSize);
        const current={stream,context,analyser,source,samples,frame:0,frameType:'raf'};
        meter=current;
        gate.available=true;
        gate.startedAt=Date.now();
        gate.noiseFloor=.008;
        gate.lastRms=.008;

        const tick=()=>{
          if(meter!==current) return;
          analyser.getByteTimeDomainData(samples);
          let sum=0;
          for(let index=0;index<samples.length;index+=1){
            const sample=(samples[index]-128)/128;
            sum+=sample*sample;
          }
          const rms=Math.sqrt(sum/samples.length);
          const floor=Math.max(.0025,gate.noiseFloor);
          const ratio=rms/floor;
          const modulation=Math.abs(rms-gate.lastRms)/floor;
          const now=Date.now();
          const calibrating=now-gate.startedAt<650;
          const speechLike=!calibrating&&rms>Math.max(.0105,floor*1.62)&&(ratio>2.15||modulation>.18);

          if(calibrating){
            gate.noiseFloor=(gate.noiseFloor*.90)+(rms*.10);
          }else if(!speechLike&&rms<floor*1.42){
            gate.noiseFloor=(gate.noiseFloor*.985)+(rms*.015);
          }else if(!speechLike){
            gate.noiseFloor=(gate.noiseFloor*.998)+(rms*.002);
          }
          gate.noiseFloor=clamp(gate.noiseFloor,.0025,.12);
          gate.lastRms=rms;
          gate.ready=!calibrating;

          if(speechLike){
            gate.lastVoiceAt=now;
            gate.peakRatio=Math.max(gate.peakRatio,ratio);
            gate.peakModulation=Math.max(gate.peakModulation,modulation);
          }

          if(typeof global.requestAnimationFrame==='function'){
            current.frameType='raf';
            current.frame=global.requestAnimationFrame(tick);
          }else{
            current.frameType='timer';
            current.frame=global.setTimeout(tick,35);
          }
        };
        tick();
        return true;
      }catch(_error){
        stopVoiceActivityMeter();
        return false;
      }
    }

    function currentState(){
      try{ return String(global.BASELINE_fitnessVoice?.state?.()||''); }
      catch(_error){ return ''; }
    }

    function call(target,name,...args){
      try{ target?.[name]?.(...args); }catch(_error){}
    }

    function emitTo(target,transcript,confidence=1){
      if(!target||Date.now()<ignoreInputUntil||Date.now()<assistantSpeechBlockedUntil) return false;
      call(target,'onresult',makeResult(transcript,confidence));
      return true;
    }

    function clearNumber(){
      if(numberTimer){ global.clearTimeout(numberTimer);numberTimer=0; }
      pendingNumber=null;
    }

    function commitNumber(){
      if(numberTimer){ global.clearTimeout(numberTimer);numberTimer=0; }
      const candidate=pendingNumber;
      pendingNumber=null;
      if(!candidate||candidate.state!==currentState()) return false;
      const emitted=emitTo(candidate.target,String(candidate.value),candidate.confidence);
      if(emitted) resetGateWindow();
      return emitted;
    }

    function queueNumber(value,state,target,isFinal,confidence){
      pendingNumber={value,state,target,confidence,updatedAt:Date.now()};
      if(numberTimer){ global.clearTimeout(numberTimer);numberTimer=0; }
      const status=global.document?.querySelector?.('#voiceWorkoutModal .voice-mic-status');
      if(status) status.textContent='Listening';
      if(isFinal) return commitNumber();
      numberTimer=global.setTimeout(commitNumber,850);
      return true;
    }

    function alternatives(result){
      const output=[];
      for(let index=0;index<(result?.length||0);index+=1){
        const transcript=String(result[index]?.transcript||'').trim();
        if(!transcript) continue;
        output.push({
          transcript,
          confidence:clamp(Number(result[index]?.confidence)||0,0,1)
        });
      }
      return output.sort((left,right)=>right.confidence-left.confidence);
    }

    function resultPassesVoiceGate(result,options){
      const confidence=Math.max(0,...options.map(option=>option.confidence||0));
      const now=Date.now();
      const recentVoice=gate.lastVoiceAt>0&&now-gate.lastVoiceAt<1900;
      const dynamicVoice=gate.peakRatio>=1.55&&(gate.peakModulation>=.10||gate.peakRatio>=2.35);
      if(gate.available&&gate.ready) return recentVoice&&dynamicVoice;

      const started=gate.speechStartedAt||gate.soundStartedAt;
      const duration=started?now-started:0;
      return confidence>=.72||(confidence>=.48&&duration>=120&&duration<=2600);
    }

    function handleNativeResult(event){
      const now=Date.now();
      if(!activeVirtual||now<ignoreInputUntil||now<assistantSpeechBlockedUntil) return;
      if(global.speechSynthesis?.speaking||global.speechSynthesis?.pending) return;

      const state=currentState();
      const numberState=state==='awaiting_sets_number'||state==='awaiting_seconds_number';
      const first=Math.max(0,Number(event?.resultIndex)||0);
      const results=event?.results||[];

      for(let resultIndex=first;resultIndex<results.length;resultIndex+=1){
        const result=results[resultIndex];
        const options=alternatives(result);
        if(!options.length) continue;
        const voiceAccepted=numberState&&result.isFinal?true:resultPassesVoiceGate(result,options);
        if(!voiceAccepted) continue;

        if(numberState){
          for(const option of options){
            const value=parseNumber(option.transcript);
            if(value!==null){
              queueNumber(value,state,activeVirtual,Boolean(result.isFinal),option.confidence||.8);
              break;
            }
          }
          continue;
        }

        if(!result.isFinal) continue;
        for(const option of options){
          const command=canonicalCommand(state,option.transcript);
          if(!command) continue;
          clearNumber();
          if(emitTo(activeVirtual,command,option.confidence||.8)) resetGateWindow();
          return;
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
      const current=native;
      native=null;
      nativeRunning=false;
      try{ current?.abort?.(); }catch(_error){}
      clearNumber();
      stopVoiceActivityMeter();
      resetGateWindow();
    }

    function schedulePolicyCheck(){
      global.setTimeout(()=>{
        if(!shouldRemainOpen()&&!activeVirtual) stopNative();
      },220);
    }

    function scheduleNativeRestart(delay=55){
      if(nativeRestart){ global.clearTimeout(nativeRestart);nativeRestart=0; }
      if(!nativeWanted) return;
      nativeRestart=global.setTimeout(startNative,delay);
    }

    function startNative(){
      if(nativeRestart){ global.clearTimeout(nativeRestart);nativeRestart=0; }
      if(!nativeWanted||nativeRunning) return;
      startVoiceActivityMeter();
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
        recognition.onsoundstart=()=>{
          gate.soundStartedAt=Date.now();
          gate.peakRatio=1;
          gate.peakModulation=0;
          gate.lastVoiceAt=0;
          call(activeVirtual,'onsoundstart');
        };
        recognition.onspeechstart=()=>{
          gate.speechStartedAt=Date.now();
          call(activeVirtual,'onspeechstart');
        };
        recognition.onresult=handleNativeResult;
        recognition.onspeechend=()=>{
          gate.speechEndedAt=Date.now();
          if(pendingNumber){
            if(numberTimer) global.clearTimeout(numberTimer);
            numberTimer=global.setTimeout(commitNumber,700);
          }
          call(activeVirtual,'onspeechend');
        };
        recognition.onsoundend=()=>{
          if(pendingNumber){
            if(numberTimer) global.clearTimeout(numberTimer);
            numberTimer=global.setTimeout(commitNumber,750);
          }
          call(activeVirtual,'onsoundend');
        };
        recognition.onerror=event=>call(activeVirtual,'onerror',event);
        recognition.onend=()=>{
          if(native!==recognition) return;
          native=null;
          nativeRunning=false;
          const ended=activeVirtual;
          activeVirtual=null;
          call(ended,'onend');
          if(nativeWanted) scheduleNativeRestart(55);
        };
        recognition.start();
      }catch(_error){
        native=null;
        nativeRunning=false;
        scheduleNativeRestart(120);
      }
    }

    function attach(target){
      activeVirtual=target;
      nativeWanted=true;
      clearNumber();
      resetGateWindow();
      ignoreInputUntil=Math.max(ignoreInputUntil,Date.now()+450,assistantSpeechBlockedUntil);
      startVoiceActivityMeter();
      if(nativeRunning) global.queueMicrotask?.(()=>call(target,'onstart'));
      else startNative();
    }

    function detach(target){
      if(activeVirtual===target) activeVirtual=null;
      clearNumber();
      resetGateWindow();
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

    installSpeechOutputGuard();
    try{ Object.setPrototypeOf(PersistentSpeechRecognition,NativeRecognition); }catch(_error){}
    global.SpeechRecognition=PersistentSpeechRecognition;
    global.webkitSpeechRecognition=PersistentSpeechRecognition;
    global.BASELINE_fitnessPersistentRecognition=Object.freeze({
      BUILD:FITNESS_RECOGNITION_BUILD,
      parseNumber,
      commandFor:canonicalCommand,
      gateStatus:()=>Object.freeze({
        available:gate.available,
        ready:gate.ready,
        noiseFloor:gate.noiseFloor,
        peakRatio:gate.peakRatio,
        peakModulation:gate.peakModulation
      })
    });
    root.setAttribute('data-baseline-fitness-persistent-recognition',FITNESS_RECOGNITION_BUILD);
  }

  installFitnessMutationGuard();
  installFitnessVoiceUiCorrections();
  installPersistentFitnessRecognition();

  const base=global.BASELINE_voice;
  if(!base) return;

  function rememberApproval(value){
    approvalRemembered=Boolean(value);
  }

  let permissionState='unknown';
  let approvalRemembered=false;
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
