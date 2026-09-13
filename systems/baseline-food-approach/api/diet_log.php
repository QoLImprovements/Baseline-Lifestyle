<?php
declare(strict_types=1);

require_once dirname(__DIR__, 3) . '/sitewide/api/config.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/resource_authority.php';

const BL_FOOD_MAX_DEPTH = 24;
const BL_FOOD_MAX_ITEMS = 30000;

function bl_food_clean($value, int $depth=0, int &$items=0){
  if($depth > BL_FOOD_MAX_DEPTH) throw new InvalidArgumentException('food_data_too_deep');
  $items++;
  if($items > BL_FOOD_MAX_ITEMS) throw new InvalidArgumentException('food_data_too_large');
  if(is_array($value)){
    $output = [];
    foreach($value as $key=>$entry){
      $cleanKey = is_int($key) ? $key : substr((string)$key, 0, 160);
      $output[$cleanKey] = bl_food_clean($entry, $depth + 1, $items);
    }
    return $output;
  }
  if(is_string($value)) return substr($value, 0, 12000);
  if(is_int($value) || is_bool($value) || $value === null) return $value;
  if(is_float($value)) return is_finite($value) ? $value : 0;
  return null;
}

function bl_food_store($value): array {
  $source = is_array($value) ? $value : [];
  $items = 0;
  $clean = bl_food_clean($source, 0, $items);
  if(!is_array($clean)) $clean = [];
  return [
    'logs'=>is_array($clean['logs'] ?? null) ? $clean['logs'] : [],
    'notes'=>is_array($clean['notes'] ?? null) ? $clean['notes'] : [],
    'recipes'=>is_array($clean['recipes'] ?? null) ? array_values($clean['recipes']) : [],
    'health'=>is_array($clean['health'] ?? null) ? $clean['health'] : [],
  ];
}

function bl_food_has_data(array $store): bool {
  return ($store['logs'] ?? []) !== []
    || ($store['notes'] ?? []) !== []
    || ($store['recipes'] ?? []) !== []
    || ($store['health'] ?? []) !== [];
}

function bl_food_payload(array $resource): array {
  $store = bl_food_store($resource['data']['dietLog'] ?? []);
  return [
    'ok'=>true,
    'hasData'=>bl_food_has_data($store),
    'store'=>$store,
    'revision'=>(int)($resource['revision'] ?? 0),
    'updatedAt'=>$resource['updatedAt'] ?? null,
  ];
}

try{
  $uid = bl_require_user_id();
  $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
  $path = bl_saved_user_resource_path($uid, 'food');
  $default = ['dietLog'=>[]];

  if($method === 'GET'){
    bl_json(bl_food_payload(bl_resource_file_read($path, $default)));
  }
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $expected = bl_resource_required_revision_from_input($input);
  $store = bl_food_store($input['store'] ?? []);
  $written = bl_resource_file_mutate(
    $path,
    $default,
    static function(array $current) use ($store): array {
      $current['dietLog'] = $store;
      return $current;
    },
    $expected
  );
  bl_json(bl_food_payload($written ?? bl_resource_file_read($path, $default)));
}catch(BaselineSavedDataConflictException $error){
  bl_resource_conflict_response($error);
}catch(InvalidArgumentException $error){
  bl_json(['ok'=>false,'error'=>$error->getMessage()], 400);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'food_diet_log_failed'], 500);
}

