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

function bl_db_path(): string {
  return bl_env(BL_DB_ENV_KEY, BL_DB_PATH);
}

function bl_now(): int {
  return time();
}

function bl_str_len(string $value): int {
  return function_exists('mb_strlen') ? (int)mb_strlen($value) : strlen($value);
}

function bl_session_start(): void {
  if(session_status() === PHP_SESSION_ACTIVE) return;

  $secure = bl_is_secure_request();
  if(function_exists('session_name')){
    @session_name('baseline_session');
  }

  @session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => $secure,
    'httponly' => true,
    'samesite' => 'Lax',
  ]);

  @ini_set('session.use_strict_mode', '1');
  @ini_set('session.cookie_httponly', '1');
  if($secure){
    @ini_set('session.cookie_secure', '1');
  }

  @session_start();
}

function bl_set_auth_session(array $user): void {
  bl_session_start();
  @session_regenerate_id(true);
  $_SESSION['bl_uid'] = (int)($user['id'] ?? 0);
  $_SESSION['bl_name'] = (string)($user['name'] ?? '');
  $_SESSION['bl_email'] = (string)($user['email'] ?? '');
}

function bl_clear_auth_session(): void {
  bl_session_start();
  $_SESSION = [];
}

function bl_authed_uid(): int {
  return (int)($_SESSION['bl_uid'] ?? 0);
}

function bl_authed_name(): string {
  return (string)($_SESSION['bl_name'] ?? '');
}

function bl_authed_email(): string {
  return (string)($_SESSION['bl_email'] ?? '');
}

function bl_current_user(?PDO $db=null): ?array {
  bl_session_start();
  $uid = bl_authed_uid();
  if($uid <= 0) return null;

  $db = $db ?: bl_db();
  $stmt = $db->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
  $stmt->execute([':id' => $uid]);
  $user = $stmt->fetch();
  if(!$user){
    bl_clear_auth_session();
    return null;
  }

  $_SESSION['bl_name'] = (string)($user['name'] ?? '');
  $_SESSION['bl_email'] = (string)($user['email'] ?? '');
  return $user;
}

function bl_require_user(): array {
  $user = bl_current_user();
  if(!$user) bl_json(['ok'=>false,'error'=>'not_logged_in'], 401);
  return $user;
}

function bl_require_user_id(): int {
  $user = bl_require_user();
  return (int)($user['id'] ?? 0);
}

function bl_normalize_email(string $email): string {
  return strtolower(trim($email));
}

function bl_email_is_valid(string $email): bool {
  if($email === '' || bl_str_len($email) > BL_MAX_EMAIL_LEN) return false;
  return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function bl_password_is_valid(string $password): bool {
  return strlen($password) >= BL_MIN_PASSWORD_LEN && strlen($password) <= 128;
}

function bl_user_public_payload(array $user): array {
  return [
    'id' => (int)($user['id'] ?? 0),
    'name' => (string)($user['name'] ?? ''),
    'email' => (string)($user['email'] ?? ''),
    'provider' => (string)($user['auth_provider'] ?? 'password'),
  ];
}

function bl_is_google_enabled(): bool {
  return bl_env('BL_GOOGLE_CLIENT_ID') !== '' && bl_env('BL_GOOGLE_CLIENT_SECRET') !== '';
}

function bl_auth_providers_payload(): array {
  return [
    'password' => true,
    'google' => bl_is_google_enabled(),
  ];
}

function bl_mail_from_email(): string {
  return bl_env('BL_MAIL_FROM_EMAIL', 'no-reply@baseline.local');
}

function bl_mail_from_name(): string {
  return bl_env('BL_MAIL_FROM_NAME', 'Baseline Lifestyle');
}

function bl_send_text_mail(string $to, string $subject, string $body): bool {
  if(!function_exists('mail')) return false;

  $fromEmail = bl_mail_from_email();
  $fromName = bl_mail_from_name();
  $headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $fromName . ' <' . $fromEmail . '>',
  ];

  return @mail($to, $subject, $body, implode("\r\n", $headers));
}

function bl_google_redirect_url(): string {
  $configured = bl_env('BL_GOOGLE_REDIRECT_URI');
  if($configured !== '') return $configured;
  return bl_request_origin() . bl_site_base_path() . '/api/google_callback.php';
}

function bl_hash_verifier(string $verifier): string {
  return hash('sha256', $verifier);
}

function bl_generate_selector(): string {
  return bin2hex(random_bytes(8));
}

function bl_generate_verifier(): string {
  return bin2hex(random_bytes(32));
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

function bl_issue_password_reset(PDO $db, array $user): array {
  $selector = bl_generate_selector();
  $verifier = bl_generate_verifier();
  $token = $selector . '.' . $verifier;
  $expires = bl_now() + BL_RESET_TOKEN_TTL;
  $userId = (int)($user['id'] ?? 0);

  $db->prepare('DELETE FROM password_reset_tokens WHERE user_id = :uid')->execute([':uid' => $userId]);
  $db->prepare('INSERT INTO password_reset_tokens(user_id, selector, verifier_hash, expires_at, used_at, created_at, requested_ip, requested_ua) VALUES(:uid,:selector,:hash,:expires,NULL,:created,:ip,:ua)')
    ->execute([
      ':uid' => $userId,
      ':selector' => $selector,
      ':hash' => bl_hash_verifier($verifier),
      ':expires' => $expires,
      ':created' => bl_now(),
      ':ip' => substr((string)($_SERVER['REMOTE_ADDR'] ?? ''), 0, 64),
      ':ua' => substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
    ]);

  return [
    'token' => $token,
    'url' => bl_site_url('index.html', ['bl-reset' => $token]),
    'expires_at' => $expires,
  ];
}

function bl_lookup_password_reset(PDO $db, string $token): ?array {
  $parts = explode('.', trim($token), 2);
  if(count($parts) !== 2 || $parts[0] === '' || $parts[1] === '') return null;
  [$selector, $verifier] = $parts;

  $stmt = $db->prepare('
    SELECT prt.*, u.id AS user_id, u.name, u.email, u.auth_provider
    FROM password_reset_tokens prt
    JOIN users u ON u.id = prt.user_id
    WHERE prt.selector = :selector
    LIMIT 1
  ');
  $stmt->execute([':selector' => $selector]);
  $row = $stmt->fetch();
  if(!$row) return null;
  if(!hash_equals((string)$row['verifier_hash'], bl_hash_verifier($verifier))) return null;
  if(!empty($row['used_at'])) return null;
  if((int)$row['expires_at'] < bl_now()) return null;
  return $row;
}

function bl_mask_email(string $email): string {
  $email = trim($email);
  if($email === '' || !str_contains($email, '@')) return '';
  [$local, $domain] = explode('@', $email, 2);
  $localMasked = strlen($local) <= 2 ? substr($local, 0, 1) . '…' : substr($local, 0, 2) . '…';
  return $localMasked . '@' . $domain;
}

function bl_complete_password_reset(PDO $db, array $resetRow, string $newPassword): array {
  $userId = (int)($resetRow['user_id'] ?? 0);
  if($userId <= 0) throw new RuntimeException('invalid_user');

  $hash = password_hash($newPassword, PASSWORD_DEFAULT);
  $now = bl_now();

  $db->prepare('UPDATE users SET pass_hash = :hash, auth_provider = "password", updated_at = :updated WHERE id = :id')
    ->execute([
      ':hash' => $hash,
      ':updated' => $now,
      ':id' => $userId,
    ]);

  $db->prepare('UPDATE password_reset_tokens SET used_at = :used WHERE id = :id')
    ->execute([
      ':used' => $now,
      ':id' => (int)$resetRow['id'],
    ]);

  $db->prepare('DELETE FROM password_reset_tokens WHERE user_id = :uid AND id != :id')
    ->execute([
      ':uid' => $userId,
      ':id' => (int)$resetRow['id'],
    ]);

  $stmt = $db->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
  $stmt->execute([':id' => $userId]);
  $user = $stmt->fetch();
  if(!$user) throw new RuntimeException('user_reload_failed');

  return $user;
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
