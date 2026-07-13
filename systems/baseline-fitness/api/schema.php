<?php
declare(strict_types=1);
require_once __DIR__ . '/../../../sitewide/api/config.php';

/** Fitness-owned database schema. */
function bl_fitness_ensure_schema(PDO $db): void {
  $db->exec('CREATE TABLE IF NOT EXISTS plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    plan_text TEXT NOT NULL,
    plan_json TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');

  $db->exec('CREATE TABLE IF NOT EXISTS plan_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    session_index INTEGER NOT NULL,
    scheduled_date TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT "planned",
    completed_at INTEGER,
    updated_at INTEGER NOT NULL,
    UNIQUE(plan_id, session_index),
    FOREIGN KEY(plan_id) REFERENCES plans(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_plans_user_created ON plans(user_id, created_at DESC, id DESC)');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_plan_sessions_user ON plan_sessions(user_id)');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_plan_sessions_plan ON plan_sessions(plan_id)');

  $db->exec('CREATE TABLE IF NOT EXISTS achievements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    code TEXT NOT NULL,
    unlocked_at INTEGER NOT NULL,
    UNIQUE(user_id, code),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id)');
}

function bl_fitness_db(): PDO {
  $db = bl_db();
  bl_fitness_ensure_schema($db);
  return $db;
}
