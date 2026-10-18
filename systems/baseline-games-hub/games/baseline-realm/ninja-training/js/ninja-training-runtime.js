// Baseline Realm Ninja Training progression runtime.
// Presentation is owned by ninja-training-scene.js and ninja-training.css.

export function createNinjaTrainingRuntime(dependencies) {
  const { profiles, refs, q, qsa, clamp, sum, formatInt, formatCompact, escapeHtml, hotkeyActionLabel, cleanWinBonusPct, xpNeededForLevel, applyLevelCurve, scheduleSave, renderAll, renderHubSummary, renderGamesList, syncHashState, isMobileGameViewport, profileOrDefault } = dependencies;


  const NINJA_UPGRADES = [
    { id:'blade', name:'Sharpened Blade', baseCost:15, growth:1.18, description:'+1.4 base DPS per level.' },
    { id:'drills', name:'Dojo Drills', baseCost:40, growth:1.22, description:'+8% DPS per level.' },
    { id:'treasury', name:'Supply Cache', baseCost:55, growth:1.24, description:'+10% coin gain per level.' },
    { id:'meditation', name:'Idle Focus', baseCost:80, growth:1.26, description:'+8% offline efficiency per level.' },
    { id:'breaker', name:'Boss Breaker', baseCost:120, growth:1.28, description:'+12% boss damage per level.' }
  ];

  const NINJA_SPIRIT_SHOP = [
    { id:'focus', name:'Ki Focus', baseCost:2, growth:1.7, description:'+8% DPS per level.', summary:function(level){ return '+' + (level * 8) + '% attack'; } },
    { id:'fortune', name:'Treasure Sigil', baseCost:2, growth:1.75, description:'+8% coin gain per level.', summary:function(level){ return '+' + (level * 8) + '% coin gain'; } },
    { id:'vigor', name:'Spirit Wells', baseCost:3, growth:1.8, description:'+10% offline efficiency per level.', summary:function(level){ return '+' + (level * 10) + '% offline gain'; } },
    { id:'ember', name:'Campfire Ember', baseCost:4, growth:1.85, description:'+5% passive training stability per level.', summary:function(level){ return '+' + (level * 5) + '% stability'; } },
    { id:'tents', name:'Tent Network', baseCost:5, growth:1.9, description:'+6% Basecamp support per level.', summary:function(level){ return '+' + (level * 6) + '% camp support'; } },
    { id:'mark', name:'Hunter Mark', baseCost:6, growth:1.95, description:'+7% boss pressure per level.', summary:function(level){ return '+' + (level * 7) + '% boss pressure'; } }
  ];

  const NINJA_BUY_MODES = ['1x','5x','20x','max'];

  const NINJA_UPGRADE_HOTKEYS = { blade:'1', drills:'2', treasury:'3', meditation:'4', breaker:'5' };

  const ninjaBuyModes = Object.create(null);

  let ninjaTimer = null;

  let lastNinjaLoopAt = Date.now();

  let pendingOfflineSummary = '';

  let ninjaOfflineToastTimer = null;

  let lastNinjaOfflineToast = '';

  let ninjaAnimationTick = 0;

  const NINJA_SHURIKEN_COOLDOWN_MS = 15000;

  const NINJA_SHURIKEN_VOLLEY_HITS = 10;

  const NINJA_SHURIKEN_VOLLEY_MS = 3000;

  let ninjaShurikenReadyAt = 0;

  let ninjaShurikenVolleyActive = false;

  let ninjaShurikenVolleyToken = 0;

  let ninjaShurikenCooldownFrame = 0;

  // Baseline Realm always opens at its navigation hub. Ninja Training is a
  // destination chosen from Basecamp, never the Realm's implicit home screen.
  let realmView = 'basecamp';

  let realmDrawerOpen = false;

  let realmDrawerTab = 'upgrades';

  function syncRealmFullscreenControls(){
    const frame = document.getElementById('realmSceneFrame');
    const active = !!(frame && document.fullscreenElement === frame);
    qsa('[data-game-fullscreen="ninja"], #realmFullscreenBtn, #realmFullscreenToolbarBtn').forEach(function(btn){
      btn.setAttribute('aria-pressed', String(active));
      btn.classList.toggle('is-active', active);
      const label = btn.querySelector('.realm-fab__label');
      if(label){
        label.textContent = active ? 'Exit Full Screen [F]' : 'Full Screen [F]';
      }else{
        btn.textContent = active ? 'Exit Full Screen' : 'Full Screen';
      }
    });
  }

  function defaultNinjaProfile(){
    return {
      app:'ninja', coins:0, xp:0, level:1, stage:1, enemyHp:0, highestStage:1, totalKills:0, currentStreak:0, bestStreak:0, cleanWinStreak:0, bossesDefeated:0, totalCoinsEarned:0,
      prestigeCount:0, spirit:0, upgrades:{ blade:0, drills:0, treasury:0, meditation:0, breaker:0 }, spiritShop:{ focus:0, fortune:0, vigor:0, ember:0, tents:0, mark:0 },
      workshop: defaultRealmWorkshopState(),
      lastSeenAt:0, bonusCache:{}, offlineSummary:'', prestigeEarnedTotal:0
    };
  }

  function normaliseSpiritShop(data){
    const input = data && typeof data === 'object' ? data : {};
    const out = {};
    NINJA_SPIRIT_SHOP.forEach(function(item){ out[item.id] = Math.max(0, Math.round(Number(input[item.id] || 0))); });
    return out;
  }

  function defaultRealmWorkshopState(){
    return { crafting:1, tailoring:1, cooking:1, alchemy:1 };
  }

  function normaliseRealmWorkshopState(data){
    const input = data && typeof data === 'object' ? data : {};
    return {
      crafting: Math.max(1, Math.round(Number(input.crafting || 1))),
      tailoring: Math.max(1, Math.round(Number(input.tailoring || 1))),
      cooking: Math.max(1, Math.round(Number(input.cooking || 1))),
      alchemy: Math.max(1, Math.round(Number(input.alchemy || 1)))
    };
  }

  function realmDrawerTabsForView(view){
    if(view === 'basecamp') return ['settlement','workshop','stores','expeditions'];
    if(view === 'workshop' || view === 'exploration') return [];
    return ['upgrades','spirit','skills','bonuses','rebirth','stats'];
  }

  function defaultRealmDrawerTabForView(view){ return realmDrawerTabsForView(view)[0] || 'settlement'; }

  function buyRealmWorkshopUpgrade(id){
    const profile = profiles.ninja;
    const levels = profile.workshop || defaultRealmWorkshopState();
    const current = Math.max(1, Number(levels[id] || 1));
    const cost = current * 120;
    if(profile.coins < cost) return;
    profile.coins -= cost;
    levels[id] = current + 1;
    profile.workshop = normaliseRealmWorkshopState(levels);
    pendingOfflineSummary = 'Workshop improved: ' + id + ' reached level ' + profile.workshop[id] + '.';
    scheduleSave('ninja');
    renderNinja();
  }

  function renderRealmAuxiliary(profile){
    if(!profile) return;
    const workshop = profile.workshop || defaultRealmWorkshopState();

    const settlement = document.getElementById('realmDrawerSettlement');
    if(settlement){
      settlement.innerHTML = '<div class="realm-manage-grid">'
        + '<article class="realm-manage-card"><strong>Basecamp</strong><span class="inline-note">Basecamp is the Realm hub. Enter buildings and routes from the illustrated camp rather than from this management panel.</span></article>'
        + '<article class="realm-manage-card"><strong>Shared systems</strong><span class="inline-note">Coins, inventory, party state, crafted items and connected rewards are shared across Realm destinations.</span></article>'
        + '</div>';
    }

    const workshopPane = document.getElementById('realmDrawerWorkshop');
    if(workshopPane){
      const stations = [
        ['crafting','Crafting','Equipment assembly and field upgrades.'],
        ['tailoring','Tailoring','Cloth gear, wraps, and travel kits.'],
        ['cooking','Cooking','Rations and battle meal preparation.'],
        ['alchemy','Alchemy','Tonics, powders, and utility mixtures.']
      ];
      workshopPane.innerHTML = stations.map(function(item){
        const id=item[0], name=item[1], note=item[2], level=workshop[id], cost=level*120, canBuy=profile.coins>=cost;
        return '<article class="realm-manage-card"><div class="realm-workshop-row"><div><strong>' + name + '</strong><div class="inline-note">' + note + '</div></div><span class="realm-badge">Level ' + level + '</span></div><div class="realm-workshop-row"><span class="inline-note">Upgrade cost: ' + formatInt(cost) + ' Coins</span><button class="action' + (canBuy ? '' : ' secondary') + '" data-realm-workshop-upgrade="' + id + '" type="button"' + (canBuy ? '' : ' disabled') + '>Upgrade</button></div></article>';
      }).join('');
    }

    const storesPane = document.getElementById('realmDrawerStores');
    if(storesPane){
      storesPane.innerHTML = '<div class="realm-manage-grid">'
        + '<article class="realm-manage-card"><strong>Merchant Post</strong><span class="inline-note">Buy and sell supplies through the Merchant Post in Basecamp. Transactions use the shared Realm wallet and inventory.</span></article>'
        + '</div>';
    }

    const expeditions = document.getElementById('realmDrawerExpeditions');
    if(expeditions){
      expeditions.innerHTML = '<div class="realm-manage-grid">'
        + '<article class="realm-manage-card"><strong>Exploration</strong><span class="inline-note">Meridian Grove owns route movement, encounters, rewards and route progress. Enter it through the Exploration destination in Basecamp.</span></article>'
        + '<article class="realm-manage-card"><strong>Operations</strong><span class="inline-note">Calorie Escape and Tactical Operations are separate Realm destinations with their own game state and controls.</span></article>'
        + '</div>';
    }
  }

  function readDartsProfile(){
    try{
      if(globalThis.DartsFocusedGames && typeof globalThis.DartsFocusedGames.getProfile === 'function'){
        return globalThis.DartsFocusedGames.getProfile();
      }
      return globalThis.BaselineGameStorage?.getProfile?.('dartsfocused') || null;
    }catch(_error){ return null; }
  }

  function readBadmintonProfile(){
    try{
      if(globalThis.BadmintonFocusedGames && typeof globalThis.BadmintonFocusedGames.getProfile === 'function'){
        return globalThis.BadmintonFocusedGames.getProfile();
      }
      return globalThis.BaselineGameStorage?.getProfile?.('badmintonfocused') || null;
    }catch(_error){ return null; }
  }

  function readCrossnumberProfile(){
    try{
      if(globalThis.BaselineCrossnumber && typeof globalThis.BaselineCrossnumber.getProfile === 'function'){
        return globalThis.BaselineCrossnumber.getProfile();
      }
      return globalThis.BaselineGameStorage?.getProfile?.('crossnumber') || null;
    }catch(_error){ return null; }
  }

  function crossnumberRealmContribution(){
    try{
      if(globalThis.BaselineCrossnumber && typeof globalThis.BaselineCrossnumber.getRealmContribution === 'function'){
        return globalThis.BaselineCrossnumber.getRealmContribution();
      }
    }catch(_error){}
    const profile=readCrossnumberProfile() || {};
    const level=Math.max(1,Math.round(Number(profile.level||1)));
    const skills=profile.skills&&typeof profile.skills==='object'?profile.skills:{};
    const structure=Math.max(0,Math.round(Number(skills.structure||0)));
    const boss=Math.min(.08,Math.min(.045,Math.max(0,level-1)*.0015)+(level>=10?.02:0)+(structure*.004));
    const clues=Math.min(.08,Math.min(.04,Math.max(0,level-1)*.0012)+(level>=5?.02:0)+(structure*.004));
    const costReduction=Math.min(.06,Math.min(.03,Math.max(0,level-1)*.0008)+(level>=20?.02:0)+(structure*.0025));
    const traits=[];
    if(level>=5) traits.push('Crossnumber: Constraint Reading');
    if(level>=10) traits.push('Crossnumber: Linked Planning');
    if(level>=20) traits.push('Crossnumber: Resource Arithmetic');
    return {level:level,bossDamageMult:1+boss,clueDropChance:clues,upgradeCostMult:1-costReduction,unlockedTraits:traits};
  }

  function jigsawRealmContribution(){
    try{
      if(globalThis.BaselineJigsawProgress && typeof globalThis.BaselineJigsawProgress.getRealmContribution === 'function'){
        return globalThis.BaselineJigsawProgress.getRealmContribution();
      }
    }catch(_error){}
    return { passiveEfficiencyMult:1, passivePct:0, completions:0, unlockedTraits:[] };
  }

  function badmintonRealmContribution(){
    try{
      if(globalThis.BadmintonFocusedGames && typeof globalThis.BadmintonFocusedGames.getRealmContribution === 'function'){
        return globalThis.BadmintonFocusedGames.getRealmContribution();
      }
    }catch(_error){}
    const profile = readBadmintonProfile();
    const games = profile && profile.games && typeof profile.games === 'object' ? profile.games : {};
    const level = Math.max(1, Math.round(Number(profile && profile.level || 1)));
    const gameLevel = function(id){ return Math.max(1, Math.round(Number(games[id] && games[id].level || 1))); };
    const above = function(id){ return Math.max(0, gameLevel(id) - 1); };
    return {
      level:level,
      linkedLevels:level + ['read-racket','shuttle-first','wait-contact','court-recovery','four-corner','shot-choice','deception-filter','rally-pattern','badminton-reset','tempo-break','landing-picture','pressure-ladder','attack-purpose','opponent-balance','decision-recovery'].reduce(function(sum,id){ return sum + above(id); },0),
      attackMult:1 + Math.min(.06, (above('shot-choice') + above('attack-purpose')) * .003),
      critChance:Math.min(.07, (above('read-racket') + above('deception-filter')) * .0035),
      offlineGainMult:1 + Math.min(.05, (above('badminton-reset') + above('landing-picture')) * .0025),
      upgradeCostMult:1 - Math.min(.04, above('decision-recovery') * .004),
      bossDamageMult:1 + Math.min(.06, above('pressure-ladder') * .006),
      passiveEfficiencyMult:1 + Math.min(.06, (above('shuttle-first') + above('four-corner')) * .003),
      enemyRevealChance:Math.min(.08, (above('rally-pattern') + above('opponent-balance')) * .004),
      clueDropChance:Math.min(.05, above('court-recovery') * .005),
      coinGainMult:1 + Math.min(.05, above('opponent-balance') * .005),
      manualDamageMult:1 + Math.min(.06, (above('wait-contact') + above('tempo-break')) * .003),
      shurikenDamageMult:1 + Math.min(.05, above('decision-recovery') * .005),
      unlockedTraits:level >= 5 ? ['Badminton Focused: Visual Discipline'] : []
    };
  }

  function dartsRealmContribution(){
    try{
      if(globalThis.DartsFocusedGames && typeof globalThis.DartsFocusedGames.getRealmContribution === 'function'){
        return globalThis.DartsFocusedGames.getRealmContribution();
      }
    }catch(_error){}
    const profile = readDartsProfile();
    const stats = profile && profile.stats && typeof profile.stats === 'object' ? profile.stats : {};
    const level = Math.max(1, Math.round(Number(profile && profile.level || 1)));
    const gameLevel = function(id){ return Math.max(1, Math.round(Number(stats[id] && stats[id].level || 1))); };
    const above = function(id){ return Math.max(0, gameLevel(id) - 1); };
    const out = {
      level:level,
      linkedLevels:level + ['checkout-pressure','route-recovery','target-lock','hold-picture','distraction-resistance','pressure-ladder','board-geography','routine-builder','sequence-recall','decision-training'].reduce(function(sum,id){ return sum + above(id); },0),
      attackMult:1 + Math.min(.05, above('pressure-ladder') * .005),
      critChance:Math.min(.075, (above('target-lock') * .005) + (above('decision-training') * .0025)),
      offlineGainMult:1 + Math.min(.06, above('routine-builder') * .006),
      upgradeCostMult:1 - Math.min(.05, above('route-recovery') * .005),
      bossDamageMult:1 + Math.min(.06, above('checkout-pressure') * .006),
      passiveEfficiencyMult:1 + Math.min(.05, above('distraction-resistance') * .005),
      enemyRevealChance:Math.min(.07, above('hold-picture') * .007),
      clueDropChance:Math.min(.05, above('board-geography') * .005),
      coinGainMult:1 + Math.min(.06, above('decision-training') * .006),
      manualDamageMult:1 + Math.min(.05, above('decision-training') * .005),
      shurikenDamageMult:1 + Math.min(.08, above('sequence-recall') * .008),
      unlockedTraits:[]
    };
    if(level >= 5){ out.attackMult += .02; out.coinGainMult += .02; out.unlockedTraits.push('Darts Focused: Match Composure'); }
    if(level >= 10){ out.bossDamageMult += .03; out.manualDamageMult += .03; out.unlockedTraits.push('Darts Focused: Route Discipline'); }
    if(level >= 20){ out.shurikenDamageMult += .04; out.passiveEfficiencyMult += .04; out.unlockedTraits.push('Darts Focused: Pressure Mastery'); }
    return out;
  }

  function resolveNinjaBonuses(){
    if(!profiles.ninja || !profiles.pairs || !profiles.make24 || !profiles.detectword || !profiles.trackcoin || !profiles.ruleshift) return;
    const p = profiles.pairs;
    const m = profiles.make24;
    const w = profiles.detectword;
    const t = profiles.trackcoin;
    const r = profiles.ruleshift;
    const darts = dartsRealmContribution();
    const badminton = badmintonRealmContribution();
    const crossnumber = crossnumberRealmContribution();
    const jigsaws = jigsawRealmContribution();
    const totalLevels = p.level + m.level + w.level + t.level + r.level + Math.max(1, Number(darts.level || 1)) + Math.max(1, Number(badminton.level || 1)) + Math.max(1, Number(crossnumber.level || 1));
    const bonus = {
      attackMult:1,
      critChance:0.02,
      offlineGainMult:1,
      upgradeCostMult:1,
      bossDamageMult:1,
      passiveEfficiencyMult:1,
      enemyRevealChance:0,
      clueDropChance:0,
      coinGainMult:1,
      manualDamageMult:1,
      shurikenDamageMult:1,
      dartsLevel:Math.max(1, Number(darts.level || 1)),
      badmintonLevel:Math.max(1, Number(badminton.level || 1)),
      crossnumberLevel:Math.max(1, Number(crossnumber.level || 1)),
      jigsawPassivePct:Math.max(0, Number(jigsaws.passivePct || 0)),
      unlockedTraits:[]
    };

    bonus.critChance += Math.min(0.06, p.level * 0.0015);
    bonus.offlineGainMult += Math.min(0.12, w.level * 0.003);
    bonus.upgradeCostMult -= Math.min(0.06, m.level * 0.0015);
    bonus.passiveEfficiencyMult += Math.min(0.10, t.level * 0.0025);
    bonus.attackMult += Math.min(0.08, totalLevels * 0.0008);
    bonus.passiveEfficiencyMult += Math.min(0.08, r.level * 0.002);

    if(p.level >= 5){ bonus.critChance += 0.04; bonus.unlockedTraits.push('Pairs: Pattern Read (+4% crit chance)'); }
    if(p.level >= 10){ bonus.attackMult += 0.04; bonus.unlockedTraits.push('Pairs: Combo Retention (+4% attack)'); }
    if(p.level >= 20){ bonus.critChance += 0.04; bonus.enemyRevealChance += 0.08; bonus.unlockedTraits.push('Pairs: Deep Recall (+4% crit, +8% reveal)'); }
    if(p.skills.insight >= 2){ bonus.enemyRevealChance += 0.08; }
    if(p.skills.tempo >= 1){ bonus.attackMult += 0.03; }
    if(p.boardsCleared >= 20){ bonus.enemyRevealChance += 0.06; }

    if(w.level >= 5){ bonus.offlineGainMult += 0.08; bonus.unlockedTraits.push('Word: Archive Memory (+8% offline gains)'); }
    if(w.level >= 10){ bonus.passiveEfficiencyMult += 0.05; bonus.unlockedTraits.push('Word: Quiet Routine (+5% passive efficiency)'); }
    if(w.level >= 20){ bonus.offlineGainMult += 0.10; bonus.clueDropChance += 0.08; bonus.unlockedTraits.push('Word: Research Engine (+10% offline gains)'); }
    if(w.skills.focus >= 2){ bonus.passiveEfficiencyMult += 0.05; }
    if(w.wordsSolved >= 25){ bonus.clueDropChance += 0.08; }

    if(m.level >= 5){ bonus.upgradeCostMult -= 0.04; bonus.unlockedTraits.push('Make The Number: Clean Purchasing (-4% upgrade costs)'); }
    if(m.level >= 10){ bonus.bossDamageMult += 0.10; bonus.unlockedTraits.push('Make The Number: Boss Solver (+10% boss damage)'); }
    if(m.level >= 20){ bonus.attackMult += 0.08; bonus.unlockedTraits.push('Make The Number: Tactical Routing (+8% attack)'); }
    if(m.skills.precision >= 2){ bonus.upgradeCostMult -= 0.03; }
    if(m.puzzlesSolved >= 25){ bonus.bossDamageMult += 0.06; }

    if(t.level >= 5){ bonus.passiveEfficiencyMult += 0.03; bonus.unlockedTraits.push('Coin: Tracking Focus (+3% passive efficiency)'); }
    if(t.level >= 10){ bonus.attackMult += 0.03; bonus.unlockedTraits.push('Coin: Quick Lift (+3% attack)'); }
    if(t.level >= 20){ bonus.clueDropChance += 0.06; bonus.unlockedTraits.push('Coin: Clean Take (+6% clue drops)'); }
    if((t.skills.read || 0) > 0){ bonus.passiveEfficiencyMult += Math.min(0.04, (t.skills.read || 0) * 0.01); }
    if((t.skills.steal || 0) > 0){ bonus.attackMult += Math.min(0.05, (t.skills.steal || 0) * 0.01); }
    if(t.bestStreak >= 12){ bonus.critChance += 0.03; }
    if((t.totalRounds >= 20 && ((t.totalCorrect / Math.max(1, t.totalRounds)) >= 0.85)) || t.bestStreak >= 20){ bonus.unlockedTraits.push('Track the Coin: Pace Discipline (+tempo to attack flow)'); }

    if(r.level >= 5){ bonus.passiveEfficiencyMult += 0.03; bonus.unlockedTraits.push('Rule Shift: Flexible Focus (+3% passive efficiency)'); }
    if(r.level >= 10){ bonus.attackMult += 0.03; bonus.unlockedTraits.push('Rule Shift: Fast Adaptation (+3% attack)'); }
    if(r.level >= 20){ bonus.clueDropChance += 0.05; bonus.unlockedTraits.push('Rule Shift: Pattern Switch (+5% clue drops)'); }
    if((r.skills.focus || 0) >= 2){ bonus.passiveEfficiencyMult += 0.03; }
    if((r.skills.adapt || 0) >= 2){ bonus.attackMult += 0.03; }
    if(r.bestStreak >= 15){ bonus.critChance += 0.03; }

    bonus.bossDamageMult *= Number(crossnumber.bossDamageMult || 1);
    bonus.clueDropChance += Number(crossnumber.clueDropChance || 0);
    bonus.upgradeCostMult *= Number(crossnumber.upgradeCostMult || 1);
    (crossnumber.unlockedTraits || []).forEach(function(trait){ bonus.unlockedTraits.push(trait); });

    // Jigsaws contribute only passive Realm efficiency. They do not add
    // Jigsaw-specific skills, attack bonuses, tiers or currencies.
    bonus.passiveEfficiencyMult *= Number(jigsaws.passiveEfficiencyMult || 1);
    (jigsaws.unlockedTraits || []).forEach(function(trait){ bonus.unlockedTraits.push(trait); });

    bonus.attackMult *= Number(darts.attackMult || 1);
    bonus.critChance += Number(darts.critChance || 0);
    bonus.offlineGainMult *= Number(darts.offlineGainMult || 1);
    bonus.upgradeCostMult *= Number(darts.upgradeCostMult || 1);
    bonus.bossDamageMult *= Number(darts.bossDamageMult || 1);
    bonus.passiveEfficiencyMult *= Number(darts.passiveEfficiencyMult || 1);
    bonus.enemyRevealChance += Number(darts.enemyRevealChance || 0);
    bonus.clueDropChance += Number(darts.clueDropChance || 0);
    bonus.coinGainMult *= Number(darts.coinGainMult || 1);
    bonus.manualDamageMult *= Number(darts.manualDamageMult || 1);
    bonus.shurikenDamageMult *= Number(darts.shurikenDamageMult || 1);
    (darts.unlockedTraits || []).forEach(function(trait){ bonus.unlockedTraits.push(trait); });

    bonus.attackMult *= Number(badminton.attackMult || 1);
    bonus.critChance += Number(badminton.critChance || 0);
    bonus.offlineGainMult *= Number(badminton.offlineGainMult || 1);
    bonus.upgradeCostMult *= Number(badminton.upgradeCostMult || 1);
    bonus.bossDamageMult *= Number(badminton.bossDamageMult || 1);
    bonus.passiveEfficiencyMult *= Number(badminton.passiveEfficiencyMult || 1);
    bonus.enemyRevealChance += Number(badminton.enemyRevealChance || 0);
    bonus.clueDropChance += Number(badminton.clueDropChance || 0);
    bonus.coinGainMult *= Number(badminton.coinGainMult || 1);
    bonus.manualDamageMult *= Number(badminton.manualDamageMult || 1);
    bonus.shurikenDamageMult *= Number(badminton.shurikenDamageMult || 1);
    (badminton.unlockedTraits || []).forEach(function(trait){ bonus.unlockedTraits.push(trait); });

    if(totalLevels >= 12){ bonus.attackMult += 0.04; bonus.unlockedTraits.push('Games Hub: Shared Discipline (+4% attack)'); }
    if(totalLevels >= 24){ bonus.attackMult += 0.05; bonus.offlineGainMult += 0.05; bonus.unlockedTraits.push('Games Hub: Cross-System Rhythm (+5% attack, +5% offline)'); }

    bonus.critChance = clamp(bonus.critChance, 0.02, 0.35);
    bonus.offlineGainMult = clamp(bonus.offlineGainMult, 1, 1.55);
    bonus.upgradeCostMult = clamp(bonus.upgradeCostMult, 0.68, 1);
    bonus.bossDamageMult = clamp(bonus.bossDamageMult, 1, 1.45);
    bonus.passiveEfficiencyMult = clamp(bonus.passiveEfficiencyMult, 1, 1.34);
    bonus.coinGainMult = clamp(bonus.coinGainMult, 1, 1.18);
    bonus.manualDamageMult = clamp(bonus.manualDamageMult, 1, 1.18);
    bonus.shurikenDamageMult = clamp(bonus.shurikenDamageMult, 1, 1.18);
    profiles.ninja.bonusCache = bonus;
    return bonus;
  }

  function ninjaEnemyMaxHp(stage){
    const base = 18 + (stage * 11) + (Math.pow(stage, 1.26) * 4);
    return Math.round((stage % 10 === 0 ? base * 3.6 : base));
  }

  function ninjaEnemyReward(stage){
    const base = 6 + (stage * 2.2) + Math.pow(stage, 1.12);
    return Math.round(stage % 10 === 0 ? base * 4 : base);
  }

  function ninjaUpgradeCost(upgradeId, level){
    const def = NINJA_UPGRADES.find(item => item.id === upgradeId);
    const cost = Math.round(def.baseCost * Math.pow(def.growth, level));
    return Math.max(1, Math.round(cost * (profiles.ninja.bonusCache.upgradeCostMult || 1)));
  }

  function ninjaSpiritShopLevel(profile, upgradeId){
    return Math.max(0, Math.round(Number(((profile.spiritShop || {})[upgradeId]) || 0)));
  }

  function ninjaSpiritUpgradeCost(upgradeId, currentLevel){
    const item = NINJA_SPIRIT_SHOP.find(function(entry){ return entry.id === upgradeId; });
    if(!item) return Number.POSITIVE_INFINITY;
    return Math.max(1, Math.round(item.baseCost * Math.pow(item.growth, Math.max(0, currentLevel))));
  }

  function ninjaSpiritAttackMultiplier(profile){ return 1 + (ninjaSpiritShopLevel(profile, 'focus') * 0.08); }

  function ninjaSpiritCoinMultiplier(profile){ return 1 + (ninjaSpiritShopLevel(profile, 'fortune') * 0.08); }

  function ninjaSpiritOfflineMultiplier(profile){ return 1 + (ninjaSpiritShopLevel(profile, 'vigor') * 0.10) + (ninjaSpiritShopLevel(profile, 'ember') * 0.05); }


  function ninjaSpiritCampMultiplier(profile){ return 1 + (ninjaSpiritShopLevel(profile, 'tents') * 0.06); }

  function ninjaBaseDps(profile){
    const bonus = profile.bonusCache || resolveNinjaBonuses() || { attackMult:1, critChance:0.02 };
    const bladeFlat = 1 + (profile.upgrades.blade * 1.4);
    const drillsMult = 1 + (profile.upgrades.drills * 0.08);
    const spiritMult = 1 + (profile.spirit * 0.06);
    const critAvg = 1 + (bonus.critChance * 0.75);
    return bladeFlat * drillsMult * spiritMult * ninjaSpiritAttackMultiplier(profile) * ninjaSpiritCampMultiplier(profile) * (bonus.attackMult || 1) * critAvg;
  }

  function ninjaOfflineGainFactor(profile){
    const bonus = profile.bonusCache || resolveNinjaBonuses() || { offlineGainMult:1, passiveEfficiencyMult:1 };
    return (1 + (profile.upgrades.meditation * 0.08)) * ninjaSpiritOfflineMultiplier(profile) * (bonus.offlineGainMult || 1) * (bonus.passiveEfficiencyMult || 1);
  }

  function ninjaCoinFactor(profile){
    const bonus = profile.bonusCache || resolveNinjaBonuses() || {};
    return (1 + (profile.upgrades.treasury * 0.10)) * ninjaSpiritCoinMultiplier(profile) * (bonus.coinGainMult || 1);
  }

  function buyNinjaSpiritUpgrade(upgradeId){
    const profile = profiles.ninja;
    const currentLevel = ninjaSpiritShopLevel(profile, upgradeId);
    const cost = ninjaSpiritUpgradeCost(upgradeId, currentLevel);
    if(profile.spirit < cost) return;
    profile.spirit -= cost;
    profile.spiritShop = normaliseSpiritShop(profile.spiritShop);
    profile.spiritShop[upgradeId] = currentLevel + 1;
    pendingOfflineSummary = 'Spirit blessing learned in the Spirit Shop.';
    scheduleSave('ninja');
    renderAll();
  }

  function ninjaXpForStage(stage){
    return Math.max(6, Math.round(8 + (stage * 1.5)));
  }

  function ninjaAddXp(profile, xpGain){
    let gainedLevels = 0;
    profile.xp += Math.max(0, Math.round(xpGain || 0));
    while(profile.xp >= xpNeededForLevel(profile.level)){
      profile.xp -= xpNeededForLevel(profile.level);
      profile.level += 1;
      gainedLevels += 1;
    }
    return gainedLevels;
  }

  function ensureNinjaEnemy(profile){
    if(!(profile.enemyHp > 0)) profile.enemyHp = ninjaEnemyMaxHp(profile.stage);
  }

  function advanceNinja(profile, elapsedSeconds, offline){
    const seconds = Math.max(0, Number(elapsedSeconds || 0));
    if(seconds <= 0) return { coins:0, kills:0, stages:0, bosses:0 };
    ensureNinjaEnemy(profile);
    const summary = { coins:0, kills:0, stages:0, bosses:0 };
    let remaining = offline ? Math.min(seconds, 60 * 60 * 12) : Math.min(seconds, 8);
    let loops = 0;
    while(remaining > 1e-6 && loops < 9000){
      loops += 1;
      const bonus = profile.bonusCache || resolveNinjaBonuses() || {};
      const combatFactor = offline ? (0.82 * ninjaOfflineGainFactor(profile)) : 1;
      const dps = Math.max(0.2, ninjaBaseDps(profile) * combatFactor * (profile.stage % 10 === 0 ? (bonus.bossDamageMult || 1) * (1 + profile.upgrades.breaker * 0.12) : 1));
      const hp = Math.max(0.1, profile.enemyHp);
      const timeToKill = hp / dps;
      if(timeToKill > remaining){
        profile.enemyHp = hp - (dps * remaining);
        remaining = 0;
        break;
      }
      remaining -= timeToKill;
      profile.currentStreak += 1;
      profile.cleanWinStreak += 1;
      profile.bestStreak = Math.max(profile.bestStreak, profile.currentStreak);
      const cleanMult = 1 + (cleanWinBonusPct(profile.cleanWinStreak) / 100);
      const reward = ninjaEnemyReward(profile.stage) * ninjaCoinFactor(profile) * (offline ? ninjaOfflineGainFactor(profile) : 1) * cleanMult;
      const rewardRounded = Math.round(reward);
      profile.coins += rewardRounded;
      profile.totalCoinsEarned += rewardRounded;
      summary.coins += rewardRounded;
      summary.kills += 1;
      profile.totalKills += 1;
      ninjaAddXp(profile, Math.round(ninjaXpForStage(profile.stage) * cleanMult));
      if(profile.stage % 10 === 0){ summary.bosses += 1; profile.bossesDefeated += 1; }
      profile.stage += 1;
      summary.stages += 1;
      profile.highestStage = Math.max(profile.highestStage, profile.stage);
      profile.enemyHp = ninjaEnemyMaxHp(profile.stage);
    }
    profile.lastSeenAt = Date.now();
    return summary;
  }

  function applyOfflineNinjaProgress(){
    const profile = profiles.ninja;
    if(!profile) return;
    ensureNinjaEnemy(profile);
    const now = Date.now();
    const lastSeen = profile.lastSeenAt || now;
    const elapsed = Math.max(0, Math.floor((now - lastSeen) / 1000));
    if(elapsed > 0){
      const summary = advanceNinja(profile, elapsed, true);
      pendingOfflineSummary = summary.coins > 0 || summary.stages > 0 ? ('Offline progress: +' + formatInt(summary.coins) + ' coins · +' + formatInt(summary.stages) + ' stages · ' + formatInt(summary.kills) + ' clears.') : 'Offline progress was minimal.';
      scheduleSave('ninja');
    }
    profile.lastSeenAt = now;
    lastNinjaLoopAt = now;
  }

  function startNinjaLoop(){
    if(ninjaTimer) window.clearInterval(ninjaTimer);
    ninjaTimer = window.setInterval(function(){
      const profile = profiles.ninja;
      if(!profile) return;
      const now = Date.now();
      const elapsed = Math.max(0, (now - lastNinjaLoopAt) / 1000);
      lastNinjaLoopAt = now;
      const summary = advanceNinja(profile, elapsed, false);
      if(summary.coins > 0 || summary.kills > 0) scheduleSave('ninja');
      renderNinja();
      renderHubSummary();
      renderGamesList();
    syncHashState();
    }, 1000);
  }

  function ninjaBuyMode(upgradeId){
    return NINJA_BUY_MODES.includes(ninjaBuyModes[upgradeId]) ? ninjaBuyModes[upgradeId] : '1x';
  }

  function cycleNinjaBuyMode(upgradeId){
    const current = ninjaBuyMode(upgradeId);
    const next = NINJA_BUY_MODES[(NINJA_BUY_MODES.indexOf(current) + 1) % NINJA_BUY_MODES.length];
    ninjaBuyModes[upgradeId] = next;
    renderNinja();
  }

  function ninjaUpgradeTotalCost(upgradeId, startLevel, count){
    let total = 0;
    for(let i = 0; i < count; i += 1) total += ninjaUpgradeCost(upgradeId, startLevel + i);
    return total;
  }

  function ninjaAffordableCount(upgradeId, startLevel, coins){
    let count = 0;
    let total = 0;
    while(count < 999){
      const next = ninjaUpgradeCost(upgradeId, startLevel + count);
      if(total + next > coins) break;
      total += next;
      count += 1;
    }
    return count;
  }

  function ninjaRequestedBuyCount(upgradeId, profile){
    const mode = ninjaBuyMode(upgradeId);
    const level = profile.upgrades[upgradeId] || 0;
    if(mode === '5x') return Math.min(5, ninjaAffordableCount(upgradeId, level, profile.coins));
    if(mode === '20x') return Math.min(20, ninjaAffordableCount(upgradeId, level, profile.coins));
    if(mode === 'max') return ninjaAffordableCount(upgradeId, level, profile.coins);
    return Math.min(1, ninjaAffordableCount(upgradeId, level, profile.coins));
  }

  function buyNinjaUpgrade(upgradeId){
    const profile = profiles.ninja;
    const currentLevel = profile.upgrades[upgradeId] || 0;
    const count = ninjaRequestedBuyCount(upgradeId, profile);
    if(count <= 0) return;
    const cost = ninjaUpgradeTotalCost(upgradeId, currentLevel, count);
    if(profile.coins < cost) return;
    profile.coins -= cost;
    profile.upgrades[upgradeId] += count;
    scheduleSave('ninja');
    renderNinja();
  }

  function ninjaPrestigeGain(){
    const profile = profiles.ninja;
    const upgradeTotal = sum(Object.values(profile.upgrades));
    return Math.max(0, Math.floor(profile.highestStage / 15) + Math.floor(upgradeTotal / 10) - profile.prestigeCount);
  }

  function performNinjaPrestige(){
    const profile = profiles.ninja;
    const gain = ninjaPrestigeGain();
    if(gain <= 0 || profile.highestStage < 35) return;
    profile.spirit += gain;
    profile.prestigeEarnedTotal += gain;
    profile.prestigeCount += 1;
    profile.coins = 0;
    profile.level = 1;
    profile.xp = 0;
    profile.stage = 1;
    profile.currentStreak = 0;
    profile.cleanWinStreak = 0;
    profile.enemyHp = ninjaEnemyMaxHp(1);
    profile.upgrades = { blade:0, drills:0, treasury:0, meditation:0, breaker:0 };
    profile.lastSeenAt = Date.now();
    pendingOfflineSummary = 'Rebirth complete. Level and stage reset to 1. +' + gain + ' Spirit granted.';
    scheduleSave('ninja');
    renderAll();
  }

  function ninjaBonusLines(){
    const bonus = profiles.ninja.bonusCache || resolveNinjaBonuses() || {};
    const stealReady = (bonus.unlockedTraits || []).some(item => item.indexOf('Track the Coin: Pace Discipline') === 0);
    return [
      { label:'Pairs Passive', text:'Levels add crit chance. Current gain: +' + Math.round(((bonus.critChance || 0.02) - 0.02) * 100) + '% crit chance · ' + Math.round((bonus.enemyRevealChance || 0) * 100) + '% reveal chance' },
      { label:'Detect The Word Passive', text:'Levels add offline gains. Current gain: +' + Math.round(((bonus.offlineGainMult || 1) - 1) * 100) + '% offline gains · +' + Math.round(((bonus.passiveEfficiencyMult || 1) - 1) * 100) + '% passive efficiency' },
      { label:'Make The Number Passive', text:'Levels reduce costs and strengthen boss-solving pressure. Current gain: ' + Math.round(((1 - (bonus.upgradeCostMult || 1)) * 100)) + '% cost reduction · +' + Math.round(((bonus.bossDamageMult || 1) - 1) * 100) + '% boss damage' },
      { label:'Track the Coin Passive', text:'Levels add passive efficiency and tempo. Pace path ' + (stealReady ? 'ready' : 'in progress') },
      { label:'Darts Focused Passive', text:'All 10 distinct games develop separate mastery levels and selectable tiers. Darts level ' + Math.round(bonus.dartsLevel || 1) + ' · coin ×' + (bonus.coinGainMult || 1).toFixed(2) + ' · Dash Cut ×' + (bonus.manualDamageMult || 1).toFixed(2) + ' · Shuriken ×' + (bonus.shurikenDamageMult || 1).toFixed(2) },
      { label:'Games Hub Passive', text:'Shared levels add global attack. Current attack multiplier ×' + (bonus.attackMult || 1).toFixed(2) + ' · total linked levels ' + (profiles.pairs.level + profiles.make24.level + profiles.detectword.level + profiles.trackcoin.level + profiles.ruleshift.level + Math.round(bonus.dartsLevel || 1)) }
    ];
  }

  function ninjaEnemyVisual(stage){
    if(stage % 10 === 0) return { kind:'boss', label:'Hollow-Crown Warden', stageName:'Warden’s Deepwood', runState:'' };
    if(stage % 5 === 0) return { kind:'raider', label:'Gloam-Rope Raider', stageName:'Lantern-Moss Run', runState:'' };
    return { kind:'scout', label:'Mossblade Pursuer', stageName:'Cedar-Root Passage', runState:'' };
  }

  function ninjaManualStrikeDamage(profile){
    const bonus = profile.bonusCache || resolveNinjaBonuses() || {};
    return Math.max(0.1, ninjaBaseDps(profile) * 0.65 * (bonus.manualDamageMult || 1));
  }

  function ninjaShurikenDamage(profile){
    const bonus = profile.bonusCache || resolveNinjaBonuses() || {};
    return Math.max(0.1, ninjaBaseDps(profile) * 0.325 * (bonus.shurikenDamageMult || 1));
  }

  function applyNinjaManualDamage(damage){
    const profile = profiles.ninja;
    if(!profile) return;
    ensureNinjaEnemy(profile);
    profile.enemyHp = Math.max(0.0001, profile.enemyHp - Math.max(0, Number(damage || 0)));
    if(profile.enemyHp <= 0.0001) advanceNinja(profile, 0.001, false);
  }

  function animateNinjaShuriken(index){
    const layer = document.getElementById('ninjaShurikenLayer');
    if(!layer) return;
    const projectile = document.createElement('span');
    projectile.className = 'ninja-shuriken-projectile';
    projectile.style.setProperty('--shuriken-lane', String((index % 5) - 2));
    projectile.style.setProperty('--shuriken-spin', String(520 + (index * 54)) + 'deg');
    layer.appendChild(projectile);
    window.setTimeout(function(){ projectile.remove(); }, 920);
  }

  function updateNinjaShurikenButton(nowValue){
    const button = document.getElementById('ninjaShurikenBtn');
    const status = document.getElementById('ninjaShurikenCooldownText');
    if(!button) return;
    const now = Number(nowValue || Date.now());
    const remaining = Math.max(0, ninjaShurikenReadyAt - now);
    const progress = remaining > 0 ? clamp((1 - (remaining / NINJA_SHURIKEN_COOLDOWN_MS)) * 100, 0, 100) : 100;
    button.style.setProperty('--cooldown-progress', progress.toFixed(2) + '%');
    button.disabled = ninjaShurikenVolleyActive || remaining > 0 || realmView !== 'training';
    button.setAttribute('aria-busy', String(ninjaShurikenVolleyActive));
    button.setAttribute('aria-label', remaining > 0 ? ('Shuriken recharging. ' + (remaining / 1000).toFixed(1) + ' seconds remaining.') : 'Shuriken ready.');
    if(status) status.textContent = remaining > 0 ? ((remaining / 1000).toFixed(1) + 's') : (ninjaShurikenVolleyActive ? 'Volley' : 'Ready');
  }

  function runNinjaShurikenCooldownFrame(){
    if(ninjaShurikenCooldownFrame) return;
    function frame(now){
      ninjaShurikenCooldownFrame = 0;
      updateNinjaShurikenButton(Date.now());
      if(Date.now() < ninjaShurikenReadyAt){
        ninjaShurikenCooldownFrame = window.requestAnimationFrame(frame);
      }
    }
    ninjaShurikenCooldownFrame = window.requestAnimationFrame(frame);
  }

  function performNinjaShurikenVolley(){
    const profile = profiles.ninja;
    const now = Date.now();
    if(!profile || realmView !== 'training' || ninjaShurikenVolleyActive || now < ninjaShurikenReadyAt) return;
    const volleyToken = ++ninjaShurikenVolleyToken;
    ninjaShurikenVolleyActive = true;
    ninjaShurikenReadyAt = now + NINJA_SHURIKEN_COOLDOWN_MS;
    updateNinjaShurikenButton(now);
    runNinjaShurikenCooldownFrame();
    const hitDelay = NINJA_SHURIKEN_VOLLEY_HITS > 1 ? NINJA_SHURIKEN_VOLLEY_MS / (NINJA_SHURIKEN_VOLLEY_HITS - 1) : 0;
    for(let index = 0; index < NINJA_SHURIKEN_VOLLEY_HITS; index += 1){
      window.setTimeout(function(){
        const currentProfile = profiles.ninja;
        if(!currentProfile || volleyToken !== ninjaShurikenVolleyToken || realmView !== 'training') return;
        animateNinjaShuriken(index);
        ninjaAnimationTick = Date.now();
        applyNinjaManualDamage(ninjaShurikenDamage(currentProfile));
        scheduleSave('ninja');
        renderNinja();
        renderHubSummary();
        if(index === NINJA_SHURIKEN_VOLLEY_HITS - 1){
          ninjaShurikenVolleyActive = false;
          updateNinjaShurikenButton(Date.now());
        }
      }, Math.round(index * hitDelay));
    }
  }

function setRealmView(view){
  const nextView = ['training','basecamp','exploration','workshop'].includes(view) ? view : 'training';
  if(realmView === 'training' && nextView !== 'training'){
    ninjaShurikenVolleyToken += 1;
    ninjaShurikenVolleyActive = false;
  }
  realmView = nextView;
  if(realmView !== 'training' && !realmDrawerTabsForView(realmView).includes(realmDrawerTab)) realmDrawerTab = defaultRealmDrawerTabForView(realmView);
  if(realmView === 'training' && !realmDrawerTabsForView('training').includes(realmDrawerTab)) realmDrawerTab = 'upgrades';
  if(realmView !== 'training') realmDrawerOpen = false;
  if(realmView === 'workshop') realmDrawerOpen = false;
  if(realmView !== 'basecamp') document.getElementById('realmPanelDrawer')?.removeAttribute('data-basecamp-service');
  renderRealmChrome();
}

function setRealmDrawerTab(tab){
  const allowed = realmDrawerTabsForView(realmView);
  if(!allowed.length) return;
  realmDrawerTab = allowed.includes(tab) ? tab : allowed[0];
  realmDrawerOpen = true;
  renderRealmChrome();
}

function toggleRealmDrawer(forceState){
  if(realmView === 'workshop' || realmView === 'exploration') return;
  realmDrawerOpen = typeof forceState === 'boolean' ? forceState : !realmDrawerOpen;
  if(!realmDrawerOpen) document.getElementById('realmPanelDrawer')?.removeAttribute('data-basecamp-service');
  if(realmDrawerOpen && !realmDrawerTabsForView(realmView).includes(realmDrawerTab)) realmDrawerTab = defaultRealmDrawerTabForView(realmView);
  renderRealmChrome();
}

function renderRealmSpiritShop(profile){
  const balance = document.getElementById('realmSpiritShopBalance');
  const list = document.getElementById('realmSpiritShopList');
  if(balance) balance.textContent = String(profile.spirit);
  if(!list) return;
  list.innerHTML = NINJA_SPIRIT_SHOP.map(function(item){
    const level = ninjaSpiritShopLevel(profile, item.id);
    const cost = ninjaSpiritUpgradeCost(item.id, level);
    const canBuy = profile.spirit >= cost;
    return '<article class="realm-spirit-card"><h5>' + item.name + '</h5><p>' + item.description + '</p><span class="inline-note">Level ' + level + ' · ' + item.summary(level) + '</span><button class="action' + (canBuy ? '' : ' secondary') + '" data-ninja-spirit-upgrade="' + item.id + '" type="button"' + (canBuy ? '' : ' disabled') + '>Buy · ' + cost + ' Spirit</button></article>';
  }).join('');
}

function setRealmSurfaceState(element, active){
  if(!element) return;
  element.hidden = !active;
  element.setAttribute('aria-hidden', String(!active));
}

function renderRealmChrome(){
  const frame = document.getElementById('realmSceneFrame');
  const drawer = document.getElementById('realmPanelDrawer');
  const menuBtn = document.getElementById('realmMenuBtn');
  const basecampBtn = document.getElementById('realmBasecampBtn');
  const ninjaScene = document.getElementById('ninjaScene');
  const basecamp = document.getElementById('realmBasecampScreen');
  const trainingHud = document.getElementById('realmTrainingHud');
  const exploration = document.getElementById('realmExplorationScreen');
  const workshop = document.getElementById('realmWorkshopScreen');
  const trainingRow = document.getElementById('realmTrainingTabRow');
  const basecampRow = document.getElementById('realmBasecampTabRow');
  if(frame){
    frame.dataset.realmView = realmView;
    frame.classList.toggle('is-drawer-open', realmDrawerOpen);
    frame.classList.toggle('is-training-view', realmView === 'training');
    frame.classList.toggle('is-basecamp-view', realmView === 'basecamp');
    frame.classList.toggle('is-exploration-view', realmView === 'exploration');
    frame.classList.toggle('is-workshop-view', realmView === 'workshop');
  }
  const trainingBar = document.getElementById('realmTrainingBar');
  const basecampBar = document.getElementById('realmBasecampBar');
  const explorationBar = document.getElementById('realmExplorationBar');
  const workshopBar = document.getElementById('realmWorkshopBar');
  const enemyStatus = document.getElementById('realmCommandEnemyStatus');
  setRealmSurfaceState(trainingBar, realmView === 'training');
  setRealmSurfaceState(basecampBar, realmView === 'basecamp');
  setRealmSurfaceState(explorationBar, realmView === 'exploration');
  setRealmSurfaceState(workshopBar, realmView === 'workshop');
  setRealmSurfaceState(enemyStatus, realmView === 'training');
  if(drawer){
    drawer.hidden = !realmDrawerOpen;
    drawer.setAttribute('aria-hidden', String(!realmDrawerOpen));
  }
  if(menuBtn){ menuBtn.hidden = realmView === 'workshop' || realmView === 'exploration'; menuBtn.setAttribute('aria-pressed', String(realmDrawerOpen)); }
  if(basecampBtn){
    const atBasecamp = realmView === 'basecamp';
    basecampBtn.hidden = atBasecamp;
    basecampBtn.setAttribute('aria-hidden', String(atBasecamp));
  }
  setRealmSurfaceState(ninjaScene, realmView === 'training');
  setRealmSurfaceState(basecamp, realmView === 'basecamp');
  setRealmSurfaceState(trainingHud, realmView === 'training');
  setRealmSurfaceState(exploration, realmView === 'exploration');
  setRealmSurfaceState(workshop, realmView === 'workshop');
  if(trainingRow) trainingRow.hidden = realmView !== 'training';
  if(basecampRow) basecampRow.hidden = realmView !== 'basecamp';
  const trainingOnlyTabs = ['upgrades','spirit','skills','bonuses','rebirth','stats'];
  qsa('#realmTrainingTabRow [data-realm-tab]').forEach(function(btn){
    btn.hidden = !trainingOnlyTabs.includes(btn.getAttribute('data-realm-tab') || '');
  });
  const title = document.getElementById('realmDrawerTitle');
  const note = document.getElementById('realmDrawerNote');
  if(title) title.textContent = realmView === 'training' ? 'Ninja Training Management' : 'Basecamp Management';
  if(note){ note.textContent = ''; note.hidden = true; }
  const paneMap = {
    upgrades:'realmDrawerUpgrades', spirit:'realmDrawerSpirit', skills:'realmDrawerSkills', bonuses:'realmDrawerBonuses', rebirth:'realmDrawerRebirth', stats:'realmDrawerStats',
    settlement:'realmDrawerSettlement', workshop:'realmDrawerWorkshop', stores:'realmDrawerStores', expeditions:'realmDrawerExpeditions'
  };
  Object.keys(paneMap).forEach(function(key){ const pane=document.getElementById(paneMap[key]); if(pane) pane.hidden = !(realmDrawerOpen && realmDrawerTab === key); });
  qsa('[data-realm-tab]').forEach(function(btn){ btn.classList.toggle('is-active', btn.getAttribute('data-realm-tab') === realmDrawerTab); });
  qsa('[data-realm-view]').forEach(function(btn){ btn.setAttribute('aria-pressed', String(btn.getAttribute('data-realm-view') === realmView)); });
  const label = document.querySelector('#realmMenuBtn .realm-fab__label');
  if(label) label.textContent = realmView === 'training' ? 'Training Management [M]' : 'Camp Management [M]';
  renderRealmAuxiliary(profiles.ninja || defaultNinjaProfile());
}

function showNinjaOfflineToast(message){
    const toast=document.getElementById('ninjaOfflineToast'); const text=String(message||'').trim(); if(!toast||!text) return;
    toast.textContent=text; toast.hidden=false; toast.classList.remove('is-live'); void toast.offsetWidth; toast.classList.add('is-live');
    if(ninjaOfflineToastTimer) clearTimeout(ninjaOfflineToastTimer);
    ninjaOfflineToastTimer=window.setTimeout(function(){ toast.classList.remove('is-live'); window.setTimeout(function(){ toast.hidden=true; },360); },10000);
  }

  function toggleRealmFullscreen(){
    const frame = document.getElementById('realmSceneFrame') || document.getElementById('realmWindow');
    if(!frame || !document.fullscreenEnabled || typeof frame.requestFullscreen !== 'function') return;
    if(document.fullscreenElement){
      document.exitFullscreen().catch(function(){});
    }else{
      frame.requestFullscreen().then(function(){
        try{ frame.focus({ preventScroll:true }); }catch(_error){}
        syncRealmFullscreenControls();
      }).catch(function(){});
    }
  }

  function renderNinja(){
    const profile = profiles.ninja;
    if(!profile) return;
    const bonus = profile.bonusCache || resolveNinjaBonuses() || {};
    ensureNinjaEnemy(profile);
    const needed = xpNeededForLevel(profile.level);
    if(refs.ninjaXpFill) refs.ninjaXpFill.style.width = clamp((profile.xp / needed) * 100, 0, 100) + '%';
    if(refs.ninjaXpMeta) refs.ninjaXpMeta.textContent = 'Level ' + profile.level + ' - Experience ' + formatInt(profile.xp) + ' / ' + formatInt(needed) + ' - Clean Bonus +' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    if(refs.ninjaLevelValue) refs.ninjaLevelValue.textContent = String(profile.level);
    if(refs.ninjaStageValue) refs.ninjaStageValue.textContent = String(profile.stage);
    const realmCoinsValue = document.getElementById('realmCoinsValue'); if(realmCoinsValue) realmCoinsValue.textContent = formatInt(profile.coins);
    if(refs.ninjaDpsValue) refs.ninjaDpsValue.textContent = ninjaBaseDps(profile).toFixed(1);
    if(refs.ninjaOfflineRateValue) refs.ninjaOfflineRateValue.textContent = '×' + ninjaOfflineGainFactor(profile).toFixed(2);
    if(refs.ninjaSpiritValue) refs.ninjaSpiritValue.textContent = String(profile.spirit);
    if(refs.ninjaCleanStreakValue) refs.ninjaCleanStreakValue.textContent = String(profile.cleanWinStreak);
    if(refs.ninjaCleanBonusValue) refs.ninjaCleanBonusValue.textContent = '+' + cleanWinBonusPct(profile.cleanWinStreak) + '%';
    if(refs.ninjaBossesValue) refs.ninjaBossesValue.textContent = String(profile.bossesDefeated);
    if(refs.ninjaHighestStageValue) refs.ninjaHighestStageValue.textContent = String(profile.highestStage);
    const enemyVisual = ninjaEnemyVisual(profile.stage);
    if(refs.ninjaEnemyLabel) refs.ninjaEnemyLabel.textContent = enemyVisual.label;
    if(refs.ninjaEnemyTypeValue) refs.ninjaEnemyTypeValue.textContent = enemyVisual.label;
    const ninjaScene = document.getElementById('ninjaScene');
    if(ninjaScene){ ninjaScene.classList.toggle('is-boss', profile.stage % 10 === 0); ninjaScene.classList.toggle('is-pulse', (Date.now() - ninjaAnimationTick) < 320); }
    if(refs.ninjaEnemyWrap){
      refs.ninjaEnemyWrap.dataset.enemyKind = enemyVisual.kind;
      refs.ninjaEnemyWrap.setAttribute('aria-label', enemyVisual.label);
    }
    const stageNameEl = document.getElementById('ninjaSceneStageName');
    const runStateEl = document.getElementById('ninjaRunStateValue');
    if(stageNameEl) stageNameEl.textContent = enemyVisual.stageName;
    if(runStateEl) runStateEl.textContent = 'Ninja Training · Stage ' + profile.stage + ' · DPS ' + ninjaBaseDps(profile).toFixed(1) + ' · Spirit ' + profile.spirit;
    const maxHp = ninjaEnemyMaxHp(profile.stage);
    const enemyPct = clamp((profile.enemyHp / maxHp) * 100, 0, 100);
    if(refs.ninjaEnemyHpFill) refs.ninjaEnemyHpFill.style.width = enemyPct + '%';
    const enemyHpText = formatInt(profile.enemyHp) + ' / ' + formatInt(maxHp);
    if(refs.ninjaSceneHpValue) refs.ninjaSceneHpValue.textContent = enemyHpText;
    updateNinjaShurikenButton(Date.now());
    const animRecent = (Date.now() - ninjaAnimationTick) < 320;
    if(refs.ninjaRunnerWrap) refs.ninjaRunnerWrap.classList.toggle('is-striking', animRecent);
    if(refs.ninjaEnemyWrap) refs.ninjaEnemyWrap.classList.toggle('is-hit', animRecent);
    if(refs.ninjaHitFlash) refs.ninjaHitFlash.classList.toggle('is-live', animRecent);
    const offlineText = pendingOfflineSummary || 'Idle system ready.';
    if(refs.ninjaOfflineMessage) refs.ninjaOfflineMessage.textContent = offlineText;
    if(lastNinjaOfflineToast !== offlineText){ lastNinjaOfflineToast = offlineText; showNinjaOfflineToast(offlineText); }
    if(refs.ninjaUpgradesList) refs.ninjaUpgradesList.innerHTML = NINJA_UPGRADES.map(up => {
      const lvl = profile.upgrades[up.id] || 0;
      const count = ninjaRequestedBuyCount(up.id, profile);
      const cost = count > 0 ? ninjaUpgradeTotalCost(up.id, lvl, count) : ninjaUpgradeCost(up.id, lvl);
      const canBuy = count > 0 && profile.coins >= cost;
      const hotkey = NINJA_UPGRADE_HOTKEYS[up.id] || '';
      return '<article class="upgrade-item"><div class="skill-meta"><h4>' + up.name + '</h4><span>Level ' + lvl + '</span></div><p>' + up.description + '</p><div class="ninja-buy-row"><button class="action ghost ninja-buy-mode" data-ninja-buy-mode="' + up.id + '" type="button">' + ninjaBuyMode(up.id) + '</button><button class="action' + (canBuy ? '' : ' secondary') + '" data-ninja-upgrade="' + up.id + '" type="button"' + (canBuy ? '' : ' disabled') + '>Buy ' + (count || 1) + ' · ' + formatInt(cost) + ' Coins</button>' + (!isMobileGameViewport() && hotkey ? '<span class="upgrade-hotkey">Hotkey ' + hotkey + '</span>' : '') + '</div></article>';
    }).join('');
    if(refs.ninjaBonusesList) refs.ninjaBonusesList.innerHTML = ninjaBonusLines().map(item => '<div class="ninja-bonus-chip"><strong>' + item.label + '</strong><div class="inline-note">' + item.text + '</div></div>').join('');
    if(refs.ninjaTraitsList) refs.ninjaTraitsList.innerHTML = (bonus.unlockedTraits || []).slice(0, 10).map(item => '<span class="trait-chip">' + escapeHtml(item) + '</span>').join('');
    const gain = ninjaPrestigeGain();
    if(refs.ninjaPrestigeSummary) refs.ninjaPrestigeSummary.innerHTML = '<strong>Rebirth threshold</strong><span class="inline-note">Reach stage 35 or higher to convert run progress into Spirit.</span><span class="inline-note">Current rebirth gain: ' + gain + ' Spirit.</span><span class="inline-note">Rebirths completed: ' + profile.prestigeCount + ' · Lifetime Spirit earned: ' + profile.prestigeEarnedTotal + '</span>';
    if(refs.ninjaPrestigeBtn) refs.ninjaPrestigeBtn.disabled = gain <= 0 || profile.highestStage < 35;
    renderRealmSpiritShop(profile);
    renderRealmAuxiliary(profile);
    renderRealmChrome();
  }

  function renderNinjaSummary(){
    const profile = profiles.ninja;
    return '<details class="game-summary-details" data-summary="ninja"><summary><span>Baseline Realm</span><span class="inline-note">Stage ' + profile.stage + '</span></summary><div class="game-summary-body"><div class="game-summary-row"><span>Highest stage: ' + profile.highestStage + '</span><span>Spirit: ' + profile.spirit + '</span></div><div class="game-summary-row"><span>Total coins earned: ' + formatInt(profile.totalCoinsEarned) + '</span><span>Bosses defeated: ' + profile.bossesDefeated + '</span></div><div class="game-summary-row"><span>Clean win bonus: +' + cleanWinBonusPct(profile.cleanWinStreak) + '%</span><span>Clean streak: ' + profile.cleanWinStreak + '</span></div><div class="game-summary-row"><span>DPS: ' + ninjaBaseDps(profile).toFixed(1) + '</span><span>Offline factor: ×' + ninjaOfflineGainFactor(profile).toFixed(2) + '</span></div><div class="game-summary-row game-summary-row--stack"><span>Resolved bonus traits</span><span>' + (profile.bonusCache.unlockedTraits || []).join(' · ') + '</span></div></div></details>';
  }

  function strike(){
    const profile=profiles.ninja;
    if(!profile || realmView!=='training') return;
    ninjaAnimationTick=Date.now();
    applyNinjaManualDamage(ninjaManualStrikeDamage(profile));
    scheduleSave('ninja');
    renderNinja();
    renderHubSummary();
  }
  function handleDrawer(action){
    if(action==='toggle') toggleRealmDrawer();
    else if(action==='close') toggleRealmDrawer(false);
    else setRealmDrawerTab(action);
  }
  function buyUpgradeByHotkey(key){
    if(realmView!=='training') return;
    const id=Object.keys(NINJA_UPGRADE_HOTKEYS).find(function(upgradeId){ return NINJA_UPGRADE_HOTKEYS[upgradeId]===String(key||''); });
    if(id) buyNinjaUpgrade(id);
  }

  if(typeof document !== 'undefined' && !document.documentElement.hasAttribute('data-realm-darts-link-bound')){
    document.documentElement.setAttribute('data-realm-darts-link-bound','true');
    document.addEventListener('baseline:darts-progress', function(){
      if(!profiles.ninja) return;
      resolveNinjaBonuses();
      renderNinja();
      scheduleSave('ninja');
    });
  }

  if(typeof document !== 'undefined' && !document.documentElement.hasAttribute('data-realm-crossnumber-link-bound')){
    document.documentElement.setAttribute('data-realm-crossnumber-link-bound','true');
    document.addEventListener('baseline:crossnumber-progress', function(){
      if(!profiles.ninja) return;
      resolveNinjaBonuses();
      renderNinja();
      scheduleSave('ninja');
    });
  }

  if(typeof document !== 'undefined' && !document.documentElement.hasAttribute('data-realm-jigsaw-link-bound')){
    document.documentElement.setAttribute('data-realm-jigsaw-link-bound','true');
    document.addEventListener('baseline:jigsaw-progress', function(){
      if(!profiles.ninja) return;
      resolveNinjaBonuses();
      renderNinja();
      scheduleSave('ninja');
    });
  }

  return Object.freeze({
    resolveBonuses:resolveNinjaBonuses, applyOfflineProgress:applyOfflineNinjaProgress, startLoop:startNinjaLoop,
    render:renderNinja, renderSummary:renderNinjaSummary, syncFullscreenControls:syncRealmFullscreenControls,
    toggleFullscreen:toggleRealmFullscreen, setView:setRealmView, openDrawerTab:setRealmDrawerTab, getView:function(){return realmView;},
    cycleBuyMode:cycleNinjaBuyMode, buyUpgrade:buyNinjaUpgrade, buySpiritUpgrade:buyNinjaSpiritUpgrade,
    buyWorkshopUpgrade:buyRealmWorkshopUpgrade, handleDrawer:handleDrawer,
    strike:strike, shuriken:performNinjaShurikenVolley, prestige:performNinjaPrestige, buyUpgradeByHotkey:buyUpgradeByHotkey
  });
}
