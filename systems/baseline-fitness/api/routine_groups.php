<?php
declare(strict_types=1);
require_once __DIR__ . '/fitness_resource.php';

function bl_fitness_group_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_fitness_groups_normalise($value): array {
  if(!is_array($value)) return [];
  $groups = [];
  $ids = [];
  $titles = [];
  foreach(array_slice($value, 0, 50) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = preg_replace('/[^A-Za-z0-9_-]/', '-', bl_fitness_group_text($raw['id'] ?? ('fitness-group-' . ($index + 1)), 100)) ?: '';
    $title = bl_fitness_group_text($raw['title'] ?? '', 100);
    if($id === '' || $title === '') continue;
    if(isset($ids[$id])) $id .= '-' . ($index + 1);
    $titleKey = function_exists('mb_strtolower') ? mb_strtolower($title) : strtolower($title);
    if(isset($titles[$titleKey])) continue;
    $ids[$id] = true;
    $titles[$titleKey] = true;
    $groups[] = ['id'=>$id, 'title'=>$title];
  }
  return $groups;
}

function bl_fitness_group_assignments($value, array $groups): array {
  if(!is_array($value)) return [];
  $validGroups = [];
  foreach($groups as $group) $validGroups[(string)$group['id']] = true;
  $assignments = [];
  foreach(array_slice($value, 0, 400, true) as $entityKey=>$groupId){
    $key = bl_fitness_group_text($entityKey, 180);
    $group = bl_fitness_group_text($groupId, 100);
    if($key === '' || !isset($validGroups[$group])) continue;
    if(preg_match('/^(?:plan:[1-9][0-9]*|activity:[A-Za-z0-9._:-]{1,160})$/', $key) !== 1) continue;
    $assignments[$key] = $group;
  }
  return $assignments;
}

function bl_fitness_group_resource_path(int $userId): string {
  return bl_saved_user_resource_path($userId, 'fitness-routine');
}

function bl_fitness_group_default(): array {
  return [
    'visibility'=>'private',
    'activities'=>[],
    'logs'=>[],
    'groups'=>[],
    'assignments'=>[],
  ];
}

function bl_fitness_group_resource(int $userId): array {
  $resource = bl_resource_file_read(bl_fitness_group_resource_path($userId), bl_fitness_group_default());
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
  $resource['data'] = array_merge(bl_fitness_group_default(), $data);
  return $resource;
}

function bl_fitness_group_payload(array $resource): array {
  $data = $resource['data'] ?? [];
  $groups = bl_fitness_groups_normalise($data['groups'] ?? []);
  return [
    'ok'=>true,
    // A successful server read is authoritative even when groups are empty.
    // Legacy browser groups must never auto-upload into an empty resource.
    'hasState'=>true,
    'groups'=>$groups,
    'assignments'=>bl_fitness_group_assignments($data['assignments'] ?? [], $groups),
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

try{
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET') bl_json(bl_fitness_group_payload(bl_fitness_group_resource($userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $expectedRevision = bl_resource_required_revision_from_input($input);
  $groups = bl_fitness_groups_normalise($input['groups'] ?? []);
  $assignments = bl_fitness_group_assignments($input['assignments'] ?? [], $groups);
  $written = bl_resource_file_mutate(
    bl_fitness_group_resource_path($userId),
    bl_fitness_group_default(),
    static function(array $current) use ($groups, $assignments): array {
      $current = array_merge(bl_fitness_group_default(), $current);
      $current['groups'] = $groups;
      $current['assignments'] = $assignments;
      return $current;
    },
    $expectedRevision
  );

  bl_json(bl_fitness_group_payload($written ?? bl_fitness_group_resource($userId)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_routine_groups_failed'], 500);
}
