/* Baseline Fitness — voice access compatibility marker.
   Global microphone, MutationObserver and recognition wrappers were removed
   because they caused production-only page instability. */
(function(){
  'use strict';
  if(window.__BASELINE_VOICE_ACCESS__) return;
  window.__BASELINE_VOICE_ACCESS__=true;
  document.documentElement.setAttribute('data-baseline-voice-access','BASELINE_VOICE_ACCESS_20260713_12_SAFE');
})();
