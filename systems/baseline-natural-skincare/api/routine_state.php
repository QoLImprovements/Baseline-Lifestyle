<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_skincare_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_skincare_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_skincare_text($source['mode'] ?? 'daily', 24));
  if(!in_array($mode, ['daily','days','weekly','as-needed'], true)) $mode = 'daily';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_skincare_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  $times = max(1, min(14, (int)($source['timesPerWeek'] ?? 3)));
  return ['mode'=>$mode,'days'=>$days,'timesPerWeek'=>$times];
}

function bl_skincare_routine($value): array {
  if(!is_array($value)) return [];
  $items = [];
  $seen = [];
  $shavingMethods = [
    'wet-cartridge','wet-safety','wet-straight','electric-foil','electric-rotary',
    'electric-wet-dry','trimmer','clipper','body-razor','dermaplaning'
  ];
  foreach(array_slice($value, 0, 120) as $offset=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_skincare_text($raw['id'] ?? ('routine-' . ($offset + 1)), 80);
    if($id === '') $id = 'routine-' . ($offset + 1);
    if(isset($seen[$id])) $id .= '-' . ($offset + 1);
    $seen[$id] = true;
    $actionId = bl_skincare_text($raw['actionId'] ?? 'custom', 80);
    if($actionId === '' || preg_match('/^[a-z0-9][a-z0-9-]{0,79}$/', $actionId) !== 1) $actionId = 'custom';
    $title = bl_skincare_text($raw['title'] ?? 'Self-Care Action', 100);
    if($title === '') $title = 'Self-Care Action';
    $time = strtolower(bl_skincare_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $benefitMode = strtolower(bl_skincare_text($raw['benefitMode'] ?? 'comprehensive', 20));
    if(!in_array($benefitMode, ['brief','comprehensive'], true)) $benefitMode = 'comprehensive';
    $shavingMethod = strtolower(bl_skincare_text($raw['shavingMethod'] ?? '', 32));
    if(!in_array($shavingMethod, $shavingMethods, true)) $shavingMethod = '';
    $items[] = [
      'id'=>$id,
      'actionId'=>$actionId,
      'title'=>$title,
      'benefitMode'=>$benefitMode,
      'benefit'=>bl_skincare_text($raw['benefit'] ?? '', 5000),
      'timeOfDay'=>$time,
      'frequency'=>bl_skincare_frequency($raw['frequency'] ?? []),
      'notes'=>bl_skincare_text($raw['notes'] ?? '', 1200),
      'shavingMethod'=>$shavingMethod,
      'productSelection'=>bl_skincare_text($raw['productSelection'] ?? '', 180),
      'productName'=>bl_skincare_text($raw['productName'] ?? '', 180),
      'customProductName'=>bl_skincare_text($raw['customProductName'] ?? '', 180),
      'useGroupFrequency'=>!empty($raw['useGroupFrequency']),
      'useGroupTime'=>!empty($raw['useGroupTime']),
    ];
  }
  return $items;
}

function bl_skincare_logs($value): array {
  if(!is_array($value)) return [];
  $dates = array_keys($value);
  sort($dates, SORT_STRING);
  $dates = array_slice($dates, -366);
  $logs = [];
  foreach($dates as $date){
    if(preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$date) !== 1) continue;
    $source = is_array($value[$date] ?? null) ? $value[$date] : [];
    $entries = [];
    foreach(array_slice($source, 0, 120, true) as $itemId=>$raw){
      if(!is_array($raw)) continue;
      $key = bl_skincare_text($itemId, 80);
      if($key === '') continue;
      $completedAt = bl_skincare_text($raw['completedAt'] ?? '', 40);
      if($completedAt !== '' && strtotime($completedAt) === false) $completedAt = '';
      $entries[$key] = [
        'completed'=>!empty($raw['completed']),
        'note'=>bl_skincare_text($raw['note'] ?? '', 500),
        'completedAt'=>$completedAt,
      ];
    }
    $logs[(string)$date] = $entries;
  }
  return $logs;
}

function bl_skincare_group($value, int $index): ?array {
  if(!is_array($value)) return null;
  $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_skincare_text($value['id'] ?? ('routine-group-' . ($index + 1)), 80));
  $title = bl_skincare_text($value['title'] ?? '', 80);
  if($id === '' || $title === '') return null;
  $time = strtolower(bl_skincare_text($value['timeOfDay'] ?? 'anytime', 20));
  if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
  return [
    'id'=>$id,
    'title'=>$title,
    'applyTime'=>!empty($value['applyTime']),
    'timeOfDay'=>$time,
    'applyFrequency'=>!empty($value['applyFrequency']),
    'frequency'=>bl_skincare_frequency($value['frequency'] ?? []),
  ];
}

function bl_skincare_groups($value): array {
  $groups = [];
  $ids = [];
  $titles = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 30) as $index=>$raw){
    $group = bl_skincare_group($raw, $index);
    if(!$group) continue;
    if(isset($ids[$group['id']])) $group['id'] .= '-' . ($index + 1);
    $titleKey = strtolower($group['title']);
    if(isset($titles[$titleKey])) continue;
    $ids[$group['id']] = true;
    $titles[$titleKey] = true;
    $groups[] = $group;
  }
  return $groups;
}

function bl_skincare_assignments($value, array $groups): array {
  $valid = [];
  foreach($groups as $group) $valid[(string)$group['id']] = true;
  $assignments = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 200, true) as $itemId=>$groupId){
    $item = bl_skincare_text($itemId, 80);
    $group = bl_skincare_text($groupId, 80);
    if($item !== '' && isset($valid[$group])) $assignments[$item] = $group;
  }
  return $assignments;
}

function bl_skincare_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_skincare_row(PDO $db, int $userId): ?array {
  $statement = $db->prepare('SELECT visibility, routine_json, logs_json, updated_at FROM skincare_routines WHERE user_id=:user_id LIMIT 1');
  $statement->execute([':user_id'=>$userId]);
  $row = $statement->fetch();
  return $row ?: null;
}

function bl_skincare_own_payload(?array $row): array {
  if(!$row){
    return ['ok'=>true,'hasRoutine'=>false,'visibility'=>'private','routine'=>[],'logs'=>[],'updatedAt'=>null];
  }
  return [
    'ok'=>true,
    'hasRoutine'=>true,
    'visibility'=>($row['visibility'] ?? '') === 'public' ? 'public' : 'private',
    'routine'=>bl_skincare_routine(bl_skincare_decode((string)($row['routine_json'] ?? '[]'), [])),
    'logs'=>bl_skincare_logs(bl_skincare_decode((string)($row['logs_json'] ?? '{}'), [])),
    'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
  ];
}

function bl_skincare_public_profiles(PDO $db): array {
  $statement = $db->query("SELECT u.name, r.routine_json
    FROM users u
    INNER JOIN skincare_routines r ON r.user_id=u.id
    WHERE r.visibility='public'
    ORDER BY lower(u.name), u.name
    LIMIT 500");
  $profiles = [];
  foreach(($statement ? $statement->fetchAll() : []) as $row){
    $name = bl_skincare_text($row['name'] ?? '', BL_MAX_NAME_LEN);
    $routine = bl_skincare_routine(bl_skincare_decode((string)($row['routine_json'] ?? '[]'), []));
    if($name !== '' && count($routine) > 0) $profiles[] = $name;
  }
  usort($profiles, static function(string $left, string $right): int {
    return strcasecmp($left, $right) ?: strcmp($left, $right);
  });
  return ['ok'=>true,'profiles'=>array_values(array_unique($profiles))];
}

function bl_skincare_public_payload(PDO $db, string $name): array {
  if($name === '' || bl_str_len($name) > BL_MAX_NAME_LEN) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $statement = $db->prepare('SELECT u.id, u.name, r.visibility, r.routine_json, r.updated_at
    FROM users u
    LEFT JOIN skincare_routines r ON r.user_id=u.id
    WHERE lower(u.name)=lower(:name)
    LIMIT 1');
  $statement->execute([':name'=>$name]);
  $row = $statement->fetch();
  if(!$row || $row['routine_json'] === null) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(($row['visibility'] ?? '') !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);

  $groupStatement = $db->prepare('SELECT groups_json, assignments_json FROM skincare_routine_groups WHERE user_id=:user_id LIMIT 1');
  $groupStatement->execute([':user_id'=>(int)($row['id'] ?? 0)]);
  $groupRow = $groupStatement->fetch() ?: [];
  $groups = bl_skincare_groups(bl_skincare_decode((string)($groupRow['groups_json'] ?? '[]'), []));
  $assignments = bl_skincare_assignments(
    bl_skincare_decode((string)($groupRow['assignments_json'] ?? '{}'), []),
    $groups
  );

  return [
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)($row['name'] ?? $name),
      'routine'=>bl_skincare_routine(bl_skincare_decode((string)$row['routine_json'], [])),
      'groups'=>$groups,
      'assignments'=>$assignments,
      'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
    ],
  ];
}

try{
  $db = bl_skincare_db();
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET'){
    $requestedList = strtolower(bl_skincare_text($_GET['list'] ?? '', 20));
    if($requestedList === 'public') bl_json(bl_skincare_public_profiles($db));
    $requestedName = bl_skincare_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
    if($requestedName !== '') bl_json(bl_skincare_public_payload($db, $requestedName));
    $user = bl_require_user();
    bl_json(bl_skincare_own_payload(bl_skincare_row($db, (int)$user['id'])));
  }

  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $user = bl_require_user();
  $input = bl_input_json();
  $visibility = strtolower(bl_skincare_text($input['visibility'] ?? 'private', 12));
  if(!in_array($visibility, ['private','public'], true)) $visibility = 'private';
  $routine = bl_skincare_routine($input['routine'] ?? []);
  $logs = bl_skincare_logs($input['logs'] ?? []);
  $updated = bl_now();

  $statement = $db->prepare('INSERT INTO skincare_routines(user_id, visibility, routine_json, logs_json, updated_at)
    VALUES(:user_id,:visibility,:routine_json,:logs_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      visibility=excluded.visibility,
      routine_json=excluded.routine_json,
      logs_json=excluded.logs_json,
      updated_at=excluded.updated_at');
  $statement->execute([
    ':user_id'=>(int)$user['id'],
    ':visibility'=>$visibility,
    ':routine_json'=>json_encode($routine, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':logs_json'=>json_encode($logs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':updated_at'=>$updated,
  ]);

  bl_json(bl_skincare_own_payload(bl_skincare_row($db, (int)$user['id'])));
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_failed'], 500);
}
