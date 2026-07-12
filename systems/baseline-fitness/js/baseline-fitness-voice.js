/* Baseline Fitness — state-driven voice and workout control. */
(function(global){
  'use strict';

  const SINGLETON='__BASELINE_FITNESS_VOICE_ADAPTER__';
  if(global[SINGLETON]) return;

  const BUILD='BASELINE_FITNESS_VOICE_ADAPTER_20260712_7';
  const SETTINGS_KEY='__baseline_fitness_voice_settings_v2__';
  const SIDE_KEY='__baseline_fitness_side_plank_v1__';
  const STATES=Object.freeze({
    IDLE:'idle', AWAITING_GO:'awaiting_go', EXERCISE_ACTIVE:'exercise_active',
    AWAITING_RESULT:'awaiting_result', AWAITING_SETS_NUMBER:'awaiting_sets_number',
    AWAITING_SECONDS_NUMBER:'awaiting_seconds_number', RESTING:'resting',
    PAUSED:'paused', FINISHED:'finished', ERROR:'error'
  });
  const DEFAULT_SETTINGS=Object.freeze({
    volume:1, voiceURI:'', exerciseInstructions:true, startInstructions:true,
    timerStartAnnouncement:true, holdProgressPrompts:true,
    completionAnnouncements:true, resultQuestions:true
  });

  const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
  const synthesis=global.speechSynthesis||null;
  const AudioContextClass=global.AudioContext||global.webkitAudioContext||null;
  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,Number(value)||0));

  const session={
    active:false,starting:false,state:STATES.IDLE,recognition:null,
    recognitionWanted:false,recognitionRunning:false,recognitionRestart:0,
    recognitionSerial:0,pausedByUser:false,speaking:false,speechToken:0,
    currentContext:null,currentSide:null,sideResults:null,exerciseInterval:null,
    restInterval:null,exerciseRemaining:0,restRemaining:0,milestones:new Set(),
    lastInstruction:'',lastAcceptedAt:0,lastAcceptedFingerprint:'',handling:false,
    micMeter:null,micLevel:0,workoutRunning:false,workoutPaused:false,
    manualTimer:null,manualTimerInterval:null
  };

  function fitness(){ return global.BASELINE_fitnessWorkout||null; }
  function modal(){ return $('#voiceWorkoutModal'); }
  function normalise(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ').replace(/\s+/g,' ').trim();
  }
  function sameUtterance(left,right){
    const a=normalise(left),b=normalise(right);
    return Boolean(a&&b&&(a===b||a.includes(b)||b.includes(a)));
  }
  function isSidePlank(step){ return /\bside\s+plank\b/i.test(String(step?.name||'')); }
  function isTimed(step){ return Boolean(step?.isTimed||step?.unit==='seconds'); }
  function formatTimer(seconds){
    const total=Math.max(0,Math.round(Number(seconds)||0));
    return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
  }
  function numberLabel(number){
    const n=Math.max(0,Math.round(Number(number)||0));
    const small=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if(n<20) return small[n];
    if(n<100) return `${tens[Math.floor(n/10)]}${n%10?'-'+small[n%10]:''}`;
    if(n<1000) return `${small[Math.floor(n/100)]} hundred${n%100?' and '+numberLabel(n%100):''}`;
    return String(n);
  }

  function loadSettings(){
    try{
      const raw=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');
      return Object.assign({},DEFAULT_SETTINGS,raw&&typeof raw==='object'?raw:{});
    }catch(_error){ return Object.assign({},DEFAULT_SETTINGS); }
  }
  let settings=loadSettings();
  function saveSettings(){ try{ localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings)); }catch(_error){} }

  function injectStyles(){
    if($('#baseline-fitness-voice-v2-style')) return;
    const style=document.createElement('style');
    style.id='baseline-fitness-voice-v2-style';
    style.textContent=`
      #voiceListeningStatus{display:none!important}
      #voiceWorkoutModal .voice-workout-head{position:relative;align-items:center}
      .voice-settings-button{width:44px;height:44px;border-radius:999px;display:grid;place-items:center;border:1px solid var(--border-2,var(--border));background:var(--filter-bg,rgba(255,255,255,.07));color:inherit;cursor:pointer}
      .voice-settings-button:hover{filter:brightness(1.08)}
      .voice-settings-button:focus-visible{outline:3px solid currentColor;outline-offset:3px}
      .voice-settings-button svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8}
      .voice-settings-panel{margin:0 0 16px;padding:16px;border:1px solid var(--border-2,var(--border));border-radius:16px;background:var(--card-bg,var(--surface));box-shadow:0 16px 38px rgba(0,0,0,.2)}
      .voice-settings-panel[hidden]{display:none!important}.voice-settings-grid{display:grid;gap:14px}
      .voice-settings-row{display:grid;gap:7px}.voice-settings-row label,.voice-settings-title{font-weight:850}
      .voice-settings-inline{display:flex;align-items:center;gap:12px}.voice-settings-inline input[type=range]{flex:1}
      .voice-settings-toggles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 14px}
      .voice-setting-toggle{display:flex;align-items:center;gap:9px;font-weight:700}
      .voice-mic-status{font-size:.92rem;min-width:0!important}
      .side-plank-manual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:14px}
      .side-plank-side{border:1px solid var(--border-2,var(--border));border-radius:14px;padding:13px;background:var(--filter-bg,rgba(255,255,255,.04))}
      .side-plank-side h4{margin:0 0 9px}.side-plank-side .actions-inline{margin-top:9px}
      .side-plank-result{font-weight:800;margin-top:8px}.side-plank-side input{width:100%;margin-top:9px}
      .side-plank-original-actions-hidden{display:none!important}
      @media(max-width:680px){.voice-settings-toggles,.side-plank-manual{grid-template-columns:1fr}.voice-settings-panel{max-height:48vh;overflow:auto}}
    `;
    document.head.appendChild(style);
  }

  function ensureMicrophoneVisual(){
    const host=$('#voiceLastTranscript');
    if(!host) return;
    host.classList.add('voice-mic-host');
    if(host.querySelector('.voice-mic-visual')) return;
    host.innerHTML=`<div class="voice-mic-visual" data-state="idle" data-meter="idle" role="status" aria-live="polite" aria-label="Microphone status">
      <span class="voice-mic-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 15.5a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5.5a4 4 0 0 0 4 4z"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <span class="voice-level-bars" aria-hidden="true">${Array.from({length:9},()=>'<i></i>').join('')}</span>
      <span class="voice-mic-status"></span></div>`;
  }

  function ensureSettingsUi(){
    const head=$('#voiceWorkoutModal .voice-workout-head');
    if(!head) return;
    $('#voiceListeningStatus')?.remove();
    let button=$('#voiceSettingsBtn');
    if(!button){
      button=document.createElement('button');
      button.type='button';button.id='voiceSettingsBtn';button.className='voice-settings-button';
      button.setAttribute('aria-label','Voice settings');button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-controls','voiceSettingsPanel');
      button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="M19.1 13.4a7.8 7.8 0 0 0 .05-2.8l2-1.55-2-3.45-2.5 1a8.2 8.2 0 0 0-2.4-1.4L13.9 2h-4l-.4 3.2a8.2 8.2 0 0 0-2.4 1.4l-2.5-1-2 3.45 2 1.55a7.8 7.8 0 0 0 .05 2.8l-2.05 1.55 2 3.45 2.55-1a8.2 8.2 0 0 0 2.35 1.35l.4 3.25h4l.4-3.25a8.2 8.2 0 0 0 2.35-1.35l2.55 1 2-3.45-2.1-1.55Z"/></svg>';
      head.appendChild(button);
    }
    let panel=$('#voiceSettingsPanel');
    if(!panel){
      panel=document.createElement('section');panel.id='voiceSettingsPanel';panel.className='voice-settings-panel';
      panel.hidden=true;panel.setAttribute('aria-label','Voice settings');
      panel.innerHTML=`<div class="voice-settings-grid">
        <div class="voice-settings-row"><label for="voiceVolumeRange">Voice volume</label><div class="voice-settings-inline"><input id="voiceVolumeRange" type="range" min="0" max="100" step="1"><output id="voiceVolumeValue"></output></div></div>
        <div class="voice-settings-row" id="voiceSelectionRow"><label for="voiceSelection">Voice selection</label><select id="voiceSelection"></select></div>
        <div class="voice-settings-row"><div class="voice-settings-title">Voice prompts</div><div class="voice-settings-toggles">
          ${[['exerciseInstructions','Exercise instructions'],['startInstructions','Start instructions'],['timerStartAnnouncement','Timer-start announcement'],['holdProgressPrompts','Hold progress prompts'],['completionAnnouncements','Completion announcements'],['resultQuestions','Result questions']].map(([key,label])=>`<label class="voice-setting-toggle"><input type="checkbox" data-voice-setting="${key}"> ${label}</label>`).join('')}
        </div></div></div>`;
      head.insertAdjacentElement('afterend',panel);
    }
    syncSettingsUi();populateVoiceSelect();
  }

  function syncSettingsUi(){
    const volume=$('#voiceVolumeRange'),output=$('#voiceVolumeValue');
    if(volume) volume.value=String(Math.round(clamp(settings.volume,0,1)*100));
    if(output) output.textContent=`${Math.round(clamp(settings.volume,0,1)*100)}%`;
    $$('[data-voice-setting]').forEach(control=>{ control.checked=settings[control.dataset.voiceSetting]!==false; });
  }
  function populateVoiceSelect(){
    const row=$('#voiceSelectionRow'),select=$('#voiceSelection');
    if(!row||!select) return;
    if(!synthesis||typeof synthesis.getVoices!=='function'){ row.hidden=true;return; }
    const voices=synthesis.getVoices()||[];row.hidden=!voices.length;
    const markup=voices.map(voice=>`<option value="${String(voice.voiceURI||'').replace(/"/g,'&quot;')}">${String(voice.name||'Voice')} (${String(voice.lang||'')})</option>`).join('');
    if(select.dataset.voiceMarkup!==markup){ select.innerHTML=markup;select.dataset.voiceMarkup=markup; }
    if(settings.voiceURI&&voices.some(voice=>voice.voiceURI===settings.voiceURI)) select.value=settings.voiceURI;
    else if(voices.length){
      const preferred=voices.find(voice=>String(voice.lang||'').toLowerCase()==='en-gb')||voices[0];
      select.value=preferred.voiceURI;settings.voiceURI=preferred.voiceURI;saveSettings();
    }
  }
  function preparePresentation(){
    $('#bl-voice-toggle')?.remove();$('#bl-voice-flyout')?.remove();
    const title=$('#voiceWorkoutTitle');
    if(title){ if(title.textContent!=='Voice workout') title.textContent='Voice workout';title.classList.add('voice-visually-hidden'); }
    const target=$('#voiceExerciseTarget');if(target) target.hidden=true;
    ensureMicrophoneVisual();ensureSettingsUi();
  }

  function setMicState(state,text=''){
    const visual=$('.voice-mic-visual');if(!visual) return;
    visual.dataset.state=state;const status=$('.voice-mic-status',visual);if(status) status.textContent=text;
  }
  function setPrompt(text){ const node=$('#voiceWorkoutPrompt');if(node) node.textContent=String(text||''); }
  function showTimer(seconds,label='Timer'){
    const wrap=$('#voiceWorkoutTimerWrap'),digits=$('#voiceWorkoutTimer'),caption=$('#voiceWorkoutTimerLabel');
    if(wrap) wrap.hidden=false;if(digits) digits.textContent=formatTimer(seconds);if(caption) caption.textContent=label;
  }
  function hideTimer(){ const wrap=$('#voiceWorkoutTimerWrap');if(wrap) wrap.hidden=true; }
  function renderContext(context){
    if(!context) return;const position=$('#voiceStepPosition'),name=$('#voiceExerciseName');
    if(position) position.textContent=context.totalSteps?`Step ${Math.min(context.stepIndex+1,context.totalSteps)} of ${context.totalSteps}`:'Voice-Activated Workout';
    if(name) name.textContent=context.step?`${context.step.name} - (${Math.round(Number(context.step.target)||0)})`:'Workout complete';
  }
  function renderSide(side){
    const name=$('#voiceExerciseName');if(name&&session.currentContext?.step){
      name.textContent=`${side==='left'?'Left':'Right'} ${session.currentContext.step.name} - (${Math.round(Number(session.currentContext.step.target)||0)})`;
    }
  }
  function openModal(){ preparePresentation();const node=modal();if(node) node.hidden=false;document.body.classList.add('voice-workout-active'); }
  function closeModal(){ const node=modal();if(node) node.hidden=true;document.body.classList.remove('voice-workout-active'); }

  function clearExerciseTimer(){
    if(session.exerciseInterval){ clearInterval(session.exerciseInterval);session.exerciseInterval=null; }
    session.exerciseRemaining=0;session.milestones.clear();
  }
  function clearRestTimer(){ if(session.restInterval){ clearInterval(session.restInterval);session.restInterval=null; }session.restRemaining=0; }
  function clearManualTimer(){ if(session.manualTimerInterval){ clearInterval(session.manualTimerInterval);session.manualTimerInterval=null; }session.manualTimer=null; }
  function clearTimers(){ clearExerciseTimer();clearRestTimer();clearManualTimer(); }

  const BAR_SHAPE=[.45,.58,.73,.88,1,.88,.73,.58,.45];
  function updateMicrophoneBars(level,mode='live'){
    session.micLevel=clamp(level,0,1);const visual=$('.voice-mic-visual');if(!visual) return;
    visual.dataset.meter=mode;const bars=$$('.voice-level-bars i',visual);const now=(global.performance?.now?.()||Date.now())/92;
    bars.forEach((bar,index)=>{ const wave=.86+(.14*Math.sin(now+(index*1.63)));bar.style.height=`${(6+(34*session.micLevel*BAR_SHAPE[index]*wave)).toFixed(1)}px`;bar.style.opacity=String((.32+(.68*session.micLevel)).toFixed(2)); });
  }
  function stopMicrophoneMeter(){
    const meter=session.micMeter;session.micMeter=null;
    if(meter){
      if(meter.frame){ if(meter.frameType==='raf') global.cancelAnimationFrame?.(meter.frame);else clearTimeout(meter.frame); }
      try{ meter.source?.disconnect?.(); }catch(_error){}try{ meter.stream?.getTracks?.().forEach(track=>track.stop()); }catch(_error){}try{ meter.context?.close?.(); }catch(_error){}
    }
    updateMicrophoneBars(0,'idle');
  }
  async function startMicrophoneMeter(){
    stopMicrophoneMeter();if(!navigator.mediaDevices?.getUserMedia||!AudioContextClass) return false;
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1}});
    const context=new AudioContextClass();if(context.state==='suspended') await context.resume();
    const analyser=context.createAnalyser();analyser.fftSize=512;analyser.smoothingTimeConstant=.48;
    const source=context.createMediaStreamSource(stream);source.connect(analyser);const samples=new Uint8Array(analyser.fftSize);
    const meter={stream,context,analyser,source,samples,frame:0,frameType:'raf'};session.micMeter=meter;
    const tick=()=>{
      if(session.micMeter!==meter) return;analyser.getByteTimeDomainData(samples);let sum=0;
      samples.forEach(value=>{ const sample=(value-128)/128;sum+=sample*sample; });
      const rms=Math.sqrt(sum/samples.length),level=clamp((20*Math.log10(Math.max(rms,.00001))+62)/48,0,1);
      if(!session.pausedByUser&&!session.speaking) updateMicrophoneBars(level,'live');
      if(typeof global.requestAnimationFrame==='function'){ meter.frameType='raf';meter.frame=global.requestAnimationFrame(tick); }
      else{ meter.frameType='timer';meter.frame=setTimeout(tick,45); }
    };tick();return true;
  }

  function selectedVoice(){
    const voices=synthesis?.getVoices?.()||[];
    return voices.find(voice=>voice.voiceURI===settings.voiceURI)||voices.find(voice=>String(voice.lang||'').toLowerCase()==='en-gb')||voices[0]||null;
  }
  function pauseRecognitionForSpeech(){
    if(!session.recognitionRunning) return;const current=session.recognition;
    session.recognitionRunning=false;session.recognition=null;session.recognitionSerial+=1;
    try{ current?.abort?.(); }catch(_error){}
  }
  function scheduleRecognitionRestart(delay=60){
    if(session.recognitionRestart){ clearTimeout(session.recognitionRestart);session.recognitionRestart=0; }
    if(!session.recognitionWanted||session.pausedByUser||session.speaking||!session.active||session.state===STATES.FINISHED) return;
    session.recognitionRestart=setTimeout(startRecognitionInstance,delay);
  }
  function startRecognitionInstance(){
    if(session.recognitionRestart){ clearTimeout(session.recognitionRestart);session.recognitionRestart=0; }
    if(!Recognition||!session.recognitionWanted||session.recognitionRunning||session.pausedByUser||session.speaking||!session.active||session.state===STATES.FINISHED) return;
    const serial=++session.recognitionSerial;
    try{
      const recognition=new Recognition();session.recognition=recognition;
      recognition.lang='en-GB';recognition.continuous=true;recognition.interimResults=false;recognition.maxAlternatives=5;
      recognition.onstart=()=>{ if(serial!==session.recognitionSerial) return;session.recognitionRunning=true;setMicState('listening','Listening'); };
      recognition.onspeechstart=()=>{ if(serial===session.recognitionSerial) setMicState('hearing','Processing'); };
      recognition.onresult=event=>{
        if(serial!==session.recognitionSerial) return;
        for(let index=event.resultIndex;index<event.results.length;index++){
          const result=event.results[index],alternatives=[];
          for(let alternative=0;alternative<result.length;alternative++) alternatives.push(String(result[alternative]?.transcript||''));
          if(handleAlternatives(alternatives)) break;
        }
      };
      recognition.onerror=event=>{
        if(serial!==session.recognitionSerial) return;const code=String(event?.error||'recognition_error');
        if(code==='not-allowed'||code==='service-not-allowed'){ session.recognitionWanted=false;session.state=STATES.ERROR;setMicState('error','Microphone unavailable');setPrompt('Microphone unavailable'); }
      };
      recognition.onend=()=>{ if(serial!==session.recognitionSerial) return;session.recognitionRunning=false;session.recognition=null;scheduleRecognitionRestart(80); };
      recognition.start();
    }catch(_error){ session.recognitionRunning=false;session.recognition=null;scheduleRecognitionRestart(120); }
  }
  function startRecognition(){ session.recognitionWanted=true;session.pausedByUser=false;startRecognitionInstance(); }
  function stopRecognition(){
    session.recognitionWanted=false;if(session.recognitionRestart){ clearTimeout(session.recognitionRestart);session.recognitionRestart=0; }
    const current=session.recognition;session.recognition=null;session.recognitionRunning=false;session.recognitionSerial+=1;
    try{ current?.abort?.(); }catch(_error){}
  }

  function cancelSpeech(){ session.speechToken+=1;session.speaking=false;try{ synthesis?.cancel?.(); }catch(_error){} }
  function speak(text,settingName=null){
    const message=String(text||'').trim();if(message) session.lastInstruction=message;
    if(!message||!synthesis||!global.SpeechSynthesisUtterance||(settingName&&settings[settingName]===false)) return Promise.resolve(false);
    cancelSpeech();pauseRecognitionForSpeech();session.speaking=true;const token=++session.speechToken;setMicState('speaking','');
    return new Promise(resolve=>{
      let settled=false;const finish=value=>{
        if(settled) return;settled=true;if(token===session.speechToken) session.speaking=false;
        if(session.active&&!session.pausedByUser&&session.state!==STATES.FINISHED&&session.state!==STATES.ERROR){ setMicState('listening','Listening');scheduleRecognitionRestart(35); }
        resolve(Boolean(value));
      };
      try{
        const utterance=new global.SpeechSynthesisUtterance(message);utterance.lang='en-GB';utterance.volume=clamp(settings.volume,0,1);
        const voice=selectedVoice();if(voice) utterance.voice=voice;utterance.onend=()=>finish(true);utterance.onerror=()=>finish(false);
        synthesis.speak(utterance);setTimeout(()=>finish(false),Math.max(5000,message.length*180));
      }catch(_error){ finish(false); }
    });
  }

  function exactCommandForState(state,value){
    const text=normalise(value);if(!text) return null;
    if(state===STATES.AWAITING_GO) return text==='go'?'go':null;
    if(state===STATES.EXERCISE_ACTIVE||state===STATES.AWAITING_RESULT){
      if(/\b(fail|failed|failure)\b/i.test(text)) return 'fail';
      if(/\b(success|succeeded|successful)\b/i.test(text)) return 'success';
      return null;
    }
    if(state===STATES.RESTING) return text==='next'?'next':null;
    return null;
  }

  const ONES=Object.freeze({zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19});
  const TENS=Object.freeze({twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90});
  const NUMBER_FILLERS=new Set(['i','completed','complete','achieved','managed','did','about','approximately','sets','set','seconds','second','a','around','roughly','only']);
  function parseSpokenNumber(value){
    const text=normalise(value),digit=text.match(/\b\d{1,3}\b/);
    if(digit){ const number=Number(digit[0]);return number>=0&&number<=999?number:null; }
    const words=text.split(' ').filter(word=>word&&!NUMBER_FILLERS.has(word));let total=0,current=0,seen=false;
    for(const word of words){
      if(Object.prototype.hasOwnProperty.call(ONES,word)){ current+=ONES[word];seen=true;continue; }
      if(Object.prototype.hasOwnProperty.call(TENS,word)){ current+=TENS[word];seen=true;continue; }
      if(word==='hundred'){ if(current===0) current=1;current*=100;seen=true;continue; }
      if(word==='and') continue;
    }
    total+=current;return seen&&total>=0&&total<=999?total:null;
  }

  function handleAlternatives(alternatives){
    if(!session.active||session.pausedByUser||session.speaking||session.handling) return false;
    for(const raw of alternatives){
      const fingerprint=normalise(raw);if(!fingerprint) continue;const now=Date.now();
      if(session.lastAcceptedFingerprint&&sameUtterance(fingerprint,session.lastAcceptedFingerprint)&&now-session.lastAcceptedAt<1200) continue;
      let accepted=false;
      if(session.state===STATES.AWAITING_SETS_NUMBER||session.state===STATES.AWAITING_SECONDS_NUMBER){ const number=parseSpokenNumber(raw);if(number!==null) accepted=handleNumber(number); }
      else{ const command=exactCommandForState(session.state,raw);if(command) accepted=processCommand(command); }
      if(accepted){ session.lastAcceptedAt=now;session.lastAcceptedFingerprint=fingerprint;return true; }
    }
    if(session.state===STATES.AWAITING_SETS_NUMBER||session.state===STATES.AWAITING_SECONDS_NUMBER) speak('I didn’t catch the number. Say only the number, for example, three.','resultQuestions');
    return false;
  }

  function sideStorageKey(context){ return `${SIDE_KEY}::${context.planId||0}::${context.sessionIndex||0}::${context.stepIndex||0}`; }
  function readSideResults(context){
    try{ const value=JSON.parse(localStorage.getItem(sideStorageKey(context))||'null');return value&&typeof value==='object'?value:{left:null,right:null}; }
    catch(_error){ return {left:null,right:null}; }
  }
  function writeSideResults(context,value){ try{ localStorage.setItem(sideStorageKey(context),JSON.stringify(value)); }catch(_error){} }
  function configuredSets(context){
    if(!context?.step) return 1;const count=(context.steps||[]).filter(step=>!isTimed(step)&&step.name===context.step.name).length;return Math.max(1,count||1);
  }
  function validateNumber(number){
    const value=Math.round(Number(number));if(!Number.isFinite(value)||value<0) return null;
    if(session.state===STATES.AWAITING_SETS_NUMBER) return value<=configuredSets(session.currentContext)?value:null;
    if(session.state===STATES.AWAITING_SECONDS_NUMBER){ const target=Math.max(0,Math.round(Number(session.currentContext?.step?.target)||0));return value<=target?value:null; }
    return null;
  }

  function processCommand(command){
    if(session.handling) return false;session.handling=true;
    try{
      if(command==='go'){ beginExercise();return true; }
      if(command==='success'){ handleSuccess();return true; }
      if(command==='fail'){ handleFail();return true; }
      if(command==='next'){ prepareCurrentStep();return true; }
      return false;
    }finally{ session.handling=false; }
  }

  function beginExercise(){
    const context=session.currentContext||fitness()?.getCurrentContext?.();if(!context?.step) return;
    if(isTimed(context.step)){
      session.state=STATES.EXERCISE_ACTIVE;const start=()=>startHoldTimer(context);
      if(settings.timerStartAnnouncement!==false) speak('Timer starting.','timerStartAnnouncement').then(start);else start();
    }else{
      session.state=STATES.AWAITING_RESULT;hideTimer();setPrompt('Say ‘Success’ or ‘Fail’.');
      if(settings.resultQuestions!==false) speak('Say Success or Fail.','resultQuestions');
    }
  }
  function milestoneText(progress){
    if(progress===.25) return 'One quarter complete.';if(progress===.5) return 'Halfway complete.';if(progress===.75) return 'Three quarters complete.';return '';
  }
  function startHoldTimer(context){
    clearExerciseTimer();const target=Math.max(1,Math.round(Number(context.step.target)||1));
    session.exerciseRemaining=target;session.milestones.clear();showTimer(target,'Time remaining');setPrompt('');const startedAt=Date.now();
    session.exerciseInterval=setInterval(()=>{
      const elapsed=Math.min(target,Math.floor((Date.now()-startedAt)/1000));session.exerciseRemaining=Math.max(0,target-elapsed);showTimer(session.exerciseRemaining,'Time remaining');
      [0.25,0.5,0.75].forEach(progress=>{
        const milestone=Math.ceil(target*progress);
        if(elapsed>=milestone&&!session.milestones.has(progress)){ session.milestones.add(progress);if(settings.holdProgressPrompts!==false) speak(milestoneText(progress),'holdProgressPrompts'); }
      });
      if(elapsed>=target){
        clearExerciseTimer();showTimer(0,'Complete');session.state=STATES.AWAITING_RESULT;setPrompt('Say ‘Success’ or ‘Fail’.');
        const afterComplete=()=>settings.resultQuestions!==false?speak('Say Success or Fail.','resultQuestions'):Promise.resolve();
        if(settings.completionAnnouncements!==false) speak('Complete.','completionAnnouncements').then(afterComplete);else afterComplete();
      }
    },200);
  }

  function handleSuccess(){
    const context=session.currentContext||fitness()?.getCurrentContext?.();if(!context?.step) return;clearExerciseTimer();
    if(isSidePlank(context.step)){
      session.sideResults=session.sideResults||readSideResults(context);session.sideResults[session.currentSide]={status:'success',seconds:Math.round(context.step.target)};writeSideResults(context,session.sideResults);
      if(session.currentSide==='left'){ session.currentSide='right';prepareSide('right');return; }
      fitness()?.succeedCurrentStep?.('voice');startRestOrFinish();return;
    }
    fitness()?.succeedCurrentStep?.('voice');startRestOrFinish();
  }
  function handleFail(){
    const context=session.currentContext||fitness()?.getCurrentContext?.();if(!context?.step) return;clearExerciseTimer();
    if(isTimed(context.step)){
      session.state=STATES.AWAITING_SECONDS_NUMBER;const side=session.currentSide?` on the ${session.currentSide} side`:'';
      setPrompt('How many seconds did you achieve?');if(settings.resultQuestions!==false) speak(`How many seconds did you achieve${side}?`,'resultQuestions');
    }else{
      session.state=STATES.AWAITING_SETS_NUMBER;setPrompt('How many sets did you achieve?');if(settings.resultQuestions!==false) speak('How many sets did you achieve?','resultQuestions');
    }
  }
  function handleNumber(rawNumber){
    const number=validateNumber(rawNumber);
    if(number===null){ speak('I didn’t catch the number. Say only the number, for example, three.','resultQuestions');return false; }
    const context=session.currentContext||fitness()?.getCurrentContext?.();if(!context?.step) return false;
    if(session.state===STATES.AWAITING_SETS_NUMBER){
      const confirmation=`${numberLabel(number)} set${number===1?'':'s'} recorded.`;fitness()?.failCurrentStep?.(number,'voice');setPrompt(confirmation.charAt(0).toUpperCase()+confirmation.slice(1));speak(confirmation,'resultQuestions').then(startRestOrFinish);return true;
    }
    if(session.state===STATES.AWAITING_SECONDS_NUMBER){
      const confirmation=`${numberLabel(number)} second${number===1?'':'s'} recorded.`;
      if(isSidePlank(context.step)){
        session.sideResults=session.sideResults||readSideResults(context);session.sideResults[session.currentSide]={status:'failed',seconds:number};writeSideResults(context,session.sideResults);
        speak(confirmation,'resultQuestions').then(()=>{
          if(session.currentSide==='left'){ session.currentSide='right';prepareSide('right'); }
          else{ const values=['left','right'].map(side=>session.sideResults?.[side]?.seconds??0);fitness()?.failCurrentStep?.(Math.min(...values),'voice');startRestOrFinish(); }
        });
      }else{ fitness()?.failCurrentStep?.(number,'voice');speak(confirmation,'resultQuestions').then(startRestOrFinish); }
      return true;
    }
    return false;
  }

  function restSeconds(){ const source=global.BASELINE_voice?.getSettings?.()||{};return Math.max(1,Math.round(Number(source.maximumRestSeconds)||150)); }
  function startRestOrFinish(){
    const context=fitness()?.getCurrentContext?.();session.currentContext=context;syncWorkoutButtons();enhanceManualSidePlanks();
    if(!context||context.allComplete||!context.step){ finishVoiceWorkout();return; }
    clearRestTimer();session.state=STATES.RESTING;session.restRemaining=restSeconds();renderContext(context);showTimer(session.restRemaining,'Rest remaining');setPrompt('Say ‘Next’ to continue.');
    session.restInterval=setInterval(()=>{ session.restRemaining=Math.max(0,session.restRemaining-1);showTimer(session.restRemaining,'Rest remaining');if(session.restRemaining<=0) clearRestTimer(); },1000);
  }
  function prepareSide(side){
    const context=session.currentContext;if(!context?.step) return;clearTimers();session.currentSide=side;session.state=STATES.AWAITING_GO;renderContext(context);renderSide(side);showTimer(context.step.target,'Target time');setPrompt('When in position, say ‘Go’.');
    const label=side==='left'?'left':'right',exercise=`Prepare for the ${label} side plank.`,start='When in position, say Go.';
    if(settings.exerciseInstructions!==false&&settings.startInstructions!==false) speak(`${exercise} ${start}`,'exerciseInstructions');
    else if(settings.exerciseInstructions!==false) speak(exercise,'exerciseInstructions');else if(settings.startInstructions!==false) speak(start,'startInstructions');
  }
  function prepareCurrentStep(){
    clearTimers();const context=fitness()?.getCurrentContext?.();session.currentContext=context;
    if(!context||context.allComplete||!context.step){ finishVoiceWorkout();return; }
    renderContext(context);session.sideResults=null;session.currentSide=null;
    if(isSidePlank(context.step)){
      session.sideResults=readSideResults(context);if(!session.sideResults.left){ prepareSide('left');return; }if(!session.sideResults.right){ prepareSide('right');return; }
      session.sideResults={left:null,right:null};writeSideResults(context,session.sideResults);prepareSide('left');return;
    }
    session.state=STATES.AWAITING_GO;
    if(isTimed(context.step)){
      showTimer(context.step.target,'Target time');setPrompt('When in position, say ‘Go’.');
      if(settings.exerciseInstructions!==false) speak(`Prepare for ${context.step.name}.`,'exerciseInstructions').then(()=>{ if(settings.startInstructions!==false) return speak('When in position, say Go.','startInstructions'); });
      else if(settings.startInstructions!==false) speak('When in position, say Go.','startInstructions');
    }else{
      hideTimer();setPrompt('Say ‘Go’ to start.');
      if(settings.exerciseInstructions!==false) speak(`Prepare for ${context.step.name}.`,'exerciseInstructions').then(()=>{ if(settings.startInstructions!==false) return speak('When ready, say Go.','startInstructions'); });
      else if(settings.startInstructions!==false) speak('When ready, say Go.','startInstructions');
    }
  }

  async function finishVoiceWorkout(){
    clearTimers();session.state=STATES.FINISHED;session.workoutRunning=false;session.workoutPaused=false;
    const context=fitness()?.getCurrentContext?.();renderContext(context||{totalSteps:0});hideTimer();setPrompt('Complete');stopRecognition();
    if(context?.allComplete){ try{ await fitness()?.finishSession?.(); }catch(_error){} }
    if(settings.completionAnnouncements!==false) await speak('Complete.','completionAnnouncements');setMicState('paused','');syncWorkoutButtons();
  }
  async function startVoiceWorkout(){
    if(session.active||session.starting) return;session.starting=true;
    try{
      const controller=fitness(),context=controller?.getCurrentContext?.();
      if(!controller||!context?.available||!context.canStart){ const status=$('#myPlanStatus');if(status) status.textContent='The current workout is not available to start.';return; }
      if(!Recognition||!synthesis||!global.isSecureContext){ const status=$('#myPlanStatus');if(status) status.textContent='Voice recognition requires a supported browser over HTTPS.';return; }
      openModal();setMicState('paused','Processing');
      try{ await startMicrophoneMeter(); }catch(_error){ setMicState('error','Microphone unavailable');setPrompt('Microphone unavailable');return; }
      controller.startSession?.('voice');session.active=true;session.workoutRunning=true;session.workoutPaused=false;session.pausedByUser=false;session.lastAcceptedAt=0;session.lastAcceptedFingerprint='';
      startRecognition();prepareCurrentStep();syncWorkoutButtons();
    }finally{ session.starting=false; }
  }
  function pauseListening(){
    if(!session.active) return;session.pausedByUser=!session.pausedByUser;const button=$('#pauseVoiceListeningBtn');
    if(session.pausedByUser){ session.state=STATES.PAUSED;stopRecognition();setMicState('paused','Paused');setPrompt('Voice listening paused.');if(button) button.textContent='Resume Listening'; }
    else{
      const context=session.currentContext;if(context?.step){ if(session.exerciseInterval) session.state=STATES.EXERCISE_ACTIVE;else session.state=STATES.AWAITING_GO; }
      session.recognitionWanted=true;startRecognition();setMicState('listening','Listening');if(button) button.textContent='Pause Listening';restoreVisibleInstruction();
    }
  }
  function restoreVisibleInstruction(){
    if(session.state===STATES.AWAITING_GO) setPrompt(isTimed(session.currentContext?.step)?'When in position, say ‘Go’.':'Say ‘Go’ to start.');
    else if(session.state===STATES.AWAITING_RESULT) setPrompt('Say ‘Success’ or ‘Fail’.');
    else if(session.state===STATES.AWAITING_SETS_NUMBER) setPrompt('How many sets did you achieve?');
    else if(session.state===STATES.AWAITING_SECONDS_NUMBER) setPrompt('How many seconds did you achieve?');
    else if(session.state===STATES.RESTING) setPrompt('Say ‘Next’ to continue.');
  }
  function stopWorkout(requireConfirmation=true){
    if(requireConfirmation&&!global.confirm('Stop this workout? Your recorded progress will be kept.')) return false;
    const wasVoice=session.active;session.active=false;session.starting=false;session.workoutRunning=false;session.workoutPaused=true;session.pausedByUser=false;session.state=STATES.IDLE;
    clearTimers();stopRecognition();stopMicrophoneMeter();cancelSpeech();closeModal();syncWorkoutButtons();if(wasVoice) document.dispatchEvent(new CustomEvent('baseline:fitness-voice-ended'));return true;
  }
  function resumeManualWorkout(){
    const context=fitness()?.getCurrentContext?.();if(!context?.canStart) return;fitness()?.startSession?.('manual');session.workoutRunning=true;session.workoutPaused=false;syncWorkoutButtons();
  }
  function syncWorkoutButtons(){
    const context=fitness()?.getCurrentContext?.(),start=$('#startWorkoutBtn'),voiceButton=$('#startVoiceWorkoutBtn');if(!start) return;
    const started=Boolean(context?.started),setText=(node,text)=>{ if(node&&node.textContent!==text) node.textContent=text; };
    if(session.workoutRunning||session.active){ setText(start,'Stop Workout');start.dataset.workoutAction='stop';if(voiceButton&&voiceButton.hidden!==true) voiceButton.hidden=true; }
    else if(started||session.workoutPaused){ setText(start,'Continue Workout');start.dataset.workoutAction='continue';if(voiceButton){ if(voiceButton.hidden) voiceButton.hidden=false;setText(voiceButton,'Start Voice-Activated'); } }
    else{ setText(start,'Start Workout');start.dataset.workoutAction='start';if(voiceButton){ if(voiceButton.hidden) voiceButton.hidden=false;setText(voiceButton,'Start Voice-Activated'); } }
  }

  function manualSideResultText(result){ return result?`${result.status==='success'?'Success':'Fail'} — ${Math.round(result.seconds||0)} seconds`:''; }
  function renderManualSideCard(container,context,side,result,active){
    const label=side==='left'?'Left':'Right';
    container.innerHTML=`<h4>${label} Side Plank</h4><div>Target: ${Math.round(context.step.target)} seconds</div>${result?`<div class="side-plank-result">${manualSideResultText(result)}</div>`:''}${active&&!result?`<div class="actions-inline"><button class="compact-action compact-action--ghost" type="button" data-side-timer="${side}">Start Timer</button><button class="compact-action compact-action--success" type="button" data-side-success="${side}">Success</button><button class="compact-action compact-action--danger" type="button" data-side-fail="${side}">Fail</button></div><div data-side-failure-entry="${side}" hidden><input type="number" min="0" max="${Math.round(context.step.target)}" inputmode="numeric" placeholder="Seconds achieved"><button class="compact-action compact-action--danger" type="button" data-side-fail-save="${side}">Save</button></div>`:''}`;
  }
  function enhanceManualSidePlanks(){
    const context=fitness()?.getCurrentContext?.();if(!context?.steps?.length) return;
    $$('#currentWorkoutOut .current-step').forEach((node,index)=>{
      const step=context.steps[index];if(!isSidePlank(step)) return;const sideContext=Object.assign({},context,{stepIndex:index,step}),results=readSideResults(sideContext);
      let wrap=$('.side-plank-manual',node);if(!wrap){ wrap=document.createElement('div');wrap.className='side-plank-manual';node.appendChild(wrap); }
      const actions=$('.step-actions',node);if(actions) actions.classList.add('side-plank-original-actions-hidden');
      const active=index===context.stepIndex&&context.started&&context.canStart,signature=JSON.stringify({active,target:step.target,left:results.left,right:results.right});
      if(wrap.dataset.signature===signature) return;wrap.dataset.signature=signature;wrap.innerHTML='<section class="side-plank-side" data-manual-side="left"></section><section class="side-plank-side" data-manual-side="right"></section>';
      renderManualSideCard($('[data-manual-side="left"]',wrap),sideContext,'left',results.left,active);renderManualSideCard($('[data-manual-side="right"]',wrap),sideContext,'right',results.right,active);
    });
  }
  function saveManualSide(side,status,seconds){
    const context=fitness()?.getCurrentContext?.();if(!context?.step||!isSidePlank(context.step)) return;
    const results=readSideResults(context);results[side]={status,seconds:Math.round(clamp(seconds,0,context.step.target))};writeSideResults(context,results);
    if(results.left&&results.right){ if(results.left.status==='success'&&results.right.status==='success') fitness()?.succeedCurrentStep?.('manual');else fitness()?.failCurrentStep?.(Math.min(results.left.seconds,results.right.seconds),'manual'); }
    else enhanceManualSidePlanks();
  }
  function openManualSideTimer(side){
    const context=fitness()?.getCurrentContext?.();if(!context?.step) return;clearManualTimer();
    const overlay=$('#timerModal'),digits=$('#timerDigits'),message=$('#timerModalMessage');if(!overlay||!digits||!message) return;
    const target=Math.max(1,Math.round(context.step.target));let remaining=target;overlay.hidden=false;message.textContent=`${side==='left'?'Left':'Right'} Side Plank`;digits.textContent=formatTimer(remaining);session.manualTimer={side,target};
    session.manualTimerInterval=setInterval(()=>{ remaining=Math.max(0,remaining-1);digits.textContent=formatTimer(remaining);if(remaining<=0){ clearManualTimer();digits.textContent='00:00';message.textContent='Complete'; } },1000);
  }

  function bindUi(){
    document.addEventListener('click',event=>{
      const button=event.target?.closest?.('button');if(!button) return;
      if(button.id==='voiceSettingsBtn'){ event.preventDefault();const panel=$('#voiceSettingsPanel'),open=Boolean(panel?.hidden);if(panel) panel.hidden=!open;button.setAttribute('aria-expanded',String(open));return; }
      if(button.id==='startVoiceWorkoutBtn'){ event.preventDefault();event.stopPropagation();event.stopImmediatePropagation?.();startVoiceWorkout();return; }
      if(button.id==='startWorkoutBtn'){ event.preventDefault();event.stopPropagation();event.stopImmediatePropagation?.();const action=button.dataset.workoutAction||'start';if(action==='stop') stopWorkout(true);else resumeManualWorkout();return; }
      if(button.id==='endVoiceWorkoutBtn'){ event.preventDefault();stopWorkout(true);return; }
      if(button.id==='pauseVoiceListeningBtn'){ event.preventDefault();pauseListening();return; }
      if(button.id==='repeatVoiceInstructionBtn'){ event.preventDefault();speak(session.lastInstruction||'The current instruction is shown on screen.');return; }
      if(button.dataset.sideTimer){ event.preventDefault();openManualSideTimer(button.dataset.sideTimer);return; }
      if(button.dataset.sideSuccess){ event.preventDefault();saveManualSide(button.dataset.sideSuccess,'success',fitness()?.getCurrentContext?.()?.step?.target||0);return; }
      if(button.dataset.sideFail){ event.preventDefault();const entry=$(`[data-side-failure-entry="${button.dataset.sideFail}"]`,button.closest('.side-plank-side'));if(entry) entry.hidden=false;return; }
      if(button.dataset.sideFailSave){ event.preventDefault();const entry=$(`[data-side-failure-entry="${button.dataset.sideFailSave}"]`,button.closest('.side-plank-side')),input=$('input',entry);if(!input||String(input.value).trim()===''){ input?.focus();return; }saveManualSide(button.dataset.sideFailSave,'failed',Number(input.value)); }
    },true);
    document.addEventListener('input',event=>{
      if(event.target?.id==='voiceVolumeRange'){ settings.volume=clamp(Number(event.target.value)/100,0,1);const output=$('#voiceVolumeValue');if(output) output.textContent=`${Math.round(settings.volume*100)}%`;saveSettings(); }
    });
    document.addEventListener('change',event=>{
      const target=event.target;if(target?.id==='voiceSelection'){ settings.voiceURI=target.value;saveSettings(); }
      else if(target?.matches?.('[data-voice-setting]')){ settings[target.dataset.voiceSetting]=Boolean(target.checked);saveSettings(); }
    });
  }

  let mutationQueued=false;
  function scheduleEnhancement(){
    if(mutationQueued) return;mutationQueued=true;queueMicrotask(()=>{ mutationQueued=false;preparePresentation();syncWorkoutButtons();enhanceManualSidePlanks(); });
  }
  function init(){
    injectStyles();preparePresentation();bindUi();syncWorkoutButtons();enhanceManualSidePlanks();
    new MutationObserver(scheduleEnhancement).observe(document.body,{childList:true,subtree:true});
    synthesis?.addEventListener?.('voiceschanged',populateVoiceSelect);global.addEventListener('pagehide',()=>stopWorkout(false));
    document.documentElement.setAttribute('data-baseline-fitness-voice-adapter',BUILD);
  }

  const api=Object.freeze({
    BUILD,STATES,start:startVoiceWorkout,stop:()=>stopWorkout(false),state:()=>session.state,
    settings:()=>Object.assign({},settings),
    debug:Object.freeze({intentFor:exactCommandForState,parseNumber:parseSpokenNumber,normalise,sameUtterance,isSidePlank})
  });
  global.BASELINE_fitnessVoice=api;global[SINGLETON]=api;
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})(typeof window!=='undefined'?window:globalThis);
