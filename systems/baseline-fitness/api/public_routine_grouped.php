<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_public_fitness_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_public_fitness_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_public_fitness_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_public_fitness_text($source['mode'] ?? 'weekly', 24));
  if(!in_array($mode, ['daily','days','weekly','monthly','as-needed'], true)) $mode = 'weekly';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_public_fitness_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 1))),
    'timesPerMonth'=>max(1, min(31, (int)($source['timesPerMonth'] ?? 1))),
  ];
}

function bl_public_fitness_activities($value): array {
  if(!is_array($value)) return [];
  $items = [];
  foreach(array_slice($value, 0, 200) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_public_fitness_text($raw['id'] ?? ('activity-' . ($index + 1)), 100);
    if($id === '') continue;
    $section = strtolower(bl_public_fitness_text($raw['section'] ?? 'other', 20));
    if(!in_array($section, ['cardio','other','sports'], true)) $section = 'other';
    $time = strtolower(bl_public_fitness_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','afternoon','evening','anytime'], true)) $time = 'anytime';
    $items[] = [
      'id'=>$id,
      'activityId'=>bl_public_fitness_text($raw['activityId'] ?? '', 100),
      'name'=>bl_public_fitness_text($raw['name'] ?? 'Fitness Activity', 100),
      'section'=>$section,
      'timeOfDay'=>$time,
      'frequency'=>bl_public_fitness_frequency($raw['frequency'] ?? []),
      'notes'=>bl_public_fitness_text($raw['notes'] ?? '', 1200),
    ];
  }
  return $items;
}

function bl_public_fitness_plan_json($value): array {
  $source = is_array($value) ? $value : [];
  $items = [];
  foreach(array_slice(is_array($source['items'] ?? null) ? $source['items'] : [], 0, 100) as $raw){
    if(!is_array($raw)) continue;
    $items[] = [
      'exercise'=>bl_public_fitness_text($raw['exercise'] ?? $raw['name'] ?? 'Exercise', 120),
      'baseline'=>max(0, min(1000000, (int)($raw['baseline'] ?? 0))),
      'sets'=>max(0, min(20, (int)($raw['sets'] ?? 0))),
      'repIncrease'=>max(0, min(1000, (int)($raw['repIncrease'] ?? 0))),
    ];
  }
  return [
    'name'=>bl_public_fitness_text($source['name'] ?? 'Calisthenics Plan', 100),
    'frequency'=>bl_public_fitness_text($source['frequency'] ?? '', 24),
    'items'=>$items,
  ];
}

function bl_public_fitness_groups($value): array {
  $groups = [];
  $ids = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 50) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_public_fitness_text($raw['id'] ?? ('fitness-group-' . ($index + 1)), 100)) ?: '';
    $title = bl_public_fitness_text($raw['title'] ?? '', 100);
    if($id === '' || $title === '' || isset($ids[$id])) continue;
    $ids[$id] = true;
    $groups[] = ['id'=>$id,'title'=>$title];
  }
  return $groups;
}

try{
  if(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $name = bl_public_fitness_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
  if($name === '') bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);

  $db = bl_fitness_db();
  $statement = $db->prepare('SELECT u.id, u.name, r.visibility, r.routine_json, r.updated_at
    FROM users u
    LEFT JOIN fitness_routine_state r ON r.user_id=u.id
    WHERE lower(u.name)=lower(:name)
    LIMIT 1');
  $statement->execute([':name'=>$name]);
  $row = $statement->fetch();
  if(!$row || $row['routine_json'] === null) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(strtolower((string)($row['visibility'] ?? 'private')) !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);

  $userId = (int)($row['id'] ?? 0);
  $activities = bl_public_fitness_activities(bl_public_fitness_decode((string)($row['routine_json'] ?? '[]'), []));

  $planStatement = $db->prepare('SELECT id, plan_json, created_at FROM plans WHERE user_id=:user_id ORDER BY created_at ASC, id ASC LIMIT 50');
  $planStatement->execute([':user_id'=>$userId]);
  $plans = [];
  foreach(($planStatement->fetchAll() ?: []) as $planRow){
    $plans[] = [
      'planId'=>(int)($planRow['id'] ?? 0),
      'planJson'=>bl_public_fitness_plan_json(bl_public_fitness_decode((string)($planRow['plan_json'] ?? '{}'), [])),
      'createdAt'=>gmdate('c', (int)($planRow['created_at'] ?? time())),
    ];
  }

  $groupStatement = $db->prepare('SELECT groups_json, assignments_json FROM fitness_routine_groups WHERE user_id=:user_id LIMIT 1');
  $groupStatement->execute([':user_id'=>$userId]);
  $groupRow = $groupStatement->fetch() ?: [];
  $groups = bl_public_fitness_groups(bl_public_fitness_decode((string)($groupRow['groups_json'] ?? '[]'), []));
  $validGroups = [];
  foreach($groups as $group) $validGroups[(string)$group['id']] = true;
  $validEntities = [];
  foreach($plans as $plan) $validEntities['plan:' . (int)$plan['planId']] = true;
  foreach($activities as $activity) $validEntities['activity:' . (string)$activity['id']] = true;
  $assignments = [];
  foreach(bl_public_fitness_decode((string)($groupRow['assignments_json'] ?? '{}'), []) as $key=>$groupId){
    $entity = bl_public_fitness_text($key, 180);
    $group = bl_public_fitness_text($groupId, 100);
    if(isset($validEntities[$entity]) && isset($validGroups[$group])) $assignments[$entity] = $group;
  }

  bl_json([
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)($row['name'] ?? $name),
      'activities'=>$activities,
      'plans'=>$plans,
      'groups'=>$groups,
      'assignments'=>$assignments,
      'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
    ],
  ]);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_public_routine_failed'], 500);
}
