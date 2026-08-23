from pathlib import Path

path = Path('sitewide/js/baseline-shared.js')
text = path.read_text(encoding='utf-8')
text = text.replace('const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_REFRESH_SAFE_20260824_3";', 'const BASELINE_SHARED_BUILD = "SITEWIDE_SKINCARE_REFRESH_SAFE_20260824_4";', 1)
old = """    const ensureContentUi = ()=>{
      if(contentUiStarted) return;
      contentUiStarted = true;
      initContentUi();
    };

    const bindLazyContentUi = ()=>{
"""
new = """    const ensureContentUi = ()=>{
      if(contentUiStarted) return;
      contentUiStarted = true;
      initContentUi();
    };
    try{
      window.BASELINE_ensureContentUi = ensureContentUi;
    }catch(_e){}

    const bindLazyContentUi = ()=>{
"""
if old not in text:
    raise SystemExit('ensureContentUi block not found')
text = text.replace(old, new, 1)
old_dup = """      try{
        window.BASELINE_ensureContentUi = ensureContentUi;
      }catch(_e){}
    };
"""
new_dup = """    };
"""
if old_dup not in text:
    raise SystemExit('lazy export block not found')
text = text.replace(old_dup, new_dup, 1)
path.write_text(text, encoding='utf-8')
