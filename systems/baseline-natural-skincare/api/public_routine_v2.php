<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_public_skin_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_public_skin_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_public_skin_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_public_skin_text($source['mode'] ?? 'daily', 24));
  if(!in_array($mode, ['daily','days','weekly','as-needed'], true)) $mode = 'daily';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_public_skin_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 3))),
  ];
}

function bl_public_skin_routine($value): array {
  if(!is_array($value)) return [];
  $output = [];
  foreach(array_slice($value, 0, 120) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_public_skin_text($raw['id'] ?? ('routine-' . ($index + 1)), 80);
    if($id === '') continue;
    $time = strtolower(bl_public_skin_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $output[] = [
      'id'=>$id,
      'actionId'=>bl_public_skin_text($raw['actionId'] ?? 'custom', 80),
      'title'=>bl_public_skin_text($raw['title'] ?? 'Self-Care Action', 100),
      'benefit'=>bl_public_skin_text($raw['benefit'] ?? '', 5000),
      'benefitMode'=>bl_public_skin_text($raw['benefitMode'] ?? 'comprehensive', 20),
      'timeOfDay'=>$time,
      'frequency'=>bl_public_skin_frequency($raw['frequency'] ?? []),
      'notes'=>bl_public_skin_text($raw['notes'] ?? '', 1200),
      'shavingMethod'=>bl_public_skin_text($raw['shavingMethod'] ?? '', 32),
      'productSelection'=>bl_public_skin_text($raw['productSelection'] ?? '', 180),
      'productName'=>bl_public_skin_text($raw['productName'] ?? '', 180),
      'customProductName'=>bl_public_skin_text($raw['customProductName'] ?? '', 180),
      'useGroupFrequency'=>!empty($raw['useGroupFrequency']),
      'useGroupTime'=>!empty($raw['useGroupTime']),
    ];
  }
  return $output;
}

function bl_public_skin_logs($value): array {
  if(!is_array($value)) return [];
  $dates = array_keys($value);
  sort($dates, SORT_STRING);
  $dates = array_slice($dates, -366);
  $logs = [];
  foreach($dates as $date){
    if(preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$date) !== 1) continue;
    $entries = [];
    foreach((is_array($value[$date] ?? null) ? $value[$date] : []) as $itemId=>$raw){
      if(!is_array($raw)) continue;
      $id = bl_public_skin_text($itemId, 80);
      if($id === '') continue;
      $completedAt = bl_public_skin_text($raw['completedAt'] ?? '', 40);
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

function bl_public_skin_groups($value): array {
  $output = [];
  $ids = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 30) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_public_skin_text($raw['id'] ?? ('routine-group-' . ($index + 1)), 80)) ?: '';
    $title = bl_public_skin_text($raw['title'] ?? '', 80);
    if($id === '' || $title === '' || isset($ids[$id])) continue;
    $ids[$id] = true;
    $output[] = [
      'id'=>$id,
      'title'=>$title,
      'applyTime'=>!empty($raw['applyTime']),
      'timeOfDay'=>bl_public_skin_text($raw['timeOfDay'] ?? 'anytime', 20),
      'applyFrequency'=>!empty($raw['applyFrequency']),
      'frequency'=>bl_public_skin_frequency($raw['frequency'] ?? []),
    ];
  }
  return $output;
}

try{
  if(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $name = bl_public_skin_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
  if($name === '') bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);

  $db = bl_skincare_db();
  $statement = $db->prepare('SELECT u.id, u.name, r.visibility, r.routine_json, r.logs_json, r.updated_at
    FROM users u
    LEFT JOIN skincare_routines r ON r.user_id=u.id
    WHERE lower(u.name)=lower(:name)
    LIMIT 1');
  $statement->execute([':name'=>$name]);
  $row = $statement->fetch();
  if(!$row || $row['routine_json'] === null) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(strtolower((string)($row['visibility'] ?? 'private')) !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);

  $userId = (int)($row['id'] ?? 0);
  $groupStatement = $db->prepare('SELECT groups_json, assignments_json FROM skincare_routine_groups WHERE user_id=:user_id LIMIT 1');
  $groupStatement->execute([':user_id'=>$userId]);
  $groupRow = $groupStatement->fetch() ?: [];
  $groups = bl_public_skin_groups(bl_public_skin_decode((string)($groupRow['groups_json'] ?? '[]'), []));
  $validGroups = [];
  foreach($groups as $group) $validGroups[(string)$group['id']] = true;
  $assignments = [];
  foreach(bl_public_skin_decode((string)($groupRow['assignments_json'] ?? '{}'), []) as $itemId=>$groupId){
    $item = bl_public_skin_text($itemId, 80);
    $group = bl_public_skin_text($groupId, 80);
    if($item !== '' && isset($validGroups[$group])) $assignments[$item] = $group;
  }

  bl_json([
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)($row['name'] ?? $name),
      'routine'=>bl_public_skin_routine(bl_public_skin_decode((string)($row['routine_json'] ?? '[]'), [])),
      'logs'=>bl_public_skin_logs(bl_public_skin_decode((string)($row['logs_json'] ?? '{}'), [])),
      'groups'=>$groups,
      'assignments'=>$assignments,
      'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
    ],
  ]);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_public_routine_failed'], 500);
}
