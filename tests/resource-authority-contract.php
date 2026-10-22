<?php
declare(strict_types=1);

$base = sys_get_temp_dir() . '/baseline-resource-authority-' . bin2hex(random_bytes(8));
$saved = $base . '/private/Saved Data';
$runtime = $base . '/private/Runtime';
putenv('BASELINE_SAVED_DATA_PATH=' . $saved);
putenv('BASELINE_RUNTIME_PATH=' . $runtime);
putenv('BASELINE_RESOURCE_AUTHORITY=saved-data');
$_SERVER['DOCUMENT_ROOT'] = $base . '/public_html';

require_once dirname(__DIR__) . '/sitewide/api/account_resource.php';
require_once dirname(__DIR__) . '/systems/baseline-fitness/api/fitness_resource.php';
require_once dirname(__DIR__) . '/systems/baseline-recreation/api/game_profile_rules.php';

function bl_resource_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_resource_test_remove(string $directory): void {
  if(!is_dir($directory)) return;
  $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS), RecursiveIteratorIterator::CHILD_FIRST);
  foreach($iterator as $item){
    if($item->isDir()) @rmdir($item->getPathname());
    else @unlink($item->getPathname());
  }
  @rmdir($directory);
}

try{
  bl_resource_test_assert(bl_resource_authority() === 'saved-data', 'authority mode failed');
  bl_resource_test_assert(str_ends_with(bl_saved_user_resource_path(7, 'fitness-routine'), '/Users/000007/fitness-routine.json'), 'fitness routine path failed');

  $path = bl_saved_user_resource_path(7, 'favourites');
  $first = bl_resource_file_mutate($path, ['items'=>[]], static function(array $data): array {
    $data['items'][] = ['app'=>'food','recipeId'=>'one','createdAt'=>'2026-08-02T12:00:00Z'];
    return $data;
  });
  bl_resource_test_assert(($first['revision'] ?? 0) === 1, 'first mutation failed');
  $second = bl_resource_file_mutate($path, ['items'=>[]], static function(array $data): array {
    $data['items'][] = ['app'=>'skincare','recipeId'=>'two','createdAt'=>'2026-08-02T12:01:00Z'];
    return $data;
  }, 1);
  bl_resource_test_assert(($second['revision'] ?? 0) === 2, 'second mutation failed');
  try{
    bl_resource_file_mutate($path, ['items'=>[]], static fn(array $data): array => $data, 1);
    throw new RuntimeException('stale mutation accepted');
  }catch(BaselineSavedDataConflictException $expected){
    bl_resource_test_assert($expected->getMessage() === 'revision_conflict', 'wrong mutation conflict');
  }
  bl_resource_file_delete($path, 2);
  bl_resource_test_assert(!is_file($path), 'resource deletion failed');

  $tombstoneStart = bl_resource_file_replace($path, [
    'items'=>[['app'=>'food','recipeId'=>'three','createdAt'=>'2026-08-02T12:02:00Z']],
  ], 0);
  bl_resource_test_assert(($tombstoneStart['revision'] ?? 0) === 1, 'tombstone setup failed');
  $tombstone = bl_resource_file_delete_if_empty(
    $path,
    ['items'=>[]],
    static fn(array $data): bool => ($data['items'] ?? []) === [],
    1
  );
  bl_resource_test_assert(is_file($path), 'saved-data empty state lost its revision tombstone');
  bl_resource_test_assert(($tombstone['revision'] ?? 0) === 2, 'empty-state revision did not advance');
  bl_resource_test_assert((bl_resource_file_read($path, ['items'=>[]])['data']['items'] ?? null) === [], 'empty-state tombstone is not authoritative');
  try{
    bl_resource_file_replace($path, ['items'=>[['app'=>'food','recipeId'=>'stale']]], 0);
    throw new RuntimeException('revision-zero ABA write was accepted after delete');
  }catch(BaselineSavedDataConflictException $expected){
    bl_resource_test_assert($expected->getMessage() === 'revision_conflict', 'wrong tombstone conflict');
  }

  $user = [
    'id'=>7,
    'name'=>'Peter',
    'email'=>'peter@example.test',
    'pass_hash'=>'must-never-export',
    'google_sub'=>'must-never-export',
    'auth_provider'=>'password',
    'created_at'=>1700000000,
    'updated_at'=>1700000100,
    'last_login_at'=>1700000200,
  ];
  bl_account_resource_sync($user);
  $accountRaw = file_get_contents(bl_saved_user_resource_path(7, 'account'));
  bl_resource_test_assert(is_string($accountRaw), 'account file missing');
  bl_resource_test_assert(!str_contains($accountRaw, 'must-never-export'), 'credential entered account file');
  $account = bl_resource_file_read(bl_saved_user_resource_path(7, 'account'), []);
  bl_resource_test_assert(($account['data']['name'] ?? '') === 'Peter', 'account projection failed');
  $index = bl_resource_file_read(bl_saved_account_index_path(), []);
  bl_resource_test_assert(($index['data']['byName']['peter'] ?? '') === '000007', 'name index failed');
  bl_resource_test_assert(($index['data']['byEmail']['peter@example.test'] ?? '') === '000007', 'email index failed');
  $brokenIndex = bl_resource_file_replace(bl_saved_account_index_path(), ['byName'=>[],'byEmail'=>[]], (int)$index['revision']);
  $verification = bl_account_index_verify();
  bl_resource_test_assert(empty($verification['matches']), 'account index drift was not detected');
  bl_account_index_rebuild((int)$brokenIndex['revision']);
  $verification = bl_account_index_verify();
  bl_resource_test_assert(!empty($verification['ok']), 'account index repair failed');

  $fitness = bl_fitness_resource_default();
  $fitness['plans'][] = [
    'sourcePlanId'=>1,
    'createdAt'=>'2026-08-02T12:00:00Z',
    'plan'=>['sessions'=>3,'frequency'=>'3x','startDate'=>'2026-08-03','items'=>[['exercise'=>'Push-up','sets'=>3]]],
    'legacyPlanText'=>'fixture',
    'sessions'=>bl_fitness_new_sessions(['sessions'=>3,'frequency'=>'3x','startDate'=>'2026-08-03']),
  ];
  $written = bl_fitness_resource_write(7, $fitness, 0);
  bl_resource_test_assert(($written['revision'] ?? 0) === 1, 'fitness write failed');
  $loaded = bl_fitness_resource_read(7);
  $planIndex = bl_fitness_latest_plan_index($loaded['data']);
  bl_resource_test_assert($planIndex === 0, 'fitness latest plan failed');
  $sessions = bl_fitness_public_sessions($loaded['data']['plans'][0]);
  bl_resource_test_assert(count($sessions) === 3, 'fitness sessions failed');
  bl_resource_test_assert((bl_fitness_progress($sessions)['nextIndex'] ?? 0) === 1, 'fitness progress failed');

  $pairs = bl_normalise_game_profile('pairs', ['level'=>2,'skills'=>['insight'=>99],'selectedTier'=>'invalid']);
  bl_resource_test_assert(($pairs['skills']['insight'] ?? -1) === 0, 'locked game skill was not returned');
  bl_resource_test_assert(($pairs['skillPoints'] ?? 0) === 5, 'returned game skill points missing');
  bl_resource_test_assert(($pairs['selectedTier'] ?? '') === 'starter', 'game tier normalisation failed');
  bl_resource_test_assert(str_ends_with(bl_saved_game_path(7, 'ninja'), '/Games/baseline-realm.json'), 'canonical Realm path failed');

  $temps = glob($runtime . '/Temporary Files/*.tmp') ?: [];
  bl_resource_test_assert($temps === [], 'temporary files remain');
  echo "resource authority runtime contract passed\n";
}finally{
  bl_resource_test_remove($base);
}
