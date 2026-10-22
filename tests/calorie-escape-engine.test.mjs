import assert from 'node:assert/strict';
import test from 'node:test';
import { LEVELS, OBSTACLE_TYPES, ZONES } from '../systems/baseline-recreation/games/baseline-realm/calorie-escape/data/calorie-escape-data.js';
import {
  completeRun,
  createDefaultCalorieEscapeState,
  createRunSnapshot,
  failRun
} from '../systems/baseline-recreation/games/baseline-realm/calorie-escape/js/calorie-escape-engine.js';

test('Calorie Escape defines four playable zones and complete obstacle vocabulary',()=>{
 assert.equal(ZONES.length,4);
 assert.equal(LEVELS.length,12);
 assert.equal(ZONES[0].name,'City');
 assert.equal(ZONES[0].pursuer,'Chef Brasa');
 assert.ok(Object.keys(OBSTACLE_TYPES).length>=6);
});

test('a playable run snapshot contains a real timeline and live movement modifiers',()=>{
 const state=createDefaultCalorieEscapeState();
 const run=createRunSnapshot(state,'city-1',{},12345);
 assert.equal(run.active,true);
 assert.equal(run.levelId,'city-1');
 assert.ok(run.timeline.length>10);
 assert.ok(run.modifiers.jumpImpulse>0);
 assert.ok(run.modifiers.attackDuration>0);
 assert.ok(run.pressureCapacity>=100);
});

test('completing a route records progression and unlocks the next route',()=>{
 const state=createDefaultCalorieEscapeState();
 const {state:next,result}=completeRun(state,{
   levelId:'city-1',
   score:6000,
   distance:5200,
   broken:8,
   hits:0,
   pressure:28,
   materials:{grain:2}
 });
 assert.equal(result.completed,true);
 assert.equal(next.completedLevels['city-1'],1);
 assert.equal(next.unlockedLevels.includes('city-2'),true);
 assert.equal(next.selectedLevelId,'city-2');
 assert.ok(next.mastery['city-1']>0);
 assert.equal(next.lifetime.completions,1);
});

test('failed runs preserve earned mastery without falsely unlocking progression',()=>{
 const state=createDefaultCalorieEscapeState();
 const {state:next,result}=failRun(state,{
   levelId:'city-1',
   score:900,
   distance:1200,
   broken:1,
   hits:3,
   pressure:100,
   materials:{grain:1}
 });
 assert.equal(result.failed,true);
 assert.equal(next.unlockedLevels.includes('city-2'),false);
 assert.ok(next.mastery['city-1']>0);
 assert.equal(next.lifetime.runs,1);
 assert.equal(next.lifetime.completions,0);
});
