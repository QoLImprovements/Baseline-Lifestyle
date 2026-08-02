<?php
declare(strict_types=1);

require_once __DIR__ . '/saved_data.php';

const BL_RESOURCE_AUTHORITY_ENV_KEY = 'BASELINE_RESOURCE_AUTHORITY';

function bl_resource_authority(): string {
  $mode = strtolower(trim(bl_env(BL_RESOURCE_AUTHORITY_ENV_KEY, 'sqlite')));
  if(!in_array($mode, ['sqlite','mirror','saved-data'], true)){
    throw new BaselineSavedDataConfigurationException('invalid_resource_authority');
  }
  if($mode !== 'sqlite'){
    bl_saved_root();
    bl_runtime_root();
  }
  return $mode;
}

function bl_resource_uses_files(): bool {
  return bl_resource_authority() === 'saved-data';
}

function bl_resource_mirrors_files(): bool {
  return bl_resource_authority() === 'mirror';
}

function bl_resource_file_read(string $path, array $default=[]): array {
  $resource = bl_saved_read($path);
  if($resource === null){
    return ['revision'=>0, 'updatedAt'=>null, 'data'=>$default];
  }
  $data = $resource['data'] ?? $default;
  if(!is_array($data)) throw new BaselineSavedDataCorruptException('resource_data_not_object');
  return [
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>is_string($resource['updatedAt'] ?? null) ? $resource['updatedAt'] : null,
    'data'=>$data,
  ];
}

function bl_resource_file_replace(string $path, array $data, ?int $expectedRevision=null): array {
  $current = bl_saved_read($path);
  $revision = $expectedRevision ?? (int)($current['revision'] ?? 0);
  return bl_saved_write($path, $data, $revision);
}

function bl_resource_file_delete(string $path, ?int $expectedRevision=null): void {
  $current = bl_saved_read($path);
  if($current === null) return;
  $revision = (int)($current['revision'] ?? 0);
  if($expectedRevision !== null && $revision !== $expectedRevision){
    throw new BaselineSavedDataConflictException('revision_conflict');
  }
  bl_saved_with_resource_lock($path, static function() use ($path, $revision): void {
    $latest = bl_saved_read($path);
    if($latest === null) return;
    if((int)($latest['revision'] ?? 0) !== $revision){
      throw new BaselineSavedDataConflictException('revision_conflict');
    }
    if(!@unlink($path) && is_file($path)) throw new RuntimeException('resource_delete_failed');
  });
}

function bl_resource_file_delete_if_empty(string $path, array $data, callable $isEmpty): ?array {
  if(!$isEmpty($data)) return bl_resource_file_replace($path, $data);
  bl_resource_file_delete($path);
  return null;
}

function bl_resource_timestamp(?string $iso): int {
  if($iso === null || $iso === '') return 0;
  $timestamp = strtotime($iso);
  return $timestamp === false ? 0 : $timestamp;
}

function bl_resource_revision_from_input(array $input): ?int {
  if(!array_key_exists('expectedRevision', $input) && !array_key_exists('revision', $input)) return null;
  $value = $input['expectedRevision'] ?? $input['revision'];
  if(!is_int($value) && !(is_string($value) && preg_match('/^[0-9]+$/', $value) === 1)){
    throw new InvalidArgumentException('invalid_expected_revision');
  }
  $revision = (int)$value;
  if($revision < 0) throw new InvalidArgumentException('invalid_expected_revision');
  return $revision;
}

function bl_resource_conflict_response(BaselineSavedDataConflictException $error): void {
  bl_json(['ok'=>false,'error'=>'revision_conflict'], 409);
}
