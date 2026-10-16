(function(){
  'use strict';

  const $ = id => document.getElementById(id);

  function sideValues(side){
    return {
      left: side !== 'right' ? 1 : 0,
      right: side !== 'left' ? 1 : 0
    };
  }

  function intensityFactor(entry){
    if(!entry || !entry.unit || !entry.unit.intensity) return 0.72;
    const table=(window.BASELINE_FACS && window.BASELINE_FACS.intensities)||[];
    const found=table.find(item=>item.code===entry.intensity);
    return found ? found.factor : 0.60;
  }

  function fresh(){
    return {
      brow:{li:0,lo:0,ll:0,ri:0,ro:0,rl:0},
      eye:{lOpen:0,lTight:0,lClose:0,rOpen:0,rTight:0,rClose:0,gazeX:0,gazeY:0,out:0,in:0},
      cheek:{l:0,r:0,lPuff:0,rPuff:0,lSuck:0,rSuck:0},
      nose:{wrinkle:0,lNostril:0,rNostril:0},
      mouth:{
        lPull:0,rPull:0,lDepress:0,rDepress:0,lStretch:0,rStretch:0,
        upperRaise:0,lowerDepress:0,chinRaise:0,pucker:0,funnel:0,
        tighten:0,press:0,open:0,stretchOpen:0,suck:0,tongue:0,
        lDimple:0,rDimple:0,lBite:0,rBite:0
      },
      jaw:{forward:0,side:0,clench:0},
      head:{x:0,y:0,rot:0,scale:1},
      neck:{tight:0},
      masks:{forehead:0,eyes:0,lower:0,face:0,unscorable:0},
      motion:[]
    };
  }

  function add(entry,s){
    const f=intensityFactor(entry);
    const side=sideValues(entry.side||'bilateral');
    const key=entry.unit.render;
    if(!key) return;

    switch(key){
      case 'browInnerRaise': s.brow.li+=f*side.left;s.brow.ri+=f*side.right;break;
      case 'browOuterRaise': s.brow.lo+=f*side.left;s.brow.ro+=f*side.right;break;
      case 'browLower': s.brow.ll+=f*side.left;s.brow.rl+=f*side.right;break;
      case 'upperLidRaise': s.eye.lOpen+=f*side.left;s.eye.rOpen+=f*side.right;break;
      case 'cheekRaise': s.cheek.l+=f*side.left;s.cheek.r+=f*side.right;s.eye.lTight+=f*.28*side.left;s.eye.rTight+=f*.28*side.right;break;
      case 'lidTighten': s.eye.lTight+=f*side.left;s.eye.rTight+=f*side.right;break;
      case 'lipsTogether': s.mouth.press+=f*.45;break;
      case 'noseWrinkle': s.nose.wrinkle+=f;break;
      case 'upperLipRaise': s.mouth.upperRaise+=f;break;
      case 'nasolabialDeepen': s.mouth.upperRaise+=f*.28;s.nose.wrinkle+=f*.18;break;
      case 'cornerPull': s.mouth.lPull+=f*side.left;s.mouth.rPull+=f*side.right;break;
      case 'sharpCornerPull': s.mouth.lPull+=f*.7*side.left;s.mouth.rPull+=f*.7*side.right;s.mouth.upperRaise+=f*.25;break;
      case 'dimpler': s.mouth.lDimple+=f*side.left;s.mouth.rDimple+=f*side.right;s.mouth.lStretch+=f*.22*side.left;s.mouth.rStretch+=f*.22*side.right;break;
      case 'cornerDepress': s.mouth.lDepress+=f*side.left;s.mouth.rDepress+=f*side.right;break;
      case 'lowerLipDepress': s.mouth.lowerDepress+=f;break;
      case 'chinRaise': s.mouth.chinRaise+=f;break;
      case 'lipPucker': s.mouth.pucker+=f;break;
      case 'tongueShow': s.mouth.tongue=Math.max(s.mouth.tongue,f);s.mouth.open=Math.max(s.mouth.open,.35);break;
      case 'lipStretch': s.mouth.lStretch+=f*side.left;s.mouth.rStretch+=f*side.right;break;
      case 'neckTighten': s.neck.tight+=f;break;
      case 'lipFunnel': s.mouth.funnel+=f;break;
      case 'lipTighten': s.mouth.tighten+=f;break;
      case 'lipPress': s.mouth.press+=f;break;
      case 'lipsPart': s.mouth.open+=f*.55;break;
      case 'jawDrop': s.mouth.open+=f*.95;break;
      case 'mouthStretch': s.mouth.open+=f*1.18;s.mouth.stretchOpen+=f;break;
      case 'lipSuck': s.mouth.suck+=f;break;
      case 'jawThrust': s.jaw.forward+=f;break;
      case 'jawSideways': s.jaw.side+=entry.side==='left'?-f:f;break;
      case 'jawClench': s.jaw.clench+=f;break;
      case 'lipBite': s.mouth.lBite+=f*side.left;s.mouth.rBite+=f*side.right;break;
      case 'cheekBlow': s.cheek.lPuff+=f*.6*side.left;s.cheek.rPuff+=f*.6*side.right;break;
      case 'cheekPuff': s.cheek.lPuff+=f*side.left;s.cheek.rPuff+=f*side.right;break;
      case 'cheekSuck': s.cheek.lSuck+=f*side.left;s.cheek.rSuck+=f*side.right;break;
      case 'tongueBulge': s.cheek.lPuff+=f*.45*side.left;s.cheek.rPuff+=f*.45*side.right;break;
      case 'nostrilDilate': s.nose.lNostril+=f*side.left;s.nose.rNostril+=f*side.right;break;
      case 'nostrilCompress': s.nose.lNostril-=f*.65*side.left;s.nose.rNostril-=f*.65*side.right;break;
      case 'sniff': s.nose.wrinkle+=.25;s.motion.push('sniff');break;
      case 'lidDroop': s.eye.lClose+=f*.45*side.left;s.eye.rClose+=f*.45*side.right;break;
      case 'eyeSlit': s.eye.lClose+=f*.7*side.left;s.eye.rClose+=f*.7*side.right;s.eye.lTight+=f*.6*side.left;s.eye.rTight+=f*.6*side.right;break;
      case 'eyesClosed': s.eye.lClose+=1*side.left;s.eye.rClose+=1*side.right;break;
      case 'squint': s.eye.lClose+=f*.55*side.left;s.eye.rClose+=f*.55*side.right;s.eye.lTight+=f*.7*side.left;s.eye.rTight+=f*.7*side.right;s.brow.ll+=f*.35*side.left;s.brow.rl+=f*.35*side.right;break;
      case 'blink': s.eye.lClose=1;s.eye.rClose=1;break;
      case 'wink': s.eye.lClose+=1*side.left;s.eye.rClose+=1*side.right;break;
      case 'headLeft': s.head.x-=16;s.head.rot-=5;break;
      case 'headRight': s.head.x+=16;s.head.rot+=5;break;
      case 'headUp': s.head.y-=12;break;
      case 'headDown': s.head.y+=12;break;
      case 'headTiltLeft': s.head.rot-=9;break;
      case 'headTiltRight': s.head.rot+=9;break;
      case 'headForward': s.head.scale+=.04;break;
      case 'headBack': s.head.scale-=.04;break;
      case 'eyesLeft': s.eye.gazeX-=12;break;
      case 'eyesRight': s.eye.gazeX+=12;break;
      case 'eyesUp': s.eye.gazeY-=7;break;
      case 'eyesDown': s.eye.gazeY+=7;break;
      case 'eyesOut': s.eye.out=1;break;
      case 'eyesIn': s.eye.in=1;break;
      case 'maskForehead': s.masks.forehead=1;break;
      case 'maskEyes': s.masks.eyes=1;break;
      case 'maskLower': s.masks.lower=1;break;
      case 'maskFace': s.masks.face=1;break;
      case 'unscorable': s.masks.unscorable=1;break;
      case 'swallow': s.motion.push('swallow');break;
      case 'chewing': s.jaw.side+=.45;s.motion.push('chew');break;
      case 'shoulderShrug': s.motion.push('shrug');break;
      case 'headShake': s.motion.push('shake');break;
      case 'headNod': s.motion.push('nod');break;
      case 'tremble': s.motion.push('tremble');break;
      case 'fastLook': s.motion.push('fastLook');break;
    }
  }

  function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
  function setPath(id,d){const el=$(id);if(el)el.setAttribute('d',d);}
  function setAttr(id,name,value){const el=$(id);if(el)el.setAttribute(name,String(value));}
  function setOpacity(id,value){const el=$(id);if(el)el.style.opacity=String(value);}
  function setHidden(id,hidden){const el=$(id);if(el)el.hidden=!!hidden;}

  function renderBrows(s){
    const li=clamp(s.brow.li-s.brow.ll*.75, -1,1.2), lo=clamp(s.brow.lo-s.brow.ll*.55,-1,1.2);
    const ri=clamp(s.brow.ri-s.brow.rl*.75, -1,1.2), ro=clamp(s.brow.ro-s.brow.rl*.55,-1,1.2);
    const lLower=s.brow.ll*10, rLower=s.brow.rl*10;
    setPath('facsLeftBrow',`M118 ${169+lLower-lo*7} Q147 ${151+lLower-li*18} 190 ${162+lLower-li*11}`);
    setPath('facsRightBrow',`M302 ${169+rLower-ro*7} Q273 ${151+rLower-ri*18} 230 ${162+rLower-ri*11}`);
  }

  function renderEyes(s){
    function one(prefix,cx,open,tight,close){
      const aperture=clamp(16+open*9-tight*7-close*18,1.2,27);
      const upperY=211-aperture;
      const lowerY=211+aperture*.72;
      setAttr(prefix+'EyeWhite','ry',clamp(aperture*.72,1.3,20));
      setPath(prefix+'UpperLid',`M${cx-36} 211 Q${cx} ${upperY} ${cx+36} 211`);
      setPath(prefix+'LowerLid',`M${cx-35} 213 Q${cx} ${lowerY} ${cx+35} 213`);
    }
    one('facsLeft',155,s.eye.lOpen,s.eye.lTight,s.eye.lClose);
    one('facsRight',265,s.eye.rOpen,s.eye.rTight,s.eye.rClose);

    let lx=155+s.eye.gazeX, rx=265+s.eye.gazeX;
    if(s.eye.out){lx-=8;rx+=8}
    if(s.eye.in){lx+=8;rx-=8}
    const y=211+s.eye.gazeY;
    ['Iris','Pupil'].forEach(suffix=>{
      setAttr('facsLeft'+suffix,'cx',lx);setAttr('facsLeft'+suffix,'cy',y);
      setAttr('facsRight'+suffix,'cx',rx);setAttr('facsRight'+suffix,'cy',y);
    });
  }

  function renderCheeks(s){
    const ly=300-s.cheek.l*17-s.cheek.lPuff*5+s.cheek.lSuck*7;
    const ry=300-s.cheek.r*17-s.cheek.rPuff*5+s.cheek.rSuck*7;
    setPath('facsLeftCheek',`M115 ${278-s.cheek.lPuff*4} Q137 ${ly} 161 ${ly+2}`);
    setPath('facsRightCheek',`M305 ${278-s.cheek.rPuff*4} Q283 ${ry} 259 ${ry+2}`);
    setAttr('facsFaceShape','rx',142+Math.max(s.cheek.lPuff,s.cheek.rPuff)*4-Math.max(s.cheek.lSuck,s.cheek.rSuck)*3);
  }

  function renderNose(s){
    setOpacity('facsNoseWrinkle1',clamp(s.nose.wrinkle,0,1));
    setOpacity('facsNoseWrinkle2',clamp(s.nose.wrinkle,0,1));
    setAttr('facsLeftNostril','rx',clamp(7+s.nose.lNostril*5,3.2,13));
    setAttr('facsRightNostril','rx',clamp(7+s.nose.rNostril*5,3.2,13));
  }

  function renderMouth(s){
    const m=s.mouth;
    const open=clamp(m.open,0,1.35);
    const widthBoost=(m.lStretch+m.rStretch)*10;
    const pucker=clamp(m.pucker+m.funnel,0,1.4);
    const halfWidth=45+widthBoost-pucker*21;
    const centreX=210+(m.rStretch-m.lStretch)*5+(s.jaw.side*8);
    const leftX=centreX-halfWidth;
    const rightX=centreX+halfWidth;
    const leftY=339-m.lPull*17+m.lDepress*17-m.upperRaise*4;
    const rightY=339-m.rPull*17+m.rDepress*17-m.upperRaise*4;
    const centreUpper=335-m.upperRaise*13+m.chinRaise*2;
    const lowerY=339+open*35-m.lowerDepress*8-m.chinRaise*8;
    const press=clamp(m.press+m.tighten,0,1);
    const mouthGap=press>0.3?Math.max(0,open*(1-press*.8)):open;

    setPath('facsUpperLip',`M${leftX} ${leftY} Q${centreX-22} ${centreUpper} ${centreX} ${centreUpper+2} Q${centreX+22} ${centreUpper} ${rightX} ${rightY}`);
    setPath('facsLowerLip',`M${leftX} ${leftY} Q${centreX} ${lowerY} ${rightX} ${rightY}`);
    setPath('facsMouthFill',`M${leftX} ${leftY} Q${centreX} ${centreUpper+4} ${rightX} ${rightY} Q${centreX} ${lowerY} ${leftX} ${leftY} Z`);
    setOpacity('facsMouthFill',clamp(.06+mouthGap*.72,0,1));
    setHidden('facsTeeth',mouthGap<.28);
    setPath('facsTeeth',`M${leftX+10} ${centreUpper+9} Q${centreX} ${centreUpper+12+mouthGap*4} ${rightX-10} ${centreUpper+9}`);
    setHidden('facsTongue',m.tongue<.2);
    setAttr('facsTongue','cy',centreUpper+18+open*22);
    setOpacity('facsLeftDimple',clamp(m.lDimple,0,1));
    setOpacity('facsRightDimple',clamp(m.rDimple,0,1));
    setOpacity('facsChinLine',clamp(.35+m.chinRaise*.65,0,1));
    setOpacity('facsJawTensionLeft',clamp(s.jaw.clench,0,1));
    setOpacity('facsJawTensionRight',clamp(s.jaw.clench,0,1));

    const lipWidth=clamp(4+m.tighten*2+m.press*2+m.suck*1.2,3,8);
    ['facsUpperLip','facsLowerLip'].forEach(id=>setAttr(id,'stroke-width',lipWidth));
    const mouthGroup=$('facsMouthGroup');
    if(mouthGroup){
      const scaleX=1-s.jaw.forward*.04;
      mouthGroup.setAttribute('transform',`translate(${s.jaw.forward*4} ${s.jaw.forward*2}) scale(${scaleX} 1)`);
    }
  }

  function renderHead(s){
    const g=$('facsHeadPose');
    if(g)g.setAttribute('transform',`translate(${s.head.x} ${s.head.y}) rotate(${s.head.rot} 210 254) translate(${210*(1-s.head.scale)} ${254*(1-s.head.scale)}) scale(${s.head.scale})`);
    setOpacity('facsNeckLeft',clamp(.45+s.neck.tight*.55,0,1));
    setOpacity('facsNeckRight',clamp(.45+s.neck.tight*.55,0,1));
    const shoulders=$('facsShoulders');
    if(shoulders){
      const shrug=s.motion.includes('shrug')?-18:0;
      shoulders.setAttribute('transform',`translate(0 ${shrug})`);
    }
  }

  function renderMasks(s){
    setOpacity('facsMaskForehead',s.masks.forehead);
    setOpacity('facsMaskEyes',s.masks.eyes);
    setOpacity('facsMaskLower',s.masks.lower);
    setOpacity('facsMaskFace',s.masks.face);
    setOpacity('facsUnscorable',s.masks.unscorable);
  }

  function renderMotion(s){
    const g=$('facsMotionMarks');
    if(!g)return;
    const lines=[];
    if(s.motion.includes('shake')) lines.push('<path d="M62 110 Q34 126 62 142 M358 110 Q386 126 358 142"></path>');
    if(s.motion.includes('nod')) lines.push('<path d="M210 30 L210 62 M198 50 L210 64 L222 50 M210 478 L210 510 M198 490 L210 476 L222 490"></path>');
    if(s.motion.includes('tremble')) lines.push('<path d="M48 220 q-16 8 0 16 q16 8 0 16 M372 220 q16 8 0 16 q-16 8 0 16"></path>');
    if(s.motion.includes('sniff')) lines.push('<path d="M184 294 q-13 12 -24 3 M236 294 q13 12 24 3"></path>');
    if(s.motion.includes('swallow')) lines.push('<path d="M202 430 L210 444 L218 430"></path>');
    if(s.motion.includes('chew')) lines.push('<path d="M292 372 q24 10 8 28"></path>');
    if(s.motion.includes('fastLook')) lines.push('<path d="M316 190 L332 174 M316 232 L332 248"></path>');
    g.innerHTML=lines.join('');
  }

  function render(entries){
    const s=fresh();
    (entries||[]).forEach(entry=>add(entry,s));
    renderBrows(s);
    renderEyes(s);
    renderCheeks(s);
    renderNose(s);
    renderMouth(s);
    renderHead(s);
    renderMasks(s);
    renderMotion(s);
  }

  window.BASELINE_FACS_RENDERER=Object.freeze({render});
})();