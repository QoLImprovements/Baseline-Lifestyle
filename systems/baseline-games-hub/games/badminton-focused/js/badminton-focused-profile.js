export const BADMINTON_STORAGE_KEY='__bl_badminton_focused_v1__';

export function defaultGameStat(){
  return {xp:0,level:1,attempts:0,correct:0,streak:0,bestStreak:0,premature:0,late:0};
}

export function defaultBadmintonProfile(games){
  const gameStats={};
  games.forEach(game=>{gameStats[game.id]=defaultGameStat();});
  return {
    version:1,
    xp:0,
    level:1,
    bank:0,
    rounds:0,
    correct:0,
    currentStreak:0,
    bestStreak:0,
    selectedGame:games[0].id,
    selectedTiers:{},
    autoNext:{},
    recent:{},
    games:gameStats
  };
}

export function normaliseBadmintonProfile(data,games){
  const base=defaultBadmintonProfile(games);
  const profile=Object.assign(base,data||{});
  profile.games=profile.games||{};
  games.forEach(game=>{
    profile.games[game.id]=Object.assign(defaultGameStat(),profile.games[game.id]||{});
  });
  profile.selectedGame=games.some(game=>game.id===profile.selectedGame)?profile.selectedGame:games[0].id;
  profile.selectedTiers=profile.selectedTiers||{};
  profile.autoNext=profile.autoNext||{};
  profile.recent=profile.recent||{};
  profile.level=Math.max(1,Number(profile.level)||1);
  profile.xp=Math.max(0,Number(profile.xp)||0);
  profile.bank=Math.max(0,Number(profile.bank)||0);
  return profile;
}

function serverAuthority(){
  const authority=globalThis.BaselineGameStorage;
  return authority&&typeof authority.getProfile==='function'?authority:null;
}

export function loadBadmintonProfile(games,{storage=null,key=BADMINTON_STORAGE_KEY}={}){
  if(storage){
    try{
      const raw=storage.getItem(key);
      return normaliseBadmintonProfile(raw?JSON.parse(raw):null,games);
    }catch(_error){
      return defaultBadmintonProfile(games);
    }
  }
  return normaliseBadmintonProfile(serverAuthority()?.getProfile?.('badmintonfocused') || null,games);
}

export function persistBadmintonProfile(profile,{storage=null,key=BADMINTON_STORAGE_KEY}={}){
  if(storage){
    try{
      storage.setItem(key,JSON.stringify(profile));
      return true;
    }catch(_error){
      return false;
    }
  }
  const authority=serverAuthority();
  authority?.setTemporaryProfile?.('badmintonfocused',profile);
  authority?.saveProfile?.('badmintonfocused',profile);
  return Boolean(authority?.canSave?.());
}

export function xpNeed(level){
  return 70+Math.max(1,level)*35;
}

export function accuracy(stat){
  return stat.attempts?Math.round(stat.correct/stat.attempts*100):0;
}

export function levelUp(target){
  while(target.xp>=xpNeed(target.level)){
    target.xp-=xpNeed(target.level);
    target.level+=1;
  }
  return target;
}


export function recordBadmintonResult(profile,gameId,correct,extra={}){
  if(!profile.games)profile.games={};
  if(!profile.games[gameId])profile.games[gameId]=defaultGameStat();
  const stat=profile.games[gameId];

  stat.attempts+=1;
  stat.correct+=correct?1:0;
  stat.streak=correct?stat.streak+1:0;
  stat.bestStreak=Math.max(stat.bestStreak,stat.streak);
  stat.premature+=extra.premature?1:0;
  stat.late+=extra.late?1:0;
  stat.xp+=correct?14:5;
  levelUp(stat);

  profile.rounds+=1;
  profile.correct+=correct?1:0;
  profile.currentStreak=correct?profile.currentStreak+1:0;
  profile.bestStreak=Math.max(profile.bestStreak,profile.currentStreak);
  profile.xp+=correct?11:4;
  profile.bank+=correct?2:0;
  levelUp(profile);

  return {profile,stat};
}


export function buildBadmintonRealmContribution(profile,games){
  const stat=id=>profile.games[id]||defaultGameStat();
  const above=id=>Math.max(0,stat(id).level-1);
  const level=profile.level;
  return {
    level,
    linkedLevels:level+games.reduce((total,game)=>total+above(game.id),0),
    attackMult:1+Math.min(.06,(above('shot-choice')+above('attack-purpose'))*.003),
    critChance:Math.min(.07,(above('read-racket')+above('deception-filter'))*.0035),
    offlineGainMult:1+Math.min(.05,(above('badminton-reset')+above('landing-picture'))*.0025),
    upgradeCostMult:1-Math.min(.04,above('decision-recovery')*.004),
    bossDamageMult:1+Math.min(.06,above('pressure-ladder')*.006),
    passiveEfficiencyMult:1+Math.min(.06,(above('shuttle-first')+above('four-corner'))*.003),
    enemyRevealChance:Math.min(.08,(above('rally-pattern')+above('opponent-balance'))*.004),
    clueDropChance:Math.min(.05,above('court-recovery')*.005),
    coinGainMult:1+Math.min(.05,above('opponent-balance')*.005),
    manualDamageMult:1+Math.min(.06,(above('wait-contact')+above('tempo-break'))*.003),
    shurikenDamageMult:1+Math.min(.05,above('decision-recovery')*.005),
    unlockedTraits:level>=5?['Badminton Focused: Visual Discipline']:[]
  };
}
