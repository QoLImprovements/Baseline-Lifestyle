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
const foodHtml = read('systems/baseline-food-approach/baseline-food-approach.html');
const dietJs = read('systems/baseline-food-approach/js/baseline-diet-log.js');
const foodDataService = read('systems/baseline-food-approach/js/food-data-service.js');
const htaccess = read('.htaccess');
const recipeDir = path.join(root, 'systems/baseline-food-approach/recipes');
const ingredientDir = path.join(root, 'systems/baseline-food-approach/ingredients');

test('Food surfaces have one theme authority', () => {
  for (const token of [
    '--food-surface-card',
    '--food-surface-panel',
    '--food-surface-control',
    '--food-surface-subtle',
    '--food-surface-selected',
    '--food-surface-border',
    '--food-tab-bg',
    '--food-tab-hover',
    '--food-tab-active',
    '--food-tab-border',
    '--recipe-tab-bg',
    '--recipe-tab-active'
  ]) {
    assert.ok(theme.includes(token + ':'), token + ' must be defined by the Food theme');
  }

  assert.match(foodCss, /\.card\s*\{[\s\S]*?background:var\(--food-surface-card\)/);
  assert.match(foodCss, /\.tab\s*\{[\s\S]*?background:var\(--food-tab-bg\)/);
  assert.match(foodCss, /\.tab\[aria-selected="true"\][\s\S]*?background:var\(--food-tab-active\)/);
  assert.match(recipeCss, /\.recipe-subtab\s*\{[\s\S]*?background:var\(--recipe-tab-bg/);
  assert.match(recipeCss, /\.recipe-subtab\[aria-selected="true"\][\s\S]*?background:var\(--recipe-tab-active/);
  assert.match(dietCss, /\.diet-log-panel\s*\{[\s\S]*?background:var\(--food-surface-panel\)/);
  assert.doesNotMatch(dietCss, /background:rgba\(255,255,255,/);
});

test('standalone Food recipes do not load Diet Log runtime or migration copy', () => {
  const files = fs.readdirSync(recipeDir).filter((name) => name.endsWith('.html'));
  assert.ok(files.length > 0);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.doesNotMatch(html, /baseline-diet-log\.css/);
    assert.doesNotMatch(html, /baseline-diet-log\.js/);
    assert.doesNotMatch(html, /baseline-diet-food-library\.js/);
    assert.doesNotMatch(html, /Phase 4B/);
  }
});


test('Food recipe ownership is folder-backed with no legacy side navigation', () => {
  assert.doesNotMatch(foodHtml, /id="side-nav"/);
  assert.doesNotMatch(foodHtml, /class="side-recipe-nav"/);
  assert.doesNotMatch(recipeCss, /side-recipe-nav|#side-nav/);
  assert.doesNotMatch(foodHtml, /class="recipe card recipe-page"/);
  assert.match(foodHtml, /baseline-food-recipe-index\.js/);
  assert.ok(
    htaccess.includes('RewriteRule ^baseline-food-approach/recipes/([^/]+)/?$ systems/baseline-food-approach/recipes/$1.html [L,QSA]'),
    'Food clean recipe routes must serve accountable standalone recipe files'
  );
});

test('Food Diet Log persistence is server-authoritative', () => {
  assert.doesNotMatch(dietJs, /localStorage|sessionStorage|STORAGE_KEY|Storage\.prototype/);
  assert.doesNotMatch(foodDataService, /localStorage|sessionStorage|Storage\.prototype|XMLHttpRequest/);
  assert.match(foodDataService, /food_data\.php/);
  assert.match(foodDataService, /expectedRevision/);
  assert.match(foodHtml, /food-data-service\.js/);
  assert.doesNotMatch(foodHtml, /food-saved-data-bridge\.js/);
});

test('standalone Food recipes use clean ingredient record URLs', () => {
  for (const name of fs.readdirSync(recipeDir).filter((entry) => entry.endsWith('.html'))) {
    const html = read(path.join('systems/baseline-food-approach/recipes', name));
    assert.doesNotMatch(html, /ingredient-library#ing-/);
    assert.doesNotMatch(html, /href="#ing-/);
    assert.match(html, /\/baseline-food-approach\/ingredient-library\//);
  }
});


test('canonical Food ingredient files own the detailed records', () => {
  const files = fs.readdirSync(ingredientDir).filter((entry) => entry.endsWith('.html'));
  assert.equal(files.length, 41);
  assert.match(foodHtml, /class="lib ingredient-index"/);
  assert.match(foodHtml, /class="card ingredient-index-card"/);
  assert.doesNotMatch(foodHtml, /<div class="card" id="ing-apple">/);

  for (const name of files) {
    const html = read(path.join('systems/baseline-food-approach/ingredients', name));
    assert.doesNotMatch(html, /Food Approach ingredient record\./);
    assert.match(html, /class="card food-ingredient-record"/);
    assert.match(html, /baseline-food-ingredient-detail\.css/);
    assert.match(html, /rel="canonical"/);
  }
});

test('Food production markup contains no Phase 4B recipe naming', () => {
  assert.doesNotMatch(foodHtml, /phase4b|Phase 4B/i);
  const recipeDetailCss = read('systems/baseline-food-approach/css/baseline-food-recipe-detail.css');
  assert.doesNotMatch(recipeDetailCss, /phase4b|Phase 4B/i);
  for (const name of fs.readdirSync(recipeDir).filter((entry) => entry.endsWith('.html'))) {
    assert.doesNotMatch(read(path.join('systems/baseline-food-approach/recipes', name)), /phase4b|Phase 4B/i);
  }
});
