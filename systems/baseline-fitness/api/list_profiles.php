<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

try{
  $db = bl_fitness_db();
  $rows = $db->query('SELECT name FROM users ORDER BY name COLLATE NOCASE ASC LIMIT 200')->fetchAll();
  $names = array_map(fn($r)=>$r['name'], $rows ?: []);
  // Backwards + forwards compatible payload:
  // - names: legacy clients
  // - profiles: newer clients
  bl_json(['ok'=>true,'names'=>$names,'profiles'=>$names,'count'=>count($names)]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'list_failed'], 500);
}
