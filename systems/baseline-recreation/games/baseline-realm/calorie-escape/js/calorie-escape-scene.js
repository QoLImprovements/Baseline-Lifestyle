import { calorieEscapeModules } from './calorie-escape-game.js';

function inventorySummary(service){const inventory=service?.read().realm.inventory||{food:{},equipment:{}};return{food:{...(inventory.food||{})},equipment:Object.values(inventory.equipment||{})};}
function ensureStyle(){let link=document.getElementById('calorieEscapeStyle');if(!link){link=document.createElement('link');link.id='calorieEscapeStyle';link.rel='stylesheet';document.head.appendChild(link);}link.href='/systems/baseline-recreation/games/baseline-realm/calorie-escape/css/calorie-escape.css?v=REALM_CANONICAL_COMPLETE_20261018_1';}

export function createCalorieEscapeScene({inventoryService,workshopService}={}){
  let root=null;
  let game=null;
  return{id:'calorie-escape',placeholder:false,async enter({router}){ensureStyle();const frame=document.getElementById('realmSceneFrame');root=document.createElement('section');root.id='calorieEscapeScreen';root.className='calorie-escape-screen';frame.classList.add('is-calorie-escape-view');frame.appendChild(root);game={...calorieEscapeModules};game.setup({root,loadState:()=>inventoryService?.read().realm.calorieEscape,persistState:(state,reason,rewards=[])=>inventoryService?.transact({produce:rewards,mutate:draft=>{draft.realm.calorieEscape=state;}},{type:reason,moduleId:'calorie-escape'}),resolveEffects:()=>workshopService?.resolveEffects('calorie-escape')||{},getInventorySummary:()=>inventorySummary(inventoryService),useFood:id=>workshopService?.useItem(id,'calorie-escape')||{ok:false},onExit:()=>router.navigate('basecamp')});game.mount();document.documentElement.setAttribute('data-calorie-escape-live','FOUR_ZONE_COMPLETE_20260628');},async exit(){game?.destroy();game=null;root?.remove();root=null;document.getElementById('realmSceneFrame')?.classList.remove('is-calorie-escape-view');document.documentElement.removeAttribute('data-calorie-escape-live');}};
}
