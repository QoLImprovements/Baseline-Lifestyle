<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
bl_session_start();

$d = bl_input_json();
$identifier = trim((string)($d['identifier'] ?? ($d['email'] ?? ($d['name'] ?? ''))));
$pass = (string)($d['password'] ?? '');

if($identifier === '' || $pass === ''){
  bl_json(['ok'=>false,'error'=>'missing_fields'], 400);
}

try{
  $db = bl_db();
  bl_require_rate_limit('login', strtolower($identifier), 10, 900);
  $user = bl_find_user_by_identifier($db, $identifier);
  if(!$user){
    bl_json(['ok'=>false,'error'=>'invalid_login'], 401);
  }

  $passHash = (string)($user['pass_hash'] ?? '');
  if($passHash === '' || !password_verify($pass, $passHash)){
    bl_json(['ok'=>false,'error'=>'invalid_login'], 401);
  }

  $db->prepare('UPDATE users SET last_login_at = :last_login_at, updated_at = :updated_at WHERE id = :id')
    ->execute([
      ':last_login_at' => bl_now(),
      ':updated_at' => bl_now(),
      ':id' => (int)$user['id'],
    ]);

  $user = bl_find_user_by_identifier($db, $identifier) ?: $user;
  bl_set_auth_session($user);
  bl_json(['ok'=>true, 'user'=>bl_user_public_payload($user), 'providers'=>bl_auth_providers_payload()]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'login_failed'], 500);
}
