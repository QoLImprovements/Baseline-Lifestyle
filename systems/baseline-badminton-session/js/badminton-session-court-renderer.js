(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const escapeHtml = options.escapeHtml;
    const uid = options.uid;
    const getCourtGeometry = options.getCourtGeometry;
    const getZoneMode = options.getZoneMode;
    const getTopCourtZones = options.getTopCourtZones;
    const mirrorRect = options.mirrorRect;
    const getZoneDisplayOrder = options.getZoneDisplayOrder;
    const getOppositeSideNumber = options.getOppositeSideNumber;
    const sanitizeZones = options.sanitizeZones;
    const getPresetFromZones = options.getPresetFromZones;
    const getDominantHardshipEntryForCourt = options.getDominantHardshipEntryForCourt;
    const normaliseShotRestrictions = options.normaliseShotRestrictions;
    const getTeamLabel = options.getTeamLabel;
    const getSideByNumber = options.getSideByNumber;
    const getTargetAreaTextFromPreset = options.getTargetAreaTextFromPreset;
    const getShotRestrictionText = options.getShotRestrictionText;
    const getShotRestrictionHtml = options.getShotRestrictionHtml;

    function getZoneRectsForSide(side, mode){
      const top = getTopCourtZones(mode);
      const zones = {};
      Object.keys(top).forEach(function(name){
        zones[name] = mirrorRect(side, top[name]);
      });
      return zones;
    }

    function getActiveShotRestrictionsForCourt(court){
      const entry = getDominantHardshipEntryForCourt(court);
      if(!entry || !entry.rule || !entry.sideNumber) return { sideNumber:0, restrictions:[] };
      return {
        sideNumber:Number(entry.sideNumber),
        restrictions:normaliseShotRestrictions(entry.rule.shotRestrictions, entry.rule.shotStage)
      };
    }

    function renderCourtShotRestrictionIcon(type){
      const noSmashes = type === 'no-smashes';
      const label = noSmashes ? 'No Smashes' : 'No Downward Shots';
      const symbol = noSmashes
        ? '<path d="M18 7 L12.5 17 H18 L14.5 27 L26 14.5 H20.5 L24 7 Z" fill="#5f2394"></path>'
        : '<path d="M11 10 L25 24 M19 24 H25 V18" fill="none" stroke="#5f2394" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>';
      return '<details class="court-shot-restriction court-shot-restriction--' + escapeHtml(type) + '">' +
        '<summary aria-label="' + escapeHtml(label) + '" title="' + escapeHtml(label) + '">' +
          '<svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">' +
            '<circle cx="18" cy="18" r="15" fill="rgba(238,218,251,.96)" stroke="#c8273d" stroke-width="3"></circle>' +
            symbol +
            '<line x1="7.5" y1="28.5" x2="28.5" y2="7.5" stroke="#c8273d" stroke-width="3.4" stroke-linecap="round"></line>' +
          '</svg>' +
        '</summary>' +
        '<span class="court-shot-restriction__caption">' + escapeHtml(label) + '</span>' +
      '</details>';
    }

    function renderCourtShotRestrictionOverlay(court){
      const active = getActiveShotRestrictionsForCourt(court);
      if(!active.sideNumber || !active.restrictions.length) return '';
      return '<div class="court-shot-restrictions is-side-' + escapeHtml(String(active.sideNumber)) + '" data-restricted-side="' + escapeHtml(String(active.sideNumber)) + '">' +
        active.restrictions.map(renderCourtShotRestrictionIcon).join('') +
      '</div>';
    }

    function getHardshipHelpText(court){
      const entry = getDominantHardshipEntryForCourt(court);
      if(!entry || !entry.rule || !entry.sideNumber) return '';
      const adjustedLabel = getTeamLabel(getSideByNumber(court, entry.sideNumber));
      const opponentLabel = getTeamLabel(getSideByNumber(court, getOppositeSideNumber(entry.sideNumber)));
      const rule = entry.rule;
      const parts = ['Saved hardship for ' + adjustedLabel + ' vs ' + opponentLabel + '.'];
      if(rule.targetPreset && rule.targetPreset !== 'full-court'){
        parts.push('Target area: ' + (court.targetAreaText || getTargetAreaTextFromPreset(rule.targetPreset, rule.mode) || 'reduced court area') + '.');
      }
      const shotText = getShotRestrictionText(rule.shotStage, rule.shotRestrictions);
      if(shotText) parts.push('Shot restriction: ' + shotText + '.');
      parts.push('This remains saved until a later result changes it.');
      return parts.join(' ');
    }

    function renderHardshipHelp(court){
      const hardshipText = getHardshipHelpText(court);
      const text = hardshipText || 'No saved hardship is active for this matchup. The court diagram shows the playable court area and any active restrictions for this game.';
      return '<details class="court-hardship-help"><summary aria-label="Game information" title="Game information">i</summary><div class="court-hardship-help__caption"><strong>Game information</strong><span>' + escapeHtml(text) + '</span></div></details>';
    }

    function renderRuleGuidance(court){
      if(court.discoveryGame){
        return '<div class="status-box"><strong>Instruction</strong><br/>Play full ' + escapeHtml(court.mode === 'singles' ? 'singles court' : 'court') + '. This is the first recorded game for ' + escapeHtml((court.firstTimePlayerNames || []).join(' / ')) + '.</div>';
      }
      const restrictedSide = Number(court && court.restrictedSide || 0);
      if(!restrictedSide || !court.alteredRulesActive){
        return '<div class="status-box"><strong>Instruction</strong><br/>No hardship alteration is active. Play full court.</div>';
      }
      const adjustedLabel = getTeamLabel(restrictedSide === 1 ? court.side1 : court.side2);
      const preset = String(court.targetPreset || '').trim();
      const parts = [
        '<strong>Instruction</strong>',
        escapeHtml(adjustedLabel) + ': aim for ' + escapeHtml(court.targetAreaText || 'full court') + '.'
      ];
      if(court.mode === 'singles' && ['m1l1-or-m2l2','m1f1-or-m2f1','m1s1-or-m2s2','m1-or-m2'].includes(preset)){
        parts.push('The clear side on the diagram is the side being served to. Switch to the other side when the served-to side switches.');
      }
      const shotHtml = getShotRestrictionHtml(court.shotRestrictionStage, court.shotRestrictions);
      if(shotHtml) parts.push('Shots: ' + shotHtml + '.');
      return '<div class="status-box">' + parts.join('<br/>') + '</div>';
    }

    function renderCourtDiagram(court){
      const g = getCourtGeometry();
      const explicitMode = String(court && (court.restrictionMode || court.mode) || '').trim();
      const mode = explicitMode === 'singles' || explicitMode === 'doubles' ? explicitMode : getZoneMode(court);
      const topZones = getZoneRectsForSide(1, mode);
      const bottomZones = getZoneRectsForSide(2, mode);
      function zoneLabel(zone, label){
        const area = zone.w * zone.h;
        const fontSize = area < 80 ? 2.4 : (area < 180 ? 2.9 : 3.6);
        return '<text x="' + (zone.x + zone.w / 2) + '" y="' + (zone.y + zone.h / 2) + '" font-family="Inter, Arial, sans-serif" font-size="' + fontSize + '" font-weight="800" fill="#f9f6ee" text-anchor="middle" dominant-baseline="middle">' + label + '</text>';
      }
      const topText = getZoneDisplayOrder(mode).map(function(name){ return zoneLabel(topZones[name], name); }).join('');
      const bottomText = getZoneDisplayOrder(mode).map(function(name){ return zoneLabel(bottomZones[name], name); }).join('');
      const singlesSideShade = mode === 'singles'
        ? '<rect x="' + g.outer.left + '" y="' + g.outer.top + '" width="' + (g.singles.left - g.outer.left) + '" height="' + (g.outer.bottom - g.outer.top) + '" fill="rgba(50,56,62,0.22)"></rect>' +
          '<rect x="' + g.singles.right + '" y="' + g.outer.top + '" width="' + (g.outer.right - g.singles.right) + '" height="' + (g.outer.bottom - g.outer.top) + '" fill="rgba(50,56,62,0.22)"></rect>'
        : '';
      return '<div class="court-diagram" aria-hidden="true">' +
        '<svg viewBox="0 0 100 220" role="img" aria-label="Badminton court with labelled target areas">' +
          '<defs>' +
            '<linearGradient id="court-surface" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#88b968"></stop><stop offset="100%" stop-color="#668e4f"></stop></linearGradient>' +
            '<radialGradient id="court-surround" cx="50%" cy="50%" r="74%"><stop offset="0%" stop-color="#ffd66f"></stop><stop offset="44%" stop-color="#f3aa57"></stop><stop offset="72%" stop-color="#e7bd83"></stop><stop offset="100%" stop-color="#d9b7f1"></stop></radialGradient>' +
          '</defs>' +
          '<rect x="0" y="0" width="100" height="220" fill="url(#court-surround)"></rect>' +
          '<rect x="' + g.outer.left + '" y="' + g.outer.top + '" width="' + (g.outer.right - g.outer.left) + '" height="' + (g.outer.bottom - g.outer.top) + '" fill="url(#court-surface)"></rect>' +
          singlesSideShade +
          '<rect x="' + (g.outer.left - 1.5) + '" y="' + (g.netY - 1.55) + '" width="' + ((g.outer.right - g.outer.left) + 3) + '" height="3.1" rx="1.1" ry="1.1" fill="#2e233a" opacity="0.88"></rect>' +
          '<rect x="' + g.outer.left + '" y="' + g.outer.top + '" width="' + (g.outer.right - g.outer.left) + '" height="' + (g.outer.bottom - g.outer.top) + '" fill="none" stroke="#f8f5ef" stroke-width="1.3"></rect>' +
          '<line x1="' + g.singles.left + '" y1="' + g.outer.top + '" x2="' + g.singles.left + '" y2="' + g.outer.bottom + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.singles.right + '" y1="' + g.outer.top + '" x2="' + g.singles.right + '" y2="' + g.outer.bottom + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.outer.left + '" y1="' + g.doublesLongTop + '" x2="' + g.outer.right + '" y2="' + g.doublesLongTop + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.outer.left + '" y1="' + g.doublesLongBottom + '" x2="' + g.outer.right + '" y2="' + g.doublesLongBottom + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.outer.left + '" y1="' + g.shortServiceTop + '" x2="' + g.outer.right + '" y2="' + g.shortServiceTop + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.outer.left + '" y1="' + g.shortServiceBottom + '" x2="' + g.outer.right + '" y2="' + g.shortServiceBottom + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.centreX + '" y1="' + g.outer.top + '" x2="' + g.centreX + '" y2="' + g.shortServiceTop + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.centreX + '" y1="' + g.shortServiceBottom + '" x2="' + g.centreX + '" y2="' + g.outer.bottom + '" stroke="#f8f5ef" stroke-width="0.85"></line>' +
          '<line x1="' + g.outer.left + '" y1="' + g.netY + '" x2="' + g.outer.right + '" y2="' + g.netY + '" stroke="#f8f5ef" stroke-width="1.15"></line>' +
          topText + bottomText +
        '</svg>' +
      '</div>';
    }

    function renderBoundaryMask(court){
      if(!court.boundaryActive) return '';
      const explicitMode = String(court && (court.restrictionMode || court.mode) || '').trim();
      const mode = explicitMode === 'singles' || explicitMode === 'doubles' ? explicitMode : getZoneMode(court);
      const targetSideNumber = Number(court.restrictionTargetSide || getOppositeSideNumber(court.restrictedSide || court.strongerSide || 0) || court.weakerSide || 0);
      if(!targetSideNumber) return '';
      const allZones = getZoneDisplayOrder(mode);
      const weakerZones = getZoneRectsForSide(targetSideNumber, mode);
      const g = getCourtGeometry();
      const activeHalf = targetSideNumber === 1
        ? { x:g.outer.left, y:g.outer.top, w:g.outer.right - g.outer.left, h:g.netY - g.outer.top }
        : { x:g.outer.left, y:g.netY, w:g.outer.right - g.outer.left, h:g.outer.bottom - g.netY };
      const allowed = sanitizeZones(court.appliedZones || [], mode);
      const preset = String(court.targetPreset || getPresetFromZones(allowed, mode) || '').trim();
      const hatched = [];
      if(mode === 'singles'){
        if(preset === 'm1l1-or-m2l2') hatched.push('M2', 'L2');
        else if(preset === 'm1f1-or-m2f1') hatched.push('M2');
        else if(preset === 'm1s1-or-m2s2') hatched.push('M2', 'S2');
        else if(preset === 'm1-or-m2') hatched.push('M2');
      }
      const greyZones = allZones.filter(function(zone){ return !allowed.includes(zone); });
      const baseId = String(court.signature || uid('mask')).replace(/[^a-zA-Z0-9_-]+/g, '-');
      const hatchPatternId = 'hatch-' + baseId;
      const greyRects = greyZones.map(function(zone){
        const z = weakerZones[zone];
        return z ? '<rect x="' + z.x + '" y="' + z.y + '" width="' + z.w + '" height="' + z.h + '" fill="rgba(56,58,66,0.56)"></rect>' : '';
      }).join('');
      const hatchRects = hatched.map(function(zone){
        const z = weakerZones[zone];
        return z ? '<rect x="' + z.x + '" y="' + z.y + '" width="' + z.w + '" height="' + z.h + '" fill="url(#' + hatchPatternId + ')"></rect>' : '';
      }).join('');
      return '<div class="boundary-mask" aria-hidden="true">' +
        '<svg viewBox="0 0 100 220" preserveAspectRatio="none">' +
          '<defs>' +
            '<pattern id="' + hatchPatternId + '" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">' +
              '<rect x="0" y="0" width="6" height="6" fill="rgba(56,58,66,0.10)"></rect>' +
              '<line x1="0" y1="0" x2="0" y2="6" stroke="rgba(56,58,66,0.48)" stroke-width="1.3"></line>' +
            '</pattern>' +
            '<clipPath id="clip-' + baseId + '"><rect x="' + activeHalf.x + '" y="' + activeHalf.y + '" width="' + activeHalf.w + '" height="' + activeHalf.h + '"></rect></clipPath>' +
          '</defs>' +
          '<g clip-path="url(#clip-' + baseId + ')">' + greyRects + hatchRects + '</g>' +
        '</svg>' +
      '</div>';
    }

    return Object.freeze({
      getZoneRectsForSide:getZoneRectsForSide,
      getActiveShotRestrictionsForCourt:getActiveShotRestrictionsForCourt,
      renderCourtShotRestrictionIcon:renderCourtShotRestrictionIcon,
      renderCourtShotRestrictionOverlay:renderCourtShotRestrictionOverlay,
      getHardshipHelpText:getHardshipHelpText,
      renderHardshipHelp:renderHardshipHelp,
      renderRuleGuidance:renderRuleGuidance,
      renderCourtDiagram:renderCourtDiagram,
      renderBoundaryMask:renderBoundaryMask
    });
  }

  global.BASELINE_BADMINTON_COURT_RENDERER = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);
