import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(ROOT, path), 'utf8');

const FOOD_HTML = 'systems/baseline-food-approach/baseline-food-approach.html';
const SKIN_HTML = 'systems/baseline-natural-skincare/baseline-natural-skincare.html';
const FOOD_RECIPE_DIR = 'systems/baseline-food-approach/recipes';
const SKIN_RECIPE_DIR = 'systems/baseline-natural-skincare/recipes';
const FOOD_INGREDIENT_DIR = 'systems/baseline-food-approach/ingredients';
const SHARED_JS = 'sitewide/js/baseline-shared.js';

function section(source, id, nextId) {
  const start = source.indexOf('<section class="section" id="' + id + '">');
  assert.notEqual(start, -1, 'missing #' + id + ' section');
  const end = nextId
    ? source.indexOf('<section class="section" id="' + nextId + '">', start)
    : source.length;
  assert.notEqual(end, -1, 'missing #' + nextId + ' section');
  return source.slice(start, end);
}

function ingredientLinks(source) {
  const out = [];
  const re = /<a\b([^>]*\bclass="[^"]*\bing-link\b[^"]*"[^>]*)>/gi;
  let match;
  while ((match = re.exec(source))) {
    const attrs = match[1];
    out.push({
      ingredientId: (attrs.match(/\bdata-ingredient="([^"]+)"/i) || [])[1] || '',
      recipeId: (attrs.match(/\bdata-from-recipe="([^"]+)"/i) || [])[1] || '',
      href: (attrs.match(/\bhref="([^"]+)"/i) || [])[1] || ''
    });
  }
  return out;
}

function libraryIds(source) {
  return [...source.matchAll(/<div\b[^>]*\bclass="[^"]*\bcard\b[^"]*"[^>]*\bid="(ing-[^"]+)"/gi)]
    .map((match) => match[1]);
}

function parseSlugMap(source, constantName) {
  const re = new RegExp('const\\s+' + constantName + '\\s*=\\s*Object\\.freeze\\(\\{([\\s\\S]*?)\\}\\);');
  const block = (source.match(re) || [])[1] || '';
  assert.ok(block, 'missing ' + constantName);
  return Object.fromEntries(
    [...block.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)].map((match) => [match[1], match[2]])
  );
}

function assertCanonicalLinks({ links, library, slugMap, base, sourceName, requireFilter = false }) {
  assert.ok(links.length > 0, sourceName + ' has no ingredient links');
  for (const link of links) {
    assert.ok(link.ingredientId, sourceName + ' has an ingredient link without data-ingredient');
    assert.ok(link.recipeId, sourceName + ' has an ingredient link without data-from-recipe');
    assert.ok(library.has(link.ingredientId), sourceName + ' references missing library card ' + link.ingredientId);
    assert.ok(slugMap[link.ingredientId], sourceName + ' has no canonical slug for ' + link.ingredientId);

    const href = link.href.replace(/&amp;/g, '&');
    const parsed = new URL(href, 'https://baseline.test');
    assert.equal(
      parsed.pathname,
      base + '/' + slugMap[link.ingredientId],
      sourceName + ' has a non-canonical URL for ' + link.ingredientId
    );
    if (requireFilter) {
      assert.equal(
        parsed.searchParams.get('filter'),
        link.recipeId,
        sourceName + ' must preserve the originating recipe for ' + link.ingredientId
      );
    }
  }
}

test('every authored Food and Skincare recipe ingredient resolves to a canonical library record', () => {
  const shared = read(SHARED_JS);
  const foodSlugMap = parseSlugMap(shared, 'FOOD_INGREDIENT_SLUG_BY_ID');
  const skinSlugMap = parseSlugMap(shared, 'SKINCARE_INGREDIENT_SLUG_BY_ID');

  const food = read(FOOD_HTML);
  const skin = read(SKIN_HTML);
  const foodLibrary = new Set(libraryIds(section(food, 'ingredients', 'diet-log')));
  const skinLibrary = new Set(libraryIds(section(skin, 'ingredients', 'support')));

  assert.equal(foodLibrary.size, Object.keys(foodSlugMap).length, 'Food slug map and library must stay one-to-one');
  assert.equal(skinLibrary.size, Object.keys(skinSlugMap).length, 'Skincare slug map and library must stay one-to-one');
  for (const id of Object.keys(foodSlugMap)) assert.ok(foodLibrary.has(id), 'Food slug map points to missing card ' + id);
  for (const id of Object.keys(skinSlugMap)) assert.ok(skinLibrary.has(id), 'Skincare slug map points to missing card ' + id);

  assertCanonicalLinks({
    links: ingredientLinks(section(food, 'recipes', 'ingredients')),
    library: foodLibrary,
    slugMap: foodSlugMap,
    base: '/baseline-food-approach/ingredient-library',
    sourceName: 'Food parent catalogue'
  });

  assertCanonicalLinks({
    links: ingredientLinks(section(skin, 'recipes', 'ingredients')),
    library: skinLibrary,
    slugMap: skinSlugMap,
    base: '/baseline-natural-skincare/ingredient-library',
    sourceName: 'Skincare parent catalogue'
  });

  for (const file of readdirSync(join(ROOT, FOOD_RECIPE_DIR)).filter((name) => name.endsWith('.html')).sort()) {
    assertCanonicalLinks({
      links: ingredientLinks(read(join(FOOD_RECIPE_DIR, file))),
      library: foodLibrary,
      slugMap: foodSlugMap,
      base: '/baseline-food-approach/ingredient-library',
      sourceName: 'Food owned recipe ' + file,
      requireFilter: true
    });
  }

  for (const file of readdirSync(join(ROOT, SKIN_RECIPE_DIR)).filter((name) => name.endsWith('.html')).sort()) {
    assertCanonicalLinks({
      links: ingredientLinks(read(join(SKIN_RECIPE_DIR, file))),
      library: skinLibrary,
      slugMap: skinSlugMap,
      base: '/baseline-natural-skincare/ingredient-library',
      sourceName: 'Skincare owned recipe ' + file,
      requireFilter: true
    });
  }

  for (const slug of Object.values(foodSlugMap)) {
    assert.ok(
      existsSync(join(ROOT, FOOD_INGREDIENT_DIR, slug + '.html')),
      'Food canonical ingredient record file is missing: ' + slug + '.html'
    );
  }
});

test('clean ingredient detail routes keep the full application shell', () => {
  const htaccess = read('.htaccess');
  assert.match(
    htaccess,
    /RewriteRule \^baseline-food-approach\/ingredient-library\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-food-approach\/baseline-food-approach\.html \[L,QSA\]/
  );
  assert.match(
    htaccess,
    /RewriteRule \^baseline-natural-skincare\/ingredient-library\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html \[L,QSA\]/
  );
});
