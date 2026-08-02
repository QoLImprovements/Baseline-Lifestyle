<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_secure_exporter.php';

final class BaselineSqliteSourceInventoryException extends RuntimeException {}

function bl_source_inventory_safe_names(array $values): array {
  $safe = [];
  foreach($values as $value){
    if(!is_string($value) || preg_match('/^[A-Za-z0-9._-]{1,128}$/', $value) !== 1){
      throw new BaselineSqliteSourceInventoryException('invalid_source_table_name');
    }
    $safe[] = $value;
  }
  $safe = array_values(array_unique($safe));
  sort($safe);
  return $safe;
}

function bl_source_inventory_present(array $sourceTables, array $classification): array {
  return array_values(array_intersect($sourceTables, $classification));
}

function bl_source_inventory_table_count(PDO $db, string $table): int {
  if(preg_match('/^[A-Za-z0-9._-]{1,128}$/', $table) !== 1){
    throw new BaselineSqliteSourceInventoryException('invalid_source_table_name');
  }
  return max(0, (int)$db->query('SELECT COUNT(*) FROM "' . str_replace('"', '""', $table) . '"')->fetchColumn());
}

function bl_source_table_inventory(string $sourcePath): array {
  $source = bl_export_normalize_path($sourcePath);
  if(!is_file($source) || !is_readable($source) || is_link($source)){
    throw new BaselineSqliteSourceInventoryException('invalid_source');
  }

  $exported = bl_source_inventory_safe_names([
    'users',
    'favourites',
    'binaural_presets',
    'voice_settings',
    'plans',
    'plan_sessions',
    'achievements',
    'games_profiles',
    'badminton_state_store',
  ]);
  $intentionallyExcluded = bl_source_inventory_safe_names([
    'password_reset_tokens',
    'rate_limit_events',
    'schema_migrations',
  ]);
  $retiredEmptyOnly = bl_source_inventory_safe_names([
    'submissions',
  ]);

  try{
    $db = bl_export_open_readonly($source);
    $rows = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name ASC")
      ->fetchAll(PDO::FETCH_COLUMN) ?: [];
    $sourceTables = bl_source_inventory_safe_names(array_map('strval', $rows));
    $acceptedRetired = [];
    $nonEmptyRetired = [];
    foreach(bl_source_inventory_present($sourceTables, $retiredEmptyOnly) as $table){
      if(bl_source_inventory_table_count($db, $table) === 0) $acceptedRetired[] = $table;
      else $nonEmptyRetired[] = $table;
    }
    $db = null;
  }catch(Throwable $error){
    throw new BaselineSqliteSourceInventoryException('source_inventory_failed', 0, $error);
  }

  sort($acceptedRetired);
  sort($nonEmptyRetired);
  $classified = array_values(array_unique(array_merge($exported, $intentionallyExcluded, $acceptedRetired)));
  sort($classified);
  $unclassified = array_values(array_unique(array_merge(
    array_diff($sourceTables, $classified),
    $nonEmptyRetired
  )));
  sort($unclassified);

  return [
    'sourceTables'=>$sourceTables,
    'exportedTables'=>bl_source_inventory_present($sourceTables, $exported),
    'intentionallyExcludedTables'=>bl_source_inventory_present($sourceTables, $intentionallyExcluded),
    'retiredEmptyTables'=>$acceptedRetired,
    'nonEmptyRetiredTables'=>$nonEmptyRetired,
    'unclassifiedTables'=>$unclassified,
  ];
}
