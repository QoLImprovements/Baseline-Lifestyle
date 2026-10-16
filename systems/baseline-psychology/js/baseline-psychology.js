(function(){
  'use strict';

  function selectSubtab(id){
    document.querySelectorAll('.psych-subtab[data-psych-subtab]').forEach(function(button){
      const selected=button.getAttribute('data-psych-subtab')===id;
      button.setAttribute('aria-selected',selected?'true':'false');
      button.tabIndex=selected?0:-1;
    });
    document.querySelectorAll('.psych-subpanel[data-psych-panel]').forEach(function(panel){
      panel.classList.toggle('is-active',panel.getAttribute('data-psych-panel')===id);
    });
  }

  function setupParalinguisticsSubtabs(){
    const buttons=Array.from(document.querySelectorAll('.psych-subtab[data-psych-subtab]'));
    if(!buttons.length) return;
    buttons.forEach(function(button){
      button.addEventListener('click',function(){
        selectSubtab(button.getAttribute('data-psych-subtab')||'facial-expressions');
      });
    });
    selectSubtab('facial-expressions');
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',setupParalinguisticsSubtabs,{once:true});
  }else{
    setupParalinguisticsSubtabs();
  }
})();
