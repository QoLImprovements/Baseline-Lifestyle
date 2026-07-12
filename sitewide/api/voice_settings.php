<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

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
  $number = (float)$value;
  return max($min, min($max, $number));
}

function bl_voice_int($value, int $default, int $min, int $max): int {
  if(!is_numeric($value)) return $default;
  $number = (int)round((float)$value);
  return max($min, min($max, $number));
}

function bl_voice_settings_normalise($raw): array {
  $value = is_array($raw) ? $raw : [];
  $language = substr(trim((string)($value['language'] ?? 'en-GB')), 0, 24);
  if($language === '') $language = 'en-GB';
  return [
    'enabled' => bl_voice_bool($value['enabled'] ?? false, false),
    'spokenResponses' => bl_voice_bool($value['spokenResponses'] ?? true, true),
    'language' => $language,
    'voiceURI' => substr(trim((string)($value['voiceURI'] ?? '')), 0, 240),
    'rate' => bl_voice_float($value['rate'] ?? 1, 1.0, 0.5, 2.0),
    'pitch' => bl_voice_float($value['pitch'] ?? 1, 1.0, 0.5, 2.0),
    'volume' => bl_voice_float($value['volume'] ?? 1, 1.0, 0.0, 1.0),
    'confirmNumbers' => bl_voice_bool($value['confirmNumbers'] ?? true, true),
    'confirmCommands' => bl_voice_bool($value['confirmCommands'] ?? false, false),
    'restAnnouncements' => bl_voice_bool($value['restAnnouncements'] ?? true, true),
    'countdownAnnouncements' => bl_voice_bool($value['countdownAnnouncements'] ?? true, true),
    'maximumRestSeconds' => bl_voice_int($value['maximumRestSeconds'] ?? 150, 150, 30, 600),
  ];
}

try{
  $db = bl_db();

  if($method === 'GET'){
    $stmt = $db->prepare('SELECT settings_json, updated_at FROM voice_settings WHERE user_id=:u LIMIT 1');
    $stmt->execute([':u'=>$uid]);
    $row = $stmt->fetch();
    if(!$row) bl_json(['ok'=>true,'found'=>false,'settings'=>null]);
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
    $now = time();
    $stmt = $db->prepare('INSERT INTO voice_settings(user_id, settings_json, updated_at)
      VALUES(:u,:j,:t)
      ON CONFLICT(user_id) DO UPDATE SET settings_json=excluded.settings_json, updated_at=excluded.updated_at');
    $stmt->execute([':u'=>$uid, ':j'=>$json, ':t'=>$now]);
    bl_json(['ok'=>true,'settings'=>$normalised,'updatedAt'=>$now]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'voice_settings_failed'], 500);
}
