<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_secure_exporter.php';

function bl_voice_export_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_voice_export_test_read(string $path): array {
  $raw = file_get_contents($path);
  if($raw === false) throw new RuntimeException('read_failed:' . $path);
  return json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
}

$base = sys_get_temp_dir() . '/baseline-voice-export-' . bin2hex(random_bytes(8));
$source = $base . '/copied.sqlite';
$output = $base . '/shadow/Saved Data';
@mkdir($base, 0700, true);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_voice_export_contract');
  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('CREATE TABLE users(id INTEGER PRIMARY KEY,name TEXT,email TEXT,email_normalized TEXT,pass_hash TEXT,auth_provider TEXT,google_sub TEXT,created_at INTEGER,updated_at INTEGER,last_login_at INTEGER)');
  $db->exec("INSERT INTO users VALUES(7,'Fixture','fixture@example.test','fixture@example.test','hash','password',NULL,1700000000,1700000100,NULL)");
  $db->exec('CREATE TABLE voice_settings(user_id INTEGER PRIMARY KEY,settings_json TEXT NOT NULL,updated_at INTEGER NOT NULL)');
  $settings = json_encode([
    'enabled'=>true,
    'spokenResponses'=>false,
    'language'=>'en-GB',
    'voiceURI'=>'fixture-voice',
    'rate'=>1.25,
    'pitch'=>0.9,
    'volume'=>0.8,
    'confirmNumbers'=>true,
    'confirmCommands'=>false,
    'restAnnouncements'=>true,
    'countdownAnnouncements'=>false,
    'maximumRestSeconds'=>180,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
  $stmt = $db->prepare('INSERT INTO voice_settings VALUES(7,:settings,1700000600)');
  $stmt->execute([':settings'=>$settings]);
  $db = null;

  $report = bl_secure_export_sqlite_copy($source, $output);
  $path = $output . '/Users/000007/voice.json';
  bl_voice_export_test_assert(is_file($path), 'voice file missing');
  bl_voice_export_test_assert(($report['counts']['voiceSettings'] ?? 0) === 1, 'voice row count failed');
  bl_voice_export_test_assert(($report['counts']['voiceFiles'] ?? 0) === 1, 'voice file count failed');
  $resource = bl_voice_export_test_read($path);
  bl_voice_export_test_assert(($resource['data']['enabled'] ?? false) === true, 'direct enabled setting missing');
  bl_voice_export_test_assert(($resource['data']['maximumRestSeconds'] ?? 0) === 180, 'direct rest limit missing');
  bl_voice_export_test_assert(($resource['data']['voiceURI'] ?? '') === 'fixture-voice', 'voice URI missing');
  bl_voice_export_test_assert(!array_key_exists('settings', $resource['data']), 'obsolete settings wrapper remains');
  bl_voice_export_test_assert(count($resource['data']) === 12, 'voice settings allowlist drifted');

  $fieldMap = bl_voice_export_test_read($output . '/Migration Report/field-map.json');
  bl_voice_export_test_assert(($fieldMap['voice_settings']['target'] ?? '') === 'Users/{padded-id}/voice.json', 'voice target drifted');
  bl_voice_export_test_assert(count($fieldMap['voice_settings']['allowedSettings'] ?? []) === 12, 'voice field map allowlist drifted');

  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $settings = json_encode([
    'enabled'=>'true',
    'language'=>'',
    'rate'=>99,
    'pitch'=>0,
    'volume'=>-5,
    'maximumRestSeconds'=>9999,
    'legacyWakeWord'=>'baseline',
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
  $stmt = $db->prepare('UPDATE voice_settings SET settings_json=:settings WHERE user_id=7');
  $stmt->execute([':settings'=>$settings]);
  $db = null;

  $review = bl_secure_export_sqlite_copy($source, $output);
  $normalised = bl_voice_export_test_read($path);
  bl_voice_export_test_assert(($normalised['data']['enabled'] ?? false) === true, 'boolean normalisation failed');
  bl_voice_export_test_assert(($normalised['data']['language'] ?? '') === 'en-GB', 'language default failed');
  bl_voice_export_test_assert(($normalised['data']['rate'] ?? 0) === 2.0, 'rate clamp failed');
  bl_voice_export_test_assert(($normalised['data']['pitch'] ?? 0) === 0.5, 'pitch clamp failed');
  bl_voice_export_test_assert(($normalised['data']['volume'] ?? -1) === 0.0, 'volume clamp failed');
  bl_voice_export_test_assert(($normalised['data']['maximumRestSeconds'] ?? 0) === 600, 'rest limit clamp failed');
  bl_voice_export_test_assert(
    ($review['unmappedFields']['voice_settings.settings_json'] ?? []) === ['legacyWakeWord'],
    'unknown voice setting was not reported'
  );
  bl_voice_export_test_assert(!array_key_exists('legacyWakeWord', $normalised['data']), 'unknown voice setting entered resource');

  echo "voice direct export schema contract passed\n";
}finally{
  bl_export_remove_tree($base);
}
