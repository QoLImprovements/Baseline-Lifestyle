/* Baseline Massage — guided routine owner. No audio, vibration or notifications. */
(function(){
  'use strict';

  const TOTAL_SECONDS = 60 * 60;
  const PLAN_ID = 'partner-full-body-60';
  const STEPS = [
    {from:0,to:120,phase:'Face-up',title:'Warm chest and anterior shoulders',detail:'Use slow, broad effleurage over the upper pectorals and shoulders. Invite the shoulders to relax without pushing them back.',cues:[[0,"Warm the chest and front shoulders with slow, gentle strokes."],[60,"Continue smooth strokes across both shoulders; check that the pressure feels comfortable."]]},
    {from:120,to:360,phase:'Face-up',title:'Pectoral kneading and gliding',detail:'Massage the fleshy central area of the pectoral muscles using palms and finger pads, away from sensitive chest tissue; keep contact comfortable and consensual.',cues:[[0,"Massage the left pectoral muscle and the front of the left shoulder with palms and finger pads."],[120,"Massage the right pectoral muscle and the front of the right shoulder in the same way."]]},
    {from:360,to:600,phase:'Face-up',title:'Chest opening with pectoral massage',detail:'Support the left arm outward first, then the right arm outward, without forcing either shoulder. Massage the pectoral muscle on the side being gently stretched.',cues:[[0,"Support the left arm and slowly move it outward to open the left side of the chest."],[30,"Keep the left arm supported; massage the left pectoral muscle during the gentle stretch."],[55,"Ease the left arm inward slightly; finish with soft strokes on the left chest."],[70,"Open the left arm gently again and stroke the left pectoral muscle."],[95,"Gradually return the left arm to a relaxed position and finish with gentle strokes."],[120,"Support the right arm and slowly move it outward to open the right side of the chest."],[150,"Keep the right arm supported; massage the right pectoral muscle during the gentle stretch."],[175,"Ease the right arm inward slightly; finish with soft strokes on the right chest."],[190,"Open the right arm gently again and stroke the right pectoral muscle."],[215,"Gradually return the right arm to a relaxed position and finish with gentle strokes."]]},
    {from:600,to:840,phase:'Face-up',title:'Neck, trapezius and front shoulders',detail:'Use supported, gentle neck and upper trapezius massage followed by broad anterior-shoulder strokes. Avoid pressing on the front or side of the throat.',cues:[[0,"Gently massage the left side of the neck and upper trapezius, keeping the head supported."],[60,"Gently massage the right side of the neck and upper trapezius."],[120,"Massage the front of the left shoulder with the left arm comfortably supported."],[180,"Massage the front of the right shoulder with the right arm comfortably supported."]]},
    {from:840,to:1200,phase:'Face-up',title:'Arms, forearms and hands',detail:'Massage the right arm first, then the left. Use gentle kneading and slow strokes over the fleshy parts of the upper arms and forearms, with comfortable wrist stretches when supported.',cues:[[0,"Massage the right upper arm with broad strokes and gentle kneading."],[90,"Massage the right forearm and hand; gently support and stretch the right wrist if comfortable."],[180,"Massage the left upper arm with broad strokes and gentle kneading."],[270,"Massage the left forearm and hand; gently support and stretch the left wrist if comfortable."]]},
    {from:1200,to:1560,phase:'Face-up',title:'Quadriceps and front lower legs',detail:'Use broad palm effleurage, kneading and compression over the front thighs, followed by gentle lower-leg strokes away from the shinbone.',cues:[[0,"Warm and knead the front of the right thigh with broad palm strokes."],[90,"Massage the front of the right lower leg, avoiding direct pressure on the shinbone."],[180,"Warm and knead the front of the left thigh with broad palm strokes."],[270,"Massage the front of the left lower leg, avoiding direct pressure on the shinbone."]]},
    {from:1560,to:1770,phase:'Face-up',title:'Right hamstring and calf — strap and massage',detail:'Use a soft yoga strap around the ball of the right foot. Support the right leg and raise it only to a mild stretch; use slow strokes over the fleshy hamstring and calf muscles while gently lengthened.',cues:[[0,"Massage the relaxed right hamstring and calf with broad palm strokes."],[60,"Place the strap around the ball of the right foot; gradually raise the supported right leg."],[90,"Hold the gentle right hamstring and calf stretch while stroking the accessible muscles."],[120,"Ease the right leg down slightly and allow the muscles to relax."],[140,"Raise the right leg into another mild stretch and massage the right hamstring and calf."],[170,"Slowly lower the right leg and finish with soothing strokes."]]},
    {from:1770,to:1980,phase:'Face-up',title:'Left hamstring and calf — strap and massage',detail:'Place the strap around the ball of the left foot. Support and gently raise the left leg, keeping the knee comfortably straight or slightly bent while stroking the hamstring and calf.',cues:[[0,"Massage the relaxed left hamstring and calf with broad palm strokes."],[60,"Place the strap around the ball of the left foot; gradually raise the supported left leg."],[90,"Hold the gentle left hamstring and calf stretch while stroking the accessible muscles."],[120,"Ease the left leg down slightly and allow the muscles to relax."],[140,"Raise the left leg into another mild stretch and massage the left hamstring and calf."],[170,"Slowly lower the left leg and finish with soothing strokes."]]},
    {from:1980,to:2040,phase:'Transition',title:'Turn face-down and reposition',detail:'Pause contact while your friend turns over. Adjust support and draping, then settle the shoulders, hips and ankles comfortably.',cues:[[0,"Allow your friend to turn face-down at their own pace; adjust draping and support."]]},
    {from:2040,to:2220,phase:'Face-down',title:'Warm the full back',detail:'Slow bilateral effleurage across the larger back muscles, with comfortable pressure and broad palms or forearms.',cues:[[0,"Warm the back with broad, slow strokes using your palms or forearms."],[90,"Continue smooth back strokes with comfortable, gradually adjusted pressure."]]},
    {from:2220,to:2580,phase:'Face-down',title:'Upper back and posterior shoulders',detail:'Alternate forearm gliding and palm kneading of upper back, trapezius and posterior shoulder muscles. Support the left arm as you massage behind the left shoulder, then support the right arm as you massage behind the right shoulder.',cues:[[0,"Massage the upper trapezius and upper-back muscles with broad palm and forearm strokes."],[120,"Massage the muscles beside the left and right shoulder blades, avoiding direct pressure on the bones."],[240,"Support the left arm gently and massage the back of the left shoulder."],[300,"Support the right arm gently and massage the back of the right shoulder."]]},
    {from:2580,to:2820,phase:'Face-down',title:'Lower back muscles',detail:'Broad palm/forearm glides and gentle compression alongside the spine, not on vertebrae; avoid forcing the lumbar area into extension.',cues:[[0,"Glide your palms slowly over the muscles on both sides of the lower back, away from the spine."],[120,"Use gentle palm compression on the lower-back muscles, then finish with soothing strokes."]]},
    {from:2820,to:3000,phase:'Face-down',title:'Glute muscle massage',detail:'With specific consent and appropriate draping, use broad palm/forearm strokes and relaxed compression over the glute muscles.',cues:[[0,"With specific consent and draping, massage the right glute with broad, comfortable strokes."],[90,"With specific consent and draping, massage the left glute with broad, comfortable strokes."]]},
    {from:3000,to:3300,phase:'Face-down',title:'Hamstrings and calves',detail:'Broad effleurage, kneading and compression over the posterior leg muscles; alternate slack and gently lengthened positions where practical.',cues:[[0,"Massage the back of the right thigh and the right calf with broad kneading and gliding strokes."],[150,"Massage the back of the left thigh and the left calf with broad kneading and gliding strokes."]]},
    {from:3300,to:3420,phase:'Face-down',title:'Right quadriceps — strap stretch and massage',detail:'Gently bend the right knee with a soft strap assisting the ankle, keeping the pelvis stable. Massage only accessible thigh muscle while it is mildly lengthened.',cues:[[0,"Knead the relaxed, accessible muscles of the right thigh."],[30,"Gently bend the right knee using the strap to assist the right ankle."],[45,"Keep the right knee comfortably bent; stroke the accessible outer-right-thigh muscle."],[70,"Ease the right knee toward straight and allow the right thigh to relax."],[85,"Repeat a mild right quadriceps stretch while gently stroking the right thigh."],[110,"Fully release the right strap stretch and settle the right leg."]]},
    {from:3420,to:3540,phase:'Face-down',title:'Left quadriceps — strap stretch and massage',detail:'Repeat on the left, keeping knee and hip aligned; massage accessible lateral thigh rather than pressing into tendons or joint structures.',cues:[[0,"Knead the relaxed, accessible muscles of the left thigh."],[30,"Gently bend the left knee using the strap to assist the left ankle."],[45,"Keep the left knee comfortably bent; stroke the accessible outer-left-thigh muscle."],[70,"Ease the left knee toward straight and allow the left thigh to relax."],[85,"Repeat a mild left quadriceps stretch while gently stroking the left thigh."],[110,"Fully release the left strap stretch and settle the left leg."]]},
    {from:3540,to:3600,phase:'Face-down',title:'Soothing finishing strokes',detail:'Reduce pressure and finish with slow, calming full-back strokes. Stop gently at 60 minutes without a sound.',cues:[[0,"Finish with gentle, slow strokes across the full back, gradually reducing the pressure."]]}
  ];

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
    step.cues.every((cue,index)=>cue[0]>=0 && cue[0]<step.to-step.from &&
      (index===0 || cue[0]>step.cues[index-1][0])))){
    throw new Error('Massage routine sections must be ordered and within their step');
  }
  if(!validateSchedule()) throw new Error('Massage routine timings must cover exactly 60 minutes');

  function initialise(){
    const select=byId('massageRoutineSelect');
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
    const startBtn=byId('massageRoutineStart');
    const pauseBtn=byId('massageRoutinePause');
    const resetBtn=byId('massageRoutineReset');
    const prevBtn=byId('massageRoutinePrevious');
    const nextBtn=byId('massageRoutineNext');
    const stateLabel=byId('massageRoutineStatus');
    if(!select || !runner || !viewport || !elapsedLabel || !remainingLabel || !stepClock || !sectionCounter || !sectionClock || !nextTitle || !startBtn) return;

    let elapsedMs=0;
    let startedAt=0;
    let running=false;
    let timerId=null;
    let shownStep=-1;
    let shownSection=-1;
    let shownSecond=-1;
    let rows=[];
    const prefersReducedMotion=()=>window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        instruction:cue[1]
      }));
    }
    function activeSectionIndex(sections,secondsInStep){
      let index=0;
      for(let i=1;i<sections.length;i++){
        if(secondsInStep<sections[i].start) break;
        index=i;
      }
      return index;
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
        const instruction=document.createElement('span');
        instruction.className='routine-section-instruction';
        instruction.textContent=section.instruction;
        const remaining=document.createElement('span');
        remaining.className='routine-section-remaining';
        remaining.textContent=format(section.end-section.start);
        row.append(number,instruction,remaining);
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
      sectionCounter.textContent='Section '+(sectionIndex+1)+' of '+sections.length;
      stepTitle.textContent=step.title;
      stepDetail.textContent=step.detail;
      stepCount.textContent='Step '+(index+1)+' of '+STEPS.length+' · '+step.phase+' · '+format(step.from)+'–'+format(step.to);
      nextTitle.textContent=STEPS[index+1]?.title || 'Session complete';
      progress.value=second;
      startBtn.disabled=running || second>=TOTAL_SECONDS;
      pauseBtn.disabled=!running;
      prevBtn.disabled=second===0;
      nextBtn.disabled=second>=TOTAL_SECONDS;
      stateLabel.textContent=second===TOTAL_SECONDS?'Complete — 60:00':running?'In progress':'Paused / ready';

      rows.forEach((row,i)=>{
        const current=i===sectionIndex;
        if(changedStep || changedSection || force){
          row.classList.toggle('is-live',current);
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
    }
    select.addEventListener('change',()=>selectPlan(true));
    startBtn.addEventListener('click',()=>{
      if(running || timeMs()>=TOTAL_SECONDS*1000) return;
      startedAt=performance.now()-elapsedMs;
      running=true;
      clearTick();
      timerId=window.setInterval(()=>render(),200);
      render(true);
    });
    pauseBtn.addEventListener('click',pause);
    resetBtn.addEventListener('click',reset);
    prevBtn.addEventListener('click',()=>{
      const index=activeStepIndex(Math.floor(timeMs()/1000));
      jumpTo(STEPS[Math.max(0,index-1)].from);
    });
    nextBtn.addEventListener('click',()=>{
      const index=activeStepIndex(Math.floor(timeMs()/1000));
      jumpTo(STEPS[Math.min(STEPS.length-1,index+1)].from);
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
