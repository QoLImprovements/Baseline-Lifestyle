(function(){
  'use strict';

  const DATA=window.BASELINE_FACS;
  const THREE_VERSION='0.184.0';
  const MODEL_URL='https://cdn.jsdelivr.net/gh/mrdoob/three.js@r184/examples/models/gltf/facecap.glb';
  const BASIS_URL='https://cdn.jsdelivr.net/npm/three@'+THREE_VERSION+'/examples/jsm/libs/basis/';

  let THREE=null;
  let scene=null;
  let camera=null;
  let webgl=null;
  let modelRoot=null;
  let headMesh=null;
  let neutralPose=null;
  let morphIndex=new Map();
  let ready=false;
  let failed=false;
  let pendingEntries=[];
  let motionState={shake:false,nod:false,tremble:false};
  let lastVisual=null;
  let resizeObserver=null;

  const $=id=>document.getElementById(id);
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));

  function intensityFactor(entry){
    if(!entry || !entry.unit || !entry.unit.intensity) return 0.82;
    const found=(DATA && DATA.intensities||[]).find(item=>item.code===entry.intensity);
    return found?found.factor:0.60;
  }

  function sides(entry){
    const side=entry && entry.side || 'bilateral';
    return {
      left:side!=='right'?1:0,
      right:side!=='left'?1:0
    };
  }

  function addMorph(weights,name,value){
    if(!name || value<=0) return;
    weights.set(name,clamp((weights.get(name)||0)+value,0,1));
  }

  function addSides(weights,entry,leftName,rightName,value){
    const side=sides(entry);
    addMorph(weights,leftName,value*side.left);
    addMorph(weights,rightName,value*side.right);
  }

  function freshVisual(){
    return {
      weights:new Map(),
      pose:{rx:0,ry:0,rz:0,x:0,y:0,z:0},
      masks:{forehead:false,eyes:false,lower:false,face:false,unscorable:false},
      motion:{shake:false,nod:false,tremble:false}
    };
  }

  function accumulate(entry,visual){
    if(!entry || !entry.unit || !entry.unit.render) return;
    const f=intensityFactor(entry);
    const w=visual.weights;
    switch(entry.unit.render){
      case 'browInnerRaise':
        addMorph(w,'browInnerUp',f);
        break;
      case 'browOuterRaise':
        addSides(w,entry,'browOuterUpLeft','browOuterUpRight',f);
        break;
      case 'browLower':
        addSides(w,entry,'browDownLeft','browDownRight',f);
        break;
      case 'upperLidRaise':
        addSides(w,entry,'eyeWideLeft','eyeWideRight',f);
        break;
      case 'cheekRaise':
        addSides(w,entry,'cheekSquintLeft','cheekSquintRight',f);
        addSides(w,entry,'eyeSquintLeft','eyeSquintRight',f*0.35);
        break;
      case 'lidTighten':
        addSides(w,entry,'eyeSquintLeft','eyeSquintRight',f);
        break;
      case 'lipsTogether':
        addMorph(w,'mouthClose',f*0.75);
        break;
      case 'noseWrinkle':
        addSides(w,entry,'noseSneerLeft','noseSneerRight',f);
        break;
      case 'upperLipRaise':
        addSides(w,entry,'mouthUpperUpLeft','mouthUpperUpRight',f);
        break;
      case 'nasolabialDeepen':
        addSides(w,entry,'mouthUpperUpLeft','mouthUpperUpRight',f*0.38);
        addSides(w,entry,'noseSneerLeft','noseSneerRight',f*0.22);
        break;
      case 'cornerPull':
        addSides(w,entry,'mouthSmileLeft','mouthSmileRight',f);
        break;
      case 'sharpCornerPull':
        addSides(w,entry,'mouthSmileLeft','mouthSmileRight',f*0.72);
        addSides(w,entry,'mouthUpperUpLeft','mouthUpperUpRight',f*0.42);
        break;
      case 'dimpler':
        addSides(w,entry,'mouthDimpleLeft','mouthDimpleRight',f);
        break;
      case 'cornerDepress':
        addSides(w,entry,'mouthFrownLeft','mouthFrownRight',f);
        break;
      case 'lowerLipDepress':
        addSides(w,entry,'mouthLowerDownLeft','mouthLowerDownRight',f);
        break;
      case 'chinRaise':
        addMorph(w,'mouthShrugLower',f*0.85);
        addMorph(w,'mouthClose',f*0.25);
        break;
      case 'lipPucker':
        addMorph(w,'mouthPucker',f);
        break;
      case 'tongueShow':
        addMorph(w,'tongueOut',f);
        break;
      case 'lipStretch':
        addSides(w,entry,'mouthStretchLeft','mouthStretchRight',f);
        break;
      case 'neckTighten':
        break;
      case 'lipFunnel':
        addMorph(w,'mouthFunnel',f);
        break;
      case 'lipTighten':
        addSides(w,entry,'mouthPressLeft','mouthPressRight',f*0.72);
        addMorph(w,'mouthClose',f*0.35);
        break;
      case 'lipPress':
        addSides(w,entry,'mouthPressLeft','mouthPressRight',f);
        break;
      case 'lipsPart':
        addMorph(w,'jawOpen',f*0.28);
        break;
      case 'jawDrop':
        addMorph(w,'jawOpen',f*0.68);
        break;
      case 'mouthStretch':
        addMorph(w,'jawOpen',f);
        addSides(w,entry,'mouthStretchLeft','mouthStretchRight',f*0.62);
        break;
      case 'lipSuck':
        addMorph(w,'mouthRollLower',f);
        addMorph(w,'mouthRollUpper',f);
        break;
      case 'jawThrust':
        addMorph(w,'jawForward',f);
        break;
      case 'jawSideways':
        if(entry.side==='left') addMorph(w,'jawLeft',f);
        else if(entry.side==='right') addMorph(w,'jawRight',f);
        else addMorph(w,'jawLeft',f*0.55);
        break;
      case 'jawClench':
        addMorph(w,'mouthClose',f*0.72);
        break;
      case 'lipBite':
        addMorph(w,'mouthRollLower',f*0.72);
        break;
      case 'cheekBlow':
        addMorph(w,'cheekPuff',f*0.72);
        addMorph(w,'mouthPucker',f*0.35);
        break;
      case 'cheekPuff':
        addMorph(w,'cheekPuff',f);
        break;
      case 'cheekSuck':
        addMorph(w,'mouthRollLower',f*0.30);
        addMorph(w,'mouthRollUpper',f*0.30);
        break;
      case 'tongueBulge':
        addMorph(w,'tongueOut',f*0.20);
        break;
      case 'nostrilDilate':
        break;
      case 'nostrilCompress':
        break;
      case 'sniff':
        addMorph(w,'noseSneerLeft',0.18);
        addMorph(w,'noseSneerRight',0.18);
        break;
      case 'lidDroop':
        addSides(w,entry,'eyeBlinkLeft','eyeBlinkRight',f*0.42);
        break;
      case 'eyeSlit':
        addSides(w,entry,'eyeBlinkLeft','eyeBlinkRight',f*0.38);
        addSides(w,entry,'eyeSquintLeft','eyeSquintRight',f*0.70);
        break;
      case 'eyesClosed':
        addSides(w,entry,'eyeBlinkLeft','eyeBlinkRight',f);
        break;
      case 'squint':
        addSides(w,entry,'eyeSquintLeft','eyeSquintRight',f);
        break;
      case 'blink':
        addMorph(w,'eyeBlinkLeft',1);
        addMorph(w,'eyeBlinkRight',1);
        break;
      case 'wink':
        addSides(w,entry,'eyeBlinkLeft','eyeBlinkRight',1);
        break;
      case 'headLeft':
        visual.pose.ry+=f*0.22;
        break;
      case 'headRight':
        visual.pose.ry-=f*0.22;
        break;
      case 'headUp':
        visual.pose.rx-=f*0.18;
        break;
      case 'headDown':
        visual.pose.rx+=f*0.18;
        break;
      case 'headTiltLeft':
        visual.pose.rz+=f*0.18;
        break;
      case 'headTiltRight':
        visual.pose.rz-=f*0.18;
        break;
      case 'headForward':
        visual.pose.z+=f*0.10;
        break;
      case 'headBack':
        visual.pose.z-=f*0.10;
        break;
      case 'headUpSide':
        visual.pose.rx-=f*0.12;
        visual.pose.rz-=f*0.10;
        break;
      case 'eyesLeft':
        addMorph(w,'eyeLookOutLeft',f);
        addMorph(w,'eyeLookInRight',f);
        break;
      case 'eyesRight':
        addMorph(w,'eyeLookInLeft',f);
        addMorph(w,'eyeLookOutRight',f);
        break;
      case 'eyesUp':
        addMorph(w,'eyeLookUpLeft',f);
        addMorph(w,'eyeLookUpRight',f);
        break;
      case 'eyesDown':
        addMorph(w,'eyeLookDownLeft',f);
        addMorph(w,'eyeLookDownRight',f);
        break;
      case 'eyesOut':
        addMorph(w,'eyeLookOutLeft',f);
        addMorph(w,'eyeLookOutRight',f);
        break;
      case 'eyesIn':
        addMorph(w,'eyeLookInLeft',f);
        addMorph(w,'eyeLookInRight',f);
        break;
      case 'maskForehead':
        visual.masks.forehead=true;
        break;
      case 'maskEyes':
        visual.masks.eyes=true;
        break;
      case 'maskLower':
        visual.masks.lower=true;
        break;
      case 'maskFace':
        visual.masks.face=true;
        break;
      case 'unscorable':
        visual.masks.unscorable=true;
        break;
      case 'swallow':
        break;
      case 'chewing':
        addMorph(w,'jawLeft',0.24);
        addMorph(w,'jawOpen',0.16);
        break;
      case 'shoulderShrug':
        break;
      case 'headShake':
        visual.motion.shake=true;
        break;
      case 'headNod':
        visual.motion.nod=true;
        break;
      case 'tremble':
        visual.motion.tremble=true;
        break;
      case 'fastLook':
        addMorph(w,'eyeLookUpLeft',0.42);
        addMorph(w,'eyeLookUpRight',0.42);
        break;
    }
  }

  function setMask(id,active){
    const el=$(id);
    if(el) el.hidden=!active;
  }

  function applyMasks(masks){
    setMask('facsMaskForehead',masks.forehead);
    setMask('facsMaskEyes',masks.eyes);
    setMask('facsMaskLower',masks.lower);
    setMask('facsMaskFace',masks.face);
    setMask('facsUnscorable',masks.unscorable);
  }

  function applyMorphs(weights){
    if(!headMesh || !headMesh.morphTargetInfluences) return;
    headMesh.morphTargetInfluences.fill(0);
    weights.forEach((value,name)=>{
      const index=morphIndex.get(name);
      if(index!=null) headMesh.morphTargetInfluences[index]=clamp(value,0,1);
    });
  }

  function applyPose(pose){
    if(!modelRoot || !neutralPose) return;
    modelRoot.rotation.set(
      neutralPose.rotation.x+pose.rx,
      neutralPose.rotation.y+pose.ry,
      neutralPose.rotation.z+pose.rz
    );
    modelRoot.position.set(
      neutralPose.position.x+pose.x,
      neutralPose.position.y+pose.y,
      neutralPose.position.z+pose.z
    );
  }

  function applyVisual(visual){
    lastVisual=visual;
    applyMorphs(visual.weights);
    applyPose(visual.pose);
    applyMasks(visual.masks);
    motionState=visual.motion;
  }

  function render(entries){
    pendingEntries=(entries||[]).slice();
    const visual=freshVisual();
    pendingEntries.forEach(entry=>accumulate(entry,visual));
    applyMasks(visual.masks);
    if(ready) applyVisual(visual);
  }

  function findMorphMesh(root){
    let found=null;
    root.traverse(obj=>{
      if(!found && obj.morphTargetDictionary && obj.morphTargetInfluences) found=obj;
    });
    return found;
  }

  function normaliseMorphDictionary(mesh){
    morphIndex=new Map();
    Object.entries(mesh.morphTargetDictionary||{}).forEach(pair=>{
      const raw=pair[0];
      const index=pair[1];
      const clean=raw.replace(/^blendShape1\./,'');
      morphIndex.set(clean,index);
    });
  }

  function resize(){
    const host=$('facsFace');
    if(!host || !webgl || !camera) return;
    const width=Math.max(320,host.clientWidth||640);
    const height=Math.max(420,host.clientHeight||620);
    webgl.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    webgl.setSize(width,height,false);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
  }

  function animate(time){
    if(!webgl || !scene || !camera) return;
    if(modelRoot && neutralPose && lastVisual){
      const seconds=(time||0)/1000;
      let rx=lastVisual.pose.rx;
      let ry=lastVisual.pose.ry;
      let rz=lastVisual.pose.rz;
      let x=lastVisual.pose.x;
      let y=lastVisual.pose.y;
      if(motionState.shake) ry+=Math.sin(seconds*7.2)*0.10;
      if(motionState.nod) rx+=Math.sin(seconds*5.6)*0.08;
      if(motionState.tremble){
        x+=Math.sin(seconds*26)*0.008;
        y+=Math.cos(seconds*23)*0.006;
        rz+=Math.sin(seconds*20)*0.012;
      }
      modelRoot.rotation.set(
        neutralPose.rotation.x+rx,
        neutralPose.rotation.y+ry,
        neutralPose.rotation.z+rz
      );
      modelRoot.position.set(
        neutralPose.position.x+x,
        neutralPose.position.y+y,
        neutralPose.position.z+lastVisual.pose.z
      );
    }
    webgl.render(scene,camera);
  }

  function fail(error){
    failed=true;
    ready=false;
    const loading=$('facsFaceLoading');
    const errorEl=$('facsFaceError');
    const status=$('facsModelStatus');
    if(loading) loading.hidden=true;
    if(errorEl) errorEl.hidden=false;
    if(status) status.textContent='3D model unavailable';
    if(error && window.console) console.error('Baseline Psychology FACS renderer:',error);
  }

  async function init(){
    const host=$('facsFace');
    if(!host || failed) return;

    try{
      const modules=await Promise.all([
        import('three'),
        import('three/addons/loaders/GLTFLoader.js'),
        import('three/addons/loaders/KTX2Loader.js'),
        import('three/addons/libs/meshopt_decoder.module.js'),
        import('three/addons/environments/RoomEnvironment.js')
      ]);

      THREE=modules[0];
      const GLTFLoader=modules[1].GLTFLoader;
      const KTX2Loader=modules[2].KTX2Loader;
      const MeshoptDecoder=modules[3].MeshoptDecoder;
      const RoomEnvironment=modules[4].RoomEnvironment;

      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(32,1,0.1,20);
      camera.position.set(0,0.30,3.45);
      camera.lookAt(0,0.12,-0.18);

      webgl=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
      webgl.setClearColor(0x000000,0);
      webgl.toneMapping=THREE.ACESFilmicToneMapping;
      if('outputColorSpace' in webgl) webgl.outputColorSpace=THREE.SRGBColorSpace;
      webgl.setAnimationLoop(animate);
      host.insertBefore(webgl.domElement,host.firstChild);

      const environment=new RoomEnvironment();
      const pmrem=new THREE.PMREMGenerator(webgl);
      scene.environment=pmrem.fromScene(environment,0.04).texture;
      environment.dispose();
      pmrem.dispose();

      const ktx2=new KTX2Loader().setTranscoderPath(BASIS_URL).detectSupport(webgl);
      const loader=new GLTFLoader().setKTX2Loader(ktx2).setMeshoptDecoder(MeshoptDecoder);
      const gltf=await loader.loadAsync(MODEL_URL);

      modelRoot=gltf.scene.children[0]||gltf.scene;
      scene.add(gltf.scene);
      headMesh=gltf.scene.getObjectByName('mesh_2')||findMorphMesh(gltf.scene);
      if(!headMesh) throw new Error('Face Cap morph mesh not found.');

      normaliseMorphDictionary(headMesh);
      neutralPose={
        rotation:modelRoot.rotation.clone(),
        position:modelRoot.position.clone()
      };

      const loading=$('facsFaceLoading');
      const status=$('facsModelStatus');
      if(loading) loading.hidden=true;
      if(status) status.textContent='Realistic 3D model ready';

      ready=true;
      resize();
      render(pendingEntries);

      if('ResizeObserver' in window){
        resizeObserver=new ResizeObserver(resize);
        resizeObserver.observe(host);
      }else{
        window.addEventListener('resize',resize,{passive:true});
      }
    }catch(error){
      fail(error);
    }
  }

  window.BASELINE_FACS_RENDERER=Object.freeze({
    render,
    get ready(){return ready;}
  });

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else{
    init();
  }
})();