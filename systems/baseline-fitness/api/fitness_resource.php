<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_FITNESS_RESOURCE_MAX_SESSIONS = 120;

function bl_fitness_resource_path(int $uid): string {
  return bl_saved_user_resource_path($uid, 'fitness');
}

function bl_fitness_plans_directory(int $uid): string {
  return bl_saved_join(
    bl_saved_root(),
    'Users',
    bl_saved_user_folder($uid),
    'Fitness',
    'Plans'
  );
}

function bl_fitness_plan_path(int $uid, int $planId): string {
  if($planId <= 0) throw new InvalidArgumentException('invalid_plan_id');
  return bl_saved_join(bl_fitness_plans_directory($uid), sprintf('%06d.json', $planId));
}

function bl_fitness_plan_files_read(int $uid): array {
  $directory = bl_fitness_plans_directory($uid);
  if(!is_dir($directory)) return [];
  $records = [];
  $entries = scandir($directory);
  if($entries === false) throw new RuntimeException('fitness_plan_directory_read_failed');
  foreach($entries as $entry){
    if(preg_match('/^([0-9]{6})\.json$/', (string)$entry, $match) !== 1) continue;
    $planId = (int)$match[1];
    if($planId <= 0) continue;
    $resource = bl_resource_file_read(bl_fitness_plan_path($uid, $planId), []);
    $record = is_array($resource['data'] ?? null) ? $resource['data'] : [];
    if($record === []) continue;
    $record['sourcePlanId'] = $planId;
    $records[] = $record;
  }
  return $records;
}

function bl_fitness_plan_files_sync(int $uid, array $plans): void {
  $directory = bl_fitness_plans_directory($uid);
  bl_saved_ensure_directory($directory);

  $desired = [];
  foreach($plans as $record){
    if(!is_array($record)) continue;
    $planId = bl_fitness_plan_id($record);
    if($planId <= 0) continue;
    $record['sourcePlanId'] = $planId;
    $desired[$planId] = $record;
  }

  $entries = scandir($directory);
  if($entries === false) throw new RuntimeException('fitness_plan_directory_read_failed');
  $existing = [];
  foreach($entries as $entry){
    if(preg_match('/^([0-9]{6})\.json$/', (string)$entry, $match) === 1){
      $existing[(int)$match[1]] = true;
    }
  }

  foreach($desired as $planId=>$record){
    $path = bl_fitness_plan_path($uid, (int)$planId);
    bl_saved_with_resource_lock($path, static function() use ($path, $record): void {
      $current = bl_saved_read($path);
      $currentRevision = (int)($current['revision'] ?? 0);
      $currentData = is_array($current['data'] ?? null) ? $current['data'] : null;
      if($currentData === $record) return;
      bl_saved_write_unlocked($path, $record, $currentRevision);
    });
    unset($existing[(int)$planId]);
  }

  foreach(array_keys($existing) as $planId){
    $path = bl_fitness_plan_path($uid, (int)$planId);
    bl_saved_with_resource_lock($path, static function() use ($path): void {
      if(is_file($path) && !@unlink($path)) throw new RuntimeException('fitness_plan_delete_failed');
    });
  }
}

function bl_fitness_resource_default(): array {
  return [
    'plans'=>[],
    'achievements'=>[],
  ];
}

function bl_fitness_resource_normalise(array $data): array {
  $data['plans'] = is_array($data['plans'] ?? null) ? array_values($data['plans']) : [];
  $data['achievements'] = is_array($data['achievements'] ?? null) ? array_values($data['achievements']) : [];
  if(isset($data['profile']) && !is_array($data['profile'])) unset($data['profile']);
  if(isset($data['activeWorkout']) && !is_array($data['activeWorkout'])) unset($data['activeWorkout']);
  if(isset($data['progressionHistory']) && !is_array($data['progressionHistory'])) unset($data['progressionHistory']);
  $selectedPlanId = max(0, (int)($data['selectedPlanId'] ?? 0));
  if($selectedPlanId > 0) $data['selectedPlanId'] = $selectedPlanId;
  else unset($data['selectedPlanId']);
  return $data;
}

function bl_fitness_resource_read(int $uid): array {
  $resource = bl_resource_file_read(bl_fitness_resource_path($uid), bl_fitness_resource_default());
  $resource['data'] = bl_fitness_resource_normalise($resource['data']);
  if(($resource['data']['plans'] ?? []) === []){
    $resource['data']['plans'] = bl_fitness_plan_files_read($uid);
  }
  return $resource;
}

function bl_fitness_resource_is_empty(array $data): bool {
  return ($data['plans'] ?? []) === []
    && ($data['achievements'] ?? []) === []
    && empty($data['profile'])
    && empty($data['activeWorkout'])
    && empty($data['progressionHistory'])
    && empty($data['selectedPlanId']);
}

function bl_fitness_resource_write(int $uid, array $data, ?int $expectedRevision=null): ?array {
  $data = bl_fitness_resource_normalise($data);
  $plans = $data['plans'];
  unset($data['plans']);
  $path = bl_fitness_resource_path($uid);
  bl_saved_ensure_directory(dirname($path));

  return bl_saved_with_resource_lock($path, static function() use ($uid, $plans, $data, $path, $expectedRevision): array {
    $current = bl_saved_read($path);
    $revision = (int)($current['revision'] ?? 0);
    if($expectedRevision !== null && $revision !== $expectedRevision){
      throw new BaselineSavedDataConflictException('revision_conflict');
    }

    bl_fitness_plan_files_sync($uid, $plans);
    return bl_saved_write_unlocked($path, $data, $revision);
  });
}

function bl_fitness_plan_id(array $plan): int {
  return max(0, (int)($plan['sourcePlanId'] ?? $plan['planId'] ?? 0));
}

function bl_fitness_plan_created_timestamp(array $plan): int {
  $value = (string)($plan['createdAt'] ?? '');
  $timestamp = $value !== '' ? strtotime($value) : false;
  return $timestamp === false ? 0 : $timestamp;
}

function bl_fitness_latest_plan_index(array $data): ?int {
  $best = null;
  $bestKey = [-1, -1];
  foreach(($data['plans'] ?? []) as $index=>$plan){
    if(!is_array($plan)) continue;
    $key = [bl_fitness_plan_created_timestamp($plan), bl_fitness_plan_id($plan)];
    if($key > $bestKey){
      $bestKey = $key;
      $best = (int)$index;
    }
  }
  return $best;
}

function bl_fitness_find_plan_index(array $data, int $planId): ?int {
  foreach(($data['plans'] ?? []) as $index=>$plan){
    if(is_array($plan) && bl_fitness_plan_id($plan) === $planId) return (int)$index;
  }
  return null;
}

function bl_fitness_next_plan_id(array $data): int {
  $maximum = 0;
  foreach(($data['plans'] ?? []) as $plan){
    if(is_array($plan)) $maximum = max($maximum, bl_fitness_plan_id($plan));
  }
  return $maximum + 1;
}

function bl_fitness_plan_json(array $record): array {
  return is_array($record['plan'] ?? null) ? $record['plan'] : [];
}

function bl_fitness_frequency_pattern(string $frequency): array {
  return [
    '1x'=>[7],
    '2x'=>[3,4],
    '3x'=>[2,2,3],
  ][$frequency] ?? [2,2,3];
}

function bl_fitness_schedule_dates(array $planJson): array {
  $sessions = max(1, min(BL_FITNESS_RESOURCE_MAX_SESSIONS, (int)($planJson['sessions'] ?? 18)));
  $startDate = (string)($planJson['startDate'] ?? '');
  if(preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDate) !== 1) $startDate = gmdate('Y-m-d');
  $date = new DateTimeImmutable($startDate, new DateTimeZone('UTC'));
  $dayNumbers = ['Sunday'=>0,'Monday'=>1,'Tuesday'=>2,'Wednesday'=>3,'Thursday'=>4,'Friday'=>5,'Saturday'=>6];
  $selected = [];
  foreach((is_array($planJson['days'] ?? null) ? $planJson['days'] : []) as $day){
    if(isset($dayNumbers[$day])) $selected[] = $dayNumbers[$day];
  }
  $selected = array_values(array_unique($selected));
  $pattern = bl_fitness_frequency_pattern((string)($planJson['frequency'] ?? '3x'));
  $dates = [];
  while(count($dates) < $sessions){
    if($selected !== []){
      if(in_array((int)$date->format('w'), $selected, true)) $dates[] = $date->format('Y-m-d');
      $date = $date->modify('+1 day');
      continue;
    }
    $dates[] = $date->format('Y-m-d');
    if(count($dates) < $sessions){
      $stepIndex = count($dates) - 1;
      $date = $date->modify('+' . (int)($pattern[$stepIndex % count($pattern)] ?? 2) . ' days');
    }
  }
  return $dates;
}

function bl_fitness_new_sessions(array $planJson, array $existing=[], bool $preserveStatus=false): array {
  $dates = bl_fitness_schedule_dates($planJson);
  $byIndex = [];
  foreach($existing as $session){
    if(is_array($session)) $byIndex[(int)($session['sessionIndex'] ?? $session['session_index'] ?? 0)] = $session;
  }
  $now = gmdate('c');
  $sessions = [];
  foreach($dates as $offset=>$date){
    $index = $offset + 1;
    $old = $byIndex[$index] ?? [];
    $status = $preserveStatus ? (string)($old['status'] ?? 'planned') : 'planned';
    if(!in_array($status, ['planned','rescheduled','done'], true)) $status = 'planned';
    $sessions[] = [
      'sourceSessionId'=>(int)($old['sourceSessionId'] ?? $old['id'] ?? $index),
      'sessionIndex'=>$index,
      'scheduledDate'=>$date,
      'status'=>$status,
      'completedAt'=>$status === 'done' && is_string($old['completedAt'] ?? null) ? $old['completedAt'] : null,
      'updatedAt'=>$now,
    ];
  }
  return $sessions;
}

function bl_fitness_public_sessions(array $record): array {
  $rows = [];
  foreach((is_array($record['sessions'] ?? null) ? $record['sessions'] : []) as $session){
    if(!is_array($session)) continue;
    $index = (int)($session['sessionIndex'] ?? $session['session_index'] ?? 0);
    if($index <= 0 || $index > BL_FITNESS_RESOURCE_MAX_SESSIONS) continue;
    $completedIso = is_string($session['completedAt'] ?? null) ? $session['completedAt'] : null;
    $updatedIso = is_string($session['updatedAt'] ?? null) ? $session['updatedAt'] : null;
    $rows[] = [
      'session_index'=>$index,
      'scheduled_date'=>(string)($session['scheduledDate'] ?? $session['scheduled_date'] ?? ''),
      'status'=>in_array((string)($session['status'] ?? ''), ['done','rescheduled'], true) ? (string)$session['status'] : 'planned',
      'completed_at'=>$completedIso === null ? null : bl_resource_timestamp($completedIso),
      'updated_at'=>$updatedIso === null ? null : bl_resource_timestamp($updatedIso),
    ];
  }
  usort($rows, static fn(array $a,array $b): int => $a['session_index'] <=> $b['session_index']);
  return $rows;
}

function bl_fitness_progress(array $sessions, array $planJson=[]): array {
  $done = 0;
  $next = null;
  foreach($sessions as $session){
    if(($session['status'] ?? '') === 'done') $done++;
    elseif($next === null) $next = (int)($session['session_index'] ?? 0);
  }
  if($next === null && $sessions !== []) $next = count($sessions) + 1;
  return [
    'done'=>$done,
    'total'=>count($sessions),
    'nextIndex'=>$next,
    'startDate'=>(string)($planJson['startDate'] ?? ($sessions[0]['scheduled_date'] ?? '')),
  ];
}

function bl_fitness_sqlite_snapshot(PDO $db, int $uid): array {
  $plansStmt = $db->prepare('SELECT id, created_at, plan_text, plan_json FROM plans WHERE user_id=:u ORDER BY created_at ASC, id ASC');
  $plansStmt->execute([':u'=>$uid]);
  $plans = [];
  $sessionsStmt = $db->prepare('SELECT id, session_index, scheduled_date, status, completed_at, updated_at FROM plan_sessions WHERE plan_id=:p AND user_id=:u ORDER BY session_index ASC');
  foreach(($plansStmt->fetchAll() ?: []) as $row){
    $planId = (int)($row['id'] ?? 0);
    $decoded = json_decode((string)($row['plan_json'] ?? '{}'), true);
    if(!is_array($decoded)) $decoded = [];
    $sessionsStmt->execute([':p'=>$planId,':u'=>$uid]);
    $sessions = [];
    foreach(($sessionsStmt->fetchAll() ?: []) as $session){
      $completed = isset($session['completed_at']) && is_numeric($session['completed_at']) ? gmdate('c', (int)$session['completed_at']) : null;
      $sessions[] = [
        'sourceSessionId'=>(int)($session['id'] ?? 0),
        'sessionIndex'=>(int)($session['session_index'] ?? 0),
        'scheduledDate'=>(string)($session['scheduled_date'] ?? ''),
        'status'=>(string)($session['status'] ?? 'planned'),
        'completedAt'=>$completed,
        'updatedAt'=>gmdate('c', (int)($session['updated_at'] ?? time())),
      ];
    }
    $plans[] = [
      'sourcePlanId'=>$planId,
      'createdAt'=>gmdate('c', (int)($row['created_at'] ?? time())),
      'plan'=>$decoded,
      'legacyPlanText'=>(string)($row['plan_text'] ?? ''),
      'sessions'=>$sessions,
    ];
  }
  $achievementStmt = $db->prepare('SELECT code, unlocked_at FROM achievements WHERE user_id=:u ORDER BY unlocked_at ASC');
  $achievementStmt->execute([':u'=>$uid]);
  $achievements = [];
  foreach(($achievementStmt->fetchAll() ?: []) as $row){
    $achievements[] = [
      'code'=>(string)($row['code'] ?? ''),
      'unlockedAt'=>gmdate('c', (int)($row['unlocked_at'] ?? time())),
    ];
  }
  return ['plans'=>$plans,'achievements'=>$achievements];
}

function bl_fitness_mirror_sqlite(PDO $db, int $uid): void {
  $path = bl_fitness_resource_path($uid);
  $existing = bl_fitness_resource_read($uid);
  $snapshot = bl_fitness_sqlite_snapshot($db, $uid);
  foreach(['profile','activeWorkout','progressionHistory','selectedPlanId'] as $optional){
    if(isset($existing['data'][$optional])) $snapshot[$optional] = $existing['data'][$optional];
  }
  bl_fitness_resource_write($uid, $snapshot, $existing['revision']);
}

function bl_fitness_account_by_name(string $requestedName): ?array {
  $index = bl_resource_file_read(bl_saved_account_index_path(), ['byName'=>[]]);
  $folder = (string)($index['data']['byName'][strtolower(trim($requestedName))] ?? '');
  if(preg_match('/^[0-9]{6}$/', $folder) !== 1) return null;
  $uid = (int)$folder;
  $account = bl_resource_file_read(bl_saved_user_resource_path($uid, 'account'), []);
  if($account['revision'] === 0) return null;
  return [
    'id'=>$uid,
    'name'=>(string)($account['data']['name'] ?? $requestedName),
  ];
}

function bl_fitness_profile_names_from_files(): array {
  $index = bl_resource_file_read(bl_saved_account_index_path(), ['byName'=>[]]);
  $folders = array_values(array_unique(array_filter(
    is_array($index['data']['byName'] ?? null) ? $index['data']['byName'] : [],
    static fn($folder): bool => is_string($folder) && preg_match('/^[0-9]{6}$/', $folder) === 1
  )));
  $names = [];
  foreach(array_slice($folders, 0, 200) as $folder){
    $account = bl_resource_file_read(bl_saved_user_resource_path((int)$folder, 'account'), []);
    $name = trim((string)($account['data']['name'] ?? ''));
    if($name !== '') $names[] = $name;
  }
  natcasesort($names);
  return array_values(array_unique($names));
}
