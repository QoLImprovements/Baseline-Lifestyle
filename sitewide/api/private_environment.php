<?php
declare(strict_types=1);

/**
 * Read allowlisted settings from a host-only file beside public_html when the
 * PHP hosting plan has no environment-variable interface. Real process
 * environment variables remain authoritative. The private file must not be a
 * symlink, must be 16 KiB or smaller, and must grant no group/other access.
 */
function bl_private_environment(): array {
  static $values = null;
  if(is_array($values)) return $values;
  $values = [];

  $configuredPath = getenv('BASELINE_PRIVATE_ENV_PATH');
  $path = is_string($configuredPath) && trim($configuredPath) !== ''
    ? trim($configuredPath)
    : dirname(__DIR__, 3) . '/.baseline-private.env';

  if(!is_file($path)) return $values;
  if(is_link($path)){
    error_log('Baseline private environment file must not be a symlink.');
    return $values;
  }
  $permissions = fileperms($path);
  if($permissions === false || (($permissions & 0077) !== 0)){
    error_log('Baseline private environment file must use mode 600 or stricter.');
    return $values;
  }
  $size = filesize($path);
  if($size === false || $size > 16384){
    error_log('Baseline private environment file is too large.');
    return $values;
  }

  $parsed = @parse_ini_file($path, false, INI_SCANNER_RAW);
  if(!is_array($parsed)){
    error_log('Baseline private environment file could not be parsed.');
    return $values;
  }
  $allowed = array_fill_keys([
    'BASELINE_DB_PATH',
    'BASELINE_SAVED_DATA_PATH',
    'BASELINE_RUNTIME_PATH',
    'BL_SITE_URL',
    'BL_MAIL_FROM_EMAIL',
    'BL_MAIL_FROM_NAME',
    'BL_GOOGLE_CLIENT_ID',
    'BL_GOOGLE_CLIENT_SECRET',
    'BL_GOOGLE_REDIRECT_URI',
    'BL_CHARITY_SHOP_PIN',
    'BL_BADMINTON_MODERATOR_ALIASES',
    'BL_BADMINTON_DEVELOPER_UID',
    'BL_BADMINTON_DEVELOPER_NAME',
    'BL_BADMINTON_DEVELOPER_EMAIL',
    'OPENAI_API_KEY',
    'BL_VOICE_SAFETY_SALT',
  ], true);
  foreach($parsed as $key => $value){
    $key = (string)$key;
    if(!isset($allowed[$key]) || !is_scalar($value)) continue;
    $values[$key] = trim((string)$value);
  }
  return $values;
}

function bl_env(string $key, string $default=''): string {
  $value = getenv($key);
  if($value !== false && $value !== null && $value !== '') return (string)$value;
  $private = bl_private_environment();
  if(array_key_exists($key, $private) && $private[$key] !== '') return (string)$private[$key];
  return $default;
}
