<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_exporter.php';

final class BaselineSqliteExportVerificationException extends RuntimeException {}

function bl_verify_read_json(string $path, bool $envelope=true): array {
  if(!is_file($path)) throw new BaselineSqliteExportVerificationException('missing_file:' . $path);
  if(is_link($path)) throw new BaselineSqliteExportVerificationException('symlink_file:' . $path);
  $size = filesize($path);
  if($size === false || $size > BL_EXPORT_MAX_RESOURCE_BYTES){
    throw new BaselineSqliteExportVerificationException('invalid_file_size:' . $path);
  }
  $raw = file_get_contents($path);
  if($raw === false) throw new BaselineSqliteExportVerificationException('read_failed:' . $path);
  try{
    $decoded = json_decode($raw, true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $error){
    throw new BaselineSqliteExportVerificationException('invalid_json:' . $path, 0, $error);
  }
  if(!is_array($decoded)) throw new BaselineSqliteExportVerificationException('invalid_json_root:' . $path);
  if($envelope){
    if((int)($decoded['schemaVersion'] ?? 0) !== BL_EXPORT_SCHEMA_VERSION){
      throw new BaselineSqliteExportVerificationException('invalid_schema_version:' . $path);
    }
    if((int)($decoded['revision'] ?? 0) !== 1 || !is_string($decoded['updatedAt'] ?? null) || !is_array($decoded['data'] ?? null)){
      throw new BaselineSqliteExportVerificationException('invalid_envelope:' . $path);
    }
  }
  return $decoded;
}

function bl_verify_iso($value, int $fallback): string {
  return bl_export_iso_time(bl_export_timestamp($value, $fallback));
}

function bl_verify_equal($actual, $expected, string $label, array &$errors): void {
  if($actual !== $expected){
    $errors[] = [
      'check'=>$label,
      'expected'=>$expected,
      'actual'=>$actual,
    ];
  }
}

function bl_verify_relative_files(string $root): array {
  $files = [];
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS)
  );
  foreach($iterator as $item){
    if($item->isLink()) throw new BaselineSqliteExportVerificationException('export_contains_symlink:' . $item->getPathname());
    if($item->isFile()) $files[] = str_replace('\\', '/', substr($item->getPathname(), strlen($root) + 1));
  }
  sort($files);
  return $files;
}

function bl_verify_allowed_file(string $relative): bool {
  if(in_array($relative, [
    'Account Index/accounts.json',
    'Shared/Badminton/badminton.json',
    'Migration Report/field-map.json',
    'Migration Report/export-report.json',
  ], true)) return true;
  if(preg_match('#^Users/[0-9]{6}/(?:account|favourites|binaural|fitness|voice)\.json$#', $relative) === 1) return true;
  return preg_match('#^Users/[0-9]{6}/Games/[a-z0-9][a-z0-9._-]{0,95}\.json$#', $relative) === 1;
}

function bl_verify_permissions(string $root, array $files, array &$errors): void {
  if(DIRECTORY_SEPARATOR !== '/') return;
  $directories = [$root];
  foreach($files as $relative){
    $path = $root . '/' . $relative;
    $mode = fileperms($path);
    if($mode !== false && (($mode & 0777) !== 0600)){
      $errors[] = ['check'=>'file_permissions','path'=>$relative,'expected'=>'0600','actual'=>sprintf('%04o', $mode & 0777)];
    }
    $directory = dirname($path);
    while(str_starts_with($directory . '/', $root . '/') && $directory !== $root){
      $directories[] = $directory;
      $directory = dirname($directory);
    }
  }
  foreach(array_unique($directories) as $directory){
    $mode = fileperms($directory);
    if($mode !== false && (($mode & 0777) !== 0700)){
      $errors[] = ['check'=>'directory_permissions','path'=>substr($directory, strlen($root)) ?: '/','expected'=>'0700','actual'=>sprintf('%04o', $mode & 0777)];
    }
  }
}

function bl_verify_source_rows(PDO $db, string $table, array $order=[]): array {
  return bl_export_rows($db, $table, $order);
}

function bl_verify_account_data(PDO $db, string $root, int $sourceTime, array &$errors, array &$counts): array {
  $users = [];
  $rows = bl_verify_source_rows($db, 'users', ['id']);
  $indexPath = $root . '/Account Index/accounts.json';
  $index = $rows === [] ? ['data'=>['byName'=>[],'byEmail'=>[],'byProvider'=>[]]] : bl_verify_read_json($indexPath);
  $accountFiles = glob($root . '/Users/[0-9][0-9][0-9][0-9][0-9][0-9]/account.json') ?: [];
  $validRows = array_values(array_filter($rows, static fn(array $row): bool => (int)($row['id'] ?? 0) > 0));
  bl_verify_equal(count($accountFiles), count($validRows), 'account_file_count', $errors);

  foreach($validRows as $row){
    $id = (int)$row['id'];
    $folder = bl_export_user_folder($id);
    $path = $root . '/Users/' . $folder . '/account.json';
    try{
      $account = bl_verify_read_json($path)['data'];
    }catch(Throwable $error){
      $errors[] = ['check'=>'account_file','userId'=>$id,'error'=>$error->getMessage()];
      continue;
    }
    $name = trim((string)($row['name'] ?? ''));
    $email = trim((string)($row['email'] ?? ''));
    $emailNormalized = trim((string)($row['email_normalized'] ?? '')) ?: strtolower($email);
    $provider = trim((string)($row['auth_provider'] ?? 'password')) ?: 'password';
    $googleSub = trim((string)($row['google_sub'] ?? ''));
    bl_verify_equal($account['userId'] ?? null, $folder, 'account.userId:' . $id, $errors);
    bl_verify_equal($account['username'] ?? null, $name, 'account.username:' . $id, $errors);
    bl_verify_equal($account['email'] ?? null, $email, 'account.email:' . $id, $errors);
    bl_verify_equal($account['authentication']['passwordHash'] ?? null, (string)($row['pass_hash'] ?? ''), 'account.passwordHash:' . $id, $errors);
    bl_verify_equal($account['authentication']['primaryProvider'] ?? null, $provider, 'account.primaryProvider:' . $id, $errors);
    bl_verify_equal($account['createdAt'] ?? null, bl_verify_iso($row['created_at'] ?? 0, $sourceTime), 'account.createdAt:' . $id, $errors);
    bl_verify_equal($account['updatedAt'] ?? null, bl_verify_iso($row['updated_at'] ?? 0, bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)), 'account.updatedAt:' . $id, $errors);
    if($name !== '') bl_verify_equal($index['data']['byName'][strtolower($name)] ?? null, $folder, 'index.byName:' . $id, $errors);
    if($emailNormalized !== '') bl_verify_equal($index['data']['byEmail'][$emailNormalized] ?? null, $folder, 'index.byEmail:' . $id, $errors);
    if($googleSub !== '') bl_verify_equal($index['data']['byProvider']['google:' . $googleSub] ?? null, $folder, 'index.byProvider:' . $id, $errors);
    $users[$id] = $folder;
  }
  if(isset($index['data']['passwordHash']) || str_contains(json_encode($index['data']), 'pass_hash')){
    $errors[] = ['check'=>'account_index_secret_exposure'];
  }
  $counts['accounts'] = count($validRows);
  return $users;
}

function bl_verify_favourites(PDO $db, string $root, array $users, int $sourceTime, array &$errors, array &$counts): void {
  $rows = bl_verify_source_rows($db, 'favourites', ['user_id','app','recipe_id','id']);
  $grouped = [];
  foreach($rows as $row) $grouped[(int)($row['user_id'] ?? 0)][] = $row;
  foreach($users as $uid=>$folder){
    $expected = $grouped[$uid] ?? [];
    $path = $root . '/Users/' . $folder . '/favourites.json';
    if($expected === []){
      if(is_file($path)) $errors[] = ['check'=>'unexpected_empty_favourites_file','userId'=>$uid];
      continue;
    }
    try{ $items = bl_verify_read_json($path)['data']['items'] ?? []; }
    catch(Throwable $error){ $errors[] = ['check'=>'favourites_file','userId'=>$uid,'error'=>$error->getMessage()]; continue; }
    $actual = [];
    foreach($items as $item) $actual[(string)($item['app'] ?? '') . '|' . (string)($item['recipeId'] ?? '')] = $item;
    bl_verify_equal(count($actual), count($expected), 'favourites_count:' . $uid, $errors);
    foreach($expected as $row){
      $key = (string)($row['app'] ?? '') . '|' . (string)($row['recipe_id'] ?? '');
      bl_verify_equal($actual[$key]['createdAt'] ?? null, bl_verify_iso($row['created_at'] ?? 0, $sourceTime), 'favourite:' . $uid . ':' . $key, $errors);
    }
  }
  $counts['favourites'] = count($rows);
}

function bl_verify_binaural(PDO $db, string $root, array $users, int $sourceTime, array &$errors, array &$counts): void {
  $rows = bl_verify_source_rows($db, 'binaural_presets', ['user_id','name','id']);
  $grouped = [];
  foreach($rows as $row) $grouped[(int)($row['user_id'] ?? 0)][] = $row;
  foreach($users as $uid=>$folder){
    $expected = $grouped[$uid] ?? [];
    $path = $root . '/Users/' . $folder . '/binaural.json';
    if($expected === []){
      if(is_file($path)) $errors[] = ['check'=>'unexpected_empty_binaural_file','userId'=>$uid];
      continue;
    }
    try{ $presets = bl_verify_read_json($path)['data']['presets'] ?? []; }
    catch(Throwable $error){ $errors[] = ['check'=>'binaural_file','userId'=>$uid,'error'=>$error->getMessage()]; continue; }
    $actual = [];
    foreach($presets as $preset) $actual[(string)($preset['name'] ?? '')] = $preset;
    bl_verify_equal(count($actual), count($expected), 'binaural_count:' . $uid, $errors);
    foreach($expected as $row){
      $name = (string)($row['name'] ?? '');
      bl_verify_equal($actual[$name]['beatHz'] ?? null, (float)($row['beat_hz'] ?? 0), 'binaural.beatHz:' . $uid . ':' . $name, $errors);
      bl_verify_equal($actual[$name]['carrierHz'] ?? null, (float)($row['carrier_hz'] ?? 0), 'binaural.carrierHz:' . $uid . ':' . $name, $errors);
      bl_verify_equal($actual[$name]['bedType'] ?? null, (string)($row['bed_type'] ?? ''), 'binaural.bedType:' . $uid . ':' . $name, $errors);
    }
  }
  $counts['binauralPresets'] = count($rows);
}

function bl_verify_voice(PDO $db, string $root, array $users, int $sourceTime, array &$errors, array &$counts): void {
  $rows = bl_verify_source_rows($db, 'voice_settings', ['user_id']);
  $valid = 0;
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){ $errors[] = ['check'=>'voice_missing_user','userId'=>$uid]; continue; }
    try{ $expected = json_decode((string)($row['settings_json'] ?? ''), true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR); }
    catch(Throwable $error){ $errors[] = ['check'=>'voice_source_invalid_json','userId'=>$uid]; continue; }
    if(!is_array($expected)){ $errors[] = ['check'=>'voice_source_invalid_shape','userId'=>$uid]; continue; }
    try{ $actual = bl_verify_read_json($root . '/Users/' . $users[$uid] . '/voice.json')['data']['settings'] ?? null; }
    catch(Throwable $error){ $errors[] = ['check'=>'voice_file','userId'=>$uid,'error'=>$error->getMessage()]; continue; }
    bl_verify_equal($actual, $expected, 'voice.settings:' . $uid, $errors);
    $valid++;
  }
  $counts['voiceSettings'] = count($rows);
  $counts['voiceFiles'] = $valid;
}

function bl_verify_fitness(PDO $db, string $root, array $users, int $sourceTime, array &$errors, array &$counts): void {
  $plans = bl_verify_source_rows($db, 'plans', ['user_id','created_at','id']);
  $sessions = bl_verify_source_rows($db, 'plan_sessions', ['user_id','plan_id','session_index','id']);
  $achievements = bl_verify_source_rows($db, 'achievements', ['user_id','unlocked_at','id']);
  $plansByUser = [];
  $sessionsByPlan = [];
  $achievementsByUser = [];
  foreach($plans as $row) $plansByUser[(int)($row['user_id'] ?? 0)][] = $row;
  foreach($sessions as $row) $sessionsByPlan[(int)($row['plan_id'] ?? 0)][] = $row;
  foreach($achievements as $row) $achievementsByUser[(int)($row['user_id'] ?? 0)][] = $row;
  foreach($users as $uid=>$folder){
    $expectedPlans = $plansByUser[$uid] ?? [];
    $expectedAchievements = $achievementsByUser[$uid] ?? [];
    $path = $root . '/Users/' . $folder . '/fitness.json';
    if($expectedPlans === [] && $expectedAchievements === []){
      if(is_file($path)) $errors[] = ['check'=>'unexpected_empty_fitness_file','userId'=>$uid];
      continue;
    }
    try{ $data = bl_verify_read_json($path)['data']; }
    catch(Throwable $error){ $errors[] = ['check'=>'fitness_file','userId'=>$uid,'error'=>$error->getMessage()]; continue; }
    $actualPlans = [];
    foreach($data['plans'] ?? [] as $plan) $actualPlans[(int)($plan['sourcePlanId'] ?? 0)] = $plan;
    bl_verify_equal(count($actualPlans), count($expectedPlans), 'fitness.plan_count:' . $uid, $errors);
    foreach($expectedPlans as $row){
      $planId = (int)($row['id'] ?? 0);
      try{ $expectedJson = json_decode((string)($row['plan_json'] ?? ''), true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR); }
      catch(Throwable $error){ $errors[] = ['check'=>'fitness_source_plan_invalid','planId'=>$planId]; continue; }
      $actual = $actualPlans[$planId] ?? [];
      bl_verify_equal($actual['plan'] ?? null, $expectedJson, 'fitness.plan:' . $planId, $errors);
      bl_verify_equal($actual['legacyPlanText'] ?? null, (string)($row['plan_text'] ?? ''), 'fitness.plan_text:' . $planId, $errors);
      $actualSessions = [];
      foreach($actual['sessions'] ?? [] as $session) $actualSessions[(int)($session['sourceSessionId'] ?? 0)] = $session;
      $expectedSessions = $sessionsByPlan[$planId] ?? [];
      bl_verify_equal(count($actualSessions), count($expectedSessions), 'fitness.session_count:' . $planId, $errors);
      foreach($expectedSessions as $session){
        $sid = (int)($session['id'] ?? 0);
        bl_verify_equal($actualSessions[$sid]['sessionIndex'] ?? null, (int)($session['session_index'] ?? 0), 'fitness.session_index:' . $sid, $errors);
        bl_verify_equal($actualSessions[$sid]['status'] ?? null, (string)($session['status'] ?? 'planned'), 'fitness.session_status:' . $sid, $errors);
      }
    }
    $actualAchievements = [];
    foreach($data['achievements'] ?? [] as $achievement) $actualAchievements[(string)($achievement['code'] ?? '')] = $achievement;
    bl_verify_equal(count($actualAchievements), count($expectedAchievements), 'fitness.achievement_count:' . $uid, $errors);
    foreach($expectedAchievements as $row){
      $code = (string)($row['code'] ?? '');
      bl_verify_equal($actualAchievements[$code]['unlockedAt'] ?? null, bl_verify_iso($row['unlocked_at'] ?? 0, $sourceTime), 'fitness.achievement:' . $uid . ':' . $code, $errors);
    }
  }
  $counts['fitnessPlans'] = count($plans);
  $counts['fitnessSessions'] = count($sessions);
  $counts['fitnessAchievements'] = count($achievements);
}

function bl_verify_games(PDO $db, string $root, array $users, int $sourceTime, array &$errors, array &$counts): array {
  $rows = bl_verify_source_rows($db, 'games_profiles', ['user_id','app','id']);
  $keys = [];
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){ $errors[] = ['check'=>'game_missing_user','userId'=>$uid]; continue; }
    try{ $app = bl_export_safe_component((string)($row['app'] ?? ''), 'game_resource'); }
    catch(Throwable $error){ $errors[] = ['check'=>'game_unsafe_app','userId'=>$uid,'app'=>(string)($row['app'] ?? '')]; continue; }
    try{ $expected = json_decode((string)($row['profile_json'] ?? ''), true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR); }
    catch(Throwable $error){ $errors[] = ['check'=>'game_source_invalid_json','userId'=>$uid,'app'=>$app]; continue; }
    try{ $data = bl_verify_read_json($root . '/Users/' . $users[$uid] . '/Games/' . $app . '.json')['data']; }
    catch(Throwable $error){ $errors[] = ['check'=>'game_file','userId'=>$uid,'app'=>$app,'error'=>$error->getMessage()]; continue; }
    bl_verify_equal($data['game'] ?? null, $app, 'game.name:' . $uid . ':' . $app, $errors);
    bl_verify_equal($data['profile'] ?? null, $expected, 'game.profile:' . $uid . ':' . $app, $errors);
    $keys[] = $users[$uid] . ':' . $app;
  }
  $counts['gameProfiles'] = count($rows);
  $counts['gameFiles'] = count($keys);
  sort($keys);
  return $keys;
}

function bl_verify_badminton(PDO $db, string $root, int $sourceTime, array &$errors, array &$counts): void {
  $rows = bl_verify_source_rows($db, 'badminton_state_store', ['state_key']);
  $path = $root . '/Shared/Badminton/badminton.json';
  if($rows === []){
    if(is_file($path)) $errors[] = ['check'=>'unexpected_empty_badminton_file'];
    $counts['badmintonStates'] = 0;
    return;
  }
  try{ $states = bl_verify_read_json($path)['data']['states'] ?? []; }
  catch(Throwable $error){ $errors[] = ['check'=>'badminton_file','error'=>$error->getMessage()]; $states = []; }
  bl_verify_equal(count($states), count($rows), 'badminton_state_count', $errors);
  foreach($rows as $row){
    $key = (string)($row['state_key'] ?? '');
    try{ $expected = json_decode((string)($row['state_json'] ?? ''), true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR); }
    catch(Throwable $error){ $errors[] = ['check'=>'badminton_source_invalid_json','stateKey'=>$key]; continue; }
    bl_verify_equal($states[$key] ?? null, $expected, 'badminton.state:' . $key, $errors);
  }
  $counts['badmintonStates'] = count($rows);
}

function bl_verify_representatives(array $userFolders, array $gameKeys): array {
  $values = array_values($userFolders);
  sort($values);
  $pick = static function(array $items): array {
    if($items === []) return [];
    $indexes = array_unique([0, intdiv(count($items) - 1, 2), count($items) - 1]);
    return array_values(array_map(static fn(int $index): string => (string)$items[$index], $indexes));
  };
  return ['users'=>$pick($values), 'games'=>$pick($gameKeys)];
}

function bl_verify_sqlite_export(string $sourcePath, string $exportPath): array {
  $source = bl_export_normalize_path($sourcePath);
  $root = bl_export_normalize_path($exportPath);
  if(!is_file($source) || !is_readable($source) || is_link($source)) throw new BaselineSqliteExportVerificationException('invalid_source');
  if(!is_dir($root) || is_link($root)) throw new BaselineSqliteExportVerificationException('invalid_export_root');
  $sourceTime = filemtime($source);
  if($sourceTime === false) throw new BaselineSqliteExportVerificationException('source_stat_failed');

  $errors = [];
  $counts = [];
  $files = bl_verify_relative_files($root);
  foreach($files as $relative){
    if(!bl_verify_allowed_file($relative)) $errors[] = ['check'=>'unexpected_file','path'=>$relative];
  }
  bl_verify_permissions($root, $files, $errors);

  $reportPath = $root . '/Migration Report/export-report.json';
  try{
    $exportReport = bl_verify_read_json($reportPath, false);
    bl_verify_equal($exportReport['source']['sha256'] ?? null, hash_file('sha256', $source), 'source_hash', $errors);
    bl_verify_equal($exportReport['authority'] ?? null, 'sqlite-copy-read-only', 'authority', $errors);
    if(($exportReport['invalid'] ?? []) !== []) $errors[] = ['check'=>'export_report_invalid_records','records'=>$exportReport['invalid']];
    if(($exportReport['unmappedFields'] ?? []) !== []) $errors[] = ['check'=>'export_report_unmapped_fields','fields'=>$exportReport['unmappedFields']];
  }catch(Throwable $error){
    $errors[] = ['check'=>'export_report','error'=>$error->getMessage()];
    $exportReport = [];
  }

  $db = bl_export_open_readonly($source);
  $users = bl_verify_account_data($db, $root, $sourceTime, $errors, $counts);
  bl_verify_favourites($db, $root, $users, $sourceTime, $errors, $counts);
  bl_verify_binaural($db, $root, $users, $sourceTime, $errors, $counts);
  bl_verify_voice($db, $root, $users, $sourceTime, $errors, $counts);
  bl_verify_fitness($db, $root, $users, $sourceTime, $errors, $counts);
  $gameKeys = bl_verify_games($db, $root, $users, $sourceTime, $errors, $counts);
  bl_verify_badminton($db, $root, $sourceTime, $errors, $counts);
  $db = null;

  foreach($counts as $key=>$value){
    if(array_key_exists($key, $exportReport['counts'] ?? [])){
      bl_verify_equal($exportReport['counts'][$key], $value, 'reported_count:' . $key, $errors);
    }
  }

  return [
    'ok'=>$errors === [],
    'authority'=>'sqlite-copy-read-only',
    'counts'=>$counts,
    'representativeRecords'=>bl_verify_representatives($users, $gameKeys),
    'checkedFiles'=>count($files),
    'errors'=>$errors,
  ];
}
