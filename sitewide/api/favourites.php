<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

$uid = bl_require_user_id();

$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

try{
  $db = bl_db();

  if($method === 'GET'){
    $app = trim((string)($_GET['app'] ?? ''));
    if($app !== '' && !in_array($app, ['food','skincare'], true)){
      bl_json(['ok'=>false,'error'=>'bad_app'], 400);
    }

    if($app === ''){
      $stmt = $db->prepare('SELECT app, recipe_id, created_at FROM favourites WHERE user_id=:u ORDER BY created_at DESC');
      $stmt->execute([':u'=>$uid]);
      $rows = $stmt->fetchAll() ?: [];
      bl_json(['ok'=>true,'rows'=>$rows]);
    }

    $stmt = $db->prepare('SELECT recipe_id FROM favourites WHERE user_id=:u AND app=:a ORDER BY created_at DESC');
    $stmt->execute([':u'=>$uid, ':a'=>$app]);
    $rows = $stmt->fetchAll() ?: [];
    $ids = array_map(fn($r)=> (string)$r['recipe_id'], $rows);
    bl_json(['ok'=>true,'app'=>$app,'ids'=>$ids]);
  }

  if($method === 'POST'){
    $d = bl_input_json();
    $app = trim((string)($d['app'] ?? ''));
    $rid = trim((string)($d['recipeId'] ?? ($d['recipe_id'] ?? '')));

    if($app === '' || $rid === '') bl_json(['ok'=>false,'error'=>'missing_fields'], 400);
    if(!in_array($app, ['food','skincare'], true)) bl_json(['ok'=>false,'error'=>'bad_app'], 400);

    // Toggle behaviour.
    $chk = $db->prepare('SELECT id FROM favourites WHERE user_id=:u AND app=:a AND recipe_id=:r LIMIT 1');
    $chk->execute([':u'=>$uid, ':a'=>$app, ':r'=>$rid]);
    $row = $chk->fetch();

    if($row){
      $del = $db->prepare('DELETE FROM favourites WHERE id=:id');
      $del->execute([':id'=>(int)$row['id']]);
      bl_json(['ok'=>true,'favourited'=>false,'app'=>$app,'recipeId'=>$rid]);
    }

    $ins = $db->prepare('INSERT INTO favourites(user_id, app, recipe_id, created_at) VALUES(:u,:a,:r,:t)');
    $ins->execute([':u'=>$uid, ':a'=>$app, ':r'=>$rid, ':t'=>time()]);
    bl_json(['ok'=>true,'favourited'=>true,'app'=>$app,'recipeId'=>$rid]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'favourites_failed'], 500);
}
