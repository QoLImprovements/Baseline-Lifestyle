<?php
declare(strict_types=1);
require_once __DIR__ . '/schema.php';

function bl_skincare_group_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_skincare_group_decode(string $json, array $fallback): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_skincare_groups_normalise($value): array {
  if(!is_array($value)) return [];
  $groups = [];
  $seenIds = [];
  $seenTitles = [];
  foreach(array_slice($value, 0, 20) as $index=>$raw){
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
    $groups[] = ['id'=>$id,'title'=>$title];
  }
  return $groups;
}

function bl_skincare_group_assignments($value, array $groups): array {
  if(!is_array($value)) return [];
  $valid = [];
  foreach($groups as $group) $valid[(string)$group['id']] = true;
  $assignments = [];
  foreach(array_slice($value, 0, 50, true) as $itemId=>$groupId){
    $item = bl_skincare_group_text($itemId, 80);
    $group = bl_skincare_group_text($groupId, 80);
    if($item !== '' && isset($valid[$group])) $assignments[$item] = $group;
  }
  return $assignments;
}

function bl_skincare_group_row(PDO $db, int $userId): ?array {
  $statement = $db->prepare('SELECT groups_json, assignments_json, updated_at FROM skincare_routine_groups WHERE user_id=:user_id LIMIT 1');
  $statement->execute([':user_id'=>$userId]);
  $row = $statement->fetch();
  return $row ?: null;
}

function bl_skincare_group_payload(?array $row): array {
  if(!$row) return ['ok'=>true,'hasGroups'=>false,'groups'=>[],'assignments'=>[],'updatedAt'=>null];
  $groups = bl_skincare_groups_normalise(bl_skincare_group_decode((string)($row['groups_json'] ?? '[]'), []));
  return [
    'ok'=>true,
    'hasGroups'=>count($groups) > 0,
    'groups'=>$groups,
    'assignments'=>bl_skincare_group_assignments(
      bl_skincare_group_decode((string)($row['assignments_json'] ?? '{}'), []),
      $groups
    ),
    'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
  ];
}

try{
  $db = bl_skincare_db();
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET') bl_json(bl_skincare_group_payload(bl_skincare_group_row($db, $userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $groups = bl_skincare_groups_normalise($input['groups'] ?? []);
  $assignments = bl_skincare_group_assignments($input['assignments'] ?? [], $groups);
  $updated = bl_now();

  $statement = $db->prepare('INSERT INTO skincare_routine_groups(user_id, groups_json, assignments_json, updated_at)
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

  bl_json(bl_skincare_group_payload(bl_skincare_group_row($db, $userId)));
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_groups_failed'], 500);
}
