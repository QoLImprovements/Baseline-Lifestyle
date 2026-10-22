import { courtSvg } from './badminton-focused-scenes.js';

export const BADMINTON_ART_URL='/systems/baseline-recreation/games/badminton-focused/art/badminton-focused-overview.svg';

export function escapeHtml(v){
  return String(v??'').replace(/[&<>"']/g,c=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

export function iconSvg(id){
  const common='fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"';
  const map={
    'read-racket':`<path ${common} d="M8 25c7-12 15-15 24-10M31 14l12-8M42 6c7 2 10 8 7 14-3 6-10 8-16 4"/><path ${common} d="M12 30l8-9"/>`,
    'shuttle-first':`<path ${common} d="M27 35l-8 15M31 35l0 17M35 35l8 15M19 50c8 5 16 5 24 0"/><ellipse ${common} cx="31" cy="29" rx="6" ry="7"/>`,
    'wait-contact':`<circle ${common} cx="31" cy="31" r="19"/><path ${common} d="M31 17v15l10 7M13 8l6 6M49 14l6-6"/>`,
    'court-recovery':`<rect ${common} x="9" y="7" width="44" height="50"/><path ${common} d="M31 7v50M9 32h44M20 7v50M42 7v50"/><path ${common} d="M15 46l9-9 7 6 12-15"/>`,
    'four-corner':`<circle ${common} cx="31" cy="31" r="5"/><path ${common} d="M12 12l11 11M50 12L39 23M12 50l11-11M50 50L39 39"/><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="50" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="50" r="3" fill="currentColor"/><circle cx="50" cy="50" r="3" fill="currentColor"/>`,
    'shot-choice':`<path ${common} d="M9 48c9-17 17-25 25-25M34 23l12-12M42 11h9v9M34 23l12 12M42 35h9v-9"/>`,
    'deception-filter':`<path ${common} d="M8 31c7-10 15-15 23-15s16 5 23 15c-7 10-15 15-23 15S15 41 8 31z"/><circle ${common} cx="31" cy="31" r="6"/><path ${common} d="M17 52l28-42"/>`,
    'rally-pattern':`<path ${common} d="M10 45l10-12 10 6 10-20 12 8"/><circle cx="10" cy="45" r="3" fill="currentColor"/><circle cx="20" cy="33" r="3" fill="currentColor"/><circle cx="30" cy="39" r="3" fill="currentColor"/><circle cx="40" cy="19" r="3" fill="currentColor"/><circle cx="52" cy="27" r="3" fill="currentColor"/>`,
    'badminton-reset':`<path ${common} d="M48 20a20 20 0 1 0 2 20M48 20V8M48 20H36"/><path ${common} d="M24 31h14"/>`,
    'tempo-break':`<path ${common} d="M8 35h8l5-16 8 30 7-25 6 11h12"/>`,
    'landing-picture':`<rect ${common} x="10" y="8" width="42" height="48"/><path ${common} d="M31 8v48M10 32h42"/><path ${common} d="M39 20l5 5-9 9-5-5z"/>`,
    'pressure-ladder':`<path ${common} d="M9 52h11V42h11V32h11V22h11"/><path ${common} d="M42 13h11v11M53 13L38 28"/>`,
    'attack-purpose':`<path ${common} d="M10 49c0-12 7-19 21-19V11M31 30c13 0 21 7 21 19"/><path ${common} d="M24 18l7-7 7 7M45 42l7 7 7-7M3 42l7 7 7-7"/>`,
    'opponent-balance':`<circle ${common} cx="31" cy="13" r="7"/><path ${common} d="M31 20l-7 16 11 8M25 30L12 24M25 36L14 51M35 44l13 8M36 30l12-8"/>`,
    'decision-recovery':`<path ${common} d="M8 45c7-15 16-21 27-19M35 26l-5-8M35 26l-9 2"/><path ${common} d="M31 45c8-8 14-10 22-9M53 36l-5-8M53 36l-9 2"/>`
  };
  return `<svg viewBox="0 0 62 62" aria-hidden="true">${map[id]||map['shot-choice']}</svg>`;
}

export function selectorHtml(game,{selectedId,progressText}={}){
  const selected=game.id===selectedId;
  return `<div class="badminton-selector-wrap"><button class="badminton-game-selector${selected?' is-selected':''}" data-badminton-game="${game.id}" type="button" aria-selected="${selected}" role="tab"><span class="badminton-selector-icon">${iconSvg(game.id)}</span><span>${escapeHtml(game.name)}</span><small>${escapeHtml(progressText||'Ready')}</small></button><button class="badminton-selector-info bl-info-button" data-bl-info-button data-bl-info-title="${escapeHtml(game.name)}" data-bl-info-text="${escapeHtml(game.intention)}" type="button" aria-label="What ${escapeHtml(game.name)} develops" aria-expanded="false"><span aria-hidden="true">i</span></button></div>`;
}

export function panelHtml({games,selectedId,progressLabel}){
  const selectors=games.map(game=>selectorHtml(game,{selectedId,progressText:progressLabel(game.id)})).join('');
  return `<section class="card game-panel badminton-focused-panel" id="badmintonFocusedPanel" aria-labelledby="badmintonFocusedTitle"><div class="game-shell"><div class="game-header"><div class="badminton-heading-lockup"><img src="${BADMINTON_ART_URL}" class="badminton-header-art" alt="Badminton court training scene"><div><h2 id="badmintonFocusedTitle" tabindex="-1">Badminton Focused</h2><p>See accurately → decide correctly → act at the right moment → recover immediately.</p></div></div><div class="link-actions"><button class="action secondary bl-info-button" data-bl-info-button data-bl-info-title="Badminton Focused" data-bl-info-text="Website-based supporting training for visual attention, anticipation, tactical judgement, reaction control and recovery. It complements rather than replaces real badminton practice." type="button" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary" data-badminton-how="badminton-focused" type="button">How To Play</button><button class="action secondary" data-close-badminton-focused type="button">Back To Games Overview</button></div></div><details class="game-info-details"><summary><span>Progression Record</span><span class="inline-note">Experience, levels and Realm links</span></summary><div id="badmintonProgressSummary"></div></details><div class="badminton-focused-layout"><nav class="badminton-game-selectors" role="tablist" aria-label="Badminton Focused games">${selectors}</nav><section class="card game-card game-play-root badminton-game-card" id="badmintonGameCard" data-game-play-root="badminton-focused"><div class="badminton-active-header"><div><h3 id="badmintonActiveTitle"></h3><p id="badmintonActiveStatus" class="inline-note"></p></div><div class="link-actions badminton-active-actions"><button class="action secondary bl-info-button" id="badmintonActiveInfoBtn" data-bl-info-button type="button" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary" id="badmintonHowBtn" type="button">How To Play</button><button class="action secondary badminton-auto-next-toggle" id="badmintonAutoNextBtn" type="button" aria-pressed="false">Auto-Next: Off</button><button class="action secondary" id="badmintonFullscreenBtn" type="button" aria-pressed="false">Full Screen</button></div></div><section class="badminton-tier-panel"><div><strong>Difficulty Tiers</strong><span id="badmintonTierDescription"></span></div><div class="badminton-tier-list" id="badmintonTierList"></div></section><div class="badminton-game-surface game-play-surface" id="badmintonGameSurface" data-game-play-surface="badminton-focused" tabindex="-1"></div></section></div></div></section>`;
}

function shuffledCopy(options,random=Math.random){
  const out=[...options];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(random()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}

export function choiceButtons(options){
  return `<div class="badminton-choice-grid">${shuffledCopy(options).map(option=>`<button class="badminton-choice" data-badminton-answer="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`).join('')}</div>`;
}

export function feedbackHtml(feedback){
  return feedback?`<div class="badminton-feedback ${feedback.correct?'is-correct':'is-wrong'}"><strong>${escapeHtml(feedback.title)}</strong><p>${escapeHtml(feedback.text)}</p></div>`:'';
}

export function nextButton(label='Next round'){
  return `<button class="action primary" data-badminton-next type="button">${escapeHtml(label)}</button>`;
}

export function zoneButtons(zones){
  return `<div class="badminton-zone-grid">${zones.map(zone=>`<button data-badminton-zone-answer="${zone}" type="button">${zone}</button>`).join('')}</div>`;
}

export function resetScene(){
  return `<div class="badminton-tactical-scene">${courtSvg({you:'Mid left',opponent:'Rear right',shuttle:'Mid right',recoveryPath:['Mid left','Centre']})}</div><div class="badminton-scene-caption"><span>Previous rally ends</span><span>Return the eyes to the shuttle</span><span>Build only the next plan</span></div>`;
}
