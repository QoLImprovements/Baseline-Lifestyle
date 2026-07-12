<?php
declare(strict_types=1);

const BL_FITNESS_VOICE_RUNTIME = 'BASELINE_FITNESS_VOICE_RUNTIME_20260712_10';
const BL_FITNESS_RUNTIME_EPOCH = '20260712_10';

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-LiteSpeed-Cache-Control: no-cache');
header('Permissions-Policy: microphone=(self)');
header('X-Baseline-Fitness-Runtime: ' . BL_FITNESS_VOICE_RUNTIME);

// Clear prior Fitness HTML/CSS/JS once, then remember the delivered epoch.
if((string)($_COOKIE['baseline_fitness_runtime_epoch'] ?? '') !== BL_FITNESS_RUNTIME_EPOCH){
    header('Clear-Site-Data: "cache"');
    $secure = (!empty($_SERVER['HTTPS']) && strtolower((string)$_SERVER['HTTPS']) !== 'off') ? '; Secure' : '';
    header('Set-Cookie: baseline_fitness_runtime_epoch=' . BL_FITNESS_RUNTIME_EPOCH . '; Path=/; Max-Age=31536000' . $secure . '; SameSite=Lax', false);
}

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

// The runtime owns these scripts so stale browser/server copies cannot win.
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-voice\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-voice-access\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-fitness-coherence\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-fitness-app\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<script\b[^>]*src=["\'][^"\']*baseline-fitness-voice(?:-v[23])?\.js[^"\']*["\'][^>]*>\s*</script>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<link\b[^>]*href=["\'][^"\']*baseline-voice\.css[^"\']*["\'][^>]*>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<link\b[^>]*href=["\'][^"\']*baseline-fitness-coherence\.css[^"\']*["\'][^>]*>\s*~i', '', $html) ?? $html;
$html = preg_replace('~<link\b[^>]*href=["\'][^"\']*baseline-fitness-voice-interface\.css[^"\']*["\'][^>]*>\s*~i', '', $html) ?? $html;

$voiceCss = bl_inline_style(__DIR__ . '/../../sitewide/css/baseline-voice.css');
$coherenceCss = bl_inline_style(__DIR__ . '/css/baseline-fitness-coherence.css');
$voiceInterfaceCss = bl_inline_style(__DIR__ . '/css/baseline-fitness-voice-interface.css');
$runtimeCss =
    '<style id="baseline-fitness-voice-runtime-style">' . $voiceCss . '</style>' .
    '<style id="baseline-fitness-coherence-runtime-style">' . $coherenceCss . '</style>' .
    '<style id="baseline-fitness-voice-interface-runtime-style">' . $voiceInterfaceCss . '</style>';
$runtimeMeta = '<meta name="baseline-fitness-voice-runtime" content="' . BL_FITNESS_VOICE_RUNTIME . '">';
$html = str_ireplace('</head>', $runtimeMeta . $runtimeCss . '</head>', $html);

$sitewideVoice = bl_inline_script(__DIR__ . '/../../sitewide/js/baseline-voice.js');
$voiceAccess = bl_inline_script(__DIR__ . '/../../sitewide/js/baseline-voice-access.js');
$fitnessCoherence = bl_inline_script(__DIR__ . '/js/baseline-fitness-coherence.js');
$fitnessApp = bl_inline_script(__DIR__ . '/js/baseline-fitness-app.js');
$fitnessVoice = bl_inline_script(__DIR__ . '/js/baseline-fitness-voice.js');

$visibilityGuard = <<<'JS'
(function(){
  'use strict';
  var BUILD='BASELINE_FITNESS_VOICE_VISIBILITY_GUARD_20260712_10';
  document.documentElement.setAttribute('data-baseline-fitness-voice-delivery',BUILD);
  function removeSitewideVoice(){
    document.getElementById('bl-voice-toggle')?.remove();
    document.getElementById('bl-voice-flyout')?.remove();
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
  function ensure(){ removeSitewideVoice(); ensureWorkoutVoice(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ensure);
  else ensure();
  new MutationObserver(ensure).observe(document.documentElement,{childList:true,subtree:true});
})();
JS;

$runtimeScripts =
    '<script id="baseline-sitewide-voice-inline">' . $sitewideVoice . '</script>' .
    '<script id="baseline-sitewide-voice-access-inline">' . $voiceAccess . '</script>' .
    '<script id="baseline-fitness-coherence-inline">' . $fitnessCoherence . '</script>' .
    '<script id="baseline-fitness-app-inline">' . $fitnessApp . '</script>' .
    '<script id="baseline-fitness-voice-inline">' . $fitnessVoice . '</script>' .
    '<script id="baseline-fitness-voice-visibility-guard">' . $visibilityGuard . '</script>';

$html = str_ireplace('</body>', $runtimeScripts . '</body>', $html);
echo $html;
