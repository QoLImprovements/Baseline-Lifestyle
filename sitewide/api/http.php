<?php
declare(strict_types=1);

// BASELINE-JSON-HARDENING: API endpoints must return clean JSON only.
// Hosting/PHP warnings before json_encode were causing the front-end "Bad Json" failure.
@ini_set('display_errors', '0');
@ini_set('html_errors', '0');
@ini_set('log_errors', '1');
if(!ob_get_level()){ @ob_start(); }

register_shutdown_function(function(): void {
  $err = error_get_last();
  if(!$err) return;
  $fatalTypes = [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR];
  if(!in_array((int)($err['type'] ?? 0), $fatalTypes, true)) return;
  if(headers_sent()) return;
  while(ob_get_level() > 0){ @ob_end_clean(); }
  http_response_code(500);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  echo json_encode(['ok'=>false,'error'=>'server_error'], JSON_UNESCAPED_SLASHES);
});

function bl_no_cache_headers(): void {
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  header('Pragma: no-cache');
  header('Expires: 0');
}

function bl_json($data, int $status=200): void {
  while(ob_get_level() > 0){ @ob_end_clean(); }
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  bl_no_cache_headers();
  echo json_encode($data, JSON_UNESCAPED_SLASHES);
  exit;
}

function bl_is_secure_request(): bool {
  if(!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') return true;
  return strtolower((string)($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https';
}

function bl_request_origin(): string {
  $configured = rtrim(bl_env('BL_SITE_URL'), '/');
  if($configured !== '' && filter_var($configured, FILTER_VALIDATE_URL) !== false){
    $scheme = strtolower((string)(parse_url($configured, PHP_URL_SCHEME) ?? ''));
    if(in_array($scheme, ['http', 'https'], true)) return $configured;
  }

  $hostHeader = strtolower(trim((string)($_SERVER['HTTP_HOST'] ?? '')));
  $host = preg_replace('/:\d+$/', '', $hostHeader) ?: '';
  if(in_array($host, ['localhost', '127.0.0.1', '::1'], true)){
    $scheme = bl_is_secure_request() ? 'https' : 'http';
    return $scheme . '://' . ($hostHeader !== '' ? $hostHeader : 'localhost');
  }

  // Never build security-sensitive links from an untrusted Host header.
  return BL_CANONICAL_ORIGIN;
}

function bl_site_base_path(): string {
  $scriptDir = str_replace('\\', '/', (string)dirname($_SERVER['SCRIPT_NAME'] ?? '/api'));
  $scriptDir = rtrim($scriptDir, '/');
  if($scriptDir === '' || $scriptDir === '.') return '';
  if(preg_match('~/api$~', $scriptDir)){
    $scriptDir = preg_replace('~/api$~', '', $scriptDir) ?: '';
  }
  return rtrim($scriptDir, '/');
}

function bl_site_url(string $page='index.html', array $params=[]): string {
  $origin = bl_request_origin();
  $basePath = bl_site_base_path();
  $pagePath = '/' . ltrim($page, '/');
  $url = $origin . $basePath . $pagePath;
  if($params){
    $url .= '?' . http_build_query($params);
  }
  return $url;
}

function bl_require_same_origin(): void {
  $method = strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET'));
  if(in_array($method, ['GET', 'HEAD', 'OPTIONS'], true)) return;

  $origin = trim((string)($_SERVER['HTTP_ORIGIN'] ?? ''));
  if($origin === '') return; // Same-origin form posts and older clients may omit Origin.

  $expected = parse_url(bl_request_origin());
  $actual = parse_url($origin);
  if(!$expected || !$actual) bl_json(['ok'=>false,'error'=>'invalid_origin'], 403);

  $expectedScheme = strtolower((string)($expected['scheme'] ?? ''));
  $expectedHost = strtolower((string)($expected['host'] ?? ''));
  $expectedPort = (int)($expected['port'] ?? ($expectedScheme === 'https' ? 443 : 80));
  $actualScheme = strtolower((string)($actual['scheme'] ?? ''));
  $actualHost = strtolower((string)($actual['host'] ?? ''));
  $actualPort = (int)($actual['port'] ?? ($actualScheme === 'https' ? 443 : 80));

  if($actualScheme !== $expectedScheme || $actualHost !== $expectedHost || $actualPort !== $expectedPort){
    bl_json(['ok'=>false,'error'=>'invalid_origin'], 403);
  }
}

function bl_input_json(): array {
  bl_require_same_origin();
  $contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
  if($contentLength > BL_MAX_JSON_BYTES){
    bl_json(['ok'=>false,'error'=>'request_too_large'], 413);
  }

  $raw = file_get_contents('php://input', false, null, 0, BL_MAX_JSON_BYTES + 1) ?: '';
  if(strlen($raw) > BL_MAX_JSON_BYTES){
    bl_json(['ok'=>false,'error'=>'request_too_large'], 413);
  }

  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}
