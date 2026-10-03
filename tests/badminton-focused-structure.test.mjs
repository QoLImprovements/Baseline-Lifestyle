import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import { GAMES, TIERS, ZONES, ZONE_COORDS } from '../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused-config.js';

const runtime=fs.readFileSync(new URL('../systems/baseline-games-hub/games/badminton-focused/js/badminton-focused.js',import.meta.url),'utf8');

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
