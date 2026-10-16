(function(){
  'use strict';

  const intensities = Object.freeze([
    { code:'A', label:'Trace', factor:0.22 },
    { code:'B', label:'Slight', factor:0.40 },
    { code:'C', label:'Marked', factor:0.60 },
    { code:'D', label:'Strong', factor:0.80 },
    { code:'E', label:'Maximum', factor:1.00 }
  ]);

  const categories = Object.freeze([
    { id:'facial', label:'Facial actions' },
    { id:'gross-face', label:'Other facial / gross actions' },
    { id:'head', label:'Head movement' },
    { id:'eyes', label:'Eye movement' },
    { id:'visibility', label:'Visibility codes' },
    { id:'gross', label:'Gross behaviour' }
  ]);

  const units = Object.freeze([
    {code:'1',name:'Inner Brow Raiser',category:'facial',region:'Brow / forehead',muscles:'Frontalis (pars medialis)',movement:'Raises the inner portion of the brow.',intensity:true,laterality:true,render:'browInnerRaise'},
    {code:'2',name:'Outer Brow Raiser',category:'facial',region:'Brow / forehead',muscles:'Frontalis (pars lateralis)',movement:'Raises the outer portion of the brow.',intensity:true,laterality:true,render:'browOuterRaise'},
    {code:'4',name:'Brow Lowerer',category:'facial',region:'Brow / forehead',muscles:'Corrugator supercilii; depressor supercilii; procerus / depressor glabellae',movement:'Lowers and draws the brows inward.',intensity:true,laterality:true,render:'browLower'},
    {code:'5',name:'Upper Lid Raiser',category:'facial',region:'Eyes',muscles:'Levator palpebrae superioris',movement:'Raises the upper eyelid, increasing the visible eye aperture.',intensity:true,laterality:true,render:'upperLidRaise'},
    {code:'6',name:'Cheek Raiser',category:'facial',region:'Cheeks / eyes',muscles:'Orbicularis oculi (pars orbitalis)',movement:'Raises the cheeks and changes the lower-eye contour.',intensity:true,laterality:true,render:'cheekRaise'},
    {code:'7',name:'Lid Tightener',category:'facial',region:'Eyes',muscles:'Orbicularis oculi (pars palpebralis)',movement:'Tightens the eyelids and narrows the eye aperture.',intensity:true,laterality:true,render:'lidTighten'},
    {code:'8',name:'Lips Toward Each Other',category:'facial',region:'Mouth',muscles:'Orbicularis oris',movement:'Moves the lips toward each other.',intensity:true,laterality:false,render:'lipsTogether'},
    {code:'9',name:'Nose Wrinkler',category:'facial',region:'Nose',muscles:'Levator labii superioris alaeque nasi',movement:'Wrinkles the nose and raises tissue around the nasal bridge.',intensity:true,laterality:true,render:'noseWrinkle'},
    {code:'10',name:'Upper Lip Raiser',category:'facial',region:'Upper lip',muscles:'Levator labii superioris',movement:'Raises the upper lip.',intensity:true,laterality:true,render:'upperLipRaise'},
    {code:'11',name:'Nasolabial Deepener',category:'facial',region:'Mid-face',muscles:'Zygomaticus minor',movement:'Deepens the nasolabial furrow.',intensity:true,laterality:true,render:'nasolabialDeepen'},
    {code:'12',name:'Lip Corner Puller',category:'facial',region:'Mouth corners',muscles:'Zygomaticus major',movement:'Pulls the lip corners upward and outward.',intensity:true,laterality:true,render:'cornerPull'},
    {code:'13',name:'Sharp Lip Puller',category:'facial',region:'Mouth corners',muscles:'Levator anguli oris',movement:'Pulls the lip corner sharply upward.',intensity:true,laterality:true,render:'sharpCornerPull'},
    {code:'14',name:'Dimpler',category:'facial',region:'Mouth corners / cheeks',muscles:'Buccinator',movement:'Tightens the lip corner laterally and can produce a dimple-like indentation.',intensity:true,laterality:true,render:'dimpler'},
    {code:'15',name:'Lip Corner Depressor',category:'facial',region:'Mouth corners',muscles:'Depressor anguli oris',movement:'Pulls the lip corners downward.',intensity:true,laterality:true,render:'cornerDepress'},
    {code:'16',name:'Lower Lip Depressor',category:'facial',region:'Lower lip',muscles:'Depressor labii inferioris',movement:'Pulls the lower lip downward.',intensity:true,laterality:true,render:'lowerLipDepress'},
    {code:'17',name:'Chin Raiser',category:'facial',region:'Chin / lower lip',muscles:'Mentalis',movement:'Raises the chin and pushes the lower lip upward.',intensity:true,laterality:false,render:'chinRaise'},
    {code:'18',name:'Lip Pucker',category:'facial',region:'Lips',muscles:'Incisivii labii superioris and inferioris',movement:'Puckers the lips forward.',intensity:true,laterality:false,render:'lipPucker'},
    {code:'19',name:'Tongue Show',category:'facial',region:'Mouth / tongue',muscles:'Not specified in the public FACS summary',movement:'Tongue becomes visibly exposed.',intensity:false,laterality:false,render:'tongueShow'},
    {code:'20',name:'Lip Stretcher',category:'facial',region:'Mouth',muscles:'Risorius with platysma',movement:'Stretches the lips horizontally.',intensity:true,laterality:true,render:'lipStretch'},
    {code:'21',name:'Neck Tightener',category:'facial',region:'Neck',muscles:'Platysma',movement:'Tightens visible tissue in the neck.',intensity:true,laterality:false,render:'neckTighten'},
    {code:'22',name:'Lip Funneler',category:'facial',region:'Lips',muscles:'Orbicularis oris',movement:'Funnels the lips outward.',intensity:true,laterality:false,render:'lipFunnel'},
    {code:'23',name:'Lip Tightener',category:'facial',region:'Lips',muscles:'Orbicularis oris',movement:'Tightens the lips.',intensity:true,laterality:true,render:'lipTighten'},
    {code:'24',name:'Lip Pressor',category:'facial',region:'Lips',muscles:'Orbicularis oris',movement:'Presses the lips together.',intensity:true,laterality:true,render:'lipPress'},
    {code:'25',name:'Lips Part',category:'facial',region:'Mouth',muscles:'Lower-face relaxation / depressor labii inferioris contribution',movement:'Separates the lips.',intensity:true,laterality:false,render:'lipsPart'},
    {code:'26',name:'Jaw Drop',category:'facial',region:'Jaw / mouth',muscles:'Jaw opening with relaxation of closing musculature',movement:'Drops the jaw, opening the mouth.',intensity:true,laterality:false,render:'jawDrop'},
    {code:'27',name:'Mouth Stretch',category:'facial',region:'Jaw / mouth',muscles:'Pterygoids; digastric',movement:'Stretches the mouth open more strongly.',intensity:true,laterality:false,render:'mouthStretch'},
    {code:'28',name:'Lip Suck',category:'facial',region:'Lips',muscles:'Orbicularis oris',movement:'Draws the lips inward between or toward the teeth.',intensity:true,laterality:true,render:'lipSuck'},

    {code:'29',name:'Jaw Thrust',category:'gross-face',region:'Jaw',muscles:'Not specified as a single-muscle action',movement:'Thrusts the jaw forward.',intensity:false,laterality:false,render:'jawThrust'},
    {code:'30',name:'Jaw Sideways',category:'gross-face',region:'Jaw',muscles:'Not specified as a single-muscle action',movement:'Moves the jaw laterally.',intensity:false,laterality:false,render:'jawSideways'},
    {code:'31',name:'Jaw Clencher',category:'gross-face',region:'Jaw',muscles:'Masseter',movement:'Clenches the jaw.',intensity:false,laterality:false,render:'jawClench'},
    {code:'32',name:'Lip Bite',category:'gross-face',region:'Lips / teeth',muscles:'Not specified as a single-muscle action',movement:'Bites the lip.',intensity:false,laterality:true,render:'lipBite'},
    {code:'33',name:'Cheek Blow',category:'gross-face',region:'Cheek',muscles:'Not specified as a single-muscle action',movement:'Blows air using the cheek / mouth configuration.',intensity:false,laterality:true,render:'cheekBlow'},
    {code:'34',name:'Cheek Puff',category:'gross-face',region:'Cheeks',muscles:'Not specified as a single-muscle action',movement:'Puffs the cheek outward.',intensity:false,laterality:true,render:'cheekPuff'},
    {code:'35',name:'Cheek Suck',category:'gross-face',region:'Cheeks',muscles:'Not specified as a single-muscle action',movement:'Draws the cheek inward.',intensity:false,laterality:true,render:'cheekSuck'},
    {code:'36',name:'Tongue Bulge',category:'gross-face',region:'Mouth / cheek',muscles:'Not specified as a single-muscle action',movement:'Tongue pressure creates a visible bulge.',intensity:false,laterality:true,render:'tongueBulge'},
    {code:'37',name:'Lip Wipe',category:'gross-face',region:'Lips',muscles:'Not specified as a single-muscle action',movement:'Wipes or passes the lips against each other.',intensity:false,laterality:false,render:null},
    {code:'38',name:'Nostril Dilator',category:'gross-face',region:'Nostrils',muscles:'Nasalis (pars alaris)',movement:'Widens the nostrils.',intensity:true,laterality:true,render:'nostrilDilate'},
    {code:'39',name:'Nostril Compressor',category:'gross-face',region:'Nostrils',muscles:'Nasalis (pars transversa); depressor septi nasi',movement:'Compresses / narrows the nostrils.',intensity:true,laterality:true,render:'nostrilCompress'},
    {code:'40',name:'Sniff',category:'gross',region:'Nose / respiration',muscles:'Gross behaviour code',movement:'Records a sniffing behaviour.',intensity:false,laterality:false,render:'sniff'},
    {code:'41',name:'Lid Droop',category:'gross-face',region:'Eyes',muscles:'Levator palpebrae superioris relaxation',movement:'Allows the upper eyelid to droop.',intensity:true,laterality:true,render:'lidDroop'},
    {code:'42',name:'Slit',category:'gross-face',region:'Eyes',muscles:'Orbicularis oculi',movement:'Narrows the eye opening to a slit.',intensity:true,laterality:true,render:'eyeSlit'},
    {code:'43',name:'Eyes Closed',category:'gross-face',region:'Eyes',muscles:'Levator palpebrae superioris relaxation',movement:'Closes the eyes.',intensity:false,laterality:true,render:'eyesClosed'},
    {code:'44',name:'Squint',category:'gross-face',region:'Eyes / brow',muscles:'Corrugator supercilii; orbicularis oculi',movement:'Squints the eyes.',intensity:true,laterality:true,render:'squint'},
    {code:'45',name:'Blink',category:'gross-face',region:'Eyes',muscles:'Orbicularis oculi with upper-lid relaxation',movement:'Records a blink.',intensity:false,laterality:false,render:'blink'},
    {code:'46',name:'Wink',category:'gross-face',region:'Eyes',muscles:'Orbicularis oculi',movement:'Closes one eye in a wink.',intensity:false,laterality:true,render:'wink'},
    {code:'50',name:'Speech',category:'gross',region:'Mouth / behaviour',muscles:'Gross behaviour code',movement:'Records speech occurring during facial coding.',intensity:false,laterality:false,render:null},

    {code:'51',name:'Head Turn Left',category:'head',region:'Head',muscles:'Head-position code',movement:'Turns the head to the left.',intensity:false,laterality:false,render:'headLeft'},
    {code:'52',name:'Head Turn Right',category:'head',region:'Head',muscles:'Head-position code',movement:'Turns the head to the right.',intensity:false,laterality:false,render:'headRight'},
    {code:'53',name:'Head Up',category:'head',region:'Head',muscles:'Head-position code',movement:'Moves / angles the head upward.',intensity:false,laterality:false,render:'headUp'},
    {code:'54',name:'Head Down',category:'head',region:'Head',muscles:'Head-position code',movement:'Moves / angles the head downward.',intensity:false,laterality:false,render:'headDown'},
    {code:'55',name:'Head Tilt Left',category:'head',region:'Head',muscles:'Head-position code',movement:'Tilts the head left.',intensity:false,laterality:false,render:'headTiltLeft'},
    {code:'56',name:'Head Tilt Right',category:'head',region:'Head',muscles:'Head-position code',movement:'Tilts the head right.',intensity:false,laterality:false,render:'headTiltRight'},
    {code:'57',name:'Head Forward',category:'head',region:'Head',muscles:'Head-position code',movement:'Moves the head forward.',intensity:false,laterality:false,render:'headForward'},
    {code:'58',name:'Head Back',category:'head',region:'Head',muscles:'Head-position code',movement:'Moves the head back.',intensity:false,laterality:false,render:'headBack'},

    {code:'61',name:'Eyes Turn Left',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Moves gaze to the left.',intensity:false,laterality:false,render:'eyesLeft'},
    {code:'62',name:'Eyes Turn Right',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Moves gaze to the right.',intensity:false,laterality:false,render:'eyesRight'},
    {code:'63',name:'Eyes Up',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Moves gaze upward.',intensity:false,laterality:false,render:'eyesUp'},
    {code:'64',name:'Eyes Down',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Moves gaze downward.',intensity:false,laterality:false,render:'eyesDown'},
    {code:'65',name:'Walleye',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Positions the eyes outward from one another.',intensity:false,laterality:false,render:'eyesOut'},
    {code:'66',name:'Cross-eye',category:'eyes',region:'Eyes / gaze',muscles:'Eye-position code',movement:'Positions the eyes inward toward one another.',intensity:false,laterality:false,render:'eyesIn'},
    {code:'69',name:'Eyes Positioned to Look at Other Person',category:'eyes',region:'Eyes / interaction',muscles:'Context / eye-position code',movement:'Records gaze positioned toward the other person in an interaction.',intensity:false,laterality:false,render:null},

    {code:'70',name:'Brows and Forehead Not Visible',category:'visibility',region:'Visibility',muscles:'Visibility code',movement:'Marks the brows and forehead as not visible for coding.',intensity:false,laterality:false,render:'maskForehead'},
    {code:'71',name:'Eyes Not Visible',category:'visibility',region:'Visibility',muscles:'Visibility code',movement:'Marks the eyes as not visible for coding.',intensity:false,laterality:false,render:'maskEyes'},
    {code:'72',name:'Lower Face Not Visible',category:'visibility',region:'Visibility',muscles:'Visibility code',movement:'Marks the lower face as not visible for coding.',intensity:false,laterality:false,render:'maskLower'},
    {code:'73',name:'Entire Face Not Visible',category:'visibility',region:'Visibility',muscles:'Visibility code',movement:'Marks the entire face as not visible for coding.',intensity:false,laterality:false,render:'maskFace'},
    {code:'74',name:'Unscorable',category:'visibility',region:'Visibility',muscles:'Visibility / coding-status code',movement:'Marks the facial material as unscorable.',intensity:false,laterality:false,render:'unscorable'},

    {code:'80',name:'Swallow',category:'gross',region:'Throat / behaviour',muscles:'Gross behaviour code',movement:'Records swallowing.',intensity:false,laterality:false,render:'swallow'},
    {code:'81',name:'Chewing',category:'gross',region:'Jaw / behaviour',muscles:'Gross behaviour code',movement:'Records chewing.',intensity:false,laterality:false,render:'chewing'},
    {code:'82',name:'Shoulder Shrug',category:'gross',region:'Shoulders / behaviour',muscles:'Gross behaviour code',movement:'Records a shoulder shrug.',intensity:false,laterality:false,render:'shoulderShrug'},
    {code:'84',name:'Head Shake Back and Forth',category:'gross',region:'Head / behaviour',muscles:'Gross behaviour code',movement:'Records a side-to-side head shake.',intensity:false,laterality:false,render:'headShake'},
    {code:'85',name:'Head Nod Up and Down',category:'gross',region:'Head / behaviour',muscles:'Gross behaviour code',movement:'Records an up-and-down head nod.',intensity:false,laterality:false,render:'headNod'},
    {code:'91',name:'Flash',category:'gross',region:'Behaviour',muscles:'Gross behaviour code',movement:'Records the FACS gross-behaviour code labelled Flash.',intensity:false,laterality:false,render:null},
    {code:'92',name:'Partial Flash',category:'gross',region:'Behaviour',muscles:'Gross behaviour code',movement:'Records the FACS gross-behaviour code labelled Partial Flash.',intensity:false,laterality:false,render:null},
    {code:'97',name:'Shiver / Tremble',category:'gross',region:'Behaviour',muscles:'Gross behaviour code',movement:'Records visible shivering or trembling.',intensity:false,laterality:false,render:'tremble'},
    {code:'98',name:'Fast Up-Down Look',category:'gross',region:'Eyes / behaviour',muscles:'Gross behaviour code',movement:'Records a rapid up-and-down gaze movement.',intensity:false,laterality:false,render:'fastLook'}
  ]);

  window.BASELINE_FACS = Object.freeze({ intensities, categories, units });
})();