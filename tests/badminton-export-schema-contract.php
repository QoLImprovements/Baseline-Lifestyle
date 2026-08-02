<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_secure_exporter.php';

function bl_badminton_export_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_badminton_export_test_read(string $path): array {
  $raw = file_get_contents($path);
  if($raw === false) throw new RuntimeException('read_failed:' . $path);
  return json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
}

function bl_badminton_export_test_remove_tree(string $directory): void {
  if(!is_dir($directory)) return;
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
  );
  foreach($iterator as $item){
    if($item->isDir()) @rmdir($item->getPathname());
    else @unlink($item->getPathname());
  }
  @rmdir($directory);
}

$base = sys_get_temp_dir() . '/baseline-badminton-export-' . bin2hex(random_bytes(8));
$source = $base . '/copied.sqlite';
$output = $base . '/shadow/Saved Data';
@mkdir($base, 0700, true);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_badminton_export_contract');
  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('CREATE TABLE badminton_state_store(state_key TEXT PRIMARY KEY,state_json TEXT NOT NULL,updated_at INTEGER NOT NULL)');
  $db->exec("INSERT INTO badminton_state_store VALUES('global','{\"version\":4,\"players\":[],\"matches\":[],\"pairRatings\":{}}',1700001200)");
  $db = null;

  $report = bl_secure_export_sqlite_copy($source, $output);
  $path = $output . '/Shared/badminton-session.json';
  bl_badminton_export_test_assert(is_file($path), 'canonical badminton file missing');
  bl_badminton_export_test_assert(($report['counts']['badmintonStates'] ?? 0) === 1, 'badminton row count failed');
  bl_badminton_export_test_assert(($report['counts']['badmintonFiles'] ?? 0) === 1, 'badminton file count failed');
  $resource = bl_badminton_export_test_read($path);
  bl_badminton_export_test_assert(($resource['data']['version'] ?? 0) === 4, 'direct badminton state version missing');
  bl_badminton_export_test_assert(($resource['data']['players'] ?? null) === [], 'direct badminton players missing');
  bl_badminton_export_test_assert(!array_key_exists('states', $resource['data']), 'obsolete states wrapper remains');

  $fieldMap = bl_badminton_export_test_read($output . '/Migration Report/field-map.json');
  bl_badminton_export_test_assert(($fieldMap['badminton_state_store']['target'] ?? '') === 'Shared/badminton-session.json', 'badminton target path drifted');
  bl_badminton_export_test_assert(($fieldMap['badminton_state_store']['requiredStateKey'] ?? '') === 'global', 'global state key contract missing');

  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec("UPDATE badminton_state_store SET state_key='legacy'");
  $db = null;
  $wrongKey = bl_secure_export_sqlite_copy($source, $output);
  bl_badminton_export_test_assert(!is_file($path), 'wrong-key badminton state was exported');
  bl_badminton_export_test_assert(
    in_array(['table'=>'badminton_state_store','reason'=>'unexpected_state_key'], $wrongKey['invalid'] ?? [], true),
    'wrong badminton state key was not reported'
  );

  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec("UPDATE badminton_state_store SET state_key='global'");
  $db->exec("INSERT INTO badminton_state_store VALUES('other','{}',1700001300)");
  $db = null;
  $multiple = bl_secure_export_sqlite_copy($source, $output);
  bl_badminton_export_test_assert(!is_file($path), 'multiple badminton states were exported');
  bl_badminton_export_test_assert(
    in_array(['table'=>'badminton_state_store','reason'=>'unexpected_state_row_count'], $multiple['invalid'] ?? [], true),
    'multiple badminton rows were not reported'
  );

  echo "badminton direct export schema contract passed\n";
}finally{
  bl_export_remove_tree($base);
}
