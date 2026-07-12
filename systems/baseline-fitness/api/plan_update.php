<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$uid = bl_require_user_id();

$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));
$planText = trim((string)($d['planText'] ?? ($d['plan_text'] ?? '')));
$planJson = $d['planJson'] ?? ($d['plan_json'] ?? []);
if(!is_array($planJson)) $planJson = [];

try{
  $db = bl_fitness_db();

  if($planId <= 0){
    $p = $db->prepare('SELECT id FROM plans WHERE user_id=:u ORDER BY created_at DESC LIMIT 1');
    $p->execute([':u'=>$uid]);
    $row = $p->fetch();
    if(!$row) bl_json(['ok'=>false,'error'=>'no_plan'], 404);
    $planId = (int)$row['id'];
  }

  // Ownership check
  $own = $db->prepare('SELECT id FROM plans WHERE id=:p AND user_id=:u LIMIT 1');
  $own->execute([':p'=>$planId, ':u'=>$uid]);
  if(!$own->fetch()) bl_json(['ok'=>false,'error'=>'not_found'], 404);

  if($planText === ''){
    // Keep a simple fallback so the plan never renders empty in legacy UI.
    $planText = "Plan updated " . gmdate('Y-m-d');
  }

  $upd = $db->prepare('UPDATE plans SET plan_text=:pt, plan_json=:pj WHERE id=:p AND user_id=:u');
  $upd->execute([
    ':pt'=>$planText,
    ':pj'=>json_encode($planJson, JSON_UNESCAPED_SLASHES),
    ':p'=>$planId,
    ':u'=>$uid,
  ]);

  // Session count adjustment
  $newSessions = (int)($planJson['sessions'] ?? 0);
  if($newSessions <= 0) $newSessions = 18;

  $cntStmt = $db->prepare('SELECT COUNT(1) as c FROM plan_sessions WHERE plan_id=:p');
  $cntStmt->execute([':p'=>$planId]);
  $oldCount = (int)(($cntStmt->fetch()['c'] ?? 0));

  $frequency = (string)($planJson['frequency'] ?? '3x');
  $patterns = [
    '1x' => [7],
    '2x' => [3,4],
    '3x' => [2,2,3],
  ];
  $pat = $patterns[$frequency] ?? $patterns['3x'];

  $now = time();

  $requestedDays = is_array($planJson['days'] ?? null) ? array_values($planJson['days']) : [];
  $dayNumbers = ['Sunday'=>0,'Monday'=>1,'Tuesday'=>2,'Wednesday'=>3,'Thursday'=>4,'Friday'=>5,'Saturday'=>6];
  $selectedDayNumbers = [];
  foreach($requestedDays as $dayName){
    if(isset($dayNumbers[$dayName])) $selectedDayNumbers[] = $dayNumbers[$dayName];
  }
  $selectedDayNumbers = array_values(array_unique($selectedDayNumbers));
  $reschedule = !empty($d['reschedule']);

  if($reschedule && $oldCount > 0){
    $startDate = (string)($planJson['startDate'] ?? '');
    if(!preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDate)) $startDate = gmdate('Y-m-d');
    $dt = new DateTimeImmutable($startDate, new DateTimeZone('UTC'));
    $dates = [];
    while(count($dates) < $newSessions){
      if($selectedDayNumbers){
        if(in_array((int)$dt->format('w'), $selectedDayNumbers, true)) $dates[] = $dt->format('Y-m-d');
        $dt = $dt->modify('+1 day');
      }else{
        $dates[] = $dt->format('Y-m-d');
        $stepIndex = count($dates)-1;
        if(count($dates) < $newSessions){
          $stepDays = (int)($pat[$stepIndex % count($pat)] ?? 2);
          $dt = $dt->modify('+' . $stepDays . ' days');
        }
      }
    }
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
    // No sessions exist (older DB) — create from scratch.
    $startDate = (string)($planJson['startDate'] ?? '');
    if(!preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDate)) $startDate = gmdate('Y-m-d');
    $dt = new DateTimeImmutable($startDate, new DateTimeZone('UTC'));

    $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');
    for($i=1; $i<=$newSessions; $i++){
      $ins->execute([
        ':p'=>$planId,
        ':u'=>$uid,
        ':i'=>$i,
        ':d'=>$dt->format('Y-m-d'),
        ':s'=>'planned',
        ':t'=>$now,
      ]);
      if($i < $newSessions){
        $stepDays = (int)($pat[($i-1) % count($pat)] ?? 2);
        $dt = $dt->modify('+' . $stepDays . ' days');
      }
    }
  }elseif($newSessions > $oldCount){
    // Append sessions.
    $lastStmt = $db->prepare('SELECT session_index, scheduled_date FROM plan_sessions WHERE plan_id=:p ORDER BY session_index DESC LIMIT 1');
    $lastStmt->execute([':p'=>$planId]);
    $last = $lastStmt->fetch();
    $lastDate = (string)($last['scheduled_date'] ?? gmdate('Y-m-d'));

    $dt = new DateTimeImmutable($lastDate, new DateTimeZone('UTC'));
    $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');

    for($i=$oldCount+1; $i<=$newSessions; $i++){
      $stepDays = (int)($pat[($i-2) % count($pat)] ?? 2); // step from session (i-1) to i
      $dt = $dt->modify('+' . $stepDays . ' days');

      $ins->execute([
        ':p'=>$planId,
        ':u'=>$uid,
        ':i'=>$i,
        ':d'=>$dt->format('Y-m-d'),
        ':s'=>'planned',
        ':t'=>$now,
      ]);
    }
  }elseif($newSessions < $oldCount){
    // Trim sessions beyond new length.
    $del = $db->prepare('DELETE FROM plan_sessions WHERE plan_id=:p AND session_index>:i');
    $del->execute([':p'=>$planId, ':i'=>$newSessions]);
  }

  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'plan_update_failed'], 500);
}
