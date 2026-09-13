<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_saved_data.php';

function bl_public_skin_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
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
  return ['mode'=>$mode,'days'=>$days,'timesPerWeek'=>max(1,min(14,(int)($source['timesPerWeek'] ?? 3)))];
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

function bl_public_skin_groups($value): array {
  $output = [];
  $ids = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 30) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_public_skin_text($raw['id'] ?? ('routine-group-' . ($index + 1)), 80)) ?: '';
    $title = bl_public_skin_text($raw['title'] ?? '', 80);
    if($id === '' || $title === '' || isset($ids[$id])) continue;
    $ids[$id] = true;
    $time = strtolower(bl_public_skin_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $output[] = [
      'id'=>$id,
      'title'=>$title,
      'applyTime'=>!empty($raw['applyTime']),
      'timeOfDay'=>$time,
      'applyFrequency'=>!empty($raw['applyFrequency']),
      'frequency'=>bl_public_skin_frequency($raw['frequency'] ?? []),
    ];
  }
  return $output;
}

try{
  if(strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET')) !== 'GET') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $name = bl_public_skin_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
  if($name === '') bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);

  $db = bl_skincare_db();
  $identity = bl_skincare_saved_identity_by_name($db, $name);
  if(!$identity) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);

  $resource = bl_skincare_saved_read($db, (int)$identity['id']);
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
  $routine = bl_public_skin_routine($data['routine'] ?? []);
  if(!$resource['found'] || $routine === []) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  if(($data['visibility'] ?? '') !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);

  $groups = bl_public_skin_groups($data['groups'] ?? []);
  $validGroups = [];
  foreach($groups as $group) $validGroups[(string)$group['id']] = true;
  $assignments = [];
  foreach((is_array($data['assignments'] ?? null) ? $data['assignments'] : []) as $itemId=>$groupId){
    $item = bl_public_skin_text($itemId, 80);
    $group = bl_public_skin_text($groupId, 80);
    if($item !== '' && isset($validGroups[$group])) $assignments[$item] = $group;
  }

  bl_json([
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>$identity['name'],
      'routine'=>$routine,
      'groups'=>$groups,
      'assignments'=>$assignments,
      'updatedAt'=>$resource['updatedAt'],
    ],
  ]);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_public_routine_failed'], 500);
}
