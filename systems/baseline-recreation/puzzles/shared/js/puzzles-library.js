(function(){
  'use strict';

  const registry=window.BaselinePuzzlesRegistry;
  if(!registry) return;

  const refs={
    overview:document.getElementById('puzzlesOverviewCard'),
    types:document.getElementById('puzzlesList'),
    jigsaws:document.getElementById('jigsawsPanel'),
    jigsawsList:document.getElementById('jigsawsList'),
    crossnumber:document.getElementById('crossnumberPanel'),
    player:document.getElementById('jigsawPlayerCard')
  };
  if(!refs.overview||!refs.types||!refs.jigsaws||!refs.jigsawsList||!refs.crossnumber||!refs.player) return;

  let activeView='overview';
  let activeJigsaw='';

  function ownsPuzzleRoute(){
    try{
      const path=String(window.location.pathname||'').replace(/\/+$/,'');
      return path==='/baseline-recreation/puzzles' || path.indexOf('/baseline-recreation/puzzles/')===0;
    }catch(_error){ return false; }
  }

  function routeState(){
    try{
      const path=String(window.location.pathname||'').replace(/\/+$/,'');
      const marker='/baseline-recreation/puzzles';
      if(path===marker) return {view:'overview',jigsaw:''};
      if(path.indexOf(marker+'/')===0){
        const rest=path.slice((marker+'/').length).split('/').filter(Boolean);
        if(rest[0]==='crossnumber') return {view:'crossnumber',jigsaw:''};
        if(rest[0]==='jigsaws'){
          const id=decodeURIComponent(rest[1]||'');
          if(id&&registry.findJigsaw(id)) return {view:'player',jigsaw:id};
          return {view:'jigsaws',jigsaw:''};
        }
      }
      const params=new URLSearchParams(window.location.search||'');
      const view=String(params.get('puzzle')||'').toLowerCase();
      const jigsaw=String(params.get('jigsaw')||'');
      if(jigsaw&&registry.findJigsaw(jigsaw)) return {view:'player',jigsaw:jigsaw};
      if(view==='jigsaws') return {view:'jigsaws',jigsaw:''};
      if(view==='crossnumber') return {view:'crossnumber',jigsaw:''};
    }catch(_error){}
    return {view:'overview',jigsaw:''};
  }

  function writeRoute(view,jigsaw,mode){
    try{
      const url=new URL(window.location.href);
      url.searchParams.delete('puzzle');
      url.searchParams.delete('jigsaw');
      if(view!=='player') url.searchParams.delete('jigsaw-panel');
      let pathname='/baseline-recreation/puzzles';
      if(view==='jigsaws') pathname+='/jigsaws';
      if(view==='crossnumber') pathname+='/crossnumber';
      if(view==='player'&&jigsaw){
        if(mode==='push') url.searchParams.delete('jigsaw-panel');
        pathname+='/jigsaws/'+encodeURIComponent(jigsaw);
      }
      const next=pathname+(url.searchParams.toString()?'?'+url.searchParams.toString():'')+url.hash;
      const state={baselinePuzzles:true,view:view,jigsaw:jigsaw||''};
      if(mode==='replace') window.history.replaceState(state,'',next);
      else window.history.pushState(state,'',next);
    }catch(_error){}
  }
  function escapeHtml(value){
    return String(value??'').replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function jigsawProgress(item){
    try{
      const stored=window.BaselineGameStorage?.getProfile?.(item.app);
      const source=stored&&stored.progression&&typeof stored.progression==='object'?stored.progression:(stored||{});
      const level=Math.max(1,Math.round(Number(source.level)||1));
      const xp=Math.max(0,Math.round(Number(source.xp)||0));
      const completions=Math.max(0,Math.round(Number(source.completions)||0));
      const needed=60+((level-1)*35)+((level-1)*(level-1)*4);
      return {level:level,xp:xp,needed:needed,completions:completions};
    }catch(_error){
      return {level:1,xp:0,needed:60,completions:0};
    }
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
          const progress=jigsawProgress(item);
          return '<div class="puzzle-library-row-wrap' + (activeJigsaw===item.id?' is-selected':'') + '">' +
            '<button class="puzzle-library-row" data-jigsaw-id="' + escapeHtml(item.id) + '" type="button">' +
              '<img class="puzzle-library-art" src="' + escapeHtml(item.image) + '" alt=""/>' +
              '<div class="puzzle-library-copy"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.libraryDescription||item.description) + '</p></div>' +
              '<div class="puzzle-library-meta puzzle-library-meta--progress"><strong>Level ' + progress.level + '</strong><span class="inline-note">' + progress.xp + ' / ' + progress.needed + ' XP</span><span class="inline-note">' + progress.completions + ' completed</span></div>' +
            '</button>' +
          '</div>';
        }).join('');
    }).join('');
  }

  function syncMusicForView(view){
    const music=window.BaselineGamesMusic;
    if(!music||typeof music.selectGame!=='function') return;
    if(view==='player') music.selectGame('jigsaw');
    else if(view==='crossnumber') music.selectGame('crossnumber');
    else music.selectGame('');
  }

  function showView(view,historyMode){
    activeView=view;
    syncMusicForView(view);
    refs.overview.hidden=view!=='overview';
    refs.jigsaws.hidden=view!=='jigsaws';
    refs.crossnumber.hidden=view!=='crossnumber';
    refs.player.hidden=view!=='player';
    if(view==='crossnumber') document.dispatchEvent(new CustomEvent('baseline:crossnumber-open'));
    if(historyMode) writeRoute(view,activeJigsaw,historyMode);
  }

  function openJigsaw(id){
    const puzzle=registry.findJigsaw(id);
    if(!puzzle) return;
    activeJigsaw=puzzle.id;
    renderJigsaws();
    document.dispatchEvent(new CustomEvent('baseline:jigsaw-select',{detail:{puzzle:puzzle,openPanel:'game'}}));
    showView('player','push');
    try{ refs.player.scrollIntoView({behavior:window.innerWidth<=760?'auto':'smooth',block:'start'}); }catch(_error){}
  }

  document.addEventListener('click',function(event){
    const typeButton=event.target.closest('[data-puzzle-type]');
    if(typeButton){
      const type=typeButton.getAttribute('data-puzzle-type');
      if(type==='jigsaws') showView('jigsaws','push');
      if(type==='crossnumber') showView('crossnumber','push');
      return;
    }
    const jigsawButton=event.target.closest('[data-jigsaw-id]');
    if(jigsawButton){
      openJigsaw(jigsawButton.getAttribute('data-jigsaw-id'));
      return;
    }
    const back=event.target.closest('[data-puzzles-back]');
    if(back){
      showView(back.getAttribute('data-puzzles-back')==='overview'?'overview':'jigsaws','push');
    }
  });

  document.addEventListener('baseline:jigsaw-progress',function(){ renderJigsaws(); });
  document.addEventListener('baseline:game-storage',function(){ renderJigsaws(); });

  renderTypes();
  renderJigsaws();
  const initial=routeState();
  activeJigsaw=initial.jigsaw||'';
  if(initial.view==='player'&&activeJigsaw){
    const puzzle=registry.findJigsaw(activeJigsaw);
    if(puzzle) document.dispatchEvent(new CustomEvent('baseline:jigsaw-select',{detail:{puzzle:puzzle}}));
  }
  showView(initial.view);
  // This module owns only /baseline-recreation/puzzles URLs. It must never
  // rewrite Games, Concepts or System during shared-shell startup/refresh.
  if(ownsPuzzleRoute()) writeRoute(initial.view,activeJigsaw,'replace');

  window.addEventListener('popstate',function(){
    const next=routeState();
    activeJigsaw=next.jigsaw||'';
    if(next.view==='player'&&activeJigsaw){
      const puzzle=registry.findJigsaw(activeJigsaw);
      if(puzzle) document.dispatchEvent(new CustomEvent('baseline:jigsaw-select',{detail:{puzzle:puzzle}}));
    }
    renderJigsaws();
    showView(next.view);
  });

  window.BaselinePuzzlesLibrary=Object.freeze({
    openJigsaw:openJigsaw,
    showOverview:function(){ showView('overview','push'); },
    showJigsaws:function(){ showView('jigsaws','push'); },
    showCrossnumber:function(){ showView('crossnumber','push'); },
    getView:function(){ return activeView; },
    getJigsaw:function(){ return activeJigsaw; }
  });
})();