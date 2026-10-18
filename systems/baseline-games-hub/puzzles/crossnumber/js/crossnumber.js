(function(){
  'use strict';

  const root=document.getElementById('crossnumberGame');
  if(!root) return;
  const panel=root.closest('#crossnumberPanel');

  const NODES=Object.freeze([
    {id:'a',r:0,c:0},{id:'b',r:0,c:4},{id:'c',r:4,c:0},{id:'e',r:4,c:4},
    {id:'f',r:4,c:8},{id:'j',r:8,c:4},{id:'i',r:8,c:8},{id:'k',r:8,c:12},
    {id:'l',r:12,c:8},{id:'m',r:12,c:12}
  ]);

  const PUZZLES=Object.freeze([
    Object.freeze({
      id:'linked-01',
      values:Object.freeze({a:6,b:24,c:9,e:18,f:25,j:12,i:20,k:30,l:24,m:12}),
      edges:Object.freeze([
        ['a','b','×',4],['a','c','+',3],['c','e','×',2],['b','e','−',6],
        ['e','f','+',7],['e','j','−',6],['j','i','+',8],['f','i','−',5],
        ['i','k','+',10],['i','l','+',4],['l','m','÷',2],['k','m','−',18]
      ])
    }),
    Object.freeze({
      id:'linked-02',
      values:Object.freeze({a:7,b:35,c:11,e:33,f:42,j:25,i:32,k:45,l:37,m:31}),
      edges:Object.freeze([
        ['a','b','×',5],['a','c','+',4],['c','e','×',3],['b','e','−',2],
        ['e','f','+',9],['e','j','−',8],['j','i','+',7],['f','i','−',10],
        ['i','k','+',13],['i','l','+',5],['l','m','−',6],['k','m','−',14]
      ])
    }),
    Object.freeze({
      id:'linked-03',
      values:Object.freeze({a:8,b:48,c:13,e:39,f:50,j:27,i:34,k:48,l:42,m:24}),
      edges:Object.freeze([
        ['a','b','×',6],['a','c','+',5],['c','e','×',3],['b','e','−',9],
        ['e','f','+',11],['e','j','−',12],['j','i','+',7],['f','i','−',16],
        ['i','k','+',14],['i','l','+',8],['l','m','−',18],['k','m','÷',2]
      ])
    })
  ]);

  const DIFFICULTIES=Object.freeze({
    easy:Object.freeze({label:'Easy',locked:['a','e','i','m'],bonus:0}),
    medium:Object.freeze({label:'Medium',locked:['e','i'],bonus:1200}),
    hard:Object.freeze({label:'Hard',locked:[],bonus:2400})
  });

  const refs={
    board:root.querySelector('[data-crossnumber-board]'),
    bank:root.querySelector('[data-crossnumber-bank]'),
    bankCount:root.querySelector('[data-crossnumber-bank-count]'),
    mistakes:root.querySelector('[data-crossnumber-mistakes]'),
    timer:root.querySelector('[data-crossnumber-timer]'),
    score:root.querySelector('[data-crossnumber-score]'),
    difficulty:root.querySelector('[data-crossnumber-difficulty-label]'),
    status:root.querySelector('[data-crossnumber-status]'),
    complete:root.querySelector('[data-crossnumber-complete]'),
    completeTime:root.querySelector('[data-crossnumber-complete-time]'),
    completeScore:root.querySelector('[data-crossnumber-complete-score]')
  };
  if(!refs.board||!refs.bank) return;

  const STORAGE_KEY='baseline.crossnumber.arithmetic-placement.v1';
  let puzzleIndex=0;
  let difficulty='medium';
  let assignments=Object.create(null);
  let selectedTile='';
  let seconds=0;
  let mistakes=0;
  let hints=0;
  let completed=false;
  let timerId=0;
  let undoStack=[];
  let tileOrder=[];
  let dragTile='';

  function currentPuzzle(){ return PUZZLES[puzzleIndex]||PUZZLES[0]; }
  function nodeById(id){ return NODES.find(function(node){ return node.id===id; })||null; }
  function key(r,c){ return r+':'+c; }

  function fixedNodes(){
    return new Set((DIFFICULTIES[difficulty]||DIFFICULTIES.medium).locked);
  }

  function tileDefinitions(){
    const locked=fixedNodes();
    return NODES.filter(function(node){return !locked.has(node.id);}).map(function(node,index){
      return {id:'tile-'+node.id+'-'+index,value:currentPuzzle().values[node.id]};
    });
  }

  function tileValue(tileId){
    const tile=tileDefinitions().find(function(item){return item.id===tileId;});
    return tile?tile.value:null;
  }

  function assignedValue(nodeId){
    if(fixedNodes().has(nodeId)) return currentPuzzle().values[nodeId];
    const tileId=assignments[nodeId];
    return tileId?tileValue(tileId):null;
  }

  function operatorResult(left,operator,right){
    if(operator==='+') return left+right;
    if(operator==='−') return left-right;
    if(operator==='×') return left*right;
    if(operator==='÷') return right!==0?left/right:NaN;
    return NaN;
  }

  function edgeCorrect(edge){
    const left=assignedValue(edge[0]);
    const right=assignedValue(edge[1]);
    if(left===null||right===null) return null;
    return operatorResult(left,edge[2],edge[3])===right;
  }

  function edgesForNode(nodeId){
    return currentPuzzle().edges.filter(function(edge){return edge[0]===nodeId||edge[1]===nodeId;});
  }

  function buildBoard(){
    const map=new Map();
    const puzzle=currentPuzzle();
    const locked=fixedNodes();

    NODES.forEach(function(node){
      map.set(key(node.r,node.c),{type:'value',node:node});
    });

    puzzle.edges.forEach(function(edge){
      const from=nodeById(edge[0]);
      const to=nodeById(edge[1]);
      if(!from||!to) return;
      const dr=Math.sign(to.r-from.r);
      const dc=Math.sign(to.c-from.c);
      map.set(key(from.r+dr,from.c+dc),{type:'operator',text:edge[2]});
      map.set(key(from.r+dr*2,from.c+dc*2),{type:'constant',text:String(edge[3])});
      map.set(key(from.r+dr*3,from.c+dc*3),{type:'equals',text:'='});
    });

    refs.board.innerHTML='';
    for(let r=0;r<13;r++){
      for(let c=0;c<13;c++){
        const item=map.get(key(r,c));
        if(!item){
          const spacer=document.createElement('div');
          spacer.className='crossnumber-space';
          spacer.setAttribute('aria-hidden','true');
          refs.board.appendChild(spacer);
          continue;
        }
        if(item.type==='value'){
          const button=document.createElement('button');
          const node=item.node;
          const isLocked=locked.has(node.id);
          button.type='button';
          button.className='crossnumber-number-cell'+(isLocked?' is-fixed':'');
          button.dataset.node=node.id;
          if(!isLocked) button.dataset.dropzone='true';
          button.setAttribute('aria-label',(isLocked?'Fixed number ':'Empty number position ')+(r+1)+','+(c+1));
          const value=assignedValue(node.id);
          button.textContent=value===null?'':String(value);
          if(assignments[node.id]) button.dataset.tile=assignments[node.id];
          refs.board.appendChild(button);
          continue;
        }
        const cell=document.createElement('div');
        cell.className='crossnumber-symbol-cell is-'+item.type;
        cell.textContent=item.text;
        refs.board.appendChild(cell);
      }
    }
    refreshEquationStates();
  }

  function availableTiles(){
    const used=new Set(Object.keys(assignments).map(function(nodeId){return assignments[nodeId];}).filter(Boolean));
    const all=tileDefinitions();
    const lookup=new Map(all.map(function(tile){return [tile.id,tile];}));
    const ordered=(tileOrder.length?tileOrder:all.map(function(tile){return tile.id;}))
      .map(function(id){return lookup.get(id);}).filter(Boolean);
    return ordered.filter(function(tile){return !used.has(tile.id);});
  }

  function renderBank(){
    const tiles=availableTiles();
    refs.bank.innerHTML='';
    tiles.forEach(function(tile){
      const button=document.createElement('button');
      button.type='button';
      button.className='crossnumber-number-tile'+(selectedTile===tile.id?' is-selected':'');
      button.dataset.tileId=tile.id;
      button.draggable=true;
      button.textContent=String(tile.value);
      button.setAttribute('aria-label','Number tile '+tile.value);
      refs.bank.appendChild(button);
    });
    if(refs.bankCount) refs.bankCount.textContent=tiles.length+' remaining';
  }

  function snapshot(){
    undoStack.push({
      assignments:Object.assign({},assignments),
      selectedTile:selectedTile,
      mistakes:mistakes,
      hints:hints
    });
    if(undoStack.length>40) undoStack.shift();
  }

  function restoreSnapshot(state){
    if(!state) return;
    assignments=Object.assign(Object.create(null),state.assignments||{});
    selectedTile=state.selectedTile||'';
    mistakes=Number(state.mistakes)||0;
    hints=Number(state.hints)||0;
    completed=false;
    if(refs.complete) refs.complete.setAttribute('aria-hidden','true');
    buildBoard();
    renderBank();
    updateHud();
    save();
  }

  function placeTile(nodeId,tileId,options){
    options=options||{};
    if(!nodeId||!tileId||fixedNodes().has(nodeId)) return;
    if(!tileDefinitions().some(function(tile){return tile.id===tileId;})) return;
    if(!options.noSnapshot) snapshot();

    const sourceNode=Object.keys(assignments).find(function(id){return assignments[id]===tileId;})||'';
    const displaced=assignments[nodeId]||'';
    if(sourceNode&&sourceNode!==nodeId) delete assignments[sourceNode];
    if(displaced&&displaced!==tileId){
      if(sourceNode&&sourceNode!==nodeId) assignments[sourceNode]=displaced;
    }
    assignments[nodeId]=tileId;
    selectedTile='';
    buildBoard();
    renderBank();

    if(!options.silent){
      const completedEdges=edgesForNode(nodeId).map(edgeCorrect).filter(function(value){return value!==null;});
      if(completedEdges.some(function(value){return value===false;})){
        mistakes++;
        flashWrong(nodeId);
        setStatus('That placement breaks an equation. You can move the tile again or undo it.');
      }else if(completedEdges.length){
        setStatus('Equation fits. Keep linking the remaining numbers.');
      }else{
        setStatus('Tile placed.');
      }
    }
    updateHud();
    checkComplete();
    save();
  }

  function removeTile(nodeId){
    if(!assignments[nodeId]) return;
    snapshot();
    delete assignments[nodeId];
    selectedTile='';
    buildBoard();
    renderBank();
    updateHud();
    setStatus('Tile returned to the bank.');
    save();
  }

  function flashWrong(nodeId){
    const cell=refs.board.querySelector('[data-node="'+nodeId+'"]');
    if(!cell) return;
    cell.classList.add('is-wrong');
    window.setTimeout(function(){cell.classList.remove('is-wrong');},650);
  }

  function refreshEquationStates(){
    const puzzle=currentPuzzle();
    NODES.forEach(function(node){
      const cell=refs.board.querySelector('[data-node="'+node.id+'"]');
      if(!cell) return;
      cell.classList.remove('is-correct','has-conflict');
      const states=edgesForNode(node.id).map(edgeCorrect);
      if(states.some(function(value){return value===false;})) cell.classList.add('has-conflict');
      else if(states.length&&states.every(function(value){return value===true;})) cell.classList.add('is-correct');
    });
  }

  function computeScore(){
    const diff=DIFFICULTIES[difficulty]||DIFFICULTIES.medium;
    return Math.max(0,10000+diff.bonus-(seconds*4)-(mistakes*220)-(hints*450));
  }

  function updateHud(){
    if(refs.mistakes) refs.mistakes.textContent=String(mistakes);
    if(refs.timer) refs.timer.textContent=formatTime(seconds);
    if(refs.score) refs.score.textContent=String(computeScore());
    if(refs.difficulty) refs.difficulty.textContent=(DIFFICULTIES[difficulty]||DIFFICULTIES.medium).label;
  }

  function formatTime(value){
    const mins=Math.floor(value/60);
    const secs=value%60;
    return String(mins).padStart(2,'0')+':'+String(secs).padStart(2,'0');
  }

  function startTimer(){
    if(timerId||completed||(panel&&panel.hidden)) return;
    timerId=window.setInterval(function(){
      if(panel&&panel.hidden) return;
      seconds++;
      updateHud();
      if(seconds%5===0) save();
    },1000);
  }

  function setStatus(message){
    if(refs.status) refs.status.textContent=message;
  }

  function allSolved(){
    const locked=fixedNodes();
    const movable=NODES.filter(function(node){return !locked.has(node.id);});
    if(movable.some(function(node){return !assignments[node.id];})) return false;
    return currentPuzzle().edges.every(function(edge){return edgeCorrect(edge)===true;});
  }

  function checkComplete(){
    refreshEquationStates();
    if(!allSolved()) return;
    completed=true;
    if(timerId){clearInterval(timerId);timerId=0;}
    if(refs.complete){
      refs.complete.setAttribute('aria-hidden','false');
      if(refs.completeTime) refs.completeTime.textContent=formatTime(seconds);
      if(refs.completeScore) refs.completeScore.textContent=String(computeScore());
    }
    setStatus('Every equation balances. Crossnumber complete.');
    save();
  }

  function hint(){
    if(completed) return;
    const wrongOrBlank=NODES.filter(function(node){
      if(fixedNodes().has(node.id)) return false;
      const value=assignedValue(node.id);
      return value!==currentPuzzle().values[node.id];
    });
    const target=wrongOrBlank[0];
    if(!target){checkComplete();return;}
    snapshot();

    const needed=currentPuzzle().values[target.id];
    let correctTile=tileDefinitions().find(function(tile){
      if(tile.value!==needed) return false;
      return !Object.values(assignments).includes(tile.id);
    });

    if(!correctTile){
      const sourceNode=Object.keys(assignments).find(function(nodeId){
        const tileId=assignments[nodeId];
        return nodeId!==target.id&&tileValue(tileId)===needed&&assignedValue(nodeId)!==currentPuzzle().values[nodeId];
      });
      if(sourceNode){
        correctTile=tileDefinitions().find(function(tile){return tile.id===assignments[sourceNode];});
        delete assignments[sourceNode];
      }
    }

    if(!correctTile) return;
    const displaced=assignments[target.id];
    if(displaced) delete assignments[target.id];
    assignments[target.id]=correctTile.id;
    hints++;
    selectedTile='';
    buildBoard();
    renderBank();
    updateHud();
    setStatus('Hint placed one correct number.');
    checkComplete();
    save();
  }

  function undo(){
    const state=undoStack.pop();
    if(!state){setStatus('Nothing to undo.');return;}
    restoreSnapshot(state);
    setStatus('Last move undone.');
  }

  function sortBank(){
    const tiles=tileDefinitions().slice().sort(function(a,b){return a.value-b.value||a.id.localeCompare(b.id);});
    tileOrder=tiles.map(function(tile){return tile.id;});
    renderBank();
    save();
  }

  function shuffleBank(){
    const ids=tileDefinitions().map(function(tile){return tile.id;});
    for(let i=ids.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      const tmp=ids[i];ids[i]=ids[j];ids[j]=tmp;
    }
    tileOrder=ids;
  }

  function newPuzzle(options){
    options=options||{};
    if(options.advance) puzzleIndex=(puzzleIndex+1)%PUZZLES.length;
    assignments=Object.create(null);
    selectedTile='';
    seconds=0;
    mistakes=0;
    hints=0;
    completed=false;
    undoStack=[];
    shuffleBank();
    if(refs.complete) refs.complete.setAttribute('aria-hidden','true');
    buildBoard();
    renderBank();
    updateHud();
    setStatus('Place the number tiles so every horizontal and vertical equation is true.');
    startTimer();
    save();
  }

  function setDifficulty(next){
    if(!DIFFICULTIES[next]||next===difficulty) return;
    difficulty=next;
    root.querySelectorAll('[data-crossnumber-difficulty]').forEach(function(button){
      const active=button.dataset.crossnumberDifficulty===difficulty;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-pressed',active?'true':'false');
    });
    newPuzzle({advance:false});
  }

  function save(){
    try{
      localStorage.setItem(STORAGE_KEY,JSON.stringify({
        puzzleIndex:puzzleIndex,
        difficulty:difficulty,
        assignments:assignments,
        seconds:seconds,
        mistakes:mistakes,
        hints:hints,
        completed:completed,
        tileOrder:tileOrder
      }));
    }catch(_error){}
  }

  function restore(){
    try{
      const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
      if(!data) return false;
      puzzleIndex=Math.max(0,Math.min(PUZZLES.length-1,Number(data.puzzleIndex)||0));
      difficulty=DIFFICULTIES[data.difficulty]?data.difficulty:'medium';
      assignments=Object.assign(Object.create(null),data.assignments||{});
      seconds=Math.max(0,Number(data.seconds)||0);
      mistakes=Math.max(0,Number(data.mistakes)||0);
      hints=Math.max(0,Number(data.hints)||0);
      completed=Boolean(data.completed);
      tileOrder=Array.isArray(data.tileOrder)?data.tileOrder.slice():[];
      return true;
    }catch(_error){return false;}
  }

  refs.bank.addEventListener('click',function(event){
    const tile=event.target.closest('[data-tile-id]');
    if(!tile) return;
    selectedTile=selectedTile===tile.dataset.tileId?'':tile.dataset.tileId;
    renderBank();
    if(selectedTile) setStatus('Number '+tileValue(selectedTile)+' selected. Choose an empty equation cell.');
  });

  refs.bank.addEventListener('dragstart',function(event){
    const tile=event.target.closest('[data-tile-id]');
    if(!tile) return;
    dragTile=tile.dataset.tileId;
    event.dataTransfer.effectAllowed='move';
    try{event.dataTransfer.setData('text/plain',dragTile);}catch(_error){}
  });

  refs.board.addEventListener('dragover',function(event){
    if(event.target.closest('[data-dropzone="true"]')) event.preventDefault();
  });

  refs.board.addEventListener('drop',function(event){
    const cell=event.target.closest('[data-dropzone="true"]');
    if(!cell) return;
    event.preventDefault();
    const tileId=dragTile||event.dataTransfer.getData('text/plain');
    dragTile='';
    if(tileId) placeTile(cell.dataset.node,tileId);
  });

  refs.board.addEventListener('click',function(event){
    const cell=event.target.closest('[data-node]');
    if(!cell||cell.classList.contains('is-fixed')) return;
    const nodeId=cell.dataset.node;
    startTimer();
    if(selectedTile){placeTile(nodeId,selectedTile);return;}
    if(assignments[nodeId]){
      snapshot();
      selectedTile=assignments[nodeId];
      delete assignments[nodeId];
      buildBoard();
      renderBank();
      updateHud();
      setStatus('Tile picked up. Choose another equation cell.');
      save();
    }else{
      setStatus('Select a number tile from the bank first.');
    }
  });

  root.addEventListener('click',function(event){
    const difficultyButton=event.target.closest('[data-crossnumber-difficulty]');
    if(difficultyButton){setDifficulty(difficultyButton.dataset.crossnumberDifficulty);return;}
    const action=event.target.closest('[data-crossnumber-action]');
    if(!action) return;
    const name=action.dataset.crossnumberAction;
    if(name==='hint') hint();
    if(name==='undo') undo();
    if(name==='sort') sortBank();
    if(name==='new') newPuzzle({advance:true});
  });

  document.addEventListener('baseline:crossnumber-open',function(){
    startTimer();
  });

  const hadSave=restore();
  root.querySelectorAll('[data-crossnumber-difficulty]').forEach(function(button){
    const active=button.dataset.crossnumberDifficulty===difficulty;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',active?'true':'false');
  });
  if(!tileOrder.length) shuffleBank();
  buildBoard();
  renderBank();
  updateHud();
  if(completed&&allSolved()){
    if(refs.complete){
      refs.complete.setAttribute('aria-hidden','false');
      if(refs.completeTime) refs.completeTime.textContent=formatTime(seconds);
      if(refs.completeScore) refs.completeScore.textContent=String(computeScore());
    }
  }else{
    completed=false;
    if(hadSave) setStatus('Your Crossnumber has been restored.');
    startTimer();
  }
  window.addEventListener('pagehide',save);
})();
