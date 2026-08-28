import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const profiles=fs.readFileSync(path.join(root,'sitewide/js/baseline-ingredient-profiles.js'),'utf8');
const main=fs.readFileSync(path.join(root,'systems/baseline-natural-skincare/baseline-natural-skincare.html'),'utf8');
const recipeDir=path.join(root,'systems/baseline-natural-skincare/recipes');
const recipeFiles=fs.readdirSync(recipeDir).filter((name)=>name.endsWith('.html'));
const source=[main,...recipeFiles.map((name)=>fs.readFileSync(path.join(recipeDir,name),'utf8'))].join('\n');
const used=new Set([...source.matchAll(/data-ingredient=["'](ing-[^"']+)["']/g)].map((match)=>match[1]));
const blocks=new Map([...profiles.matchAll(/"(ing-[^"]+)"\s*:\s*withDerived\(\{([\s\S]*?)\}\)/g)].map((match)=>[match[1],match[2]]));
const anchors=['g_per_ml','g_per_cup','g_per_tbsp','g_per_tsp','g_per_unit','g_per_drop','g_per_pinch','ml_per_unit','ml_per_drop'];

test('every skincare recipe ingredient has explicit conversion data',()=>{
  const missing=[];
  const noAnchor=[];
  for(const id of [...used].sort()){
    if(!blocks.has(id)){missing.push(id);continue;}
    const block=blocks.get(id);
    if(!anchors.some((anchor)=>new RegExp(`\\b${anchor}\\s*:`).test(block))) noAnchor.push(id);
  }
  assert.deepEqual(missing,[],'recipe ingredient IDs missing from ingredient profiles');
  assert.deepEqual(noAnchor,[],'recipe ingredient profiles missing a conversion anchor');
});

test('Cucumber Seed Oil is not treated as water',()=>{
  const block=blocks.get('ing-cucumber')||'';
  assert.match(block,/label:\s*"Cucumber seed oil"/);
  assert.match(block,/g_per_ml:\s*0\.922\b/);
  assert.doesNotMatch(block,/g_per_ml:\s*1(?:\.0)?\b/);
  assert.match(main,/Cucumber Seed Oil/);
});

test('previously missing safflower and Dead Sea salt conversions stay covered',()=>{
  assert.match(blocks.get('ing-safflower')||'',/g_per_ml:\s*0\.92\b/);
  assert.match(blocks.get('ing-dead-sea-salt')||'',/g_per_tsp:\s*6\.0\b/);
});

test('ingredient profile fix is cache-busted on skincare',()=>{
  assert.match(main,/baseline-ingredient-profiles\.js\?v=SKINCARE_INGREDIENT_CONVERSIONS_20260828_1/);
});
