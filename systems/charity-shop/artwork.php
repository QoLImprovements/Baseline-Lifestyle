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
  'back-room-consequences' => 'back-room-consequences.webp.b64',
  'hang-it-right' => 'hang-it-right.webp.b64',
  'cube-it-right' => 'cube-it-right.webp.b64',
  'ladies-size-guide' => 'ladies-size-guide.webp.b64',
  'mens-size-guide' => 'mens-size-guide.webp.b64',
  'shoe-size-guide' => 'shoe-size-guide.webp.b64',
  'duvet-size-guide' => 'duvet-size-guide.webp.b64',
];

$key = strtolower(trim((string)($_GET['asset'] ?? '')));
$file = isset($assets[$key]) ? __DIR__ . '/artwork/' . $assets[$key] : '';
if($file === '' || !is_file($file) || !is_readable($file)){
  http_response_code(404);
  header('Content-Type: text/plain; charset=utf-8');
  echo 'Artwork not found.';
  exit;
}

$encoded = file_get_contents($file);
$binary = $encoded === false ? false : base64_decode(preg_replace('/\s+/', '', $encoded), true);
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
