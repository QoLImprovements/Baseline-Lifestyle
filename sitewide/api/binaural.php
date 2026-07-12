<?php
declare(strict_types=1);
require __DIR__ . '/config.php';

$uid = bl_require_user_id();

$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

function clamp01($v): float {
  $f = (float)$v;
  if($f < 0) return 0.0;
  if($f > 1) return 1.0;
  return $f;
}

try{
  $db = bl_db();

  if($method === 'GET'){
    $stmt = $db->prepare('SELECT name, beat_hz, carrier_hz, bed_type, beat_vol, bed_vol, created_at, updated_at FROM binaural_presets WHERE user_id=:u ORDER BY updated_at DESC');
    $stmt->execute([':u'=>$uid]);
    $rows = $stmt->fetchAll() ?: [];
    bl_json(['ok'=>true,'presets'=>$rows]);
  }

  if($method === 'POST'){
    $d = bl_input_json();
    $action = strtolower(trim((string)($d['action'] ?? 'save')));

    if($action === 'delete'){
      $name = trim((string)($d['name'] ?? ''));
      if($name === '') bl_json(['ok'=>false,'error'=>'missing_name'], 400);
      $del = $db->prepare('DELETE FROM binaural_presets WHERE user_id=:u AND name=:n');
      $del->execute([':u'=>$uid, ':n'=>$name]);
      bl_json(['ok'=>true]);
    }

    // Save / upsert
    $name = trim((string)($d['name'] ?? ''));
    $beatHz = (float)($d['beatHz'] ?? ($d['beat_hz'] ?? 8));
    $carrierHz = (float)($d['carrierHz'] ?? ($d['carrier_hz'] ?? 220));
    $bedType = trim((string)($d['bedType'] ?? ($d['bed_type'] ?? 'off')));
    $beatVol = clamp01($d['beatVol'] ?? ($d['beat_vol'] ?? 0.6));
    $bedVol = clamp01($d['bedVol'] ?? ($d['bed_vol'] ?? 0.35));

    if($name === '') bl_json(['ok'=>false,'error'=>'missing_name'], 400);
    if(mb_strlen($name) > 40) bl_json(['ok'=>false,'error'=>'name_too_long'], 400);

    if($beatHz < 0.5) $beatHz = 0.5;
    if($beatHz > 40) $beatHz = 40;
    if($carrierHz < 60) $carrierHz = 60;
    if($carrierHz > 1000) $carrierHz = 1000;

    $allowedBeds = ['off','rain','pink','brown','ocean'];
    if(!in_array($bedType, $allowedBeds, true)) $bedType = 'off';

    $now = time();

    $chk = $db->prepare('SELECT id FROM binaural_presets WHERE user_id=:u AND name=:n LIMIT 1');
    $chk->execute([':u'=>$uid, ':n'=>$name]);
    $row = $chk->fetch();

    if($row){
      $upd = $db->prepare('UPDATE binaural_presets SET beat_hz=:b, carrier_hz=:c, bed_type=:t, beat_vol=:bv, bed_vol=:dv, updated_at=:u2 WHERE id=:id');
      $upd->execute([
        ':b'=>$beatHz,
        ':c'=>$carrierHz,
        ':t'=>$bedType,
        ':bv'=>$beatVol,
        ':dv'=>$bedVol,
        ':u2'=>$now,
        ':id'=>(int)$row['id'],
      ]);
      bl_json(['ok'=>true,'updated'=>true]);
    }

    $ins = $db->prepare('INSERT INTO binaural_presets(user_id, name, beat_hz, carrier_hz, bed_type, beat_vol, bed_vol, created_at, updated_at) VALUES(:u,:n,:b,:c,:t,:bv,:dv,:t0,:t1)');
    $ins->execute([
      ':u'=>$uid,
      ':n'=>$name,
      ':b'=>$beatHz,
      ':c'=>$carrierHz,
      ':t'=>$bedType,
      ':bv'=>$beatVol,
      ':dv'=>$bedVol,
      ':t0'=>$now,
      ':t1'=>$now,
    ]);

    bl_json(['ok'=>true,'created'=>true]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'binaural_failed'], 500);
}
