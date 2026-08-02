<?php
declare(strict_types=1);

$path = sys_get_temp_dir() . '/baseline-private-environment-' . bin2hex(random_bytes(8));
$contents = implode("\n", [
  'BASELINE_SAVED_DATA_PATH="/private/Saved Data"',
  'BASELINE_RUNTIME_PATH="/private/Runtime"',
  'BL_CHARITY_SHOP_PIN="246810"',
  'UNAPPROVED_SETTING="must-not-load"',
  '',
]);
if(file_put_contents($path, $contents) === false) throw new RuntimeException('fixture_write_failed');
chmod($path, 0600);
putenv('BASELINE_PRIVATE_ENV_PATH=' . $path);

try{
  require_once dirname(__DIR__) . '/sitewide/api/config.php';
  if(bl_env('BASELINE_SAVED_DATA_PATH') !== '/private/Saved Data') throw new RuntimeException('saved_path_not_loaded');
  if(bl_env('BASELINE_RUNTIME_PATH') !== '/private/Runtime') throw new RuntimeException('runtime_path_not_loaded');
  if(bl_env('BL_CHARITY_SHOP_PIN') !== '246810') throw new RuntimeException('pin_not_loaded');
  if(bl_env('UNAPPROVED_SETTING', 'blocked') !== 'blocked') throw new RuntimeException('allowlist_failed');
  echo "private-environment contract passed\n";
}finally{
  @unlink($path);
}
