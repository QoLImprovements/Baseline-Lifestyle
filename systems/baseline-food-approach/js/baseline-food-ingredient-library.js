/* Baseline Food ingredient-library data adapter.
   The shared Baseline system owns card/filter/navigation structure and behaviour.
   Food's folder-backed ingredient records own Food-specific content. */
(function(){
  'use strict';

  const hydrationPromises=new WeakMap();

  function slugFromCard(card){
    const a=card.querySelector('a[href*="/ingredient-library/"]');
    if(!a) return '';
    const path=String(a.getAttribute('href')||'').split(/[?#]/)[0].replace(/\/+$/,'');
    return decodeURIComponent(path.split('/').pop()||'').trim();
  }

  function recordUrl(slug){
    return '/baseline-food-approach/ingredient-library/'+encodeURIComponent(slug);
  }

  function hydrateCard(card){
    if(!card) return Promise.resolve(false);
    if(card.dataset.ingredientRecordHydrated==='1') return Promise.resolve(true);
    if(hydrationPromises.has(card)) return hydrationPromises.get(card);

    const slug=slugFromCard(card);
    if(!slug) return Promise.resolve(false);

    const hydration=(async()=>{
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
        return true;
      }catch(err){
        console.warn('[Baseline Food] ingredient record hydration failed:',slug,err);
        return false;
      }finally{
        delete card.dataset.ingredientRecordLoading;
        hydrationPromises.delete(card);
      }
    })();

    hydrationPromises.set(card,hydration);
    return hydration;
  }

  function init(){
    const library=document.querySelector('body[data-app="food"] #ingredients .lib');
    if(!library) return;

    library.classList.remove('ingredient-index');
    const cards=Array.from(library.querySelectorAll('.card[id^="ing-"]'));
    if(!cards.length) return;
    const cardById=new Map(cards.map(card=>[card.id,card]));

    // Recipe ingredient navigation must never reveal the lightweight index card
    // and then replace it in front of the user. Warm the target on hover/focus,
    // and if a click arrives first, hold the tab transition until hydration has
    // completed. The shared navigation handler then runs unchanged.
    const linkCard=(target)=>{
      const link=target && target.closest
        ? target.closest('#recipes a.ing-link[data-from-recipe][data-ingredient]')
        : null;
      if(!link) return null;
      const ingredientId=String(link.getAttribute('data-ingredient')||'').trim();
      return ingredientId ? (cardById.get(ingredientId)||document.getElementById(ingredientId)) : null;
    };

    const warmIngredient=(event)=>{
      const card=linkCard(event.target);
      if(card) hydrateCard(card);
    };
    document.addEventListener('pointerover',warmIngredient,{capture:true,passive:true});
    document.addEventListener('focusin',warmIngredient,true);

    document.addEventListener('click',async(event)=>{
      const link=event.target && event.target.closest
        ? event.target.closest('#recipes a.ing-link[data-from-recipe][data-ingredient]')
        : null;
      if(!link || link.dataset.foodIngredientHydrationReplay==='1') return;

      const card=linkCard(link);
      if(!card || card.dataset.ingredientRecordHydrated==='1') return;

      event.preventDefault();
      event.stopImmediatePropagation();

      await hydrateCard(card);

      link.dataset.foodIngredientHydrationReplay='1';
      try{
        link.click();
      }finally{
        delete link.dataset.foodIngredientHydrationReplay;
      }
    },true);

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