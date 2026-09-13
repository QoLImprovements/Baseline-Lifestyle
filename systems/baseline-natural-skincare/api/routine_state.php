<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_saved_data.php';

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
  return ['mode'=>$mode,'days'=>$days,'timesPerWeek'=>max(1,min(14,(int)($source['timesPerWeek'] ?? 3)))];
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
    $time = strtolower(bl_skincare_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $benefitMode = strtolower(bl_skincare_text($raw['benefitMode'] ?? 'comprehensive', 20));
    if(!in_array($benefitMode, ['brief','comprehensive'], true)) $benefitMode = 'comprehensive';
    $shavingMethod = strtolower(bl_skincare_text($raw['shavingMethod'] ?? '', 32));
    if(!in_array($shavingMethod, $shavingMethods, true)) $shavingMethod = '';
    $items[] = [
      'id'=>$id,
      'actionId'=>$actionId,
      'title'=>bl_skincare_text($raw['title'] ?? 'Self-Care Action', 100) ?: 'Self-Care Action',
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

function bl_skincare_groups($value): array {
  $groups = [];
  $ids = [];
  $titles = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 30) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_skincare_text($raw['id'] ?? ('routine-group-' . ($index + 1)), 80)) ?: '';
    $title = bl_skincare_text($raw['title'] ?? '', 80);
    if($id === '' || $title === '') continue;
    if(isset($ids[$id])) $id .= '-' . ($index + 1);
    $titleKey = strtolower($title);
    if(isset($titles[$titleKey])) continue;
    $ids[$id] = true;
    $titles[$titleKey] = true;
    $time = strtolower(bl_skincare_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $groups[] = [
      'id'=>$id,
      'title'=>$title,
      'collapsed'=>!empty($raw['collapsed']),
      'applyTime'=>!empty($raw['applyTime']),
      'timeOfDay'=>$time,
      'applyFrequency'=>!empty($raw['applyFrequency']),
      'frequency'=>bl_skincare_frequency($raw['frequency'] ?? []),
    ];
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

function bl_skincare_own_payload(array $resource): array {
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : bl_skincare_saved_default();
  $routine = bl_skincare_routine($data['routine'] ?? []);
  return [
    'ok'=>true,
    'hasRoutine'=>(bool)$resource['found'] && count($routine) > 0,
    'visibility'=>($data['visibility'] ?? '') === 'public' ? 'public' : 'private',
    'routine'=>$routine,
    'logs'=>bl_skincare_logs($data['logs'] ?? []),
    'revision'=>(int)$resource['revision'],
    'updatedAt'=>$resource['updatedAt'],
  ];
}

function bl_skincare_public_profiles(PDO $db): array {
  $profiles = [];
  if(bl_resource_authority() !== 'saved-data'){
    $statement = $db->query("SELECT u.name FROM users u INNER JOIN skincare_routines r ON r.user_id=u.id WHERE r.visibility='public' ORDER BY lower(u.name), u.name LIMIT 500");
    foreach(($statement ? $statement->fetchAll() : []) as $row){
      $name = bl_skincare_text($row['name'] ?? '', BL_MAX_NAME_LEN);
      if($name !== '') $profiles[] = $name;
    }
  }else{
    $statement = $db->query('SELECT id, name FROM users ORDER BY lower(name), name LIMIT 500');
    foreach(($statement ? $statement->fetchAll() : []) as $row){
      $userId = (int)($row['id'] ?? 0);
      if($userId <= 0) continue;
      $resource = bl_skincare_saved_read($db, $userId);
      $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
      if(($data['visibility'] ?? '') !== 'public' || count(bl_skincare_routine($data['routine'] ?? [])) === 0) continue;
      $name = bl_skincare_text($row['name'] ?? '', BL_MAX_NAME_LEN);
      if($name !== '') $profiles[] = $name;
    }
  }
  return ['ok'=>true,'profiles'=>array_values(array_unique($profiles))];
}

function bl_skincare_public_payload(PDO $db, string $name): array {
  if($name === '' || bl_str_len($name) > BL_MAX_NAME_LEN) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $identity = bl_skincare_saved_identity_by_name($db, $name);
  if(!$identity) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $resource = bl_skincare_saved_read($db, (int)$identity['id']);
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
  if(!$resource['found'] || count(bl_skincare_routine($data['routine'] ?? [])) === 0) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(($data['visibility'] ?? '') !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);
  $groups = bl_skincare_groups($data['groups'] ?? []);
  return [
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>$identity['name'],
      'routine'=>bl_skincare_routine($data['routine'] ?? []),
      'groups'=>$groups,
      'assignments'=>bl_skincare_assignments($data['assignments'] ?? [], $groups),
      'updatedAt'=>$resource['updatedAt'],
    ],
  ];
}

try{
  $db = bl_skincare_db();
  $method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

  if($method === 'GET'){
    $requestedList = strtolower(bl_skincare_text($_GET['list'] ?? '', 20));
    if($requestedList === 'public') bl_json(bl_skincare_public_profiles($db));
    $requestedName = bl_skincare_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
    if($requestedName !== '') bl_json(bl_skincare_public_payload($db, $requestedName));
    $user = bl_require_user();
    bl_json(bl_skincare_own_payload(bl_skincare_saved_read($db, (int)$user['id'])));
  }

  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $user = bl_require_user();
  $input = bl_input_json();
  $expectedRevision = bl_resource_required_revision_from_input($input);
  $visibility = strtolower(bl_skincare_text($input['visibility'] ?? 'private', 12));
  if(!in_array($visibility, ['private','public'], true)) $visibility = 'private';
  $routine = bl_skincare_routine($input['routine'] ?? []);
  $logs = bl_skincare_logs($input['logs'] ?? []);

  $written = bl_skincare_saved_mutate($db, (int)$user['id'], $expectedRevision, static function(array $data) use ($visibility, $routine, $logs): array {
    $data['visibility'] = $visibility;
    $data['routine'] = $routine;
    $data['logs'] = $logs;
    return $data;
  });
  bl_json(bl_skincare_own_payload([
    'found'=>true,
    'revision'=>$written['revision'],
    'updatedAt'=>$written['updatedAt'],
    'data'=>$written['data'],
  ]));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_failed'], 500);
}
