import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html=fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html','utf8');
const hubCss=fs.readFileSync('systems/baseline-games-hub/css/baseline-games-hub.css','utf8');
const shellCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/css/realm-shell.css','utf8');
const mobileCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/css/realm-mobile.css','utf8');
const basecampCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/basecamp/css/basecamp.css','utf8');
const workshopCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/css/workshop.css','utf8');
const workshopScene=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/js/workshop-scene.js','utf8');
const workshopUi=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/js/workshop-ui.js','utf8');
const runtimeUi=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-runtime-ui.js','utf8');
const lazyScenes=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-lazy-scenes.js','utf8');
const inputBindings=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-input-bindings.js','utf8');
const ninjaRuntime=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/ninja-training/js/ninja-training-runtime.js','utf8');

test('Games Hub CSS does not own Realm presentation',()=>{
  assert.doesNotMatch(hubCss,/\.realm-command-banner|\.realm-location-button|\.realm-drawer|\.realm-top-strip|#ninjaPanel #realmSceneFrame|\.ninja-scene|\.ninja-hit-flash/);
});

test('canonical mobile layout loads last and is the sole mobile viewport geometry owner',()=>{
  const shellIndex=html.indexOf('realm-shell.css?v=REALM_CANONICAL_COMPLETE_20261018_1');
  const basecampIndex=html.indexOf('basecamp.css?v=REALM_CANONICAL_COMPLETE_20261018_1');
  const ninjaIndex=html.indexOf('ninja-training.css?v=REALM_CANONICAL_COMPLETE_20261018_1');
  const mobileIndex=html.indexOf('realm-mobile.css?v=REALM_CANONICAL_COMPLETE_20261018_1');
  assert.ok(shellIndex>=0&&basecampIndex>shellIndex&&ninjaIndex>basecampIndex&&mobileIndex>ninjaIndex);
  assert.match(mobileCss,/only file allowed to own Realm mobile viewport geometry/);
  assert.match(mobileCss,/html\[data-baseline-realm-mobile-active="true"\]/);
  assert.doesNotMatch(mobileCss,/^\s*html,\s*$/m);
  assert.match(mobileCss,/grid-template-columns:minmax\(0,1fr\) auto minmax\(0,1fr\)!important/);
});

test('Basecamp landmarks have one visual owner and canonical static markup',()=>{
  assert.match(basecampCss,/#realmBasecampScreen \.realm-location-button/);
  assert.doesNotMatch(shellCss,/\.realm-location-button/);
  assert.match(html,/id="realmBasecampScreen" role="navigation" aria-label="Baseline Realm destinations"/);
  assert.equal((html.match(/data-basecamp-landmark=/g)||[]).length,10);
});

test('Basecamp is home and B only returns home',()=>{
  assert.match(inputBindings,/realm:input:realm-basecamp'[\s\S]*?navigate\('basecamp'\)/);
  assert.doesNotMatch(inputBindings,/realm:input:realm-basecamp'[^\n]*ninja-training/);
  assert.match(ninjaRuntime,/basecampBtn\.hidden = atBasecamp/);
});

test('persistent Realm HUD contains only persistent utilities',()=>{
  const nav=html.match(/<nav class="realm-utility"[\s\S]*?<\/nav>/)?.[0]||'';
  for(const id of ['realmInventoryBtn','realmSettingsBtn','realmFullscreenBtn']) assert.match(nav,new RegExp(`id="${id}"`));
  assert.doesNotMatch(nav,/realmBasecampBtn|realmMenuBtn/);
  assert.match(html,/class="realm-home-action"[^>]*id="realmBasecampBtn"[^>]* hidden aria-hidden="true"/);
  assert.match(html,/class="realm-context-action"[^>]*id="realmMenuBtn"/);
  assert.match(shellCss,/Navigation and management actions are contextual, not persistent HUD controls/);
});

test('runtime UI does not inject a competing stylesheet',()=>{
  assert.match(runtimeUi,/bindInventory\(inventoryService\)/);
  assert.match(runtimeUi,/realm-inventory-overlay/);
  assert.doesNotMatch(runtimeUi,/STYLE_PATH|ensureStyles\(|realm-integration\.css/);
});

test('Workshop and Cooking enter real room scenes rather than the management drawer',()=>{
  assert.match(html,/id="realmWorkshopScreen"/);
  assert.match(workshopScene,/setView\('workshop'\)/);
  assert.doesNotMatch(workshopScene,/openDrawerTab/);
  assert.match(workshopUi,/getElementById\('realmWorkshopScreen'\)/);
  assert.match(workshopCss,/#realmWorkshopScreen\.realm-workshop-screen/);
  assert.match(workshopUi,/scope === 'cooking'/);
});

test('Workshop stations retain distinct active skill interactions',()=>{
  assert.match(workshopUi,/data-workshop-start/);
  assert.match(workshopUi,/data-workshop-hit/);
  assert.match(workshopUi,/workshop-timing-needle/);
  assert.match(workshopUi,/CHALLENGE_PROFILES/);
  for(const station of ['blacksmith','armourer','tailoring','alchemy','cooking','tools']) assert.match(workshopUi,new RegExp(station));
  for(const motion of ['forge','align','stitch','reaction','heat','fit']) {
    assert.match(workshopUi,new RegExp("motion: '" + motion + "'"));
    assert.match(workshopCss,new RegExp('workshopTiming' + motion[0].toUpperCase() + motion.slice(1)));
  }
  assert.match(workshopUi,/targets: \[36, 64, 48\]/);
  assert.match(workshopUi,/combinedChallengeQuality/);
  for(const grade of ['Exceptional','Excellent','Fine','Standard']) assert.match(workshopUi,new RegExp(grade));
});

test('Realm starts in one coherent Basecamp state before JavaScript settles',()=>{
  assert.match(html,/class="[^"]*is-basecamp-view[^"]*"[^>]*id="realmSceneFrame"[^>]*data-realm-view="basecamp"/);
  assert.match(html,/id="ninjaScene" hidden aria-hidden="true"/);
  assert.match(html,/id="realmTrainingBar" hidden/);
  assert.match(html,/id="realmBasecampBar"(?![^>]* hidden)/);
  assert.match(html,/id="realmTrainingHud" hidden aria-hidden="true"/);
  assert.match(html,/id="realmBasecampScreen"[^>]*aria-hidden="false"/);
});

test('one runtime authority controls persistent internal Realm surfaces',()=>{
  assert.match(ninjaRuntime,/function setRealmSurfaceState\(element, active\)/);
  assert.match(ninjaRuntime,/setRealmSurfaceState\(ninjaScene, realmView === 'training'\)/);
  assert.match(ninjaRuntime,/setRealmSurfaceState\(basecamp, realmView === 'basecamp'\)/);
  assert.match(ninjaRuntime,/setRealmSurfaceState\(workshop, realmView === 'workshop'\)/);
  assert.match(ninjaRuntime,/setRealmSurfaceState\(exploration, realmView === 'exploration'\)/);
  assert.doesNotMatch(lazyScenes,/setHidden\([^\n]*,false\)/);
});

test('persistent HUD is one full-width visual banner',()=>{
  assert.match(shellCss,/Shared Realm HUD: one continuous full-width banner/);
  assert.match(shellCss,/\.realm-command-banner\{[\s\S]*?background:var\(--realm-parchment-face\)!important/);
  assert.match(shellCss,/grid-template-columns:minmax\(0,1fr\) auto minmax\(0,1fr\)!important/);
});


test('Basecamp landmarks stay contained and persistent captions remain readable',()=>{
  assert.match(basecampCss,/center center\/94% 94% no-repeat/);
  assert.match(basecampCss,/\.realm-location-caption\{[\s\S]*?opacity:1!important/);
  assert.match(basecampCss,/data-basecamp-landmark="exploration"\]\{left:88\.7%/);
  assert.match(basecampCss,/data-basecamp-landmark="calorie-escape"\]\{left:10\.2%/);
});

test('Basecamp service drawer and Workshop room sit above the active scene',()=>{
  assert.match(shellCss,/\.realm-drawer\{[\s\S]*?position:absolute!important[\s\S]*?z-index:70!important/);
  assert.match(workshopCss,/#realmWorkshopScreen\.realm-workshop-screen\{[\s\S]*?z-index:20!important/);
});
