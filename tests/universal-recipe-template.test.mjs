import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const css = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');

test('shared recipe engine exposes the universal four-view template', () => {
  assert.match(shared, /\['standard', 'Standard View'\]/);
  assert.match(shared, /\['details', 'Details'\]/);
  assert.match(shared, /\['guidance', 'Guidance'\]/);
  assert.match(shared, /\['show-all', 'Show All'\]/);
  assert.match(shared, /setView\('standard'\)/);
  assert.doesNotMatch(shared, /<h[1-6][^>]*>Standard View<\/h[1-6]>/i);
});

test('Adjustments owns scaling utilities while recipe-defining choices remain standard-view controls', () => {
  assert.match(shared, /recipe-adjustments-toggle/);
  assert.match(shared, /adjustmentsBtn\.textContent = 'Adjustments'/);
  assert.match(shared, /recipe-control-row--oat, :scope > \.recipe-control-row--thickness/);
  assert.match(shared, /formulaRows\.forEach\(row=> formulaControls\.appendChild\(row\)\)/);
  assert.match(shared, /editBody\.appendChild\(controls\)/);
  assert.match(shared, /qsa\('\.glide-controller', recipeEl\).*recipeViewGroup = 'standard'/s);
  assert.doesNotMatch(shared, /textContent = 'Edit Options'/);
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
