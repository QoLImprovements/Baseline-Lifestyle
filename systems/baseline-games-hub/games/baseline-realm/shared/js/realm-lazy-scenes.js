export function createRealmLazySceneManager({
  eventBus,
  getRuntime,
  externalSceneIds,
  escapeHtml
}){
  const ids=new Set(externalSceneIds||[]);
  function setHidden(selector,hidden){
    document.querySelectorAll(selector).forEach((node)=>{
      node.hidden=hidden;
      node.setAttribute('aria-hidden',String(hidden));
    });
  }
  function prepareExternalSceneView(id){
    if(!ids.has(id))return;
    const frame=document.getElementById('realmSceneFrame');
    if(frame){
      frame.classList.remove('is-training-view','is-basecamp-view','is-exploration-view','is-workshop-view');
      frame.classList.add('is-external-realm-view',`is-${id}-view`);
      frame.setAttribute('data-realm-external-view',id);
    }
    setHidden('#realmBasecampScreen, #realmWorkshopScreen, #realmTrainingHud, #realmExplorationScreen, #ninjaScene, .realm-command-banner, .realm-action-dock, .realm-context-action, .realm-home-action, #realmPanelDrawer',true);
    document.documentElement.setAttribute('data-baseline-realm-external-scene',id);
  }
  function restorePersistentSceneView(){
    const frame=document.getElementById('realmSceneFrame');
    if(frame){
      ids.forEach((id)=>frame.classList.remove(`is-${id}-view`));
      frame.classList.remove('is-external-realm-view');
      frame.removeAttribute('data-realm-external-view');
    }
    // Persistent surface visibility is restored only by runtime.setView().
    document.documentElement.removeAttribute('data-baseline-realm-external-scene');
  }
  function restoreExternalSceneView(id){
    if(!ids.has(id))return;
    const frame=document.getElementById('realmSceneFrame');
    if(frame){
      frame.classList.remove('is-external-realm-view',`is-${id}-view`);
      frame.removeAttribute('data-realm-external-view');
    }
    // Do not guess which persistent Realm surfaces should be restored here.
    // The destination scene's runtime.setView() is the sole persistent visibility owner.
    document.documentElement.removeAttribute('data-baseline-realm-external-scene');
  }
  function clearSceneFailure(id){
    document.getElementById(`realmSceneLoadFailure-${id}`)?.remove();
    if(document.documentElement.getAttribute('data-baseline-realm-scene-error')===id){
      document.documentElement.removeAttribute('data-baseline-realm-scene-error');
    }
  }
  function renderSceneFailure({id,label,error,context,retry}){
    const frame=document.getElementById('realmSceneFrame');
    if(!frame)return;
    clearSceneFailure(id);
    const panel=document.createElement('section');
    panel.id=`realmSceneLoadFailure-${id}`;
    panel.className='realm-scene-load-failure empty-box';
    panel.setAttribute('role','alert');
    panel.setAttribute('data-realm-scene-load-failure',id);
    panel.innerHTML=`<strong>${escapeHtml(label)} could not start.</strong><span class="inline-note">The rest of Baseline Realm is still available. ${escapeHtml(error?.message||String(error))}</span><div class="link-actions"><button class="action" type="button" data-realm-scene-retry>Retry ${escapeHtml(label)}</button><button class="action secondary" type="button" data-realm-scene-return>Return to Basecamp</button></div>`;
    panel.querySelector('[data-realm-scene-retry]')?.addEventListener('click',retry,{once:true});
    panel.querySelector('[data-realm-scene-return]')?.addEventListener('click',()=>{
      context.router.navigate('basecamp',{recoveryFrom:id}).catch((navigationError)=>{
        console.error('[Baseline Realm] Basecamp recovery navigation failed.',navigationError);
      });
    });
    frame.appendChild(panel);
    document.documentElement.setAttribute('data-baseline-realm-scene-error',id);
  }
  function createLazyScene({id,label,shared,load}){
    let scene=null;
    let loading=null;
    let attempt=0;
    async function resolveScene(){
      if(scene)return scene;
      if(!loading){
        const currentAttempt=attempt;
        loading=Promise.resolve(load(currentAttempt,shared)).then((loadedScene)=>{
          if(!loadedScene||loadedScene.id!==id||typeof loadedScene.enter!=='function'){
            throw new TypeError(`${label} did not provide a valid Realm scene.`);
          }
          scene=loadedScene;
          return scene;
        }).catch((error)=>{loading=null;throw error;});
      }
      return loading;
    }
    return{
      id,
      async enter(context){
        clearSceneFailure(id);
        if(ids.has(id))prepareExternalSceneView(id);
        else getRuntime()?.setView?.(id);
        document.documentElement.setAttribute('data-baseline-realm-scene-loading',id);
        try{
          const target=await resolveScene();
          await target.enter(context);
          if(ids.has(id))prepareExternalSceneView(id);
          document.documentElement.removeAttribute('data-baseline-realm-scene-loading');
          eventBus.emit('realm:scene:module-ready',{id,attempt});
        }catch(error){
          const failedScene=scene;
          scene=null;loading=null;
          try{await failedScene?.exit?.({...context,failed:true,error});}
          catch(cleanupError){
            eventBus.emit('realm:scene:cleanup-failed',{id,attempt,error:cleanupError});
            console.error(`[Baseline Realm] ${label} failed-scene cleanup also failed.`,cleanupError);
          }
          if(ids.has(id))prepareExternalSceneView(id);
          document.documentElement.removeAttribute('data-baseline-realm-scene-loading');
          eventBus.emit('realm:scene:load-failed',{id,attempt,error});
          console.error(`[Baseline Realm] ${label} failed to load.`,error);
          renderSceneFailure({id,label,error,context,retry:()=>{
            attempt+=1;scene=null;loading=null;
            context.router.navigate(id,{retry:true,attempt}).catch((navigationError)=>{
              console.error(`[Baseline Realm] ${label} retry failed.`,navigationError);
            });
          }});
        }
      },
      async exit(context){
        clearSceneFailure(id);
        document.documentElement.removeAttribute('data-baseline-realm-scene-loading');
        try{if(scene?.exit)await scene.exit(context);}
        finally{restoreExternalSceneView(id);}
      }
    };
  }
  return Object.freeze({createLazyScene,prepareExternalSceneView,restorePersistentSceneView,restoreExternalSceneView,clearSceneFailure});
}
