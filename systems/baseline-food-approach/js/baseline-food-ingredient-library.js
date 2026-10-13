/* Baseline Food ingredient-library data adapter.
   The shared Baseline system owns card/filter/navigation structure and behaviour.
   Food's folder-backed ingredient records own Food-specific content. */
(function(){
  'use strict';

  function slugFromCard(card){
    const a=card.querySelector('a[href*="/ingredient-library/"]');
    if(!a) return '';
    const path=String(a.getAttribute('href')||'').split(/[?#]/)[0].replace(/\/+$/,'');
    return decodeURIComponent(path.split('/').pop()||'').trim();
  }

  function recordUrl(slug){
    return '/baseline-food-approach/ingredients/'+encodeURIComponent(slug)+'.html';
  }

  async function hydrateCard(card){
    if(!card || card.dataset.ingredientRecordHydrated==='1' || card.dataset.ingredientRecordLoading==='1') return;
    const slug=slugFromCard(card);
    if(!slug) return;
    card.dataset.ingredientRecordLoading='1';
    try{
      const response=await fetch(recordUrl(slug),{credentials:'same-origin'});
      if(!response.ok) throw new Error('Ingredient record '+response.status);
      const source=await response.text();
      const doc=new DOMParser().parseFromString(source,'text/html');
      const record=doc.querySelector('.food-ingredient-record');
      if(!record) throw new Error('Ingredient record body missing');

      const fragment=document.createDocumentFragment();
      Array.from(record.children).forEach(node=>{
        const copy=node.cloneNode(true);
        if(copy.tagName==='H1'){
          const h3=document.createElement('h3');
          h3.innerHTML=copy.innerHTML;
          fragment.appendChild(h3);
        }else{
          fragment.appendChild(copy);
        }
      });

      card.replaceChildren(fragment);
      card.classList.remove('ingredient-index-card');
      card.dataset.ingredientRecordHydrated='1';
    }catch(err){
      console.warn('[Baseline Food] ingredient record hydration failed:',slug,err);
    }finally{
      delete card.dataset.ingredientRecordLoading;
    }
  }

  function init(){
    const library=document.querySelector('body[data-app="food"] #ingredients .lib');
    if(!library) return;

    library.classList.remove('ingredient-index');
    const cards=Array.from(library.querySelectorAll('.card[id^="ing-"]'));
    if(!cards.length) return;

    if(!('IntersectionObserver' in window)){
      cards.forEach(hydrateCard);
      return;
    }

    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        hydrateCard(entry.target);
      });
    },{rootMargin:'700px 0px'});

    cards.forEach(card=>observer.observe(card));

    // Deep-linked/filtered cards should never wait for scrolling before their record appears.
    const ensureHashCard=()=>{
      const id=decodeURIComponent(String(location.hash||'').replace(/^#/,'').split('&')[0]);
      if(!/^ing-/.test(id)) return;
      const card=document.getElementById(id);
      if(card){
        observer.unobserve(card);
        hydrateCard(card);
      }
    };
    ensureHashCard();
    window.addEventListener('hashchange',ensureHashCard);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();