/* Baseline Fitness — responsive voice workout controller (fitness-only). */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_VOICE_ADAPTER_20260712_3';
  const STATES=Object.freeze({
    IDLE:'idle', INTRODUCING:'introducing', WAITING_START:'waiting_start',
    PERFORMING:'performing', WAITING_ACHIEVED:'waiting_achieved',
    CONFIRMING_ACHIEVED:'confirming_achieved', RESTING:'resting',
    REST_EXPIRED:'rest_expired', COMPLETE:'complete', ERROR:'error'
  });
  const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
  const $=(selector,root=document)=>root.querySelector(selector);

  const session={
    active:false,state:STATES.IDLE,recognition:null,pausedByUser:false,
    restInterval:null,exerciseInterval:null,restRemaining:0,exerciseRemaining:0,
    pendingAchieved:null,lastInstruction:'',lastTranscript:'',handling:false,speaking:false
  };

  function voice(){ return global.BASELINE_voice||null; }
  function fitness(){ return global.BASELINE_fitnessWorkout||null; }
  function modal(){ return $('#voiceWorkoutModal'); }
  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ').replace(/\s+/g,' ').trim();
  }
  function containsPhrase(text,phrase){
    if(text===phrase) return true;
    const withoutFiller=text.replace(/^(?:i|im|i am|it was|that was|the result was)\s+/,'');
    return withoutFiller===phrase;
  }

  const ALIASES=Object.freeze({
    start:['start','begin','go','go ahead','lets start','ready to start'],
    succeeded:['succeeded','succeed','success','successful','successfully','i succeeded','i was successful','it was a success','complete','completed','done'],
    failed:['failed','fail','failure','unsuccessful','unsuccessfully','i failed','it was a failure','not successful','did not succeed','didnt succeed','could not complete','couldnt complete'],
    ready:['ready','i am ready','im ready','recovered','good to go','continue','next'],
    finish:['finish','finished','finish workout','complete workout','workout complete','done'],
    repeat:['repeat','repeat instruction','repeat that','say that again','say again'],
    yes:['yes','correct','thats correct','that is correct'],
    no:['no','incorrect','thats incorrect','that is incorrect'],
    add_thirty_seconds:['add thirty seconds','add 30 seconds','thirty more seconds','30 more seconds','more recovery'],
    stop_voice_workout:['stop voice workout','end voice workout','cancel voice workout','stop workout','end workout'],
    pause:['pause','pause listening'],resume:['resume','resume listening','continue listening']
  });

  function aliasIntent(value,allowed){
    const text=normalise(value);
    if(!text) return null;
    const names=Array.isArray(allowed)?allowed:Object.keys(ALIASES);
    for(const name of names){
      if((ALIASES[name]||[]).some(alias=>containsPhrase(text,alias))) return name;
    }
    return null;
  }

  function stateIntent(state,value){
    const always=['stop_voice_workout','repeat'];
    const byState={
      [STATES.WAITING_START]:['start'],
      [STATES.PERFORMING]:['failed','succeeded'],
      [STATES.CONFIRMING_ACHIEVED]:['yes','no'],
      [STATES.RESTING]:['ready','add_thirty_seconds'],
      [STATES.REST_EXPIRED]:['start','add_thirty_seconds'],
      [STATES.COMPLETE]:['finish']
    };
    return aliasIntent(value,always.concat(byState[state]||[]));
  }

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
  function unitQuestion(step){ return step?.unit==='seconds'?'How many seconds did you achieve?':'How many repetitions did you achieve?'; }
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
    transcript.innerHTML=`<div class="voice-mic-visual" data-state="idle" role="status" aria-live="polite" aria-label="Microphone active">
      <span class="voice-mic-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 15.5a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5.5a4 4 0 0 0 4 4z"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <span class="voice-level-bars" aria-hidden="true">${Array.from({length:9},()=>'<i></i>').join('')}</span>
      <span class="voice-mic-status">Microphone active</span>
    </div>`;
  }

  function prepareModalPresentation(){
    stripSitewideVoicePanel();
    const title=$('#voiceWorkoutTitle');
    if(title){ title.textContent='Voice workout'; title.classList.add('voice-visually-hidden'); }
    const target=$('#voiceExerciseTarget');
    if(target) target.hidden=true;
    ensureMicrophoneVisual();
  }

  function setMicState(state,label){
    const visual=$('.voice-mic-visual');
    if(!visual) return;
    visual.dataset.state=state||'idle';
    const status=$('.voice-mic-status',visual);
    if(status) status.textContent=label||({listening:'Microphone active',hearing:'Hearing you',speaking:'Voice instruction',paused:'Microphone paused',error:'Microphone unavailable'}[state]||'Microphone active');
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
    session.lastInstruction=String(message||'');
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
      const position=$('#voiceStepPosition');
      const name=$('#voiceExerciseName');
      const target=$('#voiceExerciseTarget');
      if(position) position.textContent=`Step ${context.stepIndex+1} of ${context.totalSteps}`;
      if(name) name.textContent=displayLabel(context.step);
      if(target){ target.textContent=''; target.hidden=true; }
    }else if(options.complete){
      const position=$('#voiceStepPosition');
      const name=$('#voiceExerciseName');
      if(position) position.textContent=`${context.totalSteps}/${context.totalSteps} steps achieved`;
      if(name) name.textContent='Workout steps complete';
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
  function closeModal(){ const node=modal(); if(node) node.hidden=true; document.body.classList.remove('voice-workout-active'); }
  function clearRestTimer(){ if(session.restInterval){ clearInterval(session.restInterval); session.restInterval=null; } session.restRemaining=0; }
  function clearExerciseTimer(){ if(session.exerciseInterval){ clearInterval(session.exerciseInterval); session.exerciseInterval=null; } session.exerciseRemaining=0; }
  function clearTimers(){ clearRestTimer(); clearExerciseTimer(); }

  function createRecognitionController(options={}){
    if(!Recognition) throw new Error('speech_recognition_unsupported');
    let recognizer=null,wanted=false,running=false,pauseDepth=0,restartTimer=0,lastText='',lastAt=0;
    function report(state,detail){ try{ options.onState?.(state,detail||null); }catch(_error){} }
    function clearRestart(){ if(restartTimer){ clearTimeout(restartTimer); restartTimer=0; } }
    function scheduleRestart(delay=35){
      clearRestart();
      if(!wanted||pauseDepth>0) return;
      restartTimer=setTimeout(startInstance,delay);
    }
    function emitTranscript(transcript,isFinal){
      const text=String(transcript||'').trim();
      if(!text) return;
      const now=Date.now();
      if(text===lastText&&now-lastAt<800) return;
      lastText=text; lastAt=now;
      try{ options.onTranscript?.(text,[text],{isFinal:Boolean(isFinal)}); }catch(_error){}
    }
    function startInstance(){
      clearRestart();
      if(!wanted||pauseDepth>0||running) return;
      try{
        recognizer=new Recognition();
        recognizer.lang=voice()?.getSettings?.().language||'en-GB';
        recognizer.continuous=true;
        recognizer.interimResults=true;
        recognizer.maxAlternatives=5;
        recognizer.onstart=()=>{ running=true; report('listening'); };
        recognizer.onaudiostart=()=>report('listening');
        recognizer.onsoundstart=()=>report('hearing');
        recognizer.onspeechstart=()=>report('hearing');
        recognizer.onspeechend=()=>report('listening');
        recognizer.onsoundend=()=>report('listening');
        recognizer.onresult=event=>{
          for(let index=event.resultIndex;index<event.results.length;index++){
            const result=event.results[index];
            if(!result?.length) continue;
            const transcript=String(result[0]?.transcript||'').trim();
            if(transcript) emitTranscript(transcript,result.isFinal);
          }
        };
        recognizer.onerror=event=>{
          const code=String(event?.error||'recognition_error');
          if(code==='not-allowed'||code==='service-not-allowed'){
            wanted=false; report('blocked',code);
          }else if(code!=='aborted'&&code!=='no-speech') report('error',code);
          try{ options.onError?.(code,event); }catch(_error){}
        };
        recognizer.onend=()=>{
          running=false; recognizer=null;
          if(wanted&&pauseDepth===0) scheduleRestart(35);
          else if(!wanted) report('stopped');
        };
        recognizer.start();
      }catch(error){
        running=false; recognizer=null;
        const code=String(error?.name||'start_error');
        if(code==='NotAllowedError'||code==='SecurityError'){ wanted=false; report('blocked',code); }
        else scheduleRestart(50);
        try{ options.onError?.(code,error); }catch(_error){}
      }
    }
    function start(){ wanted=true; pauseDepth=0; startInstance(); return controller; }
    function pause(){ pauseDepth+=1; clearRestart(); if(recognizer){ try{ recognizer.abort(); }catch(_error){} } running=false; report('paused'); return controller; }
    function resume(){ pauseDepth=Math.max(0,pauseDepth-1); if(wanted&&pauseDepth===0) scheduleRestart(20); return controller; }
    function stop(){ wanted=false; pauseDepth=0; clearRestart(); if(recognizer){ try{ recognizer.abort(); }catch(_error){} } recognizer=null; running=false; report('stopped'); }
    const controller=Object.freeze({start,pause,resume,stop,isWanted:()=>wanted,isRunning:()=>running,isPaused:()=>pauseDepth>0});
    return controller;
  }

  async function speak(message,options={}){
    session.lastInstruction=String(message||'');
    session.speaking=true;
    setMicState('speaking','Voice instruction');
    try{ return await (voice()?.speak?.(message,options)||Promise.resolve(false)); }
    finally{
      session.speaking=false;
      if(session.active&&!session.pausedByUser) setListeningStatus('Listening','listening');
    }
  }

  async function announceCurrentStep(prefix=''){
    clearTimers();
    const context=currentContext();
    if(!context||!context.available||!context.canStart){
      session.state=STATES.ERROR; setListeningStatus('Workout unavailable','error');
      setPrompt('The current workout is not available to voice control.'); return;
    }
    if(context.allComplete||!context.step) return announceComplete(context);
    session.state=STATES.INTRODUCING; renderContext(context); hideTimer();
    const spokenTarget=unitResult(context.step,context.step.target);
    setPrompt('Say “Start” when you are ready.');
    await speak(`${prefix?prefix+' ':''}Step ${context.stepIndex+1} of ${context.totalSteps}. ${context.step.name}. Target ${spokenTarget}. Say Start when you are ready.`);
    if(!session.active) return;
    session.state=STATES.WAITING_START;
    setListeningStatus(session.pausedByUser?'Listening paused':'Listening',session.pausedByUser?'paused':'listening');
  }

  async function beginAttempt(){
    clearExerciseTimer();
    const context=currentContext();
    if(!context?.step) return announceComplete(context||{totalSteps:0});
    session.state=STATES.PERFORMING; renderContext(context);
    setPrompt('Say “Succeeded”, “Success”, “Successful”, “Failed” or “Failure” when the attempt is complete.');
    if(context.step.isTimed) showTimer(context.step.target,'Exercise time'); else hideTimer();
    await speak('Started.');
    if(!session.active||session.state!==STATES.PERFORMING) return;
    if(context.step.isTimed){
      session.exerciseRemaining=Math.max(0,Math.round(context.step.target||0));
      showTimer(session.exerciseRemaining,'Exercise time');
      session.exerciseInterval=setInterval(()=>{
        session.exerciseRemaining=Math.max(0,session.exerciseRemaining-1);
        showTimer(session.exerciseRemaining,'Exercise time');
        if(session.exerciseRemaining<=0){
          clearExerciseTimer(); showTimer(0,'Target time achieved');
          if(session.state===STATES.PERFORMING) speak('Target time complete. Say Succeeded, Success, Failed or Failure.');
        }
      },1000);
    }
  }

  async function announceComplete(context=currentContext()){
    clearTimers(); session.state=STATES.COMPLETE;
    renderContext(context||{totalSteps:0},{complete:true}); hideTimer();
    setPrompt('Say “Finish” to complete the workout.');
    await speak('All workout steps are complete. Say Finish to complete the workout.');
  }

  async function startRest(options={}){
    clearTimers();
    const context=currentContext();
    if(!context||context.allComplete||!context.step) return announceComplete(context);
    const settings=voice()?.getSettings?.()||{};
    const seconds=Math.max(1,Math.round(options.seconds||settings.maximumRestSeconds||150));
    session.state=STATES.RESTING; session.restRemaining=seconds;
    renderContext(context); showTimer(seconds,'Maximum recovery remaining');
    setPrompt('Say “Ready”, “Recovered”, “Continue” or “Next” when feeling recovered.');
    speak(options.extension?'Thirty seconds added. Say Ready when feeling recovered.':`Rest for up to ${durationPhrase(seconds)}. Say Ready when feeling recovered.`);
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
    session.state=STATES.REST_EXPIRED; renderContext(context); showTimer(0,'Maximum recovery reached');
    setPrompt('Say “Start” when ready, or say “Add thirty seconds”.');
    await speak(`Maximum recovery time reached. ${context.step.name}. Say Start when ready, or say Add thirty seconds.`);
  }

  async function handleSucceeded(){
    const before=currentContext(); if(!before?.step) return;
    clearExerciseTimer(); fitness()?.succeedCurrentStep?.('voice');
    setPrompt(`Succeeded. Achieved ${unitResult(before.step,before.step.target)}.`);
    await speak(`Succeeded. ${unitResult(before.step,before.step.target)} achieved.`);
    if(!session.active) return;
    const after=currentContext();
    if(after?.allComplete||!after?.step) await announceComplete(after); else await startRest();
  }

  async function handleFailed(){
    const context=currentContext(); if(!context?.step) return;
    clearExerciseTimer(); session.state=STATES.WAITING_ACHIEVED; hideTimer();
    const question=unitQuestion(context.step); setPrompt(question); await speak(question);
  }

  async function hearAchieved(transcript){
    const context=currentContext(); if(!context?.step) return;
    const amount=voice()?.parseNumber?.(transcript);
    if(amount==null||amount<0){ await speak(`I did not recognise a number. ${unitQuestion(context.step)}`); return; }
    session.pendingAchieved=Math.round(amount);
    const confirm=voice()?.getSettings?.().confirmNumbers!==false;
    if(confirm){
      session.state=STATES.CONFIRMING_ACHIEVED;
      setPrompt(`I heard ${unitResult(context.step,session.pendingAchieved)}. Say “Yes” or “No”.`);
      await speak(`I heard ${unitResult(context.step,session.pendingAchieved)}. Is that correct? Say Yes or No.`);
    }else await saveFailedAchievement(session.pendingAchieved);
  }

  async function saveFailedAchievement(amount){
    const before=currentContext(); if(!before?.step) return;
    fitness()?.failCurrentStep?.(amount,'voice'); session.pendingAchieved=null;
    setPrompt(`Failed. Achieved ${unitResult(before.step,amount)}.`);
    await speak(`${unitResult(before.step,amount)} achieved.`);
    if(!session.active) return;
    const after=currentContext();
    if(after?.allComplete||!after?.step) await announceComplete(after); else await startRest();
  }

  async function handleTranscript(transcript){
    if(!session.active||session.handling||session.pausedByUser) return;
    session.handling=true; setTranscript(transcript); setMicState('hearing','Hearing you');
    try{
      if(session.state===STATES.WAITING_ACHIEVED){ await hearAchieved(transcript); return; }
      const command=stateIntent(session.state,transcript);
      if(!command) return;
      if(command==='stop_voice_workout'){ endVoiceWorkout(true); return; }
      if(command==='repeat'){ await speak(session.lastInstruction||'Please follow the instruction shown on screen.'); return; }
      if(command==='start') return beginAttempt();
      if(command==='succeeded') return handleSucceeded();
      if(command==='failed') return handleFailed();
      if(command==='yes'&&session.state===STATES.CONFIRMING_ACHIEVED) return saveFailedAchievement(session.pendingAchieved||0);
      if(command==='no'&&session.state===STATES.CONFIRMING_ACHIEVED){
        session.pendingAchieved=null; session.state=STATES.WAITING_ACHIEVED;
        const context=currentContext(); setPrompt(unitQuestion(context?.step));
        return speak(`Please say the achieved number again. ${unitQuestion(context?.step)}`);
      }
      if(command==='ready'&&session.state===STATES.RESTING){ clearRestTimer(); return announceCurrentStep('Recovery ended.'); }
      if(command==='add_thirty_seconds'){
        if(session.state===STATES.RESTING){ session.restRemaining+=30; showTimer(session.restRemaining,'Maximum recovery remaining'); return speak('Thirty seconds added.'); }
        return startRest({seconds:30,extension:true});
      }
      if(command==='finish'&&session.state===STATES.COMPLETE){ await fitness()?.finishSession?.(); await speak('Workout finished.'); endVoiceWorkout(false); }
    }finally{
      session.handling=false;
      if(session.active&&!session.pausedByUser&&session.state!==STATES.ERROR) setListeningStatus('Listening','listening');
    }
  }

  function recognitionState(state,detail){
    if(!session.active&&state!=='blocked') return;
    if(state==='listening') setListeningStatus('Listening','listening');
    else if(state==='hearing') setListeningStatus('Hearing speech','hearing');
    else if(state==='paused') setListeningStatus(session.pausedByUser?'Listening paused':'Speaking','paused');
    else if(state==='blocked'){
      session.state=STATES.ERROR; setListeningStatus('Microphone blocked','error');
      setPrompt('Microphone permission was blocked. Enable microphone permission in the browser, then start again.');
    }else if(state==='error'&&detail!=='no-speech') setListeningStatus('Recognition reconnecting','paused');
  }

  async function startVoiceWorkout(){
    const v=voice(),f=fitness(),status=$('#myPlanStatus');
    if(!v||!f){ if(status) status.textContent='Voice control is still loading. Please try again.'; return; }
    const supported=v.support?.()||{};
    if(!Recognition||!supported.synthesis||!supported.secureContext){
      if(status) status.textContent='Voice recognition and spoken responses require a supported browser over HTTPS.'; return;
    }
    const context=f.getCurrentContext?.();
    if(!context?.available||!context.canStart){ if(status) status.textContent='The current workout is not available to start.'; return; }

    openModal(); setListeningStatus('Requesting microphone','paused'); setTranscript('');
    try{ await v.prepareMicrophone?.(); }
    catch(error){
      session.state=STATES.ERROR; setListeningStatus('Microphone unavailable','error');
      setPrompt(error?.message==='secure_context_required'?'Microphone access requires HTTPS.':'Microphone permission or speech recognition is unavailable.');
      return;
    }

    session.active=true; session.state=STATES.INTRODUCING; session.pausedByUser=false;
    f.startSession?.('voice');
    session.recognition=createRecognitionController({onTranscript:handleTranscript,onState:recognitionState,onError:code=>{ if(code==='not-allowed'||code==='service-not-allowed') recognitionState('blocked',code); }}).start();
    const pauseButton=$('#pauseVoiceListeningBtn'); if(pauseButton) pauseButton.textContent='Pause Listening';
    await announceCurrentStep();
  }

  function endVoiceWorkout(spoken){
    const wasActive=session.active;
    session.active=false; session.state=STATES.IDLE; session.pausedByUser=false; session.pendingAchieved=null; session.handling=false; session.speaking=false;
    clearTimers(); try{ session.recognition?.stop?.(); }catch(_error){} session.recognition=null;
    if(spoken&&wasActive) voice()?.speak?.('Voice workout ended.');
    closeModal(); setListeningStatus('Voice workout ended','');
    document.dispatchEvent(new CustomEvent('baseline:fitness-voice-ended'));
  }

  function toggleListening(){
    if(!session.active||!session.recognition) return;
    session.pausedByUser=!session.pausedByUser;
    const button=$('#pauseVoiceListeningBtn');
    if(session.pausedByUser){ session.recognition.pause(); if(button) button.textContent='Resume Listening'; setListeningStatus('Listening paused','paused'); }
    else{ session.recognition.resume(); if(button) button.textContent='Pause Listening'; setListeningStatus('Listening','listening'); }
  }

  function bindUi(){
    document.addEventListener('click',event=>{
      const target=event.target?.closest?.('button'); if(!target) return;
      if(target.id==='startVoiceWorkoutBtn'){
        event.preventDefault(); event.stopPropagation();
        if(typeof event.stopImmediatePropagation==='function') event.stopImmediatePropagation();
        startVoiceWorkout(); return;
      }
      if(target.id==='repeatVoiceInstructionBtn'){ event.preventDefault(); speak(session.lastInstruction||'Please follow the instruction shown on screen.'); }
      else if(target.id==='pauseVoiceListeningBtn'){ event.preventDefault(); toggleListening(); }
      else if(target.id==='endVoiceWorkoutBtn'){ event.preventDefault(); endVoiceWorkout(true); }
    },true);
  }

  function init(){
    stripSitewideVoicePanel(); prepareModalPresentation(); bindUi();
    new MutationObserver(()=>{ stripSitewideVoicePanel(); prepareModalPresentation(); }).observe(document.body,{childList:true,subtree:true});
    global.addEventListener('pagehide',()=>endVoiceWorkout(false));
    document.documentElement.setAttribute('data-baseline-fitness-voice-adapter',BUILD);
  }

  global.BASELINE_fitnessVoice=Object.freeze({BUILD,start:startVoiceWorkout,stop:()=>endVoiceWorkout(false),state:()=>session.state,aliases:ALIASES});
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})(typeof window!=='undefined'?window:globalThis);
