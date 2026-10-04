import { ABILITIES, LEVELS, LEVEL_BY_ID, MATERIAL_NAMES, ZONES } from '../data/calorie-escape-data.js';

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const percent = (value, max) => `${Math.max(0, Math.min(100, Number(value || 0) / Math.max(1, Number(max || 1)) * 100)).toFixed(1)}%`;

export const uiMethods = {
  template() {
    return `<div class="ce-game" data-module="calorie-escape">
      <header class="ce-header"><div><span class="ce-kicker">Baseline Realm · Calorie Escape</span><h2>Four-Zone Escape</h2><p>Run toward the camera through City, Desert, Forest, and Snow Mountain routes. Move, jump, attack, and slide while each zone’s pursuer closes in.</p></div><div class="ce-header-actions"><button data-ce-action="sound">Sound</button><button data-ce-action="basecamp">Basecamp [B]</button></div></header>
      <main class="ce-body">
        <section class="ce-menu" id="ceMenu">
          <div class="ce-progress-card"><div><span>Progression Level</span><strong id="ceProgressionLevel"></strong></div><div class="ce-caloric-copy"><span>Caloric Experience remaining</span><b id="ceCaloricText"></b><div class="ce-meter"><span id="ceCaloricFill"></span></div></div><div><span>Ability Points</span><strong id="ceSkillPoints"></strong></div></div>
          <div class="ce-menu-grid">
            <section class="ce-panel"><div class="ce-section-head"><div><span class="ce-kicker">Chase map</span><h3>Zones</h3></div><small>Complete each route to unlock the next level and zone.</small></div><div class="ce-zone-grid" id="ceZoneGrid"></div></section>
            <section class="ce-panel"><div class="ce-section-head"><div><span class="ce-kicker" id="ceLevelZoneKicker">Selected route</span><h3>Levels</h3></div><small>Speed, patterns and pursuer pressure rise each level.</small></div><div class="ce-level-list" id="ceLevelList"></div></section>
            <section class="ce-panel"><div class="ce-section-head"><div><span class="ce-kicker">Progression</span><h3>Abilities</h3></div><small>Level-ups grant ability points.</small></div><div class="ce-ability-list" id="ceAbilityList"></div></section>
            <section class="ce-panel"><div class="ce-section-head"><div><span class="ce-kicker">Shared Workshop</span><h3>Run support</h3></div><small>Food and equipment help but are never required.</small></div><div class="ce-support" id="ceSupport"></div></section>
          </div>
          <div class="ce-start-dock"><div><strong id="ceSelectedTitle"></strong><span id="ceSelectedDescription"></span></div><button class="ce-primary" data-ce-action="start">Start Run</button></div>
        </section>
        <section class="ce-run" id="ceRun" hidden>
          <div class="ce-run-hud"><div><span>Level</span><strong id="ceRunLevel"></strong></div><div><span>Route</span><div class="ce-meter"><span id="ceRunProgressFill"></span></div></div><div><span>Score</span><strong id="ceRunScore"></strong></div><div class="ce-pressure"><span>Pursuer pressure</span><b id="cePressureText"></b><div class="ce-meter ce-meter--pressure"><span id="cePressureFill"></span></div></div></div>
          <div class="ce-stage-shell"><canvas id="calorieEscapeCanvas" width="960" height="540" aria-label="Three-lane Calorie Escape chase"></canvas><div class="ce-readability-key"><span class="is-breakable">Orange + BREAK = breakable</span><span class="is-hazard">Steel + UNBREAKABLE = hazard</span></div><div class="ce-run-toast" id="ceRunToast" hidden></div><div class="ce-pause" id="cePause" hidden><strong>Paused</strong><span>Press P or Escape.</span></div></div>
          <div class="ce-run-footer"><div class="ce-objective"><span>Optional objective</span><strong id="ceObjectiveText"></strong><small id="ceObjectiveProgress"></small></div><div class="ce-control-copy">Move A/D · Jump W/Space · Attack J/X · Slide S</div><div class="ce-touch-controls"><button data-ce-control="left">◀</button><button data-ce-control="right">▶</button><button data-ce-control="jump">Jump</button><button data-ce-control="attack">Attack</button><button data-ce-control="slide">Slide</button></div></div>
        </section>
        <section class="ce-result" id="ceResult" hidden></section>
      </main>
    </div>`;
  },

  q(selector) { return this.root.querySelector(selector); },
  text(id, value) { const node = this.q(`#${id}`); if (node) node.textContent = String(value); },

  renderMenu() {
    this.text('ceProgressionLevel', this.state.progressionLevel);
    this.text('ceSkillPoints', this.state.skillPoints);
    this.text('ceCaloricText', `${this.state.caloricExperienceRemaining} / ${this.state.caloricExperienceTarget} CE`);
    this.q('#ceCaloricFill').style.width = percent(this.state.caloricExperienceTarget - this.state.caloricExperienceRemaining, this.state.caloricExperienceTarget);
    const selectedLevel = LEVEL_BY_ID[this.state.selectedLevelId] || LEVELS[0];
    const selectedZoneId = this.state.selectedZoneId || selectedLevel.zoneId;
    this.q('#ceZoneGrid').innerHTML = ZONES.map((zone) => {
      const unlocked = zone.levels.some((levelId) => this.state.unlockedLevels.includes(levelId));
      const selected = zone.id === selectedZoneId;
      const clears = zone.levels.reduce((total, levelId) => total + Number(this.state.completedLevels[levelId] || 0), 0);
      return `<button class="ce-zone-card is-playable${selected ? ' is-selected' : ''}${unlocked ? '' : ' is-locked'}" data-ce-zone="${zone.id}" style="--zone-a:${zone.palette[0]};--zone-b:${zone.palette[1]};--zone-c:${zone.palette[2]}" ${unlocked ? '' : 'disabled'}><span>${unlocked ? 'Playable route' : 'Complete the previous zone'}</span><h4>${esc(zone.name)}</h4><strong>Pursuer: ${esc(zone.pursuer)}</strong><p>${esc(zone.description)}</p><small>${clears} clears</small></button>`;
    }).join('');
    const zone = ZONES.find((entry) => entry.id === selectedZoneId) || ZONES[0];
    this.text('ceLevelZoneKicker', `${zone.name} route`);
    this.q('#ceLevelList').innerHTML = LEVELS.filter((level) => level.zoneId === zone.id).map((level) => {
      const unlocked = this.state.unlockedLevels.includes(level.id);
      const selected = this.state.selectedLevelId === level.id;
      return `<button class="ce-level-card${selected ? ' is-selected' : ''}${unlocked ? '' : ' is-locked'}" data-ce-level="${level.id}" ${unlocked ? '' : 'disabled'}><span>${esc(zone.name)} ${level.order}</span><strong>${esc(level.name)}</strong><small>${esc(level.subtitle)}</small><div><b>Best ${this.state.bestScores[level.id] || 0}</b><b>Mastery ${this.state.mastery[level.id] || 0}</b><b>Clears ${this.state.completedLevels[level.id] || 0}</b></div></button>`;
    }).join('');
    this.q('#ceAbilityList').innerHTML = ABILITIES.map((ability) => {
      const rank = this.state.abilities[ability.id] || 0;
      const unlocked = this.state.progressionLevel >= ability.unlockLevel;
      return `<article class="ce-ability-card${unlocked ? '' : ' is-locked'}"><div><span>${unlocked ? `Rank ${rank} / ${ability.maxRank}` : `Unlocks level ${ability.unlockLevel}`}</span><strong>${esc(ability.name)}</strong><p>${esc(ability.description)}</p></div><button data-ce-ability="${ability.id}" ${unlocked && this.state.skillPoints > 0 && rank < ability.maxRank ? '' : 'disabled'}>${rank >= ability.maxRank ? 'Maxed' : 'Train'}</button></article>`;
    }).join('');
    const effects = this.resolveEffects() || {};
    const inventory = this.getInventorySummary() || { food: {}, equipment: [] };
    const stew = Number(inventory.food?.trail_stew || 0);
    this.q('#ceSupport').innerHTML = `<div class="ce-support-effects">${Object.keys(effects).length ? Object.entries(effects).map(([key, value]) => `<span><b>${esc(key)}</b> +${Number(value).toFixed(Number(value) < 1 ? 2 : 0)}</span>`).join('') : '<span>No Workshop support active. The run remains fully playable.</span>'}</div><div class="ce-support-equipment"><strong>Compatible equipment</strong><span>${(inventory.equipment || []).map((item) => esc(item.name || item.itemId)).join(' · ') || 'None'}</span></div><button data-ce-action="use-stew" ${stew ? '' : 'disabled'}>Use Trail Stew (${stew})</button>`;
    const selected = LEVEL_BY_ID[this.state.selectedLevelId] || LEVELS[0];
    const selectedZone = ZONES.find((zone) => zone.id === selected.zoneId) || ZONES[0];
    this.text('ceSelectedTitle', `${selectedZone.name} · ${selected.name}`);
    this.text('ceSelectedDescription', `${selected.subtitle} Pursuer: ${selectedZone.pursuer}. Optional: ${selected.objective.label}.`);
  },

  hud() {
    this.text('ceRunScore', Math.round(this.run.score));
    this.q('#ceRunProgressFill').style.width = percent(this.run.time, this.level.duration);
    this.q('#cePressureFill').style.width = percent(this.run.pressure, this.run.pressureCapacity);
    this.text('cePressureText', `${Math.round(this.run.pressure)} / ${Math.round(this.run.pressureCapacity)}`);
    const objective = this.level.objective;
    this.text('ceObjectiveProgress', objective.id === 'break-crates' ? `${this.run.broken} / ${objective.target} broken` : objective.id === 'clean-section' ? `${this.run.hits} / ${objective.target} hits allowed` : `${Math.round(this.run.pressure)} / ${objective.target} pressure target`);
  },

  result(result) {
    this.q('#ceRun').hidden = true;
    this.q('#ceMenu').hidden = true;
    const panel = this.q('#ceResult');
    panel.hidden = false;
    const next = LEVEL_BY_ID[this.state.selectedLevelId];
    const hasNext = result.completed && next && next.id !== result.levelId;
    panel.innerHTML = `<article class="ce-result-card"><span class="ce-kicker">${result.completed ? 'Route complete' : 'Pursuer caught the route'}</span><h3>${result.completed ? `${result.rank} · Escape complete` : 'Pressure reached the limit'}</h3><p>${result.completed ? `${result.caloricBurn} Caloric Experience removed. Replays still earn mastery, materials and rankings.` : 'Failed runs retain score, materials and mastery.'}</p><div class="ce-result-stats"><span><b>${result.score}</b> Score</span><span><b>${result.bestCombo}</b> Chain</span><span><b>${result.hits}</b> Hits</span><span><b>${result.masteryGain}</b> Mastery</span></div><div class="ce-result-materials">${Object.entries(result.materials || {}).map(([key, value]) => `<span>${esc(MATERIAL_NAMES[key] || key)} ×${value}</span>`).join('') || '<span>No materials recovered.</span>'}</div><div class="ce-result-notes">Objective: ${result.objectiveCompleted ? 'Complete' : 'Not complete'} · Top five: ${(this.state.rankings[result.levelId] || []).join(' · ')}</div><div class="ce-result-actions"><button data-ce-action="retry">Retry</button>${hasNext ? '<button class="ce-primary" data-ce-action="next">Next level</button>' : ''}<button data-ce-action="menu">Route menu</button><button data-ce-action="basecamp">Basecamp</button></div></article>`;
  },

  notice(message) {
    const node = this.q('#ceRunToast');
    if (!node) return;
    node.textContent = message;
    node.hidden = false;
    this.toast = 1.65;
  }
};
