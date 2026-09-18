<?php
declare(strict_types=1);

require_once __DIR__ . '/hostinger_cutover_preflight.php';
require_once dirname(__DIR__) . '/api/saved_data.php';

final class BaselineSavedDataLiveHealthException extends RuntimeException {}

function bl_saved_data_live_allowed_directory(string $relative): bool {
  if(in_array($relative, ['Account Index','Users','Shared','Shared/Badminton'], true)) return true;
  if(preg_match('#^Users/[0-9]{6}$#', $relative) === 1) return true;
  return preg_match('#^Users/[0-9]{6}/Games$#', $relative) === 1;
}

function bl_saved_data_live_allowed_file(string $relative): bool {
  if($relative === 'Account Index/accounts.json') return true;
  if($relative === 'Shared/Badminton/badminton.json') return true;
  if(preg_match('#^Users/[0-9]{6}/(account|favourites|binaural|fitness|fitness-routine|voice|food|skincare)\.json$#', $relative) === 1){
    return true;
  }
  return preg_match(
    '#^Users/[0-9]{6}/Games/(baseline-realm|pairs|detect-word|make-24|track-coin|rule-shift|darts-focused|meridian-grove|badminton-focused)\.json$#',
    $relative
  ) === 1;
}

function bl_saved_data_live_private_permissions(string $path): ?bool {
  if(DIRECTORY_SEPARATOR !== '/') return null;
  $permissions = fileperms($path);
  if($permissions === false) return false;
  return (($permissions & 0077) === 0);
}

function bl_saved_data_live_scan(string $root): array {
  if(!is_dir($root) || is_link($root)) throw new BaselineSavedDataLiveHealthException('saved_data_root_invalid');

  $issues = [];
  $files = [];
  $resourceCount = 0;
  $directoryCount = 0;

  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::SELF_FIRST
  );

  foreach($iterator as $item){
    $path = $item->getPathname();
    $relative = str_replace('\\', '/', substr($path, strlen($root) + 1));

    if($item->isLink()){
      $issues[] = ['check'=>'symlink','path'=>$relative];
      continue;
    }

    if($item->isDir()){
      $directoryCount++;
      if(!bl_saved_data_live_allowed_directory($relative)){
        $issues[] = ['check'=>'unexpected_directory','path'=>$relative];
      }
      $private = bl_saved_data_live_private_permissions($path);
      if($private === false){
        $issues[] = ['check'=>'directory_permissions','path'=>$relative];
      }
      continue;
    }

    if(!$item->isFile()){
      $issues[] = ['check'=>'unexpected_filesystem_entry','path'=>$relative];
      continue;
    }

    if(!bl_saved_data_live_allowed_file($relative)){
      $issues[] = ['check'=>'unexpected_file','path'=>$relative];
      continue;
    }

    $private = bl_saved_data_live_private_permissions($path);
    if($private === false){
      $issues[] = ['check'=>'file_permissions','path'=>$relative];
    }

    $size = filesize($path);
    if($size === false || $size > BL_MAX_JSON_BYTES){
      $issues[] = ['check'=>'resource_size','path'=>$relative];
      continue;
    }

    $raw = file_get_contents($path);
    if($raw === false){
      $issues[] = ['check'=>'resource_read','path'=>$relative];
      continue;
    }

    try{
      $decoded = json_decode($raw, true, BL_SAVED_MAX_DEPTH, JSON_THROW_ON_ERROR);
    }catch(Throwable $error){
      $issues[] = ['check'=>'resource_json','path'=>$relative];
      continue;
    }

    if(!is_array($decoded)){
      $issues[] = ['check'=>'resource_envelope','path'=>$relative,'detail'=>'not_object'];
      continue;
    }
    if((int)($decoded['schemaVersion'] ?? 0) !== BL_SAVED_SCHEMA_VERSION){
      $issues[] = ['check'=>'resource_envelope','path'=>$relative,'detail'=>'schema_version'];
    }
    if(!isset($decoded['revision']) || !is_int($decoded['revision']) || $decoded['revision'] < 0){
      $issues[] = ['check'=>'resource_envelope','path'=>$relative,'detail'=>'revision'];
    }
    if(!array_key_exists('data', $decoded) || !is_array($decoded['data'])){
      $issues[] = ['check'=>'resource_envelope','path'=>$relative,'detail'=>'data'];
    }
    if(array_key_exists('updatedAt', $decoded) && $decoded['updatedAt'] !== null && !is_string($decoded['updatedAt'])){
      $issues[] = ['check'=>'resource_envelope','path'=>$relative,'detail'=>'updated_at'];
    }

    $hash = hash_file('sha256', $path);
    if($hash !== false) $files[$relative] = $hash;
    $resourceCount++;
  }

  ksort($files);
  $hashLines = [];
  foreach($files as $relative=>$hash) $hashLines[] = $relative . ':' . $hash;

  return [
    'ok'=>$issues === [],
    'resourceCount'=>$resourceCount,
    'directoryCount'=>$directoryCount,
    'treeSha256'=>hash('sha256', implode("\n", $hashLines)),
    'issues'=>$issues,
  ];
}

function bl_verify_saved_data_live_health(string $documentRoot, ?array $settings=null): array {
  $documentRoot = bl_hostinger_preflight_normalize($documentRoot, 'document_root');
  if(!is_dir($documentRoot)) throw new BaselineSavedDataLiveHealthException('document_root_not_directory');

  $settings = $settings ?? bl_hostinger_preflight_collect_settings();
  $explicit = bl_cutover_package_explicit_settings($settings);
  $authority = strtolower(trim((string)($settings['authority']['value'] ?? '')));
  $database = trim((string)($settings['database']['value'] ?? ''));
  $savedData = trim((string)($settings['savedData']['value'] ?? ''));
  $runtime = trim((string)($settings['runtime']['value'] ?? ''));

  $privateEnvironment = bl_hostinger_preflight_private_env_report();
  $usesPrivateEnvironment = false;
  foreach($settings as $setting){
    if(is_array($setting) && ($setting['source'] ?? '') === 'private-env') $usesPrivateEnvironment = true;
  }
  $privateEnvironmentPolicyOk = !$usesPrivateEnvironment
    || (($privateEnvironment['present'] ?? false) === true && ($privateEnvironment['policyOk'] ?? false) === true);

  $savedReport = bl_hostinger_preflight_path_report($savedData, $documentRoot, true);
  $runtimeReport = bl_hostinger_preflight_path_report($runtime, $documentRoot, true);
  $savedPathSafe = bl_hostinger_preflight_all_true([
    $savedReport['configured'] ?? false,
    $savedReport['absolute'] ?? false,
    $savedReport['exists'] ?? false,
    $savedReport['outsideDocumentRoot'] ?? false,
    $savedReport['symlinkFree'] ?? false,
    $savedReport['readable'] ?? false,
    $savedReport['writable'] ?? false,
    $savedReport['privatePermissions'] ?? false,
  ]);
  $runtimePathSafe = bl_hostinger_preflight_all_true([
    $runtimeReport['configured'] ?? false,
    $runtimeReport['absolute'] ?? false,
    $runtimeReport['exists'] ?? false,
    $runtimeReport['outsideDocumentRoot'] ?? false,
    $runtimeReport['symlinkFree'] ?? false,
    $runtimeReport['readable'] ?? false,
    $runtimeReport['writable'] ?? false,
    $runtimeReport['privatePermissions'] ?? false,
  ]);

  $databaseInspection = null;
  $databaseError = null;
  if($database !== ''){
    try{
      $databaseInspection = bl_external_sqlite_inspect($database, $documentRoot);
    }catch(Throwable $error){
      $databaseError = $error->getMessage();
    }
  }

  $sameFilesystem = null;
  if($savedData !== '' && $runtime !== ''){
    $sameFilesystem = bl_hostinger_preflight_same_filesystem($savedData, $runtime);
  }

  $scan = ['ok'=>false,'resourceCount'=>0,'directoryCount'=>0,'treeSha256'=>'','issues'=>[]];
  if($savedPathSafe){
    try{
      $scan = bl_saved_data_live_scan($savedData);
    }catch(Throwable $error){
      $scan['issues'][] = ['check'=>'scan','error'=>$error->getMessage()];
    }
  }

  $gates = [
    'databasePathExplicit'=>$explicit['database'] ?? false,
    'savedDataPathExplicit'=>$explicit['savedData'] ?? false,
    'runtimePathExplicit'=>$explicit['runtime'] ?? false,
    'authorityExplicit'=>$explicit['authority'] ?? false,
    'privateEnvironmentPolicyOk'=>$privateEnvironmentPolicyOk,
    'authorityIsSavedData'=>$authority === 'saved-data',
    'authenticationDatabaseHealthy'=>is_array($databaseInspection) && ($databaseInspection['ok'] ?? false) === true,
    'savedDataPathSafe'=>$savedPathSafe,
    'runtimePathSafe'=>$runtimePathSafe,
    'savedDataAndRuntimeSameFilesystem'=>$sameFilesystem === true,
    'savedDataTreeHealthy'=>($scan['ok'] ?? false) === true,
  ];
  $ok = !in_array(false, $gates, true);

  return [
    'ok'=>$ok,
    'healthySavedDataMode'=>$ok,
    'productionAuthorityChanged'=>false,
    'authority'=>[
      'mode'=>$authority,
      'source'=>$settings['authority']['source'] ?? 'default',
    ],
    'gates'=>$gates,
    'savedData'=>[
      'resourceCount'=>$scan['resourceCount'] ?? 0,
      'directoryCount'=>$scan['directoryCount'] ?? 0,
      'treeSha256'=>$scan['treeSha256'] ?? '',
      'issues'=>$scan['issues'] ?? [],
    ],
    'authenticationDatabase'=>[
      'ok'=>is_array($databaseInspection) && ($databaseInspection['ok'] ?? false) === true,
      'error'=>$databaseError,
      'contentSha256'=>is_array($databaseInspection) ? ($databaseInspection['database']['contentSha256'] ?? '') : '',
      'counts'=>is_array($databaseInspection) ? ($databaseInspection['counts'] ?? []) : [],
    ],
    'decision'=>[
      'liveSavedDataMode'=>$ok ? 'healthy' : 'blocked',
      'reason'=>$ok
        ? 'Saved Data authority is explicit, private storage is structurally healthy and authentication SQLite remains healthy. This verification is read-only.'
        : 'Saved Data live-mode health failed. Stop further writes if integrity is in doubt and follow the Phase 5 rollback procedure.',
    ],
  ];
}

function bl_saved_data_live_health_usage(): string {
  return "Usage: php sitewide/migration/verify_saved_data_live_health.php --document-root=/absolute/public_html [--evidence=/absolute/private/live-health.json]\n";
}

if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){
  $options = getopt('', ['document-root:','evidence:','help']);
  if(isset($options['help'])){
    fwrite(STDOUT, bl_saved_data_live_health_usage());
    exit(0);
  }
  $documentRoot = trim((string)($options['document-root'] ?? ''));
  $evidence = trim((string)($options['evidence'] ?? ''));
  if($documentRoot === ''){
    fwrite(STDERR, bl_saved_data_live_health_usage());
    exit(2);
  }

  try{
    $result = bl_verify_saved_data_live_health($documentRoot);
    if($evidence !== '') bl_hostinger_preflight_write_evidence($evidence, $result, $documentRoot);
    fwrite(STDOUT, json_encode([
      'ok'=>$result['ok'],
      'healthySavedDataMode'=>$result['healthySavedDataMode'],
      'authority'=>$result['authority'],
      'gates'=>$result['gates'],
      'resourceCount'=>$result['savedData']['resourceCount'],
      'treeSha256'=>$result['savedData']['treeSha256'],
      'evidence'=>$evidence,
      'productionAuthorityChanged'=>false,
    ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit($result['ok'] ? 0 : 1);
  }catch(Throwable $error){
    $failure = [
      'ok'=>false,
      'healthySavedDataMode'=>false,
      'productionAuthorityChanged'=>false,
      'error'=>$error->getMessage(),
    ];
    if($evidence !== ''){
      try{ bl_hostinger_preflight_write_evidence($evidence, $failure, $documentRoot); }catch(Throwable $ignored){}
    }
    fwrite(STDERR, json_encode($failure, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit(1);
  }
}
