/* Baseline Fitness — production-safe entry point and single Binaural icon rule. */
(function(){
  'use strict';

  if(window.__BASELINE_FITNESS_STABILITY__) return;
  window.__BASELINE_FITNESS_STABILITY__=true;

  var style=document.createElement('style');
  style.id='baseline-fitness-binaural-icon';
  style.textContent='#bl-beats-toggle .bl-icon-svg path{fill:#fff!important;}';
  document.head.appendChild(style);

  document.documentElement.setAttribute('data-baseline-fitness-stability','BASELINE_FITNESS_STABILITY_20260713_5');
})();
