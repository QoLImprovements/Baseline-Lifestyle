(function(){
  'use strict';

  // Compatibility-only cleanup for the retired Games Hub view preference.
  // Recreation navigation is URL-owned; this key must never become Saved Data.
  const legacyKeys=['baselineGamesHubView'];
  ['localStorage','sessionStorage'].forEach(function(storageName){
    try{
      const store=window[storageName];
      if(!store) return;
      legacyKeys.forEach(function(key){ store.removeItem(key); });
    }catch(_error){}
  });

  try{ document.documentElement.setAttribute('data-recreation-legacy-state-migrated','true'); }catch(_error){}
})();
