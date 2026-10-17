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
              '<div class="puzzle-library-copy"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.description) + '</p></div>' +
              '<div class="puzzle-library-meta"><strong>50 · 100 · 500 · 1,000 pieces</strong><span class="inline-note">Open jigsaw</span></div>' +
            '</button>' +
          '</div>';
        }).join('');
    }).join('');
  }

  function showView(view){
    activeView=view;
    refs.overview.hidden=view!=='overview';
    refs.jigsaws.hidden=view!=='jigsaws';
    refs.player.hidden=view!=='player';
  }

  function openJigsaw(id){
    const puzzle=registry.findJigsaw(id);
    if(!puzzle) return;
    activeJigsaw=puzzle.id;
    renderJigsaws();
    document.dispatchEvent(new CustomEvent('baseline:jigsaw-select',{detail:{puzzle:puzzle}}));
    showView('player');
    try{ refs.player.scrollIntoView({behavior:'smooth',block:'start'}); }catch(_error){}
  }

  document.addEventListener('click',function(event){
    const typeButton=event.target.closest('[data-puzzle-type]');
    if(typeButton){
      if(typeButton.getAttribute('data-puzzle-type')==='jigsaws') showView('jigsaws');
      return;
    }
    const jigsawButton=event.target.closest('[data-jigsaw-id]');
    if(jigsawButton){
      openJigsaw(jigsawButton.getAttribute('data-jigsaw-id'));
      return;
    }
    const back=event.target.closest('[data-puzzles-back]');
    if(back){
      showView(back.getAttribute('data-puzzles-back')==='overview'?'overview':'jigsaws');
    }
  });

  renderTypes();
  renderJigsaws();
  showView('overview');

  window.BaselinePuzzlesLibrary=Object.freeze({
    openJigsaw:openJigsaw,
    showOverview:function(){ showView('overview'); },
    showJigsaws:function(){ showView('jigsaws'); },
    getView:function(){ return activeView; }
  });
})();