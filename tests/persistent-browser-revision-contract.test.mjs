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

test('delete-if-empty preserves the submitted revision through the final locked mutation',()=>{
  const authority=read('sitewide/api/resource_authority.php');
  assert.match(authority,/function bl_resource_file_delete_if_empty\([\s\S]*?\?int \$expectedRevision=null[\s\S]*?bl_resource_file_replace\(\$path, \$data, \$expectedRevision\)[\s\S]*?bl_resource_file_delete\(\$path, \$expectedRevision\)/);

  const favourites=read('sitewide/api/favourites.php');
  const binaural=read('sitewide/api/binaural.php');
  assert.match(favourites,/bl_resource_file_delete_if_empty\([\s\S]*?\$expected\s*\)/);
  assert.match(binaural,/bl_resource_file_delete_if_empty\([\s\S]*?\$expected\s*\)/);
  assert.match(binaural,/bl_resource_file_replace\(\$path, \['presets'=>\$next\], \$expected\)/);
});

test('Skincare clients never retry a stale document with a freshly fetched revision',()=>{
  const bridge=read('systems/baseline-natural-skincare/js/skincare-saved-data-bridge.js');
  assert.match(bridge,/response\.status===409/);
  assert.match(bridge,/state\.canSave=false/);
  assert.match(bridge,/backup\(kind\+'-mutation',submitted\)/);
  assert.doesNotMatch(bridge,/409[\s\S]{0,300}nativeFetch\(/);
});

test('shared Badminton treats successful empty Saved Data as authoritative',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const hydrate=badminton.match(/function hydrateSessionFromServer\(\)[\s\S]*?\n  \}/)?.[0]||'';
  assert.match(hydrate,/hasAuthoritativeRevision=Object\.prototype\.hasOwnProperty\.call\(data,'revision'\)/);
  assert.match(hydrate,/if\(hasAuthoritativeRevision&&serverState\)/);
  assert.match(hydrate,/serverRevision===0[\s\S]{0,500}empty shared server state is authoritative/);
  assert.match(hydrate,/successful shared server response is authoritative/);
  assert.doesNotMatch(hydrate,/else if\(localHasContent && localStateIsNewerThanServer/);
  assert.doesNotMatch(hydrate,/if\(currentUserIsManager\(\)\) queueServerSave\(\)/);
  assert.doesNotMatch(hydrate,/else if\(localHasContent && currentUserIsManager\(\)\)/);
});

test('shared Badminton exposes load/save failures and blocks unsafe follow-up writes',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  assert.match(badminton,/serverSaveBlocked = false/);
  assert.match(badminton,/serverSaveConflict \|\| serverSaveBlocked/);
  assert.match(badminton,/Badminton was not saved to the shared server\. Saving has stopped/);
  assert.match(badminton,/authoritative shared Badminton state could not be loaded/);
  assert.doesNotMatch(badminton,/\.catch\(function\(_error\)\{\}\)/);
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
