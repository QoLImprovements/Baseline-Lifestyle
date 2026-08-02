<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_export_verifier.php';

function bl_export_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_export_test_read(string $path): array {
  $raw = file_get_contents($path);
  if($raw === false) throw new RuntimeException('read_failed:' . $path);
  return json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
}

function bl_export_test_tree_hash(string $directory): string {
  $files = [];
  $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS));
  foreach($iterator as $item) if($item->isFile()) $files[] = $item->getPathname();
  sort($files);
  return hash('sha256', implode("\n", array_map(static function(string $file) use ($directory): string {
    return substr($file, strlen($directory)) . ':' . hash_file('sha256', $file);
  }, $files)));
}

$base = sys_get_temp_dir() . '/baseline-sqlite-export-' . bin2hex(random_bytes(8));
$source = $base . '/copied.sqlite';
$output = $base . '/shadow/Saved Data';
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
  $db->exec('CREATE TABLE badminton_state_store(state_key TEXT PRIMARY KEY,state_json TEXT,updated_at INTEGER)');
  $db->exec("INSERT INTO badminton_state_store VALUES('main','{\"players\":[{\"name\":\"Peter\"}]}',1700001200)");
  $db = null;

  $beforeHash = hash_file('sha256', $source);
  $first = bl_export_sqlite_copy($source, $output);
  bl_export_test_assert(hash_file('sha256', $source) === $beforeHash, 'source database changed');
  bl_export_test_assert(($first['counts']['accounts'] ?? 0) === 1, 'account count failed');
  bl_export_test_assert(is_file($output . '/Users/000007/account.json'), 'account file missing');
  bl_export_test_assert(is_file($output . '/Users/000007/favourites.json'), 'favourites file missing');
  bl_export_test_assert(is_file($output . '/Users/000007/binaural.json'), 'binaural file missing');
  bl_export_test_assert(is_file($output . '/Users/000007/voice.json'), 'voice file missing');
  bl_export_test_assert(is_file($output . '/Users/000007/fitness.json'), 'fitness file missing');
  bl_export_test_assert(is_file($output . '/Users/000007/Games/pairs.json'), 'game file missing');
  bl_export_test_assert(is_file($output . '/Shared/Badminton/badminton.json'), 'badminton file missing');

  $account = bl_export_test_read($output . '/Users/000007/account.json');
  bl_export_test_assert(($account['data']['authentication']['passwordHash'] ?? '') === 'hash-value', 'password hash not preserved');
  $index = bl_export_test_read($output . '/Account Index/accounts.json');
  bl_export_test_assert(($index['data']['byEmail']['peter@example.test'] ?? '') === '000007', 'account index failed');
  $game = bl_export_test_read($output . '/Users/000007/Games/pairs.json');
  bl_export_test_assert(($game['data']['profile']['level'] ?? 0) === 2, 'game profile failed');

  $firstTreeHash = bl_export_test_tree_hash($output);
  bl_export_sqlite_copy($source, $output);
  $secondTreeHash = bl_export_test_tree_hash($output);
  bl_export_test_assert($firstTreeHash === $secondTreeHash, 'rerun was not deterministic');

  $verified = bl_verify_sqlite_export($source, $output);
  bl_export_test_assert($verified['ok'] === true, 'valid export did not verify: ' . json_encode($verified['errors']));
  bl_export_test_assert(($verified['counts']['fitnessSessions'] ?? 0) === 1, 'verification counts failed');
  bl_export_test_assert(($verified['representativeRecords']['users'][0] ?? '') === '000007', 'representative user failed');
  bl_export_test_assert(($verified['representativeRecords']['games'][0] ?? '') === '000007:pairs', 'representative game failed');

  $gamePath = $output . '/Users/000007/Games/pairs.json';
  $tampered = bl_export_test_read($gamePath);
  $tampered['data']['profile']['level'] = 99;
  file_put_contents($gamePath, json_encode($tampered, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n");
  chmod($gamePath, 0600);
  $rejected = bl_verify_sqlite_export($source, $output);
  bl_export_test_assert($rejected['ok'] === false, 'tampered export was accepted');
  bl_export_test_assert(count($rejected['errors']) > 0, 'tamper rejection had no evidence');

  bl_export_sqlite_copy($source, $output);
  bl_export_test_assert(bl_verify_sqlite_export($source, $output)['ok'] === true, 'clean rerun did not restore validity');

  echo "sqlite exporter and verifier contract passed\n";
}finally{
  bl_export_remove_tree($base);
}
