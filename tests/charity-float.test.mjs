import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import test from 'node:test';

const require = createRequire(import.meta.url);
const float = require('../systems/charity-shop/js/charity-float.js');
const smallKeys = ['p50','p20','p10','p5','p2','p1'];

function assertExactCompliant(plan){
  assert.equal(plan.exact,true);
  assert.equal(plan.value,10000);
  assert.equal(plan.shortage,0);
  assert.ok(plan.counts.gbp5 <= 6,'£5-note hard maximum');
  assert.ok(plan.counts.gbp1 <= 55,'£1-coin hard maximum');
  assert.equal(plan.hardLimitsMet,true);
}

test('normal availability makes exactly £100 and keeps each small denomination in its normal band',()=>{
  const plan = float.makeFloatAllocation({
    gbp50:5,gbp20:10,gbp10:10,gbp5:40,gbp2:50,gbp1:100,
    p50:100,p20:100,p10:100,p5:100,p2:100,p1:100
  });
  assertExactCompliant(plan);
  assert.equal(plan.exceptionalVariance,false);
  smallKeys.forEach(key=>assert.ok(plan.counts[key] >= 15 && plan.counts[key] <= 20,key));
});

test('a small-denomination shortage is retained and can be covered without exceptional variance',()=>{
  const plan = float.makeFloatAllocation({
    gbp5:20,gbp2:20,gbp1:100,p50:100,p20:100,p10:100,p5:100,p2:100,p1:0
  });
  assertExactCompliant(plan);
  assert.equal(plan.counts.p1,0);
  assert.equal(plan.exceptionalVariance,false);
  smallKeys.filter(key=>key !== 'p1').forEach(key=>assert.ok(plan.counts[key] <= 20,key));
});

test('a quantity above the normal internal limit is used only to cover another small-denomination shortage',()=>{
  const plan = float.makeFloatAllocation({gbp5:6,gbp1:55,p50:30});
  assertExactCompliant(plan);
  assert.equal(plan.exceptionalVariance,true);
  assert.equal(plan.counts.p50,30);
  assert.deepEqual(plan.shortSmallDenominations.sort(),['p1','p10','p2','p20','p5'].sort());
});

test('abundant £5 notes never exceed the hard maximum',()=>{
  const plan = float.makeFloatAllocation({
    gbp5:100,gbp1:100,p50:100,p20:100,p10:100,p5:100,p2:100,p1:100
  });
  assertExactCompliant(plan);
  assert.equal(plan.counts.gbp5,6);
});

test('abundant £1 coins never exceed the hard maximum',()=>{
  const plan = float.makeFloatAllocation({
    gbp5:100,gbp1:500,p50:100,p20:100,p10:100,p5:100,p2:100,p1:100
  });
  assertExactCompliant(plan);
  assert.equal(plan.counts.gbp1,55);
});

test('the complete float is made only from denominations shown in the float summary',()=>{
  const plan = float.makeFloatAllocation({
    gbp50:10,gbp20:10,gbp10:10,gbp5:6,gbp2:100,gbp1:55,
    p50:30,p20:30,p10:30,p5:30,p2:30,p1:30
  });
  assertExactCompliant(plan);
  ['gbp50','gbp20','gbp10','gbp2'].forEach(key=>assert.equal(plan.counts[key],0,key));
  assert.equal(float.valueOfCounts(Object.fromEntries(float.FLOAT_DISPLAY_KEYS.map(key=>[key,plan.counts[key]]))),10000);
});

test('an impossible float reports the strict-limit problem instead of breaking either cap',()=>{
  const plan = float.makeFloatAllocation({gbp5:7,gbp1:60,p50:10});
  assert.equal(plan.exact,false);
  assert.equal(plan.problem,'rule_shortage');
  assert.equal(plan.value,9000);
  assert.equal(plan.shortage,1000);
  assert.equal(plan.counts.gbp5,6);
  assert.equal(plan.counts.gbp1,55);
});

test('an impossible float never uses exceptional quantities merely to reduce the shortage',()=>{
  const plan = float.makeFloatAllocation({gbp5:6,gbp1:55,p50:25});
  assert.equal(plan.exact,false);
  assert.equal(plan.exceptionalVariance,false);
  assert.equal(plan.counts.p50,20);
  assert.equal(plan.value,9500);
  assert.equal(plan.shortage,500);
});

test('the user interface does not disclose the internal small-coin maximum',async()=>{
  const source = await readFile(new URL('../systems/charity-shop/js/charity-shop.js',import.meta.url),'utf8');
  assert.doesNotMatch(source,/15\s*[–-]\s*20/);
  assert.doesNotMatch(source,/maximum\s+20/i);
});
