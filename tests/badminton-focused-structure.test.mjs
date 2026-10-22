import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { GAMES, TIERS, ZONES, ZONE_COORDS } from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-config.js';
import { choicePools, purposes, pickBadmintonScenario } from '../systems/baseline-recreation/games/badminton-focused/js/badminton-focused-scenarios.js';

const runtime=fs.readFileSync(new URL('../systems/baseline-recreation/games/badminton-focused/js/badminton-focused.js',import.meta.url),'utf8');

test('Badminton configuration exposes one stable identity for all 15 games',()=>{
  assert.equal(GAMES.length,15);
  assert.equal(new Set(GAMES.map(game=>game.id)).size,15);
  assert.deepEqual(TIERS.map(tier=>tier.id),[1,2,3]);
  assert.equal(ZONES.length,6);
  for(const zone of ZONES){
    assert.ok(Array.isArray(ZONE_COORDS[zone]),zone+' must have coordinates');
    assert.equal(ZONE_COORDS[zone].length,2);
  }
});

test('Badminton runtime imports stable configuration instead of redeclaring it',()=>{
  assert.match(runtime,/import \{ GAMES, TIERS, ZONES, ZONE_COORDS \} from '\.\/badminton-focused-config\.js'/);
  assert.doesNotMatch(runtime,/const GAMES=Object\.freeze/);
  assert.doesNotMatch(runtime,/const TIERS=Object\.freeze/);
});

test('Badminton Auto-Next advances after timed failures',()=>{
  const pressure=runtime.slice(runtime.indexOf('function pressureTimeout'),runtime.indexOf('function renderShuttleFirst'));
  const wait=runtime.slice(runtime.indexOf('function startWaitContact'),runtime.indexOf('function renderFourCorner'));
  const tempo=runtime.slice(runtime.indexOf('function startTempo'),runtime.indexOf('function renderPurpose'));

  assert.match(pressure,/scheduleAuto\(\(\)=>newRound\(\),2100\)/);
  assert.match(wait,/Late reaction[\s\S]*scheduleAuto\(\(\)=>newRound\(\),2200\)/);
  assert.match(tempo,/Late contact response[\s\S]*scheduleAuto\(\(\)=>newRound\(\),2100\)/);
});


test('Badminton scenario banks preserve valid answer structures',()=>{
  for(const [gameId,pool] of Object.entries(choicePools)){
    assert.ok(Array.isArray(pool)&&pool.length>0,gameId+' must have scenarios');
    for(const scenario of pool){
      assert.equal(typeof scenario.prompt,'string',gameId+' scenario must have a prompt');
      assert.equal(typeof scenario.correct,'string',gameId+' scenario must have a correct answer');
      assert.ok(Array.isArray(scenario.options),gameId+' scenario must have options');
      assert.ok(scenario.options.includes(scenario.correct),gameId+' correct answer must be selectable');
      assert.equal(typeof scenario.explanation,'string',gameId+' scenario must explain the answer');
    }
  }

  assert.ok(Array.isArray(purposes)&&purposes.length>0);
  for(const scenario of purposes){
    assert.ok(scenario.purposeOptions.includes(scenario.correctPurpose),'correct tactical purpose must be selectable');
    const shot=scenario.shots[scenario.correctPurpose];
    assert.ok(shot,'correct tactical purpose must have a shot stage');
    assert.ok(shot.options.includes(shot.correct),'correct shot must be selectable');
  }
});

test('Badminton runtime consumes extracted scenario banks',()=>{
  assert.match(runtime,/import \{ choicePools, purposes, pickBadmintonScenario \} from '\.\/badminton-focused-scenarios\.js'/);
  assert.doesNotMatch(runtime,/const choicePools=/);
  assert.doesNotMatch(runtime,/const purposes=/);
});


test('Badminton runtime delegates distinct responsibilities to owned modules',()=>{
  assert.match(runtime,/from '\.\/badminton-focused-timing\.js'/);
  assert.match(runtime,/from '\.\/badminton-focused-profile\.js'/);
  assert.match(runtime,/from '\.\/badminton-focused-scenes\.js'/);
  assert.doesNotMatch(runtime,/function normaliseBadmintonProfile|function loadBadmintonProfile|function persistBadmintonProfile/);
  assert.doesNotMatch(runtime,/function courtSvg|function tacticalScene|function racketScene|function contactCueScene/);
});

test('Badminton runtime keeps scoring mutations out of the UI controller',()=>{
  assert.match(runtime,/recordBadmintonResult\(profile,ui\.selected,correct,extra\)/);
  assert.doesNotMatch(runtime,/s\.xp\+=correct\?14:5/);
  assert.doesNotMatch(runtime,/profile\.bank\+=correct\?2:0/);
});


test('Badminton scenario rotation avoids recently used scenarios when alternatives exist',()=>{
  const profile={recent:{'read-racket':[0]}};
  const pool=choicePools['read-racket'].slice(0,3);
  const picked=pickBadmintonScenario(profile,'read-racket',pool,()=>0);

  assert.notDeepEqual(picked,pool[0]);
  assert.equal(profile.recent['read-racket'][0],1);
});

test('Badminton runtime delegates scenario history and Realm-link rules',()=>{
  assert.match(runtime,/pickBadmintonScenario\(profile,id,pool\)/);
  assert.match(runtime,/buildBadmintonRealmContribution\(profile,GAMES\)/);
});


test('Badminton controller delegates generic markup to the UI authority',()=>{
  assert.match(runtime,/from '\.\/badminton-focused-ui\.js'/);
  assert.doesNotMatch(runtime,/function iconSvg|function selectorHtml/);
  assert.doesNotMatch(runtime,/function choiceButtons|function feedbackHtml|function nextButton/);
  assert.doesNotMatch(runtime,/const ART_URL=/);
});


test('Badminton leaves Recreation overview-row rendering to the core authority',()=>{
  assert.doesNotMatch(runtime,/overviewHtml|ensureOverviewEntry|installObserver|MutationObserver|listObserver|overviewSyncQueued/);
});


test('Badminton controller does not intercept the Recreation overview opener',()=>{
  const clickHandler=runtime.slice(runtime.indexOf('function handleClick'),runtime.indexOf('function handleKey'));
  assert.doesNotMatch(clickHandler,/data-open-badminton-focused/);
  assert.match(clickHandler,/data-close-badminton-focused/);
  assert.match(runtime,/document\.querySelector\('\[data-open-badminton-focused\]'\)\?\.focus/);
});
