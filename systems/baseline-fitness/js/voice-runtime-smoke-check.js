/* Build-time browser smoke check helper. Not loaded by the page. */
(function(global){
  'use strict';
  global.BASELINE_fitnessVoiceRuntimeCheck=Object.freeze({
    requiredGlobals:['BASELINE_voice','BASELINE_fitnessWorkout','BASELINE_fitnessVoice'],
    requiredSelectors:['#bl-beats-toggle','#bl-auth-toggle','.tab[data-target="my-body"]']
  });
})(typeof window!=='undefined'?window:globalThis);
