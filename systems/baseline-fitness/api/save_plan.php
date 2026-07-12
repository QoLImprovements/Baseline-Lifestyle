<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';
$uid = bl_require_user_id();

$d = bl_input_json();
$planText = trim((string)($d['planText'] ?? ''));
$planJson = $d['planJson'] ?? [];

if($planText === '') bl_json(['ok'=>false,'error'=>'empty_plan'], 400);

try{
  $db = bl_fitness_db();
  $db->beginTransaction();
  $stmt = $db->prepare('INSERT INTO plans(user_id, created_at, plan_text, plan_json) VALUES(:u,:t,:pt,:pj)');
  $stmt->execute([
    ':u'=>$uid,
    ':t'=>time(),
    ':pt'=>$planText,
    ':pj'=>json_encode($planJson, JSON_UNESCAPED_SLASHES),
  ]);
  $planId = (int)$db->lastInsertId();

  // Create scheduled sessions if we have enough detail in planJson.
  $pj = is_array($planJson) ? $planJson : [];
  $sessions = (int)($pj['sessions'] ?? 0);
  if($sessions <= 0) $sessions = 18;

  $frequency = (string)($pj['frequency'] ?? '3x');

  $startDate = (string)($pj['startDate'] ?? '');
  if(!preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDate)){
    $startDate = gmdate('Y-m-d');
  }

  $patterns = [
    '1x' => [7],
    '2x' => [3,4],
    '3x' => [2,2,3],
  ];
  $pat = $patterns[$frequency] ?? $patterns['3x'];

  $dt = new DateTimeImmutable($startDate, new DateTimeZone('UTC'));
  $ins = $db->prepare('INSERT INTO plan_sessions(plan_id, user_id, session_index, scheduled_date, status, completed_at, updated_at) VALUES(:p,:u,:i,:d,:s,NULL,:t)');
  $now = time();
  $dayNumbers = ['Sunday'=>0,'Monday'=>1,'Tuesday'=>2,'Wednesday'=>3,'Thursday'=>4,'Friday'=>5,'Saturday'=>6];
  $selectedDayNumbers = [];
  foreach((is_array($pj['days'] ?? null) ? $pj['days'] : []) as $dayName){
    if(isset($dayNumbers[$dayName])) $selectedDayNumbers[] = $dayNumbers[$dayName];
  }
  $selectedDayNumbers = array_values(array_unique($selectedDayNumbers));
  $dates = [];
  while(count($dates) < $sessions){
    if($selectedDayNumbers){
      if(in_array((int)$dt->format('w'), $selectedDayNumbers, true)) $dates[] = $dt->format('Y-m-d');
      $dt = $dt->modify('+1 day');
    }else{
      $dates[] = $dt->format('Y-m-d');
      $stepIndex = count($dates)-1;
      if(count($dates) < $sessions){
        $stepDays = (int)($pat[$stepIndex % count($pat)] ?? 2);
        $dt = $dt->modify('+' . $stepDays . ' days');
      }
    }
  }

  for($i=1; $i<=$sessions; $i++){
    $ins->execute([
      ':p' => $planId,
      ':u' => $uid,
      ':i' => $i,
      ':d' => $dates[$i-1],
      ':s' => 'planned',
      ':t' => $now,
    ]);
  }

  $db->commit();
  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
  bl_json(['ok'=>false,'error'=>'save_failed'], 500);
}
