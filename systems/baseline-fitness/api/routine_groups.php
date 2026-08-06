<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_fitness_group_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_fitness_group_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
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

function bl_fitness_group_row(PDO $db, int $userId): ?array {
  $statement = $db->prepare('SELECT groups_json, assignments_json, updated_at FROM fitness_routine_groups WHERE user_id=:user_id LIMIT 1');
  $statement->execute([':user_id'=>$userId]);
  $row = $statement->fetch();
  return $row ?: null;
}

function bl_fitness_group_payload(?array $row): array {
  if(!$row) return ['ok'=>true,'hasState'=>false,'groups'=>[],'assignments'=>[],'updatedAt'=>null];
  $groups = bl_fitness_groups_normalise(bl_fitness_group_decode((string)($row['groups_json'] ?? '[]'), []));
  return [
    'ok'=>true,
    'hasState'=>true,
    'groups'=>$groups,
    'assignments'=>bl_fitness_group_assignments(bl_fitness_group_decode((string)($row['assignments_json'] ?? '{}'), []), $groups),
    'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
  ];
}

try{
  $db = bl_fitness_db();
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET') bl_json(bl_fitness_group_payload(bl_fitness_group_row($db, $userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $groups = bl_fitness_groups_normalise($input['groups'] ?? []);
  $assignments = bl_fitness_group_assignments($input['assignments'] ?? [], $groups);
  $updated = bl_now();
  $statement = $db->prepare('INSERT INTO fitness_routine_groups(user_id, groups_json, assignments_json, updated_at)
    VALUES(:user_id,:groups_json,:assignments_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      groups_json=excluded.groups_json,
      assignments_json=excluded.assignments_json,
      updated_at=excluded.updated_at');
  $statement->execute([
    ':user_id'=>$userId,
    ':groups_json'=>json_encode($groups, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':assignments_json'=>json_encode($assignments, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':updated_at'=>$updated,
  ]);

  bl_json(bl_fitness_group_payload(bl_fitness_group_row($db, $userId)));
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'fitness_routine_groups_failed'], 500);
}
