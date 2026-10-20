(function(){
  'use strict';

  const BUILD = 'SAVED_DATA_REVISION_CLIENT_20260823_1';
  if(window.__BASELINE_PROTECTED_ACCESS__) return;
  window.__BASELINE_PROTECTED_ACCESS__ = BUILD;

  function addStylesheet(href, marker, moveToEnd){
    const existing = document.querySelector('link[' + marker + ']');
    if(existing){
      /* Preserve the head-loaded stylesheet in place. Moving or replacing it
         during first paint caused the protected-key icon to flash white. */
      return existing;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute(marker, 'true');
    document.head.appendChild(link);
    return link;
  }

  function addStylesheets(){
    addStylesheet('/sitewide/css/baseline-protected-key-placement.css?v=' + BUILD, 'data-protected-key-placement');
    addStylesheet('/sitewide/css/baseline-ui-fixes.css?v=' + BUILD, 'data-baseline-ui-fixes');
    addStylesheet('/sitewide/css/baseline-protected-access.css?v=' + BUILD, 'data-protected-access-style', true);
  }


  function ordinarySectionMenu(){
    return [
      '<div class="bl-pages-dd" data-protected-current-section="charity-shop">',
      '  <button class="bl-mini-btn bl-pages-btn" id="bl-pages-toggle" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Charity Shop, locked site"><span class="bl-protected-site-label">Charity Shop</span><span class="bl-protected-site-key" aria-hidden="true"></span><span class="bl-protected-site-caret" aria-hidden="true">&#9662;</span></button>',
      '  <div class="bl-pages-menu" role="menu" hidden>',
      '    <a class="bl-pages-link" role="menuitem" href="/home/1">Home</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-food-approach/system">Baseline Food Approach</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-massage/system">Baseline Massage</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-natural-skincare/system">Baseline Personal Care</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-fitness/system">Baseline Fitness</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-badminton-session/system">Baseline Badminton Session</a>',
      '    <a class="bl-pages-link" role="menuitem" href="/baseline-games-hub/games-hub">Baseline Games Hub</a>',
      '  </div>',
      '</div>'
    ].join('');
  }

  function bindSectionDropdown(dropdown){
    if(!dropdown || dropdown.dataset.protectedDropdownBound === 'true' || dropdown.dataset.blPagesBound === '1') return;
    const button = dropdown.querySelector('.bl-pages-btn');
    const menu = dropdown.querySelector('.bl-pages-menu');
    if(!button || !menu) return;
    dropdown.dataset.protectedDropdownBound = 'true';
    /* The shared header controller uses this same ownership marker. Without it,
       both controllers toggle the Charity Shop menu on one click: one opens it
       and the second immediately closes it. */
    dropdown.dataset.blPagesBound = '1';
    if(!menu.id) menu.id = 'bl-charity-pages-menu';
    button.setAttribute('aria-controls',menu.id);
    const items = function(){ return Array.from(menu.querySelectorAll('[role="menuitem"],a[href]')); };

    function focusItem(index){
      const links = items();
      if(!links.length) return;
      const safeIndex = (index + links.length) % links.length;
      try{ links[safeIndex].focus({preventScroll:true}); }
      catch(_error){ try{ links[safeIndex].focus(); }catch(__error){} }
    }

    function setOpen(open){
      menu.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      dropdown.classList.toggle('is-open', open);
    }
    button.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      setOpen(menu.hidden);
    });
    button.addEventListener('keydown',function(event){
      if(event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      setOpen(true);
      focusItem(event.key === 'ArrowUp' ? -1 : 0);
    });
    menu.addEventListener('keydown',function(event){
      const links = items();
      if(!links.length) return;
      const current = links.indexOf(document.activeElement);
      if(event.key === 'ArrowDown'){
        event.preventDefault();
        focusItem(current < 0 ? 0 : current + 1);
      }else if(event.key === 'ArrowUp'){
        event.preventDefault();
        focusItem(current < 0 ? -1 : current - 1);
      }else if(event.key === 'Home'){
        event.preventDefault();
        focusItem(0);
      }else if(event.key === 'End'){
        event.preventDefault();
        focusItem(-1);
      }else if(event.key === 'Escape'){
        event.preventDefault();
        setOpen(false);
        try{ button.focus({preventScroll:true}); }catch(_error){ try{ button.focus(); }catch(__error){} }
      }
    });
    menu.addEventListener('click', function(event){ if(event.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function(event){ if(!dropdown.contains(event.target)) setOpen(false); });
    document.addEventListener('keydown', function(event){
      if(event.key !== 'Escape' || menu.hidden) return;
      setOpen(false);
      try{ button.focus({preventScroll:true}); }catch(_error){ try{ button.focus(); }catch(__error){} }
    });
  }

  const CHARITY_ARTWORK = Object.freeze([
    { panel:'operations-overview', asset:'back-room-consequences', alt:'Back-room choices and shop-floor consequences charity shop poster', caption:'Back-room choices. Shop-floor consequences.' },
    { panel:'operations-hanging', asset:'hang-it-right', alt:'Hang It Right charity shop clothing-hanger guidance sheet', caption:'Hang It Right - the original A4 guidance sheet.' },
    { panel:'operations-cubing', asset:'cube-it-right', alt:'Cube It Right charity shop size-cube guidance sheet', caption:'Cube It Right - the original A4 guidance sheet.' },
    { panel:'sizes-ladies', asset:'ladies-size-guide', alt:'Ladies size guide for the charity shop', caption:"Ladies' Size Guide - the shop conversion artwork." },
    { panel:'sizes-mens', asset:'mens-size-guide', alt:'Mens size guide for the charity shop', caption:"Men's Size Guide - the shop conversion artwork." },
    { panel:'sizes-shoes', asset:'shoe-size-guide', alt:'Shoe size guide for the charity shop', caption:'Shoe Size Guide - the shop conversion artwork.' },
    { panel:'sizes-duvet', asset:'duvet-size-guide', alt:'Duvet bedding size guide for the charity shop', caption:'Duvet Size Guide - the shop sorting artwork.' }
  ]);

  function installCharityArtwork(){
    if(!document.body || document.body.dataset.app !== 'charity-shop') return;
    CHARITY_ARTWORK.forEach(function(item){
      const panel = document.getElementById(item.panel);
      if(!panel || panel.querySelector('[data-charity-artwork="' + item.asset + '"]')) return;
      const grid = panel.querySelector('.charity-grid') || panel;
      const figure = document.createElement('figure');
      figure.className = 'card charity-card charity-card--wide charity-artwork-card';
      figure.dataset.charityArtwork = item.asset;
      const image = document.createElement('img');
      image.src = '/systems/charity-shop/artwork.php?asset=' + encodeURIComponent(item.asset) + '&v=20260730_1';
      image.alt = item.alt;
      image.loading = item.panel === 'operations-overview' ? 'eager' : 'lazy';
      image.decoding = 'async';
      const caption = document.createElement('figcaption');
      caption.textContent = item.caption;
      figure.appendChild(image);
      figure.appendChild(caption);
      grid.insertBefore(figure, grid.firstChild);
    });
  }

  function applyCharityPageStructure(){
    if(!document.body || document.body.dataset.app !== 'charity-shop') return;
    const homebarInner = document.querySelector('.bl-homebar .bl-homebar-inner');
    if(homebarInner){
      const existingDropdown = homebarInner.querySelector('.bl-pages-dd');
      const currentButton = existingDropdown && existingDropdown.querySelector('.bl-pages-btn');
      if(!existingDropdown || !currentButton || !/^Charity Shop\b/.test(currentButton.textContent || '')){
        const template = document.createElement('div');
        template.innerHTML = ordinarySectionMenu();
        const replacementDropdown = template.firstElementChild;
        if(replacementDropdown){
          if(existingDropdown){
            existingDropdown.replaceWith(replacementDropdown);
          }else{
            const sharedControls = homebarInner.querySelector('.bl-homebar-spacer, .bl-homebar-right');
            homebarInner.insertBefore(replacementDropdown, sharedControls || homebarInner.firstChild || null);
          }
        }
      }
      document.querySelectorAll('.charity-homebar-actions').forEach(function(group){ group.remove(); });
      bindSectionDropdown(homebarInner.querySelector('.bl-pages-dd'));
    }
    const lockButton = document.getElementById('charityLockBtn');
    if(lockButton) lockButton.remove();
    document.querySelectorAll('.charity-access-label').forEach(function(label){ label.remove(); });
    document.querySelectorAll('.charity-subtabs').forEach(function(group){ group.classList.add('subtabs'); });
    document.querySelectorAll('.charity-subtab').forEach(function(button){
      button.classList.add('subtab');
      if(button.dataset.charitySubtarget === 'overview' && /^Overview$/i.test((button.textContent || '').trim())){
        button.textContent = 'Systems';
      }
    });
    installCharityArtwork();
  }

  function isShowAllOption(option){
    if(!option) return false;
    return String(option.value || '').trim().toLowerCase() === 'all' || /^show all$/i.test(String(option.textContent || '').trim());
  }
  function pinShowAllInSelect(select){
    if(!select || !select.options || !select.options.length) return;
    const options = Array.from(select.options);
    const showAll = options.find(isShowAllOption);
    if(showAll && select.options[0] !== showAll) select.insertBefore(showAll, select.options[0]);
    const wrapper = select.closest('.bl-select');
    const menu = wrapper && wrapper.querySelector('.bl-select-menu');
    if(menu){
      const renderedShowAll = Array.from(menu.querySelectorAll('[role="option"]')).find(function(option){
        return String(option.dataset.value || option.getAttribute('data-value') || '').trim().toLowerCase() === 'all' ||
          /^show all$/i.test(String(option.textContent || '').trim());
      });
      if(renderedShowAll && menu.firstElementChild !== renderedShowAll) menu.insertBefore(renderedShowAll, menu.firstElementChild);
    }
  }
  function pinMassageShowAll(){
    if(!document.body || document.body.dataset.app !== 'massage') return;
    document.querySelectorAll('select').forEach(pinShowAllInSelect);
  }
  function applyApprovedUiFixes(){ applyCharityPageStructure(); pinMassageShowAll(); }

  function observeApprovedUiFixes(){
    if(!document.body || window.__BASELINE_APPROVED_UI_OBSERVER__) return;
    window.__BASELINE_APPROVED_UI_OBSERVER__ = true;
    let frame = 0;
    const observer = new MutationObserver(function(){
      if(frame) return;
      frame = requestAnimationFrame(function(){ frame = 0; applyApprovedUiFixes(); });
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  function buildInterface(){
    const pagesDropdown = document.querySelector('.bl-homebar-inner .bl-pages-dd');
    const homebarInner = document.querySelector('.bl-homebar-inner');
    const topHeader = document.querySelector('.bl-top-header');
    const host = homebarInner || topHeader;
    if(!host) return null;

    let button = document.getElementById('blProtectedKey');
    if(!button){
      button = document.createElement('button');
      button.id = 'blProtectedKey';
      button.className = 'bl-protected-key';
      button.type = 'button';
      button.setAttribute('aria-haspopup','dialog');
      button.setAttribute('aria-controls','blProtectedAccessOverlay');
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Open protected sections');
      button.title = 'Protected sections';
      button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg>';
      if(pagesDropdown && pagesDropdown.parentNode === host) pagesDropdown.insertAdjacentElement('afterend',button);
      else{
        const rightControls = host.querySelector('.bl-homebar-right');
        if(rightControls) host.insertBefore(button,rightControls);
        else host.insertBefore(button,host.firstChild);
      }
    }

    let overlay = document.getElementById('blProtectedAccessOverlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'blProtectedAccessOverlay';
      overlay.className = 'bl-protected-access-overlay';
      overlay.hidden = true;
      overlay.innerHTML = [
      '<section class="bl-protected-access-dialog" role="dialog" aria-modal="true" aria-labelledby="blProtectedAccessTitle" aria-describedby="blProtectedAccessCopy">',
      '  <div class="bl-protected-access-head">',
      '    <div><p class="bl-protected-access-kicker">Protected sections</p><h2 id="blProtectedAccessTitle">Enter Digital Code</h2></div>',
      '    <button class="bl-protected-access-close" id="blProtectedAccessClose" type="button" aria-label="Close digital-code entry">&times;</button>',
      '  </div>',
      '  <p class="bl-protected-access-copy" id="blProtectedAccessCopy">Each protected website section has its own digital code. Enter a code to open the section linked to it.</p>',
      '  <form class="bl-protected-access-form" id="blProtectedAccessForm">',
      '    <label for="blProtectedCode">Digital code</label>',
      '    <div class="bl-protected-code-row">',
      '      <input id="blProtectedCode" name="code" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="12" autocomplete="off" aria-describedby="blProtectedAccessStatus" required>',
      '      <button id="blProtectedSubmit" type="submit">Continue</button>',
      '    </div>',
      '    <p class="bl-protected-access-status" id="blProtectedAccessStatus" role="status" aria-live="polite"></p>',
      '  </form>',
      '</section>'
      ].join('');
      document.body.appendChild(overlay);
    }
    return {button,overlay};
  }

  function initialise(){
    addStylesheets();
    applyApprovedUiFixes();
    observeApprovedUiFixes();
    const ui = buildInterface();
    if(!ui) return;
    const button = ui.button;
    const overlay = ui.overlay;
    const closeButton = document.getElementById('blProtectedAccessClose');
    const form = document.getElementById('blProtectedAccessForm');
    const codeInput = document.getElementById('blProtectedCode');
    const submitButton = document.getElementById('blProtectedSubmit');
    const status = document.getElementById('blProtectedAccessStatus');
    let lastFocus = null;

    function cleanLockedQuery(){
      try{
        const url = new URL(location.href);
        if(!url.searchParams.has('protected') && !url.searchParams.has('charity')) return;
        url.searchParams.delete('protected');
        url.searchParams.delete('charity');
        history.replaceState(history.state,'',url.pathname + (url.search || '') + (url.hash || ''));
      }catch(_error){}
    }
    function openDialog(message){
      lastFocus = document.activeElement;
      overlay.hidden = false;
      button.setAttribute('aria-expanded','true');
      document.body.classList.add('bl-protected-dialog-open');
      status.textContent = message || '';
      codeInput.value = '';
      requestAnimationFrame(function(){ try{codeInput.focus({preventScroll:true});}catch(_error){try{codeInput.focus();}catch(__error){}} });
    }
    function closeDialog(){
      overlay.hidden = true;
      button.setAttribute('aria-expanded','false');
      document.body.classList.remove('bl-protected-dialog-open');
      status.textContent = '';
      codeInput.value = '';
      try{(lastFocus || button).focus({preventScroll:true});}catch(_error){try{button.focus();}catch(__error){}}
    }
    async function submitCode(event){
      event.preventDefault();
      const code = String(codeInput.value || '').replace(/\D/g,'');
      codeInput.value = code;
      if(!code){ status.textContent = 'Enter a digital code.'; codeInput.focus(); return; }
      submitButton.disabled = true;
      codeInput.disabled = true;
      status.textContent = 'Checking code...';
      try{
        const response = await fetch('/sitewide/api/protected_access.php',{
          method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'unlock',code:code})
        });
        const data = await response.json().catch(function(){return {};});
        if(!response.ok || !data.ok || !data.redirect){
          status.textContent = data.error === 'incorrect_code' ? 'That digital code is not recognised.' :
            data.error === 'rate_limited' ? 'Too many attempts. Please wait before trying again.' :
            'The protected section could not be opened. Please try again.';
          codeInput.value = '';
          return;
        }
        status.textContent = 'Opening protected section...';
        location.assign(data.redirect);
      }catch(_error){
        status.textContent = 'The code could not be checked. Confirm the internet connection and try again.';
      }finally{
        submitButton.disabled = false;
        codeInput.disabled = false;
        if(status.textContent !== 'Opening protected section...') try{codeInput.focus();}catch(_error){}
      }
    }

    button.addEventListener('click',function(){openDialog('');});
    closeButton.addEventListener('click',closeDialog);
    form.addEventListener('submit',submitCode);
    codeInput.addEventListener('input',function(){
      const digits = codeInput.value.replace(/\D/g,'');
      if(codeInput.value !== digits) codeInput.value = digits;
      if(status.textContent && status.textContent !== 'Checking code...') status.textContent = '';
    });
    overlay.addEventListener('pointerdown',function(event){if(event.target === overlay) closeDialog();});
    document.addEventListener('keydown',function(event){
      if(event.key === 'Escape' && !overlay.hidden){event.preventDefault();closeDialog();}
      if(event.key === 'Tab' && !overlay.hidden){
        const focusable = Array.from(overlay.querySelectorAll('button:not([disabled]),input:not([disabled])'));
        if(!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if(event.shiftKey && document.activeElement === first){event.preventDefault();last.focus();}
        else if(!event.shiftKey && document.activeElement === last){event.preventDefault();first.focus();}
      }
    });
    try{
      const params = new URLSearchParams(location.search || '');
      if(params.get('protected') === 'locked' || params.get('charity') === 'locked'){
        openDialog('Enter the digital code to continue.');
        cleanLockedQuery();
      }
    }catch(_error){}
  }

  if(document.body) initialise();
  else document.addEventListener('DOMContentLoaded',initialise,{once:true});
})();
