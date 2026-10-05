import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const theme = read('sitewide/css/baseline-themes.css');
const foodCss = read('systems/baseline-food-approach/css/baseline-food-approach.css');
const dietCss = read('systems/baseline-food-approach/css/baseline-diet-log.css');
const recipeCss = read('sitewide/css/baseline-recipes.css');
const shared = read('sitewide/js/baseline-shared.js');
const foodHtml = read('systems/baseline-food-approach/baseline-food-approach.html');
const dietJs = read('systems/baseline-food-approach/js/baseline-diet-log.js');
const foodDataService = read('systems/baseline-food-approach/js/food-data-service.js');
const htaccess = read('.htaccess');
const recipeDir = path.join(root, 'systems/baseline-food-approach/recipes');
const ingredientDir = path.join(root, 'systems/baseline-food-approach/ingredients');

test('Food content containers share one warmer theme surface', () => {
  assert.match(theme, /--food-surface-card:\s*var\(--food-orange\)/);
  assert.match(theme, /--food-surface-panel:\s*var\(--food-surface-card\)/);
  assert.match(theme, /--food-surface-subtle:\s*var\(--food-surface-card\)/);
  assert.match(foodCss, /\.card\s*\{[\s\S]*?background:var\(--food-surface-card\)/);
  assert.match(dietCss, /\.diet-log-panel\s*\{[\s\S]*?background:var\(--food-surface-panel\)/);
  assert.doesNotMatch(recipeCss, /body\[data-app\] #recipes\s*>\s*\.grid\s*>\s*\.card\s*\{[^}]*background\s*:\s*transparent/i);
});

test('Recipes overview contains no historical visible recipe-card grid', () => {
  assert.match(recipeCss, /\.recipe-page\{\s*display:none;/);
  assert.doesNotMatch(recipeCss, /\.recipe-page\{\s*display:block;/);
  assert.doesNotMatch(recipeCss, /#recipes:not\(\.recipe-open-mode\)/);
  assert.doesNotMatch(recipeCss, /\.recipe\.card\s*\{/);
  assert.doesNotMatch(recipeCss, /recipe-top-bar/);
  assert.doesNotMatch(foodHtml, /class="card recipe-landing"/);
  assert.match(foodHtml, /class="recipe-landing" id="recipes-landing"/);
});

test('Food recipe sources are content fragments only', () => {
  const files = fs.readdirSync(recipeDir).filter((name) => name.endsWith('.html'));
  assert.equal(files.length, 11);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.match(html, /^<!-- Canonical Food recipe content source\./);
    assert.match(html, /class="recipe card recipe-page"/);
    assert.doesNotMatch(html, /<!DOCTYPE|<html\b|<head\b|<body\b|<script\b|<link\b/i);
    assert.doesNotMatch(html, /standalone-recipe-card|food-recipe-shell|food-recipe-top/);
    assert.doesNotMatch(html, /ingredient-library#ing-|href="#ing-/);
    assert.match(html, /\/baseline-food-approach\/ingredient-library\//);
  }

  assert.equal(
    fs.existsSync(path.join(root, 'systems/baseline-food-approach/css/baseline-food-recipe-detail.css')),
    false,
    'dead standalone Food recipe stylesheet must stay deleted'
  );
});

test('Food and Skincare use the same shell-first recipe system', () => {
  assert.ok(
    htaccess.includes('RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/baseline-food-approach.html [L,QSA]')
  );
  assert.match(foodHtml, /class="recipes" data-recipe-source-host="1"/);
  assert.match(shared, /async function hydrateFolderBackedRecipeCollection\(\)/);
  assert.match(shared, /Promise\.all\([\s\S]*BASELINE_FOOD_RECIPE_INDEX/);
  assert.match(shared, /card\.classList\.add\('recipe-universal-template'\)/);
  assert.doesNotMatch(shared, /standalone-recipe-card|ensureStandaloneSystemTabs|baseline-standalone-primary-tabs/);
});

test('Food parent uses the universal recipe-route first-paint contract', () => {
  assert.match(foodHtml, /id="baseline-recipe-route-first-paint"/);
  assert.match(foodHtml, /data-initial-recipe-route','1'/);
  assert.match(foodHtml, /data-initial-recipe-pending','1'/);
  assert.match(foodHtml, /data-initial-recipe-slug/);
  assert.match(foodHtml, /data-initial-recipe-view/);
});

test('Food Diet Log persistence remains server-authoritative', () => {
  assert.doesNotMatch(dietJs, /localStorage|sessionStorage|STORAGE_KEY|Storage\.prototype/);
  assert.doesNotMatch(foodDataService, /localStorage|sessionStorage|Storage\.prototype|XMLHttpRequest/);
  assert.match(foodDataService, /food_data\.php/);
  assert.match(foodDataService, /expectedRevision/);
  assert.match(foodHtml, /food-data-service\.js/);
  assert.doesNotMatch(foodHtml, /food-saved-data-bridge\.js/);
});

test('canonical Food ingredient files own detailed records', () => {
  const files = fs.readdirSync(ingredientDir).filter((entry) => entry.endsWith('.html'));
  assert.equal(files.length, 41);
  assert.match(foodHtml, /class="lib ingredient-index"/);
  assert.doesNotMatch(foodHtml, /<div class="card" id="ing-apple">/);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/ingredients', name));
    assert.match(html, /class="card food-ingredient-record"/);
    assert.match(html, /rel="canonical"/);
    assert.doesNotMatch(html, /Food Approach ingredient record\./);
  }
});

test('legacy recipe and side-navigation authorities stay deleted', () => {
  assert.doesNotMatch(foodHtml, /id="side-nav"|class="side-recipe-nav"/);
  assert.doesNotMatch(recipeCss, /side-recipe-nav|#side-nav/);
  assert.doesNotMatch(foodHtml, /phase4b|Phase 4B/i);
  assert.doesNotMatch(recipeCss, /Food exact-route selectors/);
});


test('universal recipe enhancer still owns Food and Skincare controls', () => {
  assert.match(shared, /const recipeSelectorBase = recipeScope[\s\S]*'#recipes \.recipe\.card\.recipe-page'/);
  assert.match(shared, /function setupRecipeTools\(opts\)/);
  assert.match(shared, /adjustmentsBtn\.textContent = 'Adjustments'/);
  assert.match(shared, /recipeEl\.classList\.toggle\('recipe-options-open', open\)/);

  for (const name of fs.readdirSync(recipeDir).filter((entry) => entry.endsWith('.html'))) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.match(html, /class="recipe card recipe-page"/);
  }
});


test('Food first-paint tabs match the live solid tab authority', () => {
  const firstPaint = foodHtml.match(/<style id="baseline-recipe-route-first-paint-style">([\s\S]*?)<\/style>/)?.[1] || '';
  assert.match(firstPaint, /--bl-surface-control-solid/);
  assert.match(firstPaint, /--bl-surface-active-solid/);
  assert.match(firstPaint, /color:var\(--ink\)!important/);
  assert.doesNotMatch(firstPaint, /#fff7e8|--food-tab-bg|--food-tab-active/);
});
