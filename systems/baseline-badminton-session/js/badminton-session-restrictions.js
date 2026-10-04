(function(global){
  'use strict';

  function create(options){
    options = options && typeof options === 'object' ? options : {};
    const getCourtGeometry = options.getCourtGeometry;
    const rect = options.rect;
    const escapeHtml = options.escapeHtml;
    const DOUBLES_ZONES = options.doublesZones || [];
    const SINGLES_ZONES = options.singlesZones || [];
    const PRESET_ZONE_MAP = options.presetZoneMap || {};

  function getZoneMode(court){
    const explicitMode = String(court && (court.restrictionMode || court.mode) || '').trim();
    if(explicitMode === 'singles' || explicitMode === 'doubles') return explicitMode;
    return court && court.kind === 'singles' ? 'singles' : 'doubles';
  }


  function getTopCourtZones(mode){
    const g = getCourtGeometry();
    if(mode === 'singles'){
      return {
        L1: rect(g.singles.left, g.outer.top, g.centreX - g.singles.left, g.doublesLongTop - g.outer.top),
        L2: rect(g.centreX, g.outer.top, g.singles.right - g.centreX, g.doublesLongTop - g.outer.top),
        M1: rect(g.singles.left, g.doublesLongTop, g.centreX - g.singles.left, g.shortServiceTop - g.doublesLongTop),
        M2: rect(g.centreX, g.doublesLongTop, g.singles.right - g.centreX, g.shortServiceTop - g.doublesLongTop),
        S1: rect(g.outer.left, g.doublesLongTop, g.singles.left - g.outer.left, g.shortServiceTop - g.doublesLongTop),
        S2: rect(g.singles.right, g.doublesLongTop, g.outer.right - g.singles.right, g.shortServiceTop - g.doublesLongTop),
        F1: rect(g.singles.left, g.shortServiceTop, g.singles.right - g.singles.left, g.netY - g.shortServiceTop)
      };
    }
    return {
      C1: rect(g.outer.left, g.outer.top, g.singles.left - g.outer.left, g.doublesLongTop - g.outer.top),
      L1: rect(g.singles.left, g.outer.top, g.centreX - g.singles.left, g.doublesLongTop - g.outer.top),
      L2: rect(g.centreX, g.outer.top, g.singles.right - g.centreX, g.doublesLongTop - g.outer.top),
      C2: rect(g.singles.right, g.outer.top, g.outer.right - g.singles.right, g.doublesLongTop - g.outer.top),
      S1: rect(g.outer.left, g.doublesLongTop, g.singles.left - g.outer.left, g.shortServiceTop - g.doublesLongTop),
      M1: rect(g.singles.left, g.doublesLongTop, g.centreX - g.singles.left, g.shortServiceTop - g.doublesLongTop),
      M2: rect(g.centreX, g.doublesLongTop, g.singles.right - g.centreX, g.shortServiceTop - g.doublesLongTop),
      S2: rect(g.singles.right, g.doublesLongTop, g.outer.right - g.singles.right, g.shortServiceTop - g.doublesLongTop),
      FS1: rect(g.outer.left, g.shortServiceTop, g.singles.left - g.outer.left, g.netY - g.shortServiceTop),
      F1: rect(g.singles.left, g.shortServiceTop, g.singles.right - g.singles.left, g.netY - g.shortServiceTop),
      FS2: rect(g.singles.right, g.shortServiceTop, g.outer.right - g.singles.right, g.netY - g.shortServiceTop)
    };
  }


  function getZoneDisplayOrder(mode){
    return mode === 'singles' ? ['L1','L2','M1','M2','S1','S2','F1'] : DOUBLES_ZONES;
  }


  function getAllowedZones(mode){
    return mode === 'singles' ? SINGLES_ZONES : DOUBLES_ZONES;
  }


  function sanitizeZones(zones, mode){
    const allowed = getAllowedZones(mode);
    const seen = new Set();
    (zones || []).forEach(zone => {
      if(allowed.includes(zone)) seen.add(zone);
    });
    return allowed.filter(zone => seen.has(zone));
  }


  function zoneSetKey(zones, mode){
    return sanitizeZones(zones || [], mode).join('|');
  }


  function zonesMatch(a, b, mode){
    return zoneSetKey(a || [], mode) === zoneSetKey(b || [], mode);
  }


  function getPresetOrder(mode){
    // Ordered from least restricted to most restricted.
    // The final movement ceiling is M1/M2; no tighter target area exists.
    return mode === 'singles'
      ? ['full-court','m1l1m2l2','m1m2f1','m1m2','m1l1-or-m2l2','m1f1-or-m2f1','m1s1-or-m2s2','m1-or-m2']
      : ['full-court','f1m1m2l1l2','m1s1m2s2f1fs1fs2','m1m2f1','serve-m-s','m1m2','serve-m'];
  }


  function recommendPresetFromGap(gap, mode){
    if(mode === 'singles'){
      if(gap <= 0) return 'full-court';
      if(gap < 4) return 'm1l1m2l2';
      if(gap < 8) return 'm1m2f1';
      if(gap < 12) return 'm1m2';
      if(gap < 16) return 'm1l1-or-m2l2';
      if(gap < 20) return 'm1f1-or-m2f1';
      if(gap < 24) return 'm1s1-or-m2s2';
      return 'm1-or-m2';
    }
    if(gap >= 18) return 'serve-m';
    if(gap >= 15) return 'm1m2';
    if(gap >= 12) return 'serve-m-s';
    if(gap >= 9) return 'm1m2f1';
    if(gap >= 6) return 'm1s1m2s2f1fs1fs2';
    if(gap >= 3) return 'f1m1m2l1l2';
    return 'full-court';
  }


  function tightenPreset(preset, steps, mode){
    const order = getPresetOrder(mode);
    let index = Math.max(0, order.indexOf(preset || 'full-court'));
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && index < order.length - 1){
      index += 1;
      remaining -= 1;
    }
    return order[index] || 'full-court';
  }


  function loosenPreset(preset, steps, mode){
    const order = getPresetOrder(mode);
    let index = Math.max(0, order.indexOf(preset || 'full-court'));
    let remaining = Math.max(0, Math.round(Number(steps || 0)));
    while(remaining > 0 && index > 0){
      index -= 1;
      remaining -= 1;
    }
    return order[index] || 'full-court';
  }


  function getTargetAreaTextFromPreset(preset, mode){
    if(mode === 'singles'){
      if(preset === 'full-court') return 'Full singles court';
      if(preset === 'm1l1m2l2') return 'M1 + M2 + L1 + L2';
      if(preset === 'm1m2f1') return 'M1 + M2 + F1';
      if(preset === 'm1m2') return 'M1 + M2';
      if(preset === 'm1l1-or-m2l2') return 'M1 + L1 or M2 + L2';
      if(preset === 'm1f1-or-m2f1') return 'M1 + F1 or M2 + F1';
      if(preset === 'm1s1-or-m2s2') return 'M1/S1 or M2/S2';
      if(preset === 'm1-or-m2') return 'M1 or M2';
    }else{
      if(preset === 'full-court') return 'Full doubles court';
      if(preset === 'f1m1m2l1l2') return 'F1 + M1 + M2 + L1 + L2';
      if(preset === 'm1s1m2s2f1fs1fs2') return 'M1 + S1 + M2 + S2 + F1 + FS1 + FS2';
      if(preset === 'm1m2f1') return 'M1 + M2 + F1';
      if(preset === 'serve-m-s') return 'M1 + S1 or M2 + S2';
      if(preset === 'm1m2') return 'M1 + M2';
      if(preset === 'serve-m') return 'M1 or M2';
    }
    return '';
  }


  function getTargetAreaTextFromZones(zones, mode){
    const cleaned = sanitizeZones(zones || [], mode);
    if(!cleaned.length || cleaned.length >= getAllowedZones(mode).length) return mode === 'singles' ? 'Full singles court' : 'Full court';
    if(zonesMatch(cleaned, ['M1','M2'], mode)) return mode === 'singles' ? 'M1 or M2' : 'M1 or M2';
    if(zonesMatch(cleaned, ['M1','S1','M2','S2'], mode)) return mode === 'singles' ? 'M1/S1 or M2/S2' : 'M1 + S1 or M2 + S2';
    if(zonesMatch(cleaned, ['M1','M2','F1'], mode)) return 'M1 + M2 + F1';
    if(zonesMatch(cleaned, ['L1','L2','M1','M2'], mode)) return 'M1 + M2 + L1 + L2';
    return cleaned.join(' + ');
  }


  function normaliseShotRestrictions(restrictions, stage){
    const allowed = ['no-smashes', 'no-downward-shots'];
    const cleaned = Array.isArray(restrictions)
      ? restrictions.map(function(value){ return String(value || '').trim(); }).filter(function(value, index, list){
          return allowed.includes(value) && list.indexOf(value) === index;
        })
      : [];
    if(cleaned.length) return cleaned;
    return Number(stage || 0) > 0 ? allowed.slice() : [];
  }


  function getShotRestrictionText(stage, restrictions){
    const active = normaliseShotRestrictions(restrictions, stage);
    if(!active.length) return '';
    if(active.length === 1) return active[0] === 'no-smashes' ? 'No Smashes' : 'No Downward Shots';
    return 'No Smashes or No Downward Shots';
  }


  function getShotRestrictionHtml(stage, restrictions){
    const active = normaliseShotRestrictions(restrictions, stage);
    if(!active.length) return '';
    const labels = active.map(function(value){
      const label = value === 'no-smashes' ? 'No Smashes' : 'No Downward Shots';
      return '<strong>' + escapeHtml(label) + '</strong>';
    });
    return labels.length === 1 ? labels[0] : labels.join(' or ');
  }


  function getHardshipLabel(value){
    const raw = String(value || '').trim();
    if(!raw) return '—';
    if(raw === 'movement') return 'Reduce Target Area';
    if(raw === 'shots') return 'Remove Shot Options';
    if(raw === 'reducedMovement') return 'Expand Target Area';
    if(raw === 'reducedShots') return 'Restore Shot Options';
    return raw;
  }

  // BASELINE-BADMINTON-HARDSHIP-FINAL-ENFORCEMENT-20260608
  // The visible hardship choice must always become the saved rule. This helper
  // reads both native values and custom-select visible labels so the save path
  // cannot be bypassed by dropdown enhancement.

  function hardshipValueFromVisibleText(text){
    const value = String(text || '').trim().toLowerCase();
    if(!value || value === 'choose adjustment') return '';
    if(value.includes('reduce target area') || value.includes('expand target area')) return 'movement';
    if(value.includes('remove shot options') || value.includes('restore shot options')) return 'shots';
    return '';
  }


    return Object.freeze({
      getZoneMode:getZoneMode,
      getTopCourtZones:getTopCourtZones,
      getZoneDisplayOrder:getZoneDisplayOrder,
      getAllowedZones:getAllowedZones,
      sanitizeZones:sanitizeZones,
      zoneSetKey:zoneSetKey,
      zonesMatch:zonesMatch,
      getPresetOrder:getPresetOrder,
      recommendPresetFromGap:recommendPresetFromGap,
      tightenPreset:tightenPreset,
      loosenPreset:loosenPreset,
      getTargetAreaTextFromPreset:getTargetAreaTextFromPreset,
      getTargetAreaTextFromZones:getTargetAreaTextFromZones,
      normaliseShotRestrictions:normaliseShotRestrictions,
      getShotRestrictionText:getShotRestrictionText,
      getShotRestrictionHtml:getShotRestrictionHtml,
      getHardshipLabel:getHardshipLabel,
      hardshipValueFromVisibleText:hardshipValueFromVisibleText
    });
  }

  global.BASELINE_BADMINTON_RESTRICTIONS = Object.freeze({ create:create });
})(typeof window !== 'undefined' ? window : globalThis);
