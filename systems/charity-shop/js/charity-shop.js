(function(){
  'use strict';

  const tabButtons = Array.from(document.querySelectorAll('.charity-tabs .tab[data-target]'));
  const panels = Array.from(document.querySelectorAll('main .section[role="tabpanel"]'));
  const lockButton = document.getElementById('charityLockBtn');
  const validTargets = new Set(tabButtons.map(button => button.dataset.target));

  function targetFromLocation(){
    const raw = String(location.hash || '').replace(/^#/, '').trim().toLowerCase();
    return validTargets.has(raw) ? raw : 'overview';
  }

  function activate(target, options){
    const selectedTarget = validTargets.has(target) ? target : 'overview';
    const opts = options || {};

    tabButtons.forEach(button => {
      const active = button.dataset.target === selectedTarget;
      button.setAttribute('aria-selected', String(active));
      button.classList.toggle('active', active);
      button.tabIndex = active ? 0 : -1;
    });

    panels.forEach(panel => {
      const active = panel.id === selectedTarget;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });

    if(opts.history !== false){
      const next = selectedTarget === 'overview' ? location.pathname : location.pathname + '#' + selectedTarget;
      try{
        if(opts.replace) history.replaceState({ charityTab:selectedTarget }, '', next);
        else history.pushState({ charityTab:selectedTarget }, '', next);
      }catch(_error){
        location.hash = selectedTarget === 'overview' ? '' : selectedTarget;
      }
    }

    if(opts.focusPanel){
      const panel = document.getElementById(selectedTarget);
      try{ panel && panel.focus({ preventScroll:true }); }catch(_error){ try{ panel && panel.focus(); }catch(__error){} }
    }
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function(){
      activate(button.dataset.target, { history:true, focusPanel:false });
    });

    button.addEventListener('keydown', function(event){
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if(event.key === 'ArrowLeft') nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      if(event.key === 'ArrowRight') nextIndex = (index + 1) % tabButtons.length;
      if(event.key === 'Home') nextIndex = 0;
      if(event.key === 'End') nextIndex = tabButtons.length - 1;
      tabButtons[nextIndex].focus();
      activate(tabButtons[nextIndex].dataset.target, { history:true, focusPanel:false });
    });
  });

  window.addEventListener('popstate', function(){
    activate(targetFromLocation(), { history:false, focusPanel:false });
  });

  window.addEventListener('hashchange', function(){
    activate(targetFromLocation(), { history:false, focusPanel:false });
  });

  if(lockButton){
    lockButton.addEventListener('click', async function(){
      lockButton.disabled = true;
      lockButton.textContent = 'Locking...';
      try{
        await fetch('/sitewide/api/charity_shop_access.php', {
          method:'POST',
          credentials:'same-origin',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify({ action:'lock' })
        });
      }catch(_error){}
      location.assign('/home/1');
    });
  }

  activate(targetFromLocation(), { history:false, focusPanel:false });
})();
