import {
  CHECKOUT_SCENARIOS,
  RECOVERY_SCENARIOS,
  TARGETS_BY_TIER,
  DISTRACTION_MISSIONS,
  ROUTINE_SCENARIOS
} from './darts-focused-content.js';
import { createGeographyPrompt } from './darts-focused-rounds.js';

export function createDartsStateFactory({
  getTier,
  shuffledScenario,
  pickScenario,
  shuffle,
  randomItem,
  nowMs
}){
  function createState(id){
    if(id==='checkout-pressure')return {scenario:shuffledScenario(CHECKOUT_SCENARIOS,'checkout','checkout-pressure'),startedAt:nowMs(),feedback:''};
    if(id==='route-recovery')return {scenario:shuffledScenario(RECOVERY_SCENARIOS,'recovery','route-recovery'),startedAt:nowMs(),feedback:''};
    if(id==='target-lock')return {phase:'ready',target:randomItem(TARGETS_BY_TIER[getTier(id)]),feedback:''};
    if(id==='hold-picture')return {phase:'ready',target:randomItem(TARGETS_BY_TIER[getTier(id)]),options:[],feedback:''};
    if(id==='distraction-resistance')return {phase:'ready',mission:shuffledScenario(DISTRACTION_MISSIONS,'distraction','distraction-resistance'),feedback:''};
    if(id==='pressure-ladder')return {phase:'ready',scenario:null,feedback:''};
    if(id==='board-geography')return {...createGeographyPrompt(getTier('board-geography')),startedAt:nowMs(),feedback:''};
    if(id==='routine-builder'){
      const scenario=pickScenario(ROUTINE_SCENARIOS,'routine',id);
      return {scenario,order:shuffle(scenario.correct),startedAt:nowMs(),feedback:''};
    }
    if(id==='sequence-recall')return {phase:'ready',sequence:[],showIndex:0,input:[],feedback:''};
    if(id==='decision-training')return {phase:'categories',category:'',queue:[],index:0,score:0,question:null,options:[],selected:[],confidence:50,paceStage:'',paceResults:{},feedback:''};
    return {};
  }
  return Object.freeze({createState});
}
