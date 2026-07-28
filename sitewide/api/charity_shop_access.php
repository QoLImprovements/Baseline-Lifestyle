<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

bl_session_start();
bl_no_cache_headers();

const BL_CHARITY_SHOP_ACCESS_SECONDS = 28800; // 8 hours

function bl_charity_shop_is_unlocked(): bool {
  $until = (int)($_SESSION['charity_shop_access_until'] ?? 0);
  if($until <= time()){
    unset($_SESSION['charity_shop_access_until']);
    return false;
  }
  return true;
}

$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

if($method === 'GET'){
  bl_json([
    'ok' => true,
    'unlocked' => bl_charity_shop_is_unlocked(),
  ]);
}

if($method !== 'POST'){
  bl_json(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$data = bl_input_json();
$action = strtolower(trim((string)($data['action'] ?? 'unlock')));

if($action === 'lock'){
  unset($_SESSION['charity_shop_access_until']);
  @session_regenerate_id(true);
  bl_json(['ok' => true, 'unlocked' => false]);
}

if($action !== 'unlock'){
  bl_json(['ok' => false, 'error' => 'invalid_action'], 400);
}

$pin = trim((string)($data['pin'] ?? ''));
if(!preg_match('/^\d{1,8}$/', $pin)){
  bl_json(['ok' => false, 'error' => 'invalid_pin'], 400);
}

$remoteAddress = trim((string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
bl_require_rate_limit('charity_shop_pin', $remoteAddress, 8, 900);

$expectedPin = trim(bl_env('BL_CHARITY_SHOP_PIN', '97'));
if($expectedPin === '' || !hash_equals($expectedPin, $pin)){
  bl_json(['ok' => false, 'error' => 'incorrect_pin'], 401);
}

@session_regenerate_id(true);
$_SESSION['charity_shop_access_until'] = time() + BL_CHARITY_SHOP_ACCESS_SECONDS;

bl_json([
  'ok' => true,
  'unlocked' => true,
  'redirect' => '/charity-shop/guidance/',
]);
