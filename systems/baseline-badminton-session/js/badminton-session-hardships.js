(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const sessionCore = options.sessionCore;
    const getState = options.getState;
    const setState = options.setState;
    const createInitialState = options.createInitialState;
    const getTeamIds = options.getTeamIds;
    const getSideByNumber = options.getSideByNumber;
    const getOppositeSideNumber = options.getOppositeSideNumber;
    const getRestrictionZoneMode = options.getRestrictionZoneMode;
    const getPresetOrder = options.getPresetOrder;
    const normaliseShotRestrictions = options.normaliseShotRestrictions;
    const tightenPreset = options.tightenPreset;
    const loosenPreset = options.loosenPreset;
    const sanitizeZones = options.sanitizeZones;
    const PRESET_ZONE_MAP = options.presetZoneMap || {};
    const getTargetAreaTextFromPreset = options.getTargetAreaTextFromPreset;
    const getTargetAreaTextFromZones = options.getTargetAreaTextFromZones;

    function ensureState(){
      let current = getState();
      if(!current || typeof current !== 'object'){
        current = createInitialState();
        setState(current);
      }
      if(!current.plan) current.plan = createInitialState().plan;
      return current;
    }

    function getSideRestrictionKeyFromIds(ids){
      return sessionCore.getStableSideKey(ids);
    }

    function getSideRestrictionKey(side){
      return getSideRestrictionKeyFromIds(getTeamIds(side));
    }

    function getExactHardshipContextKey(court, sideNumber){
      if(!court || !sideNumber) return '';
      const restrictedSide = getSideByNumber(court, sideNumber);
      const opponentSide = getSideByNumber(court, getOppositeSideNumber(sideNumber));
      return sessionCore.getHardshipContextKey(
        court.kind,
        getTeamIds(restrictedSide),
        getTeamIds(opponentSide)
      );
    }

    function getActiveHardshipLedger(){
      const current = ensureState();
      if(!current.hardshipRecords || typeof current.hardshipRecords !== 'object'){
        current.hardshipRecords = current.plan.activeHardships && typeof current.plan.activeHardships === 'object'
          ? current.plan.activeHardships
          : {};
      }
      Object.keys(current.hardshipRecords).forEach(function(key){
        if(String(key).indexOf('hardship::') !== 0) delete current.hardshipRecords[key];
      });
      current.plan.activeHardships = current.hardshipRecords;
      return current.hardshipRecords;
    }

    function normaliseHardshipRule(rule, side, sideNumber, court){
      rule = rule && typeof rule === 'object' ? rule : {};
      const ids = Array.isArray(rule.adjustedSideIds) && rule.adjustedSideIds.length ? rule.adjustedSideIds.slice() : getTeamIds(side);
      const mode = rule.mode && ['singles','doubles'].includes(rule.mode) ? rule.mode : (sideNumber ? getRestrictionZoneMode(court || {}, sideNumber) : 'doubles');
      let targetPreset = String(rule.targetPreset || '').trim();
      if(!getPresetOrder(mode).includes(targetPreset)) targetPreset = '';
      const shotStage = Math.min(1, Math.max(0, Math.round(Number(rule.shotStage || 0))));
      return {
        adjustedSideIds: ids.slice().sort(),
        adjustedSideNumber: Number(rule.adjustedSideNumber || sideNumber || 0) || null,
        mode,
        targetPreset: targetPreset || '',
        shotStage,
        shotRestrictions: normaliseShotRestrictions(rule.shotRestrictions, shotStage),
        updatedAt: Number(rule.updatedAt || 0) || Date.now()
      };
    }

    function hardshipRuleIsActive(rule){
      return !!(rule && ((rule.targetPreset && rule.targetPreset !== 'full-court') || Number(rule.shotStage || 0) > 0));
    }

    function getDominantHardshipLedger(){
      return getActiveHardshipLedger();
    }

    function getDominantHardshipKeyForSide(court, sideNumber){
      return getExactHardshipContextKey(court, sideNumber);
    }

    function getDominantHardshipRuleForSide(court, sideNumber){
      const side = getSideByNumber(court, sideNumber);
      const key = getDominantHardshipKeyForSide(court, sideNumber);
      if(!key) return null;
      const ledger = getDominantHardshipLedger();
      const raw = ledger[key];
      if(!raw || typeof raw !== 'object') return null;
      const mode = getRestrictionZoneMode(court, sideNumber);
      const order = getPresetOrder(mode);
      let targetPreset = String(raw.targetPreset || '').trim();
      if(!order.includes(targetPreset)) targetPreset = 'full-court';
      const shotRestrictions = normaliseShotRestrictions(raw.shotRestrictions, raw.shotStage);
      const shotStage = shotRestrictions.length ? 1 : 0;
      const movementStep = Math.max(0, order.indexOf(targetPreset));
      if(movementStep <= 0 && shotStage <= 0) return null;
      const rule = {
        targetPreset: movementStep > 0 ? targetPreset : 'full-court',
        shotStage,
        shotRestrictions,
        mode,
        adjustedSideIds: getTeamIds(side),
        adjustedSideNumber: Number(sideNumber),
        memoryScope:'exact-competitive-context',
        updatedAt: Number(raw.updatedAt || 0) || Date.now()
      };
      ledger[key] = rule;
      return { key, sideNumber:Number(sideNumber), side, rule };
    }

    function getActiveHardshipRuleEntryForCourt(court){
      if(!court) return null;
      const entries = [1, 2].map(function(sideNumber){ return getDominantHardshipRuleForSide(court, sideNumber); }).filter(Boolean);
      if(!entries.length) return null;
      entries.sort(function(a, b){
        const strongDiff = (b.sideNumber === court.strongerSide ? 1 : 0) - (a.sideNumber === court.strongerSide ? 1 : 0);
        if(strongDiff) return strongDiff;
        const shotDiff = Number(b.rule.shotStage || 0) - Number(a.rule.shotStage || 0);
        if(shotDiff) return shotDiff;
        const moveDiff = getPresetOrder(b.rule.mode).indexOf(b.rule.targetPreset || 'full-court') - getPresetOrder(a.rule.mode).indexOf(a.rule.targetPreset || 'full-court');
        if(moveDiff) return moveDiff;
        return String(b.rule.updatedAt || 0).localeCompare(String(a.rule.updatedAt || 0));
      });
      const entry = entries[0];
      return {
        key: entry.key,
        sideNumber: entry.sideNumber,
        memory: {
          hardships: [],
          hardshipCounts: {
            movement: entry.rule.targetPreset && entry.rule.targetPreset !== 'full-court'
              ? Math.max(1, getPresetOrder(entry.rule.mode).indexOf(entry.rule.targetPreset))
              : 0,
            shots: entry.rule.shotStage ? 1 : 0
          },
          singlesMaxLossCount: 0,
          expandStrongerCourt: false,
          expandStrongerCourtCount: 0,
          shotReliefCount: 0,
          singlesPreset: entry.rule.mode === 'singles' ? (entry.rule.targetPreset || '') : '',
          targetPreset: entry.rule.targetPreset || '',
          shotStage: entry.rule.shotStage || 0,
          adjustedSideIds: entry.rule.adjustedSideIds.slice(),
          adjustedSideNumber: entry.sideNumber,
          mode: entry.rule.mode
        }
      };
    }

    function getDominantHardshipEntryForCourt(court){
      if(!court) return null;
      const entries = [1, 2].map(function(sideNumber){
        return getDominantHardshipRuleForSide(court, sideNumber);
      }).filter(Boolean);
      if(!entries.length) return null;
      entries.sort(function(a, b){
        const strongDiff = (b.sideNumber === court.strongerSide ? 1 : 0) - (a.sideNumber === court.strongerSide ? 1 : 0);
        if(strongDiff) return strongDiff;
        const shotDiff = Number(b.rule.shotStage || 0) - Number(a.rule.shotStage || 0);
        if(shotDiff) return shotDiff;
        const moveDiff = getPresetOrder(b.rule.mode).indexOf(b.rule.targetPreset || 'full-court') - getPresetOrder(a.rule.mode).indexOf(a.rule.targetPreset || 'full-court');
        if(moveDiff) return moveDiff;
        return Number(b.rule.updatedAt || 0) - Number(a.rule.updatedAt || 0);
      });
      return entries[0];
    }

    function setDominantHardshipRuleForSide(court, sideNumber, targetPreset, shotStage, shotRestrictions){
      const side = getSideByNumber(court, sideNumber);
      const key = getDominantHardshipKeyForSide(court, sideNumber);
      if(!key) return null;
      const mode = getRestrictionZoneMode(court, sideNumber);
      const order = getPresetOrder(mode);
      let preset = String(targetPreset || 'full-court').trim();
      if(!order.includes(preset)) preset = 'full-court';
      const activeShotRestrictions = normaliseShotRestrictions(shotRestrictions, shotStage);
      const shots = activeShotRestrictions.length ? 1 : 0;
      const movementStep = Math.max(0, order.indexOf(preset));
      const ledger = getDominantHardshipLedger();
      if(movementStep <= 0 && shots <= 0){
        ledger[key] = {
          adjustedSideIds: getTeamIds(side),
          adjustedSideNumber: Number(sideNumber),
          mode,
          targetPreset:'full-court',
          shotStage:0,
          shotRestrictions:[],
          memoryScope:'exact-competitive-context',
          cleared:true,
          updatedAt:Date.now()
        };
        return null;
      }
      const rule = {
        adjustedSideIds: getTeamIds(side),
        adjustedSideNumber: Number(sideNumber),
        mode,
        targetPreset: movementStep > 0 ? preset : 'full-court',
        shotStage: shots,
        shotRestrictions: activeShotRestrictions,
        memoryScope:'exact-competitive-context',
        updatedAt: Date.now()
      };
      ledger[key] = rule;
      return rule;
    }

    function writeHardshipRuleForSide(court, sideNumber, patch){
      const current = getDominantHardshipRuleForSide(court, sideNumber);
      const currentRule = current && current.rule ? current.rule : {};
      const nextPreset = patch && Object.prototype.hasOwnProperty.call(patch, 'targetPreset')
        ? patch.targetPreset
        : (currentRule.targetPreset || 'full-court');
      const nextShotStage = patch && Object.prototype.hasOwnProperty.call(patch, 'shotStage')
        ? patch.shotStage
        : Number(currentRule.shotStage || 0);
      return setDominantHardshipRuleForSide(court, sideNumber, nextPreset, nextShotStage);
    }

    function increaseDominantHardshipForSide(court, sideNumber, hardshipType){
      const mode = getRestrictionZoneMode(court, sideNumber);
      const current = getDominantHardshipRuleForSide(court, sideNumber);
      const currentPreset = current && current.rule && current.rule.targetPreset ? current.rule.targetPreset : 'full-court';
      const currentShots = current && current.rule ? Number(current.rule.shotStage || 0) : 0;
      let nextPreset = currentPreset;
      let nextShots = currentShots;
      if(hardshipType === 'movement') nextPreset = tightenPreset(currentPreset, 1, mode);
      if(hardshipType === 'shots') nextShots = 1;
      return setDominantHardshipRuleForSide(
        court,
        sideNumber,
        nextPreset,
        nextShots,
        hardshipType === 'shots'
          ? ['no-smashes', 'no-downward-shots']
          : (current && current.rule ? current.rule.shotRestrictions : [])
      );
    }

    function reduceDominantHardshipForSide(court, sideNumber, hardshipType){
      const mode = getRestrictionZoneMode(court, sideNumber);
      const current = getDominantHardshipRuleForSide(court, sideNumber);
      const currentPreset = current && current.rule && current.rule.targetPreset ? current.rule.targetPreset : 'full-court';
      const currentShots = current && current.rule ? Number(current.rule.shotStage || 0) : 0;
      let nextPreset = currentPreset;
      let nextShots = currentShots;
      if(hardshipType === 'movement') nextPreset = loosenPreset(currentPreset, 1, mode);
      if(hardshipType === 'shots') nextShots = 0;
      return setDominantHardshipRuleForSide(
        court,
        sideNumber,
        nextPreset,
        nextShots,
        hardshipType === 'shots' ? [] : (current && current.rule ? current.rule.shotRestrictions : [])
      );
    }

    function getDominantMovementStepForSide(court, sideNumber){
      const current = getDominantHardshipRuleForSide(court, sideNumber);
      if(!current || !current.rule) return 0;
      return Math.max(0, getPresetOrder(current.rule.mode).indexOf(current.rule.targetPreset || 'full-court'));
    }

    function getDominantShotStageForSide(court, sideNumber){
      const current = getDominantHardshipRuleForSide(court, sideNumber);
      return current && current.rule ? Math.min(1, Math.max(0, Math.round(Number(current.rule.shotStage || 0)))) : 0;
    }

    function getDominantIncreaseOptionsForSide(court, sideNumber){
      const list = [];
      if(!sideNumber) return list;
      const mode = getRestrictionZoneMode(court, sideNumber);
      const movementStep = getDominantMovementStepForSide(court, sideNumber);
      if(movementStep < getPresetOrder(mode).length - 1) list.push({ value:'movement', label:'Reduce Target Area' });
      if(getDominantShotStageForSide(court, sideNumber) < 1) list.push({ value:'shots', label:'Remove Shot Options' });
      return list;
    }

    function getDominantReduceOptionsForSide(court, sideNumber){
      const list = [];
      if(!sideNumber) return list;
      if(getDominantMovementStepForSide(court, sideNumber) > 0) list.push({ value:'movement', label:'Expand Target Area' });
      if(getDominantShotStageForSide(court, sideNumber) > 0) list.push({ value:'shots', label:'Restore Shot Options' });
      return list;
    }

    function applyDominantRuleToCourt(court, entry){
      if(!court || !entry || !entry.rule) return court;
      const mode = entry.rule.mode || getRestrictionZoneMode(court, entry.sideNumber);
      const preset = entry.rule.targetPreset && entry.rule.targetPreset !== 'full-court' ? entry.rule.targetPreset : 'full-court';
      const shotRestrictions = normaliseShotRestrictions(entry.rule.shotRestrictions, entry.rule.shotStage);
      const shotStage = shotRestrictions.length ? 1 : 0;
      const appliedZones = preset !== 'full-court' ? sanitizeZones(PRESET_ZONE_MAP[preset] || [], mode) : [];
      court.restrictedSide = Number(entry.sideNumber);
      court.restrictionTargetSide = getOppositeSideNumber(entry.sideNumber);
      court.restrictionMode = mode;
      court.mode = mode;
      court.targetPreset = preset;
      court.appliedZones = appliedZones;
      court.targetAreaText = getTargetAreaTextFromPreset(preset, mode) || getTargetAreaTextFromZones(appliedZones, mode);
      court.shotRestrictionStage = shotStage;
      court.shotRestrictions = shotRestrictions;
      court.boundaryActive = appliedZones.length > 0;
      court.alteredRulesActive = court.boundaryActive || shotStage > 0;
      court.discoveryGame = false;
      return court;
    }

    return Object.freeze({
      getSideRestrictionKeyFromIds,
      getSideRestrictionKey,
      getExactHardshipContextKey,
      getActiveHardshipLedger,
      normaliseHardshipRule,
      hardshipRuleIsActive,
      getActiveHardshipRuleEntryForCourt,
      writeHardshipRuleForSide,
      getDominantHardshipLedger,
      getDominantHardshipKeyForSide,
      getDominantHardshipRuleForSide,
      getDominantHardshipEntryForCourt,
      setDominantHardshipRuleForSide,
      increaseDominantHardshipForSide,
      reduceDominantHardshipForSide,
      getDominantMovementStepForSide,
      getDominantShotStageForSide,
      getDominantIncreaseOptionsForSide,
      getDominantReduceOptionsForSide,
      applyDominantRuleToCourt
    });
  }

  global.BASELINE_BADMINTON_HARDSHIPS = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);
