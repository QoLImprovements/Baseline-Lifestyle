import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const foodBridge=read('systems/baseline-food-approach/js/food-saved-data-bridge.js');
const foodApi=read('systems/baseline-food-approach/api/food_data.php');
const fitnessBridge=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
const fitnessRoutineBridge=read('systems/baseline-fitness/js/fitness-routine-saved-data-bridge.js');
const fitnessApi=read('systems/baseline-fitness/api/fitness_state.php');
const skincareBridge=read('systems/baseline-natural-skincare/js/skincare-saved-data-bridge.js');
const skincareApi=read('systems/baseline-natural-skincare/api/skincare_data.php');
const gamesGuard=read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
const gamesUi=read('systems/baseline-games-hub/js/games-server-storage-ui.js');
const gamesApi=read('systems/baseline-games-hub/api/games_data.php');
const tactical=read('systems/baseline-games-hub/games/baseline-realm/tactical-operations/js/tactical-operations-scene.js');
const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');

test('retired browser import actions and controls stay absent',()=>{
  const browserSources=[foodBridge,fitnessBridge,fitnessRoutineBridge,skincareBridge,gamesGuard,gamesUi,tactical].join('\n');
  assert.doesNotMatch(browserSources,/Import browser copy|Import browser Diet Log|Import legacy routine/);
  assert.doesNotMatch(browserSources,/renderMigrationReview|importGuestProfile|getImportCandidates|migrationPending/);
  assert.doesNotMatch(foodApi,/import_missing/);
  assert.doesNotMatch(fitnessApi,/import_local/);
  assert.doesNotMatch(skincareApi,/merge_sliders|slider_migration_conflict/);
  assert.doesNotMatch(gamesApi,/migrate_missing|expectedRevisions/);
});

test('authenticated authorities retire browser copies without removing current save paths',()=>{
  assert.match(foodBridge,/function retireAuthenticatedLegacySource\(\)/);
  assert.match(foodBridge,/CONFLICT_BACKUP_KEY/);
  assert.match(fitnessBridge,/function retireAuthenticatedLocal\(\)/);
  assert.match(fitnessBridge,/action:'save_progression_history'/);
  assert.match(fitnessBridge,/revisionedBody\(body\)/);
  assert.match(fitnessRoutineBridge,/function retireAuthenticatedLocal/);
  assert.match(fitnessRoutineBridge,/withExpected/);
  assert.match(skincareBridge,/function retireAuthenticatedPhysicalCopies\(\)/);
  assert.match(skincareBridge,/BACKUP_PREFIX/);
  assert.match(skincareBridge,/action:'replace_sliders'/);
  assert.match(gamesGuard,/action:'save',app,profile,expectedRevision:revisionFor\(app\)/);
});

test('guest and recovery exceptions remain deliberately local',()=>{
  assert.match(gamesGuard,/function collectLegacyProfiles\(\)/);
  assert.match(gamesGuard,/result\.status===401\?'signed-out'/);
  assert.match(tactical,/if\(!signedIn\)[\s\S]{0,180}localStorage\.setItem\(LOCAL_SAVE_KEY/);
  assert.match(tactical,/if\(signedIn\)\{[\s\S]{0,260}inventoryService\?\.read/);
  assert.doesNotMatch(tactical,/removeItem\(LOCAL_SAVE_KEY\)/);
  assert.doesNotMatch(badminton,/localStorage|sessionStorage|preserveConflictingLocalState|CONFLICT_BACKUP_KEY/);
});
