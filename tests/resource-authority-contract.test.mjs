import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const exists = relative => fs.existsSync(path.join(root, relative));

test('resource authority is host-controlled and defaults safely to SQLite', () => {
  const authority = read('sitewide/api/resource_authority.php');
  const privateEnv = read('sitewide/api/private_environment.php');
  const example = read('.env.example');
  assert.match(authority, /bl_env\(BL_RESOURCE_AUTHORITY_ENV_KEY, 'sqlite'\)/);
  assert.match(authority, /\['sqlite','mirror','saved-data'\]/);
  assert.match(authority, /bl_resource_file_mutate/);
  assert.match(authority, /revision_conflict/);
  assert.match(privateEnv, /BASELINE_RESOURCE_AUTHORITY/);
  assert.match(example, /^BASELINE_RESOURCE_AUTHORITY=$/m);
  assert.doesNotMatch(example, /BASELINE_RESOURCE_AUTHORITY=(?:mirror|saved-data)/);
});

test('every approved persistence surface has a file-backed path', () => {
  const files = [
    'sitewide/api/favourites.php',
    'sitewide/api/binaural.php',
    'sitewide/api/voice_settings.php',
    'systems/baseline-games-hub/api/games_data.php',
    'systems/baseline-games-hub/api/games_profile.php',
    'systems/baseline-fitness/api/get_plan.php',
    'systems/baseline-fitness/api/save_plan.php',
    'systems/baseline-fitness/api/plan_update.php',
    'systems/baseline-fitness/api/delete_plan.php',
    'systems/baseline-fitness/api/update_session.php',
    'systems/baseline-fitness/api/achievements.php',
    'systems/baseline-fitness/api/list_profiles.php',
    'systems/baseline-badminton-session/api/badminton_session.php',
  ];
  for(const file of files){
    const source = read(file);
    assert.match(source, /resource_authority|fitness_resource|badminton_storage/, `${file} is SQLite-only`);
  }
});

test('games remain physically isolated and hub settings never become a save file', () => {
  const games = read('systems/baseline-games-hub/api/games_data.php');
  const paths = read('sitewide/api/saved_data.php');
  for(const file of ['baseline-realm.json','pairs.json','detect-word.json','make-24.json','track-coin.json','rule-shift.json','darts-focused.json','meridian-grove.json']){
    assert.ok(paths.includes(`'${file}'`), `${file} missing`);
  }
  assert.match(games, /function bl_game_data_file_apps/);
  assert.doesNotMatch(games.match(/function bl_game_data_file_apps[\s\S]*?\}/)?.[0] || '', /hubsettings/);
  assert.match(games, /non_persistent_app/);
});

test('Fitness browser-owned values are validated and bridged before the application', () => {
  const endpoint = read('systems/baseline-fitness/api/fitness_state.php');
  const bridge = read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  assert.match(endpoint, /active_workout_plan_not_found/);
  assert.match(endpoint, /active_workout_not_current_session/);
  assert.match(endpoint, /active_workout_step_mismatch/);
  assert.match(endpoint, /profile_conflict/);
  assert.match(endpoint, /bl_resource_revision_from_input/);
  assert.match(bridge, /action: 'import_local'/);
  assert.match(bridge, /revision_conflict/);
  assert.match(bridge, /serverProfile/);
  const bridgeIndex = html.indexOf('/systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const appIndex = html.indexOf('/systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.ok(bridgeIndex > -1 && appIndex > bridgeIndex);
});

test('account projections and index synchronization exclude authentication secrets', () => {
  const account = read('sitewide/api/account_resource.php');
  assert.match(account, /Account Index|bl_saved_account_index_path/);
  assert.match(account, /account\.json|bl_saved_user_resource_path/);
  assert.doesNotMatch(account, /pass_hash|google_sub|passwordHash|providerSubject/);
  for(const endpoint of ['sitewide/api/login.php','sitewide/api/register.php','sitewide/api/google_callback.php']){
    assert.match(read(endpoint), /bl_account_resource_sync/);
  }
});

test('cutover and rollback tools remain explicit and evidence stays outside Saved Data', () => {
  const cutover = read('sitewide/migration/verify_saved_data_cutover.php');
  const rollback = read('sitewide/migration/build_sqlite_rollback_copy.php');
  assert.match(cutover, /readyForSavedDataMode/);
  assert.match(cutover, /evidence_inside_saved_data/);
  assert.match(cutover, /productionAuthorityChanged.*false/s);
  assert.match(rollback, /output_must_differ_from_source/);
  assert.match(rollback, /pass_hash|authentication_database/);
  assert.match(rollback, /optionalFitnessSectionsNotRepresentedInSQLite/);
  assert.match(rollback, /realpath\(\(string\)\(\$_SERVER\['SCRIPT_FILENAME'\]/);
});

test('one-time codemods and write-enabled workflows do not remain in the finished repository', () => {
  for(const file of [
    '.github/workflows/apply-badminton-resource-storage.yml',
    '.github/workflows/apply-fitness-saved-data-bridge.yml',
    '.github/workflows/fix-rollback-cli-guard.yml',
    'tools/apply_badminton_resource_storage.py',
    'tools/apply_fitness_saved_data_bridge.py',
    'tools/fix_rollback_cli_guard.py',
  ]) assert.equal(exists(file), false, `${file} must be removed`);
});
