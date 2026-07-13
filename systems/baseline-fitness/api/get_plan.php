<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

const BL_FITNESS_PLAN_API_BUILD = 'BASELINE_FITNESS_PLAN_PAYLOAD_20260713_2';
const BL_FITNESS_MAX_PLAN_JSON_BYTES = 1048576;
const BL_FITNESS_MAX_SESSIONS = 120;

header('X-Baseline-Fitness-API-Build: ' . BL_FITNESS_PLAN_API_BUILD);

$requestedName = trim((string)($_GET['name'] ?? ''));
$legacyPayload = ((string)($_GET['legacy'] ?? '')) === '1';

try{
  $db = bl_fitness_db();

  if($requestedName === ''){
    // Current-user requests already have an authenticated user ID. Do not look the
    // same account up again by display name: names may change and are not the key.
    $user = bl_require_user();
    $userId = (int)($user['id'] ?? 0);
    $name = trim((string)($user['name'] ?? ''));
    if($userId <= 0) bl_json(['ok'=>false,'error'=>'missing_user'], 400);
  }else{
    // Public profile lookup remains name based, but is case insensitive.
    $u = $db->prepare('SELECT id, name FROM users WHERE lower(name)=lower(:n) LIMIT 1');
    $u->execute([':n'=>$requestedName]);
    $user = $u->fetch();
    if(!$user) bl_json(['ok'=>false,'error'=>'not_found'], 404);
    $userId = (int)$user['id'];
    $name = (string)$user['name'];
  }

  // The application only needs structured plan data. Do not read plan_text into
  // PHP memory unless an explicitly requested legacy client needs it.
  $p = $db->prepare('SELECT id, plan_json, created_at FROM plans WHERE user_id=:u ORDER BY created_at DESC, id DESC LIMIT 1');
  $p->execute([':u'=>$userId]);
  $planRow = $p->fetch();
  if(!$planRow){
    bl_json([
      'ok'=>true,
      'build'=>BL_FITNESS_PLAN_API_BUILD,
      'name'=>$name,
      'hasPlan'=>false,
      'has_plan'=>false,
    ]);
  }

  $planId = (int)$planRow['id'];
  $planJsonRaw = (string)($planRow['plan_json'] ?? '');
  if(strlen($planJsonRaw) > BL_FITNESS_MAX_PLAN_JSON_BYTES){
    bl_json([
      'ok'=>false,
      'build'=>BL_FITNESS_PLAN_API_BUILD,
      'error'=>'plan_payload_too_large',
    ], 422);
  }

  $planJson = json_decode($planJsonRaw, true);
  if(!is_array($planJson)){
    bl_json([
      'ok'=>false,
      'build'=>BL_FITNESS_PLAN_API_BUILD,
      'error'=>'invalid_plan_json',
    ], 422);
  }

  $declaredSessions = (int)($planJson['sessions'] ?? 18);
  $sessionLimit = max(1, min(BL_FITNESS_MAX_SESSIONS, $declaredSessions > 0 ? $declaredSessions : 18));

  $sessStmt = $db->prepare('SELECT session_index, scheduled_date, status, completed_at, updated_at FROM plan_sessions WHERE plan_id=:p AND session_index BETWEEN 1 AND :max_session ORDER BY session_index ASC LIMIT 120');
  $sessStmt->bindValue(':p', $planId, PDO::PARAM_INT);
  $sessStmt->bindValue(':max_session', $sessionLimit, PDO::PARAM_INT);
  $sessStmt->execute();

  $sessions = [];
  $seen = [];
  foreach(($sessStmt->fetchAll() ?: []) as $row){
    $index = (int)($row['session_index'] ?? 0);
    if($index < 1 || $index > $sessionLimit || isset($seen[$index])) continue;
    $seen[$index] = true;
    $sessions[] = [
      'session_index'=>$index,
      'scheduled_date'=>(string)($row['scheduled_date'] ?? ''),
      'status'=>((string)($row['status'] ?? 'planned')) === 'done' ? 'done' : 'planned',
      'completed_at'=>$row['completed_at'] ?? null,
      'updated_at'=>$row['updated_at'] ?? null,
    ];
  }

  $done = 0;
  $nextIdx = null;
  foreach($sessions as $session){
    if($session['status'] === 'done'){
      $done++;
    }elseif($nextIdx === null){
      $nextIdx = (int)$session['session_index'];
    }
  }
  if($nextIdx === null && count($sessions) > 0) $nextIdx = min($sessionLimit + 1, count($sessions) + 1);

  $startDate = (string)($planJson['startDate'] ?? ($sessions[0]['scheduled_date'] ?? ''));
  $payload = [
    'ok'=>true,
    'build'=>BL_FITNESS_PLAN_API_BUILD,
    'name'=>$name,
    'planId'=>$planId,
    'hasPlan'=>true,
    'has_plan'=>true,
    'createdAt'=>(int)$planRow['created_at'],
    'planJson'=>$planJson,
    'sessions'=>$sessions,
    'progress'=>[
      'done'=>$done,
      'total'=>count($sessions),
      'nextIndex'=>$nextIdx,
      'startDate'=>$startDate,
    ],
  ];

  if($legacyPayload){
    $legacy = $db->prepare('SELECT plan_text FROM plans WHERE id=:p AND user_id=:u LIMIT 1');
    $legacy->execute([':p'=>$planId, ':u'=>$userId]);
    $legacyText = (string)(($legacy->fetch()['plan_text'] ?? ''));
    $payload['planText'] = $legacyText;
    $payload['plan_text'] = $legacyText;
    $payload['plan_json'] = $planJson;
    $payload['created_at'] = (int)$planRow['created_at'];
  }

  bl_json($payload);
}catch(Throwable $e){
  bl_json([
    'ok'=>false,
    'build'=>BL_FITNESS_PLAN_API_BUILD,
    'error'=>'get_failed',
  ], 500);
}
