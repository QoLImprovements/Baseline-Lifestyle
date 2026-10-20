/* Baseline Personal Care — My Routine data model. */
(function (global) {
  'use strict';

  const DAYS = Object.freeze(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  const TIMES = Object.freeze([
    { value: 'morning', label: 'Morning' },
    { value: 'evening', label: 'Evening' },
    { value: 'anytime', label: 'Any time' }
  ]);
  const FREQUENCIES = Object.freeze([
    { value: 'daily', label: 'Every day' },
    { value: 'days', label: 'Specific days' },
    { value: 'weekly', label: 'A number of times each week' },
    { value: 'as-needed', label: 'As needed' }
  ]);
  const BENEFIT_MODES = Object.freeze([
    { value: 'brief', label: 'Brief' },
    { value: 'comprehensive', label: 'Comprehensive' }
  ]);
  const GROUPS = Object.freeze([
    'Cleansing',
    'Preparation, Mists & Toning',
    'Hydration & Barrier',
    'Serums & Active Ingredients',
    'Exfoliation',
    'Devices — Light, Heat & Energy',
    'Devices — Electrical & Conductive',
    'Devices — Mechanical, Suction & Cooling',
    'Professional Treatments',
    'Massage & Manual Care',
    'Shaving & Hair Removal',
    'Body, Hand & Foot Care',
    'Protection & Progress Tracking',
    'Custom'
  ]);

  const BENEFIT_DETAILS = Object.freeze({
    'Cleansing': 'Used at a suitable frequency, it keeps residue removal deliberate while limiting unnecessary cleansing pressure on the skin barrier.',
    'Preparation, Mists & Toning': 'Its role is preparatory rather than corrective, helping the next compatible step spread or feel more comfortable without making the routine unnecessarily complex.',
    'Hydration & Barrier': 'It works best as part of an ordered hydration-and-sealing approach, with the amount adjusted to climate, skin feel and the layers used around it.',
    'Serums & Active Ingredients': 'The chosen strength, area and frequency matter; recording them makes tolerance changes easier to identify and helps avoid unintentionally stacking active steps.',
    'Exfoliation': 'Spacing and skin response are central, because more frequent use is not automatically more beneficial and may increase irritation or barrier disruption.',
    'Devices — Light, Heat & Energy': 'The device instructions, treatment spacing and personal contraindications should remain the authority, while the routine records when and how the session is used.',
    'Devices — Electrical & Conductive': 'Compatible conductive products, controlled intensity and consistent placement help make the session repeatable while reducing avoidable discomfort or uneven technique.',
    'Devices — Mechanical, Suction & Cooling': 'Pressure, contact time, hygiene and spacing should be kept deliberate so the tool remains a controlled routine step rather than repeated mechanical stress.',
    'Professional Treatments': 'Recording the appointment and recovery period helps coordinate home care around professional guidance and avoids crowding the treatment with unnecessary active or device steps.',
    'Massage & Manual Care': 'The practical benefit depends on comfortable pressure, adequate glide and a duration that supports relaxation without pulling or overworking the skin.',
    'Shaving & Hair Removal': 'Preparation, controlled technique and suitable aftercare work together to reduce drag and support comfort after hair removal.',
    'Body, Hand & Foot Care': 'Consistent use can make care of larger or higher-friction areas easier to maintain, with texture and frequency adjusted to the needs of each area.',
    'Protection & Progress Tracking': 'This supports prevention or consistent observation, helping routine decisions rely on repeated information rather than memory from a single day.',
    'Custom': 'It remains a fixed tracking description while the personal notes field records the user-specific product, technique, purpose and reminders.'
  });

  function action(id, group, title, benefit) {
    const comprehensive = `${benefit} ${BENEFIT_DETAILS[group] || BENEFIT_DETAILS.Custom}`.trim();
    return Object.freeze({ id, group, title, benefit, benefitBrief: benefit, benefitComprehensive: comprehensive });
  }

  const ACTIONS = Object.freeze([
    action('water-rinse', 'Cleansing', 'Water Rinse', 'Refreshes the skin with minimal disruption when a full cleanse is unnecessary.'),
    action('oil-cleanse', 'Cleansing', 'Anhydrous Oil Cleanse', 'Dissolves oil-soluble residue while supporting a gentler, lipid-conscious cleansing routine.'),
    action('cream-cleanse', 'Cleansing', 'Cream / Milk Cleanse', 'Provides a low-foam cleansing step with a softer after-feel than many detergent-led cleansers.'),
    action('micellar-cleanse', 'Cleansing', 'Micellar Water Cleanse', 'Lifts light makeup and surface residue with a wipe-based cleansing step.'),
    action('gel-cleanse', 'Cleansing', 'Gel / Foaming Cleanse', 'Provides a water-rinse cleansing step for times when a stronger surface cleanse is preferred.'),
    action('double-cleanse', 'Cleansing', 'Double Cleanse', 'Combines an oil-soluble first cleanse with a water-rinse second cleanse when one step is insufficient.'),
    action('warm-cloth-removal', 'Cleansing', 'Warm Cloth Removal', 'Removes loosened residue with controlled warmth and light mechanical contact.'),

    action('facial-steam', 'Preparation, Mists & Toning', 'Facial Steam', 'Adds warmth and temporary surface hydration before cleansing, shaving or massage.'),
    action('warm-compress', 'Preparation, Mists & Toning', 'Warm Compress', 'Provides local warmth and softening without a full facial-steam session.'),
    action('cool-compress', 'Preparation, Mists & Toning', 'Cool Compress', 'Provides a brief cooling step when the skin feels warm or overstimulated.'),
    action('hydrating-toner', 'Preparation, Mists & Toning', 'Hydrating Toner', 'Adds a light water-based preparation layer before serums or moisturiser.'),
    action('facial-essence', 'Preparation, Mists & Toning', 'Facial Essence', 'Adds a lightweight conditioning layer between cleansing and richer hydration.'),
    action('nurture-shine-mist', 'Preparation, Mists & Toning', 'Nurture & Shine Mist', 'Provides a quick, lightweight hydration step when a heavier layer is not wanted.'),

    action('aloe-layer', 'Hydration & Barrier', 'Aloe Vera Layer', 'Provides a light water-based layer that can support a calm, hydrated skin feel.'),
    action('hydration-layer', 'Hydration & Barrier', 'Restorative Hydration Layer', 'Adds humectant hydration before an occlusive layer reduces evaporation.'),
    action('conductive-mist', 'Hydration & Barrier', 'Hydrating Conductive Mist', 'Keeps the skin wet and conductive during compatible device use while adding light hydration.'),
    action('glycerin-layer', 'Hydration & Barrier', 'Glycerin Humectant Layer', 'Adds a water-binding layer whose strength and finish can be adjusted to the routine.'),
    action('hyaluronic-layer', 'Hydration & Barrier', 'Hyaluronic Acid Layer', 'Adds a lightweight humectant step before moisturiser or an occlusive finish.'),
    action('ceramide-moisturiser', 'Hydration & Barrier', 'Ceramide Moisturiser', 'Adds moisturising lipids and a structured barrier-support step.'),
    action('occlusive-seal', 'Hydration & Barrier', 'Moisturiser / Occlusive Seal', 'Helps slow water loss and supports continuity of the outer skin barrier.'),
    action('facial-oil', 'Hydration & Barrier', 'Facial Oil', 'Adds emollient slip and a lipid-rich finish over or instead of a cream layer.'),
    action('lip-balm', 'Hydration & Barrier', 'Lip Balm', 'Reduces moisture loss from the lips and protects against dryness and friction.'),
    action('hand-foot-balm', 'Hydration & Barrier', 'Hand / Foot Balm', 'Adds concentrated protection to areas exposed to repeated washing, pressure and friction.'),

    action('vitamin-c', 'Serums & Active Ingredients', 'Vitamin C Serum', 'Adds an antioxidant-focused serum step whose strength and timing can be recorded in the routine.'),
    action('niacinamide', 'Serums & Active Ingredients', 'Niacinamide Serum', 'Adds a configurable active step commonly used for barrier support and skin-tone or oil-balance goals.'),
    action('peptide-serum', 'Serums & Active Ingredients', 'Peptide Serum', 'Adds a peptide-focused conditioning step before moisturiser.'),
    action('retinoid', 'Serums & Active Ingredients', 'Retinoid / Retinol', 'Schedules a vitamin-A active so frequency, tolerance and recovery days can be tracked.'),
    action('azelaic-acid', 'Serums & Active Ingredients', 'Azelaic Acid', 'Schedules an azelaic-acid step with its frequency and tolerance notes kept visible.'),
    action('salicylic-acid', 'Serums & Active Ingredients', 'Salicylic Acid Treatment', 'Adds a pore-focused active step that can be limited to selected days or areas.'),
    action('benzoyl-peroxide', 'Serums & Active Ingredients', 'Benzoyl Peroxide Treatment', 'Adds a targeted treatment step whose contact time and frequency can be documented.'),
    action('tranexamic-acid', 'Serums & Active Ingredients', 'Tranexamic Acid Serum', 'Adds a tone-focused serum step with a chosen schedule.'),
    action('caffeine-eye', 'Serums & Active Ingredients', 'Caffeine Eye Serum', 'Adds a lightweight eye-area serum step to the routine.'),

    action('physical-exfoliation', 'Exfoliation', 'Physical Exfoliation', 'Schedules a manual exfoliation step so it does not happen accidentally or too frequently.'),
    action('aha-exfoliation', 'Exfoliation', 'AHA Exfoliation', 'Schedules an alpha-hydroxy-acid exfoliation step with deliberate spacing.'),
    action('bha-exfoliation', 'Exfoliation', 'BHA Exfoliation', 'Schedules a beta-hydroxy-acid exfoliation step with deliberate spacing.'),
    action('pha-exfoliation', 'Exfoliation', 'PHA Exfoliation', 'Adds a polyhydroxy-acid exfoliation option with a chosen frequency.'),
    action('enzyme-exfoliation', 'Exfoliation', 'Enzyme Exfoliation', 'Adds an enzyme-based exfoliation option to the plan.'),
    action('urea-treatment', 'Exfoliation', 'Urea Smoothing Treatment', 'Adds a softening and smoothing step for rough or thickened areas.'),

    action('led-light', 'Devices — Light, Heat & Energy', 'LED Light Therapy', 'Provides a consistent non-contact treatment step without adding more topical ingredients.'),
    action('radiofrequency', 'Devices — Light, Heat & Energy', 'Radiofrequency (RF)', 'Schedules an RF device session while keeping the chosen device guidance, frequency and personal cautions visible.'),
    action('infrared-light', 'Devices — Light, Heat & Energy', 'Infrared Light Session', 'Adds a light- or warmth-based device session to the routine schedule.'),
    action('ipl-device', 'Devices — Light, Heat & Energy', 'IPL Device Session', 'Schedules an intense-pulsed-light device session with spacing and area notes.'),
    action('ultrasound-device', 'Devices — Light, Heat & Energy', 'Ultrasound Facial Device', 'Adds an ultrasound-based device session with its gel, technique and frequency recorded.'),
    action('heat-mask', 'Devices — Light, Heat & Energy', 'Heated Facial Mask', 'Adds a controlled warming-device step before or during compatible care.'),

    action('microcurrent', 'Devices — Electrical & Conductive', 'Microcurrent', 'Provides a structured facial-device session using a conductive layer and controlled technique.'),
    action('galvanic-device', 'Devices — Electrical & Conductive', 'Galvanic Facial Device', 'Schedules a galvanic device step with its polarity, product and duration documented.'),
    action('iontophoresis', 'Devices — Electrical & Conductive', 'Iontophoresis', 'Adds a conductive delivery-device session with product compatibility and timing notes.'),
    action('ems-facial', 'Devices — Electrical & Conductive', 'Facial EMS Device', 'Schedules an electrical muscle-stimulation session with intensity and placement notes.'),
    action('high-frequency-wand', 'Devices — Electrical & Conductive', 'High-Frequency Wand', 'Adds a high-frequency device session with chosen areas and frequency recorded.'),

    action('facial-cleansing-brush', 'Devices — Mechanical, Suction & Cooling', 'Facial Cleansing Brush', 'Adds a powered or manual brush step so pressure and frequency remain deliberate.'),
    action('skin-scrubber', 'Devices — Mechanical, Suction & Cooling', 'Ultrasonic Skin Scrubber / Spatula', 'Schedules a skin-spatula session with moisture, angle and frequency notes.'),
    action('microdermabrasion-device', 'Devices — Mechanical, Suction & Cooling', 'Microdermabrasion Device', 'Adds a mechanical resurfacing-device session with deliberate spacing.'),
    action('derma-roller', 'Devices — Mechanical, Suction & Cooling', 'At-Home Derma Roller', 'Records an at-home rolling session separately so hygiene, spacing and recovery can be tracked.'),
    action('pore-vacuum', 'Devices — Mechanical, Suction & Cooling', 'Pore Vacuum', 'Schedules a suction-device session with intensity and area limits documented.'),
    action('ice-roller', 'Devices — Mechanical, Suction & Cooling', 'Ice Roller / Cooling Tool', 'Adds a brief cooling and manual-contact step.'),
    action('facial-roller', 'Devices — Mechanical, Suction & Cooling', 'Facial Roller', 'Adds a light manual rolling step for glide, relaxation and routine consistency.'),

    action('professional-facial', 'Professional Treatments', 'Professional Facial', 'Records a salon or clinic facial so home care can be coordinated around it.'),
    action('professional-chemical-peel', 'Professional Treatments', 'Professional Chemical Peel', 'Schedules a professional peel and its recovery period separately from ordinary home exfoliation.'),
    action('professional-microneedling', 'Professional Treatments', 'Professional Microneedling', 'Records a professional microneedling appointment and recovery window.'),
    action('professional-rf', 'Professional Treatments', 'Professional Radiofrequency Treatment', 'Records a clinic RF treatment separately from any at-home device use.'),
    action('professional-laser', 'Professional Treatments', 'Professional Laser Treatment', 'Records a professional laser session and the surrounding aftercare period.'),
    action('professional-ipl', 'Professional Treatments', 'Professional IPL Treatment', 'Records a clinic IPL session and the surrounding aftercare period.'),

    action('facial-massage', 'Massage & Manual Care', 'Facial Massage', 'Supports relaxation, glide-based tissue movement and greater awareness of facial tension.'),
    action('lymphatic-facial-massage', 'Massage & Manual Care', 'Lymphatic-Style Facial Massage', 'Adds a light, direction-conscious facial massage step.'),
    action('gua-sha', 'Massage & Manual Care', 'Gua Sha', 'Adds a tool-assisted massage step with chosen pressure, glide and direction.'),
    action('body-oil-massage', 'Massage & Manual Care', 'Body Oil Massage', 'Combines emollient skin contact with a calm, controlled self-massage routine.'),
    action('scalp-massage', 'Massage & Manual Care', 'Scalp Massage', 'Provides a focused relaxation step and gentle movement across the scalp.'),

    action('shave-gel', 'Shaving & Hair Removal', 'Calming Shave Gel', 'Adds glide and cushioning to reduce drag during shaving.'),
    action('shave', 'Shaving & Hair Removal', 'Wet Shave', 'Removes facial or body hair as a planned grooming step with controlled preparation and aftercare.'),
    action('electric-shave', 'Shaving & Hair Removal', 'Electric Shave', 'Adds an electric-shaving step with cleaning and aftercare notes.'),
    action('post-shave-support', 'Shaving & Hair Removal', 'Post-Shave Barrier Support', 'Replaces hydration and protection after shaving without overloading freshly shaved skin.'),
    action('wax-epilate', 'Shaving & Hair Removal', 'Waxing / Epilation', 'Schedules a longer-lasting hair-removal step and its recovery care.'),

    action('body-hydration', 'Body, Hand & Foot Care', 'Body Hydration Layer', 'Adds water-binding hydration across larger areas before sealing.'),
    action('body-occlusive', 'Body, Hand & Foot Care', 'Body Moisturiser / Occlusive', 'Reduces evaporation and supports an even, protected body-skin finish.'),
    action('body-oil', 'Body, Hand & Foot Care', 'Body Oil', 'Adds an emollient body-care step for glide and a lipid-rich finish.'),
    action('body-exfoliation', 'Body, Hand & Foot Care', 'Body Exfoliation', 'Schedules body exfoliation separately from facial exfoliation.'),
    action('foot-soak', 'Body, Hand & Foot Care', 'Foot Soak', 'Adds a timed softening and comfort step before foot care.'),
    action('hand-care', 'Body, Hand & Foot Care', 'Hand-Care Routine', 'Groups hand cleansing, hydration and protection into a repeatable step.'),

    action('sun-protection', 'Protection & Progress Tracking', 'Sun Protection', 'Reduces avoidable ultraviolet exposure when used appropriately and reapplied as required.'),
    action('sunscreen-reapply', 'Protection & Progress Tracking', 'Reapply Sun Protection', 'Creates a separate reminder for reapplication rather than treating morning application as the whole day.'),
    action('patch-test', 'Protection & Progress Tracking', 'Patch Test a New Product', 'Introduces one new variable cautiously before wider use.'),
    action('skin-check', 'Protection & Progress Tracking', 'Skin Check / Observation', 'Creates a regular point to notice comfort, irritation, dryness or other changes before altering the routine.'),
    action('progress-photo', 'Protection & Progress Tracking', 'Routine Progress Photo', 'Adds consistent visual documentation without relying only on day-to-day memory.'),

    action('custom', 'Custom', 'Custom Self-Care Action', 'A personal action with benefits defined by the user.')
  ]);

  const ACTION_BY_ID = new Map(ACTIONS.map((item) => [item.id, item]));

  function benefitText(value, requestedMode) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = source.benefitBrief && source.benefitComprehensive
      ? source
      : ACTION_BY_ID.get(String(source.actionId || source.id || '')) || ACTIONS[0];
    const mode = requestedMode === 'comprehensive' || (!requestedMode && source.benefitMode === 'comprehensive')
      ? 'comprehensive'
      : 'brief';
    return mode === 'comprehensive' ? definition.benefitComprehensive : definition.benefitBrief;
  }

  function cleanText(value, maximum) {
    return String(value == null ? '' : value).trim().slice(0, maximum);
  }

  function normaliseFrequency(value) {
    const source = value && typeof value === 'object' ? value : {};
    const mode = FREQUENCIES.some((entry) => entry.value === source.mode) ? source.mode : 'daily';
    const days = Array.isArray(source.days)
      ? DAYS.filter((day) => source.days.includes(day))
      : [];
    const timesPerWeek = Math.max(1, Math.min(14, Math.round(Number(source.timesPerWeek) || 3)));
    return { mode, days, timesPerWeek };
  }

  function normaliseItem(value, fallbackIndex = 0) {
    const source = value && typeof value === 'object' ? value : {};
    const definition = ACTION_BY_ID.get(String(source.actionId || '')) || ACTIONS[0];
    const timeOfDay = TIMES.some((entry) => entry.value === source.timeOfDay) ? source.timeOfDay : 'anytime';
    const benefitMode = source.benefitMode === 'comprehensive' ? 'comprehensive' : 'brief';
    return {
      id: cleanText(source.id || `routine-${fallbackIndex + 1}`, 80),
      actionId: definition.id,
      title: cleanText(source.title || definition.title, 100),
      benefitMode,
      benefit: benefitText(definition, benefitMode),
      timeOfDay,
      frequency: normaliseFrequency(source.frequency),
      notes: cleanText(source.notes, 600)
    };
  }

  function normaliseRoutine(value) {
    const source = Array.isArray(value) ? value : [];
    const seen = new Set();
    const items = [];
    source.slice(0, 50).forEach((raw, index) => {
      const item = normaliseItem(raw, index);
      if (!item.id || seen.has(item.id)) item.id = `${item.id || 'routine'}-${index + 1}`;
      seen.add(item.id);
      items.push(item);
    });
    return items;
  }

  function normaliseLogs(value) {
    const source = value && typeof value === 'object' ? value : {};
    const logs = {};
    Object.keys(source).sort().slice(-366).forEach((date) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
      const rawEntries = source[date] && typeof source[date] === 'object' ? source[date] : {};
      const entries = {};
      Object.entries(rawEntries).slice(0, 50).forEach(([itemId, raw]) => {
        if (!raw || typeof raw !== 'object') return;
        entries[cleanText(itemId, 80)] = {
          completed: Boolean(raw.completed),
          note: cleanText(raw.note, 500),
          completedAt: cleanText(raw.completedAt, 40)
        };
      });
      logs[date] = entries;
    });
    return logs;
  }

  function localDate(value) {
    if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
    return match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date();
  }

  function isoDate(value) {
    const date = localDate(value);
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function dayName(value) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][localDate(value).getDay()];
  }

  function weekBounds(value) {
    const date = localDate(value);
    const offset = (date.getDay() + 6) % 7;
    const start = new Date(date);
    start.setDate(start.getDate() - offset);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return { start: isoDate(start), end: isoDate(end) };
  }

  function completedCountForWeek(itemId, value, logs) {
    const bounds = weekBounds(value);
    return Object.entries(normaliseLogs(logs)).reduce((count, [date, entries]) => (
      date >= bounds.start && date <= bounds.end && entries[itemId]?.completed ? count + 1 : count
    ), 0);
  }

  function dueStatus(itemValue, value, logs) {
    const item = normaliseItem(itemValue);
    const mode = item.frequency.mode;
    if (mode === 'daily') return { due: true, optional: false, detail: 'Due today' };
    if (mode === 'days') {
      const due = item.frequency.days.includes(dayName(value));
      return { due, optional: false, detail: due ? 'Scheduled today' : 'Not scheduled today' };
    }
    if (mode === 'weekly') {
      const completed = completedCountForWeek(item.id, value, logs);
      const remaining = Math.max(0, item.frequency.timesPerWeek - completed);
      return {
        due: remaining > 0,
        optional: false,
        detail: remaining > 0 ? `${remaining} remaining this week` : 'Weekly target complete'
      };
    }
    return { due: true, optional: true, detail: 'Optional / as needed' };
  }

  function frequencyText(value) {
    const frequency = normaliseFrequency(value);
    if (frequency.mode === 'daily') return 'Every day';
    if (frequency.mode === 'days') return frequency.days.length ? frequency.days.join(', ') : 'Specific days not selected';
    if (frequency.mode === 'weekly') return `${frequency.timesPerWeek}× each week`;
    return 'As needed';
  }

  function timeLabel(value) {
    return TIMES.find((entry) => entry.value === value)?.label || 'Any time';
  }

  function summaryGroups(items) {
    const groups = { morning: [], evening: [], anytime: [] };
    normaliseRoutine(items).forEach((item) => groups[item.timeOfDay].push(item));
    return groups;
  }

  const API = Object.freeze({
    DAYS,
    TIMES,
    FREQUENCIES,
    BENEFIT_MODES,
    GROUPS,
    ACTIONS,
    ACTION_BY_ID,
    benefitText,
    normaliseFrequency,
    normaliseItem,
    normaliseRoutine,
    normaliseLogs,
    isoDate,
    dayName,
    weekBounds,
    completedCountForWeek,
    dueStatus,
    frequencyText,
    timeLabel,
    summaryGroups
  });

  global.BASELINE_SKINCARE_ROUTINE_MODEL = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof window !== 'undefined' ? window : globalThis);
