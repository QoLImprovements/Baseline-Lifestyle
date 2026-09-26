<?php
declare(strict_types=1);

require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_FOOD_RESOURCE_SCHEMA_VERSION = 1;
const BL_FOOD_RESOURCE_MAX_BYTES = 2097152;
const BL_FOOD_RESOURCE_MAX_DEPTH = 32;
const BL_FOOD_RESOURCE_MAX_ITEMS = 30000;
const BL_FOOD_RESOURCE_MAX_NOTE_BYTES = 20000;
const BL_FOOD_RESOURCE_MAX_RECIPES = 2000;
const BL_FOOD_RESOURCE_MAX_DAY_ENTRIES = 2000;

function bl_food_default_document(): array {
  return [
    'schemaVersion'=>BL_FOOD_RESOURCE_SCHEMA_VERSION,
    'logs'=>[],
    'notes'=>[],
    'recipes'=>[],
    'health'=>[],
  ];
}

function bl_food_payload(): array {
  $raw = file_get_contents('php://input') ?: '';
  if(strlen($raw) > BL_FOOD_RESOURCE_MAX_BYTES) bl_json(['ok'=>false,'error'=>'payload_too_large'], 413);
  try{
    $decoded = json_decode($raw, true, BL_FOOD_RESOURCE_MAX_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $e){
    bl_json(['ok'=>false,'error'=>'invalid_json'], 400);
  }
  if(!is_array($decoded)) bl_json(['ok'=>false,'error'=>'invalid_payload'], 400);
  return $decoded;
}

function bl_food_clean_value($value, int $depth=0, int &$items=0){
  if($depth > BL_FOOD_RESOURCE_MAX_DEPTH) throw new InvalidArgumentException('food_document_too_deep');
  $items += 1;
  if($items > BL_FOOD_RESOURCE_MAX_ITEMS) throw new InvalidArgumentException('food_document_too_large');
  if(is_array($value)){
    $clean = [];
    foreach($value as $key=>$entry){
      $cleanKey = is_int($key) ? $key : substr((string)$key, 0, 160);
      $lower = strtolower((string)$cleanKey);
      if(in_array($lower, ['password','password_hash','provider_subject','provider_sub','google_sub','oauth_subject'], true)){
        throw new InvalidArgumentException('forbidden_sensitive_field');
      }
      $clean[$cleanKey] = bl_food_clean_value($entry, $depth + 1, $items);
    }
    return $clean;
  }
  if(is_string($value)) return strlen($value) > 200000 ? substr($value, 0, 200000) : $value;
  if(is_int($value) || is_bool($value) || $value === null) return $value;
  if(is_float($value)) return is_finite($value) ? $value : 0;
  return null;
}

function bl_food_date_key(string $key): string {
  if(preg_match('/^\d{4}-\d{2}-\d{2}$/', $key) !== 1) throw new InvalidArgumentException('invalid_food_date');
  return $key;
}

function bl_food_document($value): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_food_document');
  $logsRaw = $value['logs'] ?? [];
  $notesRaw = $value['notes'] ?? [];
  $recipesRaw = $value['recipes'] ?? [];
  $healthRaw = $value['health'] ?? [];
  if(!is_array($logsRaw) || !is_array($notesRaw) || !is_array($recipesRaw) || !is_array($healthRaw)){
    throw new InvalidArgumentException('invalid_food_document');
  }
  if(count($recipesRaw) > BL_FOOD_RESOURCE_MAX_RECIPES) throw new InvalidArgumentException('too_many_food_recipes');

  $items = 0;
  $logs = [];
  foreach($logsRaw as $date=>$entries){
    $date = bl_food_date_key((string)$date);
    if(!is_array($entries) || count($entries) > BL_FOOD_RESOURCE_MAX_DAY_ENTRIES){
      throw new InvalidArgumentException('invalid_food_day_entries');
    }
    $cleanEntries = bl_food_clean_value($entries, 0, $items);
    $logs[$date] = is_array($cleanEntries) ? array_values($cleanEntries) : [];
  }

  $notes = [];
  foreach($notesRaw as $date=>$note){
    $date = bl_food_date_key((string)$date);
    if(!is_string($note)) throw new InvalidArgumentException('invalid_food_note');
    if(strlen($note) > BL_FOOD_RESOURCE_MAX_NOTE_BYTES) throw new InvalidArgumentException('food_note_too_large');
    $notes[$date] = $note;
  }

  $recipes = bl_food_clean_value(array_values($recipesRaw), 0, $items);
  if(!is_array($recipes)) $recipes = [];

  $healthAllowed = ['weightKg','heightCm','ageYears','sex','activity','goal'];
  $health = [];
  foreach($healthAllowed as $field){
    if(!array_key_exists($field, $healthRaw)) continue;
    $value = $healthRaw[$field];
    if(!is_string($value) && !is_int($value) && !is_float($value) && $value !== null){
      throw new InvalidArgumentException('invalid_food_health_field');
    }
    $health[$field] = is_float($value) && !is_finite($value) ? 0 : $value;
  }

  ksort($logs);
  ksort($notes);
  return [
    'schemaVersion'=>BL_FOOD_RESOURCE_SCHEMA_VERSION,
    'logs'=>$logs,
    'notes'=>$notes,
    'recipes'=>$recipes,
    'health'=>$health,
  ];
}

bl_session_start();
$uid = bl_require_user_id();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));
$path = bl_saved_user_resource_path($uid, 'food');

try{
  if($method === 'GET'){
    $resource = bl_resource_file_read($path, bl_food_default_document());
    $found = $resource['revision'] > 0;
    $document = bl_food_document($resource['data']);
    bl_json([
      'ok'=>true,
      'found'=>$found,
      'revision'=>$resource['revision'],
      'updatedAt'=>$resource['updatedAt'],
      'document'=>$document,
    ]);
  }

  if($method === 'POST'){
    $payload = bl_food_payload();
    $action = strtolower(trim((string)($payload['action'] ?? 'save')));
    if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
    $expected = bl_resource_required_revision_from_input($payload);
    $current = bl_resource_file_read($path, bl_food_default_document());
    if($current['revision'] !== $expected) throw new BaselineSavedDataConflictException('revision_conflict');
    $document = bl_food_document($payload['document'] ?? null);
    $written = bl_resource_file_replace($path, $document, $expected);
    bl_json([
      'ok'=>true,
      'revision'=>$written['revision'],
      'updatedAt'=>$written['updatedAt'],
      'document'=>$document,
    ]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  $code = $e->getMessage();
  if($code === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>$code], 400);
  if(in_array($code, [
    'invalid_food_document','food_document_too_deep','food_document_too_large','forbidden_sensitive_field',
    'invalid_food_date','too_many_food_recipes','invalid_food_day_entries','invalid_food_note','food_note_too_large',
    'invalid_food_health_field'
  ], true)) bl_json(['ok'=>false,'error'=>$code], 400);
  bl_json(['ok'=>false,'error'=>'food_data_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'food_data_failed'], 500);
}
