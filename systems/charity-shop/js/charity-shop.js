(function(){
  'use strict';

  const BUILD = 'CHARITY_SHOP_20260730_6';
  const ARTWORK_BUILD = '20260730_4';

  function loadCharityCorrections(){
    let link = document.querySelector('link[data-charity-cashing-corrections]');
    if(!link){
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/systems/charity-shop/css/charity-shop-cashing-and-artwork.css?v=' + BUILD;
      link.dataset.charityCashingCorrections = 'true';
      document.head.appendChild(link);
    }else{
      document.head.appendChild(link);
    }
  }

  function loadApprovedSharedUi(){
    if(window.__BASELINE_PROTECTED_ACCESS__){
      loadCharityCorrections();
      return;
    }
    if(document.querySelector('script[src*="/sitewide/js/baseline-charity-access.js"]')){
      loadCharityCorrections();
      return;
    }
    const script = document.createElement('script');
    script.src = '/sitewide/js/baseline-charity-access.js?v=BASELINE_PROTECTED_ACCESS_20260730_6';
    script.async = false;
    script.dataset.protectedAccessLoader = 'charity-shop';
    script.addEventListener('load', loadCharityCorrections, {once:true});
    document.head.appendChild(script);
  }

  function loadCompleteCharityTheme(){
    if(document.querySelector('link[data-charity-complete-theme]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/systems/charity-shop/css/charity-shop-complete-theme.css?v=CHARITY_COMPLETE_20260730_2';
    link.dataset.charityCompleteTheme = 'true';
    document.head.appendChild(link);
  }

  const DENOMINATIONS = Object.freeze([
    {key:'gbp50', label:'£50', pence:5000},
    {key:'gbp20', label:'£20', pence:2000},
    {key:'gbp10', label:'£10', pence:1000},
    {key:'gbp5', label:'£5', pence:500},
    {key:'gbp2', label:'£2', pence:200},
    {key:'gbp1', label:'£1', pence:100},
    {key:'p50', label:'50p', pence:50},
    {key:'p20', label:'20p', pence:20},
    {key:'p10', label:'10p', pence:10},
    {key:'p5', label:'5p', pence:5},
    {key:'p2', label:'2p', pence:2},
    {key:'p1', label:'1p', pence:1}
  ]);

  const CHEQUE_GROUPS = Object.freeze([
    {label:'£50 notes', keys:['gbp50']},
    {label:'£20 notes', keys:['gbp20']},
    {label:'£10 notes', keys:['gbp10']},
    {label:'£5 notes', keys:['gbp5']},
    {label:'£2 coins', keys:['gbp2']},
    {label:'£1 coins', keys:['gbp1']},
    {label:'50p + 20p', keys:['p50','p20']},
    {label:'10p + 5p', keys:['p10','p5']},
    {label:'2p + 1p', keys:['p2','p1']}
  ]);

  function money(pence){
    return new Intl.NumberFormat('en-GB',{
      style:'currency',
      currency:'GBP',
      minimumFractionDigits:2,
      maximumFractionDigits:2
    }).format(pence / 100);
  }

  function chequeAmount(pence){
    const safe = Math.max(0, Math.round(Number(pence) || 0));
    return Math.floor(safe / 100) + ' - ' + String(safe % 100).padStart(2,'0');
  }

  function cashRows(){
    return DENOMINATIONS.map(function(item){
      return [
        '<tr data-cash-row="'+item.key+'">',
        '  <th scope="row">'+item.label+'</th>',
        '  <td><label class="charity-cash-visually-hidden" for="cash-'+item.key+'">Number of '+item.label+' items</label>',
        '      <input id="cash-'+item.key+'" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="'+item.key+'" data-pence="'+item.pence+'"></td>',
        '  <td><output class="charity-cash-subtotal" data-subtotal="'+item.key+'">£0.00</output></td>',
        '</tr>'
      ].join('');
    }).join('');
  }

  function chequeRows(){
    return CHEQUE_GROUPS.map(function(group){
      return '<div class="charity-cheque-row"><span>'+group.label+'</span><output data-cheque-keys="'+group.keys.join(',')+'">0 - 00</output></div>';
    }).join('');
  }

  function installCashingUp(){
    const operations = document.getElementById('operations');
    if(!operations || document.getElementById('operations-cashing')) return;

    const tabs = operations.querySelector('.charity-subtabs');
    if(tabs && !tabs.querySelector('[data-charity-subtarget="cashing"]')){
      const source = tabs.querySelector('.charity-subtab:last-of-type');
      const tab = source ? source.cloneNode(false) : document.createElement('button');
      tab.type = 'button';
      tab.className = 'charity-subtab subtab';
      tab.dataset.charitySubtarget = 'cashing';
      tab.setAttribute('role','tab');
      tab.setAttribute('aria-selected','false');
      tab.setAttribute('aria-controls','operations-cashing');
      tab.tabIndex = -1;
      tab.textContent = 'Cashing Up';
      tabs.appendChild(tab);
    }

    const panel = document.createElement('div');
    panel.id = 'operations-cashing';
    panel.className = 'charity-subpanel charity-cashing-panel';
    panel.hidden = true;
    panel.tabIndex = -1;
    panel.setAttribute('role','tabpanel');
    panel.innerHTML = [
      '<div class="charity-cashup">',
      '  <header class="card charity-card charity-card--wide charity-cashup-heading">',
      '    <p class="charity-kicker">COUNT | TOTAL | MINUS FLOAT</p>',
      '    <h2>Cashing Up</h2>',
      '    <p>Enter the number of each note and coin in the till. Each row calculates its value, then the fixed £100 float is subtracted.</p>',
      '  </header>',
      '  <div class="charity-cashup-layout">',
      '    <section class="card charity-card charity-cash-table-card" aria-labelledby="charityCashCountTitle">',
      '      <h3 id="charityCashCountTitle">Cash in till</h3>',
      '      <div class="charity-cash-table-wrap">',
      '        <table class="charity-cash-table">',
      '          <thead><tr><th scope="col">Note or coin</th><th scope="col">How many</th><th scope="col">Value</th></tr></thead>',
      '          <tbody>'+cashRows()+'</tbody>',
      '        </table>',
      '      </div>',
      '    </section>',
      '    <aside class="charity-cash-summary-column">',
      '      <section class="card charity-card charity-cash-totals" aria-labelledby="charityCashTotalsTitle">',
      '        <h3 id="charityCashTotalsTitle">Till totals</h3>',
      '        <div class="charity-total-line"><span>Total Count</span><output id="charityCashTotal" aria-live="polite">£0.00</output></div>',
      '        <div class="charity-float-line"><span>Float</span><strong>£100.00</strong></div>',
      '        <div class="charity-total-line charity-total-line--final"><span>Minus Float</span><output id="charityCashMinusFloat" aria-live="polite">−£100.00</output></div>',
      '        <p class="charity-cash-result-label">Cash in till after the £100 float</p>',
      '      </section>',
      '      <section class="card charity-card charity-cheque-summary" aria-labelledby="charityChequeTitle">',
      '        <div class="charity-cheque-heading"><div><p class="charity-kicker">POUNDS - PENCE</p><h3 id="charityChequeTitle">Cheque book summary</h3></div><span aria-hidden="true">£</span></div>',
      '        <p>Copy these grouped amounts into the cheque book.</p>',
      '        <div class="charity-cheque-rows">'+chequeRows()+'</div>',
      '      </section>',
      '    </aside>',
      '  </div>',
      '</div>'
    ].join('');
    operations.appendChild(panel);

    const values = Object.create(null);
    const inputs = Array.from(panel.querySelectorAll('.charity-cash-count'));
    const totalOutput = panel.querySelector('#charityCashTotal');
    const minusFloatOutput = panel.querySelector('#charityCashMinusFloat');

    function update(){
      let total = 0;
      inputs.forEach(function(input){
        const count = Math.max(0, Math.floor(Number(input.value) || 0));
        const pence = Number(input.dataset.pence) || 0;
        const subtotal = count * pence;
        values[input.dataset.key] = subtotal;
        total += subtotal;
        const output = panel.querySelector('[data-subtotal="'+input.dataset.key+'"]');
        if(output) output.textContent = money(subtotal);
      });
      totalOutput.textContent = money(total);
      minusFloatOutput.textContent = money(total - 10000);
      panel.querySelectorAll('[data-cheque-keys]').forEach(function(output){
        const grouped = String(output.dataset.chequeKeys || '').split(',').reduce(function(sum,key){
          return sum + (values[key] || 0);
        },0);
        output.textContent = chequeAmount(grouped);
      });
    }

    inputs.forEach(function(input){
      input.addEventListener('input', update);
      input.addEventListener('change', function(){
        input.value = String(Math.max(0, Math.floor(Number(input.value) || 0)));
        update();
      });
    });
    update();
  }

  const STEP_ARTWORK = Object.freeze({
    hanging:[
      {asset:'hang-it-right', crop:[190,500,920,270], className:'hang-step-1', alt:'Hanger clips pushed out to both end stops, from the Hang It Right A4 artwork.'},
      {asset:'hang-it-right', crop:[1360,495,830,275], className:'hang-step-2', alt:'Waistband held straight, firm and taut, from the Hang It Right A4 artwork.'},
      {asset:'hang-it-right', crop:[120,1010,2100,505], className:'hang-step-3', alt:'Wide garment folded around the back and secured, from the Hang It Right A4 artwork.'}
    ],
    cubing:[
      {asset:'cube-it-right', crop:[160,560,360,290], className:'cube-step-1', alt:'Garment label showing UK size 14, from the Cube It Right A4 artwork.'},
      {asset:'cube-it-right', crop:[1240,580,915,260], className:'cube-step-2', alt:'Ladies and mens cube size-guide panels, from the Cube It Right A4 artwork.'},
      {asset:'cube-it-right', crop:[120,1200,640,345], className:'cube-step-3', alt:'Label size 14 matched to cube 14 on a hanger, from the Cube It Right A4 artwork.'}
    ]
  });

  function artworkNode(item){
    const crop = item.crop;
    const frame = document.createElement('figure');
    frame.className = 'charity-step-artwork ' + item.className;
    frame.style.aspectRatio = crop[2] + ' / ' + crop[3];
    frame.style.setProperty('--art-width',(2339 / crop[2] * 100) + '%');
    frame.style.setProperty('--art-left',(-crop[0] / crop[2] * 100) + '%');
    frame.style.setProperty('--art-top',(-crop[1] / crop[3] * 100) + '%');

    const image = document.createElement('img');
    image.src = '/systems/charity-shop/artwork.php?asset=' + encodeURIComponent(item.asset) + '&v=' + ARTWORK_BUILD;
    image.alt = item.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    frame.appendChild(image);
    return frame;
  }

  function installStepArtwork(){
    [
      ['#operations-hanging',STEP_ARTWORK.hanging],
      ['#operations-cubing',STEP_ARTWORK.cubing]
    ].forEach(function(entry){
      const section = document.querySelector(entry[0]);
      if(!section) return;
      const cards = Array.from(section.querySelectorAll('article.charity-step-card')).slice(0,3);
      cards.forEach(function(card,index){
        if(card.querySelector('.charity-step-artwork') || !entry[1][index]) return;
        card.appendChild(artworkNode(entry[1][index]));
      });
    });
  }

  loadApprovedSharedUi();
  loadCompleteCharityTheme();
  loadCharityCorrections();
  installCashingUp();
  installStepArtwork();

  const mainTabs = Array.from(document.querySelectorAll('.charity-main-tab[data-charity-target]'));
  const mainSections = Array.from(document.querySelectorAll('.charity-main-section'));
  const lockButton = document.getElementById('charityLockBtn');
  const defaultSubtab = Object.freeze({
    operations:'overview',
    sizes:'ladies',
    homeware:'duvet'
  });
  const currentSubtab = Object.assign({},defaultSubtab);
  const mainIds = new Set(mainTabs.map(function(button){return button.dataset.charityTarget;}));
  let applyingHistory = false;

  const legacyRoutes = Object.freeze({
    overview:['operations','overview'],
    hanging:['operations','hanging'],
    cubing:['operations','cubing'],
    cashing:['operations','cashing'],
    'cashing-up':['operations','cashing'],
    'ladies-sizes':['sizes','ladies'],
    'mens-sizes':['sizes','mens'],
    'shoe-sizes':['sizes','shoes'],
    'duvet-sizes':['homeware','duvet']
  });

  function subtabButtons(mainId){
    const section = document.getElementById(mainId);
    return section ? Array.from(section.querySelectorAll('.charity-subtab[data-charity-subtarget]')) : [];
  }

  function subpanels(mainId){
    const section = document.getElementById(mainId);
    return section ? Array.from(section.querySelectorAll('.charity-subpanel')) : [];
  }

  function validSubtab(mainId,subId){
    return subtabButtons(mainId).some(function(button){return button.dataset.charitySubtarget === subId;});
  }

  function normalisedState(mainValue,subValue){
    const main = mainIds.has(mainValue) ? mainValue : 'operations';
    const requestedSub = subValue || currentSubtab[main] || defaultSubtab[main];
    const sub = validSubtab(main,requestedSub) ? requestedSub : defaultSubtab[main];
    return {main:main,sub:sub};
  }

  function parseLocationState(){
    try{
      const params = new URLSearchParams(location.search || '');
      const queryMain = String(params.get('section') || '').trim().toLowerCase();
      const querySub = String(params.get('tab') || '').trim().toLowerCase();
      if(queryMain || querySub) return normalisedState(queryMain,querySub);
    }catch(_error){}

    let raw = String(location.hash || '').replace(/^#/,'').trim().toLowerCase();
    if(!raw) return {main:'operations',sub:'overview'};
    if(raw.startsWith('?')){
      const params = new URLSearchParams(raw.slice(1));
      raw = String(params.get('tab') || '').trim().toLowerCase();
    }
    if(legacyRoutes[raw]) return {main:legacyRoutes[raw][0],sub:legacyRoutes[raw][1]};
    const parts = raw.split('/').filter(Boolean);
    return normalisedState(parts[0],parts[1]);
  }

  function routeUrl(mainId,subId){
    try{
      const url = new URL(location.href);
      url.searchParams.set('section',mainId);
      url.searchParams.set('tab',subId);
      url.hash = '';
      return url.pathname + url.search;
    }catch(_error){
      return location.pathname + '?section=' + encodeURIComponent(mainId) + '&tab=' + encodeURIComponent(subId);
    }
  }

  function setButtonState(buttons,activeValue,dataKey){
    buttons.forEach(function(button){
      const active = button.dataset[dataKey] === activeValue;
      button.setAttribute('aria-selected',String(active));
      button.classList.toggle('active',active);
      button.tabIndex = active ? 0 : -1;
    });
  }

  function activate(mainId,subId,options){
    const opts = options || {};
    const state = normalisedState(mainId,subId);
    const selectedMain = state.main;
    const selectedSub = state.sub;
    currentSubtab[selectedMain] = selectedSub;
    setButtonState(mainTabs,selectedMain,'charityTarget');

    mainSections.forEach(function(section){
      const active = section.id === selectedMain;
      section.classList.toggle('active',active);
      section.hidden = !active;
    });

    const buttons = subtabButtons(selectedMain);
    setButtonState(buttons,selectedSub,'charitySubtarget');
    subpanels(selectedMain).forEach(function(panel){
      const active = panel.id === selectedMain + '-' + selectedSub;
      panel.classList.toggle('active',active);
      panel.hidden = !active;
    });

    if(opts.history !== false && !applyingHistory){
      const next = routeUrl(selectedMain,selectedSub);
      try{
        if(opts.replace) history.replaceState({charityMain:selectedMain,charitySub:selectedSub},'',next);
        else history.pushState({charityMain:selectedMain,charitySub:selectedSub},'',next);
      }catch(_error){}
    }

    if(opts.focusPanel){
      const panel = document.getElementById(selectedMain + '-' + selectedSub);
      try{panel && panel.focus({preventScroll:true});}
      catch(_error){try{panel && panel.focus();}catch(__error){}}
    }
  }

  function bindArrowNavigation(buttons,valueForButton,activateButton){
    buttons.forEach(function(button,index){
      button.addEventListener('keydown',function(event){
        if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if(event.key === 'ArrowLeft') nextIndex = (index - 1 + buttons.length) % buttons.length;
        if(event.key === 'ArrowRight') nextIndex = (index + 1) % buttons.length;
        if(event.key === 'Home') nextIndex = 0;
        if(event.key === 'End') nextIndex = buttons.length - 1;
        const nextButton = buttons[nextIndex];
        nextButton.focus();
        activateButton(valueForButton(nextButton));
      });
    });
  }

  mainTabs.forEach(function(button){
    button.addEventListener('click',function(){
      const mainId = button.dataset.charityTarget;
      activate(mainId,currentSubtab[mainId] || defaultSubtab[mainId],{history:true});
    });
  });

  bindArrowNavigation(
    mainTabs,
    function(button){return button.dataset.charityTarget;},
    function(mainId){activate(mainId,currentSubtab[mainId] || defaultSubtab[mainId],{history:true});}
  );

  mainSections.forEach(function(section){
    const buttons = subtabButtons(section.id);
    buttons.forEach(function(button){
      button.addEventListener('click',function(){
        activate(section.id,button.dataset.charitySubtarget,{history:true});
      });
    });
    bindArrowNavigation(
      buttons,
      function(button){return button.dataset.charitySubtarget;},
      function(subId){activate(section.id,subId,{history:true});}
    );
  });

  function restoreFromLocation(){
    applyingHistory = true;
    const state = parseLocationState();
    activate(state.main,state.sub,{history:false});
    applyingHistory = false;
  }

  window.addEventListener('popstate',restoreFromLocation);
  window.addEventListener('hashchange',restoreFromLocation);

  if(lockButton){
    lockButton.addEventListener('click',async function(){
      lockButton.disabled = true;
      lockButton.textContent = 'Locking...';
      try{
        await fetch('/sitewide/api/protected_access.php',{
          method:'POST',
          credentials:'same-origin',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({action:'lock',section:'charity_shop_guidance'})
        });
      }catch(_error){}
      location.assign('/home/1');
    });
  }

  const initial = parseLocationState();
  activate(initial.main,initial.sub,{history:true,replace:true});
})();
