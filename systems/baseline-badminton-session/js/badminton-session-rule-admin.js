(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getState = options.getState;
    const getRefs = options.getRefs;
    const currentUserIsManager = options.currentUserIsManager;
    const escapeHtml = options.escapeHtml;
    const getSideRuleKey = options.getSideRuleKey;
    const getTeamIds = options.getTeamIds;
    const getSideRuleLabelFromKey = options.getSideRuleLabelFromKey;
    const getTargetAreaTextFromZones = options.getTargetAreaTextFromZones;
    const getShotRestrictionText = options.getShotRestrictionText;
    const getZoneChecklistMarkup = options.getZoneChecklistMarkup;
    const getShotSelectMarkup = options.getShotSelectMarkup;
    const getPlayer = options.getPlayer;
    const sanitizeZones = options.sanitizeZones;
    const getCheckedZones = options.getCheckedZones;
    const buildSpecificMatchupKey = options.buildSpecificMatchupKey;
    const saveSessionData = options.saveSessionData;
    const renderAll = options.renderAll;

    function state(){
      const current = getState();
      if(!current || typeof current !== 'object') throw new Error('Badminton Rule Admin requires session state.');
      return current;
    }

    function refs(){
      return getRefs() || {};
    }

    function ensureRuleAdminShape(ruleAdmin){
      return Object.assign({ globalRules:{}, matchupOverrides:{} }, ruleAdmin || {}, {
        globalRules: ruleAdmin && typeof ruleAdmin.globalRules === 'object' && ruleAdmin.globalRules ? ruleAdmin.globalRules : {},
        matchupOverrides: ruleAdmin && typeof ruleAdmin.matchupOverrides === 'object' && ruleAdmin.matchupOverrides ? ruleAdmin.matchupOverrides : {}
      });
    }

    function getRuleAdminState(){
      const current = state();
      current.ruleAdmin = ensureRuleAdminShape(current.ruleAdmin);
      return current.ruleAdmin;
    }

    function getGlobalRule(side){
      const admin = getRuleAdminState();
      const rules = admin.globalRules || {};
      const sideKey = getSideRuleKey(side);
      if(sideKey && rules[sideKey]) return rules[sideKey];
      const ids = getTeamIds(side);
      for(let index = 0; index < ids.length; index += 1){
        const playerRule = rules[ids[index]];
        if(playerRule) return playerRule;
      }
      return null;
    }

    function getMatchupOverride(signature){
      const admin = getRuleAdminState();
      const overrides = admin.matchupOverrides || {};
      return overrides[String(signature || '')] || null;
    }

    function renderRuleAdmin(){
      const currentRefs = refs();
      const current = state();
      if(!currentRefs.ruleAdminWrap) return;
      if(!currentUserIsManager()){
        currentRefs.ruleAdminWrap.innerHTML = '<div class="empty-state">Developer-only altered rule controls.</div>';
        return;
      }
      const playerOptions = current.players.slice().sort(function(a, b){ return a.name.localeCompare(b.name); }).map(function(player){
        return '<option value="' + escapeHtml(player.id) + '">' + escapeHtml(player.name) + '</option>';
      }).join('');
      const globalItems = Object.entries(current.ruleAdmin.globalRules || {}).map(function(entry){
        const key = entry[0], rule = entry[1];
        return '<div class="rule-admin-item"><div class="rule-admin-item-head"><div><strong>' + escapeHtml(rule.label || getSideRuleLabelFromKey(key)) + '</strong><div class="note">Global rule</div></div><button class="action tight danger" type="button" data-remove-global-rule="' + escapeHtml(key) + '">Remove</button></div><div class="note">Target area: ' + escapeHtml(getTargetAreaTextFromZones(rule.targetZones || [], rule.mode || 'doubles')) + '</div>' + (rule.shotRestrictionStage ? '<div class="note">Restricted Shots: ' + escapeHtml(getShotRestrictionText(rule.shotRestrictionStage)) + '</div>' : '') + '</div>';
      }).join('');
      const matchupItems = Object.entries(current.ruleAdmin.matchupOverrides || {}).map(function(entry){
        const key = entry[0], rule = entry[1];
        return '<div class="rule-admin-item"><div class="rule-admin-item-head"><div><strong>' + escapeHtml(rule.label || key) + '</strong><div class="note">Specific matchup rule</div></div><button class="action tight danger" type="button" data-remove-matchup-rule="' + escapeHtml(key) + '">Remove</button></div><div class="note">Target area: ' + escapeHtml(getTargetAreaTextFromZones(rule.targetZones || [], rule.mode || 'doubles')) + '</div>' + (rule.shotRestrictionStage ? '<div class="note">Restricted Shots: ' + escapeHtml(getShotRestrictionText(rule.shotRestrictionStage)) + '</div>' : '') + '</div>';
      }).join('');
      currentRefs.ruleAdminWrap.innerHTML = '<div class="rule-admin-grid">' +
        '<div class="rule-admin-card"><h3>Global Player / Pair Rule</h3><div class="select-note">Choose a player or exact pair, then choose the target boxes and shot limits to use for that player or pair when altered rules are applied.</div><label>Player 1<select id="globalRulePlayer1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Player 2 (optional for a pair)<select id="globalRulePlayer2"><option value="">Single player only</option>' + playerOptions + '</select></label><label>Target boxes</label>' + getZoneChecklistMarkup('globalZones', []) + '<label>Restricted shots' + getShotSelectMarkup('globalRuleShotStage', '0') + '</label><button class="action" type="button" id="saveGlobalRuleBtn">Save Global Rule</button><div class="rule-admin-list">' + (globalItems || '<div class="empty-state">No global rules saved.</div>') + '</div></div>' +
        '<div class="rule-admin-card"><h3>Specific Matchup Rule</h3><div class="select-note">Set an exact side-vs-side rule, whether or not rating is the reason for it.</div><div class="grid-two"><label>Side 1 · Player 1<select id="matchStrong1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Side 1 · Player 2 (optional)<select id="matchStrong2"><option value="">None</option>' + playerOptions + '</select></label><label>Side 2 · Player 1<select id="matchWeak1"><option value="">Select player</option>' + playerOptions + '</select></label><label>Side 2 · Player 2 (optional)<select id="matchWeak2"><option value="">None</option>' + playerOptions + '</select></label></div><label>Target boxes</label>' + getZoneChecklistMarkup('matchZones', []) + '<label>Restricted shots' + getShotSelectMarkup('matchRuleShotStage', '0') + '</label><button class="action" type="button" id="saveMatchupRuleBtn">Save Matchup Rule</button><div class="rule-admin-list">' + (matchupItems || '<div class="empty-state">No exact matchup rules saved.</div>') + '</div></div>' +
      '</div>';
    }

    function buildMatchupRulePayload(){
      const currentRefs = refs();
      const strong1 = currentRefs.ruleAdminWrap.querySelector('#matchStrong1').value;
      const strong2 = currentRefs.ruleAdminWrap.querySelector('#matchStrong2').value;
      const weak1 = currentRefs.ruleAdminWrap.querySelector('#matchWeak1').value;
      const weak2 = currentRefs.ruleAdminWrap.querySelector('#matchWeak2').value;
      const strongIds = [strong1, strong2].filter(Boolean);
      const weakIds = [weak1, weak2].filter(Boolean);
      if(!strongIds.length || !weakIds.length) return null;
      if(new Set(strongIds.concat(weakIds)).size !== strongIds.length + weakIds.length) return null;
      const mode = strongIds.length === 1 && weakIds.length === 1 ? 'singles' : 'doubles';
      const targetZones = sanitizeZones(getCheckedZones('matchZones'), mode);
      return {
        key: buildSpecificMatchupKey(strongIds, weakIds),
        label: strongIds.map(function(id){ return (getPlayer(id) || {}).name || id; }).join(' / ') + ' vs ' + weakIds.map(function(id){ return (getPlayer(id) || {}).name || id; }).join(' / '),
        mode,
        targetZones,
        shotRestrictionStage: Number(currentRefs.ruleAdminWrap.querySelector('#matchRuleShotStage').value || 0)
      };
    }

    function bindRuleAdminActions(){
      const currentRefs = refs();
      const current = state();
      if(!currentRefs.ruleAdminWrap || !currentUserIsManager()) return;
      const saveGlobalBtn = currentRefs.ruleAdminWrap.querySelector('#saveGlobalRuleBtn');
      if(saveGlobalBtn){
        saveGlobalBtn.addEventListener('click', function(){
          const p1 = currentRefs.ruleAdminWrap.querySelector('#globalRulePlayer1').value;
          const p2 = currentRefs.ruleAdminWrap.querySelector('#globalRulePlayer2').value;
          if(!p1){ global.alert('Select at least one player.'); return; }
          if(p2 && p1 === p2){ global.alert('Choose a different second player or leave it blank.'); return; }
          const ids = [p1, p2].filter(Boolean).sort();
          const mode = ids.length === 1 ? 'singles' : 'doubles';
          const targetZones = sanitizeZones(getCheckedZones('globalZones'), mode);
          if(!targetZones.length){ global.alert('Choose at least one target box.'); return; }
          current.ruleAdmin.globalRules[ids.join('::')] = {
            label: ids.map(function(id){ return (getPlayer(id) || {}).name || id; }).join(' / '),
            mode,
            targetZones,
            shotRestrictionStage: Number(currentRefs.ruleAdminWrap.querySelector('#globalRuleShotStage').value || 0)
          };
          saveSessionData();
          renderAll();
        });
      }
      const saveMatchBtn = currentRefs.ruleAdminWrap.querySelector('#saveMatchupRuleBtn');
      if(saveMatchBtn){
        saveMatchBtn.addEventListener('click', function(){
          const payload = buildMatchupRulePayload();
          if(!payload){ global.alert('Choose two valid sides without reusing the same player.'); return; }
          if(!payload.targetZones.length){ global.alert('Choose at least one target box.'); return; }
          current.ruleAdmin.matchupOverrides[payload.key] = payload;
          saveSessionData();
          renderAll();
        });
      }
      currentRefs.ruleAdminWrap.querySelectorAll('[data-remove-global-rule]').forEach(function(button){
        button.addEventListener('click', function(){
          delete current.ruleAdmin.globalRules[button.getAttribute('data-remove-global-rule')];
          saveSessionData();
          renderAll();
        });
      });
      currentRefs.ruleAdminWrap.querySelectorAll('[data-remove-matchup-rule]').forEach(function(button){
        button.addEventListener('click', function(){
          delete current.ruleAdmin.matchupOverrides[button.getAttribute('data-remove-matchup-rule')];
          saveSessionData();
          renderAll();
        });
      });
    }

    return Object.freeze({
      ensureRuleAdminShape:ensureRuleAdminShape,
      getRuleAdminState:getRuleAdminState,
      getGlobalRule:getGlobalRule,
      getMatchupOverride:getMatchupOverride,
      renderRuleAdmin:renderRuleAdmin,
      buildMatchupRulePayload:buildMatchupRulePayload,
      bindRuleAdminActions:bindRuleAdminActions
    });
  }

  global.BASELINE_BADMINTON_RULE_ADMIN = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);
