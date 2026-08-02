<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
require_once __DIR__ . '/resource_authority.php';

$uid = bl_require_user_id();
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

function bl_voice_bool($value, bool $default): bool {
  if(is_bool($value)) return $value;
  if($value === 1 || $value === '1' || $value === 'true') return true;
  if($value === 0 || $value === '0' || $value === 'false') return false;
  return $default;
}

function bl_voice_float($value, float $default, float $min, float $max): float {
  if(!is_numeric($value)) return $default;
  return max($min, min($max, (float)$value));
}

function bl_voice_int($value, int $default, int $min, int $max): int {
  if(!is_numeric($value)) return $default;
  return max($min, min($max, (int)round((float)$value)));
}

function bl_voice_settings_normalise($raw): array {
  $value = is_array($raw) ? $raw : [];
  $language = substr(trim((string)($value['language'] ?? 'en-GB')), 0, 24);
  if($language === '') $language = 'en-GB';
  return [
    'enabled'=>bl_voice_bool($value['enabled'] ?? false, false),
    'spokenResponses'=>bl_voice_bool($value['spokenResponses'] ?? true, true),
    'language'=>$language,
    'voiceURI'=>substr(trim((string)($value['voiceURI'] ?? '')), 0, 240),
    'rate'=>bl_voice_float($value['rate'] ?? 1, 1.0, 0.5, 2.0),
    'pitch'=>bl_voice_float($value['pitch'] ?? 1, 1.0, 0.5, 2.0),
    'volume'=>bl_voice_float($value['volume'] ?? 1, 1.0, 0.0, 1.0),
    'confirmNumbers'=>bl_voice_bool($value['confirmNumbers'] ?? true, true),
    'confirmCommands'=>bl_voice_bool($value['confirmCommands'] ?? false, false),
    'restAnnouncements'=>bl_voice_bool($value['restAnnouncements'] ?? true, true),
    'countdownAnnouncements'=>bl_voice_bool($value['countdownAnnouncements'] ?? true, true),
    'maximumRestSeconds'=>bl_voice_int($value['maximumRestSeconds'] ?? 150, 150, 30, 600),
  ];
}

function bl_voice_sqlite_row(PDO $db, int $uid): ?array {
  $stmt = $db->prepare('SELECT settings_json, updated_at FROM voice_settings WHERE user_id=:u LIMIT 1');
  $stmt->execute([':u'=>$uid]);
  $row = $stmt->fetch();
  return is_array($row) ? $row : null;
}

function bl_voice_write_snapshot(int $uid, ?array $row): ?array {
  $path = bl_saved_user_resource_path($uid, 'voice');
  if($row === null){
    bl_resource_file_delete($path);
    return null;
  }
  $decoded = json_decode((string)($row['settings_json'] ?? ''), true);
  return bl_resource_file_replace($path, bl_voice_settings_normalise($decoded));
}

try{
  $mode = bl_resource_authority();

  if($method === 'GET'){
    if($mode === 'saved-data'){
      $resource = bl_resource_file_read(bl_saved_user_resource_path($uid, 'voice'), []);
      if($resource['revision'] === 0) bl_json(['ok'=>true,'found'=>false,'settings'=>null,'revision'=>0]);
      $settings = bl_voice_settings_normalise($resource['data']);
      bl_json([
        'ok'=>true,
        'found'=>true,
        'settings'=>$settings,
        'updatedAt'=>bl_resource_timestamp($resource['updatedAt']),
        'revision'=>$resource['revision'],
      ]);
    }

    $db = bl_db();
    $row = bl_voice_sqlite_row($db, $uid);
    if($mode === 'mirror') bl_voice_write_snapshot($uid, $row);
    if($row === null) bl_json(['ok'=>true,'found'=>false,'settings'=>null]);
    $decoded = json_decode((string)($row['settings_json'] ?? ''), true);
    bl_json([
      'ok'=>true,
      'found'=>true,
      'settings'=>bl_voice_settings_normalise($decoded),
      'updatedAt'=>(int)($row['updated_at'] ?? 0),
    ]);
  }

  if($method === 'POST'){
    $input = bl_input_json();
    $normalised = bl_voice_settings_normalise($input['settings'] ?? $input);
    $json = json_encode($normalised, JSON_UNESCAPED_SLASHES);
    if($json === false || strlen($json) > 4096) bl_json(['ok'=>false,'error'=>'bad_settings'], 400);

    if($mode === 'saved-data'){
      $path = bl_saved_user_resource_path($uid, 'voice');
      $resource = bl_resource_file_read($path, []);
      $expected = bl_resource_revision_from_input($input);
      if($expected !== null && $expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
      $written = bl_resource_file_replace($path, $normalised, $resource['revision']);
      bl_json([
        'ok'=>true,
        'settings'=>$normalised,
        'updatedAt'=>bl_resource_timestamp((string)$written['updatedAt']),
        'revision'=>$written['revision'],
      ]);
    }

    $db = bl_db();
    $now = time();
    $stmt = $db->prepare('INSERT INTO voice_settings(user_id, settings_json, updated_at)
      VALUES(:u,:j,:t)
      ON CONFLICT(user_id) DO UPDATE SET settings_json=excluded.settings_json, updated_at=excluded.updated_at');
    $stmt->execute([':u'=>$uid, ':j'=>$json, ':t'=>$now]);
    if($mode === 'mirror') bl_voice_write_snapshot($uid, bl_voice_sqlite_row($db, $uid));
    bl_json(['ok'=>true,'settings'=>$normalised,'updatedAt'=>$now]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'voice_settings_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'voice_settings_failed'], 500);
}
