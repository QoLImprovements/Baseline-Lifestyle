(function(global){
  'use strict';

  if(global.BASELINE_RULE_SHIFT_ENGINE) return;

  function create(options={}){
    const COLOURS=Array.isArray(options.colours)?options.colours:[];
    const SHAPES=Array.isArray(options.shapes)?options.shapes:[];
    const SIZES=Array.isArray(options.sizes)?options.sizes:[];
    const random=typeof options.random==='function'?options.random:Math.random;
    if(!COLOURS.length||!SHAPES.length||!SIZES.length) throw new Error('rule_shift_config_missing');

    function clamp(value,min,max){ return Math.max(min,Math.min(max,value)); }

    function shuffle(list){
      const copy=list.slice();
      for(let i=copy.length-1;i>0;i-=1){
        const j=Math.floor(random()*(i+1));
        const tmp=copy[i];copy[i]=copy[j];copy[j]=tmp;
      }
      return copy;
    }

    function name(list,id){
      const found=list.find(item=>item.id===id);
      return found?found.name:String(id||'');
    }

    function buildRule(tier,previousRule){
      const rules=tier&&tier.rules&&tier.rules.length?tier.rules:['colour','shape'];
      let type=rules[Math.floor(random()*rules.length)];
      if(previousRule&&rules.length>1){
        const tierId=String(tier&&tier.id||'');
        const delayedSwitchChance=tierId==='pressure'?0.28:(tierId==='mixed'?0.20:0);
        const repeatFamily=random()<delayedSwitchChance&&rules.includes(previousRule.type);
        if(repeatFamily){
          type=previousRule.type;
        }else{
          let guard=0;
          while(type===previousRule.type&&guard<8){
            type=rules[Math.floor(random()*rules.length)];
            guard+=1;
          }
        }
      }

      const colour=COLOURS[Math.floor(random()*COLOURS.length)];
      const shape=SHAPES[Math.floor(random()*SHAPES.length)];
      const configuredSizeIds=Array.isArray(tier&&tier.sizes)?tier.sizes:[];
      const availableSizes=SIZES.filter(item=>!configuredSizeIds.length||configuredSizeIds.includes(item.id));
      const sizePool=availableSizes.length?availableSizes:SIZES;
      const size=sizePool[Math.floor(random()*sizePool.length)];

      let label='';
      let brief='';
      if(type==='colour'){label='Choose '+colour.name+'.';brief='Colour';}
      else if(type==='shape'){label='Choose a '+shape.name+'.';brief='Shape';}
      else if(type==='colourShape'){label='Choose the '+colour.name+' '+shape.name+'.';brief='Colour + shape';}
      else if(type==='size'){label='Choose a '+size.name+' object.';brief='Size';}
      else if(type==='colourSize'){label='Choose a '+size.name+' '+colour.name+' object.';brief='Colour + size';}
      else if(type==='shapeSize'){label='Choose a '+size.name+' '+shape.name+'.';brief='Shape + size';}
      else if(type==='notColour'){label='Avoid '+colour.name+'.';brief='Exclude colour';}
      else if(type==='notShape'){label='Avoid '+shape.name+'s.';brief='Exclude shape';}
      else{label='Choose '+colour.name+'.';brief='Colour';type='colour';}

      return {type,colour:colour.id,shape:shape.id,size:size.id,label,brief};
    }

    function matches(rule,option){
      if(!rule||!option)return false;
      if(rule.type==='colour')return option.colour===rule.colour;
      if(rule.type==='shape')return option.shape===rule.shape;
      if(rule.type==='size')return option.size===rule.size;
      if(rule.type==='notColour')return option.colour!==rule.colour;
      if(rule.type==='notShape')return option.shape!==rule.shape;
      if(rule.type==='colourShape')return option.colour===rule.colour&&option.shape===rule.shape;
      if(rule.type==='colourSize')return option.colour===rule.colour&&option.size===rule.size;
      if(rule.type==='shapeSize')return option.shape===rule.shape&&option.size===rule.size;
      return false;
    }

    function mismatchFeedback(rule,option){
      if(!rule||!option)return 'The selected card did not satisfy the active rule.';
      const colourMatch=option.colour===rule.colour;
      const shapeMatch=option.shape===rule.shape;
      const sizeMatch=option.size===rule.size;
      const colourName=name(COLOURS,option.colour);
      const shapeName=name(SHAPES,option.shape);
      const sizeName=name(SIZES,option.size);
      if(rule.type==='colour')return colourMatch?'Colour matched.':'Colour did not match: you chose '+colourName+'.';
      if(rule.type==='shape')return shapeMatch?'Shape matched.':'Shape did not match: you chose '+shapeName+'.';
      if(rule.type==='size')return sizeMatch?'Size matched.':'Size did not match: you chose '+sizeName+'.';
      if(rule.type==='notColour')return !colourMatch?'Colour correctly avoided the excluded colour.':'The selected colour was the one the rule excluded.';
      if(rule.type==='notShape')return !shapeMatch?'Shape correctly avoided the excluded shape.':'The selected shape was the one the rule excluded.';
      if(rule.type==='colourShape')return 'Colour '+(colourMatch?'matched':'did not match')+'; shape '+(shapeMatch?'matched':'did not match')+'.';
      if(rule.type==='colourSize')return 'Colour '+(colourMatch?'matched':'did not match')+'; size '+(sizeMatch?'matched':'did not match')+'.';
      if(rule.type==='shapeSize')return 'Shape '+(shapeMatch?'matched':'did not match')+'; size '+(sizeMatch?'matched':'did not match')+'.';
      return 'The selected card did not satisfy the active rule.';
    }

    function timeLimitMs(tier){
      return Math.max(3000,Number(tier&&tier.timeLimitMs)||5000);
    }

    function buildOptions(tier,rule){
      const count=clamp(Number(tier&&tier.optionCount)||8,6,12);
      const colourIds=COLOURS.map(item=>item.id);
      const shapeIds=SHAPES.map(item=>item.id);
      const configured=Array.isArray(tier&&tier.sizes)?tier.sizes:[];
      const sizeIds=SIZES.map(item=>item.id).filter(id=>!configured.length||configured.includes(id));
      if(!sizeIds.length)sizeIds.push('large');

      const pool=[];
      colourIds.forEach(colour=>{
        shapeIds.forEach(shape=>{
          sizeIds.forEach(size=>{
            pool.push({id:colour+'-'+shape+'-'+size,colour,shape,size});
          });
        });
      });

      const matching=shuffle(pool.filter(option=>matches(rule,option)));
      const nonMatching=shuffle(pool.filter(option=>!matches(rule,option)));
      if(!matching.length)return shuffle(pool).slice(0,count);

      const target=matching[0];
      const distractors=nonMatching.slice(0,Math.max(0,count-1));
      distractors.sort((a,b)=>{
        const score=option=>Number(option.colour===target.colour)+Number(option.shape===target.shape)+Number(option.size===target.size);
        return score(b)-score(a);
      });
      return shuffle([target].concat(distractors)).slice(0,count);
    }

    return Object.freeze({
      name,
      buildRule,
      matches,
      mismatchFeedback,
      timeLimitMs,
      buildOptions
    });
  }

  global.BASELINE_RULE_SHIFT_ENGINE=Object.freeze({version:1,create});
})(window);
