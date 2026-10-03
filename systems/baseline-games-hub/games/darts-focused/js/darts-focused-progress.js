import {
  calibrationScore,
  dartsXpNeededForLevel,
  realmContributionForDarts
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';

export function refreshDartsSelectors({selectedId,progressLabel,root=document}){
  root.querySelectorAll('[data-darts-game]').forEach((button)=>{
    const selected=button.getAttribute('data-darts-game')===selectedId;
    button.classList.toggle('is-selected',selected);
    button.setAttribute('aria-selected',String(selected));
    const small=button.querySelector('small');
    if(small)small.textContent=progressLabel(button.getAttribute('data-darts-game'));
  });
}

export function syncDartsOverviewProgress({level,gameCount,root=document}){
  root.querySelectorAll('[data-game-card="darts-focused"] .game-row-meta strong, .darts-focused-overview-row .game-row-meta strong').forEach((node)=>{
    node.textContent=`Level ${level} · ${gameCount} games`;
  });
}

export function dartsProgressSummaryHtml(profile,gameIds){
  const attempted=gameIds.filter((id)=>profile.stats[id].attempts>0).length;
  const totalCorrect=gameIds.reduce((sum,id)=>sum+profile.stats[id].correct,0);
  const totalAttempts=gameIds.reduce((sum,id)=>sum+profile.stats[id].attempts,0);
  const overall=totalAttempts?Math.round(totalCorrect/totalAttempts*100):0;
  const confidence=calibrationScore(profile.stats['decision-training']);
  const realm=realmContributionForDarts(profile);
  const needed=dartsXpNeededForLevel(profile.level);
  const xpPct=Math.max(0,Math.min(100,(profile.xp/Math.max(1,needed))*100));
  return '<div class="darts-xp-block"><div class="xp-meta"><strong>Level '+profile.level+'</strong><span class="inline-note">Experience '+profile.xp+' / '+needed+'</span></div><div class="xp-bar"><div class="xp-fill" style="width:'+xpPct.toFixed(2)+'%"></div></div></div>'+
    '<div class="stat-pills trackcoin-stat-pills">'+
      `<div class="stat-pill">Darts Bank <span>${profile.bank}</span></div>`+
      `<div class="stat-pill">Skill Points <span>${profile.skillPoints}</span></div>`+
      `<div class="stat-pill">Clean Streak <span>${profile.cleanWinStreak}</span></div>`+
      `<div class="stat-pill">Games Attempted <span>${attempted} / ${gameIds.length}</span></div>`+
      `<div class="stat-pill">On-screen Rounds <span>${profile.totalRounds}</span></div>`+
      `<div class="stat-pill">Overall Accuracy <span>${overall}%</span></div>`+
      `<div class="stat-pill">Pressure Level <span>${profile.custom.pressureLevel} / 5</span></div>`+
      `<div class="stat-pill">Decision Calibration <span>${confidence===null?'Not measured':`${confidence}%`}</span></div>`+
      `<div class="stat-pill">Realm Links <span>${gameIds.length} / ${gameIds.length}</span></div>`+
      `<div class="stat-pill">Realm Dash <span>×${realm.manualDamageMult.toFixed(2)}</span></div>`+
      `<div class="stat-pill">Realm Shuriken <span>×${realm.shurikenDamageMult.toFixed(2)}</span></div>`+
    '</div>';
}

export function renderDartsTierControls({list,description,tierDefinitions,selectedTier,gameLevel}){
  if(!list||!description)return;
  list.innerHTML=tierDefinitions.map((tier)=>{
    const unlocked=gameLevel>=tier.unlockLevel;
    return `<button class="darts-tier-button${selectedTier===tier.id?' is-active':''}" data-darts-tier="${tier.id}" type="button" ${unlocked?'':'disabled'}><strong>${tier.name}</strong><span>${unlocked?`Tier ${tier.id}`:`Unlocks at level ${tier.unlockLevel}`}</span></button>`;
  }).join('');
  description.textContent=tierDefinitions[selectedTier-1].description;
}

export function syncDartsActiveControls({info,how,auto,fullscreen,meta,autoNext,fullscreenActive}){
  if(info){
    info.setAttribute('data-bl-info-title',meta.name);
    info.setAttribute('data-bl-info-text',meta.intention);
    info.setAttribute('aria-label',`What ${meta.name} develops`);
  }
  how?.setAttribute('data-darts-how',meta.id);
  if(auto){
    auto.setAttribute('aria-pressed',String(autoNext));
    auto.textContent=`Auto-Next: ${autoNext?'On':'Off'}`;
  }
  if(fullscreen){
    fullscreen.setAttribute('aria-pressed',String(fullscreenActive));
    fullscreen.textContent=fullscreenActive?'Exit Full Screen':'Full Screen';
  }
}
