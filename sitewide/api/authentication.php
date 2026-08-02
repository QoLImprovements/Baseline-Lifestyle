<?php
declare(strict_types=1);

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
