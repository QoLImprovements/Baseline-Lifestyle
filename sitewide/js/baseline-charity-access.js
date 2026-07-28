(function(){
  'use strict';

  const BUILD = 'BASELINE_PROTECTED_ACCESS_20260728_2';
  if(window.__BASELINE_PROTECTED_ACCESS__) return;
  window.__BASELINE_PROTECTED_ACCESS__ = BUILD;

  function addStylesheet(){
    if(document.querySelector('link[data-protected-access-style]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/sitewide/css/baseline-charity-access.css?v=' + BUILD;
    link.dataset.protectedAccessStyle = 'true';
    document.head.appendChild(link);
  }

  function buildInterface(){
    const header = document.querySelector('.bl-top-header');
    if(!header || document.getElementById('blProtectedKey')) return null;

    const button = document.createElement('button');
    button.id = 'blProtectedKey';
    button.className = 'bl-protected-key';
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'blProtectedAccessOverlay');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open protected sections');
    button.title = 'Protected sections';
    button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.2"></circle><path d="M12.2 12H22M18 12v3M15 12v2"></path></svg>';
    header.insertBefore(button, header.firstChild);

    const overlay = document.createElement('div');
    overlay.id = 'blProtectedAccessOverlay';
    overlay.className = 'bl-protected-access-overlay';
    overlay.hidden = true;
    overlay.innerHTML = [
      '<section class="bl-protected-access-dialog" role="dialog" aria-modal="true" aria-labelledby="blProtectedAccessTitle" aria-describedby="blProtectedAccessCopy">',
      '  <div class="bl-protected-access-head">',
      '    <div>',
      '      <p class="bl-protected-access-kicker">Protected sections</p>',
      '      <h2 id="blProtectedAccessTitle">Enter Digital Code</h2>',
      '    </div>',
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

    return { button, overlay };
  }

  function initialise(){
    addStylesheet();
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
        history.replaceState(history.state, '', url.pathname + (url.search || '') + (url.hash || ''));
      }catch(_error){}
    }

    function openDialog(message){
      lastFocus = document.activeElement;
      overlay.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      document.body.classList.add('bl-protected-dialog-open');
      status.textContent = message || '';
      codeInput.value = '';
      requestAnimationFrame(function(){
        try{ codeInput.focus({ preventScroll:true }); }catch(_error){ try{ codeInput.focus(); }catch(__error){} }
      });
    }

    function closeDialog(){
      overlay.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('bl-protected-dialog-open');
      status.textContent = '';
      codeInput.value = '';
      try{ (lastFocus || button).focus({ preventScroll:true }); }catch(_error){ try{ button.focus(); }catch(__error){} }
    }

    async function submitCode(event){
      event.preventDefault();
      const code = String(codeInput.value || '').replace(/\D/g, '');
      codeInput.value = code;
      if(!code){
        status.textContent = 'Enter a digital code.';
        codeInput.focus();
        return;
      }

      submitButton.disabled = true;
      codeInput.disabled = true;
      status.textContent = 'Checking code...';

      try{
        const response = await fetch('/sitewide/api/protected_access.php', {
          method:'POST',
          credentials:'same-origin',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify({ action:'unlock', code:code })
        });
        const data = await response.json().catch(function(){ return {}; });
        if(!response.ok || !data.ok || !data.redirect){
          status.textContent = data.error === 'incorrect_code'
            ? 'That digital code is not recognised.'
            : data.error === 'rate_limited'
              ? 'Too many attempts. Please wait before trying again.'
              : 'The protected section could not be opened. Please try again.';
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
        if(status.textContent !== 'Opening protected section...'){
          try{ codeInput.focus(); }catch(_error){}
        }
      }
    }

    button.addEventListener('click', function(){ openDialog(''); });
    closeButton.addEventListener('click', closeDialog);
    form.addEventListener('submit', submitCode);
    codeInput.addEventListener('input', function(){
      const digits = codeInput.value.replace(/\D/g, '');
      if(codeInput.value !== digits) codeInput.value = digits;
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
      if(params.get('protected') === 'locked' || params.get('charity') === 'locked'){
        openDialog('Enter the digital code to continue.');
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
