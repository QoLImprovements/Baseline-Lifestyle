<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_secure_exporter.php';

final class BaselineSavedDataCutoverVerificationException extends RuntimeException {}

function bl_cutover_option(array $options, string $name): string {
  $value = trim((string)($options[$name] ?? ''));
  if($value === '') throw new BaselineSavedDataCutoverVerificationException('missing_' . str_replace('-', '_', $name));
  return bl_export_normalize_path($value);
}

function bl_cutover_json(string $path): array {
  if(!is_file($path) || is_link($path)) throw new BaselineSavedDataCutoverVerificationException('invalid_resource:' . $path);
  $raw = file_get_contents($path);
  if($raw === false || strlen($raw) > BL_EXPORT_MAX_RESOURCE_BYTES) throw new BaselineSavedDataCutoverVerificationException('resource_read_failed:' . $path);
  $decoded = json_decode($raw, true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR);
  if(!is_array($decoded) || !is_array($decoded['data'] ?? null)) throw new BaselineSavedDataCutoverVerificationException('invalid_resource_envelope:' . $path);
  return $decoded;
}

function bl_cutover_canonical($value): string {
  if(is_array($value)){
    $isList = $value === [] || array_keys($value) === range(0, count($value) - 1);
    if(!$isList){
      ksort($value);
      foreach($value as $key=>$entry) $value[$key] = json_decode(bl_cutover_canonical($entry), true);
    }else{
      foreach($value as $index=>$entry) $value[$index] = json_decode(bl_cutover_canonical($entry), true);
    }
  }
  return json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
}

function bl_cutover_expected_files(string $root): array {
  $files = [];
  if(!is_dir($root)) return $files;
  $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS));
  foreach($iterator as $item){
    if($item->isFile()) $files[] = str_replace('\\', '/', substr($item->getPathname(), strlen($root) + 1));
  }
  sort($files);
  return $files;
}

function bl_cutover_comparable_data(string $relative, array $resource): array {
  $data = $resource['data'];
  if(preg_match('#^Users/[0-9]{6}/fitness\\.json$#', $relative) === 1){
    return [
      'plans'=>is_array($data['plans'] ?? null) ? $data['plans'] : [],
      'achievements'=>is_array($data['achievements'] ?? null) ? $data['achievements'] : [],
    ];
  }
  if(preg_match('#^Users/[0-9]{6}/Games/[A-Za-z0-9-]+\\.json$#', $relative) === 1){
    return [
      'game'=>(string)($data['game'] ?? ''),
      'profile'=>is_array($data['profile'] ?? null) ? $data['profile'] : [],
    ];
  }
  return $data;
}

function bl_cutover_expected_users(array $expectedFiles): array {
  $users = [];
  foreach($expectedFiles as $relative){
    if(preg_match('#^Users/([0-9]{6})/account\\.json$#', $relative, $match) === 1) $users[$match[1]] = true;
  }
  return $users;
}

function bl_cutover_saved_data_native_resource(string $relative, array $resource, array $expectedUsers): bool {
  if($relative === 'Account Index/accounts.json'){
    $data = $resource['data'];
    return ($data['byName'] ?? []) === [] && ($data['byEmail'] ?? []) === [];
  }

  if(preg_match('#^Users/([0-9]{6})/(fitness-routine|food|skincare)\\.json$#', $relative, $match) === 1){
    return isset($expectedUsers[$match[1]]);
  }

  if(preg_match('#^Users/([0-9]{6})/fitness\\.json$#', $relative, $match) === 1 && isset($expectedUsers[$match[1]])){
    $base = bl_cutover_comparable_data($relative, $resource);
    return ($base['plans'] ?? []) === [] && ($base['achievements'] ?? []) === [];
  }

  if(preg_match('#^Users/([0-9]{6})/Games/baseline-realm\\.json$#', $relative, $match) === 1 && isset($expectedUsers[$match[1]])){
    $base = bl_cutover_comparable_data($relative, $resource);
    return ($base['profile'] ?? []) === [];
  }

  return false;
}

function bl_cutover_tree_hash(string $root): string {
  $lines = [];
  foreach(bl_cutover_expected_files($root) as $relative){
    $hash = hash_file('sha256', $root . '/' . $relative);
    if($hash !== false) $lines[] = $relative . ':' . $hash;
  }
  return hash('sha256', implode("\n", $lines));
}

function bl_verify_saved_data_cutover(string $database, string $savedData): array {
  if(!is_file($database) || !is_readable($database) || is_link($database)) throw new BaselineSavedDataCutoverVerificationException('database_not_readable');
  if(!is_dir($savedData) || is_link($savedData)) throw new BaselineSavedDataCutoverVerificationException('saved_data_not_readable');
  $temporary = sys_get_temp_dir() . '/baseline-cutover-expected-' . bin2hex(random_bytes(12));
  $errors = [];
  try{
    $report = bl_secure_export_sqlite_copy($database, $temporary);
    if(($report['missingTables'] ?? []) !== []) $errors[] = ['check'=>'missing_tables','tables'=>$report['missingTables']];
    if(($report['invalid'] ?? []) !== []) $errors[] = ['check'=>'invalid_source','count'=>count($report['invalid'])];
    if(($report['unmappedFields'] ?? []) !== []) $errors[] = ['check'=>'unmapped_source_fields','fields'=>array_keys($report['unmappedFields'])];
    $expectedFiles = bl_cutover_expected_files($temporary);
    $actualFiles = bl_cutover_expected_files($savedData);
    $expectedUsers = bl_cutover_expected_users($expectedFiles);
    $nativeFiles = [];

    foreach($expectedFiles as $relative){
      $actualPath = $savedData . '/' . $relative;
      if(!is_file($actualPath)){
        $errors[] = ['check'=>'missing_resource','path'=>$relative];
        continue;
      }
      try{
        $expected = bl_cutover_json($temporary . '/' . $relative);
        $actual = bl_cutover_json($actualPath);
        $expectedData = bl_cutover_comparable_data($relative, $expected);
        $actualData = bl_cutover_comparable_data($relative, $actual);
        if(!hash_equals(hash('sha256', bl_cutover_canonical($expectedData)), hash('sha256', bl_cutover_canonical($actualData)))){
          $errors[] = ['check'=>'resource_mismatch','path'=>$relative];
        }
      }catch(Throwable $error){
        $errors[] = ['check'=>'resource_validation','path'=>$relative,'error'=>$error->getMessage()];
      }
    }

    foreach(array_diff($actualFiles, $expectedFiles) as $relative){
      try{
        $resource = bl_cutover_json($savedData . '/' . $relative);
        if(bl_cutover_saved_data_native_resource($relative, $resource, $expectedUsers)){
          $nativeFiles[] = $relative;
          continue;
        }
      }catch(Throwable $error){
        $errors[] = ['check'=>'resource_validation','path'=>$relative,'error'=>$error->getMessage()];
        continue;
      }
      $errors[] = ['check'=>'unexpected_resource','path'=>$relative];
    }
    sort($nativeFiles);

    return [
      'ok'=>$errors === [],
      'readyForSavedDataMode'=>$errors === [],
      'productionAuthorityChanged'=>false,
      'source'=>[
        'sha256'=>hash_file('sha256', $database),
        'sizeBytes'=>filesize($database),
      ],
      'savedData'=>[
        'resourceCount'=>count($actualFiles),
        'treeSha256'=>bl_cutover_tree_hash($savedData),
        'nativeResourceCount'=>count($nativeFiles),
        'nativeResources'=>$nativeFiles,
      ],
      'counts'=>$report['counts'] ?? [],
      'errors'=>$errors,
    ];
  }finally{
    bl_export_remove_tree($temporary);
  }
}

if(PHP_SAPI === 'cli' && realpath((string)($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__){
  $options = getopt('', ['database:','saved-data:','evidence:']);
  try{
    $database = bl_cutover_option($options, 'database');
    $savedData = bl_cutover_option($options, 'saved-data');
    $evidence = bl_cutover_option($options, 'evidence');
    if(str_starts_with($evidence . '/', rtrim($savedData, '/') . '/')) throw new BaselineSavedDataCutoverVerificationException('evidence_inside_saved_data');
    $result = bl_verify_saved_data_cutover($database, $savedData);
    bl_export_write_json($evidence, $result);
    fwrite(STDOUT, json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
    exit($result['ok'] ? 0 : 1);
  }catch(Throwable $error){
    $failure = ['ok'=>false,'readyForSavedDataMode'=>false,'productionAuthorityChanged'=>false,'error'=>$error->getMessage()];
    if(isset($options['evidence']) && trim((string)$options['evidence']) !== ''){
      try{ bl_export_write_json(bl_export_normalize_path((string)$options['evidence']), $failure); }catch(Throwable $ignored){}
    }
    fwrite(STDERR, json_encode($failure, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
    exit(1);
  }
}
