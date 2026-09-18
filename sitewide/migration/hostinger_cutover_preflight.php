<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_external_authority.php';
require_once dirname(__DIR__) . '/api/private_environment.php';

final class BaselineHostingerPreflightException extends RuntimeException {}

function bl_hostinger_preflight_is_absolute(string $path): bool {
  return str_starts_with($path, '/') || preg_match('/^[A-Za-z]:[\\\\\/]/', $path) === 1;
}

function bl_hostinger_preflight_normalize(string $path, string $label): string {
  $path = rtrim(trim(str_replace('\\\\', '/', $path)), '/');
  if($path === '' || !bl_hostinger_preflight_is_absolute($path)){
    throw new BaselineHostingerPreflightException($label . '_must_be_absolute');
  }
  if(str_contains('/' . trim($path, '/') . '/', '/../')){
    throw new BaselineHostingerPreflightException($label . '_contains_parent_segment');
  }
  return $path;
}

function bl_hostinger_preflight_within(string $path, string $root): bool {
  $path = rtrim(str_replace('\\\\', '/', $path), '/') . '/';
  $root = rtrim(str_replace('\\\\', '/', $root), '/') . '/';
  return str_starts_with($path, $root);
}

function bl_hostinger_preflight_private_permissions(string $path): ?bool {
  if(DIRECTORY_SEPARATOR !== '/') return null;
  $permissions = fileperms($path);
  if($permissions === false) return false;
  return (($permissions & 0077) === 0);
}

function bl_hostinger_preflight_symlink_ancestor(string $path): bool {
  $path = rtrim(str_replace('\\\\', '/', $path), '/');
  while($path !== '' && dirname($path) !== $path){
    if(is_link($path)) return true;
    $path = dirname($path);
  }
  return $path !== '' && is_link($path);
}

function bl_hostinger_preflight_path_report(string $path, string $documentRoot, bool $directory): array {
  try{
    $normalized = bl_hostinger_preflight_normalize($path, $directory ? 'directory' : 'file');
  }catch(Throwable $error){
    return [
      'configured'=>$path !== '',
      'absolute'=>false,
      'exists'=>false,
      'outsideDocumentRoot'=>false,
      'symlinkFree'=>false,
      'readable'=>false,
      'writable'=>false,
      'privatePermissions'=>false,
      'pathSha256'=>$path === '' ? '' : hash('sha256', $path),
      'baseName'=>$path === '' ? '' : basename($path),
      'error'=>$error->getMessage(),
    ];
  }

  $exists = $directory ? is_dir($normalized) : is_file($normalized);
  $resolved = $exists ? (realpath($normalized) ?: $normalized) : $normalized;
  $resolvedDocumentRoot = realpath($documentRoot) ?: $documentRoot;
  $outside = !bl_hostinger_preflight_within($resolved, $resolvedDocumentRoot);
  $privatePermissions = $exists ? bl_hostinger_preflight_private_permissions($normalized) : false;

  return [
    'configured'=>true,
    'absolute'=>true,
    'exists'=>$exists,
    'outsideDocumentRoot'=>$outside,
    'symlinkFree'=>!bl_hostinger_preflight_symlink_ancestor($normalized),
    'readable'=>$exists && is_readable($normalized),
    'writable'=>$exists && is_writable($normalized),
    'privatePermissions'=>$privatePermissions,
    'pathSha256'=>hash('sha256', $normalized),
    'baseName'=>basename($normalized),
  ];
}

function bl_hostinger_preflight_private_env_path(): string {
  $configured = getenv('BASELINE_PRIVATE_ENV_PATH');
  if(is_string($configured) && trim($configured) !== '') return trim($configured);
  return dirname(__DIR__, 3) . '/.baseline-private.env';
}

function bl_hostinger_preflight_private_env_report(): array {
  $path = bl_hostinger_preflight_private_env_path();
  if(!is_file($path)){
    return [
      'present'=>false,
      'policyOk'=>null,
      'pathSha256'=>hash('sha256', $path),
      'baseName'=>basename($path),
    ];
  }
  $permissions = fileperms($path);
  $size = filesize($path);
  $policyOk = !is_link($path)
    && $permissions !== false
    && (($permissions & 0077) === 0)
    && $size !== false
    && $size <= 16384;
  return [
    'present'=>true,
    'policyOk'=>$policyOk,
    'pathSha256'=>hash('sha256', $path),
    'baseName'=>basename($path),
    'sizeBytes'=>$size === false ? null : (int)$size,
  ];
}

function bl_hostinger_preflight_setting(string $key, string $default=''): array {
  $process = getenv($key);
  if($process !== false && $process !== null && trim((string)$process) !== ''){
    return ['value'=>(string)$process, 'source'=>'process'];
  }
  $private = bl_private_environment();
  if(array_key_exists($key, $private) && trim((string)$private[$key]) !== ''){
    return ['value'=>(string)$private[$key], 'source'=>'private-env'];
  }
  return ['value'=>$default, 'source'=>'default'];
}

function bl_hostinger_preflight_collect_settings(): array {
  return [
    'database'=>bl_hostinger_preflight_setting('BASELINE_DB_PATH'),
    'savedData'=>bl_hostinger_preflight_setting('BASELINE_SAVED_DATA_PATH'),
    'runtime'=>bl_hostinger_preflight_setting('BASELINE_RUNTIME_PATH'),
    'authority'=>bl_hostinger_preflight_setting('BASELINE_RESOURCE_AUTHORITY', 'sqlite'),
  ];
}

function bl_hostinger_preflight_same_filesystem(string $left, string $right): ?bool {
  if(!is_dir($left) || !is_dir($right)) return null;
  $leftStat = @stat($left);
  $rightStat = @stat($right);
  if(!is_array($leftStat) || !is_array($rightStat)) return false;
  return ($leftStat['dev'] ?? null) === ($rightStat['dev'] ?? null);
}

function bl_hostinger_preflight_runtime_report(): array {
  $extensions = [];
  foreach(['pdo_sqlite','json','mbstring','openssl'] as $extension){
    $extensions[$extension] = extension_loaded($extension);
  }
  $functions = [];
  foreach(['random_bytes','flock','rename','chmod','mkdir','json_encode','json_decode'] as $function){
    $functions[$function] = function_exists($function);
  }
  return [
    'phpVersion'=>PHP_VERSION,
    'php8OrNewer'=>version_compare(PHP_VERSION, '8.0.0', '>='),
    'extensions'=>$extensions,
    'functions'=>$functions,
    'fsyncAvailable'=>function_exists('fsync'),
  ];
}

function bl_hostinger_preflight_all_true(array $values): bool {
  foreach($values as $value) if($value !== true) return false;
  return true;
}

function bl_hostinger_cutover_preflight(string $documentRoot, ?array $settings=null): array {
  $documentRoot = bl_hostinger_preflight_normalize($documentRoot, 'document_root');
  if(!is_dir($documentRoot)) throw new BaselineHostingerPreflightException('document_root_not_directory');

  $settings = $settings ?? bl_hostinger_preflight_collect_settings();
  foreach(['database','savedData','runtime','authority'] as $key){
    if(!isset($settings[$key]) || !is_array($settings[$key])){
      throw new BaselineHostingerPreflightException('missing_setting_' . $key);
    }
    $settings[$key]['value'] = trim((string)($settings[$key]['value'] ?? ''));
    $settings[$key]['source'] = trim((string)($settings[$key]['source'] ?? 'default')) ?: 'default';
  }

  $runtimeReport = bl_hostinger_preflight_runtime_report();
  $databasePath = $settings['database']['value'];
  $savedDataPath = $settings['savedData']['value'];
  $runtimePath = $settings['runtime']['value'];
  $authority = strtolower($settings['authority']['value'] !== '' ? $settings['authority']['value'] : 'sqlite');

  $databaseReport = bl_hostinger_preflight_path_report($databasePath, $documentRoot, false);
  $savedDataReport = bl_hostinger_preflight_path_report($savedDataPath, $documentRoot, true);
  $runtimePathReport = bl_hostinger_preflight_path_report($runtimePath, $documentRoot, true);
  $sameFilesystem = bl_hostinger_preflight_same_filesystem($savedDataPath, $runtimePath);

  $databaseInspection = null;
  $databaseInspectionError = null;
  if(($databaseReport['exists'] ?? false) === true){
    try{
      $databaseInspection = bl_external_sqlite_inspect($databasePath, $documentRoot);
    }catch(Throwable $error){
      $databaseInspectionError = $error->getMessage();
    }
  }

  $explicitSettings = [];
  foreach($settings as $key=>$setting) $explicitSettings[$key] = ($setting['source'] ?? 'default') !== 'default';

  $runtimeExtensionsOk = bl_hostinger_preflight_all_true($runtimeReport['extensions']);
  $runtimeFunctionsOk = bl_hostinger_preflight_all_true($runtimeReport['functions']);
  $databasePathOk = bl_hostinger_preflight_all_true([
    $databaseReport['configured'] ?? false,
    $databaseReport['absolute'] ?? false,
    $databaseReport['exists'] ?? false,
    $databaseReport['outsideDocumentRoot'] ?? false,
    $databaseReport['symlinkFree'] ?? false,
    $databaseReport['readable'] ?? false,
    $databaseReport['writable'] ?? false,
    $databaseReport['privatePermissions'] ?? false,
  ]);
  $savedDataPathOk = bl_hostinger_preflight_all_true([
    $savedDataReport['configured'] ?? false,
    $savedDataReport['absolute'] ?? false,
    $savedDataReport['exists'] ?? false,
    $savedDataReport['outsideDocumentRoot'] ?? false,
    $savedDataReport['symlinkFree'] ?? false,
    $savedDataReport['readable'] ?? false,
    $savedDataReport['writable'] ?? false,
    $savedDataReport['privatePermissions'] ?? false,
  ]);
  $runtimePathOk = bl_hostinger_preflight_all_true([
    $runtimePathReport['configured'] ?? false,
    $runtimePathReport['absolute'] ?? false,
    $runtimePathReport['exists'] ?? false,
    $runtimePathReport['outsideDocumentRoot'] ?? false,
    $runtimePathReport['symlinkFree'] ?? false,
    $runtimePathReport['readable'] ?? false,
    $runtimePathReport['writable'] ?? false,
    $runtimePathReport['privatePermissions'] ?? false,
  ]);

  $gates = [
    'php8OrNewer'=>$runtimeReport['php8OrNewer'] === true,
    'requiredExtensionsAvailable'=>$runtimeExtensionsOk,
    'requiredFunctionsAvailable'=>$runtimeFunctionsOk,
    'databasePathExplicit'=>$explicitSettings['database'] ?? false,
    'savedDataPathExplicit'=>$explicitSettings['savedData'] ?? false,
    'runtimePathExplicit'=>$explicitSettings['runtime'] ?? false,
    'authorityExplicit'=>$explicitSettings['authority'] ?? false,
    'authorityIsSqlite'=>$authority === 'sqlite',
    'databasePathSafe'=>$databasePathOk,
    'savedDataPathSafe'=>$savedDataPathOk,
    'runtimePathSafe'=>$runtimePathOk,
    'savedDataAndRuntimeSameFilesystem'=>$sameFilesystem === true,
    'authenticationDatabaseHealthy'=>is_array($databaseInspection) && ($databaseInspection['ok'] ?? false) === true,
  ];
  $ok = !in_array(false, $gates, true);

  return [
    'formatVersion'=>1,
    'kind'=>'hostinger-pre-mirror-cutover-preflight',
    'generatedAt'=>gmdate('Y-m-d\\TH:i:s\\Z'),
    'ok'=>$ok,
    'readyForMirrorPreparation'=>$ok,
    'productionAuthorityChanged'=>false,
    'authority'=>[
      'mode'=>$authority,
      'source'=>$settings['authority']['source'],
    ],
    'settingSources'=>[
      'database'=>$settings['database']['source'],
      'savedData'=>$settings['savedData']['source'],
      'runtime'=>$settings['runtime']['source'],
    ],
    'runtime'=>$runtimeReport,
    'privateEnvironment'=>bl_hostinger_preflight_private_env_report(),
    'paths'=>[
      'documentRoot'=>[
        'pathSha256'=>hash('sha256', $documentRoot),
        'baseName'=>basename($documentRoot),
      ],
      'database'=>$databaseReport,
      'savedData'=>$savedDataReport,
      'runtime'=>$runtimePathReport,
      'savedDataAndRuntimeSameFilesystem'=>$sameFilesystem,
    ],
    'authenticationDatabase'=>$databaseInspection ?? [
      'ok'=>false,
      'error'=>$databaseInspectionError ?? 'database_not_inspected',
    ],
    'gates'=>$gates,
    'decision'=>[
      'preMirrorPreparation'=>$ok ? 'pass' : 'blocked',
      'reason'=>$ok
        ? 'Hostinger pre-mirror runtime, explicit configuration, private-path and authentication-database gates passed. This command did not change authority or write Saved Data.'
        : 'Resolve every failed runtime, explicit-configuration, path, filesystem or authentication-database gate before enabling mirror mode.',
    ],
  ];
}

function bl_hostinger_preflight_write_evidence(string $path, array $evidence): void {
  $path = bl_hostinger_preflight_normalize($path, 'evidence_path');
  $parent = dirname($path);
  if(!is_dir($parent) || !is_writable($parent)) throw new BaselineHostingerPreflightException('evidence_parent_not_writable');
  if(is_link($path)) throw new BaselineHostingerPreflightException('evidence_is_symlink');
  $json = json_encode($evidence, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
  $temporary = $parent . '/.hostinger-preflight-' . bin2hex(random_bytes(10)) . '.tmp';
  $handle = @fopen($temporary, 'xb');
  if($handle === false) throw new BaselineHostingerPreflightException('evidence_create_failed');
  try{
    if(fwrite($handle, $json) !== strlen($json)) throw new BaselineHostingerPreflightException('evidence_write_failed');
    if(!fflush($handle)) throw new BaselineHostingerPreflightException('evidence_flush_failed');
    if(function_exists('fsync') && !fsync($handle)) throw new BaselineHostingerPreflightException('evidence_sync_failed');
  }finally{
    fclose($handle);
  }
  @chmod($temporary, 0600);
  if(!@rename($temporary, $path)){
    @unlink($temporary);
    throw new BaselineHostingerPreflightException('evidence_replace_failed');
  }
  @chmod($path, 0600);
}

function bl_hostinger_preflight_usage(): string {
  return "Usage: php sitewide/migration/hostinger_cutover_preflight.php --document-root=/absolute/public_html [--evidence=/absolute/private/preflight.json]\n";
}

if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){
  $options = getopt('', ['document-root:','evidence:','help']);
  if(isset($options['help'])){
    fwrite(STDOUT, bl_hostinger_preflight_usage());
    exit(0);
  }
  $documentRoot = trim((string)($options['document-root'] ?? ''));
  $evidence = trim((string)($options['evidence'] ?? ''));
  if($documentRoot === ''){
    fwrite(STDERR, bl_hostinger_preflight_usage());
    exit(2);
  }
  try{
    $result = bl_hostinger_cutover_preflight($documentRoot);
    if($evidence !== '') bl_hostinger_preflight_write_evidence($evidence, $result);
    fwrite(STDOUT, json_encode([
      'ok'=>$result['ok'],
      'readyForMirrorPreparation'=>$result['readyForMirrorPreparation'],
      'authority'=>$result['authority'],
      'gates'=>$result['gates'],
      'evidence'=>$evidence,
      'productionAuthorityChanged'=>false,
    ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit($result['ok'] ? 0 : 1);
  }catch(Throwable $error){
    fwrite(STDERR, json_encode([
      'ok'=>false,
      'readyForMirrorPreparation'=>false,
      'error'=>$error->getMessage(),
      'evidence'=>$evidence,
      'productionAuthorityChanged'=>false,
    ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit(1);
  }
}
