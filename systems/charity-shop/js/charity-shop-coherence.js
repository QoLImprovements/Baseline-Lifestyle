(function(){
  'use strict';

  const BUILD = 'CHARITY_SHOP_COHERENCE_20260730_1';

  function normaliseLegacyHomewareRoute(){
    try{
      const url = new URL(window.location.href);
      if(String(url.searchParams.get('section') || '').toLowerCase() !== 'homeware') return;
      url.searchParams.set('section','sizes');
      const requestedTab = String(url.searchParams.get('tab') || '').toLowerCase();
      url.searchParams.set('tab',requestedTab === 'sorting' ? 'duvet' : (requestedTab || 'duvet'));
      history.replaceState(history.state,'',url.pathname + url.search + url.hash);
    }catch(_error){}
  }

  function combineSizeSections(){
    const sizesTab = document.querySelector('.charity-main-tab[data-charity-target="sizes"]');
    const homewareTab = document.querySelector('.charity-main-tab[data-charity-target="homeware"]');
    const sizesSection = document.getElementById('sizes');
    const homewareSection = document.getElementById('homeware');

    if(sizesTab){
      sizesTab.textContent = 'Clothing & Homeware Sizes';
      sizesTab.setAttribute('aria-label','Clothing and homeware sizes');
    }
    if(homewareTab) homewareTab.remove();
    if(!sizesSection || !homewareSection) return;

    const sizesTabs = sizesSection.querySelector('.charity-subtabs');
    const duvetSourceTab = homewareSection.querySelector('[data-charity-subtarget="duvet"]');
    const duvetPanel = document.getElementById('homeware-duvet');

    if(sizesTabs){
      sizesTabs.setAttribute('aria-label','Clothing and homeware size guides');
      if(!sizesTabs.querySelector('[data-charity-subtarget="duvet"]')){
        const duvetTab = duvetSourceTab ? duvetSourceTab.cloneNode(true) : document.createElement('button');
        duvetTab.type = 'button';
        duvetTab.className = 'charity-subtab';
        duvetTab.id = 'sizesDuvetTab';
        duvetTab.setAttribute('role','tab');
        duvetTab.setAttribute('aria-selected','false');
        duvetTab.setAttribute('aria-controls','sizes-duvet');
        duvetTab.setAttribute('tabindex','-1');
        duvetTab.dataset.charitySubtarget = 'duvet';
        duvetTab.textContent = 'Duvet Sizes';
        sizesTabs.appendChild(duvetTab);
      }
    }

    if(duvetPanel){
      duvetPanel.id = 'sizes-duvet';
      duvetPanel.setAttribute('aria-labelledby','sizesDuvetTab');
      duvetPanel.classList.remove('active');
      duvetPanel.hidden = true;
      sizesSection.appendChild(duvetPanel);
    }

    const sortingPanel = document.getElementById('homeware-sorting');
    if(sortingPanel) sortingPanel.remove();
    homewareSection.remove();
  }

  function loadFinalTheme(){
    let link = document.querySelector('link[data-charity-coherence-theme]');
    if(!link){
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.dataset.charityCoherenceTheme = 'true';
    }
    link.href = '/systems/charity-shop/css/charity-shop-coherence.css?v=' + BUILD;
    document.head.appendChild(link);
  }

  normaliseLegacyHomewareRoute();
  combineSizeSections();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',loadFinalTheme,{once:true});
  }else{
    loadFinalTheme();
  }
})();
