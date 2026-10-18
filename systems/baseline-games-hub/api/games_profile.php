<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';
require_once __DIR__ . '/game_profile_rules.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

$uid = bl_require_user_id();
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
$app = trim((string)($_GET['app'] ?? ''));
if($app === '' && $method === 'POST'){
  $payload = bl_input_json();
  $app = trim((string)($payload['app'] ?? ''));
}else{
  $payload = [];
}
if($app === '') $app = 'pairs';
if(!in_array($app, ['pairs','make24','detectword','ninja','trackcoin','ruleshift','crossnumber'], true)) bl_json(['ok'=>false,'error'=>'bad_app'], 400);

function bl_load_profile_row(PDO $db, int $uid, string $app): ?array {
  $aliases = bl_profile_aliases($app);
  if($aliases === []) return null;
  $placeholders = implode(',', array_fill(0, count($aliases), '?'));
  $stmt = $db->prepare('SELECT app, profile_json, created_at, updated_at FROM games_profiles WHERE user_id=? AND app IN (' . $placeholders . ') ORDER BY updated_at DESC LIMIT 1');
  $stmt->execute(array_merge([$uid], $aliases));
  $row = $stmt->fetch();
  return is_array($row) ? $row : null;
}

function bl_legacy_game_file_read(int $uid, string $app): array {
  $resource = bl_resource_file_read(bl_saved_game_path($uid, $app), []);
  if($resource['revision'] === 0) return ['found'=>false,'profile'=>bl_default_game_profile($app),'revision'=>0];
  $profile = is_array($resource['data']['profile'] ?? null) ? $resource['data']['profile'] : [];
  return ['found'=>true,'profile'=>bl_normalise_game_profile($app, $profile),'revision'=>$resource['revision']];
}

function bl_legacy_game_file_write(int $uid, string $app, array $profile, ?int $expectedRevision=null, ?int $createdAt=null, ?int $updatedAt=null): array {
  $path = bl_saved_game_path($uid, $app);
  $resource = bl_resource_file_read($path, []);
  if($expectedRevision !== null && $expectedRevision !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
  $createdIso = is_string($resource['data']['createdAt'] ?? null)
    ? $resource['data']['createdAt']
    : gmdate('c', $createdAt ?? time());
  $updatedIso = gmdate('c', $updatedAt ?? time());
  return bl_resource_file_replace($path, [
    'game'=>$app,
    'profile'=>$profile,
    'createdAt'=>$createdIso,
    'updatedAt'=>$updatedIso,
  ], $resource['revision']);
}

try{
  $mode = bl_resource_authority();

  if($method === 'GET'){
    if($mode === 'saved-data'){
      $row = bl_legacy_game_file_read($uid, $app);
      bl_json(['ok'=>true,'app'=>$app,'profile'=>$row['profile'],'revision'=>$row['revision']]);
    }
    $db = bl_games_db();
    $row = bl_load_profile_row($db, $uid, $app);
    if(!$row){
      bl_json(['ok'=>true,'app'=>$app,'profile'=>bl_default_game_profile($app)]);
    }
    $decoded = json_decode((string)($row['profile_json'] ?? '{}'), true);
    $profile = bl_normalise_game_profile($app, is_array($decoded) ? $decoded : []);
    if($mode === 'mirror'){
      bl_legacy_game_file_write($uid, $app, $profile, null, (int)($row['created_at'] ?? time()), (int)($row['updated_at'] ?? time()));
    }
    bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile]);
  }

  if($method === 'POST'){
    if(!is_array($payload)) $payload = bl_input_json();
    $profile = bl_normalise_game_profile($app, is_array($payload['profile'] ?? null) ? $payload['profile'] : []);
    if($mode === 'saved-data'){
      $expected = bl_resource_required_revision_from_input($payload);
      $written = bl_legacy_game_file_write($uid, $app, $profile, $expected);
      bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile,'revision'=>$written['revision']]);
    }
    $db = bl_games_db();
    $now = bl_now();
    $json = json_encode($profile, JSON_UNESCAPED_SLASHES);
    $stmt = $db->prepare('INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:u2)
      ON CONFLICT(user_id, app) DO UPDATE SET profile_json=excluded.profile_json, updated_at=excluded.updated_at');
    $stmt->execute([':u'=>$uid, ':a'=>$app, ':j'=>$json, ':c'=>$now, ':u2'=>$now]);
    if($mode === 'mirror') bl_legacy_game_file_write($uid, $app, $profile, null, $now, $now);
    bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'games_profile_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'games_profile_failed'], 500);
}
