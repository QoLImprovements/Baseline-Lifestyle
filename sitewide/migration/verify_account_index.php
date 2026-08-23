<?php
declare(strict_types=1);

if(PHP_SAPI !== 'cli'){
  http_response_code(404);
  exit;
}

require_once dirname(__DIR__) . '/api/account_resource.php';

$repair = in_array('--repair', $argv ?? [], true);

try{
  if(bl_resource_authority() === 'sqlite') throw new RuntimeException('saved_data_authority_required');
  $verification = bl_account_index_verify();
  $result = [
    'ok'=>(bool)$verification['ok'],
    'matches'=>(bool)$verification['matches'],
    'accounts'=>(int)$verification['accounts'],
    'revision'=>(int)$verification['revision'],
    'issues'=>$verification['issues'],
    'repaired'=>false,
  ];
  if($repair && !$verification['matches']){
    $written = bl_account_index_rebuild((int)$verification['revision']);
    $result['ok'] = true;
    $result['matches'] = true;
    $result['repaired'] = true;
    $result['revision'] = (int)($written['revision'] ?? 0);
  }
  fwrite(STDOUT, json_encode($result, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . PHP_EOL);
  exit($result['ok'] ? 0 : 1);
}catch(Throwable $error){
  fwrite(STDERR, json_encode(['ok'=>false,'error'=>$error->getMessage()], JSON_UNESCAPED_SLASHES) . PHP_EOL);
  exit(1);
}
