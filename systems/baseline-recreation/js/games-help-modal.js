(function(){
  'use strict';

  const HELP_CONTENT = Object.freeze({
    pairs:Object.freeze({
      title:'Pairs',
      brain:'Visual memory, pattern recall, short-term memory, and calm concentration.',
      how:'Flip cards to find matching pairs. Remember where each symbol appears. Clear the board to earn Bank and XP. Higher tiers add more pairs and stronger rewards.'
    }),
    detectword:Object.freeze({
      title:'Detect The Word',
      brain:'Language deduction, spelling, pattern narrowing, and verbal working memory.',
      how:'Guess the hidden word for the active letter tier. Correct place, present letters, and absent letters help you narrow the answer. Dictionary rule: standard English words of the active length can be submitted; the answer pool remains curated by tier.'
    }),
    make24:Object.freeze({
      title:'Make The Number',
      brain:'Number flexibility, working memory, multi-step problem solving, and planning.',
      how:'Use all shown numbers exactly once with +, −, ×, ÷, and brackets to hit the target number. Expression rule: every puzzle must use all shown numbers exactly once; concatenating numbers is not allowed.'
    }),
    trackcoin:Object.freeze({
      title:'Track the Coin',
      brain:'Visual tracking, sustained attention, working memory, and focus under movement.',
      how:'Watch which cup starts with the coin. Follow the shuffle, then choose the cup holding the coin. Correct picks build streaks and increase pace; missed rounds reveal the answer and reduce the pace.'
    }),
    ruleshift:Object.freeze({
      title:'Rule Shift',
      brain:'Mental flexibility, impulse control, working memory, and attention switching.',
      how:'Read the rule, watch the timer, and press a matching shape. The correct answer is always present. Rules can ask for colour, shape, size, combined features, or the opposite. Wrong choices and time-outs move you to a new rule, so stop, read, and choose deliberately.'
    }),
    ninja:Object.freeze({
      title:'Baseline Realm',
      brain:'Long-term planning, reward tracking, routine engagement, and strategic progression.',
      how:'Use Ninja Training, Basecamp, Exploration, Workshop, Calorie Escape, Tactical Operations, upgrades, stores and party management as one connected RPG campaign inside the Recreation.'
    })
  });

  function contentFor(gameId){
    return HELP_CONTENT[String(gameId || '').trim()] || null;
  }

  function ensureModal(){
    let modal=document.getElementById('gamesHelpInfoModal');
    if(modal)return modal;
    modal=document.createElement('div');
    modal.id='gamesHelpInfoModal';
    modal.className='games-modal';
    modal.hidden=true;
    modal.innerHTML='<div class="games-modal__backdrop" data-close-games-modal="1"></div><section class="games-modal__panel" role="dialog" aria-modal="true" aria-labelledby="gamesModalTitle"><button class="games-modal__close" data-close-games-modal="1" type="button" aria-label="Close">×</button><h3 id="gamesModalTitle"></h3><div class="games-modal__body" id="gamesModalBody"></div></section>';
    document.body.appendChild(modal);
    return modal;
  }

  function open(gameId,mode){
    const content=contentFor(gameId);
    if(!content)return false;
    const modal=ensureModal();
    const title=document.getElementById('gamesModalTitle');
    const body=document.getElementById('gamesModalBody');
    if(!title||!body)return false;
    const isBrain=mode==='brain';
    title.textContent=isBrain?(content.title+' — Brain Benefit'):(content.title+' — How To Play');
    body.replaceChildren();
    const paragraph=document.createElement('p');
    paragraph.textContent=isBrain?content.brain:content.how;
    body.appendChild(paragraph);
    modal.hidden=false;
    document.body.classList.add('games-modal-open');
    const close=modal.querySelector('.games-modal__close');
    if(close&&typeof close.focus==='function')close.focus({preventScroll:true});
    return true;
  }

  function close(){
    const modal=document.getElementById('gamesHelpInfoModal');
    if(modal)modal.hidden=true;
    if(document.body)document.body.classList.remove('games-modal-open');
  }

  window.BaselineGamesHelpModal=Object.freeze({
    version:1,
    contentFor,
    open,
    close
  });
})();
