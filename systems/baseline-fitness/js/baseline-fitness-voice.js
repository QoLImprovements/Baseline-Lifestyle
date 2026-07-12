/* Baseline Fitness — exact-command, always-interruptible voice workout controller. */
(function(global){
  'use strict';

  const SINGLETON='__BASELINE_FITNESS_VOICE_ADAPTER__';
  if(global[SINGLETON]) return;
  global[SINGLETON]=true;

  const BUILD='BASELINE_FITNESS_VOICE_ADAPTER_20260712_6';
  const STATES=Object.freeze({
    IDLE:'idle', INTRODUCING:'introducing', WAITING_START:'waiting_start',
    PERFORMING:'performing', RESTING:'resting', REST_EXPIRED:'rest_expired',
    COMPLETE:'complete', ERROR:'error'
  });
  const COMMANDS=Object.freeze({go:'go',success:'success',fail:'fail',next:'next'});
  const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
  const AudioContextClass=global.AudioContext||global.webkitAudioContext||null;
  const synthesis=global.speechSynthesis||null;
  const $=(selector,root=document)=>root.querySelector(selector);
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,Number(value)||0));
  const wait=milliseconds=>new Promise(resolve=>global.setTimeout(resolve,milliseconds));

  const session={
    active:false,starting:false,finished:false,state:STATES.IDLE,
    recognition:null,pausedByUser:false,restInterval:null,exerciseInterval:null,
    restRemaining:0,exerciseRemaining:0,lastInstruction:'',lastTranscript:'',
    handling:false,speaking:false,speakingText:'',speechStartedAt:0,
    speechToken:0,speechSettle:null,micMeter:null,micLevel:0,
    inputLockedUntil:0,lastAcceptedAt:0,lastAcceptedCommand:'',
    lastAcceptedTranscript:''
  };

  function voice(){ return global.BASELINE_voice||null; }
  function fitness(){ return global.BASELINE_fitnessWorkout||null; }
  function modal(){ return $('#voiceWorkoutModal'); }
  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ')
      .replace(/\s+/g,' ').trim();
  }
  function sameUtterance(left,right){
    const a=normalise(left),b=normalise(right);
    if(!a||!b) return false;
    return a===b||a.includes(b)||b.includes(a);
  }
  function commandIntent(value){
    const text=normalise(value);
    return Object.prototype.hasOwnProperty.call(COMMANDS,text)?COMMANDS[text]:null;
  }
  function stateIntent(_state,value){ return commandIntent(value); }

  function formatTimer(seconds){
    const total=Math.max(0,Math.round(Number(seconds)||0));
    return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
  }
  function amountWord(unit,amount){
    const number=Math.round(Number(amount)||0);
    return unit==='seconds'?`${number} second${number===1?'':'s'}`:`${number} repetition${number===1?'':'s'}`;
  }
  function durationPhrase(seconds){
    const total=Math.max(0,Math.round(Number(seconds)||0));
    const minutes=Math.floor(total/60),remainder=total%60;
    if(minutes&&remainder) return `${minutes} minute${minutes===1?'':'s'} and ${remainder} second${remainder===1?'':'s'}`;
    if(minutes) return `${minutes} minute${minutes===1?'':'s'}`;
    return `${remainder} second${remainder===1?'':'s'}`;
  }
  function unitResult(step,amount){ return amountWord(step?.unit||'reps',amount); }
  function currentContext(){ return fitness()?.getCurrentContext?.()||null; }
  function displayLabel(step){ return step?`${step.name} - (${Math.round(Number(step.target)||0)})`:''; }

  function stripSitewideVoicePanel(){
    $('#bl-voice-toggle')?.remove();
    $('#bl-voice-flyout')?.remove();
  }

  function ensureMicrophoneVisual(){
    const transcript=$('#voiceLastTranscript');
    if(!transcript||transcript.querySelector('.voice-mic-visual')) return;
    transcript.classList.add('voice-mic-host');
    transcript.innerHTML=`<div class="voice-mic-visual" data-state="idle" data-meter="idle" role="status" aria-live="polite" aria-label="Microphone active">
      <span class="voice-mic-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 15.5a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5.5a4 4 0 0 0 4 4z"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <span class="voice-level-bars" aria-hidden="true">${Array.from({length:9},()=>'<i></i>').join('')}</span>
      <span class="voice-mic-status">Microphone active</span>
    </div>`;
  }

  function prepareModalPresentation(){
    stripSitewideVoicePanel();
    const title=$('#voiceWorkoutTitle');
    if(title){
      if(title.textContent!=='Voice workout') title.textContent='Voice workout';
      title.classList.add('voice-visually-hidden');
    }
    const target=$('#voiceExerciseTarget');
    if(target) target.hidden=true;
    ensureMicrophoneVisual();
  }

  let presentationScheduled=false;
  function scheduleModalPresentation(){
    if(presentationScheduled) return;
    presentationScheduled=true;
    const run=()=>{ presentationScheduled=false; prepareModalPresentation(); };
    if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(run);
    else global.setTimeout(run,0);
  }

  function setMicState(state,label){
    const visual=$('.voice-mic-visual');
    if(!visual) return;
    visual.dataset.state=state||'idle';
    const status=$('.voice-mic-status',visual);
    if(status) status.textContent=label||({
      listening:'Microphone active',hearing:'Hearing you',speaking:'Voice instruction',
      paused:'Microphone paused',error:'Microphone unavailable'
    }[state]||'Microphone active');
  }
  function setListeningStatus(label,kind=''){
    const node=$('#voiceListeningStatus');
    if(node){ node.textContent=label; node.dataset.kind=kind; }
    if(kind==='listening') setMicState('listening','Microphone active');
    else if(kind==='hearing') setMicState('hearing','Hearing you');
    else if(kind==='paused') setMicState('paused','Microphone paused');
    else if(kind==='error') setMicState('error','Microphone unavailable');
  }
  function setPrompt(message){
    const node=$('#voiceWorkoutPrompt');
    if(node) node.textContent=String(message||'');
  }
  function setTranscript(value){ session.lastTranscript=String(value||''); }
  function showTimer(value,label='Timer'){
    const wrap=$('#voiceWorkoutTimerWrap'),digits=$('#voiceWorkoutTimer'),caption=$('#voiceWorkoutTimerLabel');
    if(wrap) wrap.hidden=false;
    if(digits) digits.textContent=formatTimer(value);
    if(caption) caption.textContent=label;
  }
  function hideTimer(){ const wrap=$('#voiceWorkoutTimerWrap'); if(wrap) wrap.hidden=true; }

  function renderContext(context,options={}){
    if(!context) return;
    if(context.step){
      const position=$('#voiceStepPosition'),name=$('#voiceExerciseName'),target=$('#voiceExerciseTarget');
      if(position) position.textContent=`Step ${context.stepIndex+1} of ${context.totalSteps}`;
      if(name) name.textContent=displayLabel(context.step);
      if(target){ target.textContent=''; target.hidden=true; }
    }else if(options.complete){
      const position=$('#voiceStepPosition'),name=$('#voiceExerciseName');
      if(position) position.textContent=`${context.totalSteps}/${context.totalSteps} steps achieved`;
      if(name) name.textContent='Workout complete';
    }
  }

  function openModal(){
    prepareModalPresentation();
    const node=modal();
    if(!node) return;
    node.hidden=false;
    document.body.classList.add('voice-workout-active');
    $('#endVoiceWorkoutBtn')?.focus?.({preventScroll:true});
  }
  function closeModal(){
    const node=modal();
    if(node) node.hidden=true;
    document.body.classList.remove('voice-workout-active');
  }
  function clearRestTimer(){
    if(session.restInterval){ clearInterval(session.restInterval); session.restInterval=null; }
    session.restRemaining=0;
  }
  function clearExerciseTimer(){
    if(session.exerciseInterval){ clearInterval(session.exerciseInterval); session.exerciseInterval=null; }
    session.exerciseRemaining=0;
  }
  function clearTimers(){ clearRestTimer(); clearExerciseTimer(); }

  const BAR_SHAPE=[.45,.58,.73,.88,1,.88,.73,.58,.45];
  function updateMicrophoneBars(level,mode='live'){
    session.micLevel=clamp(level,0,1);
    const visual=$('.voice-mic-visual');
    if(!visual) return;
    visual.dataset.meter=mode;
    const bars=Array.from(visual.querySelectorAll('.voice-level-bars i'));
    const now=(global.performance?.now?.()||Date.now())/92;
    bars.forEach((bar,index)=>{
      const wave=.86+(.14*Math.sin(now+(index*1.63)));
      const height=6+(34*session.micLevel*BAR_SHAPE[index]*wave);
      bar.style.height=`${height.toFixed(1)}px`;
      bar.style.opacity=String((.32+(.68*session.micLevel)).toFixed(2));
    });
  }

  function stopMicrophoneMeter(){
    const meter=session.micMeter;
    session.micMeter=null;
    session.micLevel=0;
    if(meter){
      if(meter.frame){
        if(meter.frameType==='raf') global.cancelAnimationFrame?.(meter.frame);
        else global.clearTimeout(meter.frame);
      }
      try{ meter.source?.disconnect?.(); }catch(_error){}
      try{ meter.analyser?.disconnect?.(); }catch(_error){}
      try{ meter.stream?.getTracks?.().forEach(track=>track.stop()); }catch(_error){}
      try{ meter.context?.close?.(); }catch(_error){}
    }
    updateMicrophoneBars(0,'idle');
  }

  function setMicrophoneMeterPaused(paused){
    const meter=session.micMeter;
    if(!meter) return;
    try{ meter.stream.getAudioTracks().forEach(track=>{ track.enabled=!paused; }); }catch(_error){}
    if(paused) updateMicrophoneBars(0,'paused');
  }

  async function startMicrophoneMeter(){
    stopMicrophoneMeter();
    const mediaDevices=global.navigator?.mediaDevices;
    if(!mediaDevices?.getUserMedia||!AudioContextClass) return false;
    const stream=await mediaDevices.getUserMedia({audio:{
      echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1
    }});
    let context=null;
    try{
      context=new AudioContextClass();
      if(context.state==='suspended') await context.resume();
      const analyser=context.createAnalyser();
      analyser.fftSize=512;
      analyser.smoothingTimeConstant=.48;
      const source=context.createMediaStreamSource(stream);
      source.connect(analyser);
      const samples=new Uint8Array(analyser.fftSize);
      const meter={stream,context,analyser,source,samples,frame:0,frameType:'raf'};
      session.micMeter=meter;
      const tick=()=>{
        if(session.micMeter!==meter) return;
        analyser.getByteTimeDomainData(samples);
        let squareSum=0;
        for(let index=0;index<samples.length;index++){
          const sample=(samples[index]-128)/128;
          squareSum+=sample*sample;
        }
        const rms=Math.sqrt(squareSum/samples.length);
        const decibels=20*Math.log10(Math.max(rms,.00001));
        const visibleLevel=clamp((decibels+62)/48,0,1);
        if(!session.pausedByUser) updateMicrophoneBars(visibleLevel,'live');
        if(typeof global.requestAnimationFrame==='function'){
          meter.frameType='raf'; meter.frame=global.requestAnimationFrame(tick);
        }else{
          meter.frameType='timer'; meter.frame=global.setTimeout(tick,45);
        }
      };
      tick();
      return true;
    }catch(error){
      try{ stream.getTracks().forEach(track=>track.stop()); }catch(_error){}
      try{ context?.close?.(); }catch(_error){}
      session.micMeter=null;
      throw error;
    }
  }

  function createRecognitionController(options={}){
    if(!Recognition) throw new Error('speech_recognition_unsupported');
    let recognizer=null,wanted=false,running=false,pauseDepth=0,restartTimer=0,instanceSerial=0;
    let lastText='',lastAt=0;
    function report(state,detail){ try{ options.onState?.(state,detail||null); }catch(_error){} }
    function clearRestart(){ if(restartTimer){ clearTimeout(restartTimer); restartTimer=0; } }
    function scheduleRestart(delay=70){
      clearRestart();
      if(!wanted||pauseDepth>0) return;
      restartTimer=setTimeout(startInstance,delay);
    }
    function emitTranscript(transcript,isFinal){
      const text=String(transcript||'').trim(),fingerprint=normalise(text);
      if(!fingerprint) return false;
      const now=Date.now();
      if(lastText&&sameUtterance(fingerprint,lastText)&&now-lastAt<2500) return false;
      let accepted=false;
      try{ accepted=options.onTranscript?.(text,[text],{isFinal:Boolean(isFinal)})===true; }catch(_error){}
      if(accepted){ lastText=fingerprint; lastAt=now; }
      return accepted;
    }
    function startInstance(){
      clearRestart();
      if(!wanted||pauseDepth>0||running) return;
      const serial=++instanceSerial;
      try{
        const instance=new Recognition();
        recognizer=instance;
        instance.lang=voice()?.getSettings?.().language||'en-GB';
        instance.continuous=true;
        instance.interimResults=true;
        instance.maxAlternatives=1;
        instance.onstart=()=>{ if(serial!==instanceSerial) return; running=true; report('listening'); };
        instance.onaudiostart=()=>{ if(serial===instanceSerial) report('listening'); };
        instance.onsoundstart=()=>{ if(serial===instanceSerial) report('hearing'); };
        instance.onspeechstart=()=>{ if(serial===instanceSerial) report('hearing'); };
        instance.onspeechend=()=>{ if(serial===instanceSerial) report('listening'); };
        instance.onsoundend=()=>{ if(serial===instanceSerial) report('listening'); };
        instance.onresult=event=>{
          if(serial!==instanceSerial) return;
          for(let index=event.resultIndex;index<event.results.length;index++){
            const result=event.results[index];
            if(!result?.length) continue;
            const transcript=String(result[0]?.transcript||'').trim();
            if(transcript&&emitTranscript(transcript,result.isFinal)) break;
          }
        };
        instance.onerror=event=>{
          if(serial!==instanceSerial) return;
          const code=String(event?.error||'recognition_error');
          if(code==='not-allowed'||code==='service-not-allowed'){
            wanted=false; report('blocked',code);
          }else if(code!=='aborted'&&code!=='no-speech') report('error',code);
          try{ options.onError?.(code,event); }catch(_error){}
        };
        instance.onend=()=>{
          if(serial!==instanceSerial) return;
          running=false; recognizer=null;
          if(wanted&&pauseDepth===0) scheduleRestart(70);
          else if(!wanted) report('stopped');
        };
        instance.start();
      }catch(error){
        if(serial!==instanceSerial) return;
        running=false; recognizer=null;
        const code=String(error?.name||'start_error');
        if(code==='NotAllowedError'||code==='SecurityError'){
          wanted=false; report('blocked',code);
        }else scheduleRestart(100);
        try{ options.onError?.(code,error); }catch(_error){}
      }
    }
    function start(){ wanted=true; pauseDepth=0; startInstance(); return controller; }
    function pause(){
      pauseDepth+=1; clearRestart();
      const instance=recognizer;
      ++instanceSerial; recognizer=null; running=false;
      try{ instance?.abort?.(); }catch(_error){}
      report('paused'); return controller;
    }
    function resume(){
      pauseDepth=Math.max(0,pauseDepth-1);
      if(wanted&&pauseDepth===0) scheduleRestart(40);
      return controller;
    }
    function stop(){
      wanted=false; pauseDepth=0; clearRestart();
      const instance=recognizer;
      ++instanceSerial; recognizer=null; running=false;
      try{ instance?.abort?.(); }catch(_error){}
      report('stopped');
    }
    const controller=Object.freeze({
      start,pause,resume,stop,isWanted:()=>wanted,isRunning:()=>running,isPaused:()=>pauseDepth>0
    });
    return controller;
  }

  function selectedSpeechVoice(settings){
    if(!synthesis) return null;
    const voices=synthesis.getVoices?.()||[];
    if(settings.voiceURI){
      const exact=voices.find(item=>item.voiceURI===settings.voiceURI);
      if(exact) return exact;
    }
    const language=String(settings.language||'en-GB').toLowerCase();
    return voices.find(item=>String(item.lang||'').toLowerCase()===language)
      ||voices.find(item=>String(item.lang||'').toLowerCase().startsWith(language.slice(0,2)))
      ||null;
  }

  function interruptSpeech(){
    const settle=session.speechSettle;
    session.speechSettle=null;
    session.speechToken+=1;
    if(settle) settle(false);
    try{ synthesis?.cancel?.(); }catch(_error){}
    session.speaking=false;
    session.speakingText='';
    session.speechStartedAt=0;
  }

  function speak(message,options={}){
    const text=String(message||'').trim(),settings=voice()?.getSettings?.()||{};
    if(text) session.lastInstruction=text;
    if(!text||settings.spokenResponses===false||!synthesis||!global.SpeechSynthesisUtterance){
      return Promise.resolve(false);
    }
    if(options.interrupt!==false) interruptSpeech();
    const token=++session.speechToken;
    session.speaking=true;
    session.speakingText=normalise(text);
    session.speechStartedAt=Date.now();
    setMicState('speaking','Voice instruction');
    return new Promise(resolve=>{
      let finished=false,timeout=0;
      const settle=value=>{
        if(finished) return;
        finished=true;
        if(timeout) clearTimeout(timeout);
        if(session.speechSettle===settle) session.speechSettle=null;
        if(token===session.speechToken){
          session.speaking=false;
          session.speakingText='';
          session.speechStartedAt=0;
          if(session.active&&!session.pausedByUser) setListeningStatus('Listening — interrupt at any time','listening');
        }
        resolve(Boolean(value));
      };
      session.speechSettle=settle;
      try{
        const utterance=new global.SpeechSynthesisUtterance(text);
        utterance.lang=settings.language||'en-GB';
        utterance.rate=clamp(options.rate??settings.rate??1,.5,2);
        utterance.pitch=clamp(options.pitch??settings.pitch??1,.5,2);
        utterance.volume=clamp(options.volume??settings.volume??1,0,1);
        const selected=selectedSpeechVoice(settings);
        if(selected) utterance.voice=selected;
        utterance.onend=()=>settle(true);
        utterance.onerror=()=>settle(false);
        synthesis.speak(utterance);
        timeout=setTimeout(()=>settle(false),Math.max(5000,text.length*170));
      }catch(_error){ settle(false); }
    });
  }

  function safeInstructionFor(context,prefix=''){
    const target=unitResult(context.step,context.step.target);
    return `${prefix?prefix+' ':''}Step ${context.stepIndex+1} of ${context.totalSteps}. ${context.step.name}. Target ${target}. The microphone remains active.`;
  }

  async function announceCurrentStep(prefix=''){
    clearTimers();
    const context=currentContext();
    if(!context||!context.available||!context.canStart){
      session.state=STATES.ERROR;
      setListeningStatus('Workout unavailable','error');
      setPrompt('The current workout is not available to voice control.');
      return;
    }
    if(context.allComplete||!context.step) return announceComplete(context);
    session.state=STATES.WAITING_START;
    renderContext(context);
    hideTimer();
    setPrompt('Say “Go” when ready. Interrupt at any time with “Success”, “Fail” or “Next”.');
    setListeningStatus(session.pausedByUser?'Listening paused':'Listening — interrupt at any time',session.pausedByUser?'paused':'listening');
    await speak(safeInstructionFor(context,prefix));
  }

  function beginAttempt(){
    clearTimers();
    const context=currentContext();
    if(!context?.step) return announceComplete(context||{totalSteps:0});
    session.state=STATES.PERFORMING;
    renderContext(context);
    setPrompt('Say “Success”, “Fail” or “Next” at any time.');
    if(context.step.isTimed){
      session.exerciseRemaining=Math.max(0,Math.round(context.step.target||0));
      showTimer(session.exerciseRemaining,'Exercise time');
      session.exerciseInterval=setInterval(()=>{
        session.exerciseRemaining=Math.max(0,session.exerciseRemaining-1);
        showTimer(session.exerciseRemaining,'Exercise time');
        if(session.exerciseRemaining<=0){
          clearExerciseTimer();
          showTimer(0,'Target time achieved');
          if(session.state===STATES.PERFORMING) speak('Target time reached. The microphone remains active.');
        }
      },1000);
    }else hideTimer();
    speak('Exercise underway. The microphone remains active.');
  }

  async function announceComplete(context=currentContext(),lead=''){
    clearTimers();
    session.state=STATES.COMPLETE;
    renderContext(context||{totalSteps:0},{complete:true});
    hideTimer();
    setPrompt('Workout complete. Use End Voice Workout when finished reviewing.');
    if(!session.finished){
      session.finished=true;
      try{ await fitness()?.finishSession?.(); }catch(_error){}
    }
    await speak(`${lead?lead+' ':''}Workout complete.`);
  }

  function startRest(options={}){
    clearTimers();
    const context=currentContext();
    if(!context||context.allComplete||!context.step) return announceComplete(context,options.lead||'');
    const settings=voice()?.getSettings?.()||{};
    const seconds=Math.max(1,Math.round(options.seconds||settings.maximumRestSeconds||150));
    session.state=STATES.RESTING;
    session.restRemaining=seconds;
    renderContext(context);
    showTimer(seconds,'Maximum recovery remaining');
    setPrompt('Say “Go” to begin this exercise, or “Next” to skip it. “Success” and “Fail” also work immediately.');
    speak(`${options.lead?options.lead+' ':''}Recovery period underway for up to ${durationPhrase(seconds)}. The microphone remains active.`);
    session.restInterval=setInterval(()=>{
      session.restRemaining=Math.max(0,session.restRemaining-1);
      showTimer(session.restRemaining,'Maximum recovery remaining');
      if(settings.restAnnouncements&&session.restRemaining===30) speak('Thirty seconds remaining.');
      if(settings.countdownAnnouncements&&session.restRemaining===10) speak('Ten seconds remaining.');
      if(session.restRemaining<=0){ clearRestTimer(); onRestExpired(); }
    },1000);
  }

  async function onRestExpired(){
    const context=currentContext();
    if(!context?.step) return announceComplete(context);
    session.state=STATES.REST_EXPIRED;
    renderContext(context);
    showTimer(0,'Maximum recovery reached');
    setPrompt('Say “Go” to begin this exercise, or “Next” to skip it.');
    await speak(`Maximum recovery time reached. ${context.step.name}. The microphone remains active.`);
  }

  function handleGo(){
    if(session.state===STATES.COMPLETE||session.state===STATES.ERROR) return;
    beginAttempt();
  }

  function handleSuccess(){
    const before=currentContext();
    if(!before?.step) return announceComplete(before||{totalSteps:0});
    clearTimers();
    fitness()?.succeedCurrentStep?.('voice');
    const lead=`Recorded as completed. ${unitResult(before.step,before.step.target)} achieved.`;
    setPrompt(lead);
    const after=currentContext();
    if(after?.allComplete||!after?.step) return announceComplete(after,lead);
    return startRest({lead});
  }

  function handleFail(){
    const before=currentContext();
    if(!before?.step) return announceComplete(before||{totalSteps:0});
    clearTimers();
    fitness()?.failCurrentStep?.(0,'voice');
    const lead='Recorded as incomplete.';
    setPrompt(lead);
    const after=currentContext();
    if(after?.allComplete||!after?.step) return announceComplete(after,lead);
    return startRest({lead});
  }

  function handleNext(){
    const before=currentContext();
    if(!before?.step) return announceComplete(before||{totalSteps:0});
    clearTimers();
    fitness()?.failCurrentStep?.(0,'voice-skip');
    const after=currentContext();
    if(after?.allComplete||!after?.step) return announceComplete(after,'Exercise skipped.');
    return announceCurrentStep('Moving on.');
  }

  function processAcceptedTranscript(command){
    if(!session.active) return;
    if(command==='go') return handleGo();
    if(command==='success') return handleSuccess();
    if(command==='fail') return handleFail();
    if(command==='next') return handleNext();
  }

  function handleTranscript(transcript){
    if(!session.active||session.handling||session.pausedByUser) return false;
    const text=String(transcript||'').trim(),fingerprint=normalise(text);
    const command=commandIntent(fingerprint);
    if(!command) return false;

    const now=Date.now();
    if(now<session.inputLockedUntil) return false;
    if(session.lastAcceptedTranscript&&sameUtterance(fingerprint,session.lastAcceptedTranscript)&&now-session.lastAcceptedAt<2500) return false;
    if(session.lastAcceptedCommand===command&&now-session.lastAcceptedAt<900) return false;

    interruptSpeech();
    session.inputLockedUntil=now+450;
    session.lastAcceptedAt=now;
    session.lastAcceptedCommand=command;
    session.lastAcceptedTranscript=fingerprint;
    session.handling=true;
    setTranscript(text);
    setMicState('hearing','Hearing you');

    try{
      Promise.resolve(processAcceptedTranscript(command)).catch(()=>{
        if(session.active){
          session.state=STATES.ERROR;
          setListeningStatus('Voice action failed','error');
        }
      });
    }finally{
      session.handling=false;
      if(session.active&&!session.pausedByUser&&session.state!==STATES.ERROR){
        setListeningStatus('Listening — interrupt at any time','listening');
      }
    }
    return true;
  }

  function recognitionState(state,detail){
    if(!session.active&&state!=='blocked') return;
    if(state==='listening') setListeningStatus('Listening — interrupt at any time','listening');
    else if(state==='hearing') setListeningStatus('Hearing speech','hearing');
    else if(state==='paused') setListeningStatus(session.pausedByUser?'Listening paused':'Reconnecting','paused');
    else if(state==='blocked'){
      session.state=STATES.ERROR;
      setListeningStatus('Microphone blocked','error');
      setPrompt('Microphone permission was blocked. Enable microphone permission in the browser, then start again.');
    }else if(state==='error'&&detail!=='no-speech'){
      setListeningStatus('Recognition reconnecting','paused');
    }
  }

  async function startVoiceWorkout(){
    if(session.active||session.starting) return;
    session.starting=true;
    const v=voice(),f=fitness(),status=$('#myPlanStatus');
    try{
      if(!v||!f){ if(status) status.textContent='Voice control is still loading. Please try again.'; return; }
      const supported=v.support?.()||{};
      if(!Recognition||!supported.synthesis||!supported.secureContext){
        if(status) status.textContent='Voice recognition and spoken responses require a supported browser over HTTPS.';
        return;
      }
      const context=f.getCurrentContext?.();
      if(!context?.available||!context.canStart){
        if(status) status.textContent='The current workout is not available to start.';
        return;
      }

      openModal();
      setListeningStatus('Requesting microphone','paused');
      setTranscript('');
      try{
        const meterStarted=await startMicrophoneMeter();
        if(!meterStarted) await v.prepareMicrophone?.();
      }catch(error){
        session.state=STATES.ERROR;
        setListeningStatus('Microphone unavailable','error');
        setPrompt(error?.message==='secure_context_required'?'Microphone access requires HTTPS.':'Microphone permission or speech recognition is unavailable.');
        return;
      }

      session.active=true;
      session.finished=false;
      session.state=STATES.INTRODUCING;
      session.pausedByUser=false;
      session.inputLockedUntil=0;
      session.lastAcceptedAt=0;
      session.lastAcceptedCommand='';
      session.lastAcceptedTranscript='';
      f.startSession?.('voice');
      session.recognition=createRecognitionController({
        onTranscript:handleTranscript,
        onState:recognitionState,
        onError:code=>{
          if(code==='not-allowed'||code==='service-not-allowed') recognitionState('blocked',code);
        }
      }).start();
      const pauseButton=$('#pauseVoiceListeningBtn');
      if(pauseButton) pauseButton.textContent='Pause Listening';
      await wait(180);
      await announceCurrentStep();
    }finally{
      session.starting=false;
    }
  }

  function endVoiceWorkout(spoken){
    const wasActive=session.active;
    session.active=false;
    session.starting=false;
    session.finished=false;
    session.state=STATES.IDLE;
    session.pausedByUser=false;
    session.handling=false;
    session.inputLockedUntil=0;
    clearTimers();
    try{ session.recognition?.stop?.(); }catch(_error){}
    session.recognition=null;
    stopMicrophoneMeter();
    interruptSpeech();
    closeModal();
    setListeningStatus('Voice workout ended','');
    if(spoken&&wasActive) speak('Voice workout ended.');
    document.dispatchEvent(new CustomEvent('baseline:fitness-voice-ended'));
  }

  function toggleListening(){
    if(!session.active||!session.recognition) return;
    session.pausedByUser=!session.pausedByUser;
    const button=$('#pauseVoiceListeningBtn');
    if(session.pausedByUser){
      session.recognition.pause();
      setMicrophoneMeterPaused(true);
      if(button) button.textContent='Resume Listening';
      setListeningStatus('Listening paused','paused');
    }else{
      setMicrophoneMeterPaused(false);
      session.recognition.resume();
      if(button) button.textContent='Pause Listening';
      setListeningStatus('Listening — interrupt at any time','listening');
    }
  }

  let uiBound=false;
  function bindUi(){
    if(uiBound) return;
    uiBound=true;
    document.addEventListener('click',event=>{
      const target=event.target?.closest?.('button');
      if(!target) return;
      if(target.id==='startVoiceWorkoutBtn'){
        event.preventDefault();
        event.stopPropagation();
        if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
        startVoiceWorkout();
        return;
      }
      if(target.id==='repeatVoiceInstructionBtn'){
        event.preventDefault();
        speak(session.lastInstruction||'The current exercise is shown on screen. The microphone remains active.');
      }else if(target.id==='pauseVoiceListeningBtn'){
        event.preventDefault();
        toggleListening();
      }else if(target.id==='endVoiceWorkoutBtn'){
        event.preventDefault();
        endVoiceWorkout(true);
      }
    },true);
  }

  function init(){
    prepareModalPresentation();
    bindUi();
    new MutationObserver(scheduleModalPresentation).observe(document.body,{childList:true,subtree:true});
    global.addEventListener('pagehide',()=>endVoiceWorkout(false));
    document.documentElement.setAttribute('data-baseline-fitness-voice-adapter',BUILD);
  }

  const api=Object.freeze({
    BUILD,
    start:startVoiceWorkout,
    stop:()=>endVoiceWorkout(false),
    state:()=>session.state,
    commands:COMMANDS,
    meterLevel:()=>session.micLevel,
    debug:Object.freeze({intentFor:stateIntent,commandFor:commandIntent,sameUtterance})
  });
  global.BASELINE_fitnessVoice=api;
  global[SINGLETON]=api;
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})(typeof window!=='undefined'?window:globalThis);
