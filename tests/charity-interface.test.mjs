import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read = relativePath => readFile(path.join(root,relativePath),'utf8');

test('Cashing Up shell and approved Float Summary labels are present before JavaScript',async()=>{
  const [page,source] = await Promise.all([
    read('systems/charity-shop/charity-shop.php'),
    read('systems/charity-shop/js/charity-shop.js')
  ]);
  assert.match(page,/id="operations-cashing"[\s\S]*class="charity-cashup"/);
  assert.match(page,/<td>6 \(Max\)<\/td>/);
  assert.match(page,/<td>55 \(Max\)<\/td>/);
  assert.equal((page.match(/<td>15><\/td>/g) || []).length,6);
  assert.doesNotMatch(page,/Maximum 6|Maximum 55|Aim for 15/);
  assert.doesNotMatch(source,/panel\.innerHTML\s*=|function cashRows\(|function floatRows\(|function bankBookRows\(/);
  assert.match(source,/if\(!panel \|\| !panel\.querySelector\('\.charity-cashup'\)\) return;/);
});

test('Charity Shop dropdown has one controller instead of two click toggles',async()=>{
  const [protectedAccess,shared] = await Promise.all([
    read('sitewide/js/baseline-protected-access.js'),
    read('sitewide/js/baseline-shared.js')
  ]);
  assert.match(protectedAccess,/dropdown\.dataset\.blPagesBound = '1'/);
  assert.match(protectedAccess,/dropdown\.dataset\.blPagesBound === '1'/);
  assert.match(shared,/dd\.dataset\.blPagesBound === '1'/);
  assert.match(shared,/dd\.dataset\.blPagesBound = '1'/);
});

test('Charity Shop dropdown supports keyboard navigation and cannot be clipped',async()=>{
  const [controller,styles,page] = await Promise.all([
    read('sitewide/js/baseline-protected-access.js'),
    read('systems/charity-shop/css/charity-shop-final-coherence.css'),
    read('systems/charity-shop/charity-shop.php')
  ]);
  ['ArrowDown','ArrowUp','Home','End','Escape'].forEach(key => assert.ok(controller.includes(key),key));
  assert.match(controller,/button\.setAttribute\('aria-controls',menu\.id\)/);
  assert.match(styles,/\.bl-homebar-inner\{[\s\S]*?overflow:visible!important;/);
  assert.match(styles,/\.bl-pages-menu:not\(\[hidden\]\)\{[\s\S]*?pointer-events:auto!important;[\s\S]*?overflow-y:auto!important;/);
  assert.match(styles,/\.bl-pages-menu \.bl-pages-link\{[\s\S]*?min-height:44px!important;/);
  assert.match(page,/BASELINE_PROTECTED_ACCESS_20260801_3/);
  assert.match(page,/CHARITY_DROPDOWN_ACCESS_20260801_2/);
  assert.match(page,/CHARITY_FLOAT_COPY_20260801_2/);
});

test('protected access requires a host-supplied PIN and keeps no repository fallback',async()=>{
  const endpoint = await read('sitewide/api/protected_access.php');
  assert.match(endpoint,/bl_env\('BL_CHARITY_SHOP_PIN'\)/);
  assert.match(endpoint,/protected_access_not_configured/);
  assert.doesNotMatch(endpoint,/BL_CHARITY_SHOP_PIN',\s*'\d+'/);
});


test('Charity Shop retired coherence CSS stays absent and loaded theme layers avoid exact duplicate rules',async()=>{
  const [page,complete,cashing] = await Promise.all([
    read('systems/charity-shop/charity-shop.php'),
    read('systems/charity-shop/css/charity-shop-complete-theme.css'),
    read('systems/charity-shop/css/charity-shop-cashing-and-artwork.css')
  ]);

  assert.doesNotMatch(page,/charity-shop-coherence\.css/);
  await assert.rejects(
    read('systems/charity-shop/css/charity-shop-coherence.css'),
    error => error && error.code === 'ENOENT'
  );

  const simpleRules = source => {
    const rules=[];
    const re=/([^{}]+)\{([^{}]*)\}/g;
    let match;
    while((match=re.exec(source))){
      const selector=match[1].replace(/\/\*[\s\S]*?\*\//g,'').trim().replace(/\s+/g,' ');
      if(!selector || selector.startsWith('@') || /^(?:from|to|\d+%)$/.test(selector)) continue;
      const declarations=match[2].trim().replace(/\s+/g,' ');
      rules.push(selector+'\n'+declarations);
    }
    return rules;
  };

  const later=new Set(simpleRules(cashing));
  const duplicates=simpleRules(complete).filter(rule=>later.has(rule));
  assert.deepEqual(duplicates,[]);
});
