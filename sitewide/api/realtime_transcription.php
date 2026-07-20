<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

const BL_REALTIME_MAX_SDP_BYTES = 131072;
const BL_REALTIME_OPENAI_URL = 'https://api.openai.com/v1/realtime/calls';

function bl_realtime_error(string $code, int $status): void {
  bl_json(['ok' => false, 'error' => $code], $status);
}

if(strtoupper((string)($_SERVER['REQUEST_METHOD'] ?? 'GET')) !== 'POST'){
  bl_realtime_error('method_not_allowed', 405);
}

bl_require_same_origin();
$user = bl_require_user();
$userId = (int)($user['id'] ?? 0);
bl_require_rate_limit('realtime_transcription_session', (string)$userId, 12, 300);

$contentType = strtolower(trim((string)($_SERVER['CONTENT_TYPE'] ?? '')));
if(!str_starts_with($contentType, 'application/sdp')){
  bl_realtime_error('unsupported_media_type', 415);
}

$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if($contentLength <= 0 || $contentLength > BL_REALTIME_MAX_SDP_BYTES){
  bl_realtime_error('invalid_sdp', 400);
}

$sdp = file_get_contents('php://input', false, null, 0, BL_REALTIME_MAX_SDP_BYTES + 1) ?: '';
if($sdp === '' || strlen($sdp) > BL_REALTIME_MAX_SDP_BYTES || !str_contains($sdp, 'v=0')){
  bl_realtime_error('invalid_sdp', 400);
}

$apiKey = bl_env('OPENAI_API_KEY');
if($apiKey === ''){
  bl_realtime_error('openai_api_key_missing', 503);
}
if(!function_exists('curl_init')){
  bl_realtime_error('curl_extension_missing', 503);
}

$session = [
  'type' => 'transcription',
  'audio' => [
    'input' => [
      'noise_reduction' => ['type' => 'far_field'],
      'transcription' => [
        'model' => 'gpt-4o-transcribe',
        'language' => 'en',
        'prompt' => 'British English fitness workout commands. Expected short phrases: begin, start, ready, go, success, succeeded, fail, failed, repeat, stop voice workout, and spoken numbers from zero to one thousand.',
      ],
      'turn_detection' => [
        'type' => 'server_vad',
        'threshold' => 0.35,
        'prefix_padding_ms' => 300,
        'silence_duration_ms' => 250,
      ],
    ],
  ],
];

$sessionJson = json_encode($session, JSON_UNESCAPED_SLASHES);
if($sessionJson === false){
  bl_realtime_error('session_configuration_failed', 500);
}

$safetySalt = bl_env('BL_VOICE_SAFETY_SALT', hash('sha256', $apiKey));
$safetyIdentifier = hash_hmac('sha256', 'baseline-user:' . $userId, $safetySalt);
$curl = curl_init(BL_REALTIME_OPENAI_URL);
curl_setopt_array($curl, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CONNECTTIMEOUT => 8,
  CURLOPT_TIMEOUT => 20,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $apiKey,
    'OpenAI-Safety-Identifier: ' . $safetyIdentifier,
  ],
  CURLOPT_POSTFIELDS => [
    'sdp' => $sdp,
    'session' => $sessionJson,
  ],
]);

$answer = curl_exec($curl);
$status = (int)curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if(!is_string($answer) || $answer === '' || $status < 200 || $status >= 300){
  error_log('Realtime transcription session failed; status=' . $status . ($curlError !== '' ? '; curl=' . $curlError : ''));
  bl_realtime_error('transcription_service_unavailable', 502);
}

while(ob_get_level() > 0){ @ob_end_clean(); }
http_response_code(200);
header('Content-Type: application/sdp');
bl_no_cache_headers();
echo $answer;
