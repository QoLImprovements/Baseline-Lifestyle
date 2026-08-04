/* Baseline Natural Skincare — My Routine data model. */
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

  function action(id, group, title, benefit) {
    return Object.freeze({ id, group, title, benefit });
  }

  const ACTIONS = Object.freeze([
    action('water-rinse', 'Cleansing', 'Water Rinse', 'Refreshes the skin with minimal disruption when a full cleanse is unnecessary.'),
    action('oil-cleanse', 'Cleansing', 'Anhydrous Oil Cleanse', 'Dissolves oil-soluble residue while supporting a gentler, lipid-conscious cleansing routine.'),
    action('warm-cloth-removal', 'Cleansing', 'Warm Cloth Removal', 'Removes loosened residue with controlled warmth and light mechanical contact.'),
    action('facial-steam', 'Preparation', 'Facial Steam', 'Adds warmth and temporary surface hydration before cleansing, shaving or massage.'),
    action('aloe-layer', 'Hydration & Barrier', 'Aloe Vera Layer', 'Provides a light water-based layer that can support a calm, hydrated skin feel.'),
    action('hydration-layer', 'Hydration & Barrier', 'Restorative Hydration Layer', 'Adds humectant hydration before an occlusive layer reduces evaporation.'),
    action('conductive-mist', 'Hydration & Barrier', 'Hydrating Conductive Mist', 'Keeps the skin wet and conductive during compatible device use while adding light hydration.'),
    action('nurture-shine-mist', 'Hydration & Barrier', 'Nurture & Shine Mist', 'Provides a quick, lightweight hydration step when a heavier layer is not wanted.'),
    action('occlusive-seal', 'Hydration & Barrier', 'Moisturiser / Occlusive Seal', 'Helps slow water loss and supports continuity of the outer skin barrier.'),
    action('lip-balm', 'Hydration & Barrier', 'Lip Balm', 'Reduces moisture loss from the lips and protects against dryness and friction.'),
    action('hand-foot-balm', 'Hydration & Barrier', 'Hand / Foot Balm', 'Adds concentrated protection to areas exposed to repeated washing, pressure and friction.'),
    action('led-light', 'Treatments & Devices', 'LED Light Therapy', 'Provides a consistent non-contact treatment step without adding more topical ingredients.'),
    action('microcurrent', 'Treatments & Devices', 'Microcurrent', 'Provides a structured facial-device session using a conductive layer and controlled technique.'),
    action('facial-massage', 'Massage', 'Facial Massage', 'Supports relaxation, glide-based tissue movement and greater awareness of facial tension.'),
    action('body-oil-massage', 'Massage', 'Body Oil Massage', 'Combines emollient skin contact with a calm, controlled self-massage routine.'),
    action('scalp-massage', 'Massage', 'Scalp Massage', 'Provides a focused relaxation step and gentle movement across the scalp.'),
    action('shave-gel', 'Shaving', 'Calming Shave Gel', 'Adds glide and cushioning to reduce drag during shaving.'),
    action('shave', 'Shaving', 'Shave', 'Removes facial hair as a planned grooming step with controlled preparation and aftercare.'),
    action('post-shave-support', 'Shaving', 'Post-Shave Barrier Support', 'Replaces hydration and protection after shaving without overloading freshly shaved skin.'),
    action('body-hydration', 'Body Care', 'Body Hydration Layer', 'Adds water-binding hydration across larger areas before sealing.'),
    action('body-occlusive', 'Body Care', 'Body Moisturiser / Occlusive', 'Reduces evaporation and supports an even, protected body-skin finish.'),
    action('sun-protection', 'Protection', 'Sun Protection', 'Reduces avoidable ultraviolet exposure when used appropriately and reapplied as required.'),
    action('patch-test', 'Protection', 'Patch Test a New Product', 'Introduces one new variable cautiously before wider use.'),
    action('custom', 'Custom', 'Custom Self-Care Action', 'A personal action with benefits defined by the user.')
  ]);

  const ACTION_BY_ID = new Map(ACTIONS.map((item) => [item.id, item]));

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
    return {
      id: cleanText(source.id || `routine-${fallbackIndex + 1}`, 80),
      actionId: definition.id,
      title: cleanText(source.title || definition.title, 100),
      benefit: cleanText(source.benefit || definition.benefit, 600),
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
    ACTIONS,
    ACTION_BY_ID,
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
