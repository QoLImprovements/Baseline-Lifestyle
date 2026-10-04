import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

test('account-scoped browser writers submit and remember revisions',()=>{
  const sources=[
    read('sitewide/js/baseline-shared.js'),
    read('sitewide/js/baseline-voice.js'),
    read('systems/baseline-fitness/js/baseline-fitness-app.js'),
    read('systems/baseline-fitness/js/fitness-saved-data-bridge.js'),
    read('systems/baseline-fitness/js/fitness-plan-delete-continuity-v1.js'),
    read('systems/baseline-fitness/js/fitness-routine-log-v1.js'),
    read('systems/baseline-fitness/js/fitness-routine-saved-data-bridge.js'),
    read('systems/baseline-food-approach/js/food-saved-data-bridge.js'),
    read('systems/baseline-natural-skincare/js/skincare-saved-data-bridge.js')
  ];
  for(const source of sources){
    assert.match(source,/expectedRevision|withExpected|revisioned(?:Resource)?Body/);
    assert.match(source,/revision/i);
  }
});

test('Saved Data mutation endpoints require a submitted revision',()=>{
  const endpoints=[
    'sitewide/api/favourites.php','sitewide/api/binaural.php','sitewide/api/voice_settings.php',
    'systems/baseline-games-hub/api/games_data.php','systems/baseline-games-hub/api/games_profile.php',
    'systems/baseline-badminton-session/api/badminton_session.php',
    'systems/baseline-fitness/api/save_plan.php','systems/baseline-fitness/api/plan_update.php',
    'systems/baseline-fitness/api/delete_plan.php','systems/baseline-fitness/api/update_session.php',
    'systems/baseline-fitness/api/fitness_state.php','systems/baseline-fitness/api/start_early.php',
    'systems/baseline-food-approach/api/food_data.php',
    'systems/baseline-natural-skincare/api/routine_state.php',
    'systems/baseline-natural-skincare/api/routine_groups.php',
    'systems/baseline-natural-skincare/api/skincare_data.php'
  ];
  for(const endpoint of endpoints){
    assert.match(read(endpoint),/bl_resource_required_revision_from_input/,
      `${endpoint} must reject an unversioned Saved Data mutation`);
  }
  assert.match(read('sitewide/api/resource_authority.php'),/expected_revision_required/);
});

test('delete-if-empty preserves monotonic Saved Data revisions',()=>{
  const authority=read('sitewide/api/resource_authority.php');
  assert.match(authority,/function bl_resource_file_delete_if_empty\([\s\S]*?\?int \$expectedRevision=null[\s\S]*?bl_resource_authority\(\) === 'saved-data'[\s\S]*?bl_resource_file_replace\(\$path, \$data, \$expectedRevision\)[\s\S]*?bl_resource_file_delete\(\$path, \$expectedRevision\)/);

  const favourites=read('sitewide/api/favourites.php');
  const binaural=read('sitewide/api/binaural.php');
  const fitness=read('systems/baseline-fitness/api/fitness_resource.php');
  assert.match(favourites,/bl_resource_file_delete_if_empty\([\s\S]*?\$expected\s*\)/);
  assert.match(binaural,/bl_resource_file_delete_if_empty\([\s\S]*?\$expected\s*\)/);
  assert.match(binaural,/bl_resource_file_replace\(\$path, \['presets'=>\$next\], \$expected\)/);
  assert.match(fitness,/bl_fitness_resource_is_empty\(\$data\)[\s\S]*?bl_resource_authority\(\) === 'saved-data'[\s\S]*?bl_resource_file_replace\(\$path, \$data, \$expectedRevision\)/);
});

test('Skincare clients never retry a stale document with a freshly fetched revision',()=>{
  const bridge=read('systems/baseline-natural-skincare/js/skincare-saved-data-bridge.js');
  assert.match(bridge,/response\.status===409/);
  assert.match(bridge,/state\.canSave=false/);
  assert.match(bridge,/backup\(kind\+'-mutation',submitted\)/);
  assert.doesNotMatch(bridge,/409[\s\S]{0,300}nativeFetch\(/);
});

test('shared Badminton keeps server state authoritative while reconciling only newer hardship memory',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const hydrate=badminton.match(/function hydrateSessionFromServer\(\)[\s\S]*?\n  \}/)?.[0]||'';
  assert.match(hydrate,/hasAuthoritativeRevision=Object\.prototype\.hasOwnProperty\.call\(data,'revision'\)/);
  assert.match(hydrate,/const serverState = data\.state && typeof data\.state === 'object' \? data\.state : createInitialState\(\);/);
  assert.match(hydrate,/let nextState = serverState;/);
  assert.match(hydrate,/mergeNewestLocalHardshipsIntoServerState\(serverState, localSnapshot\)/);
  assert.match(hydrate,/state=hydrateLoadedState\(nextState\);/);
  assert.match(hydrate,/if\(recoveredHardships\)[\s\S]{0,220}queueServerSave\(\)/);
  assert.doesNotMatch(hydrate,/state=hydrateLoadedState\(localSnapshot\)/);
  assert.doesNotMatch(hydrate,/if\(currentUserIsManager\(\)\) queueServerSave\(\)/);
  assert.doesNotMatch(hydrate,/else if\(localHasContent && currentUserIsManager\(\)\)/);
});

test('shared Badminton exposes load/save failures and blocks unsafe follow-up writes',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  assert.match(badminton,/serverSaveBlocked = false/);
  assert.match(badminton,/serverSaveConflict \|\| serverSaveBlocked/);
  assert.match(badminton,/Badminton was not saved to the shared server\. Saving has stopped/);
  assert.match(badminton,/authoritative shared Badminton state could not be loaded/);
  const hydrate=badminton.match(/function hydrateSessionFromServer\(\)[\s\S]*?\n  \}/)?.[0]||'';
  const save=badminton.match(/function queueServerSave\(\)[\s\S]*?\n  \}/)?.[0]||'';
  assert.doesNotMatch(hydrate,/\.catch\(function\(_error\)\{\}\)/);
  assert.doesNotMatch(save,/\.catch\(function\(_error\)\{\}\)/);
});

test('full-document shared saves refuse stale conflict retries',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const stability=read('sitewide/js/baseline-live-stability-core-v3.js');
  const games=read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  assert.match(badminton,/serverSaveConflict=true/);
  assert.match(badminton,/CONFLICT_BACKUP_KEY/);
  assert.doesNotMatch(stability,/saved = await request\('POST', \{ state:local, expectedRevision:revision \}\)/);
  assert.match(games,/state\.status='conflict';state\.canSave=false/);
});


test('Fitness Routine Saved Data bridge loads before browser-owned workspace writers',()=>{
  const loader=read('systems/baseline-fitness/js/fitness-routine-workspace.js');
  const bridgeIndex=loader.indexOf('/systems/baseline-fitness/js/fitness-routine-saved-data-bridge.js');
  const workspaceIndex=loader.indexOf('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  assert.ok(bridgeIndex>=0 && workspaceIndex>bridgeIndex,'Fitness Routine Saved Data bridge must load before the workspace');
});


test('Fitness exercise progression history uses revisioned Saved Data authority',()=>{
  const resource=read('systems/baseline-fitness/api/fitness_resource.php');
  const endpoint=read('systems/baseline-fitness/api/fitness_state.php');
  const bridge=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const policy=read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  const rollback=read('sitewide/migration/build_sqlite_rollback_copy.php');
  assert.match(resource,/progressionHistory/);
  assert.match(resource,/\['profile','activeWorkout','progressionHistory'\]/);
  assert.match(endpoint,/save_progression_history/);
  assert.doesNotMatch(endpoint,/progression_history_conflict|import_local/);
  assert.match(endpoint,/bl_resource_required_revision_from_input/);
  assert.match(bridge,/saveProgressionHistory/);
  assert.match(bridge,/action:'save_progression_history'/);
  assert.match(bridge,/body:revisionedBody\(body\)/);
  assert.match(policy,/await storeSessionOutcomes\(before\)/);
  assert.match(policy,/savedData\?\.savedDataDisabled/);
  assert.match(rollback,/fitness\.json#progressionHistory/);
});
