<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_export_verifier.php';

function bl_verify_cli_usage(): string {
  return "Usage: php sitewide/migration/verify_sqlite_export.php --source=/absolute/copied.sqlite --export=/absolute/shadow-saved-data\n";
}

$options = getopt('', ['source:', 'export:', 'help']);
if(isset($options['help'])){
  fwrite(STDOUT, bl_verify_cli_usage());
  exit(0);
}
$source = is_string($options['source'] ?? null) ? $options['source'] : '';
$export = is_string($options['export'] ?? null) ? $options['export'] : '';
if($source === '' || $export === ''){
  fwrite(STDERR, bl_verify_cli_usage());
  exit(2);
}

try{
  $result = bl_verify_sqlite_export($source, $export);
  $stream = $result['ok'] ? STDOUT : STDERR;
  fwrite($stream, json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n");
  exit($result['ok'] ? 0 : 1);
}catch(Throwable $error){
  fwrite(STDERR, json_encode([
    'ok'=>false,
    'error'=>$error->getMessage(),
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(1);
}
