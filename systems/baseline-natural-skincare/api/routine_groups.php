<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_resource.php';

function bl_skincare_group_payload(array $resource): array {
  $data = $resource['data'] ?? [];
  $groups = bl_skincare_groups($data['groups'] ?? []);
  return [
    'ok'=>true,
    'hasGroups'=>true,
    'groups'=>$groups,
    'assignments'=>bl_skincare_assignments($data['assignments'] ?? [], $groups),
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

try{
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET') bl_json(bl_skincare_group_payload(bl_skincare_resource($userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $expected = bl_resource_required_revision_from_input($input);
  $groups = bl_skincare_groups($input['groups'] ?? []);
  $assignments = bl_skincare_assignments($input['assignments'] ?? [], $groups);
  $written = bl_resource_file_mutate(
    bl_skincare_path($userId),
    bl_skincare_default(),
    static function(array $current) use ($groups,$assignments): array {
      $current = array_merge(bl_skincare_default(), $current);
      $current['groups'] = $groups;
      $current['assignments'] = $assignments;
      return $current;
    },
    $expected
  );
  bl_json(bl_skincare_group_payload($written ?? bl_skincare_resource($userId)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_groups_failed'], 500);
}
