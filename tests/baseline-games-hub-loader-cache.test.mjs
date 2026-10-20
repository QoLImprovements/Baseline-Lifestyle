import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html=fs.readFileSync('systems/baseline-games-hub/baseline-games-hub.html','utf8');
const bootstrap=fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub.js','utf8');
const optional=fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-v14.js','utf8');
const storageUi=fs.readFileSync('systems/baseline-games-hub/js/games-server-storage-ui.js','utf8');
const core=fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-core.js','utf8');
const guard=fs.readFileSync('systems/baseline-games-hub/js/baseline-games-hub-guard.js','utf8');
const realmEntry=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js','utf8');
const realmShell=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/shared/css/realm-shell.css','utf8');
const ninjaCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/ninja-training/css/ninja-training.css','utf8');
const basecampCss=fs.readFileSync('systems/baseline-games-hub/games/baseline-realm/basecamp/css/basecamp.css','utf8');
const hubTheme=fs.readFileSync('systems/baseline-games-hub/css/games-hub-theme.css','utf8');
const rootHtaccess=fs.readFileSync('.htaccess','utf8');
const hubHtaccess=fs.readFileSync('systems/baseline-games-hub/.htaccess','utf8');

test('HTML loads storage authority, core, then normal modules',()=>{
  const guardIndex=html.indexOf('baseline-games-hub-guard.js');
  const coreIndex=html.indexOf('baseline-games-hub-core.js');
  const moduleIndex=html.indexOf('baseline-games-hub.js');
  assert.ok(guardIndex>=0&&coreIndex>guardIndex&&moduleIndex>coreIndex);
});

test('Games Hub first paint is route-owned before optional modules settle',()=>{
  assert.match(html,/id="baseline-games-route-state"/);
  assert.match(html,/setAttribute\("data-initial-section",t\)/);
  assert.doesNotMatch(html,/data-games-hub-boot|baseline:games-hub:visual-ready|visibility:hidden!important/);
  assert.match(core,/BASELINE_GAMES_HUB_INITIAL_RENDER_READY=initialRenderReady/);
  assert.match(optional,/function waitCore\(\)/);
  assert.match(optional,/await Promise\.resolve\(window\.BASELINE_GAMES_HUB_INITIAL_RENDER_READY\)/);
  assert.match(optional,/await Promise\.allSettled\(\[/);
  assert.match(optional,/return loadRealm\(\)\.catch/);
});

test('module entry loads non-blocking storage messaging before optional loaders',()=>{
  const storageIndex=bootstrap.indexOf('games-server-storage-ui.js');
  const optionalIndex=bootstrap.indexOf('baseline-games-hub-v14.js');
  assert.ok(storageIndex>=0&&optionalIndex>storageIndex);
  assert.match(storageUi,/GAMES_SERVER_STORAGE_UI_20260913_1/);
  assert.match(storageUi,/Temporary play is active/);
  assert.match(storageUi,/does not overwrite account data/);
  assert.doesNotMatch(storageUi,/blockLockedGameHotkeys|BROWSE_HOTKEYS|stopImmediatePropagation/);
});

test('optional loader keeps normal navigation authoritative while canonical Realm entry owns startup',()=>{
  assert.match(optional,/GAMES_HUB_DARTS_ACCESS_20260706_1/);
  assert.match(optional,/DartsFocusedLoader/);
  assert.match(optional,/data-open-darts-focused/);
  assert.doesNotMatch(optional,/requestIdleCallback|showTab\(|showGame\(|function canProgress/);
  assert.match(optional,/renderGamesList=function\(\)\{\}/);
  assert.match(optional,/sceneRouter\.navigate\('basecamp'/);
  assert.doesNotMatch(optional,/sceneRouter\.navigate\('ninja-training'\)/);
  assert.doesNotMatch(optional,/host\.(?:applyOfflineProgress|render|startLoop)\(/);
  assert.match(realmEntry,/function startRealmRuntimeOnce\(\)/);
  assert.match(realmEntry,/runtime\.applyOfflineProgress\(\);[\s\S]*?runtime\.render\(\);[\s\S]*?runtime\.startLoop\(\);/);
  assert.match(realmEntry,/BASELINE_GAMES_HUB_CORE_READY !== true/);
});

test('storage authority owns persistence only and never game controls',()=>{
  assert.match(guard,/GAMES_HUB_SERVER_AUTHORITY_20261006_1/);
  assert.match(guard,/canBrowse:\(\)=>true/);
  assert.match(guard,/canPlay:\(\)=>true/);
  assert.match(guard,/canSave:\(\)=>state\.canSave/);
  assert.doesNotMatch(guard,/blockLockedEvent|installStorageGate|fallbackBound|__gamesHubGuard|stopImmediatePropagation/);
  assert.doesNotMatch(guard,/document\.addEventListener\(['"](?:click|submit|keydown)['"]/);
});

test('account-state settlement reboots storage in place without reloading the page',()=>{
  assert.doesNotMatch(guard,/location\.reload\s*\(/);
  assert.match(guard,/document\.addEventListener\('baseline:auth',\(\)=>bootstrap\(\)\);/);
  assert.match(guard,/function setState\([\s\S]*?emitStorageState\(\);/);
});

test('core remains the sole owner of normal Hub controls',()=>{
  assert.match(core,/BASELINE_GAMES_HUB_CORE_READY = true/);
  assert.match(core,/function wireTabs\(\)/);
  assert.match(core,/event\.target\.closest\('\[data-select-game\]'\)/);
});

test('Basecamp exposes every registered Realm destination through positioned landmarks',()=>{
  for(const landmark of ['ninja-training','workshop','cooking','merchant','exploration','calorie-escape','storage','tactical-operations','party-preparation','campfire-rest']){
    assert.match(html,new RegExp('data-basecamp-landmark="'+landmark+'"'));
    assert.match(basecampCss,new RegExp('data-basecamp-landmark="'+landmark+'"'));
  }
  assert.match(html,/data-realm-view="calorie-escape"/);
  assert.match(html,/data-realm-view="tactical-operations"/);
  assert.match(html,/data-realm-open-tab="workshop" data-workshop-category="cooking"/);
  assert.ok((html.match(/class="realm-location-caption"/g)||[]).length>=10);
});

test('Realm shell is not transformed by inherited Games Hub card hover effects',()=>{
  assert.match(realmShell,/#ninjaPanel,\s*#ninjaPanel:hover,\s*#ninjaPanel:focus-within\{[\s\S]*?transform:none!important/);
  assert.match(realmShell,/#ninjaPanel #realmSceneFrame\{[\s\S]*?text-rendering:optimizeLegibility/);
});

test('Games Hub Indigo theme does not paint Baseline Realm internals',()=>{
  assert.doesNotMatch(hubTheme,/#ninjaPanel/);
  assert.doesNotMatch(hubTheme,/\.jrpg-/);
  assert.doesNotMatch(hubTheme,/\.basecamp-service/);
  assert.doesNotMatch(hubTheme,/\.realm-mini-action|\.realm-close-btn|\.realm-tab-btn/);
});

test('canonical Ninja stylesheet preserves visible action sprite sheets',()=>{
  assert.match(ninjaCss,/is-dash-cut \.ninja-runtime-sprite--runner[\s\S]*?alder-veil-dash\.svg/);
  assert.match(ninjaCss,/is-throwing \.ninja-runtime-sprite--runner[\s\S]*?alder-veil-throw\.svg/);
});

test('canonical Ninja stylesheet guarantees characters and controls',()=>{
  assert.match(ninjaCss,/alder-veil-run\.svg/);
  assert.match(ninjaCss,/mossblade-pursuer\.svg/);
  assert.match(ninjaCss,/pointer-events:auto!important/);
  assert.match(ninjaCss,/animation-play-state:paused!important/);
});

test('JavaScript and CSS use the central revalidation policy',()=>{
  assert.match(rootHtaccess,/<FilesMatch "\\\.\(css\|js\|mjs\)\$">/);
  assert.match(rootHtaccess,/Cache-Control "public, max-age=0, must-revalidate"/);
  const start=rootHtaccess.indexOf('<FilesMatch "\\.(css|js|mjs)$">');
  const end=rootHtaccess.indexOf('</FilesMatch>',start);
  assert.equal(rootHtaccess.slice(start,end).includes('immutable'),false);
});

test('Games Hub cache refresh policy remains present',()=>{
  assert.match(hubHtaccess,/baseline_games_hub_epoch=/);
  assert.match(hubHtaccess,/Clear-Site-Data/);
  assert.match(hubHtaccess,/SameSite=Lax/);
});
