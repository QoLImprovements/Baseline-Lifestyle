<?php
declare(strict_types=1);
require_once __DIR__ . '/../../../sitewide/api/config.php';

/** Baseline Personal Care account-owned routine schema. */
function bl_skincare_ensure_schema(PDO $db): void {
  bl_apply_schema_migration($db, 'skincare', 1, static function(PDO $db): void {
    $db->exec('CREATE TABLE IF NOT EXISTS skincare_routines (
      user_id INTEGER PRIMARY KEY,
      visibility TEXT NOT NULL DEFAULT "private",
      routine_json TEXT NOT NULL DEFAULT "[]",
      logs_json TEXT NOT NULL DEFAULT "{}",
      updated_at INTEGER NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )');
    $db->exec('CREATE INDEX IF NOT EXISTS idx_skincare_routines_visibility_updated ON skincare_routines(visibility, updated_at DESC)');
  });

  bl_apply_schema_migration($db, 'skincare', 2, static function(PDO $db): void {
    $db->exec('CREATE TABLE IF NOT EXISTS skincare_routine_groups (
      user_id INTEGER PRIMARY KEY,
      groups_json TEXT NOT NULL DEFAULT "[]",
      assignments_json TEXT NOT NULL DEFAULT "{}",
      updated_at INTEGER NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )');
  });
}

function bl_skincare_db(): PDO {
  $db = bl_db();
  bl_skincare_ensure_schema($db);
  return $db;
}
