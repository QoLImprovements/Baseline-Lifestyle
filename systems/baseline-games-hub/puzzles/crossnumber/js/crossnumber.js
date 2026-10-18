(function(){
  'use strict';

  const root=document.getElementById('crossnumberGame');
  if(!root) return;

  const PUZZLE=Object.freeze({
    id:'classic-01',
    pattern:['..#..','.....','#...#','.....','..#..'],
    solution:['28#76','45183','#926#','58104','72#61'],
    clues:Object.freeze({
      across:Object.freeze({
        1:'Four multiplied by seven.',
        3:'Nineteen multiplied by four.',
        5:'Forty-five thousand plus one hundred and eighty-three.',
        7:'One thousand minus seventy-four.',
        8:'Fifty-eight thousand plus one hundred and four.',
        10:'Eight multiplied by nine.',
        11:'Sixty plus one.'
      }),
      down:Object.freeze({
        1:'Six multiplied by four.',
        2:'Eighty-five thousand nine hundred and eighty-two.',
        3:'Seventy-eight thousand six hundred and six.',
        4:'Seven multiplied by nine.',
        6:'Eleven squared.',
        8:'Fifty-seven.',
        9:'Forty-one.'
      })
    })
  });

  const refs={
    grid:root.querySelector('[data-crossnumber-grid]'),
    across:root.querySelector('[data-crossnumber-clues="across"]'),
    down:root.querySelector('[data-crossnumber-clues="down"]'),
    progress:root.querySelector('[data-crossnumber-progress]'),
    filled:root.querySelector('[data-crossnumber-filled]'),
    timer:root.querySelector('[data-crossnumber-timer]'),
    hints:root.querySelector('[data-crossnumber-hints]'),
    status:root.querySelector('[data-crossnumber-status]'),
    complete:root.querySelector('[data-crossnumber-complete]'),
    completeTime:root.querySelector('[data-crossnumber-complete-time]')
  };
  if(!refs.grid||!refs.across||!refs.down) return;

  const STORAGE_KEY='baseline.crossnumber.classic01';
  let cells=[];
  let entries=[];
  let currentEntry=null;
  let currentCell=null;
  let seconds=0;
  let hintsUsed=0;
  let timerId=0;
  let completed=false;

  function cellKey(r,c){ return r+':'+c; }

  function buildEntries(){
    const rows=PUZZLE.pattern.length;
    const cols=PUZZLE.pattern[0].length;
    const numbers=new Map();
    let nextNumber=0;
    entries=[];

    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        if(PUZZLE.pattern[r][c]==='#') continue;
        const startsAcross=(c===0||PUZZLE.pattern[r][c-1]==='#') && c+1<cols && PUZZLE.pattern[r][c+1]!=='#';
        const startsDown=(r===0||PUZZLE.pattern[r-1][c]==='#') && r+1<rows && PUZZLE.pattern[r+1][c]!=='#';
        if(startsAcross||startsDown){
          nextNumber++;
          numbers.set(cellKey(r,c),nextNumber);
        }
        if(startsAcross){
          const coords=[];
          let cc=c;
          while(cc<cols&&PUZZLE.pattern[r][cc]!=='#'){ coords.push([r,cc]); cc++; }
          entries.push({number:numbers.get(cellKey(r,c)),direction:'across',cells:coords});
        }
        if(startsDown){
          const coords=[];
          let rr=r;
          while(rr<rows&&PUZZLE.pattern[rr][c]!=='#'){ coords.push([rr,c]); rr++; }
          entries.push({number:numbers.get(cellKey(r,c)),direction:'down',cells:coords});
        }
      }
    }
    return numbers;
  }

  function buildGrid(){
    const numbers=buildEntries();
    refs.grid.innerHTML='';
    cells=[];
    PUZZLE.pattern.forEach(function(row,r){
      row.split('').forEach(function(mark,c){
        if(mark==='#'){
          const block=document.createElement('div');
          block.className='crossnumber-block';
          block.setAttribute('aria-hidden','true');
          refs.grid.appendChild(block);
          return;
        }
        const wrap=document.createElement('label');
        wrap.className='crossnumber-cell';
        const input=document.createElement('input');
        input.type='text';
        input.inputMode='numeric';
        input.pattern='[0-9]*';
        input.maxLength=1;
        input.autocomplete='off';
        input.spellcheck=false;
        input.dataset.row=String(r);
        input.dataset.col=String(c);
        input.setAttribute('aria-label','Crossnumber cell row '+(r+1)+', column '+(c+1));
        const number=numbers.get(cellKey(r,c));
        if(number){
          const tag=document.createElement('span');
          tag.className='crossnumber-cell-number';
          tag.textContent=String(number);
          wrap.appendChild(tag);
        }
        wrap.appendChild(input);
        refs.grid.appendChild(wrap);
        cells.push(input);
      });
    });
  }

  function buildClues(){
    ['across','down'].forEach(function(direction){
      const target=refs[direction];
      target.innerHTML='';
      entries.filter(function(entry){return entry.direction===direction;}).forEach(function(entry){
        const button=document.createElement('button');
        button.className='crossnumber-clue';
        button.type='button';
        button.dataset.entry=direction+':'+entry.number;
        button.innerHTML='<span class="crossnumber-clue-number">'+entry.number+'</span><span class="crossnumber-clue-copy">'+
          escapeHtml(PUZZLE.clues[direction][entry.number]||'Solve this entry.')+'</span>';
        target.appendChild(button);
      });
    });
  }

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g,function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function findCell(r,c){
    return cells.find(function(input){return Number(input.dataset.row)===r&&Number(input.dataset.col)===c;})||null;
  }

  function entriesForCell(input){
    if(!input) return [];
    const r=Number(input.dataset.row),c=Number(input.dataset.col);
    return entries.filter(function(entry){
      return entry.cells.some(function(pair){return pair[0]===r&&pair[1]===c;});
    });
  }

  function chooseEntry(input,preferredDirection){
    const candidates=entriesForCell(input);
    if(!candidates.length) return null;
    if(preferredDirection){
      const preferred=candidates.find(function(entry){return entry.direction===preferredDirection;});
      if(preferred) return preferred;
    }
    if(currentEntry&&candidates.includes(currentEntry)) return currentEntry;
    return candidates[0];
  }

  function setActive(input,entry){
    currentCell=input||currentCell;
    currentEntry=entry||chooseEntry(currentCell);
    cells.forEach(function(cell){cell.classList.remove('is-active','is-related');});
    root.querySelectorAll('.crossnumber-clue').forEach(function(clue){clue.classList.remove('is-active');});
    if(!currentCell||!currentEntry) return;
    currentEntry.cells.forEach(function(pair){
      const cell=findCell(pair[0],pair[1]);
      if(cell) cell.classList.add('is-related');
    });
    currentCell.classList.add('is-active');
    const clue=root.querySelector('[data-entry="'+currentEntry.direction+':'+currentEntry.number+'"]');
    if(clue){
      clue.classList.add('is-active');
      clue.scrollIntoView({block:'nearest'});
    }
    showDirection(currentEntry.direction);
  }

  function moveWithinEntry(step){
    if(!currentEntry||!currentCell) return;
    const r=Number(currentCell.dataset.row),c=Number(currentCell.dataset.col);
    const index=currentEntry.cells.findIndex(function(pair){return pair[0]===r&&pair[1]===c;});
    const next=currentEntry.cells[index+step];
    if(next){
      const input=findCell(next[0],next[1]);
      if(input){ input.focus(); setActive(input,currentEntry); }
    }
  }

  function moveSpatial(dr,dc){
    if(!currentCell) return;
    let r=Number(currentCell.dataset.row)+dr;
    let c=Number(currentCell.dataset.col)+dc;
    while(r>=0&&c>=0&&r<PUZZLE.pattern.length&&c<PUZZLE.pattern[0].length){
      const next=findCell(r,c);
      if(next){
        next.focus();
        setActive(next,chooseEntry(next,dr!==0?'down':'across'));
        return;
      }
      r+=dr;c+=dc;
    }
  }

  function solutionAt(input){
    return PUZZLE.solution[Number(input.dataset.row)][Number(input.dataset.col)];
  }

  function updateProgress(){
    const filled=cells.filter(function(cell){return /^[0-9]$/.test(cell.value);}).length;
    refs.filled.textContent=filled+'/'+cells.length;
    refs.progress.style.width=((filled/cells.length)*100).toFixed(1)+'%';
    const allCorrect=filled===cells.length&&cells.every(function(cell){return cell.value===solutionAt(cell);});
    if(allCorrect&&!completed) finish();
  }

  function formatTime(value){
    const m=Math.floor(value/60);
    const s=value%60;
    return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }

  function startTimer(){
    if(timerId||completed) return;
    timerId=window.setInterval(function(){
      seconds++;
      refs.timer.textContent=formatTime(seconds);
      if(seconds%5===0) save();
    },1000);
  }

  function save(){
    try{
      localStorage.setItem(STORAGE_KEY,JSON.stringify({
        values:cells.map(function(cell){return cell.value||'';}),
        seconds:seconds,
        hintsUsed:hintsUsed,
        completed:completed
      }));
    }catch(_error){}
  }

  function restore(){
    try{
      const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
      if(!data||!Array.isArray(data.values)) return;
      cells.forEach(function(cell,index){cell.value=/^[0-9]$/.test(data.values[index]||'')?data.values[index]:'';});
      seconds=Math.max(0,Number(data.seconds)||0);
      hintsUsed=Math.max(0,Number(data.hintsUsed)||0);
      completed=Boolean(data.completed)&&cells.every(function(cell){return cell.value===solutionAt(cell);});
      refs.timer.textContent=formatTime(seconds);
      refs.hints.textContent=String(hintsUsed);
      if(completed){
        refs.complete.setAttribute('aria-hidden','false');
        refs.completeTime.textContent=formatTime(seconds);
      }
    }catch(_error){}
  }

  function clearFeedback(){
    cells.forEach(function(cell){cell.classList.remove('is-wrong','is-correct');});
  }

  function check(){
    clearFeedback();
    let wrong=0,correct=0;
    cells.forEach(function(cell){
      if(!cell.value) return;
      if(cell.value===solutionAt(cell)){cell.classList.add('is-correct');correct++;}
      else{cell.classList.add('is-wrong');wrong++;}
    });
    refs.status.innerHTML=wrong?'<strong>'+wrong+' incorrect.</strong> Correct entries are lightly marked.':'<strong>No errors found.</strong> Keep going.';
    window.setTimeout(clearFeedback,1400);
    updateProgress();
  }

  function hint(){
    const pool=(currentEntry?currentEntry.cells.map(function(pair){return findCell(pair[0],pair[1]);}):cells)
      .filter(function(cell){return cell&&cell.value!==solutionAt(cell);});
    const target=pool[0]||cells.find(function(cell){return cell.value!==solutionAt(cell);});
    if(!target) return;
    target.value=solutionAt(target);
    target.classList.add('is-correct');
    hintsUsed++;
    refs.hints.textContent=String(hintsUsed);
    refs.status.innerHTML='<strong>Hint used.</strong> One digit has been revealed.';
    target.focus();
    setActive(target,chooseEntry(target,currentEntry&&currentEntry.direction));
    window.setTimeout(function(){target.classList.remove('is-correct');},1000);
    updateProgress();
    save();
  }

  function reset(){
    cells.forEach(function(cell){cell.value='';cell.classList.remove('is-correct','is-wrong');});
    seconds=0;
    hintsUsed=0;
    completed=false;
    refs.timer.textContent='00:00';
    refs.hints.textContent='0';
    refs.complete.setAttribute('aria-hidden','true');
    refs.status.innerHTML='<strong>Fresh grid.</strong> Select a clue or cell to begin.';
    try{localStorage.removeItem(STORAGE_KEY);}catch(_error){}
    updateProgress();
    const first=cells[0];
    if(first){first.focus();setActive(first,chooseEntry(first,'across'));}
    startTimer();
  }

  function finish(){
    completed=true;
    if(timerId){clearInterval(timerId);timerId=0;}
    refs.complete.setAttribute('aria-hidden','false');
    refs.completeTime.textContent=formatTime(seconds);
    refs.status.innerHTML='<strong>Grid complete.</strong> Every crossing agrees.';
    save();
  }

  function showDirection(direction){
    root.querySelectorAll('[data-crossnumber-tab]').forEach(function(btn){
      btn.setAttribute('aria-selected',btn.dataset.crossnumberTab===direction?'true':'false');
    });
    refs.across.hidden=direction!=='across';
    refs.down.hidden=direction!=='down';
  }

  refs.grid.addEventListener('focusin',function(event){
    const input=event.target.closest('input');
    if(!input) return;
    startTimer();
    setActive(input,chooseEntry(input));
  });

  refs.grid.addEventListener('click',function(event){
    const input=event.target.closest('input');
    if(!input) return;
    const candidates=entriesForCell(input);
    if(currentCell===input&&candidates.length>1&&currentEntry){
      const alternate=candidates.find(function(entry){return entry!==currentEntry;});
      if(alternate) setActive(input,alternate);
    }
  });

  refs.grid.addEventListener('input',function(event){
    const input=event.target.closest('input');
    if(!input) return;
    input.value=(input.value.match(/[0-9]/g)||[]).slice(-1).join('');
    input.classList.remove('is-wrong','is-correct');
    if(input.value) moveWithinEntry(1);
    updateProgress();
    save();
  });

  refs.grid.addEventListener('keydown',function(event){
    const input=event.target.closest('input');
    if(!input) return;
    if(event.key==='Backspace'&&!input.value){event.preventDefault();moveWithinEntry(-1);if(currentCell)currentCell.value='';updateProgress();save();return;}
    if(event.key==='ArrowLeft'){event.preventDefault();moveSpatial(0,-1);}
    if(event.key==='ArrowRight'){event.preventDefault();moveSpatial(0,1);}
    if(event.key==='ArrowUp'){event.preventDefault();moveSpatial(-1,0);}
    if(event.key==='ArrowDown'){event.preventDefault();moveSpatial(1,0);}
    if(event.key===' '||event.key==='Enter'){
      const candidates=entriesForCell(input);
      if(candidates.length>1){event.preventDefault();const alternate=candidates.find(function(entry){return entry!==currentEntry;});if(alternate)setActive(input,alternate);}
    }
  });

  root.addEventListener('click',function(event){
    const clue=event.target.closest('[data-entry]');
    if(clue){
      const parts=clue.dataset.entry.split(':');
      const entry=entries.find(function(item){return item.direction===parts[0]&&String(item.number)===parts[1];});
      if(entry){
        const pair=entry.cells[0];
        const first=findCell(pair[0],pair[1]);
        if(first){first.focus();setActive(first,entry);}
      }
      return;
    }
    const tab=event.target.closest('[data-crossnumber-tab]');
    if(tab){showDirection(tab.dataset.crossnumberTab);return;}
    const action=event.target.closest('[data-crossnumber-action]');
    if(!action) return;
    const name=action.dataset.crossnumberAction;
    if(name==='check') check();
    if(name==='hint') hint();
    if(name==='reset') reset();
  });

  document.addEventListener('baseline:crossnumber-open',function(){
    const first=currentCell||cells[0];
    if(first) setActive(first,chooseEntry(first,currentEntry&&currentEntry.direction));
  });

  buildGrid();
  buildClues();
  restore();
  updateProgress();
  showDirection('across');
  const first=cells.find(function(cell){return cell.value;})||cells[0];
  if(first) setActive(first,chooseEntry(first,'across'));
  if(!completed) startTimer();

  window.addEventListener('pagehide',save);
})();
