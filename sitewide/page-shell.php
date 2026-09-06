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
    'games' => __DIR__ . '/../systems/baseline-games-hub/baseline-games-hub.html',
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

function baseline_shell_insert_before(string $html, string $closingTag, string $markup): string
{
    $position = strripos($html, $closingTag);
    if ($position === false) {
        return $html . "\n" . $markup;
    }

    return substr($html, 0, $position) . $markup . "\n" . substr($html, $position);
}

/*
 * Apply approved recipe-content promotion/replacement before the shared recipe
 * runtime sees the Skincare catalogue. This keeps IDs, clean routes and the
 * ingredient/filter machinery coherent from first paint.
 */
if ($page === 'skincare') {
    $recipeRevisions = __DIR__ . '/skincare-recipe-revisions.php';
    if (is_file($recipeRevisions) && is_readable($recipeRevisions)) {
        require_once $recipeRevisions;
        if (function_exists('baseline_apply_skincare_recipe_revisions')) {
            $html = baseline_apply_skincare_recipe_revisions($html);
        }
    }
}

/*
 * Food and Skincare share the universal recipe renderer. Attach the finalized
 * refinement layer to both systems: Recipe is the default subtab, Details is
 * useful again, variant choices are segmented, and slider content stays tight.
 */
if ($page === 'food' || $page === 'skincare') {
    $recipeCss = '<link rel="stylesheet" href="/sitewide/css/recipe-system-refinement.css?v=RECIPE_SYSTEM_REFINEMENT_20260906_1">';
    if (stripos($html, '/sitewide/css/recipe-system-refinement.css') === false) {
        $html = baseline_shell_insert_before($html, '</head>', $recipeCss);
    }

    $recipeJs = '<script defer src="/sitewide/js/recipe-system-refinement.js?v=RECIPE_SYSTEM_REFINEMENT_20260906_1"></script>';
    if (stripos($html, '/sitewide/js/recipe-system-refinement.js') === false) {
        $html = baseline_shell_insert_before($html, '</body>', $recipeJs);
    }
}

$loader = '<script defer src="/sitewide/js/baseline-protected-access.js?v=SAVED_DATA_REVISION_CLIENT_20260823_1"></script>';
if (stripos($html, '/sitewide/js/baseline-protected-access.js') === false) {
    $html = baseline_shell_insert_before($html, '</body>', $loader);
}

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
echo $html;