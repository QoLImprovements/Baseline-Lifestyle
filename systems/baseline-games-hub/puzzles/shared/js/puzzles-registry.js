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
      libraryDescription:'A black panther pauses on exposed rock at dusk, using height, stillness and cover to survey a broad territory before moving through the landscape.',
      description:'From an elevated rocky outcrop, the black panther holds still as daylight fades, scanning the terrain before it moves on. Large solitary cats rely on concealment, acute hearing and careful observation as they travel, hunt and patrol extensive ranges; the dark coat adds camouflage in shadowed forest and low light. The scene captures patience, awareness and controlled movement within a demanding habitat.'
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
      libraryDescription:'A brown bear crosses a shallow autumn river, using the waterway as part of a wider route for travel, drinking and opportunistic foraging.',
      description:'The brown bear moves steadily through a shallow forest river as autumn changes the surrounding habitat. Rivers and streams can act as travel corridors and feeding grounds, concentrating water, scent and seasonal food; the bear continually assesses where energy can be gained as conditions shift toward winter. Its movement through the water reflects the practical, adaptable way bears use the landscape.'
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
      libraryDescription:'Adults and calves gather at a shallow watering hole to drink, cool themselves and remain in close social contact while the herd moves through the savanna.',
      description:'At the watering hole, adults and calves spread across the bank and shallows, drinking, wading and maintaining contact as a family group. Elephant herds are built around enduring social relationships: calves remain close to experienced females, while adults coordinate movement, protection and access to resources. Water is therefore more than a drink; it is also a place for cooling, play, learning and social interaction.'
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