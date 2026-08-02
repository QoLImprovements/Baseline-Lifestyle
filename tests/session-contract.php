<?php
declare(strict_types=1);

$_SERVER['HTTPS'] = 'on';
$_SERVER['HTTP_X_FORWARDED_PROTO'] = '';

try{
  require_once dirname(__DIR__) . '/sitewide/api/config.php';
  bl_session_start();

  if(session_status() !== PHP_SESSION_ACTIVE) throw new RuntimeException('session_not_active');
  if(session_name() !== 'baseline_session') throw new RuntimeException('session_name_incorrect');

  $cookie = session_get_cookie_params();
  if(($cookie['path'] ?? '') !== '/') throw new RuntimeException('cookie_path_incorrect');
  if(($cookie['secure'] ?? false) !== true) throw new RuntimeException('cookie_not_secure');
  if(($cookie['httponly'] ?? false) !== true) throw new RuntimeException('cookie_not_httponly');
  if(($cookie['samesite'] ?? '') !== 'Lax') throw new RuntimeException('cookie_samesite_incorrect');

  bl_set_auth_session([
    'id' => 42,
    'name' => 'Session Contract',
    'email' => 'session@example.test',
  ]);
  if(bl_authed_uid() !== 42) throw new RuntimeException('session_user_id_incorrect');
  if(bl_authed_name() !== 'Session Contract') throw new RuntimeException('session_name_value_incorrect');
  if(bl_authed_email() !== 'session@example.test') throw new RuntimeException('session_email_incorrect');

  bl_clear_auth_session();
  if(bl_authed_uid() !== 0 || bl_authed_name() !== '' || bl_authed_email() !== ''){
    throw new RuntimeException('session_not_cleared');
  }

  echo "session contract passed\n";
}finally{
  if(session_status() === PHP_SESSION_ACTIVE) @session_destroy();
}
