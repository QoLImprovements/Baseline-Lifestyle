export const DARTS_ART_URL='/systems/baseline-games-hub/games/darts-focused/art/realistic-dartboard.svg';

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[character]));
}

export function feedbackHtml(state) {
  if (!state.feedback) return '';
  return `<div class="darts-feedback ${state.feedback.correct ? 'is-correct' : 'is-wrong'}" role="status"><strong>${escapeHtml(state.feedback.title)}</strong><p>${escapeHtml(state.feedback.text)}</p></div>`;
}

export function choiceButtons(options, gameId, disabled = false, extra = '') {
  return `<div class="darts-choice-grid">${options.map((option) => `<button class="darts-choice" data-darts-answer="${escapeHtml(gameId)}" data-value="${escapeHtml(option)}" type="button"${disabled ? ' disabled' : ''}${extra}>${escapeHtml(option)}</button>`).join('')}</div>`;
}

export function nextButton(selectedId,label = 'Next round') {
  return `<button class="action primary" data-darts-new-round="${escapeHtml(selectedId)}" type="button">${escapeHtml(label)}</button>`;
}

export function gameSelectorHtml(game,{selectedId,progressText}={}) {
  const selected = game.id === selectedId;
  return '<div class="darts-selector-wrap">' +
    `<button class="darts-game-selector${selected ? ' is-selected' : ''}" data-darts-game="${game.id}" type="button" aria-selected="${selected}" role="tab"><span>${escapeHtml(game.name)}</span><small>${escapeHtml(progressText || 'Ready')}</small></button>` +
    `<button class="darts-selector-info bl-info-button" data-bl-info-button data-bl-info-title="${escapeHtml(game.name)}" data-bl-info-text="${escapeHtml(game.intention)}" type="button" aria-label="What ${escapeHtml(game.name)} develops" aria-expanded="false"><span aria-hidden="true">i</span></button>` +
  '</div>';
}

export function panelHtml({games,selectedId,progressLabel}) {
  const selectors=games.map(game=>gameSelectorHtml(game,{selectedId,progressText:progressLabel(game.id)})).join('');
  return '<section class="card game-panel darts-focused-panel" id="dartsFocusedPanel" aria-labelledby="dartsFocusedTitle">' +
    '<div class="game-shell">' +
      '<div class="game-header darts-focused-header"><div class="darts-heading-lockup">' +
        `<img src="${DARTS_ART_URL}" class="darts-header-art" alt="Realistic dartboard"><div><h2 id="dartsFocusedTitle" tabindex="-1">Darts Focused</h2><p>Distinct website games with selectable tiers and shared progression into Baseline Realm.</p></div></div>` +
        '<div class="link-actions"><button class="action secondary bl-info-button" data-bl-info-button data-bl-info-title="Darts Focused" data-bl-info-text="Website-based darts training for calculation, attention, memory, board knowledge, routines and pressure decisions." type="button" aria-label="What Darts Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary game-howto-toggle" data-darts-how="darts-focused" type="button">How To Play</button><button class="action secondary" data-close-darts-focused type="button">Back To Games Overview</button></div>' +
      '</div>' +
      '<details class="game-info-details"><summary><span>Progression Record</span><span class="inline-note">Experience, levels and Realm links</span></summary><div class="progress-shell progress-shell--trackcoin" id="dartsProgressSummary"></div></details>' +
      '<div class="darts-focused-layout"><nav class="darts-game-selectors" role="tablist" aria-label="Darts Focused games">' + selectors + '</nav>' +
        '<section class="card game-card game-play-root darts-game-card" id="dartsGameCard" data-game-play-root="darts-focused">' +
          '<div class="darts-active-header"><div><h3 id="dartsActiveTitle"></h3><p class="inline-note" id="dartsActiveStatus"></p></div><div class="link-actions darts-active-actions"><button class="action secondary bl-info-button" id="dartsActiveInfoBtn" data-bl-info-button type="button" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary game-howto-toggle" id="dartsActiveHowBtn" type="button">How To Play</button><button class="action secondary darts-auto-next-toggle" id="dartsAutoNextBtn" type="button" aria-pressed="false">Auto-Next: Off</button><button class="action secondary" id="dartsFullscreenBtn" type="button" aria-pressed="false">Full Screen</button></div></div>' +
          '<section class="darts-tier-panel" aria-label="Difficulty tiers"><div><strong>Difficulty Tiers</strong><span id="dartsTierDescription"></span></div><div class="darts-tier-list" id="dartsTierList"></div></section>' +
          '<div class="darts-game-surface game-play-surface" id="dartsGameSurface" data-game-play-surface="darts-focused" tabindex="-1"></div>' +
        '</section></div>' +
    '</div></section>';
}
