(function(global){
  'use strict';

  if(global.BASELINE_MAKE_NUMBER_ENGINE) return;

  function create(options={}){
    const MAKE24_TIERS=Array.isArray(options.tiers)?options.tiers:[];
    if(!MAKE24_TIERS.length) throw new Error('make_number_tiers_missing');
    const MAKE_NUMBER_GENERATED_BANKS=Object.create(null);

  function allMakeNumberSolutions(numbers, target){
    const tolerance = 1e-6;
    const wanted = Number(target || 0);
    const seen = new Set();
    function recurse(items){
      if(items.length === 1){
        if(Math.abs(items[0].value - wanted) < tolerance){ seen.add(items[0].expr); }
        return;
      }
      for(let i = 0; i < items.length; i += 1){
        for(let j = 0; j < items.length; j += 1){
          if(i === j) continue;
          const remaining = [];
          for(let k = 0; k < items.length; k += 1){ if(k !== i && k !== j) remaining.push(items[k]); }
          const a = items[i];
          const b = items[j];
          if(i < j){ remaining.push({ value:a.value + b.value, expr:'(' + a.expr + '+' + b.expr + ')' }); recurse(remaining); remaining.pop(); }
          if(i < j){ remaining.push({ value:a.value * b.value, expr:'(' + a.expr + '×' + b.expr + ')' }); recurse(remaining); remaining.pop(); }
          remaining.push({ value:a.value - b.value, expr:'(' + a.expr + '-' + b.expr + ')' }); recurse(remaining); remaining.pop();
          if(Math.abs(b.value) > tolerance){ remaining.push({ value:a.value / b.value, expr:'(' + a.expr + '÷' + b.expr + ')' }); recurse(remaining); remaining.pop(); }
        }
      }
    }
    recurse(numbers.map(n => ({ value:n, expr:String(n) })));
    return [...seen];
  }

  function make24HintFromSolution(solution, hintIndex){
    const clean = String(solution || '').replace(/[\s]+/g, '');
    const ops = Array.from(clean.matchAll(/[+\-×÷]/g)).map(match => match[0]);
    const finalMatch = clean.match(/([+\-×÷])[^+\-×÷]*$/);
    const finalOp = finalMatch ? finalMatch[1] : (ops[ops.length - 1] || '');
    const uniqueOps = Array.from(new Set(ops));
    const step = Math.max(0, Number(hintIndex || 0));
    const opWord = function(op){
      return op === '+' ? 'addition' : op === '-' ? 'subtraction' : op === '×' ? 'multiplication' : op === '÷' ? 'division' : 'mixed operations';
    };
    if(step === 0){
      if(uniqueOps.length === 1) return 'Guide: this round leans heavily on ' + opWord(uniqueOps[0]) + '.';
      if(uniqueOps.includes('×') || uniqueOps.includes('÷')) return 'Guide: look for a strong intermediate value before the last step.';
      return 'Guide: combine numbers into a useful subtotal before finishing the expression.';
    }
    if(step === 1){
      if(finalOp) return 'Guide: the final step is ' + opWord(finalOp) + '.';
      return 'Guide: parentheses matter here more than speed.';
    }
    if(uniqueOps.includes('×') && uniqueOps.includes('+')) return 'Guide: try making one compact product, then merge it with the remaining value.';
    if(uniqueOps.includes('÷')) return 'Guide: keep an eye out for a clean division rather than forcing a large total early.';
    if(uniqueOps.includes('-')) return 'Guide: a helpful difference appears somewhere before the finish.';
    return 'Guide: build toward the target in stages rather than using all four numbers at once.';
  }

  function make24PuzzleSignature(puzzle){
    const target = puzzle && typeof puzzle === 'object' && !Array.isArray(puzzle) ? puzzle.target : 24;
    const numbers = Array.isArray(puzzle) ? puzzle : ((puzzle && puzzle.numbers) || []);
    return target + '|' + numbers.slice().sort((a, b) => a - b).join('-');
  }

  function make24DifficultyBand(tier){
    const order = MAKE24_TIERS.findIndex(item => item.id === tier.id);
    return Math.max(0, order);
  }

  function makeNumberSeedHash(value){
    const input = String(value || 'make-number');
    let hash = 2166136261 >>> 0;
    for(let index = 0; index < input.length; index += 1){
      hash ^= input.charCodeAt(index);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    return hash || 1;
  }

  function makeNumberSeededRandom(seed){
    let state = makeNumberSeedHash(seed);
    return function(){
      state += 0x6D2B79F5;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(items, seed){
    const copy = items.slice();
    const random = makeNumberSeededRandom(seed);
    for(let index = copy.length - 1; index > 0; index -= 1){
      const swap = Math.floor(random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  }

  function makeNumberFormulaTemplates(band){
    const simple = [
      function(a,b,c,d){ return { target:(a + b) * c - d, solution:'((' + a + '+' + b + ')×' + c + ')-' + d }; },
      function(a,b,c,d){ return { target:(a * b) + c + d, solution:'(' + a + '×' + b + ')+' + c + '+' + d }; },
      function(a,b,c,d){ return { target:(a + b + c) * d, solution:'(' + a + '+' + b + '+' + c + ')×' + d }; }
    ];
    const medium = [
      function(a,b,c,d){ return { target:(a + b) * (c + d), solution:'(' + a + '+' + b + ')×(' + c + '+' + d + ')' }; },
      function(a,b,c,d){ return { target:(a * b) + (c * d), solution:'(' + a + '×' + b + ')+(' + c + '×' + d + ')' }; },
      function(a,b,c,d){ return { target:(a * c) - b + d, solution:'(' + a + '×' + c + ')-' + b + '+' + d }; }
    ];
    const hard = [
      function(a,b,c,d){ return { target:(a * b * c) - d, solution:'((' + a + '×' + b + ')×' + c + ')-' + d }; },
      function(a,b,c,d){ return { target:(a + b) * c + d, solution:'((' + a + '+' + b + ')×' + c + ')+' + d }; },
      function(a,b,c,d){ return { target:(a * d) + (b * c), solution:'(' + a + '×' + d + ')+(' + b + '×' + c + ')' }; }
    ];
    return band <= 0 ? simple : (band <= 1 ? simple.concat(medium) : medium.concat(hard));
  }

  function targetBandForTier(tier){
    const band = make24DifficultyBand(tier);
    if(band <= 0) return { min:6, max:75 };
    if(band === 1) return { min:12, max:130 };
    if(band === 2) return { min:24, max:220 };
    if(band === 3) return { min:36, max:360 };
    return { min:50, max:720 };
  }

  function buildMakeNumberPuzzleBank(tier){
    if(MAKE_NUMBER_GENERATED_BANKS[tier.id]) return MAKE_NUMBER_GENERATED_BANKS[tier.id];
    const band = make24DifficultyBand(tier);
    const minNumber = band >= 2 ? 2 : 1;
    const maxNumber = Math.max(minNumber, Number(tier.maxNumber || 6));
    const targetBand = targetBandForTier(tier);
    const templates = makeNumberFormulaTemplates(band);
    const seen = new Set();
    const bank = [];
    function addPuzzle(numbers, result){
      const target = Math.round(Number(result.target));
      if(!Number.isFinite(target) || target < targetBand.min || target > targetBand.max) return;
      const key = target + '|' + numbers.slice().sort((a, b) => a - b).join('-');
      if(seen.has(key)) return;
      seen.add(key);
      bank.push({ target, numbers:numbers.slice(), solutions:[result.solution] });
    }
    for(let a = minNumber; a <= maxNumber && bank.length < 100; a += 1){
      for(let b = minNumber; b <= maxNumber && bank.length < 100; b += 1){
        for(let c = minNumber; c <= maxNumber && bank.length < 100; c += 1){
          for(let d = minNumber; d <= maxNumber && bank.length < 100; d += 1){
            if(new Set([a,b,c,d]).size < 2) continue;
            const template = templates[(a + (b * 2) + (c * 3) + (d * 5) + band) % templates.length];
            addPuzzle([a,b,c,d], template(a,b,c,d));
          }
        }
      }
    }
    let guard = 0;
    const random = makeNumberSeededRandom('bank:' + tier.id + ':' + minNumber + ':' + maxNumber);
    while(bank.length < 100 && guard < 5000){
      guard += 1;
      const a = minNumber + Math.floor(random() * (maxNumber - minNumber + 1));
      const b = minNumber + Math.floor(random() * (maxNumber - minNumber + 1));
      const c = minNumber + Math.floor(random() * (maxNumber - minNumber + 1));
      const d = minNumber + Math.floor(random() * (maxNumber - minNumber + 1));
      if(new Set([a,b,c,d]).size < 2) continue;
      const template = templates[guard % templates.length];
      addPuzzle([a,b,c,d], template(a,b,c,d));
    }
    MAKE_NUMBER_GENERATED_BANKS[tier.id] = bank.slice(0, 100);
    return MAKE_NUMBER_GENERATED_BANKS[tier.id];
  }

  function buildMake24Puzzle(tier,seed,previousPuzzle){
    const previous=previousPuzzle&&Array.isArray(previousPuzzle.numbers)
      ? make24PuzzleSignature({target:previousPuzzle.target||24,numbers:previousPuzzle.numbers})
      : '';
    const bank=seededShuffle(buildMakeNumberPuzzleBank(tier),seed||('preview:'+tier.id));
    for(const puzzle of bank){
      if(make24PuzzleSignature(puzzle)===previous&&bank.length>1)continue;
      return {target:puzzle.target,numbers:puzzle.numbers.slice(),solutions:puzzle.solutions.slice()};
    }
    const fallback={target:24,numbers:[1,3,4,6]};
    return {target:fallback.target,numbers:fallback.numbers.slice(),solutions:allMakeNumberSolutions(fallback.numbers,fallback.target)};
  }

  function countNumbers(list){
    const map = new Map();
    list.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    return map;
  }

  function sameNumberMultiset(a, b){
    const mapA = countNumbers(a);
    const mapB = countNumbers(b);
    if(mapA.size !== mapB.size) return false;
    for(const [key, value] of mapA){ if(mapB.get(key) !== value) return false; }
    return true;
  }

    return Object.freeze({
      allMakeNumberSolutions:allMakeNumberSolutions,
      make24HintFromSolution:make24HintFromSolution,
      make24PuzzleSignature:make24PuzzleSignature,
      makeNumberSeedHash:makeNumberSeedHash,
      makeNumberSeededRandom:makeNumberSeededRandom,
      seededShuffle:seededShuffle,
      buildMakeNumberPuzzleBank:buildMakeNumberPuzzleBank,
      buildMake24Puzzle:buildMake24Puzzle,
      sameNumberMultiset:sameNumberMultiset
    });
  }

  global.BASELINE_MAKE_NUMBER_ENGINE=Object.freeze({version:1,create:create});
})(window);
