<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

try{
  $db = bl_db();

  if(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET'){
    $token = trim((string)($_GET['token'] ?? ''));
    if($token === ''){
      bl_json(['ok'=>false,'error'=>'missing_token'], 400);
    }

    $row = bl_lookup_password_reset($db, $token);
    if(!$row){
      bl_json(['ok'=>false,'valid'=>false,'error'=>'invalid_or_expired_token'], 400);
    }

    bl_json([
      'ok' => true,
      'valid' => true,
      'emailHint' => bl_mask_email((string)($row['email'] ?? '')),
      'name' => (string)($row['name'] ?? ''),
      'expiresAt' => (int)($row['expires_at'] ?? 0),
    ]);
  }

  $d = bl_input_json();
  $token = trim((string)($d['token'] ?? ''));
  $password = (string)($d['password'] ?? '');
  $passwordConfirm = (string)($d['passwordConfirm'] ?? $password);

  if($token === '' || $password === ''){
    bl_json(['ok'=>false,'error'=>'missing_fields'], 400);
  }
  if($password !== $passwordConfirm){
    bl_json(['ok'=>false,'error'=>'password_mismatch'], 400);
  }
  if(!bl_password_is_valid($password)){
    bl_json(['ok'=>false,'error'=>'password_too_short','minLength'=>BL_MIN_PASSWORD_LEN], 400);
  }

  bl_require_rate_limit('password_reset', substr($token, 0, 16), 10, 900);
  $row = bl_lookup_password_reset($db, $token);
  if(!$row){
    bl_json(['ok'=>false,'error'=>'invalid_or_expired_token'], 400);
  }

  $user = bl_complete_password_reset($db, $row, $password);
  bl_set_auth_session($user);

  bl_json([
    'ok' => true,
    'message' => 'Password reset complete.',
    'user' => bl_user_public_payload($user),
  ]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'password_reset_failed'], 500);
}
