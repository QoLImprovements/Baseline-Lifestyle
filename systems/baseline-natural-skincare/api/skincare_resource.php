<?php
declare(strict_types=1);

require_once __DIR__ . '/schema.php';
require_once dirname(__DIR__, 3) . '/sitewide/api/account_resource.php';

function bl_skincare_text($value, int $maximum): string {
  $text = trim((string)$value);
  if(bl_str_len($text) > $maximum){
    $text = function_exists('mb_substr') ? (string)mb_substr($text, 0, $maximum) : substr($text, 0, $maximum);
  }
  return $text;
}

function bl_skincare_frequency($value): array {
  $source = is_array($value) ? $value : [];
  $mode = strtolower(bl_skincare_text($source['mode'] ?? 'daily', 24));
  if(!in_array($mode, ['daily','days','weekly','as-needed'], true)) $mode = 'daily';
  $allowedDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  $days = [];
  foreach((is_array($source['days'] ?? null) ? $source['days'] : []) as $day){
    $day = bl_skincare_text($day, 12);
    if(in_array($day, $allowedDays, true) && !in_array($day, $days, true)) $days[] = $day;
  }
  return [
    'mode'=>$mode,
    'days'=>$days,
    'timesPerWeek'=>max(1, min(14, (int)($source['timesPerWeek'] ?? 3))),
  ];
}

function bl_skincare_routine($value): array {
  if(!is_array($value)) return [];
  $items = [];
  $seen = [];
  $shavingMethods = [
    'wet-cartridge','wet-safety','wet-straight','electric-foil','electric-rotary',
    'electric-wet-dry','trimmer','clipper','body-razor','dermaplaning'
  ];
  foreach(array_slice($value, 0, 120) as $offset=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_skincare_text($raw['id'] ?? ('routine-' . ($offset + 1)), 80);
    if($id === '') $id = 'routine-' . ($offset + 1);
    if(isset($seen[$id])) $id .= '-' . ($offset + 1);
    $seen[$id] = true;
    $actionId = bl_skincare_text($raw['actionId'] ?? 'custom', 80);
    if($actionId === '' || preg_match('/^[a-z0-9][a-z0-9-]{0,79}$/', $actionId) !== 1) $actionId = 'custom';
    $title = bl_skincare_text($raw['title'] ?? 'Self-Care Action', 100);
    if($title === '') $title = 'Self-Care Action';
    $time = strtolower(bl_skincare_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $benefitMode = strtolower(bl_skincare_text($raw['benefitMode'] ?? 'comprehensive', 20));
    if(!in_array($benefitMode, ['brief','comprehensive'], true)) $benefitMode = 'comprehensive';
    $shavingMethod = strtolower(bl_skincare_text($raw['shavingMethod'] ?? '', 32));
    if(!in_array($shavingMethod, $shavingMethods, true)) $shavingMethod = '';
    $items[] = [
      'id'=>$id,
      'actionId'=>$actionId,
      'title'=>$title,
      'benefitMode'=>$benefitMode,
      'benefit'=>bl_skincare_text($raw['benefit'] ?? '', 5000),
      'timeOfDay'=>$time,
      'frequency'=>bl_skincare_frequency($raw['frequency'] ?? []),
      'notes'=>bl_skincare_text($raw['notes'] ?? '', 1200),
      'shavingMethod'=>$shavingMethod,
      'productSelection'=>bl_skincare_text($raw['productSelection'] ?? '', 180),
      'productName'=>bl_skincare_text($raw['productName'] ?? '', 180),
      'customProductName'=>bl_skincare_text($raw['customProductName'] ?? '', 180),
      'useGroupFrequency'=>!empty($raw['useGroupFrequency']),
      'useGroupTime'=>!empty($raw['useGroupTime']),
    ];
  }
  return $items;
}

function bl_skincare_logs($value): array {
  if(!is_array($value)) return [];
  $dates = array_keys($value);
  sort($dates, SORT_STRING);
  $dates = array_slice($dates, -1095);
  $logs = [];
  foreach($dates as $date){
    if(preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$date) !== 1) continue;
    $source = is_array($value[$date] ?? null) ? $value[$date] : [];
    $entries = [];
    foreach(array_slice($source, 0, 120, true) as $itemId=>$raw){
      if(!is_array($raw)) continue;
      $key = bl_skincare_text($itemId, 80);
      if($key === '') continue;
      $completedAt = bl_skincare_text($raw['completedAt'] ?? '', 40);
      if($completedAt !== '' && strtotime($completedAt) === false) $completedAt = '';
      $entries[$key] = [
        'completed'=>!empty($raw['completed']),
        'note'=>bl_skincare_text($raw['note'] ?? '', 500),
        'completedAt'=>$completedAt,
      ];
    }
    $logs[(string)$date] = $entries;
  }
  return $logs;
}

function bl_skincare_groups($value): array {
  $groups = [];
  $seenIds = [];
  $seenTitles = [];
  foreach(array_slice(is_array($value) ? $value : [], 0, 30) as $index=>$raw){
    if(!is_array($raw)) continue;
    $id = bl_skincare_text($raw['id'] ?? ('routine-group-' . ($index + 1)), 80);
    $id = preg_replace('/[^a-zA-Z0-9_-]/', '-', $id) ?: '';
    $title = bl_skincare_text($raw['title'] ?? '', 80);
    if($id === '' || $title === '') continue;
    if(isset($seenIds[$id])) $id .= '-' . ($index + 1);
    $titleKey = function_exists('mb_strtolower') ? mb_strtolower($title) : strtolower($title);
    if(isset($seenTitles[$titleKey])) continue;
    $seenIds[$id] = true;
    $seenTitles[$titleKey] = true;
    $time = strtolower(bl_skincare_text($raw['timeOfDay'] ?? 'anytime', 20));
    if(!in_array($time, ['morning','evening','anytime'], true)) $time = 'anytime';
    $groups[] = [
      'id'=>$id,
      'title'=>$title,
      'collapsed'=>!empty($raw['collapsed']),
      'frequency'=>bl_skincare_frequency($raw['frequency'] ?? []),
      'timeOfDay'=>$time,
    ];
  }
  return $groups;
}

function bl_skincare_assignments($value, array $groups): array {
  if(!is_array($value)) return [];
  $valid = [];
  foreach($groups as $group) $valid[(string)$group['id']] = true;
  $assignments = [];
  foreach(array_slice($value, 0, 200, true) as $itemId=>$groupId){
    $item = bl_skincare_text($itemId, 80);
    $group = bl_skincare_text($groupId, 80);
    if($item !== '' && isset($valid[$group])) $assignments[$item] = $group;
  }
  return $assignments;
}

function bl_skincare_recipe_settings($value): array {
  if(!is_array($value)) return [];
  $output = [];
  foreach(array_slice($value, 0, 120, true) as $saveId=>$raw){
    $id = bl_skincare_text($saveId, 120);
    if($id === '' || !is_array($raw)) continue;
    $settings = [];
    foreach(array_slice($raw, 0, 120, true) as $controlId=>$controlValue){
      $control = bl_skincare_text($controlId, 120);
      if($control === '') continue;
      if(is_bool($controlValue) || is_int($controlValue) || is_float($controlValue)) $settings[$control] = $controlValue;
      elseif(is_string($controlValue)) $settings[$control] = bl_skincare_text($controlValue, 120);
    }
    $output[$id] = $settings;
  }
  return $output;
}

function bl_skincare_default(): array {
  return [
    'visibility'=>'private',
    'routine'=>[],
    'logs'=>[],
    'groups'=>[],
    'assignments'=>[],
    'recipeSettings'=>[],
  ];
}

function bl_skincare_path(int $userId): string {
  return bl_saved_user_resource_path($userId, 'skincare');
}

function bl_skincare_resource(int $userId): array {
  $resource = bl_resource_file_read(bl_skincare_path($userId), bl_skincare_default());
  $data = is_array($resource['data'] ?? null) ? $resource['data'] : [];
  $data = array_merge(bl_skincare_default(), $data);
  $data['visibility'] = ($data['visibility'] ?? '') === 'public' ? 'public' : 'private';
  $data['routine'] = bl_skincare_routine($data['routine'] ?? []);
  $data['logs'] = bl_skincare_logs($data['logs'] ?? []);
  $data['groups'] = bl_skincare_groups($data['groups'] ?? []);
  $data['assignments'] = bl_skincare_assignments($data['assignments'] ?? [], $data['groups']);
  $data['recipeSettings'] = bl_skincare_recipe_settings($data['recipeSettings'] ?? []);
  $resource['data'] = $data;
  return $resource;
}

function bl_skincare_account_for_name(string $name): ?array {
  $key = strtolower(trim($name));
  if($key === '') return null;
  $index = bl_resource_file_read(bl_saved_account_index_path(), ['byName'=>[],'byEmail'=>[]]);
  $folder = (string)($index['data']['byName'][$key] ?? '');
  if(preg_match('/^[0-9]{6}$/', $folder) !== 1) return null;
  $account = bl_resource_file_read(bl_saved_join(bl_saved_root(), 'Users', $folder, 'account.json'), []);
  $data = is_array($account['data'] ?? null) ? $account['data'] : [];
  $userId = (int)($data['userId'] ?? 0);
  if($userId <= 0 || bl_saved_user_folder($userId) !== $folder) return null;
  return $data;
}

function bl_skincare_public_profiles(): array {
  $index = bl_resource_file_read(bl_saved_account_index_path(), ['byName'=>[],'byEmail'=>[]]);
  $profiles = [];
  foreach((is_array($index['data']['byName'] ?? null) ? $index['data']['byName'] : []) as $folder){
    $folder = (string)$folder;
    if(preg_match('/^[0-9]{6}$/', $folder) !== 1) continue;
    $account = bl_resource_file_read(bl_saved_join(bl_saved_root(), 'Users', $folder, 'account.json'), []);
    $accountData = is_array($account['data'] ?? null) ? $account['data'] : [];
    $userId = (int)($accountData['userId'] ?? 0);
    if($userId <= 0) continue;
    $resource = bl_skincare_resource($userId);
    if(($resource['data']['visibility'] ?? 'private') !== 'public') continue;
    if(($resource['data']['routine'] ?? []) === []) continue;
    $name = bl_skincare_text($accountData['name'] ?? '', BL_MAX_NAME_LEN);
    if($name !== '') $profiles[] = $name;
  }
  usort($profiles, static fn(string $left,string $right): int => strcasecmp($left,$right) ?: strcmp($left,$right));
  return array_values(array_unique($profiles));
}

