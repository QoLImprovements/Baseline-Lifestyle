/* Baseline Massage — guided routine owner. No audio, vibration or notifications. */
(function(){
  'use strict';

  const TOTAL_SECONDS = 60 * 60;
  const PLAN_ID = 'partner-full-body-60';
  const STEPS = [
    {from:0,to:120,phase:'Face-up',title:'Warm chest and anterior shoulders',detail:'Begin with effleurage to warm the pectoral and anterior-deltoid muscles while the shoulders settle naturally.',cues:[[0,"Effleurage","Broad Palm","Glide both palms across upper chest and shoulders.","2–3",null],[60,"Effleurage","Alternating Palms","Alternate left and right palm strokes over pectorals.","2–3",null]]},
    {from:120,to:360,phase:'Face-up',title:'Pectoral Petrissage',detail:'Petrissage using circular kneading over each pectoral muscle and anterior deltoid, with attention to comfort and boundaries.',cues:[[0,"Petrissage","Circular Pectoral Kneading — Left","Knead left pectoral and anterior shoulder.","2–4",null],[120,"Petrissage","Circular Pectoral Kneading — Right","Knead right pectoral and anterior shoulder.","2–4",null]]},
    {from:360,to:600,phase:'Face-up',title:'Chest opening with pectoral massage',detail:'Support the left arm outward first, then the right arm outward, without forcing either shoulder. Massage the pectoral muscle on the side being gently stretched.',cues:[[0,"Assisted Stretching","Supported Pectoral Stretch — Left","Open left arm sideways with support.","1–2","Left shoulder outward 30–90° as comfortable · 2–3/10"],[30,"Effleurage","Pectoral Glide Under Stretch — Left","Glide across lengthened left pectoral.","2–3","Left shoulder outward 30–90° as comfortable · 2–3/10"],[55,"Passive Movement","Supported Arm Release — Left","Ease left arm inward.","1–2",null],[70,"Assisted Stretching","Repeat Pectoral Stretch — Left","Repeat left-arm opening.","1–2","Left shoulder outward 30–90° as comfortable · 2–3/10"],[95,"Effleurage","Closing Pectoral Glide — Left","Return left arm; finish with palm glide.","2–3",null],[120,"Assisted Stretching","Supported Pectoral Stretch — Right","Open right arm sideways with support.","1–2","Right shoulder outward 30–90° as comfortable · 2–3/10"],[150,"Effleurage","Pectoral Glide Under Stretch — Right","Glide across lengthened right pectoral.","2–3","Right shoulder outward 30–90° as comfortable · 2–3/10"],[175,"Passive Movement","Supported Arm Release — Right","Ease right arm inward.","1–2",null],[190,"Assisted Stretching","Repeat Pectoral Stretch — Right","Repeat right-arm opening.","1–2","Right shoulder outward 30–90° as comfortable · 2–3/10"],[215,"Effleurage","Closing Pectoral Glide — Right","Return right arm; finish with palm glide.","2–3",null]]},
    {from:600,to:840,phase:'Face-up',title:'Neck, trapezius and front shoulders',detail:'Use trapezius petrissage followed by anterior-deltoid effleurage. Avoid direct pressure on the front or side of the throat.',cues:[[0,"Petrissage","Upper-Trapezius Kneading — Left","Knead left upper trapezius; support head.","2–4",null],[60,"Petrissage","Upper-Trapezius Kneading — Right","Knead right upper trapezius; support head.","2–4",null],[120,"Effleurage","Anterior-Deltoid Glide — Left","Glide over left anterior deltoid.","2–3",null],[180,"Effleurage","Anterior-Deltoid Glide — Right","Glide over right anterior deltoid.","2–3",null]]},
    {from:840,to:1200,phase:'Face-up',title:'Arms, forearms and hands',detail:'Combine biceps/triceps petrissage with forearm and hand effleurage; include a supported mild wrist stretch on each side.',cues:[[0,"Petrissage","Upper-Arm Kneading — Right","Lift and knead right biceps and triceps.","3–5",null],[90,"Effleurage","Forearm Glide and Hand Massage — Right","Glide over right forearm and palm; extend wrist gently.","2–3","Right wrist extension ≤20° as comfortable · 1–2/10"],[180,"Petrissage","Upper-Arm Kneading — Left","Lift and knead left biceps and triceps.","3–5",null],[270,"Effleurage","Forearm Glide and Hand Massage — Left","Glide over left forearm and palm; extend wrist gently.","2–3","Left wrist extension ≤20° as comfortable · 1–2/10"]]},
    {from:1200,to:1560,phase:'Face-up',title:'Quadriceps and front lower legs',detail:'Use quadriceps petrissage followed by effleurage over the muscles beside each shinbone.',cues:[[0,"Petrissage","Quadriceps Kneading — Right","Knead right quadriceps with broad palms.","3–5",null],[90,"Effleurage","Lower-Leg Glide — Right","Glide beside right shinbone.","2–4",null],[180,"Petrissage","Quadriceps Kneading — Left","Knead left quadriceps with broad palms.","3–5",null],[270,"Effleurage","Lower-Leg Glide — Left","Glide beside left shinbone.","2–4",null]]},
    {from:1560,to:1770,phase:'Face-up',title:'Right hamstring and calf — strap and massage',detail:'Use a soft yoga strap around the ball of the right foot. Support the right leg and raise it only to a mild stretch; use slow strokes over the fleshy hamstring and calf muscles while gently lengthened.',cues:[[0,"Effleurage","Posterior-Leg Palm Glide — Right","Glide over relaxed right hamstring and calf.","2–4",null],[60,"Assisted Stretching","Strap-Assisted Hamstring Stretch — Right","Raise right leg using strap at ball of foot.","1–2","Right hip flexion ≈30–70° as comfortable · 2–3/10"],[90,"Effleurage","Hamstring Glide Under Stretch — Right","Glide over lengthened right hamstring and calf.","2–3","Right hip flexion ≈30–70° as comfortable · 2–3/10"],[120,"Passive Movement","Supported Leg Release — Right","Lower right leg to ease stretch.","1–2",null],[140,"Assisted Stretching","Repeat Hamstring Stretch With Effleurage — Right","Repeat supported right-leg stretch with glide.","1–2","Right hip flexion ≈30–70° as comfortable · 2–3/10"],[170,"Effleurage","Closing Leg Glide — Right","Lower right leg; finish with palm glide.","2–4",null]]},
    {from:1770,to:1980,phase:'Face-up',title:'Left hamstring and calf — strap and massage',detail:'Place the strap around the ball of the left foot. Support and gently raise the left leg, keeping the knee comfortably straight or slightly bent while stroking the hamstring and calf.',cues:[[0,"Effleurage","Posterior-Leg Palm Glide — Left","Glide over relaxed left hamstring and calf.","2–4",null],[60,"Assisted Stretching","Strap-Assisted Hamstring Stretch — Left","Raise left leg using strap at ball of foot.","1–2","Left hip flexion ≈30–70° as comfortable · 2–3/10"],[90,"Effleurage","Hamstring Glide Under Stretch — Left","Glide over lengthened left hamstring and calf.","2–3","Left hip flexion ≈30–70° as comfortable · 2–3/10"],[120,"Passive Movement","Supported Leg Release — Left","Lower left leg to ease stretch.","1–2",null],[140,"Assisted Stretching","Repeat Hamstring Stretch With Effleurage — Left","Repeat supported left-leg stretch with glide.","1–2","Left hip flexion ≈30–70° as comfortable · 2–3/10"],[170,"Effleurage","Closing Leg Glide — Left","Lower left leg; finish with palm glide.","2–4",null]]},
    {from:1980,to:2040,phase:'Transition',title:'Turn face-down and reposition',detail:'Pause contact while your friend turns over. Adjust support and draping, then settle the shoulders, hips and ankles comfortably.',cues:[[0,"Repositioning","Face-Down Repositioning","Turn face-down; adjust support and draping.","0–1",null]]},
    {from:2040,to:2220,phase:'Face-down',title:'Warm the full back',detail:'Warm the whole back with bilateral palm effleurage and broad forearm gliding.',cues:[[0,"Effleurage","Bilateral Palm Glide — Back","Glide both palms alongside spine.","3–4",null],[90,"Effleurage","Broad Forearm Glide — Back","Glide broad forearms across back muscles.","3–4",null]]},
    {from:2220,to:2580,phase:'Face-down',title:'Upper back and posterior shoulders',detail:'Combine effleurage, petrissage, finger crawling with thumb walking (compression), and two tapotement variations: cupping and hacking. Finish with posterior-deltoid kneading.',cues:[[0,"Effleurage","Upper-Back Palm Glide","Glide palms across upper back.","3–4",null],[60,"Petrissage","Lifting and Kneading — Upper Back","Lift and knead upper trapezius.","3–5",null],[120,"Compression","Finger Crawling With Thumb Compression","Crawl fingers and alternate thumb pressure beside spine.","3–5",null],[180,"Tapotement","Cupping","Cup upper-back muscles with hollow palms.","2–3",null],[225,"Tapotement","Hacking","Hack upper-back muscles with relaxed finger edges.","2–3",null],[255,"Effleurage","Closing Forearm Glide — Upper Back","Finish percussion with forearm glide.","3–4",null],[300,"Petrissage","Posterior-Deltoid Kneading — Left","Knead left posterior deltoid; support arm.","3–5",null],[330,"Petrissage","Posterior-Deltoid Kneading — Right","Knead right posterior deltoid; support arm.","3–5",null]]},
    {from:2580,to:2820,phase:'Face-down',title:'Lower back muscles',detail:'Apply lumbar effleurage and broad palm compression on the lower-back muscles, avoiding direct pressure on the spine.',cues:[[0,"Effleurage","Lumbar Palm Glide","Glide palms beside lumbar spine.","3–4",null],[120,"Compression","Broad Palm Compression — Lumbar","Compress lower-back muscles with broad palms.","2–4",null]]},
    {from:2820,to:3000,phase:'Face-down',title:'Glute muscle massage',detail:'With specific consent and draping, use gluteal petrissage: broad, comfortable kneading of each side.',cues:[[0,"Petrissage","Gluteal Kneading — Right","Knead right gluteal muscles with consent.","3–5",null],[90,"Petrissage","Gluteal Kneading — Left","Knead left gluteal muscles with consent.","3–5",null]]},
    {from:3000,to:3300,phase:'Face-down',title:'Hamstrings and calves',detail:'Warm the hamstrings and calves with effleurage, then perform broad petrissage on each leg.',cues:[[0,"Petrissage","Hamstring and Calf Kneading — Right","Glide and knead right hamstring and calf.","3–5",null],[150,"Petrissage","Hamstring and Calf Kneading — Left","Glide and knead left hamstring and calf.","3–5",null]]},
    {from:3300,to:3420,phase:'Face-down',title:'Right quadriceps — strap stretch and massage',detail:'Gently bend the right knee with a soft strap assisting the ankle, keeping the pelvis stable. Massage only accessible thigh muscle while it is mildly lengthened.',cues:[[0,"Petrissage","Outer-Quadriceps Kneading — Right","Knead accessible outer right quadriceps.","3–5",null],[30,"Assisted Stretching","Strap-Assisted Knee Flexion — Right","Bend right knee with ankle strap.","1–2","Right knee flexion ≈45–100° as comfortable · 2–3/10"],[45,"Effleurage","Lateral-Quadriceps Glide — Right","Glide over lengthened outer-right quadriceps.","2–3","Right knee flexion ≈45–100° as comfortable · 2–3/10"],[70,"Passive Movement","Supported Quadriceps Release — Right","Gently straighten right knee.","1–2",null],[85,"Effleurage","Glide Under Repeat Stretch — Right","Repeat right knee bend with thigh glide.","2–3","Right knee flexion ≈45–100° as comfortable · 2–3/10"],[110,"Passive Movement","Final Leg Release — Right","Release right leg to neutral.","1–2",null]]},
    {from:3420,to:3540,phase:'Face-down',title:'Left quadriceps — strap stretch and massage',detail:'Repeat on the left, keeping knee and hip aligned; massage accessible lateral thigh rather than pressing into tendons or joint structures.',cues:[[0,"Petrissage","Outer-Quadriceps Kneading — Left","Knead accessible outer left quadriceps.","3–5",null],[30,"Assisted Stretching","Strap-Assisted Knee Flexion — Left","Bend left knee with ankle strap.","1–2","Left knee flexion ≈45–100° as comfortable · 2–3/10"],[45,"Effleurage","Lateral-Quadriceps Glide — Left","Glide over lengthened outer-left quadriceps.","2–3","Left knee flexion ≈45–100° as comfortable · 2–3/10"],[70,"Passive Movement","Supported Quadriceps Release — Left","Gently straighten left knee.","1–2",null],[85,"Effleurage","Glide Under Repeat Stretch — Left","Repeat left knee bend with thigh glide.","2–3","Left knee flexion ≈45–100° as comfortable · 2–3/10"],[110,"Passive Movement","Final Leg Release — Left","Release left leg to neutral.","1–2",null]]},
    {from:3540,to:3600,phase:'Face-down',title:'Closing Full-Back Effleurage',detail:'Finish with soothing effleurage, gradually reducing pressure. The timer ends silently.',cues:[[0,"Effleurage","Closing Full-Back Glide","Finish with slow, decreasing-pressure palm glide.","2–4",null]]}
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
    step.cues.every((cue,index)=>cue.length===6 && /^(?:0|[1-6])–[1-6]$/.test(cue[4]) && (cue[5]===null || (typeof cue[5]==='string' && cue[5].includes('/10'))) && cue[0]>=0 && cue[0]<step.to-step.from &&
      ['Effleurage','Petrissage','Compression','Tapotement','Assisted Stretching','Passive Movement','Repositioning'].includes(cue[1]) &&
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
    const minimalFamily=byId('massageRoutineMinimalFamily');
    const minimalName=byId('massageRoutineMinimalName');
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
    if(!select || !planValue || !minimalSetting || !minimalClock || !minimalTime || !minimalElapsed || !minimalFamily || !minimalName || !minimalInstruction || !minimalPressure || !minimalStretch || !fullDetails || !fullscreenBtn || !fullscreenLabel || !runner || !viewport || !elapsedLabel || !remainingLabel || !stepClock || !sectionCounter || !sectionClock || !nextTitle || !previousProcedureBtn || !nextProcedureBtn || !quickPauseBtn || !fullList) return;

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
    let focused=false;
    let nativeFullscreen=false;
    function setFullscreen(enabled){
      focused=Boolean(enabled);
      runner.classList.toggle('routine-fullscreen',focused);
      document.documentElement.classList.toggle('massage-routine-fullscreen',focused);
      fullscreenBtn.setAttribute('aria-pressed',focused?'true':'false');
      fullscreenBtn.setAttribute('aria-label',focused?'Exit fullscreen':'Enter fullscreen');
      fullscreenLabel.textContent=focused?'Exit fullscreen':'Fullscreen';
      if(focused) viewport.scrollTop=Math.max(0,(rows[shownSection]?.offsetTop||0)-12);
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
    function scrollToCurrent(index){
      const row=rows[index];
      if(!row) return;
      const target=Math.max(0,row.offsetTop - (viewport.clientHeight-row.offsetHeight)/2);
      if(typeof viewport.scrollTo === 'function') viewport.scrollTo({top:target,behavior:prefersReducedMotion()?'instant':'smooth'});
      else viewport.scrollTop=target;
    }
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
        stretch:cue[5]
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
          label.textContent=procedure.family+' — '+procedure.technique;
          const times=document.createElement('span');
          times.className='routine-full-time';
          times.textContent=format(step.from+procedure.start)+'–'+format(step.from+procedure.end);
          const metrics=document.createElement('span');
          metrics.className='routine-full-metrics';
          metrics.textContent='Pressure '+procedure.pressure+'/10'+(procedure.stretch?' · Stretch '+procedure.stretch:'');
          const directions=document.createElement('p');
          directions.textContent=procedure.instruction;
          const startProcedure=makeStartButton('Start here',step.from+procedure.start,'routine-full-start');
          item.append(label,times,metrics,directions,startProcedure);
          list.appendChild(item);
        });
        group.append(heading,startHere,list);
        fragment.appendChild(group);
      });
      fullList.replaceChildren(fragment);
    }
    function buildSections(step){
      rows=[];
      const fragment=document.createDocumentFragment();
      sectionsFor(step).forEach((section,index)=>{
        const row=document.createElement('article');
        row.className='routine-section-row';
        row.setAttribute('role','listitem');
        const number=document.createElement('span');
        number.className='routine-section-number';
        number.textContent=String(index+1).padStart(2,'0');
        const content=document.createElement('div');
        content.className='routine-section-content';
        const identity=document.createElement('div');
        identity.className='routine-section-technique';
        const family=document.createElement('span');
        family.className='routine-section-family';
        family.textContent=section.family;
        const name=document.createElement('strong');
        name.className='routine-section-name';
        name.textContent=section.technique;
        identity.append(family,name);
        const metrics=document.createElement('div');
        metrics.className='routine-section-metrics';
        const pressure=document.createElement('span');
        pressure.className='routine-section-pressure';
        pressure.textContent='Pressure '+section.pressure+'/10';
        metrics.appendChild(pressure);
        if(section.stretch){
          const stretch=document.createElement('span');
          stretch.className='routine-section-stretch';
          stretch.textContent='Stretch '+section.stretch;
          metrics.appendChild(stretch);
        }
        const instruction=document.createElement('span');
        instruction.className='routine-section-instruction';
        instruction.textContent=section.instruction;
        content.append(identity,metrics,instruction);
        const remaining=document.createElement('span');
        remaining.className='routine-section-remaining';
        remaining.textContent=format(section.end-section.start);
        row.append(number,content,remaining);
        fragment.appendChild(row);
        rows.push(row);
      });
      viewport.replaceChildren(fragment);
      viewport.scrollTop=0;
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
      if(changedStep) buildSections(step);
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
      minimalElapsed.textContent=format(second)+' elapsed · '+format(TOTAL_SECONDS-second)+' remaining';
      minimalFamily.textContent=section.family;
      minimalName.textContent=section.technique;
      minimalInstruction.textContent=section.instruction;
      minimalPressure.textContent='Pressure '+section.pressure+'/10';
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

      rows.forEach((row,i)=>{
        const current=i===sectionIndex;
        if(changedStep || changedSection || force){
          row.classList.toggle('is-live',current);
          row.classList.toggle('is-next',i===sectionIndex+1);
          if(current) row.setAttribute('aria-current','step');
          else row.removeAttribute('aria-current');
        }
        const remaining=row.querySelector('.routine-section-remaining');
        if(remaining) remaining.textContent=current
          ? format(sectionRemaining)+' left'
          : i<sectionIndex?'Done':format(sections[i].end-sections[i].start);
      });
      if(changedStep || changedSection) scrollToCurrent(sectionIndex);
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
      viewport.scrollTop=0;
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
