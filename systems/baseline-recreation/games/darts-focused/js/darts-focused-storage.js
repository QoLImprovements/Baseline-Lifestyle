import {
  createDefaultDartsProfile,
  normaliseDartsProfile
} from './darts-focused-engine.mjs?v=DARTS_REBUILD_20260707_4';

export const DARTS_STORAGE_KEY='__bl_darts_focused_v1__';
export const DARTS_LEGACY_STORAGE_KEY='__bl_darts_focused_v2__';

function serverAuthority(){
  const authority=globalThis.BaselineGameStorage;
  return authority&&typeof authority.getProfile==='function'?authority:null;
}

export function loadDartsProfile({storage=null}={}){
  if(storage){
    try{
      const primary=storage.getItem(DARTS_STORAGE_KEY);
      const legacy=storage.getItem(DARTS_LEGACY_STORAGE_KEY);
      return normaliseDartsProfile(JSON.parse(primary||legacy||'null'));
    }catch(_error){
      return createDefaultDartsProfile();
    }
  }
  const profile=serverAuthority()?.getProfile?.('dartsfocused');
  return normaliseDartsProfile(profile || null);
}

export function persistDartsProfile(profile,{storage=null}={}){
  const normalised=normaliseDartsProfile(profile);
  const serialised=JSON.stringify(normalised);
  if(storage){
    try{
      storage.setItem(DARTS_STORAGE_KEY,serialised);
      storage.setItem(DARTS_LEGACY_STORAGE_KEY,serialised);
      return {ok:true,serialised};
    }catch(_error){
      return {ok:false,serialised};
    }
  }
  const authority=serverAuthority();
  authority?.setTemporaryProfile?.('dartsfocused',normalised);
  authority?.saveProfile?.('dartsfocused',normalised);
  return {ok:Boolean(authority?.canSave?.()),serialised};
}
