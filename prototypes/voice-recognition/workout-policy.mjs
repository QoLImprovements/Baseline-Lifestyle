export const WORKOUT_VOICE_STATES = Object.freeze({
  AWAIT_BEGIN: 'await_begin',
  ACTIVE: 'active',
  AWAIT_RESULT: 'await_result',
  AWAIT_NUMBER: 'await_number',
  CONFIRM_NUMBER: 'confirm_number',
  REST: 'rest',
  COMPLETE: 'complete'
});

const VOCABULARY = Object.freeze({
  [WORKOUT_VOICE_STATES.AWAIT_BEGIN]: Object.freeze(['begin']),
  [WORKOUT_VOICE_STATES.ACTIVE]: Object.freeze([]),
  [WORKOUT_VOICE_STATES.AWAIT_RESULT]: Object.freeze(['succeeded', 'failed']),
  [WORKOUT_VOICE_STATES.AWAIT_NUMBER]: Object.freeze(['<number>']),
  [WORKOUT_VOICE_STATES.CONFIRM_NUMBER]: Object.freeze(['yes', 'no']),
  [WORKOUT_VOICE_STATES.REST]: Object.freeze(['continue']),
  [WORKOUT_VOICE_STATES.COMPLETE]: Object.freeze([])
});

export function allowedVocabulary(state){
  return VOCABULARY[state] ? [...VOCABULARY[state]] : [];
}

export function recognitionRequest(state, context = {}){
  const vocabulary = allowedVocabulary(state);
  const request = {
    state,
    listen: vocabulary.length > 0,
    mode: state === WORKOUT_VOICE_STATES.AWAIT_NUMBER ? 'number' : 'command',
    vocabulary
  };
  if(request.mode === 'number'){
    const target = Number(context.target);
    request.minimum = 0;
    request.maximum = Number.isFinite(target) && target >= 0 ? Math.floor(target) : null;
    request.unit = String(context.unit || '').trim().toLowerCase() || null;
  }
  return request;
}

export function interpretRecognition({
  state,
  transcript,
  confidence = 1,
  minimumConfidence = 0.72,
  target = null,
  parseNumber = null
}){
  const normalized = String(transcript || '').trim().toLowerCase().replace(/[.!?,;:]+$/g, '');
  if(!normalized) return {accepted:false, reason:'empty'};
  if(!Number.isFinite(confidence) || confidence < minimumConfidence){
    return {accepted:false, reason:'uncertain'};
  }

  if(state === WORKOUT_VOICE_STATES.AWAIT_NUMBER){
    if(typeof parseNumber !== 'function') return {accepted:false, reason:'number_parser_unavailable'};
    const value = parseNumber(normalized);
    if(!Number.isInteger(value) || value < 0) return {accepted:false, reason:'invalid_number'};
    const numericTarget = Number(target);
    if(Number.isFinite(numericTarget) && value > numericTarget){
      return {accepted:false, reason:'number_out_of_range', maximum:Math.floor(numericTarget)};
    }
    return {accepted:true, kind:'number', value};
  }

  const vocabulary = allowedVocabulary(state);
  if(!vocabulary.includes(normalized)) return {accepted:false, reason:'not_allowed_in_state'};
  return {accepted:true, kind:'command', command:normalized};
}
