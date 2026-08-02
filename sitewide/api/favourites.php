<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
require_once __DIR__ . '/resource_authority.php';

$uid = bl_require_user_id();
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

function bl_favourites_sqlite_rows(PDO $db, int $uid): array {
  $stmt = $db->prepare('SELECT app, recipe_id, created_at FROM favourites WHERE user_id=:u ORDER BY created_at DESC');
  $stmt->execute([':u'=>$uid]);
  return $stmt->fetchAll() ?: [];
}

function bl_favourites_file_items(array $rows): array {
  return array_map(static fn(array $row): array => [
    'app'=>(string)($row['app'] ?? ''),
    'recipeId'=>(string)($row['recipe_id'] ?? ''),
    'createdAt'=>gmdate('c', (int)($row['created_at'] ?? time())),
  ], $rows);
}

function bl_favourites_public_rows(array $items): array {
  $rows = array_map(static fn(array $item): array => [
    'app'=>(string)($item['app'] ?? ''),
    'recipe_id'=>(string)($item['recipeId'] ?? ''),
    'created_at'=>bl_resource_timestamp(is_string($item['createdAt'] ?? null) ? $item['createdAt'] : null),
  ], $items);
  usort($rows, static fn(array $a, array $b): int => $b['created_at'] <=> $a['created_at']);
  return $rows;
}

function bl_favourites_write_snapshot(int $uid, array $rows): ?array {
  $path = bl_saved_user_resource_path($uid, 'favourites');
  $items = bl_favourites_file_items($rows);
  return bl_resource_file_delete_if_empty($path, ['items'=>$items], static fn(array $data): bool => ($data['items'] ?? []) === []);
}

try{
  $mode = bl_resource_authority();

  if($method === 'GET'){
    $app = trim((string)($_GET['app'] ?? ''));
    if($app !== '' && !in_array($app, ['food','skincare'], true)){
      bl_json(['ok'=>false,'error'=>'bad_app'], 400);
    }

    if($mode === 'saved-data'){
      $resource = bl_resource_file_read(bl_saved_user_resource_path($uid, 'favourites'), ['items'=>[]]);
      $items = is_array($resource['data']['items'] ?? null) ? $resource['data']['items'] : [];
      $rows = bl_favourites_public_rows($items);
      if($app === '') bl_json(['ok'=>true,'rows'=>$rows,'revision'=>$resource['revision']]);
      $ids = [];
      foreach($rows as $row){
        if(($row['app'] ?? '') === $app) $ids[] = (string)$row['recipe_id'];
      }
      bl_json(['ok'=>true,'app'=>$app,'ids'=>$ids,'revision'=>$resource['revision']]);
    }

    $db = bl_db();
    $rows = bl_favourites_sqlite_rows($db, $uid);
    if($mode === 'mirror') bl_favourites_write_snapshot($uid, $rows);
    if($app === '') bl_json(['ok'=>true,'rows'=>$rows]);
    $ids = [];
    foreach($rows as $row){
      if(($row['app'] ?? '') === $app) $ids[] = (string)$row['recipe_id'];
    }
    bl_json(['ok'=>true,'app'=>$app,'ids'=>$ids]);
  }

  if($method === 'POST'){
    $d = bl_input_json();
    $app = trim((string)($d['app'] ?? ''));
    $rid = trim((string)($d['recipeId'] ?? ($d['recipe_id'] ?? '')));
    if($app === '' || $rid === '') bl_json(['ok'=>false,'error'=>'missing_fields'], 400);
    if(!in_array($app, ['food','skincare'], true)) bl_json(['ok'=>false,'error'=>'bad_app'], 400);

    if($mode === 'saved-data'){
      $path = bl_saved_user_resource_path($uid, 'favourites');
      $resource = bl_resource_file_read($path, ['items'=>[]]);
      $expected = bl_resource_revision_from_input($d);
      if($expected !== null && $expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
      $items = is_array($resource['data']['items'] ?? null) ? $resource['data']['items'] : [];
      $found = false;
      $next = [];
      foreach($items as $item){
        if((string)($item['app'] ?? '') === $app && (string)($item['recipeId'] ?? '') === $rid){
          $found = true;
          continue;
        }
        $next[] = $item;
      }
      if(!$found) $next[] = ['app'=>$app,'recipeId'=>$rid,'createdAt'=>gmdate('c')];
      usort($next, static fn(array $a, array $b): int => strcmp((string)($a['app'] ?? '') . ':' . (string)($a['recipeId'] ?? ''), (string)($b['app'] ?? '') . ':' . (string)($b['recipeId'] ?? '')));
      $written = bl_resource_file_delete_if_empty($path, ['items'=>$next], static fn(array $data): bool => ($data['items'] ?? []) === []);
      bl_json([
        'ok'=>true,
        'favourited'=>!$found,
        'app'=>$app,
        'recipeId'=>$rid,
        'revision'=>(int)($written['revision'] ?? 0),
      ]);
    }

    $db = bl_db();
    $chk = $db->prepare('SELECT id FROM favourites WHERE user_id=:u AND app=:a AND recipe_id=:r LIMIT 1');
    $chk->execute([':u'=>$uid, ':a'=>$app, ':r'=>$rid]);
    $row = $chk->fetch();
    $favourited = false;
    if($row){
      $del = $db->prepare('DELETE FROM favourites WHERE id=:id');
      $del->execute([':id'=>(int)$row['id']]);
    }else{
      $ins = $db->prepare('INSERT INTO favourites(user_id, app, recipe_id, created_at) VALUES(:u,:a,:r,:t)');
      $ins->execute([':u'=>$uid, ':a'=>$app, ':r'=>$rid, ':t'=>time()]);
      $favourited = true;
    }
    if($mode === 'mirror') bl_favourites_write_snapshot($uid, bl_favourites_sqlite_rows($db, $uid));
    bl_json(['ok'=>true,'favourited'=>$favourited,'app'=>$app,'recipeId'=>$rid]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'favourites_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'favourites_failed'], 500);
}
