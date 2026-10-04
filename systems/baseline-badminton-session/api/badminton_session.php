<?php
declare(strict_types=1);
require __DIR__ . '/../../../sitewide/api/config.php';
require_once __DIR__ . '/badminton_storage.php';

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

function bl_badminton_pair_id(string $a, string $b): string {
  $ids = [trim($a), trim($b)];
  sort($ids, SORT_STRING);
  return count(array_filter($ids, static fn($x) => $x !== '')) === 2
    ? 'pair:' . implode('::', $ids)
    : '';
}

function bl_badminton_legacy_pair_key(string $a, string $b): string {
  $names = [trim($a), trim($b)];
  sort($names, SORT_NATURAL | SORT_FLAG_CASE);
  return implode(' / ', $names);
}

function bl_badminton_hardship_identity_map(array $state): array {
  $map = [];
  $players = $state['players'] ?? [];
  if(!is_array($players)) return $map;
  foreach($players as $player){
    if(!is_array($player)) continue;
    $id = trim((string)($player['id'] ?? $player['playerId'] ?? ''));
    if($id === '') continue;
    $stable = 'id:' . $id;
    foreach([
      'name' => ($player['name'] ?? $player['playerName'] ?? ''),
      'email' => ($player['loginEmail'] ?? $player['email'] ?? $player['linkedEmail'] ?? ''),
      'login' => ($player['loginUsername'] ?? $player['loginName'] ?? $player['username'] ?? $player['login'] ?? ''),
    ] as $kind => $value){
      $value = bl_badminton_normalize((string)$value);
      if($value !== '') $map[$kind . ':' . $value] = $stable;
    }
    $map[$stable] = $stable;
  }
  return $map;
}

function bl_badminton_canonical_hardship_side(string $side, array $identityMap): string {
  $tokens = array_values(array_filter(explode('::', $side), static fn($x) => trim((string)$x) !== ''));
  $canonical = [];
  foreach($tokens as $token){
    $token = trim((string)$token);
    $canonical[] = $identityMap[$token] ?? $token;
  }
  sort($canonical, SORT_STRING);
  return implode('::', array_values(array_unique($canonical)));
}

function bl_badminton_canonical_hardship_records(array $state): array {
  $records = $state['hardshipRecords'] ?? ($state['plan']['activeHardships'] ?? []);
  if(!is_array($records)) return [];
  $identityMap = bl_badminton_hardship_identity_map($state);
  $canonical = [];
  foreach($records as $key => $rule){
    $key = (string)$key;
    if(!is_array($rule)) continue;
    if(preg_match('/^hardship::([^:]+)::restricted::side::(.+?)::opponent::side::(.+)$/', $key, $m) === 1){
      $restricted = bl_badminton_canonical_hardship_side((string)$m[2], $identityMap);
      $opponent = bl_badminton_canonical_hardship_side((string)$m[3], $identityMap);
      if($restricted !== '' && $opponent !== ''){
        $key = 'hardship::' . $m[1] . '::restricted::side::' . $restricted . '::opponent::side::' . $opponent;
      }
    }
    $canonical[$key] = $rule;
  }
  return $canonical;
}

function bl_badminton_storage_state(array $state): array {
  unset($state['approvedAdminUsernames'], $state['adminUsernames'], $state['approvedBadmintonAdmins'], $state['badmintonAdminRequired']);
  $state['hardshipRecords'] = bl_badminton_canonical_hardship_records($state);
  if(!isset($state['plan']) || !is_array($state['plan'])) $state['plan'] = [];
  $state['plan']['activeHardships'] = $state['hardshipRecords'];
  return $state;
}

function bl_badminton_enrich_rating_state(array $state): array {
  $players = $state['players'] ?? [];
  if(!is_array($players)) return $state;
  if(!isset($state['pairRatings']) || !is_array($state['pairRatings'])) $state['pairRatings'] = [];
  if(!isset($state['oneVsTwoRatings']) || !is_array($state['oneVsTwoRatings'])) $state['oneVsTwoRatings'] = [];

  $normalizedPlayers = [];
  $playersByName = [];
  $playersById = [];
  foreach($players as $player){
    if(!is_array($player)) continue;
    $id = trim((string)($player['id'] ?? $player['playerId'] ?? ''));
    $name = trim((string)($player['name'] ?? $player['playerName'] ?? ''));
    if($id === '' || $name === '') continue;
    $playerRating = bl_badminton_rating_value($player['playerRating'] ?? $player['rating'] ?? 25);
    $row = ['id' => $id, 'name' => $name, 'playerRating' => $playerRating];
    $normalizedPlayers[] = $row;
    $playersById[$id] = $row;
    $playersByName[bl_badminton_normalize($name)] = $row;
  }

  $pairRatings = [];
  foreach($state['pairRatings'] as $key => $value){
    $rating = bl_badminton_rating_value($value);
    $key = (string)$key;
    if(str_starts_with($key, 'pair:')){
      $pairRatings[$key] = $rating;
      continue;
    }
    $parts = preg_split('~\s*(?:/|\+)\s*~', $key) ?: [];
    if(count($parts) !== 2) continue;
    $a = $playersByName[bl_badminton_normalize((string)$parts[0])] ?? null;
    $b = $playersByName[bl_badminton_normalize((string)$parts[1])] ?? null;
    if(!$a || !$b) continue;
    $pairId = bl_badminton_pair_id($a['id'], $b['id']);
    if($pairId !== '' && !array_key_exists($pairId, $pairRatings)) $pairRatings[$pairId] = $rating;
  }
  $state['pairRatings'] = $pairRatings;

  $oneVsTwoRatings = [];
  foreach($state['oneVsTwoRatings'] as $key => $value){
    $rating = bl_badminton_rating_value($value);
    $key = (string)$key;
    if(isset($playersById[$key])){
      $oneVsTwoRatings[$key] = $rating;
      continue;
    }
    $legacy = $playersByName[bl_badminton_normalize($key)] ?? null;
    if($legacy && !array_key_exists($legacy['id'], $oneVsTwoRatings)) $oneVsTwoRatings[$legacy['id']] = $rating;
  }
  $state['oneVsTwoRatings'] = $oneVsTwoRatings;

  foreach($normalizedPlayers as $player){
    if(!array_key_exists($player['id'], $state['oneVsTwoRatings'])){
      $state['oneVsTwoRatings'][$player['id']] = $player['playerRating'];
    }
  }

  $count = count($normalizedPlayers);
  for($i = 0; $i < $count; $i++){
    for($j = $i + 1; $j < $count; $j++){
      $pairId = bl_badminton_pair_id($normalizedPlayers[$i]['id'], $normalizedPlayers[$j]['id']);
      if($pairId !== '' && !array_key_exists($pairId, $state['pairRatings'])){
        $state['pairRatings'][$pairId] = ($normalizedPlayers[$i]['playerRating'] + $normalizedPlayers[$j]['playerRating']) / 2;
      }
    }
  }
  $state['ratingModel'] = [
    'playerRating' => 'singles_only_by_player_id',
    'pairRating' => 'doubles_pair_id_and_pair_side_of_2v1',
    'oneVsTwoRating' => 'solo_side_of_2v1_by_player_id',
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
  $ids = [];
  foreach($players as $player){
    if(is_array($player)){
      $id = trim((string)($player['id'] ?? $player['playerId'] ?? ''));
      if($id !== '') $ids[] = $id;
    }
  }
  if(count($ids) === 2){
    $pairId = bl_badminton_pair_id($ids[0], $ids[1]);
    $value = $state['pairRatings'][$pairId] ?? null;
    return is_numeric($value) ? (float)$value : $fallback;
  }
  if(count($ids) === 1){
    if($kind === '2v1'){
      $value = $state['oneVsTwoRatings'][$ids[0]] ?? null;
      if(is_numeric($value)) return (float)$value;
    }
    $playersState = $state['players'] ?? [];
    if(is_array($playersState)){
      foreach($playersState as $player){
        if(!is_array($player)) continue;
        $playerId = trim((string)($player['id'] ?? $player['playerId'] ?? ''));
        if($playerId === $ids[0]){
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
    $expected = bl_resource_required_revision_from_input($input);
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
