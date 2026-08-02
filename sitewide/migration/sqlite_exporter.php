<?php
declare(strict_types=1);

const BL_EXPORT_SCHEMA_VERSION = 1;
const BL_EXPORT_MAX_JSON_DEPTH = 64;
const BL_EXPORT_MAX_RESOURCE_BYTES = 8_388_608;

final class BaselineSqliteExportException extends RuntimeException {}

function bl_export_normalize_path(string $path): string {
  $path = trim(str_replace('\\', '/', $path));
  if($path === '') throw new BaselineSqliteExportException('empty_path');
  if(!str_starts_with($path, '/') && preg_match('/^[A-Za-z]:\//', $path) !== 1){
    throw new BaselineSqliteExportException('path_must_be_absolute');
  }
  if(str_contains('/' . trim($path, '/') . '/', '/../')){
    throw new BaselineSqliteExportException('parent_path_segment');
  }
  return rtrim($path, '/');
}

function bl_export_safe_component(string $value, string $label='component'): string {
  $value = strtolower(trim($value));
  if($value === '' || preg_match('/^[a-z0-9][a-z0-9._-]{0,95}$/', $value) !== 1){
    throw new BaselineSqliteExportException('invalid_' . $label);
  }
  return $value;
}

function bl_export_join(string $root, string ...$parts): string {
  $path = rtrim($root, '/');
  foreach($parts as $part){
    if($part === '' || $part === '.' || $part === '..' || str_contains($part, '/') || str_contains($part, '\\')){
      throw new BaselineSqliteExportException('unsafe_path_component');
    }
    $path .= '/' . $part;
  }
  return $path;
}

function bl_export_ensure_directory(string $directory): void {
  if(is_link($directory)) throw new BaselineSqliteExportException('directory_is_symlink');
  if(!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)){
    throw new BaselineSqliteExportException('directory_create_failed');
  }
  if(is_link($directory)) throw new BaselineSqliteExportException('directory_is_symlink');
  @chmod($directory, 0700);
}

function bl_export_remove_tree(string $directory): void {
  if($directory === '' || $directory === '/' || !is_dir($directory)) return;
  if(is_link($directory)){
    @unlink($directory);
    return;
  }
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
  );
  foreach($iterator as $item){
    $path = $item->getPathname();
    if($item->isLink() || $item->isFile()) @unlink($path);
    elseif($item->isDir()) @rmdir($path);
  }
  @rmdir($directory);
}

function bl_export_timestamp($value, int $fallback): int {
  $number = is_numeric($value) ? (int)$value : 0;
  return $number > 0 ? $number : max(0, $fallback);
}

function bl_export_iso_time(int $timestamp): string {
  return gmdate('Y-m-d\TH:i:s\Z', max(0, $timestamp));
}

function bl_export_encode(array $value): string {
  $json = json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);
  if(strlen($json) > BL_EXPORT_MAX_RESOURCE_BYTES){
    throw new BaselineSqliteExportException('resource_too_large');
  }
  return $json . "\n";
}

function bl_export_write_json(string $path, array $value): void {
  bl_export_ensure_directory(dirname($path));
  if(is_link($path)) throw new BaselineSqliteExportException('file_is_symlink');
  $temporary = dirname($path) . '/.baseline-export-' . bin2hex(random_bytes(12)) . '.tmp';
  $json = bl_export_encode($value);
  $handle = @fopen($temporary, 'xb');
  if($handle === false) throw new BaselineSqliteExportException('temporary_file_create_failed');
  try{
    $offset = 0;
    while($offset < strlen($json)){
      $written = fwrite($handle, substr($json, $offset));
      if($written === false || $written === 0) throw new BaselineSqliteExportException('temporary_file_write_failed');
      $offset += $written;
    }
    if(!fflush($handle)) throw new BaselineSqliteExportException('temporary_file_flush_failed');
    if(function_exists('fsync') && !fsync($handle)) throw new BaselineSqliteExportException('temporary_file_sync_failed');
  }finally{
    fclose($handle);
  }
  @chmod($temporary, 0600);
  if(!@rename($temporary, $path)){
    @unlink($temporary);
    throw new BaselineSqliteExportException('atomic_file_replace_failed');
  }
  @chmod($path, 0600);
}

function bl_export_envelope(array $data, int $updatedAt): array {
  return [
    'schemaVersion' => BL_EXPORT_SCHEMA_VERSION,
    'revision' => 1,
    'updatedAt' => bl_export_iso_time($updatedAt),
    'data' => $data,
  ];
}

function bl_export_open_readonly(string $source): PDO {
  if(!extension_loaded('pdo_sqlite')) throw new BaselineSqliteExportException('pdo_sqlite_required');
  $encoded = str_replace('%2F', '/', rawurlencode($source));
  $db = new PDO('sqlite:file:' . $encoded . '?mode=ro', null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
  $db->exec('PRAGMA query_only = ON');
  $db->exec('PRAGMA foreign_keys = ON');
  $check = $db->query('PRAGMA quick_check')->fetchAll(PDO::FETCH_COLUMN);
  if($check !== ['ok']) throw new BaselineSqliteExportException('source_quick_check_failed');
  return $db;
}

function bl_export_table_columns(PDO $db, string $table): array {
  $safe = str_replace("'", "''", $table);
  $rows = $db->query("PRAGMA table_info('{$safe}')")->fetchAll() ?: [];
  $columns = [];
  foreach($rows as $row){
    $name = (string)($row['name'] ?? '');
    if($name !== '') $columns[] = $name;
  }
  return $columns;
}

function bl_export_table_exists(PDO $db, string $table): bool {
  $stmt = $db->prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name=:name LIMIT 1");
  $stmt->execute([':name'=>$table]);
  return (bool)$stmt->fetchColumn();
}

function bl_export_rows(PDO $db, string $table, array $preferredOrder=[]): array {
  if(!bl_export_table_exists($db, $table)) return [];
  $columns = bl_export_table_columns($db, $table);
  $order = [];
  foreach($preferredOrder as $column){
    if(in_array($column, $columns, true)) $order[] = '"' . str_replace('"', '""', $column) . '" ASC';
  }
  $sql = 'SELECT * FROM "' . str_replace('"', '""', $table) . '"';
  if($order !== []) $sql .= ' ORDER BY ' . implode(', ', $order);
  return $db->query($sql)->fetchAll() ?: [];
}

function bl_export_json_value($raw, string $label, array &$invalid): ?array {
  if($raw === null || $raw === '') return null;
  try{
    $decoded = json_decode((string)$raw, true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $error){
    $invalid[] = ['resource'=>$label, 'reason'=>'invalid_json'];
    return null;
  }
  if(!is_array($decoded)){
    $invalid[] = ['resource'=>$label, 'reason'=>'json_not_object_or_array'];
    return null;
  }
  return $decoded;
}

function bl_export_extra_fields(array $row, array $mapped): array {
  $extra = [];
  foreach($row as $key=>$value){
    if(!in_array((string)$key, $mapped, true)) $extra[(string)$key] = $value;
  }
  ksort($extra);
  return $extra;
}

function bl_export_user_folder(int $id): string {
  if($id <= 0) throw new BaselineSqliteExportException('invalid_user_id');
  return sprintf('%06d', $id);
}

function bl_export_accounts(PDO $db, string $root, int $sourceTime, array &$report): array {
  $rows = bl_export_rows($db, 'users', ['id']);
  $byId = [];
  $index = ['byName'=>[], 'byEmail'=>[], 'byProvider'=>[]];
  $mapped = ['id','name','email','email_normalized','pass_hash','auth_provider','google_sub','created_at','updated_at','last_login_at'];

  foreach($rows as $row){
    $id = (int)($row['id'] ?? 0);
    if($id <= 0){
      $report['invalid'][] = ['table'=>'users','reason'=>'invalid_user_id'];
      continue;
    }
    $folder = bl_export_user_folder($id);
    $name = trim((string)($row['name'] ?? ''));
    $email = trim((string)($row['email'] ?? ''));
    $emailNormalized = trim((string)($row['email_normalized'] ?? ''));
    if($emailNormalized === '' && $email !== '') $emailNormalized = strtolower($email);
    $provider = trim((string)($row['auth_provider'] ?? 'password')) ?: 'password';
    $googleSub = trim((string)($row['google_sub'] ?? ''));
    $updated = bl_export_timestamp($row['updated_at'] ?? 0, bl_export_timestamp($row['created_at'] ?? 0, $sourceTime));
    $extra = bl_export_extra_fields($row, $mapped);
    if($extra !== []) $report['unmappedFields']['users'] = array_values(array_unique(array_merge($report['unmappedFields']['users'] ?? [], array_keys($extra))));

    $account = [
      'userId'=>$folder,
      'username'=>$name,
      'email'=>$email,
      'authentication'=>[
        'passwordHash'=>(string)($row['pass_hash'] ?? ''),
        'primaryProvider'=>$provider,
        'providers'=>array_values(array_filter([
          $provider !== '' ? ['provider'=>$provider, 'subject'=>$provider === 'google' ? $googleSub : null] : null,
          ($googleSub !== '' && $provider !== 'google') ? ['provider'=>'google', 'subject'=>$googleSub] : null,
        ])),
      ],
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
      'updatedAt'=>bl_export_iso_time($updated),
      'lastLoginAt'=>isset($row['last_login_at']) && is_numeric($row['last_login_at']) ? bl_export_iso_time((int)$row['last_login_at']) : null,
    ];
    if($extra !== []) $account['legacyFields'] = $extra;
    bl_export_write_json(bl_export_join($root, 'Users', $folder, 'account.json'), bl_export_envelope($account, $updated));

    $normalizedName = strtolower($name);
    if($normalizedName !== '') $index['byName'][$normalizedName] = $folder;
    if($emailNormalized !== '') $index['byEmail'][$emailNormalized] = $folder;
    if($googleSub !== '') $index['byProvider']['google:' . $googleSub] = $folder;
    $byId[$id] = ['folder'=>$folder, 'updatedAt'=>$updated];
  }
  ksort($index['byName']);
  ksort($index['byEmail']);
  ksort($index['byProvider']);
  if($byId !== []){
    bl_export_write_json(
      bl_export_join($root, 'Account Index', 'accounts.json'),
      bl_export_envelope($index, $sourceTime)
    );
  }
  $report['counts']['accounts'] = count($byId);
  $report['counts']['providerLinks'] = count($index['byProvider']);
  return $byId;
}

function bl_export_favourites(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'favourites', ['user_id','app','recipe_id','id']);
  $grouped = [];
  $mapped = ['id','user_id','app','recipe_id','created_at'];
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'favourites','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $grouped[$uid][] = [
      'app'=>(string)($row['app'] ?? ''),
      'recipeId'=>(string)($row['recipe_id'] ?? ''),
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
    ];
    $extra = bl_export_extra_fields($row, $mapped);
    if($extra !== []) $report['unmappedFields']['favourites'] = array_values(array_unique(array_merge($report['unmappedFields']['favourites'] ?? [], array_keys($extra))));
  }
  foreach($grouped as $uid=>$items){
    usort($items, static fn(array $a,array $b): int => [$a['app'],$a['recipeId']] <=> [$b['app'],$b['recipeId']]);
    bl_export_write_json(bl_export_join($root,'Users',$users[$uid]['folder'],'favourites.json'), bl_export_envelope(['items'=>$items], $sourceTime));
  }
  $report['counts']['favourites'] = count($rows);
}

function bl_export_binaural(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'binaural_presets', ['user_id','name','id']);
  $grouped = [];
  $mapped = ['id','user_id','name','beat_hz','carrier_hz','bed_type','beat_vol','bed_vol','created_at','updated_at'];
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'binaural_presets','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $grouped[$uid][] = [
      'name'=>(string)($row['name'] ?? ''),
      'beatHz'=>(float)($row['beat_hz'] ?? 0),
      'carrierHz'=>(float)($row['carrier_hz'] ?? 0),
      'bedType'=>(string)($row['bed_type'] ?? ''),
      'beatVolume'=>(float)($row['beat_vol'] ?? 0),
      'bedVolume'=>(float)($row['bed_vol'] ?? 0),
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
      'updatedAt'=>bl_export_iso_time(bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime)),
    ];
    $extra = bl_export_extra_fields($row, $mapped);
    if($extra !== []) $report['unmappedFields']['binaural_presets'] = array_values(array_unique(array_merge($report['unmappedFields']['binaural_presets'] ?? [], array_keys($extra))));
  }
  foreach($grouped as $uid=>$presets){
    bl_export_write_json(bl_export_join($root,'Users',$users[$uid]['folder'],'binaural.json'), bl_export_envelope(['presets'=>$presets], $sourceTime));
  }
  $report['counts']['binauralPresets'] = count($rows);
}

function bl_export_voice(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'voice_settings', ['user_id']);
  $written = 0;
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'voice_settings','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $settings = bl_export_json_value($row['settings_json'] ?? null, 'voice_settings:' . $uid, $report['invalid']);
    if($settings === null) continue;
    $updated = bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime);
    bl_export_write_json(bl_export_join($root,'Users',$users[$uid]['folder'],'voice.json'), bl_export_envelope(['settings'=>$settings], $updated));
    $written++;
    $extra = bl_export_extra_fields($row, ['user_id','settings_json','updated_at']);
    if($extra !== []) $report['unmappedFields']['voice_settings'] = array_values(array_unique(array_merge($report['unmappedFields']['voice_settings'] ?? [], array_keys($extra))));
  }
  $report['counts']['voiceSettings'] = count($rows);
  $report['counts']['voiceFiles'] = $written;
}

function bl_export_fitness(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $plans = bl_export_rows($db, 'plans', ['user_id','created_at','id']);
  $sessions = bl_export_rows($db, 'plan_sessions', ['user_id','plan_id','session_index','id']);
  $achievements = bl_export_rows($db, 'achievements', ['user_id','unlocked_at','id']);
  $byUser = [];
  $sessionsByPlan = [];
  foreach($sessions as $row){
    $sessionsByPlan[(int)($row['plan_id'] ?? 0)][] = $row;
  }
  foreach($plans as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'plans','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $planId = (int)($row['id'] ?? 0);
    $planJson = bl_export_json_value($row['plan_json'] ?? null, 'plan:' . $planId, $report['invalid']);
    $record = [
      'sourcePlanId'=>$planId,
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
      'plan'=>$planJson,
      'legacyPlanText'=>(string)($row['plan_text'] ?? ''),
      'sessions'=>[],
    ];
    foreach($sessionsByPlan[$planId] ?? [] as $session){
      $record['sessions'][] = [
        'sourceSessionId'=>(int)($session['id'] ?? 0),
        'sessionIndex'=>(int)($session['session_index'] ?? 0),
        'scheduledDate'=>(string)($session['scheduled_date'] ?? ''),
        'status'=>(string)($session['status'] ?? 'planned'),
        'completedAt'=>isset($session['completed_at']) && is_numeric($session['completed_at']) ? bl_export_iso_time((int)$session['completed_at']) : null,
        'updatedAt'=>bl_export_iso_time(bl_export_timestamp($session['updated_at'] ?? 0, $sourceTime)),
      ];
    }
    $byUser[$uid]['plans'][] = $record;
  }
  foreach($achievements as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'achievements','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $byUser[$uid]['achievements'][] = [
      'code'=>(string)($row['code'] ?? ''),
      'unlockedAt'=>bl_export_iso_time(bl_export_timestamp($row['unlocked_at'] ?? 0, $sourceTime)),
    ];
  }
  foreach($byUser as $uid=>$data){
    $payload = [
      'plans'=>$data['plans'] ?? [],
      'achievements'=>$data['achievements'] ?? [],
    ];
    bl_export_write_json(bl_export_join($root,'Users',$users[$uid]['folder'],'fitness.json'), bl_export_envelope($payload, $sourceTime));
  }
  $report['counts']['fitnessPlans'] = count($plans);
  $report['counts']['fitnessSessions'] = count($sessions);
  $report['counts']['fitnessAchievements'] = count($achievements);
}

function bl_export_games(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'games_profiles', ['user_id','app','id']);
  $written = 0;
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'games_profiles','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    try{
      $app = bl_export_safe_component((string)($row['app'] ?? ''), 'game_resource');
    }catch(BaselineSqliteExportException $error){
      $report['invalid'][] = ['table'=>'games_profiles','reason'=>'unsafe_app','value'=>(string)($row['app'] ?? '')];
      continue;
    }
    $profile = bl_export_json_value($row['profile_json'] ?? null, 'game:' . $uid . ':' . $app, $report['invalid']);
    if($profile === null) continue;
    $updated = bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime);
    $payload = [
      'game'=>$app,
      'profile'=>$profile,
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
      'updatedAt'=>bl_export_iso_time($updated),
    ];
    bl_export_write_json(bl_export_join($root,'Users',$users[$uid]['folder'],'Games',$app . '.json'), bl_export_envelope($payload, $updated));
    $written++;
  }
  $report['counts']['gameProfiles'] = count($rows);
  $report['counts']['gameFiles'] = $written;
}

function bl_export_badminton(PDO $db, string $root, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'badminton_state_store', ['state_key']);
  if($rows === []){
    $report['counts']['badmintonStates'] = 0;
    return;
  }
  $states = [];
  $updated = $sourceTime;
  foreach($rows as $row){
    $key = trim((string)($row['state_key'] ?? ''));
    if($key === ''){
      $report['invalid'][] = ['table'=>'badminton_state_store','reason'=>'empty_state_key'];
      continue;
    }
    $decoded = bl_export_json_value($row['state_json'] ?? null, 'badminton:' . $key, $report['invalid']);
    if($decoded === null) continue;
    $states[$key] = $decoded;
    $updated = max($updated, bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime));
  }
  ksort($states);
  if($states !== []){
    bl_export_write_json(bl_export_join($root,'Shared','Badminton','badminton.json'), bl_export_envelope(['states'=>$states], $updated));
  }
  $report['counts']['badmintonStates'] = count($rows);
}

function bl_export_field_map(): array {
  return [
    'users'=>['target'=>'Users/{padded-id}/account.json','fields'=>['id'=>'userId','name'=>'username','email'=>'email','pass_hash'=>'authentication.passwordHash','auth_provider'=>'authentication.primaryProvider','google_sub'=>'authentication.providers','created_at'=>'createdAt','updated_at'=>'updatedAt','last_login_at'=>'lastLoginAt']],
    'favourites'=>['target'=>'Users/{padded-id}/favourites.json','fields'=>['app'=>'items[].app','recipe_id'=>'items[].recipeId','created_at'=>'items[].createdAt']],
    'binaural_presets'=>['target'=>'Users/{padded-id}/binaural.json'],
    'voice_settings'=>['target'=>'Users/{padded-id}/voice.json'],
    'plans+plan_sessions+achievements'=>['target'=>'Users/{padded-id}/fitness.json'],
    'games_profiles'=>['target'=>'Users/{padded-id}/Games/{app}.json'],
    'badminton_state_store'=>['target'=>'Shared/Badminton/badminton.json'],
    'password_reset_tokens'=>['target'=>null,'status'=>'intentionally_not_exported','reason'=>'ephemeral recovery credentials must not become permanent Saved Data'],
    'rate_limit_events'=>['target'=>null,'status'=>'intentionally_not_exported','reason'=>'ephemeral security telemetry'],
    'schema_migrations'=>['target'=>null,'status'=>'reported_only','reason'=>'database implementation metadata'],
  ];
}

function bl_export_sqlite_copy(string $sourcePath, string $destinationPath): array {
  $source = bl_export_normalize_path($sourcePath);
  $destination = bl_export_normalize_path($destinationPath);
  if(!is_file($source) || !is_readable($source)) throw new BaselineSqliteExportException('source_not_readable');
  if(is_link($source)) throw new BaselineSqliteExportException('source_is_symlink');
  if($source === $destination || str_starts_with($destination . '/', $source . '/')) throw new BaselineSqliteExportException('destination_conflicts_with_source');

  $sourceHashBefore = hash_file('sha256', $source);
  $sourceSizeBefore = filesize($source);
  $sourceMtimeBefore = filemtime($source);
  if($sourceHashBefore === false || $sourceSizeBefore === false || $sourceMtimeBefore === false){
    throw new BaselineSqliteExportException('source_stat_failed');
  }

  $parent = dirname($destination);
  bl_export_ensure_directory($parent);
  if(is_link($destination)) throw new BaselineSqliteExportException('destination_is_symlink');
  $staging = $destination . '.staging-' . bin2hex(random_bytes(8));
  $backup = $destination . '.previous-' . bin2hex(random_bytes(8));
  bl_export_ensure_directory($staging);

  $report = [
    'formatVersion'=>BL_EXPORT_SCHEMA_VERSION,
    'authority'=>'sqlite-copy-read-only',
    'source'=>[
      'sha256'=>$sourceHashBefore,
      'sizeBytes'=>$sourceSizeBefore,
      'modifiedAt'=>bl_export_iso_time($sourceMtimeBefore),
    ],
    'counts'=>[],
    'missingTables'=>[],
    'invalid'=>[],
    'unmappedFields'=>[],
    'intentionallyNotExported'=>['password_reset_tokens','rate_limit_events','schema_migrations'],
  ];

  $expectedTables = ['users','favourites','binaural_presets','voice_settings','plans','plan_sessions','achievements','games_profiles','badminton_state_store'];
  $swapped = false;
  try{
    $db = bl_export_open_readonly($source);
    foreach($expectedTables as $table){
      if(!bl_export_table_exists($db, $table)) $report['missingTables'][] = $table;
    }
    $users = bl_export_accounts($db, $staging, $sourceMtimeBefore, $report);
    bl_export_favourites($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_binaural($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_voice($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_fitness($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_games($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_badminton($db, $staging, $sourceMtimeBefore, $report);
    $db = null;

    foreach($report['unmappedFields'] as &$fields){ sort($fields); }
    unset($fields);
    sort($report['missingTables']);
    bl_export_write_json(bl_export_join($staging,'Migration Report','field-map.json'), bl_export_field_map());
    bl_export_write_json(bl_export_join($staging,'Migration Report','export-report.json'), $report);

    $sourceHashAfter = hash_file('sha256', $source);
    if($sourceHashAfter !== $sourceHashBefore || filesize($source) !== $sourceSizeBefore || filemtime($source) !== $sourceMtimeBefore){
      throw new BaselineSqliteExportException('source_changed_during_export');
    }

    if(is_dir($destination)){
      if(!@rename($destination, $backup)) throw new BaselineSqliteExportException('existing_export_backup_failed');
    }elseif(file_exists($destination)){
      throw new BaselineSqliteExportException('destination_not_directory');
    }
    if(!@rename($staging, $destination)){
      if(is_dir($backup)) @rename($backup, $destination);
      throw new BaselineSqliteExportException('export_swap_failed');
    }
    $swapped = true;
    if(is_dir($backup)) bl_export_remove_tree($backup);
    return $report;
  }catch(Throwable $error){
    if(!$swapped && is_dir($staging)) bl_export_remove_tree($staging);
    if(!is_dir($destination) && is_dir($backup)) @rename($backup, $destination);
    if($error instanceof BaselineSqliteExportException) throw $error;
    throw new BaselineSqliteExportException('export_failed: ' . $error->getMessage(), 0, $error);
  }
}
