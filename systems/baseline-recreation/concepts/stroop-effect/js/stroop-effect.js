/* The Stroop Effect — concept-specific comparison behaviour.
   Shared Concept routing stays in concepts/shared/js/concepts.js. */
(function(){
  'use strict';

  const MODES=Object.freeze({
    incongruent:Object.freeze({
      src:'/systems/baseline-recreation/concepts/stroop-effect/art/stroop-effect.webp?v=STROOP_ART_20261022_1',
      alt:'Surreal city-like environment filled with colour words displayed in conflicting colours, representing Stroop interference.',
      caption:'Incongruent: the word meaning and displayed colour conflict. Naming the colour requires resisting the strongly practised tendency to read the word.',
      promptTitle:'Experience the interference',
      prompt:'Name the colour you actually see rather than reading the word. Notice whether the written word reaches awareness first or competes with your colour response.'
    }),
    congruent:Object.freeze({
      src:'/systems/baseline-recreation/concepts/stroop-effect/art/stroop-effect-congruent.webp?v=STROOP_CONGRUENT_ART_20261022_1',
      alt:'Matching Stroop comparison artwork in which each colour word is displayed in the colour it names.',
      caption:'Congruent: the word meaning and displayed colour agree. The two information sources support the same response instead of competing.',
      promptTitle:'Compare the easier condition',
      prompt:'Name the colour you see again. Because the written word now agrees with the colour, the competing response is greatly reduced. Switch back to Incongruent to compare the difference directly.'
    })
  });

  function setMode(mode){
    const selected=MODES[mode] ? mode : 'incongruent';
    const state=MODES[selected];
    const root=document.getElementById('conceptStroopEffect');
    if(!root) return;

    const image=root.querySelector('[data-stroop-comparison-art]');
    const caption=root.querySelector('[data-stroop-comparison-caption]');
    const promptTitle=root.querySelector('[data-stroop-prompt-title]');
    const prompt=root.querySelector('[data-stroop-prompt]');
    if(image){
      image.src=state.src;
      image.alt=state.alt;
    }
    if(caption) caption.textContent=state.caption;
    if(promptTitle) promptTitle.textContent=state.promptTitle;
    if(prompt) prompt.textContent=state.prompt;

    root.querySelectorAll('[data-stroop-mode]').forEach(function(button){
      const active=button.getAttribute('data-stroop-mode')===selected;
      button.setAttribute('aria-pressed',active?'true':'false');
      button.classList.toggle('is-active',active);
    });
    root.setAttribute('data-stroop-comparison-mode',selected);
  }

  document.addEventListener('click',function(event){
    const button=event.target&&event.target.closest ? event.target.closest('[data-stroop-mode]') : null;
    if(!button) return;
    event.preventDefault();
    setMode(button.getAttribute('data-stroop-mode'));
  });

  window.BaselineStroopEffect=Object.freeze({
    modes:MODES,
    setMode:setMode,
    getMode:function(){
      const root=document.getElementById('conceptStroopEffect');
      return root ? (root.getAttribute('data-stroop-comparison-mode')||'incongruent') : 'incongruent';
    }
  });

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){ setMode('incongruent'); },{once:true});
  }else{
    setMode('incongruent');
  }
})();
