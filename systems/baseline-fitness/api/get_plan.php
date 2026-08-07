<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

function bl_fitness_client_sessions(array $sessions, array $planJson): array {
  if(($planJson['scheduleMode'] ?? 'weekly-count') === 'specific-days') return $sessions;
  foreach($sessions as &$session){
    if(!is_array($session)) continue;
    $session['scheduled_date'] = '';
    if(array_key_exists('scheduledDate', $session)) $session['scheduledDate'] = '';
  }
  unset($session);
  return $sessions;
}

try{
  $mode = bl_resource_authority();
  $requestedName = trim((string)($_GET['name'] ?? ''));
  $requestedPlanId = max(0, (int)($_GET['planId'] ?? $_GET['plan_id'] ?? 0));
  if($requestedName !== ''){
    if(strlen($requestedName) > 80) bl_json(['ok'=>false,'error'=>'not_found'],404);
    if($mode === 'saved-data'){
      $account = bl_fitness_account_by_name($requestedName);
      if(!$account) bl_json(['ok'=>false,'error'=>'not_found'],404);
      $resource = bl_fitness_resource_read((int)$account['id']);
      $index = bl_fitness_latest_plan_index($resource['data']);
      if($index === null) bl_json(['ok'=>false,'error'=>'not_found'],404);
      $record = $resource['data']['plans'][$index];
      $planJson = bl_fitness_plan_json($record);
      $sessions = bl_fitness_client_sessions(bl_fitness_public_sessions($record), $planJson);
      bl_json([
        'ok'=>true,
        'hasPlan'=>true,
        'planId'=>bl_fitness_plan_id($record),
        'name'=>(string)$account['name'],
        'planText'=>(string)($record['legacyPlanText'] ?? ''),
        'planJson'=>$planJson,
        'sessions'=>$sessions,
        'progress'=>bl_fitness_progress($sessions, $planJson),
      ]);
    }
    $db=bl_fitness_db();
    $stmt=$db->prepare('SELECT id,name FROM users WHERE lower(name)=lower(:n) LIMIT 1');
    $stmt->execute([':n'=>$requestedName]);
    $u=$stmt->fetch();
    if(!$u) bl_json(['ok'=>false,'error'=>'not_found'],404);
    $p=$db->prepare('SELECT id,plan_text,plan_json FROM plans WHERE user_id=:u ORDER BY created_at DESC, id DESC LIMIT 1');
    $p->execute([':u'=>(int)$u['id']]);
    $plan=$p->fetch();
    if(!$plan) bl_json(['ok'=>false,'error'=>'not_found'],404);
    $planJson=json_decode((string)$plan['plan_json'],true);
    if(!is_array($planJson)) $planJson=[];
    $s=$db->prepare('SELECT session_index,scheduled_date,status,completed_at,updated_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
    $s->execute([':p'=>(int)$plan['id']]);
    $sessions=bl_fitness_client_sessions($s->fetchAll() ?: [], $planJson);
    bl_json(['ok'=>true,'hasPlan'=>true,'planId'=>(int)$plan['id'],'name'=>(string)$u['name'],'planText'=>(string)$plan['plan_text'],'planJson'=>$planJson,'sessions'=>$sessions,'progress'=>bl_fitness_progress($sessions,$planJson)]);
  }

  $uid=bl_require_user_id();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $index = $requestedPlanId > 0
      ? bl_fitness_find_plan_index($resource['data'], $requestedPlanId)
      : bl_fitness_latest_plan_index($resource['data']);
    if($index === null) bl_json(['ok'=>true,'hasPlan'=>false,'has_plan'=>false,'revision'=>$resource['revision']]);
    $record = $resource['data']['plans'][$index];
    $planJson = bl_fitness_plan_json($record);
    $sessions = bl_fitness_client_sessions(bl_fitness_public_sessions($record), $planJson);
    bl_json([
      'ok'=>true,
      'hasPlan'=>true,
      'planId'=>bl_fitness_plan_id($record),
      'planText'=>(string)($record['legacyPlanText'] ?? ''),
      'planJson'=>$planJson,
      'sessions'=>$sessions,
      'progress'=>bl_fitness_progress($sessions, $planJson),
      'revision'=>$resource['revision'],
    ]);
  }

  $db=bl_fitness_db();
  if($requestedPlanId > 0){
    $p=$db->prepare('SELECT id,plan_text,plan_json FROM plans WHERE id=:p AND user_id=:u LIMIT 1');
    $p->execute([':p'=>$requestedPlanId,':u'=>$uid]);
  }else{
    $p=$db->prepare('SELECT id,plan_text,plan_json FROM plans WHERE user_id=:u ORDER BY created_at DESC, id DESC LIMIT 1');
    $p->execute([':u'=>$uid]);
  }
  $plan=$p->fetch();
  if(!$plan) bl_json(['ok'=>true,'hasPlan'=>false,'has_plan'=>false]);
  $planJson=json_decode((string)$plan['plan_json'],true);
  if(!is_array($planJson)) $planJson=[];
  $s=$db->prepare('SELECT session_index,scheduled_date,status,completed_at,updated_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
  $s->execute([':p'=>(int)$plan['id']]);
  $sessions=bl_fitness_client_sessions($s->fetchAll() ?: [], $planJson);
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db,$uid);
  bl_json(['ok'=>true,'hasPlan'=>true,'planId'=>(int)$plan['id'],'planText'=>(string)$plan['plan_text'],'planJson'=>$planJson,'sessions'=>$sessions,'progress'=>bl_fitness_progress($sessions,$planJson)]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'get_failed'],500);
}
