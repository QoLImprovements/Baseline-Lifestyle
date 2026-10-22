import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const realm = path.join(root, 'systems/baseline-recreation/games/baseline-realm/exploration');
const read = (relative) => fs.readFileSync(path.join(realm, relative), 'utf8');

const data = read('data/meridian-grove.js');
const engine = read('js/jrpg-engine.js');
const ui = read('js/exploration-jrpg.js');
const integrity = read('js/exploration-jrpg-state-integrity.js');
const scene = read('js/exploration-scene.js');
const css = read('css/exploration-jrpg.css');
const art = read('art/meridian-grove-sprites.svg');

const engineModule = await import(pathToFileURL(path.join(realm, 'js/jrpg-engine.js')).href);
const dataModule = await import(pathToFileURL(path.join(realm, 'data/meridian-grove.js')).href);

test('Exploration scene mounts the JRPG campaign rather than the legacy progress panel', () => {
  assert.match(scene, /mountMeridianGrove/);
  assert.match(scene, /exploration-jrpg-state-integrity/);
  assert.match(scene, /exploration-jrpg\.css/);
  assert.doesNotMatch(scene, /handleExploration\('advance'\)/);
  assert.match(ui, /root\.innerHTML = this\.shellTemplate\(\)/);
});

test('campaign defines four original characters, a Rowan starting party, and three stages', () => {
  ['Rowan Vale', 'Sable Quill', 'Ilyra Fen', 'Corin Ash'].forEach((name) => assert.match(data, new RegExp(name)));
  assert.match(data, /INITIAL_PARTY_IDS = Object\.freeze\(\['rowan'\]\)/);
  ['Sunlit Verge', 'Rainroot Hollow', 'Crown of Echoes'].forEach((name) => assert.match(data, new RegExp(name)));
  assert.match(data, /Mossbound Custodian/);
  assert.match(data, /The Hollow Hart/);
});

test('authored chunks and route POIs cover the required exploration content', () => {
  assert.match(data, /middles:/);
  ['Treasure', 'Resource node', 'Story event', 'Rest point', 'Elite', 'Stage exit', 'Boss'].forEach((label) => assert.match(data, new RegExp(label)));
  assert.match(engine, /generateStageMap/);
  assert.match(engine, /chooseRandomEncounter/);
  assert.match(engine, /encounterMeter/);
});

test('battle implementation exposes ATB, Active and Wait modes, and all six commands', () => {
  ['Attack', 'Ability', 'Magic', 'Item', 'Defend', 'Escape'].forEach((command) => assert.match(data, new RegExp(`'${command}'`)));
  assert.match(engine, /tickAtb/);
  assert.match(ui, /battleMode === 'wait'/);
  assert.match(ui, /data-battle-mode="active"/);
  assert.match(ui, /data-battle-mode="wait"/);
});

test('battle command layout keeps all six command positions stable for every actor', () => {
  assert.match(ui, /BATTLE_COMMANDS\.map\(\(label\) =>/);
  assert.match(ui, /No ability learned/);
  assert.match(ui, /No magic learned/);
  assert.match(ui, /disabled aria-disabled="true"/);
  assert.doesNotMatch(ui, /const availableCommands = BATTLE_COMMANDS\.filter/);
});

test('battle runtime keeps command DOM stable between ATB ticks and always exposes Basecamp', () => {
  assert.match(ui, /refreshBattleState\(\)/);
  assert.match(ui, /this\.refreshBattleState\(\)/);
  assert.match(ui, /refreshBattleMeter\(card, className, label, value, max\)/);
  assert.doesNotMatch(ui, /actorChanged \|\| readyEnemies\.length \|\| battleResolved/);
  assert.doesNotMatch(ui, /time - this\.lastBattleRender > 85/);
  assert.match(ui, /data-battle-basecamp/);
  assert.match(ui, /returnButton\.disabled = false/);
  assert.match(ui, /if \(this\.state\.battle\) \{\s*this\.returnToBasecampFromBattle\(\);/);
  assert.match(ui, /if \(key === 'b'\)[\s\S]*?if \(this\.state\.battle\) this\.returnToBasecampFromBattle\(\);[\s\S]*?else if \(!this\.modal\) this\.leaveExploration\(false\)/);
  assert.match(ui, /returnToBasecampFromBattle\(\)/);
  assert.match(ui, /finishBattle\(this\.state\)/);
});

test('progression, equipment, status, drops, and save/resume systems are present', () => {
  assert.match(engine, /applyExperience/);
  assert.match(engine, /equipItem/);
  assert.match(engine, /addStatus/);
  assert.match(engine, /rollDrops/);
  assert.match(ui, /BaselineGameStorage\?\.getProfile\?\.\('meridiangrove'\)/);
  assert.match(ui, /BaselineGameStorage\?\.saveProfile\?\.\('meridiangrove',this\.state\)/);
  assert.doesNotMatch(ui, /localStorage|sessionStorage|indexedDB/);
  assert.match(ui, /save\('battle-victory'\)/);
  assert.match(scene, /getInventoryService/);
  assert.match(ui, /inventoryService\.transact/);
  assert.match(integrity, /repairSavedParty/);
  assert.match(integrity, /state\.battle\.victory = Boolean\(state\.battle\.victory\)/);
  assert.match(integrity, /outcome === 'defeat'/);
  ['iron_ore', 'hide', 'silk_thread', 'healing_herb', 'ember_root', 'map_fragment', 'relic_dust'].forEach((sharedId) => assert.match(data, new RegExp(`sharedId: '${sharedId}'`)));
  ['blacksmithing', 'armour', 'tailoring', 'alchemy', 'cooking', 'quests', 'trading'].forEach((discipline) => assert.match(data, new RegExp(`'${discipline}'`)));
});

test('keyboard, touch, and Gamepad API movement are wired into the map', () => {
  assert.match(ui, /arrowup/);
  assert.match(ui, /data-move=/);
  assert.match(ui, /navigator\.getGamepads/);
  assert.match(css, /jrpg-touch-controls/);
});

test('the campaign includes original vector symbols and synthesized music', () => {
  ['hero-rowan', 'hero-sable', 'hero-ilyra', 'hero-corin', 'enemy-custodian', 'enemy-hollow-hart'].forEach((symbol) => assert.match(art, new RegExp(`id="${symbol}"`)));
  assert.match(ui, /class GroveMusic/);
  assert.match(ui, /this\.motif = \[/);
  assert.match(ui, /Original Meridian Grove story/);
});

test('seeded route assembly is deterministic and contains the complete POI vocabulary', () => {
  const maps = dataModule.STAGES.map((_, stageIndex) => engineModule.generateStageMap(stageIndex, 0xC0FFEE));
  assert.deepEqual(maps[0], engineModule.generateStageMap(0, 0xC0FFEE));
  maps.forEach((map) => {
    assert.equal(map.width, 40);
    assert.equal(map.height, 12);
    assert.equal(engineModule.tileAt({ map }, map.start.x, map.start.y).passable, true);
  });
  const symbols = maps.flatMap((map) => map.tiles.flat()).join('');
  ['C', 'R', 'E', 'H', 'L', 'X', 'B'].forEach((symbol) => assert.equal(symbols.includes(symbol), true, `missing POI ${symbol}`));
});

test('map movement advances the visible party and encounter pressure', () => {
  const state = engineModule.createInitialState(12345);
  assert.equal(state.party.length, 1);
  assert.equal(state.party[0]?.id, 'rowan');
  const before = { ...state.player };
  const result = engineModule.movePlayer(state, 1, 0, () => 0.5);
  assert.equal(result.moved, true);
  assert.equal(state.player.x, before.x + 1);
  assert.equal(state.totalSteps, 1);
  assert.ok(state.encounterMeter > 0);
});

test('ATB command execution resolves a battle and applies progression rewards', () => {
  const state = engineModule.createInitialState(67890);
  engineModule.startBattle(state, ['galesprout'], 'random');
  state.battle.enemies[0].hp = 1;
  state.battle.activeActorIndex = 0;
  const action = engineModule.executePartyCommand(state, 0, 'attack', { targetIndex: 0 }, () => 0);
  assert.equal(action.ok, true);
  assert.equal(state.battle.enemies[0].hp, 0);
  const rewards = engineModule.resolveVictory(state, () => 0);
  assert.ok(rewards.xp > 0);
  assert.ok(rewards.coins > 0);
  assert.equal(state.battle.victory, true);
  assert.ok(state.party.every((member) => member.xp > 0 || member.level > 1));
  engineModule.finishBattle(state);
  assert.equal(state.battle, null);
});
