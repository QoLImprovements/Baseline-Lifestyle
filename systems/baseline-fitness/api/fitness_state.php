<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

function bl_fitness_profile_number(array $profile, string $key, float $minimum, float $maximum): string {
  $raw = trim((string)($profile[$key] ?? ''));
  if($raw === '') return '';
  if(!is_numeric($raw)) throw new InvalidArgumentException('invalid_profile_' . $key);
  $number = (float)$raw;
  if($number < $minimum || $number > $maximum) throw new InvalidArgumentException('invalid_profile_' . $key);
  return $raw;
}

function bl_fitness_profile_validate($value): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_profile');
  $sex = trim((string)($value['sex'] ?? ''));
  if(!in_array($sex, ['', 'male', 'female'], true)) throw new InvalidArgumentException('invalid_profile_sex');
  $activity = trim((string)($value['activity'] ?? ''));
  if(!in_array($activity, ['', 'sedentary', 'light', 'moderate', 'very', 'extra'], true)) throw new InvalidArgumentException('invalid_profile_activity');
  return [
    'age'=>bl_fitness_profile_number($value, 'age', 13, 120),
    'sex'=>$sex,
    'activity'=>$activity,
    'height'=>bl_fitness_profile_number($value, 'height', 80, 250),
    'weight'=>bl_fitness_profile_number($value, 'weight', 20, 500),
    'neck'=>bl_fitness_profile_number($value, 'neck', 10, 100),
    'chest'=>bl_fitness_profile_number($value, 'chest', 30, 250),
    'waist'=>bl_fitness_profile_number($value, 'waist', 30, 250),
    'hips'=>bl_fitness_profile_number($value, 'hips', 30, 250),
    'upperArm'=>bl_fitness_profile_number($value, 'upperArm', 10, 100),
    'thigh'=>bl_fitness_profile_number($value, 'thigh', 15, 150),
    'restingHeartRate'=>bl_fitness_profile_number($value, 'restingHeartRate', 25, 220),
  ];
}

function bl_fitness_profile_has_values(array $profile): bool {
  foreach($profile as $value){
    if($value !== '') return true;
  }
  return false;
}

function bl_fitness_json_clean($value, int $depth=0, int &$items=0){
  if($depth > 12) throw new InvalidArgumentException('active_workout_too_deep');
  $items++;
  if($items > 2000) throw new InvalidArgumentException('active_workout_too_large');
  if(is_array($value)){
    $out = [];
    foreach($value as $key=>$entry){
      $cleanKey = is_int($key) ? $key : substr((string)$key, 0, 120);
      $out[$cleanKey] = bl_fitness_json_clean($entry, $depth + 1, $items);
    }
    return $out;
  }
  if(is_string($value)) return substr($value, 0, 1000);
  if(is_bool($value) || is_int($value) || $value === null) return $value;
  if(is_float($value)) return is_finite($value) ? $value : 0;
  return null;
}

function bl_fitness_expected_steps(array $plan): int {
  $total = 0;
  foreach((is_array($plan['items'] ?? null) ? $plan['items'] : []) as $item){
    if(!is_array($item)) continue;
    $exercise = (string)($item['exercise'] ?? '');
    $type = (string)($item['progressionType'] ?? 'standard-reps');
    if($type === 'timed-hold'){
      $total += stripos($exercise, 'side plank') !== false ? 2 : 1;
    }else{
      $total += max(1, min(5, (int)($item['sets'] ?? 3)));
    }
  }
  return max(1, min(100, $total));
}

function bl_fitness_next_session_index(array $record): ?int {
  foreach(bl_fitness_public_sessions($record) as $session){
    if(($session['status'] ?? '') !== 'done') return (int)$session['session_index'];
  }
  return null;
}

function bl_fitness_active_workout_validate($value, array $data): array {
  if(!is_array($value)) throw new InvalidArgumentException('invalid_active_workout');
  $planId = (int)($value['planId'] ?? 0);
  $sessionIndex = (int)($value['sessionIndex'] ?? 0);
  if($planId <= 0 || $sessionIndex <= 0) throw new InvalidArgumentException('invalid_active_workout_identity');
  $planIndex = bl_fitness_find_plan_index($data, $planId);
  if($planIndex === null) throw new InvalidArgumentException('active_workout_plan_not_found');
  $record = $data['plans'][$planIndex];
  if(bl_fitness_next_session_index($record) !== $sessionIndex) throw new InvalidArgumentException('active_workout_not_current_session');
  $sessionFound = false;
  foreach(bl_fitness_public_sessions($record) as $session){
    if((int)$session['session_index'] === $sessionIndex && ($session['status'] ?? '') !== 'done') $sessionFound = true;
  }
  if(!$sessionFound) throw new InvalidArgumentException('active_workout_session_not_found');
  $state = is_array($value['state'] ?? null) ? $value['state'] : $value;
  $completed = max(0, (int)($state['completedSteps'] ?? 0));
  $expectedSteps = bl_fitness_expected_steps(bl_fitness_plan_json($record));
  if($completed > $expectedSteps) throw new InvalidArgumentException('active_workout_step_mismatch');
  $items = 0;
  $results = bl_fitness_json_clean(is_array($state['results'] ?? null) ? $state['results'] : [], 0, $items);
  $pending = $state['pendingFailureStep'] ?? null;
  if($pending !== null){
    $pending = (int)$pending;
    if($pending < 0 || $pending >= $expectedSteps) throw new InvalidArgumentException('active_workout_pending_step_mismatch');
  }
  return [
    'planId'=>$planId,
    'sessionIndex'=>$sessionIndex,
    'stepCount'=>$expectedSteps,
    'state'=>[
      'completedSteps'=>$completed,
      'started'=>!empty($state['started']),
      'results'=>$results,
      'pendingFailureStep'=>$pending,
    ],
    'updatedAt'=>gmdate('c'),
  ];
}

function bl_fitness_progression_records_validate($value, bool $failures=false): array {
  if($value === null) return [];
  if(!is_array($value)) throw new InvalidArgumentException('invalid_progression_history');
  $limit = $failures ? 500 : 1000;
  $records = [];
  foreach(array_slice(array_values($value), -$limit) as $raw){
    if(!is_array($raw)) continue;
    $planId = max(0, (int)($raw['planId'] ?? 0));
    $sessionIndex = max(0, (int)($raw['sessionIndex'] ?? 0));
    $exercise = mb_substr(trim((string)($raw['exercise'] ?? '')), 0, 120);
    if($planId <= 0 || $sessionIndex <= 0 || $exercise === '') continue;
    $sessionKey = $planId . ':' . $sessionIndex;
    $record = [
      'sessionKey'=>$sessionKey,
      'planId'=>$planId,
      'sessionIndex'=>$sessionIndex,
      'exercise'=>mb_strtolower($exercise, 'UTF-8'),
      'at'=>mb_substr(trim((string)($raw['at'] ?? '')), 0, 64),
    ];
    if($failures) $record['failed'] = true;
    else $record['success'] = !empty($raw['success']);
    $records[] = $record;
  }
  return $records;
}

function bl_fitness_progression_history_validate($value): array {
  if($value === null || $value === []) return ['outcomes'=>[], 'failures'=>[]];
  if(!is_array($value)) throw new InvalidArgumentException('invalid_progression_history');
  return [
    'outcomes'=>bl_fitness_progression_records_validate($value['outcomes'] ?? [], false),
    'failures'=>bl_fitness_progression_records_validate($value['failures'] ?? [], true),
  ];
}

function bl_fitness_progression_history_has_values(array $history): bool {
  return ($history['outcomes'] ?? []) !== [] || ($history['failures'] ?? []) !== [];
}

function bl_fitness_state_response(array $resource): array {
  return [
    'ok'=>true,
    'profile'=>is_array($resource['data']['profile'] ?? null) ? $resource['data']['profile'] : null,
    'activeWorkout'=>is_array($resource['data']['activeWorkout'] ?? null) ? $resource['data']['activeWorkout'] : null,
    'progressionHistory'=>bl_fitness_progression_history_validate($resource['data']['progressionHistory'] ?? []),
    'revision'=>$resource['revision'],
  ];
}

try{
  $mode = bl_resource_authority();
  if($mode === 'sqlite') bl_json(['ok'=>false,'error'=>'saved_data_not_enabled'], 409);
  $resource = bl_fitness_resource_read($uid);

  if($method === 'GET') bl_json(bl_fitness_state_response($resource));
  if($method !== 'POST') bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);

  $input = bl_input_json();
  $action = strtolower(trim((string)($input['action'] ?? 'import_local')));
  $expected = bl_resource_required_revision_from_input($input);
  if($expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');

  if(in_array($action, ['save_profile','import_local'], true) && array_key_exists('profile', $input)){
    $profile = bl_fitness_profile_validate($input['profile']);
    $existing = is_array($resource['data']['profile'] ?? null) ? $resource['data']['profile'] : [];
    if($action === 'import_local' && bl_fitness_profile_has_values($existing) && $existing !== $profile && empty($input['overwrite'])){
      bl_json(['ok'=>false,'error'=>'profile_conflict','serverProfile'=>$existing,'revision'=>$resource['revision']], 409);
    }
    if(bl_fitness_profile_has_values($profile)) $resource['data']['profile'] = $profile;
    else unset($resource['data']['profile']);
  }

  if(in_array($action, ['save_active_workout','import_local'], true) && array_key_exists('activeWorkout', $input) && $input['activeWorkout'] !== null){
    $active = bl_fitness_active_workout_validate($input['activeWorkout'], $resource['data']);
    $existing = is_array($resource['data']['activeWorkout'] ?? null) ? $resource['data']['activeWorkout'] : null;
    if($action === 'import_local' && $existing !== null && $existing !== $active && empty($input['overwrite'])){
      bl_json(['ok'=>false,'error'=>'active_workout_conflict','serverActiveWorkout'=>$existing,'revision'=>$resource['revision']], 409);
    }
    $resource['data']['activeWorkout'] = $active;
  }

  if(in_array($action, ['save_progression_history','import_local'], true) && array_key_exists('progressionHistory', $input)){
    $history = bl_fitness_progression_history_validate($input['progressionHistory']);
    $existing = bl_fitness_progression_history_validate($resource['data']['progressionHistory'] ?? []);
    if($action === 'import_local' && bl_fitness_progression_history_has_values($existing) && $existing !== $history && empty($input['overwrite'])){
      bl_json(['ok'=>false,'error'=>'progression_history_conflict','serverProgressionHistory'=>$existing,'revision'=>$resource['revision']], 409);
    }
    if(bl_fitness_progression_history_has_values($history)) $resource['data']['progressionHistory'] = $history;
    else unset($resource['data']['progressionHistory']);
  }

  if($action === 'clear_active_workout') unset($resource['data']['activeWorkout']);
  if(!in_array($action, ['save_profile','save_active_workout','save_progression_history','clear_active_workout','import_local'], true)){
    bl_json(['ok'=>false,'error'=>'invalid_action'], 400);
  }

  $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
  $resource = bl_fitness_resource_read($uid);
  $resource['revision'] = (int)($written['revision'] ?? $resource['revision']);
  bl_json(bl_fitness_state_response($resource));
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  bl_json(['ok'=>false,'error'=>$e->getMessage()], 400);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'fitness_state_failed'], 500);
}
