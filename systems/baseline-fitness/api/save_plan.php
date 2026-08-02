<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$d = bl_input_json();
$planText = trim((string)($d['planText'] ?? ''));
$planJson = $d['planJson'] ?? [];
if(!is_array($planJson)) $planJson = [];
if($planText === '') bl_json(['ok'=>false,'error'=>'empty_plan'], 400);

try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $expected = bl_resource_revision_from_input($d);
    if($expected !== null && $expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
    $planId = bl_fitness_next_plan_id($resource['data']);
    $resource['data']['plans'][] = [
      'sourcePlanId'=>$planId,
      'createdAt'=>gmdate('c'),
      'plan'=>$planJson,
      'legacyPlanText'=>$planText,
      'sessions'=>bl_fitness_new_sessions($planJson),
    ];
    $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
    bl_json(['ok'=>true,'planId'=>$planId,'revision'=>(int)($written['revision'] ?? 0)]);
  }

  $db = bl_fitness_db();
  $db->beginTransaction();
  $stmt = $db->prepare('INSERT INTO plans(user_id, created_at, plan_text, plan_json) VALUES(:u,:t,:pt,:pj)');
  $stmt->execute([':u'=>$uid,':t'=>time(),':pt'=>$planText,':pj'=>json_encode($planJson, JSON_UNESCAPED_SLASHES)]);
  $planId = (int)$db->lastInsertId();
  $dates = bl_fitness_schedule_dates($planJson);
  $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');
  $now = time();
  foreach($dates as $offset=>$date){
    $ins->execute([':p'=>$planId,':u'=>$uid,':i'=>$offset + 1,':d'=>$date,':s'=>'planned',':t'=>$now]);
  }
  $db->commit();
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'save_failed'], 500);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
  bl_json(['ok'=>false,'error'=>'save_failed'], 500);
}
