/* Baseline Lifestyle — sitewide voice control and settings. */
(function(global){
  'use strict';

  const BUILD='BASELINE_VOICE_FITNESS_SETTINGS_20260803_1';
  const API_ENDPOINT='/sitewide/api/voice_settings.php';
  const DEFAULTS=Object.freeze({
    enabled:false,
    spokenResponses:true,
    language:'en-GB',
    voiceURI:'',
    rate:1,
    pitch:1,
    volume:1,
    confirmNumbers:true,
    confirmCommands:false,
    restAnnouncements:true,
    countdownAnnouncements:true,
    maximumRestSeconds:150
  });

  const COMMAND_ALIASES=Object.freeze({
    start:['start','begin','go','start now','begin now','lets start','let us start'],
    succeeded:['succeeded','succeed','success'],
    failed:['failed','fail'],
    ready:['ready','i am ready'],
    finish:['finish','finish workout','complete workout'],
    repeat:['repeat','repeat instruction','say that again'],
    yes:['yes','correct','that is correct'],
    no:['no','incorrect','that is incorrect'],
    add_thirty_seconds:['add thirty seconds','add 30 seconds','thirty more seconds','30 more seconds'],
    stop_voice_workout:['stop voice workout','end voice workout','cancel voice workout','stop listening'],
    pause:['pause','pause listening'],
    resume:['resume','resume listening','continue listening']
  });

  function clamp(value,min,max){
    value=Number(value);
    return Number.isFinite(value)?Math.max(min,Math.min(max,value)):min;
  }

  function normaliseTranscript(value){
    return String(value==null?'':value)
      .toLowerCase()
      .replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ')
      .replace(/-/g,' ')
      .replace(/\s+/g,' ')
      .trim();
  }

  function phraseMatches(text,phrase){
    if(!text||!phrase) return false;
    if(text===phrase) return true;
    return (` ${text} `).includes(` ${phrase} `);
  }

  function commandForTranscript(value,allowed){
    const text=normaliseTranscript(value);
    if(!text) return null;
    if(/\b(?:not|dont|do not)\s+ready\b/.test(text)) return null;
    const names=Array.isArray(allowed)&&allowed.length?allowed:Object.keys(COMMAND_ALIASES);
    for(const name of names){
      const aliases=COMMAND_ALIASES[name]||[name.replace(/_/g,' ')];
      if(aliases.some(alias=>phraseMatches(text,normaliseTranscript(alias)))) return name;
    }
    return null;
  }

  function transcriptCandidates(primary,alternatives=[]){
    const values=[primary,...(Array.isArray(alternatives)?alternatives:[])]
      .map(value=>String(value||'').trim())
      .filter(Boolean);
    const seen=new Set();
    return values.filter(value=>{
      const key=normaliseTranscript(value);
      if(!key||seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function commandForAlternatives(primary,alternatives,allowed){
    for(const transcript of transcriptCandidates(primary,alternatives)){
      const command=commandForTranscript(transcript,allowed);
      if(command) return {command,transcript};
    }
    return null;
  }

  function parseSpokenNumberFromAlternatives(primary,alternatives){
    for(const transcript of transcriptCandidates(primary,alternatives)){
      const number=parseSpokenNumber(transcript);
      if(Number.isFinite(number)) return {number,transcript};
    }
    return null;
  }

  function parseSpokenNumber(value){
    const text=normaliseTranscript(value);
    if(!text) return null;
    const digitMatch=text.match(/(?:^|\s)(\d{1,5})(?:\s|$)/);
    if(digitMatch) return Number(digitMatch[1]);

    const small={
      zero:0,oh:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,
      ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,
      seventeen:17,eighteen:18,nineteen:19
    };
    const tens={twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};
    let total=0,current=0,found=false;
    for(const token of text.split(' ')){
      if(token==='and') continue;
      if(Object.prototype.hasOwnProperty.call(small,token)){
        current+=small[token]; found=true; continue;
      }
      if(Object.prototype.hasOwnProperty.call(tens,token)){
        current+=tens[token]; found=true; continue;
      }
      if(token==='hundred'){
        current=Math.max(1,current)*100; found=true; continue;
      }
      if(token==='thousand'){
        total+=Math.max(1,current)*1000; current=0; found=true;
      }
    }
    return found?total+current:null;
  }

  function normaliseSettings(source){
    const value=source&&typeof source==='object'?source:{};
    return {
      enabled:Boolean(value.enabled),
      spokenResponses:value.spokenResponses!==false,
      language:String(value.language||DEFAULTS.language).slice(0,24),
      voiceURI:String(value.voiceURI||'').slice(0,240),
      rate:clamp(value.rate==null?DEFAULTS.rate:value.rate,.5,2),
      pitch:clamp(value.pitch==null?DEFAULTS.pitch:value.pitch,.5,2),
      volume:clamp(value.volume==null?DEFAULTS.volume:value.volume,0,1),
      confirmNumbers:value.confirmNumbers!==false,
      confirmCommands:Boolean(value.confirmCommands),
      restAnnouncements:value.restAnnouncements!==false,
      countdownAnnouncements:value.countdownAnnouncements!==false,
      maximumRestSeconds:Math.round(clamp(value.maximumRestSeconds==null?DEFAULTS.maximumRestSeconds:value.maximumRestSeconds,30,600))
    };
  }

  const pure=Object.freeze({BUILD,DEFAULTS,COMMAND_ALIASES,normaliseTranscript,transcriptCandidates,commandForTranscript,commandForAlternatives,parseSpokenNumber,parseSpokenNumberFromAlternatives,normaliseSettings});
  if(typeof module!=='undefined'&&module.exports) module.exports=pure;
  if(typeof document==='undefined'){
    global.BASELINE_VOICE_DEBUG=pure;
    return;
  }
  if(global.__BASELINE_VOICE_SITEWIDE__) return;
  global.__BASELINE_VOICE_SITEWIDE__=true;

  const $=(selector,root=document)=>root.querySelector(selector);
  const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition||null;
  const synthesis=global.speechSynthesis||null;
  const systems=new Map();
  const settingsListeners=new Set();
  let settings=normaliseSettings(DEFAULTS);
  let activeRecognition=null;
  let speechQueue=Promise.resolve();
  let flyout=null;
  let statusNode=null;
  let accountName='';
  let serverLoadToken=0;
  let accountSaveBlocked=false;
  let lastSaveSucceeded=true;
  const VOICE_RESOURCE='voice';

  function revisionClient(){ return global.BASELINE_api?.revisions || null; }
  function rememberRevision(data){ revisionClient()?.remember?.(VOICE_RESOURCE,data); }
  function revisionedBody(body){ return revisionClient()?.withExpected?.(VOICE_RESOURCE,body) || Object.assign({ expectedRevision:0 },body); }

  function emitSettings(){
    const snapshot=getSettings();
    settingsListeners.forEach(listener=>{ try{ listener(snapshot); }catch(_error){} });
    try{ document.dispatchEvent(new CustomEvent('baseline:voice-settings',{detail:snapshot})); }catch(_error){}
    syncToggleState();
  }

  function getSettings(){ return Object.assign({},settings); }

  async function saveSettings(next,options={}){
    const candidate=normaliseSettings(Object.assign({},settings,next||{}));
    const authenticated=Boolean(accountName&&location.protocol!=='file:');
    if(!authenticated){
      settings=candidate;
      syncSettingsUi();
      emitSettings();
      lastSaveSucceeded=true;
      setStatus('Voice setting applied for this page. Sign in to save it to your account.','notice');
      return getSettings();
    }
    if(options.server===false){
      settings=candidate;
      syncSettingsUi();
      emitSettings();
      lastSaveSucceeded=true;
      return getSettings();
    }
    if(accountSaveBlocked){
      lastSaveSucceeded=false;
      syncSettingsUi();
      setStatus('Saving has stopped. Reload the authoritative account settings before making another change.','error');
      return getSettings();
    }
    try{
      const response=await fetch(API_ENDPOINT,{
        method:'POST',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(revisionedBody({settings:candidate}))
      });
      const data=await response.json().catch(()=>null);
      if(response.status===409&&data?.error==='revision_conflict'){
        accountSaveBlocked=true;
        await loadServerSettings(accountName);
        lastSaveSucceeded=false;
        setStatus('Voice settings changed elsewhere. The latest account settings were reloaded; review them before saving again.','warning');
        return getSettings();
      }
      if(!response.ok||!data?.ok) throw new Error('save_failed');
      rememberRevision(data);
      settings=candidate;
      accountSaveBlocked=false;
      lastSaveSucceeded=true;
      syncSettingsUi();
      emitSettings();
      setStatus('Voice settings saved to your account.','success');
    }catch(_error){
      accountSaveBlocked=true;
      lastSaveSucceeded=false;
      syncSettingsUi();
      setStatus('Voice settings were not saved. Saving has stopped until you reload the authoritative account settings.','error');
    }
    return getSettings();
  }

  async function loadServerSettings(name){
    const token=++serverLoadToken;
    accountName=String(name||'').trim();
    if(!accountName||location.protocol==='file:') return getSettings();
    try{
      const response=await fetch(API_ENDPOINT,{credentials:'same-origin',headers:{'Accept':'application/json'}});
      const data=await response.json().catch(()=>null);
      if(token!==serverLoadToken) return getSettings();
      if(!response.ok||!data?.ok) throw new Error('load_failed');
      rememberRevision(data);
      settings=data.settings?normaliseSettings(data.settings):normaliseSettings(DEFAULTS);
      accountSaveBlocked=false;
      lastSaveSucceeded=true;
      syncSettingsUi();
      emitSettings();
    }catch(_error){
      if(token===serverLoadToken){
        accountSaveBlocked=true;
        lastSaveSucceeded=false;
        syncSettingsUi();
        setStatus('Account voice settings could not be loaded. Saving has stopped until you reload them.','error');
      }
    }
    return getSettings();
  }

  function support(){
    return Object.freeze({
      recognition:Boolean(Recognition),
      synthesis:Boolean(synthesis&&global.SpeechSynthesisUtterance),
      microphone:Boolean(global.navigator?.mediaDevices?.getUserMedia),
      secureContext:Boolean(global.isSecureContext||location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1')
    });
  }

  function createRecognitionController(options={}){
    if(!Recognition) throw new Error('speech_recognition_unsupported');
    let recognizer=null;
    let wanted=false;
    let running=false;
    let pauseDepth=0;
    let restartTimer=0;
    let startWatchdog=0;
    let permanentlyBlocked=false;
    let generation=0;
    let lastInterim='';
    let lastDelivered='';
    let lastDeliveredAt=0;
    const restartDelay=Math.round(clamp(options.restartDelayMs==null?80:options.restartDelayMs,40,1000));

    function report(state,detail){
      try{ options.onState&&options.onState(state,detail||null); }catch(_error){}
      if(state==='listening'||state==='hearing') document.documentElement.setAttribute('data-baseline-voice-listening','true');
      if(['paused','reconnecting','error','stopped','blocked'].includes(state)) document.documentElement.removeAttribute('data-baseline-voice-listening');
      syncToggleState();
    }

    function clearRestart(){ if(restartTimer){ clearTimeout(restartTimer); restartTimer=0; } }
    function clearStartWatchdog(){ if(startWatchdog){ clearTimeout(startWatchdog); startWatchdog=0; } }

    function scheduleRestart(delay=restartDelay){
      clearRestart();
      if(!wanted||pauseDepth>0||permanentlyBlocked) return;
      restartTimer=setTimeout(startInstance,Math.max(0,delay));
    }

    function deliverResult(result){
      if(!result) return;
      const isFinal=Boolean(result.isFinal);
      if(!isFinal&&options.interimResults===false) return;

      const alternatives=[];
      for(let alternative=0;alternative<result.length;alternative++){
        const transcript=String(result[alternative]?.transcript||'').trim();
        if(transcript) alternatives.push(transcript);
      }
      if(!alternatives.length) return;

      const key=normaliseTranscript(alternatives[0]);
      if(!key) return;
      if(!isFinal){
        if(key===lastInterim) return;
        lastInterim=key;
      }else{
        lastInterim='';
      }

      const now=Date.now();
      if(key===lastDelivered&&now-lastDeliveredAt<750) return;
      lastDelivered=key;
      lastDeliveredAt=now;
      try{
        options.onTranscript&&options.onTranscript(alternatives[0],alternatives,{
          isFinal,
          confidence:Number(result[0]?.confidence||0)
        });
      }catch(_error){}
    }

    function applyContextualPhrases(instance){
      const values=transcriptCandidates('',options.phrases||[]);
      if(!values.length||!global.SpeechRecognitionPhrase||!('phrases' in instance)) return;
      try{
        instance.phrases=values.slice(0,64).map(phrase=>new global.SpeechRecognitionPhrase(phrase,8));
      }catch(_error){}
    }

    function startInstance(){
      clearRestart();
      if(!wanted||pauseDepth>0||running||permanentlyBlocked) return;
      const token=++generation;
      try{
        const instance=new Recognition();
        recognizer=instance;
        instance.lang=settings.language||DEFAULTS.language;
        instance.continuous=options.continuous!==false;
        instance.interimResults=options.interimResults!==false;
        instance.maxAlternatives=Math.round(clamp(options.maxAlternatives==null?5:options.maxAlternatives,1,10));
        applyContextualPhrases(instance);
        instance.onstart=()=>{
          if(token!==generation) return;
          clearStartWatchdog();
          running=true;
          report('listening');
        };
        instance.onspeechstart=()=>{ if(token===generation) report('hearing'); };
        instance.onresult=event=>{
          if(token!==generation) return;
          for(let index=event.resultIndex||0;index<event.results.length;index++) deliverResult(event.results[index]);
        };
        instance.onnomatch=()=>{ if(token===generation) report('listening','no_match'); };
        instance.onerror=event=>{
          if(token!==generation) return;
          const code=String(event?.error||'recognition_error');
          if(code==='not-allowed'||code==='service-not-allowed'){
            permanentlyBlocked=true;
            wanted=false;
            report('blocked',code);
          }else if(code==='audio-capture'||code==='language-not-supported'){
            report('error',code);
          }else if(code!=='aborted'&&code!=='no-speech'){
            report('reconnecting',code);
          }
          try{ options.onError&&options.onError(code,event); }catch(_error){}
        };
        instance.onend=()=>{
          if(token!==generation) return;
          clearStartWatchdog();
          running=false;
          if(recognizer===instance) recognizer=null;
          if(wanted&&pauseDepth===0&&!permanentlyBlocked){
            report('reconnecting');
            scheduleRestart();
          }else if(!wanted){
            report('stopped');
          }
        };
        instance.start();
        startWatchdog=setTimeout(()=>{
          if(token!==generation||running||!wanted||pauseDepth>0) return;
          report('reconnecting','start_timeout');
          generation+=1;
          recognizer=null;
          try{ instance.abort(); }catch(_error){}
          scheduleRestart(100);
        },2500);
      }catch(error){
        clearStartWatchdog();
        running=false;
        recognizer=null;
        const name=String(error?.name||'start_error');
        if(name==='NotAllowedError'||name==='SecurityError'){
          permanentlyBlocked=true;
          wanted=false;
          report('blocked',name);
        }else{
          report('reconnecting',name);
          scheduleRestart(120);
        }
        try{ options.onError&&options.onError(name,error); }catch(_error){}
      }
    }

    function start(){
      wanted=true;
      permanentlyBlocked=false;
      if(activeRecognition&&activeRecognition!==controller) activeRecognition.stop();
      activeRecognition=controller;
      startInstance();
      return controller;
    }

    function pause(){
      pauseDepth+=1;
      clearRestart();
      clearStartWatchdog();
      const instance=recognizer;
      recognizer=null;
      running=false;
      generation+=1;
      if(instance){ try{ instance.abort(); }catch(_error){} }
      report('paused');
      return controller;
    }

    function resume(){
      pauseDepth=Math.max(0,pauseDepth-1);
      if(wanted&&pauseDepth===0){
        report('reconnecting');
        scheduleRestart(50);
      }
      return controller;
    }

    function stop(){
      wanted=false;
      pauseDepth=0;
      generation+=1;
      clearRestart();
      clearStartWatchdog();
      const instance=recognizer;
      recognizer=null;
      running=false;
      if(instance){ try{ instance.abort(); }catch(_error){} }
      if(activeRecognition===controller) activeRecognition=null;
      report('stopped');
    }

    const controller=Object.freeze({start,pause,resume,stop,isWanted:()=>wanted,isPaused:()=>pauseDepth>0,isRunning:()=>running});
    return controller;
  }

  function startRecognition(options={}){
    const controller=createRecognitionController(options);
    controller.start();
    return controller;
  }

  function selectedVoice(){
    if(!synthesis) return null;
    const voices=synthesis.getVoices?.()||[];
    if(settings.voiceURI){
      const exact=voices.find(voice=>voice.voiceURI===settings.voiceURI);
      if(exact) return exact;
    }
    return voices.find(voice=>String(voice.lang||'').toLowerCase()===settings.language.toLowerCase())
      ||voices.find(voice=>String(voice.lang||'').toLowerCase().startsWith(settings.language.slice(0,2).toLowerCase()))
      ||null;
  }

  function speakNow(text,options={}){
    const message=String(text||'').trim();
    if(!message||!settings.spokenResponses||!synthesis||!global.SpeechSynthesisUtterance) return Promise.resolve(false);
    const controller=activeRecognition;
    if(controller) controller.pause();
    return new Promise(resolve=>{
      let finished=false;
      const done=value=>{
        if(finished) return;
        finished=true;
        if(controller&&controller.isWanted()) controller.resume();
        resolve(value);
      };
      try{
        if(options.interrupt) synthesis.cancel();
        const utterance=new global.SpeechSynthesisUtterance(message);
        utterance.lang=settings.language||DEFAULTS.language;
        utterance.rate=clamp(options.rate??settings.rate,.5,2);
        utterance.pitch=clamp(options.pitch??settings.pitch,.5,2);
        utterance.volume=clamp(options.volume??settings.volume,0,1);
        const voice=selectedVoice();
        if(voice) utterance.voice=voice;
        utterance.onend=()=>done(true);
        utterance.onerror=()=>done(false);
        synthesis.speak(utterance);
        setTimeout(()=>done(false),Math.max(5000,message.length*160));
      }catch(_error){ done(false); }
    });
  }

  function speak(text,options={}){
    speechQueue=speechQueue.catch(()=>false).then(()=>speakNow(text,options));
    return speechQueue;
  }

  function stopSpeaking(){
    try{ synthesis?.cancel?.(); }catch(_error){}
  }

  async function prepareMicrophone(){
    const info=support();
    if(!info.secureContext) throw new Error('secure_context_required');
    if(!info.recognition) throw new Error('speech_recognition_unsupported');
    if(!global.navigator?.mediaDevices?.getUserMedia) return true;
    const stream=await global.navigator.mediaDevices.getUserMedia({audio:true});
    try{ stream.getTracks().forEach(track=>track.stop()); }catch(_error){}
    return true;
  }

  function stopAll(){
    try{ activeRecognition?.stop?.(); }catch(_error){}
    activeRecognition=null;
    stopSpeaking();
    document.documentElement.removeAttribute('data-baseline-voice-listening');
    syncToggleState();
  }

  function registerSystem(name,adapter){
    const key=String(name||'').trim();
    if(!key||!adapter) return ()=>{};
    systems.set(key,adapter);
    return ()=>systems.delete(key);
  }

  function setStatus(message,kind=''){
    if(!statusNode) return;
    statusNode.textContent=String(message||'');
    statusNode.dataset.kind=kind;
  }

  function syncToggleState(){
    const toggle=$('#bl-voice-toggle');
    if(!toggle) return;
    const listening=document.documentElement.getAttribute('data-baseline-voice-listening')==='true';
    toggle.dataset.listening=String(listening);
    toggle.dataset.enabled=String(Boolean(settings.enabled));
    const label=toggle.querySelector('.bl-btn-label');
    if(label) label.textContent=listening?'Listening':'Voice';
    toggle.setAttribute('aria-label',listening?'Voice control: listening':'Voice control settings');
  }

  function positionFlyout(){
    const toggle=$('#bl-voice-toggle');
    if(!flyout||!toggle||flyout.hidden) return;
    try{
      const mobile=global.matchMedia?.('(max-width: 900px)')?.matches;
      if(mobile){
        flyout.style.position='fixed'; flyout.style.left='10px'; flyout.style.right='10px'; flyout.style.top='calc(10px + env(safe-area-inset-top, 0px))'; flyout.style.width='auto';
        flyout.style.maxHeight='calc(100svh - 20px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))'; flyout.style.overflowY='auto'; return;
      }
      flyout.style.position='fixed'; flyout.style.width=''; flyout.style.maxHeight=''; flyout.style.overflowY='';
      const margin=14,gap=8,rect=toggle.getBoundingClientRect(),box=flyout.getBoundingClientRect();
      const width=Math.min(box.width||flyout.offsetWidth||460,Math.max(280,innerWidth-margin*2));
      const height=box.height||flyout.offsetHeight||0;
      let left=Math.max(margin,Math.min(rect.right-width,innerWidth-width-margin));
      let top=rect.bottom+gap;
      if(height) top=Math.max(margin,Math.min(top,innerHeight-height-margin));
      Object.assign(flyout.style,{left:left+'px',right:'auto',top:top+'px'});
    }catch(_error){}
  }

  function populateVoices(){
    const select=$('#bl-voice-voice',flyout);
    if(!select||!synthesis) return;
    const voices=synthesis.getVoices?.()||[];
    const current=settings.voiceURI;
    select.innerHTML='<option value="">Automatic voice</option>'+voices.map(voice=>{
      const value=String(voice.voiceURI||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
      const label=`${voice.name||'Voice'} — ${voice.lang||'Unknown language'}`.replace(/&/g,'&amp;').replace(/</g,'&lt;');
      return `<option value="${value}"${voice.voiceURI===current?' selected':''}>${label}</option>`;
    }).join('');
    if(current&&!voices.some(voice=>voice.voiceURI===current)) select.value='';
  }

  function syncSettingsUi(){
    if(!flyout) return;
    const set=(selector,value,property='value')=>{ const node=$(selector,flyout); if(node) node[property]=value; };
    set('#bl-voice-enabled',settings.enabled,'checked');
    set('#bl-voice-spoken',settings.spokenResponses,'checked');
    set('#bl-voice-language',settings.language);
    set('#bl-voice-rate',String(settings.rate));
    set('#bl-voice-pitch',String(settings.pitch));
    set('#bl-voice-volume',String(settings.volume));
    set('#bl-voice-confirm-numbers',settings.confirmNumbers,'checked');
    set('#bl-voice-confirm-commands',settings.confirmCommands,'checked');
    set('#bl-voice-rest-announcements',settings.restAnnouncements,'checked');
    set('#bl-voice-countdown',settings.countdownAnnouncements,'checked');
    set('#bl-voice-rest-max',String(settings.maximumRestSeconds));
    populateVoices();
    const supportNode=$('#bl-voice-support',flyout),info=support();
    if(supportNode){
      supportNode.innerHTML=`<strong>Browser status:</strong> Speech recognition ${info.recognition?'available':'unavailable'}; spoken responses ${info.synthesis?'available':'unavailable'}; secure microphone context ${info.secureContext?'available':'required'}.`;
      supportNode.dataset.supported=String(info.recognition&&info.synthesis&&info.secureContext);
    }
    const reload=$('#bl-voice-reload',flyout);
    if(reload) reload.hidden=!(accountName&&accountSaveBlocked);
    syncToggleState();
  }

  function settingsFromUi(){
    return normaliseSettings({
      enabled:$('#bl-voice-enabled',flyout)?.checked,
      spokenResponses:$('#bl-voice-spoken',flyout)?.checked,
      language:$('#bl-voice-language',flyout)?.value,
      voiceURI:$('#bl-voice-voice',flyout)?.value,
      rate:$('#bl-voice-rate',flyout)?.value,
      pitch:$('#bl-voice-pitch',flyout)?.value,
      volume:$('#bl-voice-volume',flyout)?.value,
      confirmNumbers:$('#bl-voice-confirm-numbers',flyout)?.checked,
      confirmCommands:$('#bl-voice-confirm-commands',flyout)?.checked,
      restAnnouncements:$('#bl-voice-rest-announcements',flyout)?.checked,
      countdownAnnouncements:$('#bl-voice-countdown',flyout)?.checked,
      maximumRestSeconds:$('#bl-voice-rest-max',flyout)?.value
    });
  }

  function closeSettings(){
    if(!flyout) return;
    flyout.hidden=true;
    $('#bl-voice-toggle')?.setAttribute('aria-expanded','false');
  }

  function openSettings(message=''){
    if(!flyout) setupSettingsFlyout();
    if(!flyout) return;
    flyout.hidden=false;
    $('#bl-voice-toggle')?.setAttribute('aria-expanded','true');
    syncSettingsUi();
    if(message) setStatus(message,'warning');
    positionFlyout();
  }

  function setupSettingsFlyout(){
    if(flyout) return;
    const toggle=$('#bl-voice-toggle');
    if(!toggle) return;
    flyout=document.createElement('div');
    flyout.id='bl-voice-flyout';
    flyout.className='bl-flyout';
    flyout.hidden=true;
    flyout.innerHTML=`
      <div class="card bl-voice-settings-card" role="dialog" aria-modal="false" aria-labelledby="bl-voice-settings-title">
        <div class="bl-voice-settings-head">
          <h3 id="bl-voice-settings-title">Voice Control</h3>
          <button type="button" class="bl-voice-close-icon" id="bl-voice-close" aria-label="Close voice settings" title="Close">&times;</button>
        </div>
        <p class="muted bl-voice-intro">Voice settings for workouts.</p>
        <div id="bl-voice-support" class="bl-voice-support" aria-live="polite"></div>
        <div class="bl-voice-primary-grid">
          <label class="bl-voice-check"><input id="bl-voice-enabled" type="checkbox"> <span><strong>Enable Voice Control</strong><small>Makes voice features available for voice workouts; it does not start listening.</small></span></label>
          <label class="bl-voice-check"><input id="bl-voice-spoken" type="checkbox"> <span><strong>Spoken Responses</strong><small>Plays spoken workout guidance and feedback.</small></span></label>
        </div>
        <div class="bl-voice-grid">
          <label>Recognition language<select id="bl-voice-language"><option value="en-GB">English (United Kingdom)</option><option value="en-US">English (United States)</option><option value="en-IE">English (Ireland)</option><option value="en-AU">English (Australia)</option></select></label>
          <label>Voice<select id="bl-voice-voice"><option value="">Automatic voice</option></select></label>
          <label>Speech speed<input id="bl-voice-rate" type="number" min="0.5" max="2" step="0.1"></label>
          <label>Pitch<input id="bl-voice-pitch" type="number" min="0.5" max="2" step="0.1"></label>
          <label>Volume<input id="bl-voice-volume" type="number" min="0" max="1" step="0.1"></label>
          <label>Maximum recovery (seconds)<input id="bl-voice-rest-max" type="number" min="30" max="600" step="30"></label>
        </div>
        <div class="bl-voice-check-grid">
          <label class="bl-voice-check"><input id="bl-voice-confirm-numbers" type="checkbox"> <span>Confirm achieved numbers</span></label>
          <label class="bl-voice-check"><input id="bl-voice-confirm-commands" type="checkbox"> <span>Confirm recognised commands</span></label>
          <label class="bl-voice-check"><input id="bl-voice-rest-announcements" type="checkbox"> <span>Recovery-time announcements</span></label>
          <label class="bl-voice-check"><input id="bl-voice-countdown" type="checkbox"> <span>Final countdown announcement</span></label>
        </div>
        <div class="bl-voice-actions">
          <button type="button" class="bl-mini-btn bl-voice-save-close" id="bl-voice-save">Save &amp; Close</button>
          <button type="button" class="bl-mini-btn" id="bl-voice-reload" hidden>Reload account settings</button>
          <button type="button" class="bl-mini-btn" id="bl-voice-test-output">Test voice</button>
          <button type="button" class="bl-mini-btn" id="bl-voice-test-mic">Test microphone</button>
        </div>
        <div class="status" id="bl-voice-status" aria-live="polite"></div>
      </div>`;
    document.body.appendChild(flyout);
    statusNode=$('#bl-voice-status',flyout);

    toggle.addEventListener('click',event=>{
      event.preventDefault();
      flyout.hidden?openSettings():closeSettings();
    });
    $('#bl-voice-close',flyout)?.addEventListener('click',closeSettings);
    $('#bl-voice-save',flyout)?.addEventListener('click',async()=>{
      await saveSettings(settingsFromUi());
      if(lastSaveSucceeded) closeSettings();
    });
    $('#bl-voice-reload',flyout)?.addEventListener('click',async()=>{
      if(!accountName) return;
      setStatus('Reloading authoritative account voice settings...','');
      await loadServerSettings(accountName);
      if(!accountSaveBlocked) setStatus('Latest account voice settings reloaded. Review them before saving.','success');
    });
    $('#bl-voice-test-output',flyout)?.addEventListener('click',async()=>{
      settings=normaliseSettings(Object.assign({},settings,settingsFromUi(),{spokenResponses:true}));
      setStatus('Playing the selected voice.','');
      const ok=await speak('Voice control is ready.');
      setStatus(ok?'Voice output completed.':'Voice output was unavailable.',ok?'success':'warning');
    });
    $('#bl-voice-test-mic',flyout)?.addEventListener('click',async()=>{
      setStatus('Requesting microphone access. Say “Ready” when listening begins.','');
      try{
        await prepareMicrophone();
        let finished=false;
        const controller=startRecognition({
          onTranscript:transcript=>{
            if(finished) return;
            finished=true;
            controller.stop();
            setStatus(`Microphone heard: “${transcript}”`,'success');
          },
          onError:code=>{
            if(code==='not-allowed'||code==='service-not-allowed') setStatus('Microphone permission was blocked.','error');
          }
        });
        setTimeout(()=>{ if(!finished){ finished=true; controller.stop(); setStatus('No speech was recognised during the microphone test.','warning'); } },8000);
      }catch(error){
        setStatus(error?.message==='secure_context_required'?'Microphone access requires HTTPS.':'Microphone or speech recognition is unavailable.','error');
      }
    });
    document.addEventListener('pointerdown',event=>{
      if(flyout.hidden||flyout.contains(event.target)||toggle.contains(event.target)) return;
      closeSettings();
    },true);
    document.addEventListener('keydown',event=>{ if(event.key==='Escape'&&!flyout.hidden) closeSettings(); });
    global.addEventListener('resize',positionFlyout,{passive:true});
    global.addEventListener('scroll',positionFlyout,{passive:true,capture:true});
    if(synthesis){
      try{ synthesis.addEventListener?.('voiceschanged',populateVoices); }catch(_error){ synthesis.onvoiceschanged=populateVoices; }
    }
    syncSettingsUi();
  }

  function bindAuth(){
    const apply=snapshot=>{
      const authed=Boolean(snapshot?.authed);
      const name=authed?String(snapshot?.name||snapshot?.user?.name||'').trim():'';
      if(!authed){
        accountName='';
        ++serverLoadToken;
        accountSaveBlocked=false;
        lastSaveSucceeded=true;
        settings=normaliseSettings(DEFAULTS);
        syncSettingsUi();
        emitSettings();
        return;
      }
      if(name&&name!==accountName){
        accountSaveBlocked=true;
        lastSaveSucceeded=false;
        settings=normaliseSettings(DEFAULTS);
        syncSettingsUi();
        emitSettings();
        loadServerSettings(name);
      }
    };
    try{ apply(global.BASELINE_auth?.get?.()); }catch(_error){}
    try{ global.BASELINE_auth?.onChange?.(apply); }catch(_error){}
    document.addEventListener('baseline:auth',event=>apply(event.detail));
  }

  function init(){
    document.documentElement.setAttribute('data-baseline-voice-runtime',BUILD);
    setupSettingsFlyout();
    bindAuth();
    syncToggleState();
    global.addEventListener('baseline:page-leaving',stopAll);
    global.addEventListener('pagehide',stopAll);
  }

  global.BASELINE_voice=Object.freeze({
    BUILD,
    support,
    getSettings,
    saveSettings,
    onSettingsChange(listener){ settingsListeners.add(listener); return ()=>settingsListeners.delete(listener); },
    prepareMicrophone,
    startRecognition,
    speak,
    stopSpeaking,
    stopAll,
    parseNumber:parseSpokenNumber,
    parseNumberFromAlternatives:parseSpokenNumberFromAlternatives,
    commandForTranscript,
    commandForAlternatives,
    transcriptCandidates,
    normaliseTranscript,
    registerSystem,
    getSystem:name=>systems.get(String(name||'')),
    openSettings,
    closeSettings
  });
  global.BASELINE_VOICE_DEBUG=pure;

  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})(typeof window!=='undefined'?window:globalThis);
