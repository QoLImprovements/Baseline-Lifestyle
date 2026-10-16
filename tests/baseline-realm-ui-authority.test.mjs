import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html = fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html','utf8');
const hubCss = fs.readFileSync('systems/baseline-games-hub/css/baseline-games-hub.css','utf8');
const woodCss = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/css/realm-wood-authority.css','utf8');
const basecampCss = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/basecamp/css/basecamp.css','utf8');
const shellCss = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/css/realm-stage-1-shell.css','utf8');
const workshopCss = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/css/workshop.css','utf8');
const workshopScene = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/js/workshop-scene.js','utf8');
const workshopUi = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/workshop/js/workshop-ui.js','utf8');
const runtimeUi = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-runtime-ui.js','utf8');
const inputBindings = fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-input-bindings.js','utf8');

test('Games Hub CSS no longer owns Realm presentation', () => {
  assert.doesNotMatch(hubCss,/\.realm-command-banner/);
  assert.doesNotMatch(hubCss,/\.realm-location-button/);
  assert.doesNotMatch(hubCss,/\.realm-drawer/);
  assert.doesNotMatch(hubCss,/\.realm-top-strip/);
  assert.doesNotMatch(hubCss,/#ninjaPanel #realmSceneFrame/);
  assert.doesNotMatch(hubCss,/\.ninja-scene/);
  assert.doesNotMatch(hubCss,/\.ninja-hit-flash/);
  assert.doesNotMatch(hubCss,/EDIT_VERSION_20260619_REALM_CABIN_SHURIKEN/);
});

test('Basecamp landmarks have one visual owner', () => {
  assert.match(basecampCss,/#realmBasecampScreen \.realm-location-button/);
  assert.match(basecampCss,/supporting caption uses the larger outlined area/);
  assert.doesNotMatch(shellCss,/\.realm-location-button/);
  assert.doesNotMatch(woodCss,/Basecamp landmarks keep their rounded hit area/);
});

test('persistent Realm HUD excludes contextual management', () => {
  const nav = html.match(/<nav class="realm-utility"[\s\S]*?<\/nav>/)?.[0] || '';
  assert.match(nav,/id="realmInventoryBtn"/);
  assert.match(nav,/id="realmSettingsBtn"/);
  assert.match(nav,/id="realmFullscreenBtn"/);
  assert.doesNotMatch(nav,/id="realmMenuBtn"/);
  assert.match(html,/class="realm-context-action"[^>]*id="realmMenuBtn"/);
  assert.match(woodCss,/Management is contextual, not part of the persistent HUD/);
});

test('Coins, Inventory and Settings each have one persistent authority', () => {
  assert.equal((html.match(/id="realmCoinsValue"/g) || []).length,1);
  assert.equal((html.match(/id="realmInventoryBtn"/g) || []).length,1);
  assert.equal((html.match(/id="realmSettingsBtn"/g) || []).length,1);
  assert.match(runtimeUi,/bindInventory\(inventoryService\)/);
  assert.match(runtimeUi,/realm-inventory-overlay/);
  assert.doesNotMatch(runtimeUi,/realm-audio-controls/);
});

test('Workshop and Cooking enter real room scenes rather than the management drawer', () => {
  assert.match(html,/id="realmWorkshopScreen"/);
  assert.match(html,/id="realmWorkshopBar"/);
  assert.match(workshopScene,/setView\('workshop'\)/);
  assert.doesNotMatch(workshopScene,/openDrawerTab/);
  assert.match(workshopUi,/getElementById\('realmWorkshopScreen'\)/);
  assert.match(workshopCss,/#realmWorkshopScreen\.realm-workshop-screen/);
  assert.match(workshopUi,/scope === 'cooking'/);
  assert.doesNotMatch(workshopUi,/realmDrawerWorkshop/);
});

test('Workshop crafting requires an active skill interaction', () => {
  assert.match(workshopUi,/data-workshop-start/);
  assert.match(workshopUi,/data-workshop-hit/);
  assert.match(workshopUi,/workshop-timing-needle/);
  assert.match(workshopUi,/Exceptional/);
  assert.match(workshopUi,/Excellent/);
  assert.match(workshopUi,/Fine/);
  assert.match(workshopUi,/Standard/);
  assert.match(workshopCss,/@keyframes workshopTimingSweep/);
});

test('Workshop is isolated from combat and management hotkeys', () => {
  assert.match(inputBindings,/runtime\.getView\(\) !== 'workshop'/);
  assert.match(inputBindings,/runtime\.getView\(\) === 'training'\) runtime\.strike/);
  assert.doesNotMatch(inputBindings,/bindKeyboard\('realm-menu', \['m', 'escape'\]/);
});

test('Cooking copy no longer describes a generic Workshop panel', () => {
  assert.doesNotMatch(html,/Food and effects/);
  assert.match(html,/Prepare meals and route support/);
});
