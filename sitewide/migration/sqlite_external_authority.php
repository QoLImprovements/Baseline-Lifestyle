<?php
declare(strict_types=1);

final class BaselineExternalSqliteException extends RuntimeException {}

function bl_external_sqlite_normalize_path(string $path, string $label): string {
  $path = rtrim(trim(str_replace('\\', '/', $path)), '/');
  if($path === '' || (!str_starts_with($path, '/') && preg_match('/^[A-Za-z]:\//', $path) !== 1)){
    throw new BaselineExternalSqliteException($label . '_must_be_absolute');
  }
  if(str_contains('/' . trim($path, '/') . '/', '/../')){
    throw new BaselineExternalSqliteException($label . '_contains_parent_segment');
  }
  return $path;
}

function bl_external_sqlite_is_within(string $path, string $root): bool {
  $path = rtrim(str_replace('\\', '/', $path), '/') . '/';
  $root = rtrim(str_replace('\\', '/', $root), '/') . '/';
  return str_starts_with($path, $root);
}

function bl_external_sqlite_expected_tables(): array {
  return [
    'users',
    'password_reset_tokens',
    'favourites',
    'binaural_presets',
    'voice_settings',
    'schema_migrations',
    'rate_limit_events',
    'plans',
    'plan_sessions',
    'achievements',
    'games_profiles',
    'badminton_state_store',
  ];
}

function bl_external_sqlite_safe_counts(PDO $db, array $tables): array {
  $counts = [];
  foreach($tables as $table){
    if(!is_string($table) || preg_match('/^[A-Za-z0-9_]{1,96}$/', $table) !== 1) continue;
    $counts[$table] = max(0, (int)$db->query('SELECT COUNT(*) FROM "' . $table . '"')->fetchColumn());
  }
  ksort($counts);
  return $counts;
}

function bl_external_sqlite_private_permissions(string $path): ?bool {
  if(DIRECTORY_SEPARATOR !== '/') return null;
  $permissions = fileperms($path);
  if($permissions === false) return false;
  return (($permissions & 0077) === 0);
}

function bl_external_sqlite_open_readonly(string $path): PDO {
  if(!extension_loaded('pdo_sqlite')) throw new BaselineExternalSqliteException('pdo_sqlite_required');
  $encoded = str_replace('%2F', '/', rawurlencode($path));
  $db = new PDO('sqlite:file:' . $encoded . '?mode=ro', null, null, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
  $db->exec('PRAGMA query_only = ON');
  $db->exec('PRAGMA foreign_keys = ON');
  return $db;
}

function bl_external_sqlite_inspect(string $databasePath, string $documentRoot=''): array {
  $databasePath = bl_external_sqlite_normalize_path($databasePath, 'database_path');
  $documentRoot = $documentRoot !== ''
    ? bl_external_sqlite_normalize_path($documentRoot, 'document_root')
    : '';

  if(!is_file($databasePath) || !is_readable($databasePath)){
    throw new BaselineExternalSqliteException('database_not_readable');
  }
  if(is_link($databasePath)) throw new BaselineExternalSqliteException('database_is_symlink');

  $resolvedDatabase = realpath($databasePath) ?: $databasePath;
  $resolvedDocumentRoot = $documentRoot !== '' ? (realpath($documentRoot) ?: $documentRoot) : '';
  $outsideDocumentRoot = $resolvedDocumentRoot === ''
    ? null
    : !bl_external_sqlite_is_within($resolvedDatabase, $resolvedDocumentRoot);

  $db = bl_external_sqlite_open_readonly($databasePath);
  $quickCheck = $db->query('PRAGMA quick_check')->fetchAll(PDO::FETCH_COLUMN) ?: [];
  $integrityCheck = $db->query('PRAGMA integrity_check')->fetchAll(PDO::FETCH_COLUMN) ?: [];
  $foreignKeys = $db->query('PRAGMA foreign_key_check')->fetchAll() ?: [];
  $journalMode = strtolower((string)$db->query('PRAGMA journal_mode')->fetchColumn());
  $userVersion = (int)$db->query('PRAGMA user_version')->fetchColumn();
  $sourceTables = array_values(array_map('strval', $db->query(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
  )->fetchAll(PDO::FETCH_COLUMN) ?: []));
  $expectedTables = bl_external_sqlite_expected_tables();
  $missingTables = array_values(array_diff($expectedTables, $sourceTables));
  sort($missingTables);
  $counts = bl_external_sqlite_safe_counts($db, array_values(array_intersect($sourceTables, [
    'users','favourites','binaural_presets','voice_settings','plans','plan_sessions',
    'achievements','games_profiles','badminton_state_store','password_reset_tokens',
  ])));
  $db = null;

  $privatePermissions = bl_external_sqlite_private_permissions($databasePath);
  $parentWritable = is_writable(dirname($databasePath));
  $fileWritable = is_writable($databasePath);
  $companionFiles = [];
  foreach(['-wal','-shm','-journal'] as $suffix){
    if(is_file($databasePath . $suffix)) $companionFiles[] = basename($databasePath) . $suffix;
  }

  $gates = [
    'databaseReadable'=>true,
    'databaseWritable'=>$fileWritable,
    'parentDirectoryWritable'=>$parentWritable,
    'outsideDocumentRoot'=>$outsideDocumentRoot !== false,
    'privatePermissions'=>$privatePermissions !== false,
    'quickCheckPassed'=>$quickCheck === ['ok'],
    'integrityCheckPassed'=>$integrityCheck === ['ok'],
    'foreignKeysClear'=>$foreignKeys === [],
    'requiredTablesPresent'=>$missingTables === [],
  ];
  $ok = !in_array(false, $gates, true);

  return [
    'formatVersion'=>1,
    'kind'=>'external-sqlite-authority-verification',
    'generatedAt'=>gmdate('Y-m-d\TH:i:s\Z'),
    'ok'=>$ok,
    'database'=>[
      'fileName'=>basename($databasePath),
      'pathSha256'=>hash('sha256', $databasePath),
      'contentSha256'=>hash_file('sha256', $databasePath) ?: '',
      'sizeBytes'=>max(0, (int)(filesize($databasePath) ?: 0)),
      'journalMode'=>$journalMode,
      'userVersion'=>$userVersion,
      'companionFiles'=>$companionFiles,
    ],
    'location'=>[
      'documentRootProvided'=>$documentRoot !== '',
      'outsideDocumentRoot'=>$outsideDocumentRoot,
      'privatePermissions'=>$privatePermissions,
      'fileWritable'=>$fileWritable,
      'parentDirectoryWritable'=>$parentWritable,
    ],
    'databaseChecks'=>[
      'quickCheck'=>$quickCheck,
      'integrityCheck'=>$integrityCheck,
      'foreignKeyViolationCount'=>count($foreignKeys),
      'missingTables'=>$missingTables,
    ],
    'counts'=>$counts,
    'gates'=>$gates,
    'decision'=>[
      'readyForPathSwitch'=>$ok,
      'authorityChangedByThisCommand'=>false,
      'reason'=>$ok
        ? 'The configured SQLite file is private, writable, structurally complete and healthy. This verification does not itself change the active database path.'
        : 'Resolve the failed location, permission, integrity, relationship or schema gate before changing the active database path.',
    ],
  ];
}

function bl_external_sqlite_write_evidence(string $path, array $evidence): void {
  $path = bl_external_sqlite_normalize_path($path, 'evidence_path');
  $directory = dirname($path);
  if(!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)){
    throw new BaselineExternalSqliteException('evidence_directory_create_failed');
  }
  @chmod($directory, 0700);
  if(is_link($path)) throw new BaselineExternalSqliteException('evidence_is_symlink');
  $json = json_encode($evidence, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . "\n";
  $temporary = $directory . '/.external-sqlite-evidence-' . bin2hex(random_bytes(10)) . '.tmp';
  if(file_put_contents($temporary, $json, LOCK_EX) === false){
    throw new BaselineExternalSqliteException('evidence_write_failed');
  }
  @chmod($temporary, 0600);
  if(!@rename($temporary, $path)){
    @unlink($temporary);
    throw new BaselineExternalSqliteException('evidence_replace_failed');
  }
  @chmod($path, 0600);
}
