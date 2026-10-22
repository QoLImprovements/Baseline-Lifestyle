import { calibrationScore } from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';
import { DECISION_CATEGORIES, DECISION_QUESTION_POOLS } from './darts-focused-content.js';
import { boardSvg } from './darts-focused-board.js';
import { escapeHtml, choiceButtons, feedbackHtml } from './darts-focused-ui.js';

export function decisionCategoryIconSvg(id) {
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

export function decisionCategoryMeta(id) {
  return DECISION_CATEGORIES.find((item) => item.id === id);
}

export function decisionSeriesSizeForTier(tier) {
  return [6,8,10][Math.max(1,Math.min(3,Number(tier)||1))-1];
}

export function decisionPoolForTier(category,tier) {
  const level=Math.max(1,Math.min(3,Number(tier)||1));
  const pool=DECISION_QUESTION_POOLS[category] || [];
  const filtered=pool.filter((item)=>Number(item.tier||1)<=level);
  return filtered.length ? filtered : pool;
}

export function decisionAccuracyForProfile(profile,category) {
  const progress=profile.custom.decisionCategoryProgress?.[category] || {attempts:0,correct:0};
  return progress.attempts ? Math.round(progress.correct/progress.attempts*100) : null;
}

export function paceSecondsForTier(stage,tier) {
  const level=Math.max(1,Math.min(3,Number(tier)||1));
  return stage === 'rushed' ? [10,8,6][level-1] : [20,16,12][level-1];
}

export function renderDecisionTrainingView(state,{
  profile,
  tier=1,
  remainingMsForTimer=()=>0,
  formatTime=(ms)=>ms ? `${(ms/1000).toFixed(1)}s` : '—'
}={}) {
  const seriesSize=decisionSeriesSizeForTier(tier);
  const paceSeconds=(stage)=>paceSecondsForTier(stage,tier);
  const decisionPool=(category)=>decisionPoolForTier(category,tier);
  const decisionAccuracy=(category)=>decisionAccuracyForProfile(profile,category);

  if (state.phase === 'categories') {
    return `<div class="darts-game-stack"><div class="darts-decision-intro"><span class="darts-eyebrow">Category training</span><h4>Choose one decision category.</h4><p>Complete ${seriesSize} varied questions. At the end of the series, the game returns to this category list.</p></div><div class="darts-category-grid">${DECISION_CATEGORIES.map((category) => {
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
    const calm=state.paceResults.calm;
    const rushed=state.paceResults.rushed;
    const interpretation=calm.correct&&!rushed.correct
      ? 'The shorter window reduced accuracy in this comparison.'
      : !calm.correct&&rushed.correct
        ? 'The faster answer was stronger this time; repeat the category before drawing a conclusion.'
        : 'Both conditions produced the same accuracy result; the response times still differed.';
    return `<div class="darts-game-stack"><span class="darts-eyebrow">Pace comparison ${state.index + 1} of ${state.queue.length}</span><h4>Decision pace comparison</h4><div class="darts-comparison"><div><small>Deliberate</small><strong>${calm.correct ? 'Correct' : 'Incorrect'} · ${formatTime(calm.ms)}</strong></div><div><small>Faster</small><strong>${rushed.correct ? 'Correct' : 'Incorrect'} · ${formatTime(rushed.ms)}</strong></div></div><div class="darts-feedback is-correct"><strong>Interpretation</strong><p>${escapeHtml(interpretation)}</p></div><button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next comparison'}</button></div>`;
  }

  const q=state.question;
  const progress=`<div class="darts-series-progress"><span>${escapeHtml(category.name)}</span><strong>Question ${state.index + 1} of ${state.queue.length}</strong><button class="action ghost" data-decision-return type="button">Categories</button></div>`;
  if (state.category === 'evidence-reading') {
    return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">Throw order is numbered</span><h4>All three simulated darts were aimed at T20. What does the ordered pattern support?</h4><p>1 = first dart, 2 = second dart, 3 = third dart.</p></div><div class="darts-board-frame">${boardSvg({marks:q.marks,label:'Dartboard with throws numbered in order'})}</div>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'relevant-information') {
    return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">Decision objective</span><h4>${escapeHtml(q.objective)}</h4></div><div class="darts-fact-list">${q.facts.map(([id,text]) => `<label><input type="checkbox" data-decision-fact="${id}" ${state.selected.includes(id) ? 'checked' : ''} ${state.feedback ? 'disabled' : ''}><span>${escapeHtml(text)}</span></label>`).join('')}</div><button class="action primary" data-decision-submit-facts type="button" ${state.feedback ? 'disabled' : ''}>Submit selected facts</button>${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'confidence-calibration') {
    const score=calibrationScore(profile.stats['decision-training']);
    return `<div class="darts-game-stack">${progress}<h4>${escapeHtml(q.prompt)}</h4>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}<label class="darts-confidence-control"><span>Confidence before submitting: <strong id="confidenceValue">${state.confidence}%</strong></span><input type="range" min="0" max="100" step="5" value="${state.confidence}" data-confidence-slider ${state.feedback ? 'disabled' : ''}></label>${feedbackHtml(state)}${state.feedback ? `<div class="darts-calibration-result"><strong>Current calibration score: ${score === null ? 'Not measured' : `${score}%`}</strong><span>Higher means confidence is matching correctness more closely.</span></div><button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
  }
  if (state.category === 'pace-control') {
    const condition=state.paceStage === 'rushed' ? q.rushed : q.calm;
    const seconds=paceSeconds(state.paceStage || 'calm');
    const totalMs=seconds*1000;
    const remainingMs=state.paceTimer ? remainingMsForTimer(state.paceTimer) : totalMs;
    const startScale=Math.max(0,Math.min(1,remainingMs/Math.max(1,totalMs)));
    return `<div class="darts-game-stack">${progress}<div class="darts-pressure-bar ${state.paceStage === 'rushed' ? 'is-rushed' : ''}" style="--pressure-seconds:${Math.max(.001,remainingMs/1000)}s;--pressure-start-scale:${startScale}"><span></span></div><span class="darts-eyebrow">${state.paceStage === 'rushed' ? `Faster condition · ${seconds} seconds` : `Deliberate condition · ${seconds} seconds`}</span><h4>${escapeHtml(condition.prompt)}</h4>${choiceButtons(state.options,'decision-training',false)}</div>`;
  }

  const label=state.category === 'mental-reset' ? 'Mental reset situation' : 'Pressure and temptation';
  return `<div class="darts-game-stack">${progress}<div class="darts-situation-card"><span class="darts-eyebrow">${escapeHtml(label)}</span><h4>${escapeHtml(q.prompt)}</h4></div><p>Choose the disciplined response.</p>${choiceButtons(state.options,'decision-training',Boolean(state.feedback))}${feedbackHtml(state)}${state.feedback ? `<button class="action primary" data-decision-advance type="button">${state.index + 1 >= state.queue.length ? 'Finish series' : 'Next question'}</button>` : ''}</div>`;
}
