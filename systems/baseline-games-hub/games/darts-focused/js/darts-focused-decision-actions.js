import { sameSet } from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import {
  decisionCategoryMeta,
  decisionSeriesSizeForTier,
  decisionPoolForTier,
  paceSecondsForTier
} from './darts-focused-decision.js';

export function createDartsDecisionActions({
  getProfile,
  getTier,
  stateFor,
  resetState,
  shuffle,
  clearGameTimers,
  clearAutoTimer,
  scheduleGame,
  renderSelectedGame,
  record,
  elapsedFrom,
  autoAdvance,
  saveProfile,
  setLastQuestion,
  nowMs
}){
  const seriesSize=()=>decisionSeriesSizeForTier(getTier());
  const poolFor=(category)=>decisionPoolForTier(category,getTier());
  const paceSeconds=(stage)=>paceSecondsForTier(stage,getTier());

  function startDecisionCategory(categoryId){
    clearGameTimers();clearAutoTimer();
    const profile=getProfile();
    const state=resetState('decision-training');
    const category=decisionCategoryMeta(categoryId);
    if(!category)return;
    const pool=poolFor(categoryId);
    const wanted=Math.min(seriesSize(),pool.length);
    const historyMap=profile.custom.decisionQuestionHistory||(profile.custom.decisionQuestionHistory={});
    const history=Array.isArray(historyMap[categoryId])?historyMap[categoryId]:[];
    const historySet=new Set(history);
    const unseen=shuffle(pool.filter((question)=>!historySet.has(question.key)));
    const queue=unseen.slice(0,wanted);
    if(queue.length<wanted){
      const recent=new Set(history.slice(-wanted));
      const refill=shuffle(pool.filter((question)=>!queue.some((picked)=>picked.key===question.key)&&!recent.has(question.key)));
      queue.push(...refill.slice(0,wanted-queue.length));
    }
    if(queue.length<wanted){
      const fallback=shuffle(pool.filter((question)=>!queue.some((picked)=>picked.key===question.key)));
      queue.push(...fallback.slice(0,wanted-queue.length));
    }
    state.category=categoryId;
    state.queue=queue;
    historyMap[categoryId]=[...history,...queue.map((question)=>question.key)].slice(-Math.max(pool.length*2,40));
    saveProfile();
    state.index=0;
    state.score=0;
    prepareDecisionQuestion(state);
  }

  function prepareDecisionQuestion(state){
    clearGameTimers();clearAutoTimer();
    if(state.index>=state.queue.length){
      state.phase='series-complete';
      renderSelectedGame();
      autoAdvance(()=>returnDecisionCategories(),2300);
      return;
    }
    state.question=state.queue[state.index];
    setLastQuestion(state.category,state.question.key);
    state.options=shuffle(state.category==='pace-control'?state.question.calm.options:(state.question.options||[]));
    state.selected=[];
    state.confidence=50;
    state.feedback='';
    state.startedAt=nowMs();
    state.paceResults={};
    if(state.category==='pace-control'){
      state.paceStage='calm';
      state.phase='question';
      renderSelectedGame();
      schedulePaceTimeout(state,'calm');
      return;
    }
    state.phase='question';
    renderSelectedGame();
  }

  function returnDecisionCategories(){
    clearGameTimers();clearAutoTimer();
    const state=resetState('decision-training');
    state.phase='categories';
    renderSelectedGame();
  }

  function advanceDecision(){
    const state=stateFor('decision-training');
    clearGameTimers();clearAutoTimer();
    if(state.phase==='pace-between'){startRushedPace();return;}
    if(state.phase==='series-complete'){returnDecisionCategories();return;}
    state.index+=1;
    prepareDecisionQuestion(state);
  }

  function currentPaceQuestion(state){
    return state.paceStage==='rushed'?state.question.rushed:state.question.calm;
  }

  function answerDecisionChoice(value){
    const state=stateFor('decision-training');
    if(state.phase!=='question'||state.feedback)return;
    if(state.category==='pace-control'){
      finishPaceAnswer(value===currentPaceQuestion(state).correct,false);
      return;
    }
    const q=state.question;
    const correct=value===q.correct;
    const confidence=state.category==='confidence-calibration'?state.confidence:null;
    record('decision-training',correct,elapsedFrom(state),confidence,state.category);
    if(correct)state.score+=1;
    state.feedback={
      correct,
      title:correct?'Correct decision':'Recalculate',
      text:state.category==='confidence-calibration'
        ? `Correct answer: ${q.correct}. Confidence was ${state.confidence}%.`
        : q.explanation
    };
    renderSelectedGame();
    autoAdvance(advanceDecision);
  }

  function submitDecisionFacts(){
    const state=stateFor('decision-training');
    if(state.category!=='relevant-information'||state.feedback)return;
    const correct=sameSet(state.selected,state.question.correct);
    record('decision-training',correct,elapsedFrom(state),null,state.category);
    if(correct)state.score+=1;
    state.feedback={correct,title:correct?'Relevant facts isolated':'Noise remained in the decision',text:state.question.explanation};
    renderSelectedGame();
    autoAdvance(advanceDecision);
  }

  function schedulePaceTimeout(state,stage){
    const seconds=paceSeconds(stage);
    state.paceTimer=scheduleGame(()=>{
      if(state.category!=='pace-control'||state.phase!=='question'||state.paceStage!==stage)return;
      finishPaceAnswer(false,true);
    },seconds*1000);
  }

  function finishPaceAnswer(correct,timedOut){
    const state=stateFor('decision-training');
    if(state.category!=='pace-control'||state.phase!=='question')return;
    clearGameTimers();
    const stage=state.paceStage;
    const result={correct:Boolean(correct),ms:timedOut?paceSeconds(stage)*1000:elapsedFrom(state)};
    state.paceResults[stage]=result;
    if(stage==='calm'){
      state.phase='pace-between';
      renderSelectedGame();
      autoAdvance(startRushedPace,1900);
      return;
    }
    const combinedCorrect=Boolean(state.paceResults.calm?.correct&&result.correct);
    const averageMs=Math.round(((state.paceResults.calm?.ms||0)+result.ms)/2);
    record('decision-training',combinedCorrect,averageMs,null,'pace-control');
    if(combinedCorrect)state.score+=1;
    const profile=getProfile();
    profile.custom.calmComparisons.push({calm:state.paceResults.calm,rushed:result});
    profile.custom.calmComparisons=profile.custom.calmComparisons.slice(-30);
    saveProfile();
    state.phase='pace-result';
    renderSelectedGame();
    autoAdvance(advanceDecision,2300);
  }

  function startRushedPace(){
    const state=stateFor('decision-training');
    if(state.category!=='pace-control')return;
    clearGameTimers();clearAutoTimer();
    state.paceStage='rushed';
    state.options=shuffle(state.question.rushed.options);
    state.startedAt=nowMs();
    state.phase='question';
    renderSelectedGame();
    schedulePaceTimeout(state,'rushed');
  }

  return Object.freeze({
    startDecisionCategory,
    prepareDecisionQuestion,
    returnDecisionCategories,
    advanceDecision,
    answerDecisionChoice,
    submitDecisionFacts,
    currentPaceQuestion,
    schedulePaceTimeout,
    finishPaceAnswer,
    startRushedPace
  });
}
