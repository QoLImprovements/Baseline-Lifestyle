<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_GAME_DATA_MAX_BYTES = 2097152;
const BL_GAME_DATA_MAX_DEPTH = 48;
const BL_GAME_DATA_MAX_ITEMS = 20000;

function bl_game_data_apps(): array {
  return ['pairs','make24','detectword','ninja','trackcoin','ruleshift','crossnumber','blockgrid','coloursort','weightcoherence','unheardsignal','tearswithoutwitness','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw','dartsfocused','meridiangrove','badmintonfocused','hubsettings'];
}

function bl_game_data_file_apps(): array {
  return ['pairs','make24','detectword','ninja','trackcoin','ruleshift','crossnumber','blockgrid','coloursort','weightcoherence','unheardsignal','tearswithoutwitness','pantherjigsaw','bearjigsaw','foxjigsaw','elephantsjigsaw','dartsfocused','meridiangrove','badmintonfocused'];
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
  }catch(Throwable $e){
    bl_json(['ok'=>false,'error'=>'invalid_json'], 400);
  }
  if(!is_array($decoded)) bl_json(['ok'=>false,'error'=>'invalid_payload'], 400);
  return $decoded;
}

function bl_game_data_clean($value, int $depth=0, int &$items=0){
  if($depth > BL_GAME_DATA_MAX_DEPTH) throw new RuntimeException('profile_too_deep');
  $items += 1;
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

function bl_game_data_rows(PDO $db, int $uid, ?array $apps=null): array {
  $apps = $apps ?: bl_game_data_apps();
  $placeholders = implode(',', array_fill(0, count($apps), '?'));
  $stmt = $db->prepare('SELECT app, profile_json, created_at, updated_at FROM games_profiles WHERE user_id=? AND app IN (' . $placeholders . ')');
  $stmt->execute(array_merge([$uid], $apps));
  $profiles = [];
  $created = [];
  $updated = [];
  foreach($stmt->fetchAll() as $row){
    $app = (string)($row['app'] ?? '');
    if(!in_array($app, $apps, true)) continue;
    $decoded = json_decode((string)($row['profile_json'] ?? '{}'), true);
    $profiles[$app] = is_array($decoded) ? $decoded : [];
    $created[$app] = (int)($row['created_at'] ?? 0);
    $updated[$app] = (int)($row['updated_at'] ?? 0);
  }
  return ['profiles'=>$profiles,'created_at'=>$created,'updated_at'=>$updated];
}

function bl_game_data_write(PDO $db, int $uid, string $app, array $profile, bool $onlyIfMissing=false): void {
  $now = bl_now();
  $json = json_encode($profile, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
  $sql = $onlyIfMissing
    ? 'INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:m) ON CONFLICT(user_id, app) DO NOTHING'
    : 'INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:m) ON CONFLICT(user_id, app) DO UPDATE SET profile_json=excluded.profile_json, updated_at=excluded.updated_at';
  $stmt = $db->prepare($sql);
  $stmt->execute([':u'=>$uid,':a'=>$app,':j'=>$json,':c'=>$now,':m'=>$now]);
}

function bl_game_file_read(int $uid, string $app): array {
  if(!in_array($app, bl_game_data_file_apps(), true)){
    return ['found'=>false,'profile'=>[],'updated_at'=>0,'revision'=>0];
  }
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

function bl_game_file_write(int $uid, string $app, array $profile, bool $onlyIfMissing=false, ?int $expectedRevision=null): array {
  if(!in_array($app, bl_game_data_file_apps(), true)) throw new RuntimeException('non_persistent_app');
  $path = bl_saved_game_path($uid, $app);
  $resource = bl_resource_file_read($path, []);
  if($expectedRevision !== null && $expectedRevision !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
  if($onlyIfMissing && $resource['revision'] > 0) return $resource;
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
  foreach(bl_game_data_file_apps() as $app){
    $row = bl_game_file_read($uid, $app);
    if(!$row['found']) continue;
    $profiles[$app] = $row['profile'];
    $updated[$app] = $row['updated_at'];
    $revisions[$app] = $row['revision'];
  }
  return ['profiles'=>$profiles,'updated_at'=>$updated,'revisions'=>$revisions];
}

function bl_game_mirror_rows(int $uid, array $rows): void {
  foreach(bl_game_data_file_apps() as $app){
    if(!array_key_exists($app, $rows['profiles'])) continue;
    $path = bl_saved_game_path($uid, $app);
    $current = bl_resource_file_read($path, []);
    $created = (int)($rows['created_at'][$app] ?? $rows['updated_at'][$app] ?? time());
    $updated = (int)($rows['updated_at'][$app] ?? time());
    bl_resource_file_replace($path, [
      'game'=>$app,
      'profile'=>$rows['profiles'][$app],
      'createdAt'=>gmdate('c', $created),
      'updatedAt'=>gmdate('c', $updated),
    ], $current['revision']);
  }
}

bl_session_start();
$uid = bl_require_user_id();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

try{
  $mode = bl_resource_authority();

  if($method === 'GET'){
    if($mode === 'saved-data'){
      if(isset($_GET['bootstrap'])){
        $rows = bl_game_file_all($uid);
        bl_json(['ok'=>true,'authed'=>true,'accountId'=>$uid,'profiles'=>$rows['profiles'],'updated_at'=>$rows['updated_at'],'revisions'=>$rows['revisions']]);
      }
      $app = bl_game_data_app((string)($_GET['app'] ?? ''));
      $row = bl_game_file_read($uid, $app);
      bl_json(['ok'=>true,'app'=>$app,'found'=>$row['found'],'profile'=>$row['profile'],'updated_at'=>$row['updated_at'],'revision'=>$row['revision']]);
    }

    $db = bl_games_db();
    if(isset($_GET['bootstrap'])){
      $rows = bl_game_data_rows($db, $uid);
      if($mode === 'mirror') bl_game_mirror_rows($uid, $rows);
      bl_json(['ok'=>true,'authed'=>true,'accountId'=>$uid,'profiles'=>$rows['profiles'],'updated_at'=>$rows['updated_at']]);
    }
    $app = bl_game_data_app((string)($_GET['app'] ?? ''));
    $rows = bl_game_data_rows($db, $uid, [$app]);
    if($mode === 'mirror') bl_game_mirror_rows($uid, $rows);
    bl_json(['ok'=>true,'app'=>$app,'found'=>array_key_exists($app, $rows['profiles']),'profile'=>$rows['profiles'][$app] ?? [],'updated_at'=>$rows['updated_at'][$app] ?? 0]);
  }

  if($method === 'POST'){
    $payload = bl_game_data_payload();
    $action = strtolower(trim((string)($payload['action'] ?? 'save')));

    if($mode === 'saved-data'){
      if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
      $app = bl_game_data_app((string)($payload['app'] ?? ''));
      if($app === 'hubsettings') bl_json(['ok'=>false,'error'=>'non_persistent_app'], 400);
      $profile = bl_game_data_profile($payload['profile'] ?? null);
      $expected = bl_resource_required_revision_from_input($payload);
      $written = bl_game_file_write($uid, $app, $profile, false, $expected);
      bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile,'updated_at'=>bl_resource_timestamp((string)$written['updatedAt']),'revision'=>$written['revision']]);
    }

    $db = bl_games_db();
    if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
    $app = bl_game_data_app((string)($payload['app'] ?? ''));
    $profile = bl_game_data_profile($payload['profile'] ?? null);
    bl_game_data_write($db, $uid, $app, $profile, false);
    if($mode === 'mirror') bl_game_mirror_rows($uid, bl_game_data_rows($db, $uid, [$app]));
    bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile,'updated_at'=>bl_now()]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'games_data_failed'], 500);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
  $code = (string)$e->getMessage();
  if(in_array($code, ['invalid_profile','profile_too_deep','profile_too_large','non_persistent_app'], true)) bl_json(['ok'=>false,'error'=>$code], 400);
  bl_json(['ok'=>false,'error'=>'games_data_failed'], 500);
}
