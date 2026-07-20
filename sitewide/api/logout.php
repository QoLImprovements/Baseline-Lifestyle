<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
bl_session_start();
bl_require_same_origin();

$_SESSION = [];
if(function_exists('session_get_cookie_params')){
  $p = session_get_cookie_params();
  setcookie(session_name(), '', [
    'expires' => time() - 3600,
    'path' => $p['path'] ?? '/',
    'domain' => $p['domain'] ?? '',
    'secure' => (bool)($p['secure'] ?? false),
    'httponly' => (bool)($p['httponly'] ?? true),
    'samesite' => $p['samesite'] ?? 'Lax',
  ]);
}
@session_unset();
@session_destroy();
bl_json(['ok'=>true]);
