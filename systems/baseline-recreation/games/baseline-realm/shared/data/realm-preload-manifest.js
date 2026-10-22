export const REALM_PRELOAD_GROUPS = Object.freeze({
  shared: Object.freeze([
    { type: 'text', path: '/systems/baseline-recreation/games/baseline-realm/shared/icons/realm-icons.svg' },
    { type: 'text', path: '/systems/baseline-recreation/games/baseline-realm/shared/data/realm-materials.js' }
  ]),
  basecamp: Object.freeze([
    { type: 'image', path: '/systems/baseline-recreation/games/baseline-realm/basecamp/art/basecamp-settlement.svg' }
  ]),
  ninjaTraining: Object.freeze([
    { type: 'image', path: '/systems/baseline-recreation/games/baseline-realm/ninja-training/assets/alder-veil-run.svg' },
    { type: 'image', path: '/systems/baseline-recreation/games/baseline-realm/ninja-training/assets/mossblade-pursuer.svg' }
  ]),
  exploration: Object.freeze([]),
  workshop: Object.freeze([]),
  calorieEscape: Object.freeze([]),
  tacticalOperations: Object.freeze([])
});

export const REALM_CRITICAL_PRELOAD = Object.freeze([
  ...REALM_PRELOAD_GROUPS.shared,
  ...REALM_PRELOAD_GROUPS.basecamp,
  ...REALM_PRELOAD_GROUPS.ninjaTraining
]);
