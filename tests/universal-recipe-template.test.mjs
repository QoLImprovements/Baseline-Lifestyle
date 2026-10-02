import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('sitewide/js/baseline-shared.js', 'utf8');
const css = fs.readFileSync('sitewide/css/baseline-recipes.css', 'utf8');
const skincareCss = fs.readFileSync('systems/baseline-natural-skincare/css/baseline-natural-skincare.css', 'utf8');
const recipeUx = fs.readFileSync('systems/baseline-natural-skincare/js/skincare-recipe-ux-20260906.js', 'utf8');
const skincareHtml = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const foodHtml = fs.readFileSync('systems/baseline-food-approach/baseline-food-approach.html', 'utf8');

function skincareRecipeBlocks(){
  const matches=[...skincareHtml.matchAll(/<div class="recipe card recipe-page recipe-universal-template"[^>]*\bid="(r\d+)"[^>]*>/g)];
  return matches.map((match,index)=>{
    const end=index+1<matches.length ? matches[index+1].index : skincareHtml.indexOf('<!-- INGREDIENT LIBRARY -->',match.index);
    return { id:match[1], html:skincareHtml.slice(match.index,end) };
  });
}

test('Food and Skincare declare exact recipe routes before first paint', () => {
  for (const html of [skincareHtml, foodHtml]) {
    assert.match(html, /id="baseline-recipe-route-first-paint"/);
    assert.match(html, /data-initial-section','recipes'/);
    assert.match(html, /data-initial-recipe-route','1'/);
    assert.match(html, /data-initial-section="recipes"[^}]*#system\.section\{display:none!important\}/s);
    assert.match(html, /data-initial-section="recipes"[^}]*#recipes\.section\{display:block!important\}/s);
  }
  assert.match(css, /html\[data-initial-recipe-route="1"\] #recipes \.recipe-page\{display:none!important;visibility:hidden!important\}/);
  assert.match(css, /html\[data-initial-recipe-slug="testing-lip-balm"\] #recipes #r12\{display:block!important;visibility:visible!important/);
  assert.match(shared, /removeAttribute\('data-initial-section'\)/);
  assert.match(shared, /removeAttribute\('data-initial-recipe-route'\)/);
});

test('shared method-tag engine maps every ingredient source to one first-use method step', () => {
  assert.match(shared, /function injectMethodAmounts\(recipeEl\)/);
  assert.match(shared, /dataset\.methodTagKey=key/);
  assert.match(shared, /dataset\.methodIngredientKey=entry\.key/);
  assert.match(shared, /function bestNaturalMatch\(entry\)/);
  assert.match(shared, /function bestExplicitMatch\(entry\)/);
  assert.match(shared, /const preferExplicit=!!explicit && \(entry\.genericTerm \|\| \(identityCounts\.get\(entry\.identity\) \|\| 0\)>1\)/);
  assert.match(shared, /data-method-amounts='first-use'|dataset\.methodAmounts='first-use'/);
  assert.doesNotMatch(shared, /const emittedMethodAmounts = new Set\(\)/);
});

test('Skincare universal recipe chrome is authored once in canonical HTML', () => {
  const blocks=skincareRecipeBlocks();
  assert.equal(blocks.length,10);
  for (const {id,html} of blocks) {
    assert.equal((html.match(/data-static-recipe-controls="1"/g)||[]).length,1,id+' static controls');
    assert.equal((html.match(/class="recipe-meta-row/g)||[]).length,1,id+' metadata row');
    assert.equal((html.match(/class="recipe-adjustments-row/g)||[]).length,1,id+' adjustments row');
    assert.equal((html.match(/class="recipe-subtabs/g)||[]).length,1,id+' tab set');
    assert.equal((html.match(/class="recipe-details-intro/g)||[]).length,1,id+' details block');
    assert.match(html,/data-recipe-view="standard"/);
    for (const [view,label] of [['standard','Recipe'],['details','Details'],['guidance','Guidance'],['show-all','Show All']]) {
      assert.match(html,new RegExp('data-recipe-subtab="'+view+'"[^>]*>'+label+'<\\/button>'),id+' '+view+' tab');
    }
    assert.doesNotMatch(html,/<[^>]+data-recipe-view-group="standard"[^>]*class="[^"]*recipe-view-hidden|<[^>]+class="[^"]*recipe-view-hidden[^"]*"[^>]*data-recipe-view-group="standard"/);
  }
  assert.doesNotMatch(recipeUx,/createElement|MutationObserver|setTimeout|requestAnimationFrame/);
});

test('shared recipe engine retains one fallback renderer for recipes without authored chrome', () => {
  assert.match(shared,/const preauthored = !!controls/);
  assert.match(shared,/q\('input\.multiplier-input', controls\)/);
  assert.match(shared,/data-static-recipe-controls/);
  assert.match(shared,/data-static-recipe-shell/);
  assert.match(shared,/if\(!preauthored\)/);
  assert.match(shared,/\['standard', 'Standard View'\]/);
  assert.match(shared,/\['details', 'Details'\]/);
  assert.match(shared,/\['guidance', 'Guidance'\]/);
  assert.match(shared,/\['show-all', 'Show All'\]/);
  assert.match(shared,/setView\('standard'\)/);
  assert.doesNotMatch(shared, /<h[1-6][^>]*>Standard View<\/h[1-6]>/i);
});

test('Skincare Details is authored hidden while Food keeps its placeholder behaviour', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.match(html,/class="recipe-details-intro recipe-view-hidden" data-recipe-view-group="details" hidden/,id+' Details starts hidden');
    assert.equal((html.match(/class="recipe-detail-block"/g)||[]).length,6,id+' Details blocks');
  }
  assert.match(skincareCss,/recipe-details-intro\[hidden\]\{display:none!important\}/);
  assert.match(skincareCss,/recipe-details-intro\[data-recipe-view-group="details"\]:not\(\.recipe-view-hidden\):not\(\[hidden\]\)\{display:grid!important\}/);
  assert.match(css, /\[data-recipe-view-group="details"\]\{\s*display:none !important;/s);
});

test('every authored Skincare recipe has Yield and Batch metadata before JavaScript', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.match(html,/recipe-yield-meta-value/,'missing Yield metadata in '+id);
    assert.match(html,/recipe-batch-meta-value/,'missing Batch metadata in '+id);
  }
  assert.match(shared, /yieldValue = '1 recipe batch'/);
  assert.match(shared, /addMeta\('Yield', yieldValue\)/);
  assert.match(shared, /addMeta\('Batch', '1×'\)/);
});

test('Adjustments owns scaling utilities and static Skincare shells hydrate rather than duplicate', () => {
  for (const {id,html} of skincareRecipeBlocks()) {
    assert.match(html,/class="recipe-adjustments-toggle print-hide" data-static-recipe-shell="1"[^>]*>Adjustments<\/button>/,id);
    assert.match(html,/class="recipe-edit-options recipe-adjustments-panel print-hide" data-static-recipe-shell="1" hidden/,id);
    assert.equal((html.match(/class="scale-block"/g)||[]).length,1,id+' scale block');
  }
  assert.match(shared,/let strip = q\('\.recipe-option-strip\[data-static-recipe-shell="1"\]'/);
  assert.match(shared,/let editBody = q\('\.recipe-edit-options\[data-static-recipe-shell="1"\]'/);
  assert.match(shared,/let adjustmentsBtn = q\('\.recipe-adjustments-toggle\[data-static-recipe-shell="1"\]'/);
  assert.doesNotMatch(shared, /textContent = 'Edit Options'/);
});

test('Skincare slider recipes already contain the final layout and save controls', () => {
  assert.equal((skincareHtml.match(/\brecipe-slider-template\b/g)||[]).length,8);
  assert.equal((skincareHtml.match(/class="slider-save-row"/g)||[]).length,8);
  assert.equal((skincareHtml.match(/class="glide-explain-title">Overall Feel<\/div>/g)||[]).length,8);
  assert.equal((skincareHtml.match(/class="glide-breakdown" hidden aria-hidden="true"/g)||[]).length,7);
  assert.doesNotMatch(skincareHtml,/class="glide-control-stack"/);
  assert.match(shared, /function normalizeRecipeSliderTemplate\(recipeEl\)/);
  assert.match(shared, /controller\.dataset\.sliderCount = String\(controls\.length > 1 \? 2 : 1\)/);
  assert.doesNotMatch(shared, /instruction\.textContent = 'Adjust slider to preference\.'/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SLIDER-CONTRACT-20260920/);
});

test('Adjustments and universal spacing remain owned by shared theme CSS', () => {
  assert.match(css, /recipe-adjustments-row[\s\S]*background:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-color:transparent !important;/);
  assert.match(css, /recipe-adjustments-toggle[\s\S]*background-image:none !important;/);
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-SPACING-20260824/);
  assert.match(css, /recipe-title-row/);
  assert.match(css, /recipe-meta-row/);
  assert.match(css, /recipe-adjustments-row/);
  assert.match(css, /recipe-subtabs/);
  assert.match(css, /recipe-option-strip/);
});

test('universal recipe styling inherits system variables instead of imposing Food or Skincare colours', () => {
  assert.match(css, /BASELINE-UNIVERSAL-RECIPE-TEMPLATE-20260824/);
  assert.match(css, /var\(--showall-bg/);
  assert.match(css, /var\(--accent-2/);
  assert.match(css, /var\(--border/);
});

test('Skincare semantic emphasis is present before JavaScript mutates anything', () => {
  assert.match(css, /\[data-recipe-view-group\] strong\{\s*font-weight:inherit !important;/s);
  assert.match(skincareCss,/STATIC-FIRST-SKINCARE-RECIPE-SEMANTIC-EMPHASIS-20261002/);
  assert.match(skincareCss,/recipe-universal-template ol > li > strong:first-child/);
  assert.match(skincareCss,/recipe-universal-template \.ing-subhead > strong/);
  assert.match(skincareCss,/data-recipe-view-group="guidance"/);
});
