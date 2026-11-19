/* Baseline Massage — guided routine owner. No audio, vibration or notifications. */
(function(){
  'use strict';

  const TOTAL_SECONDS = 60 * 60;
  const PLAN_ID = 'partner-full-body-60';
  const STEPS = [
    {from:0,to:840,phase:'Face-up',title:'Chest & Shoulders',detail:'Pectoral and anterior-shoulder work while face-up',cues:[[0,"Effleurage","Bilateral longitudinal strokes","Long strokes across the upper chest with both hands.","3–4",null,"Upper Pectorals"],[60,"Effleurage","Alternating hand strokes","Alternate strokes with the left and right hand.","3–4",null,"Upper Pectorals"],[120,"Petrissage","Circular kneading","Knead the muscle using small circles.","4–6",null,"Left Pectoral"],[240,"Petrissage","Circular kneading","Knead the muscle using small circles.","4–6",null,"Right Pectoral"],[360,"Effleurage","Strokes during arm opening","Open the left arm with light, continuous pectoral strokes.","2–3","Left shoulder outward 30–90° as comfortable · 2–3/10","Left Pectoral"],[365,"Effleurage","Longitudinal strokes","Support the left arm while stroking the lengthened pectoral.","2–3","Left shoulder outward 30–90° as comfortable · 2–3/10","Left Pectoral"],[415,"Effleurage","Strokes during arm return","Ease the left arm inward with a light finishing stroke.","1–2",null,"Left Shoulder"],[420,"Effleurage","Strokes during repeat opening","Reopen the left arm with continuous light strokes.","2–3","Left shoulder outward 30–90° as comfortable · 2–3/10","Left Pectoral"],[425,"Effleurage","Finishing strokes","Return the left arm; continue unhurried effleurage.","2–3",null,"Left Pectoral"],[480,"Effleurage","Strokes during arm opening","Open the right arm with light, continuous pectoral strokes.","2–3","Right shoulder outward 30–90° as comfortable · 2–3/10","Right Pectoral"],[485,"Effleurage","Longitudinal strokes","Support the right arm while stroking the lengthened pectoral.","2–3","Right shoulder outward 30–90° as comfortable · 2–3/10","Right Pectoral"],[535,"Effleurage","Strokes during arm return","Ease the right arm inward with a light finishing stroke.","1–2",null,"Right Shoulder"],[540,"Effleurage","Strokes during repeat opening","Reopen the right arm with continuous light strokes.","2–3","Right shoulder outward 30–90° as comfortable · 2–3/10","Right Pectoral"],[545,"Effleurage","Finishing strokes","Return the right arm; continue unhurried effleurage.","2–3",null,"Right Pectoral"],[600,"Petrissage","Circular kneading","Make small circles over the front shoulder.","4–6",null,"Left Front Shoulder"],[660,"Petrissage","Circular kneading","Make small circles over the front shoulder.","4–6",null,"Right Front Shoulder"],[720,"Effleurage","Longitudinal strokes","Use slow strokes along the front shoulder.","3–4",null,"Left Front Shoulder"],[780,"Effleurage","Longitudinal strokes","Use slow strokes along the front shoulder.","3–4",null,"Right Front Shoulder"]]},
    {from:840,to:1200,phase:'Face-up',title:'Upper Arms & Forearms',detail:'Upper arms, forearms and hands',cues:[[0,"Petrissage","Lifting and kneading","Knead the upper-arm muscles with both hands.","4–6",null,"Right Upper Arm"],[90,"Effleurage","Longitudinal strokes with wrist extension","Stroke the forearm and palm; extend the wrist gently.","2–3","Right wrist extension ≤20° as comfortable · 1–2/10","Right Forearm & Hand"],[180,"Petrissage","Lifting and kneading","Knead the upper-arm muscles with both hands.","4–6",null,"Left Upper Arm"],[270,"Effleurage","Longitudinal strokes with wrist extension","Stroke the forearm and palm; extend the wrist gently.","2–3","Left wrist extension ≤20° as comfortable · 1–2/10","Left Forearm & Hand"]]},
    {from:1200,to:1560,phase:'Face-up',title:'Front Thighs & Lower Legs',detail:'Quadriceps and lower legs',cues:[[0,"Petrissage","Kneading","Use both hands to knead the thigh.","5–7",null,"Right Quadriceps"],[90,"Effleurage","Longitudinal strokes","Stroke alongside the shinbone; avoid bone pressure.","3–4",null,"Right Lower Leg"],[180,"Petrissage","Kneading","Use both hands to knead the thigh.","5–7",null,"Left Quadriceps"],[270,"Effleurage","Longitudinal strokes","Stroke alongside the shinbone; avoid bone pressure.","3–4",null,"Left Lower Leg"]]},
    {from:1560,to:1980,phase:'Face-up',title:'Hamstrings & Calves — Face-up',detail:'Supported hamstring and calf stretching',cues:[[0,"Effleurage","Longitudinal strokes","Stroke the relaxed hamstring and calf.","3–5",null,"Right Hamstring & Calf"],[60,"Assisted Stretching","Strap-assisted stretch","Raise the right leg smoothly while maintaining contact.",null,"Right hip flexion ≈30–70° as comfortable · 2–3/10","Right Hamstring"],[68,"Effleurage","Strokes during stretch","Massage the lengthened right hamstring with the leg supported.","2–3","Right hip flexion ≈30–70° as comfortable · 2–3/10","Right Hamstring & Calf"],[120,"Assisted Stretching","Gradual release","Ease the leg down with a light finishing stroke.",null,null,"Right Leg"],[125,"Effleurage","Strokes during repeated stretch","Re-raise the leg, massaging the lengthened right hamstring.","2–3","Right hip flexion ≈30–70° as comfortable · 2–3/10","Right Hamstring"],[170,"Effleurage","Finishing strokes","Lower the leg; finish with light strokes.","2–3",null,"Right Leg"],[210,"Effleurage","Longitudinal strokes","Stroke the relaxed hamstring and calf.","3–5",null,"Left Hamstring & Calf"],[270,"Assisted Stretching","Strap-assisted stretch","Raise the left leg smoothly while maintaining contact.",null,"Left hip flexion ≈30–70° as comfortable · 2–3/10","Left Hamstring"],[278,"Effleurage","Strokes during stretch","Massage the lengthened left hamstring with the leg supported.","2–3","Left hip flexion ≈30–70° as comfortable · 2–3/10","Left Hamstring & Calf"],[330,"Assisted Stretching","Gradual release","Ease the leg down with a light finishing stroke.",null,null,"Left Leg"],[335,"Effleurage","Strokes during repeated stretch","Re-raise the leg, massaging the lengthened left hamstring.","2–3","Left hip flexion ≈30–70° as comfortable · 2–3/10","Left Hamstring"],[380,"Effleurage","Finishing strokes","Lower the leg; finish with light strokes.","2–3",null,"Left Leg"]]},
    {from:1980,to:2040,phase:'Transition',title:'Turn Face-down',detail:'Change position and draping',cues:[[0,"Transition","Turn face-down","Allow the client to turn; adjust support and draping.",null,null,"Body Position"]]},
    {from:2040,to:2820,phase:'Face-down',title:'Back & Shoulders',detail:'Back, trapezius, rear shoulders and lumbar muscles',cues:[[0,"Effleurage","Bilateral strokes","Use long strokes either side of the spine.","4–5",null,"Back"],[90,"Effleurage","Forearm strokes","Use broad forearm strokes across the back.","4–5",null,"Back"],[180,"Effleurage","Bilateral strokes","Warm the upper-back muscles with both hands.","4–5",null,"Upper Back"],[240,"Petrissage","Lifting and kneading","Lift and knead the upper trapezius.","4–6",null,"Upper Back"],[300,"Compression","Finger crawling with thumb walking","Crawl fingers and alternate thumb pressure beside the spine.","4–6",null,"Upper Back"],[360,"Tapotement","Cupping","Cup the muscles with hollow palms.","3–5",null,"Upper Back"],[405,"Tapotement","Hacking","Use light, alternating blows with relaxed finger edges.","2–4",null,"Upper Back"],[435,"Effleurage","Finishing forearm strokes","Settle the muscles with slow forearm strokes.","2–3",null,"Upper Back"],[480,"Petrissage","Rear-shoulder kneading","Support the arm while kneading the rear shoulder.","4–6",null,"Left Rear Shoulder"],[510,"Petrissage","Rear-shoulder kneading","Support the arm while kneading the rear shoulder.","4–6",null,"Right Rear Shoulder"],[540,"Effleurage","Longitudinal strokes","Use slow strokes beside the lumbar spine.","3–4",null,"Lower Back"],[660,"Compression","Sustained palm compression","Apply sustained palm pressure beside the spine.","3–5",null,"Lower Back"]]},
    {from:2820,to:3300,phase:'Face-down',title:'Glutes & Posterior Legs',detail:'Gluteal muscles, hamstrings and calves',cues:[[0,"Petrissage","Kneading","Use broad kneading with consent and draping.","5–7",null,"Right Glute"],[90,"Petrissage","Kneading","Use broad kneading with consent and draping.","5–7",null,"Left Glute"],[180,"Petrissage","Kneading","Knead the hamstring and calf.","4–6",null,"Right Hamstring & Calf"],[330,"Petrissage","Kneading","Knead the hamstring and calf.","4–6",null,"Left Hamstring & Calf"]]},
    {from:3300,to:3540,phase:'Face-down',title:'Quadriceps — Assisted Stretch',detail:'Strap-assisted quadriceps stretching',cues:[[0,"Petrissage","Outer-thigh kneading","Knead the accessible outer-thigh muscles.","4–6",null,"Right Quadriceps"],[30,"Assisted Stretching","Strap-assisted knee flexion","Bend the right knee smoothly with the ankle strap.",null,"Right knee flexion ≈45–100° as comfortable · 2–3/10","Right Quadriceps"],[37,"Effleurage","Strokes during stretch","Massage the outer thigh with the knee comfortably flexed.","2–3","Right knee flexion ≈45–100° as comfortable · 2–3/10","Right Quadriceps"],[70,"Assisted Stretching","Gradual release","Ease the knee straight, maintaining light palm contact.",null,null,"Right Leg"],[75,"Effleurage","Repeat flexion with strokes","Bend the knee again while continuing light thigh strokes.","2–3","Right knee flexion ≈45–100° as comfortable · 2–3/10","Right Quadriceps"],[110,"Effleurage","Finishing strokes","Return the leg to rest with soothing strokes.","1–2",null,"Right Leg"],[120,"Petrissage","Outer-thigh kneading","Knead the accessible outer-thigh muscles.","4–6",null,"Left Quadriceps"],[150,"Assisted Stretching","Strap-assisted knee flexion","Bend the left knee smoothly with the ankle strap.",null,"Left knee flexion ≈45–100° as comfortable · 2–3/10","Left Quadriceps"],[157,"Effleurage","Strokes during stretch","Massage the outer thigh with the knee comfortably flexed.","2–3","Left knee flexion ≈45–100° as comfortable · 2–3/10","Left Quadriceps"],[190,"Assisted Stretching","Gradual release","Ease the knee straight, maintaining light palm contact.",null,null,"Left Leg"],[195,"Effleurage","Repeat flexion with strokes","Bend the knee again while continuing light thigh strokes.","2–3","Left knee flexion ≈45–100° as comfortable · 2–3/10","Left Quadriceps"],[230,"Effleurage","Finishing strokes","Return the leg to rest with soothing strokes.","1–2",null,"Left Leg"]]},
    {from:3540,to:3600,phase:'Face-down',title:'Closing Back Massage',detail:'Finishing strokes',cues:[[0,"Effleurage","Finishing strokes","Finish with slow strokes, gradually reducing pressure.","2–3",null,"Back"]]},
  ];
  const PROCEDURE_STARTS = STEPS.flatMap(step=>step.cues.map(cue=>step.from+cue[0]));
  const byId = (id) => document.getElementById(id);
  const format = (seconds) => {
    const whole = Math.max(0,Math.floor(seconds));
    return String(Math.floor(whole / 60)).padStart(2,'0') + ':' + String(whole % 60).padStart(2,'0');
  };
  function activeStepIndex(seconds){
    if(seconds >= TOTAL_SECONDS) return STEPS.length - 1;
    return STEPS.findIndex(step => seconds >= step.from && seconds < step.to);
  }
  function validateSchedule(){
    return STEPS.length > 0 && STEPS[0].from === 0 &&
      STEPS[STEPS.length-1].to === TOTAL_SECONDS &&
      STEPS.every((step,i) => step.to > step.from && (!i || STEPS[i-1].to === step.from));
  }
  if(!STEPS.every(step=>step.cues.length && step.cues[0][0]===0 &&
    step.cues.every((cue,index)=>cue.length===7 && typeof cue[6]==='string' && cue[6].length>3 && ((cue[4]===null && ['Assisted Stretching','Transition'].includes(cue[1])) || (typeof cue[4]==='string' && /^[1-7]–[1-7]$/.test(cue[4]) && Number(cue[4].split('–')[0])<=Number(cue[4].split('–')[1]) && !['Assisted Stretching','Transition'].includes(cue[1]))) && (cue[5]===null || (typeof cue[5]==='string' && cue[5].includes('/10'))) && cue[0]>=0 && cue[0]<step.to-step.from &&
      ['Effleurage','Petrissage','Compression','Tapotement','Assisted Stretching','Transition'].includes(cue[1]) &&
      cue[2].length>5 && cue[3].length>20 &&
      (index===0 || cue[0]>step.cues[index-1][0])))){
    throw new Error('Massage routine sections must be ordered and within their step');
  }
  if(!validateSchedule()) throw new Error('Massage routine timings must cover exactly 60 minutes');
  if(!PROCEDURE_STARTS.length || PROCEDURE_STARTS[0]!==0 ||
    !PROCEDURE_STARTS.every((time,index)=>index===0 || time>PROCEDURE_STARTS[index-1])){
    throw new Error('Massage procedure boundaries must increase across the session');
  }

  function initialise(){
    const select=byId('massageRoutineSelect');
    const planValue=byId('massageRoutinePlanValue');
    const minimalSetting=byId('massageRoutineMinimal');
    const minimalClock=byId('massageRoutineMinimalClock');
    const minimalTime=byId('massageRoutineMinimalTime');
    const minimalElapsed=byId('massageRoutineMinimalElapsed');
    const minimalName=byId('massageRoutineMinimalName');
    const minimalTechnique=byId('massageRoutineMinimalTechnique');
    const minimalInstruction=byId('massageRoutineMinimalInstruction');
    const minimalPressure=byId('massageRoutineMinimalPressure');
    const minimalStretch=byId('massageRoutineMinimalStretch');
    const fullDetails=byId('massageRoutineFullDetails');
    const fullscreenBtn=byId('massageRoutineFullscreen');
    const fullscreenLabel=byId('massageRoutineFullscreenLabel');
    const runner=byId('massageRoutineRunner');
    const viewport=byId('massageRoutineTimeline');
    const elapsedLabel=byId('massageRoutineElapsed');
    const remainingLabel=byId('massageRoutineRemaining');
    const stepClock=byId('massageRoutineStepClock');
    const stepTitle=byId('massageRoutineCurrentTitle');
    const stepDetail=byId('massageRoutineCurrentDetail');
    const sectionCounter=byId('massageRoutineSectionCounter');
    const sectionClock=byId('massageRoutineSectionClock');
    const nextTitle=byId('massageRoutineNextTitle');
    const stepCount=byId('massageRoutineStepCount');
    const progress=byId('massageRoutineProgress');
    const resetBtn=byId('massageRoutineReset');
    const prevBtn=byId('massageRoutinePrevious');
    const nextBtn=byId('massageRoutineNext');
    const previousProcedureBtn=byId('massageRoutinePreviousProcedure');
    const nextProcedureBtn=byId('massageRoutineNextProcedure');
    const quickPauseBtn=byId('massageRoutineQuickPause');
    const fullList=byId('massageRoutineFullList');
    const stateLabel=byId('massageRoutineStatus');
    if(!select || !planValue || !minimalSetting || !minimalClock || !minimalTime || !minimalElapsed || !minimalName || !minimalTechnique || !minimalInstruction || !minimalPressure || !minimalStretch || !fullDetails || !fullscreenBtn || !fullscreenLabel || !runner || !viewport || !elapsedLabel || !remainingLabel || !stepClock || !sectionCounter || !sectionClock || !nextTitle || !previousProcedureBtn || !nextProcedureBtn || !quickPauseBtn || !fullList) return;

    let elapsedMs=0;
    let startedAt=0;
    let running=false;
    let timerId=null;
    let shownStep=-1;
    let shownSection=-1;
    let shownSecond=-1;
    let rows=[];
    const prefersReducedMotion=()=>window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showSelectedLabel(control,label){
      const options=Array.from(control.options||control.children||[]);
      const selected=options.find(option=>String(option.value)===String(control.value));
      label.textContent=selected ? selected.textContent : '';
    }
    function updateSelectionLabels(){ showSelectedLabel(select,planValue); }
    function setMinimal(enabled){
      const minimal=Boolean(enabled);
      runner.classList.toggle('routine-minimal',minimal);
      minimalSetting.checked=minimal;
      if(minimal) fullDetails.open=false;
    }
    setMinimal(false);
    minimalSetting.addEventListener('change',()=>setMinimal(minimalSetting.checked));
    fullDetails.addEventListener('toggle',()=>{
      const heading=fullDetails.querySelector('summary');
      if(heading) heading.textContent=fullDetails.open
        ? '← Back to Massage Player'
        : 'View Full Routine · Choose where to start';
    });
    let focused=false;
    let nativeFullscreen=false;
    function setFullscreen(enabled){
      focused=Boolean(enabled);
      runner.classList.toggle('routine-fullscreen',focused);
      document.documentElement.classList.toggle('massage-routine-fullscreen',focused);
      fullscreenBtn.setAttribute('aria-pressed',focused?'true':'false');
      fullscreenBtn.setAttribute('aria-label',focused?'Exit fullscreen':'Enter fullscreen');
      fullscreenLabel.textContent=focused?'Exit fullscreen':'Fullscreen';
    }
    function exitFullscreen(){
      setFullscreen(false);
      if(document.fullscreenElement===runner && typeof document.exitFullscreen==='function'){
        try{Promise.resolve(document.exitFullscreen()).catch(()=>{});}catch(_e){}
      }
      nativeFullscreen=false;
    }
    function enterFullscreen(){
      setFullscreen(true); // CSS fullscreen is the fallback on iOS and browsers without the Fullscreen API.
      if(typeof runner.requestFullscreen==='function'){
        try{
          Promise.resolve(runner.requestFullscreen()).then(()=>{
            nativeFullscreen=document.fullscreenElement===runner;
          }).catch(()=>{nativeFullscreen=false;});
        }catch(_e){nativeFullscreen=false;}
      }
    }
    fullscreenBtn.addEventListener('click',()=>{if(focused)exitFullscreen();else enterFullscreen();});
    document.addEventListener('fullscreenchange',()=>{
      if(document.fullscreenElement===runner){nativeFullscreen=true;setFullscreen(true);}
      else if(nativeFullscreen){nativeFullscreen=false;setFullscreen(false);}
    });
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape' && focused && document.fullscreenElement!==runner) exitFullscreen();
    });
    function timeMs(){
      return Math.min(TOTAL_SECONDS*1000,Math.max(0,running ? performance.now()-startedAt : elapsedMs));
    }
    function clearTick(){
      if(timerId!==null){ window.clearInterval(timerId);timerId=null; }
    }
    function stopAtEnd(){
      if(timeMs() < TOTAL_SECONDS*1000) return;
      elapsedMs=TOTAL_SECONDS*1000;
      running=false;
      clearTick();
    }
    function sectionsFor(step){
      return step.cues.map((cue,index)=>({
        start:cue[0],
        end:index+1<step.cues.length?step.cues[index+1][0]:step.to-step.from,
        family:cue[1],
        technique:cue[2],
        instruction:cue[3],
        pressure:cue[4],
        stretch:cue[5],
        area:cue[6]
      }));
    }
    function currentProcedureIndex(second){
      for(let i=PROCEDURE_STARTS.length-1;i>=0;i--){
        if(second>=PROCEDURE_STARTS[i]) return i;
      }
      return 0;
    }
    function activeSectionIndex(sections,secondsInStep){
      let index=0;
      for(let i=1;i<sections.length;i++){
        if(secondsInStep<sections[i].start) break;
        index=i;
      }
      return index;
    }
    function makeStartButton(label,second,className){
      const button=document.createElement('button');
      button.type='button';
      button.className=className;
      button.textContent=label;
      button.setAttribute('aria-label',label+' at '+format(second));
      button.addEventListener('click',()=>{
        pause();jumpTo(second);
        fullDetails.open=false;
        const toolbar=runner.querySelector('.routine-player-toolbar');
        if(toolbar && typeof toolbar.scrollIntoView==='function') toolbar.scrollIntoView({block:'start',behavior:'instant'});
      });
      return button;
    }
    function buildFullRoutine(){
      const fragment=document.createDocumentFragment();
      STEPS.forEach((step,index)=>{
        const group=document.createElement('section');
        group.className='routine-full-step';
        const heading=document.createElement('h4');
        heading.textContent='Step '+(index+1)+' · '+step.title+' · '+step.phase+' · '+format(step.from)+'–'+format(step.to);
        const startHere=makeStartButton('Start at this step',step.from,'routine-full-start');
        const list=document.createElement('ol');
        list.className='routine-full-procedures';
        sectionsFor(step).forEach(procedure=>{
          const item=document.createElement('li');
          const label=document.createElement('strong');
          label.textContent=procedure.area+' — '+procedure.family;
          const times=document.createElement('span');
          times.className='routine-full-time';
          times.textContent=format(step.from+procedure.start)+'–'+format(step.from+procedure.end);
          const metrics=document.createElement('span');
          metrics.className='routine-full-metrics';
          metrics.textContent=(procedure.pressure?'Pressure '+procedure.pressure+'/10':'')+(procedure.stretch?(procedure.pressure?' · ':'')+'Stretch '+procedure.stretch:'');
          metrics.hidden=!procedure.pressure&&!procedure.stretch;
          const directions=document.createElement('p');
          directions.textContent=procedure.instruction;
          const startProcedure=makeStartButton('Start here',step.from+procedure.start,'routine-full-start');
          const variation=document.createElement('span');
          variation.className='routine-full-variation';
          variation.textContent=procedure.technique;
          item.append(label,variation,times,metrics,directions,startProcedure);
          list.appendChild(item);
        });
        group.append(heading,startHere,list);
        fragment.appendChild(group);
      });
      fullList.replaceChildren(fragment);
    }
    function buildSections(){
      const row=document.createElement('article');
      row.className='routine-section-row is-live';
      row.setAttribute('role','listitem');
      row.setAttribute('aria-current','step');
      const content=document.createElement('div');
      content.className='routine-section-content';
      const variation=document.createElement('strong');
      variation.className='routine-section-name';
      const metrics=document.createElement('div');
      metrics.className='routine-section-metrics';
      const pressure=document.createElement('span');
      pressure.className='routine-section-pressure';
      const stretch=document.createElement('span');
      stretch.className='routine-section-stretch';
      metrics.append(pressure,stretch);
      const instruction=document.createElement('span');
      instruction.className='routine-section-instruction';
      content.append(variation,metrics,instruction);
      row.appendChild(content);
      viewport.replaceChildren(row);
      rows=[row];
      shownSection=-1;
    }
    function render(force=false){
      if(select.value !== PLAN_ID) return;
      stopAtEnd();
      const ms=timeMs();
      const second=Math.floor(ms/1000);
      const index=activeStepIndex(second);
      const step=STEPS[index];
      const changedStep=index!==shownStep;
      if(!force && !changedStep && second===shownSecond) return;
      if(changedStep) buildSections();
      shownSecond=second;

      const stepSecond=Math.max(0,Math.min(step.to-step.from,second-step.from));
      const sections=sectionsFor(step);
      const sectionIndex=activeSectionIndex(sections,stepSecond);
      const section=sections[sectionIndex];
      const sectionRemaining=Math.max(0,section.end-stepSecond);
      const changedSection=sectionIndex!==shownSection;

      elapsedLabel.textContent=format(second);
      remainingLabel.textContent=format(TOTAL_SECONDS-second);
      stepClock.textContent=format(Math.max(0,step.to-second));
      sectionClock.textContent=format(sectionRemaining);
      minimalTime.textContent=format(sectionRemaining);
      minimalElapsed.textContent=format(second)+' elapsed · '+format(TOTAL_SECONDS-second)+' left';
      minimalName.textContent=section.area+' — '+section.family;
      minimalTechnique.textContent=section.technique;
      minimalInstruction.textContent=section.instruction;
      minimalPressure.hidden=!section.pressure;
      minimalPressure.textContent=section.pressure?'Pressure '+section.pressure+'/10':'';
      minimalStretch.hidden=!section.stretch;
      minimalStretch.textContent=section.stretch?'Stretch '+section.stretch:'';
      const duration=section.end-section.start;
      const progressed=duration?Math.max(0,Math.min(100,(sectionRemaining/duration)*100)):0;
      minimalClock.style.setProperty('--routine-clock-progress',progressed+'%');
      sectionCounter.textContent='Procedure '+(sectionIndex+1)+' of '+sections.length;
      stepTitle.textContent=step.title;
      stepDetail.textContent=step.detail;
      stepCount.textContent='Step '+(index+1)+' of '+STEPS.length+' · '+step.phase+' · '+format(step.from)+'–'+format(step.to);
      nextTitle.textContent=STEPS[index+1]?.title || 'Session complete';
      progress.value=second;
      prevBtn.disabled=second===0;
      nextBtn.disabled=second>=TOTAL_SECONDS;
      const procedureIndex=currentProcedureIndex(second);
      previousProcedureBtn.disabled=procedureIndex===0;
      nextProcedureBtn.disabled=second>=TOTAL_SECONDS || procedureIndex===PROCEDURE_STARTS.length-1;
      quickPauseBtn.disabled=second>=TOTAL_SECONDS;
      quickPauseBtn.textContent=running?'Pause':second===0?'Start':'Resume';
      stateLabel.textContent=second===TOTAL_SECONDS?'Complete — 60:00':running?'In progress':'Paused / ready';

      if(changedStep || changedSection || force){
        const row=rows[0];
        row.querySelector('.routine-section-name').textContent=section.technique;
        const pressure=row.querySelector('.routine-section-pressure');
        pressure.hidden=!section.pressure;
        pressure.textContent=section.pressure?'Pressure '+section.pressure+'/10':'';
        const stretch=row.querySelector('.routine-section-stretch');
        stretch.hidden=!section.stretch;
        stretch.textContent=section.stretch?'Stretch '+section.stretch:'';
        row.querySelector('.routine-section-instruction').textContent=section.instruction;
      }
      shownSection=sectionIndex;
      shownStep=index;
    }
    function jumpTo(seconds){
      elapsedMs=Math.max(0,Math.min(TOTAL_SECONDS,seconds))*1000;
      if(running) startedAt=performance.now()-elapsedMs;
      shownStep=-1;
      shownSection=-1;
      render(true);
    }
    function pause(){
      if(!running) return;
      elapsedMs=timeMs();
      running=false;
      clearTick();
      render(true);
    }
    function reset(){
      running=false;
      clearTick();
      elapsedMs=0;
      startedAt=0;
      shownStep=-1;
      render(true);
    }
    function updateRoute(){
      try{
        const url=new URL(window.location.href);
        if(select.value===PLAN_ID) url.searchParams.set('massage-plan',PLAN_ID);
        else url.searchParams.delete('massage-plan');
        window.history.replaceState(Object.assign({},window.history.state||{},{baselineMassage:true}), '',url.pathname+url.search+url.hash);
      }catch(_e){}
    }
    function selectPlan(updateUrl=true){
      pause();
      runner.hidden=select.value!==PLAN_ID;
      if(updateUrl) updateRoute();
      if(select.value===PLAN_ID) reset();
      else if(focused) exitFullscreen();
      updateSelectionLabels();
    }
    function startOrResume(){
      if(running || timeMs()>=TOTAL_SECONDS*1000) return;
      startedAt=performance.now()-elapsedMs;
      running=true;
      clearTick();
      timerId=window.setInterval(()=>render(),200);
      render(true);
    }
    buildFullRoutine();
    updateSelectionLabels();
    select.addEventListener('change',()=>selectPlan(true));
    quickPauseBtn.addEventListener('click',()=>{if(running)pause();else startOrResume();});
    resetBtn.addEventListener('click',reset);
    prevBtn.addEventListener('click',()=>{
      const index=activeStepIndex(Math.floor(timeMs()/1000));
      jumpTo(STEPS[Math.max(0,index-1)].from);
    });
    nextBtn.addEventListener('click',()=>{
      const index=activeStepIndex(Math.floor(timeMs()/1000));
      jumpTo(STEPS[Math.min(STEPS.length-1,index+1)].from);
    });
    previousProcedureBtn.addEventListener('click',()=>{
      const index=currentProcedureIndex(Math.floor(timeMs()/1000));
      if(index>0) jumpTo(PROCEDURE_STARTS[index-1]);
    });
    nextProcedureBtn.addEventListener('click',()=>{
      const index=currentProcedureIndex(Math.floor(timeMs()/1000));
      if(index<PROCEDURE_STARTS.length-1) jumpTo(PROCEDURE_STARTS[index+1]);
    });
    document.addEventListener('visibilitychange',()=>{ if(!document.hidden) render(true); });
    window.addEventListener('pagehide',clearTick);
    window.addEventListener('pageshow',()=>{if(running && timerId===null) timerId=window.setInterval(()=>render(),200);render(true);});
    const queryPlan=new URLSearchParams(window.location.search).get('massage-plan');
    if(queryPlan===PLAN_ID) select.value=PLAN_ID;
    selectPlan(false);
    window.addEventListener('popstate',()=>{
      const wanted=new URLSearchParams(window.location.search).get('massage-plan')===PLAN_ID ? PLAN_ID : '';
      if(wanted!==select.value){ select.value=wanted; selectPlan(false); }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initialise,{once:true});
  else initialise();
})();
