<?php
declare(strict_types=1);
require __DIR__ . '/config.php';
require_once __DIR__ . '/resource_authority.php';

$uid = bl_require_user_id();
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

function clamp01($v): float {
  $f = (float)$v;
  if($f < 0) return 0.0;
  if($f > 1) return 1.0;
  return $f;
}

function bl_binaural_sqlite_rows(PDO $db, int $uid): array {
  $stmt = $db->prepare('SELECT name, beat_hz, carrier_hz, bed_type, beat_vol, bed_vol, created_at, updated_at FROM binaural_presets WHERE user_id=:u ORDER BY updated_at DESC');
  $stmt->execute([':u'=>$uid]);
  return $stmt->fetchAll() ?: [];
}

function bl_binaural_file_presets(array $rows): array {
  return array_map(static fn(array $row): array => [
    'name'=>(string)($row['name'] ?? ''),
    'beatHz'=>(float)($row['beat_hz'] ?? 0),
    'carrierHz'=>(float)($row['carrier_hz'] ?? 0),
    'bedType'=>(string)($row['bed_type'] ?? 'off'),
    'beatVolume'=>(float)($row['beat_vol'] ?? 0),
    'bedVolume'=>(float)($row['bed_vol'] ?? 0),
    'createdAt'=>gmdate('c', (int)($row['created_at'] ?? time())),
    'updatedAt'=>gmdate('c', (int)($row['updated_at'] ?? time())),
  ], $rows);
}

function bl_binaural_public_presets(array $presets): array {
  $rows = array_map(static fn(array $preset): array => [
    'name'=>(string)($preset['name'] ?? ''),
    'beat_hz'=>(float)($preset['beatHz'] ?? 0),
    'carrier_hz'=>(float)($preset['carrierHz'] ?? 0),
    'bed_type'=>(string)($preset['bedType'] ?? 'off'),
    'beat_vol'=>(float)($preset['beatVolume'] ?? 0),
    'bed_vol'=>(float)($preset['bedVolume'] ?? 0),
    'created_at'=>bl_resource_timestamp(is_string($preset['createdAt'] ?? null) ? $preset['createdAt'] : null),
    'updated_at'=>bl_resource_timestamp(is_string($preset['updatedAt'] ?? null) ? $preset['updatedAt'] : null),
  ], $presets);
  usort($rows, static fn(array $a, array $b): int => $b['updated_at'] <=> $a['updated_at']);
  return $rows;
}

function bl_binaural_write_snapshot(int $uid, array $rows): ?array {
  return bl_resource_file_delete_if_empty(
    bl_saved_user_resource_path($uid, 'binaural'),
    ['presets'=>bl_binaural_file_presets($rows)],
    static fn(array $data): bool => ($data['presets'] ?? []) === []
  );
}

try{
  $mode = bl_resource_authority();

  if($method === 'GET'){
    if($mode === 'saved-data'){
      $resource = bl_resource_file_read(bl_saved_user_resource_path($uid, 'binaural'), ['presets'=>[]]);
      $presets = is_array($resource['data']['presets'] ?? null) ? $resource['data']['presets'] : [];
      bl_json(['ok'=>true,'presets'=>bl_binaural_public_presets($presets),'revision'=>$resource['revision']]);
    }
    $db = bl_db();
    $rows = bl_binaural_sqlite_rows($db, $uid);
    if($mode === 'mirror') bl_binaural_write_snapshot($uid, $rows);
    bl_json(['ok'=>true,'presets'=>$rows]);
  }

  if($method === 'POST'){
    $d = bl_input_json();
    $action = strtolower(trim((string)($d['action'] ?? 'save')));
    $name = trim((string)($d['name'] ?? ''));
    if($name === '') bl_json(['ok'=>false,'error'=>'missing_name'], 400);
    if(mb_strlen($name) > 40) bl_json(['ok'=>false,'error'=>'name_too_long'], 400);

    if($mode === 'saved-data'){
      $path = bl_saved_user_resource_path($uid, 'binaural');
      $resource = bl_resource_file_read($path, ['presets'=>[]]);
      $expected = bl_resource_required_revision_from_input($d);
      if($expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
      $presets = is_array($resource['data']['presets'] ?? null) ? $resource['data']['presets'] : [];
      $existing = null;
      $next = [];
      foreach($presets as $preset){
        if((string)($preset['name'] ?? '') === $name){
          $existing = $preset;
          continue;
        }
        $next[] = $preset;
      }
      if($action === 'delete'){
        if($existing === null){
          bl_json(['ok'=>true,'revision'=>$resource['revision']]);
        }
        $written = bl_resource_file_delete_if_empty(
          $path,
          ['presets'=>$next],
          static fn(array $data): bool => ($data['presets'] ?? []) === [],
          $expected
        );
        bl_json(['ok'=>true,'revision'=>(int)($written['revision'] ?? $resource['revision'])]);
      }
      if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);

      $beatHz = max(0.5, min(40, (float)($d['beatHz'] ?? ($d['beat_hz'] ?? 8))));
      $carrierHz = max(60, min(1000, (float)($d['carrierHz'] ?? ($d['carrier_hz'] ?? 220))));
      $bedType = trim((string)($d['bedType'] ?? ($d['bed_type'] ?? 'off')));
      if(!in_array($bedType, ['off','rain','pink','brown','ocean'], true)) $bedType = 'off';
      $now = gmdate('c');
      array_unshift($next, [
        'name'=>$name,
        'beatHz'=>$beatHz,
        'carrierHz'=>$carrierHz,
        'bedType'=>$bedType,
        'beatVolume'=>clamp01($d['beatVol'] ?? ($d['beat_vol'] ?? 0.6)),
        'bedVolume'=>clamp01($d['bedVol'] ?? ($d['bed_vol'] ?? 0.35)),
        'createdAt'=>is_array($existing) && is_string($existing['createdAt'] ?? null) ? $existing['createdAt'] : $now,
        'updatedAt'=>$now,
      ]);
      $written = bl_resource_file_replace($path, ['presets'=>$next], $expected);
      $response = ['ok'=>true,'revision'=>$written['revision']];
      $response[is_array($existing) ? 'updated' : 'created'] = true;
      bl_json($response);
    }

    $db = bl_db();
    if($action === 'delete'){
      $del = $db->prepare('DELETE FROM binaural_presets WHERE user_id=:u AND name=:n');
      $del->execute([':u'=>$uid, ':n'=>$name]);
      if($mode === 'mirror') bl_binaural_write_snapshot($uid, bl_binaural_sqlite_rows($db, $uid));
      bl_json(['ok'=>true]);
    }
    if($action !== 'save') bl_json(['ok'=>false,'error'=>'invalid_action'], 400);

    $beatHz = max(0.5, min(40, (float)($d['beatHz'] ?? ($d['beat_hz'] ?? 8))));
    $carrierHz = max(60, min(1000, (float)($d['carrierHz'] ?? ($d['carrier_hz'] ?? 220))));
    $bedType = trim((string)($d['bedType'] ?? ($d['bed_type'] ?? 'off')));
    if(!in_array($bedType, ['off','rain','pink','brown','ocean'], true)) $bedType = 'off';
    $beatVol = clamp01($d['beatVol'] ?? ($d['beat_vol'] ?? 0.6));
    $bedVol = clamp01($d['bedVol'] ?? ($d['bed_vol'] ?? 0.35));
    $now = time();
    $chk = $db->prepare('SELECT id FROM binaural_presets WHERE user_id=:u AND name=:n LIMIT 1');
    $chk->execute([':u'=>$uid, ':n'=>$name]);
    $row = $chk->fetch();
    if($row){
      $upd = $db->prepare('UPDATE binaural_presets SET beat_hz=:b, carrier_hz=:c, bed_type=:t, beat_vol=:bv, bed_vol=:dv, updated_at=:u2 WHERE id=:id');
      $upd->execute([':b'=>$beatHz,':c'=>$carrierHz,':t'=>$bedType,':bv'=>$beatVol,':dv'=>$bedVol,':u2'=>$now,':id'=>(int)$row['id']]);
      if($mode === 'mirror') bl_binaural_write_snapshot($uid, bl_binaural_sqlite_rows($db, $uid));
      bl_json(['ok'=>true,'updated'=>true]);
    }
    $ins = $db->prepare('INSERT INTO binaural_presets(user_id, name, beat_hz, carrier_hz, bed_type, beat_vol, bed_vol, created_at, updated_at) VALUES(:u,:n,:b,:c,:t,:bv,:dv,:t0,:t1)');
    $ins->execute([':u'=>$uid,':n'=>$name,':b'=>$beatHz,':c'=>$carrierHz,':t'=>$bedType,':bv'=>$beatVol,':dv'=>$bedVol,':t0'=>$now,':t1'=>$now]);
    if($mode === 'mirror') bl_binaural_write_snapshot($uid, bl_binaural_sqlite_rows($db, $uid));
    bl_json(['ok'=>true,'created'=>true]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'binaural_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'binaural_failed'], 500);
}
