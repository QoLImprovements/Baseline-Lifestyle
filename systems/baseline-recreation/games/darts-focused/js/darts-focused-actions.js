import {
  arraysEqual,
  normaliseTargetCode,
  remainingAfterHit,
  validateRouteText
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import {
  CHECKOUT_SCENARIOS,
  TARGETS_BY_TIER
} from './darts-focused-content.js';

export function createDartsDrillActions({
  getProfile,
  getSelected,
  stateFor,
  resetState,
  tierId,
  shuffledScenario,
  shuffle,
  buildSequence,
  sequenceDelayForTier,
  clearGameTimers,
  clearAutoTimer,
  scheduleGame,
  renderSelectedGame,
  record,
  elapsedFrom,
  autoAdvance,
  requestNewRound,
  nowMs
}){
  function answerStandard(gameId,value) {
    const state=stateFor(gameId);
    if(state.feedback)return;
    let correct=false;
    let explanation='';
    const profile=getProfile();

    if(gameId==='checkout-pressure'||gameId==='route-recovery'){
      const scenario=state.scenario;
      const checkoutScore=gameId==='route-recovery'
        ? remainingAfterHit(scenario.start,scenario.actual).remaining
        : scenario.score;
      const dartsAvailable=gameId==='route-recovery'?scenario.dartsLeft:scenario.darts;
      const routeResult=validateRouteText(checkoutScore,value,dartsAvailable);
      correct=routeResult.valid&&routeResult.remaining===0;
      explanation=correct&&value!==scenario.correct
        ? `${value} is also a legal checkout from ${checkoutScore} in ${dartsAvailable} dart${dartsAvailable===1?'':'s'}. The listed route was ${scenario.correct}.`
        : scenario.explanation;
    }else if(gameId==='hold-picture'){
      correct=value===state.target;
      explanation=`The highlighted target was ${state.target}.`;
    }else if(gameId==='distraction-resistance'){
      correct=value===state.mission.correct;
      explanation=`The retained answer was ${state.mission.correct}.`;
    }else if(gameId==='pressure-ladder'){
      const routeResult=validateRouteText(state.scenario.score,value,state.scenario.darts);
      correct=routeResult.valid&&routeResult.remaining===0;
      explanation=correct&&value!==state.scenario.correct
        ? `${value} is also a legal checkout from ${state.scenario.score}. The listed route was ${state.scenario.correct}.`
        : state.scenario.explanation;
      profile.custom.pressureLevel=Math.max(1,Math.min(5,profile.custom.pressureLevel+(correct?1:-1)));
      explanation+=` The next pressure level is ${profile.custom.pressureLevel}.`;
    }

    clearGameTimers();
    record(gameId,correct,elapsedFrom(state));
    state.feedback={correct,title:correct?'Correct decision':'Recalculate',text:explanation};
    renderSelectedGame();
    autoAdvance(()=>requestNewRound(gameId));
  }

  function startTargetLock(){
    clearGameTimers();clearAutoTimer();
    const state=resetState('target-lock');
    state.phase='show';state.startedAt=nowMs();
    renderSelectedGame();
    const delay=[2600,2000,1450][tierId('target-lock')-1];
    scheduleGame(()=>{state.phase='recall';state.startedAt=nowMs();renderSelectedGame();},delay);
  }

  function startHoldPicture(){
    clearGameTimers();clearAutoTimer();
    const state=resetState('hold-picture');
    state.phase='show';
    const pool=TARGETS_BY_TIER[tierId('hold-picture')];
    const optionCount=[3,4,5][tierId('hold-picture')-1];
    state.options=shuffle([state.target,...shuffle(pool.filter((item)=>item!==state.target)).slice(0,optionCount-1)]);
    renderSelectedGame();
    const delay=[3200,2400,1750][tierId('hold-picture')-1];
    scheduleGame(()=>{state.phase='recall';state.startedAt=nowMs();renderSelectedGame();},delay);
  }

  function startDistraction(){
    clearGameTimers();clearAutoTimer();
    const state=resetState('distraction-resistance');
    state.phase='show';
    renderSelectedGame();
    const delay=[6000,4800,3800][tierId('distraction-resistance')-1];
    scheduleGame(()=>{state.phase='question';state.startedAt=nowMs();renderSelectedGame();},delay);
  }

  function answerTarget(code){
    const state=stateFor('target-lock');
    if(getSelected()!=='target-lock'||state.phase!=='recall'||state.feedback)return;
    const selected=normaliseTargetCode(code);
    const correct=selected===state.target;
    record('target-lock',correct,elapsedFrom(state));
    state.feedback={correct,title:correct?'Target retained':'Target shifted',text:`The target was ${state.target}; you selected ${selected||code}.`};
    renderSelectedGame();
    autoAdvance(()=>requestNewRound('target-lock'));
  }

  function answerGeography(segment){
    const state=stateFor('board-geography');
    if(state.feedback)return;
    const correct=Number(segment)===Number(state.answer);
    record('board-geography',correct,elapsedFrom(state));
    state.feedback={correct,title:correct?'Board relationship correct':'Different position',text:`The ${state.relationship} answer from ${state.segment} is ${state.answer}.`};
    renderSelectedGame();
    autoAdvance(()=>requestNewRound('board-geography'));
  }

  function startPressure(){
    clearGameTimers();clearAutoTimer();
    const profile=getProfile();
    const state=resetState('pressure-ladder');
    state.phase='question';
    state.level=profile.custom.pressureLevel;
    state.scenario=shuffledScenario(CHECKOUT_SCENARIOS,'pressure','pressure-ladder');
    const times=tierId('pressure-ladder')===1?[18,16,14,12,10]:tierId('pressure-ladder')===2?[16,14,12,10,8]:[14,12,10,8,6];
    state.seconds=times[state.level-1];
    state.startedAt=nowMs();
    renderSelectedGame();
    state.timer=scheduleGame(()=>{
      if(state.phase!=='question'||state.feedback)return;
      profile.custom.pressureLevel=Math.max(1,profile.custom.pressureLevel-1);
      record('pressure-ladder',false,state.seconds*1000);
      state.feedback={correct:false,title:'Time elapsed',text:`The legal route was ${state.scenario.correct}. The ladder moved down one level.`};
      renderSelectedGame();
      autoAdvance(()=>requestNewRound('pressure-ladder'));
    },state.seconds*1000);
  }

  function moveRoutine(direction,index){
    const state=stateFor('routine-builder');
    if(state.feedback)return;
    const next=direction==='up'?index-1:index+1;
    if(next<0||next>=state.order.length)return;
    [state.order[index],state.order[next]]=[state.order[next],state.order[index]];
    renderSelectedGame();
  }

  function submitRoutine(){
    const state=stateFor('routine-builder');
    if(state.feedback)return;
    const correct=arraysEqual(state.order,state.scenario.correct);
    record('routine-builder',correct,elapsedFrom(state));
    state.feedback={
      correct,
      title:correct?'Routine is stable':'Sequence needs adjustment',
      text:correct?'The sequence matches this situation.':`A stable order is: ${state.scenario.correct.join(' → ')}.`
    };
    renderSelectedGame();
    autoAdvance(()=>requestNewRound('routine-builder'));
  }

  function startSequence(){
    clearGameTimers();clearAutoTimer();
    const state=resetState('sequence-recall');
    state.sequence=buildSequence();
    state.phase='show';state.showIndex=0;
    renderSelectedGame();
    scheduleGame(advanceSequence,sequenceDelayForTier());
  }

  function advanceSequence(){
    const state=stateFor('sequence-recall');
    if(state.phase!=='show')return;
    state.showIndex+=1;
    if(state.showIndex>=state.sequence.length){
      state.phase='recall';state.input=[];state.startedAt=nowMs();renderSelectedGame();return;
    }
    renderSelectedGame();
    scheduleGame(advanceSequence,sequenceDelayForTier());
  }

  function sequenceClick(code){
    const state=stateFor('sequence-recall');
    if(state.phase!=='recall'||state.feedback)return;
    const selected=normaliseTargetCode(code);
    if(!selected)return;
    state.input.push(selected);
    if(state.input.length>=state.sequence.length){
      const correct=arraysEqual(state.input,state.sequence);
      record('sequence-recall',correct,elapsedFrom(state));
      state.feedback={correct,title:correct?'Sequence preserved':'Order changed',text:`Shown: ${state.sequence.join(' → ')}. Entered: ${state.input.join(' → ')}.`};
    }
    renderSelectedGame();
    if(state.feedback)autoAdvance(()=>requestNewRound('sequence-recall'));
  }

  return Object.freeze({
    answerStandard,
    startTargetLock,
    startHoldPicture,
    startDistraction,
    answerTarget,
    answerGeography,
    startPressure,
    moveRoutine,
    submitRoutine,
    startSequence,
    advanceSequence,
    sequenceClick
  });
}
