(function(root,factory){
  'use strict';
  const api = factory();
  if(typeof module === 'object' && module.exports) module.exports = api;
  if(root) root.BASELINE_CHARITY_FLOAT = api;
})(typeof window !== 'undefined' ? window : globalThis,function(){
  'use strict';

  const FLOAT_TARGET_PENCE = 10000;
  const NORMAL_SMALL_COIN_LIMIT = 20;
  const SMALL_COIN_MINIMUM = 15;

  const DENOMINATIONS = Object.freeze([
    {key:'gbp50', label:'£50', pence:5000},
    {key:'gbp20', label:'£20', pence:2000},
    {key:'gbp10', label:'£10', pence:1000},
    {key:'gbp5', label:'£5', pence:500},
    {key:'gbp2', label:'£2', pence:200},
    {key:'gbp1', label:'£1', pence:100},
    {key:'p50', label:'50p', pence:50},
    {key:'p20', label:'20p', pence:20},
    {key:'p10', label:'10p', pence:10},
    {key:'p5', label:'5p', pence:5},
    {key:'p2', label:'2p', pence:2},
    {key:'p1', label:'1p', pence:1}
  ]);

  const DENOMINATION_BY_KEY = Object.freeze(DENOMINATIONS.reduce(function(map,item){
    map[item.key] = item;
    return map;
  },Object.create(null)));
  const SMALL_COIN_KEYS = Object.freeze(['p50','p20','p10','p5','p2','p1']);
  const SMALL_COIN_KEY_SET = new Set(SMALL_COIN_KEYS);
  const STRICT_LIMITS = Object.freeze({gbp5:6,gbp1:55});
  const FLOAT_DISPLAY_KEYS = Object.freeze(['gbp5','gbp1','p50','p20','p10','p5','p2','p1']);
  const FLOAT_FILL_PRIORITY = Object.freeze([
    'gbp5','gbp1','p20','p10','p5','p50','p2','p1'
  ]);

  function emptyCounts(){
    return DENOMINATIONS.reduce(function(counts,item){
      counts[item.key] = 0;
      return counts;
    },Object.create(null));
  }

  function normaliseAvailable(available){
    const normalised = emptyCounts();
    DENOMINATIONS.forEach(function(item){
      normalised[item.key] = Math.max(0,Math.floor(Number(available && available[item.key]) || 0));
    });
    return normalised;
  }

  function valueOfCounts(counts){
    return DENOMINATIONS.reduce(function(total,item){
      return total + ((counts[item.key] || 0) * item.pence);
    },0);
  }

  function allocationBounds(available,allowExceptionalVariance){
    const lower = emptyCounts();
    const upper = emptyCounts();
    const hasSmallCoinShortage = SMALL_COIN_KEYS.some(function(key){ return available[key] < SMALL_COIN_MINIMUM; });

    DENOMINATIONS.forEach(function(item){
      const count = available[item.key];
      if(SMALL_COIN_KEY_SET.has(item.key)){
        lower[item.key] = Math.min(count,SMALL_COIN_MINIMUM);
        upper[item.key] = allowExceptionalVariance && hasSmallCoinShortage
          ? count
          : Math.min(count,NORMAL_SMALL_COIN_LIMIT);
      }else if(Object.prototype.hasOwnProperty.call(STRICT_LIMITS,item.key)){
        upper[item.key] = Math.min(count,STRICT_LIMITS[item.key]);
      }else{
        // Higher notes and the £2 coin are cash-to-bank denominations, not part
        // of the configured shop float shown to the user.
        upper[item.key] = 0;
      }
      upper[item.key] = Math.min(upper[item.key],Math.floor(FLOAT_TARGET_PENCE / item.pence));
    });

    return {lower:lower,upper:upper,hasSmallCoinShortage:hasSmallCoinShortage};
  }

  function allocateWithinBounds(bounds,target){
    const safeTarget = Math.max(0,Math.floor(Number(target) || 0));
    const base = Object.assign(emptyCounts(),bounds.lower);
    const baseValue = valueOfCounts(base);
    if(baseValue > safeTarget) return {counts:emptyCounts(),value:0,exact:false};

    const remainderTarget = safeTarget - baseValue;
    const states = new Array(remainderTarget + 1);
    states[0] = emptyCounts();

    FLOAT_FILL_PRIORITY.forEach(function(key){
      const item = DENOMINATION_BY_KEY[key];
      let remainingCount = Math.max(0,(bounds.upper[key] || 0) - (bounds.lower[key] || 0));
      remainingCount = Math.min(remainingCount,Math.floor(remainderTarget / item.pence));
      let bundle = 1;
      while(remainingCount > 0){
        const take = Math.min(bundle,remainingCount);
        const bundleValue = take * item.pence;
        for(let amount = remainderTarget - bundleValue; amount >= 0; amount -= 1){
          if(!states[amount] || states[amount + bundleValue]) continue;
          const next = Object.assign(emptyCounts(),states[amount]);
          next[key] += take;
          states[amount + bundleValue] = next;
        }
        remainingCount -= take;
        bundle *= 2;
      }
    });

    let remainderValue = remainderTarget;
    while(remainderValue > 0 && !states[remainderValue]) remainderValue -= 1;
    const extras = states[remainderValue] || emptyCounts();
    const counts = emptyCounts();
    DENOMINATIONS.forEach(function(item){
      counts[item.key] = (base[item.key] || 0) + (extras[item.key] || 0);
    });
    const value = baseValue + remainderValue;
    return {counts:counts,value:value,exact:value === safeTarget};
  }

  function compliantCapacity(bounds){
    return valueOfCounts(bounds.upper);
  }

  function makeFloatAllocation(rawAvailable){
    const available = normaliseAvailable(rawAvailable);
    const availableValue = valueOfCounts(available);
    const normalBounds = allocationBounds(available,false);
    let result = allocateWithinBounds(normalBounds,FLOAT_TARGET_PENCE);
    let activeBounds = normalBounds;
    let exceptionalVariance = false;

    if(!result.exact && normalBounds.hasSmallCoinShortage){
      const exceptionalBounds = allocationBounds(available,true);
      const exceptionalResult = allocateWithinBounds(exceptionalBounds,FLOAT_TARGET_PENCE);
      if(exceptionalResult.exact){
        result = exceptionalResult;
        activeBounds = exceptionalBounds;
        exceptionalVariance = SMALL_COIN_KEYS.some(function(key){
          return result.counts[key] > NORMAL_SMALL_COIN_LIMIT;
        });
      }
    }

    const shortSmallDenominations = SMALL_COIN_KEYS.filter(function(key){
      return available[key] < SMALL_COIN_MINIMUM;
    });
    const capacity = compliantCapacity(activeBounds);
    let problem = null;
    if(!result.exact){
      if(availableValue < FLOAT_TARGET_PENCE) problem = 'cash_shortage';
      else if(capacity < FLOAT_TARGET_PENCE) problem = 'rule_shortage';
      else problem = 'denomination_mismatch';
    }

    return {
      counts:result.counts,
      value:result.value,
      exact:result.exact,
      shortage:Math.max(0,FLOAT_TARGET_PENCE - result.value),
      problem:problem,
      availableValue:availableValue,
      compliantCapacity:capacity,
      exceptionalVariance:exceptionalVariance,
      shortSmallDenominations:shortSmallDenominations,
      minimumsMet:SMALL_COIN_KEYS.every(function(key){
        return result.counts[key] >= Math.min(available[key],SMALL_COIN_MINIMUM);
      }),
      hardLimitsMet:result.counts.gbp5 <= STRICT_LIMITS.gbp5 && result.counts.gbp1 <= STRICT_LIMITS.gbp1
    };
  }

  return Object.freeze({
    FLOAT_TARGET_PENCE:FLOAT_TARGET_PENCE,
    NORMAL_SMALL_COIN_LIMIT:NORMAL_SMALL_COIN_LIMIT,
    SMALL_COIN_MINIMUM:SMALL_COIN_MINIMUM,
    DENOMINATIONS:DENOMINATIONS,
    SMALL_COIN_KEYS:SMALL_COIN_KEYS,
    STRICT_LIMITS:STRICT_LIMITS,
    FLOAT_DISPLAY_KEYS:FLOAT_DISPLAY_KEYS,
    emptyCounts:emptyCounts,
    valueOfCounts:valueOfCounts,
    makeFloatAllocation:makeFloatAllocation
  });
});
