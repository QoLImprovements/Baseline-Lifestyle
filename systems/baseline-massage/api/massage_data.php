<?php
declare(strict_types=1);

require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_MASSAGE_RESOURCE_SCHEMA_VERSION = 1;
const BL_MASSAGE_MAX_BYTES = 262144;
const BL_MASSAGE_MAX_FIELDS = 220;
const BL_MASSAGE_MAX_TEXT_BYTES = 20000;

function bl_massage_default_document(): array {
  return [
    'schemaVersion'=>BL_MASSAGE_RESOURCE_SCHEMA_VERSION,
    'plannerMode'=>'provider',
    'libraryCategory'=>'Massage Techniques',
    'fields'=>[],
    'checks'=>[],
    'areaTimes'=>[],
  ];
}

function bl_massage_payload(): array {
  $raw = file_get_contents('php://input') ?: '';
  if(strlen($raw) > BL_MASSAGE_MAX_BYTES) bl_json(['ok'=>false,'error'=>'payload_too_large'], 413);
  try{
    $decoded = json_decode($raw, true, 12, JSON_THROW_ON_ERROR);
  }catch(Throwable $e){
    bl_json(['ok'=>false,'error'=>'invalid_json'], 400);
  }
  if(!is_array($decoded)) bl_json(['ok'=>false,'error'=>'invalid_payload'], 400);
  return $decoded;
}

function bl_massage_key(string $key): string {
  $key = trim($key);
  if($key === '' || strlen($key) > 160 || preg_match('/[\\x00-\\x1F\\x7F]/', $key) === 1){
    throw new InvalidArgumentException('invalid_massage_key');
  }
  return $key;
}

function bl_massage_text($value): string {
  if(!is_string($value) && !is_int($value) && !is_float($value)) throw new InvalidArgumentException('invalid_massage_value');
  $text = (string)$value;
  if(strlen($text) > BL_MASSAGE_MAX_TEXT_BYTES) throw new InvalidArgumentException('massage_value_too_large');
  return $text;
}

function bl_massage_document($value): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_massage_document');

  $plannerMode = (string)($value['plannerMode'] ?? 'provider');
  if(!in_array($plannerMode, ['provider','focused','advanced'], true)){
    throw new InvalidArgumentException('invalid_massage_planner_mode');
  }

  $libraryCategory = (string)($value['libraryCategory'] ?? 'Massage Techniques');
  $allowedLibrary = ['Massage Techniques','Types Of Massage','Body Areas','Massage Feelings / Themes'];
  if(!in_array($libraryCategory, $allowedLibrary, true)){
    throw new InvalidArgumentException('invalid_massage_library_category');
  }

  $fieldsRaw = $value['fields'] ?? [];
  $checksRaw = $value['checks'] ?? [];
  $areaTimesRaw = $value['areaTimes'] ?? [];
  if(!is_array($fieldsRaw) || !is_array($checksRaw) || !is_array($areaTimesRaw)){
    throw new InvalidArgumentException('invalid_massage_document');
  }
  if(count($fieldsRaw) > BL_MASSAGE_MAX_FIELDS || count($checksRaw) > BL_MASSAGE_MAX_FIELDS || count($areaTimesRaw) > BL_MASSAGE_MAX_FIELDS){
    throw new InvalidArgumentException('massage_document_too_large');
  }

  $fields = [];
  foreach($fieldsRaw as $key=>$entry){
    $fields[bl_massage_key((string)$key)] = bl_massage_text($entry);
  }

  $checks = [];
  foreach($checksRaw as $key=>$entry){
    if(!is_bool($entry)) throw new InvalidArgumentException('invalid_massage_check');
    $checks[bl_massage_key((string)$key)] = $entry;
  }

  $areaTimes = [];
  foreach($areaTimesRaw as $key=>$entry){
    if(!is_int($entry) && !is_float($entry) && !(is_string($entry) && is_numeric($entry))){
      throw new InvalidArgumentException('invalid_massage_area_time');
    }
    $minutes = (float)$entry;
    if(!is_finite($minutes) || $minutes < 0 || $minutes > 240){
      throw new InvalidArgumentException('invalid_massage_area_time');
    }
    $areaTimes[bl_massage_key((string)$key)] = $minutes;
  }

  ksort($fields);
  ksort($checks);
  ksort($areaTimes);

  return [
    'schemaVersion'=>BL_MASSAGE_RESOURCE_SCHEMA_VERSION,
    'plannerMode'=>$plannerMode,
    'libraryCategory'=>$libraryCategory,
    'fields'=>$fields,
    'checks'=>$checks,
    'areaTimes'=>$areaTimes,
  ];
}

bl_session_start();
$uid = bl_require_user_id();
$method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));
$path = bl_saved_user_resource_path($uid, 'massage');

try{
  if($method === 'GET'){
    $resource = bl_resource_file_read($path, bl_massage_default_document());
    $document = bl_massage_document($resource['data']);
    bl_json([
      'ok'=>true,
      'found'=>$resource['revision'] > 0,
      'revision'=>$resource['revision'],
      'updatedAt'=>$resource['updatedAt'],
      'document'=>$document,
    ]);
  }

  if($method === 'POST'){
    $payload = bl_massage_payload();
    if(strtolower(trim((string)($payload['action'] ?? 'save'))) !== 'save'){
      bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
    }
    $expected = bl_resource_required_revision_from_input($payload);
    $current = bl_resource_file_read($path, bl_massage_default_document());
    if($current['revision'] !== $expected) throw new BaselineSavedDataConflictException('revision_conflict');
    $document = bl_massage_document($payload['document'] ?? null);
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
  if(in_array($code, [
    'invalid_expected_revision','invalid_massage_document','invalid_massage_key','invalid_massage_value',
    'massage_value_too_large','invalid_massage_planner_mode','invalid_massage_library_category',
    'massage_document_too_large','invalid_massage_check','invalid_massage_area_time'
  ], true)) bl_json(['ok'=>false,'error'=>$code], 400);
  bl_json(['ok'=>false,'error'=>'massage_data_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'massage_data_failed'], 500);
}
