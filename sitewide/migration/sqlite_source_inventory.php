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

  try{
    $db = bl_export_open_readonly($source);
    $rows = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name ASC")
      ->fetchAll(PDO::FETCH_COLUMN) ?: [];
    $db = null;
  }catch(Throwable $error){
    throw new BaselineSqliteSourceInventoryException('source_inventory_failed', 0, $error);
  }

  $sourceTables = bl_source_inventory_safe_names(array_map('strval', $rows));
  $classified = array_values(array_unique(array_merge($exported, $intentionallyExcluded)));
  sort($classified);
  $unclassified = array_values(array_diff($sourceTables, $classified));
  sort($unclassified);

  return [
    'sourceTables'=>$sourceTables,
    'exportedTables'=>bl_source_inventory_present($sourceTables, $exported),
    'intentionallyExcludedTables'=>bl_source_inventory_present($sourceTables, $intentionallyExcluded),
    'unclassifiedTables'=>$unclassified,
  ];
}
