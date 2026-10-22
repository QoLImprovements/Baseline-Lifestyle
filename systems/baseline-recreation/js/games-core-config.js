(function(global){
  'use strict';

  if(global.BASELINE_GAMES_CORE_CONFIG) return;

  const PAIRS_FACES = ['🍂','🪵','🌰','🦉','🍁','🪨','🌾','🧺','🪶','🍄','🌿','🏹','🥾','🕯️','🪙','📜','🧭','🐚','🛡️','⚒️','🪁','🪻','🌙','⭐'];
  const PAIRS_CARD_THEMES = Object.freeze([
    { id:'woodland', name:'Woodland', unlockLevel:1 },
    { id:'archive', name:'Archive', unlockLevel:8 },
    { id:'night', name:'Night', unlockLevel:18 }
  ]);
  const PAIRS_TIERS = [
    { id:'starter', name:'Starter', unlockLevel:1, cols:4, pairs:6, xpReward:22, bankReward:10, penalty:1 },
    { id:'field', name:'Field', unlockLevel:4, cols:4, pairs:8, xpReward:30, bankReward:14, penalty:2 },
    { id:'forge', name:'Forge', unlockLevel:10, cols:5, pairs:10, xpReward:42, bankReward:20, penalty:3 },
    { id:'bastion', name:'Bastion', unlockLevel:18, cols:6, pairs:12, xpReward:58, bankReward:28, penalty:3 },
    { id:'citadel', name:'Citadel', unlockLevel:30, cols:6, pairs:15, xpReward:78, bankReward:40, penalty:4 },
    { id:'vault', name:'Vault', unlockLevel:46, cols:6, pairs:18, xpReward:104, bankReward:56, penalty:5 }
  ];
  const PAIRS_SKILLS = [
    { id:'insight', name:'Insight', max:4, unlockLevel:6, description:'Gain one hint use per board per level. A hint now flashes one unmatched card only, not the whole pair.' },
    { id:'flow', name:'Flow', max:5, unlockLevel:1, description:'Gain +8% XP reward per level when a board is cleared.' },
    { id:'banker', name:'Banker', max:5, unlockLevel:1, description:'Gain +10% Bank reward per level when a board is cleared.' },
    { id:'recall', name:'Recall', max:4, unlockLevel:1, description:'Reduce repeated-mismatch Bank loss by 1 per level.' },
    { id:'tempo', name:'Tempo', max:4, unlockLevel:12, description:'Reduce mismatch recovery lock time by 90 ms per level.' }
  ];

  const MAKE24_TIERS = [
    { id:'starter', name:'Starter', unlockLevel:1, maxNumber:5, xpReward:18, bankReward:10, penalty:1 },
    { id:'field', name:'Field', unlockLevel:6, maxNumber:7, xpReward:26, bankReward:14, penalty:2 },
    { id:'forge', name:'Forge', unlockLevel:14, maxNumber:9, xpReward:40, bankReward:22, penalty:3 },
    { id:'citadel', name:'Citadel', unlockLevel:24, maxNumber:11, xpReward:56, bankReward:32, penalty:4 },
    { id:'crown', name:'Crown', unlockLevel:36, maxNumber:13, xpReward:76, bankReward:44, penalty:5 }
  ];
  const MAKE24_SKILLS = [
    { id:'clarity', name:'Clarity', max:4, unlockLevel:4, description:'Gain one guide use per puzzle per level. Each guide now gives only light tactical direction instead of exposing the answer.' },
    { id:'flow', name:'Flow', max:5, unlockLevel:1, description:'Gain +8% XP reward per solve.' },
    { id:'banker', name:'Banker', max:5, unlockLevel:1, description:'Gain +10% Bank reward per solve.' },
    { id:'reserve', name:'Reserve', max:4, unlockLevel:8, description:'Gain one reroll per puzzle per level.' },
    { id:'precision', name:'Precision', max:4, unlockLevel:1, description:'Reduce repeated wrong-answer Bank loss by 1 per level.' }
  ];

  const WORD_TIERS = [
    { id:'tier3', name:'3 Letters', unlockLevel:1, letters:3, xpReward:16, bankReward:8 },
    { id:'tier4', name:'4 Letters', unlockLevel:4, letters:4, xpReward:22, bankReward:10 },
    { id:'tier5', name:'5 Letters', unlockLevel:10, letters:5, xpReward:32, bankReward:16 },
    { id:'tier6', name:'6 Letters', unlockLevel:18, letters:6, xpReward:46, bankReward:24 },
    { id:'tier7', name:'7 Letters', unlockLevel:30, letters:7, xpReward:62, bankReward:34 }
  ];
  const WORD_SKILLS = [
    { id:'flow', name:'Flow', max:5, unlockLevel:1, description:'Gain +8% XP reward per solved word.' },
    { id:'banker', name:'Banker', max:5, unlockLevel:1, description:'Gain +10% Bank reward per solved word.' },
    { id:'reserve', name:'Reserve', max:4, unlockLevel:6, description:'Gain one extra guess slot per level.' },
    { id:'focus', name:'Focus', max:4, unlockLevel:8, description:'Gain +4% reward pressure per active streak step, per level.' }
  ];
  const WORD_BANK = Object.freeze({
    3:['ace','act','add','age','aim','air','ale','and','ant','ape','arc','ark','arm','art','ash','ask','awe','bad','bag','ban','bar','bat','bay','bee','bet','bib','bid','big','bin','bit','bob','bog','box','boy','bud','bug','bun','bus','cab','can','cap','car','cat','cob','cod','con','cop','cot','cow','coy','cup','cut','day','den','dew','dig','dim','dog','dry','ear','eel','egg','elm','end','era','eye','fan','far','fat','fee','fig','fin','fir','fog','for','fox','fun','gap','gem','gin','gum','ham','hay','hen','her','him','hop','hot','ice','ink','ivy','jam','jar','jaw','jet','job','joy','key','kin','kit','lap','law','lay','leg','lid','lip','log','man','map','mat','men','mud','mug','net','nod','oak','oar','odd','oil','one','orb','owl','pad','pan','pea','pen','pet','pie','pig','pin','pot','ram','ran','rat','raw','red','rib','rig','rim','rip','rod','row','rug','run','sap','saw','sea','set','sip','sit','sky','son','sun','tan','tap','tar','ten','tin','toe','top','toy','tub','urn','van','vat','wax','web','wet','win','wit','yes','yet','zip','zen'],
    4:['able','ache','acid','acre','aged','also','arch','area','army','aunt','bake','balm','bank','barn','bark','bead','beam','bean','bear','bell','bend','bird','boat','bolt','bone','book','boot','born','brim','brow','bulb','calm','camp','cane','card','cart','cave','clay','coal','cold','coin','cozy','crab','crop','curl','damp','dawn','deer','desk','dice','dock','dove','dune','dusk','each','echo','edge','fern','fire','fish','flag','flax','flow','foam','fold','fork','form','frog','glow','gold','gown','grit','harp','haze','heat','herb','hill','home','horn','iris','iron','jade','knot','lace','lake','lamb','leaf','lime','lint','lion','lock','loom','maze','mint','moon','moss','navy','nest','note','opal','pace','path','pear','pine','pond','rain','rail','reed','rice','rift','ring','road','rock','rose','sage','sand','seed','silk','snow','soil','song','stem','tide','vale','vine','wave','wild','will','wind','wood','wool','yard','year'],
    5:['amber','apple','arise','atlas','badge','baker','beach','blend','bloom','braid','briar','cabin','cable','camel','caper','cedar','charm','chase','cider','clasp','coast','crane','crown','dance','delta','drift','ember','fable','field','flame','flint','frame','frost','ghost','glade','grace','grain','grape','grove','guard','heart','honey','house','ivory','jewel','latch','lemon','linen','maple','merit','mirth','noble','ocean','olive','pearl','petal','pilot','plume','pride','quill','raven','ridge','river','roast','robin','sable','shale','shore','slate','spice','spire','sprig','stack','stone','storm','table','tease','thorn','trail','wheat','woven','world','zebra'],
    6:['almond','anchor','animal','artist','autumn','beacon','branch','bridge','bronze','buffer','candle','canyon','carbon','carved','castle','cherry','cipher','circle','copper','cosmic','crater','desert','driven','empire','fabric','forest','garden','gentle','glider','golden','hammer','harbor','hollow','island','jungle','keeper','ladder','legend','little','meadow','memory','native','nickel','orange','orchid','planet','pocket','quartz','rabbit','rocket','sandal','shadow','silver','sleeve','smooth','spring','sprout','sturdy','summer','thrive','timber','travel','velvet','violet','walnut','winter','wonder','yellow'],
    7:['apricot','balance','bargain','barrier','blossom','cabinet','captain','careful','carrier','central','chamber','charity','circuit','classic','collect','compass','courage','crimson','default','diamond','element','emerald','evening','factory','gallery','general','glimmer','granite','harvest','journey','kingdom','lantern','liberty','marshal','massive','measure','message','natural','orchard','passage','passion','pattern','prepare','profile','resolve','scholar','section','silence','special','station','support','tactile','teacher','texture','tracker','uniform','victory','village','warrior','weather','welcome','whisper']
  });


  const TRACKCOIN_TIERS = [
    { id:'tier1', name:'Tier 1', unlockLevel:1, containers:3, minSwaps:2, maxSwaps:3, speed:740, xpReward:10, coinReward:5, perfectBonusXp:20, perfectBonusCoins:10, multiplier:1.0 },
    { id:'tier2', name:'Tier 2', unlockLevel:3, containers:4, minSwaps:3, maxSwaps:4, speed:620, xpReward:12, coinReward:6, perfectBonusXp:20, perfectBonusCoins:10, multiplier:1.25 },
    { id:'tier3', name:'Tier 3', unlockLevel:6, containers:5, minSwaps:4, maxSwaps:6, speed:510, xpReward:15, coinReward:8, perfectBonusXp:24, perfectBonusCoins:12, multiplier:1.5 },
    { id:'tier4', name:'Tier 4', unlockLevel:10, containers:5, minSwaps:6, maxSwaps:8, speed:420, xpReward:18, coinReward:10, perfectBonusXp:28, perfectBonusCoins:14, multiplier:1.75, fakeRhythm:true },
    { id:'tier5', name:'Tier 5', unlockLevel:15, containers:6, minSwaps:8, maxSwaps:10, speed:320, xpReward:22, coinReward:12, perfectBonusXp:32, perfectBonusCoins:16, multiplier:2.0, fakeRhythm:true }
  ];
  const TRACKCOIN_STREAK_BONUS = [
    { streak:12, pct:50 },
    { streak:8, pct:35 },
    { streak:5, pct:20 },
    { streak:3, pct:10 },
    { streak:2, pct:5 }
  ];
  const TRACKCOIN_SKILLS = [
    { id:'read', name:'Read', max:4, unlockLevel:1, description:'Gain +6% XP per level on a correct pick and strengthen passive focus for Ninja Training.' },
    { id:'banker', name:'Banker', max:5, unlockLevel:1, description:'Gain +10% coin reward per level on a correct pick.' },
    { id:'flow', name:'Flow', max:5, unlockLevel:1, description:'Gain +5% clean-win bonus efficiency per level.' },
    { id:'discipline', name:'Discipline', max:4, unlockLevel:4, description:'Wrong rounds preserve more reward and recover streak control faster.' },
    { id:'steal', name:'Pace Control', max:4, unlockLevel:8, description:'Improves rewards and Ninja Training attack tempo while the exact +10% cup-speed streak rule remains readable.' }
  ];


  const RULESHIFT_COLOURS = Object.freeze([
    { id:'red', name:'Red' },
    { id:'blue', name:'Blue' },
    { id:'green', name:'Green' },
    { id:'yellow', name:'Yellow' },
    { id:'purple', name:'Purple' },
    { id:'orange', name:'Orange' },
    { id:'teal', name:'Teal' },
    { id:'pink', name:'Pink' }
  ]);
  const RULESHIFT_SHAPES = Object.freeze([
    { id:'circle', name:'Circle' },
    { id:'square', name:'Square' },
    { id:'triangle', name:'Triangle' },
    { id:'diamond', name:'Diamond' },
    { id:'oval', name:'Oval' },
    { id:'hexagon', name:'Hexagon' },
    { id:'star', name:'Star' },
    { id:'cross', name:'Cross' }
  ]);
  const RULESHIFT_SIZES = Object.freeze([
    { id:'small', name:'Small' },
    { id:'large', name:'Large' }
  ]);
  const RULESHIFT_TIERS = [
    { id:'starter', name:'Starter', unlockLevel:1, optionCount:6, rounds:8, timeLimitMs:5000, xpReward:18, bankReward:9, penalty:1, sizes:['large'], rules:['colour','shape'] },
    { id:'switch', name:'Switching', unlockLevel:4, optionCount:8, rounds:10, timeLimitMs:5000, xpReward:26, bankReward:13, penalty:2, sizes:['large'], rules:['colour','shape','colourShape'] },
    { id:'opposite', name:'Combinations', unlockLevel:9, optionCount:10, rounds:12, timeLimitMs:5000, xpReward:40, bankReward:21, penalty:3, sizes:['large','small'], rules:['colourShape','colourSize','shapeSize','size','notColour','notShape'] },
    { id:'mixed', name:'Mixed Rules', unlockLevel:16, optionCount:12, rounds:14, timeLimitMs:5000, xpReward:56, bankReward:30, penalty:4, sizes:['large','small'], rules:['colour','shape','size','colourShape','colourSize','shapeSize','notColour','notShape'] },
    { id:'pressure', name:'Pressure', unlockLevel:26, optionCount:12, rounds:16, timeLimitMs:5000, xpReward:76, bankReward:44, penalty:5, sizes:['large','small'], rules:['colourShape','colourSize','shapeSize','size','colour','shape','notColour','notShape'] }
  ];
  const RULESHIFT_SKILLS = [
    { id:'focus', name:'Focus', max:5, unlockLevel:1, description:'Gain +8% XP reward per completed run.' },
    { id:'banker', name:'Banker', max:5, unlockLevel:1, description:'Gain +10% Bank reward per completed run.' },
    { id:'recovery', name:'Recovery', max:4, unlockLevel:5, description:'Reduce the Bank loss from a wrong choice by 1 per level.' },
    { id:'adapt', name:'Adapt', max:4, unlockLevel:10, description:'Gain extra round Bank when you answer correctly after a changed rule.' }
  ];


  global.BASELINE_GAMES_CORE_CONFIG=Object.freeze({
    version:1,
    PAIRS_FACES:PAIRS_FACES,
    PAIRS_CARD_THEMES:PAIRS_CARD_THEMES,
    PAIRS_TIERS:PAIRS_TIERS,
    PAIRS_SKILLS:PAIRS_SKILLS,
    MAKE24_TIERS:MAKE24_TIERS,
    MAKE24_SKILLS:MAKE24_SKILLS,
    WORD_TIERS:WORD_TIERS,
    WORD_SKILLS:WORD_SKILLS,
    WORD_BANK:WORD_BANK,
    TRACKCOIN_TIERS:TRACKCOIN_TIERS,
    TRACKCOIN_STREAK_BONUS:TRACKCOIN_STREAK_BONUS,
    TRACKCOIN_SKILLS:TRACKCOIN_SKILLS,
    RULESHIFT_COLOURS:RULESHIFT_COLOURS,
    RULESHIFT_SHAPES:RULESHIFT_SHAPES,
    RULESHIFT_SIZES:RULESHIFT_SIZES,
    RULESHIFT_TIERS:RULESHIFT_TIERS,
    RULESHIFT_SKILLS:RULESHIFT_SKILLS
  });
})(window);
