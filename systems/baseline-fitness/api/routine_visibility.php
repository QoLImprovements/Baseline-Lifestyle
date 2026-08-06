<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

try{
  if(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST'){
    bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  }

  $user = bl_require_user();
  $input = bl_input_json();
  $visibility = strtolower(trim((string)($input['visibility'] ?? 'private'))) === 'public' ? 'public' : 'private';
  $updated = bl_now();
  $db = bl_fitness_db();

  $statement = $db->prepare('INSERT INTO fitness_routine_state(user_id, visibility, routine_json, logs_json, updated_at)
    VALUES(:user_id,:visibility,:routine_json,:logs_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      visibility=excluded.visibility,
      updated_at=excluded.updated_at');
  $statement->execute([
    ':user_id'=>(int)$user['id'],
    ':visibility'=>$visibility,
    ':routine_json'=>'[]',
    ':logs_json'=>'{}',
    ':updated_at'=>$updated,
  ]);

  bl_json(['ok'=>true,'visibility'=>$visibility,'updatedAt'=>gmdate('c',$updated)]);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_routine_visibility_failed'], 500);
}
