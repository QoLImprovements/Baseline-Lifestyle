<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

const BL_FITNESS_MAX_LISTED_PLANS = 30;

function bl_fitness_plan_summary(array $record, int $fallbackIndex=0): array {
  $planJson = bl_fitness_plan_json($record);
  $sessions = bl_fitness_public_sessions($record);
  $planId = bl_fitness_plan_id($record);
  $name = trim((string)($planJson['name'] ?? ''));
  if($name === '') $name = 'Calisthenics Plan ' . max(1, $fallbackIndex + 1);
  return [
    'planId'=>$planId,
    'name'=>$name,
    'createdAt'=>bl_fitness_plan_created_timestamp($record),
    'planJson'=>$planJson,
    'sessions'=>$sessions,
    'progress'=>bl_fitness_progress($sessions, $planJson),
  ];
}

try{
  $uid = bl_require_user_id();
  $mode = bl_resource_authority();

  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $records = array_values(array_filter($resource['data']['plans'] ?? [], 'is_array'));
    $plans = [];
    foreach($records as $index=>$record) $plans[] = bl_fitness_plan_summary($record, $index);
    usort($plans, static function(array $left, array $right): int {
      $byName = strnatcasecmp((string)($left['name'] ?? ''), (string)($right['name'] ?? ''));
      return $byName !== 0 ? $byName : ((int)($left['planId'] ?? 0) <=> (int)($right['planId'] ?? 0));
    });
    $plans = array_slice($plans, 0, BL_FITNESS_MAX_LISTED_PLANS);
    bl_json(['ok'=>true,'plans'=>$plans,'revision'=>$resource['revision']]);
  }

  $db = bl_fitness_db();
  $statement = $db->prepare('SELECT id, plan_json, created_at FROM plans WHERE user_id=:u ORDER BY created_at DESC, id DESC LIMIT 30');
  $statement->execute([':u'=>$uid]);
  $sessionStatement = $db->prepare('SELECT session_index, scheduled_date, status, completed_at, updated_at FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC LIMIT 120');
  $plans = [];
  foreach(($statement->fetchAll() ?: []) as $index=>$row){
    $planJson = json_decode((string)($row['plan_json'] ?? '{}'), true);
    if(!is_array($planJson)) $planJson = [];
    $sessionStatement->execute([':p'=>(int)$row['id']]);
    $sessions = [];
    foreach(($sessionStatement->fetchAll() ?: []) as $session){
      $sessions[] = [
        'session_index'=>(int)($session['session_index'] ?? 0),
        'scheduled_date'=>(string)($session['scheduled_date'] ?? ''),
        'status'=>in_array((string)($session['status'] ?? ''), ['done','rescheduled'], true) ? (string)$session['status'] : 'planned',
        'completed_at'=>$session['completed_at'] ?? null,
        'updated_at'=>$session['updated_at'] ?? null,
      ];
    }
    $name = trim((string)($planJson['name'] ?? ''));
    if($name === '') $name = 'Calisthenics Plan ' . ($index + 1);
    $plans[] = [
      'planId'=>(int)$row['id'],
      'name'=>$name,
      'createdAt'=>(int)$row['created_at'],
      'planJson'=>$planJson,
      'sessions'=>$sessions,
      'progress'=>bl_fitness_progress($sessions, $planJson),
    ];
  }
  usort($plans, static function(array $left, array $right): int {
    $byName = strnatcasecmp((string)($left['name'] ?? ''), (string)($right['name'] ?? ''));
    return $byName !== 0 ? $byName : ((int)($left['planId'] ?? 0) <=> (int)($right['planId'] ?? 0));
  });
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'plans'=>$plans]);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'list_plans_failed'], 500);
}
