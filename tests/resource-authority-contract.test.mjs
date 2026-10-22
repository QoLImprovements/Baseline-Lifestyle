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
    'systems/baseline-recreation/api/games_data.php',
    'systems/baseline-recreation/api/games_profile.php',
    'systems/baseline-fitness/api/get_plan.php',
    'systems/baseline-fitness/api/save_plan.php',
    'systems/baseline-fitness/api/plan_update.php',
    'systems/baseline-fitness/api/delete_plan.php',
    'systems/baseline-fitness/api/update_session.php',
    'systems/baseline-fitness/api/achievements.php',
    'systems/baseline-fitness/api/list_profiles.php',
    'systems/baseline-fitness/api/routine_state.php',
    'systems/baseline-fitness/api/routine_groups.php',
    'systems/baseline-badminton-session/api/badminton_session.php',
    'systems/baseline-massage/api/massage_data.php',
  ];
  for(const file of files){
    const source = read(file);
    assert.match(source, /resource_authority|resource_file|fitness_resource|badminton_storage|bl_saved_/, `${file} is SQLite-only`);
  }
});

test('games remain physically isolated and hub settings never become a save file', () => {
  const games = read('systems/baseline-recreation/api/games_data.php');
  const paths = read('sitewide/api/saved_data.php');
  for(const file of ['baseline-realm.json','pairs.json','detect-word.json','make-24.json','track-coin.json','rule-shift.json','darts-focused.json','meridian-grove.json','badminton-focused.json']){
    assert.ok(paths.includes(`'${file}'`), `${file} missing`);
  }
  assert.match(games, /function bl_game_data_file_apps/);
  assert.doesNotMatch(games.match(/function bl_game_data_file_apps[\s\S]*?\}/)?.[0] || '', /hubsettings/);
  assert.match(games, /non_persistent_app/);
});

test('Fitness account state is revisioned and server-owned before the application', () => {
  const endpoint = read('systems/baseline-fitness/api/fitness_state.php');
  const client = read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  assert.match(endpoint, /active_workout_plan_not_found/);
  assert.match(endpoint, /active_workout_not_current_session/);
  assert.match(endpoint, /active_workout_step_mismatch/);
  assert.match(endpoint, /bl_resource_required_revision_from_input/);
  assert.doesNotMatch(endpoint, /import_local|profile_conflict|active_workout_conflict|progression_history_conflict/);
  assert.match(client, /body:revisionedBody\(body\)/);
  assert.match(client, /action:'save_profile'/);
  assert.match(client, /action:'save_active_workout'/);
  assert.match(client, /action:'save_progression_history'/);
  assert.doesNotMatch(client, /localStorage|sessionStorage|indexedDB|import_local|Import browser copy|Keep account copy/);
  const clientIndex = html.indexOf('/systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  const appIndex = html.indexOf('/systems/baseline-fitness/js/baseline-fitness-app.js');
  assert.ok(clientIndex > -1 && appIndex > clientIndex);
});

test('Fitness browser Saved Data conflicts stop stale retries and block unsafe writes', () => {
  const bridge = read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  assert.doesNotMatch(bridge, /retry && data\?\.error==='revision_conflict'/);
  assert.doesNotMatch(bridge, /await reload\(\)[\s\S]{0,180}revisionedBody\(body\)/);
  assert.match(bridge, /saveBlocked=true/);
  assert.match(bridge, /Fitness saving has stopped/);
  assert.match(bridge, /Reload account Fitness data/);
  assert.match(bridge, /if\(!enabled\|\|syncing\|\|saveBlocked\)return null/);
  assert.match(bridge, /if\(!enabled\|\|saveBlocked\)return false/);
});

test('Fitness account state has no browser persistence or import path', () => {
  const endpoint = read('systems/baseline-fitness/api/fitness_state.php');
  const client = read('systems/baseline-fitness/js/fitness-saved-data-bridge.js');
  assert.doesNotMatch(client, /localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(client, /quarantineLegacyLocal|prepareImportCandidates|renderMigrationReview|importLegacy|keepAccount|hasImportCandidate|retireAuthenticatedLocal/);
  assert.doesNotMatch(client, /Import browser copy|Keep account copy/);
  assert.doesNotMatch(endpoint, /import_local/);
});

test('Fitness Routine state and groups share one revisioned Saved Data resource', () => {
  const paths = read('sitewide/api/saved_data.php');
  const state = read('systems/baseline-fitness/api/routine_state.php');
  const groups = read('systems/baseline-fitness/api/routine_groups.php');
  const workspace = read('systems/baseline-fitness/js/fitness-routine-workspace-v2.js');
  const groupClient = read('systems/baseline-fitness/js/fitness-routine-groups-v2.js');
  const html = read('systems/baseline-fitness/baseline-fitness.html');
  assert.match(paths, /'fitness-routine'\s*=>\s*'fitness-routine\.json'/);
  assert.match(state, /bl_saved_user_resource_path\(\$userId, 'fitness-routine'\)/);
  assert.match(groups, /bl_saved_user_resource_path\(\$userId, 'fitness-routine'\)/);
  assert.match(state, /bl_resource_required_revision_from_input/);
  assert.match(groups, /bl_resource_required_revision_from_input/);
  assert.match(groups, /'hasState'=>true/);
  assert.doesNotMatch(state, /fitness_routine_state\s+WHERE|INSERT INTO fitness_routine_state/);
  assert.doesNotMatch(groups, /fitness_routine_groups\s+WHERE|INSERT INTO fitness_routine_groups/);
  assert.match(state, /bl_fitness_profile_names_from_files/);
  assert.match(state, /bl_fitness_account_by_name/);
  assert.match(state, /array_merge\(bl_fitness_routine_default\(\), \$current\)/);
  assert.match(groups, /array_merge\(bl_fitness_group_default\(\), \$current\)/);
  assert.match(workspace, /routine_state\.php/);
  assert.match(workspace, /expectedRevision:state\.revision/);
  assert.match(workspace, /saveBlocked/);
  assert.match(groupClient, /routine_groups\.php/);
  assert.match(groupClient, /expectedRevision|revision/);
  assert.doesNotMatch(workspace, /localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(groupClient, /localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(html, /fitness-routine-saved-data-bridge\.js/);
});

test('Voice Saved Data stays authoritative for authenticated settings', () => {
  const endpoint = read('sitewide/api/voice_settings.php');
  const voice = read('sitewide/js/baseline-voice.js');
  const saveStart = voice.indexOf('async function saveSettings');
  const loadStart = voice.indexOf('async function loadServerSettings');
  const supportStart = voice.indexOf('function support');
  assert.ok(saveStart > -1 && loadStart > saveStart && supportStart > loadStart);
  const save = voice.slice(saveStart, loadStart);
  const load = voice.slice(loadStart, supportStart);

  assert.match(endpoint, /bl_resource_required_revision_from_input/);
  assert.match(save, /revisionedBody\(\{settings:candidate\}\)/);
  assert.match(save, /accountSaveBlocked/);
  assert.match(save, /Saving has stopped/);
  assert.match(save, /Voice settings were not saved/);
  assert.doesNotMatch(save, /Saved on this device\. Account synchronisation was unavailable/);
  assert.doesNotMatch(load, /writeLocalSettings/);
  assert.match(load, /data\.settings\?normaliseSettings\(data\.settings\):normaliseSettings\(DEFAULTS\)/);
  assert.doesNotMatch(load, /method:\s*['"]POST['"]/);
  assert.match(voice, /id=\"bl-voice-reload\"/);
  assert.match(voice, /if\(lastSaveSucceeded\) closeSettings\(\)/);
  assert.match(voice, /settings=normaliseSettings\(DEFAULTS\)/);
  assert.doesNotMatch(voice, /readLocalSettings|writeLocalSettings|localStorage|sessionStorage|indexedDB/);
});

test('Food Saved Data remains authoritative through the canonical data service', () => {
  const endpoint = read('systems/baseline-food-approach/api/food_data.php');
  const service = read('systems/baseline-food-approach/js/food-data-service.js');
  const html = read('systems/baseline-food-approach/baseline-food-approach.html');

  assert.match(endpoint, /bl_resource_required_revision_from_input/);
  assert.doesNotMatch(endpoint, /import_missing/);
  assert.match(service, /expectedRevision:state\.revision/);
  assert.match(service, /response\.status===409&&data\.error==='revision_conflict'/);
  assert.match(service, /state\.canSave=false/);
  assert.doesNotMatch(service, /localStorage|sessionStorage|indexedDB|importBrowserData|renderMigrationChoice|hasImportCandidate/);
  assert.match(html, /\/systems\/baseline-food-approach\/js\/food-data-service\.js/);
  assert.doesNotMatch(html, /food-saved-data-bridge\.js/);
  assert.equal(exists('systems/baseline-food-approach/js/food-saved-data-bridge.js'), false);
});

test('Food signed-out state stays memory-only and cannot become persistent browser authority', () => {
  const service = read('systems/baseline-food-approach/js/food-data-service.js');
  const dietLog = read('systems/baseline-food-approach/js/baseline-diet-log.js');
  assert.match(service, /response\.status===401/);
  assert.match(service, /state\.document=defaultDocument\(\)/);
  assert.match(service, /state\.canSave=false/);
  assert.match(dietLog, /BaselineFoodData\.read/);
  assert.match(dietLog, /BaselineFoodData\.write/);
  assert.doesNotMatch(service, /localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(dietLog, /localStorage|sessionStorage|indexedDB/);
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
  assert.match(cutover, /fitness-routine\|food\|skincare\|massage/);
  assert.match(cutover, /Games\/baseline-realm/);
  assert.match(cutover, /'profile'=>is_array\(\$data\['profile'\]/);
  assert.match(cutover, /nativeResourceCount/);
  assert.match(cutover, /skincare_saved_data_migration\.php/);
  assert.match(cutover, /bl_migration_export_skincare_from_copy/);
  const skincareMigration = read('sitewide/migration/skincare_saved_data_migration.php');
  assert.match(skincareMigration, /invalid_skincare_json/);
  assert.match(skincareMigration, /skincare_user_missing/);
  assert.match(cutover, /'assignments'=>is_array/);
  assert.match(cutover, /unexpected_resource/);
  assert.match(rollback, /output_must_differ_from_source/);
  assert.match(rollback, /pass_hash|authentication_database/);
  assert.match(rollback, /optionalFitnessSectionsNotRepresentedInSQLite/);
  assert.match(rollback, /savedDataResourcesPreservedOutsideSQLite/);
  assert.match(rollback, /fitness-routine\.json/);
  assert.match(rollback, /food\.json/);
  assert.match(rollback, /skincare\.json/);
  assert.match(rollback, /massage\.json/);
  assert.match(rollback, /Account Index\/accounts\.json/);
  assert.match(rollback, /Games\/baseline-realm\.json#/);
  assert.match(rollback, /'badminton-focused\.json'=>'badmintonfocused'/);
  assert.match(read('sitewide/migration/sqlite_secure_exporter.php'), /'badmintonfocused'=>'badminton-focused\.json'/);
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
