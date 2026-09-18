<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/hostinger_cutover_preflight.php';

function bl_hostinger_preflight_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

$base = sys_get_temp_dir() . '/baseline-hostinger-preflight-' . bin2hex(random_bytes(8));
$documentRoot = $base . '/public_html';
$privateRoot = $base . '/private';
$database = $privateRoot . '/baseline.sqlite';
$savedData = $privateRoot . '/Saved Data';
$runtime = $privateRoot . '/Runtime';
$privateEnvPath = $base . '/missing-private.env';
putenv('BASELINE_PRIVATE_ENV_PATH=' . $privateEnvPath);

@mkdir($documentRoot, 0700, true);
@mkdir($savedData, 0700, true);
@mkdir($runtime, 0700, true);
@chmod($documentRoot, 0700);
@chmod($privateRoot, 0700);
@chmod($savedData, 0700);
@chmod($runtime, 0700);

try{
  if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_hostinger_preflight_contract');

  $db = new PDO('sqlite:' . $database, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  foreach([
    'users','password_reset_tokens','favourites','binaural_presets','voice_settings','schema_migrations',
    'rate_limit_events','plans','plan_sessions','achievements','games_profiles','badminton_state_store',
  ] as $table){
    $db->exec('CREATE TABLE "' . $table . '" (id INTEGER PRIMARY KEY)');
  }
  $db = null;
  @chmod($database, 0600);

  $settings = [
    'database'=>['value'=>$database,'source'=>'process'],
    'savedData'=>['value'=>$savedData,'source'=>'process'],
    'runtime'=>['value'=>$runtime,'source'=>'process'],
    'authority'=>['value'=>'sqlite','source'=>'process'],
  ];

  $beforeSaved = scandir($savedData);
  $beforeRuntime = scandir($runtime);
  $result = bl_hostinger_cutover_preflight($documentRoot, $settings);

  bl_hostinger_preflight_assert(($result['ok'] ?? false) === true, 'valid preflight did not pass: ' . json_encode($result['gates'] ?? []));
  bl_hostinger_preflight_assert(($result['readyForMirrorPreparation'] ?? false) === true, 'valid preflight not marked ready');
  bl_hostinger_preflight_assert(($result['productionAuthorityChanged'] ?? true) === false, 'preflight claimed authority change');
  bl_hostinger_preflight_assert(($result['authority']['mode'] ?? '') === 'sqlite', 'preflight authority mode mismatch');
  bl_hostinger_preflight_assert(($result['gates']['authorityIsSqlite'] ?? false) === true, 'sqlite authority gate failed');
  bl_hostinger_preflight_assert(($result['gates']['authenticationDatabaseHealthy'] ?? false) === true, 'authentication database health gate failed');
  bl_hostinger_preflight_assert(($result['paths']['savedDataAndRuntimeSameFilesystem'] ?? false) === true, 'same-filesystem gate failed');
  bl_hostinger_preflight_assert(scandir($savedData) === $beforeSaved, 'preflight wrote to Saved Data');
  bl_hostinger_preflight_assert(scandir($runtime) === $beforeRuntime, 'preflight wrote to Runtime');

  $evidenceDir = $privateRoot . '/Migration Evidence';
  @mkdir($evidenceDir, 0700, true);
  @chmod($evidenceDir, 0700);
  $evidencePath = $evidenceDir . '/preflight.json';
  bl_hostinger_preflight_write_evidence($evidencePath, $result, $documentRoot);
  bl_hostinger_preflight_assert(is_file($evidencePath), 'private preflight evidence was not written');
  if(DIRECTORY_SEPARATOR === '/'){
    $mode = fileperms($evidencePath);
    bl_hostinger_preflight_assert($mode !== false && (($mode & 0077) === 0), 'preflight evidence permissions are not private');
  }

  $publicEvidence = $documentRoot . '/preflight.json';
  $publicEvidenceBlocked = false;
  try{
    bl_hostinger_preflight_write_evidence($publicEvidence, $result, $documentRoot);
  }catch(BaselineHostingerPreflightException $error){
    $publicEvidenceBlocked = $error->getMessage() === 'evidence_inside_document_root';
  }
  bl_hostinger_preflight_assert($publicEvidenceBlocked, 'public document-root evidence path was not blocked');
  bl_hostinger_preflight_assert(!is_file($publicEvidence), 'public evidence file was created');

  $advanced = $settings;
  $advanced['authority']['value'] = 'saved-data';
  $advancedResult = bl_hostinger_cutover_preflight($documentRoot, $advanced);
  bl_hostinger_preflight_assert(($advancedResult['ok'] ?? true) === false, 'saved-data authority incorrectly passed pre-mirror preflight');
  bl_hostinger_preflight_assert(($advancedResult['gates']['authorityIsSqlite'] ?? true) === false, 'saved-data authority gate not blocked');

  $privateEnvRequired = $settings;
  $privateEnvRequired['authority']['source'] = 'private-env';
  $privateEnvResult = bl_hostinger_cutover_preflight($documentRoot, $privateEnvRequired);
  bl_hostinger_preflight_assert(($privateEnvResult['ok'] ?? true) === false, 'missing private environment policy proof incorrectly passed');
  bl_hostinger_preflight_assert(($privateEnvResult['gates']['privateEnvironmentPolicyOk'] ?? true) === false, 'private environment policy gate not blocked');

  $defaulted = $settings;
  $defaulted['authority']['source'] = 'default';
  $defaultedResult = bl_hostinger_cutover_preflight($documentRoot, $defaulted);
  bl_hostinger_preflight_assert(($defaultedResult['ok'] ?? true) === false, 'default authority source incorrectly passed');
  bl_hostinger_preflight_assert(($defaultedResult['gates']['authorityExplicit'] ?? true) === false, 'default authority source gate not blocked');

  @chmod($privateRoot, 0755);
  $publicParentResult = bl_hostinger_cutover_preflight($documentRoot, $settings);
  bl_hostinger_preflight_assert(($publicParentResult['ok'] ?? true) === false, 'non-private database parent directory incorrectly passed');
  bl_hostinger_preflight_assert(($publicParentResult['gates']['databasePathSafe'] ?? true) === false, 'database parent permission gate not blocked');
  @chmod($privateRoot, 0700);

  $unsafeSaved = $documentRoot . '/Saved Data';
  @mkdir($unsafeSaved, 0700, true);
  @chmod($unsafeSaved, 0700);
  $unsafe = $settings;
  $unsafe['savedData']['value'] = $unsafeSaved;
  $unsafeResult = bl_hostinger_cutover_preflight($documentRoot, $unsafe);
  bl_hostinger_preflight_assert(($unsafeResult['ok'] ?? true) === false, 'document-root Saved Data path incorrectly passed');
  bl_hostinger_preflight_assert(($unsafeResult['gates']['savedDataPathSafe'] ?? true) === false, 'unsafe Saved Data path gate not blocked');

  echo "Hostinger cutover preflight contract passed\n";
}finally{
  putenv('BASELINE_PRIVATE_ENV_PATH');
  if(is_dir($base)){
    $iterator = new RecursiveIteratorIterator(
      new RecursiveDirectoryIterator($base, FilesystemIterator::SKIP_DOTS),
      RecursiveIteratorIterator::CHILD_FIRST
    );
    foreach($iterator as $item){
      $path = $item->getPathname();
      if($item->isLink() || $item->isFile()) @unlink($path);
      elseif($item->isDir()) @rmdir($path);
    }
    @rmdir($base);
  }
}
