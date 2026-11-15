(function(global){
  'use strict';

  if(global.BASELINE_DETECT_WORD_ENGINE) return;

  function create(options={}){
    const WORD_BANK=options.wordBank||{};
    const random=typeof options.random==='function'?options.random:Math.random;
    const recentByLength=Object.create(null);

    function chooseRandomWord(length){
      const bank=(WORD_BANK[length]||WORD_BANK[5]||[]).filter(word=>String(word).length===length);
      const recent=recentByLength[length]||[];
      let pool=bank.filter(word=>!recent.includes(word));
      if(!pool.length){
        recent.length=0;
        pool=bank.slice();
      }
      const chosen=pool[Math.floor(random()*pool.length)]||bank[0]||'word';
      recent.unshift(chosen);
      const memory=Math.min(28,Math.max(8,Math.floor(bank.length*0.45)));
      recentByLength[length]=recent.slice(0,memory);
      return chosen;
    }

    function isDictionaryReady(){ return Boolean(global.BASELINE_UK_WORDS && typeof global.BASELINE_UK_WORDS.has==='function'); }
    function isValidWord(word){
      const candidate=String(word||'').trim().toLowerCase();
      if(!/^[a-z]{3,7}$/.test(candidate))return false;
      return Boolean(global.BASELINE_UK_WORDS?.has(candidate) || (WORD_BANK[candidate.length]||[]).includes(candidate));
    }

    function evaluateWordGuess(guess,secret){
      const result=Array.from({length:guess.length},(_,idx)=>({letter:guess[idx],state:'absent'}));
      const secretPool=secret.split('');
      guess.split('').forEach((char,idx)=>{
        if(secret[idx]===char){
          result[idx].state='correct';
          secretPool[idx]=null;
        }
      });
      guess.split('').forEach((char,idx)=>{
        if(result[idx].state==='correct')return;
        const poolIndex=secretPool.indexOf(char);
        if(poolIndex>=0){
          result[idx].state='present';
          secretPool[poolIndex]=null;
        }
      });
      return result;
    }

    function computeWordRewardMultiplier(profile){
      return 1+((profile.skills.focus||0)*Math.min(profile.currentStreak,5)*0.04);
    }

    function letterKnowledge(guesses){
      const rank={absent:1,present:2,correct:3};
      const knowledge=Object.create(null);
      (Array.isArray(guesses)?guesses:[]).forEach(function(guess){
        (guess.evaluation||[]).forEach(function(entry){
          const letter=String(entry.letter||'').toLowerCase();
          if(!letter)return;
          const state=rank[entry.state]?entry.state:'absent';
          if(!knowledge[letter]||rank[state]>rank[knowledge[letter]])knowledge[letter]=state;
        });
      });
      return knowledge;
    }

    return Object.freeze({
      chooseRandomWord:chooseRandomWord,
      isValidWord:isValidWord,
      isDictionaryReady:isDictionaryReady,
      evaluateWordGuess:evaluateWordGuess,
      computeWordRewardMultiplier:computeWordRewardMultiplier,
      letterKnowledge:letterKnowledge
    });
  }

  global.BASELINE_DETECT_WORD_ENGINE=Object.freeze({version:1,create:create});
})(window);
