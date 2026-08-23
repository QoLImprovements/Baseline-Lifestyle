<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$input = bl_input_json();
$planId = max(0, (int)($input['planId'] ?? 0));
$sessionIndex = max(0, (int)($input['sessionIndex'] ?? 0));
if($planId <= 0 || $sessionIndex <= 0) bl_json(['ok'=>false,'error'=>'invalid_session'],400);

try{
  $mode = bl_resource_authority();
  $today = gmdate('Y-m-d');

  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $expected = bl_resource_required_revision_from_input($input);
    if($expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
    $planIndex = bl_fitness_find_plan_index($resource['data'],$planId);
    if($planIndex === null) bl_json(['ok'=>false,'error'=>'not_found'],404);
    $record = $resource['data']['plans'][$planIndex] ?? [];
    $sessions = is_array($record['sessions'] ?? null) ? $record['sessions'] : [];
    $found = false;
    foreach($sessions as &$session){
      if(!is_array($session)) continue;
      $index = (int)($session['sessionIndex'] ?? $session['session_index'] ?? 0);
      if($index !== $sessionIndex) continue;
      if((string)($session['status'] ?? 'planned') === 'done') bl_json(['ok'=>false,'error'=>'already_completed'],409);
      $session['scheduledDate'] = $today;
      $session['status'] = 'planned';
      $session['updatedAt'] = gmdate('c');
      $found = true;
      break;
    }
    unset($session);
    if(!$found) bl_json(['ok'=>false,'error'=>'not_found'],404);
    $resource['data']['plans'][$planIndex]['sessions'] = $sessions;
    $written = bl_fitness_resource_write($uid,$resource['data'],$resource['revision']);
    bl_json(['ok'=>true,'planId'=>$planId,'sessionIndex'=>$sessionIndex,'scheduledDate'=>$today,'revision'=>(int)($written['revision'] ?? 0)]);
  }

  $db = bl_fitness_db();
  $statement = $db->prepare("UPDATE plan_sessions SET scheduled_date=:date, status='planned', updated_at=:updated
    WHERE plan_id=:plan AND user_id=:user AND session_index=:session AND status<>'done'");
  $statement->execute([
    ':date'=>$today,
    ':updated'=>time(),
    ':plan'=>$planId,
    ':user'=>$uid,
    ':session'=>$sessionIndex,
  ]);
  if($statement->rowCount() < 1) bl_json(['ok'=>false,'error'=>'not_found'],404);
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db,$uid);
  bl_json(['ok'=>true,'planId'=>$planId,'sessionIndex'=>$sessionIndex,'scheduledDate'=>$today]);
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'start_early_failed'],500);
}
