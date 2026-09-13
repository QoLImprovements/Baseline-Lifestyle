<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_resource.php';

function bl_skincare_own_payload(array $resource): array {
  $data = $resource['data'] ?? [];
  $routine = bl_skincare_routine($data['routine'] ?? []);
  $logs = bl_skincare_logs($data['logs'] ?? []);
  return [
    'ok'=>true,
    'hasRoutine'=>$routine !== [] || $logs !== [],
    'visibility'=>($data['visibility'] ?? '') === 'public' ? 'public' : 'private',
    'routine'=>$routine,
    'logs'=>$logs,
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

function bl_skincare_public_payload(string $name): array {
  $account = bl_skincare_account_for_name($name);
  if(!$account) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $resource = bl_skincare_resource((int)$account['userId']);
  $data = $resource['data'] ?? [];
  if(($data['visibility'] ?? 'private') !== 'public') bl_json(['ok'=>false,'error'=>'routine_private'], 403);
  $routine = bl_skincare_routine($data['routine'] ?? []);
  if($routine === []) bl_json(['ok'=>false,'error'=>'routine_not_found'], 404);
  $groups = bl_skincare_groups($data['groups'] ?? []);
  return [
    'ok'=>true,
    'publicRoutine'=>[
      'owner'=>(string)($account['name'] ?? $name),
      'routine'=>$routine,
      'groups'=>$groups,
      'assignments'=>bl_skincare_assignments($data['assignments'] ?? [], $groups),
      'updatedAt'=>$resource['updatedAt'] ?? null,
    ],
  ];
}

try{
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET'){
    $requestedList = strtolower(bl_skincare_text($_GET['list'] ?? '', 20));
    if($requestedList === 'public') bl_json(['ok'=>true,'profiles'=>bl_skincare_public_profiles()]);
    $requestedName = bl_skincare_text($_GET['name'] ?? '', BL_MAX_NAME_LEN);
    if($requestedName !== '') bl_json(bl_skincare_public_payload($requestedName));
    $user = bl_require_user();
    bl_json(bl_skincare_own_payload(bl_skincare_resource((int)$user['id'])));
  }

  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $input = bl_input_json();
  $expected = bl_resource_required_revision_from_input($input);
  $visibility = strtolower(bl_skincare_text($input['visibility'] ?? 'private', 12));
  if(!in_array($visibility, ['private','public'], true)) $visibility = 'private';
  $routine = bl_skincare_routine($input['routine'] ?? []);
  $logs = bl_skincare_logs($input['logs'] ?? []);

  $written = bl_resource_file_mutate(
    bl_skincare_path($userId),
    bl_skincare_default(),
    static function(array $current) use ($visibility,$routine,$logs): array {
      $current = array_merge(bl_skincare_default(), $current);
      $current['visibility'] = $visibility;
      $current['routine'] = $routine;
      $current['logs'] = $logs;
      return $current;
    },
    $expected
  );
  bl_json(bl_skincare_own_payload($written ?? bl_skincare_resource($userId)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_routine_failed'], 500);
}
