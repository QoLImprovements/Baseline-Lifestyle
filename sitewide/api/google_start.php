<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
bl_session_start();

if(!bl_is_google_enabled()){
  $target = bl_site_url('index.html', ['bl-auth' => 'google-unavailable']);
  header('Location: ' . $target, true, 302);
  exit;
}

$state = bin2hex(random_bytes(16));
$_SESSION['bl_google_oauth_state'] = $state;
$_SESSION['bl_google_state'] = $state; // legacy compatibility
$_SESSION['bl_google_return_to'] = (string)($_GET['return_to'] ?? '');

$params = [
  'client_id' => bl_env('BL_GOOGLE_CLIENT_ID'),
  'redirect_uri' => bl_google_redirect_url(),
  'response_type' => 'code',
  'scope' => 'openid email profile',
  'state' => $state,
  'prompt' => 'select_account',
];
header('Location: https://accounts.google.com/o/oauth2/v2/auth?' . http_build_query($params), true, 302);
exit;
