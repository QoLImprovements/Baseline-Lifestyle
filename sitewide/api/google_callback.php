<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
require_once __DIR__ . '/account_resource.php';

bl_session_start();

function bl_google_fail(string $error, int $status=400): void {
  bl_json(['ok'=>false,'error'=>$error], $status);
}

function bl_google_http_post(string $url, array $fields): array {
  $body = http_build_query($fields);
  if(function_exists('curl_init')){
    $ch = curl_init($url);
    curl_setopt_array($ch, [
      CURLOPT_POST=>true,
      CURLOPT_POSTFIELDS=>$body,
      CURLOPT_RETURNTRANSFER=>true,
      CURLOPT_HTTPHEADER=>['Content-Type: application/x-www-form-urlencoded'],
      CURLOPT_TIMEOUT=>15,
    ]);
    $raw = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
  }else{
    $context = stream_context_create(['http'=>['method'=>'POST','header'=>"Content-Type: application/x-www-form-urlencoded\r\n",'content'=>$body,'timeout'=>15]]);
    $raw = @file_get_contents($url, false, $context);
    $status = 200;
  }
  $data = json_decode((string)$raw, true);
  return ['status'=>$status,'data'=>is_array($data) ? $data : []];
}

function bl_google_http_get_json(string $url): array {
  if(function_exists('curl_init')){
    $ch = curl_init($url);
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>15]);
    $raw = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
  }else{
    $raw = @file_get_contents($url, false, stream_context_create(['http'=>['timeout'=>15]]));
    $status = 200;
  }
  $data = json_decode((string)$raw, true);
  return ['status'=>$status,'data'=>is_array($data) ? $data : []];
}

function bl_google_safe_return(string $value): string {
  $value = trim($value);
  if($value === '' || preg_match('~^https?://~i', $value) || str_starts_with($value, '//')) return 'index.html';
  return ltrim($value, '/') ?: 'index.html';
}

function bl_google_unique_name(PDO $db, string $preferred, string $email): string {
  $preferred = trim($preferred);
  if($preferred === '') $preferred = trim(strtok($email, '@') ?: 'Google User');
  if(bl_normalize_email($email) === 'bateswilkinson@gmail.com') return 'Peter Bates-Wilkinson';
  $base = function_exists('mb_substr') ? mb_substr($preferred, 0, BL_MAX_NAME_LEN) : substr($preferred, 0, BL_MAX_NAME_LEN);
  $candidate = $base;
  $n = 2;
  while(true){
    $stmt = $db->prepare('SELECT id FROM users WHERE lower(name)=lower(:name) LIMIT 1');
    $stmt->execute([':name'=>$candidate]);
    if(!$stmt->fetch()) return $candidate;
    $suffix = ' ' . $n;
    $candidateBase = function_exists('mb_substr')
      ? mb_substr($base, 0, max(1, BL_MAX_NAME_LEN - strlen($suffix)))
      : substr($base, 0, max(1, BL_MAX_NAME_LEN - strlen($suffix)));
    $candidate = $candidateBase . $suffix;
    $n++;
  }
}

if(!bl_is_google_enabled()) bl_google_fail('google_not_configured', 503);
$expectedState = (string)($_SESSION['bl_google_oauth_state'] ?? ($_SESSION['bl_google_state'] ?? ''));
$state = (string)($_GET['state'] ?? '');
$code = (string)($_GET['code'] ?? '');
if($expectedState === '' || $state === '' || !hash_equals($expectedState, $state)) bl_google_fail('bad_state', 400);
if($code === '') bl_google_fail('missing_code', 400);
unset($_SESSION['bl_google_oauth_state'], $_SESSION['bl_google_state']);

$token = bl_google_http_post('https://oauth2.googleapis.com/token', [
  'code'=>$code,
  'client_id'=>bl_env('BL_GOOGLE_CLIENT_ID'),
  'client_secret'=>bl_env('BL_GOOGLE_CLIENT_SECRET'),
  'redirect_uri'=>bl_google_redirect_url(),
  'grant_type'=>'authorization_code',
]);
if(($token['status'] < 200 || $token['status'] >= 300) || empty($token['data']['id_token'])) bl_google_fail('token_exchange_failed', 400);
$idToken = (string)$token['data']['id_token'];
$info = bl_google_http_get_json('https://oauth2.googleapis.com/tokeninfo?id_token=' . rawurlencode($idToken));
if(($info['status'] < 200 || $info['status'] >= 300) || empty($info['data']['sub'])) bl_google_fail('id_token_verification_failed', 400);
$claims = $info['data'];
if((string)($claims['aud'] ?? '') !== bl_env('BL_GOOGLE_CLIENT_ID')) bl_google_fail('bad_audience', 400);
$issuer = (string)($claims['iss'] ?? '');
if($issuer !== 'https://accounts.google.com' && $issuer !== 'accounts.google.com') bl_google_fail('bad_issuer', 400);
if(isset($claims['exp']) && (int)$claims['exp'] < time()) bl_google_fail('expired_token', 400);
$sub = (string)$claims['sub'];
$email = bl_normalize_email((string)($claims['email'] ?? ''));
$name = trim((string)($claims['name'] ?? ''));
if($email === '' || !bl_email_is_valid($email)) bl_google_fail('email_required', 400);

$db = bl_db();
$now = bl_now();
$stmt = $db->prepare('SELECT * FROM users WHERE google_sub=:sub LIMIT 1');
$stmt->execute([':sub'=>$sub]);
$user = $stmt->fetch() ?: null;
if(!$user) $user = bl_find_user_by_email($db, $email);
if($user){
  $displayName = bl_normalize_email($email) === 'bateswilkinson@gmail.com' ? 'Peter Bates-Wilkinson' : ((string)$user['name'] ?: $name);
  $db->prepare('UPDATE users SET google_sub=:sub,email=:email,email_normalized=:email_norm,name=:name,auth_provider="google",updated_at=:updated,last_login_at=:login WHERE id=:id')
    ->execute([':sub'=>$sub,':email'=>$email,':email_norm'=>bl_normalize_email($email),':name'=>$displayName,':updated'=>$now,':login'=>$now,':id'=>(int)$user['id']]);
  $stmt = $db->prepare('SELECT * FROM users WHERE id=:id LIMIT 1');
  $stmt->execute([':id'=>(int)$user['id']]);
  $user = $stmt->fetch();
}else{
  $displayName = bl_google_unique_name($db, $name, $email);
  $db->prepare('INSERT INTO users(name,email,email_normalized,pass_hash,auth_provider,google_sub,created_at,updated_at,last_login_at)
    VALUES(:name,:email,:email_norm,"","google",:sub,:created,:updated,:login)')
    ->execute([':name'=>$displayName,':email'=>$email,':email_norm'=>bl_normalize_email($email),':sub'=>$sub,':created'=>$now,':updated'=>$now,':login'=>$now]);
  $stmt = $db->prepare('SELECT * FROM users WHERE id=:id LIMIT 1');
  $stmt->execute([':id'=>(int)$db->lastInsertId()]);
  $user = $stmt->fetch();
}
if(!$user) bl_google_fail('user_save_failed', 500);
bl_account_resource_sync($user);
bl_set_auth_session($user);
$returnTo = bl_google_safe_return((string)($_SESSION['bl_google_return_to'] ?? 'index.html'));
unset($_SESSION['bl_google_return_to'], $_SESSION['bl_google_oauth_nonce']);
header('Location: ' . bl_site_url($returnTo));
exit;
