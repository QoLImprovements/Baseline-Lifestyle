import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const html=read('systems/baseline-psychology/baseline-psychology.html');
const css=read('systems/baseline-psychology/css/baseline-psychology.css');
const dataSource=read('systems/baseline-psychology/js/facs-data.js');
const rendererSource=read('systems/baseline-psychology/js/facs-renderer.js');
const engineSource=read('systems/baseline-psychology/js/facs-engine.js');
const shared=read('sitewide/js/baseline-shared.js');
const htaccess=read('.htaccess');

function loadFacsData(){
  const window={};
  new Function('window',dataSource)(window);
  return window.BASELINE_FACS;
}

test('Baseline Psychology owns System -> Paralinguistics -> Facial Expressions hierarchy',()=>{
  assert.match(html,/data-target="system"[^>]*>System<\/button>/);
  assert.match(html,/data-target="paralinguistics"[^>]*>Paralinguistics<\/button>/);
  assert.match(html,/data-psych-subtab="facial-expressions"[^>]*>Facial Expressions<\/button>/);
  assert.match(html,/id="facsFace"/);
  assert.match(html,/id="facsUnitGrid"/);
  assert.match(html,/id="facsIntensityButtons"/);
  assert.match(html,/id="facsSideButtons"/);
  assert.doesNotMatch(html,/facs-stage-placeholder|facs-control-placeholder/);
  assert.doesNotMatch(css,/facs-stage-placeholder|facs-control-placeholder/);
});

test('Psychology clean routes are registered in both shared navigation and server routing',()=>{
  assert.match(shared,/'baseline-psychology\.html': \{ base:'\/baseline-psychology'/);
  assert.match(shared,/'baseline-psychology\.html':'\/baseline-psychology\/system'/);
  assert.match(htaccess,/RewriteRule \^baseline-psychology\/\(system\|paralinguistics\)\/\?\$ systems\/baseline-psychology\/baseline-psychology\.html \[L,QSA\]/);
});

test('FACS reference keeps code classes distinct and uses the canonical A-E intensity labels',()=>{
  const facs=loadFacsData();
  assert.ok(facs);
  assert.ok(facs.units.length>=80,'expected broad public FACS reference inventory');
  assert.equal(new Set(facs.units.map(unit=>unit.code)).size,facs.units.length,'FACS codes must be unique');
  assert.deepEqual(facs.intensities.map(item=>item.label),['Trace','Slight','Marked','Severe','Maximum']);

  const byCode=new Map(facs.units.map(unit=>[unit.code,unit]));
  assert.equal(byCode.get('12').kind,'Action Unit');
  assert.equal(byCode.get('19').kind,'Action Descriptor');
  assert.equal(byCode.get('29').kind,'Action Descriptor');
  assert.equal(byCode.get('51').kind,'Head movement code');
  assert.equal(byCode.get('61').kind,'Eye movement code');
  assert.equal(byCode.get('70').kind,'Visibility code');
  assert.equal(byCode.get('M55').kind,'Associated M-code');
  assert.equal(byCode.get('43').intensity,true);
  assert.match(byCode.get('41').editionNote,/edition-sensitive/i);
  assert.match(byCode.get('42').editionNote,/edition-sensitive/i);
});

test('every visual FACS mapping has exactly one renderer case',()=>{
  const facs=loadFacsData();
  const dataKeys=[...new Set(facs.units.map(unit=>unit.render).filter(Boolean))].sort();
  const rendererKeys=[...rendererSource.matchAll(/case '([^']+)'/g)].map(match=>match[1]).sort();
  assert.deepEqual(rendererKeys,dataKeys);
});

test('FACS scripts parse and renderer/engine static DOM targets exist',()=>{
  assert.doesNotThrow(()=>new Function(rendererSource));
  assert.doesNotThrow(()=>new Function(engineSource));

  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  const referenced=new Set();

  for(const source of [rendererSource,engineSource]){
    for(const match of source.matchAll(/\$\('([^']+)'\)/g)) referenced.add(match[1]);
    for(const match of source.matchAll(/(?:setPath|setAttr|setOpacity|setHidden)\('([^']+)'\s*,/g)) referenced.add(match[1]);
  }

  const missing=[...referenced].filter(id=>!ids.has(id));
  assert.deepEqual(missing,[]);

  for(const prefix of ['facsLeft','facsRight']){
    for(const suffix of ['EyeWhite','UpperLid','LowerLid','Iris','Pupil']){
      assert.ok(ids.has(prefix+suffix),prefix+suffix+' is missing from the SVG');
    }
  }
});

test('FACS engine labels Action Units and Action Descriptors from code metadata',()=>{
  assert.match(engineSource,/unit\.kind==='Action Unit'/);
  assert.match(engineSource,/unit\.kind==='Action Descriptor'/);
  assert.match(engineSource,/return 'AD'\+entry\.unit\.code\+suffix/);
  assert.doesNotMatch(engineSource,/const isMain=entry\.unit\.category==='facial'/);
});
