/* Baseline Natural Skincare — slider presentation cleanup 2026-09-06. */
(function(global){
  'use strict';
  if(!global.document || global.__BASELINE_SKINCARE_SLIDER_CLEANUP_20260906__) return;
  global.__BASELINE_SKINCARE_SLIDER_CLEANUP_20260906__=true;
  const document=global.document;
  const LABELS={
    r2Reactive:'Fixed formula',
    r2BalancedCastor:'Cleansing pull',
    r2EnhancedOlive:'Barrier richness',
    r3BalanceCastor:'Oil balance',
    r3FirmnessWax:'Firmness',
    r6Glide:'Glide & traction',
    r6AvocadoRichness:'Richness',
    r6AvocadoCastor:'Lasting glide',
    r7Hydration:'Hydration balance'
  };
  function cleanup(){
    document.querySelectorAll('#recipes .recipe-slider-instruction').forEach(el=>{ el.hidden=true;el.setAttribute('aria-hidden','true'); });
    Object.entries(LABELS).forEach(([id,label])=>{
      const slider=document.getElementById(id);const heading=slider?.closest('.glide-control-main')?.querySelector('.glide-label');
      if(heading) heading.textContent=label;
    });
    document.querySelectorAll('#r6 .variant-panel > h4 + ul > .ing-subhead').forEach(el=>el.remove());
    if(!document.getElementById('baseline-skincare-slider-cleanup-style')){
      const style=document.createElement('style');style.id='baseline-skincare-slider-cleanup-style';
      style.textContent=`
        #recipes .recipe-slider-instruction{display:none!important}
        #recipes .glide-controller{grid-template-columns:minmax(280px,380px) minmax(0,1fr)!important}
        #recipes .glide-label,
        #recipes .glide-readout,
        #recipes .glide-value-bubble,
        #recipes .glide-scale,
        #recipes .glide-scale small,
        #recipes .glide-variable-help,
        #recipes .glide-explain-title,
        #recipes .glide-explain,
        #recipes .glide-breakdown{font-size:1em!important}
        #recipes .card .card{
          border:2px solid var(--border-2,var(--border))!important;
          box-shadow:var(--shadow)!important;
        }
        #recipes .glide-explain,
        #recipes .glide-breakdown{
          min-height:3.2em!important;
          line-height:1.58!important;
          font-variant-numeric:tabular-nums;
        }
        @media (max-width:900px){
          #recipes .glide-controller{grid-template-columns:1fr!important}
        }
      `;
      document.head.appendChild(style);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',cleanup,{once:true}); else cleanup();
})(typeof window!=='undefined'?window:globalThis);
