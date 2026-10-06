import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
const read=relative=>readFileSync(resolve(root,relative),'utf8');
const shared=read('sitewide/js/baseline-shared.js');
const skincare=read('systems/baseline-natural-skincare/baseline-natural-skincare.html');
const foodParent=read('systems/baseline-food-approach/baseline-food-approach.html');

function ingredientLinks(html){
  return Array.from(html.matchAll(/<a\b([^>]*\bclass=["'][^"']*\bing-link\b[^"']*["'][^>]*)>/gi),match=>{
    const attrs=match[1];
    const get=name=>attrs.match(new RegExp(name+'=["\\\']([^"\\\']*)["\\\']','i'))?.[1] || '';
    return { ingredientId:get('data-ingredient'),recipeId:get('data-from-recipe'),href:get('href') };
  });
}
function ingredientCardIds(html){
  return new Set(Array.from(html.matchAll(/<[^>]+\bid=["'](ing-[^"']+)["'][^>]*>/gi),match=>match[1]));
}
function skincareSlugMap(){
  const block=shared.match(/const SKINCARE_INGREDIENT_SLUG_BY_ID = Object\.freeze\(\{([\s\S]*?)\}\);/);
  assert.ok(block,'Skincare ingredient slug map must exist');
  const map=new Map();
  for(const match of block[1].matchAll(/'([^']+)':'([^']+)'/g)) map.set(match[1],match[2]);
  return map;
}

test('every Skincare recipe ingredient has one library card and canonical slug',()=>{
  const cards=ingredientCardIds(skincare);
  const slugs=skincareSlugMap();
  const links=ingredientLinks(skincare);
  assert.ok(links.length>0,'Skincare recipes must expose ingredient links');
  for(const link of links){
    assert.ok(link.recipeId,'Skincare ingredient link must declare data-from-recipe');
    assert.ok(link.ingredientId,'Skincare ingredient link must declare data-ingredient');
    assert.ok(cards.has(link.ingredientId),link.ingredientId+' must exist in the Skincare Ingredient Library');
    assert.ok(slugs.has(link.ingredientId),link.ingredientId+' must have a canonical Skincare ingredient slug');
  }
});

test('Comfort Barrier Balm ingredient links preserve r12 as their origin',()=>{
  const links=ingredientLinks(skincare).filter(link=>link.recipeId==='r12');
  assert.equal(links.length,8,'Comfort Barrier Balm should expose eight ingredient links');
  for(const link of links) assert.equal(link.recipeId,'r12');
});

test('Food recipe fragments link only to physical canonical ingredient records',()=>{
  const recipeDir=resolve(root,'systems/baseline-food-approach/recipes');
  const ingredientDir=resolve(root,'systems/baseline-food-approach/ingredients');
  const recipeFiles=readdirSync(recipeDir).filter(name=>name.endsWith('.html'));
  const ingredientFiles=new Set(readdirSync(ingredientDir).filter(name=>name.endsWith('.html')).map(name=>name.replace(/\.html$/,'')));
  const recipeHtml=recipeFiles.map(name=>read('systems/baseline-food-approach/recipes/'+name)).join('\n');
  const links=ingredientLinks(recipeHtml);
  assert.ok(links.length>0,'Food recipe fragments must expose ingredient links');

  for(const link of links){
    assert.ok(link.recipeId,'Food ingredient link must declare data-from-recipe');
    assert.ok(link.ingredientId,'Food ingredient link must declare data-ingredient');
    const slug=link.href.match(/\/baseline-food-approach\/ingredient-library\/([^?#"']+)/)?.[1] || '';
    assert.ok(slug,'Food ingredient link must use a canonical ingredient-library path');
    assert.ok(ingredientFiles.has(slug),link.ingredientId+' must have physical Food ingredient record '+slug+'.html');
    const record=read('systems/baseline-food-approach/ingredients/'+slug+'.html');
    assert.ok(ingredientCardIds(record).has(link.ingredientId),link.ingredientId+' must be the record ID in '+slug+'.html');
  }
});

test('Food and Skincare navigation is owned by baseline-shared without a fallback tabs file',()=>{
  assert.match(shared,/isFood/);
  assert.match(shared,/\/baseline-food-approach\/ingredient-library/);
  assert.doesNotMatch(foodParent,/\/sitewide\/js\/baseline-tabs\.js/);
  assert.doesNotMatch(skincare,/\/sitewide\/js\/baseline-tabs\.js/);
});
