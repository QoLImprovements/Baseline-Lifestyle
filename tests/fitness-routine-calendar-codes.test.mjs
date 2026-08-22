import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';

const require=createRequire(import.meta.url);
const codes=require('../systems/baseline-fitness/js/fitness-routine-codes-v1.js');
const root=new URL('..',import.meta.url);

const plans=[{ planId:7,planJson:{ name:'Pre-Mid Badminton Calisthenics' } }];
const activities=[
  { id:'run',name:'Run',section:'cardio' },
  { id:'badminton',name:'Badminton',section:'sports' }
];
const entities=codes.buildEntities(plans,activities);
const groups=[{ id:'badminton-session',title:'Badminton Session' }];
const assignments={
  'plan:7':'badminton-session',
  'activity:run':'badminton-session',
  'activity:badminton':'badminton-session'
};
const captions={
  'plan:7':'Pre-Mid Badminton Calisthenics · Session 2\nReverse Lunges - 91/91/91',
  'activity:run':'Run - 30m',
  'activity:badminton':'Badminton - 2hrs'
};

test('category codes identify Calisthenics, Cardio and Sports entries',()=>{
  assert.equal(codes.entityCode('plan:7',entities),'CL1');
  assert.equal(codes.entityCode('activity:run',entities),'C1');
  assert.equal(codes.entityCode('activity:badminton',entities),'S1');
  assert.equal(codes.groupCode('badminton-session',groups),'G1');
  assert.equal(codes.compactDuration(120),'2hrs');
});

test('completed activities remain separate until every Routine Group member is complete',()=>{
  const markers=codes.completionMarkers({
    entities,groups,assignments,captions,
    completedKeys:['activity:run','activity:badminton']
  });
  assert.deepEqual(markers.map((marker) => marker.code),['C1','S1']);
  assert.deepEqual(markers.map((marker) => marker.target),['entity:activity:run','entity:activity:badminton']);
  assert.match(markers[1].caption,/Badminton - 2hrs/);
});

test('the group code appears only after Calisthenics is confirmed too',()=>{
  const markers=codes.completionMarkers({
    entities,groups,assignments,captions,
    completedKeys:['plan:7','activity:run','activity:badminton']
  });
  assert.equal(markers.length,1);
  assert.equal(markers[0].code,'G1');
  assert.equal(markers[0].target,'group:badminton-session');
  assert.match(markers[0].caption,/Reverse Lunges - 91\/91\/91/);
  assert.match(markers[0].caption,/Badminton - 2hrs/);
});

test('calendar compositor includes only done Calisthenics sessions and detailed captions',async()=>{
  const source=await readFile(new URL('sitewide/js/baseline-routine-coherence-v12.js',root),'utf8');
  assert.match(source,/session\.status \|\| ''\)===\'done\'/);
  assert.match(source,/fitnessPlanCaption\(plan,sessions\)/);
  assert.match(source,/fitnessActivityCaption\(item,entry\)/);
  assert.match(source,/data-caption="\$\{esc\(marker\.caption \|\| marker\.label\)\}"/);
  assert.doesNotMatch(source,/data-caption="\$\{esc\(marker\.caption \|\| marker\.label\)\}" title=/);
});

test('Routine Log Open Plan delegates to canonical selected-plan continuity',async()=>{
  const source=await readFile(new URL('systems/baseline-fitness/js/fitness-multiple-plans.js',root),'utf8');
  assert.match(source,/BASELINE_fitnessPlanSelectionContinuity\?\.openSelectedPlan/);
  assert.match(source,/\/baseline-fitness\/my-routine\/plan/);
  assert.match(source,/REVEAL_KEY/);
});

test('the routine code owner loads before groups and the calendar compositor',async()=>{
  const loader=await readFile(new URL('systems/baseline-fitness/js/fitness-routine-workspace.js',root),'utf8');
  const page=await readFile(new URL('systems/baseline-fitness/baseline-fitness.html',root),'utf8');
  const codesIndex=loader.indexOf('fitness-routine-codes-v1.js');
  const groupsIndex=loader.indexOf('fitness-routine-groups-v2.js');
  const calendarIndex=loader.indexOf('baseline-routine-coherence-v12.js');
  assert.ok(codesIndex>=0 && groupsIndex>codesIndex && calendarIndex>groupsIndex);
  assert.match(page,/fitness-routine-codes-v1\.js\?v=BASELINE_FITNESS_ROUTINE_CODES_20260821_1/);
  assert.match(page,/fitness-routine-workspace\.css\?v=BASELINE_FITNESS_SECTION_DIVIDER_REMOVAL_20260822_1/);
});
