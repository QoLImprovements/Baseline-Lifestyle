<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_secure_exporter.php';

final class BaselineSqliteExportVerificationException extends RuntimeException {}

function bl_verify_read_json(string $path, bool $requiresEnvelope=true): array {
  if(!is_file($path)) throw new BaselineSqliteExportVerificationException('missing_file:' . $path);
  if(is_link($path)) throw new BaselineSqliteExportVerificationException('symlink_file:' . $path);
  $size = filesize($path);
  if($size === false || $size > BL_EXPORT_MAX_RESOURCE_BYTES){
    throw new BaselineSqliteExportVerificationException('invalid_file_size:' . $path);
  }
  $raw = file_get_contents($path);
  if($raw === false) throw new BaselineSqliteExportVerificationException('read_failed:' . $path);
  try{
    $decoded = json_decode($raw, true, BL_EXPORT_MAX_JSON_DEPTH, JSON_THROW_ON_ERROR);
  }catch(Throwable $error){
    throw new BaselineSqliteExportVerificationException('invalid_json:' . $path, 0, $error);
  }
  if(!is_array($decoded)) throw new BaselineSqliteExportVerificationException('invalid_json_root:' . $path);
  if($requiresEnvelope){
    if((int)($decoded['schemaVersion'] ?? 0) !== BL_EXPORT_SCHEMA_VERSION){
      throw new BaselineSqliteExportVerificationException('invalid_schema_version:' . $path);
    }
    if((int)($decoded['revision'] ?? 0) !== 1 || !is_string($decoded['updatedAt'] ?? null) || !is_array($decoded['data'] ?? null)){
      throw new BaselineSqliteExportVerificationException('invalid_envelope:' . $path);
    }
  }
  return $decoded;
}

function bl_verify_relative_files(string $root): array {
  $files = [];
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS)
  );
  foreach($iterator as $item){
    $path = $item->getPathname();
    if($item->isLink()) throw new BaselineSqliteExportVerificationException('tree_contains_symlink:' . $path);
    if($item->isFile()) $files[] = str_replace('\\', '/', substr($path, strlen($root) + 1));
  }
  sort($files);
  return $files;
}

function bl_verify_canonical_game_files(): array {
  return [
    'baseline-realm.json',
    'pairs.json',
    'detect-word.json',
    'make-24.json',
    'track-coin.json',
    'rule-shift.json',
    'darts-focused.json',
    'meridian-grove.json',
  ];
}

function bl_verify_game_file(string $relative): bool {
  if(preg_match('#^Users/[0-9]{6}/Games/([^/]+\.json)$#', $relative, $match) !== 1) return false;
  return in_array($match[1], bl_verify_canonical_game_files(), true);
}

function bl_verify_resource_file(string $relative): bool {
  return preg_match('#^Users/[0-9]{6}/(?:account|favourites|binaural|fitness|voice)\.json$#', $relative) === 1
    || bl_verify_game_file($relative)
    || $relative === 'Account Index/accounts.json'
    || $relative === 'Shared/Badminton/badminton.json';
}

function bl_verify_allowed_file(string $relative): bool {
  return bl_verify_resource_file($relative);
}

function bl_verify_permissions(string $root, array $files): array {
  if(DIRECTORY_SEPARATOR !== '/') return [];
  $errors = [];
  $directories = [$root];
  foreach($files as $relative){
    $path = $root . '/' . $relative;
    $mode = fileperms($path);
    if($mode !== false && (($mode & 0777) !== 0600)){
      $errors[] = ['check'=>'file_permissions','path'=>$relative,'expected'=>'0600','actual'=>sprintf('%04o', $mode & 0777)];
    }
    $directory = dirname($path);
    while(str_starts_with($directory . '/', $root . '/') && $directory !== $root){
      $directories[] = $directory;
      $directory = dirname($directory);
    }
  }
  foreach(array_unique($directories) as $directory){
    $mode = fileperms($directory);
    if($mode !== false && (($mode & 0777) !== 0700)){
      $errors[] = ['check'=>'directory_permissions','path'=>substr($directory, strlen($root)) ?: '/','expected'=>'0700','actual'=>sprintf('%04o', $mode & 0777)];
    }
  }
  return $errors;
}

function bl_verify_representatives(array $files): array {
  $users = [];
  $games = [];
  foreach($files as $relative){
    if(preg_match('#^Users/([0-9]{6})/account\.json$#', $relative, $match) === 1) $users[] = $match[1];
    if(preg_match('#^Users/([0-9]{6})/Games/(.+)\.json$#', $relative, $match) === 1) $games[] = $match[1] . ':' . $match[2];
  }
  sort($users);
  sort($games);
  $pick = static function(array $items): array {
    if($items === []) return [];
    $indexes = array_unique([0, intdiv(count($items) - 1, 2), count($items) - 1]);
    return array_values(array_map(static fn(int $index): string => (string)$items[$index], $indexes));
  };
  return ['users'=>$pick($users), 'games'=>$pick($games)];
}

function bl_verify_account_projection(array $account, string $relative): array {
  $errors = [];
  $data = is_array($account['data'] ?? null) ? $account['data'] : [];
  $allowed = ['userId','name','email','authProvider','createdAt','updatedAt','lastLoginAt'];
  $actual = array_keys($data);
  sort($allowed);
  sort($actual);
  if($actual !== $allowed){
    $errors[] = ['check'=>'account_projection_fields','path'=>$relative,'expected'=>$allowed,'actual'=>$actual];
  }
  if(!is_int($data['userId'] ?? null) || (int)$data['userId'] <= 0){
    $errors[] = ['check'=>'account_projection_user_id','path'=>$relative];
  }
  foreach(['name','email','authProvider','createdAt','updatedAt'] as $field){
    if(!is_string($data[$field] ?? null)) $errors[] = ['check'=>'account_projection_type','path'=>$relative,'field'=>$field];
  }
  if(($data['lastLoginAt'] ?? null) !== null && !is_string($data['lastLoginAt'])){
    $errors[] = ['check'=>'account_projection_type','path'=>$relative,'field'=>'lastLoginAt'];
  }
  $encoded = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
  foreach(['passwordHash','pass_hash','google_sub','tokenHash','providerSubject'] as $forbidden){
    if(str_contains($encoded, $forbidden)){
      $errors[] = ['check'=>'account_projection_secret_field','path'=>$relative,'field'=>$forbidden];
    }
  }
  return $errors;
}

function bl_verify_game_projection(array $game, string $relative): array {
  $errors = [];
  $data = is_array($game['data'] ?? null) ? $game['data'] : [];
  $app = strtolower(trim((string)($data['game'] ?? '')));
  try{
    $expectedFilename = bl_secure_game_filename($app);
  }catch(Throwable $error){
    return [['check'=>'game_projection_app','path'=>$relative]];
  }
  if(!str_ends_with($relative, '/Games/' . $expectedFilename)){
    $errors[] = ['check'=>'game_projection_filename','path'=>$relative,'expected'=>$expectedFilename];
  }
  if(!is_array($data['profile'] ?? null)){
    $errors[] = ['check'=>'game_projection_profile','path'=>$relative];
  }
  return $errors;
}

function bl_verify_source_report(array $report, string $source): array {
  $errors = [];
  if(($report['authority'] ?? null) !== 'sqlite-copy-read-only'){
    $errors[] = ['check'=>'authority','actual'=>$report['authority'] ?? null];
  }
  if(($report['source']['sha256'] ?? null) !== hash_file('sha256', $source)){
    $errors[] = ['check'=>'source_hash'];
  }
  if(($report['invalid'] ?? []) !== []){
    $errors[] = ['check'=>'invalid_source_records','records'=>$report['invalid']];
  }
  if(($report['unmappedFields'] ?? []) !== []){
    $errors[] = ['check'=>'unmapped_source_fields','fields'=>$report['unmappedFields']];
  }
  $excludedUserFields = $report['intentionallyNotExportedFields']['users'] ?? [];
  sort($excludedUserFields);
  if($excludedUserFields !== ['google_sub','pass_hash']){
    $errors[] = ['check'=>'authentication_field_exclusion','actual'=>$excludedUserFields];
  }
  return $errors;
}

function bl_verify_sqlite_export(string $sourcePath, string $exportPath): array {
  $source = bl_export_normalize_path($sourcePath);
  $actualRoot = bl_export_normalize_path($exportPath);
  if(!is_file($source) || !is_readable($source) || is_link($source)){
    throw new BaselineSqliteExportVerificationException('invalid_source');
  }
  if(!is_dir($actualRoot) || is_link($actualRoot)){
    throw new BaselineSqliteExportVerificationException('invalid_export_root');
  }

  $temporaryBase = sys_get_temp_dir() . '/baseline-export-verification-' . bin2hex(random_bytes(12));
  $expectedRoot = $temporaryBase . '/Saved Data';
  $errors = [];
  try{
    $expectedReport = bl_secure_export_sqlite_copy($source, $expectedRoot);
    $actualFiles = bl_verify_relative_files($actualRoot);
    $expectedFiles = bl_verify_relative_files($expectedRoot);

    foreach($actualFiles as $relative){
      if(!bl_verify_allowed_file($relative)) $errors[] = ['check'=>'unexpected_file','path'=>$relative];
    }
    foreach(array_diff($expectedFiles, $actualFiles) as $relative){
      $errors[] = ['check'=>'missing_file','path'=>$relative];
    }
    foreach(array_diff($actualFiles, $expectedFiles) as $relative){
      $errors[] = ['check'=>'extra_file','path'=>$relative];
    }

    foreach(array_intersect($expectedFiles, $actualFiles) as $relative){
      $expectedPath = $expectedRoot . '/' . $relative;
      $actualPath = $actualRoot . '/' . $relative;
      $expectedHash = hash_file('sha256', $expectedPath);
      $actualHash = hash_file('sha256', $actualPath);
      if($expectedHash === false || $actualHash === false || !hash_equals($expectedHash, $actualHash)){
        $errors[] = ['check'=>'file_content','path'=>$relative,'expectedSha256'=>$expectedHash,'actualSha256'=>$actualHash];
      }
      try{
        $decoded = bl_verify_read_json($actualPath);
        if(preg_match('#^Users/[0-9]{6}/account\.json$#', $relative) === 1){
          $errors = array_merge($errors, bl_verify_account_projection($decoded, $relative));
        }
        if(bl_verify_game_file($relative)){
          $errors = array_merge($errors, bl_verify_game_projection($decoded, $relative));
        }
      }catch(Throwable $error){
        $errors[] = ['check'=>'json_validation','path'=>$relative,'error'=>$error->getMessage()];
      }
    }

    $errors = array_merge($errors, bl_verify_permissions($actualRoot, $actualFiles));
    $errors = array_merge($errors, bl_verify_source_report($expectedReport, $source));

    try{
      $index = bl_verify_read_json($actualRoot . '/Account Index/accounts.json');
      $indexKeys = array_keys(is_array($index['data'] ?? null) ? $index['data'] : []);
      sort($indexKeys);
      if($indexKeys !== ['byEmail','byName']){
        $errors[] = ['check'=>'account_index_fields','actual'=>$indexKeys];
      }
      $indexJson = json_encode($index['data'], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
      foreach(['passwordHash','pass_hash','google_sub','byProvider'] as $forbidden){
        if(str_contains($indexJson, $forbidden)){
          $errors[] = ['check'=>'account_index_secret_exposure','field'=>$forbidden];
        }
      }
    }catch(BaselineSqliteExportVerificationException $error){
      if(($expectedReport['counts']['accounts'] ?? 0) > 0){
        $errors[] = ['check'=>'account_index','error'=>$error->getMessage()];
      }
    }

    return [
      'ok'=>$errors === [],
      'authority'=>'sqlite-copy-read-only',
      'counts'=>$expectedReport['counts'] ?? [],
      'representativeRecords'=>bl_verify_representatives($actualFiles),
      'checkedFiles'=>count($actualFiles),
      'errors'=>$errors,
    ];
  }finally{
    bl_export_remove_tree($temporaryBase);
  }
}
