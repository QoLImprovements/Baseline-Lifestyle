import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {
  createInitialState, createMissionDefinition, serialiseState, movementRange, attackRange, hasLineOfSight,
  moveUnit, basicAttack, useAreaAbility, endTurn, checkVictory, nextMissionId, isBlocked,
  tacticalStateSnapshot, applyTacticalAction, simulateTacticalActions,
  MISSION_TYPES, MISSION_ORDER, MISSION_DEFINITIONS
} from '../systems/baseline-recreation/games/baseline-realm/tactical-operations/js/tactical-operations-engine.mjs';

const tacticalSceneSource=fs.readFileSync('systems/baseline-recreation/games/baseline-realm/tactical-operations/js/tactical-operations-scene.js','utf8');

test('Tactical Operations always exposes a direct Basecamp escape path',()=>{
  assert.match(tacticalSceneSource,/data-action="exit">Return to Basecamp/);
  assert.match(tacticalSceneSource,/if\(key==='b'\)\{event\.preventDefault\(\);void handleCommand\('exit'\);return;\}/);
  assert.match(tacticalSceneSource,/B returns to Basecamp/);
});

test('tactical campaign implements every advertised mission family', () => {
  assert.equal(MISSION_ORDER.length, 7);
  assert.deepEqual(MISSION_ORDER.map((id) => MISSION_DEFINITIONS[id].type).sort(), [...MISSION_TYPES].sort());
  assert.deepEqual(MISSION_TYPES, ['elimination','defence','escape','rescue','capture','survival','boss']);
  for (const id of MISSION_ORDER) {
    const mission = createMissionDefinition(id);
    assert.equal(mission.id, id);
    assert.ok(mission.objective.length > 20);
    assert.ok(Number(mission.reward.coins) > 0);
    const occupied = new Set();
    for (const deployment of [...mission.deployments.player, ...mission.deployments.enemy]) {
      assert.equal(isBlocked(mission, deployment.x, deployment.y), false, `${id}: ${deployment.id} starts on a blocked tile`);
      const key = `${deployment.x},${deployment.y}`;
      assert.equal(occupied.has(key), false, `${id}: duplicate deployment at ${key}`);
      occupied.add(key);
    }
  }
});

test('initial mission deploys four player units with shared Workshop supplies', () => {
  const state = createInitialState();
  assert.equal(state.mission.type, 'capture');
  assert.equal(state.units.filter((unit) => unit.faction === 'player').length, 4);
  assert.ok(state.units.filter((unit) => unit.faction === 'enemy').length >= 3);
  assert.equal(state.workshop.consumables.find((item) => item.id === 'tonic').amount, 3);
  assert.deepEqual(state.unlockedMissions, ['watchtower-break']);
});

test('movement respects elevation, blocked tiles and unit move range', () => {
  const state = createInitialState();
  const tiles = movementRange(state, 'mara');
  assert.ok(tiles.length > 0);
  assert.ok(!tiles.some((tile) => tile.x === 4 && tile.y === 1));
  assert.ok(tiles.some((tile) => tile.x === 2 && tile.y === 4));
});

test('line of sight and attack ranges are derived from map geometry', () => {
  const state = createInitialState();
  const mara = state.units.find((unit) => unit.id === 'mara');
  assert.equal(hasLineOfSight(state, mara, { x: 2, y: 5 }), false);
  assert.ok(attackRange(state, 'mara').every((tile) => Math.abs(tile.x - mara.x) + Math.abs(tile.y - mara.y) <= 3));
});

test('combat grants experience and capture completes the opening mission', () => {
  const state = createInitialState();
  const sera = state.units.find((unit) => unit.id === 'sera');
  const enemy = state.units.find((unit) => unit.faction === 'enemy');
  enemy.x = sera.x + 1;
  enemy.y = sera.y;
  enemy.hp = 8;
  assert.equal(basicAttack(state, 'sera', enemy.id), true);
  assert.ok(sera.xp > 20);
  state.activeUnitId = 'mara';
  state.units.find((unit) => unit.id === 'mara').x = 5;
  state.units.find((unit) => unit.id === 'mara').y = 1;
  assert.equal(moveUnit(state, 'mara', 6, 1), true);
  assert.equal(state.phase, 'victory');
  assert.ok(state.completedMissions.includes('watchtower-break'));
  assert.ok(state.unlockedMissions.includes('cinderline-sweep'));
});

test('area abilities create status zones and endTurn advances the timeline', () => {
  const state = createInitialState();
  state.activeUnitId = 'orin';
  const orin = state.units.find((unit) => unit.id === 'orin');
  orin.x = 3;
  orin.y = 2;
  const beforeZones = state.mission.zones.length;
  assert.equal(useAreaAbility(state, 'orin', 5, 2), true);
  assert.ok(state.mission.zones.length > beforeZones);
  const before = state.activeUnitId;
  endTurn(state);
  assert.notEqual(state.activeUnitId, before);
});

test('campaign unlocks all seven missions sequentially and serialises completion', () => {
  let saved = null;
  for (let index = 0; index < MISSION_ORDER.length; index += 1) {
    const missionId = MISSION_ORDER[index];
    const state = createInitialState({ saved, missionId });
    assert.equal(state.missionId, missionId);
    if (['capture', 'escape', 'rescue'].includes(state.mission.type)) {
      const player = state.units.find((unit) => unit.faction === 'player');
      player.x = state.mission.captureTile.x;
      player.y = state.mission.captureTile.y;
    } else if (state.mission.type === 'elimination') {
      state.units.filter((unit) => unit.faction === 'enemy').forEach((unit) => { unit.hp = 0; });
    } else if (['defence', 'survival'].includes(state.mission.type)) {
      state.round = state.mission.targetRounds + 1;
    } else if (state.mission.type === 'boss') {
      state.units.find((unit) => unit.id === state.mission.bossId).hp = 0;
    }
    assert.equal(checkVictory(state), true, missionId);
    assert.equal(state.phase, 'victory');
    assert.ok(state.completedMissions.includes(missionId));
    const expectedNext = MISSION_ORDER[index + 1] || null;
    assert.equal(nextMissionId(state), expectedNext);
    if (expectedNext) assert.ok(state.unlockedMissions.includes(expectedNext));
    saved = serialiseState(state);
  }
  assert.equal(saved.campaignComplete, true);
  assert.deepEqual(saved.completedMissions, [...MISSION_ORDER]);
});


test('scripted Tactical Operations simulations are deterministic and UI-independent',()=>{
  const actions=[
    {type:'end-turn'},
    {type:'end-turn'},
    {type:'end-turn'}
  ];
  const first=simulateTacticalActions({missionId:'watchtower-break',actions});
  const second=simulateTacticalActions({missionId:'watchtower-break',actions});

  assert.deepEqual(first.snapshot,second.snapshot);
  assert.deepEqual(first.trace,second.trace);
  assert.deepEqual(first.results,second.results);
  assert.equal(first.trace.length,actions.length+1);
});

test('simulation snapshots exclude logs and wall-clock save metadata',()=>{
  const state=createInitialState();
  const snapshot=tacticalStateSnapshot(state);
  assert.equal(Object.hasOwn(snapshot,'log'),false);
  assert.equal(Object.hasOwn(snapshot,'completedAt'),false);
  assert.equal(snapshot.missionId,state.missionId);
  assert.equal(snapshot.units.length,state.units.length);
});

test('Tactical action dispatcher rejects unknown actions without mutating state',()=>{
  const state=createInitialState();
  const before=tacticalStateSnapshot(state);
  assert.equal(applyTacticalAction(state,{type:'unknown-action'}),false);
  assert.deepEqual(tacticalStateSnapshot(state),before);
});

test('simulation replay composes with deterministic enemy decision helpers',()=>{
  const actions=[{type:'end-turn'},{type:'end-turn'}];
  const first=simulateTacticalActions({missionId:'watchtower-break',actions});
  const second=simulateTacticalActions({missionId:'watchtower-break',actions});
  assert.deepEqual(first.trace,second.trace);
  assert.deepEqual(first.results,second.results);
});
