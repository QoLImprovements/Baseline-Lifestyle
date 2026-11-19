import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const html=fs.readFileSync('systems/baseline-massage/baseline-massage.html','utf8');
const js=fs.readFileSync('systems/baseline-massage/js/massage-routines.js','utf8');
const css=fs.readFileSync('systems/baseline-massage/css/baseline-massage.css','utf8');
const shared=fs.readFileSync('sitewide/js/baseline-shared.js','utf8');
const htaccess=fs.readFileSync('.htaccess','utf8');
const staticServer=fs.readFileSync('tests/support/production-static-server.cjs','utf8');

test('Massage Routines has one canonical route, dropdown and runner',()=>{
  assert.match(shared,/planner:'planner', routines:'routines'/);
  assert.match(htaccess,/baseline-massage\/\(system\|library\|planner\|routines\)/);
  assert.match(staticServer,/baseline-massage\\\/\(\?:system\|library\|planner\|routines\)/);
  assert.match(html,/data-target="routines"/);
  assert.match(html,/<section class="section" id="routines">/);
  assert.match(html,/id="massageRoutineSelect"/);
  assert.match(html,/value="partner-full-body-60"/);
  assert.match(html,/id="massageRoutineRunner" hidden/);
  assert.match(html,/js\/massage-routines\.js/);
  assert.match(js,/new URLSearchParams\(window\.location\.search\)\.get\('massage-plan'\)/);
});

test('step schedule covers exactly 60 minutes, without gaps, in requested order',()=>{
  const steps=[...js.matchAll(/\{from:(\d+),to:(\d+),phase:'([^']+)',title:'([^']+)'/g)]
    .map(m=>({from:Number(m[1]),to:Number(m[2]),phase:m[3],title:m[4]}));
  assert.equal(steps.length,9);
  assert.equal(steps[0].from,0);
  assert.equal(steps.at(-1).to,3600);
  steps.forEach((step,index)=>{
    assert.ok(step.to>step.from);
    if(index>0) assert.equal(step.from,steps[index-1].to);
  });
  assert.equal(steps[0].phase,'Face-up');
  assert.match(steps[0].title,/chest/i);
  assert.equal(steps[4].phase,'Transition');
  assert.equal(steps[5].phase,'Face-down');
  assert.match(steps.at(-1).title,/back/i);
});

test('all 60 minutes are categorised into ordered, named techniques',()=>{
  const timings=[...js.matchAll(/\{from:(\d+),to:(\d+),phase:'[^']+',title:'[^']+'/g)]
    .map(m=>({from:Number(m[1]),to:Number(m[2])}));
  const cueLists=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  const allowed=new Set(['Effleurage','Petrissage','Compression','Tapotement','Assisted Stretching','Transition']);
  assert.equal(timings.length,9);
  assert.equal(cueLists.length,9);
  assert.ok(cueLists.flat().length>=60);
  cueLists.forEach((cues,index)=>{
    const duration=timings[index].to-timings[index].from;
    assert.equal(cues[0][0],0);
    cues.forEach((cue,j)=>{
      assert.equal(cue.length,7);
      assert.ok(typeof cue[6]==='string' && cue[6].length>3);
      assert.ok(cue[0]>=0 && cue[0]<duration);
      if(j) assert.ok(cue[0]>cues[j-1][0]);
      assert.ok(allowed.has(cue[1]));
      assert.ok(cue[2].length>3 && cue[3].length>12);
      assert.match(cue[4],/^[0-6]–[1-6]$/);
      assert.ok(Number(cue[4].split('–')[0])<=Number(cue[4].split('–')[1]));
      assert.ok(cue[5]===null || /°.*[1-3]–[1-3]\/10/.test(cue[5]));
      assert.doesNotMatch(cue[3],/\b\d+\s*[–-]\s*\d+\s*s\b|first two minutes|next two minutes/i);
    });
  });
  assert.equal(cueLists[0].length,18);
  assert.match(cueLists[0][4][6],/left pectoral/i);
  assert.match(cueLists[0][9][6],/right pectoral/i);
  assert.ok(cueLists[5].some(c=>c[1]==='Compression' && /finger crawling with thumb walking/i.test(c[2])));
  assert.ok(cueLists[5].filter(c=>c[1]==='Tapotement').length>=2);
  assert.ok(cueLists[5].some(c=>c[2]==='Cupping'));
  assert.ok(cueLists[5].some(c=>c[2]==='Hacking'));
  assert.doesNotMatch(js,/relevant muscle bellies|support one arm|0–30s/);
});

test('timer shows exact current-section time and highlights one section silently',()=>{
  assert.match(js,/performance\.now\(\)-startedAt/);
  assert.match(js,/window\.setInterval\(\(\)=>render\(\),200\)/);
  assert.match(js,/const sectionRemaining=Math\.max\(0,section\.end-stepSecond\)/);
  assert.match(js,/sectionClock\.textContent=format\(sectionRemaining\)/);
  assert.match(js,/row\.className='routine-section-row is-live'/);
  assert.match(js,/row\.setAttribute\('aria-current','step'\)/);
  assert.match(js,/viewport\.replaceChildren\(row\)/);
  assert.match(css,/\.routine-sections\{[\s\S]*?overflow-y:auto/);
  assert.match(css,/\.routine-section-row\.is-live/);
  assert.match(html,/id="massageRoutineSectionClock"/);
  assert.match(html,/id="massageRoutineSectionCounter"/);
  assert.match(html,/id="massageRoutineNextTitle"/);
  assert.doesNotMatch(html,/Massage plan steps/i);
  assert.match(html,/id="massageRoutineQuickPause"/);
  assert.match(html,/id="massageRoutineReset"/);
  assert.match(html,/id="massageRoutinePrevious"/);
  assert.match(html,/id="massageRoutineNext"/);
  assert.doesNotMatch(js,/(?:new\s+Audio\s*\(|speechSynthesis|\.play\s*\(|\.vibrate\s*\(|AudioContext|OscillatorNode)/);
});

test('procedure and step navigation are paired, with no start dropdowns',()=>{
  assert.match(js,/const PROCEDURE_STARTS = STEPS\.flatMap/);
  assert.match(js,/previousProcedureBtn\.addEventListener\('click'/);
  assert.match(js,/nextProcedureBtn\.addEventListener\('click'/);
  assert.match(js,/quickPauseBtn\.addEventListener\('click'/);
  assert.match(js,/pause\(\);jumpTo\(second\)/);
  assert.match(js,/function buildFullRoutine\(\)/);
  assert.match(js,/section\.family|procedure\.family/);
  assert.match(js,/section\.technique|procedure\.technique/);
  assert.match(html,/id="massageRoutineQuickPause"/);
  assert.match(html,/id="massageRoutinePreviousProcedure"/);
  assert.match(html,/id="massageRoutineNextProcedure"/);
  assert.match(html,/class="routine-labelled-nav routine-step-nav"/);
  assert.match(html,/class="routine-labelled-nav routine-procedure-nav"/);
  assert.match(html,/id="massageRoutineFullDetails"/);
  assert.match(html,/id="massageRoutineFullList"/);
  assert.match(html,/View Full Routine/);
  assert.doesNotMatch(html,/id="massageRoutineStartStep"|id="massageRoutineStartProcedure"/);
  assert.doesNotMatch(html,/class="routine-safety"|class="routine-silent-note"/);
});

test('terminology is consistent and labels are legible',()=>{
  const cues=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  assert.deepEqual(cues[0].slice(0,2).map(c=>c[2]),['Bilateral longitudinal strokes','Alternating hand strokes']);
  for(const cue of cues.flat()){
    assert.doesNotMatch(cue[2],/\bpalmar\b/i);
    assert.ok(!cue[2].endsWith(' '+cue[1]), 'category must not repeat in technique');
  }
  assert.match(html,/id="massageRoutinePlanValue"/);
  assert.match(css,/\.routine-select-display\{/);
  assert.match(css,/overflow-wrap:anywhere/);
});

test('settings, fullscreen, circular minimal mode and compact player are functional',()=>{
  assert.match(html,/id="massageRoutineSettings"/);
  assert.match(html,/id="massageRoutineMinimal"/);
  assert.match(html,/id="massageRoutineFullscreen"/);
  assert.match(html,/id="massageRoutineMinimalClock"/);
  assert.match(html,/id="massageRoutineMinimalTime"/);
  assert.match(html,/id="massageRoutineMinimalName"/);
  assert.match(js,/function setMinimal\(enabled\)/);
  assert.doesNotMatch(js,/localStorage|sessionStorage|indexedDB/);
  assert.match(js,/minimalClock\.style\.setProperty\('--routine-clock-progress'/);
  assert.match(js,/routine-fullscreen/);
  assert.match(css,/conic-gradient\(/);
  assert.match(css,/\.routine-minimal/);
  assert.match(css,/@media\(max-width:650px\)/);
  assert.doesNotMatch(js,/(?:new\s+Audio\s*\(|speechSynthesis|\.play\s*\(|\.vibrate\s*\(|AudioContext|OscillatorNode)/);
});



test('each procedure has pressure and an optional stretch with the active countdown',()=>{
  assert.match(js,/pressure:cue\[4\]/);
  assert.match(js,/stretch:cue\[5\]/);
  assert.match(js,/minimalPressure\.textContent='Pressure '/);
  assert.match(js,/minimalStretch\.textContent=section\.stretch/);
  assert.match(js,/className='routine-section-metrics'/);
  assert.match(js,/className='routine-section-pressure'/);
  assert.match(js,/className='routine-section-stretch'/);
  assert.match(js,/sectionRemaining=Math\.max\(0,section\.end-stepSecond\)/);
  assert.match(html,/id="massageRoutineMinimalPressure"/);
  assert.match(html,/id="massageRoutineMinimalStretch"/);
  assert.match(css,/\.routine-section-instruction\{font-size:17px/);
  assert.match(css,/\.routine-minimal-active p\{font-size:18px/);
  assert.doesNotMatch(css,/max-height:calc\(100svh - 132px\)/);
  assert.match(css,/#massageRoutineRunner:not\(\.routine-fullscreen\)\{[\s\S]*?max-height:none;[\s\S]*?overflow:visible;/);
  assert.match(css,/\.routine-labelled-nav\{[\s\S]*?grid-template-columns/);
  assert.doesNotMatch(html,/id="massageRoutineStartStep"|id="massageRoutineStartProcedure"/);
});


test('procedure card is automatic-only while fullscreen has a full routine viewer',()=>{
  assert.match(html,/id="massageRoutineTimeline" role="list" aria-label="Timed procedures automatically advance/);
  assert.doesNotMatch(html,/id="massageRoutineTimeline"[^>]*tabindex/);
  assert.match(js,/viewport\.replaceChildren\(row\)/);
  assert.match(js,/viewport\.replaceChildren\(row\)/);
  assert.match(js,/rows=\[row\]/);
  assert.match(js,/fullDetails\.addEventListener\('toggle'/);
  assert.match(js,/Back to Massage Player/);
  const recent=css.slice(css.lastIndexOf('/* Full-height player:'));
  assert.match(recent,/\.routine-sections\{[\s\S]*?overflow:hidden!important/);
  assert.match(recent,/scrollbar-width:none!important/);
  assert.match(recent,/\.routine-full-plan\[open\]/);
  assert.match(recent,/overflow-y:auto/);
  assert.match(recent,/\.routine-current-step\{[\s\S]*?flex:1 1 300px!important/);
  assert.match(recent,/\.routine-summary \.routine-timer strong\{[\s\S]*?font-size:clamp\(51px,9vmin,78px\)/);
  assert.match(recent,/\.routine-section-instruction\{font-size:clamp\(19px/);
});


test('consolidated body-area hierarchy preserves all 68 procedures and original clock boundaries',()=>{
  const steps=[...js.matchAll(/\{from:(\d+),to:(\d+),phase:'([^']+)',title:'([^']+)',detail:'[^']+',cues:(\[\[.*\]\])\}/g)]
    .map(m=>({from:Number(m[1]),to:Number(m[2]),phase:m[3],title:m[4],cues:JSON.parse(m[5])}));
  assert.equal(steps.length,9);
  assert.equal(steps.reduce((sum,step)=>sum+step.cues.length,0),68);
  assert.deepEqual(steps.map(s=>[s.from,s.to]),[
    [0,840],[840,1200],[1200,1560],[1560,1980],[1980,2040],
    [2040,2820],[2820,3300],[3300,3540],[3540,3600]
  ]);
  assert.equal(steps[0].cues.length,18);
  assert.equal(steps[3].cues.length,12);
  assert.equal(steps[5].cues.length,12);
  assert.equal(steps[7].cues.length,12);
  assert.match(steps[0].title,/chest.*shoulders/i);
  assert.match(steps[3].title,/face-up/i);
  assert.match(steps[4].title,/face-down/i);
  assert.match(steps[8].title,/back/i);
});

test('step and procedure navigation flank the definitive labels with accessible arrows',()=>{
  const stepBlock=html.match(/<div class="routine-labelled-nav routine-step-nav"[\s\S]*?<\/div>\s*<\/div>/);
  const procedureBlock=html.match(/<div class="routine-labelled-nav routine-procedure-nav"[\s\S]*?<\/div>\s*<\/div>/);
  assert.ok(stepBlock);
  assert.ok(procedureBlock);
  assert.match(stepBlock[0],/id="massageRoutinePrevious"/);
  assert.match(stepBlock[0],/id="massageRoutineCurrentTitle"/);
  assert.match(stepBlock[0],/id="massageRoutineNext"/);
  assert.match(procedureBlock[0],/id="massageRoutinePreviousProcedure"/);
  assert.doesNotMatch(procedureBlock[0],/id="massageRoutineMinimalFamily"/);
  assert.match(procedureBlock[0],/id="massageRoutineMinimalName"/);
  assert.match(procedureBlock[0],/id="massageRoutineNextProcedure"/);
  assert.match(html,/aria-label="Previous step"/);
  assert.match(html,/aria-label="Next procedure"/);
  assert.doesNotMatch(html,/class="routine-navigation"/);
  assert.match(css,/\.routine-minimal-clock-face > strong\{[\s\S]*?font-size:clamp\(68px,16vw,108px\)/);
  assert.match(css,/\.routine-minimal-clock-face > small\{[\s\S]*?font-size:clamp\(15px,3\.1vw,21px\)/);
});


test('Minimal dial fits the window, has no duplicate label, and massage strokes use precise terms',()=>{
  assert.doesNotMatch(html,/PROCEDURE LEFT|STEP · BODY AREA|PROCEDURE · TECHNIQUE/);
  assert.match(html,/id="massageRoutineMinimalTime"/);
  assert.match(css,/routine-minimal-clock-face > strong\{[\s\S]*?font-size:clamp\(39px,11vw,54px\)/);
  assert.match(css,/routine-minimal-clock-face > small\{[\s\S]*?font-size:clamp\(12px,3\.1vw,15px\)/);
  const steps=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  const names=steps.flat().map(c=>c[2]);
  assert.equal(steps.length,9);
  assert.equal(names.length,68);
  assert.ok(!names.some(n=>/\bglide\b|\bbroad palm\b/i.test(n)));
  assert.ok(!steps.flat().some(c=>c[1]==='Passive Movement'));
  assert.ok(!steps.flat().some(c=>c[1]==='Repositioning'));
  assert.equal(steps[0][14][2],'Circular kneading');
  assert.equal(steps[0][14][6],'Left Front Shoulder');
  assert.equal(steps[0][15][2],'Circular kneading');
  assert.equal(steps[0][15][6],'Right Front Shoulder');
  assert.match(js,/title:'Chest & Shoulders'/);
  assert.match(js,/title:'Back & Shoulders'/);
  assert.match(js,/upper trapezius/);
});

test('full-width responsive card and one active procedure have no repeated category or area',()=>{
  const cssNew=css.slice(css.lastIndexOf('/* Full-width Massage Routines'));
  assert.match(cssNew,/\.massage-routines-card\{[\s\S]*?width:100%!important/);
  assert.match(cssNew,/max-width:none!important/);
  assert.match(cssNew,/\.focus-stack\{[\s\S]*?grid-template-columns:minmax\(0,1fr\)/);
  assert.match(cssNew,/\.routine-sections\{[\s\S]*?height:auto!important/);
  assert.match(cssNew,/overflow:visible!important/);
  assert.match(js,/function buildSections\(\)/);
  assert.match(js,/viewport\.replaceChildren\(row\)/);
  assert.match(js,/row\.querySelector\('\.routine-section-name'\)\.textContent=section\.technique/);
  assert.match(js,/minimalName\.textContent=section\.area\+' — '\+section\.family/);
  assert.match(js,/minimalTechnique\.textContent=section\.technique/);
  assert.match(html,/id="massageRoutineMinimalTechnique"/);
  assert.doesNotMatch(html,/id="massageRoutineMinimalFamily"/);
  assert.doesNotMatch(js,/scrollToCurrent|\.routine-section-remaining/);
  const groups=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  assert.equal(groups.length,9);
  assert.equal(groups.flat().length,68);
  assert.equal(groups[0][5][6],'Left Pectoral');
  assert.equal(groups[0][5][1],'Effleurage');
  assert.equal(groups[0][5][2],'Longitudinal strokes');
  assert.doesNotMatch(groups[0][5][3],/left pectoral/i);
});
