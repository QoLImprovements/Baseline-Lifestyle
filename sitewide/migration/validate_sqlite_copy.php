<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_copy_validation.php';

function bl_copy_validation_cli_usage(): string {
  return "Usage: php sitewide/migration/validate_sqlite_copy.php --source=/absolute/copied.sqlite --output=/absolute/shadow-saved-data --evidence=/absolute/validation-evidence.json\n";
}

$options = getopt('', ['source:', 'output:', 'evidence:', 'help']);
if(isset($options['help'])){
  fwrite(STDOUT, bl_copy_validation_cli_usage());
  exit(0);
}

$source = is_string($options['source'] ?? null) ? $options['source'] : '';
$output = is_string($options['output'] ?? null) ? $options['output'] : '';
$evidence = is_string($options['evidence'] ?? null) ? $options['evidence'] : '';
if($source === '' || $output === '' || $evidence === ''){
  fwrite(STDERR, bl_copy_validation_cli_usage());
  exit(2);
}

try{
  $result = bl_validate_sqlite_copy($source, $output, $evidence);
  fwrite(STDOUT, json_encode([
    'ok'=>true,
    'evidence'=>$evidence,
    'sourceSha256'=>$result['source']['sha256'] ?? '',
    'treeSha256'=>$result['export']['treeSha256'] ?? '',
    'counts'=>$result['export']['counts'] ?? [],
    'checkedFiles'=>$result['verification']['checkedFiles'] ?? 0,
    'readyForProductionCutover'=>false,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(0);
}catch(Throwable $error){
  fwrite(STDERR, json_encode([
    'ok'=>false,
    'error'=>$error->getMessage(),
    'evidence'=>$evidence,
    'readyForProductionCutover'=>false,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(1);
}
