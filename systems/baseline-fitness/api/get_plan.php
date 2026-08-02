<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

const BL_FITNESS_PLAN_API_BUILD = 'BASELINE_FITNESS_PLAN_PAYLOAD_20260713_2';
const BL_FITNESS_MAX_PLAN_JSON_BYTES = 1048576;
const BL_FITNESS_MAX_SESSIONS = 120;

header('X-Baseline-Fitness-API-Build: ' . BL_FITNESS_PLAN_API_BUILD);

$requestedName = trim((string)($_GET['name'] ?? ''));
$legacyPayload = ((string)($_GET['legacy'] ?? '')) === '1';

function bl_fitness_plan_payload(string $name, array $record, int $revision=0, bool $legacy=false): array {
  $planJson = bl_fitness_plan_json($record);
  $encoded = json_encode($planJson, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  if($encoded === false || strlen($encoded) > BL_FITNESS_MAX_PLAN_JSON_BYTES){
    bl_json(['ok'=>false,'build'=>BL_FITNESS_PLAN_API_BUILD,'error'=>'plan_payload_too_large'], 422);
  }
  $sessions = bl_fitness_public_sessions($record);
  $payload = [
    'ok'=>true,
    'build'=>BL_FITNESS_PLAN_API_BUILD,
    'name'=>$name,
    'planId'=>bl_fitness_plan_id($record),
    'hasPlan'=>true,
    'has_plan'=>true,
    'createdAt'=>bl_fitness_plan_created_timestamp($record),
    'planJson'=>$planJson,
    'sessions'=>$sessions,
    'progress'=>bl_fitness_progress($sessions, $planJson),
  ];
  if($revision > 0) $payload['revision'] = $revision;
  if($legacy){
    $legacyText = (string)($record['legacyPlanText'] ?? '');
    $payload['planText'] = $legacyText;
    $payload['plan_text'] = $legacyText;
    $payload['plan_json'] = $planJson;
    $payload['created_at'] = bl_fitness_plan_created_timestamp($record);
  }
  return $payload;
}

try{
  $mode = bl_resource_authority();

  if($mode === 'saved-data'){
    if($requestedName === ''){
      $user = bl_require_user();
      $userId = (int)($user['id'] ?? 0);
      $name = trim((string)($user['name'] ?? ''));
      if($userId <= 0) bl_json(['ok'=>false,'error'=>'missing_user'], 400);
    }else{
      $user = bl_fitness_account_by_name($requestedName);
      if($user === null) bl_json(['ok'=>false,'error'=>'not_found'], 404);
      $userId = (int)$user['id'];
      $name = (string)$user['name'];
    }
    $resource = bl_fitness_resource_read($userId);
    $index = bl_fitness_latest_plan_index($resource['data']);
    if($index === null){
      bl_json(['ok'=>true,'build'=>BL_FITNESS_PLAN_API_BUILD,'name'=>$name,'hasPlan'=>false,'has_plan'=>false,'revision'=>$resource['revision']]);
    }
    $record = $resource['data']['plans'][$index] ?? null;
    if(!is_array($record)) bl_json(['ok'=>false,'build'=>BL_FITNESS_PLAN_API_BUILD,'error'=>'invalid_plan_json'], 422);
    bl_json(bl_fitness_plan_payload($name, $record, $resource['revision'], $legacyPayload));
  }

  $db = bl_fitness_db();
  if($requestedName === ''){
    $user = bl_require_user();
    $userId = (int)($user['id'] ?? 0);
    $name = trim((string)($user['name'] ?? ''));
    if($userId <= 0) bl_json(['ok'=>false,'error'=>'missing_user'], 400);
  }else{
    $u = $db->prepare('SELECT id, name FROM users WHERE lower(name)=lower(:n) LIMIT 1');
    $u->execute([':n'=>$requestedName]);
    $user = $u->fetch();
    if(!$user) bl_json(['ok'=>false,'error'=>'not_found'], 404);
    $userId = (int)$user['id'];
    $name = (string)$user['name'];
  }

  $p = $db->prepare('SELECT id, plan_json, created_at FROM plans WHERE user_id=:u ORDER BY created_at DESC, id DESC LIMIT 1');
  $p->execute([':u'=>$userId]);
  $planRow = $p->fetch();
  if(!$planRow){
    if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $userId);
    bl_json(['ok'=>true,'build'=>BL_FITNESS_PLAN_API_BUILD,'name'=>$name,'hasPlan'=>false,'has_plan'=>false]);
  }

  $planId = (int)$planRow['id'];
  $planJsonRaw = (string)($planRow['plan_json'] ?? '');
  if(strlen($planJsonRaw) > BL_FITNESS_MAX_PLAN_JSON_BYTES) bl_json(['ok'=>false,'build'=>BL_FITNESS_PLAN_API_BUILD,'error'=>'plan_payload_too_large'], 422);
  $planJson = json_decode($planJsonRaw, true);
  if(!is_array($planJson)) bl_json(['ok'=>false,'build'=>BL_FITNESS_PLAN_API_BUILD,'error'=>'invalid_plan_json'], 422);
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
      'status'=>in_array((string)($row['status'] ?? ''), ['done','rescheduled'], true) ? (string)$row['status'] : 'planned',
      'completed_at'=>$row['completed_at'] ?? null,
      'updated_at'=>$row['updated_at'] ?? null,
    ];
  }
  $progress = bl_fitness_progress($sessions, $planJson);
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
    'progress'=>$progress,
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
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $userId);
  bl_json($payload);
}catch(Throwable $e){
  bl_json(['ok'=>false,'build'=>BL_FITNESS_PLAN_API_BUILD,'error'=>'get_failed'], 500);
}
