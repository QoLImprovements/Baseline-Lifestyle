<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_public_fitness_v2_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_public_fitness_v2_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_public_fitness_v2_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_public_fitness_v2_text($source['mode'] ?? 'weekly', 24));
  if(!in_array($mode, ['daily','days','weekly','monthly','as-needed'], true)) $mode = 'weekly';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_public_fitness_v2_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 1))),
    'timesPerMonth'=>max(1, min(31, (int)($source['timesPerMonth'] ?? 1))),
  ];
}

function bl_public_fitness_v2_activities($value): array {
  if(!is_array($value)) return [];
  $items = [];
  foreach(array_slice($value, 0, 200) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_public_fitness_v2_text($raw['id'] ?? ('activity-' . ($index + 1)), 100);
    if($id === '') continue;
    $items[] = [
      'id'=>$id,
      'activityId'=>bl_public_fitness_v2_text($raw['activityId'] ?? '', 100),
      'name'=>bl_public_fitness_v2_text($raw['name'] ?? 'Fitness Activity', 100),
      'section'=>bl_public_fitness_v2_text($raw['section'] ?? 'other', 20),
      'timeOfDay'=>bl_public_fitness_v2_text($raw['timeOfDay'] ?? 'anytime', 20),
      'frequency'=>bl_public_fitness_v2_frequency($raw['frequency'] ?? []),
      'notes'=>bl_public_fitness_v2_text($raw['notes'] ?? '', 1200),
    ];
  }
  return $items;
}

function bl_public_fitness_v2_logs($value): array {
  if(!is_array($value)) return [];
  $dates = array_keys($value);
  sort($dates, SORT_STRING);
  $dates = array_slice($dates, -1095);
  $logs = [];
  foreach($dates as $date){
    if(preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$date) !== 1) continue;
    $entries = [];
    foreach((is_array($value[$date] ?? null) ? $value[$date] : []) as $activityId=>$raw){
      if(!is_array($raw)) continue;
      $id = bl_public_fitness_v2_text($activityId, 100);
      if($id === '') continue;
      $completedAt = bl_public_fitness_v2_text($raw['completedAt'] ?? '', 40);
      if($completedAt !== '' && strtotime($completedAt) === false) $completedAt = '';
      $entries[$id] = [
        'completed'=>!empty($raw['completed']),
        'completedAt'=>$completedAt,
      ];
    }
    if($entries !== []) $logs[(string)$date] = $entries;
  }
  return $logs;
}

function bl_public_fitness_v2_plan_json($value): array {
  $source = is_array($value) ? $value : [];
  $items = [];
  foreach(array_slice(is_array($source['items'] ?? null) ? $source['items'] : [], 0, 120) as $raw){
    if(!is_array($raw)) continue;
    $items[] = [
      'exercise'=>bl_public_fitness_v2_text($raw['exercise'] ?? $raw['name'] ?? 'Exercise', 120),
      'baseline'=>max(0, min(1000000, (int)($raw['baseline'] ?? 0))),
      'sets'=>max(0, min(20, (int)($raw['sets'] ?? 0))),
      'repIncrease'=>max(0, min(1000, (int)($raw['repIncrease'] ?? 0))),
      'progressionMode'=>bl_public_fitness_v2_text($raw['progressionMode'] ?? '', 40),
    ];
  }
  $scheduleMode = ($source['scheduleMode'] ?? '') === 'specific-days' ? 'specific-days' : 'weekly-count';
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_public_fitness_v2_text($day, 12);
    if(in_array($day, ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], true)) $days[] = $day;
  }
  $frequency = bl_public_fitness_v2_text($source['frequency'] ?? '1x', 24);
  $minimum = max(1, min(7, (int)preg_replace('/\D+/', '', $frequency)));
  $rangeMax = max(0, min(7, (int)($source['frequencyRangeMax'] ?? 0)));
  if($rangeMax <= $minimum) $rangeMax = 0;
  return [
    'name'=>bl_public_fitness_v2_text($source['name'] ?? 'Calisthenics Plan', 100),
    'startDate'=>bl_public_fitness_v2_text($source['startDate'] ?? '', 12),
    'frequency'=>$frequency,
    'frequencyMin'=>$minimum,
    'frequencyRangeMax'=>$rangeMax,
    'scheduleMode'=>$scheduleMode,
    'days'=>$scheduleMode === 'specific-days' ? array_values(array_unique($days)) : [],
    'sessions'=>max(1, min(120, (int)($source['sessions'] ?? 18))),
    'items'=>$items,
  ];
}

function bl_public_fitness_v2_groups($value): array {
  $groups = [];
  $ids = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 50) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_public_fitness_v2_text($raw['id'] ?? ('fitness-group-' . ($index + 1)), 100)) ?: '';
    $title = bl_public_fitness_v2_text($raw['title'] ?? '', 100);
    if($id === '' || $title === '' || isset($ids[$id])) continue;
    $ids[$id] = true;
    $groups[] = ['id'=>$id,'title'=>$title];
  }
  return $groups;
}

try{
  if(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $name = bl_public_fitness_v2_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
  if($name === '') bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);

  $db = bl_fitness_db();
  $statement = $db->prepare('SELECT u.id, u.name, r.visibility, r.routine_json, r.logs_json, r.updated_at
    FROM users u
    LEFT JOIN fitness_routine_state r ON r.user_id=u.id
    WHERE lower(u.name)=lower(:name)
    LIMIT 1');
  $statement->execute([':name'=>$name]);
  $row = $statement->fetch();
  if(!$row || $row['routine_json'] === null) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(strtolower((string)($row['visibility'] ?? 'private')) !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);
  $userId = (int)($row['id'] ?? 0);

  $activities = bl_public_fitness_v2_activities(bl_public_fitness_v2_decode((string)($row['routine_json'] ?? '[]'), []));
  $logs = bl_public_fitness_v2_logs(bl_public_fitness_v2_decode((string)($row['logs_json'] ?? '{}'), []));

  $planStatement = $db->prepare('SELECT id, plan_json, created_at FROM plans WHERE user_id=:user_id ORDER BY created_at ASC, id ASC LIMIT 50');
  $planStatement->execute([':user_id'=>$userId]);
  $sessionStatement = $db->prepare('SELECT session_index, scheduled_date, status, completed_at FROM plan_sessions WHERE plan_id=:plan_id AND user_id=:user_id ORDER BY session_index ASC');
  $plans = [];
  foreach(($planStatement->fetchAll() ?: []) as $planRow){
    $planId = (int)($planRow['id'] ?? 0);
    $planJson = bl_public_fitness_v2_plan_json(bl_public_fitness_v2_decode((string)($planRow['plan_json'] ?? '{}'), []));
    $sessionStatement->execute([':plan_id'=>$planId, ':user_id'=>$userId]);
    $sessions = [];
    foreach(($sessionStatement->fetchAll() ?: []) as $session){
      $status = (string)($session['status'] ?? 'planned');
      if(!in_array($status, ['planned','rescheduled','done'], true)) $status = 'planned';
      $sessions[] = [
        'sessionIndex'=>(int)($session['session_index'] ?? 0),
        'scheduledDate'=>$planJson['scheduleMode'] === 'specific-days' ? (string)($session['scheduled_date'] ?? '') : '',
        'status'=>$status,
        'completedAt'=>$status === 'done' && is_numeric($session['completed_at'] ?? null) ? gmdate('c', (int)$session['completed_at']) : null,
      ];
    }
    $plans[] = [
      'planId'=>$planId,
      'planJson'=>$planJson,
      'sessions'=>$sessions,
      'createdAt'=>gmdate('c', (int)($planRow['created_at'] ?? time())),
    ];
  }

  $groupStatement = $db->prepare('SELECT groups_json, assignments_json FROM fitness_routine_groups WHERE user_id=:user_id LIMIT 1');
  $groupStatement->execute([':user_id'=>$userId]);
  $groupRow = $groupStatement->fetch() ?: [];
  $groups = bl_public_fitness_v2_groups(bl_public_fitness_v2_decode((string)($groupRow['groups_json'] ?? '[]'), []));
  $validGroups = [];
  foreach($groups as $group) $validGroups[(string)$group['id']] = true;
  $validEntities = [];
  foreach($plans as $plan) $validEntities['plan:' . (int)$plan['planId']] = true;
  foreach($activities as $activity) $validEntities['activity:' . (string)$activity['id']] = true;
  $assignments = [];
  foreach(bl_public_fitness_v2_decode((string)($groupRow['assignments_json'] ?? '{}'), []) as $key=>$groupId){
    $entity = bl_public_fitness_v2_text($key, 180);
    $group = bl_public_fitness_v2_text($groupId, 100);
    if(isset($validEntities[$entity]) && isset($validGroups[$group])) $assignments[$entity] = $group;
  }

  bl_json([
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)($row['name'] ?? $name),
      'activities'=>$activities,
      'logs'=>$logs,
      'plans'=>$plans,
      'groups'=>$groups,
      'assignments'=>$assignments,
      'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
    ],
  ]);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_public_routine_failed'], 500);
}
