import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const exists=file=>fs.existsSync(path.join(root,file));

const bootstrap=read('systems/baseline-games-hub/js/baseline-games-hub.js');
const optional=read('systems/baseline-games-hub/js/baseline-games-hub-v14.js');
const guard=read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
const realm=read('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-entry.js');
const lazyScenes=read('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-lazy-scenes.js');
const inputs=read('systems/baseline-games-hub/games/baseline-realm/shared/js/realm-input-manager.js');
const finalCss=read('systems/baseline-games-hub/games/baseline-realm/ninja-training/css/ninja-training-final-authority.css');

test('Realm remains optional and Darts is a first-class module',()=>{
  assert.match(bootstrap,/games-server-storage-ui\.js/);
  assert.match(bootstrap,/baseline-games-hub-v14\.js/);
  assert.match(optional,/GAMES_HUB_DARTS_ACCESS_20260706_1/);
  assert.match(optional,/DartsFocusedLoader/);
  assert.match(optional,/data-select-game="ninja"/);
  assert.doesNotMatch(optional,/requestIdleCallback|baseline-games-hub-core\.js/);
});

test('storage authority does not create a temporary game runtime',()=>{
  assert.match(guard,/GAMES_HUB_STORAGE_20260913_1/);
  assert.match(guard,/canPlay:\(\)=>true/);
  assert.match(guard,/canSave:\(\)=>state\.canSave/);
  assert.doesNotMatch(guard,/__gamesHubGuard|BASELINE_GAMES_HUB_CORE_READY|fallbackBound|stopImmediatePropagation/);
  assert.doesNotMatch(guard,/window\.setInterval\s*=/);
  assert.equal(exists('systems/baseline-games-hub/js/baseline-games-hub-loop-gate.js'),false);
  assert.equal(exists('systems/baseline-games-hub/js/baseline-games-hub-guard-v10.js'),false);
});

test('optional Realm scenes remain lazy and isolated',()=>{
  const staticImports=realm.split('\n').filter(line=>line.startsWith('import '));
  assert.equal(staticImports.some(line=>line.includes('exploration-scene')),false);
  assert.equal(staticImports.some(line=>line.includes('calorie-escape-scene')),false);
  assert.equal(staticImports.some(line=>line.includes('tactical-operations-scene')),false);
  assert.match(realm,/createLazyScene/);
  assert.match(lazyScenes,/realm:scene:load-failed/);
});

test('Realm controls retain their own native input owner',()=>{
  assert.match(inputs,/pointerEventName = 'click'/);
  assert.match(inputs,/pointerEventCapture = true/);
});

test('final visual authority exposes actors and keeps controls interactive',()=>{
  assert.match(finalCss,/alder-veil-run\.svg/);
  assert.match(finalCss,/mossblade-pursuer\.svg/);
  assert.match(finalCss,/pointer-events:auto!important/);
  assert.match(finalCss,/z-index:20!important/);
  assert.match(finalCss,/animation:none!important/);
});
