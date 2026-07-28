(function(){
  'use strict';

  const mainTabs = Array.from(document.querySelectorAll('.charity-main-tab[data-charity-target]'));
  const mainSections = Array.from(document.querySelectorAll('.charity-main-section'));
  const lockButton = document.getElementById('charityLockBtn');
  const defaultSubtab = Object.freeze({
    operations:'overview',
    sizes:'ladies',
    homeware:'duvet'
  });
  const currentSubtab = Object.assign({}, defaultSubtab);
  const mainIds = new Set(mainTabs.map(button => button.dataset.charityTarget));
  let applyingHistory = false;

  const legacyRoutes = Object.freeze({
    overview:['operations','overview'],
    hanging:['operations','hanging'],
    cubing:['operations','cubing'],
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

  function validSubtab(mainId, subId){
    return subtabButtons(mainId).some(button => button.dataset.charitySubtarget === subId);
  }

  function normalisedState(mainValue, subValue){
    const main = mainIds.has(mainValue) ? mainValue : 'operations';
    const requestedSub = subValue || currentSubtab[main] || defaultSubtab[main];
    const sub = validSubtab(main, requestedSub) ? requestedSub : defaultSubtab[main];
    return { main, sub };
  }

  function parseLocationState(){
    try{
      const params = new URLSearchParams(location.search || '');
      const queryMain = String(params.get('section') || '').trim().toLowerCase();
      const querySub = String(params.get('tab') || '').trim().toLowerCase();
      if(queryMain || querySub) return normalisedState(queryMain, querySub);
    }catch(_error){}

    let raw = String(location.hash || '').replace(/^#/, '').trim().toLowerCase();
    if(!raw) return { main:'operations', sub:'overview' };

    if(raw.startsWith('?')){
      const params = new URLSearchParams(raw.slice(1));
      raw = String(params.get('tab') || '').trim().toLowerCase();
    }

    if(legacyRoutes[raw]){
      return { main:legacyRoutes[raw][0], sub:legacyRoutes[raw][1] };
    }

    const parts = raw.split('/').filter(Boolean);
    return normalisedState(parts[0], parts[1]);
  }

  function routeUrl(mainId, subId){
    try{
      const url = new URL(location.href);
      url.searchParams.set('section', mainId);
      url.searchParams.set('tab', subId);
      url.hash = '';
      return url.pathname + url.search;
    }catch(_error){
      return location.pathname + '?section=' + encodeURIComponent(mainId) + '&tab=' + encodeURIComponent(subId);
    }
  }

  function setButtonState(buttons, activeValue, dataKey){
    buttons.forEach(button => {
      const active = button.dataset[dataKey] === activeValue;
      button.setAttribute('aria-selected', String(active));
      button.classList.toggle('active', active);
      button.tabIndex = active ? 0 : -1;
    });
  }

  function activate(mainId, subId, options){
    const opts = options || {};
    const state = normalisedState(mainId, subId);
    const selectedMain = state.main;
    const selectedSub = state.sub;

    currentSubtab[selectedMain] = selectedSub;
    setButtonState(mainTabs, selectedMain, 'charityTarget');

    mainSections.forEach(section => {
      const active = section.id === selectedMain;
      section.classList.toggle('active', active);
      section.hidden = !active;
    });

    const buttons = subtabButtons(selectedMain);
    setButtonState(buttons, selectedSub, 'charitySubtarget');
    subpanels(selectedMain).forEach(panel => {
      const active = panel.id === selectedMain + '-' + selectedSub;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });

    if(opts.history !== false && !applyingHistory){
      const next = routeUrl(selectedMain, selectedSub);
      try{
        if(opts.replace) history.replaceState({ charityMain:selectedMain, charitySub:selectedSub }, '', next);
        else history.pushState({ charityMain:selectedMain, charitySub:selectedSub }, '', next);
      }catch(_error){}
    }

    if(opts.focusPanel){
      const panel = document.getElementById(selectedMain + '-' + selectedSub);
      try{ panel && panel.focus({ preventScroll:true }); }catch(_error){ try{ panel && panel.focus(); }catch(__error){} }
    }
  }

  function bindArrowNavigation(buttons, valueForButton, activateButton){
    buttons.forEach((button, index) => {
      button.addEventListener('keydown', function(event){
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

  mainTabs.forEach(button => {
    button.addEventListener('click', function(){
      const mainId = button.dataset.charityTarget;
      activate(mainId, currentSubtab[mainId] || defaultSubtab[mainId], { history:true });
    });
  });

  bindArrowNavigation(
    mainTabs,
    button => button.dataset.charityTarget,
    mainId => activate(mainId, currentSubtab[mainId] || defaultSubtab[mainId], { history:true })
  );

  mainSections.forEach(section => {
    const buttons = subtabButtons(section.id);
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        activate(section.id, button.dataset.charitySubtarget, { history:true });
      });
    });
    bindArrowNavigation(
      buttons,
      button => button.dataset.charitySubtarget,
      subId => activate(section.id, subId, { history:true })
    );
  });

  function restoreFromLocation(){
    applyingHistory = true;
    const state = parseLocationState();
    activate(state.main, state.sub, { history:false });
    applyingHistory = false;
  }

  window.addEventListener('popstate', restoreFromLocation);
  window.addEventListener('hashchange', restoreFromLocation);

  if(lockButton){
    lockButton.addEventListener('click', async function(){
      lockButton.disabled = true;
      lockButton.textContent = 'Locking...';
      try{
        await fetch('/sitewide/api/protected_access.php', {
          method:'POST',
          credentials:'same-origin',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify({ action:'lock', section:'charity_shop_guidance' })
        });
      }catch(_error){}
      location.assign('/home/1');
    });
  }

  const initial = parseLocationState();
  activate(initial.main, initial.sub, { history:true, replace:true });
})();
