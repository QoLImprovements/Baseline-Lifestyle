import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=process.env.BASELINE_REPO_ROOT?path.resolve(process.env.BASELINE_REPO_ROOT):path.resolve(here,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const source=read('systems/baseline-recreation/puzzles/crossnumber/js/crossnumber.js');
const css=read('systems/baseline-recreation/puzzles/crossnumber/css/crossnumber.css');
const html=read('systems/baseline-recreation/baseline-recreation.html');
const fitSource=source.match(/  function fitCrossNumberBoard\(\)\{[\s\S]*?\n  \}\n\n  function renderAll\(\)/)?.[0].replace(/\n\n  function renderAll\(\)$/,'');
assert.ok(fitSource,'Cross Number fitter must remain available for geometry regression tests');

function style(){
  const properties=new Map();
  return {
    properties,
    setProperty(name,value){properties.set(name,String(value));},
    getPropertyValue(name){return properties.get(name)||'';},
    removeProperty(name){properties.delete(name);},
    width:'',height:'',maxWidth:'',maxHeight:''
  };
}

function runFit({fullscreen=false,mobile=false,rows=17,cols=13,viewportHeight=900,scrollWidth=900,scrollHeight=380,playTop=425}={}){
  const panelStyle=style();
  const boardStyle=style();
  const panel={style:panelStyle,querySelector(){return {getBoundingClientRect(){return {height:92};}}}};
  const scroll={
    clientWidth:scrollWidth,clientHeight:scrollHeight,
    getBoundingClientRect(){return {width:scrollWidth,height:scrollHeight};}
  };
  const play={getBoundingClientRect(){return {top:playTop};}};
  const board={
    style:boardStyle,
    closest(selector){return selector==='.crossnumber-board-scroll'?scroll:play;}
  };
  const document={fullscreenElement:fullscreen?panel:null,getElementById(){return panel;}};
  const window={
    innerHeight:viewportHeight,
    visualViewport:{height:viewportHeight},
    matchMedia(){return {matches:mobile};}
  };
  const fn=vm.runInNewContext(fitSource+'\nfitCrossNumberBoard',{
    refs:{board},layout:{rows,cols},document,window,Number,Math
  });
  fn();
  return {boardStyle,panelStyle};
}

test('desktop windowed layout never shrinks large equation cells below legible dimensions',()=>{
  const {boardStyle,panelStyle}=runFit({rows:21,cols:17,scrollHeight:740});
  assert.ok(parseFloat(panelStyle.getPropertyValue('--crossnumber-play-height'))>=21*32+20*2+16);
  assert.ok(parseFloat(boardStyle.width)>=17*32+16*2);
  assert.ok(parseFloat(boardStyle.height)>=21*32+20*2);
  assert.ok(parseFloat(boardStyle.getPropertyValue('--crossnumber-cell-size'))>=32);
});

test('fullscreen exit recomputes board geometry rather than retaining fullscreen height',()=>{
  const fullscreen=runFit({fullscreen:true,rows:17,cols:13,scrollHeight:290});
  assert.equal(fullscreen.panelStyle.getPropertyValue('--crossnumber-play-height'),'');
  assert.ok(parseFloat(fullscreen.boardStyle.height)>=17*32+16*2);
  const restored=runFit({rows:17,cols:13,scrollHeight:650});
  assert.ok(parseFloat(restored.panelStyle.getPropertyValue('--crossnumber-play-height'))>=17*32+16*2);
  assert.ok(parseFloat(restored.boardStyle.height)>parseFloat(fullscreen.boardStyle.height));
  assert.match(source,/fullscreenchange[\s\S]*?resetCrossNumberFit\(\)[\s\S]*?requestAnimationFrame\(fitCrossNumberBoard\)/);
});

test('mobile clears all desktop inline board sizing',()=>{
  const {boardStyle,panelStyle}=runFit({mobile:true});
  assert.equal(boardStyle.width,'');
  assert.equal(boardStyle.height,'');
  assert.equal(boardStyle.getPropertyValue('--crossnumber-cell-size'),'');
  assert.equal(panelStyle.getPropertyValue('--crossnumber-play-height'),'');
});

test('desktop board and number bank scroll separately while common controls remain reachable',()=>{
  assert.match(css,/#crossnumberGamePanel \.crossnumber-board-scroll\{[\s\S]*?overflow:auto;/);
  assert.match(css,/#crossnumberGamePanel \.crossnumber-bank\{[\s\S]*?overflow-x:hidden;\s*overflow-y:auto;/);
  assert.match(css,/#crossnumberGamePanel:fullscreen \.crossnumber-board-scroll\{\s*overflow:auto!important;/);
  assert.match(css,/#crossnumberGamePanel \.crossnumber-board\{\s*max-height:none!important;/);
  assert.match(html,/crossnumber\.css\?v=CROSS_NUMBER_DESKTOP_FIT_20261029_1/);
  assert.match(html,/crossnumber\.js\?v=CROSS_NUMBER_DESKTOP_FIT_20261029_1/);
});
