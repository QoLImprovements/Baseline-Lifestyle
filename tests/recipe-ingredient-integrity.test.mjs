import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(relative)=>fs.readFileSync(path.join(root,relative),'utf8');

function ingredientLists(html){
  const rows=[];
  for(const section of html.matchAll(/<h4[^>]*>\s*Ingredients\s*<\/h4>\s*<ul[^>]*>([\s\S]*?)<\/ul>/gi)){
    for(const match of section[1].matchAll(/<li\b([^>]*)>([\s\S]*?)<\/li>/gi)){
      if(/\bing-subhead\b/i.test(match[1])) continue;
      rows.push(match[2]);
    }
  }
  return rows;
}
function linkInfo(row){
  const match=row.match(/<a\b[^>]*class=["'][^"']*\bing-link\b[^"']*["'][^>]*data-from-recipe=["']([^"']+)["'][^>]*data-ingredient=["']([^"']+)["'][^>]*href=["']([^"']+)["']/i);
  return match ? { recipeId:match[1], ingredientId:match[2], href:match[3] } : null;
}

test('every Skincare recipe ingredient entry links to an Ingredient Library record',()=>{
  const html=read('systems/baseline-natural-skincare/baseline-natural-skincare.html');
  const libraryIds=new Set([...html.matchAll(/\bid=["'](ing-[^"']+)["']/g)].map(match=>match[1]));
  const rows=ingredientLists(html);
  assert.ok(rows.length>0);
  for(const row of rows){
    const link=linkInfo(row);
    assert.ok(link, 'Skincare ingredient row is missing canonical ing-link/data metadata: '+row.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
    assert.ok(libraryIds.has(link.ingredientId), `${link.ingredientId} is referenced by a recipe but missing from Ingredient Library`);
  }
  for(const id of [
    'ing-white-kaolin','ing-sage-leaf-powder','ing-peppermint-leaf-powder',
    'ing-colloidal-oatmeal','ing-marshmallow-root-powder','ing-inulin-powder','ing-sunflower-lecithin-powder'
  ]) assert.ok(libraryIds.has(id), id+' must have an Ingredient Library card');
});

test('Lip Balm is embedded in the Skincare application so direct refresh needs no recipe fetch',()=>{
  const html=read('systems/baseline-natural-skincare/baseline-natural-skincare.html');
  assert.match(html,/data-recipe-slug="testing-lip-balm" id="r12"/);
  assert.match(html,/data-initial-recipe-slug/);
  assert.doesNotMatch(html,/data-initial-recipe-route="1"[^\n]*\.recipe-layout\{visibility:hidden/);
});

test('every standalone Food recipe ingredient entry links to a real ingredient record',()=>{
  const recipeDir=path.join(root,'systems/baseline-food-approach/recipes');
  const ingredientDir=path.join(root,'systems/baseline-food-approach/ingredients');
  const ingredientSlugs=new Set(fs.readdirSync(ingredientDir).filter(name=>name.endsWith('.html')).map(name=>name.replace(/\.html$/,'')));
  const recipes=fs.readdirSync(recipeDir).filter(name=>name.endsWith('.html'));
  assert.ok(recipes.length>0);
  for(const name of recipes){
    const html=fs.readFileSync(path.join(recipeDir,name),'utf8');
    for(const row of ingredientLists(html)){
      const link=linkInfo(row);
      assert.ok(link, `${name} has an unlinked ingredient row`);
      const slug=link.href.match(/\/baseline-food-approach\/(?:ingredient-library|ingredients)\/([^#?/]+)/i)?.[1];
      if(slug) assert.ok(ingredientSlugs.has(slug), `${name} links to missing Food ingredient record ${slug}`);
    }
  }
});

test('Skincare ingredient record links retain the originating recipe filter',()=>{
  const shared=read('sitewide/js/baseline-shared.js');
  assert.match(shared,/skincareIngredientUrlForId\(ingredientId, recipeFilter\)/);
  assert.match(shared,/skincareIngredientUrlForId\(iid, rid\)/);
  assert.match(shared,/recipeFilter = new URLSearchParams\(location\.search \|\| ''\)\.get\('filter'\)/);
  assert.match(shared,/skincareIngredientUrlForId\(state\.ingredientId, state\.recipeFilter \|\| ''\)/);
});
