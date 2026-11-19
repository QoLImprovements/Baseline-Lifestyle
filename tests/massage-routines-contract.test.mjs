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
  assert.equal(steps.length,17);
  assert.equal(steps[0].from,0);
  assert.equal(steps.at(-1).to,3600);
  steps.forEach((step,index)=>{
    assert.ok(step.to>step.from);
    if(index>0) assert.equal(step.from,steps[index-1].to);
  });
  assert.equal(steps[0].phase,'Face-up');
  assert.match(steps[0].title,/chest/i);
  assert.equal(steps[8].phase,'Transition');
  assert.equal(steps[9].phase,'Face-down');
  assert.match(steps.at(-1).title,/effleurage/i);
});

test('all 60 minutes are categorised into ordered, named techniques',()=>{
  const timings=[...js.matchAll(/\{from:(\d+),to:(\d+),phase:'[^']+',title:'[^']+'/g)]
    .map(m=>({from:Number(m[1]),to:Number(m[2])}));
  const cueLists=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  const allowed=new Set(['Effleurage','Petrissage','Compression','Tapotement','Assisted Stretching','Passive Movement','Repositioning']);
  assert.equal(timings.length,17);
  assert.equal(cueLists.length,17);
  assert.ok(cueLists.flat().length>=60);
  cueLists.forEach((cues,index)=>{
    const duration=timings[index].to-timings[index].from;
    assert.equal(cues[0][0],0);
    cues.forEach((cue,j)=>{
      assert.equal(cue.length,4);
      assert.ok(cue[0]>=0 && cue[0]<duration);
      if(j) assert.ok(cue[0]>cues[j-1][0]);
      assert.ok(allowed.has(cue[1]));
      assert.ok(cue[2].length>5 && cue[3].length>20);
      assert.doesNotMatch(cue[3],/\b\d+\s*[–-]\s*\d+\s*s\b|first two minutes|next two minutes/i);
    });
  });
  assert.equal(cueLists[2].length,10);
  assert.match(cueLists[2][0][3],/left arm/i);
  assert.match(cueLists[2][5][3],/right arm/i);
  assert.ok(cueLists[10].some(c=>c[1]==='Compression' && /finger crawl with thumb pressure/i.test(c[2])));
  assert.ok(cueLists[10].filter(c=>c[1]==='Tapotement').length>=2);
  assert.ok(cueLists[10].some(c=>c[2]==='Cupping'));
  assert.ok(cueLists[10].some(c=>c[2]==='Hacking'));
  assert.doesNotMatch(js,/relevant muscle bellies|support one arm|0–30s/);
});

test('timer shows exact current-section time and highlights one section silently',()=>{
  assert.match(js,/performance\.now\(\)-startedAt/);
  assert.match(js,/window\.setInterval\(\(\)=>render\(\),200\)/);
  assert.match(js,/const sectionRemaining=Math\.max\(0,section\.end-stepSecond\)/);
  assert.match(js,/remaining\.textContent='Procedure time remaining '/);
  assert.match(js,/classList\.toggle\('is-live',current\)/);
  assert.match(js,/row\.setAttribute\('aria-current','step'\)/);
  assert.match(js,/viewport\.scrollTo\(\{top:target,behavior:/);
  assert.match(css,/\.routine-sections\{[\s\S]*?overflow-y:auto/);
  assert.match(css,/\.routine-section-row\.is-live/);
  assert.doesNotMatch(html,/id="massageRoutineSectionClock"|id="massageRoutineSectionCounter"/);
  assert.doesNotMatch(html,/id="massageRoutineCurrentDetail"|id="massageRoutineStepClock"/);
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
  assert.match(html,/class="routine-navigation"/);
  assert.match(html,/class="routine-nav-pair"/);
  assert.match(html,/id="massageRoutineFullDetails"/);
  assert.match(html,/id="massageRoutineFullList"/);
  assert.match(html,/View Full Routine/);
  assert.doesNotMatch(html,/id="massageRoutineStartStep"|id="massageRoutineStartProcedure"/);
  assert.doesNotMatch(html,/class="routine-safety"|class="routine-silent-note"/);
});

test('terminology is consistent and labels are legible',()=>{
  const cues=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  assert.deepEqual(cues[0].map(c=>c[2]),['Broad Palm','Alternating Palms']);
  for(const cue of cues.flat()){
    assert.doesNotMatch(cue[2],/\bpalmar\b|\bglides?\b/i);
    assert.doesNotMatch(cue[2],new RegExp('\\b'+cue[1]+'\\b','i'));
    assert.ok(cue[3].length<=135,'brief descriptor under 135 characters');
  }
  assert.match(js,/identity\.append\(family,separator,name\)/);
  assert.match(js,/content\.append\(identity,remaining,instruction\)/);
  assert.match(js,/minimalName\.textContent=section\.family\+' — '\+section\.technique/);
  assert.match(css,/\.routine-section-technique\{[\s\S]*?font-size:19px/);
  assert.match(css,/\.routine-section-content \.routine-section-instruction\{[\s\S]*?font-size:17px/);
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


