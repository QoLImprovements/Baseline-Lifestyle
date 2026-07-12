<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
bl_session_start();

$uid = bl_authed_uid();
$name = bl_authed_name();
$email = bl_authed_email();

if($uid <= 0 || $name === ''){
  bl_json(['ok'=>true,'authed'=>false,'providers'=>bl_auth_providers_payload()]);
}

try{
  $db = bl_db();
  $stmt = $db->prepare('SELECT * FROM users WHERE id = :id LIMIT 1');
  $stmt->execute([':id' => $uid]);
  $user = $stmt->fetch();
  if(!$user){
    bl_clear_auth_session();
    bl_json(['ok'=>true,'authed'=>false,'providers'=>bl_auth_providers_payload()]);
  }

  if($email !== (string)($user['email'] ?? '')){
    $_SESSION['bl_email'] = (string)($user['email'] ?? '');
  }

  bl_json([
    'ok' => true,
    'authed' => true,
    'name' => (string)$user['name'],
    'email' => (string)($user['email'] ?? ''),
    'user' => bl_user_public_payload($user),
    'providers' => bl_auth_providers_payload(),
  ]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'me_failed'], 500);
}
