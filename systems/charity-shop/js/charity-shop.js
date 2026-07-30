(function(){
  'use strict';

  function loadApprovedSharedUi(){
    if(window.__BASELINE_PROTECTED_ACCESS__) return;
    if(document.querySelector('script[src*="/sitewide/js/baseline-charity-access.js"]')) return;
    const script = document.createElement('script');
    script.src = '/sitewide/js/baseline-charity-access.js?v=BASELINE_PROTECTED_ACCESS_20260730_1';
    script.async = false;
    script.dataset.protectedAccessLoader = 'charity-shop';
    document.head.appendChild(script);
  }

  function loadCompleteCharityTheme(){
    if(document.querySelector('link[data-charity-complete-theme]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/systems/charity-shop/css/charity-shop-complete-theme.css?v=CHARITY_COMPLETE_20260730_1';
    link.dataset.charityCompleteTheme = 'true';
    document.head.appendChild(link);
  }

  function posterFrame(title, kicker, body, illustration, modifier){
    return '<article class="card charity-card charity-artwork-card '+(modifier||'')+'">' +
      '<div class="charity-sheet" role="img" aria-label="'+title.replace(/"/g,'&quot;')+' A4 training-sheet artwork">' +
        '<div class="charity-sheet-head"><span>'+kicker+'</span><h2>'+title+'</h2></div>' +
        '<div class="charity-sheet-illustration">'+illustration+'</div>' +
        '<div class="charity-sheet-copy">'+body+'</div>' +
      '</div>' +
    '</article>';
  }

  function hangerArtwork(){
    return '<svg viewBox="0 0 760 330" aria-hidden="true">' +
      '<defs><linearGradient id="hangerBg" x1="0" x2="1"><stop stop-color="#941b22"/><stop offset=".5" stop-color="#f5cf24"/><stop offset="1" stop-color="#941b22"/></linearGradient></defs>' +
      '<rect width="760" height="330" rx="28" fill="url(#hangerBg)" opacity=".18"/>' +
      '<path d="M378 38c0-31 48-31 48 0 0 16-12 23-26 30l-24 12" fill="none" stroke="#17364d" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M376 80 170 174h420L400 80" fill="none" stroke="#17364d" stroke-width="15" stroke-linejoin="round"/>' +
      '<rect x="118" y="160" width="54" height="70" rx="12" fill="#f5cf24" stroke="#941b22" stroke-width="8"/><rect x="588" y="160" width="54" height="70" rx="12" fill="#f5cf24" stroke="#941b22" stroke-width="8"/>' +
      '<path d="M150 215 225 204 270 286 380 270 490 286 535 204 610 215" fill="#c9252d" stroke="#941b22" stroke-width="9" stroke-linejoin="round"/>' +
      '<path d="M270 286 270 219M490 286 490 219" stroke="#fff0a0" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="90" cy="92" r="34" fill="#941b22"/><text x="90" y="104" text-anchor="middle" font-size="34" font-weight="900" fill="#fff">1</text>' +
      '<circle cx="670" cy="92" r="34" fill="#c9252d"/><text x="670" y="104" text-anchor="middle" font-size="34" font-weight="900" fill="#fff">2</text>' +
      '<circle cx="380" cy="300" r="28" fill="#f28c20"/><text x="380" y="310" text-anchor="middle" font-size="28" font-weight="900" fill="#fff">3</text>' +
    '</svg>';
  }

  function cubeArtwork(){
    return '<svg viewBox="0 0 760 330" aria-hidden="true">' +
      '<defs><linearGradient id="cubeBg" x1="0" x2="1"><stop stop-color="#941b22"/><stop offset=".5" stop-color="#fff0a0"/><stop offset="1" stop-color="#941b22"/></linearGradient></defs>' +
      '<rect width="760" height="330" rx="28" fill="url(#cubeBg)" opacity=".18"/>' +
      '<path d="M380 42c0-30 46-30 46 0 0 16-12 23-25 30l-21 10" fill="none" stroke="#17364d" stroke-width="11" stroke-linecap="round"/>' +
      '<path d="M380 82 200 164h360L400 82" fill="none" stroke="#17364d" stroke-width="14"/>' +
      '<path d="M250 164v118h260V164l-62-24-68 38-68-38z" fill="#f28c20" stroke="#941b22" stroke-width="9" stroke-linejoin="round"/>' +
      '<rect x="335" y="96" width="90" height="74" rx="16" fill="#f5cf24" stroke="#941b22" stroke-width="8"/>' +
      '<text x="380" y="145" text-anchor="middle" font-size="38" font-weight="900" fill="#17364d">12</text>' +
      '<path d="M93 242h116M551 242h116" stroke="#c9252d" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="m176 217 32 25-32 25M584 217l-32 25 32 25" fill="none" stroke="#c9252d" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="94" y="102" font-size="26" font-weight="900" fill="#941b22">CHECK</text><text x="566" y="102" font-size="26" font-weight="900" fill="#941b22">CUBE</text>' +
    '</svg>';
  }

  function impactArtwork(){
    return '<svg viewBox="0 0 760 330" aria-hidden="true">' +
      '<defs><linearGradient id="impactBg" x1="0" x2="1"><stop stop-color="#941b22"/><stop offset=".5" stop-color="#f5cf24"/><stop offset="1" stop-color="#941b22"/></linearGradient></defs>' +
      '<rect width="760" height="330" rx="28" fill="url(#impactBg)" opacity=".20"/>' +
      '<g fill="#fff9df" stroke="#941b22" stroke-width="7"><path d="M55 54h214v80H165l-28 30 5-30H55z"/><path d="M491 45h214v88H603l-30 32 7-32h-89z"/><path d="M270 205h220v86H380l-31 28 8-28h-87z"/></g>' +
      '<g fill="#17364d" font-size="21" font-weight="850"><text x="76" y="88">Wrong size cube</text><text x="76" y="116">on the rail</text><text x="512" y="80">Clothes keep</text><text x="512" y="108">falling</text><text x="298" y="240">Someone else has</text><text x="298" y="269">to put it right</text></g>' +
      '<circle cx="220" cy="225" r="48" fill="#f28c20" stroke="#941b22" stroke-width="8"/><circle cx="540" cy="225" r="48" fill="#c9252d" stroke="#941b22" stroke-width="8"/>' +
      '<path d="M185 294q35-40 70 0M505 294q35-40 70 0" fill="none" stroke="#17364d" stroke-width="12" stroke-linecap="round"/>' +
      '<circle cx="204" cy="214" r="5" fill="#17364d"/><circle cx="236" cy="214" r="5" fill="#17364d"/><path d="M205 244q15-12 30 0" fill="none" stroke="#17364d" stroke-width="6"/>' +
      '<circle cx="524" cy="214" r="5" fill="#fff"/><circle cx="556" cy="214" r="5" fill="#fff"/><path d="M525 244q15 12 30 0" fill="none" stroke="#fff" stroke-width="6"/>' +
    '</svg>';
  }

  function sizeArtwork(label, rows){
    return '<div class="charity-size-sheet"><div class="charity-size-sheet-title">'+label+'</div><div class="charity-size-sheet-grid">' + rows.map(function(row){return '<div><strong>'+row[0]+'</strong><span>'+row[1]+'</span></div>';}).join('') + '</div></div>';
  }

  function injectSheetArtwork(){
    if(document.querySelector('[data-charity-sheet-artwork]')) return;

    const overview = document.querySelector('#operations-overview .charity-grid');
    if(overview){
      const shell = document.createElement('div');
      shell.dataset.charitySheetArtwork = 'overview';
      shell.className = 'charity-artwork-pair';
      shell.innerHTML = posterFrame('Back-room choices. Shop-floor consequences.','SYSTEMS',
        '<p>Agreed systems contain the work. When they are skipped, the consequence moves to customers and shop-floor volunteers.</p>',impactArtwork(),'charity-sheet--impact');
      overview.insertBefore(shell, overview.firstChild);
    }

    const hanging = document.querySelector('#operations-hanging .charity-grid');
    if(hanging){
      const node = document.createElement('div');
      node.dataset.charitySheetArtwork = 'hanging';
      node.className = 'charity-artwork-pair';
      node.innerHTML = posterFrame('Hang It Right','A4 TRAINING SHEET',
        '<div class="charity-sheet-points"><span>1. Clips to the end stops</span><span>2. Waistband taut and even</span><span>3. Fold excess neatly behind</span></div>',hangerArtwork(),'charity-sheet--hang');
      hanging.insertBefore(node, hanging.firstChild);
    }

    const cubing = document.querySelector('#operations-cubing .charity-grid');
    if(cubing){
      const node = document.createElement('div');
      node.dataset.charitySheetArtwork = 'cubing';
      node.className = 'charity-artwork-pair';
      node.innerHTML = posterFrame('Cube It Right','A4 TRAINING SHEET',
        '<div class="charity-sheet-points"><span>Check the label</span><span>Use the size guide</span><span>Fit the correct cube before the rail</span></div>',cubeArtwork(),'charity-sheet--cube');
      cubing.insertBefore(node, cubing.firstChild);
    }

    const sizeSheets = [
      ['#sizes-ladies .charity-grid','Ladies Size Guide', [['UK 8','EU 36 · US 4'],['UK 12','EU 40 · US 8'],['UK 16','EU 44 · US 12'],['UK 20','EU 48 · US 16']]],
      ['#sizes-mens .charity-grid','Men\'s Size Guide', [['S','Chest 36–38 in'],['M','Chest 38–40 in'],['L','Chest 40–42 in'],['XL','Chest 42–44 in']]],
      ['#sizes-shoes .charity-grid','Shoe Size Guide', [['UK 4','EU 37'],['UK 6','EU 39'],['UK 8','EU 41'],['UK 10','EU 43']]],
      ['#homeware-duvet .charity-grid','Duvet Bedding Size Guide', [['Single','135 × 200 cm'],['Double','200 × 200 cm'],['King','225 × 220 cm'],['Super King','260 × 220 cm']]]
    ];
    sizeSheets.forEach(function(item){
      const grid = document.querySelector(item[0]);
      if(!grid) return;
      const article = document.createElement('article');
      article.className = 'card charity-card charity-artwork-card';
      article.dataset.charitySheetArtwork = item[1];
      article.innerHTML = '<div class="charity-sheet charity-sheet--size"><div class="charity-sheet-head"><span>A4 SIZE GUIDE</span><h2>'+item[1]+'</h2></div>'+sizeArtwork(item[1],item[2])+'<p class="charity-artwork-caption">Use the full conversion table below for detailed sorting.</p></div>';
      grid.insertBefore(article, grid.firstChild);
    });
  }

  loadApprovedSharedUi();
  loadCompleteCharityTheme();
  injectSheetArtwork();

  const mainTabs = Array.from(document.querySelectorAll('.charity-main-tab[data-charity-target]'));
  const mainSections = Array.from(document.querySelectorAll('.charity-main-section'));
  const lockButton = document.getElementById('charityLockBtn');
  const defaultSubtab = Object.freeze({operations:'overview',sizes:'ladies',homeware:'duvet'});
  const currentSubtab = Object.assign({}, defaultSubtab);
  const mainIds = new Set(mainTabs.map(button => button.dataset.charityTarget));
  let applyingHistory = false;

  const legacyRoutes = Object.freeze({overview:['operations','overview'],hanging:['operations','hanging'],cubing:['operations','cubing'],'ladies-sizes':['sizes','ladies'],'mens-sizes':['sizes','mens'],'shoe-sizes':['sizes','shoes'],'duvet-sizes':['homeware','duvet']});

  function subtabButtons(mainId){const section=document.getElementById(mainId);return section?Array.from(section.querySelectorAll('.charity-subtab[data-charity-subtarget]')):[]}
  function subpanels(mainId){const section=document.getElementById(mainId);return section?Array.from(section.querySelectorAll('.charity-subpanel')):[]}
  function validSubtab(mainId,subId){return subtabButtons(mainId).some(button=>button.dataset.charitySubtarget===subId)}
  function normalisedState(mainValue,subValue){const main=mainIds.has(mainValue)?mainValue:'operations';const requestedSub=subValue||currentSubtab[main]||defaultSubtab[main];const sub=validSubtab(main,requestedSub)?requestedSub:defaultSubtab[main];return{main,sub}}

  function parseLocationState(){
    try{const params=new URLSearchParams(location.search||'');const queryMain=String(params.get('section')||'').trim().toLowerCase();const querySub=String(params.get('tab')||'').trim().toLowerCase();if(queryMain||querySub)return normalisedState(queryMain,querySub)}catch(_error){}
    let raw=String(location.hash||'').replace(/^#/,'').trim().toLowerCase();if(!raw)return{main:'operations',sub:'overview'};
    if(raw.startsWith('?')){const params=new URLSearchParams(raw.slice(1));raw=String(params.get('tab')||'').trim().toLowerCase()}
    if(legacyRoutes[raw])return{main:legacyRoutes[raw][0],sub:legacyRoutes[raw][1]};
    const parts=raw.split('/').filter(Boolean);return normalisedState(parts[0],parts[1]);
  }

  function routeUrl(mainId,subId){try{const url=new URL(location.href);url.searchParams.set('section',mainId);url.searchParams.set('tab',subId);url.hash='';return url.pathname+url.search}catch(_error){return location.pathname+'?section='+encodeURIComponent(mainId)+'&tab='+encodeURIComponent(subId)}}
  function setButtonState(buttons,activeValue,dataKey){buttons.forEach(button=>{const active=button.dataset[dataKey]===activeValue;button.setAttribute('aria-selected',String(active));button.classList.toggle('active',active);button.tabIndex=active?0:-1})}

  function activate(mainId,subId,options){
    const opts=options||{};const state=normalisedState(mainId,subId);const selectedMain=state.main;const selectedSub=state.sub;currentSubtab[selectedMain]=selectedSub;setButtonState(mainTabs,selectedMain,'charityTarget');
    mainSections.forEach(section=>{const active=section.id===selectedMain;section.classList.toggle('active',active);section.hidden=!active});
    const buttons=subtabButtons(selectedMain);setButtonState(buttons,selectedSub,'charitySubtarget');subpanels(selectedMain).forEach(panel=>{const active=panel.id===selectedMain+'-'+selectedSub;panel.classList.toggle('active',active);panel.hidden=!active});
    if(opts.history!==false&&!applyingHistory){const next=routeUrl(selectedMain,selectedSub);try{if(opts.replace)history.replaceState({charityMain:selectedMain,charitySub:selectedSub},'',next);else history.pushState({charityMain:selectedMain,charitySub:selectedSub},'',next)}catch(_error){}}
    if(opts.focusPanel){const panel=document.getElementById(selectedMain+'-'+selectedSub);try{panel&&panel.focus({preventScroll:true})}catch(_error){try{panel&&panel.focus()}catch(__error){}}}
  }

  function bindArrowNavigation(buttons,valueForButton,activateButton){buttons.forEach((button,index)=>{button.addEventListener('keydown',function(event){if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();let nextIndex=index;if(event.key==='ArrowLeft')nextIndex=(index-1+buttons.length)%buttons.length;if(event.key==='ArrowRight')nextIndex=(index+1)%buttons.length;if(event.key==='Home')nextIndex=0;if(event.key==='End')nextIndex=buttons.length-1;const nextButton=buttons[nextIndex];nextButton.focus();activateButton(valueForButton(nextButton))})})}

  mainTabs.forEach(button=>{button.addEventListener('click',function(){const mainId=button.dataset.charityTarget;activate(mainId,currentSubtab[mainId]||defaultSubtab[mainId],{history:true})})});
  bindArrowNavigation(mainTabs,button=>button.dataset.charityTarget,mainId=>activate(mainId,currentSubtab[mainId]||defaultSubtab[mainId],{history:true}));
  mainSections.forEach(section=>{const buttons=subtabButtons(section.id);buttons.forEach(button=>{button.addEventListener('click',function(){activate(section.id,button.dataset.charitySubtarget,{history:true})})});bindArrowNavigation(buttons,button=>button.dataset.charitySubtarget,subId=>activate(section.id,subId,{history:true}))});

  function restoreFromLocation(){applyingHistory=true;const state=parseLocationState();activate(state.main,state.sub,{history:false});applyingHistory=false}
  window.addEventListener('popstate',restoreFromLocation);window.addEventListener('hashchange',restoreFromLocation);

  if(lockButton){lockButton.addEventListener('click',async function(){lockButton.disabled=true;lockButton.textContent='Locking...';try{await fetch('/sitewide/api/protected_access.php',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'lock',section:'charity_shop_guidance'})})}catch(_error){}location.assign('/home/1')})}

  const initial=parseLocationState();activate(initial.main,initial.sub,{history:true,replace:true});
})();
