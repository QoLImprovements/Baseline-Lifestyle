<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_source_inventory.php';

function bl_inventory_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_inventory_test_remove_tree(string $directory): void {
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

$base = sys_get_temp_dir() . '/baseline-source-inventory-' . bin2hex(random_bytes(8));
$source = $base . '/copied.sqlite';
@mkdir($base, 0700, true);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_inventory_contract');
  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  foreach([
    'users',
    'favourites',
    'binaural_presets',
    'voice_settings',
    'plans',
    'plan_sessions',
    'achievements',
    'games_profiles',
    'badminton_state_store',
    'password_reset_tokens',
    'rate_limit_events',
    'schema_migrations',
    'submissions',
  ] as $table){
    $db->exec('CREATE TABLE "' . $table . '"(id INTEGER PRIMARY KEY)');
  }
  $db = null;

  $inventory = bl_source_table_inventory($source);
  bl_inventory_test_assert(in_array('users', $inventory['exportedTables'], true), 'exported table was not classified');
  bl_inventory_test_assert(in_array('password_reset_tokens', $inventory['intentionallyExcludedTables'], true), 'excluded table was not classified');
  bl_inventory_test_assert($inventory['unclassifiedTables'] === ['submissions'], 'unclassified source table was not reported');

  $validationSource = file_get_contents(dirname(__DIR__) . '/sitewide/migration/sqlite_copy_validation.php');
  bl_inventory_test_assert(is_string($validationSource), 'validation source read failed');
  bl_inventory_test_assert(str_contains($validationSource, 'bl_source_table_inventory($source)'), 'combined validation does not run source inventory');
  bl_inventory_test_assert(str_contains($validationSource, "'unclassifiedSourceTablesClear'"), 'unclassified-table gate is missing');
  bl_inventory_test_assert(str_contains($validationSource, "'sourceTableInventory'=>\$sourceInventory"), 'privacy-safe source inventory evidence is missing');

  $db = new PDO('sqlite:' . $source, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $db->exec('DROP TABLE submissions');
  $db = null;
  $resolved = bl_source_table_inventory($source);
  bl_inventory_test_assert($resolved['unclassifiedTables'] === [], 'resolved source table remained unclassified');

  echo "sqlite source table inventory contract passed\n";
}finally{
  bl_inventory_test_remove_tree($base);
}
