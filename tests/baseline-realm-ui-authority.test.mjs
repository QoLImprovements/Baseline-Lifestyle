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
const hubLoader=fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-v14.js','utf8');
const realmEntry=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js','utf8');
const explorationCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/exploration/css/exploration-jrpg.css','utf8');
const tacticalCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/tactical-operations/css/tactical-operations.css','utf8');
const calorieCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/calorie-escape/css/calorie-escape.css','utf8');

test('Games Hub CSS does not own Realm presentation',()=>{
  assert.doesNotMatch(hubCss,/\.realm-command-banner|\.realm-location-button|\.realm-drawer|\.realm-top-strip|#ninjaPanel #realmSceneFrame|\.ninja-scene|\.ninja-hit-flash/);
});

test('canonical mobile layout loads last and is the sole mobile viewport geometry owner',()=>{
  const shellIndex=html.indexOf('/shared/css/realm-shell.css?');
  const basecampIndex=html.indexOf('/basecamp/css/basecamp.css?');
  const ninjaIndex=html.indexOf('/ninja-training/css/ninja-training.css?');
  const mobileIndex=html.indexOf('/shared/css/realm-mobile.css?');
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

test('Realm banner keeps persistent and contextual actions in one compact row',()=>{
  const nav=html.match(/<nav class="realm-utility"[\s\S]*?<\/nav>/)?.[0]||'';
  for(const id of ['realmInventoryBtn','realmSettingsBtn','realmFullscreenBtn','realmBasecampBtn','realmMenuBtn']) assert.match(nav,new RegExp(`id="${id}"`));
  assert.match(nav,/class="realm-fab realm-home-action"[^>]*id="realmBasecampBtn"[^>]* hidden aria-hidden="true"/);
  assert.match(nav,/class="realm-fab realm-context-action"[^>]*id="realmMenuBtn"/);
  assert.match(shellCss,/Contextual navigation\/management now lives inside the banner's action row/);
  assert.match(shellCss,/\.realm-command-banner \.realm-fab__icon\{display:none!important\}/);
});

test('runtime UI does not inject a competing stylesheet',()=>{
  assert.match(runtimeUi,/bindInventory\(inventoryService\)/);
  assert.match(runtimeUi,/realm-inventory-overlay/);
  assert.doesNotMatch(runtimeUi,/STYLE_PATH|ensureStyles\(|realm-integration\.css/);
});

test('Workshop and Cooking enter real room scenes rather than the management drawer',()=>{
  assert.match(html,/id="realmWorkshopScreen"/);
  assert.match(html,/id="realmCampWorkshopBtn"[^>]*data-realm-view="workshop"[^>]*data-workshop-category="blacksmith"/);
  assert.match(html,/id="realmCampCookingBtn"[^>]*data-realm-view="workshop"[^>]*data-workshop-category="cooking"/);
  assert.doesNotMatch(html,/data-realm-open-tab="workshop"/);
  assert.match(inputBindings,/realm:input:realm-view'[\s\S]*?category[\s\S]*?navigate\(detail\.view/);
  assert.doesNotMatch(inputBindings,/detail\.tab === 'workshop'/);
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

test('persistent HUD uses the Exploration wood banner composition',()=>{
  assert.match(shellCss,/Shared Realm HUD\. Exploration's Stage banner is the composition reference/);
  assert.match(shellCss,/\.realm-command-banner\{[\s\S]*?background:var\(--realm-wood-face\)!important/);
  assert.doesNotMatch(shellCss,/\.realm-command-banner\{[^}]*background:var\(--realm-parchment-face\)/);
  assert.match(shellCss,/grid-template-columns:minmax\(220px,1fr\) auto auto!important/);
  assert.match(shellCss,/\.realm-fab\{[\s\S]*?min-height:38px!important[\s\S]*?display:inline-flex!important/);
});

test('Exploration reference chrome has one shared visual authority',()=>{
  assert.match(shellCss,/Exploration reference treatment, owned by the shared Realm shell/);
  assert.match(shellCss,/:is\(\.ce-header,\.tactical-header\)/);
  assert.match(shellCss,/\.ce-progress-card,\.ce-panel,\.ce-start-dock/);
  assert.doesNotMatch(explorationCss,/Realm cabin theming for Exploration is owned here/);
  assert.doesNotMatch(tacticalCss,/background:var\(--realm-parchment-face\)/);
  assert.doesNotMatch(calorieCss,/background:var\(--realm-parchment-face\)/);
  assert.doesNotMatch(tacticalCss,/^\.is-tactical-operations \{/m);
  for(const selector of ['workshop-room-header','workshop-workbench','workshop-detail']){
    const block=workshopCss.match(new RegExp('\\.'+selector+'\\{[^}]*\\}'))?.[0]||'';
    assert.ok(block, selector+' block is present');
    assert.doesNotMatch(block,/background\s*:/);
    assert.doesNotMatch(block,/box-shadow\s*:/);
  }
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


test('Realm loader reuses the one canonical module and waits for its initial scene',()=>{
  assert.match(html,/realm-entry\.js\?v=REALM_EXPLORATION_CHROME_20261019_1/);
  assert.match(html,/baseline-games-hub\.js\?v=REALM_EXPLORATION_CHROME_20261019_1/);
  assert.match(hubLoader,/const REALM_BUILD='REALM_EXPLORATION_CHROME_20261019_1'/);
  assert.match(hubLoader,/const existing=window\.BaselineRealmHost;[\s\S]*?if\(real\(existing\)\) return existing;/);
  assert.match(hubLoader,/whenSceneReady/);
  assert.doesNotMatch(hubLoader,/ninja-training-final-authority\.css|REALM_CSS/);
  assert.match(realmEntry,/let sceneReady = Promise\.resolve\(null\)/);
  assert.match(realmEntry,/sceneReady = sceneRouter\.navigate\(initialScene/);
  assert.match(realmEntry,/whenSceneReady: \(\) => sceneReady/);
});


test('management-tab controls no longer double as Workshop scene navigation',()=>{
  assert.doesNotMatch(hubLoader,/if\(tab==='workshop'\)/);
  assert.match(hubLoader,/if\(control\.hasAttribute\('data-realm-view'\)\)[\s\S]*?data-workshop-category[\s\S]*?sceneRouter\.navigate\(scene,category\?\{category\}:undefined\)/);
  assert.match(realmEntry,/realm-input-bindings\.js\?v=REALM_EXPLORATION_CHROME_20261019_1/);
});
