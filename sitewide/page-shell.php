<?php
declare(strict_types=1);

/*
 * Serves the existing static main-section files while attaching the shared
 * protected-section key and approved UI corrections. The browser URL remains
 * the original clean section URL because Apache/LiteSpeed reaches this file by
 * an internal rewrite.
 */

$pages = [
    'food' => __DIR__ . '/../systems/baseline-food-approach/baseline-food-approach.html',
    'massage' => __DIR__ . '/../systems/baseline-massage/baseline-massage.html',
    'skincare' => __DIR__ . '/../systems/baseline-natural-skincare/baseline-natural-skincare.html',
    'fitness' => __DIR__ . '/../systems/baseline-fitness/baseline-fitness.html',
    'badminton' => __DIR__ . '/../systems/baseline-badminton-session/baseline-badminton-session.html',
    'games' => __DIR__ . '/../systems/baseline-recreation/baseline-recreation.html',
];

$page = isset($_GET['page']) ? strtolower(trim((string) $_GET['page'])) : '';
$file = $pages[$page] ?? null;

if ($file === null || !is_file($file) || !is_readable($file)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Page not found.';
    exit;
}

$html = file_get_contents($file);
if ($html === false) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'The page could not be loaded.';
    exit;
}

$loader = '<script defer src="/sitewide/js/baseline-protected-access.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1"></script>';
if (stripos($html, '/sitewide/js/baseline-protected-access.js') === false) {
    $closingBody = strripos($html, '</body>');
    if ($closingBody !== false) {
        $html = substr($html, 0, $closingBody) . $loader . "\n" . substr($html, $closingBody);
    } else {
        $html .= "\n" . $loader;
    }
}

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
echo $html;
