<?php
declare(strict_types=1);

require_once __DIR__ . '/hostinger_cutover_preflight.php';
require_once __DIR__ . '/verify_saved_data_cutover.php';
require_once __DIR__ . '/build_sqlite_rollback_copy.php';

final class BaselineSavedDataCutoverPackageException extends RuntimeException {}

function bl_cutover_package_value_fingerprint($value): string {
  if($value === null) return 'n:';
  if(is_int($value)) return 'i:' . $value;
  if(is_float($value)) return 'f:' . sprintf('%.17g', $value);
  if(is_bool($value)) return 'b:' . ($value ? '1' : '0');
  return 's:' . base64_encode((string)$value);
}

function bl_cutover_package_database_fingerprint(string $path): array {
  $db = bl_external_sqlite_open_readonly($path);
  $schemaRows = $db->query(
    "SELECT type,name,tbl_name,COALESCE(sql,'') AS sql
     FROM sqlite_master
     WHERE name NOT LIKE 'sqlite_%'
     ORDER BY type,name,tbl_name,sql"
  )->fetchAll() ?: [];

  $schemaLines = [];
  foreach($schemaRows as $row){
    $schemaLines[] = implode('|', [
      (string)($row['type'] ?? ''),
      (string)($row['name'] ?? ''),
      (string)($row['tbl_name'] ?? ''),
      base64_encode((string)($row['sql'] ?? '')),
    ]);
  }

  $tables = array_values(array_map(
    'strval',
    $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
      ->fetchAll(PDO::FETCH_COLUMN) ?: []
  ));

  $tableEvidence = [];
  foreach($tables as $table){
    if(preg_match('/^[A-Za-z0-9_]{1,96}$/', $table) !== 1){
      throw new BaselineSavedDataCutoverPackageException('unsafe_table_name');
    }
    $quoted = '"' . str_replace('"', '""', $table) . '"';
    $columns = $db->query('PRAGMA table_info(' . $quoted . ')')->fetchAll() ?: [];
    $columnNames = array_values(array_map(static fn(array $row): string => (string)$row['name'], $columns));
    if($columnNames === []) throw new BaselineSavedDataCutoverPackageException('table_without_columns:' . $table);

    $rowHashes = [];
    $statement = $db->query('SELECT * FROM ' . $quoted);
    while(($row = $statement->fetch(PDO::FETCH_ASSOC)) !== false){
      $parts = [];
      foreach($columnNames as $column){
        $parts[] = base64_encode($column) . '=' . bl_cutover_package_value_fingerprint($row[$column] ?? null);
      }
      $rowHashes[] = hash('sha256', implode("\n", $parts));
    }
    sort($rowHashes, SORT_STRING);
    $tableEvidence[$table] = [
      'rowCount'=>count($rowHashes),
      'sha256'=>hash('sha256', implode("\n", $rowHashes)),
    ];
  }
  $db = null;

  $fingerprintLines = ['schema:' . hash('sha256', implode("\n", $schemaLines))];
  foreach($tableEvidence as $table=>$evidence){
    $fingerprintLines[] = $table . ':' . $evidence['rowCount'] . ':' . $evidence['sha256'];
  }

  return [
    'sha256'=>hash('sha256', implode("\n", $fingerprintLines)),
    'schemaSha256'=>hash('sha256', implode("\n", $schemaLines)),
    'tables'=>$tableEvidence,
  ];
}

function bl_cutover_package_snapshot_gate(string $path, string $documentRoot): array {
  $report = bl_hostinger_preflight_path_report($path, $documentRoot, false);
  $ok = bl_hostinger_preflight_all_true([
    $report['configured'] ?? false,
    $report['absolute'] ?? false,
    $report['exists'] ?? false,
    $report['outsideDocumentRoot'] ?? false,
    $report['symlinkFree'] ?? false,
    $report['readable'] ?? false,
    $report['privatePermissions'] ?? false,
    $report['parentPrivatePermissions'] ?? false,
  ]);
  return ['ok'=>$ok, 'report'=>$report];
}

function bl_cutover_package_output_parent_gate(string $path, string $documentRoot): array {
  $path = bl_hostinger_preflight_normalize($path, 'rollback_output');
  if(file_exists($path) || is_link($path)){
    return ['ok'=>false, 'error'=>'rollback_output_must_not_exist'];
  }
  $parent = dirname($path);
  $resolvedRoot = realpath($documentRoot) ?: $documentRoot;
  $resolvedParent = realpath($parent) ?: $parent;
  $ok = is_dir($parent)
    && is_writable($parent)
    && !bl_hostinger_preflight_symlink_ancestor($parent)
    && !bl_hostinger_preflight_within($resolvedParent, $resolvedRoot)
    && (DIRECTORY_SEPARATOR !== '/' || bl_hostinger_preflight_private_permissions($parent) === true);
  return [
    'ok'=>$ok,
    'parent'=>[
      'baseName'=>basename($parent),
      'pathSha256'=>hash('sha256', $parent),
      'exists'=>is_dir($parent),
      'writable'=>is_dir($parent) && is_writable($parent),
      'outsideDocumentRoot'=>!bl_hostinger_preflight_within($resolvedParent, $resolvedRoot),
      'symlinkFree'=>!bl_hostinger_preflight_symlink_ancestor($parent),
      'privatePermissions'=>is_dir($parent) ? bl_hostinger_preflight_private_permissions($parent) : false,
    ],
  ];
}

function bl_cutover_package_explicit_settings(array $settings): array {
  $explicit = [];
  foreach(['database','savedData','runtime','authority'] as $key){
    $setting = $settings[$key] ?? null;
    $explicit[$key] = is_array($setting)
      && trim((string)($setting['value'] ?? '')) !== ''
      && trim((string)($setting['source'] ?? 'default')) !== 'default';
  }
  return $explicit;
}

function bl_prepare_saved_data_cutover(
  string $databaseSnapshot,
  string $savedData,
  string $rollbackOutput,
  string $documentRoot,
  ?array $settings=null
): array {
  $documentRoot = bl_hostinger_preflight_normalize($documentRoot, 'document_root');
  if(!is_dir($documentRoot)) throw new BaselineSavedDataCutoverPackageException('document_root_not_directory');

  $databaseSnapshot = bl_hostinger_preflight_normalize($databaseSnapshot, 'database_snapshot');
  $savedData = bl_hostinger_preflight_normalize($savedData, 'saved_data');
  $rollbackOutput = bl_hostinger_preflight_normalize($rollbackOutput, 'rollback_output');

  $settings = $settings ?? bl_hostinger_preflight_collect_settings();
  $explicit = bl_cutover_package_explicit_settings($settings);
  $authority = strtolower(trim((string)($settings['authority']['value'] ?? '')));
  $configuredDatabase = trim((string)($settings['database']['value'] ?? ''));
  $configuredSavedData = trim((string)($settings['savedData']['value'] ?? ''));
  $configuredRuntime = trim((string)($settings['runtime']['value'] ?? ''));

  $privateEnvironment = bl_hostinger_preflight_private_env_report();
  $usesPrivateEnvironment = false;
  foreach($settings as $setting){
    if(is_array($setting) && ($setting['source'] ?? '') === 'private-env') $usesPrivateEnvironment = true;
  }
  $privateEnvironmentPolicyOk = !$usesPrivateEnvironment
    || (($privateEnvironment['present'] ?? false) === true && ($privateEnvironment['policyOk'] ?? false) === true);

  $configuredSavedDataMatches = false;
  try{
    $configuredSavedDataMatches = bl_hostinger_preflight_normalize($configuredSavedData, 'configured_saved_data') === $savedData;
  }catch(Throwable $ignored){}

  $activeDatabaseReport = null;
  $activeDatabaseError = null;
  if($configuredDatabase !== ''){
    try{
      $activeDatabaseReport = bl_external_sqlite_inspect($configuredDatabase, $documentRoot);
    }catch(Throwable $error){
      $activeDatabaseError = $error->getMessage();
    }
  }

  $snapshotGate = bl_cutover_package_snapshot_gate($databaseSnapshot, $documentRoot);
  $rollbackParentGate = bl_cutover_package_output_parent_gate($rollbackOutput, $documentRoot);

  $runtimePathSafe = false;
  if($configuredRuntime !== ''){
    $runtimeReport = bl_hostinger_preflight_path_report($configuredRuntime, $documentRoot, true);
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
  }

  $preGates = [
    'databasePathExplicit'=>$explicit['database'] ?? false,
    'savedDataPathExplicit'=>$explicit['savedData'] ?? false,
    'runtimePathExplicit'=>$explicit['runtime'] ?? false,
    'authorityExplicit'=>$explicit['authority'] ?? false,
    'privateEnvironmentPolicyOk'=>$privateEnvironmentPolicyOk,
    'authorityIsMirror'=>$authority === 'mirror',
    'configuredSavedDataMatchesArgument'=>$configuredSavedDataMatches,
    'activeAuthenticationDatabaseHealthy'=>is_array($activeDatabaseReport) && ($activeDatabaseReport['ok'] ?? false) === true,
    'runtimePathSafe'=>$runtimePathSafe,
    'snapshotPathSafe'=>$snapshotGate['ok'] === true,
    'rollbackOutputParentSafe'=>$rollbackParentGate['ok'] === true,
    'snapshotDiffersFromActiveDatabase'=>realpath($databaseSnapshot) !== false
      && realpath($configuredDatabase) !== false
      && realpath($databaseSnapshot) !== realpath($configuredDatabase),
  ];
  if(in_array(false, $preGates, true)){
    return [
      'ok'=>false,
      'readyForSavedDataMode'=>false,
      'productionAuthorityChanged'=>false,
      'authority'=>['mode'=>$authority,'source'=>$settings['authority']['source'] ?? 'default'],
      'gates'=>$preGates,
      'error'=>$activeDatabaseError,
      'decision'=>[
        'cutover'=>'blocked',
        'reason'=>'Resolve every explicit-configuration, mirror-authority, private-path, authentication-database, runtime or snapshot gate before preparing the final cutover package.',
      ],
    ];
  }

  $activeFingerprintBefore = bl_cutover_package_database_fingerprint($configuredDatabase);
  $snapshotFingerprint = bl_cutover_package_database_fingerprint($databaseSnapshot);
  $snapshotHashBefore = hash_file('sha256', $databaseSnapshot);
  $treeHashBefore = bl_cutover_tree_hash($savedData);

  if(!hash_equals($activeFingerprintBefore['sha256'], $snapshotFingerprint['sha256'])){
    return [
      'ok'=>false,
      'readyForSavedDataMode'=>false,
      'productionAuthorityChanged'=>false,
      'authority'=>['mode'=>$authority,'source'=>$settings['authority']['source'] ?? 'default'],
      'gates'=>array_merge($preGates, ['snapshotMatchesLiveDatabase'=>false]),
      'databaseFingerprints'=>[
        'activeSha256'=>$activeFingerprintBefore['sha256'],
        'snapshotSha256'=>$snapshotFingerprint['sha256'],
      ],
      'decision'=>[
        'cutover'=>'blocked',
        'reason'=>'The final SQLite snapshot is not an exact data/schema match for the live authentication/application database. Create a fresh consistent snapshot during the write-free window.',
      ],
    ];
  }

  $verification = bl_verify_saved_data_cutover($databaseSnapshot, $savedData);
  if(($verification['ok'] ?? false) !== true || ($verification['readyForSavedDataMode'] ?? false) !== true){
    return [
      'ok'=>false,
      'readyForSavedDataMode'=>false,
      'productionAuthorityChanged'=>false,
      'authority'=>['mode'=>$authority,'source'=>$settings['authority']['source'] ?? 'default'],
      'gates'=>array_merge($preGates, [
        'snapshotMatchesLiveDatabase'=>true,
        'semanticSavedDataVerification'=>false,
      ]),
      'verification'=>$verification,
      'decision'=>[
        'cutover'=>'blocked',
        'reason'=>'Saved Data does not semantically match the final mirror-mode SQLite snapshot.',
      ],
    ];
  }

  $rollback = bl_build_sqlite_rollback_copy($databaseSnapshot, $savedData, $rollbackOutput);
  $rollbackInspection = bl_external_sqlite_inspect($rollbackOutput, $documentRoot);

  $activeFingerprintAfter = bl_cutover_package_database_fingerprint($configuredDatabase);
  $snapshotHashAfter = hash_file('sha256', $databaseSnapshot);
  $treeHashAfter = bl_cutover_tree_hash($savedData);

  $stabilityGates = [
    'snapshotMatchesLiveDatabase'=>true,
    'semanticSavedDataVerification'=>true,
    'rollbackCopyBuilt'=>($rollback['ok'] ?? false) === true,
    'rollbackCopyHealthy'=>($rollbackInspection['ok'] ?? false) === true,
    'liveDatabaseStableDuringPreparation'=>hash_equals($activeFingerprintBefore['sha256'], $activeFingerprintAfter['sha256']),
    'snapshotStableDuringPreparation'=>is_string($snapshotHashBefore)
      && is_string($snapshotHashAfter)
      && hash_equals($snapshotHashBefore, $snapshotHashAfter),
    'savedDataStableDuringPreparation'=>hash_equals($treeHashBefore, $treeHashAfter),
  ];
  $gates = array_merge($preGates, $stabilityGates);
  $ok = !in_array(false, $gates, true);

  if(!$ok && is_file($rollbackOutput)) @unlink($rollbackOutput);

  return [
    'ok'=>$ok,
    'readyForSavedDataMode'=>$ok,
    'productionAuthorityChanged'=>false,
    'authority'=>['mode'=>$authority,'source'=>$settings['authority']['source'] ?? 'default'],
    'gates'=>$gates,
    'databaseFingerprints'=>[
      'activeBeforeSha256'=>$activeFingerprintBefore['sha256'],
      'activeAfterSha256'=>$activeFingerprintAfter['sha256'],
      'snapshotSha256'=>$snapshotFingerprint['sha256'],
      'schemaSha256'=>$snapshotFingerprint['schemaSha256'],
      'tableCounts'=>array_map(static fn(array $table): int => (int)$table['rowCount'], $snapshotFingerprint['tables']),
    ],
    'savedData'=>[
      'treeSha256Before'=>$treeHashBefore,
      'treeSha256After'=>$treeHashAfter,
      'resourceCount'=>$verification['savedData']['resourceCount'] ?? 0,
      'nativeResourceCount'=>$verification['savedData']['nativeResourceCount'] ?? 0,
      'nativeResources'=>$verification['savedData']['nativeResources'] ?? [],
    ],
    'verification'=>[
      'ok'=>$verification['ok'] ?? false,
      'errors'=>$verification['errors'] ?? [],
      'counts'=>$verification['counts'] ?? [],
    ],
    'rollback'=>[
      'created'=>$ok,
      'sha256'=>$ok ? ($rollback['outputSha256'] ?? '') : '',
      'sizeBytes'=>$ok ? ($rollback['outputSizeBytes'] ?? 0) : 0,
      'counts'=>$rollback['counts'] ?? [],
      'savedDataResourcesPreservedOutsideSQLite'=>$rollback['savedDataResourcesPreservedOutsideSQLite'] ?? [],
      'optionalFitnessSectionsNotRepresentedInSQLite'=>$rollback['optionalFitnessSectionsNotRepresentedInSQLite'] ?? [],
    ],
    'decision'=>[
      'cutover'=>$ok ? 'ready' : 'blocked',
      'reason'=>$ok
        ? 'Mirror authority, final SQLite snapshot, Saved Data semantics, rollback copy and write-free stability gates passed. This command did not change production authority.'
        : 'The final cutover package became unstable or invalid. Remain in mirror mode, discard the rollback output and repeat the write-free preparation.',
    ],
  ];
}

function bl_cutover_package_usage(): string {
  return "Usage: php sitewide/migration/prepare_saved_data_cutover.php --database-snapshot=/absolute/private/final.sqlite --saved-data=/absolute/private/Saved\ Data --rollback-output=/absolute/private/rollback-current.sqlite --evidence=/absolute/private/cutover-package.json --document-root=/absolute/public_html\n";
}

if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){
  $options = getopt('', ['database-snapshot:','saved-data:','rollback-output:','evidence:','document-root:','help']);
  if(isset($options['help'])){
    fwrite(STDOUT, bl_cutover_package_usage());
    exit(0);
  }

  foreach(['database-snapshot','saved-data','rollback-output','evidence','document-root'] as $required){
    if(trim((string)($options[$required] ?? '')) === ''){
      fwrite(STDERR, bl_cutover_package_usage());
      exit(2);
    }
  }

  $evidence = trim((string)$options['evidence']);
  $documentRoot = trim((string)$options['document-root']);
  try{
    $result = bl_prepare_saved_data_cutover(
      (string)$options['database-snapshot'],
      (string)$options['saved-data'],
      (string)$options['rollback-output'],
      $documentRoot
    );
    bl_hostinger_preflight_write_evidence($evidence, $result, $documentRoot);
    fwrite(STDOUT, json_encode([
      'ok'=>$result['ok'],
      'readyForSavedDataMode'=>$result['readyForSavedDataMode'],
      'authority'=>$result['authority'],
      'gates'=>$result['gates'],
      'evidence'=>$evidence,
      'productionAuthorityChanged'=>false,
    ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit($result['ok'] ? 0 : 1);
  }catch(Throwable $error){
    $failure = [
      'ok'=>false,
      'readyForSavedDataMode'=>false,
      'productionAuthorityChanged'=>false,
      'error'=>$error->getMessage(),
    ];
    try{ bl_hostinger_preflight_write_evidence($evidence, $failure, $documentRoot); }catch(Throwable $ignored){}
    fwrite(STDERR, json_encode($failure, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR) . "\n");
    exit(1);
  }
}
