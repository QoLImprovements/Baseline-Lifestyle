<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/verify_saved_data_cutover.php';
require_once dirname(__DIR__) . '/sitewide/migration/build_sqlite_rollback_copy.php';

function bl_roundtrip_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_roundtrip_read(string $path): array {
  $raw = file_get_contents($path);
  if($raw === false) throw new RuntimeException('read_failed:' . $path);
  return json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
}

function bl_roundtrip_write(string $path, array $value): void {
  $json = json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
  if(file_put_contents($path, $json) === false) throw new RuntimeException('write_failed:' . $path);
  @chmod($path, 0600);
}

$base = sys_get_temp_dir() . '/baseline-resource-roundtrip-' . bin2hex(random_bytes(8));
$source = $base . '/source.sqlite';
$saved = $base . '/Saved Data';
$rollback = $base . '/rollback.sqlite';
@mkdir($base, 0700, true);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_roundtrip_contract');
  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('PRAGMA foreign_keys=ON');
  $db->exec('CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,email TEXT NOT NULL,email_normalized TEXT NOT NULL UNIQUE,pass_hash TEXT NOT NULL,auth_provider TEXT NOT NULL,google_sub TEXT,created_at INTEGER NOT NULL,updated_at INTEGER NOT NULL,last_login_at INTEGER)');
  $db->exec('CREATE UNIQUE INDEX idx_users_name_nocase ON users(lower(name))');
  $db->exec('CREATE TABLE favourites(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,app TEXT NOT NULL,recipe_id TEXT NOT NULL,created_at INTEGER NOT NULL,UNIQUE(user_id,app,recipe_id),FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE binaural_presets(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,name TEXT NOT NULL,beat_hz REAL NOT NULL,carrier_hz REAL NOT NULL,bed_type TEXT NOT NULL,beat_vol REAL NOT NULL,bed_vol REAL NOT NULL,created_at INTEGER NOT NULL,updated_at INTEGER NOT NULL,UNIQUE(user_id,name),FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE voice_settings(user_id INTEGER PRIMARY KEY,settings_json TEXT NOT NULL,updated_at INTEGER NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE plans(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,created_at INTEGER NOT NULL,plan_text TEXT NOT NULL,plan_json TEXT NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE plan_sessions(id INTEGER PRIMARY KEY AUTOINCREMENT,plan_id INTEGER NOT NULL,user_id INTEGER NOT NULL,session_index INTEGER NOT NULL,scheduled_date TEXT NOT NULL,status TEXT NOT NULL,completed_at INTEGER,updated_at INTEGER NOT NULL,UNIQUE(plan_id,session_index),FOREIGN KEY(plan_id) REFERENCES plans(id),FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE achievements(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,code TEXT NOT NULL,unlocked_at INTEGER NOT NULL,UNIQUE(user_id,code),FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE games_profiles(id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,app TEXT NOT NULL,profile_json TEXT NOT NULL,created_at INTEGER NOT NULL,updated_at INTEGER NOT NULL,UNIQUE(user_id,app),FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE badminton_state_store(state_key TEXT PRIMARY KEY,state_json TEXT NOT NULL,updated_at INTEGER NOT NULL)');
  $db->exec('CREATE TABLE skincare_routines(user_id INTEGER PRIMARY KEY,visibility TEXT NOT NULL,routine_json TEXT NOT NULL,logs_json TEXT NOT NULL,updated_at INTEGER NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE skincare_routine_groups(user_id INTEGER PRIMARY KEY,groups_json TEXT NOT NULL,assignments_json TEXT NOT NULL,updated_at INTEGER NOT NULL,FOREIGN KEY(user_id) REFERENCES users(id))');
  $db->exec('CREATE TABLE password_reset_tokens(id INTEGER PRIMARY KEY,user_id INTEGER,selector TEXT,verifier_hash TEXT,expires_at INTEGER,created_at INTEGER,used_at INTEGER)');
  $db->exec('CREATE TABLE rate_limit_events(id INTEGER PRIMARY KEY,bucket TEXT,subject_hash TEXT,created_at INTEGER)');
  $db->exec('CREATE TABLE schema_migrations(component TEXT,version INTEGER,applied_at INTEGER,PRIMARY KEY(component,version))');
  $db->exec('CREATE TABLE submissions(id INTEGER PRIMARY KEY,created_at INTEGER,payload_json TEXT)');

  $db->exec("INSERT INTO users VALUES(7,'Peter','peter@example.test','peter@example.test','secret-hash','password','google-secret',1700000000,1700000100,1700000200)");
  $db->exec("INSERT INTO favourites(user_id,app,recipe_id,created_at) VALUES(7,'food','r-1',1700000300)");
  $db->exec("INSERT INTO binaural_presets(user_id,name,beat_hz,carrier_hz,bed_type,beat_vol,bed_vol,created_at,updated_at) VALUES(7,'Focus',10,200,'brown',0.5,0.25,1700000400,1700000500)");
  $db->exec("INSERT INTO voice_settings VALUES(7,'{\"enabled\":true}',1700000600)");
  $db->exec("INSERT INTO plans(id,user_id,created_at,plan_text,plan_json) VALUES(3,7,1700000700,'fixture plan','{\"sessions\":2,\"frequency\":\"2x\",\"startDate\":\"2026-08-03\"}')");
  $db->exec("INSERT INTO plan_sessions(plan_id,user_id,session_index,scheduled_date,status,completed_at,updated_at) VALUES(3,7,1,'2026-08-03','planned',NULL,1700000800)");
  $db->exec("INSERT INTO plan_sessions(plan_id,user_id,session_index,scheduled_date,status,completed_at,updated_at) VALUES(3,7,2,'2026-08-07','planned',NULL,1700000801)");
  $db->exec("INSERT INTO achievements(user_id,code,unlocked_at) VALUES(7,'first_session',1700000900)");
  $db->exec("INSERT INTO games_profiles(user_id,app,profile_json,created_at,updated_at) VALUES(7,'pairs','{\"app\":\"pairs\",\"level\":2}',1700001000,1700001100)");
  $db->exec("INSERT INTO games_profiles(user_id,app,profile_json,created_at,updated_at) VALUES(7,'badmintonfocused','{\"app\":\"badmintonfocused\",\"score\":4}',1700001001,1700001101)");
  $db->exec("INSERT INTO badminton_state_store VALUES('global','{\"version\":4,\"players\":[],\"matches\":[]}',1700001200)");
  $db->exec("INSERT INTO skincare_routines VALUES(7,'private','[{\"id\":\"old-routine\"}]','[{\"id\":\"old-log\"}]',1700001201)");
  $db->exec("INSERT INTO skincare_routine_groups VALUES(7,'[{\"id\":\"old-group\"}]','{\"monday\":\"old-group\"}',1700001202)");
  $db = null;

  $sourceHash = hash_file('sha256', $source);
  $report = bl_secure_export_sqlite_copy($source, $saved);
  bl_migration_export_skincare_from_copy($source, $saved);
  bl_roundtrip_assert(($report['invalid'] ?? []) === [], 'fixture export invalid');
  $verified = bl_verify_saved_data_cutover($source, $saved);
  bl_roundtrip_assert($verified['ok'] === true, 'clean Saved Data did not verify: ' . json_encode($verified['errors']));

  $fitnessPath = $saved . '/Users/000007/fitness.json';
  $fitness = bl_roundtrip_read($fitnessPath);
  $fitness['data']['profile'] = ['age'=>'40','sex'=>'male','activity'=>'moderate','height'=>'180','weight'=>'80'];
  $fitness['data']['activeWorkout'] = ['planId'=>3,'sessionIndex'=>1,'stepCount'=>3,'state'=>['completedSteps'=>1,'started'=>true,'results'=>[],'pendingFailureStep'=>null]];
  $fitness['revision'] = 2;
  bl_roundtrip_write($fitnessPath, $fitness);
  $verifiedOptional = bl_verify_saved_data_cutover($source, $saved);
  bl_roundtrip_assert($verifiedOptional['ok'] === true, 'browser-only Fitness sections blocked cutover');

  $gamePath = $saved . '/Users/000007/Games/pairs.json';
  $game = bl_roundtrip_read($gamePath);
  $game['data']['profile']['level'] = 99;
  bl_roundtrip_write($gamePath, $game);
  $tampered = bl_verify_saved_data_cutover($source, $saved);
  bl_roundtrip_assert($tampered['ok'] === false, 'tampered game passed cutover verification');
  bl_roundtrip_assert(in_array('resource_mismatch', array_column($tampered['errors'], 'check'), true), 'tampered game mismatch not reported');

  bl_secure_export_sqlite_copy($source, $saved);
  bl_migration_export_skincare_from_copy($source, $saved);
  $fitness = bl_roundtrip_read($fitnessPath);
  $fitness['data']['profile'] = ['age'=>'40','sex'=>'male','activity'=>'moderate','height'=>'180','weight'=>'80'];
  $fitness['data']['activeWorkout'] = ['planId'=>3,'sessionIndex'=>1,'stepCount'=>3,'state'=>['completedSteps'=>1,'started'=>true,'results'=>[],'pendingFailureStep'=>null]];
  $fitness['data']['plans'][0]['sessions'][0]['status'] = 'done';
  $fitness['data']['plans'][0]['sessions'][0]['completedAt'] = '2026-08-02T18:00:00Z';
  bl_roundtrip_write($fitnessPath, $fitness);

  $favouritesPath = $saved . '/Users/000007/favourites.json';
  $favourites = bl_roundtrip_read($favouritesPath);
  $favourites['data']['items'][] = ['app'=>'skincare','recipeId'=>'r-2','createdAt'=>'2026-08-02T18:01:00Z'];
  bl_roundtrip_write($favouritesPath, $favourites);

  $game = bl_roundtrip_read($gamePath);
  $game['data']['profile']['level'] = 9;
  $game['data']['updatedAt'] = '2026-08-02T18:02:00Z';
  bl_roundtrip_write($gamePath, $game);

  $badmintonFocusedPath = $saved . '/Users/000007/Games/badminton-focused.json';
  bl_roundtrip_assert(is_file($badmintonFocusedPath), 'Badminton Focused did not export to its canonical filename');
  $badmintonFocused = bl_roundtrip_read($badmintonFocusedPath);
  $badmintonFocused['data']['profile']['score'] = 12;
  $badmintonFocused['data']['updatedAt'] = '2026-08-02T18:02:30Z';
  bl_roundtrip_write($badmintonFocusedPath, $badmintonFocused);

  $badmintonPath = $saved . '/Shared/Badminton/badminton.json';
  $badminton = bl_roundtrip_read($badmintonPath);
  $badminton['data']['version'] = 5;
  $badminton['data']['matches'][] = ['id'=>'m-1'];
  bl_roundtrip_write($badmintonPath, $badminton);

  foreach(['fitness-routine.json','food.json'] as $nativeFilename){
    bl_roundtrip_write($saved . '/Users/000007/' . $nativeFilename, [
      'schemaVersion'=>1,
      'revision'=>1,
      'updatedAt'=>'2026-08-02T18:03:00Z',
      'data'=>['nativeOnly'=>true],
    ]);
  }

  bl_roundtrip_write($saved . '/Users/000007/skincare.json', [
    'schemaVersion'=>1,
    'revision'=>2,
    'updatedAt'=>'2026-08-02T18:03:30Z',
    'data'=>[
      'schemaVersion'=>1,
      'visibility'=>'public',
      'routine'=>[['id'=>'current-routine','steps'=>['cleanse','moisturise']]],
      'logs'=>[['id'=>'current-log','date'=>'2026-08-02']],
      'groups'=>[['id'=>'current-group','name'=>'Evening']],
      'assignments'=>['monday'=>'current-group'],
      'sliders'=>['hydration'=>75],
    ],
  ]);

  $rollbackResult = bl_build_sqlite_rollback_copy($source, $saved, $rollback);
  bl_roundtrip_assert($rollbackResult['ok'] === true, 'rollback copy failed');
  $preserved = $rollbackResult['savedDataResourcesPreservedOutsideSQLite'] ?? [];
  foreach([
    'Account Index/accounts.json',
    'Users/000007/fitness-routine.json',
    'Users/000007/food.json',
    'Users/000007/skincare.json',
    'Users/000007/fitness.json#profile',
    'Users/000007/fitness.json#activeWorkout',
  ] as $expectedPreserved){
    bl_roundtrip_assert(in_array($expectedPreserved, $preserved, true), 'Saved-Data-only rollback preservation missing: ' . $expectedPreserved);
  }
  bl_roundtrip_assert(($rollbackResult['counts']['skincareRoutines'] ?? 0) === 1, 'Skincare routine rollback count missing');
  bl_roundtrip_assert(($rollbackResult['counts']['skincareGroups'] ?? 0) === 1, 'Skincare group rollback count missing');
  bl_roundtrip_assert(hash_file('sha256', $source) === $sourceHash, 'source database changed');
  bl_roundtrip_assert(in_array('000007', $rollbackResult['optionalFitnessSectionsNotRepresentedInSQLite'], true), 'optional Fitness warning missing');

  $restored = new PDO('sqlite:' . $rollback, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
  $user = $restored->query('SELECT pass_hash, google_sub FROM users WHERE id=7')->fetch();
  bl_roundtrip_assert(($user['pass_hash'] ?? '') === 'secret-hash', 'password hash was not preserved');
  bl_roundtrip_assert(($user['google_sub'] ?? '') === 'google-secret', 'provider subject was not preserved');
  bl_roundtrip_assert((int)$restored->query('SELECT COUNT(*) FROM favourites WHERE user_id=7')->fetchColumn() === 2, 'favourites rollback failed');
  $restoredGame = json_decode((string)$restored->query("SELECT profile_json FROM games_profiles WHERE user_id=7 AND app='pairs'")->fetchColumn(), true);
  bl_roundtrip_assert(($restoredGame['level'] ?? 0) === 9, 'game rollback failed');
  $restoredBadmintonFocused = json_decode((string)$restored->query("SELECT profile_json FROM games_profiles WHERE user_id=7 AND app='badmintonfocused'")->fetchColumn(), true);
  bl_roundtrip_assert(($restoredBadmintonFocused['score'] ?? 0) === 12, 'Badminton Focused rollback mapping failed');
  $session = $restored->query('SELECT status FROM plan_sessions WHERE user_id=7 AND session_index=1')->fetchColumn();
  bl_roundtrip_assert($session === 'done', 'Fitness session rollback failed');
  $restoredBadminton = json_decode((string)$restored->query("SELECT state_json FROM badminton_state_store WHERE state_key='global'")->fetchColumn(), true);
  bl_roundtrip_assert(($restoredBadminton['version'] ?? 0) === 5, 'Badminton rollback failed');

  $restoredSkincare = $restored->query('SELECT visibility,routine_json,logs_json FROM skincare_routines WHERE user_id=7')->fetch();
  bl_roundtrip_assert(($restoredSkincare['visibility'] ?? '') === 'public', 'Skincare visibility rollback failed');
  $restoredRoutine = json_decode((string)($restoredSkincare['routine_json'] ?? '[]'), true, 48, JSON_THROW_ON_ERROR);
  $restoredLogs = json_decode((string)($restoredSkincare['logs_json'] ?? '[]'), true, 48, JSON_THROW_ON_ERROR);
  bl_roundtrip_assert(($restoredRoutine[0]['id'] ?? '') === 'current-routine', 'Skincare routine rollback failed');
  bl_roundtrip_assert(($restoredLogs[0]['id'] ?? '') === 'current-log', 'Skincare logs rollback failed');

  $restoredSkincareGroups = $restored->query('SELECT groups_json,assignments_json FROM skincare_routine_groups WHERE user_id=7')->fetch();
  $restoredGroups = json_decode((string)($restoredSkincareGroups['groups_json'] ?? '[]'), true, 48, JSON_THROW_ON_ERROR);
  $restoredAssignments = json_decode((string)($restoredSkincareGroups['assignments_json'] ?? '[]'), true, 48, JSON_THROW_ON_ERROR);
  bl_roundtrip_assert(($restoredGroups[0]['id'] ?? '') === 'current-group', 'Skincare groups rollback failed');
  bl_roundtrip_assert(($restoredAssignments['monday'] ?? '') === 'current-group', 'Skincare assignments rollback failed');

  bl_roundtrip_assert($restored->query('PRAGMA integrity_check')->fetchColumn() === 'ok', 'rollback integrity failed');
  bl_roundtrip_assert($restored->query('PRAGMA foreign_key_check')->fetchAll() === [], 'rollback foreign keys failed');
  $restored = null;

  echo "Saved Data cutover and rollback round-trip contract passed\n";
}finally{
  bl_export_remove_tree($base);
}
