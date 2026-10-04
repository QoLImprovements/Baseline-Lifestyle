import {
  DARTBOARD_ORDER,
  normaliseTargetCode,
  remainingAfterHit
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));
}

export function polar(radius,angle) {
  const rad = angle * Math.PI / 180;
  return [300 + radius * Math.cos(rad),300 + radius * Math.sin(rad)];
}
export function annularPath(inner,outer,start,end) {
  const [x1,y1] = polar(outer,start), [x2,y2] = polar(outer,end), [x3,y3] = polar(inner,end), [x4,y4] = polar(inner,start);
  return `M${x1.toFixed(2)},${y1.toFixed(2)} A${outer},${outer} 0 0 1 ${x2.toFixed(2)},${y2.toFixed(2)} L${x3.toFixed(2)},${y3.toFixed(2)} A${inner},${inner} 0 0 0 ${x4.toFixed(2)},${y4.toFixed(2)} Z`;
}
export function boardSvg({ highlight = '', interactive = false, marks = [], hideNumbers = false, label = 'Realistic dartboard' } = {}) {
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

export function scenarioHeader(title,details) {
  return `<div class="darts-scenario-header"><span class="darts-eyebrow">${escapeHtml(title)}</span><div class="darts-scenario-facts">${details.map(([label,value]) => `<span><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></span>`).join('')}</div></div>`;
}
export function routeRecoveryHeader(s) {
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
