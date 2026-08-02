from pathlib import Path

# One-time deterministic transformation for the existing validation-heavy endpoint.
path = Path('systems/baseline-badminton-session/api/badminton_session.php')
text = path.read_text(encoding='utf-8')
require_line = "require __DIR__ . '/../../../sitewide/api/config.php';\n"
replacement = require_line + "require_once __DIR__ . '/badminton_storage.php';\n"
if "require_once __DIR__ . '/badminton_storage.php';" not in text:
    if require_line not in text:
        raise SystemExit('Badminton config include marker not found')
    text = text.replace(require_line, replacement, 1)

marker = "\ntry{\n  $db = bl_db();\n  bl_badminton_state_table($db);"
start = text.rfind(marker)
if start < 0:
    raise SystemExit('Badminton persistence block marker not found')

handler = r'''
try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $loaded = bl_badminton_file_load();
  }else{
    $db = bl_db();
    $loaded = bl_badminton_sqlite_load($db);
    if($mode === 'mirror'){
      $mirrored = bl_badminton_mirror_state($loaded['state']);
      $loaded['revision'] = (int)($mirrored['revision'] ?? 0);
    }
  }
  $storedState = is_array($loaded['state'] ?? null) ? bl_badminton_storage_state($loaded['state']) : [];
  $updatedAt = $loaded['updated_at'] ?? null;
  $revision = (int)($loaded['revision'] ?? 0);

  $user = bl_badminton_current_user();
  $isDeveloper = bl_badminton_is_developer($user);
  $isAdmin = bl_badminton_is_admin($user, $storedState);
  $authPayload = [
    'logged_in'=>(int)($user['id'] ?? 0) > 0,
    'is_developer'=>$isDeveloper,
    'is_badminton_admin'=>$isAdmin,
    'user'=>[
      'id'=>(int)($user['id'] ?? 0),
      'name'=>(string)($user['name'] ?? ''),
      'email'=>(string)($user['email'] ?? ''),
    ],
  ];

  if(($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET'){
    $response = [
      'ok'=>true,
      'state'=>bl_badminton_public_state($storedState, $user, $isAdmin),
      'updated_at'=>$updatedAt,
      'auth'=>$authPayload,
    ];
    if($mode !== 'sqlite') $response['revision'] = $revision;
    bl_json($response);
  }

  if(($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST'){
    bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  }

  $input = bl_input_json();
  $state = $input['state'] ?? null;
  if(!is_array($state)) bl_json(['ok'=>false,'error'=>'bad_state'], 400);
  $state = bl_badminton_enrich_rating_state(bl_badminton_storage_state($state));

  if(bl_badminton_management_changed($storedState, $state) && !$isAdmin){
    bl_json([
      'ok'=>false,
      'error'=>'badminton_admin_required',
      'message'=>'Only the site developer or an approved Badminton Sessions admin can add players, remove players, link player logins, change preferences, or change badminton admin privileges.',
      'auth'=>$authPayload,
    ], 403);
  }

  if(!$isAdmin && !bl_badminton_match_submission_allowed($storedState, $state, $user)){
    bl_json([
      'ok'=>false,
      'error'=>'court_player_required',
      'message'=>'Only a player on that court, the moderator, or an approved admin can submit that court result.',
      'auth'=>$authPayload,
    ], 403);
  }

  $serverValidation = bl_badminton_validate_added_match_state($storedState, $state);
  if(empty($serverValidation['ok'])){
    bl_json([
      'ok'=>false,
      'error'=>$serverValidation['error'] ?? 'server_validation_failed',
      'reason'=>$serverValidation['reason'] ?? '',
      'message'=>'Server-side badminton result validation rejected this submission.',
      'auth'=>$authPayload,
    ], 400);
  }

  if($mode === 'saved-data'){
    $expected = bl_resource_revision_from_input($input);
    $written = bl_badminton_file_write($state, $expected);
    $updatedAt = bl_resource_timestamp((string)$written['updatedAt']);
    $revision = (int)$written['revision'];
  }else{
    $updatedAt = bl_badminton_sqlite_write($db, $state);
    if($mode === 'mirror'){
      $written = bl_badminton_mirror_state($state);
      $revision = (int)($written['revision'] ?? 0);
    }
  }

  $response = [
    'ok'=>true,
    'updated_at'=>$updatedAt,
    'auth'=>$authPayload,
    'state'=>bl_badminton_public_state($state, $user, $isAdmin),
  ];
  if($mode !== 'sqlite') $response['revision'] = $revision;
  bl_json($response);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  if($e->getMessage() === 'encode_failed') bl_json(['ok'=>false,'error'=>'encode_failed'], 400);
  bl_json(['ok'=>false,'error'=>'badminton_state_failed'], 500);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'badminton_state_failed'], 500);
}
'''

path.write_text(text[:start] + '\n' + handler.lstrip(), encoding='utf-8')
