/* Baseline Recreation — shared Concepts navigation.
   Owns the reusable library/detail route contract. Concept-specific behaviour
   belongs under concepts/<slug>/ and may extend, not replace, this shell. */
(function(){
  'use strict';

  const BASE='/baseline-recreation/concepts';
  const REGISTRY=Object.freeze({
    'stroop-effect':Object.freeze({
      slug:'stroop-effect',
      title:'The Stroop Effect',
      field:'Psychology · Attention & cognitive control',
      detailId:'conceptStroopEffect'
    })
  });

  function pathSlug(){
    const path=String(window.location.pathname||'').toLowerCase().replace(/\/+$/,'');
    if(path===BASE) return '';
    if(path.indexOf(BASE+'/')!==0) return null;
    return path.slice((BASE+'/').length).split('/')[0]||'';
  }

  function writeRoute(slug,mode){
    const route=slug ? (BASE+'/'+slug) : BASE;
    const current=window.location.pathname+window.location.search+window.location.hash;
    if(current===route) return;
    if(window.history){
      if(mode==='replace' && typeof window.history.replaceState==='function'){
        window.history.replaceState({baselineRecreation:true,baselineConcepts:true,concept:slug||''},'',route);
        return;
      }
      if(typeof window.history.pushState==='function'){
        window.history.pushState({baselineRecreation:true,baselineConcepts:true,concept:slug||''},'',route);
        return;
      }
    }
    window.location.href=route;
  }

  function setOverviewVisible(visible){
    const overview=document.getElementById('conceptsOverviewCard');
    if(overview) overview.hidden=!visible;
  }

  function hideAllDetails(){
    document.querySelectorAll('#concepts [data-concept-detail]').forEach(function(detail){
      detail.hidden=true;
    });
  }

  function focusHeading(detail){
    if(!detail) return;
    const heading=detail.querySelector('[data-concept-heading]');
    if(!heading) return;
    heading.setAttribute('tabindex','-1');
    try{ heading.focus({preventScroll:true}); }catch(_error){ try{ heading.focus(); }catch(_e){} }
    heading.removeAttribute('tabindex');
  }

  function showOverview(options){
    const opts=options||{};
    hideAllDetails();
    setOverviewVisible(true);
    document.documentElement.removeAttribute('data-concept-open');
    if(opts.historyMode) writeRoute('',opts.historyMode);
    if(opts.focus){
      const heading=document.querySelector('#conceptsOverviewCard h2');
      if(heading){
        heading.setAttribute('tabindex','-1');
        try{ heading.focus({preventScroll:true}); }catch(_error){ try{ heading.focus(); }catch(_e){} }
        heading.removeAttribute('tabindex');
      }
    }
  }

  function openConcept(slug,options){
    const opts=options||{};
    const concept=REGISTRY[String(slug||'').toLowerCase()];
    if(!concept){ showOverview({historyMode:opts.historyMode||'replace'}); return false; }
    hideAllDetails();
    setOverviewVisible(false);
    const detail=document.getElementById(concept.detailId);
    if(!detail){ showOverview({historyMode:'replace'}); return false; }
    detail.hidden=false;
    document.documentElement.setAttribute('data-concept-open',concept.slug);
    if(opts.historyMode) writeRoute(concept.slug,opts.historyMode);
    if(opts.focus) focusHeading(detail);
    return true;
  }

  function restoreRoute(){
    const slug=pathSlug();
    if(slug===null) return;
    if(!slug) showOverview();
    else if(!openConcept(slug)) showOverview({historyMode:'replace'});
  }

  function bind(){
    document.addEventListener('click',function(event){
      const open=event.target&&event.target.closest ? event.target.closest('[data-open-concept]') : null;
      if(open){
        event.preventDefault();
        openConcept(open.getAttribute('data-open-concept'),{historyMode:'push',focus:true});
        return;
      }
      const back=event.target&&event.target.closest ? event.target.closest('[data-concepts-back]') : null;
      if(back){
        event.preventDefault();
        showOverview({historyMode:'push',focus:true});
      }
    });
    window.addEventListener('popstate',restoreRoute);
  }

  window.BaselineConcepts=Object.freeze({
    registry:REGISTRY,
    showOverview:showOverview,
    openConcept:openConcept,
    restoreRoute:restoreRoute,
    getConcept:function(slug){ return REGISTRY[String(slug||'').toLowerCase()]||null; }
  });

  bind();
  restoreRoute();
})();
