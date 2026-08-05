<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_fitness_routine_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
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
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 1))),
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
    $target = max(0.0, min(100000.0, (float)($raw['target'] ?? 0)));
    $items[] = [
      'id'=>$id,
      'activityId'=>$activityId,
      'name'=>bl_fitness_routine_text($raw['name'] ?? 'Fitness Activity', 100),
      'section'=>$section,
      'timeOfDay'=>$time,
      'frequency'=>bl_fitness_routine_frequency($raw['frequency'] ?? []),
      'targetMetrics'=>bl_fitness_metric_values($raw['targetMetrics'] ?? []),
      'target'=>$target,
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
    $source = is_array($value[$date] ?? null) ? $value[$date] : [];
    $entries = [];
    foreach(array_slice($source, 0, 250, true) as $activityId=>$raw){
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

function bl_fitness_routine_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_fitness_routine_row(PDO $db, int $userId): ?array {
  $statement = $db->prepare('SELECT routine_json, logs_json, updated_at FROM fitness_routine_state WHERE user_id=:user_id LIMIT 1');
  $statement->execute([':user_id'=>$userId]);
  $row = $statement->fetch();
  return $row ?: null;
}

function bl_fitness_routine_payload(?array $row): array {
  if(!$row) return ['ok'=>true,'hasRoutine'=>false,'activities'=>[],'logs'=>[],'updatedAt'=>null];
  return [
    'ok'=>true,
    'hasRoutine'=>true,
    'activities'=>bl_fitness_routine_activities(bl_fitness_routine_decode((string)($row['routine_json'] ?? '[]'), [])),
    'logs'=>bl_fitness_routine_logs(bl_fitness_routine_decode((string)($row['logs_json'] ?? '{}'), [])),
    'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
  ];
}

try{
  $db = bl_fitness_db();
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
  if($method === 'GET') bl_json(bl_fitness_routine_payload(bl_fitness_routine_row($db, $userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $activities = bl_fitness_routine_activities($input['activities'] ?? []);
  $logs = bl_fitness_routine_logs($input['logs'] ?? []);
  $updated = bl_now();
  $statement = $db->prepare('INSERT INTO fitness_routine_state(user_id, routine_json, logs_json, updated_at)
    VALUES(:user_id,:routine_json,:logs_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      routine_json=excluded.routine_json,
      logs_json=excluded.logs_json,
      updated_at=excluded.updated_at');
  $statement->execute([
    ':user_id'=>$userId,
    ':routine_json'=>json_encode($activities, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':logs_json'=>json_encode($logs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':updated_at'=>$updated,
  ]);
  bl_json(bl_fitness_routine_payload(bl_fitness_routine_row($db, $userId)));
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_routine_failed'], 500);
}
