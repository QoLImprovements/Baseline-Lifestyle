import {
  DARTBOARD_ORDER,
  anticlockwiseNeighbour,
  clockwiseNeighbour,
  oppositeSegment,
  seededPick
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import { TARGETS_BY_TIER } from './darts-focused-content.js';

function clampTier(tier){
  return Math.max(1,Math.min(3,Number(tier)||1));
}

export function poolForTier(pool,tier){
  const level=clampTier(tier);
  const filtered=(pool||[]).filter((item)=>Number(item.tier||1)<=level);
  return filtered.length ? filtered : (pool||[]);
}

export function pickScenarioWithHistory(pool,tier,history=[]){
  const available=poolForTier(pool,tier);
  const prior=Array.isArray(history)?history:(history?[history]:[]);
  const avoidCount=Math.min(3,Math.max(0,available.length-1));
  const recent=new Set(prior.slice(-avoidCount));
  const choices=available.length>1?available.filter((item)=>!recent.has(item.key)):available;
  const picked=seededPick(choices.length?choices:available)||(choices[0]||available[0]||null);
  return {
    scenario:picked,
    history:picked?.key?[...prior,picked.key].slice(-4):prior.slice(-4)
  };
}

export function shuffleCopy(items,random=Math.random){
  const copy=[...(items||[])];
  for(let index=copy.length-1;index>0;index-=1){
    const swap=Math.floor(random()*(index+1));
    [copy[index],copy[swap]]=[copy[swap],copy[index]];
  }
  return copy;
}

export function shuffledScenarioOptions(scenario,random=Math.random){
  return scenario
    ? {...scenario,options:Array.isArray(scenario.options)?shuffleCopy(scenario.options,random):scenario.options}
    : null;
}

export function targetsForTier(tier){
  return TARGETS_BY_TIER[clampTier(tier)]||TARGETS_BY_TIER[1];
}

export function sequenceLengthForTier(tier){
  return [3,4,5][clampTier(tier)-1];
}

export function sequenceDelayForTier(tier){
  return [1150,900,720][clampTier(tier)-1];
}

export function buildTargetSequence(tier){
  const pool=targetsForTier(tier);
  const length=sequenceLengthForTier(tier);
  const sequence=[];
  while(sequence.length<length){
    const options=pool.filter((item)=>item!==sequence[sequence.length-1]);
    sequence.push(seededPick(options)||options[0]);
  }
  return sequence;
}

export function createGeographyPrompt(tier){
  const segment=seededPick(DARTBOARD_ORDER)||DARTBOARD_ORDER[0];
  const relationships=clampTier(tier)===1
    ? ['clockwise','anticlockwise']
    : ['clockwise','anticlockwise','opposite'];
  const relationship=seededPick(relationships)||relationships[0];
  const answer=relationship==='clockwise'
    ? clockwiseNeighbour(segment)
    : relationship==='anticlockwise'
      ? anticlockwiseNeighbour(segment)
      : oppositeSegment(segment);
  return {segment,relationship,answer};
}
