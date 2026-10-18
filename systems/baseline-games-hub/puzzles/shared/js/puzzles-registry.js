(function(){
  'use strict';

  const TYPES=Object.freeze([
    Object.freeze({
      id:'jigsaws',
      name:'Jigsaws',
      note:'Image-based piece puzzles arranged into collections, with selectable piece counts and saved progress.',
      meta:'6 jigsaws available',
      preview:'/systems/baseline-games-hub/puzzles/shared/art/jigsaws.svg?v=JIGSAWS_ICON_20261018_1'
    }),
    Object.freeze({
      id:'crossnumber',
      name:'Crossnumber',
      note:'Place number tiles into interlocking equations so every horizontal and vertical calculation balances.',
      meta:'Arithmetic placement',
      preview:'/systems/baseline-games-hub/puzzles/shared/art/crossnumber.svg?v=CROSSNUMBER_ARITHMETIC_20261018_2'
    })
  ]);

  const JIGSAWS=Object.freeze([
    Object.freeze({
      id:'weight-of-coherence',
      group:'Symbolic',
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
      group:'Symbolic',
      title:'Pleading Before the Silent Throne',
      app:'unheardsignal',
      image:'/systems/baseline-games-hub/puzzles/the-unheard-signal/art/the-unheard-signal.png?v=THE_UNHEARD_SIGNAL_FULL_20261017_1',
      width:1448,
      height:1086,
      alt:'Pleading Before the Silent Throne — a man speaks from below while his words strike an invisible barrier before an elevated authority.',
      libraryDescription:'Words cross an unequal chamber but never arrive. Authority is present, yet genuine receptivity remains out of reach.',
      description:'A man speaks upward across an unequal chamber while his explanation breaks against a barrier he cannot cross. The work centres blocked reception, hierarchy and the pressure created when communication is allowed in form but denied in effect.'
    }),
    Object.freeze({
      id:'black-panther',
      group:'Animals',
      title:'Black Panther',
      app:'pantherjigsaw',
      image:'/systems/baseline-games-hub/puzzles/black-panther/art/black-panther.webp?v=BLACK_PANTHER_JIGSAW_20261018_1',
      width:900,
      height:1125,
      alt:'A black panther standing alert on a rocky outcrop above a misty mountain wilderness at dusk.',
      libraryDescription:'A black panther stands watch above a moonlit mountain wilderness, poised between darkness and the last light of day.',
      description:'The panther surveys the landscape from exposed rock, still and alert against mist, mountains and opposing lights. The image centres watchfulness, controlled strength and solitary presence.'
    }),
    Object.freeze({
      id:'bear',
      group:'Animals',
      title:'Bear',
      app:'bearjigsaw',
      image:'/systems/baseline-games-hub/puzzles/bear/art/bear.webp?v=BEAR_JIGSAW_20261018_1',
      width:900,
      height:1125,
      alt:'A large brown bear walking through a shallow autumn forest river in warm sunrise light.',
      libraryDescription:'A brown bear moves through an autumn river at sunrise, carrying its weight steadily through water, mist and changing terrain.',
      description:'The bear crosses a shallow forest river in full stride as autumn light enters through the trees. The image centres grounded power, forward movement and adaptation within a changing environment.'
    }),
    Object.freeze({
      id:'fox',
      group:'Animals',
      title:'Fox',
      app:'foxjigsaw',
      image:'/systems/baseline-games-hub/puzzles/fox/art/fox.webp?v=FOX_JIGSAW_20261018_1',
      width:1122,
      height:1402,
      alt:'A red fox foraging through a damp meadow at the edge of woodland in soft morning light.',
      libraryDescription:'A red fox works the damp boundary between meadow and woodland, listening, scenting and searching through cover for small prey.',
      description:'At the edge of woodland and open meadow, the fox moves slowly through dew-wet grass, using its hearing and sense of smell to locate small prey hidden among the vegetation. Its low posture and deliberate search reflect the quiet, opportunistic way red foxes forage along field margins, where cover, open ground and abundant food meet.'
    }),
    Object.freeze({
      id:'elephants',
      group:'Animals',
      title:'Elephants',
      app:'elephantsjigsaw',
      image:'/systems/baseline-games-hub/puzzles/elephants/art/elephants.webp?v=ELEPHANTS_JIGSAW_20261018_1',
      width:1536,
      height:1024,
      alt:'An African elephant herd gathered around a shallow watering hole, with adults and calves drinking, wading and interacting.',
      libraryDescription:'Adults and calves gather around a shallow watering hole, drinking, wading and moving together through the savanna.',
      description:'The herd spreads naturally around a shallow watering hole as adults and calves drink, wade and interact. The wider scene gives the animals space while showing the social character of elephant family life.'
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