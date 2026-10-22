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
    read('systems/baseline-fitness/js/fitness-routine-log-v1.js'),
    read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js'),
    read('systems/baseline-fitness/js/fitness-routine-groups-v2.js'),
    read('systems/baseline-food-approach/js/food-data-service.js'),
    read('systems/baseline-natural-skincare/js/skincare-recipe-runtime-20261004.js')
  ];
  for(const source of sources){
    assert.match(source,/expectedRevision|withExpected|revisioned(?:Resource)?Body/);
    assert.match(source,/revision/i);
  }
});

test('Saved Data mutation endpoints require a submitted revision',()=>{
  const endpoints=[
    'sitewide/api/favourites.php','sitewide/api/binaural.php','sitewide/api/voice_settings.php',
    'systems/baseline-recreation/api/games_data.php','systems/baseline-recreation/api/games_profile.php',
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
  assert.match(fitness,/\$plans = \$data\['plans'\];[\s\S]*?unset\(\$data\['plans'\]\)[\s\S]*?bl_fitness_plan_files_sync\(\$uid, \$plans\)[\s\S]*?bl_saved_write_unlocked\(\$path, \$data, \$revision\)/);
  assert.match(fitness,/\$currentRevision = \(int\)\(\$current\['revision'\] \?\? 0\)[\s\S]*?bl_saved_write_unlocked\(\$path, \$record, \$currentRevision\)/);
});

test('Skincare slider saves block after a revision conflict instead of retrying the stale mutation',()=>{
  const runtime=read('systems/baseline-natural-skincare/js/skincare-recipe-runtime-20261004.js');
  assert.match(runtime,/response\.status===409&&data&&data\.error==='revision_conflict'/);
  assert.match(runtime,/await loadSliderServerState\(true\)/);
  assert.match(runtime,/sliderServerState\.saveBlocked=true/);
  const replace=runtime.match(/async function replaceSliderServerState\(next\)[\s\S]*?\n  \}/)?.[0]||'';
  assert.equal((replace.match(/method:'POST'/g)||[]).length,1);
});

test('shared Badminton uses server state as the only persistent authority',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const hydrate=badminton.match(/function hydrateSessionFromServer\(\)[\s\S]*?\n  \}/)?.[0]||'';
  assert.match(hydrate,/hasAuthoritativeRevision=Object\.prototype\.hasOwnProperty\.call\(data,'revision'\)/);
  assert.match(hydrate,/state=hydrateLoadedState\(data\.state && typeof data\.state === 'object' \? data\.state : createInitialState\(\)\);/);
  assert.doesNotMatch(badminton,/localStorage|sessionStorage/);
  assert.doesNotMatch(badminton,/persistSessionLocalOnly|CONFLICT_BACKUP_KEY|mergeNewestLocalHardshipsIntoServerState|localSnapshot/);
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
  const games=read('systems/baseline-recreation/js/baseline-recreation-guard.js');
  assert.match(badminton,/serverSaveConflict=true/);
  assert.match(badminton,/serverSaveBlocked=true/);
  assert.doesNotMatch(badminton,/CONFLICT_BACKUP_KEY|localStorage|sessionStorage/);
  assert.match(games,/state\.status='conflict';\s*state\.canSave=false/);
});


test('Fitness Routine parser-loads revisioned server writers without a Saved Data bridge',()=>{
  const html=read('systems/baseline-fitness/baseline-fitness.html');
  const workspace=read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const groups=read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
  const structureIndex=html.indexOf('/systems/baseline-fitness/js/fitness-routine-structure-v4.js');
  const workspaceIndex=html.indexOf('/systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const groupsIndex=html.indexOf('/systems/baseline-fitness/js/fitness-routine-groups-v2.js');
  assert.ok(structureIndex>=0 && workspaceIndex>structureIndex && groupsIndex>workspaceIndex);
  assert.doesNotMatch(html,/fitness-routine-workspace\.js/);
  assert.match(workspace,/expectedRevision:state\.revision/);
  assert.match(groups,/expectedRevision|withExpected/);
  assert.doesNotMatch(html,/fitness-routine-saved-data-bridge\.js/);
});


test('Fitness exercise progression history uses revisioned Saved Data authority',()=>{
  const resource=read('systems/baseline-fitness/api/fitness_resource.php');
  const endpoint=read('systems/baseline-fitness/api/fitness_state.php');
  const bridge=read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const policy=read('systems/baseline-fitness/js/fitness-live-policy-v1.js');
  const rollback=read('sitewide/migration/build_sqlite_rollback_copy.php');
  assert.match(resource,/progressionHistory/);
  assert.match(resource,/\['profile','activeWorkout','progressionHistory','selectedPlanId'\]/);
  assert.match(endpoint,/save_progression_history/);
  assert.doesNotMatch(endpoint,/progression_history_conflict|import_local/);
  assert.match(endpoint,/bl_resource_required_revision_from_input/);
  assert.match(bridge,/saveProgressionHistory/);
  assert.match(bridge,/action:'save_progression_history'/);
  assert.match(bridge,/body:revisionedBody\(body\)/);
  assert.match(policy,/await storeSessionOutcomes\(before\)/);
  assert.match(policy,/if\(!savedData\?\.enabled \|\| typeof savedData\.saveProgressionHistory!=='function'\) return false;/);
  assert.match(rollback,/fitness\.json#progressionHistory/);
});
