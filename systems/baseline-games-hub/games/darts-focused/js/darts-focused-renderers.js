import { remainingAfterHit } from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import { DARTS_ART_URL as ART_URL, escapeHtml, feedbackHtml, choiceButtons } from './darts-focused-ui.js';
import { boardSvg, scenarioHeader, routeRecoveryHeader } from './darts-focused-board.js';

export function createDartsRenderers({
  getProfile,
  tierId,
  nextButton,
  managedTimerRemaining,
  sequenceLengthForTier,
  renderDecisionTraining
}){
  return {
    'checkout-pressure':(state) => {
      const s = state.scenario;
      return `<div class="darts-game-stack">${scenarioHeader('Imagined match state',[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent]])}<h4>Choose the legal checkout route.</h4>${choiceButtons(s.options,'checkout-pressure',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : '<p class="darts-coaching-note">Accuracy remains the priority. Every target code shown is physically possible on a standard board.</p>'}</div>`;
    },
    'route-recovery':(state) => {
      const s = state.scenario;
      const calc = remainingAfterHit(s.start,s.actual);
      return `<div class="darts-game-stack">${routeRecoveryHeader(s)}<div class="darts-calculation-note"><strong>Read the ring before subtracting.</strong><span>${escapeHtml(s.actual)} scores ${calc.scored}; therefore ${s.start} − ${calc.scored} = ${calc.remaining} remaining.</span></div><h4>Choose the valid revised route.</h4>${choiceButtons(s.options,'route-recovery',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton() : ''}</div>`;
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
      const profile=getProfile();
      const level = state.phase === 'ready' ? profile.custom.pressureLevel : (state.level || profile.custom.pressureLevel);
      const baseTimes = tierId('pressure-ladder') === 1 ? [18,16,14,12,10] : tierId('pressure-ladder') === 2 ? [16,14,12,10,8] : [14,12,10,8,6];
      if (state.phase === 'ready') return `<div class="darts-game-stack"><div class="darts-pressure-track">${[1,2,3,4,5].map((n) => `<span class="${n === level ? 'is-current' : n < level ? 'is-complete' : ''}">${n}</span>`).join('')}</div><h4>Pressure level ${level}</h4><p>You will have ${baseTimes[level - 1]} seconds to choose a legal route. Accuracy moves you upward; an error moves you down.</p><button class="action primary" data-start-pressure type="button">Begin level ${level}</button>${feedbackHtml(state)}</div>`;
      const s = state.scenario;
      const totalMs = state.seconds * 1000;
      const remainingMs = state.timer ? managedTimerRemaining(state.timer) : totalMs;
      const startScale = Math.max(0,Math.min(1,remainingMs / Math.max(1,totalMs)));
      return `<div class="darts-game-stack"><div class="darts-pressure-bar" style="--pressure-seconds:${Math.max(.001,remainingMs/1000)}s;--pressure-start-scale:${startScale}"><span></span></div>${scenarioHeader(`Pressure level ${level}`,[['Require',s.score],['Darts',s.darts],['Opponent',s.opponent],['Time',`${state.seconds}s`]])}<h4>Choose now, without abandoning calculation.</h4>${choiceButtons(s.options,'pressure-ladder',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? nextButton('Return to ladder') : ''}</div>`;
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
}
