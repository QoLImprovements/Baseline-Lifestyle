<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$uid = bl_require_user_id();

$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));
$sessionIndex = (int)($d['sessionIndex'] ?? ($d['session_index'] ?? 0));
$action = strtolower(trim((string)($d['action'] ?? 'toggle_done')));
$days = (int)($d['days'] ?? 1);
if($days < 1) $days = 1;
if($days > 14) $days = 14;

if($sessionIndex <= 0) bl_json(['ok'=>false,'error'=>'bad_session_index'], 400);

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

  $now = time();

  $sess = $db->prepare('SELECT id, scheduled_date, status, completed_at FROM plan_sessions WHERE plan_id=:p AND session_index=:i LIMIT 1');
  $sess->execute([':p'=>$planId, ':i'=>$sessionIndex]);
  $srow = $sess->fetch();
  if(!$srow) bl_json(['ok'=>false,'error'=>'session_not_found'], 404);

  if($action === 'toggle_done'){
    $isDone = ((string)($srow['status'] ?? '')) === 'done';
    if($isDone){
      $upd = $db->prepare('UPDATE plan_sessions SET status="planned", completed_at=NULL, updated_at=:t WHERE id=:id');
      $upd->execute([':t'=>$now, ':id'=>(int)$srow['id']]);
    }else{
      $upd = $db->prepare('UPDATE plan_sessions SET status="done", completed_at=:c, updated_at=:t WHERE id=:id');
      $upd->execute([':c'=>$now, ':t'=>$now, ':id'=>(int)$srow['id']]);
    }
  }elseif($action === 'reschedule'){
    // Shift this and future NOT-done sessions forward by N days.
    $shift = '+' . $days . ' days';

    // Mark the target session as rescheduled (if not done)
    if(((string)($srow['status'] ?? '')) !== 'done'){
      $upd0 = $db->prepare('UPDATE plan_sessions SET status="rescheduled", updated_at=:t WHERE id=:id');
      $upd0->execute([':t'=>$now, ':id'=>(int)$srow['id']]);
    }

    $upd = $db->prepare('UPDATE plan_sessions
      SET scheduled_date = date(scheduled_date, :shift), updated_at=:t
      WHERE plan_id=:p AND session_index>=:i AND status != "done"');
    $upd->execute([':shift'=>$shift, ':t'=>$now, ':p'=>$planId, ':i'=>$sessionIndex]);
  }elseif($action === 'set_status'){
    $status = strtolower(trim((string)($d['status'] ?? 'planned')));
    $allowed = ['planned','rescheduled','done'];
    if(!in_array($status, $allowed, true)) $status = 'planned';
    $completedAt = null;
    if($status === 'done') $completedAt = $now;

    $upd = $db->prepare('UPDATE plan_sessions SET status=:s, completed_at=:c, updated_at=:t WHERE id=:id');
    $upd->execute([
      ':s'=>$status,
      ':c'=>$completedAt,
      ':t'=>$now,
      ':id'=>(int)$srow['id'],
    ]);
  }else{
    bl_json(['ok'=>false,'error'=>'bad_action'], 400);
  }

  // Return updated sessions + progress
  $sessStmt = $db->prepare('SELECT session_index, scheduled_date, status, completed_at, updated_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
  $sessStmt->execute([':p'=>$planId]);
  $sessions = $sessStmt->fetchAll() ?: [];

  $total = count($sessions);
  $done = 0;
  $nextIdx = null;
  foreach($sessions as $s){
    if(($s['status'] ?? '') === 'done') $done++;
    if($nextIdx === null && ($s['status'] ?? '') !== 'done') $nextIdx = (int)($s['session_index'] ?? 0);
  }
  if($nextIdx === null && $total > 0) $nextIdx = $total + 1;

  bl_json(['ok'=>true,'planId'=>$planId,'sessions'=>$sessions,'progress'=>['done'=>$done,'total'=>$total,'nextIndex'=>$nextIdx]]);

}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'update_failed'], 500);
}
