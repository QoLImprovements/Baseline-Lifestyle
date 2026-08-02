<?php
declare(strict_types=1);

$base = sys_get_temp_dir() . '/baseline-saved-data-' . bin2hex(random_bytes(8));
$saved = $base . '/private/Saved Data';
$runtime = $base . '/private/Runtime';
putenv('BASELINE_SAVED_DATA_PATH=' . $saved);
putenv('BASELINE_RUNTIME_PATH=' . $runtime);
$_SERVER['DOCUMENT_ROOT'] = $base . '/public_html';

require_once dirname(__DIR__) . '/sitewide/api/saved_data.php';

function bl_contract_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_contract_remove_tree(string $directory): void {
  if(!is_dir($directory)) return;
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
  );
  foreach($iterator as $item){
    if($item->isDir()) rmdir($item->getPathname());
    else unlink($item->getPathname());
  }
  rmdir($directory);
}

try{
  bl_contract_assert(
    str_ends_with(bl_saved_account_index_path(), '/Saved Data/Account Index/accounts.json'),
    'account index path failed'
  );

  $path = bl_saved_user_resource_path(7, 'fitness');
  bl_contract_assert(str_ends_with($path, '/Users/000007/fitness.json'), 'stable user path failed');
  bl_contract_assert(
    str_ends_with(bl_saved_temporary_directory(), '/Runtime/Temporary Files'),
    'runtime temporary directory failed'
  );

  $gameExpectations = [
    'ninja'=>'baseline-realm.json',
    'baseline-realm'=>'baseline-realm.json',
    'pairs'=>'pairs.json',
    'detectword'=>'detect-word.json',
    'make24'=>'make-24.json',
    'trackcoin'=>'track-coin.json',
    'ruleshift'=>'rule-shift.json',
    'dartsfocused'=>'darts-focused.json',
    'meridiangrove'=>'meridian-grove.json',
  ];
  foreach($gameExpectations as $game=>$file){
    bl_contract_assert(
      str_ends_with(bl_saved_game_path(7, $game), '/Users/000007/Games/' . $file),
      'canonical game path failed for ' . $game
    );
  }
  try{
    bl_saved_game_path(7, '../unknown');
    throw new RuntimeException('unknown game path was accepted');
  }catch(InvalidArgumentException $expected){
    bl_contract_assert($expected->getMessage() === 'invalid_game_resource', 'wrong invalid-game error');
  }

  bl_contract_assert(
    str_ends_with(bl_saved_badminton_path(), '/Saved Data/Shared/Badminton/badminton.json'),
    'shared Badminton path failed'
  );

  $first = bl_saved_write($path, ['sessions'=>[]], 0);
  bl_contract_assert($first['revision'] === 1, 'first revision failed');
  bl_contract_assert(bl_saved_read($path)['data']['sessions'] === [], 'read after write failed');

  $second = bl_saved_write($path, ['sessions'=>[['id'=>'one']]], 1);
  bl_contract_assert($second['revision'] === 2, 'second revision failed');

  try{
    bl_saved_write($path, ['sessions'=>[]], 1);
    throw new RuntimeException('stale write was accepted');
  }catch(BaselineSavedDataConflictException $expected){
    bl_contract_assert($expected->getMessage() === 'revision_conflict', 'wrong conflict error');
  }

  $lease = bl_saved_lease_acquire('fitness:7', 7, 10);
  bl_contract_assert(strlen($lease['token']) === 48, 'lease token failed');
  try{
    bl_saved_lease_acquire('fitness:7', 7, 10);
    throw new RuntimeException('competing lease was accepted');
  }catch(BaselineSavedDataLeaseException $expected){
    bl_contract_assert($expected->getMessage() === 'resource_busy', 'wrong lease conflict');
  }
  $renewed = bl_saved_lease_renew('fitness:7', $lease['token'], 20);
  bl_contract_assert($renewed['expiresAt'] >= time() + 19, 'lease renewal failed');
  bl_saved_lease_release('fitness:7', $lease['token']);

  $savedTemps = glob($saved . '/**/baseline-temp-*.tmp', GLOB_BRACE) ?: [];
  $runtimeTemps = glob($runtime . '/Temporary Files/*.tmp') ?: [];
  bl_contract_assert($savedTemps === [], 'temporary file entered Saved Data');
  bl_contract_assert($runtimeTemps === [], 'runtime temporary files remain');
  bl_contract_assert(is_dir($runtime . '/Temporary Files'), 'runtime temporary directory was not created');
  echo "saved-data contract passed\n";
}finally{
  bl_contract_remove_tree($base);
}
