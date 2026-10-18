<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

const BL_SAVED_DATA_ENV_KEY = 'BASELINE_SAVED_DATA_PATH';
const BL_RUNTIME_ENV_KEY = 'BASELINE_RUNTIME_PATH';
const BL_SAVED_SCHEMA_VERSION = 1;
const BL_SAVED_MAX_DEPTH = 48;
const BL_SAVED_LOCK_TTL_MIN = 5;
const BL_SAVED_LOCK_TTL_MAX = 300;

final class BaselineSavedDataConfigurationException extends RuntimeException {}
final class BaselineSavedDataConflictException extends RuntimeException {}
final class BaselineSavedDataCorruptException extends RuntimeException {}
final class BaselineSavedDataLeaseException extends RuntimeException {}

function bl_saved_is_absolute(string $path): bool {
  return str_starts_with($path, '/') || preg_match('/^[A-Za-z]:[\\\\\/]/', $path) === 1;
}

function bl_saved_normalize_root(string $path, string $label): string {
  $path = rtrim(trim(str_replace('\\', '/', $path)), '/');
  if($path === '' || !bl_saved_is_absolute($path)){
    throw new BaselineSavedDataConfigurationException($label . '_must_be_absolute');
  }
  if(str_contains($path, '/../') || str_ends_with($path, '/..')){
    throw new BaselineSavedDataConfigurationException($label . '_contains_parent_segment');
  }

  $documentRoot = trim((string)($_SERVER['DOCUMENT_ROOT'] ?? ''));
  if($documentRoot !== ''){
    $documentPrefix = rtrim(str_replace('\\', '/', $documentRoot), '/') . '/';
    $pathPrefix = $path . '/';
    if(str_starts_with($pathPrefix, $documentPrefix)){
      throw new BaselineSavedDataConfigurationException($label . '_inside_document_root');
    }
  }
  $resolvedDocumentRoot = $documentRoot !== '' ? realpath($documentRoot) : false;
  $resolvedPath = realpath($path);
  if($resolvedDocumentRoot !== false && $resolvedPath !== false){
    $documentPrefix = rtrim(str_replace('\\', '/', $resolvedDocumentRoot), '/') . '/';
    $pathPrefix = rtrim(str_replace('\\', '/', $resolvedPath), '/') . '/';
    if(str_starts_with($pathPrefix, $documentPrefix)){
      throw new BaselineSavedDataConfigurationException($label . '_inside_document_root');
    }
  }
  return $path;
}

function bl_saved_root(): string {
  return bl_saved_normalize_root(bl_env(BL_SAVED_DATA_ENV_KEY), 'saved_data_path');
}

function bl_runtime_root(): string {
  return bl_saved_normalize_root(bl_env(BL_RUNTIME_ENV_KEY), 'runtime_path');
}

function bl_saved_assert_safe_component(string $component): string {
  if(
    $component === ''
    || strlen($component) > 128
    || $component !== trim($component)
    || preg_match('/^[A-Za-z0-9][A-Za-z0-9._ -]*$/', $component) !== 1
  ){
    throw new InvalidArgumentException('invalid_path_component');
  }
  return $component;
}

function bl_saved_join(string $root, string ...$components): string {
  $path = rtrim($root, '/');
  foreach($components as $component){
    $path .= '/' . bl_saved_assert_safe_component($component);
  }
  return $path;
}

function bl_saved_ensure_directory(string $directory): void {
  $ancestor = $directory;
  while($ancestor !== '' && dirname($ancestor) !== $ancestor){
    if(is_link($ancestor)) throw new BaselineSavedDataConfigurationException('directory_is_symlink');
    $ancestor = dirname($ancestor);
  }
  if(!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)){
    throw new RuntimeException('directory_create_failed');
  }
  @chmod($directory, 0700);
  if(is_link($directory)) throw new BaselineSavedDataConfigurationException('directory_is_symlink');
}

function bl_saved_user_folder(int $userId): string {
  if($userId <= 0) throw new InvalidArgumentException('invalid_user_id');
  return sprintf('%06d', $userId);
}

function bl_saved_account_index_path(): string {
  return bl_saved_join(bl_saved_root(), 'Account Index', 'accounts.json');
}

function bl_saved_user_resource_path(int $userId, string $resource): string {
  $files = [
    'account' => 'account.json',
    'favourites' => 'favourites.json',
    'binaural' => 'binaural.json',
    'fitness' => 'fitness.json',
    'fitness-routine' => 'fitness-routine.json',
    'voice' => 'voice.json',
    'food' => 'food.json',
    'skincare' => 'skincare.json',
    'massage' => 'massage.json',
  ];
  if(!isset($files[$resource])) throw new InvalidArgumentException('invalid_user_resource');
  return bl_saved_join(bl_saved_root(), 'Users', bl_saved_user_folder($userId), $files[$resource]);
}

function bl_saved_game_files(): array {
  return [
    'ninja' => 'baseline-realm.json',
    'baseline-realm' => 'baseline-realm.json',
    'pairs' => 'pairs.json',
    'detectword' => 'detect-word.json',
    'detect-word' => 'detect-word.json',
    'make24' => 'make-24.json',
    'make-24' => 'make-24.json',
    'trackcoin' => 'track-coin.json',
    'track-coin' => 'track-coin.json',
    'ruleshift' => 'rule-shift.json',
    'crossnumber' => 'crossnumber.json',
    'rule-shift' => 'rule-shift.json',
    'blockgrid' => 'block-grid.json',
    'block-grid' => 'block-grid.json',
    'coloursort' => 'colour-sort.json',
    'colour-sort' => 'colour-sort.json',
    'weightcoherence' => 'weight-of-coherence.json',
    'unheardsignal' => 'the-unheard-signal.json',
    'pantherjigsaw' => 'black-panther.json',
    'bearjigsaw' => 'bear.json',
    'weight-of-coherence' => 'weight-of-coherence.json',
    'dartsfocused' => 'darts-focused.json',
    'darts-focused' => 'darts-focused.json',
    'meridiangrove' => 'meridian-grove.json',
    'meridian-grove' => 'meridian-grove.json',
    'badmintonfocused' => 'badminton-focused.json',
    'badminton-focused' => 'badminton-focused.json',
  ];
}

function bl_saved_game_filename(string $game): string {
  $game = strtolower(trim($game));
  $files = bl_saved_game_files();
  if(!isset($files[$game])) throw new InvalidArgumentException('invalid_game_resource');
  return $files[$game];
}

function bl_saved_game_path(int $userId, string $game): string {
  return bl_saved_join(
    bl_saved_root(),
    'Users',
    bl_saved_user_folder($userId),
    'Games',
    bl_saved_game_filename($game)
  );
}

function bl_saved_badminton_path(): string {
  return bl_saved_join(bl_saved_root(), 'Shared', 'Badminton', 'badminton.json');
}

function bl_saved_temporary_directory(): string {
  $directory = bl_saved_join(bl_runtime_root(), 'Temporary Files');
  bl_saved_ensure_directory($directory);
  return $directory;
}

function bl_saved_temporary_path(string $resourcePath): string {
  if($resourcePath === '') throw new InvalidArgumentException('invalid_resource_path');
  return bl_saved_join(
    bl_saved_temporary_directory(),
    hash('sha256', $resourcePath) . '-' . bin2hex(random_bytes(12)) . '.tmp'
  );
}

function bl_saved_decode_file(string $path): ?array {
  if(!is_file($path)) return null;
  if(is_link($path)) throw new BaselineSavedDataCorruptException('resource_is_symlink');
  $size = filesize($path);
  if($size === false || $size > BL_MAX_JSON_BYTES){
    throw new BaselineSavedDataCorruptException('resource_too_large');
  }
  $raw = file_get_contents($path, false, null, 0, BL_MAX_JSON_BYTES + 1);
  if($raw === false) throw new RuntimeException('resource_read_failed');
  try{
    $decoded = json_decode($raw, true, BL_SAVED_MAX_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $error){
    throw new BaselineSavedDataCorruptException('resource_invalid_json', 0, $error);
  }
  if(!is_array($decoded) || !array_key_exists('data', $decoded)){
    throw new BaselineSavedDataCorruptException('resource_invalid_envelope');
  }
  if(($decoded['schemaVersion'] ?? null) !== BL_SAVED_SCHEMA_VERSION){
    throw new BaselineSavedDataCorruptException('resource_schema_version_invalid');
  }
  if(!isset($decoded['revision']) || !is_int($decoded['revision']) || $decoded['revision'] < 0){
    throw new BaselineSavedDataCorruptException('resource_revision_invalid');
  }
  if(array_key_exists('updatedAt', $decoded) && $decoded['updatedAt'] !== null && !is_string($decoded['updatedAt'])){
    throw new BaselineSavedDataCorruptException('resource_updated_at_invalid');
  }
  if(!is_array($decoded['data'])){
    throw new BaselineSavedDataCorruptException('resource_data_invalid');
  }
  return $decoded;
}

function bl_saved_read(string $path): ?array {
  return bl_saved_decode_file($path);
}

function bl_saved_write_stream(string $path, string $json): void {
  $handle = @fopen($path, 'xb');
  if($handle === false) throw new RuntimeException('temporary_file_create_failed');
  try{
    $offset = 0;
    $length = strlen($json);
    while($offset < $length){
      $written = fwrite($handle, substr($json, $offset));
      if($written === false || $written === 0) throw new RuntimeException('temporary_file_write_failed');
      $offset += $written;
    }
    if(!fflush($handle)) throw new RuntimeException('temporary_file_flush_failed');
    if(function_exists('fsync') && !fsync($handle)) throw new RuntimeException('temporary_file_sync_failed');
  }finally{
    fclose($handle);
  }
  @chmod($path, 0600);
}

function bl_saved_with_resource_lock(string $resourcePath, callable $operation){
  $lockDirectory = bl_saved_join(bl_runtime_root(), 'Locks');
  bl_saved_ensure_directory($lockDirectory);
  $lockPath = bl_saved_join($lockDirectory, hash('sha256', $resourcePath) . '.lock');
  $handle = @fopen($lockPath, 'c+b');
  if($handle === false) throw new RuntimeException('lock_open_failed');
  try{
    if(!flock($handle, LOCK_EX)) throw new RuntimeException('lock_acquire_failed');
    return $operation();
  }finally{
    @flock($handle, LOCK_UN);
    fclose($handle);
  }
}

function bl_saved_write_unlocked(string $path, array $data, int $expectedRevision): array {
  $current = bl_saved_decode_file($path);
  $currentRevision = (int)($current['revision'] ?? 0);
  if($currentRevision !== $expectedRevision){
    throw new BaselineSavedDataConflictException('revision_conflict');
  }
  $envelope = [
    'schemaVersion' => BL_SAVED_SCHEMA_VERSION,
    'revision' => $currentRevision + 1,
    'updatedAt' => gmdate('c'),
    'data' => $data,
  ];
  $json = json_encode($envelope, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
  if(strlen($json) > BL_MAX_JSON_BYTES) throw new InvalidArgumentException('resource_too_large');

  $temporary = bl_saved_temporary_path($path);
  try{
    $targetStat = @stat(dirname($path));
    $temporaryStat = @stat(dirname($temporary));
    if(
      is_array($targetStat)
      && is_array($temporaryStat)
      && isset($targetStat['dev'], $temporaryStat['dev'])
      && $targetStat['dev'] !== $temporaryStat['dev']
    ){
      throw new BaselineSavedDataConfigurationException('saved_data_and_runtime_must_share_filesystem');
    }
    bl_saved_write_stream($temporary, $json . "\n");
    $decodedTemporary = bl_saved_decode_file($temporary);
    if($decodedTemporary === null || (int)($decodedTemporary['revision'] ?? 0) !== $currentRevision + 1){
      throw new BaselineSavedDataCorruptException('temporary_resource_validation_failed');
    }
    if(!@rename($temporary, $path)) throw new RuntimeException('atomic_replace_failed');
    @chmod($path, 0600);
  }finally{
    if(is_file($temporary)) @unlink($temporary);
  }
  return $envelope;
}

function bl_saved_write(string $path, array $data, int $expectedRevision): array {
  if($expectedRevision < 0) throw new InvalidArgumentException('invalid_expected_revision');
  $directory = dirname($path);
  bl_saved_ensure_directory($directory);

  return bl_saved_with_resource_lock($path, static function() use ($path, $data, $expectedRevision): array {
    return bl_saved_write_unlocked($path, $data, $expectedRevision);
  });
}

function bl_saved_lease_path(string $resourceId): string {
  $directory = bl_saved_join(bl_runtime_root(), 'Locks', 'Active');
  bl_saved_ensure_directory($directory);
  return bl_saved_join($directory, hash('sha256', $resourceId) . '.json');
}

function bl_saved_lease_acquire(string $resourceId, int $userId, int $ttlSeconds=30): array {
  if($resourceId === '' || $userId <= 0) throw new InvalidArgumentException('invalid_lease_request');
  $ttlSeconds = max(BL_SAVED_LOCK_TTL_MIN, min(BL_SAVED_LOCK_TTL_MAX, $ttlSeconds));
  $path = bl_saved_lease_path($resourceId);
  return bl_saved_with_resource_lock($path, static function() use ($path, $resourceId, $userId, $ttlSeconds): array {
    $existing = bl_saved_decode_file($path);
    $lease = is_array($existing['data'] ?? null) ? $existing['data'] : [];
    if((int)($lease['expiresAt'] ?? 0) > time()) throw new BaselineSavedDataLeaseException('resource_busy');
    $token = bin2hex(random_bytes(24));
    $record = [
      'resourceId' => $resourceId,
      'userId' => $userId,
      'tokenHash' => hash('sha256', $token),
      'expiresAt' => time() + $ttlSeconds,
    ];
    $revision = (int)($existing['revision'] ?? 0);
    bl_saved_write_unlocked($path, $record, $revision);
    return ['token'=>$token, 'expiresAt'=>$record['expiresAt']];
  });
}

function bl_saved_lease_renew(string $resourceId, string $token, int $ttlSeconds=30): array {
  $ttlSeconds = max(BL_SAVED_LOCK_TTL_MIN, min(BL_SAVED_LOCK_TTL_MAX, $ttlSeconds));
  $path = bl_saved_lease_path($resourceId);
  return bl_saved_with_resource_lock($path, static function() use ($path, $token, $ttlSeconds): array {
    $existing = bl_saved_decode_file($path);
    if($existing === null) throw new BaselineSavedDataLeaseException('lease_not_found');
    $lease = is_array($existing['data'] ?? null) ? $existing['data'] : [];
    if(!hash_equals((string)($lease['tokenHash'] ?? ''), hash('sha256', $token))){
      throw new BaselineSavedDataLeaseException('invalid_lease_token');
    }
    $lease['expiresAt'] = time() + $ttlSeconds;
    bl_saved_write_unlocked($path, $lease, (int)$existing['revision']);
    return ['expiresAt'=>$lease['expiresAt']];
  });
}

function bl_saved_lease_release(string $resourceId, string $token): void {
  $path = bl_saved_lease_path($resourceId);
  bl_saved_with_resource_lock($path, static function() use ($path, $token): void {
    $existing = bl_saved_decode_file($path);
    if($existing === null) return;
    $lease = is_array($existing['data'] ?? null) ? $existing['data'] : [];
    if(!hash_equals((string)($lease['tokenHash'] ?? ''), hash('sha256', $token))){
      throw new BaselineSavedDataLeaseException('invalid_lease_token');
    }
    if(!@unlink($path) && is_file($path)) throw new RuntimeException('lease_release_failed');
  });
}
