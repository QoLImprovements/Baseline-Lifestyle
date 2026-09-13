<?php
declare(strict_types=1);
require_once __DIR__ . '/fitness_resource.php';

function bl_fitness_routine_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_fitness_routine_visibility($value): string {
  return strtolower(bl_fitness_routine_text($value, 12)) === 'public' ? 'public' : 'private';
}

function bl_fitness_routine_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_fitness_routine_text($source['mode'] ?? 'weekly', 24));
  if(!in_array($mode, ['daily','days','weekly','monthly','as-needed'], true)) $mode = 'weekly';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_fitness_routine_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  $timesPerWeekMin = max(1, min(14, (int)($source['timesPerWeekMin'] ?? ($source['timesPerWeek'] ?? 1))));
  $timesPerWeekMax = max($timesPerWeekMin, min(14, (int)($source['timesPerWeekMax'] ?? ($source['timesPerWeek'] ?? $timesPerWeekMin))));
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>$timesPerWeekMin,
    'timesPerWeekMin'=>$timesPerWeekMin,
    'timesPerWeekMax'=>$timesPerWeekMax,
    'timesPerMonth'=>max(1, min(31, (int)($source['timesPerMonth'] ?? 1))),
  ];
}

function bl_fitness_metric_values($value): array {
  if(!is_array($value)) return [];
  $output = [];
  foreach(array_slice($value, 0, 30, true) as $key=>$raw){
    $name = bl_fitness_routine_text($key, 60);
    if($name === '' || preg_match('/^[A-Za-z][A-Za-z0-9_-]{0,59}$/', $name) !== 1) continue;
    if(is_int($raw) || is_float($raw)){
      $output[$name] = max(0.0, min(1000000.0, (float)$raw));
      continue;
    }
    if(is_bool($raw)){
      $output[$name] = $raw;
      continue;
    }
    if(is_string($raw)){
      $text = bl_fitness_routine_text($raw, 120);
      if($text !== '') $output[$name] = $text;
    }
  }
  return $output;
}

function bl_fitness_routine_activities($value): array {
  if(!is_array($value)) return [];
  $items = [];
  $seen = [];
  foreach(array_slice($value, 0, 200) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_fitness_routine_text($raw['id'] ?? ('activity-' . ($index + 1)), 80);
    if($id === '') $id = 'activity-' . ($index + 1);
    if(isset($seen[$id])) $id .= '-' . ($index + 1);
    $seen[$id] = true;
    $activityId = strtolower(bl_fitness_routine_text($raw['activityId'] ?? '', 100));
    if($activityId === '' || preg_match('/^[a-z0-9][a-z0-9-]{0,99}$/', $activityId) !== 1) $activityId = 'custom-activity';
    $section = strtolower(bl_fitness_routine_text($raw['section'] ?? 'other', 20));
    if(!in_array($section, ['cardio','other','sports'], true)) $section = 'other';
    $time = strtolower(bl_fitness_routine_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','afternoon','evening','anytime'], true)) $time = 'anytime';
    $items[] = [
      'id'=>$id,
      'activityId'=>$activityId,
      'name'=>bl_fitness_routine_text($raw['name'] ?? 'Fitness Activity', 100),
      'section'=>$section,
      'timeOfDay'=>$time,
      'frequency'=>bl_fitness_routine_frequency($raw['frequency'] ?? []),
      'targetMetrics'=>bl_fitness_metric_values($raw['targetMetrics'] ?? []),
      'target'=>max(0.0, min(100000.0, (float)($raw['target'] ?? 0))),
      'measure'=>bl_fitness_routine_text($raw['measure'] ?? 'minutes', 24),
      'notes'=>bl_fitness_routine_text($raw['notes'] ?? '', 1200),
    ];
  }
  return $items;
}

function bl_fitness_routine_logs($value): array {
  if(!is_array($value)) return [];
  $dates = array_keys($value);
  sort($dates, SORT_STRING);
  $dates = array_slice($dates, -1095);
  $logs = [];
  foreach($dates as $date){
    if(preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$date) !== 1) continue;
    $entries = [];
    foreach(array_slice(is_array($value[$date] ?? null) ? $value[$date] : [], 0, 250, true) as $activityId=>$raw){
      if(!is_array($raw)) continue;
      $key = bl_fitness_routine_text($activityId, 100);
      if($key === '') continue;
      $completedAt = bl_fitness_routine_text($raw['completedAt'] ?? '', 40);
      if($completedAt !== '' && strtotime($completedAt) === false) $completedAt = '';
      $entries[$key] = [
        'completed'=>!empty($raw['completed']),
        'note'=>bl_fitness_routine_text($raw['note'] ?? '', 800),
        'metrics'=>bl_fitness_metric_values($raw['metrics'] ?? []),
        'actual'=>max(0.0, min(100000.0, (float)($raw['actual'] ?? 0))),
        'completedAt'=>$completedAt,
      ];
    }
    $logs[(string)$date] = $entries;
  }
  return $logs;
}

function bl_fitness_routine_resource_path(int $userId): string {
  return bl_saved_join(bl_saved_root(), 'Users', bl_saved_user_folder($userId), 'fitness-routine.json');
}

function bl_fitness_routine_default(): array {
  return [
    'visibility'=>'private',
    'activities'=>[],
    'logs'=>[],
    'groups'=>[],
    'assignments'=>[],
  ];
}

function bl_fitness_routine_resource(int $userId): array {
  $resource = bl_resource_file_read(bl_fitness_routine_resource_path($userId), bl_fitness_routine_default());
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
  $resource['data'] = array_merge(bl_fitness_routine_default(), $data);
  return $resource;
}

function bl_fitness_routine_payload(array $resource): array {
  $data = $resource['data'] ?? [];
  $activities = bl_fitness_routine_activities($data['activities'] ?? []);
  $logs = bl_fitness_routine_logs($data['logs'] ?? []);
  return [
    'ok'=>true,
    'hasRoutine'=>$activities !== [] || $logs !== [],
    'visibility'=>bl_fitness_routine_visibility($data['visibility'] ?? 'private'),
    'activities'=>$activities,
    'logs'=>$logs,
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

function bl_fitness_public_plan_json($value): array {
  $source = is_array($value) ? $value : [];
  $items = [];
  foreach(array_slice(is_array($source['items'] ?? null) ? $source['items'] : [], 0, 100) as $raw){
    if(!is_array($raw)) continue;
    $items[] = [
      'exercise'=>bl_fitness_routine_text($raw['exercise'] ?? $raw['name'] ?? 'Exercise', 120),
      'baseline'=>max(0, min(1000000, (int)($raw['baseline'] ?? 0))),
      'sets'=>max(0, min(20, (int)($raw['sets'] ?? 0))),
      'repIncrease'=>max(0, min(1000, (int)($raw['repIncrease'] ?? 0))),
    ];
  }
  return [
    'name'=>bl_fitness_routine_text($source['name'] ?? 'Calisthenics Plan', 100),
    'frequency'=>bl_fitness_routine_text($source['frequency'] ?? '', 24),
    'items'=>$items,
  ];
}

function bl_fitness_public_plans_from_resource(int $userId): array {
  $fitness = bl_fitness_resource_read($userId);
  $plans = [];
  foreach(array_slice(is_array($fitness['data']['plans'] ?? null) ? $fitness['data']['plans'] : [], 0, 50) as $record){
    if(!is_array($record)) continue;
    $planId = bl_fitness_plan_id($record);
    if($planId <= 0) continue;
    $plans[] = [
      'planId'=>$planId,
      'planJson'=>bl_fitness_public_plan_json(bl_fitness_plan_json($record)),
      'createdAt'=>(string)($record['createdAt'] ?? ''),
    ];
  }
  return $plans;
}

function bl_fitness_public_profiles_from_resources(): array {
  $profiles = [];
  foreach(bl_fitness_profile_names_from_files() as $name){
    $account = bl_fitness_account_by_name($name);
    if(!$account) continue;
    $userId = (int)$account['id'];
    $routine = bl_fitness_routine_resource($userId);
    $data = $routine['data'] ?? [];
    if(bl_fitness_routine_visibility($data['visibility'] ?? 'private') !== 'public') continue;
    $activities = bl_fitness_routine_activities($data['activities'] ?? []);
    $plans = bl_fitness_public_plans_from_resource($userId);
    if($activities !== [] || $plans !== []) $profiles[] = (string)$account['name'];
  }
  usort($profiles, static fn(string $left,string $right): int => strcasecmp($left,$right) ?: strcmp($left,$right));
  return ['ok'=>true,'profiles'=>array_values(array_unique($profiles))];
}

function bl_fitness_public_payload_from_resources(string $name): array {
  if($name === '' || bl_str_len($name) > BL_MAX_NAME_LEN) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $account = bl_fitness_account_by_name($name);
  if(!$account) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $userId = (int)$account['id'];
  $resource = bl_fitness_routine_resource($userId);
  $data = $resource['data'] ?? [];
  if(bl_fitness_routine_visibility($data['visibility'] ?? 'private') !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);
  $activities = bl_fitness_routine_activities($data['activities'] ?? []);
  if($activities === [] && bl_fitness_public_plans_from_resource($userId) === []) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  return [
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)$account['name'],
      'activities'=>$activities,
      'plans'=>bl_fitness_public_plans_from_resource($userId),
      'updatedAt'=>$resource['updatedAt'] ?? null,
    ],
  ];
}

try{
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET'){
    $requestedList = strtolower(bl_fitness_routine_text($_GET['list'] ?? '', 20));
    if($requestedList === 'public') bl_json(bl_fitness_public_profiles_from_resources());
    $requestedName = bl_fitness_routine_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
    if($requestedName !== '') bl_json(bl_fitness_public_payload_from_resources($requestedName));
    $user = bl_require_user();
    bl_json(bl_fitness_routine_payload(bl_fitness_routine_resource((int)$user['id'])));
  }

  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $user = bl_require_user();
  $userId = (int)$user['id'];
  $input = bl_input_json();
  $expectedRevision = bl_resource_required_revision_from_input($input);
  $path = bl_fitness_routine_resource_path($userId);
  $written = bl_resource_file_mutate(
    $path,
    bl_fitness_routine_default(),
    static function(array $current) use ($input): array {
      $current = array_merge(bl_fitness_routine_default(), $current);
      if(array_key_exists('visibility', $input)) $current['visibility'] = bl_fitness_routine_visibility($input['visibility']);
      $current['activities'] = bl_fitness_routine_activities($input['activities'] ?? []);
      $current['logs'] = bl_fitness_routine_logs($input['logs'] ?? []);
      return $current;
    },
    $expectedRevision
  );
  bl_json(bl_fitness_routine_payload($written ?? bl_fitness_routine_resource($userId)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_routine_failed'], 500);
}
