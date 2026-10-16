(function(){
  'use strict';

  const ROOT_ID = 'weightCoherencePuzzle';
  const IMAGE_SRC = '/systems/baseline-games-hub/puzzles/the-weight-of-coherence/art/the-weight-of-coherence.webp?v=WEIGHT_OF_COHERENCE_20261016_1';
  const BOARD_WIDTH = 640;
  const BOARD_HEIGHT = 800;
  const STORAGE_KEY = 'baseline_games_jigsaw_weight_of_coherence_v1';
  const DIFFICULTIES = Object.freeze({
    50: Object.freeze({ pieces:50, cols:5, rows:10, trayPageSize:20 }),
    100: Object.freeze({ pieces:100, cols:10, rows:10, trayPageSize:24 }),
    500: Object.freeze({ pieces:500, cols:20, rows:25, trayPageSize:30 }),
    1000: Object.freeze({ pieces:1000, cols:25, rows:40, trayPageSize:32 })
  });

  const root = document.getElementById(ROOT_ID);
  if(!root) return;

  const refs = {
    difficultyButtons:Array.from(root.querySelectorAll('[data-jigsaw-difficulty]')),
    start:document.getElementById('weightCoherenceStartBtn'),
    workspace:document.getElementById('weightCoherenceWorkspace'),
    board:document.getElementById('weightCoherenceBoard'),
    status:document.getElementById('weightCoherenceStatus'),
    placed:document.getElementById('weightCoherencePlaced'),
    timer:document.getElementById('weightCoherenceTimer'),
    difficultyLabel:document.getElementById('weightCoherenceDifficultyLabel'),
    preview:document.getElementById('weightCoherencePreviewBtn'),
    shuffle:document.getElementById('weightCoherenceShuffleBtn'),
    reset:document.getElementById('weightCoherenceResetBtn'),
    tray:document.getElementById('weightCoherenceTray'),
    trayMeta:document.getElementById('weightCoherenceTrayMeta'),
    prev:document.getElementById('weightCoherencePrevBtn'),
    next:document.getElementById('weightCoherenceNextBtn'),
    completion:document.getElementById('weightCoherenceCompletion')
  };

  const ctx = refs.board.getContext('2d');
  const placedCanvas = document.createElement('canvas');
  placedCanvas.width = BOARD_WIDTH;
  placedCanvas.height = BOARD_HEIGHT;
  const placedCtx = placedCanvas.getContext('2d');
  const image = new Image();
  image.decoding = 'async';
  image.src = IMAGE_SRC;

  let selectedDifficulty = 100;
  let state = null;
  let timerHandle = 0;
  let selectedPieceId = null;
  let dragState = null;
  let suppressTrayClickUntil = 0;
  let imageReady = false;

  image.addEventListener('load', function(){
    imageReady = true;
    rebuildPlacedCanvas();
    drawBoard();
    renderTray();
  });

  function difficultyConfig(value){
    return DIFFICULTIES[Number(value)] || DIFFICULTIES[100];
  }

  function formatTime(totalSeconds){
    const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return h > 0
      ? String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0')
      : String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }

  function seededNoise(a,b,c){
    let x = ((a + 1) * 73856093) ^ ((b + 1) * 19349663) ^ ((c + 1) * 83492791);
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return (x >>> 0) / 4294967295;
  }

  function internalEdge(row,col,axis){
    return seededNoise(row,col,axis === 'v' ? 1 : 2) >= 0.5 ? 1 : -1;
  }

  function pieceEdges(row,col,config){
    return {
      top: row === 0 ? 0 : -internalEdge(row - 1, col, 'h'),
      right: col === config.cols - 1 ? 0 : internalEdge(row, col, 'v'),
      bottom: row === config.rows - 1 ? 0 : internalEdge(row, col, 'h'),
      left: col === 0 ? 0 : -internalEdge(row, col - 1, 'v')
    };
  }

  function pieceGeometry(id, config){
    const row = Math.floor(id / config.cols);
    const col = id % config.cols;
    const w = BOARD_WIDTH / config.cols;
    const h = BOARD_HEIGHT / config.rows;
    const tab = Math.min(w,h) * 0.22;
    return { id:id, row:row, col:col, x:col*w, y:row*h, w:w, h:h, tab:tab, edges:pieceEdges(row,col,config) };
  }

  function tracePiecePath(target, g){
    const w=g.w, h=g.h, t=g.tab, e=g.edges;
    target.beginPath();
    target.moveTo(0,0);

    target.lineTo(w*0.34,0);
    if(e.top){
      target.bezierCurveTo(w*0.39,0,w*0.40,-e.top*t,w*0.50,-e.top*t);
      target.bezierCurveTo(w*0.60,-e.top*t,w*0.61,0,w*0.66,0);
    }
    target.lineTo(w,0);

    target.lineTo(w,h*0.34);
    if(e.right){
      target.bezierCurveTo(w,h*0.39,w+e.right*t,h*0.40,w+e.right*t,h*0.50);
      target.bezierCurveTo(w+e.right*t,h*0.60,w,h*0.61,w,h*0.66);
    }
    target.lineTo(w,h);

    target.lineTo(w*0.66,h);
    if(e.bottom){
      target.bezierCurveTo(w*0.61,h,w*0.60,h+e.bottom*t,w*0.50,h+e.bottom*t);
      target.bezierCurveTo(w*0.40,h+e.bottom*t,w*0.39,h,w*0.34,h);
    }
    target.lineTo(0,h);

    target.lineTo(0,h*0.66);
    if(e.left){
      target.bezierCurveTo(0,h*0.61,-e.left*t,h*0.60,-e.left*t,h*0.50);
      target.bezierCurveTo(-e.left*t,h*0.40,0,h*0.39,0,h*0.34);
    }
    target.lineTo(0,0);
    target.closePath();
  }

  function drawPieceToBoard(targetCtx, id){
    if(!state || !imageReady) return;
    const config = difficultyConfig(state.difficulty);
    const g = pieceGeometry(id, config);
    targetCtx.save();
    targetCtx.translate(g.x,g.y);
    tracePiecePath(targetCtx,g);
    targetCtx.clip();
    targetCtx.drawImage(image,-g.x,-g.y,BOARD_WIDTH,BOARD_HEIGHT);
    targetCtx.restore();

    targetCtx.save();
    targetCtx.translate(g.x,g.y);
    tracePiecePath(targetCtx,g);
    targetCtx.strokeStyle='rgba(8,13,34,.48)';
    targetCtx.lineWidth=Math.max(0.7,Math.min(1.5,g.tab*0.15));
    targetCtx.stroke();
    targetCtx.restore();
  }

  function rebuildPlacedCanvas(){
    placedCtx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    if(!state || !imageReady) return;
    state.placed.forEach(function(id){ drawPieceToBoard(placedCtx,id); });
  }

  function drawBoard(){
    ctx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    ctx.fillStyle='#080D22';
    ctx.fillRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);

    if(imageReady && state && state.preview){
      ctx.save();
      ctx.globalAlpha=0.20;
      ctx.drawImage(image,0,0,BOARD_WIDTH,BOARD_HEIGHT);
      ctx.restore();
    }

    if(state){
      const config=difficultyConfig(state.difficulty);
      ctx.save();
      ctx.strokeStyle='rgba(214,223,255,.10)';
      ctx.lineWidth=0.65;
      const cw=BOARD_WIDTH/config.cols, ch=BOARD_HEIGHT/config.rows;
      for(let c=1;c<config.cols;c++){ ctx.beginPath(); ctx.moveTo(c*cw,0); ctx.lineTo(c*cw,BOARD_HEIGHT); ctx.stroke(); }
      for(let r=1;r<config.rows;r++){ ctx.beginPath(); ctx.moveTo(0,r*ch); ctx.lineTo(BOARD_WIDTH,r*ch); ctx.stroke(); }
      ctx.restore();
    }

    ctx.drawImage(placedCanvas,0,0);
  }

  function createPieceCanvas(id){
    if(!state || !imageReady) return document.createElement('canvas');
    const config=difficultyConfig(state.difficulty);
    const g=pieceGeometry(id,config);
    const margin=g.tab+2;
    const baseMax=Math.max(g.w+margin*2,g.h+margin*2);
    const scale=Math.max(0.65,Math.min(3.2,86/baseMax));
    const canvas=document.createElement('canvas');
    canvas.width=Math.max(24,Math.ceil((g.w+margin*2)*scale));
    canvas.height=Math.max(24,Math.ceil((g.h+margin*2)*scale));
    const c=canvas.getContext('2d');
    c.save();
    c.scale(scale,scale);
    c.translate(margin,margin);
    tracePiecePath(c,g);
    c.clip();
    c.drawImage(image,-g.x,-g.y,BOARD_WIDTH,BOARD_HEIGHT);
    c.restore();

    c.save();
    c.scale(scale,scale);
    c.translate(margin,margin);
    tracePiecePath(c,g);
    c.strokeStyle='rgba(242,245,255,.72)';
    c.lineWidth=Math.max(0.8,1.2/scale);
    c.stroke();
    c.restore();
    canvas.className='weight-coherence-piece-canvas';
    return canvas;
  }

  function shuffledIds(count){
    const ids=Array.from({length:count},(_,i)=>i);
    for(let i=ids.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      const temp=ids[i]; ids[i]=ids[j]; ids[j]=temp;
    }
    return ids;
  }

  function unplacedIds(){
    if(!state) return [];
    return state.order.filter(function(id){ return !state.placed.has(id); });
  }

  function renderTray(){
    if(!refs.tray) return;
    refs.tray.innerHTML='';
    if(!state || !state.started){
      refs.trayMeta.textContent='Choose a piece count and start the puzzle.';
      refs.prev.disabled=true;
      refs.next.disabled=true;
      return;
    }
    if(!imageReady){
      refs.trayMeta.textContent='Loading artwork…';
      return;
    }
    const config=difficultyConfig(state.difficulty);
    const ids=unplacedIds();
    const pageCount=Math.max(1,Math.ceil(ids.length/config.trayPageSize));
    state.page=Math.max(0,Math.min(state.page,pageCount-1));
    const start=state.page*config.trayPageSize;
    const pageIds=ids.slice(start,start+config.trayPageSize);
    refs.trayMeta.textContent=ids.length
      ? 'Tray ' + (state.page+1) + ' of ' + pageCount + ' · ' + ids.length.toLocaleString('en-GB') + ' pieces remaining'
      : 'All pieces placed';
    refs.prev.disabled=state.page<=0;
    refs.next.disabled=state.page>=pageCount-1;

    pageIds.forEach(function(id){
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='weight-coherence-piece';
      btn.dataset.pieceId=String(id);
      btn.setAttribute('aria-label','Jigsaw piece ' + (id+1));
      if(selectedPieceId===id) btn.classList.add('is-selected');
      btn.appendChild(createPieceCanvas(id));
      refs.tray.appendChild(btn);
    });
  }

  function setStatus(message,tone){
    refs.status.textContent=message || '';
    refs.status.dataset.tone=tone || '';
  }

  function elapsedSeconds(){
    if(!state) return 0;
    if(!state.started || state.completed) return state.elapsed || 0;
    return (state.elapsed || 0) + Math.max(0,Math.floor((Date.now()-state.startedAt)/1000));
  }

  function updateStats(){
    if(!state){
      refs.placed.textContent='0 / ' + selectedDifficulty;
      refs.timer.textContent='00:00';
      refs.difficultyLabel.textContent=selectedDifficulty + ' pieces';
      return;
    }
    refs.placed.textContent=state.placed.size.toLocaleString('en-GB') + ' / ' + state.difficulty.toLocaleString('en-GB');
    refs.timer.textContent=formatTime(elapsedSeconds());
    refs.difficultyLabel.textContent=state.difficulty.toLocaleString('en-GB') + ' pieces';
  }

  function startTimer(){
    window.clearInterval(timerHandle);
    timerHandle=window.setInterval(function(){ updateStats(); },1000);
  }

  function serialiseState(){
    if(!state) return null;
    return {
      version:1,
      difficulty:state.difficulty,
      placed:Array.from(state.placed),
      order:state.order.slice(),
      page:state.page,
      preview:state.preview,
      started:state.started,
      completed:state.completed,
      elapsed:elapsedSeconds(),
      savedAt:Date.now()
    };
  }

  function saveState(){
    try{
      const payload=serialiseState();
      if(payload) localStorage.setItem(STORAGE_KEY,JSON.stringify(payload));
    }catch(_error){}
  }

  function restoreState(){
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      if(!raw) return false;
      const parsed=JSON.parse(raw);
      const config=difficultyConfig(parsed.difficulty);
      const count=config.pieces;
      const placed=new Set((Array.isArray(parsed.placed)?parsed.placed:[]).map(Number).filter(function(id){ return Number.isInteger(id)&&id>=0&&id<count; }));
      const order=Array.isArray(parsed.order) && parsed.order.length===count ? parsed.order.map(Number) : shuffledIds(count);
      state={
        difficulty:count,
        placed:placed,
        order:order,
        page:Math.max(0,Number(parsed.page)||0),
        preview:!!parsed.preview,
        started:parsed.started!==false,
        completed:!!parsed.completed || placed.size===count,
        elapsed:Math.max(0,Number(parsed.elapsed)||0),
        startedAt:Date.now()
      };
      selectedDifficulty=count;
      refs.workspace.hidden=false;
      syncDifficultyButtons();
      refs.preview.setAttribute('aria-pressed',String(state.preview));
      refs.preview.textContent=state.preview?'Hide Guide':'Show Guide';
      setStatus(state.completed?'Puzzle complete.':'Saved puzzle resumed.',state.completed?'success':'');
      renderCompletion();
      rebuildPlacedCanvas();
      drawBoard();
      renderTray();
      updateStats();
      startTimer();
      return true;
    }catch(_error){ return false; }
  }

  function syncDifficultyButtons(){
    refs.difficultyButtons.forEach(function(button){
      const active=Number(button.dataset.jigsawDifficulty)===selectedDifficulty;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-checked',String(active));
    });
  }

  function beginPuzzle(){
    const config=difficultyConfig(selectedDifficulty);
    state={
      difficulty:config.pieces,
      placed:new Set(),
      order:shuffledIds(config.pieces),
      page:0,
      preview:false,
      started:true,
      completed:false,
      elapsed:0,
      startedAt:Date.now()
    };
    selectedPieceId=null;
    refs.workspace.hidden=false;
    refs.preview.setAttribute('aria-pressed','false');
    refs.preview.textContent='Show Guide';
    refs.completion.hidden=true;
    placedCtx.clearRect(0,0,BOARD_WIDTH,BOARD_HEIGHT);
    setStatus('Puzzle started. Drag a piece onto the board, or select a piece and then click its position.','');
    drawBoard();
    renderTray();
    updateStats();
    saveState();
    startTimer();
    try{ refs.board.scrollIntoView({behavior:'smooth',block:'center'}); }catch(_error){}
  }

  function renderCompletion(){
    if(!state || !state.completed){ refs.completion.hidden=true; return; }
    refs.completion.hidden=false;
    refs.completion.innerHTML='<strong>The Weight of Coherence — complete</strong><span>' + state.difficulty.toLocaleString('en-GB') + ' pieces · ' + formatTime(state.elapsed) + '</span>';
  }

  function completePuzzle(){
    if(!state || state.completed) return;
    state.elapsed=elapsedSeconds();
    state.startedAt=Date.now();
    state.completed=true;
    selectedPieceId=null;
    window.clearInterval(timerHandle);
    setStatus('Completed. Every piece is in place.','success');
    renderCompletion();
    renderTray();
    updateStats();
    saveState();
  }

  function placePiece(id){
    if(!state || state.completed || state.placed.has(id)) return;
    state.placed.add(id);
    drawPieceToBoard(placedCtx,id);
    selectedPieceId=null;
    drawBoard();
    renderTray();
    updateStats();
    setStatus('Piece placed.','success');
    if(state.placed.size>=state.difficulty) completePuzzle();
    else saveState();
  }

  function boardPointFromClient(clientX,clientY){
    const rect=refs.board.getBoundingClientRect();
    if(clientX<rect.left||clientX>rect.right||clientY<rect.top||clientY>rect.bottom) return null;
    return {
      x:(clientX-rect.left)*(BOARD_WIDTH/rect.width),
      y:(clientY-rect.top)*(BOARD_HEIGHT/rect.height)
    };
  }

  function attemptPlacement(id,clientX,clientY){
    if(!state || !Number.isInteger(id)) return false;
    const point=boardPointFromClient(clientX,clientY);
    if(!point){ setStatus('Move the piece onto the puzzle board.','warning'); return false; }
    const config=difficultyConfig(state.difficulty);
    const g=pieceGeometry(id,config);
    const centerX=g.x+g.w/2, centerY=g.y+g.h/2;
    const dx=Math.abs(point.x-centerX), dy=Math.abs(point.y-centerY);
    const snapX=Math.max(g.w*0.62,18), snapY=Math.max(g.h*0.62,18);
    if(dx<=snapX && dy<=snapY){ placePiece(id); return true; }
    setStatus('That piece belongs elsewhere.','warning');
    root.classList.remove('is-wrong-drop');
    void root.offsetWidth;
    root.classList.add('is-wrong-drop');
    return false;
  }

  function makeDragGhost(pieceButton,event){
    const source=pieceButton.querySelector('canvas');
    const ghost=document.createElement('canvas');
    ghost.width=source.width;
    ghost.height=source.height;
    ghost.getContext('2d').drawImage(source,0,0);
    ghost.className='weight-coherence-drag-ghost';
    const rect=source.getBoundingClientRect();
    ghost.style.width=Math.max(44,rect.width)+'px';
    ghost.style.height=Math.max(44,rect.height)+'px';
    document.body.appendChild(ghost);
    moveDragGhost(ghost,event.clientX,event.clientY);
    return ghost;
  }

  function moveDragGhost(ghost,x,y){
    ghost.style.left=x+'px';
    ghost.style.top=y+'px';
  }

  function endDrag(event){
    if(!dragState) return;
    const drag=dragState;
    dragState=null;
    window.removeEventListener('pointermove',onDragMove,true);
    window.removeEventListener('pointerup',endDrag,true);
    window.removeEventListener('pointercancel',cancelDrag,true);
    if(drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);
    if(drag.moved) suppressTrayClickUntil=Date.now()+250;
    if(event && drag.moved) attemptPlacement(drag.id,event.clientX,event.clientY);
  }

  function cancelDrag(){
    if(!dragState) return;
    const drag=dragState;
    dragState=null;
    window.removeEventListener('pointermove',onDragMove,true);
    window.removeEventListener('pointerup',endDrag,true);
    window.removeEventListener('pointercancel',cancelDrag,true);
    if(drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);
  }

  function onDragMove(event){
    if(!dragState) return;
    const dx=event.clientX-dragState.startX, dy=event.clientY-dragState.startY;
    if(!dragState.moved && Math.hypot(dx,dy)>5){
      dragState.moved=true;
      dragState.ghost=makeDragGhost(dragState.button,event);
    }
    if(dragState.ghost) moveDragGhost(dragState.ghost,event.clientX,event.clientY);
    if(dragState.moved) event.preventDefault();
  }

  refs.difficultyButtons.forEach(function(button){
    button.addEventListener('click',function(){
      selectedDifficulty=Number(button.dataset.jigsawDifficulty)||100;
      syncDifficultyButtons();
      updateStats();
    });
  });

  refs.start.addEventListener('click',beginPuzzle);

  refs.preview.addEventListener('click',function(){
    if(!state) return;
    state.preview=!state.preview;
    refs.preview.setAttribute('aria-pressed',String(state.preview));
    refs.preview.textContent=state.preview?'Hide Guide':'Show Guide';
    drawBoard();
    saveState();
  });

  refs.shuffle.addEventListener('click',function(){
    if(!state || state.completed) return;
    const remaining=unplacedIds();
    const shuffled=shuffledIds(remaining.length).map(function(index){ return remaining[index]; });
    const placedTail=state.order.filter(function(id){ return state.placed.has(id); });
    state.order=shuffled.concat(placedTail);
    state.page=0;
    selectedPieceId=null;
    renderTray();
    saveState();
    setStatus('Remaining pieces shuffled.','');
  });

  refs.reset.addEventListener('click',function(){
    if(!state){ beginPuzzle(); return; }
    const restart=window.confirm('Restart The Weight of Coherence at ' + selectedDifficulty + ' pieces? Current progress will be cleared.');
    if(restart) beginPuzzle();
  });

  refs.prev.addEventListener('click',function(){ if(state){ state.page=Math.max(0,state.page-1); renderTray(); saveState(); } });
  refs.next.addEventListener('click',function(){ if(state){ state.page+=1; renderTray(); saveState(); } });

  refs.tray.addEventListener('pointerdown',function(event){
    const button=event.target.closest('[data-piece-id]');
    if(!button || !state || state.completed) return;
    const id=Number(button.dataset.pieceId);
    if(!Number.isInteger(id)) return;
    dragState={ id:id, button:button, startX:event.clientX, startY:event.clientY, moved:false, ghost:null };
    window.addEventListener('pointermove',onDragMove,true);
    window.addEventListener('pointerup',endDrag,true);
    window.addEventListener('pointercancel',cancelDrag,true);
  });

  refs.tray.addEventListener('click',function(event){
    const button=event.target.closest('[data-piece-id]');
    if(!button || !state || state.completed) return;
    if(Date.now()<suppressTrayClickUntil) return;
    const id=Number(button.dataset.pieceId);
    selectedPieceId=selectedPieceId===id?null:id;
    setStatus(selectedPieceId===null?'Piece selection cleared.':'Piece ' + (id+1) + ' selected. Click its position on the board.','');
    renderTray();
  });

  refs.board.addEventListener('click',function(event){
    if(selectedPieceId===null || !state || state.completed) return;
    attemptPlacement(selectedPieceId,event.clientX,event.clientY);
  });

  window.addEventListener('beforeunload',saveState);
  document.addEventListener('visibilitychange',function(){ if(document.hidden) saveState(); });

  refs.board.width=BOARD_WIDTH;
  refs.board.height=BOARD_HEIGHT;
  syncDifficultyButtons();
  updateStats();
  drawBoard();
  if(!restoreState()) renderTray();

  try{ document.documentElement.setAttribute('data-weight-of-coherence-jigsaw','1'); }catch(_error){}
})();
