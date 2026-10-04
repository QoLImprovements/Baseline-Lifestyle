(function(global){
  'use strict';

  // Shared, side-effect-free Badminton Session foundations.
  // Keep identity and persistence reconciliation here so controller/rendering
  // changes cannot silently redefine what a Player ID / Pair ID matchup means.
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

  function clone(value){
    return value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
  }

  function mergeNewestHardshipRecords(serverLedger, localLedger){
    const server = serverLedger && typeof serverLedger === 'object' ? serverLedger : {};
    const local = localLedger && typeof localLedger === 'object' ? localLedger : {};
    const merged = Object.assign({}, server);
    let recovered = false;

    Object.keys(local).forEach(function(key){
      if(String(key).indexOf('hardship::') !== 0) return;
      const localRule = local[key];
      if(!localRule || typeof localRule !== 'object') return;
      const serverRule = merged[key];
      const localUpdatedAt = Number(localRule.updatedAt || 0);
      const serverUpdatedAt = Number(serverRule && serverRule.updatedAt || 0);
      if(!serverRule || localUpdatedAt > serverUpdatedAt){
        merged[key] = clone(localRule);
        recovered = true;
      }
    });

    return { ledger:merged, recovered:recovered };
  }

  global.BASELINE_BADMINTON_SESSION_CORE = Object.freeze({
    DOUBLES_ZONES:DOUBLES_ZONES,
    SINGLES_ZONES:SINGLES_ZONES,
    PRESET_ZONE_MAP:PRESET_ZONE_MAP,
    normaliseIds:normaliseIds,
    getStableSideKey:getStableSideKey,
    getHardshipContextKey:getHardshipContextKey,
    mergeNewestHardshipRecords:mergeNewestHardshipRecords
  });
})(typeof window !== 'undefined' ? window : globalThis);
