<?php
declare(strict_types=1);

require_once __DIR__ . '/sqlite_export_verifier.php';

const BL_COPY_VALIDATION_FORMAT_VERSION = 1;

final class BaselineSqliteCopyValidationException extends RuntimeException {}

function bl_copy_validation_path(string $path, string $label): string {
  try{
    return bl_export_normalize_path($path);
  }catch(Throwable $error){
    throw new BaselineSqliteCopyValidationException('invalid_' . $label . '_path', 0, $error);
  }
}

function bl_copy_validation_assert_paths(string $source, string $output, string $evidence): void {
  if($evidence === $source || $evidence === $output){
    throw new BaselineSqliteCopyValidationException('evidence_path_conflict');
  }
  if(str_starts_with($evidence, $output . '/')){
    throw new BaselineSqliteCopyValidationException('evidence_must_be_outside_export_tree');
  }
  if(is_dir($evidence)) throw new BaselineSqliteCopyValidationException('evidence_path_is_directory');
  if(is_link($evidence)) throw new BaselineSqliteCopyValidationException('evidence_path_is_symlink');
}

function bl_copy_validation_counts(array $counts): array {
  $safe = [];
  foreach($counts as $name=>$value){
    if(!is_string($name) || !is_numeric($value)) continue;
    $safe[$name] = max(0, (int)$value);
  }
  ksort($safe);
  return $safe;
}

function bl_copy_validation_invalid_summary(array $records): array {
  $summary = [];
  foreach($records as $record){
    if(!is_array($record)) continue;
    $source = trim((string)($record['table'] ?? ''));
    if($source === ''){
      $resource = trim((string)($record['resource'] ?? ''));
      $source = $resource !== '' ? explode(':', $resource, 2)[0] : 'unknown';
    }
    $source = preg_replace('/[^a-zA-Z0-9._-]/', '-', strtolower($source)) ?: 'unknown';
    $reason = preg_replace('/[^a-zA-Z0-9._-]/', '-', strtolower((string)($record['reason'] ?? 'unknown'))) ?: 'unknown';
    $key = $source . ':' . $reason;
    $summary[$key] = ($summary[$key] ?? 0) + 1;
  }
  ksort($summary);
  return $summary;
}

function bl_copy_validation_unmapped_fields(array $unmapped): array {
  $safe = [];
  foreach($unmapped as $table=>$fields){
    if(!is_string($table) || !is_array($fields)) continue;
    $names = [];
    foreach($fields as $field){
      if(!is_string($field) || preg_match('/^[A-Za-z0-9._-]{1,128}$/', $field) !== 1) continue;
      $names[] = $field;
    }
    $names = array_values(array_unique($names));
    sort($names);
    if($names !== []) $safe[$table] = $names;
  }
  ksort($safe);
  return $safe;
}

function bl_copy_validation_error_summary(array $errors): array {
  $summary = [];
  foreach($errors as $error){
    if(!is_array($error)) continue;
    $check = preg_replace('/[^a-zA-Z0-9._-]/', '-', strtolower((string)($error['check'] ?? 'unknown'))) ?: 'unknown';
    $summary[$check] = ($summary[$check] ?? 0) + 1;
  }
  ksort($summary);
  return $summary;
}

function bl_copy_validation_representatives(array $records): array {
  $users = [];
  foreach(($records['users'] ?? []) as $value){
    if(is_string($value) && preg_match('/^[0-9]{6}$/', $value) === 1) $users[] = $value;
  }
  $games = [];
  foreach(($records['games'] ?? []) as $value){
    if(is_string($value) && preg_match('/^[0-9]{6}:[a-z0-9][a-z0-9._-]{0,95}$/', $value) === 1) $games[] = $value;
  }
  return [
    'userFolders'=>array_values(array_unique($users)),
    'gameResources'=>array_values(array_unique($games)),
  ];
}

function bl_copy_validation_tree_hash(string $root): string {
  $files = bl_verify_relative_files($root);
  $parts = [];
  foreach($files as $relative){
    $hash = hash_file('sha256', $root . '/' . $relative);
    if($hash === false) throw new BaselineSqliteCopyValidationException('export_tree_hash_failed');
    $parts[] = $relative . ':' . $hash;
  }
  return hash('sha256', implode("\n", $parts));
}

function bl_copy_validation_base_evidence(): array {
  return [
    'formatVersion'=>BL_COPY_VALIDATION_FORMAT_VERSION,
    'kind'=>'sqlite-copy-validation-evidence',
    'generatedAt'=>gmdate('Y-m-d\TH:i:s\Z'),
    'authority'=>'sqlite-copy-read-only',
    'productionAuthority'=>'sqlite',
    'productionAuthorityChanged'=>false,
    'sourceMustBeSeparateCopy'=>true,
    'readyForProductionCutover'=>false,
  ];
}

function bl_copy_validation_write_evidence(string $path, array $evidence): void {
  try{
    bl_export_write_json($path, $evidence);
  }catch(Throwable $error){
    throw new BaselineSqliteCopyValidationException('evidence_write_failed', 0, $error);
  }
}

function bl_validate_sqlite_copy(string $sourcePath, string $outputPath, string $evidencePath): array {
  $source = bl_copy_validation_path($sourcePath, 'source');
  $output = bl_copy_validation_path($outputPath, 'output');
  $evidencePath = bl_copy_validation_path($evidencePath, 'evidence');
  bl_copy_validation_assert_paths($source, $output, $evidencePath);

  $base = bl_copy_validation_base_evidence();
  try{
    $report = bl_export_sqlite_copy($source, $output);
  }catch(Throwable $error){
    $evidence = $base + [
      'ok'=>false,
      'stage'=>'export',
      'failureCode'=>'export_failed',
      'gates'=>[
        'exportCompleted'=>false,
        'verificationCompleted'=>false,
        'missingTablesClear'=>false,
        'invalidRecordsClear'=>false,
        'unmappedFieldsClear'=>false,
      ],
    ];
    bl_copy_validation_write_evidence($evidencePath, $evidence);
    throw new BaselineSqliteCopyValidationException('copied_data_export_failed', 0, $error);
  }

  try{
    $verification = bl_verify_sqlite_export($source, $output);
  }catch(Throwable $error){
    $verification = ['ok'=>false, 'checkedFiles'=>0, 'representativeRecords'=>[], 'errors'=>[['check'=>'verification_exception']]];
  }

  $missingTables = array_values(array_filter($report['missingTables'] ?? [], 'is_string'));
  sort($missingTables);
  $invalid = is_array($report['invalid'] ?? null) ? $report['invalid'] : [];
  $unmapped = bl_copy_validation_unmapped_fields(is_array($report['unmappedFields'] ?? null) ? $report['unmappedFields'] : []);
  $verificationErrors = is_array($verification['errors'] ?? null) ? $verification['errors'] : [];
  $gates = [
    'exportCompleted'=>true,
    'verificationCompleted'=>(bool)($verification['ok'] ?? false),
    'missingTablesClear'=>$missingTables === [],
    'invalidRecordsClear'=>$invalid === [],
    'unmappedFieldsClear'=>$unmapped === [],
  ];
  $ok = !in_array(false, $gates, true);

  $evidence = $base + [
    'ok'=>$ok,
    'stage'=>$ok ? 'complete' : 'review-required',
    'source'=>[
      'sha256'=>(string)($report['source']['sha256'] ?? ''),
      'sizeBytes'=>max(0, (int)($report['source']['sizeBytes'] ?? 0)),
      'modifiedAt'=>(string)($report['source']['modifiedAt'] ?? ''),
    ],
    'export'=>[
      'treeSha256'=>bl_copy_validation_tree_hash($output),
      'counts'=>bl_copy_validation_counts(is_array($report['counts'] ?? null) ? $report['counts'] : []),
      'missingTables'=>$missingTables,
      'invalidCount'=>count($invalid),
      'invalidSummary'=>bl_copy_validation_invalid_summary($invalid),
      'unmappedFields'=>$unmapped,
      'intentionallyNotExported'=>array_values(array_filter($report['intentionallyNotExported'] ?? [], 'is_string')),
    ],
    'verification'=>[
      'checkedFiles'=>max(0, (int)($verification['checkedFiles'] ?? 0)),
      'representativeRecords'=>bl_copy_validation_representatives(is_array($verification['representativeRecords'] ?? null) ? $verification['representativeRecords'] : []),
      'errorCount'=>count($verificationErrors),
      'errorSummary'=>bl_copy_validation_error_summary($verificationErrors),
    ],
    'gates'=>$gates,
    'decision'=>[
      'copiedDataReview'=>$ok ? 'pass' : 'blocked',
      'productionCutover'=>'blocked',
      'reason'=>$ok
        ? 'Copied-data export and verification passed. Live authority remains SQLite; backup and controlled-cutover evidence are still required.'
        : 'Resolve missing tables, invalid records, unmapped fields or verification errors before any cutover design.',
    ],
  ];

  bl_copy_validation_write_evidence($evidencePath, $evidence);
  if(!$ok) throw new BaselineSqliteCopyValidationException('copied_data_validation_failed');
  return $evidence;
}
