<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
bl_session_start();

$_SESSION = [];
if(function_exists('session_get_cookie_params')){
  $p = session_get_cookie_params();
  setcookie(
    session_name(),
    '',
    time() - 3600,
    $p['path'] ?? '/',
    $p['domain'] ?? '',
    (bool)($p['secure'] ?? false),
    (bool)($p['httponly'] ?? true)
  );
}
@session_unset();
@session_destroy();
bl_json(['ok'=>true]);
