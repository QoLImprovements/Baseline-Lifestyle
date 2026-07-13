<?php
declare(strict_types=1);

header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

$fitnessPage = dirname(__DIR__, 2) . '/systems/baseline-fitness/baseline-fitness.html';
if (!is_file($fitnessPage)) {
    http_response_code(404);
    exit('Baseline Fitness page not found.');
}

readfile($fitnessPage);
