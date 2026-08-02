<?php
declare(strict_types=1);

function bl_mail_from_email(): string {
  return bl_env('BL_MAIL_FROM_EMAIL', 'no-reply@baseline.local');
}

function bl_mail_from_name(): string {
  return bl_env('BL_MAIL_FROM_NAME', 'Baseline Lifestyle');
}

function bl_send_text_mail(string $to, string $subject, string $body): bool {
  if(!function_exists('mail')) return false;

  $fromEmail = bl_mail_from_email();
  $fromName = bl_mail_from_name();
  $headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $fromName . ' <' . $fromEmail . '>',
  ];

  return @mail($to, $subject, $body, implode("\r\n", $headers));
}
