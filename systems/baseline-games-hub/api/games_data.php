<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_GAME_DATA_MAX_BYTES = 2097152;
const BL_GAME_DATA_MAX_DEPTH = 48;
const BL_GAME_DATA_MAX_ITEMS = 20000;

function bl_game_data_apps(): array {
  return ['pairs','make24','detectword','ninja','trackcoin','ruleshift','dartsfocused','badmintonfocused','meridiangrove'];
}

function bl_game_data_app(string $value): string {
  $app = strtolower(trim($value));
  if(!in_array($app, bl_game_data_apps(), true)) bl_json(['ok'=>false,'error'=>'invalid_app'], 400);
  return $app;
}

function bl_game_data_payload(): array {
  $raw = file_get_contents('php://input') ?: '';
  if(strlen($raw) > BL_GAME_DATA_MAX_BYTES) bl_json(['ok'=>false,'error'=>'payload_too_large'], 413);
  try{
    $decoded = json_decode($raw, true, BL_GAME_DATA_MAX_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $error){
    bl_json(['ok'=>false,'error'=>'invalid_json'], 400);
  }
  if(!is_array($decoded)) bl_json(['ok'=>false,'error'=>'invalid_payload'], 400);
  return $decoded;
}

function bl_game_data_clean($value, int $depth=0, int &$items=0){
  if($depth > BL_GAME_DATA_MAX_DEPTH) throw new RuntimeException('profile_too_deep');
  $items++;
  if($items > BL_GAME_DATA_MAX_ITEMS) throw new RuntimeException('profile_too_large');
  if(is_array($value)){
    $clean = [];
    foreach($value as $key=>$entry){
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
  if(!is_array($value)) throw new RuntimeException('invalid_profile');
  $items = 0;
  $clean = bl_game_data_clean($value, 0, $items);
  return is_array($clean) ? $clean : [];
}

function bl_game_file_read(int $uid, string $app): array {
  $resource = bl_resource_file_read(bl_saved_game_path($uid, $app), []);
  if($resource['revision'] === 0) return ['found'=>false,'profile'=>[],'updated_at'=>0,'revision'=>0];
  $data = $resource['data'];
  $profile = is_array($data['profile'] ?? null) ? $data['profile'] : [];
  return [
    'found'=>true,
    'profile'=>$profile,
    'updated_at'=>bl_resource_timestamp(is_string($data['updatedAt'] ?? null) ? $data['updatedAt'] : $resource['updatedAt']),
    'revision'=>$resource['revision'],
  ];
}

function bl_game_file_write(int $uid, string $app, array $profile, ?int $expectedRevision=null): array {
  $path = bl_saved_game_path($uid, $app);
  $resource = bl_resource_file_read($path, []);
  if($expectedRevision !== null && $expectedRevision !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
  $now = gmdate('c');
  $createdAt = is_string($resource['data']['createdAt'] ?? null) ? $resource['data']['createdAt'] : $now;
  return bl_resource_file_replace($path, [
    'game'=>$app,
    'profile'=>$profile,
    'createdAt'=>$createdAt,
    'updatedAt'=>$now,
  ], $resource['revision']);
}

function bl_game_file_all(int $uid): array {
  $profiles = [];
  $updated = [];
  $revisions = [];
  foreach(bl_game_data_apps() as $app){
    $row = bl_game_file_read($uid, $app);
    if(!$row['found']) continue;
    $profiles[$app] = $row['profile'];
    $updated[$app] = $row['updated_at'];
    $revisions[$app] = $row['revision'];
  }
  return ['profiles'=>$profiles,'updated_at'=>$updated,'revisions'=>$revisions];
}

bl_session_start();
$uid = bl_require_user_id();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

try{
  if($method === 'GET'){
    if(isset($_GET['bootstrap'])){
      $rows = bl_game_file_all($uid);
      bl_json(['ok'=>true,'authed'=>true,'profiles'=>$rows['profiles'],'updated_at'=>$rows['updated_at'],'revisions'=>$rows['revisions']]);
    }
    $app = bl_game_data_app((string)($_GET['app'] ?? ''));
    $row = bl_game_file_read($uid, $app);
    bl_json(['ok'=>true,'app'=>$app,'found'=>$row['found'],'profile'=>$row['profile'],'updated_at'=>$row['updated_at'],'revision'=>$row['revision']]);
  }

  if($method === 'POST'){
    $payload = bl_game_data_payload();
    $action = strtolower(trim((string)($payload['action'] ?? 'save')));
    if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
    $app = bl_game_data_app((string)($payload['app'] ?? ''));
    $profile = bl_game_data_profile($payload['profile'] ?? null);
    $expected = bl_resource_required_revision_from_input($payload);
    $written = bl_game_file_write($uid, $app, $profile, $expected);
    bl_json([
      'ok'=>true,
      'app'=>$app,
      'profile'=>$profile,
      'updated_at'=>bl_resource_timestamp((string)$written['updatedAt']),
      'revision'=>$written['revision'],
    ]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  if($error->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'games_data_failed'], 500);
}catch(Throwable $error){
  $code = (string)$error->getMessage();
  if(in_array($code, ['invalid_profile','profile_too_deep','profile_too_large'], true)) bl_json(['ok'=>false,'error'=>$code], 400);
  bl_json(['ok'=>false,'error'=>'games_data_failed'], 500);
}
