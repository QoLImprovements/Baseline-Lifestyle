<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$name = trim((string)($_GET['name'] ?? ''));

// If name is omitted, allow fetching the current user's plan (requires auth).
if($name === ''){
  $user = bl_require_user();
  $name = (string)($user['name'] ?? '');
  if($name === '') bl_json(['ok'=>false,'error'=>'missing_name'], 400);
}

try{
  $db = bl_fitness_db();
  $u = $db->prepare('SELECT id, name FROM users WHERE name=:n LIMIT 1');
  $u->execute([':n'=>$name]);
  $user = $u->fetch();
  if(!$user) bl_json(['ok'=>false,'error'=>'not_found'], 404);

  $p2 = $db->prepare('SELECT id, plan_text, plan_json, created_at FROM plans WHERE user_id=:u ORDER BY created_at DESC LIMIT 1');
  $p2->execute([':u'=>(int)$user['id']]);
  $planRow = $p2->fetch();
  if(!$planRow) bl_json(['ok'=>true,'name'=>$name,'hasPlan'=>false,'has_plan'=>false]);

  $planId = (int)$planRow['id'];
  $planJsonRaw = (string)($planRow['plan_json'] ?? '');
  $planJson = json_decode($planJsonRaw, true);
  if(!is_array($planJson)) $planJson = [];

  // Sessions for this plan (if present)
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

  $startDate = (string)($planJson['startDate'] ?? ($sessions[0]['scheduled_date'] ?? ''));

  $createdAt = (int)$planRow['created_at'];
  $planText  = (string)$planRow['plan_text'];

  bl_json([
    'ok'=>true,
    'name'=>$name,
    'planId'=>$planId,
    'hasPlan'=>true,
    'has_plan'=>true,
    // Back-compat fields
    'planText'=>$planText,
    'createdAt'=>$createdAt,
    // Also return snake_case (some older scripts used it)
    'plan_text'=>$planText,
    'created_at'=>$createdAt,
    // Structured
    'planJson'=>$planJson,
    'plan_json'=>$planJson,
    'sessions'=>$sessions,
    'progress'=>[
      'done'=>$done,
      'total'=>$total,
      'nextIndex'=>$nextIdx,
      'startDate'=>$startDate,
    ],
  ]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'get_failed'], 500);
}
