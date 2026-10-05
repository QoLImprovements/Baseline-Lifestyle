<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_SKINCARE_SAVED_SCHEMA_VERSION = 2;

function bl_skincare_saved_default(): array {
  return [
    'schemaVersion'=>BL_SKINCARE_SAVED_SCHEMA_VERSION,
    'visibility'=>'private',
    'routine'=>[],
    'logs'=>[],
    'groups'=>[],
    'assignments'=>[],
    'sliders'=>[],
  ];
}

function bl_skincare_saved_decode(string $json, array $fallback=[]): array {
  try{
    $decoded = json_decode($json, true, 32, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : $fallback;
  }catch(Throwable $error){
    return $fallback;
  }
}

function bl_skincare_saved_sqlite_snapshot(PDO $db, int $userId): array {
  $data = bl_skincare_saved_default();
  $updated = 0;

  $routineStatement = $db->prepare('SELECT visibility, routine_json, logs_json, updated_at FROM skincare_routines WHERE user_id=:user_id LIMIT 1');
  $routineStatement->execute([':user_id'=>$userId]);
  $routineRow = $routineStatement->fetch() ?: null;
  if($routineRow){
    $data['visibility'] = (($routineRow['visibility'] ?? '') === 'public') ? 'public' : 'private';
    $data['routine'] = bl_skincare_saved_decode((string)($routineRow['routine_json'] ?? '[]'));
    $data['logs'] = bl_skincare_saved_decode((string)($routineRow['logs_json'] ?? '{}'));
    $updated = max($updated, (int)($routineRow['updated_at'] ?? 0));
  }

  $groupStatement = $db->prepare('SELECT groups_json, assignments_json, updated_at FROM skincare_routine_groups WHERE user_id=:user_id LIMIT 1');
  $groupStatement->execute([':user_id'=>$userId]);
  $groupRow = $groupStatement->fetch() ?: null;
  if($groupRow){
    $data['groups'] = bl_skincare_saved_decode((string)($groupRow['groups_json'] ?? '[]'));
    $data['assignments'] = bl_skincare_saved_decode((string)($groupRow['assignments_json'] ?? '{}'));
    $updated = max($updated, (int)($groupRow['updated_at'] ?? 0));
  }

  return [
    'data'=>$data,
    'updatedAt'=>$updated > 0 ? gmdate('c', $updated) : null,
    'hasData'=>$routineRow !== null || $groupRow !== null,
  ];
}

function bl_skincare_saved_sqlite_write(PDO $db, int $userId, array $data): void {
  $updated = bl_now();
  $routine = is_array($data['routine'] ?? null) ? $data['routine'] : [];
  $logs = is_array($data['logs'] ?? null) ? $data['logs'] : [];
  $visibility = (($data['visibility'] ?? '') === 'public') ? 'public' : 'private';
  $groups = is_array($data['groups'] ?? null) ? $data['groups'] : [];
  $assignments = is_array($data['assignments'] ?? null) ? $data['assignments'] : [];

  $routineStatement = $db->prepare('INSERT INTO skincare_routines(user_id, visibility, routine_json, logs_json, updated_at)
    VALUES(:user_id,:visibility,:routine_json,:logs_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      visibility=excluded.visibility,
      routine_json=excluded.routine_json,
      logs_json=excluded.logs_json,
      updated_at=excluded.updated_at');
  $routineStatement->execute([
    ':user_id'=>$userId,
    ':visibility'=>$visibility,
    ':routine_json'=>json_encode($routine, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':logs_json'=>json_encode($logs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':updated_at'=>$updated,
  ]);

  $groupStatement = $db->prepare('INSERT INTO skincare_routine_groups(user_id, groups_json, assignments_json, updated_at)
    VALUES(:user_id,:groups_json,:assignments_json,:updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
      groups_json=excluded.groups_json,
      assignments_json=excluded.assignments_json,
      updated_at=excluded.updated_at');
  $groupStatement->execute([
    ':user_id'=>$userId,
    ':groups_json'=>json_encode($groups, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':assignments_json'=>json_encode($assignments, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ':updated_at'=>$updated,
  ]);
}

function bl_skincare_saved_upgrade_resource(PDO $db, int $userId, string $path, array $resource): array {
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : bl_skincare_saved_default();
  $version = (int)($data['schemaVersion'] ?? 0);
  if($version >= BL_SKINCARE_SAVED_SCHEMA_VERSION && (int)($resource['revision'] ?? 0) > 0) return $resource;

  /* Schema v1 was introduced when Skincare moved from the legacy SQLite
     routine/group tables to the account Saved Data file. Older clients could
     preserve group definitions in browser storage while failing to carry the
     assignment map into the account file. Recover only during this one-time
     schema upgrade, and only from the user's own legacy server record. */
  $legacy = bl_skincare_saved_sqlite_snapshot($db, $userId);
  if((int)($resource['revision'] ?? 0) === 0 && empty($legacy['hasData'])) return $resource;
  $legacyData = is_array($legacy['data'] ?? null) ? $legacy['data'] : [];
  if((int)($resource['revision'] ?? 0) === 0 && !empty($legacy['hasData'])){
    $data = array_replace(bl_skincare_saved_default(), $legacyData);
  }
  $groups = is_array($data['groups'] ?? null) ? $data['groups'] : [];
  $assignments = is_array($data['assignments'] ?? null) ? $data['assignments'] : [];
  $legacyGroups = is_array($legacyData['groups'] ?? null) ? $legacyData['groups'] : [];
  $legacyAssignments = is_array($legacyData['assignments'] ?? null) ? $legacyData['assignments'] : [];

  if(count($groups) === 0 && count($legacyGroups) > 0){
    $groups = $legacyGroups;
    $data['groups'] = $legacyGroups;
  }

  if(count($assignments) === 0 && count($legacyAssignments) > 0 && count($groups) > 0){
    $validGroups = [];
    $currentGroupByTitle = [];
    foreach($groups as $group){
      if(!is_array($group)) continue;
      $id = trim((string)($group['id'] ?? ''));
      $title = trim((string)($group['title'] ?? ''));
      if($id !== '') $validGroups[$id] = true;
      if($id !== '' && $title !== '') $currentGroupByTitle[strtolower($title)] = $id;
    }
    $legacyGroupTitleById = [];
    foreach($legacyGroups as $legacyGroup){
      if(!is_array($legacyGroup)) continue;
      $legacyId = trim((string)($legacyGroup['id'] ?? ''));
      $legacyTitle = trim((string)($legacyGroup['title'] ?? ''));
      if($legacyId !== '' && $legacyTitle !== '') $legacyGroupTitleById[$legacyId] = strtolower($legacyTitle);
    }
    $routineIds = [];
    foreach((is_array($data['routine'] ?? null) ? $data['routine'] : []) as $item){
      if(is_array($item) && trim((string)($item['id'] ?? '')) !== '') $routineIds[(string)$item['id']] = true;
    }
    $recovered = [];
    foreach($legacyAssignments as $itemId=>$groupId){
      $item = trim((string)$itemId);
      $legacyGroupId = trim((string)$groupId);
      $targetGroupId = isset($validGroups[$legacyGroupId]) ? $legacyGroupId : '';
      if($targetGroupId === '' && isset($legacyGroupTitleById[$legacyGroupId])){
        $targetGroupId = (string)($currentGroupByTitle[$legacyGroupTitleById[$legacyGroupId]] ?? '');
      }
      if($item !== '' && isset($routineIds[$item]) && $targetGroupId !== '') $recovered[$item] = $targetGroupId;
    }
    if(count($recovered) > 0) $data['assignments'] = $recovered;
  }

  $data['schemaVersion'] = BL_SKINCARE_SAVED_SCHEMA_VERSION;
  $written = bl_resource_file_replace($path, $data, (int)($resource['revision'] ?? 0));
  return [
    'revision'=>(int)$written['revision'],
    'updatedAt'=>$written['updatedAt'],
    'data'=>$data,
  ];
}

function bl_skincare_saved_read(PDO $db, int $userId): array {
  $mode = bl_resource_authority();
  $path = bl_saved_user_resource_path($userId, 'skincare');
  if($mode === 'saved-data'){
    $resource = bl_resource_file_read($path, bl_skincare_saved_default());
    $resource = bl_skincare_saved_upgrade_resource($db, $userId, $path, $resource);
    return [
      'revision'=>(int)$resource['revision'],
      'updatedAt'=>$resource['updatedAt'],
      'data'=>is_array($resource['data'] ?? null) ? $resource['data'] : bl_skincare_saved_default(),
      'found'=>(int)$resource['revision'] > 0,
      'source'=>'saved-data',
    ];
  }

  $sqlite = bl_skincare_saved_sqlite_snapshot($db, $userId);
  $revision = 0;
  $data = $sqlite['data'];
  if($mode === 'mirror'){
    $mirror = bl_resource_file_read($path, bl_skincare_saved_default());
    $revision = (int)$mirror['revision'];
    $mirrorData = is_array($mirror['data'] ?? null) ? $mirror['data'] : [];
    /* Sliders have no legacy SQLite representation. During mirror mode they
       live only in the protected Saved Data copy while routine/groups remain
       SQLite-primary until the final authority switch. */
    if(is_array($mirrorData['sliders'] ?? null)) $data['sliders'] = $mirrorData['sliders'];
  }
  return [
    'revision'=>$revision,
    'updatedAt'=>$sqlite['updatedAt'],
    'data'=>$data,
    'found'=>(bool)$sqlite['hasData'] || $revision > 0,
    'source'=>$mode,
  ];
}

function bl_skincare_saved_replace(PDO $db, int $userId, array $data, int $expectedRevision): array {
  $mode = bl_resource_authority();
  $path = bl_saved_user_resource_path($userId, 'skincare');
  $data['schemaVersion'] = BL_SKINCARE_SAVED_SCHEMA_VERSION;

  if($mode === 'sqlite'){
    bl_skincare_saved_sqlite_write($db, $userId, $data);
    return ['revision'=>0,'updatedAt'=>gmdate('c'),'data'=>$data,'source'=>'sqlite'];
  }

  if($mode === 'saved-data'){
    $written = bl_resource_file_replace($path, $data, $expectedRevision);
    return ['revision'=>(int)$written['revision'],'updatedAt'=>$written['updatedAt'],'data'=>$data,'source'=>'saved-data'];
  }

  $currentMirror = bl_resource_file_read($path, bl_skincare_saved_default());
  if((int)$currentMirror['revision'] !== $expectedRevision){
    throw new BaselineSavedDataConflictException('revision_conflict');
  }

  $db->beginTransaction();
  try{
    bl_skincare_saved_sqlite_write($db, $userId, $data);
    $written = bl_resource_file_replace($path, $data, $expectedRevision);
    $db->commit();
  }catch(Throwable $error){
    if($db->inTransaction()) $db->rollBack();
    throw $error;
  }
  return ['revision'=>(int)$written['revision'],'updatedAt'=>$written['updatedAt'],'data'=>$data,'source'=>'mirror'];
}

function bl_skincare_saved_mutate(PDO $db, int $userId, int $expectedRevision, callable $mutator): array {
  $current = bl_skincare_saved_read($db, $userId);
  if($current['source'] !== 'sqlite' && (int)$current['revision'] !== $expectedRevision){
    throw new BaselineSavedDataConflictException('revision_conflict');
  }
  $data = is_array($current['data'] ?? null) ? $current['data'] : bl_skincare_saved_default();
  $next = $mutator($data);
  if(!is_array($next)) throw new InvalidArgumentException('invalid_skincare_document');
  return bl_skincare_saved_replace($db, $userId, $next, $expectedRevision);
}

function bl_skincare_saved_identity_by_name(PDO $db, string $name): ?array {
  $statement = $db->prepare('SELECT id, name FROM users WHERE lower(name)=lower(:name) LIMIT 1');
  $statement->execute([':name'=>$name]);
  $row = $statement->fetch();
  return $row ? ['id'=>(int)$row['id'],'name'=>(string)$row['name']] : null;
}
