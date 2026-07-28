<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

bl_session_start();
bl_no_cache_headers();

const BL_PROTECTED_ACCESS_SECONDS = 28800; // 8 hours

/**
 * Registry for digit-code protected website sections.
 * Add future sections here without changing the shared access panel.
 * Codes should normally be supplied through server environment variables.
 */
function bl_protected_sections(): array {
  return [
    'charity_shop_guidance' => [
      'code' => trim(bl_env('BL_CHARITY_SHOP_PIN', '97')),
      'session_key' => 'charity_shop_access_until',
      'redirect' => '/charity-shop/guidance/',
    ],
  ];
}

function bl_protected_section_is_unlocked(array $section): bool {
  $sessionKey = (string)($section['session_key'] ?? '');
  if($sessionKey === '') return false;
  $until = (int)($_SESSION[$sessionKey] ?? 0);
  if($until <= time()){
    unset($_SESSION[$sessionKey]);
    return false;
  }
  return true;
}

$sections = bl_protected_sections();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

if($method === 'GET'){
  $unlocked = [];
  foreach($sections as $sectionId => $section){
    if(bl_protected_section_is_unlocked($section)) $unlocked[] = $sectionId;
  }
  bl_json(['ok' => true, 'unlockedSections' => $unlocked]);
}

if($method !== 'POST'){
  bl_json(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$data = bl_input_json();
$action = strtolower(trim((string)($data['action'] ?? 'unlock')));

if($action === 'lock'){
  $sectionId = trim((string)($data['section'] ?? ''));
  if($sectionId !== '' && isset($sections[$sectionId])){
    $sessionKey = (string)($sections[$sectionId]['session_key'] ?? '');
    if($sessionKey !== '') unset($_SESSION[$sessionKey]);
  }else{
    foreach($sections as $section){
      $sessionKey = (string)($section['session_key'] ?? '');
      if($sessionKey !== '') unset($_SESSION[$sessionKey]);
    }
  }
  @session_regenerate_id(true);
  bl_json(['ok' => true]);
}

if($action !== 'unlock'){
  bl_json(['ok' => false, 'error' => 'invalid_action'], 400);
}

$code = trim((string)($data['code'] ?? $data['pin'] ?? ''));
if(!preg_match('/^\d{1,12}$/', $code)){
  bl_json(['ok' => false, 'error' => 'invalid_code'], 400);
}

$remoteAddress = trim((string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
bl_require_rate_limit('protected_section_code', $remoteAddress, 8, 900);

foreach($sections as $sectionId => $section){
  $expectedCode = (string)($section['code'] ?? '');
  $sessionKey = (string)($section['session_key'] ?? '');
  $redirect = (string)($section['redirect'] ?? '');
  if($expectedCode === '' || $sessionKey === '' || $redirect === '') continue;
  if(!hash_equals($expectedCode, $code)) continue;

  @session_regenerate_id(true);
  $_SESSION[$sessionKey] = time() + BL_PROTECTED_ACCESS_SECONDS;
  bl_json([
    'ok' => true,
    'section' => $sectionId,
    'redirect' => $redirect,
  ]);
}

bl_json(['ok' => false, 'error' => 'incorrect_code'], 401);
