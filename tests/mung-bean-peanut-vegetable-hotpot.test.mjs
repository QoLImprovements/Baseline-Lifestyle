import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const recipePath='systems/baseline-food-approach/recipes/mung-bean-and-peanut-vegetable-hotpot.html';
const recipe=fs.readFileSync(recipePath,'utf8');
const index=fs.readFileSync('systems/baseline-food-approach/js/baseline-food-recipe-index.js','utf8');
const profiles=fs.readFileSync('sitewide/js/baseline-ingredient-profiles.js','utf8');
const food=fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html','utf8');

test('mung bean and peanut hotpot is a canonical 8-portion Food recipe',()=>{
  assert.match(recipe,/class="recipe card recipe-page recipe-universal-template"/);
  assert.match(recipe,/data-category="Slow Cooker"/);
  assert.match(recipe,/data-recipe-slug="mung-bean-and-peanut-vegetable-hotpot"/);
  assert.match(recipe,/id="r12"/);
  assert.match(recipe,/Mung Bean &amp; Peanut Vegetable Hotpot/);
  assert.match(recipe,/base batch makes 8 portions/);
  assert.match(recipe,/LOW for 8 hours/);
  assert.match(recipe,/40 g .*tapioca starch/);
  assert.match(recipe,/53 g cold .*water/);
  assert.match(recipe,/Per portion: 1 tsp .*lemon juice/);
  assert.equal((recipe.match(/class="recipe-detail-block"/g)||[]).length,6);
  assert.equal((recipe.match(/class="recipe-subtab"/g)||[]).length,4);
  assert.equal((recipe.match(/data-recipe-view-group="guidance">/g)||[]).length,4);
});

test('hotpot is registered and all linked new ingredients have library authority',()=>{
  assert.match(index,/"slug": "mung-bean-and-peanut-vegetable-hotpot"/);
  for(const id of ['ing-mung-beans','ing-peas','ing-sweetcorn','ing-spinach','ing-green-pepper','ing-yellow-pepper']){
    assert.ok(index.includes('"'+id+'"'),id+' missing from recipe index');
    assert.ok(profiles.includes('"'+id+'"'),id+' missing conversion profile');
    assert.ok(food.includes('id="'+id+'"'),id+' missing ingredient library card');
  }
});

test('new hotpot ingredient records exist with matching canonical IDs',()=>{
  const records={
    'mung-beans':'ing-mung-beans',
    'peas':'ing-peas',
    'sweetcorn':'ing-sweetcorn',
    'spinach':'ing-spinach',
    'green-pepper':'ing-green-pepper',
    'yellow-pepper':'ing-yellow-pepper'
  };
  for(const [slug,id] of Object.entries(records)){
    const path='systems/baseline-food-approach/ingredients/'+slug+'.html';
    assert.ok(fs.existsSync(path),path+' missing');
    const source=fs.readFileSync(path,'utf8');
    assert.match(source,new RegExp('id="'+id+'"'));
    assert.ok(source.includes('/baseline-food-approach/ingredient-library/'+slug));
  }
});


test('Food descriptor stays clean and the hotpot is visible in the Recipes overview',()=>{
  assert.match(food,/Vegan &amp; gluten-free food system focused on health and appearance\./);
  const subtitle=(food.match(/<div class="subtitle">([\s\S]*?)<\/div>/)||[])[1]||'';
  assert.doesNotMatch(subtitle,/cosmetic|odour control/i);
  assert.doesNotMatch(food,/cosmetic/i);
  assert.match(food,/<h4>Slow Cooker<\/h4>[\s\S]*data-recipe-id="r12"[\s\S]*Mung Bean &amp; Peanut Vegetable Hotpot/);
  assert.match(food,/baseline-food-approach\.css\?v=FOOD_SINGLE_VISUAL_AUTHORITY_20261022_1/);
});
