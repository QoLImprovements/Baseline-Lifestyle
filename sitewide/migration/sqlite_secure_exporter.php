<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_exporter.php';

/**
 * Security-aligned exporter entry point.
 *
 * The earlier low-level exporter functions remain available for fixture history,
 * but all supported CLI, verification and validation paths use this entry point.
 * It deliberately excludes authentication credentials and provider subjects from
 * Saved Data account projections and uses approved direct resource payloads.
 */

function bl_secure_export_accounts(PDO $db, string $root, int $sourceTime, array &$report): array {
  $rows = bl_export_rows($db, 'users', ['id']);
  $byId = [];
  $index = ['byName'=>[], 'byEmail'=>[]];
  $mapped = ['id','name','email','email_normalized','pass_hash','auth_provider','google_sub','created_at','updated_at','last_login_at'];
  $report['intentionallyNotExportedFields']['users'] = ['pass_hash','google_sub'];

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
    $updated = bl_export_timestamp($row['updated_at'] ?? 0, bl_export_timestamp($row['created_at'] ?? 0, $sourceTime));
    $extra = bl_export_extra_fields($row, $mapped);
    if($extra !== []){
      $report['unmappedFields']['users'] = array_values(array_unique(array_merge(
        $report['unmappedFields']['users'] ?? [],
        array_keys($extra)
      )));
    }

    $account = [
      'userId'=>$id,
      'name'=>$name,
      'email'=>$email,
      'authProvider'=>$provider,
      'createdAt'=>bl_export_iso_time(bl_export_timestamp($row['created_at'] ?? 0, $sourceTime)),
      'updatedAt'=>bl_export_iso_time($updated),
      'lastLoginAt'=>isset($row['last_login_at']) && is_numeric($row['last_login_at'])
        ? bl_export_iso_time((int)$row['last_login_at'])
        : null,
    ];
    bl_export_write_json(
      bl_export_join($root, 'Users', $folder, 'account.json'),
      bl_export_envelope($account, $updated)
    );

    $normalizedName = strtolower($name);
    if($normalizedName !== '') $index['byName'][$normalizedName] = $folder;
    if($emailNormalized !== '') $index['byEmail'][$emailNormalized] = $folder;
    $byId[$id] = ['folder'=>$folder, 'updatedAt'=>$updated];
  }

  ksort($index['byName']);
  ksort($index['byEmail']);
  if($byId !== []){
    bl_export_write_json(
      bl_export_join($root, 'Account Index', 'accounts.json'),
      bl_export_envelope($index, $sourceTime)
    );
  }
  $report['counts']['accounts'] = count($byId);
  return $byId;
}

function bl_secure_voice_bool($value, bool $default): bool {
  if(is_bool($value)) return $value;
  if($value === 1 || $value === '1' || $value === 'true') return true;
  if($value === 0 || $value === '0' || $value === 'false') return false;
  return $default;
}

function bl_secure_voice_float($value, float $default, float $minimum, float $maximum): float {
  if(!is_numeric($value)) return $default;
  return max($minimum, min($maximum, (float)$value));
}

function bl_secure_voice_int($value, int $default, int $minimum, int $maximum): int {
  if(!is_numeric($value)) return $default;
  return max($minimum, min($maximum, (int)round((float)$value)));
}

function bl_secure_voice_settings(array $settings, array &$report): array {
  $allowed = [
    'enabled',
    'spokenResponses',
    'language',
    'voiceURI',
    'rate',
    'pitch',
    'volume',
    'confirmNumbers',
    'confirmCommands',
    'restAnnouncements',
    'countdownAnnouncements',
    'maximumRestSeconds',
  ];
  $unexpected = array_values(array_diff(array_keys($settings), $allowed));
  sort($unexpected);
  if($unexpected !== []){
    $report['unmappedFields']['voice_settings.settings_json'] = array_values(array_unique(array_merge(
      $report['unmappedFields']['voice_settings.settings_json'] ?? [],
      $unexpected
    )));
  }

  $language = substr(trim((string)($settings['language'] ?? 'en-GB')), 0, 24);
  if($language === '') $language = 'en-GB';
  return [
    'enabled'=>bl_secure_voice_bool($settings['enabled'] ?? false, false),
    'spokenResponses'=>bl_secure_voice_bool($settings['spokenResponses'] ?? true, true),
    'language'=>$language,
    'voiceURI'=>substr(trim((string)($settings['voiceURI'] ?? '')), 0, 240),
    'rate'=>bl_secure_voice_float($settings['rate'] ?? 1, 1.0, 0.5, 2.0),
    'pitch'=>bl_secure_voice_float($settings['pitch'] ?? 1, 1.0, 0.5, 2.0),
    'volume'=>bl_secure_voice_float($settings['volume'] ?? 1, 1.0, 0.0, 1.0),
    'confirmNumbers'=>bl_secure_voice_bool($settings['confirmNumbers'] ?? true, true),
    'confirmCommands'=>bl_secure_voice_bool($settings['confirmCommands'] ?? false, false),
    'restAnnouncements'=>bl_secure_voice_bool($settings['restAnnouncements'] ?? true, true),
    'countdownAnnouncements'=>bl_secure_voice_bool($settings['countdownAnnouncements'] ?? true, true),
    'maximumRestSeconds'=>bl_secure_voice_int($settings['maximumRestSeconds'] ?? 150, 150, 30, 600),
  ];
}

function bl_secure_export_voice(PDO $db, string $root, array $users, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'voice_settings', ['user_id']);
  $written = 0;
  foreach($rows as $row){
    $uid = (int)($row['user_id'] ?? 0);
    if(!isset($users[$uid])){
      $report['invalid'][] = ['table'=>'voice_settings','reason'=>'missing_user','userId'=>$uid];
      continue;
    }
    $decoded = bl_export_json_value($row['settings_json'] ?? null, 'voice_settings:' . $uid, $report['invalid']);
    if($decoded === null) continue;
    $settings = bl_secure_voice_settings($decoded, $report);
    $updated = bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime);
    bl_export_write_json(
      bl_export_join($root, 'Users', $users[$uid]['folder'], 'voice.json'),
      bl_export_envelope($settings, $updated)
    );
    $written++;
    $extra = bl_export_extra_fields($row, ['user_id','settings_json','updated_at']);
    if($extra !== []){
      $report['unmappedFields']['voice_settings'] = array_values(array_unique(array_merge(
        $report['unmappedFields']['voice_settings'] ?? [],
        array_keys($extra)
      )));
    }
  }
  $report['counts']['voiceSettings'] = count($rows);
  $report['counts']['voiceFiles'] = $written;
}

function bl_secure_export_badminton(PDO $db, string $root, int $sourceTime, array &$report): void {
  $rows = bl_export_rows($db, 'badminton_state_store', ['state_key']);
  $report['counts']['badmintonStates'] = count($rows);
  $report['counts']['badmintonFiles'] = 0;
  if($rows === []) return;

  if(count($rows) !== 1){
    $report['invalid'][] = ['table'=>'badminton_state_store','reason'=>'unexpected_state_row_count'];
    return;
  }

  $row = $rows[0];
  $mapped = ['state_key','state_json','updated_at'];
  $extra = bl_export_extra_fields($row, $mapped);
  if($extra !== []){
    $report['unmappedFields']['badminton_state_store'] = array_values(array_unique(array_merge(
      $report['unmappedFields']['badminton_state_store'] ?? [],
      array_keys($extra)
    )));
  }

  $key = trim((string)($row['state_key'] ?? ''));
  if($key !== 'global'){
    $report['invalid'][] = ['table'=>'badminton_state_store','reason'=>'unexpected_state_key'];
    return;
  }

  $decoded = bl_export_json_value($row['state_json'] ?? null, 'badminton:global', $report['invalid']);
  if($decoded === null) return;
  $updated = bl_export_timestamp($row['updated_at'] ?? 0, $sourceTime);
  bl_export_write_json(
    bl_export_join($root, 'Shared', 'badminton-session.json'),
    bl_export_envelope($decoded, $updated)
  );
  $report['counts']['badmintonFiles'] = 1;
}

function bl_secure_export_field_map(): array {
  $map = bl_export_field_map();
  $map['users'] = [
    'target'=>'Users/{padded-id}/account.json',
    'fields'=>[
      'id'=>'userId',
      'name'=>'name',
      'email'=>'email',
      'auth_provider'=>'authProvider',
      'created_at'=>'createdAt',
      'updated_at'=>'updatedAt',
      'last_login_at'=>'lastLoginAt',
    ],
    'intentionallyNotExported'=>[
      'pass_hash'=>'authentication credential remains in the hardened authoritative store',
      'google_sub'=>'provider subject remains in the hardened authoritative store',
    ],
  ];
  $map['voice_settings'] = [
    'target'=>'Users/{padded-id}/voice.json',
    'fields'=>[
      'settings_json'=>'data (direct normalised voice settings)',
      'updated_at'=>'updatedAt',
    ],
    'allowedSettings'=>[
      'enabled','spokenResponses','language','voiceURI','rate','pitch','volume',
      'confirmNumbers','confirmCommands','restAnnouncements','countdownAnnouncements','maximumRestSeconds',
    ],
  ];
  $map['badminton_state_store'] = [
    'target'=>'Shared/badminton-session.json',
    'requiredStateKey'=>'global',
    'fields'=>[
      'state_json'=>'data (direct canonical Badminton state)',
      'updated_at'=>'updatedAt',
    ],
  ];
  return $map;
}

function bl_secure_export_sqlite_copy(string $sourcePath, string $destinationPath): array {
  $source = bl_export_normalize_path($sourcePath);
  $destination = bl_export_normalize_path($destinationPath);
  if(!is_file($source) || !is_readable($source)) throw new BaselineSqliteExportException('source_not_readable');
  if(is_link($source)) throw new BaselineSqliteExportException('source_is_symlink');
  if($source === $destination || str_starts_with($destination . '/', $source . '/')){
    throw new BaselineSqliteExportException('destination_conflicts_with_source');
  }

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
    'intentionallyNotExportedFields'=>[],
  ];

  $expectedTables = ['users','favourites','binaural_presets','voice_settings','plans','plan_sessions','achievements','games_profiles','badminton_state_store'];
  $swapped = false;
  try{
    $db = bl_export_open_readonly($source);
    foreach($expectedTables as $table){
      if(!bl_export_table_exists($db, $table)) $report['missingTables'][] = $table;
    }
    $users = bl_secure_export_accounts($db, $staging, $sourceMtimeBefore, $report);
    bl_export_favourites($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_binaural($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_secure_export_voice($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_fitness($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_export_games($db, $staging, $users, $sourceMtimeBefore, $report);
    bl_secure_export_badminton($db, $staging, $sourceMtimeBefore, $report);
    $db = null;

    foreach($report['unmappedFields'] as &$fields) sort($fields);
    unset($fields);
    foreach($report['intentionallyNotExportedFields'] as &$fields) sort($fields);
    unset($fields);
    sort($report['missingTables']);
    bl_export_write_json(bl_export_join($staging, 'Migration Report', 'field-map.json'), bl_secure_export_field_map());
    bl_export_write_json(bl_export_join($staging, 'Migration Report', 'export-report.json'), $report);

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
    throw new BaselineSqliteExportException('secure_export_failed: ' . $error->getMessage(), 0, $error);
  }
}
