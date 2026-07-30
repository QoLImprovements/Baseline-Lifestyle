(function(){
'use strict';
const BUILD = 'CHARITY_SHOP_20260730_7';
const ARTWORK_BUILD = '20260730_4';
const FLOAT_TARGET_PENCE = 10000;
function loadCharityCorrections(){
let link = document.querySelector('link[data-charity-cashing-corrections]');
if(!link){
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/systems/charity-shop/css/charity-shop-cashing-and-artwork.css?v=' + BUILD;
link.dataset.charityCashingCorrections = 'true';
document.head.appendChild(link);
}else{
document.head.appendChild(link);
}
}
function loadApprovedSharedUi(){
if(window.__BASELINE_PROTECTED_ACCESS__){
loadCharityCorrections();
return;
}
if(document.querySelector('script[src*="/sitewide/js/baseline-charity-access.js"]')){
loadCharityCorrections();
return;
}
const script = document.createElement('script');
script.src = '/sitewide/js/baseline-charity-access.js?v=BASELINE_PROTECTED_ACCESS_20260730_7';
script.async = false;
script.dataset.protectedAccessLoader = 'charity-shop';
script.addEventListener('load', loadCharityCorrections, {once:true});
document.head.appendChild(script);
}
function loadCompleteCharityTheme(){
if(document.querySelector('link[data-charity-complete-theme]')) return;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/systems/charity-shop/css/charity-shop-complete-theme.css?v=CHARITY_COMPLETE_20260730_2';
link.dataset.charityCompleteTheme = 'true';
document.head.appendChild(link);
}
const DENOMINATIONS = Object.freeze([
{key:'gbp50', label:'£50', pence:5000},
{key:'gbp20', label:'£20', pence:2000},
{key:'gbp10', label:'£10', pence:1000},
{key:'gbp5', label:'£5', pence:500},
{key:'gbp2', label:'£2', pence:200},
{key:'gbp1', label:'£1', pence:100},
{key:'p50', label:'50p', pence:50},
{key:'p20', label:'20p', pence:20},
{key:'p10', label:'10p', pence:10},
{key:'p5', label:'5p', pence:5},
{key:'p2', label:'2p', pence:2},
{key:'p1', label:'1p', pence:1}
]);
const DENOMINATION_BY_KEY = Object.freeze(DENOMINATIONS.reduce(function(map,item){
map[item.key] = item;
return map;
},Object.create(null)));
const BANK_BOOK_GROUPS = Object.freeze([
{label:'£50 notes', keys:['gbp50']},
{label:'£20 notes', keys:['gbp20']},
{label:'£10 notes', keys:['gbp10']},
{label:'£5 notes', keys:['gbp5']},
{label:'£2 coins', keys:['gbp2']},
{label:'£1 coins', keys:['gbp1']},
{label:'50p + 20p', keys:['p50','p20']},
{label:'10p + 5p', keys:['p10','p5']},
{label:'2p + 1p', keys:['p2','p1']}
]);
const FLOAT_MINIMUM_TARGETS = Object.freeze({
gbp5:6,
gbp1:55,
p50:15,
p20:15,
p10:15,
p5:15,
p2:15,
p1:15
});
const FLOAT_IDEAL_TARGETS = Object.freeze({
gbp5:6,
gbp1:55,
p50:18,
p20:16,
p10:16,
p5:15,
p2:15,
p1:15
});
const FLOAT_DISPLAY_KEYS = Object.freeze(['gbp5','gbp1','p50','p20','p10','p5','p2','p1']);
const FLOAT_FILL_PRIORITY = Object.freeze(['p50','p20','p10','p5','p2','p1','gbp1','gbp2','gbp5','gbp10','gbp20','gbp50']);
function money(pence){
return new Intl.NumberFormat('en-GB',{
style:'currency',
currency:'GBP',
minimumFractionDigits:2,
maximumFractionDigits:2
}).format((Number(pence) || 0) / 100);
}
function bookAmount(pence){
const safe = Math.max(0, Math.round(Number(pence) || 0));
return Math.floor(safe / 100) + ' - ' + String(safe % 100).padStart(2,'0');
}
function emptyCounts(){
return DENOMINATIONS.reduce(function(counts,item){
counts[item.key] = 0;
return counts;
},Object.create(null));
}
function valueOfCounts(counts){
return DENOMINATIONS.reduce(function(total,item){
return total + ((counts[item.key] || 0) * item.pence);
},0);
}
function boundedBestAllocation(available,target,priority){
const safeTarget = Math.max(0,Math.floor(Number(target) || 0));
const states = new Array(safeTarget + 1);
states[0] = emptyCounts();
priority.forEach(function(key){
const item = DENOMINATION_BY_KEY[key];
if(!item) return;
let remainingCount = Math.min(
Math.max(0,Math.floor(Number(available[key]) || 0)),
Math.floor(safeTarget / item.pence)
);
let bundle = 1;
while(remainingCount > 0){
const take = Math.min(bundle,remainingCount);
const bundleValue = take * item.pence;
for(let amount = safeTarget - bundleValue; amount >= 0; amount -= 1){
if(!states[amount] || states[amount + bundleValue]) continue;
const next = Object.assign(emptyCounts(),states[amount]);
next[key] += take;
states[amount + bundleValue] = next;
}
remainingCount -= take;
bundle *= 2;
}
});
for(let amount = safeTarget; amount >= 0; amount -= 1){
if(states[amount]) return {value:amount,counts:states[amount]};
}
return {value:0,counts:emptyCounts()};
}
function preferredFloatAllocation(available){
const allocation = emptyCounts();
const remaining = emptyCounts();
DENOMINATIONS.forEach(function(item){
const availableCount = Math.max(0,Math.floor(Number(available[item.key]) || 0));
const targetCount = Math.max(0,Math.floor(Number(FLOAT_IDEAL_TARGETS[item.key]) || 0));
const keep = Math.min(availableCount,targetCount);
allocation[item.key] = keep;
remaining[item.key] = availableCount - keep;
});
const baseValue = valueOfCounts(allocation);
const fill = boundedBestAllocation(remaining,FLOAT_TARGET_PENCE - baseValue,FLOAT_FILL_PRIORITY);
DENOMINATIONS.forEach(function(item){
allocation[item.key] += fill.counts[item.key] || 0;
});
return allocation;
}
function makeFloatAllocation(available){
let allocation = preferredFloatAllocation(available);
let value = valueOfCounts(allocation);
if(value < FLOAT_TARGET_PENCE && valueOfCounts(available) >= FLOAT_TARGET_PENCE){
const fallback = boundedBestAllocation(available,FLOAT_TARGET_PENCE,FLOAT_FILL_PRIORITY);
if(fallback.value > value){
allocation = fallback.counts;
value = fallback.value;
}
}
const minimumsMet = Object.keys(FLOAT_MINIMUM_TARGETS).every(function(key){
return (allocation[key] || 0) >= FLOAT_MINIMUM_TARGETS[key];
});
const idealMet = Object.keys(FLOAT_IDEAL_TARGETS).every(function(key){
return (allocation[key] || 0) === FLOAT_IDEAL_TARGETS[key];
}) && ['gbp50','gbp20','gbp10','gbp2'].every(function(key){
return (allocation[key] || 0) === 0;
});
return {counts:allocation,value:value,minimumsMet:minimumsMet,idealMet:idealMet};
}
function cashRows(){
return DENOMINATIONS.map(function(item){
return [
'<tr data-cash-row="'+item.key+'">',
'  <th scope="row">'+item.label+'</th>',
'  <td><label class="charity-cash-visually-hidden" for="cash-'+item.key+'">Number of '+item.label+' items</label>',
'      <input id="cash-'+item.key+'" class="charity-cash-count" type="number" inputmode="numeric" min="0" step="1" value="0" data-key="'+item.key+'" data-pence="'+item.pence+'"></td>',
'  <td><output class="charity-cash-subtotal" data-subtotal="'+item.key+'">£0.00</output></td>',
'</tr>'
].join('');
}).join('');
}
function bankBookRows(){
return BANK_BOOK_GROUPS.map(function(group){
return '<div class="charity-cheque-row"><span>'+group.label+'</span><output data-bank-book-keys="'+group.keys.join(',')+'">0 - 00</output></div>';
}).join('');
}
function floatRows(){
return FLOAT_DISPLAY_KEYS.map(function(key){
const item = DENOMINATION_BY_KEY[key];
const target = FLOAT_MINIMUM_TARGETS[key] || 0;
const aim = key === 'gbp5' || key === 'gbp1' ? String(target) : target + '+';
return [
'<tr data-float-row="'+key+'">',
'  <th scope="row">'+item.label+'</th>',
'  <td>'+aim+'</td>',
'  <td><output data-float-count="'+key+'">0</output></td>',
'  <td><output data-float-value="'+key+'">£0.00</output></td>',
'</tr>'
].join('');
}).join('');
}
function installCashingUp(){
const operations = document.getElementById('operations');
if(!operations || document.getElementById('operations-cashing')) return;
const tabs = operations.querySelector('.charity-subtabs');
if(tabs && !tabs.querySelector('[data-charity-subtarget="cashing"]')){
const source = tabs.querySelector('.charity-subtab:last-of-type');
const tab = source ? source.cloneNode(false) : document.createElement('button');
tab.type = 'button';
tab.className = 'charity-subtab subtab';
tab.dataset.charitySubtarget = 'cashing';
tab.setAttribute('role','tab');
tab.setAttribute('aria-selected','false');
tab.setAttribute('aria-controls','operations-cashing');
tab.tabIndex = -1;
tab.textContent = 'Cashing Up';
tabs.appendChild(tab);
}
const panel = document.createElement('div');
panel.id = 'operations-cashing';
panel.className = 'charity-subpanel charity-cashing-panel';
panel.hidden = true;
panel.tabIndex = -1;
panel.setAttribute('role','tabpanel');
panel.innerHTML = [
'<div class="charity-cashup">',
'  <header class="card charity-card charity-card--wide charity-cashup-heading">',
'    <p class="charity-kicker">COUNT | MAKE FLOAT | CASH TO BANK</p>',
'    <h2>Cashing Up</h2>',
'    <p>Enter the number of each note and coin in the till. The page makes up the £100 float first, then calculates the remaining Cash To Bank.</p>',
'  </header>',
'  <div class="charity-cashup-layout">',
'    <section class="card charity-card charity-cash-table-card" aria-labelledby="charityCashCountTitle">',
'      <h3 id="charityCashCountTitle">Cash in till</h3>',
'      <div class="charity-cash-table-wrap">',
'        <table class="charity-cash-table">',
'          <thead><tr><th scope="col">Note or coin</th><th scope="col">How many</th><th scope="col">Value</th></tr></thead>',
'          <tbody>'+cashRows()+'</tbody>',
'        </table>',
'      </div>',
'    </section>',
'    <aside class="charity-cash-summary-column">',
'      <section class="card charity-card charity-cash-totals" aria-labelledby="charityCashTotalsTitle">',
'        <h3 id="charityCashTotalsTitle">Till totals</h3>',
'        <div class="charity-total-line"><span>Total Count</span><output id="charityCashTotal" aria-live="polite">£0.00</output></div>',
'        <div class="charity-float-line"><span>Float made</span><output id="charityFloatTotal" aria-live="polite">£0.00</output></div>',
'        <div class="charity-total-line charity-total-line--final"><span>Cash To Bank</span><output id="charityCashToBank" aria-live="polite">£0.00</output></div>',
'        <p class="charity-cash-result-label">The amount remaining after the float has been set aside</p>',
'      </section>',
'      <section class="card charity-card charity-float-maker" aria-labelledby="charityFloatMakerTitle">',
'        <p class="charity-kicker">KEEP IN THE TILL</p>',
'        <h3 id="charityFloatMakerTitle">Make up the £100 float</h3>',
'        <p class="charity-float-copy">Aim for 6 × £5, 55 × £1 and at least 15 of every coin below £1. The remaining value is filled with 50p and below, prioritising the most useful change.</p>',
'        <div class="charity-float-table-wrap">',
'          <table class="charity-float-table">',
'            <thead><tr><th scope="col">Money</th><th scope="col">Aim</th><th scope="col">Keep</th><th scope="col">Value</th></tr></thead>',
'            <tbody>'+floatRows()+'</tbody>',
'          </table>',
'        </div>',
'        <div class="charity-float-total-line"><span>Float total</span><output id="charityFloatMakerTotal">£0.00</output></div>',
'        <p class="charity-float-status" id="charityFloatStatus" role="status" aria-live="polite"></p>',
'        <p class="charity-float-fallback" id="charityFloatFallback" hidden></p>',
'      </section>',
'      <section class="card charity-card charity-cheque-summary" aria-labelledby="charityBankBookTitle">',
'        <div class="charity-cheque-heading"><div><p class="charity-kicker">POUNDS - PENCE</p><h3 id="charityBankBookTitle">Cash To Bank Book</h3></div></div>',
'        <p>Copy these grouped Cash To Bank amounts into the Cash To Bank Book.</p>',
'        <div class="charity-cheque-rows">'+bankBookRows()+'</div>',
'      </section>',
'    </aside>',
'  </div>',
'</div>'
].join('');
operations.appendChild(panel);
const inputs = Array.from(panel.querySelectorAll('.charity-cash-count'));
const totalOutput = panel.querySelector('#charityCashTotal');
const floatOutput = panel.querySelector('#charityFloatTotal');
const floatMakerOutput = panel.querySelector('#charityFloatMakerTotal');
const cashToBankOutput = panel.querySelector('#charityCashToBank');
const floatStatus = panel.querySelector('#charityFloatStatus');
const floatFallback = panel.querySelector('#charityFloatFallback');
function update(){
const availableCounts = emptyCounts();
const cashToBankValues = Object.create(null);
let total = 0;
inputs.forEach(function(input){
const count = Math.max(0,Math.floor(Number(input.value) || 0));
const pence = Number(input.dataset.pence) || 0;
const subtotal = count * pence;
availableCounts[input.dataset.key] = count;
total += subtotal;
const output = panel.querySelector('[data-subtotal="'+input.dataset.key+'"]');
if(output) output.textContent = money(subtotal);
});
const floatPlan = makeFloatAllocation(availableCounts);
const cashToBank = Math.max(0,total - floatPlan.value);
DENOMINATIONS.forEach(function(item){
const keepCount = Math.max(0,floatPlan.counts[item.key] || 0);
const bankCount = Math.max(0,(availableCounts[item.key] || 0) - keepCount);
cashToBankValues[item.key] = bankCount * item.pence;
const countOutput = panel.querySelector('[data-float-count="'+item.key+'"]');
const valueOutput = panel.querySelector('[data-float-value="'+item.key+'"]');
if(countOutput) countOutput.textContent = String(keepCount);
if(valueOutput) valueOutput.textContent = money(keepCount * item.pence);
});
totalOutput.textContent = money(total);
floatOutput.textContent = money(floatPlan.value);
floatMakerOutput.textContent = money(floatPlan.value);
cashToBankOutput.textContent = money(cashToBank);
if(floatPlan.value === FLOAT_TARGET_PENCE && floatPlan.idealMet){
floatStatus.textContent = 'Preferred £100 float ready.';
floatStatus.dataset.state = 'ready';
}else if(floatPlan.value === FLOAT_TARGET_PENCE && floatPlan.minimumsMet){
floatStatus.textContent = '£100 float made. The extra change mix was adjusted to the cash available.';
floatStatus.dataset.state = 'adjusted';
}else if(floatPlan.value === FLOAT_TARGET_PENCE){
floatStatus.textContent = '£100 float made. One or more preferred denomination targets were unavailable.';
floatStatus.dataset.state = 'fallback';
}else{
floatStatus.textContent = 'Float short by ' + money(FLOAT_TARGET_PENCE - floatPlan.value) + '.';
floatStatus.dataset.state = 'short';
}
const fallbackUsed = ['gbp50','gbp20','gbp10','gbp2'].filter(function(key){
return (floatPlan.counts[key] || 0) > 0;
});
if(fallbackUsed.length){
floatFallback.hidden = false;
floatFallback.textContent = 'Fallback used: ' + fallbackUsed.map(function(key){
return (floatPlan.counts[key] || 0) + ' × ' + DENOMINATION_BY_KEY[key].label;
}).join(', ') + '.';
}else{
floatFallback.hidden = true;
floatFallback.textContent = '';
}
panel.querySelectorAll('[data-bank-book-keys]').forEach(function(output){
const grouped = String(output.dataset.bankBookKeys || '').split(',').reduce(function(sum,key){
return sum + (cashToBankValues[key] || 0);
},0);
output.textContent = bookAmount(grouped);
});
}
inputs.forEach(function(input){
input.addEventListener('input',update);
input.addEventListener('change',function(){
input.value = String(Math.max(0,Math.floor(Number(input.value) || 0)));
update();
});
});
update();
}
const STEP_ARTWORK = Object.freeze({
hanging:[
{asset:'hang-it-right', crop:[190,500,920,270], className:'hang-step-1', alt:'Hanger clips pushed out to both end stops, from the Hang It Right A4 artwork.'},
{asset:'hang-it-right', crop:[1360,495,830,275], className:'hang-step-2', alt:'Waistband held straight, firm and taut, from the Hang It Right A4 artwork.'},
{asset:'hang-it-right', crop:[120,1010,2100,505], className:'hang-step-3', alt:'Wide garment folded around the back and secured, from the Hang It Right A4 artwork.'}
],
cubing:[
{asset:'cube-it-right', crop:[160,560,360,290], className:'cube-step-1', alt:'Garment label showing UK size 14, from the Cube It Right A4 artwork.'},
{asset:'cube-it-right', crop:[1240,580,915,260], className:'cube-step-2', alt:'Ladies and mens cube size-guide panels, from the Cube It Right A4 artwork.'},
{asset:'cube-it-right', crop:[120,1200,640,345], className:'cube-step-3', alt:'Label size 14 matched to cube 14 on a hanger, from the Cube It Right A4 artwork.'}
]
});
function artworkNode(item){
const crop = item.crop;
const frame = document.createElement('figure');
frame.className = 'charity-step-artwork ' + item.className;
frame.style.aspectRatio = crop[2] + ' / ' + crop[3];
frame.style.setProperty('--art-width',(2339 / crop[2] * 100) + '%');
frame.style.setProperty('--art-left',(-crop[0] / crop[2] * 100) + '%');
frame.style.setProperty('--art-top',(-crop[1] / crop[3] * 100) + '%');
const image = document.createElement('img');
image.src = '/systems/charity-shop/artwork.php?asset=' + encodeURIComponent(item.asset) + '&v=' + ARTWORK_BUILD;
image.alt = item.alt;
image.loading = 'lazy';
image.decoding = 'async';
frame.appendChild(image);
return frame;
}
function installStepArtwork(){
[
['#operations-hanging',STEP_ARTWORK.hanging],
['#operations-cubing',STEP_ARTWORK.cubing]
].forEach(function(entry){
const section = document.querySelector(entry[0]);
if(!section) return;
const cards = Array.from(section.querySelectorAll('article.charity-step-card')).slice(0,3);
cards.forEach(function(card,index){
if(card.querySelector('.charity-step-artwork') || !entry[1][index]) return;
card.appendChild(artworkNode(entry[1][index]));
});
});
}
loadApprovedSharedUi();
loadCompleteCharityTheme();
loadCharityCorrections();
installCashingUp();
installStepArtwork();
const mainTabs = Array.from(document.querySelectorAll('.charity-main-tab[data-charity-target]'));
const mainSections = Array.from(document.querySelectorAll('.charity-main-section'));
const lockButton = document.getElementById('charityLockBtn');
const defaultSubtab = Object.freeze({
operations:'overview',
sizes:'ladies',
homeware:'duvet'
});
const currentSubtab = Object.assign({},defaultSubtab);
const mainIds = new Set(mainTabs.map(function(button){return button.dataset.charityTarget;}));
let applyingHistory = false;
const legacyRoutes = Object.freeze({
overview:['operations','overview'],
hanging:['operations','hanging'],
cubing:['operations','cubing'],
cashing:['operations','cashing'],
'cashing-up':['operations','cashing'],
'ladies-sizes':['sizes','ladies'],
'mens-sizes':['sizes','mens'],
'shoe-sizes':['sizes','shoes'],
'duvet-sizes':['homeware','duvet']
});
function subtabButtons(mainId){
const section = document.getElementById(mainId);
return section ? Array.from(section.querySelectorAll('.charity-subtab[data-charity-subtarget]')) : [];
}
function subpanels(mainId){
const section = document.getElementById(mainId);
return section ? Array.from(section.querySelectorAll('.charity-subpanel')) : [];
}
function validSubtab(mainId,subId){
return subtabButtons(mainId).some(function(button){return button.dataset.charitySubtarget === subId;});
}
function normalisedState(mainValue,subValue){
const main = mainIds.has(mainValue) ? mainValue : 'operations';
const requestedSub = subValue || currentSubtab[main] || defaultSubtab[main];
const sub = validSubtab(main,requestedSub) ? requestedSub : defaultSubtab[main];
return {main:main,sub:sub};
}
function parseLocationState(){
try{
const params = new URLSearchParams(location.search || '');
const queryMain = String(params.get('section') || '').trim().toLowerCase();
const querySub = String(params.get('tab') || '').trim().toLowerCase();
if(queryMain || querySub) return normalisedState(queryMain,querySub);
}catch(_error){}
let raw = String(location.hash || '').replace(/^#/,'').trim().toLowerCase();
if(!raw) return {main:'operations',sub:'overview'};
if(raw.startsWith('?')){
const params = new URLSearchParams(raw.slice(1));
raw = String(params.get('tab') || '').trim().toLowerCase();
}
if(legacyRoutes[raw]) return {main:legacyRoutes[raw][0],sub:legacyRoutes[raw][1]};
const parts = raw.split('/').filter(Boolean);
return normalisedState(parts[0],parts[1]);
}
function routeUrl(mainId,subId){
try{
const url = new URL(location.href);
url.searchParams.set('section',mainId);
url.searchParams.set('tab',subId);
url.hash = '';
return url.pathname + url.search;
}catch(_error){
return location.pathname + '?section=' + encodeURIComponent(mainId) + '&tab=' + encodeURIComponent(subId);
}
}
function setButtonState(buttons,activeValue,dataKey){
buttons.forEach(function(button){
const active = button.dataset[dataKey] === activeValue;
button.setAttribute('aria-selected',String(active));
button.classList.toggle('active',active);
button.tabIndex = active ? 0 : -1;
});
}
function activate(mainId,subId,options){
const opts = options || {};
const state = normalisedState(mainId,subId);
const selectedMain = state.main;
const selectedSub = state.sub;
currentSubtab[selectedMain] = selectedSub;
setButtonState(mainTabs,selectedMain,'charityTarget');
mainSections.forEach(function(section){
const active = section.id === selectedMain;
section.classList.toggle('active',active);
section.hidden = !active;
});
const buttons = subtabButtons(selectedMain);
setButtonState(buttons,selectedSub,'charitySubtarget');
subpanels(selectedMain).forEach(function(panel){
const active = panel.id === selectedMain + '-' + selectedSub;
panel.classList.toggle('active',active);
panel.hidden = !active;
});
if(opts.history !== false && !applyingHistory){
const next = routeUrl(selectedMain,selectedSub);
try{
if(opts.replace) history.replaceState({charityMain:selectedMain,charitySub:selectedSub},'',next);
else history.pushState({charityMain:selectedMain,charitySub:selectedSub},'',next);
}catch(_error){}
}
if(opts.focusPanel){
const panel = document.getElementById(selectedMain + '-' + selectedSub);
try{panel && panel.focus({preventScroll:true});}
catch(_error){try{panel && panel.focus();}catch(__error){}}
}
}
function bindArrowNavigation(buttons,valueForButton,activateButton){
buttons.forEach(function(button,index){
button.addEventListener('keydown',function(event){
if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
event.preventDefault();
let nextIndex = index;
if(event.key === 'ArrowLeft') nextIndex = (index - 1 + buttons.length) % buttons.length;
if(event.key === 'ArrowRight') nextIndex = (index + 1) % buttons.length;
if(event.key === 'Home') nextIndex = 0;
if(event.key === 'End') nextIndex = buttons.length - 1;
const nextButton = buttons[nextIndex];
nextButton.focus();
activateButton(valueForButton(nextButton));
});
});
}
mainTabs.forEach(function(button){
button.addEventListener('click',function(){
const mainId = button.dataset.charityTarget;
activate(mainId,currentSubtab[mainId] || defaultSubtab[mainId],{history:true});
});
});
bindArrowNavigation(
mainTabs,
function(button){return button.dataset.charityTarget;},
function(mainId){activate(mainId,currentSubtab[mainId] || defaultSubtab[mainId],{history:true});}
);
mainSections.forEach(function(section){
const buttons = subtabButtons(section.id);
buttons.forEach(function(button){
button.addEventListener('click',function(){
activate(section.id,button.dataset.charitySubtarget,{history:true});
});
});
bindArrowNavigation(
buttons,
function(button){return button.dataset.charitySubtarget;},
function(subId){activate(section.id,subId,{history:true});}
);
});
function restoreFromLocation(){
applyingHistory = true;
const state = parseLocationState();
activate(state.main,state.sub,{history:false});
applyingHistory = false;
}
window.addEventListener('popstate',restoreFromLocation);
window.addEventListener('hashchange',restoreFromLocation);
if(lockButton){
lockButton.addEventListener('click',async function(){
lockButton.disabled = true;
lockButton.textContent = 'Locking...';
try{
await fetch('/sitewide/api/protected_access.php',{
method:'POST',
credentials:'same-origin',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({action:'lock',section:'charity_shop_guidance'})
});
}catch(_error){}
location.assign('/home/1');
});
}
const initial = parseLocationState();
activate(initial.main,initial.sub,{history:true,replace:true});
})();
