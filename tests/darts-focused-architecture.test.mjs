import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { GAME_IDS, validateRouteText, remainingAfterHit } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-engine.mjs';
import {
  GAMES,
  TIER_DEFINITIONS,
  CHECKOUT_SCENARIOS,
  RECOVERY_SCENARIOS,
  DECISION_QUESTION_POOLS
} from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-content.js';
import { panelHtml } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-ui.js';
import { boardSvg } from '../systems/baseline-recreation/games/darts-focused/js/darts-focused-board.js';

const runtime=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused.js',import.meta.url),'utf8');
const decisionSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-decision.js',import.meta.url),'utf8');
const rendererSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-renderers.js',import.meta.url),'utf8');
const actionSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-actions.js',import.meta.url),'utf8');
const decisionActionSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-decision-actions.js',import.meta.url),'utf8');
const stateSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-state.js',import.meta.url),'utf8');
const shellSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-shell.js',import.meta.url),'utf8');
const uiSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-ui.js',import.meta.url),'utf8');
const eventsSource=fs.readFileSync(new URL('../systems/baseline-recreation/games/darts-focused/js/darts-focused-events.js',import.meta.url),'utf8');

test('Darts content authority exposes the canonical ten games and three tiers',()=>{
  assert.deepEqual(GAMES.map(game=>game.id),GAME_IDS);
  assert.equal(new Set(GAMES.map(game=>game.id)).size,10);
  assert.deepEqual(TIER_DEFINITIONS.map(tier=>tier.id),[1,2,3]);
});

test('every canonical checkout scenario remains a legal double-out route',()=>{
  for(const scenario of CHECKOUT_SCENARIOS){
    const result=validateRouteText(scenario.score,scenario.correct,scenario.darts);
    assert.equal(result.valid,true,scenario.key+' canonical route must remain legal');
    assert.equal(result.remaining,0);
    assert.ok(scenario.options.includes(scenario.correct),scenario.key+' correct route must remain selectable');
  }
});

test('every route-recovery canonical answer checks out the actual remaining score',()=>{
  for(const scenario of RECOVERY_SCENARIOS){
    const remaining=remainingAfterHit(scenario.start,scenario.actual).remaining;
    const result=validateRouteText(remaining,scenario.correct,scenario.dartsLeft);
    assert.equal(result.valid,true,scenario.key+' recovery route must remain legal');
    assert.equal(result.remaining,0);
    assert.ok(scenario.options.includes(scenario.correct),scenario.key+' recovery answer must remain selectable');
  }
});

test('decision-training content keeps valid selectable answers where options are used',()=>{
  for(const [category,pool] of Object.entries(DECISION_QUESTION_POOLS)){
    assert.ok(Array.isArray(pool)&&pool.length>0,category+' must have questions');
    for(const question of pool){
      if(Array.isArray(question.options)&&typeof question.correct==='string'){
        assert.ok(question.options.includes(question.correct),question.key+' correct answer must be selectable');
      }
    }
  }
});

test('Darts UI authority builds selectors for all ten games',()=>{
  const html=panelHtml({games:GAMES,selectedId:GAME_IDS[0],progressLabel:id=>'Progress '+id});
  for(const id of GAME_IDS)assert.match(html,new RegExp('data-darts-game="'+id+'"'));
  assert.match(html,/id="dartsFocusedPanel"/);
});

test('Darts board authority renders physical number order and interactive targets',()=>{
  const svg=boardSvg({interactive:true,highlight:'T20'});
  assert.match(svg,/data-board-target="T20"/);
  assert.match(svg,/is-highlight/);
  for(const number of [20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5]){
    assert.match(svg,new RegExp('>'+number+'<\\/text>'));
  }
});

test('Darts controller delegates extracted authorities without parallel implementations',()=>{
  assert.match(runtime,/from '\.\/darts-focused-content\.js'/);
  assert.match(runtime,/from '\.\/darts-focused-timing\.js'/);
  assert.match(runtime,/from '\.\/darts-focused-storage\.js'/);
  assert.match(runtime,/from '\.\/darts-focused-ui\.js'/);

  assert.doesNotMatch(runtime,/const CHECKOUT_SCENARIOS|const MENTAL_RESET_QUESTIONS|const GAMES =/);
  assert.doesNotMatch(runtime,/function boardSvg|function polar|function annularPath/);
  assert.doesNotMatch(runtime,/function escapeHtml|function feedbackHtml|function choiceButtons|function gameSelectorHtml/);
  assert.doesNotMatch(runtime,/ui\.gameTimers|ui\.autoTimer|ui\.sessionToken/);
  assert.doesNotMatch(runtime,/function loadProfile|localStorage\.getItem\(STORAGE_KEY\)/);
});

test('Darts action authority uses arithmetic route validation rather than canonical string equality',()=>{
  assert.match(actionSource,/validateRouteText\(checkoutScore,value,dartsAvailable\)/);
  assert.match(actionSource,/validateRouteText\(state\.scenario\.score,value,state\.scenario\.darts\)/);
  assert.doesNotMatch(actionSource,/correct\s*=\s*value\s*===\s*state\.scenario\.correct/);
});


test('Darts pressure and pace countdowns derive display time from managed timers',()=>{
  assert.match(runtime,/function managedTimerRemaining\(timer\) \{ return timing\.remaining\(timer\); \}/);
  assert.match(actionSource,/state\.timer\s*=\s*scheduleGame/);
  assert.match(decisionActionSource,/state\.paceTimer\s*=\s*scheduleGame/);
  assert.match(rendererSource,/managedTimerRemaining\(state\.timer\)/);
  assert.match(rendererSource,/--pressure-start-scale:\$\{startScale\}/);
  assert.match(decisionSource,/remainingMsForTimer\(state\.paceTimer\)/);
  assert.match(decisionSource,/--pressure-start-scale:\$\{startScale\}/);
});


test('Darts controller delegates Decision Training presentation authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-decision\.js'/);
  assert.doesNotMatch(runtime,/function decisionCategoryIconSvg/);
  assert.match(runtime,/renderDecisionTrainingView\(state,/);
});


test('Darts controller delegates round preparation authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-rounds\.js'/);
  assert.match(runtime,/pickScenarioWithHistory\(pool,tierId\(id\),ui\.lastScenario\[key\]\)/);
  assert.match(runtime,/buildTargetSequence\(tierId\('sequence-recall'\)\)/);
  assert.match(stateSource,/createGeographyPrompt\(getTier\('board-geography'\)\)/);
});


test('Darts controller delegates game-specific presentation to renderer authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-renderers\.js'/);
  assert.match(runtime,/const RENDERERS = createDartsRenderers\(/);
  assert.doesNotMatch(runtime,/const RENDERERS = \{/);
});


test('Darts controller delegates progress presentation authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-progress\.js'/);
  assert.doesNotMatch(runtime,/darts-xp-block/);
  assert.doesNotMatch(runtime,/darts-tier-button/);
});


test('Darts controller delegates non-Decision drill mutations to action authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-actions\.js'/);
  assert.match(runtime,/createDartsDrillActions\(/);
  assert.doesNotMatch(runtime,/function answerStandard|function startTargetLock|function startPressure|function sequenceClick/);
});


test('Darts controller delegates Decision Training mutations to action authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-decision-actions\.js'/);
  assert.match(runtime,/createDartsDecisionActions\(/);
  assert.doesNotMatch(runtime,/function startDecisionCategory|function answerDecisionChoice|function finishPaceAnswer/);
});


test('Darts controller delegates canonical state construction to state factory',()=>{
  assert.match(runtime,/from '\.\/darts-focused-state\.js'/);
  assert.match(runtime,/createDartsStateFactory\(/);
  assert.doesNotMatch(runtime,/function createState|function newGeographyState/);
});


test('Darts controller delegates Recreation shell behavior',()=>{
  assert.match(runtime,/from '\.\/darts-focused-shell\.js'/);
  assert.match(runtime,/createDartsShell\(/);
  assert.doesNotMatch(runtime,/function ensureStylesheet|function openHowToPlay|function openPanel|function closePanel|function toggleFullscreen/);
});


test('Darts controller delegates DOM event routing to event authority',()=>{
  assert.match(runtime,/from '\.\/darts-focused-events\.js'/);
  assert.match(runtime,/createDartsEventHandlers\(/);
  assert.doesNotMatch(runtime,/function handleClick|function handleChange|function handleKeydown/);
});

test('Darts event authority does not intercept the Recreation overview opener',()=>{
  assert.doesNotMatch(eventsSource,/data-open-darts-focused/);
  assert.doesNotMatch(eventsSource,/openPanel,/);
  assert.match(eventsSource,/data-close-darts-focused/);
});


test('Darts public API retains Realm contribution access after modularisation',()=>{
  assert.match(runtime,/realmContributionForDarts/);
  assert.match(runtime,/getRealmContribution:\(\) => realmContributionForDarts\(profile\)/);
  assert.match(runtime,/globalThis\.DartsFocusedGames = Object\.freeze/);
});


test('Darts leaves Recreation overview-row rendering to the core authority',()=>{
  assert.match(runtime,/ensureStylesheet\(\); ensurePanel\(\);/);
  assert.doesNotMatch(runtime,/ensureOverviewEntry|queueOverviewSync|installObserver|MutationObserver/);
  assert.doesNotMatch(shellSource,/overviewEntryHtml|ensureOverviewEntry|queueOverviewSync|data-darts-entry/);
  assert.doesNotMatch(uiSource,/overviewEntryHtml|data-darts-entry/);
});
