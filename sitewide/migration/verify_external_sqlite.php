<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_external_authority.php';
require_once dirname(__DIR__) . '/api/config.php';

function bl_external_sqlite_cli_usage(): string {
  return "Usage: php sitewide/migration/verify_external_sqlite.php [--database=/absolute/Saved Data/Database/baseline.sqlite] [--document-root=/absolute/public_html] [--evidence=/absolute/private/evidence.json]\n";
}

$options = getopt('', ['database:', 'document-root:', 'evidence:', 'help']);
if(isset($options['help'])){
  fwrite(STDOUT, bl_external_sqlite_cli_usage());
  exit(0);
}

$database = is_string($options['database'] ?? null) && trim((string)$options['database']) !== ''
  ? trim((string)$options['database'])
  : bl_db_path();
$documentRoot = is_string($options['document-root'] ?? null)
  ? trim((string)$options['document-root'])
  : trim((string)($_SERVER['DOCUMENT_ROOT'] ?? ''));
$evidencePath = is_string($options['evidence'] ?? null)
  ? trim((string)$options['evidence'])
  : '';

try{
  $evidence = bl_external_sqlite_inspect($database, $documentRoot);
  if($evidencePath !== '') bl_external_sqlite_write_evidence($evidencePath, $evidence);
  fwrite(STDOUT, json_encode([
    'ok'=>(bool)($evidence['ok'] ?? false),
    'fileName'=>$evidence['database']['fileName'] ?? '',
    'contentSha256'=>$evidence['database']['contentSha256'] ?? '',
    'counts'=>$evidence['counts'] ?? [],
    'gates'=>$evidence['gates'] ?? [],
    'evidence'=>$evidencePath,
    'authorityChangedByThisCommand'=>false,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(($evidence['ok'] ?? false) ? 0 : 1);
}catch(Throwable $error){
  fwrite(STDERR, json_encode([
    'ok'=>false,
    'error'=>$error->getMessage(),
    'evidence'=>$evidencePath,
    'authorityChangedByThisCommand'=>false,
  ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
  exit(1);
}
