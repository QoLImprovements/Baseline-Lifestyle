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
    'database'=>['value'=>$database,'source'=>'private-env'],
    'savedData'=>['value'=>$savedData,'source'=>'private-env'],
    'runtime'=>['value'=>$runtime,'source'=>'private-env'],
    'authority'=>['value'=>'sqlite','source'=>'private-env'],
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

  $advanced = $settings;
  $advanced['authority']['value'] = 'saved-data';
  $advancedResult = bl_hostinger_cutover_preflight($documentRoot, $advanced);
  bl_hostinger_preflight_assert(($advancedResult['ok'] ?? true) === false, 'saved-data authority incorrectly passed pre-mirror preflight');
  bl_hostinger_preflight_assert(($advancedResult['gates']['authorityIsSqlite'] ?? true) === false, 'saved-data authority gate not blocked');

  $defaulted = $settings;
  $defaulted['authority']['source'] = 'default';
  $defaultedResult = bl_hostinger_cutover_preflight($documentRoot, $defaulted);
  bl_hostinger_preflight_assert(($defaultedResult['ok'] ?? true) === false, 'default authority source incorrectly passed');
  bl_hostinger_preflight_assert(($defaultedResult['gates']['authorityExplicit'] ?? true) === false, 'default authority source gate not blocked');

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
