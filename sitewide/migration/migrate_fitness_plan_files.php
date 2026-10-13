<?php
declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/systems/baseline-fitness/api/fitness_resource.php';

if(PHP_SAPI !== 'cli'){
  fwrite(STDERR, "CLI only.\n");
  exit(2);
}

try{
  if(bl_resource_authority() !== 'saved-data'){
    throw new RuntimeException('saved_data_authority_required');
  }

  $root = bl_saved_join(bl_saved_root(), 'Users');
  if(!is_dir($root)) throw new RuntimeException('users_directory_missing');

  $migrated = [];
  $already = [];
  foreach(scandir($root) ?: [] as $entry){
    if(preg_match('/^[0-9]{6}$/', (string)$entry) !== 1) continue;
    $uid = (int)$entry;
    $path = bl_fitness_resource_path($uid);
    $resource = bl_resource_file_read($path, bl_fitness_resource_default());
    $data = bl_fitness_resource_normalise($resource['data']);
    $legacyPlans = array_values(array_filter($data['plans'] ?? [], 'is_array'));

    if($legacyPlans === []){
      $already[] = [
        'userId'=>$uid,
        'planFiles'=>count(bl_fitness_plan_files_read($uid)),
      ];
      continue;
    }

    bl_fitness_resource_write($uid, $data, (int)$resource['revision']);

    $postRoot = bl_resource_file_read($path, bl_fitness_resource_default());
    if(array_key_exists('plans', $postRoot['data'])){
      throw new RuntimeException('embedded_plans_not_removed_for_user_' . $uid);
    }
    $physical = bl_fitness_plan_files_read($uid);
    if(count($physical) !== count($legacyPlans)){
      throw new RuntimeException('plan_file_count_mismatch_for_user_' . $uid);
    }

    $migrated[] = [
      'userId'=>$uid,
      'plans'=>count($physical),
      'rootRevision'=>(int)$postRoot['revision'],
    ];
  }

  echo json_encode([
    'ok'=>true,
    'migrated'=>$migrated,
    'alreadyMigrated'=>$already,
  ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . PHP_EOL;
}catch(Throwable $error){
  fwrite(STDERR, json_encode([
    'ok'=>false,
    'error'=>$error->getMessage(),
  ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . PHP_EOL);
  exit(1);
}
