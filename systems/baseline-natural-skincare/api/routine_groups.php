<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_saved_data.php';

function bl_skincare_group_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_skincare_group_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_skincare_group_text($source['mode'] ?? 'daily', 24));
  if(!in_array($mode, ['daily','days','weekly','as-needed'], true)) $mode = 'daily';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_skincare_group_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  return ['mode'=>$mode,'days'=>$days,'timesPerWeek'=>max(1,min(14,(int)($source['timesPerWeek'] ?? 3)))];
}

function bl_skincare_groups_normalise($value): array {
  if(!is_array($value)) return [];
  $groups = [];
  $seenIds = [];
  $seenTitles = [];
  foreach(array_slice($value, 0, 30) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_skincare_group_text($raw['id'] ?? ('routine-group-' . ($index + 1)), 80);
    $id = preg_replace('/[^a-zA-Z0-9_-]/', '-', $id) ?: '';
    $title = bl_skincare_group_text($raw['title'] ?? '', 80);
    if($id === '' || $title === '') continue;
    if(isset($seenIds[$id])) $id .= '-' . ($index + 1);
    $titleKey = function_exists('mb_strtolower') ? mb_strtolower($title) : strtolower($title);
    if(isset($seenTitles[$titleKey])) continue;
    $seenIds[$id] = true;
    $seenTitles[$titleKey] = true;
    $time = strtolower(bl_skincare_group_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $groups[] = [
      'id'=>$id,
      'title'=>$title,
      'collapsed'=>!empty($raw['collapsed']),
      'applyFrequency'=>!empty($raw['applyFrequency']),
      'frequency'=>bl_skincare_group_frequency($raw['frequency'] ?? []),
      'applyTime'=>!empty($raw['applyTime']),
      'timeOfDay'=>$time,
    ];
  }
  return $groups;
}

function bl_skincare_group_assignments($value, array $groups): array {
  if(!is_array($value)) return [];
  $valid = [];
  foreach($groups as $group) $valid[(string)$group['id']] = true;
  $assignments = [];
  foreach(array_slice($value, 0, 120, true) as $itemId=>$groupId){
    $item = bl_skincare_group_text($itemId, 80);
    $group = bl_skincare_group_text($groupId, 80);
    if($item !== '' && isset($valid[$group])) $assignments[$item] = $group;
  }
  return $assignments;
}

function bl_skincare_group_payload(array $resource): array {
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : bl_skincare_saved_default();
  $groups = bl_skincare_groups_normalise($data['groups'] ?? []);
  return [
    'ok'=>true,
    'hasGroups'=>count($groups) > 0,
    'groups'=>$groups,
    'assignments'=>bl_skincare_group_assignments($data['assignments'] ?? [], $groups),
    'revision'=>(int)$resource['revision'],
    'updatedAt'=>$resource['updatedAt'],
  ];
}

try{
  $db = bl_skincare_db();
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

  if($method === 'GET') bl_json(bl_skincare_group_payload(bl_skincare_saved_read($db, $userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $expectedRevision = bl_resource_required_revision_from_input($input);
  $groups = bl_skincare_groups_normalise($input['groups'] ?? []);
  $assignments = bl_skincare_group_assignments($input['assignments'] ?? [], $groups);

  $written = bl_skincare_saved_mutate($db, $userId, $expectedRevision, static function(array $data) use ($groups, $assignments): array {
    $data['groups'] = $groups;
    $data['assignments'] = $assignments;
    return $data;
  });

  bl_json(bl_skincare_group_payload([
    'data'=>$written['data'],
    'revision'=>$written['revision'],
    'updatedAt'=>$written['updatedAt'],
  ]));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_groups_failed'], 500);
}
