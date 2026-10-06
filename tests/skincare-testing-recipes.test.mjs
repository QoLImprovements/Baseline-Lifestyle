import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync,readFileSync } from 'node:fs';

const url=path=>new URL(`../${path}`,import.meta.url);
const read=path=>readFileSync(url(path),'utf8');

const html=read('systems/baseline-natural-skincare/baseline-natural-skincare.html');
const shared=read('sitewide/js/baseline-shared.js');
const ux=read('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js');
const runtime=read('systems/baseline-natural-skincare/js/skincare-recipe-runtime-20261004.js');
const css=read('sitewide/css/baseline-recipes.css');
const skinCss=read('systems/baseline-natural-skincare/css/baseline-natural-skincare.css');
const htaccess=read('.htaccess');

const recipes=[
  ['r1','nurturing-glow-butter','Nurturing Glow Butter'],
  ['r2','anhydrous-oil-cleanser','Anhydrous Oil Cleanser'],
  ['r3','protective-touch-balm','Protective Touch Balm'],
  ['r6','anhydrous-massage-oil-blend','Anhydrous Massage Oil Blend'],
  ['r7','restorative-hydration-layer','Restorative Hydration Layer'],
  ['r8','calming-shave-gel','Calming Shave Gel'],
  ['r9','tooth-polishing-powder','Tooth Polishing Powder'],
  ['r10','microcurrent-glide-gel','Microcurrent Glide Gel'],
  ['r12','comfort-barrier-balm','Comfort Barrier Balm']
];

function block(id){
  const start=html.indexOf(`id="${id}"`);
  assert.ok(start>=0,`missing ${id}`);
  const next=html.indexOf('class="recipe card recipe-page recipe-universal-template"',start+1);
  return html.slice(start,next>=0?next:html.indexOf('<!-- INGREDIENT LIBRARY -->',start));
}

test('Skincare parent page is the sole authored recipe page authority',()=>{
  for(const [id,slug,title] of recipes){
    const source=block(id);
    assert.match(source,new RegExp(`data-recipe-slug="${slug}"`));
    assert.ok(source.includes(title));
    assert.match(source,/data-static-recipe-shell="1"/);
  }
  assert.equal(existsSync(url('systems/baseline-natural-skincare/recipes')),false);
  assert.equal(existsSync(url('systems/baseline-natural-skincare/js/skincare-recipe-navigation-20260906.js')),false);
  assert.doesNotMatch(html,/testing-lip-balm|Testing Recipe 12|<h4>Testing<\/h4>/);
});

test('Comfort Barrier Balm is a normal canonical recipe, not a testing or lip-only identity',()=>{
  const source=block('r12');
  assert.match(source,/data-recipe-slug="comfort-barrier-balm"/);
  assert.match(source,/<h3>Comfort Barrier Balm<\/h3>/);
  assert.match(html,/\/baseline-natural-skincare\/recipes\/comfort-barrier-balm/);
  assert.doesNotMatch(source,/testing-lip-balm|Lip Balm/);
});

test('retired Skincare recipe slugs redirect at Apache before the parent-shell rewrite',()=>{
  assert.match(htaccess,/BASELINE-SKINCARE-LEGACY-RECIPE-CANONICAL-20261006/);
  assert.match(htaccess,/testing-lip-balm\/\?\$ \/baseline-natural-skincare\/recipes\/comfort-barrier-balm/);
  assert.match(htaccess,/testing-shaving-gel\/\?\$ \/baseline-natural-skincare\/recipes\/calming-shave-gel/);
  assert.match(htaccess,/testing-natural-tooth-brightening-powder\/\?\$ \/baseline-natural-skincare\/recipes\/tooth-polishing-powder/);
  assert.match(htaccess,/testing-microcurrent-conductive-gel/);
  assert.match(htaccess,/baseline-natural-skincare\/recipes\/\(\[\^\/\]\+\)\/\?\$ systems\/baseline-natural-skincare\/baseline-natural-skincare\.html/);
  assert.doesNotMatch(ux,/history\.replaceState|canonicaliseOldRecipePath|OLD_SLUGS|PROMOTIONS/);
});

test('all Skincare recipes use one universal four-view shell',()=>{
  for(const [id] of recipes){
    const source=block(id);
    assert.equal((source.match(/data-recipe-subtab=/g)||[]).length,4,`${id} four views`);
    assert.match(source,/data-recipe-view-group="details"/,`${id} details`);
    assert.match(source,/data-recipe-view-group="guidance"/,`${id} guidance`);
    assert.match(source,/class="recipe-adjustments-toggle/,`${id} adjustments`);
  }
  assert.match(shared,/function setupRecipeTools\(opts\)/);
  assert.match(shared,/recipeEl\.classList\.toggle\('recipe-options-open', open\)/);
  assert.match(css,/BASELINE-UNIVERSAL-RECIPE-PRESENTATION-20261004/);
});

test('Skincare recipe runtime owns behaviour only and keeps saved sliders server-side',()=>{
  assert.match(runtime,/SLIDER_API/);
  assert.match(runtime,/expectedRevision/);
  assert.doesNotMatch(runtime,/localStorage|sessionStorage|indexedDB|createElement\(['"]style['"]\)/);
  assert.doesNotMatch(ux,/localStorage|sessionStorage|indexedDB|setTimeout\(/);
});

test('recipe presentation inherits the Skincare theme instead of standalone page styling',()=>{
  assert.match(skinCss,/First-paint route authority/);
  assert.doesNotMatch(html,/<style id="baseline-recipe-route-first-paint-style"/);
  assert.match(css,/var\(--showall-bg/);
  assert.match(css,/var\(--accent-2/);
});
