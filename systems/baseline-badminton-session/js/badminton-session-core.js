(function(global){
  'use strict';

  // Shared, side-effect-free Badminton Session foundations.
  // Keep stable Player ID / Pair ID identity here so controller/rendering
  // changes cannot silently redefine what a matchup means.
  const DOUBLES_ZONES = Object.freeze(['C1','L1','L2','C2','S1','M1','M2','S2','FS1','F1','FS2']);
  const SINGLES_ZONES = Object.freeze(['L1','L2','M1','M2','S1','S2','F1']);
  const PRESET_ZONE_MAP = Object.freeze({
    'full-court': Object.freeze([]),
    'f1m1m2l1l2': Object.freeze(['F1','M1','M2','L1','L2']),
    'm1s1m2s2f1fs1fs2': Object.freeze(['M1','S1','M2','S2','F1','FS1','FS2']),
    'm1m2f1': Object.freeze(['M1','M2','F1']),
    'm1l1m2l2': Object.freeze(['M1','L1','M2','L2']),
    'm1f1m2f1': Object.freeze(['M1','M2','F1']),
    'm1m2': Object.freeze(['M1','M2']),
    'm1l1-or-m2l2': Object.freeze(['M1','L1','M2','L2']),
    'm1f1-or-m2f1': Object.freeze(['M1','M2','F1']),
    'm1s1-or-m2s2': Object.freeze(['M1','S1','M2','S2']),
    'm1-or-m2': Object.freeze(['M1','M2']),
    'serve-m-s': Object.freeze(['M1','S1','M2','S2']),
    'serve-m': Object.freeze(['M1','M2'])
  });

  function normaliseIds(ids){
    return (Array.isArray(ids) ? ids : [])
      .map(function(id){ return String(id || '').trim(); })
      .filter(Boolean)
      .sort();
  }

  function stablePlayerId(player){
    if(!player || typeof player !== 'object') return '';
    const id = String(player.id || player.playerId || '').trim();
    return id ? ('id:' + id) : '';
  }

  function stablePlayerIds(players){
    return normaliseIds((Array.isArray(players) ? players : []).map(stablePlayerId).filter(Boolean));
  }


  function getStableSideKey(ids){
    const cleaned = normaliseIds(ids);
    return cleaned.length ? ('side::' + cleaned.join('::')) : '';
  }

  function getHardshipContextKey(kind, restrictedIds, opponentIds){
    const restrictedKey = getStableSideKey(restrictedIds);
    const opponentKey = getStableSideKey(opponentIds);
    const stableKind = String(kind || '').trim() || 'unknown';
    if(!restrictedKey || !opponentKey) return '';
    return ['hardship', stableKind, 'restricted', restrictedKey, 'opponent', opponentKey].join('::');
  }

  function hardshipSnapshot(records){
    const source = records && typeof records === 'object' ? records : {};
    const ordered = {};
    Object.keys(source).sort().forEach(function(key){
      const value = source[key];
      if(value && typeof value === 'object') ordered[key] = value;
    });
    return JSON.stringify(ordered);
  }




  global.BASELINE_BADMINTON_SESSION_CORE = Object.freeze({
    DOUBLES_ZONES:DOUBLES_ZONES,
    SINGLES_ZONES:SINGLES_ZONES,
    PRESET_ZONE_MAP:PRESET_ZONE_MAP,
    normaliseIds:normaliseIds,
    stablePlayerId:stablePlayerId,
    stablePlayerIds:stablePlayerIds,
    getStableSideKey:getStableSideKey,
    getHardshipContextKey:getHardshipContextKey,
    hardshipSnapshot:hardshipSnapshot
  });
})(typeof window !== 'undefined' ? window : globalThis);
