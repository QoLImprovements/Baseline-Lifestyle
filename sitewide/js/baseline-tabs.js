/* Baseline Lifestyle — Tabs (fail-safe)
   Purpose: Tabs must work even if other scripts fail.
   - No dependencies
   - Guarded against exceptions

   IMPORTANT:
   If baseline-shared.js is present, it owns the in-page navigation + History API.
   This fallback becomes a no-op to avoid double-binding (which breaks the Back button).
*/

/* BASELINE-CLEAN-FOOD-INGREDIENT-ROUTES-20260616_V2
   Keeps Food Approach ingredient links visually clean:
   /baseline-food-approach/ingredient-library/white-mushroom
   Also cleans old hash/filter URLs that were already in the address bar:
   #ing-mushrooms&filter=r5 -> /baseline-food-approach/ingredient-library/white-mushroom
*/
(function(){
  "use strict";

  var HISTORY_KEY = "__baseline_nav_v1__";

  function onFoodPage(){
    return /\/baseline-food-approach(?:\/|$)/i.test(String(window.location.pathname || ""));
  }

  function ingredientSlugForId(id){
    var ingredientId = String(id || "").trim().toLowerCase();
    var overrides = {
      "ing-mushrooms": "white-mushroom"
    };
    if(overrides[ingredientId]) return overrides[ingredientId];
    return ingredientId.replace(/^ing-/, "") || "ingredient";
  }

  function ingredientIdForSlug(slug){
    var token = String(slug || "").trim().toLowerCase();
    var overrides = {
      "white-mushroom": "ing-mushrooms",
      "white-mushrooms": "ing-mushrooms",
      "mushroom": "ing-mushrooms",
      "mushrooms": "ing-mushrooms"
    };
    if(overrides[token]) return overrides[token];
    if(/^ing-/.test(token)) return token;
    return token ? ("ing-" + token) : "";
  }

  function cleanIngredientUrl(id){
    var slug = ingredientSlugForId(id);
    return slug ? ("/baseline-food-approach/ingredient-library/" + encodeURIComponent(slug)) : "";
  }

  function ingredientIdFromPath(){
    var path = String(window.location.pathname || "").toLowerCase().replace(/\/+$/," ").trim();
    var m = path.match(/\/baseline-food-approach\/ingredient-library\/([^\/?#]+)$/i);
    return (m && m[1]) ? ingredientIdForSlug(decodeURIComponent(m[1])) : "";
  }

  function ingredientIdFromHash(){
    var hash = String(window.location.hash || "");
    if(!/^#ing-/i.test(hash)) return "";
    return hash.slice(1).split("&")[0].trim();
  }

  function selectIngredients(){
    if(typeof window.BASELINE_selectTab === "function"){
      window.BASELINE_selectTab("ingredients", { silentHistory:true });
      return;
    }
    var tab = document.querySelector('.tab[data-tab="ingredients"], .tab[data-target="ingredients"]');
    if(tab) tab.click();
  }

  function clearRecipeFilter(){
    try{
      if(typeof window.BASELINE_setIngredientFilter === "function"){
        window.BASELINE_setIngredientFilter(null, { silentHistory:true });
        return;
      }
    }catch(_e){}
    var select = document.getElementById("ingredientFilter");
    if(select){
      select.value = "all";
      try{ select.dispatchEvent(new Event("change", { bubbles:true })); }catch(_e){}
    }
  }

  function scrollToIngredient(id){
    if(!id) return;
    try{
      if(typeof window.BASELINE_scrollToIngredient === "function"){
        window.BASELINE_scrollToIngredient(id);
        return;
      }
    }catch(_e){}
    var el = null;
    try{ el = document.getElementById(id); }catch(_e){}
    if(el) el.scrollIntoView({ behavior:"auto", block:"start" });
  }

  function writeCleanState(id, replace){
    var url = cleanIngredientUrl(id);
    if(!id || !url) return;
    var state = { kind:"ingredient", ingredientId:id };
    var wrapped = {};
    wrapped[HISTORY_KEY] = state;
    try{
      if(replace) window.history.replaceState(wrapped, "", url);
      else window.history.pushState(wrapped, "", url);
    }catch(_e){}
  }

  function openCleanIngredient(id, opts){
    opts = opts || {};
    if(!id) return;
    selectIngredients();
    clearRecipeFilter();
    window.setTimeout(function(){
      scrollToIngredient(id);
      writeCleanState(id, !!opts.replace);
    }, Math.max(0, Number(opts.delay) || 60));
  }

  function rewriteIngredientHrefs(){
    if(!onFoodPage()) return;
    var links = document.querySelectorAll('a.ing-link[data-ingredient]');
    for(var i=0;i<links.length;i++){
      var a = links[i];
      var id = a.getAttribute("data-ingredient") || "";
      var url = cleanIngredientUrl(id);
      if(!url) continue;
      try{ a.setAttribute("href", url); }catch(_e){}
    }
  }

  function bindCleanIngredientLinks(){
    document.addEventListener("click", function(e){
      if(!onFoodPage()) return;
      var target = e.target;
      var a = target && target.closest ? target.closest('a.ing-link[data-ingredient]') : null;
      if(!a) return;
      var id = a.getAttribute("data-ingredient") || "";
      if(!id) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      openCleanIngredient(id, { replace:false, delay:50 });
    }, true);
  }

  function initCleanIngredientRoute(){
    if(!onFoodPage()) return;
    var pathId = ingredientIdFromPath();
    if(pathId){
      openCleanIngredient(pathId, { replace:true, delay:90 });
      return;
    }
    var hashId = ingredientIdFromHash();
    if(hashId){
      openCleanIngredient(hashId, { replace:true, delay:90 });
    }
  }

  function init(){
    rewriteIngredientHrefs();
    bindCleanIngredientLinks();
    initCleanIngredientRoute();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();

(function(){
  "use strict";

  function repairNestedRoutineRoute(){
    try{
      var path = String(window.location.pathname || "").toLowerCase().replace(/\/+$/, "");
      if(/\/baseline-natural-skincare\/my-routine(?:\/(?:log|summary|plan|public))?$/.test(path)){
        if(typeof window.BASELINE_selectTab === "function") window.BASELINE_selectTab("routine", { silentHistory:true });
        return;
      }
      if(/^\/baseline-fitness\/my-routine(?:\/(?:log|summary|public|plan(?:\/(?:calisthenics|cardio|other|sports))?))?$/.test(path)){
        if(typeof window.BASELINE_selectTab === "function") window.BASELINE_selectTab("my-plan", { silentHistory:true });
      }
    }catch(_e){}
  }

  function shouldDisable(){
    try{ return !!window.__BASELINE_SHARED__; }catch(_e){ return false; }
  }

  var BASELINE_HISTORY_KEY = "__baseline_nav_v1__";
  var BASELINE_TAB_SNAPSHOT_PREFIX = "__baseline_tab_snapshot_v2__::";

  function tabSnapshotKey(){
    try{ return BASELINE_TAB_SNAPSHOT_PREFIX + String(window.location.pathname || "").toLowerCase(); }
    catch(_e){ return BASELINE_TAB_SNAPSHOT_PREFIX + "page"; }
  }

  function writeTabSnapshot(state, url){
    var payload = JSON.stringify({ state: state || null, url: String(url || ""), ts: Date.now() });
    var key = tabSnapshotKey();
    try{ sessionStorage.setItem(key, payload); }catch(_e){}
    try{ localStorage.setItem(key, payload); }catch(_e){}
  }

  function readTabSnapshot(){
    var key = tabSnapshotKey();
    var raw = "";
    try{ raw = sessionStorage.getItem(key) || ""; }catch(_e){}
    if(!raw){ try{ raw = localStorage.getItem(key) || ""; }catch(_e){} }
    if(!raw) return null;
    try{
      var parsed = JSON.parse(raw);
      return (parsed && parsed.state && typeof parsed.state === "object") ? parsed.state : null;
    }catch(_e){ return null; }
  }

  function urlWithoutHash(){
    return window.location.pathname + window.location.search;
  }

  function routeFileFromPath(){
    var path = String(window.location.pathname || "").toLowerCase();
    if(/\/baseline-food-approach(?:\/|$)/.test(path)) return "baseline-food-approach.html";
    if(/\/baseline-massage(?:\/|$)/.test(path)) return "baseline-massage.html";
    if(/\/baseline-natural-skincare(?:\/|$)/.test(path)) return "baseline-natural-skincare.html";
    if(/\/baseline-badminton-session(?:\/|$)/.test(path)) return "baseline-badminton-session.html";
    if(/\/baseline-fitness(?:\/|$)/.test(path)) return "baseline-fitness.html";
    return (path.split("/").pop() || "").toLowerCase();
  }

  var CLEAN_TAB_ROUTES = {
    "baseline-food-approach.html": { base:"/baseline-food-approach", tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", "diet-log":"diet-log" } },
    "baseline-massage.html": { base:"/baseline-massage", tabs:{ system:"system", library:"library", planner:"planner" } },
    "baseline-natural-skincare.html": { base:"/baseline-natural-skincare", tabs:{ system:"system", recipes:"recipes", ingredients:"ingredient-library", support:"skin-support-system", routine:"my-routine" } },
    "baseline-badminton-session.html": { base:"/baseline-badminton-session", tabs:{ system:"system", gameplan:"game-plan", standings:"ratings-standings", roster:"players-pairs", history:"session-history" } },
    "baseline-fitness.html": { base:"/baseline-fitness", tabs:{ system:"system", routine:"my-plan", library:"library", achievements:"achievements", "my-plan":"my-plan", "my-routine":"my-plan", "my-body":"my-body" } }
  };

  function urlForTab(id){
    var tabId = String(id || "").trim();
    var cfg = CLEAN_TAB_ROUTES[routeFileFromPath()];
    if(cfg && cfg.tabs && cfg.tabs[tabId]) return cfg.hashTabs ? (cfg.base + '#tab=' + encodeURIComponent(tabId)) : (cfg.base + '/' + cfg.tabs[tabId]);
    return urlWithoutHash() + "#tab=" + encodeURIComponent(tabId);
  }

  function initialTabFromHash(){
    var h = String(window.location.hash || "");
    var m = /^#tab=([^&]+)/.exec(h);
    if(m && m[1]){
      try{ return decodeURIComponent(m[1]); }catch(_e){ return m[1]; }
    }
    if(/^#recipe=/.test(h) || /^#r\d+$/i.test(h) || /^#recipes$/i.test(h)) return "recipes";
    if(/^#ing-/.test(h) || /^#ingredients$/i.test(h)) return "ingredients";
    if(/^#support=/.test(h) || /^#support-/.test(h) || /^#support$/i.test(h)) return "support";
    return "";
  }

  function setNavState(next, opts){
    opts = opts || {};
    var url = (typeof opts.url === "string") ? opts.url : urlWithoutHash();
    var wrapper = (next && typeof next === "object") ? (function(){
      var o = {}; o[BASELINE_HISTORY_KEY] = next; return o;
    })() : {};
    try{
      if(opts.replace) window.history.replaceState(wrapper, "", url);
      else window.history.pushState(wrapper, "", url);
    }catch(e){
      try{
        if(opts.replace) window.history.replaceState(null, "", url);
        else window.history.pushState(null, "", url);
      }catch(_e){}
    }
    try{ writeTabSnapshot(next, url); }catch(_e){}
  }

  function qsa(sel, root){
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getTabId(el){
    try{
      return (el && el.dataset && (el.dataset.target || el.dataset.tab) || "").trim();
    }catch(_e){
      return "";
    }
  }

  function selectTab(id, opts){
    opts = opts || {};
    if(!id) return;
    var tabs = qsa(".tab[data-target], .tab[data-tab]");
    var sections = qsa(".section[id]");

    var exists = false;
    for(var i=0;i<sections.length;i++){
      if(sections[i].id === id){ exists = true; break; }
    }
    if(!exists) return;

    // Skincare's first-paint route markers only bootstrap My Routine. Once a
    // different top-level tab is selected, remove them so CSS cannot keep
    // #routine visible alongside the newly selected section.
    try{
      if(document.body && document.body.dataset && document.body.dataset.app === "skin" && id !== "routine"){
        document.documentElement.removeAttribute("data-initial-skincare-tab");
        document.documentElement.removeAttribute("data-initial-routine-view");
      }
    }catch(_e){}

    for(var t=0;t<tabs.length;t++){
      var tid = getTabId(tabs[t]);
      var sel = (tid === id);
      try{
        tabs[t].classList.toggle("active", sel);
        tabs[t].setAttribute("aria-selected", sel ? "true" : "false");
      }catch(_e){}
    }
    for(var s=0;s<sections.length;s++){
      try{ sections[s].classList.toggle("active", sections[s].id === id); }catch(_e){}
    }

    if(!opts.silentHistory){
      setNavState({ kind:"tab", tabId:id }, { url: urlForTab(id) });
    }
  }

  function expose(){
    if(shouldDisable()) return;
    try{
      if(typeof window.BASELINE_selectTab !== "function"){
        window.BASELINE_selectTab = function(id, opts){ selectTab(id, opts || {}); };
      }
      if(typeof window.BASELINE_getTabId !== "function"){
        window.BASELINE_getTabId = function(el){ return getTabId(el); };
      }
    }catch(_e){}
  }

  function init(){
    // The shared router historically treated /my-routine/<view> as the System
    // tab. Repair that nested clean route before this fail-safe decides whether
    // it is needed, so the canonical My Routine page remains visible.
    repairNestedRoutineRoute();
    if(shouldDisable()) return;

    expose();
    repairNestedRoutineRoute();

    try{
      var tabs = qsa(".tab[data-target], .tab[data-tab]");
      if(!tabs.length) return;

      for(var i=0;i<tabs.length;i++){
        (function(tab){
          tab.addEventListener("click", function(e){
            try{ e.preventDefault(); }catch(_e){}
            var id = getTabId(tab);
            if(!id) return;

            if(id === "recipes"){
              try{
                if(typeof window.BASELINE_showAllRecipes === "function"){
                  window.BASELINE_showAllRecipes({ silentHistory:false });
                  return;
                }
              }catch(_e){}
            }

            selectTab(id, { silentHistory:false });
          }, { passive:false });
        })(tabs[i]);
      }

      var anyActive = false;
      var sections = qsa(".section.active[id]");
      if(sections && sections.length) anyActive = true;

      if(!anyActive){
        var initial = initialTabFromHash();
        var snap = (!initial) ? readTabSnapshot() : null;
        var first = getTabId(tabs[0]);
        var chosen = initial || (snap && snap.tabId) || first;
        if(chosen) selectTab(chosen, { silentHistory:true });
        try{ if(chosen) setNavState({ kind:"tab", tabId:chosen }, { replace:true, url: urlForTab(chosen) }); }catch(_e){}
      }
    }catch(_e){}
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
