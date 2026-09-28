import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const css = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const skincareHtml = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const foodHtml = fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');

test('Food and Skincare declare recipe routes before first paint', () => {
  for (const html of [skincareHtml, foodHtml]) {
    assert.match(html, /id="baseline-recipe-route-first-paint"/);
    assert.match(html, /data-initial-section','recipes'/);
    assert.match(html, /data-initial-recipe-route','1'/);
    assert.match(html, /data-initial-section="recipes"[^}]*#system\.section\{display:none!important\}/s);
    assert.match(html, /data-initial-section="recipes"[^}]*#recipes\.section\{display:block!important\}/s);
    assert.doesNotMatch(html, /data-initial-recipe-route="1"[^}]*\.recipe-layout\{visibility:hidden!important\}/s);
  }
  assert.match(skincareHtml, /baseline-shared\.js\?v=SITEWIDE_REFRESH_HISTORY_ROUTING_20260920_1/);
  assert.match(foodHtml, /baseline-shared\.js\?v=SITEWIDE_RECIPE_FIRST_PAINT_METHOD_TAGS_20260920_2/);
  assert.match(css, /data-initial-recipe-slug="testing-lip-balm"/);
  assert.match(shared, /removeAttribute\('data-initial-section'\)/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-route'\)/);
});

test('shared method-tag engine maps every ingredient source to one first-use method step', () => {
  assert.match(shared, /function injectMethodAmounts\(recipeEl\)/);
  assert.match(shared, /dataset\.methodTagKey=key/);
  assert.match(shared, /dataset\.methodIngredientKey=entry\.key/);
  assert.match(shared, /function bestNaturalMatch\(entry\)/);
  assert.match(shared, /function bestExplicitMatch\(entry\)/);
  assert.match(shared, /const preferExplicit=!!explicit && \(entry\.genericTerm \|\| \(identityCounts\.get\(entry\.identity\) \|\| 0\)>1\)/);
  assert.match(shared, /data-method-amounts='first-use'|dataset\.methodAmounts='first-use'/);
  assert.doesNotMatch(shared, /const emittedMethodAmounts = new Set\(\)/);
});

test('shared recipe engine exposes the universal four-view template', () => {
  assert.match(shared, /\['standard', 'Standard View'\]/);
  assert.match(shared, /\['details', 'Details'\]/);
  assert.match(shared, /\['guidance', 'Guidance'\]/);
  assert.match(shared, /\['show-all', 'Show All'\]/);
  assert.match(shared, /setView\('standard'\)/);
  assert.doesNotMatch(shared, /<h[1-6][^>]*>Standard View<\/h[1-6]>/i);
});

test('Details remains a deliberately empty placeholder in every recipe view', () => {
  assert.match(shared, /group !== 'details' && \(next === 'show-all' \|\| group === next\)/);
  assert.match(css, /\[data-recipe-view-group="details"\]\{\s*display:none !important;/s);
});

test('every universal recipe receives Yield and Batch metadata with a truthful fallback', () => {
  assert.match(shared, /yieldValue = '1 recipe batch'/);
  assert.match(shared, /addMeta\('Yield', yieldValue\)/);
  assert.match(shared, /addMeta\('Batch', '1×'\)/);
  assert.match(shared, /recipe-batch-meta-value/);
  assert.match(shared, /recipe-yield-meta-value/);
});

test('Adjustments owns scaling utilities while recipe-defining choices remain standard-view controls', () => {
  assert.match(shared, /recipe-adjustments-toggle/);
  assert.match(shared, /recipe-adjustments-row/);
  assert.match(shared, /adjustmentsBtn\.textContent = 'Adjustments'/);
  assert.match(shared, /recipe-control-row--oat, :scope > \.recipe-control-row--thickness/);
  assert.match(shared, /formulaRows\.forEach\(row=> formulaControls\.appendChild\(row\)\)/);
  assert.match(shared, /editBody\.appendChild\(controls\)/);
  assert.match(shared, /qsa\('\.glide-controller', recipeEl\).*recipeViewGroup = 'standard'/s);
  assert.doesNotMatch(shared, /textContent = 'Edit Options'/);
});

test('Adjustments has no coloured button surface', () => {
  assert.match(css, /recipe-adjustments-row[\s\S]*background:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-color:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-image:none !important;/);
});

test('slider recipes use the universal slider row plus one Overall Feel descriptor', () => {
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /title\.textContent = 'Overall Feel'/);
  assert.match(shared, /\.glide-variable-help/);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(shared, /recipe-slider-intro-legacy/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SLIDER-CONTRACT-20260920/);
  assert.match(css, /\.recipe-slider-intro-legacy\{\s*display:none !important;/s);
});

test('universal recipe spacing is owned by the shared template', () => {
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SPACING-20260824/);
  assert.match(css, /recipe-title-row/);
  assert.match(css, /recipe-meta-row/);
  assert.match(css, /recipe-adjustments-row/);
  assert.match(css, /recipe-subtabs/);
  assert.match(css, /recipe-option-strip/);
});

test('universal recipe styling inherits system variables instead of imposing Food or Skincare colours', () => {
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-TEMPLATE-20260824/);
  assert.match(css, /recipe-meta-row/);
  assert.match(css, /recipe-adjustments-toggle/);
  assert.match(css, /recipe-subtabs/);
  assert.match(css, /var\(--showall-bg/);
  assert.match(css, /var\(--accent-2/);
  assert.match(css, /var\(--border/);
});

test('random recipe prose bold is suppressed except semantic recipe labels', () => {
  assert.match(css, /\[data-recipe-view-group\] strong\{\s*font-weight:inherit !important;/s);
  assert.match(css, /\.recipe-method-action/);
  assert.match(css, /\.recipe-subgroup-label/);
  assert.match(css, /\.recipe-detail-label/);
  assert.match(css, /\.recipe-guidance-label/);
});
