/* Baseline Fitness — delivery stability, body profile, plan presentation and voice continuity. */
(function(global){
  'use strict';

  const BUILD='BASELINE_FITNESS_COHERENCE_20260713_6';
  if(global.__BASELINE_FITNESS_COHERENCE__) return;
  global.__BASELINE_FITNESS_COHERENCE__=true;
  document.documentElement.setAttribute('data-baseline-fitness-coherence',BUILD);

  const SESSION_KEY='__bl_local_session_v1__';
  const PLAN_CACHE_PREFIX='__bl_fitness_plan_cache_v1__::';
  const BODY_PROFILE_PREFIX='__bl_fitness_body_profile_v1__::';
  const TOP_TABS=['system','my-plan','my-body','library','achievements'];
  const originalFetch=typeof global.fetch==='function'?global.fetch.bind(global):null;
  let exposedVoiceSource=null;
  let exposedVoiceWrapper=null;
  let exposedRecognitionSource=null;
  let exposedRecognitionWrapper=null;

  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,Number(value)||0));
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  function normaliseActivation(value){
    return String(value==null?'':value).toLowerCase().replace(/[’']/g,'')
      .replace(/[^a-z0-9\s-]/g,' ').replace(/-/g,' ').replace(/\s+/g,' ').trim();
  }

  function rewriteActivationText(value){
    return String(value==null?'':value).replace(/\bdone\b/gi,'Begin');
  }

  function rewriteRecognitionTranscript(value){
    const text=normaliseActivation(value);
    if(text==='begin') return 'done';
    if(text==='done') return '__disabled_done_activation__';
    return String(value==null?'':value);
  }

  function installPresentationStyles(){
    if($('#baseline-fitness-coherence-style')) return;
    const style=document.createElement('style');
    style.id='baseline-fitness-coherence-style';
    style.textContent=`
      .tabs .tab{transition:background .12s ease,border-color .12s ease,box-shadow .12s ease!important}
      .tabs .tab:hover{transform:none!important}
      .side-plank-manual{grid-template-columns:1fr!important;gap:14px!important}
      .side-plank-side{width:100%!important}
      .side-plank-side.is-locked{opacity:.58}
      .current-step:has(.side-plank-manual)>.current-step-head{display:none!important}
      .my-body-shell{display:grid;gap:16px}
      .my-body-subtabs{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:2px}
      .my-body-subtab{appearance:none;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:10px 15px;background:rgba(255,255,255,.07);color:var(--ink);font-weight:850;cursor:pointer}
      .my-body-subtab.active{background:linear-gradient(135deg,rgba(143,15,31,.96),rgba(177,18,38,.82));border-color:rgba(255,255,255,.2)}
      .my-body-panel[hidden]{display:none!important}
      .body-summary-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
      .body-summary-card{border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:14px;background:rgba(255,255,255,.045)}
      .body-summary-label{color:var(--muted);font-size:.9rem;font-weight:760}
      .body-summary-value{font-size:1.45rem;font-weight:900;margin-top:5px}
      .body-profile-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
      .body-profile-grid .field-stack{min-width:0}
      .body-calculation-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px}
      .connected-service-card{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:center;border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:18px;background:rgba(255,255,255,.045)}
      .service-status{display:inline-flex;align-items:center;gap:7px;font-weight:850;color:var(--muted)}
      .service-status::before{content:'';width:9px;height:9px;border-radius:50%;background:currentColor}
      .service-scope{margin:10px 0 0;padding-left:20px;color:var(--muted)}
      @media(max-width:900px){.body-summary-grid,.body-profile-grid,.body-calculation-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:620px){.body-summary-grid,.body-profile-grid,.body-calculation-grid{grid-template-columns:1fr}.connected-service-card{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function installBeginSpeechPrompts(){
    const NativeUtterance=global.SpeechSynthesisUtterance;
    if(typeof NativeUtterance!=='function'||global.__BASELINE_FITNESS_BEGIN_UTTERANCE__) return;
    global.__BASELINE_FITNESS_BEGIN_UTTERANCE__=true;
    function BeginSpeechSynthesisUtterance(text){
      return new NativeUtterance(rewriteActivationText(text));
    }
    BeginSpeechSynthesisUtterance.prototype=NativeUtterance.prototype;
    try{ Object.setPrototypeOf(BeginSpeechSynthesisUtterance,NativeUtterance); }catch(_error){}
    global.SpeechSynthesisUtterance=BeginSpeechSynthesisUtterance;
  }

  function installBeginRecognitionAlias(){
    if(global.__BASELINE_FITNESS_BEGIN_RECOGNITION_ALIAS__) return;
    const PersistentRecognition=global.SpeechRecognition||global.webkitSpeechRecognition;
    const NativeRecognition=typeof PersistentRecognition==='function'?Object.getPrototypeOf(PersistentRecognition):null;
    const prototype=NativeRecognition?.prototype;
    const nativeStart=prototype?.start;
    if(typeof NativeRecognition!=='function'||typeof nativeStart!=='function') return;

    const wrappedStart=function(...args){
      if(!this.__baselineFitnessBeginResultAlias){
        this.__baselineFitnessBeginResultAlias=true;
        const nativeResultHandler=this.onresult;
        if(typeof nativeResultHandler==='function'){
          this.onresult=function(event){
            let changed=false;
            const results=Array.from(event?.results||[],result=>{
              const alternatives=Array.from(result||[],alternative=>{
                const original=String(alternative?.transcript==null?'':alternative.transcript);
                const transcript=rewriteRecognitionTranscript(original);
                if(transcript!==original) changed=true;
                return {transcript,confidence:alternative?.confidence};
              });
              alternatives.isFinal=Boolean(result?.isFinal);
              return alternatives;
            });
            const forwarded=changed?{resultIndex:event?.resultIndex||0,results}:event;
            return nativeResultHandler.call(this,forwarded);
          };
        }
      }
      return nativeStart.apply(this,args);
    };

    try{
      Object.defineProperty(prototype,'start',{configurable:true,writable:true,value:wrappedStart});
      global.__BASELINE_FITNESS_BEGIN_RECOGNITION_ALIAS__=true;
    }catch(_error){}
  }

  function installStableVoiceRecognition(){
    if(global.__BASELINE_FITNESS_STABLE_RECOGNITION__) return;
    const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition;
    const prototype=Recognition?.prototype;
    const nativeAbort=prototype?.abort;
    const nativeStop=prototype?.stop;
    if(typeof nativeAbort!=='function') return;

    const shouldActuallyDetach=()=>{
      const modal=$('#voiceWorkoutModal');
      const pause=$('#pauseVoiceListeningBtn');
      const visible=Boolean(modal&&!modal.hidden&&document.body.classList.contains('voice-workout-active'));
      const paused=/resume listening/i.test(String(pause?.textContent||''));
      return !visible||paused;
    };
    const deferDetach=(target,method)=>{
      global.setTimeout(()=>{
        if(!shouldActuallyDetach()) return;
        try{ method.call(target); }catch(_error){}
      },320);
    };

    prototype.abort=function(){ deferDetach(this,nativeAbort); };
    if(typeof nativeStop==='function') prototype.stop=function(){ deferDetach(this,nativeStop); };
    global.__BASELINE_FITNESS_STABLE_RECOGNITION__=true;
    document.documentElement.setAttribute('data-baseline-fitness-stable-recognition','true');
  }

  function exposeBeginDebugApis(){
    const recognition=global.BASELINE_fitnessPersistentRecognition;
    if(recognition&&recognition!==exposedRecognitionWrapper&&recognition!==exposedRecognitionSource){
      exposedRecognitionSource=recognition;
      exposedRecognitionWrapper=Object.freeze(Object.assign({},recognition,{
        commandFor:(state,value)=>{
          if(String(state)==='awaiting_go') return normaliseActivation(value)==='begin'?'begin':null;
          return recognition.commandFor?.(state,value)??null;
        }
      }));
      global.BASELINE_fitnessPersistentRecognition=exposedRecognitionWrapper;
    }

    const voice=global.BASELINE_fitnessVoice;
    if(voice&&voice!==exposedVoiceWrapper&&voice!==exposedVoiceSource){
      exposedVoiceSource=voice;
      const debug=voice.debug||{};
      const wrappedDebug=Object.freeze(Object.assign({},debug,{
        intentFor:(state,value)=>{
          if(String(state)==='awaiting_go') return normaliseActivation(value)==='begin'?'begin':null;
          return debug.intentFor?.(state,value)??null;
        }
      }));
      exposedVoiceWrapper=Object.freeze(Object.assign({},voice,{debug:wrappedDebug}));
      global.BASELINE_fitnessVoice=exposedVoiceWrapper;
      if(global.__BASELINE_FITNESS_VOICE_ADAPTER__===voice) global.__BASELINE_FITNESS_VOICE_ADAPTER__=exposedVoiceWrapper;
    }
  }

  function enforceBeginPresentation(){
    const prompt=$('#voiceWorkoutPrompt');
    if(prompt){
      const next=rewriteActivationText(prompt.textContent);
      if(prompt.textContent!==next) prompt.textContent=next;
    }
  }

  function installVoiceCorrections(){
    installBeginSpeechPrompts();
    installBeginRecognitionAlias();
    installStableVoiceRecognition();
    exposeBeginDebugApis();
    enforceBeginPresentation();
  }

  function currentTopRoute(){
    const match=location.pathname.match(/\/(system|my-plan|my-body|library|achievements)\/?$/);
    return match&&TOP_TABS.includes(match[1])?match[1]:'system';
  }

  function topTabPath(target){
    const base=location.pathname.replace(/\/(system|my-plan|my-body|library|achievements)\/?$/,'');
    return `${base}/${target}`.replace(/\/{2,}/g,'/');
  }

  function activateTopTab(target,historyMode='none'){
    if(!TOP_TABS.includes(target)) target='system';
    document.documentElement.setAttribute('data-initial-fitness-tab',target);
    $$('.tabs .tab[data-target]').forEach(button=>button.setAttribute('aria-selected',String(button.dataset.target===target)));
    $$('.section').forEach(section=>section.classList.toggle('active',section.id===target));
    if(historyMode==='push'&&currentTopRoute()!==target) history.pushState({fitnessTab:target},'',topTabPath(target));
    else if(historyMode==='replace'&&currentTopRoute()!==target) history.replaceState({fitnessTab:target},'',topTabPath(target));
  }

  function installTopTabRouting(){
    const tabs=$('.tabs');
    if(!tabs||tabs.dataset.coherentRouting==='true') return;
    tabs.dataset.coherentRouting='true';
    tabs.addEventListener('click',event=>{
      const button=event.target.closest?.('.tab[data-target]');
      if(!button) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      activateTopTab(button.dataset.target,'push');
    },true);
    global.addEventListener('popstate',()=>activateTopTab(currentTopRoute(),'none'));
  }

  function bodyUserKey(){
    const auth=global.BASELINE_auth?.get?.();
    const name=String(auth?.name||auth?.user?.name||'local').trim().toLowerCase()||'local';
    return BODY_PROFILE_PREFIX+name;
  }

  function readBodyProfile(){
    try{
      const value=JSON.parse(localStorage.getItem(bodyUserKey())||'null');
      return value&&typeof value==='object'?value:{};
    }catch(_error){ return {}; }
  }

  function writeBodyProfile(value){
    try{ localStorage.setItem(bodyUserKey(),JSON.stringify(value)); }catch(_error){}
  }

  function numeric(value){
    const number=Number(value);
    return Number.isFinite(number)&&number>0?number:null;
  }

  function bodyCalculations(profile){
    const age=numeric(profile.age),height=numeric(profile.height),weight=numeric(profile.weight);
    const waist=numeric(profile.waist),hips=numeric(profile.hips);
    const heightMetres=height?height/100:null;
    const bmi=heightMetres&&weight?weight/(heightMetres*heightMetres):null;
    let bmiCategory='';
    if(bmi){ bmiCategory=bmi<18.5?'Below range':bmi<25?'Healthy range':bmi<30?'Above range':'High range'; }
    let bmr=null;
    if(age&&height&&weight&&['male','female'].includes(profile.sex)){
      bmr=(10*weight)+(6.25*height)-(5*age)+(profile.sex==='male'?5:-161);
    }
    const activityFactors={sedentary:1.2,light:1.375,moderate:1.55,very:1.725,extra:1.9};
    const tdee=bmr&&activityFactors[profile.activity]?bmr*activityFactors[profile.activity]:null;
    const waistHeight=waist&&height?waist/height:null;
    const waistHip=waist&&hips?waist/hips:null;
    const healthyMin=heightMetres?18.5*heightMetres*heightMetres:null;
    const healthyMax=heightMetres?24.9*heightMetres*heightMetres:null;
    const bodySurface=height&&weight?Math.sqrt((height*weight)/3600):null;
    return {age,height,weight,bmi,bmiCategory,bmr,tdee,waistHeight,waistHip,healthyMin,healthyMax,bodySurface};
  }

  function formatMetric(value,digits=1,suffix=''){
    return Number.isFinite(value)?`${value.toFixed(digits)}${suffix}`:'—';
  }

  function metricCard(label,value,detail=''){
    return `<div class="body-summary-card"><div class="body-summary-label">${esc(label)}</div><div class="body-summary-value">${esc(value)}</div>${detail?`<div class="note" style="margin-top:5px">${esc(detail)}</div>`:''}</div>`;
  }

  function renderOverallSummary(){
    const target=$('#bodyOverallSummary');
    if(!target) return;
    const profile=readBodyProfile(),calc=bodyCalculations(profile);
    if(!calc.height||!calc.weight){
      target.innerHTML='<div class="card"><h2>Overall Summary</h2><p class="note">Complete your Body Profile to create your body summary and calculations.</p></div>';
      return;
    }
    const healthy=calc.healthyMin&&calc.healthyMax?`${calc.healthyMin.toFixed(1)}–${calc.healthyMax.toFixed(1)} kg`:'—';
    target.innerHTML=`<div class="card"><h2>Overall Summary</h2><p class="note">Your latest saved body profile and calculated indicators.</p><div class="body-summary-grid">
      ${metricCard('Weight',formatMetric(calc.weight,1,' kg'))}
      ${metricCard('BMI',formatMetric(calc.bmi,1),calc.bmiCategory)}
      ${metricCard('BMR',formatMetric(calc.bmr,0,' kcal/day'),'Estimated resting energy')}
      ${metricCard('Daily energy',formatMetric(calc.tdee,0,' kcal/day'),'Estimated from activity level')}
      ${metricCard('Healthy BMI weight range',healthy)}
      ${metricCard('Waist-to-height',formatMetric(calc.waistHeight,2))}
      ${metricCard('Waist-to-hip',formatMetric(calc.waistHip,2))}
      ${metricCard('Body surface area',formatMetric(calc.bodySurface,2,' m²'))}
      ${metricCard('Resting heart rate',numeric(profile.restingHeartRate)?`${Math.round(profile.restingHeartRate)} bpm`:'—')}
    </div></div>`;
  }

  function profileFromForm(){
    const form=$('#bodyProfileForm');
    if(!form) return {};
    const output={};
    new FormData(form).forEach((value,key)=>{ output[key]=String(value).trim(); });
    return output;
  }

  function renderProfileCalculations(profile){
    const target=$('#bodyProfileCalculations');
    if(!target) return;
    const calc=bodyCalculations(profile);
    target.innerHTML=`
      ${metricCard('BMI',formatMetric(calc.bmi,1),calc.bmiCategory)}
      ${metricCard('BMR',formatMetric(calc.bmr,0,' kcal/day'))}
      ${metricCard('Daily energy',formatMetric(calc.tdee,0,' kcal/day'))}
      ${metricCard('Waist-to-height',formatMetric(calc.waistHeight,2))}
      ${metricCard('Waist-to-hip',formatMetric(calc.waistHip,2))}
      ${metricCard('Body surface area',formatMetric(calc.bodySurface,2,' m²'))}
    `;
  }

  function fillBodyProfile(){
    const profile=readBodyProfile(),form=$('#bodyProfileForm');
    if(!form) return;
    Object.entries(profile).forEach(([name,value])=>{ const field=form.elements.namedItem(name); if(field) field.value=value; });
    renderProfileCalculations(profile);
    renderOverallSummary();
  }

  function setBodySubtab(view){
    $$('.my-body-subtab').forEach(button=>{
      const active=button.dataset.bodyView===view;
      button.classList.toggle('active',active);
      button.setAttribute('aria-selected',String(active));
    });
    $$('.my-body-panel').forEach(panel=>{ panel.hidden=panel.dataset.bodyPanel!==view; });
  }

  function ensureBodyUi(){
    const tabs=$('.tabs'),main=$('main.wrap');
    if(!tabs||!main) return;
    let button=$('.tab[data-target="my-body"]',tabs);
    if(!button){
      button=document.createElement('button');
      button.className='tab';
      button.type='button';
      button.dataset.target='my-body';
      button.setAttribute('aria-selected','false');
      button.textContent='My Body';
      const myPlan=$('.tab[data-target="my-plan"]',tabs);
      myPlan?.insertAdjacentElement('afterend',button);
    }

    let section=$('#my-body');
    if(!section){
      section=document.createElement('section');
      section.className='section';
      section.id='my-body';
      section.innerHTML=`<div class="my-body-shell">
        <div class="card">
          <h2>My Body</h2>
          <p class="note">Body measurements, calculated indicators and connected health services.</p>
          <div class="my-body-subtabs" role="tablist" aria-label="My Body views">
            <button class="my-body-subtab active" type="button" role="tab" aria-selected="true" data-body-view="overall">Overall Summary</button>
            <button class="my-body-subtab" type="button" role="tab" aria-selected="false" data-body-view="profile">Body Profile</button>
            <button class="my-body-subtab" type="button" role="tab" aria-selected="false" data-body-view="services">Connected Services</button>
          </div>
        </div>
        <div class="my-body-panel" data-body-panel="overall" id="bodyOverallSummary"></div>
        <div class="my-body-panel" data-body-panel="profile" hidden>
          <form class="card" id="bodyProfileForm">
            <h2>Body Profile</h2>
            <p class="note">Save your current figures. Calculations update as the profile changes.</p>
            <div class="body-profile-grid">
              <div class="field-stack"><label for="bodyAge">Age</label><input id="bodyAge" name="age" type="number" min="13" max="120" inputmode="numeric"></div>
              <div class="field-stack"><label for="bodySex">Sex used for BMR</label><select id="bodySex" name="sex"><option value="">Not selected</option><option value="male">Male</option><option value="female">Female</option></select></div>
              <div class="field-stack"><label for="bodyActivity">Activity level</label><select id="bodyActivity" name="activity"><option value="">Not selected</option><option value="sedentary">Sedentary</option><option value="light">Lightly active</option><option value="moderate">Moderately active</option><option value="very">Very active</option><option value="extra">Extremely active</option></select></div>
              <div class="field-stack"><label for="bodyHeight">Height (cm)</label><input id="bodyHeight" name="height" type="number" min="80" max="250" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyWeight">Weight (kg)</label><input id="bodyWeight" name="weight" type="number" min="20" max="500" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyNeck">Neck (cm)</label><input id="bodyNeck" name="neck" type="number" min="10" max="100" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyChest">Chest (cm)</label><input id="bodyChest" name="chest" type="number" min="30" max="250" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyWaist">Waist (cm)</label><input id="bodyWaist" name="waist" type="number" min="30" max="250" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyHips">Hips (cm)</label><input id="bodyHips" name="hips" type="number" min="30" max="250" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyArm">Upper arm (cm)</label><input id="bodyArm" name="upperArm" type="number" min="10" max="100" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyThigh">Thigh (cm)</label><input id="bodyThigh" name="thigh" type="number" min="15" max="150" step="0.1" inputmode="decimal"></div>
              <div class="field-stack"><label for="bodyRestingHeartRate">Resting heart rate (bpm)</label><input id="bodyRestingHeartRate" name="restingHeartRate" type="number" min="25" max="220" inputmode="numeric"></div>
            </div>
            <div class="body-calculation-grid" id="bodyProfileCalculations"></div>
            <div class="actions-inline" style="margin-top:16px"><button class="action" type="submit">Save Body Profile</button><span class="status" id="bodyProfileStatus"></span></div>
          </form>
        </div>
        <div class="my-body-panel" data-body-panel="services" hidden>
          <div class="card">
            <h2>Connected Services</h2>
            <div class="connected-service-card">
              <div><h3 style="margin:0 0 6px">Garmin</h3><div class="service-status">Not connected</div><p class="note" style="margin-top:10px">Full account sync for historical and future Garmin activities, health data, updates and duplicate protection.</p><ul class="service-scope"><li>Import available activity history</li><li>Automatically sync future Garmin activities</li><li>Keep Garmin and Baseline Lifestyle records traceable by source</li></ul></div>
              <div><button class="action" type="button" id="connectGarminBtn">Connect Garmin</button></div>
            </div>
            <div class="status" id="garminConnectionStatus"></div>
          </div>
        </div>
      </div>`;
      const library=$('#library');
      if(library) main.insertBefore(section,library); else main.appendChild(section);
    }

    if(section.dataset.bodyBound!=='true'){
      section.dataset.bodyBound='true';
      $$('.my-body-subtab',section).forEach(tab=>tab.addEventListener('click',()=>setBodySubtab(tab.dataset.bodyView)));
      $('#bodyProfileForm',section)?.addEventListener('input',()=>renderProfileCalculations(profileFromForm()));
      $('#bodyProfileForm',section)?.addEventListener('submit',event=>{
        event.preventDefault();
        const profile=profileFromForm();
        writeBodyProfile(profile);
        renderProfileCalculations(profile);
        renderOverallSummary();
        const status=$('#bodyProfileStatus');
        if(status) status.textContent='Body profile saved.';
      });
      $('#connectGarminBtn',section)?.addEventListener('click',()=>{
        const status=$('#garminConnectionStatus');
        if(status) status.textContent='Garmin full-sync is prepared here, but the server OAuth credentials are not configured yet. No Garmin data has been connected.';
      });
      fillBodyProfile();
      setBodySubtab('overall');
    }
  }

  function splitSidePlankPlanCards(){
    $$('.session-subcard').forEach(card=>{
      if(card.dataset.sideSplit==='true') return;
      const name=String($('b',card)?.textContent||'').trim();
      if(!/^Elbow Side Plank$/i.test(name)) return;
      const seconds=(card.textContent.match(/\b(\d+)\b/)||[])[1]||'';
      const make=side=>{
        const clone=card.cloneNode(false);
        clone.dataset.sideSplit='true';
        clone.innerHTML=`<b>Elbow Plank ${side}</b><div>Hold <b>${esc(seconds)}</b> seconds.</div>`;
        return clone;
      };
      card.replaceWith(make('Left'),make('Right'));
    });
  }

  function renameSidePlankOptions(){
    $$('option').forEach(option=>{
      if(option.value==='Elbow Side Plank'&&option.textContent!=='Elbow Plank Left + Right') option.textContent='Elbow Plank Left + Right';
    });
    $$('.exercise-card').forEach(card=>{
      const title=$('.title',card);
      if(title&&/^Elbow Side Plank$/i.test(title.textContent)) title.textContent='Elbow Plank Left + Right';
    });
  }

  function arrangeManualSidePlanks(){
    $$('.side-plank-manual').forEach(wrap=>{
      const left=$('[data-manual-side="left"]',wrap),right=$('[data-manual-side="right"]',wrap);
      if(left){ const heading=$('h4',left);if(heading&&heading.textContent!=='Elbow Plank Left') heading.textContent='Elbow Plank Left'; }
      if(right){ const heading=$('h4',right);if(heading&&heading.textContent!=='Elbow Plank Right') heading.textContent='Elbow Plank Right'; }
      const leftDone=Boolean($('.side-plank-result',left));
      if(right){
        right.classList.toggle('is-locked',!leftDone);
        $$('button,input',right).forEach(control=>{ if(!leftDone) control.disabled=true; else if(!$('.side-plank-result',right)) control.disabled=false; });
      }
    });
  }

  function stabiliseSidePlankVoicePresentation(){
    const name=$('#voiceExerciseName');
    if(!name) return;
    let text=String(name.textContent||'');
    text=text.replace(/^Left Elbow Side Plank/i,'Elbow Plank Left').replace(/^Right Elbow Side Plank/i,'Elbow Plank Right').replace(/^Elbow Side Plank/i,'Elbow Plank Left + Right');
    if(name.textContent!==text) name.textContent=text;

    const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    const position=$('#voiceStepPosition');
    if(!context?.steps?.length||!position) return;
    const sideIndexes=context.steps.map((step,index)=>/\bside\s+plank\b/i.test(String(step.name||''))?index:-1).filter(index=>index>=0);
    if(!sideIndexes.length) return;
    const before=sideIndexes.filter(index=>index<context.stepIndex).length;
    const right=/Elbow Plank Right/i.test(text)?1:0;
    const virtualIndex=context.stepIndex+before+right+1;
    const virtualTotal=context.totalSteps+sideIndexes.length;
    const next=`Step ${Math.min(virtualIndex,virtualTotal)} of ${virtualTotal}`;
    if(position.textContent!==next) position.textContent=next;
  }

  function compactCurrentSteps(){
    const root=$('#currentWorkoutOut');
    if(!root) return;
    const context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    const steps=Array.isArray(context?.steps)?context.steps:[];
    $$('.current-step',root).forEach((row,index)=>{
      const step=steps[index];
      if(!step) return;
      const heading=$('.current-step-head > div:first-child',row);
      const nameNode=heading?.querySelector('b');
      const label=/\bside\s+plank\b/i.test(String(step.name||''))?`Elbow Plank Left + Right - (${Math.round(Number(step.target)||0)})`:`${step.name} - (${Math.round(Number(step.target)||0)})`;
      if(nameNode){
        nameNode.classList.add('current-step-label');
        if(nameNode.textContent!==label) nameNode.textContent=label;
      }
      const duplicate=$('.current-step-text',row);
      if(duplicate) duplicate.hidden=true;

      const status=$('.step-status',row),achieved=$('.step-subnote',row);
      if(status&&achieved){
        const number=(achieved.textContent.match(/-?\d+/)||[])[0];
        if(number!=null){
          const base=status.dataset.baseLabel||status.textContent.trim();
          status.dataset.baseLabel=base;
          const next=`${base} · Achieved ${number}`;
          if(status.textContent!==next) status.textContent=next;
          achieved.hidden=true;
        }
      }
    });
  }

  function compactPlanExercises(){
    $$('.session-subcard').forEach(card=>{
      if(card.dataset.compactExercise==='true') return;
      const name=String($('b',card)?.textContent||'').trim();
      const details=String(card.textContent||'').replace(name,'').trim();
      let amount='';
      const hold=details.match(/hold\s+(\d+)\s+seconds?/i);
      const reps=details.match(/sets\s*\(\d+\)\s*:\s*([\d\s/]+)\s*reps?/i);
      if(hold) amount=hold[1];
      else if(reps) amount=(reps[1].match(/\d+/g)||[]).join(' / ');
      if(!name||!amount) return;
      card.dataset.compactExercise='true';
      card.classList.add('plan-exercise-row');
      card.textContent=`${name} - (${amount})`;
    });
  }

  function updateVirtualStepCount(){
    const root=$('#currentWorkoutOut'),context=global.BASELINE_fitnessWorkout?.getCurrentContext?.();
    if(!root||!context?.steps?.length) return;
    const sideIndexes=context.steps.map((step,index)=>/\bside\s+plank\b/i.test(String(step.name||''))?index:-1).filter(index=>index>=0);
    if(!sideIndexes.length) return;
    const completedExtra=sideIndexes.filter(index=>index<context.completedSteps).length;
    const currentSideLeftDone=Boolean($('.current-step.active .side-plank-side[data-manual-side="left"] .side-plank-result',root));
    const completed=context.completedSteps+completedExtra+(currentSideLeftDone?1:0);
    const total=context.totalSteps+sideIndexes.length;
    $$('.session-plan-meta .badge',root).forEach(badge=>{
      if(/steps done/i.test(badge.textContent)){
        const next=`${completed}/${total} steps done`;
        if(badge.textContent!==next) badge.textContent=next;
      }
    });
  }

  function readJson(key){
    try{
      const raw=global.localStorage?.getItem(key);
      return raw?JSON.parse(raw):null;
    }catch(_error){ return null; }
  }

  function localSession(){
    const value=readJson(SESSION_KEY);
    if(!value||!String(value.name||'').trim()) return null;
    return {name:String(value.name||'').trim(),email:String(value.email||'').trim()};
  }

  function cachedPlan(){
    const session=localSession();
    if(!session) return null;
    const key=PLAN_CACHE_PREFIX+session.name.toLowerCase();
    const cached=readJson(key);
    if(!cached?.planJson) return null;
    return cached;
  }

  function requestUrl(input){
    try{
      const raw=typeof input==='string'||input instanceof URL?String(input):String(input?.url||'');
      return new URL(raw,document.baseURI||location.href);
    }catch(_error){ return null; }
  }

  function requestMethod(input,init){ return String(init?.method||input?.method||'GET').toUpperCase(); }

  function jsonResponse(payload){
    return new Response(JSON.stringify(payload),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
  }

  function planFallback(){
    const cached=cachedPlan();
    if(!cached) return null;
    return {ok:true,hasPlan:true,planId:cached.planId||0,planJson:cached.planJson,sessions:Array.isArray(cached.sessions)?cached.sessions:[],progress:cached.progress||null,source:'local-plan-cache'};
  }

  function authFallback(){
    const session=localSession();
    if(!session) return null;
    return {ok:true,authed:true,name:session.name,email:session.email,source:'local-session-cache'};
  }

  if(originalFetch){
    global.fetch=async function(input,init){
      const url=requestUrl(input),method=requestMethod(input,init),path=String(url?.pathname||'').toLowerCase();
      const ownPlan=method==='GET'&&/\/(?:systems\/baseline-fitness\/api|sitewide\/api|api)\/get_plan\.php$/.test(path)&&!url?.searchParams?.has('name');
      const ownAuth=method==='GET'&&/\/(?:sitewide\/api|api)\/me\.php$/.test(path);
      if(!ownPlan&&!ownAuth) return originalFetch(input,init);
      try{
        const response=await originalFetch(input,init);
        let data=null;
        try{ data=await response.clone().json(); }catch(_error){}
        if(response.ok&&data?.ok===true){
          if(ownAuth&&data.authed===false&&localSession()){ const fallback=authFallback();if(fallback) return jsonResponse(fallback); }
          if(ownPlan&&data.hasPlan===false&&cachedPlan()){ const fallback=planFallback();if(fallback) return jsonResponse(fallback); }
          return response;
        }
        const fallback=ownPlan?planFallback():authFallback();
        return fallback?jsonResponse(fallback):response;
      }catch(error){
        const fallback=ownPlan?planFallback():authFallback();
        if(fallback) return jsonResponse(fallback);
        throw error;
      }
    };
  }

  function enforceSavedPlanView(){
    const cached=cachedPlan();
    if(!cached?.planJson) return;
    const generator=$('#myPlanGeneratorWrap'),saved=$('#myPlanSavedWrap'),cancel=$('#cancelEditPlanBtn');
    if(cancel&&!cancel.hidden) return;
    if(generator) generator.hidden=true;
    if(saved) saved.hidden=false;
  }

  let scheduled=false;
  function applyCoherence(){
    scheduled=false;
    installPresentationStyles();
    installVoiceCorrections();
    ensureBodyUi();
    installTopTabRouting();
    renameSidePlankOptions();
    splitSidePlankPlanCards();
    compactCurrentSteps();
    compactPlanExercises();
    arrangeManualSidePlanks();
    stabiliseSidePlankVoicePresentation();
    updateVirtualStepCount();
    enforceSavedPlanView();
  }

  function scheduleCoherence(){
    if(scheduled) return;
    scheduled=true;
    if(typeof global.requestAnimationFrame==='function') global.requestAnimationFrame(applyCoherence);
    else global.setTimeout(applyCoherence,0);
  }

  function init(){
    applyCoherence();
    activateTopTab(currentTopRoute(),'none');
    global.setTimeout(()=>{ applyCoherence();activateTopTab(currentTopRoute(),'none'); },0);
    document.addEventListener('baseline:fitness-workout-updated',scheduleCoherence);
    document.addEventListener('baseline:auth',()=>{ fillBodyProfile();scheduleCoherence(); });
    document.addEventListener('click',event=>{
      const id=event.target?.closest?.('button')?.id||'';
      if(id==='endVoiceWorkoutBtn'||id==='cancelEditPlanBtn'){
        setTimeout(scheduleCoherence,0);
        setTimeout(scheduleCoherence,80);
        setTimeout(scheduleCoherence,300);
      }
    },true);
  }

  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})(window);
