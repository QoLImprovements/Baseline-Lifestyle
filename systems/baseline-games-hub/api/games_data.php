<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';

const BL_GAME_DATA_MAX_BYTES = 2097152;
const BL_GAME_DATA_MAX_DEPTH = 48;
const BL_GAME_DATA_MAX_ITEMS = 20000;

function bl_game_data_apps(): array {
  return [
    'pairs',
    'make24',
    'detectword',
    'ninja',
    'trackcoin',
    'ruleshift',
    'dartsfocused',
    'meridiangrove',
    'hubsettings',
  ];
}

function bl_game_data_app(string $value): string {
  $app = strtolower(trim($value));
  if(!in_array($app, bl_game_data_apps(), true)){
    bl_json(['ok'=>false,'error'=>'invalid_app'], 400);
  }
  return $app;
}

function bl_game_data_payload(): array {
  $raw = file_get_contents('php://input') ?: '';
  if(strlen($raw) > BL_GAME_DATA_MAX_BYTES){
    bl_json(['ok'=>false,'error'=>'payload_too_large'], 413);
  }
  try{
    $decoded = json_decode($raw, true, BL_GAME_DATA_MAX_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $e){
    bl_json(['ok'=>false,'error'=>'invalid_json'], 400);
  }
  if(!is_array($decoded)){
    bl_json(['ok'=>false,'error'=>'invalid_payload'], 400);
  }
  return $decoded;
}

function bl_game_data_clean($value, int $depth=0, int &$items=0){
  if($depth > BL_GAME_DATA_MAX_DEPTH){
    throw new RuntimeException('profile_too_deep');
  }
  $items += 1;
  if($items > BL_GAME_DATA_MAX_ITEMS){
    throw new RuntimeException('profile_too_large');
  }
  if(is_array($value)){
    $clean = [];
    foreach($value as $key => $entry){
      $cleanKey = is_int($key) ? $key : substr((string)$key, 0, 180);
      $clean[$cleanKey] = bl_game_data_clean($entry, $depth + 1, $items);
    }
    return $clean;
  }
  if(is_string($value)) return strlen($value) > 200000 ? substr($value, 0, 200000) : $value;
  if(is_int($value) || is_bool($value) || $value === null) return $value;
  if(is_float($value)) return is_finite($value) ? $value : 0;
  return null;
}

function bl_game_data_profile($value): array {
  if(!is_array($value)){
    throw new RuntimeException('invalid_profile');
  }
  $items = 0;
  $clean = bl_game_data_clean($value, 0, $items);
  return is_array($clean) ? $clean : [];
}

function bl_game_data_rows(PDO $db, int $uid, ?array $apps=null): array {
  $apps = $apps ?: bl_game_data_apps();
  $placeholders = implode(',', array_fill(0, count($apps), '?'));
  $stmt = $db->prepare('SELECT app, profile_json, updated_at FROM games_profiles WHERE user_id=? AND app IN (' . $placeholders . ')');
  $stmt->execute(array_merge([$uid], $apps));
  $profiles = [];
  $updated = [];
  foreach($stmt->fetchAll() as $row){
    $app = (string)($row['app'] ?? '');
    if(!in_array($app, $apps, true)) continue;
    $decoded = json_decode((string)($row['profile_json'] ?? '{}'), true);
    $profiles[$app] = is_array($decoded) ? $decoded : [];
    $updated[$app] = (int)($row['updated_at'] ?? 0);
  }
  return ['profiles'=>$profiles, 'updated_at'=>$updated];
}

function bl_game_data_write(PDO $db, int $uid, string $app, array $profile, bool $onlyIfMissing=false): void {
  $now = bl_now();
  $json = json_encode($profile, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
  if($onlyIfMissing){
    $stmt = $db->prepare('INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:m) ON CONFLICT(user_id, app) DO NOTHING');
  }else{
    $stmt = $db->prepare('INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:m) ON CONFLICT(user_id, app) DO UPDATE SET profile_json=excluded.profile_json, updated_at=excluded.updated_at');
  }
  $stmt->execute([':u'=>$uid, ':a'=>$app, ':j'=>$json, ':c'=>$now, ':m'=>$now]);
}

bl_session_start();
$uid = bl_require_user_id();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

try{
  $db = bl_games_db();

  if($method === 'GET'){
    if(isset($_GET['bootstrap'])){
      $rows = bl_game_data_rows($db, $uid);
      bl_json([
        'ok'=>true,
        'authed'=>true,
        'profiles'=>$rows['profiles'],
        'updated_at'=>$rows['updated_at'],
      ]);
    }

    $app = bl_game_data_app((string)($_GET['app'] ?? ''));
    $rows = bl_game_data_rows($db, $uid, [$app]);
    bl_json([
      'ok'=>true,
      'app'=>$app,
      'found'=>array_key_exists($app, $rows['profiles']),
      'profile'=>$rows['profiles'][$app] ?? [],
      'updated_at'=>$rows['updated_at'][$app] ?? 0,
    ]);
  }

  if($method === 'POST'){
    $payload = bl_game_data_payload();
    $action = strtolower(trim((string)($payload['action'] ?? 'save')));

    if($action === 'migrate_missing'){
      $incoming = is_array($payload['profiles'] ?? null) ? $payload['profiles'] : [];
      $db->beginTransaction();
      foreach($incoming as $appRaw => $profileRaw){
        $app = bl_game_data_app((string)$appRaw);
        $profile = bl_game_data_profile($profileRaw);
        bl_game_data_write($db, $uid, $app, $profile, true);
      }
      $db->commit();
      $rows = bl_game_data_rows($db, $uid);
      bl_json(['ok'=>true, 'profiles'=>$rows['profiles'], 'updated_at'=>$rows['updated_at']]);
    }

    if($action !== 'save'){
      bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
    }
    $app = bl_game_data_app((string)($payload['app'] ?? ''));
    $profile = bl_game_data_profile($payload['profile'] ?? null);
    bl_game_data_write($db, $uid, $app, $profile, false);
    bl_json(['ok'=>true, 'app'=>$app, 'profile'=>$profile, 'updated_at'=>bl_now()]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()){
    $db->rollBack();
  }
  $code = (string)$e->getMessage();
  if(in_array($code, ['invalid_profile','profile_too_deep','profile_too_large'], true)){
    bl_json(['ok'=>false,'error'=>$code], 400);
  }
  bl_json(['ok'=>false,'error'=>'games_data_failed'], 500);
}
