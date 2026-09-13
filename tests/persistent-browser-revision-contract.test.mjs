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
    read('systems/baseline-fitness/js/fitness-routine-log-v1.js')
  ];
  for(const source of sources){
    assert.match(source,/withExpected|revisioned(?:Resource)?Body/);
    assert.match(source,/\.remember\?|rememberResourceRevision|rememberRevision/);
  }
});

test('Saved Data mutation endpoints require a submitted revision',()=>{
  const endpoints=[
    'sitewide/api/favourites.php','sitewide/api/binaural.php','sitewide/api/voice_settings.php',
    'systems/baseline-games-hub/api/games_data.php','systems/baseline-games-hub/api/games_profile.php',
    'systems/baseline-badminton-session/api/badminton_session.php',
    'systems/baseline-fitness/api/save_plan.php','systems/baseline-fitness/api/plan_update.php',
    'systems/baseline-fitness/api/delete_plan.php','systems/baseline-fitness/api/update_session.php',
    'systems/baseline-fitness/api/fitness_state.php','systems/baseline-fitness/api/start_early.php'
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

test('full-document shared saves refuse stale conflict retries',()=>{
  const badminton=read('systems/baseline-badminton-session/js/baseline-badminton-session.js');
  const stability=read('sitewide/js/baseline-live-stability-core-v3.js');
  const games=read('systems/baseline-games-hub/js/baseline-games-hub-guard.js');
  assert.match(badminton,/serverSaveConflict=true/);
  assert.match(badminton,/CONFLICT_BACKUP_KEY/);
  assert.doesNotMatch(stability,/saved = await request\('POST', \{ state:local, expectedRevision:revision \}\)/);
  assert.match(games,/state\.status='conflict';state\.canSave=false/);
});
