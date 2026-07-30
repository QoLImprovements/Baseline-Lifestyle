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
  'back-room-consequences' => 'back-room-consequences.webp',
  'hang-it-right' => 'hang-it-right.webp',
  'cube-it-right' => 'cube-it-right.webp',
  'ladies-size-guide' => 'ladies-size-guide.webp',
  'mens-size-guide' => 'mens-size-guide.webp',
  'shoe-size-guide' => 'shoe-size-guide.webp',
  'duvet-size-guide' => 'duvet-size-guide.webp',
];

$key = strtolower(trim((string)($_GET['asset'] ?? '')));
$base = $assets[$key] ?? '';
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

header('Content-Type: image/webp');
header('Content-Length: ' . strlen($binary));
header('Cache-Control: private, no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('X-Content-Type-Options: nosniff');
echo $binary;
