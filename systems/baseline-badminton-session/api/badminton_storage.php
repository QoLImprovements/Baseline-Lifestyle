<?php
declare(strict_types=1);

require_once __DIR__ . '/../../../sitewide/api/resource_authority.php';

function bl_badminton_sqlite_load(PDO $db): array {
  bl_badminton_state_table($db);
  $stmt = $db->prepare('SELECT state_json, updated_at FROM badminton_state_store WHERE state_key=:k LIMIT 1');
  $stmt->execute([':k'=>'global']);
  $row = $stmt->fetch();
  if(!$row) return ['state'=>[],'updated_at'=>null,'revision'=>0];
  $decoded = json_decode((string)($row['state_json'] ?? ''), true);
  return [
    'state'=>is_array($decoded) ? bl_badminton_storage_state($decoded) : [],
    'updated_at'=>(int)($row['updated_at'] ?? 0),
    'revision'=>0,
  ];
}

function bl_badminton_sqlite_write(PDO $db, array $state): int {
  $json = json_encode(bl_badminton_storage_state($state), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  if($json === false) throw new InvalidArgumentException('encode_failed');
  $now = time();
  $stmt = $db->prepare('INSERT INTO badminton_state_store(state_key, state_json, updated_at) VALUES(:k,:j,:t)
    ON CONFLICT(state_key) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at');
  $stmt->execute([':k'=>'global',':j'=>$json,':t'=>$now]);
  return $now;
}

function bl_badminton_file_load(): array {
  $resource = bl_resource_file_read(bl_saved_badminton_path(), []);
  return [
    'state'=>bl_badminton_storage_state($resource['data']),
    'updated_at'=>bl_resource_timestamp($resource['updatedAt']),
    'revision'=>$resource['revision'],
  ];
}

function bl_badminton_file_write(array $state, ?int $expectedRevision=null): array {
  $path = bl_saved_badminton_path();
  $resource = bl_resource_file_read($path, []);
  if($expectedRevision !== null && $expectedRevision !== $resource['revision']){
    throw new BaselineSavedDataConflictException('revision_conflict');
  }
  return bl_resource_file_replace($path, bl_badminton_storage_state($state), $resource['revision']);
}

function bl_badminton_mirror_state(array $state): array {
  return bl_badminton_file_write($state);
}
