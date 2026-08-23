<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));
$planText = trim((string)($d['planText'] ?? ($d['plan_text'] ?? '')));
$planJson = $d['planJson'] ?? ($d['plan_json'] ?? []);
if(!is_array($planJson)) $planJson = [];

try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $expected = bl_resource_required_revision_from_input($d);
    if($expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
    $index = $planId > 0 ? bl_fitness_find_plan_index($resource['data'], $planId) : bl_fitness_latest_plan_index($resource['data']);
    if($index === null) bl_json(['ok'=>false,'error'=>$planId > 0 ? 'not_found' : 'no_plan'], 404);
    $record = $resource['data']['plans'][$index];
    $planId = bl_fitness_plan_id($record);
    if($planText === '') $planText = 'Plan updated ' . gmdate('Y-m-d');
    $existing = is_array($record['sessions'] ?? null) ? array_values($record['sessions']) : [];
    $newCount = max(1, min(BL_FITNESS_RESOURCE_MAX_SESSIONS, (int)($planJson['sessions'] ?? 18)));
    $oldCount = count($existing);
    $reschedule = !empty($d['reschedule']);

    if($reschedule || $oldCount === 0){
      $sessions = bl_fitness_new_sessions($planJson, $existing, $reschedule);
    }elseif($newCount < $oldCount){
      $sessions = array_slice($existing, 0, $newCount);
    }elseif($newCount > $oldCount){
      $sessions = $existing;
      $lastDate = (string)($existing[$oldCount - 1]['scheduledDate'] ?? gmdate('Y-m-d'));
      if(preg_match('/^\d{4}-\d{2}-\d{2}$/', $lastDate) !== 1) $lastDate = gmdate('Y-m-d');
      $date = new DateTimeImmutable($lastDate, new DateTimeZone('UTC'));
      $pattern = bl_fitness_frequency_pattern((string)($planJson['frequency'] ?? '3x'));
      for($i=$oldCount + 1; $i<=$newCount; $i++){
        $step = (int)($pattern[($i - 2) % count($pattern)] ?? 2);
        $date = $date->modify('+' . $step . ' days');
        $sessions[] = [
          'sourceSessionId'=>$i,
          'sessionIndex'=>$i,
          'scheduledDate'=>$date->format('Y-m-d'),
          'status'=>'planned',
          'completedAt'=>null,
          'updatedAt'=>gmdate('c'),
        ];
      }
    }else{
      $sessions = $existing;
    }

    $record['plan'] = $planJson;
    $record['legacyPlanText'] = $planText;
    $record['sessions'] = $sessions;
    $resource['data']['plans'][$index] = $record;
    $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
    bl_json(['ok'=>true,'planId'=>$planId,'revision'=>(int)($written['revision'] ?? 0)]);
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
  if($planText === '') $planText = 'Plan updated ' . gmdate('Y-m-d');
  $upd = $db->prepare('UPDATE plans SET plan_text=:pt, plan_json=:pj WHERE id=:p AND user_id=:u');
  $upd->execute([':pt'=>$planText,':pj'=>json_encode($planJson, JSON_UNESCAPED_SLASHES),':p'=>$planId,':u'=>$uid]);

  $newSessions = max(1, min(BL_FITNESS_RESOURCE_MAX_SESSIONS, (int)($planJson['sessions'] ?? 18)));
  $cntStmt = $db->prepare('SELECT COUNT(1) as c FROM plan_sessions WHERE plan_id=:p');
  $cntStmt->execute([':p'=>$planId]);
  $oldCount = (int)(($cntStmt->fetch()['c'] ?? 0));
  $frequency = (string)($planJson['frequency'] ?? '3x');
  $pat = bl_fitness_frequency_pattern($frequency);
  $now = time();
  $reschedule = !empty($d['reschedule']);

  if($reschedule && $oldCount > 0){
    $dates = bl_fitness_schedule_dates($planJson);
    $existingStmt = $db->prepare('SELECT session_index, status, completed_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index');
    $existingStmt->execute([':p'=>$planId]);
    $existing = [];
    foreach($existingStmt->fetchAll() as $row) $existing[(int)$row['session_index']] = $row;
    $db->prepare('DELETE FROM plan_sessions WHERE plan_id=:p')->execute([':p'=>$planId]);
    $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,:c,:t)');
    for($i=1; $i<=$newSessions; $i++){
      $old = $existing[$i] ?? null;
      $ins->execute([':p'=>$planId,':u'=>$uid,':i'=>$i,':d'=>$dates[$i-1],':s'=>$old['status'] ?? 'planned',':c'=>$old['completed_at'] ?? null,':t'=>$now]);
    }
  }elseif($oldCount === 0){
    $dates = bl_fitness_schedule_dates($planJson);
    $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');
    foreach($dates as $offset=>$date){
      $ins->execute([':p'=>$planId,':u'=>$uid,':i'=>$offset + 1,':d'=>$date,':s'=>'planned',':t'=>$now]);
    }
  }elseif($newSessions > $oldCount){
    $lastStmt = $db->prepare('SELECT scheduled_date FROM plan_sessions WHERE plan_id=:p ORDER BY session_index DESC LIMIT 1');
    $lastStmt->execute([':p'=>$planId]);
    $last = $lastStmt->fetch();
    $date = new DateTimeImmutable((string)($last['scheduled_date'] ?? gmdate('Y-m-d')), new DateTimeZone('UTC'));
    $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');
    for($i=$oldCount + 1; $i<=$newSessions; $i++){
      $date = $date->modify('+' . (int)($pat[($i - 2) % count($pat)] ?? 2) . ' days');
      $ins->execute([':p'=>$planId,':u'=>$uid,':i'=>$i,':d'=>$date->format('Y-m-d'),':s'=>'planned',':t'=>$now]);
    }
  }elseif($newSessions < $oldCount){
    $del = $db->prepare('DELETE FROM plan_sessions WHERE plan_id=:p AND session_index>:i');
    $del->execute([':p'=>$planId,':i'=>$newSessions]);
  }
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'plan_update_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'plan_update_failed'], 500);
}
