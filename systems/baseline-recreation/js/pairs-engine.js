(function(global){
  'use strict';

  if(global.BASELINE_PAIRS_ENGINE) return;

  function buildDeck({tier,faces,shuffle}={}){
    const source=Array.isArray(faces)?faces:[];
    const choose=typeof shuffle==='function'?shuffle:function(values){return values.slice();};
    const pairCount=Math.max(1,Math.round(Number(tier&&tier.pairs)||6));
    const chosenFaces=choose(source).slice(0,pairCount);
    const deck=[];
    chosenFaces.forEach(function(face,index){
      deck.push({id:'a-'+index,face:face,open:false,matched:false,wasKnown:false,selections:0});
      deck.push({id:'b-'+index,face:face,open:false,matched:false,wasKnown:false,selections:0});
    });
    return choose(deck);
  }

  function boardLayout(tier){
    const desktopCols=Math.max(2,Math.min(6,Math.round(Number(tier&&tier.cols)||4)));
    const mobileCols=Math.min(4,desktopCols);
    const phoneCols=Math.min(3,desktopCols);
    const pairCount=Math.max(1,Math.round(Number(tier&&tier.pairs)||6));
    const cardMax=pairCount<=6?150:pairCount<=8?140:pairCount<=10?128:pairCount<=12?118:pairCount<=15?108:100;
    const gap=10;
    return Object.freeze({
      desktopCols:desktopCols,
      mobileCols:mobileCols,
      phoneCols:phoneCols,
      boardMax:(desktopCols*cardMax)+((desktopCols-1)*gap)
    });
  }

  function mismatchDelay(tempoLevel){
    return Math.max(260,650-(Math.max(0,Number(tempoLevel)||0)*90));
  }

  function calculateRewards({
    tier,
    profile,
    hadFailure=false,
    cleanBonusPctForStreak=()=>0
  }={}){
    const safeProfile=profile&&typeof profile==='object'?profile:{};
    const nextClean=Math.max(0,Number(safeProfile.cleanWinStreak)||0)+1;
    const nextStreak=Math.max(0,Number(safeProfile.currentStreak)||0)+1;
    const cleanPct=Math.max(0,Number(cleanBonusPctForStreak(nextClean))||0)/100;
    const banker=Math.max(0,Number(safeProfile.skills&&safeProfile.skills.banker)||0);
    const flow=Math.max(0,Number(safeProfile.skills&&safeProfile.skills.flow)||0);
    const bankMult=(1+(banker*0.10))*(1+cleanPct);
    const xpMult=(1+(flow*0.08))*(1+cleanPct);
    return Object.freeze({
      bank:Math.round((Number(tier&&tier.bankReward)||0)*bankMult),
      xp:Math.round((Number(tier&&tier.xpReward)||0)*xpMult),
      cleanPct:Math.round(cleanPct*100),
      nextClean:nextClean,
      nextStreak:nextStreak
    });
  }

  global.BASELINE_PAIRS_ENGINE=Object.freeze({
    version:3,
    buildDeck:buildDeck,
    boardLayout:boardLayout,
    mismatchDelay:mismatchDelay,
    calculateRewards:calculateRewards
  });
})(window);
