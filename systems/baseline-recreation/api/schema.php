<?php
declare(strict_types=1);
require_once __DIR__ . '/../../../sitewide/api/config.php';

/** Recreation-owned database schema. */
function bl_games_ensure_schema(PDO $db): void {
  bl_apply_schema_migration($db, 'games_hub', 1, static function(PDO $db): void {
    $db->exec('CREATE TABLE IF NOT EXISTS games_profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      app TEXT NOT NULL,
      profile_json TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      UNIQUE(user_id, app),
      FOREIGN KEY(user_id) REFERENCES users(id)
    )');
    $db->exec('CREATE INDEX IF NOT EXISTS idx_games_profiles_user_app ON games_profiles(user_id, app)');
  });
}

function bl_games_db(): PDO {
  $db = bl_db();
  bl_games_ensure_schema($db);
  return $db;
}
