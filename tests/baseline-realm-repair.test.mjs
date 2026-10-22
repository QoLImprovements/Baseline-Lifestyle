import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=relativePath=>readFile(path.join(root,relativePath),'utf8');
const realm='systems/baseline-recreation/games/baseline-realm';

test('the Recreation yields to the canonical Realm presentation block',async()=>{
  const hub=await read('systems/baseline-recreation/baseline-recreation.html');
  const themeIndex=hub.indexOf('data-recreation-theme="true"');
  const alignmentIndex=hub.indexOf('data-baseline-gradient-alignment="true"');
  const shellIndex=hub.indexOf('data-realm-shell="true"');
  const mobileIndex=hub.indexOf('data-realm-mobile="true"');
  assert.ok(themeIndex>=0&&alignmentIndex>themeIndex&&shellIndex>alignmentIndex&&mobileIndex>shellIndex);
  assert.match(hub,/realm-entry\.js\?v=REALM_CANONICAL_COMPLETE_20261018_1/);
});

test('Basecamp is static canonical markup rather than runtime reconstruction',async()=>{
  const [hub,entry,runtime,basecamp,shell]=await Promise.all([
    read('systems/baseline-recreation/baseline-recreation.html'),
    read(`${realm}/shared/js/realm-entry.js`),
    read(`${realm}/ninja-training/js/ninja-training-runtime.js`),
    read(`${realm}/basecamp/css/basecamp.css`),
    read(`${realm}/shared/css/realm-shell.css`)
  ]);
  assert.match(entry,/sceneRouter\.navigate\('basecamp',\s*\{ initial: true \}\)/);
  assert.match(runtime,/let realmView = 'basecamp'/);
  for(const id of ['realmCampNinjaBtn','realmCampExplorationBtn','realmCampWorkshopBtn','realmCampCalorieEscapeBtn','realmCampTacticalBtn','realmCampStorageBtn','realmCampMerchantBtn','realmCampRestBtn','realmCampCookingBtn','realmCampPartyBtn']){
    assert.match(hub,new RegExp(`id="${id}"`),id);
  }
  assert.doesNotMatch(entry,/realm-stage-1-shell\.js/);
  assert.doesNotMatch(entry,/ensureBasecampLandmarks|innerHTML=BASECAMP_LANDMARKS/);
  assert.match(basecamp,/\.realm-location-caption\{[\s\S]*?opacity:0!important;[\s\S]*?visibility:hidden!important/);
  assert.doesNotMatch(shell,/\.realm-location-button/);
});

test('focused Basecamp services remain purposeful and Basecamp-owned',async()=>{
  const [controller,basecamp]=await Promise.all([
    read(`${realm}/basecamp/js/basecamp-controller.js`),
    read(`${realm}/basecamp/css/basecamp.css`)
  ]);
  for(const service of ['storage','merchant','campfire-rest','party-preparation']) assert.ok(controller.includes(`'${service}'`),service);
  assert.match(controller,/data-basecamp-service/);
  assert.doesNotMatch(controller,/basecampService === 'workshop'/);
  assert.match(basecamp,/\.realm-drawer\[data-basecamp-service\]/);
});

test('Exploration begins with Rowan and provides a safe route back to camp',async()=>{
  const [data,engine,game]=await Promise.all([
    read(`${realm}/exploration/data/meridian-grove.js`),
    read(`${realm}/exploration/js/jrpg-engine.js`),
    read(`${realm}/exploration/js/exploration-jrpg.js`)
  ]);
  assert.match(data,/INITIAL_PARTY_IDS = Object\.freeze\(\['rowan'\]\)/);
  assert.match(engine,/INITIAL_PARTY_IDS\.map/);
  assert.match(game,/data-jrpg-action="return-basecamp">Return to Basecamp/);
  assert.match(game,/data-jrpg-action="abandon">Abandon Route/);
});

test('Realm audio stops outside the game and Ninja cooldown remains readable',async()=>{
  const [entry,audio,runtime,ninja,ninjaCss]=await Promise.all([
    read(`${realm}/shared/js/realm-entry.js`),
    read(`${realm}/shared/js/realm-audio-service.js`),
    read(`${realm}/ninja-training/js/ninja-training-runtime.js`),
    read(`${realm}/ninja-training/js/ninja-training-scene.js`),
    read(`${realm}/ninja-training/css/ninja-training.css`)
  ]);
  assert.match(entry,/if \(!active\) audioService\?\.pauseAll\?\.\(\)/);
  assert.match(audio,/pauseAll\(\)[\s\S]*?resumeAll\(\)/);
  assert.match(runtime,/--cooldown-progress/);
  assert.match(ninja,/classList\.add\('is-entering'\)/);
  assert.match(ninjaCss,/#ninjaShurikenBtn:disabled\{[\s\S]*?opacity:1!important/);
  assert.match(ninjaCss,/inset:0 0 0 var\(--cooldown-progress,0%\)!important/);
});
