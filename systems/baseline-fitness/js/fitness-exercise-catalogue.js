/* Baseline Fitness — data-driven exercise catalogue. */
(function (global) {
  'use strict';

  const TYPES = Object.freeze({
    STANDARD: 'standard-reps',
    LEG: 'leg-reps',
    TIMED: 'timed-hold-burnout'
  });
  const LEGACY_TIMED_TYPE = 'timed-hold';
  const FAMILIES = Object.freeze([
    { key: "push-ups", label: "Push-Ups" },
    { key: "squats", label: "Squats" },
    { key: "planks", label: "Planks" },
    { key: "side-planks", label: "Side Planks" },
    { key: "reverse-planks", label: "Reverse Planks" },
    { key: "lunges", label: "Lunges" },
    { key: "hip-glute-glute-bridges", label: "Hip & Glute — Glute Bridges" },
    { key: "hip-glute-hip-hinges", label: "Hip & Glute — Hip Hinges" },
    { key: "hip-glute-hip-abduction", label: "Hip & Glute — Hip Abduction" },
    { key: "pulling-rows", label: "Pulling — Rows" },
    { key: "pulling-pull-ups", label: "Pulling — Pull-Ups" },
    { key: "other-core", label: "Other Core" }
  ]);
  const FAMILY_BY_KEY = new Map(FAMILIES.map((item) => [item.key, item]));
  const FAMILY_ORDER = Object.freeze(FAMILIES.map((item) => item.label));

  function exercise(name, unit, progressionType, base, familyKey, section, movementCategory, laterality, variationLevel, goodFor, how) {
    const family = FAMILY_BY_KEY.get(familyKey);
    return Object.freeze({
      name,
      unit,
      progressionType,
      base,
      familyKey,
      family: family ? family.label : familyKey,
      section,
      movementCategory,
      laterality,
      variationLevel,
      category: section === 'Upper Body' ? 'upper' : section === 'Lower Body' ? 'lower' : section === 'Posterior Chain' ? 'posterior' : section === 'Full Body' ? 'full' : 'core',
      goodFor,
      how
    });
  }

  const EXERCISES = Object.freeze([
    exercise("Wall Push-Ups", "reps", TYPES.STANDARD, 12, "push-ups", "Upper Body", "Push", "bilateral", "Regression", "Early pressing strength and controlled shoulder movement.", "Stand facing a wall, keep the body straight, lower the chest toward the wall and press away."),
    exercise("Incline Push-Ups", "reps", TYPES.STANDARD, 10, "push-ups", "Upper Body", "Push", "bilateral", "Regression", "Pressing strength with less load than a floor push-up.", "Place hands on a stable raised surface, keep a straight body line, lower under control and press up."),
    exercise("Knee Push-Ups", "reps", TYPES.STANDARD, 10, "push-ups", "Upper Body", "Push", "bilateral", "Regression", "Chest, triceps and shoulder pressing strength with reduced load.", "Keep a straight line from head to knees, lower with control and press back up."),
    exercise("Push-Ups", "reps", TYPES.STANDARD, 8, "push-ups", "Upper Body", "Push", "bilateral", "Standard", "Chest, triceps, shoulders and whole-body bracing.", "Keep a straight line from head to heels, lower under control and press up."),
    exercise("Wide Push-Ups", "reps", TYPES.STANDARD, 8, "push-ups", "Upper Body", "Push", "bilateral", "Standard", "Chest-focused pressing and shoulder control.", "Place the hands wider than shoulder width, maintain a rigid body line and lower without flaring beyond control."),
    exercise("Close-Grip Push-Ups", "reps", TYPES.STANDARD, 6, "push-ups", "Upper Body", "Push", "bilateral", "Advanced", "Triceps strength and close-range pressing control.", "Keep the hands closer than shoulder width, elbows tracking back and the trunk braced throughout."),
    exercise("Diamond Push-Ups", "reps", TYPES.STANDARD, 5, "push-ups", "Upper Body", "Push", "bilateral", "Advanced", "Triceps-dominant pressing and central chest strength.", "Form a diamond under the chest, keep elbows controlled and press without losing the body line."),
    exercise("Decline Push-Ups", "reps", TYPES.STANDARD, 6, "push-ups", "Upper Body", "Push", "bilateral", "Advanced", "Upper-chest and shoulder pressing strength.", "Elevate the feet on a stable surface, brace the body and lower the chest between the hands."),
    exercise("Archer Push-Ups", "reps", TYPES.STANDARD, 4, "push-ups", "Upper Body", "Push", "per-side", "Advanced", "Uneven pressing strength and preparation for one-arm work.", "Shift toward one arm while the other stays straighter, then alternate sides with controlled hips."),
    exercise("Assisted One-Arm Push-Ups", "reps", TYPES.STANDARD, 3, "push-ups", "Upper Body", "Push", "per-side", "Advanced", "Single-arm pressing preparation with adjustable assistance.", "Use the assisting hand on a raised surface or support while the working arm performs most of the press."),
    exercise("One-Arm Push-Ups", "reps", TYPES.STANDARD, 1, "push-ups", "Upper Body", "Push", "per-side", "Specialist", "High-level unilateral pressing and anti-rotation strength.", "Use a wide stable stance, keep the hips controlled and lower through the working arm without twisting."),
    exercise("Assisted Squats", "reps", TYPES.LEG, 15, "squats", "Lower Body", "Squat", "bilateral", "Regression", "Building squat depth and leg strength with balance support.", "Hold a stable support lightly, sit down between the hips and stand while keeping the knees tracking over the toes."),
    exercise("Box Squats", "reps", TYPES.LEG, 15, "squats", "Lower Body", "Squat", "bilateral", "Regression", "Controlled squat depth and confident sit-to-stand strength.", "Sit back to a stable box or chair without collapsing, pause lightly and stand tall."),
    exercise("Squats", "reps", TYPES.LEG, 12, "squats", "Lower Body", "Squat", "bilateral", "Standard", "Leg strength, hip and knee control, and everyday sit-to-stand movement.", "Stand around shoulder width, sit down under control, keep knees tracking over toes and stand tall."),
    exercise("Sumo Squats", "reps", TYPES.LEG, 12, "squats", "Lower Body", "Squat", "bilateral", "Standard", "Adductors, glutes and wide-stance squat control.", "Take a wider stance with toes turned out comfortably, lower between the hips and stand by driving through the whole foot."),
    exercise("Narrow-Stance Squats", "reps", TYPES.LEG, 10, "squats", "Lower Body", "Squat", "bilateral", "Advanced", "Quadriceps strength and close-stance balance.", "Keep the feet close, knees tracking forward over the toes and descend only as far as control allows."),
    exercise("Pause Squats", "reps", TYPES.LEG, 10, "squats", "Lower Body", "Squat", "bilateral", "Advanced", "Strength and position control at the bottom of a squat.", "Pause under tension at the bottom without relaxing, then stand smoothly."),
    exercise("Jump Squats", "reps", TYPES.LEG, 8, "squats", "Lower Body", "Squat", "bilateral", "Advanced", "Explosive leg power and landing control.", "Squat, jump vertically and land softly into the next controlled repetition."),
    exercise("Bulgarian Split Squats", "reps", TYPES.LEG, 8, "squats", "Lower Body", "Squat", "per-side", "Advanced", "Single-leg strength, hip stability and balance.", "Place the rear foot on a stable surface, lower the back knee and drive through the front foot."),
    exercise("Assisted Pistol Squats", "reps", TYPES.LEG, 4, "squats", "Lower Body", "Squat", "per-side", "Advanced", "Single-leg squat control with adjustable support.", "Hold a stable support, extend the free leg and use only as much assistance as needed to stand."),
    exercise("Pistol Squats", "reps", TYPES.LEG, 1, "squats", "Lower Body", "Squat", "per-side", "Specialist", "High-level single-leg strength, mobility and balance.", "Extend one leg, descend under control on the working leg and stand without the free foot touching down."),
    exercise("Knee Elbow Plank", "seconds", TYPES.TIMED, 20, "planks", "Core", "Anterior Core", "bilateral", "Regression", "Front-core endurance with reduced loading.", "Support on forearms and knees, keep a straight line from head to knees and hold for the set time."),
    exercise("Elbow Plank", "seconds", TYPES.TIMED, 20, "planks", "Core", "Anterior Core", "bilateral", "Standard", "Front-core endurance and trunk stability with less wrist loading.", "Place forearms down with elbows under shoulders, brace and hold for the set time while breathing."),
    exercise("Plank", "seconds", TYPES.TIMED, 20, "planks", "Core", "Anterior Core", "bilateral", "Standard", "Core endurance, shoulder stability and a controlled body line.", "Place hands under shoulders, brace the body straight and hold for the set time."),
    exercise("High Plank", "seconds", TYPES.TIMED, 20, "planks", "Core", "Anterior Core", "bilateral", "Standard", "Straight-arm plank endurance and shoulder stability.", "Hold the top of a push-up with shoulders stacked over hands and continue until technical form begins to fail."),
    exercise("Long-Lever Elbow Plank", "seconds", TYPES.TIMED, 10, "planks", "Core", "Anterior Core", "bilateral", "Advanced", "Greater anterior-core demand through a longer lever.", "Move the elbows slightly forward of the shoulders, squeeze the glutes and hold the extended body line for the set time."),
    exercise("Long-Lever High Plank", "seconds", TYPES.TIMED, 10, "planks", "Core", "Anterior Core", "bilateral", "Advanced", "Higher anti-extension demand in a straight-arm plank.", "Walk the hands forward while maintaining a rigid trunk and hold until the body line can no longer be maintained."),
    exercise("RKC Plank", "seconds", TYPES.TIMED, 10, "planks", "Core", "Anterior Core", "bilateral", "Advanced", "High-tension core bracing in a short intense hold.", "Pull the elbows toward the feet without moving, squeeze glutes and thighs, and hold maximal controlled tension."),
    exercise("Plank With Leg Raise", "seconds", TYPES.TIMED, 10, "planks", "Core", "Anterior Core", "separate-left-right", "Advanced", "Core anti-rotation and glute control with one leg raised.", "Hold a plank with one leg lifted without rotating the pelvis; record each side separately."),
    exercise("Single-Arm Plank", "seconds", TYPES.TIMED, 8, "planks", "Core", "Anterior Core", "separate-left-right", "Specialist", "High anti-rotation demand and unilateral shoulder stability.", "Hold a stable plank with one arm removed from support and record each side independently."),
    exercise("Knee Side Plank", "seconds", TYPES.TIMED, 15, "side-planks", "Core", "Lateral Core", "separate-left-right", "Regression", "Lateral core endurance with reduced lever length.", "Support on the forearm and bent lower knee, lift the hips and hold each side for the set time."),
    exercise("Elbow Side Plank", "seconds", TYPES.TIMED, 15, "side-planks", "Core", "Lateral Core", "separate-left-right", "Standard", "Side-core endurance, hip stability and anti-rotation.", "Place the forearm under the shoulder, stack the pelvis and hold each side for the set time."),
    exercise("Straight-Arm Side Plank", "seconds", TYPES.TIMED, 12, "side-planks", "Core", "Lateral Core", "separate-left-right", "Advanced", "Lateral core and straight-arm shoulder stability.", "Stack the supporting hand under the shoulder, lift the hips and hold each side with a straight body line."),
    exercise("Star Side Elbow Plank", "seconds", TYPES.TIMED, 8, "side-planks", "Core", "Lateral Core", "separate-left-right", "Advanced", "Lateral core, hip abductors and single-side stability.", "From an elbow side plank, raise the upper leg and hold each side without letting the pelvis drop."),
    exercise("Side Plank With Leg Raise", "seconds", TYPES.TIMED, 8, "side-planks", "Core", "Lateral Core", "separate-left-right", "Advanced", "Side-core endurance and hip abductor strength.", "Hold the side plank while raising the top leg; record left and right independently."),
    exercise("Bent-Knee Reverse Plank", "seconds", TYPES.TIMED, 15, "reverse-planks", "Posterior Chain", "Posterior Core", "bilateral", "Regression", "Posterior-chain endurance with a shorter lever.", "Keep knees bent, press through hands or forearms, lift the hips and hold for the set time."),
    exercise("Reverse Elbow Plank", "seconds", TYPES.TIMED, 15, "reverse-planks", "Posterior Chain", "Posterior Core", "bilateral", "Standard", "Posterior trunk, glutes and shoulder-extension endurance.", "Support on forearms behind the body, extend the legs, lift the hips and hold a straight line."),
    exercise("Reverse Plank", "seconds", TYPES.TIMED, 15, "reverse-planks", "Posterior Chain", "Posterior Core", "bilateral", "Standard", "Posterior-chain endurance and straight-arm shoulder stability.", "Place hands behind the hips, extend the body and hold the hips high without collapsing through the shoulders."),
    exercise("Single-Leg Reverse Plank", "seconds", TYPES.TIMED, 8, "reverse-planks", "Posterior Chain", "Posterior Core", "separate-left-right", "Advanced", "Posterior-chain endurance with unilateral hip demand.", "Hold a reverse plank with one leg raised and record each side separately."),
    exercise("Reverse Plank With Leg Raise", "seconds", TYPES.TIMED, 8, "reverse-planks", "Posterior Chain", "Posterior Core", "separate-left-right", "Advanced", "Glute, hamstring and posterior-core endurance with a raised leg.", "Maintain the reverse plank while lifting one leg without dropping the hips; record each side."),
    exercise("Assisted Static Lunges", "reps", TYPES.LEG, 10, "lunges", "Lower Body", "Lunge", "per-side", "Regression", "Lunge strength and balance with external support.", "Use a stable support, keep a split stance and lower vertically through both knees."),
    exercise("Static Lunges", "reps", TYPES.LEG, 10, "lunges", "Lower Body", "Lunge", "per-side", "Standard", "Leg strength, split-stance balance and hip control.", "Remain in a split stance, lower the back knee and drive through the front foot for each repetition."),
    exercise("Reverse Lunges", "reps", TYPES.LEG, 10, "lunges", "Lower Body", "Lunge", "per-side", "Standard", "Single-leg strength with controlled backward stepping.", "Step one foot back, lower both knees and return by driving through the front leg."),
    exercise("Forward Lunges", "reps", TYPES.LEG, 8, "lunges", "Lower Body", "Lunge", "per-side", "Standard", "Leg strength, deceleration and forward stepping control.", "Step forward, absorb the descent with control and push back to the start."),
    exercise("Walking Lunges", "reps", TYPES.LEG, 8, "lunges", "Lower Body", "Lunge", "per-side", "Advanced", "Dynamic unilateral leg strength and coordination.", "Move forward from one lunge into the next while maintaining upright control."),
    exercise("Lateral Lunges", "reps", TYPES.LEG, 8, "lunges", "Lower Body", "Lunge", "per-side", "Advanced", "Frontal-plane leg strength, adductors and hip mobility.", "Step sideways, sit into the stepping hip and keep the other leg straighter before returning."),
    exercise("Curtsy Lunges", "reps", TYPES.LEG, 8, "lunges", "Lower Body", "Lunge", "per-side", "Advanced", "Glute and hip control through a diagonal lunge pattern.", "Step one leg diagonally behind, lower under control and keep the front knee tracking steadily."),
    exercise("Jumping Lunges", "reps", TYPES.LEG, 6, "lunges", "Lower Body", "Lunge", "per-side", "Advanced", "Explosive unilateral power and landing control.", "Jump from a split stance, switch legs in the air and land softly into the next lunge."),
    exercise("Glute Bridge", "reps", TYPES.LEG, 15, "hip-glute-glute-bridges", "Posterior Chain", "Hip Extension", "bilateral", "Standard", "Glute strength and controlled hip extension.", "Lie with knees bent, brace the trunk and lift the hips by squeezing the glutes."),
    exercise("Marching Glute Bridge", "reps", TYPES.LEG, 10, "hip-glute-glute-bridges", "Posterior Chain", "Hip Extension", "per-side", "Advanced", "Glute strength and pelvic control while alternating support.", "Hold the bridge and lift one foot at a time without allowing the pelvis to rotate or drop."),
    exercise("Single-Leg Glute Bridge", "reps", TYPES.LEG, 8, "hip-glute-glute-bridges", "Posterior Chain", "Hip Extension", "per-side", "Advanced", "Unilateral glute strength and pelvic stability.", "Extend one leg and drive through the planted foot while keeping the pelvis level."),
    exercise("Bodyweight Good Morning", "reps", TYPES.LEG, 12, "hip-glute-hip-hinges", "Posterior Chain", "Hip Hinge", "bilateral", "Standard", "Hip-hinge mechanics, hamstrings and spinal-position awareness.", "Keep a soft knee bend, push the hips back with a neutral trunk and squeeze the glutes to stand."),
    exercise("Single-Leg Hip Hinge", "reps", TYPES.LEG, 8, "hip-glute-hip-hinges", "Posterior Chain", "Hip Hinge", "per-side", "Advanced", "Hamstrings, glutes, balance and single-leg hinge control.", "Hinge over the planted leg while the other leg extends behind, then return without rotating the pelvis."),
    exercise("Nordic Curl Progression", "reps", TYPES.LEG, 3, "hip-glute-hip-hinges", "Posterior Chain", "Knee Flexion", "bilateral", "Advanced", "Hamstring strength through controlled knee extension.", "Anchor the ankles securely, lower the body as slowly as possible and use the hands for only the assistance needed."),
    exercise("Side-Lying Leg Raise", "reps", TYPES.LEG, 12, "hip-glute-hip-abduction", "Lower Body", "Hip Abduction", "per-side", "Standard", "Hip abductor endurance and lateral pelvic support.", "Lie on one side, keep the upper leg long and raise it without rolling the pelvis backward."),
    exercise("Fire Hydrant", "reps", TYPES.LEG, 12, "hip-glute-hip-abduction", "Lower Body", "Hip Abduction", "per-side", "Standard", "Glute medius strength and hip control.", "From hands and knees, lift one bent knee sideways while keeping the trunk and pelvis steady."),
    exercise("Standing Hip Abduction", "reps", TYPES.LEG, 12, "hip-glute-hip-abduction", "Lower Body", "Hip Abduction", "per-side", "Regression", "Standing hip stability and glute medius activation.", "Stand tall with light support and move one straight leg sideways without leaning the trunk."),
    exercise("Doorframe Row", "reps", TYPES.STANDARD, 8, "pulling-rows", "Upper Body", "Pull", "bilateral", "Regression", "Introductory back and arm pulling strength.", "Hold a secure doorframe, lean back under control and pull the chest toward the hands."),
    exercise("Table Row", "reps", TYPES.STANDARD, 6, "pulling-rows", "Upper Body", "Pull", "bilateral", "Standard", "Horizontal pulling strength using a sturdy table.", "Lie beneath a stable table, grip securely, keep the body rigid and pull the chest upward."),
    exercise("Inverted Row", "reps", TYPES.STANDARD, 6, "pulling-rows", "Upper Body", "Pull", "bilateral", "Advanced", "Back, biceps and scapular pulling strength.", "Hang beneath a secure bar, keep a straight body line and pull the chest toward the bar."),
    exercise("Supported Hang", "seconds", TYPES.TIMED, 15, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Regression", "Grip and shoulder tolerance with feet providing assistance.", "Hold a secure bar with some bodyweight supported by the feet for the set time."),
    exercise("Active Hang", "seconds", TYPES.TIMED, 10, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Standard", "Grip endurance and active shoulder-blade control.", "Hang from a secure bar while gently drawing the shoulders down away from the ears for the set time."),
    exercise("Scapular Pull-Up", "reps", TYPES.STANDARD, 6, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Regression", "Scapular depression and the first phase of a pull-up.", "From a hang, keep the elbows straight and lift the body slightly by drawing the shoulder blades down."),
    exercise("Assisted Pull-Up", "reps", TYPES.STANDARD, 4, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Regression", "Vertical pulling strength with adjustable assistance.", "Use a secure band, foot support or partner assistance while pulling the chest toward the bar."),
    exercise("Negative Pull-Up", "reps", TYPES.STANDARD, 3, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Advanced", "Eccentric pull-up strength through a controlled descent.", "Start with the chin above the bar and lower as slowly and evenly as possible to a full hang."),
    exercise("Pull-Up", "reps", TYPES.STANDARD, 3, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Advanced", "Back, biceps, grip and vertical pulling strength.", "Begin from an active hang, pull until the chin clears the bar and lower under control."),
    exercise("Chin-Up", "reps", TYPES.STANDARD, 3, "pulling-pull-ups", "Upper Body", "Vertical Pull", "bilateral", "Advanced", "Biceps and back strength with an underhand grip.", "Use an underhand grip, pull the chest upward without swinging and lower to a controlled hang."),
    exercise("Dead Bug", "reps", TYPES.STANDARD, 10, "other-core", "Core", "Anterior Core", "per-side", "Standard", "Trunk control while the arms and legs move independently.", "Press the lower back gently down, extend opposite arm and leg and return without losing trunk position."),
    exercise("Bird Dog", "reps", TYPES.STANDARD, 10, "other-core", "Core", "Posterior Core", "per-side", "Standard", "Spinal stability, coordination and cross-body control.", "From hands and knees, extend opposite arm and leg while keeping the pelvis level."),
    exercise("Hollow-Body Hold", "seconds", TYPES.TIMED, 15, "other-core", "Core", "Anterior Core", "bilateral", "Advanced", "Anterior-core endurance in a compressed body position.", "Press the lower back down, lift shoulders and legs to the level you can control and hold for the set time."),
    exercise("Hollow-Body Rock", "reps", TYPES.STANDARD, 8, "other-core", "Core", "Anterior Core", "bilateral", "Advanced", "Dynamic hollow-body control without losing trunk tension.", "Maintain a rounded hollow position and rock gently without changing the body shape."),
    exercise("Leg Raises", "reps", TYPES.STANDARD, 8, "other-core", "Core", "Anterior Core", "bilateral", "Advanced", "Lower-abdominal control and hip-flexor strength.", "Keep the trunk controlled while raising and lowering straight legs without arching the lower back."),
    exercise("Knee Raises", "reps", TYPES.STANDARD, 10, "other-core", "Core", "Anterior Core", "bilateral", "Standard", "Abdominal control with a shorter lever than straight-leg raises.", "Draw the knees toward the torso and lower them without swinging or losing trunk position."),
    exercise("Mountain Climbers", "reps", TYPES.STANDARD, 20, "other-core", "Full Body", "Conditioning Core", "per-side", "Standard", "Dynamic core stability and whole-body conditioning.", "Hold a high plank and alternate driving the knees forward while keeping the hips controlled."),
    exercise("Superman Hold", "seconds", TYPES.TIMED, 15, "other-core", "Posterior Chain", "Posterior Core", "bilateral", "Standard", "Posterior trunk and glute endurance.", "Lie face down, lift the arms and legs only as high as controlled and hold for the set time."),
  ]);

  const API = Object.freeze({ TYPES, LEGACY_TIMED_TYPE, FAMILIES, FAMILY_BY_KEY, FAMILY_ORDER, EXERCISES });
  global.BASELINE_FITNESS_EXERCISE_CATALOGUE = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof window !== 'undefined' ? window : globalThis);
