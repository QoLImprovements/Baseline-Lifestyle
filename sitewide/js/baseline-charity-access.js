(function(){
  'use strict';

  const BUILD = 'BASELINE_CHARITY_ACCESS_20260728_1';
  if(window.__BASELINE_CHARITY_ACCESS__) return;
  window.__BASELINE_CHARITY_ACCESS__ = BUILD;

  function addStylesheet(){
    if(document.querySelector('link[data-charity-access-style]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/sitewide/css/baseline-charity-access.css?v=' + BUILD;
    link.dataset.charityAccessStyle = 'true';
    document.head.appendChild(link);
  }

  function buildInterface(){
    const header = document.querySelector('.bl-top-header');
    if(!header || document.getElementById('blCharityKey')) return null;

    const button = document.createElement('button');
    button.id = 'blCharityKey';
    button.className = 'bl-charity-key';
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'blCharityAccessOverlay');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open charity shop guidance');
    button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg><span>Shop</span>';
    header.insertBefore(button, header.firstChild);

    const overlay = document.createElement('div');
    overlay.id = 'blCharityAccessOverlay';
    overlay.className = 'bl-charity-access-overlay';
    overlay.hidden = true;
    overlay.innerHTML = [
      '<section class="bl-charity-access-dialog" role="dialog" aria-modal="true" aria-labelledby="blCharityAccessTitle" aria-describedby="blCharityAccessCopy">',
      '  <div class="bl-charity-access-head">',
      '    <div>',
      '      <p class="bl-charity-access-kicker">Protected shop section</p>',
      '      <h2 id="blCharityAccessTitle">Charity Shop Guidance</h2>',
      '    </div>',
      '    <button class="bl-charity-access-close" id="blCharityAccessClose" type="button" aria-label="Close PIN entry">&times;</button>',
      '  </div>',
      '  <p class="bl-charity-access-copy" id="blCharityAccessCopy">Enter the shop digit code to open the internal guidance tabs.</p>',
      '  <form class="bl-charity-access-form" id="blCharityAccessForm">',
      '    <label for="blCharityPin">Digit code</label>',
      '    <div class="bl-charity-pin-row">',
      '      <input id="blCharityPin" name="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="8" autocomplete="off" aria-describedby="blCharityAccessStatus" required>',
      '      <button id="blCharitySubmit" type="submit">Open guidance</button>',
      '    </div>',
      '    <p class="bl-charity-access-status" id="blCharityAccessStatus" role="status" aria-live="polite"></p>',
      '  </form>',
      '  <p class="bl-charity-access-note">The guidance is displayed as website content with separate tabs. The cash-counting app is not part of this section.</p>',
      '</section>'
    ].join('');
    document.body.appendChild(overlay);

    return { button, overlay };
  }

  function initialise(){
    addStylesheet();
    const ui = buildInterface();
    if(!ui) return;

    const button = ui.button;
    const overlay = ui.overlay;
    const closeButton = document.getElementById('blCharityAccessClose');
    const form = document.getElementById('blCharityAccessForm');
    const pinInput = document.getElementById('blCharityPin');
    const submitButton = document.getElementById('blCharitySubmit');
    const status = document.getElementById('blCharityAccessStatus');
    let lastFocus = null;

    function cleanLockedQuery(){
      try{
        const url = new URL(location.href);
        if(!url.searchParams.has('charity')) return;
        url.searchParams.delete('charity');
        history.replaceState(history.state, '', url.pathname + (url.search || '') + (url.hash || ''));
      }catch(_error){}
    }

    function openDialog(message){
      lastFocus = document.activeElement;
      overlay.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      document.body.classList.add('bl-charity-dialog-open');
      status.textContent = message || '';
      pinInput.value = '';
      requestAnimationFrame(function(){
        try{ pinInput.focus({ preventScroll:true }); }catch(_error){ try{ pinInput.focus(); }catch(__error){} }
      });
    }

    function closeDialog(){
      overlay.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('bl-charity-dialog-open');
      status.textContent = '';
      pinInput.value = '';
      try{ (lastFocus || button).focus({ preventScroll:true }); }catch(_error){ try{ button.focus(); }catch(__error){} }
    }

    async function submitPin(event){
      event.preventDefault();
      const pin = String(pinInput.value || '').replace(/\D/g, '');
      pinInput.value = pin;
      if(!pin){
        status.textContent = 'Enter the digit code.';
        pinInput.focus();
        return;
      }

      submitButton.disabled = true;
      pinInput.disabled = true;
      status.textContent = 'Checking code...';

      try{
        const response = await fetch('/sitewide/api/charity_shop_access.php', {
          method:'POST',
          credentials:'same-origin',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify({ action:'unlock', pin:pin })
        });
        const data = await response.json().catch(function(){ return {}; });
        if(!response.ok || !data.ok || !data.unlocked){
          status.textContent = data.error === 'incorrect_pin'
            ? 'That code is not correct.'
            : data.error === 'rate_limited'
              ? 'Too many attempts. Please wait before trying again.'
              : 'The guidance could not be unlocked. Please try again.';
          pinInput.value = '';
          return;
        }
        status.textContent = 'Opening guidance...';
        location.assign(data.redirect || '/charity-shop/guidance/');
      }catch(_error){
        status.textContent = 'The code could not be checked. Confirm the internet connection and try again.';
      }finally{
        submitButton.disabled = false;
        pinInput.disabled = false;
        if(status.textContent !== 'Opening guidance...'){
          try{ pinInput.focus(); }catch(_error){}
        }
      }
    }

    button.addEventListener('click', function(){ openDialog(''); });
    closeButton.addEventListener('click', closeDialog);
    form.addEventListener('submit', submitPin);
    pinInput.addEventListener('input', function(){
      const digits = pinInput.value.replace(/\D/g, '');
      if(pinInput.value !== digits) pinInput.value = digits;
      if(status.textContent && status.textContent !== 'Checking code...') status.textContent = '';
    });

    overlay.addEventListener('pointerdown', function(event){
      if(event.target === overlay) closeDialog();
    });

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape' && !overlay.hidden){
        event.preventDefault();
        closeDialog();
      }
      if(event.key === 'Tab' && !overlay.hidden){
        const focusable = Array.from(overlay.querySelectorAll('button:not([disabled]),input:not([disabled])'));
        if(!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if(event.shiftKey && document.activeElement === first){
          event.preventDefault();
          last.focus();
        }else if(!event.shiftKey && document.activeElement === last){
          event.preventDefault();
          first.focus();
        }
      }
    });

    try{
      const params = new URLSearchParams(location.search || '');
      if(params.get('charity') === 'locked'){
        openDialog('Enter the shop code to continue.');
        cleanLockedQuery();
      }
    }catch(_error){}
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initialise, { once:true });
  }else{
    initialise();
  }
})();
