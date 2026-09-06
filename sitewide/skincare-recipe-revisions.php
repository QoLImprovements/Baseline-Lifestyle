<?php
declare(strict_types=1);

/*
 * Baseline Natural Skincare recipe revisions.
 *
 * The skincare application still keeps its recipe catalogue in the parent
 * HTML document.  This small server-side layer lets promoted/testing recipes
 * replace their former public counterparts without duplicating the full
 * catalogue file or leaving the browser to repair core recipe content after
 * paint.
 */

function baseline_recipe_div_block(string $html, string $id): ?array
{
    $quoted = preg_quote($id, '/');
    if (!preg_match('/<div\b[^>]*\bid=["\']' . $quoted . '["\'][^>]*>/i', $html, $match, PREG_OFFSET_CAPTURE)) {
        return null;
    }

    $start = (int) $match[0][1];
    $offset = $start;
    $depth = 0;

    while (preg_match('/<div\b[^>]*>|<\/div\s*>/i', $html, $token, PREG_OFFSET_CAPTURE, $offset)) {
        $text = (string) $token[0][0];
        $position = (int) $token[0][1];

        if (stripos($text, '</div') === 0) {
            --$depth;
            if ($depth === 0) {
                $end = $position + strlen($text);
                return [
                    'start' => $start,
                    'end' => $end,
                    'html' => substr($html, $start, $end - $start),
                ];
            }
        } else {
            ++$depth;
        }

        $offset = $position + strlen($text);
    }

    return null;
}

function baseline_replace_recipe_div(string $html, string $targetId, string $replacement): string
{
    $target = baseline_recipe_div_block($html, $targetId);
    if ($target === null) {
        return $html;
    }

    return substr($html, 0, $target['start'])
        . $replacement
        . substr($html, $target['end']);
}

function baseline_remove_recipe_div(string $html, string $id): string
{
    $target = baseline_recipe_div_block($html, $id);
    if ($target === null) {
        return $html;
    }

    return substr($html, 0, $target['start']) . substr($html, $target['end']);
}

function baseline_remove_testing_status(string $block): string
{
    $block = preg_replace(
        '/\s*<p\s+class="note"><strong>Testing<\/strong>\s*[—-]\s*formulation currently being tested before promotion into the main recipe collection\.<\/p>\s*/iu',
        "\n",
        $block
    ) ?? $block;

    $block = preg_replace(
        '/\s*<li>This recipe is currently grouped under <strong>Testing<\/strong>\.<\/li>\s*/iu',
        "\n",
        $block
    ) ?? $block;

    return $block;
}

function baseline_retarget_recipe_block(
    string $source,
    string $fromId,
    string $toId,
    string $slug,
    string $title,
    string $category
): string {
    $block = str_replace($fromId, $toId, $source);
    $block = preg_replace('/data-recipe-slug="[^"]+"/i', 'data-recipe-slug="' . $slug . '"', $block, 1) ?? $block;
    $block = preg_replace('/data-category="[^"]+"/i', 'data-category="' . $category . '"', $block, 1) ?? $block;
    $block = preg_replace('/<h3>.*?<\/h3>/is', '<h3>' . $title . '</h3>', $block, 1) ?? $block;
    return baseline_remove_testing_status($block);
}

function baseline_rewrite_recipe_link(string $html, string $id, string $href, string $label): string
{
    $quotedId = preg_quote($id, '/');
    return preg_replace_callback(
        '/<a\s+class="recipe-open"\s+data-recipe-id="' . $quotedId . '"\s+href="[^"]*">.*?<\/a>/is',
        static function () use ($id, $href, $label): string {
            return '<a class="recipe-open" data-recipe-id="' . $id . '" href="' . $href . '">' . $label . '</a>';
        },
        $html
    ) ?? $html;
}

function baseline_apply_skincare_recipe_revisions(string $html): string
{
    $testingShave = baseline_recipe_div_block($html, 'r8');
    $testingMicrocurrent = baseline_recipe_div_block($html, 'r10');

    /* Replace the former main shave gel with the formulation that completed Testing. */
    if ($testingShave !== null) {
        $shave = baseline_retarget_recipe_block(
            $testingShave['html'],
            'r8',
            'r5',
            'calming-shave-gel',
            'Calming Shave Gel',
            'Shaving'
        );
        $html = baseline_replace_recipe_div($html, 'r5', $shave);
    }

    /* The conductive gel replaces the former conductive mist in the main collection. */
    if ($testingMicrocurrent !== null) {
        $microcurrent = baseline_retarget_recipe_block(
            $testingMicrocurrent['html'],
            'r10',
            'r4',
            'microcurrent-glide-gel',
            'Microcurrent Glide Gel',
            'Treatment Support'
        );
        $html = baseline_replace_recipe_div($html, 'r4', $microcurrent);
    }

    /* Promote the tooth powder in place, with its final public name and route. */
    $toothBlock = baseline_recipe_div_block($html, 'r9');
    if ($toothBlock !== null) {
        $tooth = $toothBlock['html'];
        $tooth = preg_replace('/data-recipe-slug="[^"]+"/i', 'data-recipe-slug="tooth-polishing-powder"', $tooth, 1) ?? $tooth;
        $tooth = preg_replace('/data-category="[^"]+"/i', 'data-category="Oral Care"', $tooth, 1) ?? $tooth;
        $tooth = preg_replace('/<h3>.*?<\/h3>/is', '<h3>Tooth Polishing Powder</h3>', $tooth, 1) ?? $tooth;
        $tooth = baseline_remove_testing_status($tooth);
        $html = baseline_replace_recipe_div($html, 'r9', $tooth);
    }

    /* The source Testing cards have now become the public r4/r5 recipes. */
    $html = baseline_remove_recipe_div($html, 'r8');
    $html = baseline_remove_recipe_div($html, 'r10');

    /* Remove their old Testing navigation entries, including r9 before reinserting it as main. */
    $html = preg_replace(
        '/\s*<li>\s*<a\s+class="recipe-open"\s+data-recipe-id="(?:r8|r9|r10)"[^>]*>.*?<\/a>\s*<\/li>\s*/is',
        "\n",
        $html
    ) ?? $html;

    /* Existing r4 navigation slots become Microcurrent Glide Gel. */
    $html = baseline_rewrite_recipe_link(
        $html,
        'r4',
        '/baseline-natural-skincare/recipes/microcurrent-glide-gel',
        'Microcurrent Glide Gel'
    );

    /* Existing r5 navigation slots keep the final name but now point at the promoted formulation. */
    $html = baseline_rewrite_recipe_link(
        $html,
        'r5',
        '/baseline-natural-skincare/recipes/calming-shave-gel',
        'Calming Shave Gel'
    );

    /* Insert Tooth Polishing Powder immediately before the remaining Testing group. */
    $testingHeading = '<li class="ing-subhead"><strong>Testing</strong></li>';
    $toothLink = '<li><a class="recipe-open" data-recipe-id="r9" href="/baseline-natural-skincare/recipes/tooth-polishing-powder">Tooth Polishing Powder</a></li>';
    $html = str_replace($testingHeading, $toothLink . "\n" . $testingHeading, $html);

    /* Clean up stale public wording and links wherever they are referenced by the parent app. */
    $html = str_replace(
        [
            '/baseline-natural-skincare/recipes/hydrating-conductive-mist',
            '/baseline-natural-skincare/recipes/nurture-shine-mist',
            '/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel',
            '/baseline-natural-skincare/recipes/testing-natural-tooth-brightening-powder',
            '/baseline-natural-skincare/recipes/testing-shaving-gel',
            'Hydrating Conductive Mist',
            'Nurture &amp; Shine Mist',
            'Nurture & Shine Mist',
            'Microcurrent Conductive Gel',
            'Natural Tooth-Brightening Powder',
        ],
        [
            '/baseline-natural-skincare/recipes/microcurrent-glide-gel',
            '/baseline-natural-skincare/recipes/microcurrent-glide-gel',
            '/baseline-natural-skincare/recipes/microcurrent-glide-gel',
            '/baseline-natural-skincare/recipes/tooth-polishing-powder',
            '/baseline-natural-skincare/recipes/calming-shave-gel',
            'Microcurrent Glide Gel',
            'Microcurrent Glide Gel',
            'Microcurrent Glide Gel',
            'Microcurrent Glide Gel',
            'Tooth Polishing Powder',
        ],
        $html
    );

    $html = str_replace('<!-- Testing Recipe 9 -->', '<!-- Promoted Recipe: Tooth Polishing Powder -->', $html);

    return $html;
}
