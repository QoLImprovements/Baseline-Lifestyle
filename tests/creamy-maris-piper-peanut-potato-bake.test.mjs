import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const slug = 'creamy-maris-piper-peanut-potato-bake';
const recipe = fs.readFileSync('systems/baseline-food-approach/recipes/' + slug + '.html', 'utf8');
const food = fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');
const index = fs.readFileSync('systems/baseline-food-approach/js/baseline-food-recipe-index.js', 'utf8');
const registry = JSON.parse('[' + index.match(/Object\.freeze\(\[([\s\S]*?)\]\);/)[1] + ']');

test('Ninja potato bake is a canonical Food recipe using the shared four-view shell', () => {
  assert.match(recipe, /class="recipe card recipe-page recipe-universal-template"/);
  assert.match(recipe, /data-recipe-slug="creamy-maris-piper-peanut-potato-bake"/);
  assert.match(recipe, /data-category="Bake"/);
  assert.match(recipe, /id="r13"/);
  assert.equal((recipe.match(/data-static-recipe-controls="1"/g) || []).length, 1);
  assert.equal((recipe.match(/class="recipe-detail-block"/g) || []).length, 6);
  assert.equal((recipe.match(/class="recipe-subtab"/g) || []).length, 4);
  assert.equal((recipe.match(/data-recipe-view-group="guidance">/g) || []).length, 4);
  assert.match(recipe, /Back To Recipes/);
});

test('published ingredients and BAKE instructions match the adapted recipe', () => {
  assert.match(recipe, /800 g .*Maris Piper potatoes/);
  assert.match(recipe, /50 g natural .*peanut butter/);
  assert.match(recipe, /250 ml total .*water/);
  assert.match(recipe, /10 g .*tapioca starch/);
  assert.match(recipe, /1½ tsp .*herbes de Provence/);
  assert.match(recipe, /BAKE at 180°C/);
  assert.match(recipe, /60–75 minutes/);
  assert.match(recipe, /not a verified appliance-tested result/);
  assert.doesNotMatch(recipe, /data-ingredient="ing-(?:onion|garlic|soy|cornflour)"/i);
  assert.match(recipe, /no added oil, onion, garlic, milk or soya milk/);
});

test('recipe overview, registry and linked ingredient records remain consistent', () => {
  const entry = registry.find(recipe => recipe.id === 'r13');
  assert.ok(entry);
  assert.equal(entry.slug, slug);
  assert.equal(entry.category, 'Bake');
  assert.match(food, /<h4>Bake<\/h4>[\s\S]*data-recipe-id="r13"/);
  assert.ok(food.includes(entry.href));
  for (const ingredientId of entry.ingredients) {
    assert.ok(recipe.includes('data-ingredient="' + ingredientId + '"'), ingredientId + ' recipe reference');
    const href = recipe.match(new RegExp('data-ingredient="' + ingredientId + '" href="([^"]+)"'))?.[1];
    assert.ok(href, ingredientId + ' canonical href');
    const ingredientSlug = href.split('/').pop();
    const ingredientRecord = fs.readFileSync('systems/baseline-food-approach/ingredients/' + ingredientSlug + '.html', 'utf8');
    assert.ok(ingredientRecord.includes('id="' + ingredientId + '"'), ingredientId + ' canonical record');
  }
});
