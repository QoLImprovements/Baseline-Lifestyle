(function(global){
  'use strict';

  if(global.BASELINE_GAMES_HUB_OVERVIEW_VIEW) return;

  const GAME_REGISTRY = global.BASELINE_GAMES_HUB_GAME_REGISTRY || null;
  if(!GAME_REGISTRY || typeof GAME_REGISTRY.overviewGames !== 'function'){
    throw new Error('games_overview_registry_authority_missing');
  }

  const OVERVIEW_GAMES = GAME_REGISTRY.overviewGames();

  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g,function(character){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character];
    });
  }

  function metaFor(game,progressFor){
    const overview = game && game.overview || {};
    return {
      id:String(game && game.runtimeId || ''),
      group:String(overview.group || 'Games'),
      name:String(game && game.name || ''),
      art:String(overview.art || ''),
      note:String(overview.note || ''),
      brainBenefit:String(overview.brainBenefit || ''),
      featured:Boolean(overview.featured),
      externalModule:game && game.group === 'focused' ? String(game.runtimeId || '') : '',
      progress:typeof progressFor === 'function' ? String(progressFor(game) || 'Ready') : 'Ready'
    };
  }

  function focusedRow(meta){
    const prefix = meta.externalModule.replace(/-focused$/,'');
    return '<div class="game-row-wrap game-row-wrap--featured ' + escapeHtml(meta.externalModule) + '-overview-row" data-game-card="' + escapeHtml(meta.id) + '">' +
      '<button class="game-row ' + escapeHtml(prefix) + '-overview-row" data-open-' + escapeHtml(meta.externalModule) + ' type="button">' +
        '<img class="game-card-art ' + escapeHtml(prefix) + '-overview-art" src="' + escapeHtml(meta.art) + '" alt="">' +
        '<div class="game-row-copy"><h3>' + escapeHtml(meta.name) + '</h3><p>' + escapeHtml(meta.note) + '</p></div>' +
        '<div class="game-row-meta"><strong>' + escapeHtml(meta.progress) + '</strong><span class="inline-note">Open games</span></div>' +
      '</button>' +
      '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="' + escapeHtml(meta.brainBenefit) + '" type="button" aria-label="What ' + escapeHtml(meta.name) + ' develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
    '</div>';
  }

  function standardRow(meta,selectedGame){
    return '<div class="game-row-wrap' + (meta.featured ? ' game-row-wrap--featured' : '') + (selectedGame === meta.id ? ' is-selected' : '') + '" data-game-card="' + escapeHtml(meta.id) + '">' +
      '<button class="game-row" data-select-game="' + escapeHtml(meta.id) + '" type="button">' +
        '<img class="game-card-art" src="' + escapeHtml(meta.art) + '" alt="">' +
        '<div class="game-row-copy"><h3>' + escapeHtml(meta.name) + '</h3><p>' + escapeHtml(meta.note) + '</p></div>' +
        '<div class="game-row-meta"><strong>' + escapeHtml(meta.progress) + '</strong><span class="inline-note">Open game</span></div>' +
      '</button>' +
      '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="' + escapeHtml(meta.brainBenefit) + '" type="button" aria-label="What ' + escapeHtml(meta.name) + ' develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
    '</div>';
  }

  function render(options){
    const opts = options || {};
    const selectedGame = String(opts.selectedGame || '');
    const progressFor = opts.progressFor;
    let currentGroup = '';

    return OVERVIEW_GAMES.map(function(game){
      const meta = metaFor(game,progressFor);
      const heading = meta.group !== currentGroup
        ? (currentGroup = meta.group, '<div class="games-list-group" role="presentation"><span>' + escapeHtml(meta.group) + '</span></div>')
        : '';
      return heading + (meta.externalModule ? focusedRow(meta) : standardRow(meta,selectedGame));
    }).join('');
  }

  global.BASELINE_GAMES_HUB_OVERVIEW_VIEW = Object.freeze({
    version:1,
    render:render
  });
})(window);
