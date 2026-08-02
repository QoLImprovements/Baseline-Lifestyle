(function(){
  'use strict';

  const BUILD='REALM_WOOD_AUTHORITY_20260802_1';
  const HUB_BUILD='GAMES_HUB_REALM_ISOLATED_20260629_4';
  const ICONS='/systems/baseline-games-hub/games/baseline-realm/shared/icons/realm-icons.svg?v='+BUILD;
  const BASECAMP_CSS='/systems/baseline-games-hub/games/baseline-realm/basecamp/css/basecamp.css?v='+BUILD;

  function icon(name){
    return '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><use href="'+ICONS+'#icon-'+name+'"></use></svg>';
  }

  function labelledIcon(name,label){
    return '<svg viewBox="0 0 24 24" role="img" aria-label="'+label+'"><title>'+label+'</title><use href="'+ICONS+'#icon-'+name+'"></use></svg>';
  }

  function ensureBasecampStyles(){
    if(document.querySelector('link[data-realm-basecamp-style],link[data-current-realm-style="realm-basecamp-current"],link[href*="/baseline-realm/basecamp/css/basecamp.css"]'))return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href=BASECAMP_CSS;
    link.setAttribute('data-realm-basecamp-style','true');
    document.head.appendChild(link);
  }

  function ensureGate(){
    const frame=document.getElementById('realmSceneFrame');
    if(!frame)return null;
    let gate=frame.querySelector('.realm-orientation-gate');
    if(gate)return gate;
    gate=document.createElement('div');
    gate.className='realm-orientation-gate';
    gate.setAttribute('role','dialog');
    gate.setAttribute('aria-modal','true');
    gate.setAttribute('aria-label','Landscape orientation required');
    gate.innerHTML='<div class="realm-orientation-gate__panel"><div class="realm-orientation-gate__icon">'+icon('rotate')+'</div><strong>Landscape required</strong><span>Rotate your device sideways. Baseline Realm is a landscape-only game.</span></div>';
    frame.appendChild(gate);
    return gate;
  }

  function removeObsoleteNodes(){
    document.querySelectorAll('#ninjaPanel .realm-page-header,#ninjaPanel #realmExploreBtn,#ninjaPanel > .mobile-game-exit,#ninjaPanel #realmExplorationBar,#ninjaPanel #realmExplorationTabRow').forEach(function(node){node.remove();});
  }

  function replaceIcon(buttonId,holderSelector,name){
    const button=document.getElementById(buttonId);
    if(!button)return;
    const holder=button.querySelector(holderSelector);
    if(holder&&holder.getAttribute('data-local-icon')!==name){
      holder.innerHTML=icon(name);
      holder.setAttribute('data-local-icon',name);
    }
  }

  const BASECAMP_LANDMARKS=[
    {key:'ninja-training',id:'realmCampNinjaBtn',icon:'training',label:'Ninja Training',note:'Training route',view:'training'},
    {key:'exploration',id:'realmCampExplorationBtn',icon:'exploration',label:'Exploration',note:'Maps and encounters',view:'exploration'},
    {key:'workshop',id:'realmCampWorkshopBtn',icon:'workshop',label:'Workshop',note:'Weapons and equipment',tab:'workshop',category:'blacksmith'},
    {key:'calorie-escape',id:'realmCampCalorieEscapeBtn',icon:'calorie',label:'Calorie Escape',note:'Movement route',view:'calorie-escape'},
    {key:'tactical-operations',id:'realmCampTacticalBtn',icon:'tactical',label:'Tactical Operations',note:'Operations table',view:'tactical-operations'},
    {key:'storage',id:'realmCampStorageBtn',icon:'storage',label:'Storage',note:'Shared inventory'},
    {key:'merchant',id:'realmCampMerchantBtn',icon:'merchant',label:'Merchant',note:'Supplies and exchange'},
    {key:'campfire-rest',id:'realmCampRestBtn',icon:'campfire',label:'Campfire & Rest',note:'Recovery point'},
    {key:'cooking',id:'realmCampCookingBtn',icon:'cooking',label:'Cooking',note:'Food and effects',tab:'workshop',category:'cooking'},
    {key:'party-preparation',id:'realmCampPartyBtn',icon:'party',label:'Party Preparation',note:'Ready the party'}
  ];

  function landmarkMarkup(item){
    const attributes=[
      'class="realm-location-button"',
      'id="'+item.id+'"',
      'data-basecamp-landmark="'+item.key+'"',
      'type="button"',
      'aria-label="'+item.label+': '+item.note+'"'
    ];
    if(item.view)attributes.push('data-realm-view="'+item.view+'"');
    if(item.tab)attributes.push('data-realm-open-tab="'+item.tab+'"');
    if(item.category)attributes.push('data-workshop-category="'+item.category+'"');
    return '<button '+attributes.join(' ')+'><span class="realm-location-caption" aria-hidden="true"><span class="realm-location-button__icon">'+labelledIcon(item.icon,item.label+' symbol')+'</span><span class="realm-location-button__copy">'+item.label+'</span><small>'+item.note+'</small></span></button>';
  }

  function ensureBasecampLandmarks(){
    const screen=document.getElementById('realmBasecampScreen');
    if(!screen||screen.getAttribute('data-basecamp-build')===BUILD)return;
    screen.innerHTML=BASECAMP_LANDMARKS.map(landmarkMarkup).join('');
    screen.setAttribute('data-basecamp-build',BUILD);
    screen.setAttribute('role','navigation');
    screen.setAttribute('aria-label','Baseline Realm destinations');
  }

  function decorateBadge(badge){
    if(!badge||badge.hasAttribute('data-realm-badge-kind'))return;
    const original=(badge.textContent||'').trim();
    const lower=original.toLowerCase();
    let kind='';let label='';
    if(lower.includes('route loot')){kind='loot';label='Route Loot';}
    else if(lower.includes('relic')){kind='relic';label='Relics';}
    else if(lower.includes('maps cleared')){kind='map';label='Maps';}
    if(!kind)return;
    const match=original.match(/(-?\d+(?:\.\d+)?)/);
    const value=match?match[1]:'0';
    badge.setAttribute('data-realm-badge-kind',kind);
    badge.setAttribute('aria-label',label+' '+value);
    badge.innerHTML='<span class="realm-badge__icon">'+icon(kind)+'</span><span class="realm-badge__copy"><span class="realm-badge__label">'+label+'</span><span class="realm-badge__value">'+value+'</span></span>';
  }

  function isMobileRealmActive(){
    const body=document.body;
    return !!(body&&body.classList.contains('bl-mobile-game-mode')&&body.getAttribute('data-mobile-game')==='ninja');
  }

  function setImportant(node,name,value){
    if(node)node.style.setProperty(name,value,'important');
  }

  function clearMobileGeometry(node){
    if(!node)return;
    ['position','top','right','bottom','left','width','height','min-width','min-height','max-width','max-height','margin','padding','transform','overflow','aspect-ratio'].forEach(function(name){node.style.removeProperty(name);});
  }

  function syncMobileViewport(){
    const width=Math.max(1,Math.round(window.innerWidth||document.documentElement.clientWidth||0));
    const height=Math.max(1,Math.round(window.innerHeight||document.documentElement.clientHeight||0));
    const active=isMobileRealmActive();
    const selectors=['.bl-scroll','main','#games','#ninjaPanel','#ninjaPanel .realm-shell-card','#ninjaPanel .realm-shell','#ninjaPanel .realm-game-mount','#ninjaGameCard','#realmWindow','#realmSceneFrame'];
    const nodes=selectors.map(function(selector){return document.querySelector(selector);}).filter(Boolean);

    document.documentElement.style.setProperty('--realm-mobile-width',width+'px');
    document.documentElement.style.setProperty('--realm-mobile-height',height+'px');

    if(!active){nodes.forEach(clearMobileGeometry);return;}
    nodes.forEach(function(node){
      setImportant(node,'position','fixed');setImportant(node,'top','0');setImportant(node,'left','0');setImportant(node,'right','auto');setImportant(node,'bottom','auto');setImportant(node,'width',width+'px');setImportant(node,'height',height+'px');setImportant(node,'min-width',width+'px');setImportant(node,'min-height',height+'px');setImportant(node,'max-width',width+'px');setImportant(node,'max-height',height+'px');setImportant(node,'margin','0');setImportant(node,'padding','0');setImportant(node,'transform','none');setImportant(node,'overflow','hidden');setImportant(node,'aspect-ratio','auto');
    });
  }

  function syncDiagnosticOrientation(){
    const frame=document.getElementById('realmSceneFrame');
    if(!frame)return;
    const active=isMobileRealmActive();
    const portrait=(window.innerHeight||0)>(window.innerWidth||0);
    frame.setAttribute('data-realm-orientation',active?(portrait?'portrait-blocked':'landscape-ready'):'desktop-ready');
  }

  function apply(){
    removeObsoleteNodes();
    ensureBasecampStyles();
    ensureGate();
    ensureBasecampLandmarks();
    replaceIcon('realmBasecampBtn','.realm-fab__icon','camp');
    replaceIcon('realmMenuBtn','.realm-fab__icon','management');
    replaceIcon('realmFullscreenBtn','.realm-fab__icon','fullscreen');
    replaceIcon('ninjaManualStrikeBtn','.realm-combat-btn__icon','dash-cut');
    replaceIcon('ninjaShurikenBtn','.realm-combat-btn__icon','shuriken');
    document.querySelectorAll('#ninjaPanel .realm-badge').forEach(decorateBadge);
    const frame=document.getElementById('realmSceneFrame');
    if(frame)frame.setAttribute('data-realm-stage-one',BUILD);
    document.documentElement.setAttribute('data-baseline-realm-stage-one',BUILD);
    document.documentElement.setAttribute('data-baseline-games-hub-js',HUB_BUILD);
    syncMobileViewport();
    syncDiagnosticOrientation();
  }

  function syncAfterViewportChange(){
    syncMobileViewport();
    syncDiagnosticOrientation();
    if((window.innerHeight||0)>(window.innerWidth||0)&&document.fullscreenElement&&document.exitFullscreen){document.exitFullscreen().catch(function(){});}
  }

  function init(){
    apply();
    const host=document.getElementById('games')||document.body;
    if(host&&typeof MutationObserver!=='undefined'){
      let pending=false;
      new MutationObserver(function(){
        if(pending)return;
        pending=true;
        window.requestAnimationFrame(function(){pending=false;apply();});
      }).observe(host,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class','data-mobile-game','hidden']});
    }
    window.addEventListener('resize',syncAfterViewportChange,{passive:true});
    window.addEventListener('orientationchange',function(){window.setTimeout(syncAfterViewportChange,40);},{passive:true});
    if(window.visualViewport)window.visualViewport.addEventListener('resize',syncAfterViewportChange,{passive:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
