import {
  DARTBOARD_ORDER,
  GAME_IDS,
  accuracyFor,
  anticlockwiseNeighbour,
  arraysEqual,
  averageResponseMs,
  calibrationScore,
  clockwiseNeighbour,
  createDefaultDartsProfile,
  dartsGameXpNeededForLevel,
  dartsXpNeededForLevel,
  normaliseDartsProfile,
  normaliseTargetCode,
  oppositeSegment,
  recordResult,
  realmContributionForDarts,
  remainingAfterHit,
  sameSet,
  scoreTarget,
  seededPick
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';

const BUILD = 'DARTS_REBUILD_20260707_4';
const STORAGE_KEY = '__bl_darts_focused_v1__';
const LEGACY_STORAGE_KEY = '__bl_darts_focused_v2__';
const STYLE_URL = `/systems/baseline-games-hub/games/darts-focused/css/darts-focused.css?v=${BUILD}`;
const ART_URL = '/systems/baseline-games-hub/games/darts-focused/art/realistic-dartboard.svg';

const GAMES = Object.freeze([
  { id:'checkout-pressure', name:'Checkout Under Pressure', intention:'Develops checkout calculation, route commitment and clear decisions while match pressure is visible.', how:'Read the imagined match state and choose the legal checkout route. The higher tiers use less familiar scores and tighter time windows.' },
  { id:'route-recovery', name:'Route Recovery', intention:'Develops accurate recalculation after the first dart lands somewhere unexpected.', how:'Read the starting score, the actual hit and the points scored. Check the displayed subtraction, then choose a legal route for the new remaining score.' },
  { id:'target-lock', name:'Target Lock', intention:'Develops precise visual attention and commitment to one exact scoring segment despite interference.', how:'Study the highlighted scoring area. After it disappears, click the same ring and number on the board.' },
  { id:'hold-picture', name:'Hold the Picture', intention:'Develops visual memory for target position, ring and number.', how:'Study one highlighted target, hold its position in mind, then identify it after the board picture is veiled.' },
  { id:'distraction-resistance', name:'Distraction Resistance', intention:'Develops working memory and the ability to preserve relevant match information while ignoring noise.', how:'Memorise the instruction while irrelevant notices move around it, then answer a question about the original instruction.' },
  { id:'pressure-ladder', name:'Pressure Ladder', intention:'Develops stable calculation as time pressure and perceived consequence increase.', how:'Complete route decisions through five pressure levels. Correct answers move the ladder upward; errors move it downward.' },
  { id:'board-geography', name:'Board Geography', intention:'Develops fast knowledge of clockwise, anticlockwise and opposite board relationships.', how:'Read the relationship prompt and click the correct number on the dartboard.' },
  { id:'routine-builder', name:'Routine Builder', intention:'Develops several repeatable pre-throw and recovery routines rather than memorising one fixed question.', how:'Read the current routine objective, arrange its steps in a stable order, and submit the sequence.' },
  { id:'sequence-recall', name:'Sequence Recall', intention:'Develops working memory for ordered target plans and changing visit sequences.', how:'Watch clearly labelled targets appear one at a time, then reproduce the exact order by clicking the board.' },
  { id:'decision-training', name:'Decision Training', intention:'Combines the former repeated quiz games into one category-based training system with substantial question pools.', how:'Choose a category, complete its short series, review each answer, then return automatically to the category list and choose another topic.' }
]);

const TIER_DEFINITIONS = Object.freeze([
  { id:1, name:'Foundation', unlockLevel:1, description:'Clear prompts, longer viewing time and core board knowledge.' },
  { id:2, name:'Match', unlockLevel:3, description:'Less familiar routes, more interference and longer sequences.' },
  { id:3, name:'Pressure', unlockLevel:6, description:'Faster recall, denser information and harder decisions.' }
]);

const CHECKOUT_SCENARIOS = Object.freeze([
  { key:'c100', tier:1, score:100, darts:2, opponent:40, correct:'T20 → D20', options:['T20 → D20','D20 → T20','T20 → D18','T18 → D20'], explanation:'T20 scores 60 and leaves 40; D20 then finishes legally.' },
  { key:'c76', tier:1, score:76, darts:2, opponent:32, correct:'T20 → D8', options:['T20 → D8','T18 → D10','T20 → D7','D20 → D17'], explanation:'T20 leaves 16, and D8 completes the checkout.' },
  { key:'c64', tier:1, score:64, darts:2, opponent:24, correct:'T16 → D8', options:['T16 → D8','T18 → D4','T16 → D7','D20 → D11'], explanation:'T16 scores 48 and leaves 16 for D8.' },
  { key:'c52', tier:1, score:52, darts:2, opponent:40, correct:'S12 → D20', options:['S12 → D20','S10 → D20','T12 → D7','S20 → D15'], explanation:'S12 leaves the familiar D20 finish.' },
  { key:'c68', tier:2, score:68, darts:2, opponent:36, correct:'T20 → D4', options:['T20 → D4','T18 → D6','T16 → D9','T20 → D5'], explanation:'T20 scores 60 and leaves 8 for D4.' },
  { key:'c81', tier:2, score:81, darts:2, opponent:52, correct:'T19 → D12', options:['T19 → D12','T20 → D10','T17 → D14','T15 → D17'], explanation:'T19 scores 57 and leaves 24 for D12.' },
  { key:'c92', tier:2, score:92, darts:2, opponent:64, correct:'T20 → D16', options:['T20 → D16','T18 → D18','T20 → D15','T19 → D17'], explanation:'T20 leaves 32, which is D16.' },
  { key:'c110', tier:2, score:110, darts:2, opponent:80, correct:'T20 → BULL', options:['T20 → BULL','T20 → D20','T18 → D20','BULL → D20'], explanation:'T20 leaves 50, and BULL is the double-value bull finish.' },
  { key:'c101', tier:3, score:101, darts:2, opponent:40, correct:'T17 → BULL', options:['T17 → BULL','T20 → D20','T19 → D20','T15 → D18'], explanation:'T17 scores 51 and leaves 50 for BULL.' },
  { key:'c104', tier:3, score:104, darts:2, opponent:32, correct:'T18 → BULL', options:['T18 → BULL','T20 → D20','T16 → D18','T19 → D20'], explanation:'T18 scores 54 and leaves 50 for BULL.' },
  { key:'c86', tier:3, score:86, darts:2, opponent:24, correct:'T18 → D16', options:['T18 → D16','T20 → D12','T16 → D18','T20 → D14'], explanation:'T18 scores 54 and leaves 32 for D16.' },
  { key:'c94', tier:3, score:94, darts:2, opponent:40, correct:'T18 → D20', options:['T18 → D20','T20 → D16','T16 → D20','T19 → D18'], explanation:'T18 scores 54 and leaves 40 for D20.' }
]);

const RECOVERY_SCENARIOS = Object.freeze([
  { key:'r100s5', tier:1, start:100, intended:'T20', actual:'S5', dartsLeft:2, correct:'T19 → D19', options:['T19 → D19','T20 → D18','T19 → D18','T17 → D20'], explanation:'S5 means single 5: 100 − 5 = 95. T19 scores 57 and leaves 38 for D19.' },
  { key:'r86s18', tier:1, start:86, intended:'T18', actual:'S18', dartsLeft:2, correct:'T20 → D4', options:['T20 → D4','T18 → D6','T16 → D9','T20 → D5'], explanation:'S18 scores 18: 86 − 18 = 68. T20 leaves 8 for D4.' },
  { key:'r82s1', tier:1, start:82, intended:'BULL', actual:'S1', dartsLeft:2, correct:'T19 → D12', options:['T19 → D12','T20 → D10','T17 → D14','T15 → D17'], explanation:'S1 scores 1: 82 − 1 = 81. T19 leaves 24 for D12.' },
  { key:'r70s18', tier:1, start:70, intended:'T18', actual:'S18', dartsLeft:2, correct:'S12 → D20', options:['S12 → D20','S10 → D20','T12 → D7','S20 → D15'], explanation:'S18 scores 18: 70 − 18 = 52. S12 leaves 40 for D20.' },
  { key:'r101s1', tier:2, start:101, intended:'T17', actual:'S1', dartsLeft:2, correct:'T20 → D20', options:['T20 → D20','T18 → D20','T20 → D18','T19 → D20'], explanation:'S1 scores 1: 101 − 1 = 100. T20 leaves 40 for D20.' },
  { key:'r96s20', tier:2, start:96, intended:'T20', actual:'S20', dartsLeft:2, correct:'T20 → D8', options:['T20 → D8','T18 → D10','T20 → D7','D20 → D17'], explanation:'S20 scores 20: 96 − 20 = 76. T20 leaves 16 for D8.' },
  { key:'r100t1', tier:2, start:100, intended:'T20', actual:'T1', dartsLeft:2, correct:'T19 → D20', options:['T19 → D20','T20 → D18','T18 → D20','T17 → D20'], explanation:'T1 scores 3: 100 − 3 = 97. T19 leaves 40 for D20.' },
  { key:'r110s20', tier:2, start:110, intended:'T20', actual:'S20', dartsLeft:2, correct:'T18 → D18', options:['T18 → D18','T20 → D14','T16 → D20','T19 → D16'], explanation:'S20 scores 20: 110 − 20 = 90. T18 leaves 36 for D18.' },
  { key:'r121s20', tier:3, start:121, intended:'T20', actual:'S20', dartsLeft:2, correct:'T17 → BULL', options:['T17 → BULL','T20 → D20','T19 → D20','T15 → D18'], explanation:'S20 scores 20: 121 − 20 = 101. T17 leaves 50 for BULL.' },
  { key:'r104s4', tier:3, start:104, intended:'T18', actual:'S4', dartsLeft:2, correct:'T20 → D20', options:['T20 → D20','T18 → D20','T20 → D18','T19 → D20'], explanation:'S4 scores 4: 104 − 4 = 100. T20 leaves 40 for D20.' },
  { key:'r112s12', tier:3, start:112, intended:'T20', actual:'S12', dartsLeft:2, correct:'T20 → D20', options:['T20 → D20','T18 → D20','T20 → D18','T19 → D20'], explanation:'S12 scores 12: 112 − 12 = 100. T20 leaves 40 for D20.' },
  { key:'r105s5', tier:3, start:105, intended:'T20', actual:'S5', dartsLeft:2, correct:'T20 → D20', options:['T20 → D20','T18 → D20','T20 → D18','T19 → D20'], explanation:'S5 scores 5: 105 − 5 = 100. T20 leaves 40 for D20.' }
]);

const TARGETS_BY_TIER = Object.freeze({
  1:['S20','S19','D16','D8','T20','T19'],
  2:['T20','D16','T19','D8','T18','D12','T17','S20','S19','D10'],
  3:['T20','D16','T19','D8','T18','D12','T17','S20','S19','D10','BULL','25','T15','D6']
});

const DISTRACTION_MISSIONS = Object.freeze([
  { key:'d1', tier:1, facts:{ score:'62', primary:'T10', fallback:'S10 then D16', reset:'Line' }, question:'What was the primary target?', correct:'T10', options:['T10','T12','D16','T20'] },
  { key:'d2', tier:1, facts:{ score:'81', primary:'T19', fallback:'S19 then T12', reset:'Settle' }, question:'What was the reset word?', correct:'Settle', options:['Settle','Line','Release','Hold'] },
  { key:'d3', tier:1, facts:{ score:'100', primary:'T20', fallback:'S20 then T16', reset:'Next' }, question:'What fallback was specified?', correct:'S20 then T16', options:['S20 then T16','S20 then D20','T20 then D20','S1 then T19'] },
  { key:'d4', tier:1, facts:{ score:'76', primary:'T20', fallback:'S20 then S16', reset:'Still' }, question:'What score was being considered?', correct:'76', options:['76','64','86','96'] },
  { key:'d5', tier:2, facts:{ score:'92', primary:'T20', fallback:'S20 then T18', reset:'Centre' }, question:'What was the fallback first dart?', correct:'S20', options:['S20','T20','T18','S18'] },
  { key:'d6', tier:2, facts:{ score:'68', primary:'T20', fallback:'S20 then S8', reset:'Quiet' }, question:'What was the reset word?', correct:'Quiet', options:['Quiet','Centre','Line','Next'] },
  { key:'d7', tier:2, facts:{ score:'101', primary:'T17', fallback:'S17 then T20', reset:'Commit' }, question:'What was the primary target?', correct:'T17', options:['T17','T19','T20','BULL'] },
  { key:'d8', tier:2, facts:{ score:'110', primary:'T20', fallback:'S20 then T20', reset:'Exact' }, question:'What fallback was specified?', correct:'S20 then T20', options:['S20 then T20','T20 then BULL','S20 then D20','T18 then D20'] },
  { key:'d9', tier:3, facts:{ score:'121', primary:'T19', fallback:'S19 then T17', reset:'Present' }, question:'What was the score?', correct:'121', options:['121','101','112','125'] },
  { key:'d10', tier:3, facts:{ score:'104', primary:'T18', fallback:'S18 then T18', reset:'Anchor' }, question:'What was the primary target?', correct:'T18', options:['T18','T20','T17','BULL'] },
  { key:'d11', tier:3, facts:{ score:'86', primary:'T18', fallback:'S18 then T20', reset:'Single task' }, question:'What was the reset phrase?', correct:'Single task', options:['Single task','Next dart','Hold line','Quiet release'] },
  { key:'d12', tier:3, facts:{ score:'95', primary:'T19', fallback:'S19 then T20', reset:'Recalculate' }, question:'What fallback first dart was named?', correct:'S19', options:['S19','T19','S20','T20'] }
]);

const ROUTINE_SCENARIOS = Object.freeze([
  { key:'routine-visit', tier:1, title:'Start a new scoring visit', correct:['Confirm score and darts','Choose the route','Select one exact target','Settle attention and breathing','Commit to the next action'] },
  { key:'routine-checkout', tier:1, title:'Prepare for a checkout visit', correct:['Read the exact remaining score','Confirm darts available','Choose one legal route','Select the first target','Settle and commit'] },
  { key:'routine-after-miss', tier:1, title:'Reset after an unexpected first dart', correct:['Accept the actual hit','Recalculate the remaining score','Choose the revised route','Select the next exact target','Commit without replaying the miss'] },
  { key:'routine-interruption', tier:2, title:'Restore the routine after a sudden interruption', correct:['Pause the throw','Reconfirm score and darts','Recheck the route','Settle the eyes on one target','Restart the action cleanly'] },
  { key:'routine-pressure', tier:2, title:'Prepare while the opponent is on a finish', correct:['Keep the opponent outside the calculation','Confirm your own score','Choose the legal route','Set one exact target','Use one controlled breath','Commit'] },
  { key:'routine-double', tier:2, title:'Prepare for a single dart at a double', correct:['Confirm the required double','Place the visual aim point','Set stance and alignment','Release without adding force','Stay balanced through the throw'] },
  { key:'routine-bust', tier:3, title:'Recover after a bust visit', correct:['End the previous visit mentally','Confirm the restored score','Choose the next visit route','Select the opening target','Settle breathing and posture','Commit to the new visit'] },
  { key:'routine-decider', tier:3, title:'Prepare for a deciding-leg visit', correct:['Notice pressure without obeying it','Confirm score and darts','Choose the route','Select one exact target','Settle the body','Commit to the present dart'] }
]);

const DECISION_CATEGORIES = Object.freeze([
  { id:'mental-reset', name:'Mental Reset', summary:'Recover attention after misses, noise and frustration.' },
  { id:'evidence-reading', name:'Evidence Reading', summary:'Read dart patterns without inventing causes.' },
  { id:'relevant-information', name:'Relevant Information', summary:'Separate calculation inputs from emotional noise.' },
  { id:'impulse-control', name:'Impulse Control', summary:'Choose disciplined actions under temptation and time pressure.' },
  { id:'confidence-calibration', name:'Confidence Calibration', summary:'Compare confidence with actual correctness.' },
  { id:'pace-control', name:'Pace Control', summary:'Compare deliberate and faster decisions with usable time limits.' }
]);

const MENTAL_RESET_QUESTIONS = Object.freeze([
  { key:'mr1', tier:1, prompt:'First dart: T20. Second dart: S1. One dart remains.', correct:'Return the eyes to the next exact target and recommit.', options:['Return the eyes to the next exact target and recommit.','Replay the S1 and diagnose the arm immediately.','Throw the last dart harder to recover the score.','Think about how much the visit has already cost.'], explanation:'The useful response acknowledges the miss and redirects attention to the next controllable task.' },
  { key:'mr2', tier:1, prompt:'You miss outside D16 and still have one dart at D8.', correct:'Use one controlled breath, select D8 precisely, and continue.', options:['Use one controlled breath, select D8 precisely, and continue.','Pretend the miss did not happen.','Change doubles without calculation.','Rush before disappointment increases.'], explanation:'Containment means returning force to the next exact action, not denying the miss.' },
  { key:'mr3', tier:1, prompt:'An opponent reacts loudly after your first dart enters S5 instead of T20.', correct:'Keep the reaction outside the task and calculate from the actual score.', options:['Keep the reaction outside the task and calculate from the actual score.','Respond to the opponent before continuing.','Repeat the original route as though S5 were T20.','Abandon calculation and choose the largest segment.'], explanation:'Reality-based recalculation prevents the reaction and miss from controlling the visit.' },
  { key:'mr4', tier:1, prompt:'Your first dart bounces out and scores zero.', correct:'Confirm the unchanged score, choose the route again, and throw the next dart.', options:['Confirm the unchanged score, choose the route again, and throw the next dart.','Inspect the floor and replay the bounce-out repeatedly.','Increase force immediately.','Change the target without recalculating.'], explanation:'The score is unchanged; the task is to recalculate calmly and continue.' },
  { key:'mr5', tier:2, prompt:'You miss three doubles in the previous leg and now return on 40.', correct:'Treat 40 as the current task and aim at D20 without carrying the previous leg forward.', options:['Treat 40 as the current task and aim at D20 without carrying the previous leg forward.','Choose D10 because D20 now feels unsafe.','Throw quickly before doubt appears.','Think through all three previous misses before aiming.'], explanation:'The previous leg is information for later practice, not an instruction for the current dart.' },
  { key:'mr6', tier:2, prompt:'A scorer corrects your remaining score just before you throw.', correct:'Pause, accept the corrected score, calculate once, then restart the routine.', options:['Pause, accept the corrected score, calculate once, then restart the routine.','Argue while holding the throwing stance.','Use the route for the old score anyway.','Throw immediately to preserve rhythm.'], explanation:'A clean restart protects accuracy after relevant information changes.' },
  { key:'mr7', tier:3, prompt:'You lead comfortably, then throw a very poor visit.', correct:'Name the next score and target, then return to the same routine used before the poor visit.', options:['Name the next score and target, then return to the same routine used before the poor visit.','Try to win back the lost points in one dart.','Change technique mid-leg.','Slow down indefinitely until confidence returns.'], explanation:'Stable routines prevent one visit from changing the next task.' },
  { key:'mr8', tier:3, prompt:'The crowd becomes quiet at the exact moment you begin the throw.', correct:'Pause only if attention has broken; otherwise complete the already-set action.', options:['Pause only if attention has broken; otherwise complete the already-set action.','Always stop because silence is suspicious.','Speed up before the crowd changes again.','Look away from the target to check the room.'], explanation:'The response depends on whether the action was genuinely disrupted, not on the crowd itself.' },
{ key:'mr9', tier:1, prompt:'You aimed at T20 but the dart lands in S5. Two darts remain.', correct:'Accept S5, calculate the real remainder, and choose the next exact target.', options:['Accept S5, calculate the real remainder, and choose the next exact target.','Repeat T20 without checking the score.','Increase force to cancel the miss.','Stop the visit to analyse technique.'], explanation:'The miss changes the arithmetic, not the need for a clear next task.' },
  { key:'mr10', tier:1, prompt:'Two darts land loosely around the intended treble and one dart remains.', correct:'Settle the eyes on one precise target and complete the visit normally.', options:['Settle the eyes on one precise target and complete the visit normally.','Chase both previous darts visually.','Throw the last dart immediately.','Change stance during the visit.'], explanation:'A brief reset narrows attention back to the controllable final dart.' },
  { key:'mr11', tier:1, prompt:'The caller initially announces the wrong score and corrects it before your next dart.', correct:'Step back, confirm the corrected remainder, then restart the routine.', options:['Step back, confirm the corrected remainder, then restart the routine.','Use the route for the first call.','Argue while aiming.','Throw before the correction affects rhythm.'], explanation:'Relevant information changed, so a clean restart is more accurate than preserving momentum.' },
  { key:'mr12', tier:1, prompt:'Your first dart sits across the lower part of the target bed and partly blocks your preferred line.', correct:'Notice the obstruction, choose the clearest legal aim point, and recommit.', options:['Notice the obstruction, choose the clearest legal aim point, and recommit.','Pretend the first dart is not there.','Throw harder through the obstruction.','Abandon the calculated route.'], explanation:'Resetting includes updating the visual picture without overreacting.' },
  { key:'mr13', tier:1, prompt:'A practice partner comments on your elbow immediately before you throw.', correct:'Park the technical comment until practice review and return to the current target.', options:['Park the technical comment until practice review and return to the current target.','Change the elbow position during the match dart.','Ask for more technical detail at the oche.','Throw quickly before thinking.'], explanation:'Mid-action technical reconstruction usually disrupts the current task.' },
  { key:'mr14', tier:1, prompt:'You hit T20, then S20, and feel disappointed because the second dart missed the treble.', correct:'Calculate from the actual 80 scored and focus on the third-dart target.', options:['Calculate from the actual 80 scored and focus on the third-dart target.','Treat S20 as a failed visit.','Repeat the second throw mentally.','Aim at T20 with extra force.'], explanation:'The first two darts are completed facts; the third dart needs a fresh target.' },
  { key:'mr15', tier:1, prompt:'A short delay occurs while a fallen flight is moved from the floor.', correct:'Use the pause to confirm score and target, then begin the routine again.', options:['Use the pause to confirm score and target, then begin the routine again.','Hold the throwing stance throughout the delay.','Rush as soon as play resumes.','Change route because the rhythm was interrupted.'], explanation:'A deliberate restart is more stable than trying to preserve a broken rhythm.' },
  { key:'mr16', tier:1, prompt:'You miss a winning double, but the opponent then fails to finish.', correct:'Treat the new visit as a new opportunity and return to the exact remaining double.', options:['Treat the new visit as a new opportunity and return to the exact remaining double.','Replay the previous miss until it feels resolved.','Choose a different double without need.','Throw faster because the opponent gave you another chance.'], explanation:'The opponent’s miss changes the opportunity, not the current required target.' },
  { key:'mr17', tier:2, prompt:'You receive a warning about slow play after a long calculation.', correct:'Acknowledge it, pre-calculate before the next visit, and keep a complete but efficient routine.', options:['Acknowledge it, pre-calculate before the next visit, and keep a complete but efficient routine.','Remove the routine entirely.','Argue during every visit.','Throw before identifying a target.'], explanation:'The reset integrates useful feedback without replacing accuracy with panic.' },
  { key:'mr18', tier:2, prompt:'A dart slips during release and lands far from the intended segment.', correct:'Record the actual score, check grip security once, and return to the next target.', options:['Record the actual score, check grip security once, and return to the next target.','Rebuild the whole throw immediately.','Blame the dart and stop calculating.','Throw the next dart harder.'], explanation:'One brief safety check is useful; extended diagnosis belongs after the visit.' },
  { key:'mr19', tier:3, prompt:'At match point, a long interruption occurs before your checkout visit.', correct:'Reconfirm score and route, rehearse the first target once, then start from the beginning of the routine.', options:['Reconfirm score and route, rehearse the first target once, then start from the beginning of the routine.','Keep the body rigid throughout the interruption.','Change to a more dramatic route.','Use the interruption to imagine the result.'], explanation:'A full restart protects decision quality after an externally imposed break.' },
  { key:'mr20', tier:3, prompt:'You notice your average displayed on screen during the deciding leg.', correct:'Label it as non-task information and return to score, route and target.', options:['Label it as non-task information and return to score, route and target.','Recalculate the average before every dart.','Protect the average by avoiding narrow targets.','Speed up before the number changes.'], explanation:'Performance statistics are not instructions for the present dart.' }
]);

const EVIDENCE_QUESTIONS = Object.freeze([
  { key:'ev1', tier:1, marks:[[267,128],[271,122],[262,135]], correct:'A consistent leftward bias is visible.', options:['A consistent leftward bias is visible.','The release is definitely late.','The player is fatigued.','There is no directional pattern.'], explanation:'The positions support a repeated leftward tendency, but not a definite mechanical cause.' },
  { key:'ev2', tier:1, marks:[[250,170],[344,109],[291,211]], correct:'The sample is scattered; no stable directional bias is supported.', options:['The sample is scattered; no stable directional bias is supported.','A consistent high bias is visible.','The stance must be too closed.','The third dart proves fatigue.'], explanation:'The grouping is too dispersed to justify one directional or mechanical story.' },
  { key:'ev3', tier:1, marks:[[301,104],[298,139],[303,183]], correct:'Vertical inconsistency is visible.', options:['Vertical inconsistency is visible.','A consistent rightward bias is visible.','The target choice was wrong.','There is insufficient evidence of any pattern.'], explanation:'The darts remain horizontally aligned while spreading vertically.' },
  { key:'ev4', tier:1, marks:[[302,112],[305,146],[307,183]], correct:'The later darts drift progressively lower.', options:['The later darts drift progressively lower.','All three darts form one tight group.','The first dart is the clear error.','The pattern proves loss of confidence.'], explanation:'The numbered order shows progressive downward drift, not its cause.' },
  { key:'ev5', tier:2, marks:[[278,151],[294,147],[310,145]], correct:'The sequence moves progressively right while height stays similar.', options:['The sequence moves progressively right while height stays similar.','The darts become progressively higher.','There is no directional change.','The player must be rushing.'], explanation:'The order markers support a rightward sequence; they do not prove why it happened.' },
  { key:'ev6', tier:2, marks:[[286,116],[300,150],[315,186]], correct:'The sequence forms a diagonal down-right drift.', options:['The sequence forms a diagonal down-right drift.','Only vertical spread is present.','The third dart proves a grip change.','The first two darts form a perfect group.'], explanation:'Both horizontal and vertical position change in order.' },
  { key:'ev7', tier:2, marks:[[284,146],[316,146],[300,146]], correct:'The third dart returns toward the centre between the first two.', options:['The third dart returns toward the centre between the first two.','Every dart drifts farther right.','The sequence proves correction was intentional.','The first dart was thrown last.'], explanation:'Numbering identifies the order; intention cannot be inferred from position alone.' },
  { key:'ev8', tier:2, marks:[[296,132],[298,164],[300,132]], correct:'Darts one and three are similar; dart two is the vertical outlier.', options:['Darts one and three are similar; dart two is the vertical outlier.','All three drift progressively lower.','The player became steadily more accurate.','The board position proves fatigue.'], explanation:'The order shows a middle outlier rather than a progressive trend.' },
  { key:'ev9', tier:3, marks:[[270,126],[292,146],[317,170]], correct:'Each dart moves farther down and right in sequence.', options:['Each dart moves farther down and right in sequence.','The group has no ordered pattern.','Only the final dart matters.','The pattern proves the player lost confidence.'], explanation:'The order supports a directional trend, not a psychological diagnosis.' },
  { key:'ev10', tier:3, marks:[[321,128],[300,150],[279,172]], correct:'The sequence moves down-left through the target area.', options:['The sequence moves down-left through the target area.','The sequence moves up-right.','The second dart is unrelated to the others.','The pattern proves an equipment fault.'], explanation:'The numbered marks show a down-left movement.' },
{ key:'ev11', tier:1, marks:[[293,143],[300,149],[306,141]], correct:'The three darts form a compact group with no clear ordered drift.', options:['The three darts form a compact group with no clear ordered drift.','The sequence moves steadily left.','The second dart proves a release fault.','The group proves confidence increased.'], explanation:'The positions are close and the numbered order does not show a stable direction.' },
  { key:'ev12', tier:1, marks:[[300,185],[301,153],[299,120]], correct:'The darts move progressively higher while staying horizontally similar.', options:['The darts move progressively higher while staying horizontally similar.','The sequence moves progressively right.','Dart two is the only pattern.','The pattern proves the stance opened.'], explanation:'The ordered marks support an upward trend, but not a mechanical cause.' },
  { key:'ev13', tier:1, marks:[[294,145],[337,146],[299,148]], correct:'Dart two is the horizontal outlier; darts one and three are similar.', options:['Dart two is the horizontal outlier; darts one and three are similar.','All three move steadily right.','Dart three proves a conscious correction.','There is a vertical trend.'], explanation:'The sequence contains one middle outlier rather than a progressive drift.' },
  { key:'ev14', tier:1, marks:[[278,151],[302,139],[279,153]], correct:'Darts one and three return to a similar left position after dart two moves right.', options:['Darts one and three return to a similar left position after dart two moves right.','Every dart moves farther right.','The player deliberately corrected the throw.','The group has a steady downward trend.'], explanation:'Position and order show a return pattern; intention is not visible.' },
  { key:'ev15', tier:1, marks:[[270,150],[300,151],[330,149]], correct:'The spread is mainly horizontal with similar height.', options:['The spread is mainly horizontal with similar height.','The spread is mainly vertical.','The sequence proves changing grip pressure.','All darts form a tight group.'], explanation:'The y-positions are similar while the x-positions differ substantially.' },
  { key:'ev16', tier:1, marks:[[298,139],[302,145],[272,181]], correct:'The first two darts group together; the third is a down-left outlier.', options:['The first two darts group together; the third is a down-left outlier.','All three drift evenly down-left.','The first dart caused the third.','There is no visible grouping.'], explanation:'Two similar positions and one separated mark support an outlier description.' },
  { key:'ev17', tier:1, marks:[[281,142],[319,144],[282,147]], correct:'The sequence alternates right and back left rather than continuing one direction.', options:['The sequence alternates right and back left rather than continuing one direction.','The darts move progressively right.','The final dart proves fatigue.','Only vertical spread is present.'], explanation:'The numbered order prevents the three marks being mistaken for a steady drift.' },
  { key:'ev18', tier:1, marks:[[270,170],[287,157],[299,149]], correct:'Each dart moves closer to the central grouping area in sequence.', options:['Each dart moves closer to the central grouping area in sequence.','Each dart moves farther away.','The pattern proves deliberate correction.','The height remains exactly unchanged.'], explanation:'The ordered positions show improving proximity, but do not establish why.' },
  { key:'ev19', tier:2, marks:[[275,124],[299,151],[326,124]], correct:'The first and third darts are high on opposite sides; the second is lower and central.', options:['The first and third darts are high on opposite sides; the second is lower and central.','The sequence is a straight diagonal.','All three are horizontally aligned.','The pattern proves alternating release timing.'], explanation:'The geometry supports a V-shaped sequence, not a causal diagnosis.' },
  { key:'ev20', tier:2, marks:[[324,176],[303,151],[283,129]], correct:'The sequence moves progressively up-left.', options:['The sequence moves progressively up-left.','The sequence moves down-right.','Only the final dart is relevant.','The pattern proves equipment movement.'], explanation:'Both axes change consistently in the numbered order.' },
  { key:'ev21', tier:3, marks:[[291,128],[310,145],[288,163]], correct:'The sequence changes direction after dart two; no single straight drift fits all three.', options:['The sequence changes direction after dart two; no single straight drift fits all three.','All darts drift steadily downward-right.','Dart two proves the target moved.','The sequence is perfectly clustered.'], explanation:'A change of direction is visible, while a single-cause story is not.' },
  { key:'ev22', tier:3, marks:[[270,145],[297,145],[323,145]], correct:'The ordered spread is steadily rightward, but the cause remains unknown.', options:['The ordered spread is steadily rightward, but the cause remains unknown.','The release was definitely late.','The player was certainly anxious.','The darts show no ordered pattern.'], explanation:'Evidence supports the positional trend only.' }
]);

const RELEVANCE_QUESTIONS = Object.freeze([
  { key:'ri1', tier:1, objective:'Select only the facts required to calculate a legal two-dart checkout.', facts:[['score','Your score is 62.'],['darts','Two darts are available.'],['crowd','The crowd is noisy.'],['previous','The previous visit scored 26.'],['shirt','Your opponent is wearing red.']], correct:['score','darts'], explanation:'The arithmetic needs the remaining score and darts available.' },
  { key:'ri2', tier:1, objective:'Select the facts that should shape a route designed to leave your preferred double.', facts:[['score','Your score is 84.'],['darts','Three darts are available.'],['double','You prefer D16.'],['noise','A phone vibrates nearby.'],['last','You missed D16 yesterday.']], correct:['score','darts','double'], explanation:'Current score, darts available and intended finishing double shape the route.' },
  { key:'ri3', tier:1, objective:'Select what is required to update the score after one dart.', facts:[['start','The visit began on 100.'],['hit','The dart hit S5.'],['opponent','The opponent is on 40.'],['crowd','Someone coughed.'],['flight','The dart entered at an angle.']], correct:['start','hit'], explanation:'Updating the score requires the starting score and actual scoring segment.' },
  { key:'ri4', tier:1, objective:'Select what is needed to identify the clockwise neighbour of a number.', facts:[['number','The reference number is 20.'],['order','Use the standard dartboard number order.'],['score','Your match score is 301.'],['lighting','The room is bright.'],['opponent','The opponent is left-handed.']], correct:['number','order'], explanation:'The relationship depends only on the reference number and board order.' },
  { key:'ri5', tier:2, objective:'Select what matters before deciding whether a checkout route is legal.', facts:[['score','You require 76.'],['route','The proposed route is T20 then D8.'],['finish','A checkout must finish on a double.'],['previous','You scored 60 last visit.'],['sound','Music is playing.']], correct:['score','route','finish'], explanation:'Legality depends on the score, proposed route and double-out rule.' },
  { key:'ri6', tier:2, objective:'Select what matters when adapting after the first dart misses its intended treble.', facts:[['start','You started on 100.'],['actual','The dart scored S5.'],['left','Two darts remain.'],['intended','You intended T20.'],['reaction','The opponent smiled.']], correct:['start','actual','left'], explanation:'The revised route uses the real score and darts remaining; intention explains the change but does not alter arithmetic.' },
  { key:'ri7', tier:3, objective:'Select what is needed to compare calm and faster decision accuracy fairly.', facts:[['sameType','Both questions test comparable checkout knowledge.'],['results','Correctness is recorded for both conditions.'],['times','Response times are recorded.'],['crowd','The crowd volume changed.'],['shirt','You wore a different shirt.']], correct:['sameType','results','times'], explanation:'A fair comparison needs comparable tasks and measured accuracy and time.' },
  { key:'ri8', tier:3, objective:'Select what should be recorded to examine a directional error pattern.', facts:[['positions','The position of each dart is recorded.'],['order','The throw order is labelled.'],['target','The intended target is known.'],['mood','The player reports feeling annoyed.'],['opponent','The opponent won the previous leg.']], correct:['positions','order','target'], explanation:'Pattern description needs position, order and intended target; mood may be investigated later but is not established by the pattern.' },
{ key:'ri9', tier:1, objective:'Select what is needed to calculate after a first dart lands in S5 from 100.', facts:[['start','The visit began on 100.'],['hit','The first dart scored S5.'],['left','Two darts remain.'],['noise','A chair moved behind you.'],['opponent','The opponent looked away.']], correct:['start','hit','left'], explanation:'The revised score and darts remaining determine the next route.' },
  { key:'ri10', tier:1, objective:'Select the facts needed to aim the next dart after T20 from 100.', facts:[['start','The visit began on 100.'],['hit','The first dart hit T20.'],['left','One dart remains.'],['shirt','Your sleeve feels warm.'],['crowd','Someone applauded.']], correct:['start','hit','left'], explanation:'These facts establish that 40 remains with one dart, so D20 is the task.' },
  { key:'ri11', tier:1, objective:'Select what matters when a caller corrects the displayed remaining score.', facts:[['corrected','The corrected remaining score is 68.'],['darts','Two darts remain.'],['old','The previous display showed 78.'],['volume','The caller spoke loudly.'],['opponent','The opponent is seated.']], correct:['corrected','darts'], explanation:'The current official score and darts available govern the decision.' },
  { key:'ri12', tier:1, objective:'Select what is needed to describe whether three darts form a directional pattern.', facts:[['positions','Each dart position is marked.'],['order','Throw order is numbered.'],['target','All darts were aimed at T20.'],['mood','The player felt tense.'],['music','Music was playing.']], correct:['positions','order','target'], explanation:'A pattern description requires intended target, positions and order.' },
  { key:'ri13', tier:1, objective:'Select what is needed to choose between D20 and D10 when 40 remains.', facts:[['score','The remaining score is 40.'],['preference','Your practised preference is D20.'],['obstruction','A dart is blocking the lower D20 bed.'],['average','Your match average is 61.'],['opponentName','The opponent is called Alex.']], correct:['score','preference','obstruction'], explanation:'The score, practised route and current visual obstruction can all shape the exact target choice.' },
  { key:'ri14', tier:1, objective:'Select the facts needed to review whether a pre-throw routine improved accuracy.', facts:[['routine','The routine used is recorded.'],['attempts','The same target was attempted repeatedly.'],['outcomes','Hits and misses were recorded.'],['weather','It rained outside.'],['colour','The board surround was blue.']], correct:['routine','attempts','outcomes'], explanation:'Routine condition, comparable attempts and outcomes are needed for a useful comparison.' },
  { key:'ri15', tier:1, objective:'Select what matters after a bounce-out on the first dart.', facts:[['score','The starting score is unchanged because the dart scored zero.'],['darts','Two darts remain.'],['sound','The bounce made a loud sound.'],['floor','The dart landed near the oche.'],['reaction','The opponent frowned.']], correct:['score','darts'], explanation:'The legal calculation uses the unchanged score and darts remaining.' },
  { key:'ri16', tier:1, objective:'Select what is required to know whether a route is a legal checkout.', facts:[['score','The remaining score is known.'],['darts','The number of darts available is known.'],['finish','The final dart must land in a double-value segment.'],['crowd','The room is quiet.'],['ranking','The opponent has a higher ranking.']], correct:['score','darts','finish'], explanation:'Legality depends on score, darts available and the double-out requirement.' },
  { key:'ri17', tier:2, objective:'Select what should be compared when testing whether shorter decision time damages route accuracy.', facts:[['questions','Comparable route questions are used.'],['limits','The time limit for each condition is recorded.'],['answers','Correctness is recorded.'],['lighting','One lamp was brighter.'],['audience','Different people watched.']], correct:['questions','limits','answers'], explanation:'Comparable tasks, time conditions and outcomes support the comparison.' },
  { key:'ri18', tier:2, objective:'Select the information needed to evaluate a repeated leftward miss pattern.', facts:[['target','The intended target is recorded.'],['impact','Dart impact positions are recorded.'],['order','Throw order is preserved.'],['belief','The player thinks the stance is wrong.'],['result','The leg was lost.']], correct:['target','impact','order'], explanation:'The pattern can be established from target, position and order before causes are tested.' },
  { key:'ri19', tier:3, objective:'Select what matters when deciding whether to use a safer setup because the opponent is on a finish.', facts:[['yourScore','Your remaining score and available route are known.'],['opponentScore','The opponent is on a finish.'],['darts','Darts remaining are known.'],['cheer','The opponent has supporters.'],['history','They won the previous match.']], correct:['yourScore','opponentScore','darts'], explanation:'The current scores and darts available can legitimately affect strategic risk.' },
  { key:'ri20', tier:3, objective:'Select what is needed to distinguish a one-off miss from a stable bias across sessions.', facts:[['manyThrows','A sufficient number of comparable throws is recorded.'],['positions','Impact positions are measured.'],['targets','Intended targets are recorded.'],['singleFeeling','One throw felt awkward.'],['opponent','Different opponents were present.']], correct:['manyThrows','positions','targets'], explanation:'A stable bias requires repeated comparable observations, not one subjective event.' }
]);

const IMPULSE_QUESTIONS = Object.freeze([
  { key:'ic1', tier:1, prompt:'You require 100 with two darts. Your opponent is on 40 and the timer is nearly empty.', correct:'Choose T20 → D20 and commit to the familiar legal route.', options:['Choose T20 → D20 and commit to the familiar legal route.','Attempt BULL → BULL because it looks dramatic.','Throw immediately at the largest visible area.','Change routes repeatedly until time expires.'], explanation:'Pressure does not make a sound legal route less sound.' },
  { key:'ic2', tier:1, prompt:'You require 76 with two darts after a poor previous visit.', correct:'Calculate the current visit and use T20 → D8.', options:['Calculate the current visit and use T20 → D8.','Aim at T20 harder than usual.','Choose a new route only to escape the previous miss.','Rush at D20 first.'], explanation:'The previous visit is not a reason to distort the current calculation.' },
  { key:'ic3', tier:1, prompt:'You hit T20 first on 100 and the crowd begins celebrating early.', correct:'Keep attention on D20 and complete the route.', options:['Keep attention on D20 and complete the route.','Look at the crowd before the second dart.','Change to D10 because the moment feels important.','Throw before your stance is set.'], explanation:'The remaining task is still D20.' },
  { key:'ic4', tier:1, prompt:'You are on 40 and D20 suddenly looks visually small.', correct:'Keep the selected aim point and use the normal routine.', options:['Keep the selected aim point and use the normal routine.','Move to D10 without calculation.','Add force to make the target feel larger.','Delay until the target feels easy.'], explanation:'A temporary feeling does not change the score or target geometry.' },
  { key:'ic5', tier:2, prompt:'A fast opponent finishes visits in seconds, and you begin to feel slow.', correct:'Use your own stable pace and start only when the route and target are clear.', options:['Use your own stable pace and start only when the route and target are clear.','Copy the opponent’s speed immediately.','Skip calculation to appear confident.','Hold the dart indefinitely.'], explanation:'Effective pace is task-based, not socially copied.' },
  { key:'ic6', tier:2, prompt:'You have two possible routes and keep switching between them at the oche.', correct:'Choose one legal route before raising the dart and commit unless the score changes.', options:['Choose one legal route before raising the dart and commit unless the score changes.','Continue switching to remain flexible.','Throw at a treble and calculate later.','Ask the crowd which route looks best.'], explanation:'Flexibility belongs before commitment; indecision during execution adds noise.' },
  { key:'ic7', tier:3, prompt:'You miss inside D16 and leave D8 with one dart while feeling angry.', correct:'Name D8, settle once, and throw the normal action.', options:['Name D8, settle once, and throw the normal action.','Throw harder to overpower the anger.','Change to another double.','Pause to analyse the entire match.'], explanation:'The next task is simple and exact; emotional intensity need not choose the action.' },
  { key:'ic8', tier:3, prompt:'You are close to a personal best and notice the total before the final dart.', correct:'Return attention to the exact target required for the current score.', options:['Return attention to the exact target required for the current score.','Calculate the final average repeatedly.','Protect the score by aiming away from risk.','Rush before pressure grows.'], explanation:'Outcome awareness is not the current aiming instruction.' },
{ key:'ic9', tier:1, prompt:'Your first dart hits S20 instead of T20 and two darts remain.', correct:'Recalculate from the actual score before choosing the second target.', options:['Recalculate from the actual score before choosing the second target.','Repeat the original route unchanged.','Throw at the largest treble immediately.','Increase speed to recover lost points.'], explanation:'The impulse to continue the old plan must yield to the real score.' },
  { key:'ic10', tier:1, prompt:'A nearby player finishes quickly while you are still calculating.', correct:'Complete one clear calculation and begin at your normal effective pace.', options:['Complete one clear calculation and begin at your normal effective pace.','Copy their speed.','Skip the route decision.','Wait until they leave the room.'], explanation:'Another player’s tempo is not evidence about the time your decision needs.' },
  { key:'ic11', tier:1, prompt:'You miss high on D20 and immediately want to aim much lower at D10.', correct:'Check the remaining score and retain the intended double unless the route genuinely changed.', options:['Check the remaining score and retain the intended double unless the route genuinely changed.','Change doubles because of one miss.','Aim at any visible double.','Throw the next dart before settling.'], explanation:'One miss does not automatically invalidate the selected target.' },
  { key:'ic12', tier:1, prompt:'The first dart groups tightly beside T20 but does not score the treble.', correct:'Use the same precise aim point and normal action for the next dart.', options:['Use the same precise aim point and normal action for the next dart.','Chase the first dart with extra force.','Move aim to a different treble.','Rush because the grouping looks good.'], explanation:'Good positional evidence supports stable execution rather than escalation.' },
  { key:'ic13', tier:1, prompt:'You feel a strong urge to look at the opponent before a finishing dart.', correct:'Keep visual attention on the selected target until the throw is complete.', options:['Keep visual attention on the selected target until the throw is complete.','Check whether the opponent looks nervous.','Delay until the urge disappears.','Throw while turning the head.'], explanation:'The opponent’s expression cannot improve the current aiming information.' },
  { key:'ic14', tier:1, prompt:'A checkout route appears on a screen after you have already chosen a different legal route.', correct:'Stay with the chosen legal route unless new scoring information requires a change.', options:['Stay with the chosen legal route unless new scoring information requires a change.','Switch immediately because the screen must be better.','Combine both routes during the throw.','Stop the visit to compare every option.'], explanation:'Late unnecessary switching adds indecision after a sound commitment.' },
  { key:'ic15', tier:1, prompt:'You hit a large score and feel tempted to throw the next dart without resetting.', correct:'Complete the normal visual and physical reset before the next dart.', options:['Complete the normal visual and physical reset before the next dart.','Use the excitement as speed.','Keep the arm raised and throw instantly.','Change target to something ambitious.'], explanation:'A successful dart still needs separation from the next action.' },
  { key:'ic16', tier:1, prompt:'A marker says “take your time” while the shot clock is still comfortable.', correct:'Use enough time to calculate and settle, without deliberately slowing beyond the task.', options:['Use enough time to calculate and settle, without deliberately slowing beyond the task.','Use every remaining second.','Rush to prove confidence.','Restart repeatedly.'], explanation:'Discipline is appropriate pace, not maximum speed or maximum delay.' },
  { key:'ic17', tier:2, prompt:'You require 81 and are tempted to start at T20 because it is your favourite treble.', correct:'Use the calculated T19 route that leaves D12.', options:['Use the calculated T19 route that leaves D12.','Choose T20 because preference outranks arithmetic.','Throw at BULL without a route.','Delay until T19 feels familiar.'], explanation:'Target preference must not overrule the legal route.' },
  { key:'ic18', tier:2, prompt:'After two misses left, you want to make a large rightward correction without more evidence.', correct:'Make only a measured adjustment supported by the grouping and keep the normal throw.', options:['Make only a measured adjustment supported by the grouping and keep the normal throw.','Aim at the far right edge.','Change grip and stance together.','Throw harder to straighten the dart.'], explanation:'Large multi-variable corrections are an impulse, not a controlled response.' },
  { key:'ic19', tier:3, prompt:'At 18–18 in a deciding leg, the opponent leaves 32 and you have a difficult setup choice.', correct:'Use the route with the clearest legal setup and commit once the arithmetic is checked.', options:['Use the route with the clearest legal setup and commit once the arithmetic is checked.','Choose the most spectacular target.','Copy the opponent’s preferred double.','Throw before the pressure increases.'], explanation:'Pressure increases the value of a clear route, not improvisation.' },
  { key:'ic20', tier:3, prompt:'You hear an incorrect checkout suggestion from the crowd while aiming.', correct:'Step back if it disrupted attention, verify the score yourself, and then recommit.', options:['Step back if it disrupted attention, verify the score yourself, and then recommit.','Follow the loudest suggestion.','Throw while debating it internally.','Abandon calculation completely.'], explanation:'The disciplined response verifies relevant information before action.' }
]);

const CONFIDENCE_QUESTIONS = Object.freeze([
  { key:'cc1', tier:1, prompt:'What number is directly opposite 20?', correct:'3', options:['3','5','1','19'] },
  { key:'cc2', tier:1, prompt:'Which route checks out 76 in two darts?', correct:'T20 → D8', options:['T20 → D8','T18 → D10','T20 → D7','D20 → D17'] },
  { key:'cc3', tier:1, prompt:'What is the clockwise neighbour of 20?', correct:'1', options:['1','5','18','3'] },
  { key:'cc4', tier:1, prompt:'After S5 from 100, how much remains?', correct:'95', options:['95','85','80','105'] },
  { key:'cc5', tier:2, prompt:'Which target scores 54?', correct:'T18', options:['T18','D18','T16','D20'] },
  { key:'cc6', tier:2, prompt:'Which finish is worth 50 and counts as a double?', correct:'BULL', options:['BULL','25','D20','T17'] },
  { key:'cc7', tier:2, prompt:'What is the anticlockwise neighbour of 6?', correct:'13', options:['13','10','15','4'] },
  { key:'cc8', tier:2, prompt:'After T1 from 100, how much remains?', correct:'97', options:['97','99','79','95'] },
  { key:'cc9', tier:3, prompt:'Which route checks out 101 in two darts?', correct:'T17 → BULL', options:['T17 → BULL','T20 → D20','T19 → D20','T15 → D18'] },
  { key:'cc10', tier:3, prompt:'Which route checks out 110 in two darts?', correct:'T20 → BULL', options:['T20 → BULL','T20 → D20','T18 → D20','BULL → D20'] },
{ key:'cc11', tier:1, prompt:'What score does T19 produce?', correct:'57', options:['57','38','59','54'] },
  { key:'cc12', tier:1, prompt:'What score does D16 produce?', correct:'32', options:['32','16','48','36'] },
  { key:'cc13', tier:1, prompt:'What score does the outer bull produce?', correct:'25', options:['25','50','20','15'] },
  { key:'cc14', tier:1, prompt:'What total do three S20 darts score?', correct:'60', options:['60','180','40','80'] },
  { key:'cc15', tier:1, prompt:'Which route checks out 84 in two darts?', correct:'T20 → D12', options:['T20 → D12','T18 → D15','T16 → D18','T20 → D10'] },
  { key:'cc16', tier:1, prompt:'Which route checks out 68 in two darts?', correct:'T20 → D4', options:['T20 → D4','T18 → D6','T16 → D9','T20 → D5'] },
  { key:'cc17', tier:1, prompt:'What number is directly opposite 1?', correct:'19', options:['19','18','20','7'] },
  { key:'cc18', tier:1, prompt:'What is the clockwise neighbour of 6?', correct:'10', options:['10','13','15','4'] },
  { key:'cc19', tier:2, prompt:'What is the anticlockwise neighbour of 15?', correct:'10', options:['10','2','6','17'] },
  { key:'cc20', tier:2, prompt:'After T18 from 86, how much remains?', correct:'32', options:['32','68','36','28'] },
  { key:'cc21', tier:2, prompt:'After S18 from 70, how much remains?', correct:'52', options:['52','58','48','62'] },
  { key:'cc22', tier:2, prompt:'What is the maximum score with three darts?', correct:'180', options:['180','150','170','160'] },
  { key:'cc23', tier:3, prompt:'Which route checks out 90 in two darts?', correct:'T18 → D18', options:['T18 → D18','T20 → D15','T16 → D21','T20 → D14'] },
  { key:'cc24', tier:3, prompt:'After S12 from 112, how much remains?', correct:'100', options:['100','90','104','98'] }
]);

const PACE_QUESTIONS = Object.freeze([
  { key:'pc1', tier:1, calm:{prompt:'Choose the checkout for 64.',correct:'T16 → D8',options:['T16 → D8','T18 → D4','T16 → D7','D20 → D11']}, rushed:{prompt:'Choose the checkout for 76.',correct:'T20 → D8',options:['T20 → D8','T18 → D10','T20 → D7','D20 → D17']} },
  { key:'pc2', tier:1, calm:{prompt:'Choose the checkout for 52.',correct:'S12 → D20',options:['S12 → D20','S10 → D20','T12 → D7','S20 → D15']}, rushed:{prompt:'Choose the checkout for 68.',correct:'T20 → D4',options:['T20 → D4','T18 → D6','T16 → D9','T20 → D5']} },
  { key:'pc3', tier:1, calm:{prompt:'What is opposite 20?',correct:'3',options:['3','5','1','19']}, rushed:{prompt:'What is clockwise from 20?',correct:'1',options:['1','5','18','3']} },
  { key:'pc4', tier:2, calm:{prompt:'Choose the checkout for 81.',correct:'T19 → D12',options:['T19 → D12','T20 → D10','T17 → D14','T15 → D17']}, rushed:{prompt:'Choose the checkout for 92.',correct:'T20 → D16',options:['T20 → D16','T18 → D18','T20 → D15','T19 → D17']} },
  { key:'pc5', tier:2, calm:{prompt:'After S20 from 96, what remains?',correct:'76',options:['76','86','66','74']}, rushed:{prompt:'After T1 from 100, what remains?',correct:'97',options:['97','99','79','95']} },
  { key:'pc6', tier:3, calm:{prompt:'Choose the checkout for 101.',correct:'T17 → BULL',options:['T17 → BULL','T20 → D20','T19 → D20','T15 → D18']}, rushed:{prompt:'Choose the checkout for 110.',correct:'T20 → BULL',options:['T20 → BULL','T20 → D20','T18 → D20','BULL → D20']} },
{ key:'pc7', tier:1, calm:{prompt:'What score does T19 produce?',correct:'57',options:['57','38','59','54']}, rushed:{prompt:'What score does D16 produce?',correct:'32',options:['32','16','48','36']} },
  { key:'pc8', tier:1, calm:{prompt:'After S5 from 100, what remains?',correct:'95',options:['95','85','105','90']}, rushed:{prompt:'After S18 from 86, what remains?',correct:'68',options:['68','72','64','58']} },
  { key:'pc9', tier:1, calm:{prompt:'What is opposite 1?',correct:'19',options:['19','18','20','7']}, rushed:{prompt:'What is clockwise from 6?',correct:'10',options:['10','13','15','4']} },
  { key:'pc10', tier:1, calm:{prompt:'Which single dart finishes 40?',correct:'D20',options:['D20','S20','D10','T20']}, rushed:{prompt:'Which single dart finishes 32?',correct:'D16',options:['D16','S16','D8','T8']} },
  { key:'pc11', tier:1, calm:{prompt:'What score does T17 produce?',correct:'51',options:['51','34','57','49']}, rushed:{prompt:'What score does T19 produce?',correct:'57',options:['57','38','59','54']} },
  { key:'pc12', tier:1, calm:{prompt:'Choose the checkout for 84.',correct:'T20 → D12',options:['T20 → D12','T18 → D15','T16 → D18','T20 → D10']}, rushed:{prompt:'Choose the checkout for 90.',correct:'T18 → D18',options:['T18 → D18','T20 → D15','T16 → D21','T20 → D14']} },
  { key:'pc13', tier:1, calm:{prompt:'Choose the checkout for 80.',correct:'T20 → D10',options:['T20 → D10','T18 → D13','T16 → D16','D20 → D20']}, rushed:{prompt:'Choose the checkout for 72.',correct:'T20 → D6',options:['T20 → D6','T18 → D9','T16 → D12','D20 → D16']} },
  { key:'pc14', tier:1, calm:{prompt:'What is clockwise from 13?',correct:'6',options:['6','4','10','8']}, rushed:{prompt:'What is anticlockwise from 2?',correct:'15',options:['15','17','10','3']} },
  { key:'pc15', tier:1, calm:{prompt:'After T20 from 100, what remains?',correct:'40',options:['40','60','20','80']}, rushed:{prompt:'After T19 from 81, what remains?',correct:'24',options:['24','22','34','12']} },
  { key:'pc16', tier:2, calm:{prompt:'Choose the checkout for 94.',correct:'T18 → D20',options:['T18 → D20','T20 → D17','T16 → D23','T19 → D18']}, rushed:{prompt:'Choose the checkout for 86.',correct:'T18 → D16',options:['T18 → D16','T20 → D13','T16 → D19','T20 → D14']} },
  { key:'pc17', tier:2, calm:{prompt:'What is opposite 18?',correct:'7',options:['7','4','13','16']}, rushed:{prompt:'What is opposite 13?',correct:'8',options:['8','6','16','11']} },
  { key:'pc18', tier:3, calm:{prompt:'After S20 from 121, what remains?',correct:'101',options:['101','111','99','91']}, rushed:{prompt:'After S4 from 104, what remains?',correct:'100',options:['100','98','104','96']} }
]);

const DECISION_QUESTION_POOLS = Object.freeze({
  'mental-reset':MENTAL_RESET_QUESTIONS,
  'evidence-reading':EVIDENCE_QUESTIONS,
  'relevant-information':RELEVANCE_QUESTIONS,
  'impulse-control':IMPULSE_QUESTIONS,
  'confidence-calibration':CONFIDENCE_QUESTIONS,
  'pace-control':PACE_QUESTIONS
});

const ui = {
  selected:'checkout-pressure',
  states:{},
  gameTimers:new Set(),
  autoTimer:0,
  sessionToken:0,
  listObserver:null,
  overviewSyncQueued:false,
  lastScenario:{},
  lastDecisionQuestion:{},
  fullscreen:false
};
let profile = loadProfile();
ui.selected = GAME_IDS.includes(profile.selectedGame) ? profile.selectedGame : GAME_IDS[0];

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));
}
function byId(id) { return document.getElementById(id); }
function selectedMeta() { return GAMES.find((game) => game.id === ui.selected) || GAMES[0]; }
function nowMs() { return typeof performance !== 'undefined' ? performance.now() : Date.now(); }
function elapsedFrom(state) { return Math.max(0,Math.round(nowMs() - (state.startedAt || nowMs()))); }
function randomItem(items) { return seededPick(items) || items[0]; }
function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index],copy[swap]] = [copy[swap],copy[index]];
  }
  return copy;
}
function loadProfile() {
  try {
    const primary = localStorage.getItem(STORAGE_KEY);
    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    const loaded = normaliseDartsProfile(JSON.parse(primary || legacy || 'null'));
    if (!primary && legacy) localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    return loaded;
  } catch (_) { return createDefaultDartsProfile(); }
}
function saveProfile() {
  profile.selectedGame = ui.selected;
  profile.lastPlayedAt = profile.lastPlayedAt || Date.now();
  const serialised = JSON.stringify(profile);
  try {
    localStorage.setItem(STORAGE_KEY, serialised);
    localStorage.setItem(LEGACY_STORAGE_KEY, serialised);
  } catch (_) {}
  try { document.dispatchEvent(new CustomEvent('baseline:darts-progress', { detail:{ profile:JSON.parse(serialised) } })); } catch (_) {}
  renderProgressSummary();
}
function clearGameTimers() {
  ui.sessionToken += 1;
  ui.gameTimers.forEach((timer) => clearTimeout(timer));
  ui.gameTimers.clear();
}
function clearAutoTimer() {
  if (ui.autoTimer) clearTimeout(ui.autoTimer);
  ui.autoTimer = 0;
}
function scheduleGame(callback, delay) {
  const sessionToken = ui.sessionToken;
  const gameId = ui.selected;
  const timer = setTimeout(() => {
    ui.gameTimers.delete(timer);
    if (sessionToken !== ui.sessionToken || gameId !== ui.selected) return;
    callback();
  }, delay);
  ui.gameTimers.add(timer);
  return timer;
}
function stateFor(id = ui.selected) {
  if (!ui.states[id]) ui.states[id] = createState(id);
  return ui.states[id];
}
function resetState(id = ui.selected) { ui.states[id] = createState(id); return ui.states[id]; }
function tierId(id = ui.selected) { return Math.max(1,Math.min(3,Number(profile.custom.selectedTiers?.[id] || 1))); }
function tierMeta(id = ui.selected) { return TIER_DEFINITIONS[tierId(id) - 1]; }
function gameLevel(id = ui.selected) { return profile.stats[id]?.level || 1; }
function tierIsUnlocked(id,value) { return gameLevel(id) >= TIER_DEFINITIONS[value - 1].unlockLevel; }
function autoNextEnabled(id = ui.selected) { return Boolean(profile.custom.autoNext?.[id]); }
function poolForTier(pool,id = ui.selected) {
  const level = tierId(id);
  const filtered = pool.filter((item) => Number(item.tier || 1) <= level);
  return filtered.length ? filtered : pool;
}
function pickScenario(pool,key,id = ui.selected) {
  const available = poolForTier(pool,id);
  const stored = ui.lastScenario[key];
  const history = Array.isArray(stored) ? stored : (stored ? [stored] : []);
  const avoidCount = Math.min(3,Math.max(0,available.length - 1));
  const recent = new Set(history.slice(-avoidCount));
  const choices = available.length > 1 ? available.filter((item) => !recent.has(item.key)) : available;
  const picked = randomItem(choices.length ? choices : available);
  if (picked?.key) ui.lastScenario[key] = [...history,picked.key].slice(-4);
  return picked;
}
function shuffledScenario(pool,key,id = ui.selected) {
  const source = pickScenario(pool,key,id);
  return source ? { ...source, options:Array.isArray(source.options) ? shuffle(source.options) : source.options } : null;
}
function targetsForCurrentTier() { return TARGETS_BY_TIER[tierId()] || TARGETS_BY_TIER[1]; }
function sequenceLengthForTier() { return [3,4,5][tierId('sequence-recall') - 1]; }
function sequenceDelayForTier() { return [1150,900,720][tierId('sequence-recall') - 1]; }
function buildSequence() {
  const pool = TARGETS_BY_TIER[tierId('sequence-recall')] || TARGETS_BY_TIER[1];
  const length = sequenceLengthForTier();
  const sequence = [];
  while (sequence.length < length) {
    const options = pool.filter((item) => item !== sequence[sequence.length - 1]);
    sequence.push(randomItem(options));
  }
  return sequence;
}
function createState(id) {
  if (id === 'checkout-pressure') return { scenario:shuffledScenario(CHECKOUT_SCENARIOS,'checkout'), startedAt:nowMs(), feedback:'' };
  if (id === 'route-recovery') return { scenario:shuffledScenario(RECOVERY_SCENARIOS,'recovery'), startedAt:nowMs(), feedback:'' };
  if (id === 'target-lock') return { phase:'ready', target:randomItem(TARGETS_BY_TIER[tierId(id)]), feedback:'' };
  if (id === 'hold-picture') return { phase:'ready', target:randomItem(TARGETS_BY_TIER[tierId(id)]), options:[], feedback:'' };
  if (id === 'distraction-resistance') return { phase:'ready', mission:shuffledScenario(DISTRACTION_MISSIONS,'distraction'), feedback:'' };
  if (id === 'pressure-ladder') return { phase:'ready', scenario:null, feedback:'' };
  if (id === 'board-geography') return newGeographyState();
  if (id === 'routine-builder') {
    const scenario = pickScenario(ROUTINE_SCENARIOS,'routine',id);
    return { scenario, order:shuffle(scenario.correct), startedAt:nowMs(), feedback:'' };
  }
  if (id === 'sequence-recall') return { phase:'ready', sequence:[], showIndex:0, input:[], feedback:'' };
  if (id === 'decision-training') return { phase:'categories', category:'', queue:[], index:0, score:0, question:null, options:[], selected:[], confidence:50, paceStage:'', paceResults:{}, feedback:'' };
  return {};
}
function newGeographyState() {
  const segment = randomItem(DARTBOARD_ORDER);
  const relationships = tierId('board-geography') === 1 ? ['clockwise','anticlockwise'] : ['clockwise','anticlockwise','opposite'];
  const relationship = randomItem(relationships);
  const answer = relationship === 'clockwise' ? clockwiseNeighbour(segment) : relationship === 'anticlockwise' ? anticlockwiseNeighbour(segment) : oppositeSegment(segment);
  return { segment, relationship, answer, startedAt:nowMs(), feedback:'' };
}
function record(gameId, correct, responseMs = 0, confidence = null, category = '') {
  profile = recordResult(profile, gameId, { correct, responseMs, confidence, tier:tierId(gameId), category });
  saveProfile();
}
function progressLabel(id) {
  const stats = profile.stats[id];
  const tier = TIER_DEFINITIONS[tierId(id) - 1].name;
  if (!stats?.attempts) return `Level ${stats?.level || 1} · ${tier} · Ready`;
  return `Level ${stats.level} · ${tier} · ${accuracyFor(stats)}% · ${stats.attempts} rounds`;
}
function formatTime(ms) { return ms ? `${(ms / 1000).toFixed(1)}s` : '—'; }
function feedbackHtml(state) {
  if (!state.feedback) return '';
  return `<div class="darts-feedback ${state.feedback.correct ? 'is-correct' : 'is-wrong'}" role="status"><strong>${escapeHtml(state.feedback.title)}</strong><p>${escapeHtml(state.feedback.text)}</p></div>`;
}
function choiceButtons(options, gameId, disabled = false, extra = '') {
  return `<div class="darts-choice-grid">${options.map((option) => `<button class="darts-choice" data-darts-answer="${escapeHtml(gameId)}" data-value="${escapeHtml(option)}" type="button"${disabled ? ' disabled' : ''}${extra}>${escapeHtml(option)}</button>`).join('')}</div>`;
}
function nextButton(label = 'Next round') { return `<button class="action primary" data-darts-new-round="${escapeHtml(ui.selected)}" type="button">${escapeHtml(label)}</button>`; }
function autoAdvance(callback, delay = 1900) {
  clearAutoTimer();
  if (!autoNextEnabled()) return;
  ui.autoTimer = setTimeout(() => { ui.autoTimer = 0; callback(); }, delay);
}

function ensureStylesheet() {
  if (document.querySelector('link[data-darts-focused-style]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet'; link.href = STYLE_URL; link.dataset.dartsFocusedStyle = BUILD;
  document.head.appendChild(link);
}
function ensureExistingModal() {
  let modal = byId('gamesHubInfoModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.id = 'gamesHubInfoModal'; modal.className = 'games-modal'; modal.hidden = true;
  modal.innerHTML = '<div class="games-modal__backdrop" data-close-games-modal="1"></div><section class="games-modal__panel" role="dialog" aria-modal="true" aria-labelledby="gamesModalTitle"><button class="games-modal__close" data-close-games-modal="1" type="button" aria-label="Close">×</button><h3 id="gamesModalTitle"></h3><div class="games-modal__body" id="gamesModalBody"></div></section>';
  document.body.appendChild(modal);
  return modal;
}
function openHowToPlay(id) {
  const game = id === 'darts-focused'
    ? { name:'Darts Focused', how:'Open Darts Focused, choose one of the distinct games, select an unlocked difficulty tier, and use the on-screen board or controls. Auto-Next and Full Screen are available for every game.' }
    : GAMES.find((item) => item.id === id);
  if (!game) return;
  const modal = ensureExistingModal();
  byId('gamesModalTitle').textContent = `${game.name} — How To Play`;
  byId('gamesModalBody').innerHTML = `<p>${escapeHtml(game.how)}</p>`;
  modal.hidden = false;
  document.body.classList.add('games-modal-open');
  modal.querySelector('.games-modal__close')?.focus({ preventScroll:true });
}
function closeInfo() {
  const modal = byId('gamesHubInfoModal');
  if (modal) modal.hidden = true;
  document.body.classList.remove('games-modal-open');
}

function overviewEntryHtml() {
  return '<div class="games-list-group darts-task-group" data-darts-entry><span>Darts Focused Games</span></div>' +
    '<div class="game-row-wrap darts-focused-overview-row" data-darts-entry>' +
      `<button class="game-row darts-overview-row" data-open-darts-focused type="button"><img class="darts-overview-art" src="${ART_URL}" alt="Realistic dartboard"><div><h3>Darts Focused</h3><p>10 distinct website games with tiers for calculation, attention, board knowledge, memory and decision control.</p></div><div class="game-row-meta"><strong>10 games</strong><span class="inline-note">Open games</span></div></button>` +
      '<button class="game-row-info-button bl-info-button" data-bl-info-button data-bl-info-title="What this develops" data-bl-info-text="Darts calculation, selective attention, visual memory, pressure control, board geography, routine stability and recovery after mistakes." type="button" aria-label="What Darts Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button>' +
    '</div>';
}
function ensureOverviewEntry() {
  const list = byId('gamesList');
  if (!list || list.querySelector('[data-open-darts-focused]')) return;
  const testingHeading = [...list.querySelectorAll('.games-list-group')].find((node) => node.textContent.trim() === 'Testing');
  if (testingHeading) testingHeading.insertAdjacentHTML('beforebegin', overviewEntryHtml());
  else list.insertAdjacentHTML('beforeend', overviewEntryHtml());
}
function queueOverviewSync() {
  if (ui.overviewSyncQueued) return;
  ui.overviewSyncQueued = true;
  requestAnimationFrame(() => { ui.overviewSyncQueued = false; ensureOverviewEntry(); });
}
function gameSelectorHtml(game) {
  const selected = game.id === ui.selected;
  return '<div class="darts-selector-wrap">' +
    `<button class="darts-game-selector${selected ? ' is-selected' : ''}" data-darts-game="${game.id}" type="button" aria-selected="${selected}" role="tab"><span>${escapeHtml(game.name)}</span><small>${escapeHtml(progressLabel(game.id))}</small></button>` +
    `<button class="darts-selector-info bl-info-button" data-bl-info-button data-bl-info-title="${escapeHtml(game.name)}" data-bl-info-text="${escapeHtml(game.intention)}" type="button" aria-label="What ${escapeHtml(game.name)} develops" aria-expanded="false"><span aria-hidden="true">i</span></button>` +
  '</div>';
}
function panelHtml() {
  return '<section class="card game-panel darts-focused-panel" id="dartsFocusedPanel" aria-labelledby="dartsFocusedTitle">' +
    '<div class="game-shell">' +
      '<div class="game-header darts-focused-header"><div class="darts-heading-lockup">' +
        `<img src="${ART_URL}" class="darts-header-art" alt="Realistic dartboard"><div><h2 id="dartsFocusedTitle" tabindex="-1">Darts Focused</h2><p>Distinct website games with selectable tiers and shared progression into Baseline Realm.</p></div></div>` +
        '<div class="link-actions"><button class="action secondary bl-info-button" data-bl-info-button data-bl-info-title="Darts Focused" data-bl-info-text="Website-based darts training for calculation, attention, memory, board knowledge, routines and pressure decisions." type="button" aria-label="What Darts Focused develops" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary game-howto-toggle" data-darts-how="darts-focused" type="button">How To Play</button><button class="action secondary" data-close-darts-focused type="button">Back To Games Overview</button></div>' +
      '</div>' +
      '<details class="game-info-details"><summary><span>Progression Record</span><span class="inline-note">Experience, levels and Realm links</span></summary><div class="progress-shell progress-shell--trackcoin" id="dartsProgressSummary"></div></details>' +
      '<div class="darts-focused-layout"><nav class="darts-game-selectors" role="tablist" aria-label="Darts Focused games">' + GAMES.map(gameSelectorHtml).join('') + '</nav>' +
        '<section class="card game-card game-play-root darts-game-card" id="dartsGameCard" data-game-play-root="darts-focused">' +
          '<div class="darts-active-header"><div><h3 id="dartsActiveTitle"></h3><p class="inline-note" id="dartsActiveStatus"></p></div><div class="link-actions darts-active-actions"><button class="action secondary bl-info-button" id="dartsActiveInfoBtn" data-bl-info-button type="button" aria-expanded="false"><span aria-hidden="true">i</span></button><button class="action secondary game-howto-toggle" id="dartsActiveHowBtn" type="button">How To Play</button><button class="action secondary darts-auto-next-toggle" id="dartsAutoNextBtn" type="button" aria-pressed="false">Auto-Next: Off</button><button class="action secondary" id="dartsFullscreenBtn" type="button" aria-pressed="false">Full Screen</button></div></div>' +
          '<section class="darts-tier-panel" aria-label="Difficulty tiers"><div><strong>Difficulty Tiers</strong><span id="dartsTierDescription"></span></div><div class="darts-tier-list" id="dartsTierList"></div></section>' +
          '<div class="darts-game-surface game-play-surface" id="dartsGameSurface" data-game-play-surface="darts-focused" tabindex="-1"></div>' +
        '</section></div>' +
    '</div></section>';
}
function ensurePanel() {
  let panel = byId('dartsFocusedPanel');
  if (panel) return panel;
  const overview = byId('gamesOverviewCard');
  if (!byId('games') || !overview) return null;
  overview.insertAdjacentHTML('afterend', panelHtml());
  panel = byId('dartsFocusedPanel');
  renderSelectedGame();
  renderProgressSummary();
  return panel;
}
function openPanel() {
  const panel = ensurePanel();
  const games = byId('games');
  if (!panel || !games) throw new Error('Darts Focused panel could not be mounted.');
  document.querySelectorAll('.section').forEach((section) => section.classList.toggle('active', section === games));
  document.querySelectorAll('.tab[data-target]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.getAttribute('data-target') === 'games')));
  document.querySelectorAll('#games .game-panel').forEach((item) => { item.classList.remove('is-active'); item.hidden=true; item.setAttribute('aria-hidden','true'); });
  games.classList.add('has-active-game');
  panel.classList.add('is-active');
  panel.hidden = false;
  panel.removeAttribute('aria-hidden');
  byId('gamesOverviewCard')?.setAttribute('aria-hidden','true');
  renderSelectedGame();
  renderProgressSummary();
  try { history.replaceState({ dartsFocused:true }, '', '#tab=games&game=darts-focused'); } catch (_) {}
  byId('dartsFocusedTitle')?.focus({ preventScroll:true });
  document.documentElement.setAttribute('data-darts-focused-open',BUILD);
  return panel;
}
function closePanel({ restoreOverview = true } = {}) {
  clearGameTimers(); clearAutoTimer();
  const closing=byId('dartsFocusedPanel'); closing?.classList.remove('is-active'); if(closing){closing.hidden=true;closing.setAttribute('aria-hidden','true');}
  document.documentElement.removeAttribute('data-darts-focused-open');
  if (document.fullscreenElement === byId('dartsGameCard')) document.exitFullscreen?.().catch(() => {});
  if (restoreOverview) {
    byId('games')?.classList.remove('has-active-game');
    byId('gamesOverviewCard')?.removeAttribute('aria-hidden');
    try { history.replaceState({},'', '#tab=games'); } catch (_) {}
    document.querySelector('[data-open-darts-focused]')?.focus({ preventScroll:true });
  }
}
function refreshSelectors() {
  document.querySelectorAll('[data-darts-game]').forEach((button) => {
    const selected = button.getAttribute('data-darts-game') === ui.selected;
    button.classList.toggle('is-selected',selected);
    button.setAttribute('aria-selected',String(selected));
    const small = button.querySelector('small');
    if (small) small.textContent = progressLabel(button.getAttribute('data-darts-game'));
  });
}
function syncOverviewProgress() {
  document.querySelectorAll('[data-game-card="darts-focused"] .game-row-meta strong, .darts-focused-overview-row .game-row-meta strong').forEach((node) => {
    node.textContent = `Level ${profile.level} · ${GAME_IDS.length} games`;
  });
}
function renderProgressSummary() {
  const root = byId('dartsProgressSummary');
  const attempted = GAME_IDS.filter((id) => profile.stats[id].attempts > 0).length;
  const totalCorrect = GAME_IDS.reduce((sum,id) => sum + profile.stats[id].correct,0);
  const totalAttempts = GAME_IDS.reduce((sum,id) => sum + profile.stats[id].attempts,0);
  const overall = totalAttempts ? Math.round(totalCorrect / totalAttempts * 100) : 0;
  const confidence = calibrationScore(profile.stats['decision-training']);
  const realm = realmContributionForDarts(profile);
  const needed = dartsXpNeededForLevel(profile.level);
  const xpPct = Math.max(0,Math.min(100,(profile.xp / Math.max(1,needed)) * 100));
  if (root) root.innerHTML =
    '<div class="darts-xp-block"><div class="xp-meta"><strong>Level ' + profile.level + '</strong><span class="inline-note">Experience ' + profile.xp + ' / ' + needed + '</span></div><div class="xp-bar"><div class="xp-fill" style="width:' + xpPct.toFixed(2) + '%"></div></div></div>' +
    '<div class="stat-pills trackcoin-stat-pills">' +
      `<div class="stat-pill">Darts Bank <span>${profile.bank}</span></div>` +
      `<div class="stat-pill">Skill Points <span>${profile.skillPoints}</span></div>` +
      `<div class="stat-pill">Clean Streak <span>${profile.cleanWinStreak}</span></div>` +
      `<div class="stat-pill">Games Attempted <span>${attempted} / ${GAME_IDS.length}</span></div>` +
      `<div class="stat-pill">On-screen Rounds <span>${profile.totalRounds}</span></div>` +
      `<div class="stat-pill">Overall Accuracy <span>${overall}%</span></div>` +
      `<div class="stat-pill">Pressure Level <span>${profile.custom.pressureLevel} / 5</span></div>` +
      `<div class="stat-pill">Decision Calibration <span>${confidence === null ? 'Not measured' : `${confidence}%`}</span></div>` +
      `<div class="stat-pill">Realm Links <span>${GAME_IDS.length} / ${GAME_IDS.length}</span></div>` +
      `<div class="stat-pill">Realm Dash <span>×${realm.manualDamageMult.toFixed(2)}</span></div>` +
      `<div class="stat-pill">Realm Shuriken <span>×${realm.shurikenDamageMult.toFixed(2)}</span></div>` +
    '</div>';
  syncOverviewProgress();
  refreshSelectors();
}
function renderTierControls() {
  const list = byId('dartsTierList');
  const description = byId('dartsTierDescription');
  if (!list || !description) return;
  const selected = tierId();
  const level = gameLevel();
  list.innerHTML = TIER_DEFINITIONS.map((tier) => {
    const unlocked = level >= tier.unlockLevel;
    return `<button class="darts-tier-button${selected === tier.id ? ' is-active' : ''}" data-darts-tier="${tier.id}" type="button" ${unlocked ? '' : 'disabled'}><strong>${tier.name}</strong><span>${unlocked ? `Tier ${tier.id}` : `Unlocks at level ${tier.unlockLevel}`}</span></button>`;
  }).join('');
  description.textContent = TIER_DEFINITIONS[selected - 1].description;
}
function syncActiveControls() {
  const info = byId('dartsActiveInfoBtn');
  const meta = selectedMeta();
  if (info) {
    info.setAttribute('data-bl-info-title',meta.name);
    info.setAttribute('data-bl-info-text',meta.intention);
    info.setAttribute('aria-label',`What ${meta.name} develops`);
  }
  byId('dartsActiveHowBtn')?.setAttribute('data-darts-how',meta.id);
  const auto = byId('dartsAutoNextBtn');
  if (auto) {
    const enabled = autoNextEnabled();
    auto.setAttribute('aria-pressed',String(enabled));
    auto.textContent = `Auto-Next: ${enabled ? 'On' : 'Off'}`;
  }
  syncFullscreenButton();
}
function syncFullscreenButton() {
  const button = byId('dartsFullscreenBtn');
  if (!button) return;
  const active = document.fullscreenElement === byId('dartsGameCard');
  button.setAttribute('aria-pressed',String(active));
  button.textContent = active ? 'Exit Full Screen' : 'Full Screen';
}
function toggleFullscreen() {
  const card = byId('dartsGameCard');
  if (!card) return;
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  else card.requestFullscreen?.().catch(() => {});
}

function polar(radius,angle) {
  const rad = angle * Math.PI / 180;
  return [300 + radius * Math.cos(rad),300 + radius * Math.sin(rad)];
}
function annularPath(inner,outer,start,end) {
  const [x1,y1] = polar(outer,start), [x2,y2] = polar(outer,end), [x3,y3] = polar(inner,end), [x4,y4] = polar(inner,start);
  return `M${x1.toFixed(2)},${y1.toFixed(2)} A${outer},${outer} 0 0 1 ${x2.toFixed(2)},${y2.toFixed(2)} L${x3.toFixed(2)},${y3.toFixed(2)} A${inner},${inner} 0 0 0 ${x4.toFixed(2)},${y4.toFixed(2)} Z`;
}
function boardSvg({ highlight = '', interactive = false, marks = [], hideNumbers = false, label = 'Realistic dartboard' } = {}) {
  const target = normaliseTargetCode(highlight) || '';
  const rings = [
    { code:'S', inner:23, outer:140, part:'inner-single' },
    { code:'T', inner:140, outer:151, part:'treble' },
    { code:'S', inner:151, outer:229, part:'outer-single' },
    { code:'D', inner:229, outer:240, part:'double' }
  ];
  const paths = [];
  DARTBOARD_ORDER.forEach((segment,index) => {
    const centre = -90 + index * 18;
    const single = index % 2 === 0 ? '#e6dcc2' : '#171717';
    const ring = index % 2 === 0 ? '#b9262b' : '#187b49';
    rings.forEach((definition) => {
      const code = `${definition.code}${segment}`;
      const fill = definition.code === 'S' ? single : ring;
      const selected = target === code ? ' is-highlight' : '';
      paths.push(`<path class="darts-board-zone ${definition.part}${selected}" d="${annularPath(definition.inner,definition.outer,centre - 9,centre + 9)}" fill="${fill}" data-board-target="${code}" data-board-segment="${segment}" ${interactive ? 'tabindex="0" role="button"' : ''} aria-label="${code}"></path>`);
    });
  });
  const numbers = hideNumbers ? '' : DARTBOARD_ORDER.map((segment,index) => {
    const [x,y] = polar(270,-90 + index * 18);
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="darts-board-number-text">${segment}</text>`;
  }).join('');
  const markSvg = marks.map((point,index) => {
    const x = Array.isArray(point) ? point[0] : point.x;
    const y = Array.isArray(point) ? point[1] : point.y;
    const order = index + 1;
    return `<g class="darts-simulated-throw" aria-label="Throw ${order}"><circle class="darts-simulated-mark" cx="${x}" cy="${y}" r="10"></circle><text class="darts-simulated-order" x="${x}" y="${Number(y) + 1}">${order}</text><title>Throw ${order}</title></g>`;
  }).join('');
  const outerBullHighlight = target === '25' ? ' is-highlight' : '';
  const bullHighlight = target === 'BULL' ? ' is-highlight' : '';
  return `<svg class="darts-real-board${interactive ? ' is-interactive' : ''}" viewBox="0 0 600 600" role="img" aria-label="${escapeHtml(label)}"><circle cx="300" cy="300" r="252" fill="#111" stroke="#6b5a45" stroke-width="7"></circle>${paths.join('')}<circle class="darts-board-zone outer-bull${outerBullHighlight}" cx="300" cy="300" r="23" fill="#187b49" stroke="#c3c3b7" stroke-width="1.5" data-board-target="25" ${interactive ? 'tabindex="0" role="button"' : ''} aria-label="25"></circle><circle class="darts-board-zone inner-bull${bullHighlight}" cx="300" cy="300" r="9" fill="#b9262b" stroke="#c3c3b7" stroke-width="1.5" data-board-target="BULL" ${interactive ? 'tabindex="0" role="button"' : ''} aria-label="Bull"></circle>${numbers}${markSvg}</svg>`;
}

function scenarioHeader(title,details) {
  return `<div class="darts-scenario-header"><span class="darts-eyebrow">${escapeHtml(title)}</span><div class="darts-scenario-facts">${details.map(([label,value]) => `<span><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></span>`).join('')}</div></div>`;
}
function routeRecoveryHeader(s) {
  const calculation = remainingAfterHit(s.start,s.actual);
  return scenarioHeader('The first plan changed',[
    ['Start',s.start],
    ['Intended',s.intended],
    ['Actual hit',`${s.actual} (${calculation.scored} scored)`],
    ['Calculation',`${s.start} − ${calculation.scored}`],
    ['Remaining',calculation.remaining],
    ['Darts left',s.dartsLeft]
  ]);
}
function renderSelectedGame() {
  const surface = byId('dartsGameSurface');
  const title = byId('dartsActiveTitle');
  const status = byId('dartsActiveStatus');
  if (!surface || !title || !status) return;
  const meta = selectedMeta();
  profile.selectedGame = ui.selected;
  title.textContent = meta.name;
  const stats = profile.stats[meta.id];
  status.textContent = stats.attempts ? `${accuracyFor(stats)}% accuracy · average ${formatTime(averageResponseMs(stats))} · ${tierMeta().name}` : `Ready to begin · ${tierMeta().name}`;
  const renderer = RENDERERS[meta.id];
  surface.innerHTML = renderer ? renderer(stateFor(meta.id)) : '<p>Game unavailable.</p>';
  renderTierControls();
  syncActiveControls();
  refreshSelectors();
  saveProfile();
}

const RENDERERS = {
  'checkout-pressure':(state) => {
    const s = state.scenario;
    return `<div class="darts-game-stack">${scenarioHeader('Imagined match state',[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent]])}<h4>Choose the legal checkout route.</h4>${choiceButtons(s.options,'checkout-pressure',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : '<p class="darts-coaching-note">Accuracy remains the priority. Every target code shown is physically possible on a standard board.</p>'}</div>`;
  },
  'route-recovery':(state) => {
    const s = state.scenario;
    return `<div class="darts-game-stack">${routeRecoveryHeader(s)}<div class="darts-calculation-note"><strong>Read the ring before subtracting.</strong><span>${escapeHtml(s.actual)} scores ${remainingAfterHit(s.start,s.actual).scored}; therefore ${s.start} − ${remainingAfterHit(s.start,s.actual).scored} = ${remainingAfterHit(s.start,s.actual).remaining} remaining.</span></div><h4>Choose the valid revised route.</h4>${choiceButtons(s.options,'route-recovery',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : ''}</div>`;
  },
  'target-lock':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Visual precision</span><h4>Lock onto one exact scoring area.</h4><p>The ring and number will be highlighted. Hold the location, ignore the themed interference, then click the exact area.</p><button class="action primary" data-start-target-lock type="button">Start target lock</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Hold this target</span><strong>${state.target}</strong><p>Keep the number and scoring ring together as one visual address.</p></div><div class="darts-board-frame"><div class="darts-interference"><span>Score</span><span>Opponent</span><span>Noise</span></div>${boardSvg({highlight:state.target,label:`Highlighted target ${state.target}`})}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-task-heading"><span class="darts-eyebrow">Recall phase</span><h4>${state.feedback ? 'Target result' : 'Click the exact target you held in mind.'}</h4></div><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New target') : ''}</div>`;
  },
  'hold-picture':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art darts-visual-intro__art--memory"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Board memory</span><h4>Build and retain a board picture.</h4><p>The target appears briefly. The board then becomes a soft silhouette rather than a black obstruction.</p><button class="action primary" data-start-hold-picture type="button">Show target</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Picture phase</span><strong>${state.target}</strong><p>Notice ring, number and position.</p></div><div class="darts-board-frame">${boardSvg({highlight:state.target,label:`Remember ${state.target}`})}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-memory-veil"><img src="${ART_URL}" alt="Veiled dartboard memory"><div><span>Picture held</span><strong>Recall the exact target</strong></div></div><h4>Which target was highlighted?</h4>${choiceButtons(state.options,'hold-picture',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('Show another target') : ''}</div>`;
  },
  'distraction-resistance':(state) => {
    const m = state.mission;
    if (state.phase === 'ready') return `<div class="darts-centred-game"><h4>Retain the instruction, not the noise.</h4><p>You will study relevant match information while unrelated notices move around it.</p><button class="action primary" data-start-distraction type="button">Start memory phase</button></div>`;
    if (state.phase === 'show') return `<div class="darts-memory-arena"><div class="darts-memory-card">${scenarioHeader('Instruction to retain',[['Score',m.facts.score],['Primary',m.facts.primary],['Fallback',m.facts.fallback],['Reset word',m.facts.reset]])}</div><span class="distractor d1">Crowd noise</span><span class="distractor d2">New message</span><span class="distractor d3">Previous miss</span><span class="distractor d4">Hurry up</span></div>`;
    return `<div class="darts-game-stack"><h4>${escapeHtml(m.question)}</h4>${choiceButtons(m.options,'distraction-resistance',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('New instruction') : ''}</div>`;
  },
  'pressure-ladder':(state) => {
    const level = state.phase === 'ready' ? profile.custom.pressureLevel : (state.level || profile.custom.pressureLevel);
    const baseTimes = tierId('pressure-ladder') === 1 ? [18,16,14,12,10] : tierId('pressure-ladder') === 2 ? [16,14,12,10,8] : [14,12,10,8,6];
    if (state.phase === 'ready') return `<div class="darts-game-stack"><div class="darts-pressure-track">${[1,2,3,4,5].map((n) => `<span class="${n === level ? 'is-current' : n < level ? 'is-complete' : ''}">${n}</span>`).join('')}</div><h4>Pressure level ${level}</h4><p>You will have ${baseTimes[level - 1]} seconds to choose a legal route. Accuracy moves you upward; an error moves you down.</p><button class="action primary" data-start-pressure type="button">Begin level ${level}</button>${feedbackHtml(state)}</div>`;
    const s = state.scenario;
    return `<div class="darts-game-stack"><div class="darts-pressure-bar" style="--pressure-seconds:${state.seconds}s"><span></span></div>${scenarioHeader(`Pressure level ${level}`,[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent],['Time',`${state.seconds}s`]])}<h4>Choose now, without abandoning calculation.</h4>${choiceButtons(s.options,'pressure-ladder',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('Return to ladder') : ''}</div>`;
  },
  'board-geography':(state) => {
    const relation = state.relationship === 'clockwise' ? 'clockwise neighbour' : state.relationship === 'anticlockwise' ? 'anticlockwise neighbour' : 'number directly opposite';
    return `<div class="darts-game-stack"><h4>Click the ${relation} of <strong>${state.segment}</strong>.</h4><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard for board geography'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New relationship') : '<p class="darts-coaching-note">Use the physical number order shown on the board.</p>'}</div>`;
  },
  'routine-builder':(state) => `<div class="darts-game-stack"><div class="darts-situation-card"><span class="darts-eyebrow">Routine objective</span><h4>${escapeHtml(state.scenario.title)}</h4></div><p>Put these steps into a stable order for this specific situation.</p><ol class="darts-routine-list">${state.order.map((step,index) => `<li><span>${escapeHtml(step)}</span><div><button type="button" data-routine-move="up" data-index="${index}" aria-label="Move ${escapeHtml(step)} up">↑</button><button type="button" data-routine-move="down" data-index="${index}" aria-label="Move ${escapeHtml(step)} down">↓</button></div></li>`).join('')}</ol><button class="action primary" data-submit-routine type="button" ${state.feedback ? 'disabled' : ''}>Test this sequence</button>${feedbackHtml(state)}${state.feedback ? nextButton('New routine situation') : ''}</div>`,
  'sequence-recall':(state) => {
    if (state.phase === 'ready') return `<div class="darts-visual-intro"><div class="darts-visual-intro__art"><img src="${ART_URL}" alt="Realistic dartboard"></div><div><span class="darts-eyebrow">Ordered memory</span><h4>Remember a ${sequenceLengthForTier()}-target plan.</h4><p>Each target is shown with a large code and a clear sequence number. Reproduce the same order by clicking the board.</p><button class="action primary" data-start-sequence type="button">Show sequence</button></div></div>`;
    if (state.phase === 'show') return `<div class="darts-training-stage"><div class="darts-stage-copy"><span class="darts-eyebrow">Target ${state.showIndex + 1} of ${state.sequence.length}</span><strong>${state.sequence[state.showIndex]}</strong><p>Remember this as position ${state.showIndex + 1}.</p></div><div class="darts-board-frame">${boardSvg({highlight:state.sequence[state.showIndex],label:`Sequence target ${state.sequence[state.showIndex]}`})}</div><div class="darts-sequence-dots">${state.sequence.map((_,index) => `<span class="${index === state.showIndex ? 'is-current' : index < state.showIndex ? 'is-seen' : ''}">${index + 1}</span>`).join('')}</div></div>`;
    return `<div class="darts-game-stack"><div class="darts-task-heading"><span class="darts-eyebrow">Your turn</span><h4>Reproduce the sequence.</h4></div><p class="darts-sequence-readout">${state.input.length ? state.input.map(escapeHtml).join(' → ') : 'Click the first target on the board'}</p><div class="darts-board-frame darts-board-frame--interactive">${boardSvg({interactive:!state.feedback,label:'Interactive realistic dartboard for sequence recall'})}</div>${feedbackHtml(state)}${state.feedback ? nextButton('New sequence') : '<button class="action secondary" data-clear-sequence type="button">Clear selection</button>'}</div>`;
  },
  'decision-training':(state) => renderDecisionTraining(state)
};

function decisionCategoryIconSvg(id) {
  const common = 'fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    'mental-reset':`<path ${common} d="M47 20A20 20 0 1 0 49 42"/><path ${common} d="M47 20V8M47 20H35"/><path ${common} d="M24 32h16"/>`,
    'evidence-reading':`<path ${common} d="M13 45L28 28l11 8 13-19"/><circle cx="13" cy="45" r="5" fill="currentColor"/><circle cx="28" cy="28" r="5" fill="currentColor"/><circle cx="39" cy="36" r="5" fill="currentColor"/><path ${common} d="M49 14h8v8"/>`,
    'relevant-information':`<path ${common} d="M10 14h44L38 34v15l-12 7V34L10 14z"/><path ${common} d="M39 22l5 5 10-11"/>`,
    'impulse-control':`<path ${common} d="M20 34V19a4 4 0 0 1 8 0v10-15a4 4 0 0 1 8 0v15-12a4 4 0 0 1 8 0v14-8a4 4 0 0 1 8 0v13c0 14-8 21-20 21-9 0-14-5-19-13l-4-7a4 4 0 0 1 7-4l4 6"/>`,
    'confidence-calibration':`<path ${common} d="M12 45a22 22 0 1 1 40 0"/><path ${common} d="M32 35l12-13"/><circle cx="32" cy="35" r="4" fill="currentColor"/><path ${common} d="M18 45h28"/>`,
    'pace-control':`<path ${common} d="M14 48h36M20 48l5-33h14l5 33M25 28h14"/><path ${common} d="M32 20v17l8 5"/>`
  };
  return `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${icons[id] || icons['mental-reset']}</svg>`;
}
function decisionCategoryMeta(id) { return DECISION_CATEGORIES.find((item) => item.id === id); }
function decisionSeriesSize() { return [6,8,10][tierId('decision-training') - 1]; }
function decisionPool(category) { return poolForTier(DECISION_QUESTION_POOLS[category] || [],'decision-training'); }
function decisionAccuracy(category) {
  const progress = profile.custom.decisionCategoryProgress?.[category] || { attempts:0, correct:0 };
  return progress.attempts ? Math.round(progress.correct / progress.attempts * 100) : null;
}
function renderDecisionTraining(state) {
  if (state.phase === 'categories') {
    return `<div class="darts-game-stack"><div class="darts-decision-intro"><span class="darts-eyebrow">Category training</span><h4>Choose one decision category.</h4><p>Complete ${decisionSeriesSize()} varied questions. At the end of the series, the game returns to this category list.</p></div><div class="darts-category-grid">${DECISION_CATEGORIES.map((category) => {
      const progress = profile.custom.decisionCategoryProgress[category.id];
      const accuracy = decisionAccuracy(category.id);
      return `<button class="darts-category-card" data-decision-category="${category.id}" type="button"><span class="darts-category-icon">${decisionCategoryIconSvg(category.id)}</span><span><strong>${escapeHtml(category.name)}</strong><small>${escapeHtml(category.summary)}</small><em>${progress.attempts ? `${progress.attempts} answered · ${accuracy}% correct` : 'Not attempted'} · ${decisionPool(category.id).length} available</em></span></button>`;
    }).join('')}</div></div>`;
  }
  const category = decisionCategoryMeta(state.category);
  if (state.phase === 'series-complete') {
    return `<div class="darts-centred-game darts-series-complete"><span class="darts-eyebrow">Series complete</span><h4>${escapeHtml(category.name)}</h4><strong>${state.score} / ${state.queue.length} correct</strong><p>The series is complete. Return to the categories and choose another topic.</p><button class="action primary" data-decision-return type="button">Return to categories</button></div>`;
  }
  if (state.phase === 'pace-between') {
    return `<div class="darts-centred-game"><span class="darts-eyebrow">Pace comparison ${state.index + 1} of ${state.queue.length}</span><h4>Deliberate condition recorded.</h4><p>${state.paceResults.calm.correct ? 'Correct' : 'Incorrect'} in ${formatTime(state.paceResults.calm.ms)}. The faster condition still gives ${paceSeconds('rushed')} seconds—enough to calculate, but noticeably less.</p><button class="action primary" data-decision-pace-rushed type="button">Begin faster condition</button></div>`;
  }
  if (state.phase === 'pace-result') {
    const calm = state.paceResults.calm;
    const rushed = state.paceResults.rushed;
    const interpretation = calm.correct && !rushed.correct ? 'The shorter window reduced accuracy in this comparison.' : !calm.correct && rushed.correct ? 'The faster answer was stronger this time; repeat the category before drawing a conclusion.' : 'Both conditions produced the same accuracy result; the response times still differed.';
    return `<div class="darts-game-stack"><span class="darts-eyebrow">Pace comparison ${state.index + 1} of ${state.queue.length}</span><h4>Decision pace comparison</h4><div class="darts-comparison"><div><small>Deliberate</small><strong>${calm.correct ? 'Correct' : 'Incorrect'} · ${formatTime(calm.ms)}</strong></div><div><small>Faster</small><strong>${rushed.correct ? 'Correct' : 'Incorrect'} · ${formatTime(rushed.ms)}</strong></div></div><div class="darts-feedback is-correct"><strong>Interpretation</strong><p>${escapeHtml(interpretation)}</p></div><button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next comparison'}</button></div>`;
  }
  const q = state.question;
  const progress = `<div class="darts-series-progress"><span>${escapeHtml(category.name)}</span><strong>Question ${state.index + 1} of ${state.queue.length}</strong><button class="action ghost" data-decision-return type="button">Categories</button></div>`;
  if (state.category === 'evidence-reading') {
    return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">Throw order is numbered</span><h4>All three simulated darts were aimed at T20. What does the ordered pattern support?</h4><p>1 = first dart, 2 = second dart, 3 = third dart.</p></div><div class="darts-board-frame">${boardSvg({marks:q.marks,label:'Dartboard with throws numbered in order'})}</div>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'relevant-information') {
    return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">Decision objective</span><h4>${escapeHtml(q.objective)}</h4></div><div class="darts-fact-list">${q.facts.map(([id,text]) => `<label><input type="checkbox" data-decision-fact="${id}" ${state.selected.includes(id) ? 'checked' : ''} ${state.feedback ? 'disabled' : ''}><span>${escapeHtml(text)}</span></label>`).join('')}</div><button class="action primary" data-decision-submit-facts type="button" ${state.feedback ? 'disabled' : ''}>Submit selected facts</button>${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'confidence-calibration') {
    const score = calibrationScore(profile.stats['decision-training']);
    return `<div class="darts-game-stack">${progress}<h4>${escapeHtml(q.prompt)}</h4>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}<label class="darts-confidence-control"><span>Confidence before submitting: <strong id="confidenceValue">${state.confidence}%</strong></span><input type="range" min="0" max="100" step="5" value="${state.confidence}" data-confidence-slider ${state.feedback ? 'disabled' : ''}></label>${feedbackHtml(state)}${state.feedback ? `<div class="darts-calibration-result"><strong>Current calibration score: ${score === null ? 'Not measured' : `${score}%`}</strong><span>Higher means confidence is matching correctness more closely.</span></div><button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'pace-control') {
    const condition = state.paceStage === 'rushed' ? q.rushed : q.calm;
    const seconds = paceSeconds(state.paceStage || 'calm');
    return `<div class="darts-game-stack">${progress}<div class="darts-pressure-bar ${state.paceStage === 'rushed' ? 'is-rushed' : ''}" style="--pressure-seconds:${seconds}s"><span></span></div><span class="darts-eyebrow">${state.paceStage === 'rushed' ? `Faster condition · ${seconds} seconds` : `Deliberate condition · ${seconds} seconds`}</span><h4>${escapeHtml(condition.prompt)}</h4>${choiceButtons(state.options,'decision-training',false)}</div>`;
  }
  const label = state.category === 'mental-reset' ? 'Mental reset situation' : 'Pressure and temptation';
  return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">${escapeHtml(label)}</span><h4>${escapeHtml(q.prompt)}</h4></div><p>Choose the disciplined response.</p>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
}

function answerStandard(gameId,value) {
  const state = stateFor(gameId);
  if (state.feedback) return;
  let correct = false;
  let explanation = '';
  if (gameId === 'checkout-pressure' || gameId === 'route-recovery') {
    correct = value === state.scenario.correct;
    explanation = state.scenario.explanation;
  } else if (gameId === 'hold-picture') {
    correct = value === state.target;
    explanation = `The highlighted target was ${state.target}.`;
  } else if (gameId === 'distraction-resistance') {
    correct = value === state.mission.correct;
    explanation = `The retained answer was ${state.mission.correct}.`;
  } else if (gameId === 'pressure-ladder') {
    correct = value === state.scenario.correct;
    explanation = state.scenario.explanation;
    profile.custom.pressureLevel = Math.max(1,Math.min(5,profile.custom.pressureLevel + (correct ? 1 : -1)));
    explanation += ` The next pressure level is ${profile.custom.pressureLevel}.`;
  }
  clearGameTimers();
  record(gameId,correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Correct decision' : 'Recalculate', text:explanation };
  renderSelectedGame();
  autoAdvance(() => newRound(gameId));
}
function startTargetLock() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('target-lock');
  state.phase = 'show'; state.startedAt = nowMs();
  renderSelectedGame();
  const delay = [2600,2000,1450][tierId('target-lock') - 1];
  scheduleGame(() => { state.phase = 'recall'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function startHoldPicture() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('hold-picture');
  state.phase = 'show';
  const pool = TARGETS_BY_TIER[tierId('hold-picture')];
  const optionCount = [3,4,5][tierId('hold-picture') - 1];
  state.options = shuffle([state.target,...shuffle(pool.filter((item) => item !== state.target)).slice(0,optionCount - 1)]);
  renderSelectedGame();
  const delay = [3200,2400,1750][tierId('hold-picture') - 1];
  scheduleGame(() => { state.phase = 'recall'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function startDistraction() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('distraction-resistance');
  state.phase = 'show';
  renderSelectedGame();
  const delay = [6000,4800,3800][tierId('distraction-resistance') - 1];
  scheduleGame(() => { state.phase = 'question'; state.startedAt = nowMs(); renderSelectedGame(); },delay);
}
function answerTarget(code) {
  const state = stateFor('target-lock');
  if (ui.selected !== 'target-lock' || state.phase !== 'recall' || state.feedback) return;
  const selected = normaliseTargetCode(code);
  const correct = selected === state.target;
  record('target-lock',correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Target retained' : 'Target shifted', text:`The target was ${state.target}; you selected ${selected || code}.` };
  renderSelectedGame();
  autoAdvance(() => newRound('target-lock'));
}
function answerGeography(segment) {
  const state = stateFor('board-geography');
  if (state.feedback) return;
  const correct = Number(segment) === Number(state.answer);
  record('board-geography',correct,elapsedFrom(state));
  state.feedback = { correct, title:correct ? 'Board relationship correct' : 'Different position', text:`The ${state.relationship} answer from ${state.segment} is ${state.answer}.` };
  renderSelectedGame();
  autoAdvance(() => newRound('board-geography'));
}
function startPressure() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('pressure-ladder');
  state.phase = 'question';
  state.level = profile.custom.pressureLevel;
  state.scenario = shuffledScenario(CHECKOUT_SCENARIOS,'pressure','pressure-ladder');
  const times = tierId('pressure-ladder') === 1 ? [18,16,14,12,10] : tierId('pressure-ladder') === 2 ? [16,14,12,10,8] : [14,12,10,8,6];
  state.seconds = times[state.level - 1];
  state.startedAt = nowMs();
  renderSelectedGame();
  scheduleGame(() => {
    if (state.phase !== 'question' || state.feedback) return;
    profile.custom.pressureLevel = Math.max(1,profile.custom.pressureLevel - 1);
    record('pressure-ladder',false,state.seconds * 1000);
    state.feedback = { correct:false, title:'Time elapsed', text:`The legal route was ${state.scenario.correct}. The ladder moved down one level.` };
    renderSelectedGame();
    autoAdvance(() => newRound('pressure-ladder'));
  },state.seconds * 1000);
}
function moveRoutine(direction,index) {
  const state = stateFor('routine-builder');
  if (state.feedback) return;
  const next = direction === 'up' ? index - 1 : index + 1;
  if (next < 0 || next >= state.order.length) return;
  [state.order[index],state.order[next]] = [state.order[next],state.order[index]];
  renderSelectedGame();
}
function submitRoutine() {
  const state = stateFor('routine-builder');
  if (state.feedback) return;
  const correct = arraysEqual(state.order,state.scenario.correct);
  record('routine-builder',correct,elapsedFrom(state));
  state.feedback = {
    correct,
    title:correct ? 'Routine is stable' : 'Sequence needs adjustment',
    text:correct ? 'The sequence matches this situation.' : `A stable order is: ${state.scenario.correct.join(' → ')}.`
  };
  renderSelectedGame();
  autoAdvance(() => newRound('routine-builder'));
}
function startSequence() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('sequence-recall');
  state.sequence = buildSequence();
  state.phase = 'show'; state.showIndex = 0;
  renderSelectedGame();
  scheduleGame(advanceSequence,sequenceDelayForTier());
}
function advanceSequence() {
  const state = stateFor('sequence-recall');
  if (state.phase !== 'show') return;
  state.showIndex += 1;
  if (state.showIndex >= state.sequence.length) {
    state.phase = 'recall'; state.input = []; state.startedAt = nowMs(); renderSelectedGame(); return;
  }
  renderSelectedGame();
  scheduleGame(advanceSequence,sequenceDelayForTier());
}
function sequenceClick(code) {
  const state = stateFor('sequence-recall');
  if (state.phase !== 'recall' || state.feedback) return;
  const selected = normaliseTargetCode(code);
  if (!selected) return;
  state.input.push(selected);
  if (state.input.length >= state.sequence.length) {
    const correct = arraysEqual(state.input,state.sequence);
    record('sequence-recall',correct,elapsedFrom(state));
    state.feedback = { correct, title:correct ? 'Sequence preserved' : 'Order changed', text:`Shown: ${state.sequence.join(' → ')}. Entered: ${state.input.join(' → ')}.` };
  }
  renderSelectedGame();
  if (state.feedback) autoAdvance(() => newRound('sequence-recall'));
}

function startDecisionCategory(categoryId) {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('decision-training');
  const category = decisionCategoryMeta(categoryId);
  if (!category) return;
  const pool = decisionPool(categoryId);
  const wanted = Math.min(decisionSeriesSize(),pool.length);
  const historyMap = profile.custom.decisionQuestionHistory || (profile.custom.decisionQuestionHistory = {});
  const history = Array.isArray(historyMap[categoryId]) ? historyMap[categoryId] : [];
  const historySet = new Set(history);
  const unseen = shuffle(pool.filter((question) => !historySet.has(question.key)));
  const queue = unseen.slice(0,wanted);
  if (queue.length < wanted) {
    const recent = new Set(history.slice(-wanted));
    const refill = shuffle(pool.filter((question) => !queue.some((picked) => picked.key === question.key) && !recent.has(question.key)));
    queue.push(...refill.slice(0,wanted - queue.length));
  }
  if (queue.length < wanted) {
    const fallback = shuffle(pool.filter((question) => !queue.some((picked) => picked.key === question.key)));
    queue.push(...fallback.slice(0,wanted - queue.length));
  }
  state.category = categoryId;
  state.queue = queue;
  historyMap[categoryId] = [...history,...queue.map((question) => question.key)].slice(-Math.max(pool.length * 2,40));
  saveProfile();
  state.index = 0;
  state.score = 0;
  prepareDecisionQuestion(state);
}
function prepareDecisionQuestion(state) {
  clearGameTimers(); clearAutoTimer();
  if (state.index >= state.queue.length) {
    state.phase = 'series-complete';
    renderSelectedGame();
    autoAdvance(() => returnDecisionCategories(),2300);
    return;
  }
  state.question = state.queue[state.index];
  ui.lastDecisionQuestion[state.category] = state.question.key;
  state.options = shuffle(state.category === 'pace-control' ? state.question.calm.options : (state.question.options || []));
  state.selected = [];
  state.confidence = 50;
  state.feedback = '';
  state.startedAt = nowMs();
  state.paceResults = {};
  if (state.category === 'pace-control') {
    state.paceStage = 'calm';
    state.phase = 'question';
    renderSelectedGame();
    schedulePaceTimeout(state,'calm');
    return;
  }
  state.phase = 'question';
  renderSelectedGame();
}
function returnDecisionCategories() {
  clearGameTimers(); clearAutoTimer();
  const state = resetState('decision-training');
  state.phase = 'categories';
  renderSelectedGame();
}
function advanceDecision() {
  const state = stateFor('decision-training');
  clearGameTimers(); clearAutoTimer();
  if (state.phase === 'pace-between') { startRushedPace(); return; }
  if (state.phase === 'series-complete') { returnDecisionCategories(); return; }
  state.index += 1;
  prepareDecisionQuestion(state);
}
function answerDecisionChoice(value) {
  const state = stateFor('decision-training');
  if (state.phase !== 'question' || state.feedback) return;
  if (state.category === 'pace-control') { finishPaceAnswer(value === currentPaceQuestion(state).correct,false); return; }
  const q = state.question;
  const correct = value === q.correct;
  const confidence = state.category === 'confidence-calibration' ? state.confidence : null;
  record('decision-training',correct,elapsedFrom(state),confidence,state.category);
  if (correct) state.score += 1;
  state.feedback = {
    correct,
    title:correct ? 'Correct decision' : 'Recalculate',
    text:state.category === 'confidence-calibration' ? `Correct answer: ${q.correct}. Confidence was ${state.confidence}%.` : q.explanation
  };
  renderSelectedGame();
  autoAdvance(advanceDecision);
}
function submitDecisionFacts() {
  const state = stateFor('decision-training');
  if (state.category !== 'relevant-information' || state.feedback) return;
  const correct = sameSet(state.selected,state.question.correct);
  record('decision-training',correct,elapsedFrom(state),null,state.category);
  if (correct) state.score += 1;
  state.feedback = { correct, title:correct ? 'Relevant facts isolated' : 'Noise remained in the decision', text:state.question.explanation };
  renderSelectedGame();
  autoAdvance(advanceDecision);
}
function paceSeconds(stage) {
  const tier = tierId('decision-training');
  if (stage === 'rushed') return [10,8,6][tier - 1];
  return [20,16,12][tier - 1];
}
function currentPaceQuestion(state) { return state.paceStage === 'rushed' ? state.question.rushed : state.question.calm; }
function schedulePaceTimeout(state,stage) {
  const seconds = paceSeconds(stage);
  scheduleGame(() => {
    if (state.category !== 'pace-control' || state.phase !== 'question' || state.paceStage !== stage) return;
    finishPaceAnswer(false,true);
  },seconds * 1000);
}
function finishPaceAnswer(correct,timedOut) {
  const state = stateFor('decision-training');
  if (state.category !== 'pace-control' || state.phase !== 'question') return;
  clearGameTimers();
  const stage = state.paceStage;
  const result = { correct:Boolean(correct), ms:timedOut ? paceSeconds(stage) * 1000 : elapsedFrom(state) };
  state.paceResults[stage] = result;
  if (stage === 'calm') {
    state.phase = 'pace-between';
    renderSelectedGame();
    autoAdvance(startRushedPace,1900);
    return;
  }
  const combinedCorrect = Boolean(state.paceResults.calm?.correct && result.correct);
  const averageMs = Math.round(((state.paceResults.calm?.ms || 0) + result.ms) / 2);
  record('decision-training',combinedCorrect,averageMs,null,'pace-control');
  if (combinedCorrect) state.score += 1;
  profile.custom.calmComparisons.push({calm:state.paceResults.calm,rushed:result});
  profile.custom.calmComparisons = profile.custom.calmComparisons.slice(-30);
  saveProfile();
  state.phase = 'pace-result';
  renderSelectedGame();
  autoAdvance(advanceDecision,2300);
}
function startRushedPace() {
  const state = stateFor('decision-training');
  if (state.category !== 'pace-control') return;
  clearGameTimers(); clearAutoTimer();
  state.paceStage = 'rushed';
  state.options = shuffle(state.question.rushed.options);
  state.startedAt = nowMs();
  state.phase = 'question';
  renderSelectedGame();
  schedulePaceTimeout(state,'rushed');
}

function newRound(id) {
  clearGameTimers(); clearAutoTimer();
  if (id === 'decision-training') { returnDecisionCategories(); return; }
  resetState(id);
  renderSelectedGame();
}
function changeTier(value) {
  const tier = Number(value);
  if (!TIER_DEFINITIONS[tier - 1] || !tierIsUnlocked(ui.selected,tier)) return;
  clearGameTimers(); clearAutoTimer();
  profile.custom.selectedTiers[ui.selected] = tier;
  resetState(ui.selected);
  saveProfile();
  renderSelectedGame();
}
function toggleAutoNext() {
  profile.custom.autoNext[ui.selected] = !autoNextEnabled();
  clearAutoTimer();
  saveProfile();
  syncActiveControls();
}

function handleClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const how = target.closest('[data-darts-how]');
  if (how) { event.preventDefault(); event.stopImmediatePropagation(); openHowToPlay(how.getAttribute('data-darts-how')); return; }
  if (target.closest('[data-close-games-modal]')) { closeInfo(); return; }
  if (target.closest('[data-open-darts-focused]')) { event.preventDefault(); event.stopImmediatePropagation(); openPanel(); return; }
  if (target.closest('[data-close-darts-focused]')) { event.preventDefault(); event.stopImmediatePropagation(); closePanel(); return; }
  if (byId('dartsFocusedPanel')?.classList.contains('is-active') && (target.closest('[data-select-game]') || target.closest('.tab[data-target]'))) closePanel({restoreOverview:false});
  const selector = target.closest('[data-darts-game]');
  if (selector) {
    clearGameTimers(); clearAutoTimer();
    ui.selected = selector.getAttribute('data-darts-game');
    resetState(ui.selected);
    renderSelectedGame();
    byId('dartsGameSurface')?.focus({preventScroll:true});
    return;
  }
  const tier = target.closest('[data-darts-tier]');
  if (tier) { changeTier(tier.getAttribute('data-darts-tier')); return; }
  if (target.closest('#dartsAutoNextBtn')) { toggleAutoNext(); return; }
  if (target.closest('#dartsFullscreenBtn')) { toggleFullscreen(); return; }
  const next = target.closest('[data-darts-new-round]');
  if (next) { newRound(next.getAttribute('data-darts-new-round')); return; }
  const answer = target.closest('[data-darts-answer]');
  if (answer) {
    const id = answer.getAttribute('data-darts-answer');
    if (id === 'decision-training') answerDecisionChoice(answer.getAttribute('data-value'));
    else answerStandard(id,answer.getAttribute('data-value'));
    return;
  }
  if (target.closest('[data-start-target-lock]')) { startTargetLock(); return; }
  if (target.closest('[data-start-hold-picture]')) { startHoldPicture(); return; }
  if (target.closest('[data-start-distraction]')) { startDistraction(); return; }
  if (target.closest('[data-start-pressure]')) { startPressure(); return; }
  if (target.closest('[data-submit-routine]')) { submitRoutine(); return; }
  const move = target.closest('[data-routine-move]');
  if (move) { moveRoutine(move.getAttribute('data-routine-move'),Number(move.getAttribute('data-index'))); return; }
  if (target.closest('[data-start-sequence]')) { startSequence(); return; }
  if (target.closest('[data-clear-sequence]')) { stateFor('sequence-recall').input = []; renderSelectedGame(); return; }
  const category = target.closest('[data-decision-category]');
  if (category) { startDecisionCategory(category.getAttribute('data-decision-category')); return; }
  if (target.closest('[data-decision-submit-facts]')) { submitDecisionFacts(); return; }
  if (target.closest('[data-decision-advance]')) { advanceDecision(); return; }
  if (target.closest('[data-decision-return]')) { returnDecisionCategories(); return; }
  if (target.closest('[data-decision-pace-rushed]')) { startRushedPace(); return; }
  const boardTarget = target.closest('[data-board-target]');
  if (boardTarget) {
    const code = boardTarget.getAttribute('data-board-target');
    if (ui.selected === 'target-lock') answerTarget(code);
    else if (ui.selected === 'board-geography') answerGeography(boardTarget.getAttribute('data-board-segment'));
    else if (ui.selected === 'sequence-recall') sequenceClick(code);
  }
}
function handleChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.matches('[data-confidence-slider]')) {
    const state = stateFor('decision-training'); state.confidence = Number(target.value);
    const value = byId('confidenceValue'); if (value) value.textContent = `${state.confidence}%`;
  }
  if (target.matches('[data-decision-fact]')) {
    const state = stateFor('decision-training');
    const id = target.getAttribute('data-decision-fact');
    state.selected = target.checked ? [...new Set([...state.selected,id])] : state.selected.filter((item) => item !== id);
  }
}
function handleKeydown(event) {
  if (!byId('dartsFocusedPanel')?.classList.contains('is-active')) return;
  if (event.key === 'Escape' && document.fullscreenElement === byId('dartsGameCard')) return;
  if (event.key === 'Escape') { closePanel(); return; }
  const board = event.target.closest?.('[data-board-target]');
  if (board && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); board.click(); return; }
  const selector = event.target.closest?.('[data-darts-game]');
  if (!selector || !['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const buttons = [...document.querySelectorAll('[data-darts-game]')];
  const index = buttons.indexOf(selector);
  const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
  buttons[(index + delta + buttons.length) % buttons.length]?.focus();
}
function installObserver() {
  const list = byId('gamesList');
  if (!list || ui.listObserver) return;
  ui.listObserver = new MutationObserver(queueOverviewSync);
  ui.listObserver.observe(list,{childList:true});
}
function init() {
  ensureStylesheet(); ensurePanel(); ensureOverviewEntry(); installObserver();
  document.addEventListener('click',handleClick,true);
  document.addEventListener('change',handleChange,true);
  document.addEventListener('input',handleChange,true);
  document.addEventListener('keydown',handleKeydown,true);
  document.addEventListener('fullscreenchange',syncFullscreenButton);
  window.addEventListener('beforeunload',() => { clearGameTimers(); clearAutoTimer(); });
  document.documentElement.setAttribute('data-darts-focused-runtime',BUILD);
  renderProgressSummary();
  globalThis.DartsFocusedGames = Object.freeze({
    build:BUILD,
    open:openPanel,
    close:closePanel,
    getProfile:() => JSON.parse(JSON.stringify(profile)),
    getRealmContribution:() => realmContributionForDarts(profile),
    reset:() => { profile = createDefaultDartsProfile(); ui.states = {}; saveProfile(); renderSelectedGame(); }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
