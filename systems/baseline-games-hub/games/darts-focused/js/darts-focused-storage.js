import {
  createDefaultDartsProfile,
  normaliseDartsProfile
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';

export const DARTS_STORAGE_KEY='__bl_darts_focused_v1__';
export const DARTS_LEGACY_STORAGE_KEY='__bl_darts_focused_v2__';

export function loadDartsProfile({storage=localStorage}={}){
  try{
    const primary=storage.getItem(DARTS_STORAGE_KEY);
    const legacy=storage.getItem(DARTS_LEGACY_STORAGE_KEY);
    const loaded=normaliseDartsProfile(JSON.parse(primary||legacy||'null'));
    if(!primary&&legacy)storage.setItem(DARTS_STORAGE_KEY,JSON.stringify(loaded));
    return loaded;
  }catch(_error){
    return createDefaultDartsProfile();
  }
}

export function persistDartsProfile(profile,{storage=localStorage}={}){
  const serialised=JSON.stringify(profile);
  try{
    storage.setItem(DARTS_STORAGE_KEY,serialised);
    storage.setItem(DARTS_LEGACY_STORAGE_KEY,serialised);
    return {ok:true,serialised};
  }catch(_error){
    return {ok:false,serialised};
  }
}
