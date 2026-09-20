<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_exporter.php';

final class BaselineRollbackCopyException extends RuntimeException {}

function bl_rollback_path(string $value, string $label): string {
  $path = bl_export_normalize_path(trim($value));
  if($path === '') throw new BaselineRollbackCopyException('missing_' . $label);
  return $path;
}

function bl_rollback_resource(string $path): ?array {
  if(!is_file($path)) return null;
  if(is_link($path)) throw new BaselineRollbackCopyException('resource_is_symlink');
  $raw = file_get_contents($path);
  if($raw === false || strlen($raw) > BL_EXPORT_MAX_RESOURCE_BYTES) throw new BaselineRollbackCopyException('resource_read_failed');
  $decoded = json_decode($raw, true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR);
  if(!is_array($decoded) || !is_array($decoded['data'] ?? null)) throw new BaselineRollbackCopyException('invalid_resource');
  return $decoded['data'];
}

function bl_rollback_timestamp($value, int $fallback): int {
  if(is_numeric($value)) return max(0, (int)$value);
  if(is_string($value) && trim($value) !== ''){
    $timestamp = strtotime($value);
    if($timestamp !== false) return max(0, $timestamp);
  }
  return max(0, $fallback);
}

function bl_rollback_user_directories(string $savedData): array {
  $root = $savedData . '/Users';
  if(!is_dir($root)) return [];
  $users = [];
  foreach(scandir($root) ?: [] as $entry){
    if(preg_match('/^[0-9]{6}$/', $entry) === 1 && is_dir($root . '/' . $entry)) $users[(int)$entry] = $root . '/' . $entry;
  }
  ksort($users);
  return $users;
}

function bl_rollback_apply_account(PDO $db, int $uid, string $directory, array &$counts): void {
  $account = bl_rollback_resource($directory . '/account.json');
  if($account === null) throw new BaselineRollbackCopyException('missing_account_resource');
  $check = $db->prepare('SELECT id FROM users WHERE id=:id LIMIT 1');
  $check->execute([':id'=>$uid]);
  if(!$check->fetch()) throw new BaselineRollbackCopyException('account_missing_from_authentication_database');
  $email = trim((string)($account['email'] ?? ''));
  $name = trim((string)($account['name'] ?? ''));
  if($email === '' || $name === '') throw new BaselineRollbackCopyException('invalid_account_resource');
  $provider = trim((string)($account['authProvider'] ?? 'password')) ?: 'password';
  $updated = bl_rollback_timestamp($account['updatedAt'] ?? null, time());
  $lastLogin = ($account['lastLoginAt'] ?? null) === null ? null : bl_rollback_timestamp($account['lastLoginAt'], $updated);
  $stmt = $db->prepare('UPDATE users SET name=:name,email=:email,email_normalized=:email_normalized,auth_provider=:provider,updated_at=:updated,last_login_at=:last_login WHERE id=:id');
  $stmt->execute([
    ':name'=>$name,
    ':email'=>$email,
    ':email_normalized'=>strtolower($email),
    ':provider'=>$provider,
    ':updated'=>$updated,
    ':last_login'=>$lastLogin,
    ':id'=>$uid,
  ]);
  $counts['accounts']++;
}

function bl_rollback_apply_favourites(PDO $db, int $uid, string $directory, array &$counts): void {
  $db->prepare('DELETE FROM favourites WHERE user_id=:u')->execute([':u'=>$uid]);
  $resource = bl_rollback_resource($directory . '/favourites.json');
  if($resource === null) return;
  $stmt = $db->prepare('INSERT INTO favourites(user_id,app,recipe_id,created_at) VALUES(:u,:a,:r,:t)');
  foreach((is_array($resource['items'] ?? null) ? $resource['items'] : []) as $item){
    if(!is_array($item)) continue;
    $app = trim((string)($item['app'] ?? ''));
    $recipe = trim((string)($item['recipeId'] ?? ''));
    if($app === '' || $recipe === '') continue;
    $stmt->execute([':u'=>$uid,':a'=>$app,':r'=>$recipe,':t'=>bl_rollback_timestamp($item['createdAt'] ?? null, time())]);
    $counts['favourites']++;
  }
}

function bl_rollback_apply_binaural(PDO $db, int $uid, string $directory, array &$counts): void {
  $db->prepare('DELETE FROM binaural_presets WHERE user_id=:u')->execute([':u'=>$uid]);
  $resource = bl_rollback_resource($directory . '/binaural.json');
  if($resource === null) return;
  $stmt = $db->prepare('INSERT INTO binaural_presets(user_id,name,beat_hz,carrier_hz,bed_type,beat_vol,bed_vol,created_at,updated_at) VALUES(:u,:n,:b,:c,:t,:bv,:dv,:created,:updated)');
  foreach((is_array($resource['presets'] ?? null) ? $resource['presets'] : []) as $preset){
    if(!is_array($preset)) continue;
    $name = trim((string)($preset['name'] ?? ''));
    if($name === '') continue;
    $created = bl_rollback_timestamp($preset['createdAt'] ?? null, time());
    $stmt->execute([
      ':u'=>$uid,':n'=>$name,':b'=>(float)($preset['beatHz'] ?? 0),':c'=>(float)($preset['carrierHz'] ?? 0),
      ':t'=>(string)($preset['bedType'] ?? 'off'),':bv'=>(float)($preset['beatVolume'] ?? 0),':dv'=>(float)($preset['bedVolume'] ?? 0),
      ':created'=>$created,':updated'=>bl_rollback_timestamp($preset['updatedAt'] ?? null, $created),
    ]);
    $counts['binauralPresets']++;
  }
}

function bl_rollback_apply_voice(PDO $db, int $uid, string $directory, array &$counts): void {
  $db->prepare('DELETE FROM voice_settings WHERE user_id=:u')->execute([':u'=>$uid]);
  $resource = bl_rollback_resource($directory . '/voice.json');
  if($resource === null) return;
  $json = json_encode($resource, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
  $db->prepare('INSERT INTO voice_settings(user_id,settings_json,updated_at) VALUES(:u,:j,:t)')
    ->execute([':u'=>$uid,':j'=>$json,':t'=>time()]);
  $counts['voiceSettings']++;
}

function bl_rollback_apply_fitness(PDO $db, int $uid, string $directory, array &$counts, array &$optionalUsers): void {
  $db->prepare('DELETE FROM plan_sessions WHERE user_id=:u')->execute([':u'=>$uid]);
  $db->prepare('DELETE FROM plans WHERE user_id=:u')->execute([':u'=>$uid]);
  $db->prepare('DELETE FROM achievements WHERE user_id=:u')->execute([':u'=>$uid]);
  $resource = bl_rollback_resource($directory . '/fitness.json');
  if($resource === null) return;
  if(!empty($resource['profile']) || !empty($resource['activeWorkout']) || !empty($resource['progressionHistory'])) $optionalUsers[] = sprintf('%06d', $uid);
  $planStmt = $db->prepare('INSERT INTO plans(user_id,created_at,plan_text,plan_json) VALUES(:u,:t,:text,:json)');
  $sessionStmt = $db->prepare('INSERT INTO plan_sessions(plan_id,user_id,session_index,scheduled_date,status,completed_at,updated_at) VALUES(:p,:u,:i,:d,:s,:c,:t)');
  foreach((is_array($resource['plans'] ?? null) ? $resource['plans'] : []) as $plan){
    if(!is_array($plan)) continue;
    $planJson = is_array($plan['plan'] ?? null) ? $plan['plan'] : [];
    $planStmt->execute([
      ':u'=>$uid,
      ':t'=>bl_rollback_timestamp($plan['createdAt'] ?? null, time()),
      ':text'=>(string)($plan['legacyPlanText'] ?? ''),
      ':json'=>json_encode($planJson, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ]);
    $newPlanId = (int)$db->lastInsertId();
    $counts['fitnessPlans']++;
    foreach((is_array($plan['sessions'] ?? null) ? $plan['sessions'] : []) as $session){
      if(!is_array($session)) continue;
      $index = (int)($session['sessionIndex'] ?? 0);
      if($index <= 0) continue;
      $status = (string)($session['status'] ?? 'planned');
      if(!in_array($status, ['planned','rescheduled','done'], true)) $status = 'planned';
      $sessionStmt->execute([
        ':p'=>$newPlanId,':u'=>$uid,':i'=>$index,':d'=>(string)($session['scheduledDate'] ?? ''),':s'=>$status,
        ':c'=>($session['completedAt'] ?? null) === null ? null : bl_rollback_timestamp($session['completedAt'], time()),
        ':t'=>bl_rollback_timestamp($session['updatedAt'] ?? null, time()),
      ]);
      $counts['fitnessSessions']++;
    }
  }
  $achievementStmt = $db->prepare('INSERT INTO achievements(user_id,code,unlocked_at) VALUES(:u,:c,:t)');
  foreach((is_array($resource['achievements'] ?? null) ? $resource['achievements'] : []) as $achievement){
    if(!is_array($achievement)) continue;
    $code = trim((string)($achievement['code'] ?? ''));
    if($code === '') continue;
    $achievementStmt->execute([':u'=>$uid,':c'=>$code,':t'=>bl_rollback_timestamp($achievement['unlockedAt'] ?? null, time())]);
    $counts['fitnessAchievements']++;
  }
}

function bl_rollback_apply_skincare(PDO $db, int $uid, string $directory, array &$counts): void {
  $resource = bl_rollback_resource($directory . '/skincare.json');
  $hasRoutines = bl_export_table_exists($db, 'skincare_routines');
  $hasGroups = bl_export_table_exists($db, 'skincare_routine_groups');

  if($resource !== null && (!$hasRoutines || !$hasGroups)){
    throw new BaselineRollbackCopyException('skincare_tables_missing');
  }

  if($hasRoutines){
    $db->prepare('DELETE FROM skincare_routines WHERE user_id=:u')->execute([':u'=>$uid]);
  }
  if($hasGroups){
    $db->prepare('DELETE FROM skincare_routine_groups WHERE user_id=:u')->execute([':u'=>$uid]);
  }
  if($resource === null) return;

  if((int)($resource['schemaVersion'] ?? 1) !== 1){
    throw new BaselineRollbackCopyException('unsupported_skincare_schema_version');
  }
  foreach(['routine','logs','groups','assignments'] as $section){
    if(array_key_exists($section, $resource) && !is_array($resource[$section])){
      throw new BaselineRollbackCopyException('invalid_skincare_section:' . $section);
    }
  }

  $visibility = (($resource['visibility'] ?? '') === 'public') ? 'public' : 'private';
  $routine = is_array($resource['routine'] ?? null) ? $resource['routine'] : [];
  $logs = is_array($resource['logs'] ?? null) ? $resource['logs'] : [];
  $groups = is_array($resource['groups'] ?? null) ? $resource['groups'] : [];
  $assignments = is_array($resource['assignments'] ?? null) ? $resource['assignments'] : [];
  $updated = time();

  $db->prepare(
    'INSERT INTO skincare_routines(user_id,visibility,routine_json,logs_json,updated_at)
     VALUES(:u,:v,:r,:l,:t)'
  )->execute([
    ':u'=>$uid,
    ':v'=>$visibility,
    ':r'=>json_encode($routine, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ':l'=>json_encode($logs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ':t'=>$updated,
  ]);
  $counts['skincareRoutines']++;

  $db->prepare(
    'INSERT INTO skincare_routine_groups(user_id,groups_json,assignments_json,updated_at)
     VALUES(:u,:g,:a,:t)'
  )->execute([
    ':u'=>$uid,
    ':g'=>json_encode($groups, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ':a'=>json_encode($assignments, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ':t'=>$updated,
  ]);
  $counts['skincareGroups']++;
}

function bl_rollback_game_files(): array {
  return [
    'baseline-realm.json'=>'ninja','pairs.json'=>'pairs','detect-word.json'=>'detectword','make-24.json'=>'make24',
    'track-coin.json'=>'trackcoin','rule-shift.json'=>'ruleshift','darts-focused.json'=>'dartsfocused','meridian-grove.json'=>'meridiangrove',
    'badminton-focused.json'=>'badmintonfocused',
  ];
}

function bl_rollback_apply_games(PDO $db, int $uid, string $directory, array &$counts): void {
  $apps = array_values(bl_rollback_game_files());
  $placeholders = implode(',', array_fill(0, count($apps), '?'));
  $db->prepare('DELETE FROM games_profiles WHERE user_id=? AND app IN (' . $placeholders . ')')->execute(array_merge([$uid], $apps));
  $stmt = $db->prepare('INSERT INTO games_profiles(user_id,app,profile_json,created_at,updated_at) VALUES(:u,:a,:j,:c,:t)');
  foreach(bl_rollback_game_files() as $filename=>$app){
    $resource = bl_rollback_resource($directory . '/Games/' . $filename);
    if($resource === null) continue;
    $profile = is_array($resource['profile'] ?? null) ? $resource['profile'] : [];
    $created = bl_rollback_timestamp($resource['createdAt'] ?? null, time());
    $stmt->execute([
      ':u'=>$uid,':a'=>$app,
      ':j'=>json_encode($profile, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
      ':c'=>$created,':t'=>bl_rollback_timestamp($resource['updatedAt'] ?? null, $created),
    ]);
    $counts['gameProfiles']++;
  }
}

function bl_rollback_apply_badminton(PDO $db, string $savedData, array &$counts): void {
  $resource = bl_rollback_resource($savedData . '/Shared/Badminton/badminton.json');
  $db->prepare('DELETE FROM badminton_state_store WHERE state_key=:k')->execute([':k'=>'global']);
  if($resource === null) return;
  $db->prepare('INSERT INTO badminton_state_store(state_key,state_json,updated_at) VALUES(:k,:j,:t)')
    ->execute([':k'=>'global',':j'=>json_encode($resource, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),':t'=>time()]);
  $counts['badmintonStates']++;
}

function bl_rollback_preserved_saved_data_resources(string $savedData): array {
  $preserved = [];
  if(is_file($savedData . '/Account Index/accounts.json')) $preserved[] = 'Account Index/accounts.json';

  foreach(bl_rollback_user_directories($savedData) as $uid=>$directory){
    $folder = sprintf('%06d', $uid);
    foreach(['fitness-routine.json','food.json','skincare.json'] as $filename){
      if(is_file($directory . '/' . $filename)) $preserved[] = 'Users/' . $folder . '/' . $filename;
    }

    $fitness = bl_rollback_resource($directory . '/fitness.json');
    if(is_array($fitness)){
      if(!empty($fitness['profile'])) $preserved[] = 'Users/' . $folder . '/fitness.json#profile';
      if(!empty($fitness['activeWorkout'])) $preserved[] = 'Users/' . $folder . '/fitness.json#activeWorkout';
      if(!empty($fitness['progressionHistory'])) $preserved[] = 'Users/' . $folder . '/fitness.json#progressionHistory';
    }

    $realm = bl_rollback_resource($directory . '/Games/baseline-realm.json');
    if(is_array($realm)){
      foreach(array_keys($realm) as $section){
        if(in_array($section, ['game','profile','createdAt','updatedAt'], true)) continue;
        if(!empty($realm[$section])) $preserved[] = 'Users/' . $folder . '/Games/baseline-realm.json#' . $section;
      }
    }
  }

  sort($preserved);
  return array_values(array_unique($preserved));
}

function bl_build_sqlite_rollback_copy(string $source, string $savedData, string $output): array {
  if(!extension_loaded('pdo_sqlite')) throw new BaselineRollbackCopyException('pdo_sqlite_required');
  if(!is_file($source) || !is_readable($source) || is_link($source)) throw new BaselineRollbackCopyException('source_not_readable');
  if(!is_dir($savedData) || is_link($savedData)) throw new BaselineRollbackCopyException('saved_data_not_readable');
  if($source === $output) throw new BaselineRollbackCopyException('output_must_differ_from_source');
  $sourceHash = hash_file('sha256', $source);
  $preservedSavedData = bl_rollback_preserved_saved_data_resources($savedData);
  $staging = $output . '.staging-' . bin2hex(random_bytes(8));
  bl_export_ensure_directory(dirname($output));
  if(!copy($source, $staging)) throw new BaselineRollbackCopyException('source_copy_failed');
  @chmod($staging, 0600);
  $counts = ['accounts'=>0,'favourites'=>0,'binauralPresets'=>0,'voiceSettings'=>0,'fitnessPlans'=>0,'fitnessSessions'=>0,'fitnessAchievements'=>0,'skincareRoutines'=>0,'skincareGroups'=>0,'gameProfiles'=>0,'badmintonStates'=>0];
  $optionalUsers = [];
  try{
    $db = new PDO('sqlite:' . $staging, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
    $db->exec('PRAGMA foreign_keys=ON');
    $db->beginTransaction();
    foreach(bl_rollback_user_directories($savedData) as $uid=>$directory){
      bl_rollback_apply_account($db, $uid, $directory, $counts);
      bl_rollback_apply_favourites($db, $uid, $directory, $counts);
      bl_rollback_apply_binaural($db, $uid, $directory, $counts);
      bl_rollback_apply_voice($db, $uid, $directory, $counts);
      bl_rollback_apply_fitness($db, $uid, $directory, $counts, $optionalUsers);
      bl_rollback_apply_skincare($db, $uid, $directory, $counts);
      bl_rollback_apply_games($db, $uid, $directory, $counts);
    }
    bl_rollback_apply_badminton($db, $savedData, $counts);
    $db->commit();
    $integrity = $db->query('PRAGMA integrity_check')->fetchAll(PDO::FETCH_COLUMN);
    $foreignKeys = $db->query('PRAGMA foreign_key_check')->fetchAll();
    $db = null;
    if($integrity !== ['ok'] || $foreignKeys !== []) throw new BaselineRollbackCopyException('rollback_copy_validation_failed');
    if(hash_file('sha256', $source) !== $sourceHash) throw new BaselineRollbackCopyException('source_changed');
    if(file_exists($output) && !@unlink($output)) throw new BaselineRollbackCopyException('existing_output_remove_failed');
    if(!@rename($staging, $output)) throw new BaselineRollbackCopyException('output_replace_failed');
    @chmod($output, 0600);
    return [
      'ok'=>true,
      'sourceSha256'=>$sourceHash,
      'outputSha256'=>hash_file('sha256', $output),
      'outputSizeBytes'=>filesize($output),
      'counts'=>$counts,
      'optionalFitnessSectionsNotRepresentedInSQLite'=>array_values(array_unique($optionalUsers)),
      'savedDataResourcesPreservedOutsideSQLite'=>$preservedSavedData,
      'sourceChanged'=>false,
    ];
  }catch(Throwable $error){
    if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
    if(is_file($staging)) @unlink($staging);
    if($error instanceof BaselineRollbackCopyException) throw $error;
    throw new BaselineRollbackCopyException('rollback_copy_failed:' . $error->getMessage(), 0, $error);
  }
}

if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){
  $options = getopt('', ['source-database:','saved-data:','output-database:','evidence:']);
  try{
    $source = bl_rollback_path((string)($options['source-database'] ?? ''), 'source_database');
    $savedData = bl_rollback_path((string)($options['saved-data'] ?? ''), 'saved_data');
    $output = bl_rollback_path((string)($options['output-database'] ?? ''), 'output_database');
    $evidence = bl_rollback_path((string)($options['evidence'] ?? ''), 'evidence');
    if(str_starts_with($evidence . '/', rtrim($savedData, '/') . '/')) throw new BaselineRollbackCopyException('evidence_inside_saved_data');
    $result = bl_build_sqlite_rollback_copy($source, $savedData, $output);
    bl_export_write_json($evidence, $result);
    fwrite(STDOUT, json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
    exit(0);
  }catch(Throwable $error){
    $failure = ['ok'=>false,'error'=>$error->getMessage()];
    if(isset($options['evidence']) && trim((string)$options['evidence']) !== ''){
      try{ bl_export_write_json(bl_export_normalize_path((string)$options['evidence']), $failure); }catch(Throwable $ignored){}
    }
    fwrite(STDERR, json_encode($failure, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
    exit(1);
  }
}
