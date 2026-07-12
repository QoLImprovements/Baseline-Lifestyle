<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

$d = bl_input_json();
$email = trim((string)($d['email'] ?? ($d['identifier'] ?? '')));

$response = [
  'ok' => true,
  'message' => 'If that account exists, a password reset option has been prepared.',
];

if($email === ''){
  bl_json($response);
}

try{
  $db = bl_db();
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

  $payload = $response + ['mailSent' => $mailSent];
  if(!$mailSent){
    $payload['resetUrl'] = $reset['url'];
    $payload['delivery'] = 'fallback_link';
  }else{
    $payload['delivery'] = 'email';
  }

  bl_json($payload);
}catch(Throwable $e){
  bl_json($response);
}
