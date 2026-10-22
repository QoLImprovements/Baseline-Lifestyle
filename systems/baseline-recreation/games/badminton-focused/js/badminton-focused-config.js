export const GAMES=Object.freeze([
 {id:'read-racket',name:'Read the Racket',skill:'Anticipation and racket-face reading',intention:'Train recognition of useful pre-contact information from racket angle, contact point, shoulders and body position.',how:'Study the frozen stroke picture, then predict the shot or direction. Accuracy matters more than raw speed.'},
 {id:'shuttle-first',name:'Shuttle First',skill:'Selective attention and shuttle tracking',intention:'Track the realistic shuttlecock while ignoring irrelevant movement and identify its true landing area.',how:'Start the flight, follow the shuttle rather than the distractors, then choose the landing zone after it disappears.'},
 {id:'wait-contact',name:'Wait for Contact',skill:'Reaction control and correct commitment timing',intention:'Practise withholding a movement decision until the actual shuttle-contact cue appears.',how:'Begin the stroke. Choosing a direction before contact is a premature commitment and is penalised.'},
 {id:'court-recovery',name:'Court Recovery',skill:'Recovery position and court balance',intention:'Choose the strongest recovery position from the shot played, opponent position and available replies.',how:'Read the court situation and select the tactical recovery zone. The geometric centre is not always strongest.'},
 {id:'four-corner',name:'Four-Corner Awareness',skill:'Peripheral awareness and stable visual centre',intention:'Maintain central attention while brief court signals appear in the periphery.',how:'Keep your eyes around the central fixation point, remember the brief signal and choose the matching movement zone.'},
 {id:'shot-choice',name:'Shot Choice',skill:'Tactical judgement',intention:'Recognise when the situation calls for attack, construction, neutralisation or defence.',how:'Read the complete rally situation and choose the strongest shot, not automatically the most aggressive one.'},
 {id:'deception-filter',name:'Deception Filter',skill:'Reliable cues versus deceptive preparation',intention:'Separate useful racket-contact information from misleading body, shoulder and head movement.',how:'Choose whether to commit, remain neutral or keep waiting. Fast guesses are not automatically rewarded.'},
 {id:'rally-pattern',name:'Rally Pattern Detective',skill:'Pattern recognition and probabilistic anticipation',intention:'Identify emerging tendencies without treating a pattern as certainty.',how:'Study the shot sequence and choose the most reasonable next expectation or protection priority.'},
 {id:'badminton-reset',name:'The Badminton Reset',skill:'Emotional reset and next-rally attention',intention:'Return attention to the next cue after success, failure, surprise or frustration.',how:'Read the previous outcome, use the reset cue, then identify the next-rally signal accurately.'},
 {id:'tempo-break',name:'Tempo Break',skill:'Timing flexibility',intention:'Respond to actual contact timing when rhythm changes, pauses or accelerates.',how:'Press Contact only when the cue changes to contact. Early rhythm-based guessing and late responses are recorded.'},
 {id:'landing-picture',name:'Landing Picture',skill:'Court mapping and spatial precision',intention:'Hold an internal picture of a target landing area after it disappears.',how:'Study the highlighted court zone, wait through the delay, then select the remembered location.'},
 {id:'pressure-ladder',name:'Pressure Ladder',skill:'Decision quality under pressure',intention:'Maintain structured decisions as viewing time and consequence increase.',how:'Answer mixed tactical situations through five pressure levels. Correct decisions move you upward.'},
 {id:'attack-purpose',name:'Attack, Neutralise or Defend',skill:'Tactical purpose before shot selection',intention:'Classify what the rally needs before choosing a technically possible shot.',how:'First choose the tactical purpose. Then choose a shot that actually serves that purpose.'},
 {id:'opponent-balance',name:'Opponent Balance',skill:'Opponent movement and imbalance reading',intention:'Look beyond empty court space and use momentum, racket position and balance.',how:'Read the opponent state and choose the area or shot that is hardest for them to cover safely.'},
 {id:'decision-recovery',name:'Decision Recovery',skill:'Rapid correction after a wrong read',intention:'Reward strong second decisions rather than demanding perfect prediction.',how:'Your first plan has failed. Choose the best available correction and reduce the damage.'}
]);

export const TIERS=Object.freeze([
 {id:1,name:'Foundation',unlock:1,description:'Clear scenes, longer viewing time and direct tactical contrasts.'},
 {id:2,name:'Match',unlock:3,description:'Shorter cues, deceptive information and more similar choices.'},
 {id:3,name:'Pressure',unlock:6,description:'Earlier visual cut-offs, reduced time and greater uncertainty.'}
]);

export const ZONES=Object.freeze(['Front left','Front right','Mid left','Mid right','Rear left','Rear right']);

export const ZONE_COORDS=Object.freeze({
 'Front left':Object.freeze([23,27]),
 'Front right':Object.freeze([77,27]),
 'Mid left':Object.freeze([23,50]),
 'Mid right':Object.freeze([77,50]),
 'Rear left':Object.freeze([23,73]),
 'Rear right':Object.freeze([77,73]),
 'Centre':Object.freeze([50,50]),
 'Near centre left':Object.freeze([40,55]),
 'Near centre right':Object.freeze([60,55])
});
