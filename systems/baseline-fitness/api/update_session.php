<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));
$sessionIndex = (int)($d['sessionIndex'] ?? ($d['session_index'] ?? 0));
$action = strtolower(trim((string)($d['action'] ?? 'toggle_done')));
$days = max(1, min(14, (int)($d['days'] ?? 1)));
if($sessionIndex <= 0) bl_json(['ok'=>false,'error'=>'bad_session_index'], 400);
$completionDate = trim((string)($d['completionDate'] ?? ($d['completion_date'] ?? '')));
$completionIso = null;
$completionTimestamp = null;
if($completionDate !== ''){
  $parsedCompletion = DateTimeImmutable::createFromFormat('!Y-m-d', $completionDate, new DateTimeZone('UTC'));
  if(!$parsedCompletion || $parsedCompletion->format('Y-m-d') !== $completionDate || $completionDate > gmdate('Y-m-d')){
    bl_json(['ok'=>false,'error'=>'bad_completion_date'], 400);
  }
  $parsedCompletion = $parsedCompletion->setTime(12, 0, 0);
  $completionIso = $parsedCompletion->format('c');
  $completionTimestamp = $parsedCompletion->getTimestamp();
}

try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $expected = bl_resource_revision_from_input($d);
    if($expected !== null && $expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
    $planIndex = $planId > 0 ? bl_fitness_find_plan_index($resource['data'], $planId) : bl_fitness_latest_plan_index($resource['data']);
    if($planIndex === null) bl_json(['ok'=>false,'error'=>$planId > 0 ? 'not_found' : 'no_plan'], 404);
    $record = $resource['data']['plans'][$planIndex];
    $planId = bl_fitness_plan_id($record);
    $sessions = is_array($record['sessions'] ?? null) ? array_values($record['sessions']) : [];
    $targetIndex = null;
    foreach($sessions as $index=>$session){
      if(is_array($session) && (int)($session['sessionIndex'] ?? 0) === $sessionIndex){
        $targetIndex = (int)$index;
        break;
      }
    }
    if($targetIndex === null) bl_json(['ok'=>false,'error'=>'session_not_found'], 404);
    $now = gmdate('c');
    $target = $sessions[$targetIndex];

    if($action === 'toggle_done'){
      $isDone = (string)($target['status'] ?? '') === 'done';
      $target['status'] = $isDone ? 'planned' : 'done';
      $target['completedAt'] = $isDone ? null : ($completionIso ?? $now);
      $target['updatedAt'] = $now;
      $sessions[$targetIndex] = $target;
    }elseif($action === 'reschedule'){
      foreach($sessions as $index=>$session){
        if(!is_array($session) || (int)($session['sessionIndex'] ?? 0) < $sessionIndex || (string)($session['status'] ?? '') === 'done') continue;
        $date = (string)($session['scheduledDate'] ?? '');
        if(preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) !== 1) $date = gmdate('Y-m-d');
        $session['scheduledDate'] = (new DateTimeImmutable($date, new DateTimeZone('UTC')))->modify('+' . $days . ' days')->format('Y-m-d');
        if((int)($session['sessionIndex'] ?? 0) === $sessionIndex) $session['status'] = 'rescheduled';
        $session['updatedAt'] = $now;
        $sessions[$index] = $session;
      }
    }elseif($action === 'set_status'){
      $status = strtolower(trim((string)($d['status'] ?? 'planned')));
      if(!in_array($status, ['planned','rescheduled','done'], true)) $status = 'planned';
      $target['status'] = $status;
      $target['completedAt'] = $status === 'done' ? ($completionIso ?? $now) : null;
      $target['updatedAt'] = $now;
      $sessions[$targetIndex] = $target;
    }elseif($action === 'set_completion_date'){
      if((string)($target['status'] ?? '') !== 'done') bl_json(['ok'=>false,'error'=>'completion_requires_done'], 409);
      if($completionIso === null) bl_json(['ok'=>false,'error'=>'bad_completion_date'], 400);
      $target['completedAt'] = $completionIso;
      $target['updatedAt'] = $now;
      $sessions[$targetIndex] = $target;
    }else{
      bl_json(['ok'=>false,'error'=>'bad_action'], 400);
    }

    $record['sessions'] = $sessions;
    $resource['data']['plans'][$planIndex] = $record;
    $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
    $public = bl_fitness_public_sessions($record);
    bl_json([
      'ok'=>true,
      'planId'=>$planId,
      'sessions'=>$public,
      'progress'=>bl_fitness_progress($public, bl_fitness_plan_json($record)),
      'revision'=>(int)($written['revision'] ?? 0),
    ]);
  }

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
  $now = time();
  $sess = $db->prepare('SELECT id, scheduled_date, status, completed_at FROM plan_sessions WHERE plan_id=:p AND session_index=:i LIMIT 1');
  $sess->execute([':p'=>$planId, ':i'=>$sessionIndex]);
  $srow = $sess->fetch();
  if(!$srow) bl_json(['ok'=>false,'error'=>'session_not_found'], 404);

  if($action === 'toggle_done'){
    $isDone = ((string)($srow['status'] ?? '')) === 'done';
    if($isDone){
      $db->prepare('UPDATE plan_sessions SET status="planned", completed_at=NULL, updated_at=:t WHERE id=:id')->execute([':t'=>$now, ':id'=>(int)$srow['id']]);
    }else{
      $db->prepare('UPDATE plan_sessions SET status="done", completed_at=:c, updated_at=:t WHERE id=:id')->execute([':c'=>$completionTimestamp ?? $now, ':t'=>$now, ':id'=>(int)$srow['id']]);
    }
  }elseif($action === 'reschedule'){
    if(((string)($srow['status'] ?? '')) !== 'done'){
      $db->prepare('UPDATE plan_sessions SET status="rescheduled", updated_at=:t WHERE id=:id')->execute([':t'=>$now, ':id'=>(int)$srow['id']]);
    }
    $db->prepare('UPDATE plan_sessions SET scheduled_date=date(scheduled_date,:shift), updated_at=:t WHERE plan_id=:p AND session_index>=:i AND status!="done"')
      ->execute([':shift'=>'+' . $days . ' days', ':t'=>$now, ':p'=>$planId, ':i'=>$sessionIndex]);
  }elseif($action === 'set_status'){
    $status = strtolower(trim((string)($d['status'] ?? 'planned')));
    if(!in_array($status, ['planned','rescheduled','done'], true)) $status = 'planned';
    $db->prepare('UPDATE plan_sessions SET status=:s, completed_at=:c, updated_at=:t WHERE id=:id')
      ->execute([':s'=>$status,':c'=>$status === 'done' ? ($completionTimestamp ?? $now) : null,':t'=>$now,':id'=>(int)$srow['id']]);
  }elseif($action === 'set_completion_date'){
    if(((string)($srow['status'] ?? '')) !== 'done') bl_json(['ok'=>false,'error'=>'completion_requires_done'], 409);
    if($completionTimestamp === null) bl_json(['ok'=>false,'error'=>'bad_completion_date'], 400);
    $db->prepare('UPDATE plan_sessions SET completed_at=:c, updated_at=:t WHERE id=:id')
      ->execute([':c'=>$completionTimestamp,':t'=>$now,':id'=>(int)$srow['id']]);
  }else{
    bl_json(['ok'=>false,'error'=>'bad_action'], 400);
  }

  $sessStmt = $db->prepare('SELECT session_index, scheduled_date, status, completed_at, updated_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
  $sessStmt->execute([':p'=>$planId]);
  $sessions = $sessStmt->fetchAll() ?: [];
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'planId'=>$planId,'sessions'=>$sessions,'progress'=>bl_fitness_progress($sessions)]);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'update_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'update_failed'], 500);
}
