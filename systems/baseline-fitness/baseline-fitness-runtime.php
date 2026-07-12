<?php
declare(strict_types=1);

const BL_FITNESS_VOICE_RUNTIME = 'BASELINE_FITNESS_VOICE_RUNTIME_20260712_4';

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-LiteSpeed-Cache-Control: no-cache');
header('Permissions-Policy: microphone=(self)');
header('X-Baseline-Fitness-Runtime: ' . BL_FITNESS_VOICE_RUNTIME);

function bl_read_runtime_file(string $path): string {
    $content = @file_get_contents($path);
    return is_string($content) ? $content : '';
}

function bl_inline_script(string $path): string {
    return str_ireplace('</script', '<\/script', bl_read_runtime_file($path));
}

function bl_inline_style(string $path): string {
    return str_ireplace('</style', '<\/style', bl_read_runtime_file($path));
}

$htmlPath = __DIR__ . '/baseline-fitness.html';
$html = bl_read_runtime_file($htmlPath);
if($html === ''){
    http_response_code(500);
    echo '<!doctype html><html><body><h1>Baseline Fitness unavailable</h1><p>The fitness page file could not be read.</p></body></html>';
    exit;
}

// The runtime owns these three scripts so stale browser/server copies cannot win.
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-voice\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-fitness-app\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-fitness-voice\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<link\b[^>]*href=["\'][^"\']*baseline-voice\.css[^"\']*["\'][^>]*>\s*~i', '', $html) ?? $html;

$voiceCss = bl_inline_style(__DIR__ . '/../../sitewide/css/baseline-voice.css');
$runtimeCss = '<style id="baseline-fitness-voice-runtime-style">' . $voiceCss . '</style>';
$runtimeMeta = '<meta name="baseline-fitness-voice-runtime" content="' . BL_FITNESS_VOICE_RUNTIME . '">';
$html = str_ireplace('</head>', $runtimeMeta . $runtimeCss . '</head>', $html);

$sitewideVoice = bl_inline_script(__DIR__ . '/../../sitewide/js/baseline-voice.js');
$fitnessApp = bl_inline_script(__DIR__ . '/js/baseline-fitness-app.js');
$fitnessVoice = bl_inline_script(__DIR__ . '/js/baseline-fitness-voice.js');

$visibilityGuard = <<<'JS'
(function(){
  'use strict';
  var BUILD='BASELINE_FITNESS_VOICE_VISIBILITY_GUARD_20260712_4';
  document.documentElement.setAttribute('data-baseline-fitness-voice-delivery',BUILD);
  var voiceIcon='<svg class="bl-icon-svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 15.5a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5.5a4 4 0 0 0 4 4z"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  function ensureHeaderVoice(){
    var right=document.querySelector('.bl-homebar-right');
    if(!right) return;
    var account=right.querySelector('#bl-auth-toggle');
    var button=document.getElementById('bl-voice-toggle');
    if(!button){
      button=document.createElement('button');
      button.className='bl-mini-btn';
      button.id='bl-voice-toggle';
      button.type='button';
      button.setAttribute('aria-label','Voice control settings');
      button.setAttribute('aria-expanded','false');
      button.innerHTML='<span class="bl-btn-icon" aria-hidden="true">'+voiceIcon+'</span><span class="bl-btn-label">Voice</span>';
      right.insertBefore(button,account||null);
    }
  }
  function ensureWorkoutVoice(){
    var start=document.getElementById('startWorkoutBtn');
    if(!start||document.getElementById('startVoiceWorkoutBtn')) return;
    var wrap=start.closest('.workout-start-actions');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.className='workout-start-actions';
      start.parentNode.insertBefore(wrap,start);
      wrap.appendChild(start);
    }
    var button=document.createElement('button');
    button.className='action secondary voice-workout-start';
    button.type='button';
    button.id='startVoiceWorkoutBtn';
    button.textContent='Start (Voice Activated)';
    if(start.disabled) button.disabled=true;
    wrap.insertBefore(button,start);
  }
  function ensure(){ ensureHeaderVoice(); ensureWorkoutVoice(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ensure);
  else ensure();
  new MutationObserver(ensure).observe(document.documentElement,{childList:true,subtree:true});
})();
JS;

$runtimeScripts =
    '<script id="baseline-sitewide-voice-inline">' . $sitewideVoice . '</script>' .
    '<script id="baseline-fitness-app-inline">' . $fitnessApp . '</script>' .
    '<script id="baseline-fitness-voice-inline">' . $fitnessVoice . '</script>' .
    '<script id="baseline-fitness-voice-visibility-guard">' . $visibilityGuard . '</script>';

$html = str_ireplace('</body>', $runtimeScripts . '</body>', $html);
echo $html;
