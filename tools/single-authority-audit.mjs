import fs from 'node:fs';
import path from 'node:path';
import { collectBrowserStorageInventory } from './browser-storage-inventory.mjs';

const root=process.env.BASELINE_REPO_ROOT ? path.resolve(process.env.BASELINE_REPO_ROOT) : process.cwd();
const ignored=new Set(['.git','node_modules','vendor','playwright-report','test-results','coverage']);
const codeExt=new Set(['.js','.mjs','.cjs','.css','.html','.php','.htaccess']);
const runtimeRoots=['index.html','index','sitewide','systems'];

function walk(target,out=[]){
  if(!fs.existsSync(target)) return out;
  const stat=fs.statSync(target);
  if(stat.isFile()){ out.push(target); return out; }
  for(const entry of fs.readdirSync(target,{withFileTypes:true})){
    if(entry.isDirectory() && ignored.has(entry.name)) continue;
    const full=path.join(target,entry.name);
    if(entry.isDirectory()) walk(full,out);
    else out.push(full);
  }
  return out;
}
function rel(file){ return path.relative(root,file).replaceAll('\\','/'); }
function isCode(file){
  const base=path.basename(file);
  return codeExt.has(path.extname(file).toLowerCase()) || base==='.htaccess';
}
function lineOf(source,index){ return source.slice(0,index).split('\n').length; }
function runtimeFile(relative){
  return relative==='index.html' || relative.startsWith('index/') || relative.startsWith('sitewide/') || relative.startsWith('systems/');
}
function migrationOnly(relative){
  return relative.startsWith('sitewide/migration/') || relative.includes('/tests/') || relative.startsWith('tests/') || relative.startsWith('prototypes/');
}
function resolveRef(from,raw){
  const clean=String(raw||'').split(/[?#]/,1)[0].trim();
  if(!clean || /^(?:https?:|data:|mailto:|tel:|#)/i.test(clean)) return '';
  if(clean.startsWith('/')) return clean.slice(1);
  const base=path.posix.dirname(from);
  return path.posix.normalize(path.posix.join(base,clean));
}

const all=[];
for(const item of runtimeRoots){
  const absolute=path.join(root,item);
  walk(absolute,all);
}
const files=[...new Set(all)].filter(isCode).sort();
const sources=new Map();
for(const file of files){
  let source='';
  try{ source=fs.readFileSync(file,'utf8'); }catch{ continue; }
  sources.set(rel(file),source);
}

const storage=[];
const conflictMarkers=[];
const dynamicStyle=[];
const dynamicScript=[];
const inlineStyles=[];
const timingPaint=[];
const authorityNamed=[];
const references=new Map();

const storageRegex=/\b(?:localStorage|sessionStorage|indexedDB)\b/g;
for(const [file,source] of sources){
  let match;
  while((match=storageRegex.exec(source))){
    storage.push({file,line:lineOf(source,match.index),token:match[0],migrationOnly:migrationOnly(file)});
  }
  const conflict=/^(?:<<<<<<<|=======|>>>>>>>)/gm;
  while((match=conflict.exec(source))) conflictMarkers.push({file,line:lineOf(source,match.index),token:match[0]});
  const styleRx=/createElement\s*\(\s*['"]style['"]\s*\)/g;
  while((match=styleRx.exec(source))) dynamicStyle.push({file,line:lineOf(source,match.index)});
  const scriptRx=/createElement\s*\(\s*['"]script['"]\s*\)/g;
  while((match=scriptRx.exec(source))) dynamicScript.push({file,line:lineOf(source,match.index)});
  if(file.endsWith('.html')){
    const rx=/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi;
    while((match=rx.exec(source))) inlineStyles.push({file,line:lineOf(source,match.index),chars:match[1].trim().length});
  }
  const timingRx=/(?:setTimeout|requestAnimationFrame)\s*\(/g;
  while((match=timingRx.exec(source))){
    const around=source.slice(Math.max(0,match.index-220),Math.min(source.length,match.index+360));
    if(/render|paint|load|init|patch|sync|style|classList|hidden|textContent|innerHTML/i.test(around)){
      timingPaint.push({file,line:lineOf(source,match.index),kind:match[0].startsWith('setTimeout')?'timeout':'raf'});
    }
  }
  const refRx=/(?:src|href)\s*=\s*["']([^"']+\.(?:js|mjs|css|php))(?:\?[^"']*)?["']|\b(?:import|from)\s*\(?\s*["']([^"']+\.(?:js|mjs|css))["']|["']((?:\/|\.\.?\/)(?:sitewide|systems)?[^"'\n]+\.(?:js|mjs|css|php))["']/g;
  while((match=refRx.exec(source))){
    const raw=match[1]||match[2]||match[3];
    const target=resolveRef(file,raw);
    if(!target) continue;
    const list=references.get(target)||[];
    list.push(file);
    references.set(target,list);
  }
}

for(const file of sources.keys()){
  if(/(?:legacy|obsolete|repair|fix|fallback|shim|bridge|final-authority|refinement|stability|coherence-v\d+|authority)/i.test(path.basename(file))){
    authorityNamed.push({file,referencedBy:references.get(file)||[]});
  }
}

const runtimeStorage=storage.filter(x=>!x.migrationOnly);
const browserStorageInventory=collectBrowserStorageInventory(root);
const storageCounts=new Map();
for(const item of runtimeStorage) storageCounts.set(item.file,(storageCounts.get(item.file)||0)+1);
const storageFiles=[...storageCounts.entries()].map(([file,count])=>({ file,count,referencedBy:references.get(file)||[] })).sort((a,b)=>b.count-a.count||a.file.localeCompare(b.file));
const unreferencedStorageFiles=storageFiles.filter(item=>item.referencedBy.length===0);
const orphanAuthority=authorityNamed.filter(x=>x.referencedBy.length===0);
const loadedAuthority=authorityNamed.filter(x=>x.referencedBy.length>0);

const cssDup=[];
const declMap=new Map();
for(const [file,source] of sources){
  if(!file.endsWith('.css')) continue;
  const clean=source.replace(/\/\*[\s\S]*?\*\//g,'');
  const rx=/([^{}]+)\{([^{}]+)\}/g;
  let m;
  while((m=rx.exec(clean))){
    const selectors=m[1].split(',').map(s=>s.trim()).filter(Boolean);
    const declarations=m[2].split(';').map(d=>d.trim()).filter(Boolean);
    for(const selector of selectors){
      if(selector.startsWith('@')) continue;
      for(const declaration of declarations){
        const colon=declaration.indexOf(':');
        if(colon<1) continue;
        const property=declaration.slice(0,colon).trim().toLowerCase();
        const value=declaration.slice(colon+1).trim();
        if(!property||!value) continue;
        const key=selector+'\u0000'+property;
        const list=declMap.get(key)||[];
        list.push({file,value});
        declMap.set(key,list);
      }
    }
  }
}
for(const [key,list] of declMap){
  const filesSet=[...new Set(list.map(x=>x.file))];
  const values=[...new Set(list.map(x=>x.value))];
  if(filesSet.length>1 && values.length>1){
    const [selector,property]=key.split('\u0000');
    if(/card|panel|tab|button|recipe|routine|homebar|flyout|section|body|html|input|select/i.test(selector)){
      cssDup.push({selector,property,definitions:list.slice(0,12)});
    }
  }
}
cssDup.sort((a,b)=>a.selector.localeCompare(b.selector)||a.property.localeCompare(b.property));

const report={
  scannedFiles:sources.size,
  scannedCharacters:[...sources.values()].reduce((n,s)=>n+s.length,0),
  runtimeStorage,
  reviewedDeviceStorage:browserStorageInventory.reviewedGroups,
  unreviewedRuntimeStorage:browserStorageInventory.unreviewedGroups,
  storageFiles,
  unreferencedStorageFiles,
  storageTotal:storage.length,
  conflictMarkers,
  dynamicStyle,
  dynamicScript,
  inlineStyles:inlineStyles.filter(x=>x.chars>800),
  timingPaintCount:timingPaint.length,
  timingPaint:timingPaint.slice(0,300),
  authorityNamed,
  orphanAuthority,
  loadedAuthority,
  conflictingCssDeclarations:cssDup.slice(0,500)
};

console.log('BASELINE_SINGLE_AUTHORITY_AUDIT='+JSON.stringify(report));
console.log('\nSingle-authority audit summary');
console.log('Scanned files:',report.scannedFiles);
console.log('Scanned characters:',report.scannedCharacters);
console.log('Runtime browser-storage references:',report.runtimeStorage.length);
console.log('Reviewed device-only storage groups:',report.reviewedDeviceStorage.length);
console.log('Unreviewed runtime storage groups:',report.unreviewedRuntimeStorage.length);
console.log('Dynamic style creators:',report.dynamicStyle.length);
console.log('Dynamic script creators:',report.dynamicScript.length);
console.log('Large inline style blocks:',report.inlineStyles.length);
console.log('Authority/repair/stability named files:',report.authorityNamed.length);
console.log('Unreferenced authority/repair/stability named files:',report.orphanAuthority.length);
console.log('Conflicting CSS selector/property declarations:',report.conflictingCssDeclarations.length);

if(process.argv.includes('--strict')){
  const failures=[];
  if(report.conflictMarkers.length) failures.push('merge-conflict markers');
  if(report.unreviewedRuntimeStorage.length) failures.push('unreviewed browser persistence in runtime');
  if(report.dynamicStyle.length) failures.push('runtime style injection');
  if(failures.length){
    console.error('Strict audit failed:',failures.join(', '));
    process.exitCode=1;
  }
}
