(function(){
  'use strict';

  const TYPES=Object.freeze([
    Object.freeze({
      id:'jigsaws',
      name:'Jigsaws',
      note:'Image-based piece puzzles arranged into collections, with selectable piece counts and saved progress.',
      meta:'2 jigsaws available',
      preview:'/systems/baseline-games-hub/puzzles/the-weight-of-coherence/art/the-weight-of-coherence.png?v=WEIGHT_OF_COHERENCE_FULL_20261016_2'
    })
  ]);

  const JIGSAWS=Object.freeze([
    Object.freeze({
      id:'weight-of-coherence',
      group:'Psychological & Symbolic',
      title:'The Weight of Coherence',
      app:'weightcoherence',
      image:'/systems/baseline-games-hub/puzzles/the-weight-of-coherence/art/the-weight-of-coherence.png?v=WEIGHT_OF_COHERENCE_FULL_20261016_2',
      width:1122,
      height:1402,
      alt:'The Weight of Coherence — a symbolic person holding an unfinished structure amid green, red and blue light.',
      libraryDescription:'Holding an unfinished structure together under competing forces, the image centres balance, direction and the burden of maintaining coherence.',
      description:'The unfinished structure is not complete, yet it must still be carried forward. Its strength depends on different parts remaining in relationship rather than pulling apart. The weight lies in sustaining that integrity while continuing to build.'
    }),
    Object.freeze({
      id:'the-unheard-signal',
      group:'Psychological & Symbolic',
      title:'The Unheard Signal',
      app:'unheardsignal',
      image:'/systems/baseline-games-hub/puzzles/the-unheard-signal/art/the-unheard-signal.png?v=THE_UNHEARD_SIGNAL_FULL_20261017_1',
      width:1448,
      height:1086,
      alt:'The Unheard Signal — a man speaks from below while his words strike an invisible barrier before an elevated authority.',
      libraryDescription:'Words cross an unequal chamber but never arrive. Authority is present, yet genuine receptivity remains out of reach.',
      description:'A man speaks upward across an unequal chamber while his explanation breaks against a barrier he cannot cross. The work centres blocked reception, hierarchy and the pressure created when communication is allowed in form but denied in effect.'
    })
  ]);

  function findJigsaw(id){
    const key=String(id||'').trim().toLowerCase();
    return JIGSAWS.find(function(item){ return item.id===key; }) || null;
  }

  window.BaselinePuzzlesRegistry=Object.freeze({
    types:TYPES,
    jigsaws:JIGSAWS,
    findJigsaw:findJigsaw
  });
})();