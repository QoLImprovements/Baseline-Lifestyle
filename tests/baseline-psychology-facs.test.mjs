import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : path.resolve(here,'..');
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');

const html=read('systems/baseline-psychology/baseline-psychology.html');
const css=read('systems/baseline-psychology/css/facs.css');
const dataSource=read('systems/baseline-psychology/js/facs-data.js');
const rendererSource=read('systems/baseline-psychology/js/facs-renderer.js');
const engineSource=read('systems/baseline-psychology/js/facs-engine.js');
const shared=read('sitewide/js/baseline-shared.js');
const htaccess=read('.htaccess');
const protectedAccess=read('sitewide/api/protected_access.php');
const psychologyGate=read('systems/baseline-psychology/baseline-psychology.php');
const home=read('index.html');

function loadFacsData(){
  const window={};
  new Function('window',dataSource)(window);
  return window.BASELINE_FACS;
}

test('Baseline Psychology keeps System -> Paralinguistics -> Facial Expressions hierarchy',()=>{
  assert.match(html,/data-target="system"[^>]*>System<\/button>/);
  assert.match(html,/data-target="paralinguistics"[^>]*>Paralinguistics<\/button>/);
  assert.match(html,/data-psych-subtab="facial-expressions"[^>]*>Facial Expressions<\/button>/);
  assert.match(html,/id="facsFace"/);
  assert.match(html,/id="facsFamilyButtons"/);
  assert.match(html,/id="facsRegionButtons"/);
  assert.match(html,/id="facsUnitGrid"/);
  assert.match(html,/id="facsIntensityButtons"/);
  assert.match(html,/id="facsSideButtons"/);
  assert.match(html,/id="facsViewAngle"/);
  assert.match(html,/id="facsViewFront"/);
});

test('Facial Expressions no longer uses the legacy cartoon SVG face',()=>{
  assert.doesNotMatch(html,/<svg[^>]+id="facsFace"/);
  assert.doesNotMatch(html,/facsLeftEyeWhite|facsFaceShape|facsNoseBridge|facsUpperLip/);
  assert.doesNotMatch(rendererSource,/setPath\(|facsLeftEyeWhite|facsFaceShape/);
  assert.match(rendererSource,/facecap\.glb/);
  assert.match(rendererSource,/@r184/);
  assert.match(rendererSource,/morphTargetDictionary/);
  assert.match(html,/type="importmap"/);
  assert.match(html,/three@0\.184\.0/);
  assert.match(css,/\.facs-face-viewport/);
  assert.match(css,/\.facs-view-controls/);
  assert.doesNotMatch(html,/facs-active-strip"\s+<div class="facs-active-strip"/);
  assert.doesNotMatch(html,/facs-library-block">\s+<div class="facs-library-block"/);
});

test('Psychology clean routes are registered and protected server-side',()=>{
  assert.match(shared,/'baseline-psychology\.html': \{ base:'\/baseline-psychology'/);
  assert.match(shared,/'baseline-psychology\.html':'\/baseline-psychology\/system'/);
  assert.match(htaccess,/RewriteRule \^baseline-psychology\/\(system\|paralinguistics\)\/\?\$ systems\/baseline-psychology\/baseline-psychology\.php \[L,QSA\]/);
  assert.match(htaccess,/baseline-psychology\/baseline-psychology\\\.html\$ \/\?protected=locked/);
  assert.match(protectedAccess,/'baseline_psychology'/);
  assert.match(protectedAccess,/'code' => '0612'/);
  assert.match(protectedAccess,/psychology_access_until/);
  assert.match(psychologyGate,/psychology_access_until/);
  assert.match(psychologyGate,/Location: \/\?protected=locked/);
  assert.match(html,/name="robots" content="noindex,nofollow,noarchive"/);
  assert.doesNotMatch(home,/Baseline Psychology|card--psychology/);
});

test('FACS data exposes code families, face areas and canonical A-E intensity labels',()=>{
  const facs=loadFacsData();
  assert.ok(facs);
  assert.ok(facs.units.length>=80,'expected broad public FACS reference inventory');
  assert.equal(new Set(facs.units.map(unit=>unit.code)).size,facs.units.length,'FACS codes must be unique');
  assert.deepEqual(facs.intensities.map(item=>item.label),['Trace','Slight','Marked','Severe','Maximum']);
  assert.deepEqual(facs.families.map(item=>item.id),['face','head','gaze','associated','visibility','behaviour','all']);
  assert.ok(facs.faceParts.some(item=>item.id==='mouth'));
  assert.ok(facs.faceParts.some(item=>item.id==='eyes'));
  assert.ok(facs.faceParts.some(item=>item.id==='brows'));

  const byCode=new Map(facs.units.map(unit=>[unit.code,unit]));
  assert.equal(byCode.get('12').kind,'Action Unit');
  assert.equal(byCode.get('19').kind,'Action Descriptor');
  assert.equal(byCode.get('29').kind,'Action Descriptor');
  assert.equal(byCode.get('51').kind,'Head movement code');
  assert.equal(byCode.get('61').kind,'Eye movement code');
  assert.equal(byCode.get('70').kind,'Visibility code');
  assert.equal(byCode.get('M55').kind,'Associated M-code');
  assert.equal(byCode.get('12').family,'face');
  assert.equal(byCode.get('12').section,'Lower face');
  assert.ok(byCode.get('12').parts.includes('mouth'));
  assert.ok(byCode.get('6').parts.includes('eyes'));
  assert.ok(byCode.get('6').parts.includes('cheeks'));
  assert.equal(byCode.get('41').section,'Upper face');
  assert.equal(byCode.get('41').intensity,true);
  assert.equal(byCode.get('42').intensity,true);
  assert.equal(byCode.get('43').intensity,true);
  assert.match(byCode.get('41').editionNote,/FACS 2002 revised/i);
});

test('every visual FACS mapping has exactly one realistic renderer case',()=>{
  const facs=loadFacsData();
  const dataKeys=[...new Set(facs.units.map(unit=>unit.render).filter(Boolean))].sort();
  const rendererKeys=[...rendererSource.matchAll(/case '([^']+)'/g)].map(match=>match[1]).sort();
  assert.deepEqual(rendererKeys,dataKeys);
});

test('realistic face view is independently rotatable through 360 degrees',()=>{
  assert.match(rendererSource,/viewRoot=new THREE\.Group\(\)/);
  assert.match(rendererSource,/function setViewDegrees\(value\)/);
  assert.match(rendererSource,/delta\*0\.55/);
  assert.match(rendererSource,/viewRoot\.rotation\.y/);
  assert.match(rendererSource,/getViewDegrees\(\)/);
  assert.match(html,/min="-180" max="180"/);
});

test('FACS scripts parse and static DOM targets exist',()=>{
  assert.doesNotThrow(()=>new Function(rendererSource));
  assert.doesNotThrow(()=>new Function(engineSource));

  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  const required=[
    'facsFace','facsFaceLoading','facsFaceError','facsModelStatus',
    'facsMaskForehead','facsMaskEyes','facsMaskLower','facsMaskFace','facsUnscorable',
    'facsFocusSection','facsFamilyButtons','facsRegionButtons','facsFacePartRow',
    'facsViewAngle','facsViewAngleValue','facsViewFront'
  ];
  for(const id of required) assert.ok(ids.has(id),id+' is missing');
});

test('FACS browsing is region-first while global search remains available',()=>{
  assert.match(engineSource,/family:'face'/);
  assert.match(engineSource,/part:'all'/);
  assert.match(engineSource,/unit\.parts\.includes\(state\.part\)/);
  assert.match(engineSource,/if\(q\) return hay\.includes\(q\)/);
  assert.match(engineSource,/unit\.kind==='Action Unit'/);
  assert.match(engineSource,/unit\.kind==='Action Descriptor'/);
  assert.doesNotMatch(html,/id="facsCategory"/);
});