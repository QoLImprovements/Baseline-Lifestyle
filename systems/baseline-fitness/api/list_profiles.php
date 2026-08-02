<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

try{
  if(bl_resource_uses_files()){
    $names = bl_fitness_profile_names_from_files();
    bl_json(['ok'=>true,'names'=>$names,'profiles'=>$names,'count'=>count($names)]);
  }
  $db = bl_fitness_db();
  $rows = $db->query('SELECT name FROM users ORDER BY name COLLATE NOCASE ASC LIMIT 200')->fetchAll();
  $names = array_map(static fn(array $row): string => (string)($row['name'] ?? ''), $rows ?: []);
  bl_json(['ok'=>true,'names'=>$names,'profiles'=>$names,'count'=>count($names)]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'list_failed'], 500);
}
