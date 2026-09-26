<?php
declare(strict_types=1);

require_once __DIR__ . '/skincare_saved_data.php';

const BL_SKINCARE_SLIDER_MAX_CONTROLLERS = 100;
const BL_SKINCARE_SLIDER_MAX_VALUES = 20;

function bl_skincare_slider_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_skincare_slider_values($value): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_skincare_slider_values');
  $output = [];
  foreach(array_slice($value, 0, BL_SKINCARE_SLIDER_MAX_VALUES, true) as $sliderId=>$sliderValue){
    $id = bl_skincare_slider_text($sliderId, 100);
    if($id === '' || preg_match('/^[A-Za-z0-9_-]{1,100}$/', $id) !== 1){
      throw new InvalidArgumentException('invalid_skincare_slider_id');
    }
    if(!is_string($sliderValue) && !is_int($sliderValue) && !is_float($sliderValue)){
      throw new InvalidArgumentException('invalid_skincare_slider_value');
    }
    $text = bl_skincare_slider_text($sliderValue, 40);
    if($text === '' || !is_numeric($text)) throw new InvalidArgumentException('invalid_skincare_slider_value');
    $output[$id] = $text;
  }
  return $output;
}

function bl_skincare_sliders($value): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_skincare_sliders');
  $output = [];
  foreach(array_slice($value, 0, BL_SKINCARE_SLIDER_MAX_CONTROLLERS, true) as $controllerId=>$values){
    $id = bl_skincare_slider_text($controllerId, 120);
    if($id === '' || preg_match('/^[A-Za-z0-9:_-]{1,120}$/', $id) !== 1){
      throw new InvalidArgumentException('invalid_skincare_slider_controller');
    }
    $output[$id] = bl_skincare_slider_values($values);
  }
  ksort($output);
  return $output;
}

try{
  bl_session_start();
  $user = bl_require_user();
  $userId = (int)$user['id'];
  $db = bl_skincare_db();
  $method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));

  if($method === 'GET'){
    $resource = bl_skincare_saved_read($db, $userId);
    $data = is_array($resource['data'] ?? null) ? $resource['data'] : bl_skincare_saved_default();
    bl_json([
      'ok'=>true,
      'found'=>(bool)$resource['found'],
      'revision'=>(int)$resource['revision'],
      'updatedAt'=>$resource['updatedAt'],
      'source'=>$resource['source'],
      'sliders'=>bl_skincare_sliders(is_array($data['sliders'] ?? null) ? $data['sliders'] : []),
    ]);
  }

  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  if(bl_resource_authority() === 'sqlite'){
    bl_json(['ok'=>false,'error'=>'saved_data_cutover_required'], 409);
  }
  $input = bl_input_json();
  $expectedRevision = bl_resource_required_revision_from_input($input);
  $action = strtolower(bl_skincare_slider_text($input['action'] ?? 'replace_sliders', 40));
  if($action !== 'replace_sliders'){
    bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
  }
  $submitted = bl_skincare_sliders($input['sliders'] ?? []);

  $written = bl_skincare_saved_mutate($db, $userId, $expectedRevision, static function(array $data) use ($submitted): array {
    $data['sliders'] = $submitted;
    return $data;
  });

  bl_json([
    'ok'=>true,
    'revision'=>(int)$written['revision'],
    'updatedAt'=>$written['updatedAt'],
    'source'=>$written['source'],
    'sliders'=>bl_skincare_sliders($written['data']['sliders'] ?? []),
  ]);
}catch(BaselineSavedDataConflictException $error){
  bl_json(['ok'=>false,'error'=>'revision_conflict'], 409);
}catch(InvalidArgumentException $error){
  $code = $error->getMessage();
  if(in_array($code, [
    'invalid_expected_revision','invalid_action','invalid_skincare_slider_values','invalid_skincare_slider_id',
    'invalid_skincare_slider_value','invalid_skincare_sliders','invalid_skincare_slider_controller','invalid_skincare_document'
  ], true)) bl_json(['ok'=>false,'error'=>$code], 400);
  bl_json(['ok'=>false,'error'=>'skincare_data_failed'], 500);
}catch(Throwable $error){
  bl_json(['ok'=>false,'error'=>'skincare_data_failed'], 500);
}
