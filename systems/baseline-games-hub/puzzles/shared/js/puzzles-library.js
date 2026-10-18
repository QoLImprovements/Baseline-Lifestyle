(function(){
  'use strict';

  const registry=window.BaselinePuzzlesRegistry;
  if(!registry) return;

  const refs={
    overview:document.getElementById('puzzlesOverviewCard'),
    types:document.getElementById('puzzlesList'),
    jigsaws:document.getElementById('jigsawsPanel'),
    jigsawsList:document.getElementById('jigsawsList'),
    player:document.getElementById('jigsawPlayerCard')
  };
  if(!refs.overview||!refs.types||!refs.jigsaws||!refs.jigsawsList||!refs.player) return;

  let activeView='overview';
  let activeJigsaw='';

  function escapeHtml(value){
    return String(value??'').replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function renderTypes(){
    refs.types.innerHTML=registry.types.map(function(type){
      return '<div class="puzzle-library-row-wrap">' +
        '<button class="puzzle-library-row" data-puzzle-type="' + escapeHtml(type.id) + '" type="button">' +
          '<img class="puzzle-library-art" src="' + escapeHtml(type.preview) + '" alt="" aria-hidden="true"/>' +
          '<div class="puzzle-library-copy"><h3>' + escapeHtml(type.name) + '</h3><p>' + escapeHtml(type.note) + '</p></div>' +
          '<div class="puzzle-library-meta"><strong>' + escapeHtml(type.meta) + '</strong><span class="inline-note">Browse puzzles</span></div>' +
        '</button>' +
      '</div>';
    }).join('');
  }

  function renderJigsaws(){
    const groups=[];
    registry.jigsaws.forEach(function(item){
      let group=groups.find(function(entry){ return entry.name===item.group; });
      if(!group){ group={name:item.group,items:[]}; groups.push(group); }
      group.items.push(item);
    });
    refs.jigsawsList.innerHTML=groups.map(function(group){
      return '<div class="puzzle-library-group">' + escapeHtml(group.name) + '</div>' +
        group.items.map(function(item){
          return '<div class="puzzle-library-row-wrap' + (activeJigsaw===item.id?' is-selected':'') + '">' +
            '<button class="puzzle-library-row" data-jigsaw-id="' + escapeHtml(item.id) + '" type="button">' +
              '<img class="puzzle-library-art" src="' + escapeHtml(item.image) + '" alt=""/>' +
              '<div class="puzzle-library-copy"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.libraryDescription||item.description) + '</p></div>' +
              '<div class="puzzle-library-meta"><span class="inline-note">Open jigsaw</span></div>' +
            '</button>' +
          '</div>';
        }).join('');
    }).join('');
  }

  function routeStateFromLocation(){
    if(!/^\/baseline-games-hub\/games-hub\/puzzles\/?$/i.test(String(location.pathname || ''))) return { view:'overview',jigsaw:'' };
    try{
      const params=new URLSearchParams(location.search || '');
      const jigsaw=String(params.get('jigsaw') || '').trim();
      if(jigsaw && registry.findJigsaw(jigsaw)) return { view:'player',jigsaw:jigsaw };
      if(String(params.get('puzzle') || '') === 'jigsaws') return { view:'jigsaws',jigsaw:'' };
    }catch(_error){}
    return { view:'overview',jigsaw:'' };
  }

  function routeUrl(view,jigsaw){
    const params=new URLSearchParams();
    if(view==='player' && jigsaw) params.set('jigsaw',jigsaw);
    else if(view==='jigsaws') params.set('puzzle','jigsaws');
    const query=params.toString();
    return '/baseline-games-hub/games-hub/puzzles' + (query ? ('?' + query) : '');
  }

  function writeRoute(view,jigsaw,historyMode){
    if(!historyMode || !/^\/baseline-games-hub\/games-hub\/puzzles\/?$/i.test(String(location.pathname || ''))) return;
    try{
      const nextUrl=routeUrl(view,jigsaw);
      const currentUrl=location.pathname+location.search;
      if(nextUrl===currentUrl) return;
      const state={ baselinePuzzles:true,view:view,jigsaw:jigsaw || '' };
      if(historyMode==='push') history.pushState(state,'',nextUrl);
      else history.replaceState(state,'',nextUrl);
    }catch(_error){}
  }

  function showView(view,options){
    const opts=options || {};
    activeView=['overview','jigsaws','player'].includes(view)?view:'overview';
    refs.overview.hidden=activeView!=='overview';
    refs.jigsaws.hidden=activeView!=='jigsaws';
    refs.player.hidden=activeView!=='player';
    writeRoute(activeView,activeJigsaw,opts.historyMode || '');
  }

  function openJigsaw(id,options){
    const opts=options || {};
    const puzzle=registry.findJigsaw(id);
    if(!puzzle) return;
    activeJigsaw=puzzle.id;
    renderJigsaws();
    document.dispatchEvent(new CustomEvent('baseline:jigsaw-select',{detail:{puzzle:puzzle}}));
    showView('player',{historyMode:opts.historyMode || ''});
    if(opts.scroll !== false){
      try{ refs.player.scrollIntoView({behavior:window.innerWidth<=760?'auto':'smooth',block:'start'}); }catch(_error){}
    }
  }

  function restoreRoute(){
    const route=routeStateFromLocation();
    if(route.view==='player' && route.jigsaw){
      openJigsaw(route.jigsaw,{historyMode:'',scroll:false});
      return;
    }
    activeJigsaw='';
    renderJigsaws();
    showView(route.view,{historyMode:''});
  }

  document.addEventListener('click',function(event){
    const typeButton=event.target.closest('[data-puzzle-type]');
    if(typeButton){
      if(typeButton.getAttribute('data-puzzle-type')==='jigsaws') showView('jigsaws',{historyMode:'push'});
      return;
    }
    const jigsawButton=event.target.closest('[data-jigsaw-id]');
    if(jigsawButton){
      openJigsaw(jigsawButton.getAttribute('data-jigsaw-id'),{historyMode:'push'});
      return;
    }
    const back=event.target.closest('[data-puzzles-back]');
    if(back){
      activeJigsaw='';
      showView(back.getAttribute('data-puzzles-back')==='overview'?'overview':'jigsaws',{historyMode:'push'});
    }
  });

  renderTypes();
  renderJigsaws();
  restoreRoute();
  window.addEventListener('popstate',function(){
    if(/^\/baseline-games-hub\/games-hub\/puzzles\/?$/i.test(String(location.pathname || ''))) restoreRoute();
  });

  window.BaselinePuzzlesLibrary=Object.freeze({
    openJigsaw:openJigsaw,
    showOverview:function(){ activeJigsaw=''; showView('overview'); },
    showJigsaws:function(){ activeJigsaw=''; showView('jigsaws'); },
    getView:function(){ return activeView; },
    getJigsaw:function(){ return activeJigsaw; },
    restoreRoute:restoreRoute
  });
})();