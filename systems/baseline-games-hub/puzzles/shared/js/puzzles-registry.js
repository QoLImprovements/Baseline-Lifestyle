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
      alt:'The Weight of Coherence — a symbolic figure holding an unfinished structure amid green, red and blue light.',
      description:'Caught between competing forces, a lone figure carries an unfinished structure forward. Its strength comes from coherence. Different parts are held in balance, given direction and brought into relationship with one another. The weight lies in sustaining that integrity while continuing to build.'
    }),
    Object.freeze({
      id:'the-unheard-signal',
      group:'Psychological & Symbolic',
      title:'The Unheard Signal',
      app:'unheardsignal',
      image:'/systems/baseline-games-hub/puzzles/the-unheard-signal/art/the-unheard-signal.jpg?v=THE_UNHEARD_SIGNAL_20261017_1',
      width:1200,
      height:900,
      alt:'The Unheard Signal — a man speaks from below while his words strike an invisible barrier before an elevated authority figure.',
      description:'A figure tries to explain himself across an unequal chamber, but his words meet an invisible barrier before they can be received. The scene centres blocked reception, hierarchy and the pressure created when explanation has nowhere to go.'
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