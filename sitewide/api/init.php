<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

try{
  $db = bl_db();

  // Shared schema is ensured automatically inside bl_db(); system schemas are ensured by their own APIs. init.php is kept
  // as a manual “poke” endpoint for environments that disable autoload.
  bl_ensure_schema($db);

  bl_json(['ok'=>true,'message'=>'Shared DB infrastructure initialised / migrated']);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'init_failed','message'=>$e->getMessage()], 500);
}
