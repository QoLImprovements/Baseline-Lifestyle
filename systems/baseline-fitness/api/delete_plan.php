<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$uid = bl_require_user_id();
$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));

try{
  $db = bl_fitness_db();

  if($planId <= 0){
    $p = $db->prepare('SELECT id FROM plans WHERE user_id=:u ORDER BY created_at DESC LIMIT 1');
    $p->execute([':u'=>$uid]);
    $row = $p->fetch();
    if(!$row) bl_json(['ok'=>false,'error'=>'no_plan'], 404);
    $planId = (int)$row['id'];
  }

  $own = $db->prepare('SELECT id FROM plans WHERE id=:p AND user_id=:u LIMIT 1');
  $own->execute([':p'=>$planId, ':u'=>$uid]);
  if(!$own->fetch()) bl_json(['ok'=>false,'error'=>'not_found'], 404);

  $db->beginTransaction();
  $db->prepare('DELETE FROM plan_sessions WHERE plan_id=:p AND user_id=:u')->execute([':p'=>$planId, ':u'=>$uid]);
  $db->prepare('DELETE FROM plans WHERE id=:p AND user_id=:u')->execute([':p'=>$planId, ':u'=>$uid]);
  $db->commit();

  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
  bl_json(['ok'=>false,'error'=>'delete_failed'], 500);
}
