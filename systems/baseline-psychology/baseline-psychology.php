<?php
declare(strict_types=1);

require __DIR__ . '/../../sitewide/api/config.php';

bl_session_start();
bl_no_cache_headers();

$accessUntil = (int)($_SESSION['psychology_access_until'] ?? 0);
if($accessUntil <= time()){
  unset($_SESSION['psychology_access_until']);
  header('Location: /?protected=locked', true, 302);
  exit;
}

header('X-Robots-Tag: noindex, nofollow, noarchive', true);

require __DIR__ . '/baseline-psychology.html';
