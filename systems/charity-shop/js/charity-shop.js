(function(){
  'use strict';

  const BUILD = 'CHARITY_SHOP_20260801_1';
  const ARTWORK_BUILD = '20260730_4';
  const FLOAT_ENGINE = window.BASELINE_CHARITY_FLOAT;
  if(!FLOAT_ENGINE){
    throw new Error('The charity float engine did not load.');
  }
  const FLOAT_TARGET_PENCE = FLOAT_ENGINE.FLOAT_TARGET_PENCE;
  const DENOMINATIONS = FLOAT_ENGINE.DENOMINATIONS;

  const DENOMINATION_BY_KEY = Object.freeze(DENOMINATIONS.reduce(function(map,item){
    map[item.key] = item;
    return map;
  },Object.create(null)));

  const SMALL_COIN_KEYS = FLOAT_ENGINE.SMALL_COIN_KEYS;
  const SMALL_COIN_KEY_SET = new Set(SMALL_COIN_KEYS);

  const BANK_BOOK_GROUPS = Object.freeze([
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

  const FLOAT_DISPLAY_KEYS = FLOAT_ENGINE.FLOAT_DISPLAY_KEYS;

  function money(pence){
    return new Intl.NumberFormat('en-GB',{
      style:'currency',
      currency:'GBP',
      minimumFractionDigits:2,
      maximumFractionDigits:2
    }).format((Number(pence) || 0) / 100);
  }

  function bookAmount(pence){
    const safe = Math.max(0,Math.round(Number(pence) || 0));
    return Math.floor(safe / 100) + ' - ' + String(safe % 100).padStart(2,'0');
  }

  function emptyCounts(){
    return FLOAT_ENGINE.emptyCounts();
  }

  function makeFloatAllocation(available){
    return FLOAT_ENGINE.makeFloatAllocation(available);
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

  function bankBookRows(){
    return BANK_BOOK_GROUPS.map(function(group){
      return '<div class="charity-cheque-row"><span>'+group.label+'</span><output data-bank-book-keys="'+group.keys.join(',')+'">0 - 00</output></div>';
    }).join('');
  }

  function floatRows(){
    return FLOAT_DISPLAY_KEYS.map(function(key){
      const item = DENOMINATION_BY_KEY[key];
      const aim = key === 'gbp5' ? '6 (Max)' : (key === 'gbp1' ? '55 (Max)' : '15>');
      return [
        '<tr data-float-row="'+key+'">',
        '  <th scope="row">'+item.label+'</th>',
        '  <td>'+aim+'</td>',
        '  <td><output data-float-count="'+key+'">0</output></td>',
        '  <td><output data-float-value="'+key+'">£0.00</output></td>',
        '</tr>'
      ].join('');
    }).join('');
  }

  function installCashingUp(){
    const panel = document.getElementById('operations-cashing');
    if(!panel || !panel.querySelector('.charity-cashup')) return;
    if(panel.dataset.cashingBound === 'true') return;
    panel.dataset.cashingBound = 'true';

    const inputs = Array.from(panel.querySelectorAll('.charity-cash-count'));
    const totalOutput = panel.querySelector('#charityCashTotal');
    const floatOutput = panel.querySelector('#charityFloatTotal');
    const floatMakerOutput = panel.querySelector('#charityFloatMakerTotal');
    const cashToBankOutput = panel.querySelector('#charityCashToBank');
    const bankBookTotalOutput = panel.querySelector('#charityBankBookTotal');
    const floatStatus = panel.querySelector('#charityFloatStatus');
    const floatFallback = panel.querySelector('#charityFloatFallback');

    function update(){
      const availableCounts = emptyCounts();
      const cashToBankValues = Object.create(null);
      let total = 0;

      inputs.forEach(function(input){
        const count = Math.max(0,Math.floor(Number(input.value) || 0));
        const pence = Number(input.dataset.pence) || 0;
        const subtotal = count * pence;
        availableCounts[input.dataset.key] = count;
        total += subtotal;
        const output = panel.querySelector('[data-subtotal="'+input.dataset.key+'"]');
        if(output) output.textContent = money(subtotal);
      });

      const floatPlan = makeFloatAllocation(availableCounts);
      const cashToBank = Math.max(0,total - floatPlan.value);

      DENOMINATIONS.forEach(function(item){
        const keepCount = Math.max(0,floatPlan.counts[item.key] || 0);
        const bankCount = Math.max(0,(availableCounts[item.key] || 0) - keepCount);
        cashToBankValues[item.key] = bankCount * item.pence;
        const countOutput = panel.querySelector('[data-float-count="'+item.key+'"]');
        const valueOutput = panel.querySelector('[data-float-value="'+item.key+'"]');
        if(countOutput) countOutput.textContent = String(keepCount);
        if(valueOutput) valueOutput.textContent = money(keepCount * item.pence);
      });

      totalOutput.textContent = money(total);
      floatOutput.textContent = money(floatPlan.value);
      floatMakerOutput.textContent = money(floatPlan.value);
      cashToBankOutput.textContent = money(cashToBank);
      bankBookTotalOutput.textContent = money(cashToBank);

      if(floatPlan.exact && floatPlan.exceptionalVariance){
        floatStatus.textContent = '£100 float ready. Extra available change was used because another small denomination was short.';
        floatStatus.dataset.state = 'adjusted';
      }else if(floatPlan.exact && floatPlan.shortSmallDenominations.length){
        floatStatus.textContent = '£100 float ready. The mix was adjusted because some small change was unavailable.';
        floatStatus.dataset.state = 'adjusted';
      }else if(floatPlan.exact){
        floatStatus.textContent = '£100 float ready.';
        floatStatus.dataset.state = 'ready';
      }else{
        const reason = floatPlan.problem === 'cash_shortage'
          ? 'There is not enough cash in the till.'
          : (floatPlan.problem === 'rule_shortage'
            ? 'The strict £5-note and £1-coin limits prevent a compliant £100 float.'
            : 'The available denominations cannot make an exact compliant £100 float.');
        floatStatus.textContent = reason + ' Float short by ' + money(floatPlan.shortage) + '.';
        floatStatus.dataset.state = 'short';
      }

      const fallbackUsed = SMALL_COIN_KEYS.map(function(key){ return DENOMINATION_BY_KEY[key]; }).filter(function(item){
        return (floatPlan.counts[item.key] || 0) > FLOAT_ENGINE.NORMAL_SMALL_COIN_LIMIT;
      });
      if(floatPlan.exceptionalVariance && fallbackUsed.length){
        floatFallback.hidden = false;
        floatFallback.textContent = 'Availability adjustment: keep ' + fallbackUsed.map(function(item){
          return (floatPlan.counts[item.key] || 0) + ' × ' + item.label;
        }).join(', ') + ' so the float reaches exactly £100.';
      }else{
        floatFallback.hidden = true;
        floatFallback.textContent = '';
      }

      panel.querySelectorAll('[data-bank-book-keys]').forEach(function(output){
        const grouped = String(output.dataset.bankBookKeys || '').split(',').reduce(function(sum,key){
          return sum + (cashToBankValues[key] || 0);
        },0);
        output.textContent = bookAmount(grouped);
      });
    }

    inputs.forEach(function(input){
      input.addEventListener('input',update);
      input.addEventListener('change',function(){
        input.value = String(Math.max(0,Math.floor(Number(input.value) || 0)));
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

  installCashingUp();
  installStepArtwork();

  const mainTabs = Array.from(document.querySelectorAll('.charity-main-tab[data-charity-target]'));
  const mainSections = Array.from(document.querySelectorAll('.charity-main-section'));
  const lockButton = document.getElementById('charityLockBtn');
  const defaultSubtab = Object.freeze({operations:'overview',sizes:'ladies'});
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
    'duvet-sizes':['sizes','duvet']
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
    const legacyHomeware = mainValue === 'homeware';
    const main = legacyHomeware ? 'sizes' : (mainIds.has(mainValue) ? mainValue : 'operations');
    const legacySubtab = legacyHomeware || subValue === 'sorting';
    const requestedSub = legacySubtab ? 'duvet' : (subValue || currentSubtab[main] || defaultSubtab[main]);
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
  bindArrowNavigation(mainTabs,function(button){return button.dataset.charityTarget;},function(mainId){
    activate(mainId,currentSubtab[mainId] || defaultSubtab[mainId],{history:true});
  });
  mainSections.forEach(function(section){
    const buttons = subtabButtons(section.id);
    buttons.forEach(function(button){
      button.addEventListener('click',function(){
        activate(section.id,button.dataset.charitySubtarget,{history:true});
      });
    });
    bindArrowNavigation(buttons,function(button){return button.dataset.charitySubtarget;},function(subId){
      activate(section.id,subId,{history:true});
    });
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
