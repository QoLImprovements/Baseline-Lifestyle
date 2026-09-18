<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/prepare_saved_data_cutover.php';

function bl_cutover_package_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_cutover_package_create_fixture(string $path): void {
  $db = new PDO('sqlite:' . $path, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
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
  $db->exec('CREATE TABLE password_reset_tokens(id INTEGER PRIMARY KEY,user_id INTEGER,selector TEXT,verifier_hash TEXT,expires_at INTEGER,created_at INTEGER,used_at INTEGER)');
  $db->exec('CREATE TABLE rate_limit_events(id INTEGER PRIMARY KEY,bucket TEXT,subject_hash TEXT,created_at INTEGER)');
  $db->exec('CREATE TABLE schema_migrations(component TEXT,version INTEGER,applied_at INTEGER,PRIMARY KEY(component,version))');

  $db->exec("INSERT INTO users VALUES(7,'Peter','peter@example.test','peter@example.test','secret-hash','password','google-secret',1700000000,1700000100,1700000200)");
  $db->exec("INSERT INTO favourites(user_id,app,recipe_id,created_at) VALUES(7,'food','r-1',1700000300)");
  $db->exec("INSERT INTO binaural_presets(user_id,name,beat_hz,carrier_hz,bed_type,beat_vol,bed_vol,created_at,updated_at) VALUES(7,'Focus',10,200,'brown',0.5,0.25,1700000400,1700000500)");
  $db->exec("INSERT INTO voice_settings VALUES(7,'{\"enabled\":true}',1700000600)");
  $db->exec("INSERT INTO plans(id,user_id,created_at,plan_text,plan_json) VALUES(3,7,1700000700,'fixture plan','{\"sessions\":2,\"frequency\":\"2x\",\"startDate\":\"2026-08-03\"}')");
  $db->exec("INSERT INTO plan_sessions(plan_id,user_id,session_index,scheduled_date,status,completed_at,updated_at) VALUES(3,7,1,'2026-08-03','planned',NULL,1700000800)");
  $db->exec("INSERT INTO plan_sessions(plan_id,user_id,session_index,scheduled_date,status,completed_at,updated_at) VALUES(3,7,2,'2026-08-07','planned',NULL,1700000801)");
  $db->exec("INSERT INTO achievements(user_id,code,unlocked_at) VALUES(7,'first_session',1700000900)");
  $db->exec("INSERT INTO games_profiles(user_id,app,profile_json,created_at,updated_at) VALUES(7,'pairs','{\"app\":\"pairs\",\"level\":2}',1700001000,1700001100)");
  $db->exec("INSERT INTO badminton_state_store VALUES('global','{\"version\":4,\"players\":[],\"matches\":[]}',1700001200)");
  $db->exec("INSERT INTO password_reset_tokens VALUES(1,7,'selector-1','reset-secret-hash',1700010000,1700001300,NULL)");
  $db->exec("INSERT INTO rate_limit_events VALUES(1,'bucket','subject-hash',1700001400)");
  $db->exec("INSERT INTO schema_migrations VALUES('fixture',1,1700001500)");
  $db = null;
  @chmod($path, 0600);
}

$base = sys_get_temp_dir() . '/baseline-cutover-package-' . bin2hex(random_bytes(8));
$documentRoot = $base . '/public_html';
$privateRoot = $base . '/private';
$runtime = $privateRoot . '/Runtime';
$saved = $privateRoot . '/Saved Data';
$evidence = $privateRoot . '/Migration Evidence';
$active = $privateRoot . '/baseline.sqlite';
$snapshot = $evidence . '/mirror-final.sqlite';
$rollback = $evidence . '/rollback-current.sqlite';

@mkdir($documentRoot, 0700, true);
@mkdir($runtime, 0700, true);
@mkdir($saved, 0700, true);
@mkdir($evidence, 0700, true);
@chmod($documentRoot, 0700);
@chmod($privateRoot, 0700);
@chmod($runtime, 0700);
@chmod($saved, 0700);
@chmod($evidence, 0700);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_cutover_package_contract');

  bl_cutover_package_create_fixture($active);
  if(!copy($active, $snapshot)) throw new RuntimeException('snapshot_copy_failed');
  @chmod($snapshot, 0600);

  $export = bl_secure_export_sqlite_copy($snapshot, $saved);
  bl_cutover_package_assert(($export['invalid'] ?? []) === [], 'fixture export invalid');

  $settings = [
    'database'=>['value'=>$active,'source'=>'process'],
    'savedData'=>['value'=>$saved,'source'=>'process'],
    'runtime'=>['value'=>$runtime,'source'=>'process'],
    'authority'=>['value'=>'mirror','source'=>'process'],
  ];

  $result = bl_prepare_saved_data_cutover($snapshot, $saved, $rollback, $documentRoot, $settings);
  bl_cutover_package_assert(($result['ok'] ?? false) === true, 'valid mirror cutover package did not pass: ' . json_encode($result));
  bl_cutover_package_assert(($result['readyForSavedDataMode'] ?? false) === true, 'valid package not marked ready');
  bl_cutover_package_assert(($result['productionAuthorityChanged'] ?? true) === false, 'package claimed authority change');
  bl_cutover_package_assert(($result['gates']['authorityIsMirror'] ?? false) === true, 'mirror authority gate failed');
  bl_cutover_package_assert(($result['gates']['snapshotMatchesLiveDatabase'] ?? false) === true, 'fresh snapshot mismatch');
  bl_cutover_package_assert(($result['gates']['semanticSavedDataVerification'] ?? false) === true, 'semantic verification failed');
  bl_cutover_package_assert(($result['gates']['rollbackCopyHealthy'] ?? false) === true, 'rollback health gate failed');
  bl_cutover_package_assert(($result['gates']['liveDatabaseStableDuringPreparation'] ?? false) === true, 'live database stability gate failed');
  bl_cutover_package_assert(($result['gates']['savedDataStableDuringPreparation'] ?? false) === true, 'Saved Data stability gate failed');
  bl_cutover_package_assert(is_file($rollback), 'rollback copy was not created');

  $savedDataAuthority = $settings;
  $savedDataAuthority['authority']['value'] = 'saved-data';
  $blockedAuthorityOutput = $evidence . '/blocked-authority.sqlite';
  $authorityResult = bl_prepare_saved_data_cutover($snapshot, $saved, $blockedAuthorityOutput, $documentRoot, $savedDataAuthority);
  bl_cutover_package_assert(($authorityResult['ok'] ?? true) === false, 'saved-data authority incorrectly passed package preparation');
  bl_cutover_package_assert(($authorityResult['gates']['authorityIsMirror'] ?? true) === false, 'saved-data authority gate not blocked');
  bl_cutover_package_assert(!is_file($blockedAuthorityOutput), 'blocked authority created rollback output');

  $mismatchSettings = $settings;
  $mismatchSettings['savedData']['value'] = $privateRoot . '/Other Saved Data';
  $mismatchOutput = $evidence . '/blocked-path.sqlite';
  $mismatchResult = bl_prepare_saved_data_cutover($snapshot, $saved, $mismatchOutput, $documentRoot, $mismatchSettings);
  bl_cutover_package_assert(($mismatchResult['ok'] ?? true) === false, 'configured Saved Data mismatch incorrectly passed');
  bl_cutover_package_assert(($mismatchResult['gates']['configuredSavedDataMatchesArgument'] ?? true) === false, 'configured Saved Data mismatch gate not blocked');

  $db = new PDO('sqlite:' . $active, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec("UPDATE users SET pass_hash='new-secret-hash' WHERE id=7");
  $db = null;
  @chmod($active, 0600);

  $staleOutput = $evidence . '/blocked-stale.sqlite';
  $staleResult = bl_prepare_saved_data_cutover($snapshot, $saved, $staleOutput, $documentRoot, $settings);
  bl_cutover_package_assert(($staleResult['ok'] ?? true) === false, 'stale auth snapshot incorrectly passed');
  bl_cutover_package_assert(($staleResult['gates']['snapshotMatchesLiveDatabase'] ?? true) === false, 'auth-only snapshot drift was not detected');
  bl_cutover_package_assert(
    ($staleResult['databaseFingerprints']['activeSha256'] ?? '') !== ($staleResult['databaseFingerprints']['snapshotSha256'] ?? ''),
    'stale auth snapshot fingerprints did not diverge'
  );
  bl_cutover_package_assert(!is_file($staleOutput), 'stale snapshot created rollback output');

  echo "Saved Data cutover package contract passed\n";
}finally{
  if(is_dir($base)){
    $iterator = new RecursiveIteratorIterator(
      new RecursiveDirectoryIterator($base, FilesystemIterator::SKIP_DOTS),
      RecursiveIteratorIterator::CHILD_FIRST
    );
    foreach($iterator as $item){
      $path = $item->getPathname();
      if($item->isLink() || $item->isFile()) @unlink($path);
      elseif($item->isDir()) @rmdir($path);
    }
    @rmdir($base);
  }
}
