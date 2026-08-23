from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / 'systems/baseline-natural-skincare/baseline-natural-skincare.html'
PACKAGE_PATH = ROOT / 'package.json'
WORKFLOW_PATH = ROOT / '.github/workflows/website-checks.yml'
SERVER_PATH = ROOT / 'tests/support/production-static-server.cjs'
STRUCTURE_TEST_PATH = ROOT / 'tests/skincare-testing-recipes.test.mjs'
BROWSER_TEST_PATH = ROOT / 'tests/skincare-testing-recipes-browser.spec.js'


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly one marker, found {count}')
    return text.replace(old, new, 1)


html = HTML_PATH.read_text(encoding='utf-8')

side_marker = '''<li><a class="recipe-open" data-recipe-id="r4" href="/baseline-natural-skincare/recipes/hydrating-conductive-mist">Nurture &amp; Shine Mist</a></li>
</ul>
</aside>'''
side_replacement = '''<li><a class="recipe-open" data-recipe-id="r4" href="/baseline-natural-skincare/recipes/hydrating-conductive-mist">Nurture &amp; Shine Mist</a></li>
<li class="ing-subhead"><strong>Testing</strong></li>
<li><a class="recipe-open" data-recipe-id="r8" href="/baseline-natural-skincare/recipes/testing-shaving-gel">Shaving Gel Recipe</a></li>
<li><a class="recipe-open" data-recipe-id="r9" href="/baseline-natural-skincare/recipes/testing-natural-tooth-brightening-powder">Natural Tooth-Brightening Powder Recipe</a></li>
<li><a class="recipe-open" data-recipe-id="r10" href="/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel">Microcurrent Conductive Gel Recipe – 40 g</a></li>
</ul>
</aside>'''
html = replace_once(html, side_marker, side_replacement, 'side recipe navigation')

landing_marker = '''<li><a class="recipe-open" data-recipe-id="r3" href="/baseline-natural-skincare/recipes/protective-touch-balm">Protective Touch Balm — Protective balm for dry skin.</a></li>
</ul>
</div>
<div class="recipes">'''
landing_replacement = '''<li><a class="recipe-open" data-recipe-id="r3" href="/baseline-natural-skincare/recipes/protective-touch-balm">Protective Touch Balm — Protective balm for dry skin.</a></li>
<li class="ing-subhead"><strong>Testing</strong></li>
<li><a class="recipe-open" data-recipe-id="r8" href="/baseline-natural-skincare/recipes/testing-shaving-gel">Shaving Gel Recipe — slippery elm, glycerin, guar gum and jojoba shaving gel.</a></li>
<li><a class="recipe-open" data-recipe-id="r9" href="/baseline-natural-skincare/recipes/testing-natural-tooth-brightening-powder">Natural Tooth-Brightening Powder Recipe — kaolin, sage and peppermint surface-stain powder.</a></li>
<li><a class="recipe-open" data-recipe-id="r10" href="/baseline-natural-skincare/recipes/testing-microcurrent-conductive-gel">Microcurrent Conductive Gel Recipe – 40 g — glycerin, Dead Sea salt and guar conductive gel.</a></li>
</ul>
</div>
<div class="recipes">'''
html = replace_once(html, landing_marker, landing_replacement, 'recipe overview list')

recipes_markup = r'''
<!-- Testing Recipe 8 -->
<div class="recipe card recipe-page" data-recipe-slug="testing-shaving-gel" id="r8">
<div class="recipe-actions">
<button class="back-btn" onclick="BASELINE_showAllRecipes()" type="button">Back To Recipe Overview</button>
<button class="print-btn" onclick="printCard('r8')" type="button">Print This Recipe</button>
</div>
<h3>Shaving Gel Recipe</h3>
<p class="note"><strong>Testing</strong> — formulation currently being tested before promotion into the main recipe collection.</p>
<a class="info-link" data-scroll-to-ingredients="" href="#ingredients">Recipe Ingredient Information</a>
<h4>Ingredients</h4>
<ul>
<li data-method-step="1" data-tip="Hydrates the slippery elm and guar gum.">240 ml <a class="ing-link" data-from-recipe="r8" data-ingredient="ing-water" href="#ing-water">Water</a></li>
<li data-method-step="1" data-tip="Provides strong mucilage, razor slip and cushioning.">2 tablespoons <a class="ing-link" data-from-recipe="r8" data-ingredient="ing-slipperyelm" href="#ing-slipperyelm">Slippery Elm Powder</a></li>
<li data-method-step="3" data-tip="Adds glide and helps retain moisture.">5 ml <a class="ing-link" data-from-recipe="r8" data-ingredient="ing-glycerin" href="#ing-glycerin">Vegetable Glycerin</a></li>
<li data-method-step="4" data-tip="Creates the gel structure and controls thickness."><a class="ing-link" data-from-recipe="r8" data-ingredient="ing-guar-gum" href="#ing-guar-gum">Guar Gum</a> – enough to thicken to preferred gel consistency</li>
<li data-method-step="5" data-tip="Provides lubrication and leaves a light protective emollient layer on the skin.">1.25 ml <a class="ing-link" data-from-recipe="r8" data-ingredient="ing-jojoba" href="#ing-jojoba">Jojoba Oil</a></li>
</ul>
<h4>Ingredient Roles</h4>
<ul>
<li><strong>Slippery Elm Powder</strong> – provides strong mucilage, razor slip and cushioning.</li>
<li><strong>Vegetable Glycerin</strong> – adds glide and helps retain moisture.</li>
<li><strong>Guar Gum</strong> – creates the gel structure and controls thickness.</li>
<li><strong>Jojoba Oil</strong> – provides lubrication and leaves a light protective emollient layer on the skin.</li>
<li><strong>Water</strong> – hydrates the slippery elm and guar gum.</li>
</ul>
<h4>Method</h4>
<ol>
<li><strong>Combine</strong>: Add the slippery elm powder to the water and mix thoroughly.</li>
<li><strong>Hydrate</strong>: Allow it to hydrate and develop its natural mucilage.</li>
<li><strong>Add glycerin</strong>: Mix in the vegetable glycerin.</li>
<li><strong>Thicken</strong>: Gradually add guar gum until the desired shaving-gel thickness is reached.</li>
<li><strong>Add jojoba</strong>: Mix in the jojoba oil thoroughly.</li>
</ol>
<h4>Storage &amp; Use</h4>
<ul>
<li>Store appropriately and use a suitable preservative if keeping the water-based gel for more than immediate use.</li>
</ul>
<h4>Comedogenic Considerations</h4>
<ul>
<li>Mostly water-based with a small jojoba phase. Keep use rinse-off and monitor individual skin response if congestion-prone.</li>
</ul>
<h4>Notes</h4>
<ul>
<li>This recipe is currently grouped under <strong>Testing</strong>.</li>
</ul>
</div>
<!-- Testing Recipe 9 -->
<div class="recipe card recipe-page" data-recipe-slug="testing-natural-tooth-brightening-powder" id="r9">
<div class="recipe-actions">
<button class="back-btn" onclick="BASELINE_showAllRecipes()" type="button">Back To Recipe Overview</button>
<button class="print-btn" onclick="printCard('r9')" type="button">Print This Recipe</button>
</div>
<h3>Natural Tooth-Brightening Powder Recipe</h3>
<p class="note"><strong>Testing</strong> — formulation currently being tested before promotion into the main recipe collection.</p>
<a class="info-link" data-scroll-to-ingredients="" href="#ingredients">Recipe Ingredient Information</a>
<h4>Ingredients</h4>
<ul>
<li data-method-step="2" data-tip="Provides gentle polishing to help remove surface staining and brighten the appearance of the teeth.">24 g <strong>Superfine Food/Pharmaceutical-Grade White Kaolin Clay</strong></li>
<li data-method-step="2" data-tip="Traditional oral-care herb that complements the cleansing powder.">4.5 g <strong>Very Finely Powdered Sage Leaf</strong></li>
<li data-method-step="2" data-tip="Provides natural freshness and a mild peppermint flavour.">1.5 g <strong>Very Finely Powdered Peppermint Leaf</strong></li>
</ul>
<h4>Ingredient Roles</h4>
<ul>
<li><strong>White Kaolin Clay</strong> – provides gentle polishing to help remove surface staining and brighten the appearance of the teeth.</li>
<li><strong>Sage Leaf Powder</strong> – traditional oral-care herb that complements the cleansing powder.</li>
<li><strong>Peppermint Leaf Powder</strong> – provides natural freshness and a mild peppermint flavour.</li>
</ul>
<h4>Method</h4>
<ol>
<li><strong>Weigh</strong>: Weigh all ingredients accurately.</li>
<li><strong>Combine</strong>: Add the kaolin clay, sage powder and peppermint powder to a completely dry bowl.</li>
<li><strong>Mix</strong>: Mix very thoroughly until the herbs are evenly distributed throughout the kaolin.</li>
<li><strong>Transfer</strong>: Transfer to a clean, completely dry airtight container.</li>
<li><strong>Keep dry</strong>: Keep the powder dry during storage.</li>
</ol>
<h4>Storage &amp; Use</h4>
<ol>
<li><strong>Wet</strong>: Wet a soft toothbrush.</li>
<li><strong>Apply</strong>: Place a small amount of the powder onto the toothbrush.</li>
<li><strong>Brush gently</strong>: Brush the teeth gently for approximately 30–60 seconds.</li>
<li><strong>Rinse</strong>: Rinse the mouth thoroughly with water.</li>
<li><strong>Frequency</strong>: Use approximately 1–2 times per week for surface-stain removal.</li>
</ol>
<h4>Comedogenic Considerations</h4>
<ul>
<li>Not applicable to the intended oral-care use. This is not a leave-on facial formula.</li>
</ul>
<h4>Notes</h4>
<ul>
<li>Use only superfine kaolin suitable for oral/food use and very finely powdered herbs.</li>
<li>Contains no baking soda, oil, charcoal, peroxide or acids.</li>
<li>This recipe is currently grouped under <strong>Testing</strong>.</li>
</ul>
</div>
<!-- Testing Recipe 10 -->
<div class="recipe card recipe-page" data-recipe-slug="testing-microcurrent-conductive-gel" id="r10">
<div class="recipe-actions">
<button class="back-btn" onclick="BASELINE_showAllRecipes()" type="button">Back To Recipe Overview</button>
<button class="print-btn" onclick="printCard('r10')" type="button">Print This Recipe</button>
</div>
<h3>Microcurrent Conductive Gel Recipe – 40 g</h3>
<p class="note"><strong>Testing</strong> — formulation currently being tested before promotion into the main recipe collection.</p>
<a class="info-link" data-scroll-to-ingredients="" href="#ingredients">Recipe Ingredient Information</a>
<h4>Ingredients</h4>
<ul>
<li data-method-step="2" data-tip="Provides the main water-based conductive medium.">35.36 g <a class="ing-link" data-from-recipe="r10" data-ingredient="ing-water" href="#ing-water">Distilled Water</a></li>
<li data-method-step="1" data-tip="Helps retain moisture, improves glide and slows the gel from drying during microcurrent use.">4.00 g <a class="ing-link" data-from-recipe="r10" data-ingredient="ing-glycerin" href="#ing-glycerin">Vegetable Glycerin</a></li>
<li data-method-step="2" data-tip="Provides dissolved minerals and electrolytes to support conductivity.">0.04 g <a class="ing-link" data-from-recipe="r10" data-ingredient="ing-dead-sea-salt" href="#ing-dead-sea-salt">Dead Sea Salt</a></li>
<li data-method-step="1" data-tip="Creates a thick, scoopable gel consistency and helps the product remain in place on the skin.">0.60 g <a class="ing-link" data-from-recipe="r10" data-ingredient="ing-guar-gum" href="#ing-guar-gum">Guar Gum</a></li>
</ul>
<p><strong>Total – 40.00 g</strong></p>
<h4>Ingredient Roles</h4>
<ul>
<li><strong>Distilled Water</strong> – provides the main water-based conductive medium.</li>
<li><strong>Vegetable Glycerin</strong> – helps retain moisture, improves glide and slows the gel from drying during microcurrent use.</li>
<li><strong>Dead Sea Salt</strong> – provides dissolved minerals and electrolytes to support conductivity.</li>
<li><strong>Guar Gum</strong> – creates a thick, scoopable gel consistency and helps the product remain in place on the skin.</li>
</ul>
<h4>Method</h4>
<ol>
<li><strong>Disperse</strong>: Add the guar gum to the vegetable glycerin and mix thoroughly until the guar is evenly dispersed.</li>
<li><strong>Dissolve</strong>: Dissolve the Dead Sea salt completely in the distilled water.</li>
<li><strong>Combine</strong>: Slowly add the salt water to the glycerin and guar gum mixture while stirring continuously.</li>
<li><strong>Mix</strong>: Mix thoroughly until smooth and evenly combined.</li>
<li><strong>Hydrate</strong>: Allow the guar gum to hydrate fully and develop its final gel consistency.</li>
<li><strong>Stir</strong>: Stir again once fully hydrated.</li>
<li><strong>Portion</strong>: Transfer the amount needed for use into a clean, dry ramekin or other easily washable container.</li>
</ol>
<h4>Storage &amp; Use</h4>
<ol>
<li><strong>Apply</strong>: Apply a generous layer of gel to the area being treated.</li>
<li><strong>Treat</strong>: Use the microcurrent device over the gel while it remains wet and slippery.</li>
<li><strong>Reapply</strong>: Add more gel if the device begins to drag or the gel starts drying.</li>
<li><strong>Clean</strong>: Wash and fully dry the ramekin after use before using it for another batch.</li>
</ol>
<h4>Comedogenic Considerations</h4>
<ul>
<li>The formula contains no oils. Individual irritation or sensitivity can still occur.</li>
</ul>
<h4>Notes</h4>
<ul>
<li>The formula totals exactly <strong>40.00 g</strong>.</li>
<li>This is a water-based testing formula. Use an appropriate preservation system if it is stored rather than prepared for immediate use.</li>
<li>This recipe is currently grouped under <strong>Testing</strong>.</li>
</ul>
</div>
'''.strip('\n')

insert_marker = '''<li><strong>Reference point:</strong> 100 ml batch = 80 ml rose water or water + 20 ml vegetable glycerin.</li>
</ul>
</div>
</div>'''
insert_replacement = '''<li><strong>Reference point:</strong> 100 ml batch = 80 ml rose water or water + 20 ml vegetable glycerin.</li>
</ul>
</div>
''' + recipes_markup + '''
</div>'''
html = replace_once(html, insert_marker, insert_replacement, 'recipe-card insertion point')

for token in ('id="r8"', 'id="r9"', 'id="r10"', 'data-recipe-slug="testing-shaving-gel"', 'data-recipe-slug="testing-natural-tooth-brightening-powder"', 'data-recipe-slug="testing-microcurrent-conductive-gel"'):
    if html.count(token) != 1:
        raise SystemExit(f'embedded recipe validation failed for {token}: {html.count(token)} occurrences')

HTML_PATH.write_text(html, encoding='utf-8')

structure_test = r'''import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('systems/baseline-natural-skincare/baseline-natural-skincare.html', 'utf8');
const recipes = [
  ['r8', 'testing-shaving-gel', 'Shaving Gel Recipe'],
  ['r9', 'testing-natural-tooth-brightening-powder', 'Natural Tooth-Brightening Powder Recipe'],
  ['r10', 'testing-microcurrent-conductive-gel', 'Microcurrent Conductive Gel Recipe – 40 g']
];

test('Skincare Testing recipes are embedded in the canonical recipe document', () => {
  for (const [id, slug, title] of recipes) {
    assert.match(html, new RegExp(`<div class="recipe card recipe-page" data-recipe-slug="${slug}" id="${id}">`));
    assert.match(html, new RegExp(`data-recipe-id="${id}" href="/baseline-natural-skincare/recipes/${slug}"`));
    assert.match(html, new RegExp(`<h3>${title.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}</h3>`));
  }
  assert.doesNotMatch(html, /\/systems\/baseline-natural-skincare\/recipes\/testing-[^"']+\.html/);
  assert.doesNotMatch(html, /#tab=recipes\/testing-/);
});

test('Every Skincare Testing recipe keeps the standard recipe sections', () => {
  for (let index = 0; index < recipes.length; index += 1) {
    const [id] = recipes[index];
    const start = html.indexOf(`id="${id}"`);
    assert.notEqual(start, -1);
    const nextId = recipes[index + 1]?.[0];
    const end = nextId ? html.indexOf(`id="${nextId}"`, start) : html.indexOf('</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n<!-- INGREDIENT LIBRARY -->', start);
    const block = html.slice(start, end === -1 ? undefined : end);
    for (const heading of ['Method', 'Storage &amp; Use', 'Comedogenic Considerations', 'Notes']) {
      assert.match(block, new RegExp(`<h4>(?:<a[^>]*>)?${heading}`));
    }
    assert.match(block, /class="recipe-actions"/);
    assert.match(block, /class="print-btn"/);
  }
});
'''
STRUCTURE_TEST_PATH.write_text(structure_test, encoding='utf-8')

browser_test = r'''const { test, expect } = require('@playwright/test');

const recipes = [
  { id:'r8', slug:'testing-shaving-gel', title:'Shaving Gel Recipe' },
  { id:'r9', slug:'testing-natural-tooth-brightening-powder', title:'Natural Tooth-Brightening Powder Recipe' },
  { id:'r10', slug:'testing-microcurrent-conductive-gel', title:'Microcurrent Conductive Gel Recipe – 40 g' }
];

for (const recipe of recipes) {
  test(`Skincare Testing recipe opens in canonical recipe view: ${recipe.slug}`, async ({ page }) => {
    await page.goto(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    await expect(page.locator('#recipes')).toHaveClass(/active/);
    await expect(page.locator(`#${recipe.id}`)).toBeVisible();
    await expect(page.locator(`#${recipe.id} h3`)).toHaveText(recipe.title);
    await expect(page.locator(`#${recipe.id} .recipe-controls`)).toBeVisible();
    const url = new URL(page.url());
    expect(url.pathname).toBe(`/baseline-natural-skincare/recipes/${recipe.slug}`);
    expect(url.hash).not.toContain('recipes/testing-');
  });
}
'''
BROWSER_TEST_PATH.write_text(browser_test, encoding='utf-8')

package = PACKAGE_PATH.read_text(encoding='utf-8')
old_structure = 'tests/public-routine-summary-mirror.test.mjs"'
new_structure = 'tests/public-routine-summary-mirror.test.mjs tests/skincare-testing-recipes.test.mjs"'
package = replace_once(package, old_structure, new_structure, 'package test:structure command')
PACKAGE_PATH.write_text(package, encoding='utf-8')

workflow = WORKFLOW_PATH.read_text(encoding='utf-8')
old_browser = 'tests/stability-release-smoke.spec.js tests/routine-system-browser.spec.js tests/fitness-saved-plan-reload-browser.spec.js --reporter=line,json'
new_browser = 'tests/stability-release-smoke.spec.js tests/routine-system-browser.spec.js tests/fitness-saved-plan-reload-browser.spec.js tests/skincare-testing-recipes-browser.spec.js --reporter=line,json'
workflow = replace_once(workflow, old_browser, new_browser, 'website browser-test command')
WORKFLOW_PATH.write_text(workflow, encoding='utf-8')

server = SERVER_PATH.read_text(encoding='utf-8')
old_server = '''  match = pathname.match(/^\\/baseline-natural-skincare\\/recipes\\/([^/]+)\\/?$/);\n  if (match) return `/systems/baseline-natural-skincare/recipes/${match[1]}.html`;'''
new_server = '''  match = pathname.match(/^\\/baseline-natural-skincare\\/recipes\\/([^/]+)\\/?$/);\n  if (match) return '/systems/baseline-natural-skincare/baseline-natural-skincare.html';'''
server = replace_once(server, old_server, new_server, 'Skincare recipe static-route mirror')
SERVER_PATH.write_text(server, encoding='utf-8')

print('Embedded Testing recipes and regression checks applied successfully.')
