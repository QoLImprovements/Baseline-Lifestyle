<?php
declare(strict_types=1);

require_once __DIR__ . '/private_environment.php';

// Default local SQLite location. This file is runtime state and must not be committed.
const BL_DB_PATH = __DIR__ . '/baseline.sqlite';
const BL_DB_ENV_KEY = 'BASELINE_DB_PATH';
const BL_MAX_NAME_LEN = 40;
const BL_MAX_EMAIL_LEN = 254;
const BL_MIN_PASSWORD_LEN = 8;
const BL_RESET_TOKEN_TTL = 3600; // 1 hour
const BL_CORE_SCHEMA_VERSION = 20260720;
const BL_MAX_JSON_BYTES = 2097152; // 2 MiB
const BL_CANONICAL_ORIGIN = 'https://baselinelifestyle.org';

require_once __DIR__ . '/http.php';
require_once __DIR__ . '/session.php';
require_once __DIR__ . '/authentication.php';
require_once __DIR__ . '/mail.php';
require_once __DIR__ . '/account_recovery.php';

function bl_db_path(): string {
  return bl_env(BL_DB_ENV_KEY, BL_DB_PATH);
}

function bl_now(): int {
  return time();
}

function bl_str_len(string $value): int {
  return function_exists('mb_strlen') ? (int)mb_strlen($value) : strlen($value);
}

function bl_google_redirect_url(): string {
  $configured = bl_env('BL_GOOGLE_REDIRECT_URI');
  if($configured !== '') return $configured;
  return bl_request_origin() . bl_site_base_path() . '/api/google_callback.php';
}

function bl_find_user_by_identifier(PDO $db, string $identifier): ?array {
  $identifier = trim($identifier);
  if($identifier === '') return null;

  if(str_contains($identifier, '@')){
    $stmt = $db->prepare('SELECT * FROM users WHERE email_normalized = :email LIMIT 1');
    $stmt->execute([':email' => bl_normalize_email($identifier)]);
    $row = $stmt->fetch();
    return $row ?: null;
  }

  $stmt = $db->prepare('SELECT * FROM users WHERE lower(name) = lower(:name) LIMIT 1');
  $stmt->execute([':name' => $identifier]);
  $row = $stmt->fetch();
  return $row ?: null;
}

function bl_find_user_by_email(PDO $db, string $email): ?array {
  $normalized = bl_normalize_email($email);
  if($normalized === '') return null;
  $stmt = $db->prepare('SELECT * FROM users WHERE email_normalized = :email LIMIT 1');
  $stmt->execute([':email' => $normalized]);
  $row = $stmt->fetch();
  return $row ?: null;
}

function bl_table_columns(PDO $db, string $table): array {
  $out = [];
  $rows = $db->query('PRAGMA table_info(' . $table . ')')->fetchAll() ?: [];
  foreach($rows as $row){
    $out[(string)$row['name']] = $row;
  }
  return $out;
}

function bl_column_exists(PDO $db, string $table, string $column): bool {
  $cols = bl_table_columns($db, $table);
  return array_key_exists($column, $cols);
}

function bl_ensure_schema(PDO $db): void {
  $db->exec('CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL DEFAULT "",
    email_normalized TEXT NOT NULL DEFAULT "",
    pass_hash TEXT NOT NULL DEFAULT "",
    auth_provider TEXT NOT NULL DEFAULT "password",
    google_sub TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL DEFAULT 0,
    last_login_at INTEGER
  )');

  if(!bl_column_exists($db, 'users', 'email')){
    $db->exec('ALTER TABLE users ADD COLUMN email TEXT NOT NULL DEFAULT ""');
  }
  if(!bl_column_exists($db, 'users', 'email_normalized')){
    $db->exec('ALTER TABLE users ADD COLUMN email_normalized TEXT NOT NULL DEFAULT ""');
  }
  if(!bl_column_exists($db, 'users', 'auth_provider')){
    $db->exec('ALTER TABLE users ADD COLUMN auth_provider TEXT NOT NULL DEFAULT "password"');
  }
  if(!bl_column_exists($db, 'users', 'google_sub')){
    $db->exec('ALTER TABLE users ADD COLUMN google_sub TEXT');
  }
  if(!bl_column_exists($db, 'users', 'updated_at')){
    $db->exec('ALTER TABLE users ADD COLUMN updated_at INTEGER NOT NULL DEFAULT 0');
  }
  if(!bl_column_exists($db, 'users', 'last_login_at')){
    $db->exec('ALTER TABLE users ADD COLUMN last_login_at INTEGER');
  }

  $db->exec('UPDATE users SET email = COALESCE(email, ""), email_normalized = CASE WHEN trim(COALESCE(email, "")) = "" THEN "" ELSE lower(trim(email)) END');
  $db->exec('UPDATE users SET auth_provider = CASE WHEN trim(COALESCE(auth_provider, "")) = "" THEN "password" ELSE auth_provider END');
  $db->exec('UPDATE users SET updated_at = CASE WHEN COALESCE(updated_at, 0) <= 0 THEN created_at ELSE updated_at END');

  $db->exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email_normalized ON users(email_normalized) WHERE email_normalized <> ""');
  $db->exec('CREATE UNIQUE INDEX IF NOT EXISTS idx_users_google_sub ON users(google_sub) WHERE google_sub IS NOT NULL');

  $db->exec('CREATE TABLE IF NOT EXISTS password_reset_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    selector TEXT NOT NULL UNIQUE,
    verifier_hash TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    used_at INTEGER,
    created_at INTEGER NOT NULL,
    requested_ip TEXT,
    requested_ua TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_password_reset_user ON password_reset_tokens(user_id)');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_password_reset_expires ON password_reset_tokens(expires_at)');

  $db->exec('CREATE TABLE IF NOT EXISTS favourites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    app TEXT NOT NULL,
    recipe_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    UNIQUE(user_id, app, recipe_id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_favourites_user_app ON favourites(user_id, app)');

  $db->exec('CREATE TABLE IF NOT EXISTS binaural_presets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    beat_hz REAL NOT NULL,
    carrier_hz REAL NOT NULL,
    bed_type TEXT NOT NULL,
    beat_vol REAL NOT NULL,
    bed_vol REAL NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    UNIQUE(user_id, name),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_binaural_user ON binaural_presets(user_id)');

  $db->exec('CREATE TABLE IF NOT EXISTS voice_settings (
    user_id INTEGER PRIMARY KEY,
    settings_json TEXT NOT NULL,
    updated_at INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )');

  $db->exec('CREATE TABLE IF NOT EXISTS schema_migrations (
    scope TEXT PRIMARY KEY,
    version INTEGER NOT NULL,
    applied_at INTEGER NOT NULL
  )');

  $db->exec('CREATE TABLE IF NOT EXISTS rate_limit_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bucket_hash TEXT NOT NULL,
    created_at INTEGER NOT NULL
  )');
  $db->exec('CREATE INDEX IF NOT EXISTS idx_rate_limit_bucket_time ON rate_limit_events(bucket_hash, created_at)');
}

function bl_apply_core_schema(PDO $db): void {
  $current = (int)$db->query('PRAGMA user_version')->fetchColumn();
  if($current >= BL_CORE_SCHEMA_VERSION) return;

  $db->beginTransaction();
  try {
    bl_ensure_schema($db);
    $db->exec('PRAGMA user_version = ' . BL_CORE_SCHEMA_VERSION);
    $db->commit();
  } catch(Throwable $error){
    if($db->inTransaction()) $db->rollBack();
    throw $error;
  }
}

function bl_apply_schema_migration(PDO $db, string $scope, int $version, callable $migration): void {
  $stmt = $db->prepare('SELECT version FROM schema_migrations WHERE scope = :scope LIMIT 1');
  $stmt->execute([':scope' => $scope]);
  if((int)($stmt->fetchColumn() ?: 0) >= $version) return;

  $db->beginTransaction();
  try {
    $migration($db);
    $stmt = $db->prepare('INSERT INTO schema_migrations(scope, version, applied_at) VALUES(:scope,:version,:applied) ON CONFLICT(scope) DO UPDATE SET version = excluded.version, applied_at = excluded.applied_at');
    $stmt->execute([':scope'=>$scope, ':version'=>$version, ':applied'=>bl_now()]);
    $db->commit();
  } catch(Throwable $error){
    if($db->inTransaction()) $db->rollBack();
    throw $error;
  }
}

function bl_rate_limit_allow(string $scope, string $subject, int $limit, int $windowSeconds): bool {
  $db = bl_db();
  $ip = substr((string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'), 0, 64);
  $bucket = hash('sha256', $scope . '|' . $ip . '|' . strtolower(trim($subject)));
  $cutoff = bl_now() - max(1, $windowSeconds);

  $db->prepare('DELETE FROM rate_limit_events WHERE bucket_hash = :bucket AND created_at < :cutoff')
    ->execute([':bucket'=>$bucket, ':cutoff'=>$cutoff]);

  $stmt = $db->prepare('SELECT COUNT(*) FROM rate_limit_events WHERE bucket_hash = :bucket AND created_at >= :cutoff');
  $stmt->execute([':bucket'=>$bucket, ':cutoff'=>$cutoff]);
  if((int)$stmt->fetchColumn() >= max(1, $limit)) return false;

  $db->prepare('INSERT INTO rate_limit_events(bucket_hash, created_at) VALUES(:bucket,:created)')
    ->execute([':bucket'=>$bucket, ':created'=>bl_now()]);

  // Cheap, bounded housekeeping without adding work to every request.
  if(random_int(1, 50) === 1){
    $db->prepare('DELETE FROM rate_limit_events WHERE created_at < :cutoff')
      ->execute([':cutoff'=>bl_now() - 86400]);
  }
  return true;
}

function bl_require_rate_limit(string $scope, string $subject, int $limit, int $windowSeconds): void {
  if(bl_rate_limit_allow($scope, $subject, $limit, $windowSeconds)) return;
  header('Retry-After: ' . max(1, $windowSeconds));
  bl_json(['ok'=>false,'error'=>'too_many_requests'], 429);
}

function bl_db(): PDO {
  static $pdo = null;
  if($pdo instanceof PDO) return $pdo;

  $dbPath = bl_db_path();
  $pdo = new PDO('sqlite:' . $dbPath, null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);

  bl_apply_core_schema($pdo);

  return $pdo;
}
