(function(global){
  'use strict';

  if(global.BASELINE_GAMES_HUB_PROGRESSION) return;

  function clamp(value,min,max){
    return Math.max(min,Math.min(max,Number(value)||0));
  }

  function xpNeededForLevel(level){
    return 60 + ((level - 1) * 35) + ((level - 1) * (level - 1) * 4);
  }

  function progressionSnapshot(profile){
    const level=Math.max(1,Math.round(Number(profile&&profile.level||1)));
    const xp=Math.max(0,Math.round(Number(profile&&profile.xp||0)));
    const needed=xpNeededForLevel(level);
    const pct=clamp((xp/Math.max(1,needed))*100,0,100);
    return {level:level,xp:xp,needed:needed,pct:pct,remaining:Math.max(0,needed-xp)};
  }

  function applyLevelCurve(profile){
    let leveled=0;
    while(profile.xp>=xpNeededForLevel(profile.level)){
      profile.xp-=xpNeededForLevel(profile.level);
      profile.level+=1;
      profile.skillPoints+=1;
      leveled+=1;
    }
    return leveled;
  }

  function refundLockedSkills(profile,defs){
    let refund=0;
    defs.forEach(function(def){
      const current=clamp(Math.round(Number(profile.skills[def.id]||0)),0,def.max);
      const allowed=profile.level>=def.unlockLevel?current:0;
      if(current>allowed) refund+=(current-allowed);
      profile.skills[def.id]=allowed;
    });
    profile.skillPoints=Math.max(0,Math.round(Number(profile.skillPoints||0))+refund);
  }

  function spentSkillPoints(profile,defs){
    return defs.reduce(function(total,def){
      return total+Math.max(0,Math.round(Number(profile.skills[def.id]||0)));
    },0);
  }

  function earnedSkillPoints(profile){
    return Math.max(1,Math.round(Number(profile.level||1)));
  }

  function reconcileSkillPoints(profile,defs){
    const spent=spentSkillPoints(profile,defs);
    profile.skillPoints=Math.max(0,earnedSkillPoints(profile)-spent);
  }

  global.BASELINE_GAMES_HUB_PROGRESSION=Object.freeze({
    version:1,
    xpNeededForLevel:xpNeededForLevel,
    progressionSnapshot:progressionSnapshot,
    applyLevelCurve:applyLevelCurve,
    refundLockedSkills:refundLockedSkills,
    spentSkillPoints:spentSkillPoints,
    earnedSkillPoints:earnedSkillPoints,
    reconcileSkillPoints:reconcileSkillPoints
  });
})(window);
