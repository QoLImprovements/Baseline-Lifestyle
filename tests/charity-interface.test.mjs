import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read = relativePath => readFile(path.join(root,relativePath),'utf8');

test('Float Summary displays the exact approved labels',async()=>{
  const source = await read('systems/charity-shop/js/charity-shop.js');
  assert.match(source,/key === 'gbp5' \? '6 \(Max\)'/);
  assert.match(source,/key === 'gbp1' \? '55 \(Max\)'/);
  assert.match(source,/: '15>'\);/);
  assert.doesNotMatch(source,/Maximum 6|Maximum 55|Aim for 15/);
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
  assert.match(page,/BASELINE_PROTECTED_ACCESS_20260801_2/);
  assert.match(page,/CHARITY_DROPDOWN_ACCESS_20260801_2/);
  assert.match(page,/CHARITY_FLOAT_COPY_20260801_2/);
});
