/* Baseline Fitness — voice-activated workout adapter. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_VOICE_ADAPTER_20260712_1';
  const STATES=Object.freeze({
    IDLE:'idle',
    INTRODUCING:'introducing',
    WAITING_START:'waiting_start',
    PERFORMING:'performing',
    WAITING_ACHIEVED:'waiting_achieved',
    CONFIRMING_ACHIEVED:'confirming_achieved',
    RESTING:'resting',
    REST_EXPIRED:'rest_expired',
    COMPLETE:'complete',
    ERROR:'error'
  });

  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  }

  function stateIntent(state,value){
    const text=normalise(value);
    if(!text) return null;
    if(/\b(stop|end|cancel) voice workout\b/.test(text)||text==='stop listening') return 'stop_voice_workout';
    if(text==='repeat'||text==='repeat instruction'||text==='say that again') return 'repeat';
    if(state===STATES.WAITING_START && (text==='start'||text==='begin')) return 'start';
    if(state===STATES.PERFORMING){
      if(text==='succeeded'||text==='succeed'||text==='success') return 'succeeded';
      if(text==='failed'||text==='fail') return 'failed';
    }
    if(state===STATES.CONFIRMING_ACHIEVED){
      if(text==='yes'||text==='correct'||text==='that is correct') return 'yes';
      if(text==='no'||text==='incorrect'||text==='that is incorrect') return 'no';
    }
    if(state===STATES.RESTING && (text==='ready'||text==='i am ready')) return 'ready';
    if((state===STATES.RESTING||state===STATES.REST_EXPIRED) && /(?:add|more).*(?:thirty|30).*seconds/.test(text)) return 'add_thirty_seconds';
    if(state===STATES.REST_EXPIRED && (text==='start'||text==='begin')) return 'start';
    if(state===STATES.COMPLETE && (text==='finish'||text==='finish workout'||text==='complete workout')) return 'finish';
    return null;
  }

  function amountWord(unit,amount){
    const number=Math.round(Number(amount)||0);
    if(unit==='seconds') return `${number} second${number===1?'':'s'}`;
    return `${number} repetition${number===1?'':'s'}`;
  }

  function durationPhrase(seconds){
    const total=Math.max(0,Math.round(Number(seconds)||0));
    const minutes=Math.floor(total/60),remainder=total%60;
    const numberWords={0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',20:'twenty',30:'thirty',40:'forty',50:'fifty'};
    const say=value=>numberWords[value]||String(value);
    if(minutes&&remainder) return `${say(minutes)} minute${minutes===1?'':'s'} and ${say(remainder)} second${remainder===1?'':'s'}`;
    if(minutes) return `${say(minutes)} minute${minutes===1?'':'s'}`;
    return `${say(remainder)} second${remainder===1?'':'s'}`;
  }

  const pure=Object.freeze({BUILD,STATES,stateIntent,amountWord,durationPhrase});
  if(typeof module!=='undefined'&&module.exports) module.exports=pure;
  if(typeof document==='undefined'){
    global.BASELINE_FITNESS_VOICE_DEBUG=pure;
    return;
  }
  if(global.__BASELINE_FITNESS_VOICE_ADAPTER__) return;
  global.__BASELINE_FITNESS_VOICE_ADAPTER__=true;

  const $=(selector,root=document)=>root.querySelector(selector);
  const session={
    active:false,
    state:STATES.IDLE,
    recognition:null,
    pausedByUser:false,
    restInterval:null,
    exerciseInterval:null,
    restRemaining:0,
    exerciseRemaining:0,
    pendingAchieved:null,
    lastInstruction:'',
    lastTranscript:'',
    handling:false
  };

  function voice(){ return global.BASELINE_voice||null; }
  function fitness(){ return global.BASELINE_fitnessWorkout||null; }
  function modal(){ return $('#voiceWorkoutModal'); }

  function formatTimer(seconds){
    const total=Math.max(0,Math.round(Number(seconds)||0));
    return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
  }

  function setText(selector,value){ const node=$(selector); if(node) node.textContent=String(value==null?'':value); }
  function showTimer(value,label='Timer'){
    const wrap=$('#voiceWorkoutTimerWrap'),digits=$('#voiceWorkoutTimer'),caption=$('#voiceWorkoutTimerLabel');
    if(wrap) wrap.hidden=false;
    if(digits) digits.textContent=formatTimer(value);
    if(caption) caption.textContent=label;
  }
  function hideTimer(){ const wrap=$('#voiceWorkoutTimerWrap'); if(wrap) wrap.hidden=true; }

  function setListeningStatus(label,kind=''){
    const node=$('#voiceListeningStatus');
    if(node){ node.textContent=label; node.dataset.kind=kind; }
  }

  function setPrompt(message){
    setText('#voiceWorkoutPrompt',message);
    session.lastInstruction=String(message||'');
  }

  function setTranscript(value){
    session.lastTranscript=String(value||'');
    const node=$('#voiceLastTranscript');
    if(node) node.textContent=session.lastTranscript?`Heard: “${session.lastTranscript}”`:'Listening for the expected command…';
  }

  function renderContext(context,options={}){
    if(!context) return;
    if(context.step){
      setText('#voiceStepPosition',`Step ${context.stepIndex+1} of ${context.totalSteps}`);
      setText('#voiceExerciseName',context.step.name);
      setText('#voiceExerciseTarget',context.step.display);
    }else if(options.complete){
      setText('#voiceStepPosition',`${context.totalSteps}/${context.totalSteps} steps achieved`);
      setText('#voiceExerciseName','Workout steps complete');
      setText('#voiceExerciseTarget','Review the recorded outcomes, then finish the workout.');
    }
  }

  function openModal(){
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

  function speak(message,options={}){
    session.lastInstruction=String(message||'');
    return voice()?.speak?.(message,options)||Promise.resolve(false);
  }

  function unitQuestion(step){
    return step?.unit==='seconds'?'How many seconds did you achieve?':'How many repetitions did you achieve?';
  }

  function unitResult(step,amount){ return amountWord(step?.unit||'reps',amount); }

  function currentContext(){ return fitness()?.getCurrentContext?.()||null; }

  async function announceCurrentStep(prefix=''){
    clearTimers();
    const context=currentContext();
    if(!context||!context.available||!context.canStart){
      session.state=STATES.ERROR;
      setListeningStatus('Workout unavailable','error');
      setPrompt('The current workout is not available to voice control.');
      return;
    }
    if(context.allComplete||!context.step){
      await announceComplete(context);
      return;
    }
    session.state=STATES.INTRODUCING;
    renderContext(context);
    hideTimer();
    const message=`${prefix?prefix+' ':''}Step ${context.stepIndex+1} of ${context.totalSteps}. ${context.step.display}. Say Start when you are ready.`;
    setPrompt('Say “Start” when you are ready.');
    await speak(message);
    if(!session.active) return;
    session.state=STATES.WAITING_START;
    setListeningStatus(session.pausedByUser?'Listening paused':'Listening','listening');
  }

  async function beginAttempt(){
    clearExerciseTimer();
    const context=currentContext();
    if(!context?.step) return announceComplete(context||{totalSteps:0});
    session.state=STATES.PERFORMING;
    renderContext(context);
    setPrompt('Say “Succeeded” or “Failed” when the attempt is complete.');
    if(context.step.isTimed) showTimer(context.step.target,'Exercise time');
    else hideTimer();
    await speak('Started.');
    if(!session.active||session.state!==STATES.PERFORMING) return;
    if(context.step.isTimed){
      session.exerciseRemaining=Math.max(0,Math.round(context.step.target||0));
      showTimer(session.exerciseRemaining,'Exercise time');
      session.exerciseInterval=setInterval(()=>{
        session.exerciseRemaining=Math.max(0,session.exerciseRemaining-1);
        showTimer(session.exerciseRemaining,'Exercise time');
        if(session.exerciseRemaining<=0){
          clearExerciseTimer();
          showTimer(0,'Target time achieved');
          if(session.state===STATES.PERFORMING) speak('Target time complete. Say Succeeded or Failed.');
        }
      },1000);
    }
  }

  async function announceComplete(context=currentContext()){
    clearTimers();
    session.state=STATES.COMPLETE;
    renderContext(context||{totalSteps:0},{complete:true});
    hideTimer();
    setPrompt('Say “Finish” to complete the workout.');
    await speak('All workout steps are complete. Say Finish to complete the workout.');
  }

  async function startRest(options={}){
    clearTimers();
    const context=currentContext();
    if(!context||context.allComplete||!context.step){
      await announceComplete(context);
      return;
    }
    const settings=voice()?.getSettings?.()||{};
    const seconds=Math.max(1,Math.round(options.seconds||settings.maximumRestSeconds||150));
    session.state=STATES.RESTING;
    session.restRemaining=seconds;
    renderContext(context);
    showTimer(session.restRemaining,'Maximum recovery remaining');
    setPrompt('Say “Ready” when feeling recovered.');
    const message=options.extension
      ? 'Thirty seconds added. Say Ready when feeling recovered.'
      : `Rest for up to ${durationPhrase(seconds)}. Say Ready when feeling recovered.`;
    speak(message);
    session.restInterval=setInterval(()=>{
      session.restRemaining=Math.max(0,session.restRemaining-1);
      showTimer(session.restRemaining,'Maximum recovery remaining');
      if(settings.restAnnouncements&&session.restRemaining===30) speak('Thirty seconds remaining.');
      if(settings.countdownAnnouncements&&session.restRemaining===10) speak('Ten seconds remaining.');
      if(session.restRemaining<=0){
        clearRestTimer();
        onRestExpired();
      }
    },1000);
  }

  async function onRestExpired(){
    const context=currentContext();
    if(!context?.step) return announceComplete(context);
    session.state=STATES.REST_EXPIRED;
    renderContext(context);
    showTimer(0,'Maximum recovery reached');
    setPrompt('Say “Start” when ready, or say “Add thirty seconds”.');
    await speak(`Maximum recovery time reached. Step ${context.stepIndex+1}. ${context.step.display}. Say Start when ready, or say Add thirty seconds.`);
  }

  async function handleSucceeded(){
    const before=currentContext();
    if(!before?.step) return;
    clearExerciseTimer();
    fitness()?.succeedCurrentStep?.('voice');
    setPrompt(`Succeeded. Achieved ${unitResult(before.step,before.step.target)}.`);
    await speak(`Succeeded. ${unitResult(before.step,before.step.target)} achieved.`);
    if(!session.active) return;
    const after=currentContext();
    if(after?.allComplete||!after?.step) await announceComplete(after);
    else await startRest();
  }

  async function handleFailed(){
    const context=currentContext();
    if(!context?.step) return;
    clearExerciseTimer();
    session.state=STATES.WAITING_ACHIEVED;
    hideTimer();
    const question=unitQuestion(context.step);
    setPrompt(question);
    await speak(question);
  }

  async function hearAchieved(transcript){
    const context=currentContext();
    if(!context?.step) return;
    const amount=voice()?.parseNumber?.(transcript);
    if(amount==null||amount<0){
      await speak(`I did not recognise a number. ${unitQuestion(context.step)}`);
      return;
    }
    session.pendingAchieved=Math.round(amount);
    if(voice()?.getSettings?.().confirmNumbers!==false){
      session.state=STATES.CONFIRMING_ACHIEVED;
      setPrompt(`I heard ${unitResult(context.step,session.pendingAchieved)}. Say “Yes” or “No”.`);
      await speak(`I heard ${unitResult(context.step,session.pendingAchieved)}. Is that correct? Say Yes or No.`);
      return;
    }
    await saveFailedAchievement(session.pendingAchieved);
  }

  async function saveFailedAchievement(amount){
    const before=currentContext();
    if(!before?.step) return;
    fitness()?.failCurrentStep?.(amount,'voice');
    session.pendingAchieved=null;
    setPrompt(`Failed. Achieved ${unitResult(before.step,amount)}.`);
    await speak(`${unitResult(before.step,amount)} achieved.`);
    if(!session.active) return;
    const after=currentContext();
    if(after?.allComplete||!after?.step) await announceComplete(after);
    else await startRest();
  }

  async function confirmCommand(command){
    const settings=voice()?.getSettings?.()||{};
    if(!settings.confirmCommands) return;
    const labels={start:'Start',succeeded:'Succeeded',failed:'Failed',ready:'Ready',finish:'Finish',add_thirty_seconds:'Add thirty seconds'};
    if(labels[command]) await speak(`${labels[command]} recognised.`);
  }

  function commandForState(transcript){
    const v=voice();
    const always=['stop_voice_workout','repeat'];
    const byState={
      [STATES.WAITING_START]:['start'],
      [STATES.PERFORMING]:['succeeded','failed'],
      [STATES.CONFIRMING_ACHIEVED]:['yes','no'],
      [STATES.RESTING]:['ready','add_thirty_seconds'],
      [STATES.REST_EXPIRED]:['start','add_thirty_seconds'],
      [STATES.COMPLETE]:['finish']
    };
    return v?.commandForTranscript?.(transcript,always.concat(byState[session.state]||[]))||stateIntent(session.state,transcript);
  }

  async function handleTranscript(transcript){
    if(!session.active||session.handling||session.pausedByUser) return;
    session.handling=true;
    setTranscript(transcript);
    try{
      if(session.state===STATES.WAITING_ACHIEVED){
        await hearAchieved(transcript);
        return;
      }
      const command=commandForState(transcript);
      if(!command) return;
      if(command==='stop_voice_workout'){
        endVoiceWorkout(true);
        return;
      }
      if(command==='repeat'){
        await speak(session.lastInstruction||'Please follow the instruction shown on screen.');
        return;
      }
      await confirmCommand(command);
      if(command==='start') return beginAttempt();
      if(command==='succeeded') return handleSucceeded();
      if(command==='failed') return handleFailed();
      if(command==='yes'&&session.state===STATES.CONFIRMING_ACHIEVED) return saveFailedAchievement(session.pendingAchieved||0);
      if(command==='no'&&session.state===STATES.CONFIRMING_ACHIEVED){
        session.pendingAchieved=null;
        session.state=STATES.WAITING_ACHIEVED;
        const context=currentContext();
        setPrompt(unitQuestion(context?.step));
        return speak(`Please say the achieved number again. ${unitQuestion(context?.step)}`);
      }
      if(command==='ready'&&session.state===STATES.RESTING){
        clearRestTimer();
        return announceCurrentStep('Recovery ended.');
      }
      if(command==='add_thirty_seconds'){
        if(session.state===STATES.RESTING){
          session.restRemaining+=30;
          showTimer(session.restRemaining,'Maximum recovery remaining');
          return speak('Thirty seconds added.');
        }
        return startRest({seconds:30,extension:true});
      }
      if(command==='finish'&&session.state===STATES.COMPLETE){
        const result=await fitness()?.finishSession?.();
        if(result?.planComplete||result?.available===false){
          await speak('Workout finished.');
          endVoiceWorkout(false);
        }else{
          await speak('Workout finished.');
          endVoiceWorkout(false);
        }
      }
    }finally{
      session.handling=false;
    }
  }

  function recognitionState(state,detail){
    if(!session.active) return;
    if(state==='listening') setListeningStatus('Listening','listening');
    else if(state==='hearing') setListeningStatus('Hearing speech','hearing');
    else if(state==='paused') setListeningStatus(session.pausedByUser?'Listening paused':'Speaking','paused');
    else if(state==='blocked'){
      session.state=STATES.ERROR;
      setListeningStatus('Microphone blocked','error');
      setPrompt('Microphone permission was blocked. End the voice workout or enable microphone permission in the browser.');
    }else if(state==='error'&&detail!=='no-speech') setListeningStatus('Recognition reconnecting','warning');
  }

  async function startVoiceWorkout(){
    const v=voice(),f=fitness();
    const status=$('#myPlanStatus');
    if(!v||!f){ if(status) status.textContent='Voice control is still loading. Please try again.'; return; }
    const settings=v.getSettings();
    const supported=v.support();
    if(!settings.enabled){
      v.openSettings('Enable Voice Control Sitewide, save the setting, then start the voice workout again.');
      if(status) status.textContent='Enable Voice Control Sitewide before starting.';
      return;
    }
    if(!supported.recognition||!supported.synthesis||!supported.secureContext){
      v.openSettings('This browser does not currently provide all required voice features.');
      if(status) status.textContent='Voice recognition and spoken responses require a supported browser over HTTPS.';
      return;
    }
    const context=f.getCurrentContext();
    if(!context?.available||!context.canStart){ if(status) status.textContent='The current workout is not available to start.'; return; }

    openModal();
    setListeningStatus('Requesting microphone','warning');
    setTranscript('');
    try{
      await v.prepareMicrophone();
    }catch(error){
      session.state=STATES.ERROR;
      setListeningStatus('Microphone unavailable','error');
      setPrompt(error?.message==='secure_context_required'?'Microphone access requires HTTPS.':'Microphone permission or speech recognition is unavailable.');
      return;
    }

    session.active=true;
    session.state=STATES.INTRODUCING;
    session.pausedByUser=false;
    f.startSession('voice');
    session.recognition=v.startRecognition({
      onTranscript:handleTranscript,
      onState:recognitionState,
      onError:code=>{
        if(code==='not-allowed'||code==='service-not-allowed') recognitionState('blocked',code);
      }
    });
    const pauseButton=$('#pauseVoiceListeningBtn');
    if(pauseButton) pauseButton.textContent='Pause Listening';
    await announceCurrentStep();
  }

  function endVoiceWorkout(spoken){
    const wasActive=session.active;
    session.active=false;
    session.state=STATES.IDLE;
    session.pausedByUser=false;
    session.pendingAchieved=null;
    session.handling=false;
    clearTimers();
    try{ session.recognition?.stop?.(); }catch(_error){}
    session.recognition=null;
    if(spoken&&wasActive) voice()?.speak?.('Voice workout ended.');
    closeModal();
    setListeningStatus('Voice workout ended','');
  }

  function toggleListening(){
    if(!session.active||!session.recognition) return;
    session.pausedByUser=!session.pausedByUser;
    const button=$('#pauseVoiceListeningBtn');
    if(session.pausedByUser){
      session.recognition.pause();
      if(button) button.textContent='Resume Listening';
      setListeningStatus('Listening paused','paused');
    }else{
      session.recognition.resume();
      if(button) button.textContent='Pause Listening';
      setListeningStatus('Listening','listening');
    }
  }

  function bindUi(){
    document.addEventListener('click',event=>{
      const target=event.target?.closest?.('button');
      if(!target) return;
      if(target.id==='startVoiceWorkoutBtn'){
        event.preventDefault();
        startVoiceWorkout();
        return;
      }
      if(target.id==='repeatVoiceInstructionBtn'){
        event.preventDefault();
        if(session.active) speak(session.lastInstruction||'Please follow the instruction shown on screen.');
        return;
      }
      if(target.id==='pauseVoiceListeningBtn'){
        event.preventDefault();
        toggleListening();
        return;
      }
      if(target.id==='endVoiceWorkoutBtn'){
        event.preventDefault();
        endVoiceWorkout(true);
        return;
      }
      if(session.active&&['startWorkoutBtn','resetWorkout','finishWorkout'].includes(target.id)) endVoiceWorkout(false);
      if(session.active&&(target.classList.contains('step-success')||target.classList.contains('step-fail-toggle')||target.classList.contains('step-fail-save'))) endVoiceWorkout(false);
    });
    global.addEventListener('baseline:page-leaving',()=>endVoiceWorkout(false));
    global.addEventListener('pagehide',()=>endVoiceWorkout(false));
    document.addEventListener('baseline:voice-settings',event=>{
      if(session.active&&event.detail?.enabled===false) endVoiceWorkout(false);
    });
  }

  function register(){
    const v=voice(),f=fitness();
    if(!v||!f) return false;
    v.registerSystem('baseline-fitness',{
      start:startVoiceWorkout,
      end:()=>endVoiceWorkout(false),
      isActive:()=>session.active,
      getState:()=>session.state
    });
    return true;
  }

  function init(){
    document.documentElement.setAttribute('data-baseline-fitness-voice-runtime',BUILD);
    const node=modal();
    if(node) node.hidden=true;
    bindUi();
    let attempts=0;
    const wait=()=>{ if(register()) return; if(++attempts<160) setTimeout(wait,50); };
    wait();
  }

  global.BASELINE_FITNESS_VOICE_DEBUG=pure;
  global.BASELINE_fitnessVoice=Object.freeze({start:startVoiceWorkout,end:()=>endVoiceWorkout(false),isActive:()=>session.active,getState:()=>session.state});
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})(typeof window!=='undefined'?window:globalThis);
