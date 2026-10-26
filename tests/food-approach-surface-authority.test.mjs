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
const sitewideCss = read('sitewide/css/baseline-sitewide.css');
const shared = read('sitewide/js/baseline-shared.js');
const foodHtml = read('systems/baseline-food-approach/baseline-food-approach.html');
const recipeIndex = read('systems/baseline-food-approach/js/baseline-food-recipe-index.js');
const dietJs = read('systems/baseline-food-approach/js/baseline-diet-log.js');
const foodDataService = read('systems/baseline-food-approach/js/food-data-service.js');
const htaccess = read('.htaccess');
const recipeDir = path.join(root, 'systems/baseline-food-approach/recipes');
const ingredientDir = path.join(root, 'systems/baseline-food-approach/ingredients');

test('Food content containers share one warmer theme surface', () => {
  assert.match(theme, /--food-surface-card:\s*#f59b32/);
  assert.match(theme, /--food-surface-panel:\s*linear-gradient/);
  assert.match(theme, /--food-surface-subtle:\s*linear-gradient/);
  assert.match(sitewideCss, /body:not\(\[data-app="home"\]\) \.card,[\s\S]*background-color:var\(--bl-surface-card-solid\)!important/);
  assert.doesNotMatch(foodCss, /\.card\s*\{[^}]*background\s*:/);
  assert.doesNotMatch(foodCss, /\.card\s*\{[^}]*\bcolor\s*:/);
  assert.doesNotMatch(foodCss, /\.card::(?:before|after)\s*\{/);
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

test('Food Recipes overview exposes every canonical registered recipe', () => {
  const entries = Array.from(recipeIndex.matchAll(/\{\s*"id":\s*"([^"]+)",\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"href":\s*"([^"]+)"/g));
  assert.equal(entries.length, 12, 'canonical Food recipe registry count changed unexpectedly');

  for (const [, id, slug, title, category, href] of entries) {
    assert.ok(foodHtml.includes(`data-recipe-id="${id}"`), `Recipes overview is missing ${title} (${id})`);
    assert.ok(foodHtml.includes(`href="${href}"`), `Recipes overview has no canonical link for ${title} (${slug}, ${category})`);
  }
});

test('Food recipe sources are content fragments only', () => {
  const files = fs.readdirSync(recipeDir).filter((name) => name.endsWith('.html'));
  assert.equal(files.length, 12);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.match(html, /^<!-- Canonical Food recipe content source\./);
    assert.match(html, /class="recipe card recipe-page recipe-universal-template"/);
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
  assert.equal(files.length, 47);
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
    assert.match(html, /class="recipe card recipe-page recipe-universal-template"/);
  }
});


test('Food section first-paint stays local while recipe first-paint is sitewide', () => {
  assert.doesNotMatch(foodHtml, /id="baseline-recipe-route-first-paint-style"/);
  assert.match(foodCss, /Initial route authority: URL state is present before body paint/);
  assert.match(foodCss, /html\[data-initial-section\] body\[data-app="food"\] main\.wrap>\.section\{display:none!important\}/);
  assert.match(foodCss, /#diet-log\.section\{display:block!important\}/);
  assert.doesNotMatch(foodCss, /data-initial-recipe-route|recipe-open-mode|recipe-detail-open/);
  assert.match(recipeCss, /First-paint route guard/);
  assert.match(recipeCss, /html\[data-initial-recipe-route="1"\] #recipes \.recipe-page/);
  assert.match(foodHtml, /id="baseline-food-tab-first-state"/);
});


test('Food card colour has one authority and cannot split into competing yellow surfaces', () => {
  assert.match(theme, /--food-surface-card:\s*#f59b32/);
  assert.match(sitewideCss, /--bl-surface-card-solid:\s*var\(--food-surface-card\)/);
  assert.match(sitewideCss, /--bl-surface-recipe-card-solid:\s*var\(--food-surface-card\)/);
  assert.match(sitewideCss, /--bl-surface-panel-solid:\s*var\(--food-surface-panel\)/);
  assert.doesNotMatch(sitewideCss, /#f5b84a|#ffc04d/i);
});
