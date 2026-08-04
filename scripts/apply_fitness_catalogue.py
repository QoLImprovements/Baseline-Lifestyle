#!/usr/bin/env python3
from pathlib import Path
import re
import json

ROOT = Path(__file__).resolve().parents[1]

def replace_once(text, pattern, replacement, label, flags=re.S):
    updated, count = re.subn(pattern, lambda _m: replacement, text, count=1, flags=flags)
    if count != 1:
        raise RuntimeError(f"{label}: expected one replacement, got {count}")
    return updated

# ----- baseline-fitness-app.js -----
app_path = ROOT / "systems/baseline-fitness/js/baseline-fitness-app.js"
app = app_path.read_text()
app = app.replace("BASELINE_FITNESS_PRODUCTION_CRASH_FIX_20260713_1", "BASELINE_FITNESS_EXERCISE_CATALOGUE_20260804_1")
app = replace_once(
    app,
    r"  const TYPES = Object\.freeze\(\{[\s\S]*?  const EXERCISE_BY_NAME = new Map\(EXERCISES\.map\(\(item\) => \[item\.name, item\]\)\);",
    "  const CATALOGUE = global.BASELINE_FITNESS_EXERCISE_CATALOGUE ||\n    (typeof module !== 'undefined' && module.exports ? require('./fitness-exercise-catalogue.js') : null);\n  if (!CATALOGUE) throw new Error('fitness_exercise_catalogue_missing');\n  const { TYPES, LEGACY_TIMED_TYPE, FAMILIES, FAMILY_ORDER, EXERCISES } = CATALOGUE;\n  const EXERCISE_BY_NAME = new Map(EXERCISES.map((item) => [item.name, item]));",
    "catalogue loader"
)
app = app.replace(
    "module.exports = Object.freeze({ TYPES, EXERCISES, setValues, progressedSetValues, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps });",
    "module.exports = Object.freeze({ TYPES, FAMILIES, FAMILY_ORDER, EXERCISES, setValues, progressionIncrements, progressedSetValues, holdIncrement, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps, exerciseOptions });"
)
app = replace_once(
    app,
    r"    const type = Object\.values\(TYPES\)\.includes\(String\(source\.progressionType \|\| ''\)\) \? String\(source\.progressionType\) : definition\.progressionType;",
    "    const rawType = String(source.progressionType || '');\n    const type = rawType === LEGACY_TIMED_TYPE ? TYPES.TIMED : Object.values(TYPES).includes(rawType) ? rawType : definition.progressionType;",
    "normalise legacy timed type",
    flags=0
)
app = app.replace("version: 8", "version: 9")
app = replace_once(
    app,
    r"  function progressionIncrements\(type, count\) \{[\s\S]*?\n  \}\n  function progressedSetValues",
    "  function progressionIncrements(type, count) {\n    const sets = setCount(count);\n    return Array(sets).fill(type === TYPES.LEG ? 3 : 1);\n  }\n  function progressedSetValues",
    "uniform rep increments"
)
app = replace_once(
    app,
    r"  function holdValue\(baseline, sessionIndex\) \{[\s\S]*?\n  \}\n  function workForSession",
    "  function holdIncrement(seconds) {\n    return Math.max(1, Math.round(Number(seconds) || 1)) >= 90 ? 2 : 3;\n  }\n  function holdValue(baseline, sessionIndex) {\n    let seconds = Math.max(1, Math.round(Number(baseline) || 1));\n    for (let session = 2; session <= Math.max(1, Math.round(Number(sessionIndex) || 1)); session += 1) seconds += holdIncrement(seconds);\n    return seconds;\n  }\n  function workForSession",
    "timed guide increments"
)
app = replace_once(
    app,
    r"  function workForSession\(items, sessionIndex\) \{[\s\S]*?\n  \}\n\n  function scheduleDates",
    "  function workForSession(items, sessionIndex) {\n    return (items || []).map((raw) => {\n      const item = normaliseItem(raw);\n      const definition = exerciseDefinition(item.exercise);\n      return definition.unit === 'seconds'\n        ? { item: definition, unit: 'seconds', hold: holdValue(item.baseline, sessionIndex), progressionType: TYPES.TIMED }\n        : { item: definition, unit: 'reps', sets: item.sets, values: progressedSetValues(item.baseline, item.sets, sessionIndex, item.progressionType), progressionType: item.progressionType };\n    });\n  }\n  function executionSteps(work) {\n    const reps = work.filter((item) => item.unit === 'reps');\n    const holds = work.filter((item) => item.unit === 'seconds');\n    const steps = [];\n    const rounds = Math.max(0, ...reps.map((item) => item.values.length));\n\n    for (let round = 0; round < rounds; round += 1) {\n      reps.forEach((entry) => {\n        if (entry.values[round] == null) return;\n        const perSide = entry.item.laterality === 'per-side';\n        steps.push({\n          name: entry.item.name,\n          exercise: entry.item.name,\n          exerciseKey: entry.item.name,\n          label: `${entry.item.name} - (${entry.values[round]}${perSide ? ' per side' : ''})`,\n          target: entry.values[round],\n          unit: 'reps',\n          isTimed: false,\n          progressionType: entry.progressionType,\n          laterality: entry.item.laterality,\n          familyKey: entry.item.familyKey\n        });\n      });\n    }\n\n    holds.forEach((entry) => {\n      const base = {\n        exercise: entry.item.name,\n        target: entry.hold,\n        unit: 'seconds',\n        isTimed: true,\n        progressionType: TYPES.TIMED,\n        laterality: entry.item.laterality,\n        familyKey: entry.item.familyKey\n      };\n      if (entry.item.laterality === 'separate-left-right') {\n        ['Left', 'Right'].forEach((side) => {\n          steps.push(Object.assign({}, base, {\n            name: `${entry.item.name} ${side}`,\n            exerciseKey: `${entry.item.name}::${side.toLowerCase()}`,\n            label: `${entry.item.name} - ${side} • Hold to technical burnout (guide ${entry.hold} seconds)`\n          }));\n        });\n      } else {\n        steps.push(Object.assign({}, base, {\n          name: entry.item.name,\n          exerciseKey: entry.item.name,\n          label: `${entry.item.name} • Hold to technical burnout (guide ${entry.hold} seconds)`\n        }));\n      }\n    });\n    return steps;\n  }\n\n  function scheduleDates",
    "work and execution steps"
)
app = replace_once(
    app,
    r"  function exerciseOptions\(selected\) \{[\s\S]*?\n  \}\n  function baselineLabel",
    "  function exerciseOptions(selected) {\n    return FAMILIES.map((family) => {\n      const options = EXERCISES.filter((item) => item.familyKey === family.key)\n        .map((item) => `<option value=\"${escapeHtml(item.name)}\"${item.name === selected ? ' selected' : ''}>${escapeHtml(item.name)}</option>`)\n        .join('');\n      return `<optgroup label=\"${escapeHtml(family.label)}\">${options}</optgroup>`;\n    }).join('');\n  }\n  function progressionDescription(definition) {\n    if (definition.progressionType === TYPES.TIMED) return 'Hold to technical burnout; next guide is achieved time +3 seconds, changing to +2 seconds from 90 seconds.';\n    if (definition.progressionType === TYPES.LEG) return '+3 repetitions to every set after success.';\n    return '+1 repetition to every set after success.';\n  }\n  function baselineLabel",
    "grouped exercise options"
)
app = app.replace(
    "    row.dataset.progressionType = definition.progressionType;",
    "    row.dataset.progressionType = definition.progressionType;\n    row.dataset.familyKey = definition.familyKey;\n    row.dataset.laterality = definition.laterality;"
)
app = app.replace(
    "    if (source) source.innerHTML = `<strong>${escapeHtml(definition.name)}</strong><p><b>Good for:</b> ${escapeHtml(definition.goodFor)}</p><p><b>How:</b> ${escapeHtml(definition.how)}</p>`;",
    "    if (source) source.innerHTML = `<strong>${escapeHtml(definition.name)}</strong><p><b>Family:</b> ${escapeHtml(definition.family)} • <b>Movement:</b> ${escapeHtml(definition.movementCategory)} • <b>Level:</b> ${escapeHtml(definition.variationLevel)}</p><p><b>Progression:</b> ${escapeHtml(progressionDescription(definition))}</p><p><b>Good for:</b> ${escapeHtml(definition.goodFor)}</p><p><b>How:</b> ${escapeHtml(definition.how)}</p>`;"
)
app = replace_once(
    app,
    r"  function planExerciseRows\(plan, sessionIndex\) \{[\s\S]*?\n  \}\n  function sessionCard",
    "  function planExerciseRows(plan, sessionIndex) {\n    return workForSession(plan.items, sessionIndex).map((entry) => {\n      const detail = entry.unit === 'seconds'\n        ? `Hold to technical burnout • guide <b>${entry.hold}</b> seconds${entry.item.laterality === 'separate-left-right' ? ' for each side.' : '.'}`\n        : `Sets (${entry.sets}): ${entry.values.map((value) => `<b>${value}</b>`).join(' / ')} reps${entry.item.laterality === 'per-side' ? ' per side.' : '.'}`;\n      return `<div class=\"session-subcard plan-exercise-row\"><b>${escapeHtml(entry.item.name)}</b><div>${detail}</div></div>`;\n    }).join('');\n  }\n  function sessionCard",
    "plan exercise rows"
)
app = replace_once(
    app,
    r"  function workoutContext\(\) \{[\s\S]*?\n  \}\n  function notifyWorkout",
    "  function workoutContext() {\n    const empty = { available: false, canStart: false, planId: current.planId || 0, sessionIndex: 0, stepIndex: 0, step: null, steps: [], completedSteps: 0, totalSteps: 0, started: false, allComplete: false, planComplete: false };\n    if (!auth.authed || !current.planJson || !current.sessions.length) return empty;\n    const sessionIndex = Number(current.progress?.nextIndex || 0);\n    const row = current.sessions.find((item) => Number(item.session_index) === sessionIndex);\n    if (!row) return Object.assign(empty, { available: true, allComplete: true, planComplete: true });\n    const steps = executionSteps(workForSession(current.planJson.items, sessionIndex));\n    const state = readStepState(sessionIndex);\n    const completed = Math.round(clamp(state.completedSteps || 0, 0, steps.length));\n    const access = accessFor(row, sessionIndex);\n    const context = {\n      available: true,\n      canStart: access.can,\n      access,\n      planId: current.planId || 0,\n      sessionIndex,\n      scheduledDate: row.scheduled_date || '',\n      stepIndex: completed,\n      step: steps[completed] || null,\n      steps,\n      completedSteps: completed,\n      totalSteps: steps.length,\n      started: Boolean(state.started),\n      results: Object.assign({}, state.results || {}),\n      allComplete: Boolean(steps.length && completed >= steps.length),\n      planComplete: false,\n      timerStartDelay: current.planJson.timerStartDelay || 5\n    };\n    const adjust = global.BASELINE_FITNESS_EXERCISE_PROGRESSION?.adjustContext;\n    return typeof adjust === 'function' ? adjust(context) : context;\n  }\n  function notifyWorkout",
    "workout context"
)
app = replace_once(
    app,
    r"  function recordStep\(status, achieved, inputMode = 'manual'\) \{[\s\S]*?\n  \}\n  function startCurrentWorkout",
    "  function recordStep(status, achieved, inputMode = 'manual') {\n    const context = workoutContext();\n    if (!context.canStart || !context.started || !context.step) return context;\n    const state = readStepState(context.sessionIndex);\n    const step = context.step;\n    state.started = true;\n    state.results[context.stepIndex] = {\n      status: step.isTimed ? 'success' : status,\n      achieved: Math.round(clamp(achieved, 0, 99999)),\n      inputMode: inputMode === 'voice' ? 'voice' : 'manual',\n      exercise: step.exercise || step.name,\n      exerciseKey: step.exerciseKey || step.name,\n      stepName: step.name,\n      isTimed: Boolean(step.isTimed),\n      unit: step.unit\n    };\n    state.completedSteps = Math.max(state.completedSteps || 0, context.stepIndex + 1);\n    state.pendingFailureStep = null;\n    writeStepState(context.sessionIndex, state);\n    renderCurrentWorkout();\n    return workoutContext();\n  }\n  function startCurrentWorkout",
    "record step metadata"
)
app = replace_once(
    app,
    r"  function formatTimer\(seconds\) \{[\s\S]*?\n  \}\n  function renderCurrentWorkout",
    "  function formatTimer(seconds) { const total = Math.max(0, Math.round(Number(seconds) || 0)); return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`; }\n  function closeTimerModal() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } if ($('#timerModal')) $('#timerModal').hidden = true; }\n  function openTimer(step) {\n    const modal = $('#timerModal'); const digits = $('#timerDigits'); const message = $('#timerModalMessage');\n    if (!modal || !digits || !message) return;\n    closeTimerModal();\n    modal.hidden = false;\n    let prep = Math.round(clamp(current.planJson?.timerStartDelay || 5, 1, 10));\n    let elapsed = 0;\n    let phase = 'prep';\n    const tick = () => {\n      if (phase === 'prep') {\n        message.textContent = `Get into position. Hold begins in ${prep} second${prep === 1 ? '' : 's'}.`;\n        digits.textContent = formatTimer(prep);\n        if (prep <= 0) { phase = 'work'; digits.textContent = formatTimer(0); }\n        else prep -= 1;\n      } else {\n        message.textContent = `${step.name} • hold to technical burnout. Guide: ${step.target} seconds.`;\n        digits.textContent = formatTimer(elapsed);\n        elapsed += 1;\n      }\n    };\n    tick();\n    timerInterval = setInterval(tick, 1000);\n  }\n  function renderCurrentWorkout",
    "count-up timer"
)
app = replace_once(
    app,
    r"  function renderCurrentWorkout\(\) \{[\s\S]*?\n  \}\n\n  function applyAuth",
    "  function renderCurrentWorkout() {\n    const out = $('#currentWorkoutOut'); const status = $('#myPlanStatus');\n    if (!out) return;\n    if (!auth.authed || !current.planJson || !current.sessions.length) {\n      out.textContent = auth.authed ? 'Save a plan to unlock your current workout view.' : 'Log in and save a plan to see your current workout.';\n      if (status) status.textContent = '';\n      notifyWorkout(); return;\n    }\n    const context = workoutContext();\n    if (context.planComplete) { out.innerHTML = '<div class=\"card\"><h3 style=\"margin:0\">Plan complete</h3><p class=\"note\">All sessions in this plan have been completed.</p></div>'; if (status) status.textContent = ''; notifyWorkout(); return; }\n    const row = current.sessions.find((item) => Number(item.session_index) === context.sessionIndex);\n    const state = readStepState(context.sessionIndex);\n    if (status) status.textContent = context.access.can ? 'Current workout ready.' : context.access.due ? 'Complete earlier sessions first.' : `Next workout unlocks on ${niceDate(row.scheduled_date)}.`;\n\n    const stepsHtml = context.steps.map((step, index) => {\n      const result = state.results[index];\n      const active = index === context.completedSteps;\n      const canAct = context.access.can && state.started && active;\n      const failOpen = state.pendingFailureStep === index;\n      const resultText = result\n        ? step.isTimed\n          ? `<div class=\"step-status success\">✓ Recorded · ${escapeHtml(result.achieved)} seconds</div>`\n          : `<div class=\"step-status ${result.status === 'success' ? 'success' : 'failed'}\">${result.status === 'success' ? '✓ Succeeded' : '✕ Failed'} · Achieved ${escapeHtml(result.achieved)}</div>`\n        : '';\n      const timedActions = step.isTimed\n        ? `<button class=\"compact-action compact-action--ghost step-timer\" type=\"button\" data-step=\"${index}\" ${canAct ? '' : 'disabled'}>Start Count-Up</button><button class=\"compact-action compact-action--success step-hold-toggle\" type=\"button\" data-step=\"${index}\" ${canAct ? '' : 'disabled'}>Record Hold</button>`\n        : `<button class=\"compact-action compact-action--success step-icon-btn step-success\" type=\"button\" data-step=\"${index}\" ${canAct ? '' : 'disabled'}>✓</button><button class=\"compact-action compact-action--danger step-icon-btn step-fail-toggle\" type=\"button\" data-step=\"${index}\" ${canAct ? '' : 'disabled'}>✕</button>`;\n      const entry = failOpen\n        ? `<div class=\"failure-entry\"><label for=\"failedAmount${index}\" class=\"note\">${step.isTimed ? 'Enter exact burnout time (seconds)' : `Enter achieved ${escapeHtml(step.unit)}`}</label><input id=\"failedAmount${index}\" class=\"failed-amount\" type=\"number\" min=\"0\" inputmode=\"numeric\"><button class=\"compact-action ${step.isTimed ? 'compact-action--success step-hold-save' : 'compact-action--danger step-fail-save'}\" type=\"button\" data-step=\"${index}\">Save</button></div>`\n        : '';\n      return `<div class=\"current-step ${index < context.completedSteps ? 'done' : active ? 'active' : ''}\"><div class=\"current-step-head\"><div><b class=\"current-step-label\">${escapeHtml(step.label)}</b></div><div class=\"step-actions\">${resultText}${timedActions}</div></div>${entry}</div>`;\n    }).join('');\n\n    out.innerHTML = `<div class=\"card session-card\"><div class=\"section-head-actions\"><div><h3 style=\"margin:0\">Session ${context.sessionIndex} - Current</h3><div class=\"session-plan-meta\" style=\"margin-top:12px\"><span class=\"badge\">${escapeHtml(niceDate(row.scheduled_date))}</span><span class=\"badge\">${context.completedSteps}/${context.totalSteps} steps done</span></div></div><div class=\"workout-start-actions\"><button class=\"action secondary voice-workout-start\" type=\"button\" id=\"startVoiceWorkoutBtn\" ${context.access.can ? '' : 'disabled'}>Start (Voice Activated)</button><button class=\"action\" type=\"button\" id=\"startWorkoutBtn\" ${context.access.can ? '' : 'disabled'}>${state.started ? 'Continue Workout' : 'Start Workout'}</button></div></div><div class=\"session-step-list\">${stepsHtml}</div><div class=\"actions-inline\" style=\"margin-top:14px\"><button class=\"compact-action compact-action--primary\" id=\"finishWorkout\" ${context.access.can && context.allComplete ? '' : 'disabled'}>Finish workout</button><button class=\"compact-action compact-action--ghost\" id=\"resetWorkout\" ${context.access.can ? '' : 'disabled'}>Reset workout steps</button></div></div>`;\n    $('#startWorkoutBtn', out)?.addEventListener('click', startCurrentWorkout);\n    $$('.step-success', out).forEach((button) => button.addEventListener('click', () => { const step = context.steps[Number(button.dataset.step)]; recordStep('success', step.target); }));\n    $$('.step-fail-toggle', out).forEach((button) => button.addEventListener('click', () => { const next = readStepState(context.sessionIndex); next.started = true; next.pendingFailureStep = Number(button.dataset.step); writeStepState(context.sessionIndex, next); renderCurrentWorkout(); }));\n    $$('.step-hold-toggle', out).forEach((button) => button.addEventListener('click', () => { const next = readStepState(context.sessionIndex); next.started = true; next.pendingFailureStep = Number(button.dataset.step); writeStepState(context.sessionIndex, next); renderCurrentWorkout(); }));\n    $$('.step-fail-save', out).forEach((button) => button.addEventListener('click', () => { const field = $(`#failedAmount${button.dataset.step}`, out); if (!field || String(field.value).trim() === '') { field?.focus(); return; } recordStep('failed', field.value); }));\n    $$('.step-hold-save', out).forEach((button) => button.addEventListener('click', () => { const field = $(`#failedAmount${button.dataset.step}`, out); if (!field || Number(field.value) <= 0) { field?.focus(); return; } closeTimerModal(); recordStep('success', field.value); }));\n    $$('.step-timer', out).forEach((button) => button.addEventListener('click', () => openTimer(context.steps[Number(button.dataset.step)])));\n    $('#resetWorkout', out)?.addEventListener('click', resetCurrentWorkout);\n    $('#finishWorkout', out)?.addEventListener('click', finishCurrentWorkout);\n    notifyWorkout();\n  }\n\n  function applyAuth",
    "timed workout UI"
)
app = replace_once(
    app,
    r"  function renderLibrary\(\) \{[\s\S]*?\n  \}\n\n  function positive",
    "  function renderLibrary() {\n    const target = $('#exerciseLibrary'); if (!target) return;\n    const query = String($('#exSearch')?.value || '').toLowerCase();\n    const group = $('#exGroup')?.value || 'all';\n    target.innerHTML = EXERCISES\n      .filter((item) => (group === 'all' || item.familyKey === group) && (!query || `${item.name} ${item.family} ${item.section} ${item.movementCategory} ${item.unit}`.toLowerCase().includes(query)))\n      .map((item) => `<div class=\"card exercise-card\"><div class=\"title\">${escapeHtml(item.name)}</div><div class=\"muted\">${escapeHtml(item.family)} • ${escapeHtml(item.movementCategory)} • ${escapeHtml(item.variationLevel)}</div><div class=\"divider\"></div><p>${escapeHtml(item.how)}</p><p class=\"note\"><b>Progression:</b> ${escapeHtml(progressionDescription(item))}</p></div>`)\n      .join('');\n  }\n\n  function positive",
    "exercise library"
)
app = app.replace(
    "    failCurrentStep: (achieved, inputMode = 'manual') => recordStep('failed', achieved, inputMode),",
    "    failCurrentStep: (achieved, inputMode = 'manual') => recordStep('failed', achieved, inputMode),\n    recordTimedCurrentStep: (achieved, inputMode = 'manual') => recordStep('success', achieved, inputMode),"
)
app = app.replace(
    "global.BASELINE_FITNESS_DEBUG = Object.freeze({ BUILD, TYPES, EXERCISES, setValues, progressedSetValues, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps });",
    "global.BASELINE_FITNESS_DEBUG = Object.freeze({ BUILD, TYPES, FAMILIES, FAMILY_ORDER, EXERCISES, setValues, progressionIncrements, progressedSetValues, holdIncrement, holdValue, normalisePlan, workForSession, work: workForSession, executionSteps, exerciseOptions });"
)
app_path.write_text(app)

# ----- fitness-saved-data-bridge.js -----
bridge_path = ROOT / "systems/baseline-fitness/js/fitness-saved-data-bridge.js"
bridge = bridge_path.read_text()
marker = "/*\n * Independent linear exercise progression."
index = bridge.find(marker)
if index < 0:
    raise RuntimeError("bridge progression marker not found")
bridge_path.write_text(bridge[:index] + """/*
 * Independent exercise progression and timed-burnout history.
 *
 * Rep exercises progress independently: leg-reps add three to every set and
 * standard-reps add one. A failed rep exercise repeats only its own targets.
 *
 * Timed holds are measurements, not pass/fail targets. The user holds to
 * technical burnout, the exact achieved duration is recorded, and the next
 * guide is achieved time +3 seconds (or +2 seconds from 90 seconds onward).
 */
(function (global) {
  'use strict';

  const STEP_PREFIX = '__bl_fitness_workout_progress_v2__::';
  const PLAN_CACHE_PREFIX = '__bl_fitness_plan_cache_v1__::';
  const PLAN_PREFIX = '__bl_fitness_plan_v1__::';
  const TYPES = Object.freeze({
    STANDARD: 'standard-reps',
    LEG: 'leg-reps',
    TIMED: 'timed-hold-burnout',
    LEGACY_TIMED: 'timed-hold'
  });
  const REP_INCREMENT = Object.freeze({ [TYPES.STANDARD]: 1, [TYPES.LEG]: 3 });
  const ANCHOR_SESSION = 6;
  const ANCHOR_VALUES = Object.freeze([44, 41, 47]);

  function parseJson(raw) {
    try { const value = JSON.parse(String(raw)); return value && typeof value === 'object' ? value : null; }
    catch (_error) { return null; }
  }
  function normaliseOwner(value) { return String(value || '').trim().toLowerCase(); }
  function ownerName() {
    try {
      const snapshot = global.BASELINE_auth?.get?.();
      return snapshot?.authed ? normaliseOwner(snapshot.name || snapshot.user?.name || '') : '';
    } catch (_error) { return ''; }
  }
  function parseStepKey(key) {
    if (!String(key || '').startsWith(STEP_PREFIX)) return null;
    const parts = String(key).slice(STEP_PREFIX.length).split('::');
    const planId = Number(parts.shift() || 0);
    const sessionIndex = Number(parts.shift() || 0);
    const owner = normaliseOwner(parts.join('::'));
    return planId && sessionIndex ? { planId, sessionIndex, owner } : null;
  }
  function stepKey(planId, sessionIndex, owner = ownerName()) {
    return `${STEP_PREFIX}${Number(planId) || 0}::${Number(sessionIndex) || 0}::${normaliseOwner(owner)}`;
  }
  function canonicalExerciseName(name) {
    return String(name || '').trim().replace(/\s+(Left|Right)$/i, '');
  }
  function timedExerciseKey(name) {
    const raw = String(name || '').trim();
    const side = raw.match(/\s+(Left|Right)$/i);
    return side
      ? `${canonicalExerciseName(raw)}::${side[1].toLowerCase()}`
      : canonicalExerciseName(raw);
  }
  function isTimedType(type) {
    return [TYPES.TIMED, TYPES.LEGACY_TIMED].includes(String(type || ''));
  }
  function normaliseHistory(value) {
    const source = value && typeof value === 'object' ? value : {};
    const rawFailures = source.failuresBySession && typeof source.failuresBySession === 'object'
      ? source.failuresBySession
      : {};
    const rawTimed = source.timedBySession && typeof source.timedBySession === 'object'
      ? source.timedBySession
      : {};
    const failuresBySession = {};
    const timedBySession = {};

    Object.entries(rawFailures).forEach(([session, names]) => {
      const index = Math.max(1, Math.round(Number(session) || 0));
      if (!index || !Array.isArray(names)) return;
      failuresBySession[String(index)] = Array.from(new Set(names.map(canonicalExerciseName).filter(Boolean)));
    });

    Object.entries(rawTimed).forEach(([session, values]) => {
      const index = Math.max(1, Math.round(Number(session) || 0));
      if (!index || !values || typeof values !== 'object') return;
      const clean = {};
      Object.entries(values).forEach(([key, seconds]) => {
        const achieved = Math.max(0, Math.round(Number(seconds) || 0));
        if (key && achieved > 0) clean[String(key)] = achieved;
      });
      if (Object.keys(clean).length) timedBySession[String(index)] = clean;
    });

    return { failuresBySession, timedBySession };
  }
  function failedExercises(results) {
    const failed = new Set();
    Object.values(results && typeof results === 'object' ? results : {}).forEach((result) => {
      if (!result || result.status !== 'failed' || result.isTimed || result.unit === 'seconds') return;
      const exercise = canonicalExerciseName(result.exercise);
      if (exercise) failed.add(exercise);
    });
    return Array.from(failed);
  }
  function recordFailures(history, sessionIndex, exercises) {
    const next = normaliseHistory(history);
    next.failuresBySession[String(Math.max(1, Math.round(Number(sessionIndex) || 1)))] =
      Array.from(new Set((exercises || []).map(canonicalExerciseName).filter(Boolean)));
    return next;
  }
  function recordTimedResults(history, sessionIndex, results) {
    const next = normaliseHistory(history);
    const session = String(Math.max(1, Math.round(Number(sessionIndex) || 1)));
    const values = Object.assign({}, next.timedBySession[session] || {});

    Object.values(results && typeof results === 'object' ? results : {}).forEach((result) => {
      if (!result || !(result.isTimed || result.unit === 'seconds')) return;
      const achieved = Math.max(0, Math.round(Number(result.achieved) || 0));
      const key = String(result.exerciseKey || timedExerciseKey(result.stepName || result.exercise || ''));
      if (key && achieved > 0) values[key] = achieved;
    });

    if (Object.keys(values).length) next.timedBySession[session] = values;
    return next;
  }
  function failureCountBefore(exercise, sessionIndex, history) {
    const name = canonicalExerciseName(exercise);
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    return Object.entries(normaliseHistory(history).failuresBySession).reduce((count, [failedSession, names]) => (
      Number(failedSession) < session && names.includes(name) ? count + 1 : count
    ), 0);
  }
  function effectiveSession(exercise, sessionIndex, history) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    return Math.max(1, session - failureCountBefore(exercise, session, history));
  }
  function latestTimedAchievement(exerciseKey, sessionIndex, history) {
    const key = String(exerciseKey || '');
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const timed = normaliseHistory(history).timedBySession;
    const previous = Object.keys(timed)
      .map(Number)
      .filter((index) => index < session && timed[String(index)]?.[key] > 0)
      .sort((a, b) => b - a)[0];
    return previous ? Number(timed[String(previous)][key]) : null;
  }
  function holdIncrement(seconds) {
    return Math.max(1, Math.round(Number(seconds) || 1)) >= 90 ? 2 : 3;
  }
  function timedGuideFromAchievement(seconds) {
    const achieved = Math.max(1, Math.round(Number(seconds) || 1));
    return achieved + holdIncrement(achieved);
  }
  function setCount(value) { return Math.max(1, Math.min(5, Math.round(Number(value) || 3))); }
  function setValues(baseline, count) {
    const max = Math.max(1, Math.round(Number(baseline) || 1));
    const sets = setCount(count);
    if (sets === 1) return [max];
    if (sets === 2) return [Math.max(1, Math.round(max * 0.75)), Math.max(1, Math.round(max * 0.85))];
    if (sets === 3) {
      const first = Math.max(1, Math.round(max * 0.75));
      const second = Math.max(1, Math.round(max * 0.70));
      let third = Math.max(1, Math.round(max * 0.80));
      if (third <= Math.max(first, second)) third = Math.max(first, second) + 1;
      return [first, second, third];
    }
    return (sets === 4 ? [0.62, 0.70, 0.76, 0.84] : [0.58, 0.64, 0.70, 0.76, 0.84])
      .map((ratio) => Math.max(1, Math.round(max * ratio)));
  }
  function progressionIncrements(type, count) {
    const sets = setCount(count);
    const increment = REP_INCREMENT[String(type || '')] || REP_INCREMENT[TYPES.STANDARD];
    return Array(sets).fill(increment);
  }
  function progressedSetValues(baseline, count, sessionIndex, type = TYPES.STANDARD) {
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const increments = progressionIncrements(type, count);
    return setValues(baseline, count).map((value, index) => value + ((session - 1) * increments[index]));
  }
  function holdValue(baseline, sessionIndex) {
    let seconds = Math.max(1, Math.round(Number(baseline) || 1));
    for (let session = 2; session <= Math.max(1, Math.round(Number(sessionIndex) || 1)); session += 1) seconds += holdIncrement(seconds);
    return seconds;
  }
  function targetsForExercise(item, sessionIndex) {
    const source = item && typeof item === 'object' ? item : {};
    const exercise = canonicalExerciseName(source.exercise);
    const session = Math.max(1, Math.round(Number(sessionIndex) || 1));
    const baseline = Math.max(1, Math.round(Number(source.baseline) || 1));
    const sets = setCount(source.sets || 3);
    const type = String(source.progressionType || TYPES.STANDARD);
    if (isTimedType(type) || !Object.hasOwn(source, 'sets')) return [holdValue(baseline, session)];

    if (exercise === 'Squats' && baseline === 40 && sets === 3 && session >= ANCHOR_SESSION) {
      const increase = (session - ANCHOR_SESSION) * REP_INCREMENT[TYPES.LEG];
      return ANCHOR_VALUES.map((value) => value + increase);
    }
    return progressedSetValues(baseline, sets, session, type);
  }
  function planForOwner(owner = ownerName()) {
    if (!global.localStorage || !owner) return null;
    const cached = parseJson(global.localStorage.getItem(`${PLAN_CACHE_PREFIX}${owner}`));
    if (cached?.planJson?.items) return cached.planJson;
    const saved = parseJson(global.localStorage.getItem(`${PLAN_PREFIX}${owner}`));
    if (saved?.planJson?.items) return saved.planJson;
    if (saved?.items) return saved;
    return null;
  }
  function planFromGeneratorUi() {
    if (!global.document) return null;
    const rows = Array.from(global.document.querySelectorAll('#exerciseList .ex-row'));
    const items = rows.map((row) => {
      const exercise = String(row.querySelector('.ex-select')?.value || '').trim();
      if (!exercise) return null;
      const progressionType = String(row.dataset.progressionType || TYPES.STANDARD);
      const item = {
        exercise,
        baseline: Math.max(1, Math.round(Number(row.querySelector('.ex-baseline')?.value) || 1)),
        progressionType
      };
      if (!isTimedType(progressionType)) {
        const control = row.querySelector('.ex-sets');
        item.sets = setCount(control?.value || control?.dataset.lastSets || 3);
      }
      return item;
    }).filter(Boolean);
    return items.length ? { items } : null;
  }
  function itemForExercise(plan, exercise) {
    const name = canonicalExerciseName(exercise);
    return Array.isArray(plan?.items) ? plan.items.find((item) => canonicalExerciseName(item?.exercise) === name) || null : null;
  }
  function historyForContext(context) {
    if (!global.localStorage || !context?.planId || !context?.sessionIndex) return normaliseHistory(null);
    const state = parseJson(global.localStorage.getItem(stepKey(context.planId, context.sessionIndex)));
    return normaliseHistory(state?.exerciseProgression || state?.exerciseFailures);
  }
  function replaceTargetInLabel(step, target) {
    const label = String(step.label || step.name || '');
    if (step.isTimed || step.unit === 'seconds') {
      if (/guide\s+\d+\s+seconds/i.test(label)) return label.replace(/guide\s+\d+\s+seconds/i, `guide ${target} seconds`);
      return `${step.name} • Hold to technical burnout (guide ${target} seconds)`;
    }
    return label.replace(/\(\d+(?:\s+per side)?\)/, `(${target}${step.laterality === 'per-side' ? ' per side' : ''})`);
  }
  function adjustedContext(source) {
    if (!source || typeof source !== 'object' || !Array.isArray(source.steps)) return source;
    const context = Object.assign({}, source);
    const steps = source.steps.map((step) => step && typeof step === 'object' ? Object.assign({}, step) : step);
    const history = historyForContext(source);
    const plan = planForOwner();
    const repGroups = new Map();

    steps.forEach((step, index) => {
      const exercise = canonicalExerciseName(step?.exercise || step?.name);
      if (!exercise) return;
      step.exercise = exercise;

      if (step.isTimed || step.unit === 'seconds') {
        const key = timedExerciseKey(step.name || exercise);
        const previous = latestTimedAchievement(key, source.sessionIndex, history);
        const item = itemForExercise(plan, exercise);
        const target = previous
          ? timedGuideFromAchievement(previous)
          : Number(targetsForExercise(item || { exercise, baseline: step.target || 1, progressionType: TYPES.TIMED }, source.sessionIndex)[0]);
        step.exerciseKey = key;
        step.progressionSession = source.sessionIndex;
        step.target = target;
        step.progressionType = TYPES.TIMED;
        step.label = replaceTargetInLabel(step, target);
        return;
      }

      if (!repGroups.has(exercise)) repGroups.set(exercise, []);
      repGroups.get(exercise).push(index);
    });

    repGroups.forEach((indexes, exercise) => {
      const item = itemForExercise(plan, exercise);
      const progressionSession = effectiveSession(exercise, source.sessionIndex, history);
      let targets = item ? targetsForExercise(item, progressionSession) : null;
      if (!targets || !targets.length) {
        const failures = failureCountBefore(exercise, source.sessionIndex, history);
        const fallbackIncrement = String(steps[indexes[0]]?.progressionType || '') === TYPES.LEG ? 3 : 1;
        targets = indexes.map((index) => Math.max(1, Number(steps[index]?.target || 1) - (failures * fallbackIncrement)));
      }
      indexes.forEach((stepIndex, position) => {
        const step = steps[stepIndex];
        const target = Number(targets[Math.min(position, targets.length - 1)] || step.target || 1);
        step.exercise = exercise;
        step.progressionSession = progressionSession;
        step.target = target;
        step.label = replaceTargetInLabel(step, target);
      });
    });

    const results = {};
    Object.entries(source.results && typeof source.results === 'object' ? source.results : {}).forEach(([index, raw]) => {
      const result = raw && typeof raw === 'object' ? Object.assign({}, raw) : raw;
      const step = steps[Number(index)];
      if (result && step) {
        result.exercise = canonicalExerciseName(result.exercise || step.exercise || step.name);
        result.exerciseKey = result.exerciseKey || step.exerciseKey || timedExerciseKey(step.name || result.exercise);
        result.stepName = result.stepName || step.name;
        result.isTimed = Boolean(result.isTimed || step.isTimed);
        result.unit = result.unit || step.unit;
        if (result.status === 'success' && !result.isTimed) result.achieved = Number(step.target);
      }
      results[index] = result;
    });

    context.steps = steps;
    context.results = results;
    context.step = steps[Number(context.stepIndex || 0)] || null;
    return context;
  }

  const PUBLIC_API = Object.freeze({
    TYPES,
    canonicalExerciseName,
    timedExerciseKey,
    normaliseHistory,
    failedExercises,
    recordFailures,
    recordTimedResults,
    failureCountBefore,
    effectiveSession,
    latestTimedAchievement,
    holdIncrement,
    timedGuideFromAchievement,
    progressionIncrements,
    progressedSetValues,
    targetsForExercise,
    adjustContext: adjustedContext
  });
  global.BASELINE_FITNESS_EXERCISE_PROGRESSION = PUBLIC_API;
  if (typeof module !== 'undefined' && module.exports) module.exports = PUBLIC_API;

  if (!global.localStorage || typeof Storage === 'undefined' || global.__BASELINE_FITNESS_INDEPENDENT_PROGRESSION__) return;
  global.__BASELINE_FITNESS_INDEPENDENT_PROGRESSION__ = true;

  const previousSet = Storage.prototype.setItem;
  const previousRemove = Storage.prototype.removeItem;
  let originalWorkout = null;
  let frame = 0;

  function contextForSession(sessionIndex) {
    const context = originalWorkout?.getCurrentContext?.();
    return Number(context?.sessionIndex) === Number(sessionIndex) ? context : null;
  }
  function enrichState(key, rawState) {
    const parsed = parseStepKey(key);
    const state = rawState && typeof rawState === 'object' ? Object.assign({}, rawState) : {};
    if (!parsed) return state;
    const existing = parseJson(global.localStorage.getItem(key));
    state.exerciseProgression = normaliseHistory(state.exerciseProgression || state.exerciseFailures || existing?.exerciseProgression || existing?.exerciseFailures);
    delete state.exerciseFailures;
    state.results = state.results && typeof state.results === 'object' ? Object.assign({}, state.results) : {};

    const rawContext = contextForSession(parsed.sessionIndex);
    const context = rawContext ? adjustedContext(rawContext) : null;
    Object.entries(state.results).forEach(([index, raw]) => {
      if (!raw || typeof raw !== 'object') return;
      const result = Object.assign({}, raw);
      const step = context?.steps?.[Number(index)] || rawContext?.steps?.[Number(index)];
      result.exercise = canonicalExerciseName(result.exercise || step?.exercise || step?.name);
      result.exerciseKey = result.exerciseKey || step?.exerciseKey || timedExerciseKey(step?.name || result.exercise);
      result.stepName = result.stepName || step?.name;
      result.isTimed = Boolean(result.isTimed || step?.isTimed);
      result.unit = result.unit || step?.unit;
      if (result.status === 'success' && step && !result.isTimed) result.achieved = Number(step.target);
      state.results[index] = result;
    });
    return state;
  }

  Storage.prototype.setItem = function (key, rawValue) {
    if (this === global.localStorage && typeof key === 'string' && key.startsWith(STEP_PREFIX)) {
      const value = enrichState(key, parseJson(rawValue) || {});
      const result = previousSet.call(this, key, JSON.stringify(value));
      schedulePatch();
      return result;
    }
    return previousSet.apply(this, arguments);
  };

  Storage.prototype.removeItem = function (key) {
    if (this !== global.localStorage || typeof key !== 'string' || !key.startsWith(STEP_PREFIX)) return previousRemove.apply(this, arguments);
    const parsed = parseStepKey(key);
    const removed = parseJson(global.localStorage.getItem(key)) || {};
    const history = normaliseHistory(removed.exerciseProgression || removed.exerciseFailures);
    const result = previousRemove.apply(this, arguments);
    const next = originalWorkout?.getCurrentContext?.();

    if (parsed && next && Number(next.planId) === parsed.planId) {
      if (Number(next.sessionIndex) === parsed.sessionIndex) {
        global.localStorage.setItem(key, JSON.stringify({ completedSteps: 0, started: false, results: {}, pendingFailureStep: null, exerciseProgression: history }));
      } else if (Number(next.sessionIndex) > parsed.sessionIndex) {
        let updatedHistory = recordFailures(history, parsed.sessionIndex, failedExercises(removed.results));
        updatedHistory = recordTimedResults(updatedHistory, parsed.sessionIndex, removed.results);
        const nextKey = stepKey(parsed.planId, next.sessionIndex, parsed.owner);
        const existing = parseJson(global.localStorage.getItem(nextKey)) || {};
        existing.exerciseProgression = updatedHistory;
        delete existing.exerciseFailures;
        global.localStorage.setItem(nextKey, JSON.stringify(existing));
      }
    }
    schedulePatch();
    return result;
  };

  function repairCurrentState() {
    const context = originalWorkout?.getCurrentContext?.();
    if (!context?.planId || !context?.sessionIndex) return;
    const key = stepKey(context.planId, context.sessionIndex);
    const state = parseJson(global.localStorage.getItem(key));
    if (!state) return;
    const enriched = enrichState(key, state);
    if (JSON.stringify(enriched) !== JSON.stringify(state)) global.localStorage.setItem(key, JSON.stringify(enriched));
  }
  function sessionIndexFromCard(card) {
    const text = String(card?.querySelector?.('.title, h3')?.textContent || '');
    const match = text.match(/Session\s+(\d+)/i);
    return match ? Number(match[1]) : 0;
  }
  function patchPlanRows(root, selector, plan, history) {
    if (!plan) return;
    root.querySelectorAll?.(selector).forEach((card) => {
      const sessionIndex = sessionIndexFromCard(card);
      if (!sessionIndex) return;
      card.querySelectorAll('.plan-exercise-row').forEach((row) => {
        const exercise = canonicalExerciseName(row.firstElementChild?.textContent);
        const item = itemForExercise(plan, exercise);
        if (!item || isTimedType(item.progressionType)) return;
        const session = effectiveSession(exercise, sessionIndex, history);
        const targets = targetsForExercise(item, session);
        const detail = Array.from(row.children).find((child) => child.tagName === 'DIV');
        const numbers = detail ? Array.from(detail.querySelectorAll('b')) : [];
        numbers.forEach((node, index) => {
          const value = String(targets[Math.min(index, targets.length - 1)]);
          if (node.textContent !== value) node.textContent = value;
        });
      });
    });
  }
  function patchCurrentWorkout(root) {
    const context = adjustedContext(originalWorkout?.getCurrentContext?.());
    if (!context?.steps) return;
    const labels = Array.from(root.querySelectorAll?.('#currentWorkoutOut .current-step-label') || []);
    labels.forEach((node, index) => {
      const step = context.steps[index];
      if (!step) return;
      if (node.textContent !== step.label) node.textContent = step.label;
      const status = node.closest('.current-step')?.querySelector('.step-status.success');
      if (status && !step.isTimed && /Achieved\s+\d+/i.test(status.textContent)) {
        const nextText = status.textContent.replace(/Achieved\s+\d+/i, `Achieved ${step.target}`);
        if (status.textContent !== nextText) status.textContent = nextText;
      }
    });
  }
  function patchVoiceDisplay(root) {
    const context = adjustedContext(originalWorkout?.getCurrentContext?.());
    const name = root.querySelector?.('#voiceExerciseName');
    const target = root.querySelector?.('#voiceExerciseTarget');
    if (!context?.step || !name || !target) return;
    if (canonicalExerciseName(name.textContent) !== canonicalExerciseName(context.step.name) && !String(name.textContent).includes(context.step.name)) return;
    const nextText = context.step.isTimed
      ? `Hold to technical burnout • guide ${context.step.target} seconds`
      : String(target.textContent || '').replace(/\d+/, String(context.step.target));
    if (target.textContent !== nextText) target.textContent = nextText;
  }
  function patchPage() {
    frame = 0;
    if (!global.document) return;
    repairCurrentState();
    const context = originalWorkout?.getCurrentContext?.();
    patchPlanRows(global.document, '#myPlanSavedWrap .session-card', planForOwner(), historyForContext(context));
    patchPlanRows(global.document, '#planOut .session-card', planFromGeneratorUi(), normaliseHistory(null));
    patchCurrentWorkout(global.document);
    patchVoiceDisplay(global.document);
  }
  function schedulePatch() {
    if (frame || !global.requestAnimationFrame) return;
    frame = global.requestAnimationFrame(patchPage);
  }
  function installWorkoutWrapper() {
    const candidate = global.BASELINE_fitnessWorkout;
    if (!candidate || candidate.__independentExerciseProgression) {
      if (!candidate) global.setTimeout(installWorkoutWrapper, 50);
      return;
    }
    originalWorkout = candidate;
    const wrapper = {
      __independentExerciseProgression: true,
      BUILD: `${candidate.BUILD || 'BASELINE_FITNESS'}_CATALOGUE_AND_BURNOUT_20260804_1`,
      getCurrentContext() { return adjustedContext(candidate.getCurrentContext?.()); },
      startSession() { const result = candidate.startSession?.(); schedulePatch(); return adjustedContext(result); },
      succeedCurrentStep(inputMode = 'manual') {
        const result = candidate.succeedCurrentStep?.(inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      failCurrentStep(achieved, inputMode = 'manual') {
        const result = candidate.failCurrentStep?.(achieved, inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      recordTimedCurrentStep(achieved, inputMode = 'manual') {
        const result = candidate.recordTimedCurrentStep?.(achieved, inputMode) || candidate.succeedCurrentStep?.(inputMode);
        repairCurrentState(); schedulePatch(); return adjustedContext(result);
      },
      async finishSession() {
        repairCurrentState();
        const result = await candidate.finishSession?.();
        schedulePatch(); return adjustedContext(result);
      },
      resetSession() {
        const result = candidate.resetSession?.();
        schedulePatch(); return adjustedContext(result);
      },
      onChange(listener) {
        return candidate.onChange?.((context) => { schedulePatch(); listener(adjustedContext(context)); });
      }
    };
    global.BASELINE_fitnessWorkout = Object.freeze(wrapper);
    repairCurrentState();
    schedulePatch();
  }

  installWorkoutWrapper();
  if (global.document) {
    const observer = new MutationObserver(schedulePatch);
    observer.observe(global.document.documentElement, { childList: true, subtree: true, characterData: true });
    global.addEventListener?.('pagehide', () => observer.disconnect(), { once: true });
  }
})(typeof window !== 'undefined' ? window : globalThis);
""")

# ----- baseline-fitness-voice.js -----
voice_path = ROOT / "systems/baseline-fitness/js/baseline-fitness-voice.js"
voice = voice_path.read_text()
voice = voice.replace("BASELINE_FITNESS_VOICE_FALLBACK_20260803_1", "BASELINE_FITNESS_VOICE_BURNOUT_HOLDS_20260804_1")
voice = voice.replace("      remaining: 0,", "      remaining: 0,\n      elapsed: 0,")
voice = replace_once(
    voice,
    r"  function k\(\) \{[\s\S]*?\n  \}\n  function y\(t\)",
    "  function k() {\n    (a.timer && t.clearInterval(a.timer), (a.timer = null), (a.remaining = 0), (a.elapsed = 0));\n  }\n  function y(t)",
    "voice timer reset"
)
voice = voice.replace('v("#voiceWorkoutTimerLabel", "Time remaining")', 'v("#voiceWorkoutTimerLabel", "Hold time")')
voice = voice.replace(
    '(n.textContent = t.step ? `${t.step.target} ${t.step.unit}` : "");',
    '(n.textContent = t.step ? (t.step.isTimed ? `Hold to technical burnout • guide ${t.step.target} seconds` : `${t.step.target} ${t.step.unit}`) : "");'
)
voice = voice.replace(
    "                if (/\\b(stop|end|cancel)\\s+(voice\\s+)?workout\\b/.test(i))\n                  return void C(!1);",
    "                if (a.state === n.TIMING && /\\b(stop|done|finished|burnout)\\b/.test(i))\n                  return void (await (async function () {\n                    const achieved = Math.max(1, a.elapsed || 1);\n                    k();\n                    b(\"Recorded\");\n                    p()?.recordTimedCurrentStep?.(achieved, \"voice\");\n                    const e = m();\n                    if ((E(e), e?.allComplete || !e?.step))\n                      return ((a.state = n.FINISHED), void (await M(\"Workout steps complete. Use Finish Workout to complete this session.\")));\n                    await L();\n                  })());\n                if (/\\b(stop|end|cancel)\\s+(voice\\s+)?workout\\b/.test(i))\n                  return void C(!1);"
)
voice = replace_once(
    voice,
    r"                      if \(e\.step\.isTimed\)[\s\S]*?\n                      \(\(a\.state = n\.RESULT\),",
    "                      if (e.step.isTimed)\n                        return (\n                          k(),\n                          (a.state = n.TIMING),\n                          (a.elapsed = 0),\n                          y(a.elapsed),\n                          await M(`Hold to technical burnout. The guide is ${e.step.target} seconds. Say Stop when your form reaches burnout.`),\n                          void (a.timer = t.setInterval(() => {\n                            a.elapsed += 1;\n                            y(a.elapsed);\n                          }, 1e3))\n                        );\n                      ((a.state = n.RESULT),",
    "voice timed count-up"
)
voice = voice.replace(
    '    ((a.state = n.BEGIN), await M("When Ready, Say “Begin”."));',
    '    ((a.state = n.BEGIN), await M(t.step?.isTimed ? "When ready, say Begin. Hold to technical burnout, then say Stop." : "When Ready, Say “Begin”.”));'
)
voice_path.write_text(voice)

# ----- HTML assets and filters -----
html_path = ROOT / "systems/baseline-fitness/baseline-fitness.html"
html = html_path.read_text()
html = html.replace(
    '<select id="exGroup"><option value="all">All</option><option value="upper">Upper body</option><option value="lower">Lower body</option><option value="core">Core</option></select>',
    '<select id="exGroup"><option value="all">All exercise families</option>' +
    '<option value="push-ups">Push-Ups</option><option value="squats">Squats</option><option value="planks">Planks</option>' +
    '<option value="side-planks">Side Planks</option><option value="reverse-planks">Reverse Planks</option><option value="lunges">Lunges</option>' +
    '<option value="hip-glute-glute-bridges">Hip &amp; Glute — Glute Bridges</option><option value="hip-glute-hip-hinges">Hip &amp; Glute — Hip Hinges</option>' +
    '<option value="hip-glute-hip-abduction">Hip &amp; Glute — Hip Abduction</option><option value="pulling-rows">Pulling — Rows</option>' +
    '<option value="pulling-pull-ups">Pulling — Pull-Ups</option><option value="other-core">Other Core</option></select>'
)
old_bridge = '<script defer="defer" src="/systems/baseline-fitness/js/fitness-saved-data-bridge.js?v=BASELINE_FITNESS_SAVED_DATA_20260802_1"></script>'
new_assets = '<script defer="defer" src="/systems/baseline-fitness/js/fitness-exercise-catalogue.js?v=BASELINE_FITNESS_EXERCISE_CATALOGUE_20260804_1"></script><script defer="defer" src="/systems/baseline-fitness/js/fitness-saved-data-bridge.js?v=BASELINE_FITNESS_SAVED_DATA_CATALOGUE_20260804_1"></script>'
if old_bridge not in html:
    raise RuntimeError("old bridge asset key not found")
html = html.replace(old_bridge, new_assets)
html = html.replace("baseline-fitness-app.js?v=BASELINE_FITNESS_SINGLE_RUNTIME_20260713_1", "baseline-fitness-app.js?v=BASELINE_FITNESS_EXERCISE_CATALOGUE_20260804_1")
html = html.replace("baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_OVERLAY_FIX_20260803_2", "baseline-fitness-voice.js?v=BASELINE_FITNESS_VOICE_BURNOUT_HOLDS_20260804_1")
html_path.write_text(html)

# ----- package test registration -----
package_path = ROOT / "package.json"
package = json.loads(package_path.read_text())
structure = package["scripts"]["test:structure"]
for test_file in ["tests/fitness-exercise-catalogue.test.mjs", "tests/fitness-independent-exercise-progression.test.mjs"]:
    if test_file not in structure:
        structure += " " + test_file
package["scripts"]["test:structure"] = structure
package_path.write_text(json.dumps(package, indent=2) + "\n")
