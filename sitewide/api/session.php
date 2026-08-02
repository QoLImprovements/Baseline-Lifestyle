<?php
declare(strict_types=1);

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
