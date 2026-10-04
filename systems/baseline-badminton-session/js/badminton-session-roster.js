(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const clampRating = options.clampRating;
    const escapeHtml = options.escapeHtml;
    const isModeratorPlayer = options.isModeratorPlayer;
    const currentUserIsManager = options.currentUserIsManager;
    const normalizePlayerPreferenceFlags = options.normalizePlayerPreferenceFlags;
    const formatDateTime = options.formatDateTime;
    const ensureRatingStores = options.ensureRatingStores;
    const getPlayerRating = options.getPlayerRating;
    const cssEscape = options.cssEscape;
    const saveSessionData = options.saveSessionData;
    const normalizeKnownLoginName = options.normalizeKnownLoginName;
    const currentUserCanEditPlayerPrefs = options.currentUserCanEditPlayerPrefs;
    const getPlayer = options.getPlayer;
    const getPlayerByNameForRatingMigration = options.getPlayerByNameForRatingMigration;
    const renderAll = options.renderAll;
    const setPlayerRating = options.setPlayerRating;
    const normalizeLoginName = options.normalizeLoginName;
    const getPairIdFromPlayers = options.getPairIdFromPlayers;
    const getPairSummaryKey = options.getPairSummaryKey;
    const getTeamLabel = options.getTeamLabel;
    const getSitewideAuth = options.getSitewideAuth;
    const addLoginOption = options.addLoginOption;
    const isPlayerAdmin = options.isPlayerAdmin;
    const uid = options.uid;
    const formatPersonName = options.formatPersonName;
    const startRating = Number(options.startRating || 25);
    const moderatorCanonicalLogin = String(options.moderatorCanonicalLogin || '');
    const moderatorAliases = Array.isArray(options.moderatorAliases) ? options.moderatorAliases.slice() : [];
    const loginOptionsUrl = String(options.loginOptionsUrl || '');
    let loginOptions = [];

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton roster module requires session state.');
      return current;
    }

    function refs(){ return getRefs() || {}; }


  function renderPlayers(){
    const wrap = refs().playersTableWrap;
    const manager = currentUserIsManager();
    migrateKnownModeratorPlayer();
    normalizePlayerPreferenceFlags();
    ensureRatingStores();
    normalizePairSummaryKeys();
    if(!state().players.length){
      wrap.innerHTML = manager ? '<div class="empty-state">Add players to begin building the session.</div>' : '<div class="empty-state">No players have been added yet.</div>';
      return;
    }
    const rows = state().players.slice().sort((a, b) => getPlayerRating(b) - getPlayerRating(a) || a.name.localeCompare(b.name)).map(player => {
      const displayName = isModeratorPlayer(player) ? 'Peter Bates-Wilkinson' : player.name;
      const ratingCell = manager
        ? ('<td class="small-cell"><input data-player-rating="' + escapeHtml(player.id) + '" type="number" min="0" max="50" step="0.5" value="' + escapeHtml(String(getPlayerRating(player))) + '"/></td>')
        : ('<td class="small-cell">' + escapeHtml(String(getPlayerRating(player))) + '</td>');
      const loginCell = manager
        ? ('<td>' + renderLoginSelect(player) + '</td>')
        : ('<td>' + escapeHtml(isModeratorPlayer(player) ? moderatorCanonicalLogin : (player.loginUsername || '—')) + '</td>');
      const prefCell = '<td>' + renderPlayerPreferenceControls(player) + '</td>';
      return '<tr><td><strong>' + escapeHtml(displayName) + '</strong>' + renderAdminStarToggle(player) + '</td>' + ratingCell + loginCell + prefCell + (manager ? '<td class="small-cell player-actions"><div class="player-action-row"><button class="action tight secondary" type="button" data-player-save="' + escapeHtml(player.id) + '">Save</button>' + (isModeratorPlayer(player) ? '' : '<button class="action tight danger" type="button" data-player-remove="' + escapeHtml(player.id) + '">Remove</button>') + '</div></td>' : '') + '</tr>';
    }).join('');
    const head = manager
      ? '<thead><tr><th>Player Name</th><th>Player Rating</th><th>Linked login</th><th>Doubles-day preferences</th><th class="player-actions-head">Actions</th></tr></thead>'
      : '<thead><tr><th>Player Name</th><th>Player Rating</th><th>Linked login</th><th>Doubles-day preferences</th></tr></thead>';
    const pairRows = Object.entries(state().pairRatings || {}).sort(function(a, b){
      return Number(b[1]) - Number(a[1]) || getPairLabelFromId(a[0]).localeCompare(getPairLabelFromId(b[0]));
    }).map(function(entry){
      const summary = state().pairSummary && state().pairSummary[entry[0]] ? state().pairSummary[entry[0]] : {};
      const games = Number(summary.count || 0);
      const wins = Number(summary.wins || 0);
      const losses = Number(summary.losses || 0);
      const last = summary.lastSeenAt ? formatDateTime(summary.lastSeenAt) : 'Not yet played';
      return '<tr><td><strong>' + escapeHtml(getPairLabelFromId(entry[0])) + '</strong></td><td class="small-cell">' + escapeHtml(clampRating(entry[1]).toFixed(1)) + '</td><td class="small-cell">' + escapeHtml(String(games)) + '</td><td class="small-cell">' + escapeHtml(String(wins) + '-' + String(losses)) + '</td><td>' + escapeHtml(last) + '</td></tr>';
    }).join('');
    wrap.innerHTML = '<table>' + head + '<tbody>' + rows + '</tbody></table>' +
      '<hr class="rule"/><h3>Pairs</h3><p class="note">Each partnership has one canonical Pair ID, regardless of player order.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Pair</th><th>Pair Rating</th><th>Games together</th><th>W-L</th><th>Last played</th></tr></thead><tbody>' +
      (pairRows || '<tr><td colspan="5">No pair ratings yet.</td></tr>') + '</tbody></table></div>';
  }


  function bindRosterActions(){
    refs().playersTableWrap.querySelectorAll('[data-player-admin]').forEach(input => {
      input.addEventListener('change', function(){
        const player = getPlayer(input.getAttribute('data-player-admin'));
        if(!player || !currentUserIsManager() || isModeratorPlayer(player)) return renderAll();
        if(input.checked && !String(player.loginUsername || '').trim()){
          input.checked = false;
          global.alert('Link a login before making this player an admin.');
          return;
        }
        player.badmintonSessionsAdmin = !!input.checked;
        saveSessionData();
        renderAll();
      });
    });
    refs().playersTableWrap.querySelectorAll('[data-player-pref]').forEach(input => {
      input.addEventListener('change', function(){
        const player = getPlayer(input.getAttribute('data-player-id'));
        if(!player || !currentUserCanEditPlayerPrefs(player)){
          renderAll();
          return;
        }
        if(input.getAttribute('data-player-pref') === 'singles'){
          player.doublesDaySinglesOptOut = !!input.checked;
        }
        if(input.getAttribute('data-player-pref') === 'solo'){
          player.doublesDaySoloOptOut = !!input.checked;
        }
        saveSessionData();
        renderAll();
      });
    });
    refs().playersTableWrap.querySelectorAll('[data-player-save]').forEach(button => {
      button.addEventListener('click', function(){
        const playerId = button.getAttribute('data-player-save');
        const player = getPlayer(playerId);
        if(!player) return;
        if(!currentUserIsManager()) return;
        const ratingInput = refs().playersTableWrap.querySelector('[data-player-rating="' + cssEscape(playerId) + '"]');
        const loginInput = refs().playersTableWrap.querySelector('[data-player-login="' + cssEscape(playerId) + '"]');
        const adminInput = refs().playersTableWrap.querySelector('[data-player-admin="' + cssEscape(playerId) + '"]');
        setPlayerRating(player, ratingInput ? ratingInput.value : getPlayerRating(player));
        player.loginUsername = normalizeKnownLoginName(loginInput ? loginInput.value : player.loginUsername || '');
        if(isModeratorPlayer(player)){
          player.name = 'Peter Bates-Wilkinson';
          player.loginUsername = moderatorCanonicalLogin;
          player.badmintonSessionsAdmin = true;
        }else if(adminInput){
          player.badmintonSessionsAdmin = !!adminInput.checked && !!String(player.loginUsername || '').trim();
        }
        saveSessionData();
        renderAll();
      });
    });
    refs().playersTableWrap.querySelectorAll('[data-player-remove]').forEach(button => {
      button.addEventListener('click', function(){
        if(!currentUserIsManager()) return;
        const playerId = button.getAttribute('data-player-remove');
        const existing = getPlayer(playerId);
        if(isModeratorPlayer(existing)) return;
        state().players = state().players.filter(player => player.id !== playerId);
        state().plan.attendingPlayerIds = (state().plan.attendingPlayerIds || []).filter(id => id !== playerId);
        state().plan.lastSitOutPlayerIds = (state().plan.lastSitOutPlayerIds || []).filter(id => id !== playerId);
        state().plan.currentSitOutPlayerIds = (state().plan.currentSitOutPlayerIds || []).filter(id => id !== playerId);
        if(state().plan.sitOutCounts && Object.prototype.hasOwnProperty.call(state().plan.sitOutCounts, playerId)) delete state().plan.sitOutCounts[playerId];
        saveSessionData();
        renderAll();
      });
    });
  }


  function renderPlayerPreferenceControls(player){
    const canEdit = currentUserCanEditPlayerPrefs(player);
    const disabled = canEdit ? '' : ' disabled';
    const playerName = escapeHtml(player.name || 'player');
    return '<div class="player-pref-stack" aria-label="Doubles-day preferences for ' + playerName + '">' +
      '<label class="player-pref-toggle"><span><span class="player-pref-label">No singles</span><span class="player-pref-hint">Doubles-day fallback only</span></span><input type="checkbox" data-player-pref="singles" data-player-id="' + escapeHtml(player.id) + '"' + (player.doublesDaySinglesOptOut ? ' checked' : '') + disabled + '/></label>' +
      '<label class="player-pref-toggle"><span><span class="player-pref-label">No 2v1 solo</span><span class="player-pref-hint">Do not make this player the 1</span></span><input type="checkbox" data-player-pref="solo" data-player-id="' + escapeHtml(player.id) + '"' + (player.doublesDaySoloOptOut ? ' checked' : '') + disabled + '/></label>' +
    '</div>';
  }


  function normalizePairSummaryKeys(){
    if(!state().pairSummary || typeof state().pairSummary !== 'object') state().pairSummary = {};
    const normalized = {};
    Object.keys(state().pairSummary).forEach(function(key){
      const summary = state().pairSummary[key] && typeof state().pairSummary[key] === 'object' ? state().pairSummary[key] : {};
      let pairId = String(summary.pairId || '');
      if(!pairId || !pairId.startsWith('pair:')){
        const names = String(summary.label || '').split('/').map(function(name){ return name.trim(); }).filter(Boolean);
        if(names.length === 2){
          const players = names.map(getPlayerByNameForRatingMigration).filter(Boolean);
          pairId = getPairIdFromPlayers(players);
        }
      }
      if(!pairId) return;
      const existing = normalized[pairId] || { pairId:pairId, ids:[], label:getPairLabelFromId(pairId), count:0, wins:0, losses:0, lastSeenAt:'' };
      existing.ids = Array.isArray(summary.ids) && summary.ids.every(function(id){ return !!getPlayer(id); })
        ? summary.ids.slice().sort()
        : String(pairId).replace(/^pair:/, '').split('::').filter(Boolean);
      existing.label = getPairLabelFromId(pairId);
      existing.count += Number(summary.count || 0);
      existing.wins += Number(summary.wins || 0);
      existing.losses += Number(summary.losses || 0);
      if(String(summary.lastSeenAt || '') > String(existing.lastSeenAt || '')) existing.lastSeenAt = summary.lastSeenAt;
      normalized[pairId] = existing;
    });
    state().pairSummary = normalized;
  }


  function updatePairSummaryFromCourt(court, winnerSideNumber){
    [1, 2].forEach(function(sideNumber){
      const side = sideNumber === 1 ? court.side1 : court.side2;
      if((side.players || []).length < 2) return;
      const key = getPairSummaryKey(side);
      if(!key) return;
      if(!state().pairSummary[key]){
        state().pairSummary[key] = { pairId:key, ids:(side.players || []).map(function(player){ return player.id; }).filter(Boolean).sort(), label:getTeamLabel(side), count:0, wins:0, losses:0, lastSeenAt:'' };
      }
      const summary = state().pairSummary[key];
      summary.pairId = key;
      summary.ids = (side.players || []).map(function(player){ return player.id; }).filter(Boolean).sort();
      summary.label = getTeamLabel(side);
      summary.count = Number(summary.count || 0) + 1;
      summary.wins = Number(summary.wins || 0) + (Number(winnerSideNumber) === sideNumber ? 1 : 0);
      summary.losses = Number(summary.losses || 0) + (Number(winnerSideNumber) !== sideNumber ? 1 : 0);
      summary.lastSeenAt = new Date().toISOString();
    });
  }


  function migrateKnownModeratorPlayer(){
    (state().players || []).forEach(function(player){
      if(!player) return;
      const login = normalizeLoginName(player.loginUsername || player.loginEmail || player.email || '');
      const name = normalizeLoginName(player.name || '');
      if(moderatorAliases.includes(login) || moderatorAliases.includes(name) || name === 'peter bates-wilkinson' || name === 'peter bates wilkinson'){
        player.name = 'Peter Bates-Wilkinson';
        player.loginUsername = moderatorCanonicalLogin;
        player.badmintonSessionsAdmin = true;
      }else if(player.loginUsername){
        player.loginUsername = normalizeKnownLoginName(player.loginUsername);
      }
    });
  }



  // BASELINE-BADMINTON-GAME-PLAN-LADDER-FIX-20260607
  // Current games should read as a clean ladder: strongest court first, then downwards.
  // This keeps the generated plan visually ordered without changing the public tab/URL system.


  function renderLoginSelect(player){
    const current = normalizeKnownLoginName(isModeratorPlayer(player) ? moderatorCanonicalLogin : (player.loginUsername || ''));
    const options = buildLoginOptions();
    const hasCurrent = current && !options.some(function(option){ return normalizeLoginName(option.value) === normalizeLoginName(current); });
    if(hasCurrent){
      options.unshift({ value:current, label:current, email:'', id:'' });
    }
    const optionMarkup = ['<option value="">No linked login</option>'].concat(options.map(function(option){
      const selected = normalizeLoginName(option.value) === normalizeLoginName(current) ? ' selected' : '';
      return '<option value="' + escapeHtml(option.value) + '"' + selected + '>' + escapeHtml(option.label) + '</option>';
    })).join('');
    return '<select class="player-login-input login-select" data-player-login="' + escapeHtml(player.id) + '">' + optionMarkup + '</select>';
  }


  function buildLoginOptions(){
    const map = {};
    addLoginOption(map, moderatorCanonicalLogin, 'Peter Bates-Wilkinson', 'Bateswilkinson@gmail.com', 'moderator');
    loginOptions.forEach(function(item){
      if(!item) return;
      addLoginOption(map, item.value || item.name || item.email, item.label || item.name || item.email, item.email || '', item.id || item.userId || '');
    });
    (state().players || []).forEach(function(player){
      addLoginOption(map, player.loginUsername, player.loginUsername, player.loginEmail || player.email || '', player.loginUserId || player.userId || '');
    });
    const auth = getSitewideAuth();
    if(auth && auth.authed !== false){
      addLoginOption(map, auth.name || auth.email, auth.name || auth.email, auth.email || '', auth.id || '');
    }
    return Object.values(map).sort(function(a, b){ return a.label.localeCompare(b.label); });
  }


  function loadLoginOptions(){
    if(!loginOptionsUrl || !global.fetch || !currentUserIsManager()) return;
    global.fetch(loginOptionsUrl, { method:'GET', credentials:'same-origin' })
      .then(function(response){ return response.json().catch(function(){ return null; }); })
      .then(function(data){
        if(!data || !data.ok || !Array.isArray(data.users)) return;
        loginOptions = data.users.map(function(user){
          const name = String(user.name || '').trim();
          const email = String(user.email || '').trim();
          return {
            id: user.id || '',
            value: normalizeKnownLoginName(name || email),
            label: name && email ? (name + ' · ' + email) : (name || email),
            email: email
          };
        });
        renderPlayers();
        bindRosterActions();
      })
      .catch(function(_error){});
  }


  function addPlayer(){
    if(!currentUserIsManager()){
      global.alert('Only the site developer or approved admins can add players.');
      return;
    }
    const name = formatPersonName(refs().playerNameInput.value);
    if(!name){
      global.alert('Enter a player name first.');
      return;
    }
    state().players.push({ id: uid('player'), name, rating: startRating, playerRating: startRating, loginUsername:'', loginEmail:'', badmintonSessionsAdmin:false, matchCount:0, doublesDaySinglesOptOut:false, doublesDaySoloOptOut:false, createdAt:new Date().toISOString() });
    refs().playerNameInput.value = '';
    saveSessionData();
    renderAll();
  }


  function renderAdminStarToggle(player){
    if(!currentUserIsManager() || isModeratorPlayer(player)) return renderAdminStar(player);
    return '<label class="admin-star-toggle" title="Toggle Badminton Sessions admin"><input data-player-admin="' + escapeHtml(player.id) + '" type="checkbox"' + (isPlayerAdmin(player) ? ' checked' : '') + '/><span class="admin-star admin-star--admin" aria-hidden="true">★</span><span class="hidden">Badminton Sessions admin</span></label>';
  }


  function playerLoginTokens(player){
    const tokens = [];
    if(!player) return tokens;
    [player.loginUsername, player.loginEmail, player.email, player.username, player.login].forEach(function(value){
      const normalized = normalizeLoginName(value);
      if(normalized) tokens.push(normalized);
      if(moderatorAliases.includes(normalized)) tokens.push(moderatorCanonicalLogin.toLowerCase());
    });
    return Array.from(new Set(tokens));
  }


  function getPairLabelFromId(pairId){
    const ids = String(pairId || '').replace(/^pair:/, '').split('::').filter(Boolean);
    if(ids.length !== 2) return String(pairId || '');
    const names = ids.map(function(id){
      const player = getPlayer(id);
      return player ? player.name : id;
    });
    return names.join(' / ');
  }


  function renderAdminStar(player){
    if(isModeratorPlayer(player)) return '<span class="admin-star admin-star--developer" title="Moderator">★</span>';
    if(isPlayerAdmin(player)) return '<span class="admin-star admin-star--admin" title="Badminton Sessions admin">★</span>';
    return '';
  }

    return Object.freeze({
      renderPlayers:renderPlayers,
      bindRosterActions:bindRosterActions,
      renderPlayerPreferenceControls:renderPlayerPreferenceControls,
      normalizePairSummaryKeys:normalizePairSummaryKeys,
      updatePairSummaryFromCourt:updatePairSummaryFromCourt,
      migrateKnownModeratorPlayer:migrateKnownModeratorPlayer,
      renderLoginSelect:renderLoginSelect,
      buildLoginOptions:buildLoginOptions,
      loadLoginOptions:loadLoginOptions,
      addPlayer:addPlayer,
      renderAdminStarToggle:renderAdminStarToggle,
      playerLoginTokens:playerLoginTokens,
      getPairLabelFromId:getPairLabelFromId,
      renderAdminStar:renderAdminStar
    });
  }

  global.BASELINE_BADMINTON_ROSTER = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);
