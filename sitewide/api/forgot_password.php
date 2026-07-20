<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

$d = bl_input_json();
$email = trim((string)($d['email'] ?? ($d['identifier'] ?? '')));

$response = [
  'ok' => true,
  'message' => 'If that account exists, a password reset email will be sent shortly.',
];

if($email === ''){
  bl_json($response);
}

try{
  $db = bl_db();
  if(!bl_rate_limit_allow('forgot_password', bl_normalize_email($email), 5, 1800)){
    bl_json($response);
  }

  $user = bl_find_user_by_email($db, $email);
  if(!$user){
    bl_json($response);
  }

  $reset = bl_issue_password_reset($db, $user);
  $mailBody = "Hello " . (string)($user['name'] ?? 'there') . ",\n\n"
    . "Use this link to reset your Baseline Lifestyle password:\n"
    . $reset['url'] . "\n\n"
    . "This link expires in 1 hour.\n"
    . "If you did not request a reset, you can ignore this message.\n";

  $mailSent = false;
  if((string)($user['email'] ?? '') !== ''){
    $mailSent = bl_send_text_mail((string)$user['email'], 'Reset your Baseline Lifestyle password', $mailBody);
  }

  if(!$mailSent){
    error_log('Baseline password reset email delivery failed for user ID ' . (int)($user['id'] ?? 0));
  }

  // Keep the response identical whether or not the account exists or email succeeds.
  bl_json($response);
}catch(Throwable $e){
  bl_json($response);
}
