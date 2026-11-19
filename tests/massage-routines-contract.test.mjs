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
  assert.match(steps.at(-1).title,/finishing/i);
});

test('every main step has ordered, named timed sections, with clear left/right language',()=>{
  const timings=[...js.matchAll(/\{from:(\d+),to:(\d+),phase:'[^']+',title:'[^']+'/g)]
    .map(m=>({from:Number(m[1]),to:Number(m[2])}));
  const cueLists=[...js.matchAll(/,cues:(\[\[.*\]\])\},?$/gm)].map(m=>JSON.parse(m[1]));
  assert.equal(timings.length,17);
  assert.equal(cueLists.length,17);
  cueLists.forEach((cues,index)=>{
    const duration=timings[index].to-timings[index].from;
    assert.equal(cues[0][0],0);
    cues.forEach((cue,j)=>{
      assert.ok(cue[0]<duration && cue[0]>=0, 'section belongs to main step');
      if(j) assert.ok(cue[0]>cues[j-1][0], 'section starts increase');
      assert.ok(cue[1].length>20, 'section instruction is meaningful');
      assert.doesNotMatch(cue[1],/\b\d+\s*[–-]\s*\d+\s*s\b|first two minutes|next two minutes/i);
    });
  });
  assert.equal(cueLists[2].length,10);
  assert.match(cueLists[2][0][1],/left arm/i);
  assert.match(cueLists[2][5][1],/right arm/i);
  assert.doesNotMatch(js,/relevant muscle bellies|support one arm|0–30s/);
});

test('timer shows exact current-section time and highlights one section silently',()=>{
  assert.match(js,/performance\.now\(\)-startedAt/);
  assert.match(js,/window\.setInterval\(\(\)=>render\(\),200\)/);
  assert.match(js,/const sectionRemaining=Math\.max\(0,section\.end-stepSecond\)/);
  assert.match(js,/sectionClock\.textContent=format\(sectionRemaining\)/);
  assert.match(js,/classList\.toggle\('is-live',current\)/);
  assert.match(js,/row\.setAttribute\('aria-current','step'\)/);
  assert.match(js,/viewport\.scrollTo\(\{top:target,behavior:/);
  assert.match(css,/\.routine-sections\{[\s\S]*?overflow-y:auto/);
  assert.match(css,/\.routine-section-row\.is-live/);
  assert.match(html,/id="massageRoutineSectionClock"/);
  assert.match(html,/id="massageRoutineSectionCounter"/);
  assert.match(html,/id="massageRoutineNextTitle"/);
  assert.doesNotMatch(html,/Massage plan steps/i);
  assert.match(html,/id="massageRoutinePause"/);
  assert.match(html,/id="massageRoutineReset"/);
  assert.match(html,/id="massageRoutinePrevious"/);
  assert.match(html,/id="massageRoutineNext"/);
  assert.doesNotMatch(js,/(?:new\s+Audio\s*\(|speechSynthesis|\.play\s*\(|\.vibrate\s*\(|AudioContext|OscillatorNode)/);
});
