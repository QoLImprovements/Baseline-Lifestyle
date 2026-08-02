<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
require_once __DIR__ . '/account_resource.php';
bl_session_start();

$d = bl_input_json();
$name = trim((string)($d['name'] ?? ''));
$email = trim((string)($d['email'] ?? ''));
$pass = (string)($d['password'] ?? '');
if($name === '' || $email === '' || $pass === '') bl_json(['ok'=>false,'error'=>'missing_fields'], 400);
if(bl_str_len($name) > BL_MAX_NAME_LEN) bl_json(['ok'=>false,'error'=>'name_too_long'], 400);
if(!preg_match('/^[\p{L}0-9 _.-]{2,40}$/u', $name)) bl_json(['ok'=>false,'error'=>'bad_name','message'=>'Use 2–40 chars: letters, numbers, space, _ . -'], 400);
if(!bl_email_is_valid($email)) bl_json(['ok'=>false,'error'=>'bad_email'], 400);
if(!bl_password_is_valid($pass)) bl_json(['ok'=>false,'error'=>'password_too_short','minLength'=>BL_MIN_PASSWORD_LEN], 400);
$emailNormalized = bl_normalize_email($email);

try{
  $db = bl_db();
  bl_require_rate_limit('register', $emailNormalized, 5, 3600);
  $checkName = $db->prepare('SELECT id FROM users WHERE lower(name)=lower(:name) LIMIT 1');
  $checkName->execute([':name'=>$name]);
  if($checkName->fetch()) bl_json(['ok'=>false,'error'=>'name_taken'], 409);
  $checkEmail = $db->prepare('SELECT id FROM users WHERE email_normalized=:email LIMIT 1');
  $checkEmail->execute([':email'=>$emailNormalized]);
  if($checkEmail->fetch()) bl_json(['ok'=>false,'error'=>'email_taken'], 409);
  $now = bl_now();
  $stmt = $db->prepare('INSERT INTO users(name,email,email_normalized,pass_hash,auth_provider,google_sub,created_at,updated_at,last_login_at)
    VALUES(:name,:email,:email_normalized,:pass_hash,"password",NULL,:created_at,:updated_at,:last_login_at)');
  $stmt->execute([
    ':name'=>$name,
    ':email'=>$email,
    ':email_normalized'=>$emailNormalized,
    ':pass_hash'=>password_hash($pass, PASSWORD_DEFAULT),
    ':created_at'=>$now,
    ':updated_at'=>$now,
    ':last_login_at'=>$now,
  ]);
  $userId = (int)$db->lastInsertId();
  $userStmt = $db->prepare('SELECT * FROM users WHERE id=:id LIMIT 1');
  $userStmt->execute([':id'=>$userId]);
  $user = $userStmt->fetch();
  if(!$user) bl_json(['ok'=>false,'error'=>'register_failed'], 500);
  bl_account_resource_sync($user);
  bl_set_auth_session($user);
  bl_json(['ok'=>true,'user'=>bl_user_public_payload($user),'providers'=>bl_auth_providers_payload()]);
}catch(PDOException $e){
  bl_json(['ok'=>false,'error'=>'register_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'register_failed'], 500);
}
