/* Baseline Massage — guided routine owner. No audio, vibration or notifications. */
(function(){
  'use strict';

  const TOTAL_SECONDS = 60 * 60;
  const PLAN_ID = 'partner-full-body-60';
  const STEPS = [
    {from:0,to:120,phase:'Face-up',title:'Warm chest and anterior shoulders',detail:'Use slow, broad effleurage over the upper pectorals and shoulders. Invite the shoulders to relax without pushing them back.',cues:[[0,'Begin with light, slow strokes across the upper chest and shoulder muscles.'],[60,'Continue gentle warming strokes and check pressure.']]},
    {from:120,to:360,phase:'Face-up',title:'Pectoral kneading and gliding',detail:'Work the pectoral muscle bellies using palms and finger pads, away from sensitive chest tissue; keep contact comfortable and consensual.',cues:[[0,'Left pectoral and anterior shoulder: warm, knead and glide for two minutes.'],[120,'Right pectoral and anterior shoulder: repeat for two minutes.']]},
    {from:360,to:600,phase:'Face-up',title:'Chest opening with pectoral massage',detail:'Support one arm slightly outward, without forcing the shoulder. Gently lengthen the chest and glide over the accessible pectoral muscle while held.',cues:[[0,'Left: 0–30s support and gradually open the arm.'],[30,'Left: 30–55s hold mild stretch and massage pectoral muscle.'],[55,'Left: 55–70s ease stretch; soothing strokes.'],[70,'Left: 70–95s repeat gentle stretch with massage.'],[95,'Left: 95–120s gradually release and glide.'],[120,'Right: 0–30s support and gradually open the arm.'],[150,'Right: 30–55s hold mild stretch and massage pectoral muscle.'],[175,'Right: 55–70s ease stretch; soothing strokes.'],[190,'Right: 70–95s repeat gentle stretch with massage.'],[215,'Right: 95–120s gradually release and glide.']]},
    {from:600,to:840,phase:'Face-up',title:'Neck, trapezius and front shoulders',detail:'Use supported, gentle neck and upper trapezius massage followed by broad anterior-shoulder strokes. Avoid pressing on the front or side of the throat.',cues:[[0,'First two minutes: neck and upper trapezius, gently supported.'],[120,'Next two minutes: anterior shoulders with comfortable arm positioning.']]},
    {from:840,to:1200,phase:'Face-up',title:'Arms, forearms and hands',detail:'Alternate relaxed-position kneading with supported, mild elbow/wrist lengthening and gliding over the relevant muscle bellies.',cues:[[0,'Right arm: three minutes from upper arm to forearm and hand.'],[180,'Left arm: three minutes, including gentle supported lengthening.']]},
    {from:1200,to:1560,phase:'Face-up',title:'Quadriceps and front lower legs',detail:'Use broad palm effleurage, kneading and compression over the front thighs, followed by gentle lower-leg strokes away from the shinbone.',cues:[[0,'Right leg: three minutes of warming and muscle massage.'],[180,'Left leg: three minutes of warming and muscle massage.']]},
    {from:1560,to:1770,phase:'Face-up',title:'Right hamstring and calf — strap and massage',detail:'Use a soft yoga strap around the ball of the right foot. Support the leg and raise only to a mild stretch; massage the accessible muscle belly while lengthened.',cues:[[0,'0–60s: massage the right leg with muscles relaxed.'],[60,'60–90s: position strap and gradually raise the supported leg.'],[90,'90–120s: gentle held stretch with accessible hamstring/calf gliding.'],[120,'120–140s: ease stretch and relax.'],[140,'140–170s: repeat a mild stretch with gliding massage.'],[170,'170–210s: gradually lower the leg and soothe.']]},
    {from:1770,to:1980,phase:'Face-up',title:'Left hamstring and calf — strap and massage',detail:'Repeat on the left with the strap around the ball of the foot. Keep the knee comfortably straight or slightly bent, avoiding force or joint pressure.',cues:[[0,'0–60s: massage the left leg with muscles relaxed.'],[60,'60–90s: position strap and gradually raise the supported leg.'],[90,'90–120s: gentle held stretch with accessible hamstring/calf gliding.'],[120,'120–140s: ease stretch and relax.'],[140,'140–170s: repeat a mild stretch with gliding massage.'],[170,'170–210s: gradually lower the leg and soothe.']]},
    {from:1980,to:2040,phase:'Transition',title:'Turn face-down and reposition',detail:'Pause contact while your friend turns over. Adjust support and draping, then settle the shoulders, hips and ankles comfortably.',cues:[[0,'Help your friend turn over at their own pace and adjust draping/support.']]},
    {from:2040,to:2220,phase:'Face-down',title:'Warm the full back',detail:'Slow bilateral effleurage across the larger back muscles, with comfortable pressure and broad palms or forearms.',cues:[[0,'Begin long, gentle strokes to warm the back.'],[90,'Gradually broaden and deepen contact as welcomed.']]},
    {from:2220,to:2580,phase:'Face-down',title:'Upper back and posterior shoulders',detail:'Alternate forearm gliding and palm kneading of upper back, trapezius and posterior shoulder muscles. Gently position arms to lengthen accessible tissue while massaging.',cues:[[0,'First two minutes: trapezius and upper back.'],[120,'Next two minutes: muscles around shoulder blades.'],[240,'Final two minutes: posterior shoulders, mild supported lengthening with gliding.']]},
    {from:2580,to:2820,phase:'Face-down',title:'Lower back muscles',detail:'Broad palm/forearm glides and gentle compression alongside the spine, not on vertebrae; avoid forcing the lumbar area into extension.',cues:[[0,'First two minutes: broad, slow strokes on both sides of the lower back.'],[120,'Next two minutes: comfortable muscular compression and relaxing glides.']]},
    {from:2820,to:3000,phase:'Face-down',title:'Glute muscle massage',detail:'With specific consent and appropriate draping, use broad palm/forearm strokes and relaxed compression over the glute muscles.',cues:[[0,'Right glute muscles: 90 seconds.'],[90,'Left glute muscles: 90 seconds.']]},
    {from:3000,to:3300,phase:'Face-down',title:'Hamstrings and calves',detail:'Broad effleurage, kneading and compression over the posterior leg muscles; alternate slack and gently lengthened positions where practical.',cues:[[0,'Right posterior leg: 2 minutes 30 seconds.'],[150,'Left posterior leg: 2 minutes 30 seconds.']]},
    {from:3300,to:3420,phase:'Face-down',title:'Right quadriceps — strap stretch and massage',detail:'Gently bend the right knee with a soft strap assisting the ankle, keeping the pelvis stable. Massage only accessible thigh muscle while it is mildly lengthened.',cues:[[0,'0–30s: knead relaxed accessible thigh muscle.'],[30,'30–45s: gradually bend knee to mild stretch.'],[45,'45–70s: supported stretch with light-to-moderate lateral thigh gliding.'],[70,'70–85s: release and relax.'],[85,'85–110s: repeat with mild massage.'],[110,'110–120s: fully release.']]},
    {from:3420,to:3540,phase:'Face-down',title:'Left quadriceps — strap stretch and massage',detail:'Repeat on the left, keeping knee and hip aligned; massage accessible lateral thigh rather than pressing into tendons or joint structures.',cues:[[0,'0–30s: knead relaxed accessible thigh muscle.'],[30,'30–45s: gradually bend knee to mild stretch.'],[45,'45–70s: supported stretch with light-to-moderate lateral thigh gliding.'],[70,'70–85s: release and relax.'],[85,'85–110s: repeat with mild massage.'],[110,'110–120s: fully release.']]},
    {from:3540,to:3600,phase:'Face-down',title:'Soothing finishing strokes',detail:'Reduce pressure and finish with slow, calming full-back strokes. Stop gently at 60 minutes without a sound.',cues:[[0,'Slow, broad strokes across the back; ease contact toward the finish.']]}
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
    const stepCue=byId('massageRoutineCurrentCue');
    const stepCount=byId('massageRoutineStepCount');
    const progress=byId('massageRoutineProgress');
    const startBtn=byId('massageRoutineStart');
    const pauseBtn=byId('massageRoutinePause');
    const resetBtn=byId('massageRoutineReset');
    const prevBtn=byId('massageRoutinePrevious');
    const nextBtn=byId('massageRoutineNext');
    const stateLabel=byId('massageRoutineStatus');
    if(!select || !runner || !viewport || !elapsedLabel || !remainingLabel || !stepClock || !startBtn) return;

    let elapsedMs=0;
    let startedAt=0;
    let running=false;
    let timerId=null;
    let shownStep=-1;
    let shownSecond=-1;
    const rows=[];
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
    function cueAt(step,secondsInStep){
      let latest=step.cues[0][1];
      for(const cue of step.cues){
        if(secondsInStep >= cue[0]) latest=cue[1]; else break;
      }
      return latest;
    }
    function render(force=false){
      if(select.value !== PLAN_ID) return;
      stopAtEnd();
      const ms=timeMs();
      const second=Math.floor(ms/1000);
      const index=activeStepIndex(second);
      const step=STEPS[index];
      const changed=index!==shownStep;
      if(!force && !changed && second===shownSecond) return;
      shownSecond=second;
      elapsedLabel.textContent=format(second);
      remainingLabel.textContent=format(TOTAL_SECONDS-second);
      stepClock.textContent=format(Math.max(0,step.to-second));
      stepTitle.textContent=step.title;
      stepDetail.textContent=step.detail;
      stepCue.textContent=cueAt(step,Math.min(step.to-step.from,second-step.from));
      stepCount.textContent='Step '+(index+1)+' of '+STEPS.length+' · '+step.phase+' · '+format(step.from)+'–'+format(step.to);
      progress.value=second;
      startBtn.disabled=running || second>=TOTAL_SECONDS;
      pauseBtn.disabled=!running;
      prevBtn.disabled=second===0;
      nextBtn.disabled=second>=TOTAL_SECONDS;
      stateLabel.textContent=second===TOTAL_SECONDS?'Complete — 60:00':running?'In progress':'Paused / ready';
      if(changed || force){
        rows.forEach((row,i)=>{
          const current=i===index;
          row.classList.toggle('is-live',current);
          if(current) row.setAttribute('aria-current','step');
          else row.removeAttribute('aria-current');
          const status=row.querySelector('.routine-row-status');
          if(status) status.textContent=current?'NOW':step.from>=STEPS[i].to?'DONE':'UPCOMING';
        });
        if(changed) scrollToCurrent(index);
        shownStep=index;
      }
    }
    function jumpTo(seconds){
      elapsedMs=Math.max(0,Math.min(TOTAL_SECONDS,seconds))*1000;
      if(running) startedAt=performance.now()-elapsedMs;
      shownStep=-1;
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
    const fragment=document.createDocumentFragment();
    STEPS.forEach((step,index)=>{
      const row=document.createElement('article');
      row.className='routine-step-row';
      row.setAttribute('role','listitem');
      const number=document.createElement('span');
      number.className='routine-row-number';
      number.textContent=String(index+1).padStart(2,'0');
      const main=document.createElement('div');
      main.className='routine-row-main';
      const title=document.createElement('strong');
      title.textContent=step.title;
      const subtitle=document.createElement('span');
      subtitle.textContent=step.phase+' · '+format(step.from)+'–'+format(step.to);
      main.append(title,subtitle);
      const status=document.createElement('span');
      status.className='routine-row-status';
      row.append(number,main,status);
      fragment.appendChild(row);
      rows.push(row);
    });
    viewport.appendChild(fragment);
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
