<?php
declare(strict_types=1);
require_once __DIR__ . '/skincare_resource.php';

function bl_skincare_recipe_settings_payload(array $resource): array {
  $settings = bl_skincare_recipe_settings($resource['data']['recipeSettings'] ?? []);
  return [
    'ok'=>true,
    'hasData'=>$settings !== [],
    'settings'=>$settings,
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

try{
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

  if($method === 'GET') bl_json(bl_skincare_recipe_settings_payload(bl_skincare_resource($userId)));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $expected = bl_resource_required_revision_from_input($input);
  $settings = bl_skincare_recipe_settings($input['settings'] ?? []);
  $written = bl_resource_file_mutate(
    bl_skincare_path($userId),
    bl_skincare_default(),
    static function(array $current) use ($settings): array {
      $current = array_merge(bl_skincare_default(), $current);
      $current['recipeSettings'] = $settings;
      return $current;
    },
    $expected
  );
  bl_json(bl_skincare_recipe_settings_payload($written ?? bl_skincare_resource($userId)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_recipe_settings_failed'], 500);
}

