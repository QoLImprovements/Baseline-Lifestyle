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
  assert.match(page,/baseline-protected-access\.css\?v=PROTECTED_ACCESS_CSS_20261021_1/);
  assert.match(page,/CHARITY_DROPDOWN_ACCESS_20260801_2/);
  assert.match(page,/CHARITY_FLOAT_COPY_20260801_2/);
});

test('protected access requires a host-supplied PIN and keeps no repository fallback',async()=>{
  const endpoint = await read('sitewide/api/protected_access.php');
  assert.match(endpoint,/bl_env\('BL_CHARITY_SHOP_PIN'\)/);
  assert.match(endpoint,/protected_access_not_configured/);
  assert.doesNotMatch(endpoint,/BL_CHARITY_SHOP_PIN',\s*'\d+'/);
});


test('retired Charity coherence runtime stays absent',async()=>{
  const page = await read('systems/charity-shop/charity-shop.php');
  const runtime = await read('systems/charity-shop/js/charity-shop.js');

  await assert.rejects(
    read('systems/charity-shop/js/charity-shop-coherence.js'),
    error => error && error.code === 'ENOENT'
  );

  assert.doesNotMatch(page,/charity-shop-coherence\.js/);
  assert.match(runtime,/const legacyRoutes = Object\.freeze\(/);
  assert.match(runtime,/'duvet-sizes':\['sizes','duvet'\]/);
  assert.match(runtime,/const legacyHomeware = mainValue === 'homeware'/);
  assert.match(runtime,/const legacySubtab = legacyHomeware \|\| subValue === 'sorting'/);
  assert.doesNotMatch(runtime,/charity-shop-coherence\.css/);
});

test('Charity Shop presentation layers remain consolidated under one pre-colour authority',async()=>{
  const [page,cashing,finalCoherence] = await Promise.all([
    read('systems/charity-shop/charity-shop.php'),
    read('systems/charity-shop/css/charity-shop-cashing-and-artwork.css'),
    read('systems/charity-shop/css/charity-shop-final-coherence.css')
  ]);

  for(const retired of [
    'systems/charity-shop/css/charity-shop-coherence.css',
    'systems/charity-shop/css/charity-shop-complete-theme.css'
  ]){
    await assert.rejects(
      read(retired),
      error => error && error.code === 'ENOENT',
      retired
    );
  }

  assert.doesNotMatch(page,/charity-shop-coherence\.css|charity-shop-complete-theme\.css/);
  assert.equal((page.match(/charity-shop-cashing-and-artwork\.css/g)||[]).length,1);
  assert.match(page,/charity-shop-cashing-and-artwork\.css\?v=CHARITY_CSS_SHADOW_CLEANUP_20261021_1/);

  const mergedStart=cashing.indexOf('Charity Shop single-gradient authority');
  const laterStart=cashing.indexOf('Former cashing-and-artwork layer: later authority begins here.');
  assert.ok(mergedStart>=0 && laterStart>mergedStart,'contributing former complete-theme rules must remain before later cashing/artwork rules');

  const retainedLegacyLayer=cashing.slice(mergedStart,laterStart);
  assert.doesNotMatch(retainedLegacyLayer,/body\[data-app="charity-shop"\] \.charity-scroll,[\s\S]*?background-size:100% 100%!important;/);
  assert.doesNotMatch(retainedLegacyLayer,/\.charity-grid,[\s\S]*?\.charity-card-grid\{[\s\S]*?gap:18px!important;/);
  assert.doesNotMatch(retainedLegacyLayer,/\.charity-step-number--teal\{[\s\S]*?margin:0 0 2px!important;/);
  assert.doesNotMatch(retainedLegacyLayer,/\.charity-step-artwork\{[\s\S]*?box-shadow:0 8px 18px rgba\(80,12,19,\.10\)!important;/);

  const cashingLink=page.indexOf('charity-shop-cashing-and-artwork.css');
  const finalLink=page.indexOf('charity-shop-final-coherence.css');
  assert.ok(cashingLink>=0 && finalLink>cashingLink,'final colour authority must remain later in the cascade');

  assert.doesNotMatch(page,/charityCashToBankWhiteAuthority|CHARITY-CASH-TO-BANK-INLINE-AUTHORITY/);
  assert.doesNotMatch(cashing,/CHARITY-CASH-TO-BANK-WHITE-20260803/);
  assert.match(finalCoherence,/\.charity-total-line--final > span,[\s\S]*\.charity-total-line--final > output[\s\S]*color:#fff!important;[\s\S]*-webkit-text-fill-color:#fff!important;/);
});

