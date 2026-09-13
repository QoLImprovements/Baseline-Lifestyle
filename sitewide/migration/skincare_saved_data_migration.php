<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_exporter.php';

function bl_migration_table_exists(PDO $db, string $table): bool {
  $statement = $db->prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name=:name LIMIT 1");
  $statement->execute([':name'=>$table]);
  return (bool)$statement->fetchColumn();
}

function bl_migration_decode_json($value, array $fallback): array {
  if(!is_string($value) || trim($value) === '') return $fallback;
  try{
    $decoded = json_decode($value, true, 48, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_migration_export_skincare_from_copy(string $databasePath, string $root): array {
  $databasePath = bl_export_normalize_path($databasePath);
  $root = bl_export_normalize_path($root);
  if(!is_file($databasePath) || !is_readable($databasePath) || is_link($databasePath)){
    throw new BaselineSqliteExportException('skincare_source_not_readable');
  }
  $db = new PDO('sqlite:' . $databasePath, null, null, [
    PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC,
  ]);
  if(!bl_migration_table_exists($db, 'users')) return ['skincareFiles'=>0,'skincareUsers'=>0];

  $routineRows = bl_migration_table_exists($db, 'skincare_routines')
    ? $db->query('SELECT user_id, visibility, routine_json, logs_json, updated_at FROM skincare_routines ORDER BY user_id')->fetchAll()
    : [];
  $groupRows = bl_migration_table_exists($db, 'skincare_routine_groups')
    ? $db->query('SELECT user_id, groups_json, assignments_json, updated_at FROM skincare_routine_groups ORDER BY user_id')->fetchAll()
    : [];
  $userIds = [];
  foreach($routineRows as $row) $userIds[(int)($row['user_id'] ?? 0)] = true;
  foreach($groupRows as $row) $userIds[(int)($row['user_id'] ?? 0)] = true;
  unset($userIds[0]);
  if($userIds === []) return ['skincareFiles'=>0,'skincareUsers'=>0];

  $knownUsers = [];
  $users = $db->query('SELECT id FROM users ORDER BY id')->fetchAll();
  foreach($users as $row){
    $id = (int)($row['id'] ?? 0);
    if($id > 0) $knownUsers[$id] = true;
  }
  $routineByUser = [];
  foreach($routineRows as $row) $routineByUser[(int)$row['user_id']] = $row;
  $groupsByUser = [];
  foreach($groupRows as $row) $groupsByUser[(int)$row['user_id']] = $row;

  $written = 0;
  foreach(array_keys($userIds) as $userId){
    if(!isset($knownUsers[$userId])) continue;
    $routine = $routineByUser[$userId] ?? [];
    $groups = $groupsByUser[$userId] ?? [];
    $updated = max((int)($routine['updated_at'] ?? 0), (int)($groups['updated_at'] ?? 0), 1);
    $data = [
      'schemaVersion'=>1,
      'visibility'=>(($routine['visibility'] ?? '') === 'public') ? 'public' : 'private',
      'routine'=>bl_migration_decode_json($routine['routine_json'] ?? null, []),
      'logs'=>bl_migration_decode_json($routine['logs_json'] ?? null, []),
      'groups'=>bl_migration_decode_json($groups['groups_json'] ?? null, []),
      'assignments'=>bl_migration_decode_json($groups['assignments_json'] ?? null, []),
      'sliders'=>[],
    ];
    bl_export_write_json(
      bl_export_join($root, 'Users', bl_export_user_folder($userId), 'skincare.json'),
      bl_export_envelope($data, $updated)
    );
    $written++;
  }
  return ['skincareFiles'=>$written,'skincareUsers'=>count($userIds)];
}
