import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const shared = readFileSync(resolve(root, 'sitewide/js/baseline-shared.js'), 'utf8');
const skincare = readFileSync(resolve(root, 'systems/baseline-natural-skincare/baseline-natural-skincare.html'), 'utf8');
const food = readFileSync(resolve(root, 'systems/baseline-food-approach/baseline-food-approach.html'), 'utf8');

function ingredientLinks(html) {
  return Array.from(html.matchAll(/<a\b([^>]*\bclass=["'][^"']*\bing-link\b[^"']*["'][^>]*)>/gi), match => {
    const attrs = match[1];
    const get = (name) => {
      const found = attrs.match(new RegExp(name + "=[\\\"']([^\\\"']*)[\\\"']", 'i'));
      return found ? found[1] : '';
    };
    return {
      ingredientId:get('data-ingredient'),
      recipeId:get('data-from-recipe'),
      href:get('href')
    };
  });
}

function ingredientCardIds(html) {
  return new Set(Array.from(
    html.matchAll(/<[^>]+\bid=["'](ing-[^"']+)["'][^>]*>/gi),
    match => match[1]
  ));
}

function skincareSlugMap() {
  const block = shared.match(/const SKINCARE_INGREDIENT_SLUG_BY_ID = Object\.freeze\(\{([\s\S]*?)\}\);/);
  assert.ok(block, 'Skincare ingredient slug map must exist');
  const map = new Map();
  for (const match of block[1].matchAll(/'([^']+)':'([^']+)'/g)) map.set(match[1], match[2]);
  return map;
}

test('every Skincare recipe ingredient has a library card and canonical slug', () => {
  const cards = ingredientCardIds(skincare);
  const slugs = skincareSlugMap();
  const links = ingredientLinks(skincare);

  assert.ok(links.length > 0, 'Skincare recipes must expose ingredient links');

  for (const link of links) {
    assert.ok(link.recipeId, 'Skincare ingredient link must declare data-from-recipe');
    assert.ok(link.ingredientId, 'Skincare ingredient link must declare data-ingredient');
    assert.ok(cards.has(link.ingredientId), link.ingredientId + ' must exist in the Skincare Ingredient Library');
    assert.ok(slugs.has(link.ingredientId), link.ingredientId + ' must have a canonical Skincare ingredient slug');
  }
});

test('Lip Balm ingredient links preserve r12 as their origin', () => {
  const lipStart = skincare.indexOf('data-recipe-slug="testing-lip-balm"');
  const lipEnd = skincare.indexOf('<section class="section" id="ingredients">', lipStart);
  const links = ingredientLinks(skincare.slice(lipStart, lipEnd));
  assert.equal(links.length, 8, 'Lip Balm should expose eight ingredient links');
  for (const link of links) {
    assert.equal(link.recipeId, 'r12');
    assert.match(link.href, /\?filter=r12$/);
  }
});

test('every Food recipe ingredient has a library card and physical ingredient record', () => {
  const cards = ingredientCardIds(food);
  const links = ingredientLinks(food);
  const files = new Set(
    readdirSync(resolve(root, 'systems/baseline-food-approach/ingredients'))
      .filter(name => name.endsWith('.html'))
      .map(name => name.replace(/\.html$/, ''))
  );

  assert.ok(links.length > 0, 'Food recipes must expose ingredient links');

  for (const link of links) {
    assert.ok(link.recipeId, 'Food ingredient link must declare data-from-recipe');
    assert.ok(link.ingredientId, 'Food ingredient link must declare data-ingredient');
    assert.ok(cards.has(link.ingredientId), link.ingredientId + ' must exist in the Food Ingredient Library');

    const slug = link.ingredientId === 'ing-mushrooms'
      ? 'white-mushroom'
      : link.ingredientId.replace(/^ing-/, '');
    assert.ok(files.has(slug), link.ingredientId + ' must have physical Food ingredient record ' + slug + '.html');
  }
});

test('Food shared-router ownership remains explicit', () => {
  const tabs = readFileSync(resolve(root, 'sitewide/js/baseline-tabs.js'), 'utf8');
  assert.match(tabs, /if\(window\.__BASELINE_SHARED__\) return/);
  assert.match(shared, /isFood/);
  assert.match(shared, /\/baseline-food-approach\/ingredient-library/);
});
