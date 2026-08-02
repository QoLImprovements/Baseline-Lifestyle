import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read = relativePath => readFile(path.join(root,relativePath),'utf8');
const realm = 'systems/baseline-games-hub/games/baseline-realm';

test('the Games Hub shell yields to the wooden Realm authority',async()=>{
  const hub = await read('systems/baseline-games-hub/baseline-games-hub.html');
  const themeIndex = hub.indexOf('data-games-hub-theme="true"');
  const alignmentIndex = hub.indexOf('data-baseline-gradient-alignment="true"');
  const woodIndex = hub.indexOf('data-realm-wood-authority="true"');
  assert.ok(themeIndex >= 0 && alignmentIndex > themeIndex && woodIndex > alignmentIndex);
  assert.match(hub,/realm-entry\.js\?v=REALM_WOOD_AUTHORITY_20260802_1/);
});

test('Baseline Realm opens at Basecamp with unobtrusive accessible landmarks',async()=>{
  const [entry,runtime,shell,wood] = await Promise.all([
    read(`${realm}/shared/js/realm-entry.js`),
    read(`${realm}/ninja-training/js/ninja-training-runtime.js`),
    read(`${realm}/shared/js/realm-stage-1-shell.js`),
    read(`${realm}/shared/css/realm-wood-authority.css`)
  ]);
  assert.match(entry,/sceneRouter\.navigate\('basecamp',\s*\{ initial: true \}\)/);
  assert.match(runtime,/let realmView = 'basecamp'/);
  assert.match(shell,/class="realm-location-caption" aria-hidden="true"/);
  assert.match(wood,/\.realm-location-caption\{[\s\S]*?opacity:0!important;[\s\S]*?visibility:hidden!important/);
  assert.match(wood,/\.realm-location-button:is\(:hover,:focus-visible\) \.realm-location-caption\{[\s\S]*?opacity:1!important/);
});

test('focused Basecamp services are independent, purposeful menus',async()=>{
  const [controller,wood] = await Promise.all([
    read(`${realm}/basecamp/js/basecamp-controller.js`),
    read(`${realm}/shared/css/realm-wood-authority.css`)
  ]);
  for(const service of ['storage','merchant','campfire-rest','party-preparation']){
    assert.ok(controller.includes(`'${service}'`),service);
  }
  assert.match(controller,/data-basecamp-service/);
  assert.match(wood,/\.realm-drawer\[data-basecamp-service\][\s\S]*?\.realm-tab-row[\s\S]*?display:none!important/);
});

test('Exploration begins with Rowan and provides a safe route back to camp',async()=>{
  const [data,engine,game] = await Promise.all([
    read(`${realm}/exploration/data/meridian-grove.js`),
    read(`${realm}/exploration/js/jrpg-engine.js`),
    read(`${realm}/exploration/js/exploration-jrpg.js`)
  ]);
  assert.match(data,/INITIAL_PARTY_IDS = Object\.freeze\(\['rowan'\]\)/);
  assert.match(engine,/INITIAL_PARTY_IDS\.map/);
  assert.match(game,/data-jrpg-action="return-basecamp">Return to Basecamp/);
  assert.match(game,/data-jrpg-action="abandon">Abandon Route/);
  assert.match(game,/leaveExploration\(abandon = false\)[\s\S]*?if \(this\.state\.battle\) return/);
  assert.match(game,/button\.disabled = Boolean\(this\.state\.battle\)/);
});

test('Realm audio stops outside the game and Ninja cooldown remains readable',async()=>{
  const [entry,audio,runtime,ninja,wood] = await Promise.all([
    read(`${realm}/shared/js/realm-entry.js`),
    read(`${realm}/shared/js/realm-audio-service.js`),
    read(`${realm}/ninja-training/js/ninja-training-runtime.js`),
    read(`${realm}/ninja-training/js/ninja-training-scene.js`),
    read(`${realm}/shared/css/realm-wood-authority.css`)
  ]);
  assert.match(entry,/if \(!active\) audioService\?\.pauseAll\?\.\(\)/);
  assert.match(audio,/pauseAll\(\)[\s\S]*?resumeAll\(\)/);
  assert.match(runtime,/--cooldown-progress/);
  assert.match(ninja,/classList\.add\('is-entering'\)/);
  assert.match(wood,/#ninjaShurikenBtn:disabled\{[\s\S]*?opacity:1!important/);
  assert.match(wood,/inset:0 0 0 var\(--cooldown-progress,0%\)!important/);
  assert.match(wood,/@keyframes ninjaRealmWoodDistant/);
});
