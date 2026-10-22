import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const exists=file=>fs.existsSync(path.join(root,file));

const bootstrap=read('systems/baseline-recreation/js/baseline-recreation.js');
const optional=read('systems/baseline-recreation/js/baseline-recreation-loader.js');
const guard=read('systems/baseline-recreation/js/baseline-recreation-guard.js');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const realm=read('systems/baseline-recreation/games/baseline-realm/shared/js/realm-entry.js');
const lazyScenes=read('systems/baseline-recreation/games/baseline-realm/shared/js/realm-lazy-scenes.js');
const inputs=read('systems/baseline-recreation/games/baseline-realm/shared/js/realm-input-manager.js');
const shellCss=read('systems/baseline-recreation/games/baseline-realm/shared/css/realm-shell.css');
const ninjaCss=read('systems/baseline-recreation/games/baseline-realm/ninja-training/css/ninja-training.css');
const explorationCss=read('systems/baseline-recreation/games/baseline-realm/exploration/css/exploration-jrpg.css');
const tacticalCss=read('systems/baseline-recreation/games/baseline-realm/tactical-operations/css/tactical-operations.css');
const calorieCss=read('systems/baseline-recreation/games/baseline-realm/calorie-escape/css/calorie-escape.css');

test('Realm remains optional and Darts is a first-class module',()=>{
  assert.match(bootstrap,/games-server-storage-ui\.js/);
  assert.match(bootstrap,/baseline-recreation-v14\.js/);
  assert.match(optional,/DartsFocusedLoader/);
  assert.match(optional,/data-select-game="ninja"/);
  assert.match(guard,/canPlay:\(\)=>true/);
});

test('Realm has one canonical shared shell, one Ninja stylesheet and one mobile geometry owner',()=>{
  assert.match(html,/realm-shell\.css\?v=REALM_CANONICAL_COMPLETE_20261018_1/);
  assert.match(html,/ninja-training\.css\?v=REALM_CANONICAL_COMPLETE_20261018_1/);
  assert.match(html,/realm-mobile\.css\?v=REALM_CANONICAL_COMPLETE_20261018_1/);
  assert.equal((html.match(/ninja-training\.css\?/g)||[]).length,1);
  assert.doesNotMatch(html,/realm-stage-1-shell\.css|realm-wood-authority\.css|realm-stage-1-mobile\.css|realm-integration\.css|ninja-training-rebuild\.css|ninja-training-final-authority\.css|baseline-realm-stability-fix\.css/);
});

test('patch-era and dormant Realm authorities are removed from the repository',()=>{
  for(const file of [
    'systems/baseline-recreation/css/baseline-realm-stability-fix.css',
    'systems/baseline-recreation/games/baseline-realm/shared/css/realm-stage-1-shell.css',
    'systems/baseline-recreation/games/baseline-realm/shared/css/realm-wood-authority.css',
    'systems/baseline-recreation/games/baseline-realm/shared/css/realm-stage-1-mobile.css',
    'systems/baseline-recreation/games/baseline-realm/shared/css/realm-integration.css',
    'systems/baseline-recreation/games/baseline-realm/ninja-training/css/ninja-training-rebuild.css',
    'systems/baseline-recreation/games/baseline-realm/ninja-training/css/ninja-training-final-authority.css',
    'systems/baseline-recreation/games/baseline-realm/shared/js/realm-stage-1-shell.js',
    'systems/baseline-recreation/games/baseline-realm/calorie-escape/css/a.css',
    'systems/baseline-recreation/games/baseline-realm/calorie-escape/css/m.css',
    'systems/baseline-recreation/games/baseline-realm/calorie-escape/css/p.css',
    'systems/baseline-recreation/games/baseline-realm/calorie-escape/css/r.css'
  ]) assert.equal(exists(file),false,file);
});

test('shared shell does not repaint destination-specific presentation',()=>{
  assert.doesNotMatch(shellCss,/\.jrpg-|\.tactical-|\.ce-|\.ninja-forest-layer|\.ninja-runtime-sprite|\.basecamp-service/);
  assert.match(explorationCss,/Realm cabin theming for Exploration is owned here/);
  assert.match(tacticalCss,/Realm cabin theming for Tactical Operations is owned here/);
  assert.match(calorieCss,/Realm cabin theming for Calorie Escape is owned here/);
  assert.match(ninjaCss,/One destination stylesheet owns scenery, actors, combat presentation/);
});

test('optional Realm scenes remain lazy and isolated',()=>{
  const staticImports=realm.split('\n').filter(line=>line.startsWith('import '));
  assert.equal(staticImports.some(line=>line.includes('exploration-scene')),false);
  assert.equal(staticImports.some(line=>line.includes('calorie-escape-scene')),false);
  assert.equal(staticImports.some(line=>line.includes('tactical-operations-scene')),false);
  assert.match(realm,/createLazyScene/);
  assert.match(lazyScenes,/realm:scene:load-failed/);
  assert.doesNotMatch(lazyScenes,/setHidden\('#ninjaScene, \.realm-command-banner, \.realm-action-dock',false\)/);
});

test('Realm controls retain their own native input owner',()=>{
  assert.match(inputs,/pointerEventName = 'click'/);
  assert.match(inputs,/pointerEventCapture = true/);
});

test('canonical Ninja presentation exposes actors and keeps controls interactive',()=>{
  assert.match(ninjaCss,/alder-veil-run\.svg/);
  assert.match(ninjaCss,/mossblade-pursuer\.svg/);
  assert.match(ninjaCss,/pointer-events:auto!important/);
  assert.match(ninjaCss,/z-index:20!important/);
  assert.match(ninjaCss,/prefers-reduced-motion:reduce/);
});


test('Recreation compatibility loader does not compete with the canonical Realm bootstrap',()=>{
  assert.match(optional,/Compatibility loader only\. realm-entry\.js is the sole Realm bootstrap/);
  assert.doesNotMatch(optional,/ninja-training-final-authority\.css|ninja-training-rebuild\.css|data-realm-runtime-authority/);
  assert.doesNotMatch(optional,/function activateRealm\(|sceneRouter\.navigate\('basecamp',\{initial:true,source:'games-hub'\}\)/);
  assert.doesNotMatch(optional,/host\.applyOfflineProgress\(\)|host\.startLoop\(\)/);
  assert.doesNotMatch(optional,/host\.render\(\)|host\.applyOfflineProgress\(\)|host\.startLoop\(\)/);
  assert.match(realm,/bindRealmInputs\(\{ runtime, inputManager, eventBus, sceneRouter \}\)/);
  assert.match(realm,/inputManager\.start\(\)/);
});
