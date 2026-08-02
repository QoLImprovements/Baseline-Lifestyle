<?php
declare(strict_types=1);

$dbPath = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'baseline-database-contract-' . bin2hex(random_bytes(8)) . '.sqlite';
putenv('BASELINE_DB_PATH=' . $dbPath);
$_SERVER['REMOTE_ADDR'] = '198.51.100.20';

function database_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

try {
  require_once dirname(__DIR__) . '/sitewide/api/config.php';

  database_assert(bl_db_path() === $dbPath, 'configured_path_ignored');
  database_assert(!file_exists($dbPath), 'temporary_database_already_exists');

  $db = bl_db();
  database_assert(file_exists($dbPath), 'temporary_database_not_created');
  database_assert($db === bl_db(), 'database_connection_not_reused');
  database_assert($db->query('PRAGMA quick_check')->fetchColumn() === 'ok', 'database_integrity_failed');
  database_assert((int)$db->query('PRAGMA user_version')->fetchColumn() === BL_CORE_SCHEMA_VERSION, 'core_schema_version_incorrect');

  $tables = $db->query("SELECT name FROM sqlite_master WHERE type = 'table'")->fetchAll(PDO::FETCH_COLUMN) ?: [];
  foreach(['users','password_reset_tokens','favourites','binaural_presets','voice_settings','schema_migrations','rate_limit_events'] as $table){
    database_assert(in_array($table, $tables, true), 'missing_table_' . $table);
  }

  $migrationRuns = 0;
  $migration = function(PDO $migrationDb) use (&$migrationRuns): void {
    $migrationRuns++;
    $migrationDb->exec('CREATE TABLE database_contract_marker (id INTEGER PRIMARY KEY)');
  };
  bl_apply_schema_migration($db, 'database-contract', 1, $migration);
  bl_apply_schema_migration($db, 'database-contract', 1, $migration);
  database_assert($migrationRuns === 1, 'migration_reapplied');
  $version = (int)$db->query("SELECT version FROM schema_migrations WHERE scope = 'database-contract'")->fetchColumn();
  database_assert($version === 1, 'migration_version_not_recorded');

  database_assert(bl_rate_limit_allow('contract', 'Person@Example.Test', 1, 60), 'first_rate_limit_event_rejected');
  database_assert(!bl_rate_limit_allow('contract', 'person@example.test', 1, 60), 'rate_limit_not_enforced');
  database_assert((int)$db->query('SELECT COUNT(*) FROM rate_limit_events')->fetchColumn() === 1, 'rate_limit_event_count_incorrect');

  echo "database contract passed\n";
} finally {
  putenv('BASELINE_DB_PATH');
  foreach([$dbPath, $dbPath . '-wal', $dbPath . '-shm'] as $temporaryPath){
    if(file_exists($temporaryPath)) @unlink($temporaryPath);
  }
}
