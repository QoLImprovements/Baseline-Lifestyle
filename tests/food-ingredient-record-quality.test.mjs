import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const dir=path.join(root,'systems/baseline-food-approach/ingredients');
const files=fs.readdirSync(dir).filter(name=>name.endsWith('.html'));
const css=fs.readFileSync(path.join(root,'systems/baseline-food-approach/css/baseline-food-ingredient-detail.css'),'utf8');
const parent=fs.readFileSync(path.join(root,'systems/baseline-food-approach/baseline-food-approach.html'),'utf8');
const hydrator=fs.readFileSync(path.join(root,'systems/baseline-food-approach/js/baseline-food-ingredient-library.js'),'utf8');

test('all Food ingredient records use the comprehensive v2 structure',()=>{
  assert.equal(files.length,47);
  for(const name of files){
    const html=fs.readFileSync(path.join(dir,name),'utf8');
    assert.match(html,/data-ingredient-record-version="2"/,name);
    assert.match(html,/class="ingredient-summary"/,name);
    assert.equal((html.match(/class="ingredient-detail-section"/g)||[]).length,4,name);
    assert.match(html,/Nutrition &amp; composition/,name);
    assert.match(html,/Culinary characteristics/,name);
    assert.match(html,/Uses &amp; preparation/,name);
    assert.match(html,/Selection, storage &amp; considerations/,name);
    assert.doesNotMatch(html,/Odour note|<strong>Benefits:<\/strong>|Good for:/i,name);
    const words=html.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').trim().split(/\s+/).filter(Boolean);
    assert.ok(words.length>=115,name+' should be broad enough to function as an ingredient record');
  }
});

test('ingredient record layout is two-column on wide screens and one-column on narrow screens',()=>{
  assert.match(css,/\.ingredient-detail-grid\{[\s\S]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css,/@media \(max-width:760px\)[\s\S]*\.ingredient-detail-grid\{grid-template-columns:1fr;\}/);
  assert.match(parent,/baseline-food-ingredient-detail\.css\?v=FOOD_INGREDIENT_RECORDS_20261022_2/);
});

test('hydrated Ingredient Library cards receive the same comprehensive record class',()=>{
  assert.match(hydrator,/card\.classList\.add\('food-ingredient-record'\)/);
  assert.match(parent,/baseline-food-ingredient-library\.js\?v=FOOD_INGREDIENT_LIBRARY_NO_FLASH_20261022_2/);
});
