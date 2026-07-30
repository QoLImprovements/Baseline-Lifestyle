<?php
declare(strict_types=1);

require __DIR__ . '/../../sitewide/api/config.php';

bl_session_start();
$accessUntil = (int)($_SESSION['charity_shop_access_until'] ?? 0);
if($accessUntil <= time()){
  unset($_SESSION['charity_shop_access_until']);
  http_response_code(403);
  header('Content-Type: text/plain; charset=utf-8');
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  echo 'Protected artwork is locked.';
  exit;
}

$assets = [
  'back-room-consequences' => ['file' => 'back-room-consequences.jpg', 'type' => 'image/jpeg'],
  'hang-it-right' => ['file' => 'hang-it-right.jpg', 'type' => 'image/jpeg'],
  'cube-it-right' => ['file' => 'cube-it-right.jpg', 'type' => 'image/jpeg'],
];

$key = strtolower(trim((string)($_GET['asset'] ?? '')));
$asset = $assets[$key] ?? null;
if(!is_array($asset)){
  http_response_code(404);
  header('Content-Type: text/plain; charset=utf-8');
  echo 'Artwork not found.';
  exit;
}

$base = (string)($asset['file'] ?? '');
$contentType = (string)($asset['type'] ?? 'application/octet-stream');
$parts = $base === '' ? [] : glob(__DIR__ . '/artwork/' . $base . '.part*.b64');
if(!is_array($parts) || $parts === []){
  http_response_code(404);
  header('Content-Type: text/plain; charset=utf-8');
  echo 'Artwork not found.';
  exit;
}

natsort($parts);
$encoded = '';
foreach($parts as $part){
  if(!is_file($part) || !is_readable($part)) continue;
  $chunk = file_get_contents($part);
  if($chunk !== false) $encoded .= preg_replace('/\s+/', '', $chunk);
}

$binary = $encoded === '' ? false : base64_decode($encoded, true);
if($binary === false){
  http_response_code(500);
  header('Content-Type: text/plain; charset=utf-8');
  echo 'Artwork could not be decoded.';
  exit;
}

header('Content-Type: ' . $contentType);
header('Content-Length: ' . strlen($binary));
header('Cache-Control: private, no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Content-Type-Options: nosniff');
echo $binary;
