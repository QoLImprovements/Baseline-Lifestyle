<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_secure_exporter.php';

function bl_export_cli_usage(): string {
  return "Usage: php sitewide/migration/export_sqlite_copy.php --source=/absolute/copied.sqlite --output=/absolute/shadow-saved-data\n";
}

$options = getopt('', ['source:', 'output:', 'help']);
if(isset($options['help'])){
  fwrite(STDOUT, bl_export_cli_usage());
  exit(0);
}
$source = is_string($options['source'] ?? null) ? $options['source'] : '';
$output = is_string($options['output'] ?? null) ? $options['output'] : '';
if($source === '' || $output === ''){
  fwrite(STDERR, bl_export_cli_usage());
  exit(2);
}

try{
  $report = bl_secure_export_sqlite_copy($source, $output);
  fwrite(STDOUT, json_encode([
    'ok'=>true,
    'output'=>$output,
    'counts'=>$report['counts'],
    'missingTables'=>$report['missingTables'],
    'invalidCount'=>count($report['invalid']),
    'authenticationCredentialsExported'=>false,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(0);
}catch(Throwable $error){
  fwrite(STDERR, json_encode([
    'ok'=>false,
    'error'=>$error->getMessage(),
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(1);
}
