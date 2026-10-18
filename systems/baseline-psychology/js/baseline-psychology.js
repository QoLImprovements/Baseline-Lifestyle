(function(){
  'use strict';

  const PSYCH_SUBVIEWS=['facial-expressions'];

  function psychSubviewFromLocation(){
    try{
      const requested=String(new URLSearchParams(location.search||'').get('psych-view')||'');
      return PSYCH_SUBVIEWS.includes(requested)?requested:'facial-expressions';
    }catch(_e){ return 'facial-expressions'; }
  }

  function writePsychSubview(id,mode='push'){
    try{
      const next=PSYCH_SUBVIEWS.includes(id)?id:'facial-expressions';
      const url=new URL(location.href);
      url.searchParams.delete('psych-view');
      if(next!=='facial-expressions') url.searchParams.set('psych-view',next);
      const nextUrl=url.pathname+(url.searchParams.toString()?'?'+url.searchParams.toString():'')+url.hash;
      const state=Object.assign({},history.state||{},{baselinePsychology:true,psychView:next});
      if(mode==='replace') history.replaceState(state,'',nextUrl); else history.pushState(state,'',nextUrl);
    }catch(_e){}
  }

  function selectSubtab(id,historyMode){
    document.querySelectorAll('.psych-subtab[data-psych-subtab]').forEach(function(button){
      const selected=button.getAttribute('data-psych-subtab')===id;
      button.setAttribute('aria-selected',selected?'true':'false');
      button.tabIndex=selected?0:-1;
    });
    document.querySelectorAll('.psych-subpanel[data-psych-panel]').forEach(function(panel){
      panel.classList.toggle('is-active',panel.getAttribute('data-psych-panel')===id);
    });
    if(historyMode) writePsychSubview(id,historyMode);
  }

  function setupParalinguisticsSubtabs(){
    const buttons=Array.from(document.querySelectorAll('.psych-subtab[data-psych-subtab]'));
    if(!buttons.length) return;
    buttons.forEach(function(button){
      button.addEventListener('click',function(){
        selectSubtab(button.getAttribute('data-psych-subtab')||'facial-expressions','push');
      });
    });
    selectSubtab(psychSubviewFromLocation());
    writePsychSubview(psychSubviewFromLocation(),'replace');
    window.addEventListener('popstate',function(){ selectSubtab(psychSubviewFromLocation()); });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',setupParalinguisticsSubtabs,{once:true});
  }else{
    setupParalinguisticsSubtabs();
  }
})();
