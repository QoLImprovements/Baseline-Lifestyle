import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import {
  createInitialState,
  chooseEnemyTarget,
  chooseEnemyMove,
  enemyDecision
} from '../systems/baseline-games-hub/games/baseline-realm/tactical-operations/js/tactical-operations-engine.mjs';

const hubHtml=fs.readFileSync(new URL('../systems/baseline-games-hub/baseline-games-hub.html',import.meta.url),'utf8');
const core=fs.readFileSync(new URL('../systems/baseline-games-hub/js/baseline-games-hub-core.js',import.meta.url),'utf8');
const makeNumberEngine=fs.readFileSync(new URL('../systems/baseline-games-hub/js/make-number-engine.js',import.meta.url),'utf8');
const realmEntry=fs.readFileSync(new URL('../systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js',import.meta.url),'utf8');
const lazyScenes=fs.readFileSync(new URL('../systems/baseline-games-hub/games/baseline-realm/shared/js/realm-lazy-scenes.js',import.meta.url),'utf8');
const calorieGame=fs.readFileSync(new URL('../systems/baseline-games-hub/games/baseline-realm/calorie-escape/js/calorie-escape-game.js',import.meta.url),'utf8');
const calorieDir=new URL('../systems/baseline-games-hub/games/baseline-realm/calorie-escape/js/',import.meta.url);

test('Detect The Word persists and restores an unresolved active round',()=>{
  assert.match(core,/activeRound:null/);
  assert.match(core,/function persistWordRound\(/);
  assert.match(core,/function restoreSavedWordRound\(/);
  assert.match(core,/restoreSavedCoreRounds\(\)/);
  assert.match(core,/profiles\.detectword\.activeRound = null/);
});

test('Make The Number generation is explicitly seedable and generated-bank fill is deterministic',()=>{
  assert.match(makeNumberEngine,/function makeNumberSeededRandom\(/);
  assert.match(makeNumberEngine,/function seededShuffle\(/);
  assert.match(makeNumberEngine,/function buildMakeNumberPuzzleBank\(/);
  assert.doesNotMatch(makeNumberEngine,/Math\.random/);
  assert.match(core,/roundSeedCounter/);
  assert.match(core,/const seed = nextMake24Seed\(tier\)/);
  assert.match(core,/MAKE_NUMBER_ENGINE\.buildMake24Puzzle\(tier,seed,make24State\)/);
});

test('Realm entry delegates lazy external-scene lifecycle and recovery',()=>{
  assert.match(realmEntry,/from '\.\/realm-lazy-scenes\.js/);
  assert.match(realmEntry,/createRealmLazySceneAuthority\(/);
  assert.doesNotMatch(realmEntry,/function createLazyScene\(/);
  assert.match(lazyScenes,/realm:scene:load-failed/);
  assert.match(lazyScenes,/data-realm-scene-retry/);
  assert.match(lazyScenes,/data-baseline-realm-external-scene/);
});

test('Tactical enemy choices use explicit stable tie-breaks',()=>{
  const state=createInitialState();
  const enemy=state.units.find(unit=>unit.faction==='enemy');
  assert.ok(enemy);
  state.activeUnitId=enemy.id;
  const targetA=chooseEnemyTarget(state,enemy);
  const targetB=chooseEnemyTarget(structuredClone(state),structuredClone(enemy));
  assert.equal(targetA?.id,targetB?.id);

  const decisionA=enemyDecision(state,enemy);
  const cloned=structuredClone(state);
  const enemyClone=cloned.units.find(unit=>unit.id===enemy.id);
  const decisionB=enemyDecision(cloned,enemyClone);
  assert.deepEqual(decisionA,decisionB);

  if(decisionA.action==='move'){
    assert.deepEqual(chooseEnemyMove(state,enemy,targetA),decisionA.move);
  }
});

test('Calorie Escape exposes descriptive module ownership with no opaque aliases',()=>{
  for(const name of ['runtime-loop.js','controls.js','obstacle-renderer.js','game-shell.js','world-renderer.js','ui-methods.js']){
    assert.equal(fs.existsSync(new URL(name,calorieDir)),true,name+' should exist');
  }
  for(const name of ['q.js','x.js','module-b.js','module-c.js','module-d.js','module-e.js','ce-world.js']){
    assert.equal(fs.existsSync(new URL(name,calorieDir)),false,name+' should be retired');
  }
  for(const name of ['world-renderer.js','obstacle-renderer.js','game-shell.js','ui-methods.js','controls.js','runtime-loop.js']){
    assert.match(calorieGame,new RegExp(name.replace('.', '\\.')));
  }
});


test('Games Hub has no artificial first-paint gate and one primary startup authority',()=>{
  const hubCss=fs.readFileSync(new URL('../systems/baseline-games-hub/css/baseline-games-hub.css',import.meta.url),'utf8');
  const loader=fs.readFileSync(new URL('../systems/baseline-games-hub/js/baseline-games-hub-v14.js',import.meta.url),'utf8');

  assert.doesNotMatch(hubHtml, /data-games-document-pending|visibility:hidden!important|baseline-games-first-paint-release|baseline:games-hub:visual-ready|data-games-hub-boot/);
  assert.doesNotMatch(loader, /baseline:games-hub:visual-ready|signalVisualReady|data-games-hub-boot/);
  assert.match(hubHtml, /id="baseline-games-route-state"/);
  assert.match(hubCss, /\.section\{display:none\}\.section\.active\{display:block\}/);
  assert.doesNotMatch(hubCss, /\.section\{display:none;animation:fade/);

  assert.doesNotMatch(core, /seedProfilesForImmediateRender/);
  assert.doesNotMatch(core, /document\.addEventListener\('baseline:auth',\s*loadAllProfiles\)/);
  assert.doesNotMatch(core, /await window\.BASELINE_auth\.refresh\(\)/);
  assert.match(core, /storage\.isAuthenticated\(\)/);
  assert.match(core, /resolveInitialAuth\(\);[\s\S]*await hydrateProfiles\(\);[\s\S]*renderAuthState\(\);[\s\S]*safeRenderAll\(\)/);
  assert.match(core, /window\.BASELINE_auth\.onChange\(function\(next\)/);
  assert.match(core, /if\(nextKey===lastAuthStateKey\) return;/);
  assert.equal(fs.existsSync(new URL('../systems/baseline-games-hub/css/games-page-refresh.css',import.meta.url)),false);
});
