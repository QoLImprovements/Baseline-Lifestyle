<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_copy_validation.php';

function bl_export_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_export_test_read(string $path): array {
  $raw = file_get_contents($path);
  if($raw === false) throw new RuntimeException('read_failed:' . $path);
  return json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
}

$base = sys_get_temp_dir() . '/baseline-sqlite-export-' . bin2hex(random_bytes(8));
$source = $base . '/copied.sqlite';
$output = $base . '/shadow/Saved Data';
$evidence = $base . '/review/copied-data-evidence.json';
@mkdir($base, 0700, true);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_contract');
  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('CREATE TABLE users(id INTEGER PRIMARY KEY,name TEXT,email TEXT,email_normalized TEXT,pass_hash TEXT,auth_provider TEXT,google_sub TEXT,created_at INTEGER,updated_at INTEGER,last_login_at INTEGER)');
  $db->exec("INSERT INTO users VALUES(7,'Peter','peter@example.test','peter@example.test','hash-value','password','google-7',1700000000,1700000100,1700000200)");
  $db->exec('CREATE TABLE favourites(id INTEGER PRIMARY KEY,user_id INTEGER,app TEXT,recipe_id TEXT,created_at INTEGER)');
  $db->exec("INSERT INTO favourites VALUES(1,7,'food','r-1',1700000300)");
  $db->exec('CREATE TABLE binaural_presets(id INTEGER PRIMARY KEY,user_id INTEGER,name TEXT,beat_hz REAL,carrier_hz REAL,bed_type TEXT,beat_vol REAL,bed_vol REAL,created_at INTEGER,updated_at INTEGER)');
  $db->exec("INSERT INTO binaural_presets VALUES(1,7,'Focus',10,200,'brown',0.5,0.25,1700000400,1700000500)");
  $db->exec('CREATE TABLE voice_settings(user_id INTEGER PRIMARY KEY,settings_json TEXT,updated_at INTEGER)');
  $db->exec("INSERT INTO voice_settings VALUES(7,'{\"enabled\":true}',1700000600)");
  $db->exec('CREATE TABLE plans(id INTEGER PRIMARY KEY,user_id INTEGER,created_at INTEGER,plan_text TEXT,plan_json TEXT)');
  $db->exec("INSERT INTO plans VALUES(3,7,1700000700,'legacy plan','{\"sessions\":[{\"id\":1}]}')");
  $db->exec('CREATE TABLE plan_sessions(id INTEGER PRIMARY KEY,plan_id INTEGER,user_id INTEGER,session_index INTEGER,scheduled_date TEXT,status TEXT,completed_at INTEGER,updated_at INTEGER)');
  $db->exec("INSERT INTO plan_sessions VALUES(4,3,7,0,'2026-08-03','planned',NULL,1700000800)");
  $db->exec('CREATE TABLE achievements(id INTEGER PRIMARY KEY,user_id INTEGER,code TEXT,unlocked_at INTEGER)');
  $db->exec("INSERT INTO achievements VALUES(5,7,'first-session',1700000900)");
  $db->exec('CREATE TABLE games_profiles(id INTEGER PRIMARY KEY,user_id INTEGER,app TEXT,profile_json TEXT,created_at INTEGER,updated_at INTEGER)');
  $db->exec("INSERT INTO games_profiles VALUES(6,7,'pairs','{\"level\":2}',1700001000,1700001100)");
  $db->exec("INSERT INTO games_profiles VALUES(7,7,'detectword','{\"app\":\"detectword\",\"level\":3}',1700001001,1700001101)");
  $db->exec("INSERT INTO games_profiles VALUES(8,7,'ninja','{\"app\":\"ninja\",\"realm\":{}}',1700001002,1700001102)");
  $db->exec('CREATE TABLE badminton_state_store(state_key TEXT PRIMARY KEY,state_json TEXT,updated_at INTEGER)');
  $db->exec("INSERT INTO badminton_state_store VALUES('global','{\"version\":4,\"players\":[{\"name\":\"Peter\"}],\"matches\":[]}',1700001200)");
  $db = null;

  $beforeHash = hash_file('sha256', $source);
  $first = bl_secure_export_sqlite_copy($source, $output);
  bl_export_test_assert(hash_file('sha256', $source) === $beforeHash, 'source database changed');
  bl_export_test_assert(($first['counts']['accounts'] ?? 0) === 1, 'account count failed');
  bl_export_test_assert(($first['counts']['gameFiles'] ?? 0) === 3, 'game file count failed');
  bl_export_test_assert(($first['intentionallyNotExportedFields']['users'] ?? []) === ['google_sub','pass_hash'], 'credential exclusion report failed');
  bl_export_test_assert(!is_dir($output . '/Migration Report'), 'migration metadata entered Saved Data');

  foreach([
    '/Account Index/accounts.json',
    '/Users/000007/account.json',
    '/Users/000007/favourites.json',
    '/Users/000007/binaural.json',
    '/Users/000007/voice.json',
    '/Users/000007/fitness.json',
    '/Users/000007/Games/pairs.json',
    '/Users/000007/Games/detect-word.json',
    '/Users/000007/Games/baseline-realm.json',
    '/Shared/Badminton/badminton.json',
  ] as $relative){
    bl_export_test_assert(is_file($output . $relative), 'canonical file missing: ' . $relative);
  }

  foreach([
    '/Users/000007/Games/detectword.json',
    '/Users/000007/Games/ninja.json',
    '/Shared/badminton-session.json',
  ] as $obsolete){
    bl_export_test_assert(!file_exists($output . $obsolete), 'non-canonical path was written: ' . $obsolete);
  }

  $accountPath = $output . '/Users/000007/account.json';
  $account = bl_export_test_read($accountPath);
  bl_export_test_assert(($account['data']['userId'] ?? 0) === 7, 'account user ID failed');
  $accountRaw = file_get_contents($accountPath);
  bl_export_test_assert(is_string($accountRaw), 'account read failed');
  foreach(['hash-value','google-7','passwordHash','pass_hash','google_sub'] as $secret){
    bl_export_test_assert(!str_contains($accountRaw, $secret), 'account projection exposed credential data: ' . $secret);
  }

  $game = bl_export_test_read($output . '/Users/000007/Games/detect-word.json');
  bl_export_test_assert(($game['data']['game'] ?? '') === 'detectword', 'game identity failed');
  bl_export_test_assert(($game['data']['profile']['level'] ?? 0) === 3, 'game profile failed');

  $badminton = bl_export_test_read($output . '/Shared/Badminton/badminton.json');
  bl_export_test_assert(($badminton['data']['version'] ?? 0) === 4, 'badminton version failed');
  bl_export_test_assert(!array_key_exists('states', $badminton['data']), 'obsolete Badminton wrapper remains');

  $fieldMap = bl_secure_export_field_map();
  bl_export_test_assert(
    ($fieldMap['badminton_state_store']['target'] ?? '') === 'Shared/Badminton/badminton.json',
    'Badminton field-map target failed'
  );
  bl_export_test_assert(
    ($fieldMap['games_profiles']['canonicalFiles']['detectword'] ?? '') === 'detect-word.json',
    'canonical game field map failed'
  );

  $verified = bl_verify_sqlite_export($source, $output);
  bl_export_test_assert($verified['ok'] === true, 'valid export did not verify: ' . json_encode($verified['errors']));
  bl_export_test_assert(($verified['representativeRecords']['games'][0] ?? '') === '000007:baseline-realm', 'representative game failed');

  $validated = bl_validate_sqlite_copy($source, $output, $evidence);
  bl_export_test_assert($validated['ok'] === true, 'combined validation did not pass');
  bl_export_test_assert($validated['readyForProductionCutover'] === false, 'validation incorrectly enabled cutover');
  bl_export_test_assert(($validated['gates']['verificationCompleted'] ?? false) === true, 'verification gate missing');
  bl_export_test_assert(($validated['gates']['authenticationCredentialsExcluded'] ?? false) === true, 'credential exclusion gate missing');
  bl_export_test_assert(!str_starts_with($evidence, $output . '/'), 'evidence path entered Saved Data');

  $evidenceRaw = file_get_contents($evidence);
  bl_export_test_assert(is_string($evidenceRaw), 'evidence read failed');
  foreach(['Peter','peter@example.test','hash-value','google-7'] as $secret){
    bl_export_test_assert(!str_contains($evidenceRaw, $secret), 'evidence exposed source value: ' . $secret);
  }

  $gamePath = $output . '/Users/000007/Games/pairs.json';
  $tampered = bl_export_test_read($gamePath);
  $tampered['data']['profile']['level'] = 99;
  file_put_contents($gamePath, json_encode($tampered, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n");
  chmod($gamePath, 0600);
  $rejected = bl_verify_sqlite_export($source, $output);
  bl_export_test_assert($rejected['ok'] === false, 'tampered export was accepted');

  bl_secure_export_sqlite_copy($source, $output);
  bl_export_test_assert(bl_verify_sqlite_export($source, $output)['ok'] === true, 'clean rerun did not restore validity');

  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec("UPDATE games_profiles SET profile_json='not-json' WHERE id=6");
  $db = null;
  $failedEvidence = $base . '/review/failed-evidence.json';
  $failedClosed = false;
  try{
    bl_validate_sqlite_copy($source, $output, $failedEvidence);
  }catch(BaselineSqliteCopyValidationException $error){
    $failedClosed = $error->getMessage() === 'copied_data_validation_failed';
  }
  bl_export_test_assert($failedClosed, 'invalid copied data did not fail closed');
  $failure = bl_export_test_read($failedEvidence);
  bl_export_test_assert(($failure['export']['invalidCount'] ?? 0) === 1, 'invalid source count missing');
  bl_export_test_assert(($failure['decision']['productionCutover'] ?? '') === 'blocked', 'failure evidence did not block cutover');

  echo "canonical resource-only Saved Data exporter, verifier and evidence contract passed\n";
}finally{
  bl_export_remove_tree($base);
}
