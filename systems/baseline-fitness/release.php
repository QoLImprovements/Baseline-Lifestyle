<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-Baseline-Fitness-Release: BASELINE_FITNESS_LIVE_RELEASE_20260713_2');

echo json_encode([
  'ok'=>true,
  'release'=>'BASELINE_FITNESS_LIVE_RELEASE_20260713_2',
  'planApi'=>'BASELINE_FITNESS_PLAN_PAYLOAD_20260713_2',
  'legacyCacheMigration'=>'SITEWIDE_AUTH_SINGLE_OWNER_20260713_5',
], JSON_UNESCAPED_SLASHES);
