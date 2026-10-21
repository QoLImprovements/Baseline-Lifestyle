import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const files=[
  'sitewide/css/baseline-header-canonical.css',
  'sitewide/css/baseline-sitewide.css'
];

function stripComments(source){
  return source.replace(/\/\*[\s\S]*?\*\//g,comment=>comment.replace(/[^\n]/g,' '));
}

function lineAt(source,index){
  return source.slice(0,index).split(/\r?\n/).length;
}

function ruleBlocks(source){
  const clean=stripComments(source);
  const blocks=[];
  const stack=[];
  let tokenStart=0;

  for(let index=0;index<clean.length;index+=1){
    const character=clean[index];
    if(character==='{'){
      const header=clean.slice(tokenStart,index).trim();
      const context=stack.filter(item=>item.type==='at').map(item=>item.header).join(' > ');
      stack.push({
        header,
        bodyStart:index+1,
        type:header.startsWith('@')?'at':'rule',
        context,
        line:lineAt(clean,tokenStart)
      });
      tokenStart=index+1;
      continue;
    }
    if(character==='}'){
      const node=stack.pop();
      if(node&&node.type==='rule'&&!/@(?:-\w+-)?keyframes/i.test(node.context)){
        const selector=node.header.replace(/\s+/g,' ');
        if(selector&&!/^(?:from|to|\d+(?:\.\d+)?%)$/.test(selector)){
          const declarations={};
          for(const part of clean.slice(node.bodyStart,index).split(';')){
            const colon=part.indexOf(':');
            if(colon<0)continue;
            const property=part.slice(0,colon).trim();
            const value=part.slice(colon+1).trim().replace(/\s+/g,' ');
            if(property&&!property.includes('{'))declarations[property]=value;
          }
          blocks.push({selector,context:node.context,line:node.line,declarations});
        }
      }
      tokenStart=index+1;
      continue;
    }
    if(character===';'&&stack.length===0)tokenStart=index+1;
  }
  return blocks;
}

function fullyShadowedBlocks(source){
  const groups=new Map();
  for(const block of ruleBlocks(source)){
    const key=block.context+'|||'+block.selector;
    if(!groups.has(key))groups.set(key,[]);
    groups.get(key).push(block);
  }

  const shadowed=[];
  for(const blocks of groups.values()){
    if(blocks.length<2)continue;
    blocks.forEach((block,index)=>{
      if(index===blocks.length-1)return;
      const properties=Object.keys(block.declarations);
      const later=blocks.slice(index+1);
      if(properties.length&&properties.every(property=>later.some(candidate=>Object.prototype.hasOwnProperty.call(candidate.declarations,property)))){
        shadowed.push({
          selector:block.selector,
          context:block.context||'(top level)',
          line:block.line,
          properties
        });
      }
    });
  }
  return shadowed;
}

test('shared header CSS has no fully shadowed same-scope rule blocks',()=>{
  for(const file of files){
    const source=fs.readFileSync(file,'utf8');
    assert.deepEqual(fullyShadowedBlocks(source),[],file);
  }
});

test('final shared header authorities remain present after shadow cleanup',()=>{
  const header=fs.readFileSync(files[0],'utf8');
  const sitewide=fs.readFileSync(files[1],'utf8');

  assert.match(header,/\.bl-pages-btn\{[\s\S]*?grid-template-columns:minmax\(0,1fr\) auto!important/);
  assert.match(header,/@media \(max-width:520px\)[\s\S]*?grid-template-areas:"pages right"!important/);
  assert.match(sitewide,/\.bl-homebar-right\{[\s\S]*?display:flex !important;[\s\S]*?z-index:13020 !important/);
  assert.match(sitewide,/BASELINE-GAMES-FLYOUT-G01-INDIGO-AUTHORITY-20260801/);
  assert.match(sitewide,/body\[data-app="games"\]\{[\s\S]*?--bl-flyout-bg-color:#1E2759!important;[\s\S]*?--bl-flyout-field-bg:#1A244D!important/);
});
