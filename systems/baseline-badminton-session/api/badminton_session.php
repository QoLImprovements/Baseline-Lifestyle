<?php
declare(strict_types=1);
require __DIR__ . '/../../../sitewide/api/config.php';

bl_session_start();

const BL_BADMINTON_RATING_GAP_CAP = 5.0;

function bl_badminton_state_table(PDO $db): void {
  bl_apply_schema_migration($db, 'badminton_session', 1, static function(PDO $db): void {
    $db->exec('CREATE TABLE IF NOT EXISTS badminton_state_store (
      state_key TEXT PRIMARY KEY,
      state_json TEXT NOT NULL,
      updated_at INTEGER NOT NULL
    )');
  });
}

function bl_badminton_normalize(string $value): string {
  return strtolower(trim($value));
}

function bl_badminton_current_user(): array {
  return [
    'id' => bl_authed_uid(),
    'name' => bl_authed_name(),
    'email' => bl_authed_email(),
  ];
}

function bl_badminton_user_tokens(array $user): array {
  $tokens = [];
  $id = (int)($user['id'] ?? 0);
  $name = bl_badminton_normalize((string)($user['name'] ?? ''));
  $email = bl_badminton_normalize((string)($user['email'] ?? ''));
  if($id > 0) $tokens[] = 'uid:' . $id;
  if($name !== '') $tokens[] = 'name:' . $name;
  if($email !== '') $tokens[] = 'email:' . $email;
  return array_values(array_unique($tokens));
}

function bl_badminton_default_moderator_tokens(): array {
  $tokens = [
    'name:peterbw',
    'name:peter bates-wilkinson',
    'name:peter bates wilkinson',
    'email:bateswilkinson@gmail.com',
  ];
  $extra = bl_env('BL_BADMINTON_MODERATOR_ALIASES');
  if($extra !== ''){
    foreach(explode(',', $extra) as $entry){
      $value = bl_badminton_normalize($entry);
      if($value === '') continue;
      $tokens[] = str_contains($value, '@') ? 'email:' . $value : 'name:' . $value;
    }
  }
  return array_values(array_unique($tokens));
}

function bl_badminton_env_tokens(): array {
  $tokens = bl_badminton_default_moderator_tokens();
  $developerUid = (int)bl_env('BL_BADMINTON_DEVELOPER_UID', '1');
  $developerName = bl_badminton_normalize(bl_env('BL_BADMINTON_DEVELOPER_NAME'));
  $developerEmail = bl_badminton_normalize(bl_env('BL_BADMINTON_DEVELOPER_EMAIL'));
  if($developerUid > 0) $tokens[] = 'uid:' . $developerUid;
  if($developerName !== '') $tokens[] = 'name:' . $developerName;
  if($developerEmail !== '') $tokens[] = 'email:' . $developerEmail;
  return array_values(array_unique($tokens));
}

function bl_badminton_player_admin_tokens(array $state): array {
  $tokens = [];
  $players = $state['players'] ?? [];
  if(!is_array($players)) return [];
  foreach($players as $player){
    if(!is_array($player)) continue;
    $isAdmin = false;
    foreach(['badmintonSessionsAdmin','isBadmintonAdmin','badmintonAdmin'] as $adminKey){
      if(!empty($player[$adminKey])){
        $isAdmin = true;
        break;
      }
    }
    if(!$isAdmin) continue;
    foreach(['userId','uid','linkedUserId','loginUserId'] as $idKey){
      $id = (int)($player[$idKey] ?? 0);
      if($id > 0) $tokens[] = 'uid:' . $id;
    }
    foreach(['loginEmail','linkedEmail','email'] as $emailKey){
      $email = bl_badminton_normalize((string)($player[$emailKey] ?? ''));
      if($email !== '') $tokens[] = 'email:' . $email;
    }
    foreach(['loginUsername','loginName','linkedLogin','linkedLoginName','username','login'] as $nameKey){
      $name = bl_badminton_normalize((string)($player[$nameKey] ?? ''));
      if($name !== '') $tokens[] = 'name:' . $name;
    }
  }
  return array_values(array_unique($tokens));
}

function bl_badminton_is_developer(array $user): bool {
  if((int)($user['id'] ?? 0) <= 0) return false;
  return count(array_intersect(bl_badminton_user_tokens($user), bl_badminton_env_tokens())) > 0;
}

function bl_badminton_is_admin(array $user, array $state): bool {
  if((int)($user['id'] ?? 0) <= 0) return false;
  if(bl_badminton_is_developer($user)) return true;
  return count(array_intersect(bl_badminton_user_tokens($user), bl_badminton_player_admin_tokens($state))) > 0;
}

function bl_badminton_rating_value($value): float {
  return is_numeric($value) ? (float)$value : 25.0;
}

function bl_badminton_pair_key(string $a, string $b): string {
  $names = [trim($a), trim($b)];
  sort($names, SORT_NATURAL | SORT_FLAG_CASE);
  return implode(' / ', $names);
}

function bl_badminton_storage_state(array $state): array {
  unset($state['approvedAdminUsernames'], $state['adminUsernames'], $state['approvedBadmintonAdmins'], $state['badmintonAdminRequired']);
  return $state;
}

function bl_badminton_enrich_rating_state(array $state): array {
  $players = $state['players'] ?? [];
  if(!is_array($players)) return $state;
  if(!isset($state['pairRatings']) || !is_array($state['pairRatings'])) $state['pairRatings'] = [];
  if(!isset($state['oneVsTwoRatings']) || !is_array($state['oneVsTwoRatings'])) $state['oneVsTwoRatings'] = [];
  $normalizedPlayers = [];
  foreach($players as $player){
    if(!is_array($player)) continue;
    $name = trim((string)($player['name'] ?? $player['playerName'] ?? ''));
    if($name === '') continue;
    $playerRating = bl_badminton_rating_value($player['playerRating'] ?? $player['rating'] ?? 25);
    $normalizedPlayers[] = ['name' => $name, 'playerRating' => $playerRating];
    if(!array_key_exists($name, $state['oneVsTwoRatings'])){
      $state['oneVsTwoRatings'][$name] = $playerRating;
    }
  }
  $count = count($normalizedPlayers);
  for($i = 0; $i < $count; $i++){
    for($j = $i + 1; $j < $count; $j++){
      $key = bl_badminton_pair_key($normalizedPlayers[$i]['name'], $normalizedPlayers[$j]['name']);
      if(!array_key_exists($key, $state['pairRatings'])){
        $state['pairRatings'][$key] = ($normalizedPlayers[$i]['playerRating'] + $normalizedPlayers[$j]['playerRating']) / 2;
      }
    }
  }
  $state['ratingModel'] = [
    'playerRating' => 'singles_only',
    'pairRating' => 'doubles_pair_and_pair_side_of_2v1',
    'oneVsTwoRating' => 'solo_side_of_2v1',
  ];
  return $state;
}

function bl_badminton_player_management_signature(array $state): array {
  $state = bl_badminton_storage_state($state);
  $players = $state['players'] ?? [];
  $out = [];
  if(is_array($players)){
    foreach($players as $player){
      if(!is_array($player)) continue;
      $id = (string)($player['id'] ?? $player['playerId'] ?? $player['name'] ?? '');
      $row = ['id' => $id];
      foreach([
        'name','playerName','login','username','loginUsername','loginName','linkedLogin','linkedLoginName',
        'email','loginEmail','linkedEmail','userId','uid','linkedUserId','loginUserId',
        'badmintonSessionsAdmin','isBadmintonAdmin','badmintonAdmin',
        'doublesDaySinglesOptOut','doublesDaySoloOptOut'
      ] as $key){
        if(array_key_exists($key, $player)) $row[$key] = $player[$key];
      }
      ksort($row);
      $out[] = $row;
    }
  }
  usort($out, static function($a, $b){
    return json_encode($a, JSON_UNESCAPED_SLASHES) <=> json_encode($b, JSON_UNESCAPED_SLASHES);
  });
  return $out;
}

function bl_badminton_management_changed(array $oldState, array $newState): bool {
  return bl_badminton_player_management_signature($oldState) !== bl_badminton_player_management_signature($newState);
}

function bl_badminton_user_player_names(array $state, array $user): array {
  $names = [];
  $userTokens = bl_badminton_user_tokens($user);
  $players = $state['players'] ?? [];
  if(!is_array($players)) return [];
  foreach($players as $player){
    if(!is_array($player)) continue;
    $tokens = [];
    foreach(['loginUsername','loginName','linkedLogin','linkedLoginName','username','login','name'] as $key){
      $value = bl_badminton_normalize((string)($player[$key] ?? ''));
      if($value !== '') $tokens[] = 'name:' . $value;
    }
    foreach(['loginEmail','linkedEmail','email'] as $key){
      $value = bl_badminton_normalize((string)($player[$key] ?? ''));
      if($value !== '') $tokens[] = 'email:' . $value;
    }
    foreach(['userId','uid','linkedUserId','loginUserId'] as $key){
      $id = (int)($player[$key] ?? 0);
      if($id > 0) $tokens[] = 'uid:' . $id;
    }
    if(count(array_intersect($userTokens, $tokens)) > 0){
      $name = bl_badminton_normalize((string)($player['name'] ?? ''));
      if($name !== '') $names[] = $name;
    }
  }
  return array_values(array_unique($names));
}

function bl_badminton_label_names(string $label): array {
  $parts = preg_split('~/~', $label) ?: [];
  $out = [];
  foreach($parts as $part){
    $name = bl_badminton_normalize((string)$part);
    if($name !== '') $out[] = $name;
  }
  return $out;
}

function bl_badminton_added_matches(array $oldState, array $newState): array {
  $oldMatches = $oldState['matches'] ?? [];
  $newMatches = $newState['matches'] ?? [];
  if(!is_array($oldMatches) || !is_array($newMatches)) return [];
  $addedCount = count($newMatches) - count($oldMatches);
  if($addedCount <= 0) return [];
  return array_slice($newMatches, 0, $addedCount);
}

function bl_badminton_match_submission_allowed(array $oldState, array $newState, array $user): bool {
  $added = bl_badminton_added_matches($oldState, $newState);
  if(!$added) return true;
  $names = bl_badminton_user_player_names($oldState ?: $newState, $user);
  if(!$names) return false;
  foreach($added as $match){
    if(!is_array($match)) return false;
    $courtNames = array_merge(
      bl_badminton_label_names((string)($match['side1Label'] ?? '')),
      bl_badminton_label_names((string)($match['side2Label'] ?? ''))
    );
    if(!array_intersect($names, $courtNames)) return false;
  }
  return true;
}

function bl_badminton_frontend_admin_usernames(array $state, array $user, bool $isAdmin): array {
  $names = ['__badminton_admin_required__', 'peterbw', 'peter bates-wilkinson', 'peter bates wilkinson'];
  $developerName = bl_badminton_normalize(bl_env('BL_BADMINTON_DEVELOPER_NAME'));
  if($developerName !== '') $names[] = $developerName;
  foreach(array_merge(bl_badminton_env_tokens(), bl_badminton_player_admin_tokens($state)) as $token){
    if(str_starts_with($token, 'name:')){
      $name = substr($token, 5);
      if($name !== '') $names[] = $name;
    }
  }
  $currentName = bl_badminton_normalize((string)($user['name'] ?? ''));
  if($isAdmin && $currentName !== '') $names[] = $currentName;
  return array_values(array_unique($names));
}


function bl_badminton_score_error($score1, $score2): string {
  if(!is_int($score1) || !is_int($score2)) return 'scores_must_be_whole_numbers';
  if($score1 < 0 || $score2 < 0) return 'scores_must_be_zero_or_higher';
  if($score1 > 30 || $score2 > 30) return 'score_above_30';
  if($score1 === $score2) return 'draw_not_allowed';
  $winner = max($score1, $score2);
  $loser = min($score1, $score2);
  if($winner < 21) return 'winner_below_21';
  if($winner < 30 && ($winner - $loser) < 2) return 'two_point_lead_required';
  if($winner === 30 && $loser > 29) return 'invalid_30_cap';
  return '';
}

function bl_badminton_team_label_key(string $value): string {
  $parts = preg_split('~/~', strtolower(trim($value))) ?: [];
  $parts = array_values(array_filter(array_map(static fn($x) => trim((string)$x), $parts), static fn($x) => $x !== ''));
  sort($parts, SORT_NATURAL | SORT_FLAG_CASE);
  return implode(' / ', $parts);
}

function bl_badminton_side_label_from_court(array $court, int $sideNumber): string {
  $side = $court[$sideNumber === 1 ? 'side1' : 'side2'] ?? [];
  $players = is_array($side) && isset($side['players']) && is_array($side['players']) ? $side['players'] : [];
  $names = [];
  foreach($players as $player){
    if(is_array($player)){
      $name = trim((string)($player['name'] ?? ''));
      if($name !== '') $names[] = $name;
    }
  }
  return implode(' / ', $names);
}

function bl_badminton_rating_from_court(array $court, int $sideNumber): float {
  $key = $sideNumber === 1 ? 'side1Rating' : 'side2Rating';
  return is_numeric($court[$key] ?? null) ? (float)$court[$key] : 25.0;
}

function bl_badminton_match_key(array $match): string {
  return strtolower(trim((string)($match['kind'] ?? ''))) . '::' . bl_badminton_team_label_key((string)($match['side1Label'] ?? '')) . '::' . bl_badminton_team_label_key((string)($match['side2Label'] ?? ''));
}

function bl_badminton_court_key(array $court): string {
  return strtolower(trim((string)($court['kind'] ?? ''))) . '::' . bl_badminton_team_label_key(bl_badminton_side_label_from_court($court, 1)) . '::' . bl_badminton_team_label_key(bl_badminton_side_label_from_court($court, 2));
}

function bl_badminton_court_submission_key(array $court): string {
  foreach(['currentCourtKey','submissionKey','courtInstanceKey','courtSubmissionKey'] as $key){
    $value = trim((string)($court[$key] ?? ''));
    if($value !== '') return $value;
  }
  return '';
}

function bl_badminton_match_submission_key(array $match): string {
  foreach(['courtSubmissionKey','currentCourtKey','submissionKey','courtInstanceKey'] as $key){
    $value = trim((string)($match[$key] ?? ''));
    if($value !== '') return $value;
  }
  return '';
}

function bl_badminton_current_courts_by_key(array $state): array {
  $out = [];
  $courts = $state['plan']['current'] ?? [];
  if(!is_array($courts)) return $out;
  foreach($courts as $court){
    if(!is_array($court)) continue;
    $submissionKey = bl_badminton_court_submission_key($court);
    if($submissionKey !== '') $out['submission::' . $submissionKey] = $court;
    $matchKey = bl_badminton_court_key($court);
    if($matchKey !== '' && !array_key_exists('match::' . $matchKey, $out)) $out['match::' . $matchKey] = $court;
  }
  return $out;
}

function bl_badminton_find_current_court_for_match(array $courtsByKey, array $match): ?array {
  $submissionKey = bl_badminton_match_submission_key($match);
  if($submissionKey !== ''){
    $court = $courtsByKey['submission::' . $submissionKey] ?? null;
    if(is_array($court)) return $court;
  }
  $court = $courtsByKey['match::' . bl_badminton_match_key($match)] ?? null;
  return is_array($court) ? $court : null;
}

function bl_badminton_value_at_path(array $state, array $path, $fallback = null){
  $cur = $state;
  foreach($path as $part){
    if(!is_array($cur) || !array_key_exists($part, $cur)) return $fallback;
    $cur = $cur[$part];
  }
  return $cur;
}

function bl_badminton_validate_added_match_state(array $oldState, array $newState): array {
  $added = bl_badminton_added_matches($oldState, $newState);
  if(!$added) return ['ok'=>true];
  $courtsByKey = bl_badminton_current_courts_by_key($oldState);
  if(!$courtsByKey) return ['ok'=>true];
  foreach($added as $match){
    if(!is_array($match)) return ['ok'=>false,'error'=>'bad_match_row'];
    $score1 = $match['score1'] ?? null;
    $score2 = $match['score2'] ?? null;
    if(!is_int($score1)) $score1 = is_numeric($score1) ? (int)$score1 : null;
    if(!is_int($score2)) $score2 = is_numeric($score2) ? (int)$score2 : null;
    $scoreError = bl_badminton_score_error($score1, $score2);
    if($scoreError !== '') return ['ok'=>false,'error'=>'invalid_score','reason'=>$scoreError];
    $court = bl_badminton_find_current_court_for_match($courtsByKey, $match);
    if(!is_array($court)) return ['ok'=>false,'error'=>'match_not_in_current_courts'];

    $winnerSide = $score1 > $score2 ? 1 : 2;
    $loserSide = $winnerSide === 1 ? 2 : 1;
    $side1Rating = bl_badminton_rating_from_court($court, 1);
    $side2Rating = bl_badminton_rating_from_court($court, 2);
    $higherSide = abs($side1Rating - $side2Rating) < 0.1 ? 0 : ($side1Rating > $side2Rating ? 1 : 2);
    $lowerSide = $higherSide === 1 ? 2 : ($higherSide === 2 ? 1 : 0);
    $restrictedSide = (int)($court['restrictedSide'] ?? 0);
    $altered = !empty($court['alteredRulesActive']);

    if($altered && $restrictedSide > 0 && $winnerSide !== $restrictedSide){
      $label = bl_badminton_side_label_from_court($court, $restrictedSide);
      $oldRating = bl_badminton_rating_from_court($court, $restrictedSide);
      $newRating = bl_badminton_find_side_rating_in_state($newState, $court, $restrictedSide, $oldRating);
      if($newRating < $oldRating - 0.0001){
        return ['ok'=>false,'error'=>'hardship_side_rating_drop_blocked'];
      }
    }

    if($higherSide > 0 && $winnerSide === $higherSide && $loserSide === $lowerSide){
      $higherRating = $higherSide === 1 ? $side1Rating : $side2Rating;
      $oldLower = $lowerSide === 1 ? $side1Rating : $side2Rating;
      $newLower = bl_badminton_find_side_rating_in_state($newState, $court, $lowerSide, $oldLower);
      if(($higherRating - $newLower) > (BL_BADMINTON_RATING_GAP_CAP + 0.0001)){
        return ['ok'=>false,'error'=>'rating_gap_cap_enforced'];
      }
    }
  }
  return ['ok'=>true];
}

function bl_badminton_find_side_rating_in_state(array $state, array $court, int $sideNumber, float $fallback): float {
  $side = $court[$sideNumber === 1 ? 'side1' : 'side2'] ?? [];
  $players = is_array($side) && isset($side['players']) && is_array($side['players']) ? $side['players'] : [];
  $kind = (string)($court['kind'] ?? '');
  $names = [];
  foreach($players as $player){
    if(is_array($player)){
      $name = trim((string)($player['name'] ?? ''));
      if($name !== '') $names[] = $name;
    }
  }
  if(count($names) === 2){
    $key = bl_badminton_pair_key($names[0], $names[1]);
    $value = $state['pairRatings'][$key] ?? null;
    return is_numeric($value) ? (float)$value : $fallback;
  }
  if(count($names) === 1){
    if($kind === '2v1'){
      $value = $state['oneVsTwoRatings'][$names[0]] ?? null;
      if(is_numeric($value)) return (float)$value;
    }
    $playersState = $state['players'] ?? [];
    if(is_array($playersState)){
      foreach($playersState as $player){
        if(!is_array($player)) continue;
        if(trim((string)($player['name'] ?? '')) === $names[0]){
          $value = $player['playerRating'] ?? $player['rating'] ?? null;
          return is_numeric($value) ? (float)$value : $fallback;
        }
      }
    }
  }
  return $fallback;
}

function bl_badminton_public_state(array $state, array $user, bool $isAdmin): array {
  $state = bl_badminton_enrich_rating_state($state);
  $adminUsernames = bl_badminton_frontend_admin_usernames($state, $user, $isAdmin);
  $state['approvedAdminUsernames'] = $adminUsernames;
  $state['adminUsernames'] = $adminUsernames;
  $state['approvedBadmintonAdmins'] = $adminUsernames;
  $state['badmintonAdminRequired'] = true;
  return $state;
}

try{
  $db = bl_db();
  bl_badminton_state_table($db);
  $stmt = $db->prepare('SELECT state_json, updated_at FROM badminton_state_store WHERE state_key=:k LIMIT 1');
  $stmt->execute([':k'=>'global']);
  $row = $stmt->fetch();
  $storedState = [];
  $updatedAt = null;
  if($row){
    $decoded = json_decode((string)($row['state_json'] ?? ''), true);
    $storedState = is_array($decoded) ? bl_badminton_storage_state($decoded) : [];
    $updatedAt = (int)($row['updated_at'] ?? 0);
  }

  $user = bl_badminton_current_user();
  $isDeveloper = bl_badminton_is_developer($user);
  $isAdmin = bl_badminton_is_admin($user, $storedState);
  $authPayload = [
    'logged_in' => (int)($user['id'] ?? 0) > 0,
    'is_developer' => $isDeveloper,
    'is_badminton_admin' => $isAdmin,
    'user' => [
      'id' => (int)($user['id'] ?? 0),
      'name' => (string)($user['name'] ?? ''),
      'email' => (string)($user['email'] ?? ''),
    ],
  ];

  if(($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET'){
    bl_json(['ok'=>true,'state'=>bl_badminton_public_state($storedState, $user, $isAdmin),'updated_at'=>$updatedAt,'auth'=>$authPayload]);
  }

  if(($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST'){
    bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
  }

  $input = bl_input_json();
  $state = $input['state'] ?? null;
  if(!is_array($state)) bl_json(['ok'=>false,'error'=>'bad_state'], 400);

  $state = bl_badminton_storage_state($state);
  $state = bl_badminton_enrich_rating_state($state);

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

  $json = json_encode(bl_badminton_storage_state($state), JSON_UNESCAPED_SLASHES);
  if($json === false) bl_json(['ok'=>false,'error'=>'encode_failed'], 400);

  $now = time();
  $stmt = $db->prepare('INSERT INTO badminton_state_store(state_key, state_json, updated_at) VALUES(:k,:j,:t)
    ON CONFLICT(state_key) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at');
  $stmt->execute([':k'=>'global', ':j'=>$json, ':t'=>$now]);
  bl_json(['ok'=>true,'updated_at'=>$now,'auth'=>$authPayload,'state'=>bl_badminton_public_state($state, $user, $isAdmin)]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'badminton_state_failed'], 500);
}
