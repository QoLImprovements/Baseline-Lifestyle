<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$uid = bl_require_user_id();

$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
$app = trim((string)($_GET['app'] ?? ''));
if($app === '' && $method === 'POST'){
  $payload = bl_input_json();
  $app = trim((string)($payload['app'] ?? ''));
}else{
  $payload = [];
}
if($app === '') $app = 'pairs';

function bl_profile_aliases(string $app): array {
  $map = [
    'pairs' => ['pairs'],
    'make24' => ['make24', 'baseline24'],
    'detectword' => ['detectword', 'wordgrid', 'baselinewordgrid', 'baselinewordle', 'wordle'],
    'ninja' => ['ninja', 'baselineninja'],
    'trackcoin' => ['trackcoin'],
    'ruleshift' => ['ruleshift'],
  ];
  return $map[$app] ?? [];
}

if(!in_array($app, ['pairs', 'make24', 'detectword', 'ninja', 'trackcoin', 'ruleshift'], true)) bl_json(['ok'=>false,'error'=>'bad_app'], 400);

function bl_default_game_profile(string $app): array {
  if($app === 'pairs'){
    return [
      'app' => 'pairs',
      'bank' => 0,
      'xp' => 0,
      'level' => 1,
      'skillPoints' => 1,
      'currentStreak' => 0,
      'bestStreak' => 0,
      'cleanWinStreak' => 0,
      'boardsCleared' => 0,
      'gamesPlayed' => 0,
      'skills' => [
        'insight' => 0,
        'flow' => 0,
        'banker' => 0,
        'recall' => 0,
        'tempo' => 0,
      ],
      'selectedTier' => 'starter',
    ];
  }

  if($app === 'make24'){
    return [
      'app' => 'make24',
      'bank' => 0,
      'xp' => 0,
      'level' => 1,
      'skillPoints' => 1,
      'cleanWinStreak' => 0,
      'puzzlesSolved' => 0,
      'gamesPlayed' => 0,
      'skills' => [
        'clarity' => 0,
        'flow' => 0,
        'banker' => 0,
        'reserve' => 0,
        'precision' => 0,
      ],
      'selectedTier' => 'starter',
    ];
  }

  if($app === 'detectword'){
    return [
      'app' => 'detectword',
      'bank' => 0,
      'xp' => 0,
      'level' => 1,
      'skillPoints' => 1,
      'wordsSolved' => 0,
      'gamesPlayed' => 0,
      'currentStreak' => 0,
      'bestStreak' => 0,
      'cleanWinStreak' => 0,
      'skills' => [
        'flow' => 0,
        'banker' => 0,
        'reserve' => 0,
        'focus' => 0,
      ],
      'selectedTier' => 'tier3',
    ];
  }

  if($app === 'ninja'){
    return [
      'app' => 'ninja',
      'coins' => 0,
      'xp' => 0,
      'level' => 1,
      'stage' => 1,
      'enemyHp' => 0,
      'highestStage' => 1,
      'totalKills' => 0,
      'bossesDefeated' => 0,
      'totalCoinsEarned' => 0,
      'prestigeCount' => 0,
      'spirit' => 0,
      'prestigeEarnedTotal' => 0,
      'lastSeenAt' => 0,
      'offlineSummary' => '',
      'bonusCache' => [],
      'upgrades' => [
        'blade' => 0,
        'drills' => 0,
        'treasury' => 0,
        'meditation' => 0,
        'breaker' => 0,
      ],
    ];
  }


  if($app === 'trackcoin'){
    return [
      'app' => 'trackcoin',
      'xp' => 0,
      'level' => 1,
      'coins' => 0,
      'selectedTier' => 'tier1',
      'currentTier' => 'tier1',
      'highestUnlockedTier' => 'tier1',
      'bestStreak' => 0,
      'currentStreak' => 0,
      'trackCoinSpeedPercent' => 100,
      'bestTrackCoinSpeedPercent' => 100,
      'totalCorrect' => 0,
      'totalRounds' => 0,
      'totalXpEarned' => 0,
      'totalCoinsEarned' => 0,
      'cleanWinStreak' => 0,
      'bestAccuracy' => 0,
      'perfectMiniSet' => 0,
      'totalMiniSetsCleared' => 0,
      'skillPoints' => 1,
      'skills' => [
        'read' => 0,
        'banker' => 0,
        'flow' => 0,
        'discipline' => 0,
        'steal' => 0,
      ],
    ];
  }


  if($app === 'ruleshift'){
    return [
      'app' => 'ruleshift',
      'bank' => 0,
      'xp' => 0,
      'level' => 1,
      'skillPoints' => 1,
      'gamesPlayed' => 0,
      'correctAnswers' => 0,
      'wrongAnswers' => 0,
      'currentStreak' => 0,
      'bestStreak' => 0,
      'cleanWinStreak' => 0,
      'selectedTier' => 'starter',
      'skills' => [
        'focus' => 0,
        'banker' => 0,
        'recovery' => 0,
        'adapt' => 0,
      ],
    ];
  }

  return ['app' => $app];
}

function bl_round_nonneg($value): int {
  return max(0, (int)round((float)$value));
}

function bl_clamp_skill_set(array $baseSkills, array $sourceSkills, array $skillMax, array $unlockLevels, int $level, int &$skillPoints): array {
  $skills = $baseSkills;
  foreach($skillMax as $key => $max){
    $current = max(0, min($max, (int)round((float)($sourceSkills[$key] ?? 0))));
    $allowed = $level >= ($unlockLevels[$key] ?? 1) ? $current : 0;
    if($current > $allowed){
      $skillPoints += ($current - $allowed);
    }
    $skills[$key] = $allowed;
  }
  return $skills;
}

function bl_normalise_game_profile(string $app, array $profile): array {
  $base = bl_default_game_profile($app);
  $merged = array_replace_recursive($base, $profile);
  $merged['app'] = $app;

  if($app === 'ninja'){
    $merged['coins'] = bl_round_nonneg($merged['coins'] ?? 0);
    $merged['xp'] = bl_round_nonneg($merged['xp'] ?? 0);
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $merged['stage'] = max(1, (int)round((float)($merged['stage'] ?? 1)));
    $merged['enemyHp'] = max(0, (float)($merged['enemyHp'] ?? 0));
    $merged['highestStage'] = max($merged['stage'], (int)round((float)($merged['highestStage'] ?? $merged['stage'])));
    $merged['totalKills'] = bl_round_nonneg($merged['totalKills'] ?? 0);
    $merged['bossesDefeated'] = bl_round_nonneg($merged['bossesDefeated'] ?? 0);
    $merged['totalCoinsEarned'] = bl_round_nonneg($merged['totalCoinsEarned'] ?? 0);
    $merged['prestigeCount'] = bl_round_nonneg($merged['prestigeCount'] ?? 0);
    $merged['spirit'] = bl_round_nonneg($merged['spirit'] ?? 0);
    $merged['prestigeEarnedTotal'] = bl_round_nonneg($merged['prestigeEarnedTotal'] ?? 0);
    $merged['lastSeenAt'] = max(0, (int)round((float)($merged['lastSeenAt'] ?? 0)));
    $merged['offlineSummary'] = trim((string)($merged['offlineSummary'] ?? ''));
    $merged['bonusCache'] = is_array($merged['bonusCache'] ?? null) ? $merged['bonusCache'] : [];
    $upgrades = is_array($merged['upgrades'] ?? null) ? $merged['upgrades'] : [];
    $merged['upgrades'] = $base['upgrades'];
    foreach(array_keys($base['upgrades']) as $key){
      $merged['upgrades'][$key] = bl_round_nonneg($upgrades[$key] ?? 0);
    }
    return $merged;
  }


  if($app === 'trackcoin'){
    $merged['xp'] = bl_round_nonneg($merged['xp'] ?? 0);
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $merged['coins'] = bl_round_nonneg($merged['coins'] ?? 0);
    $merged['skillPoints'] = bl_round_nonneg($merged['skillPoints'] ?? 0);
    $merged['currentStreak'] = bl_round_nonneg($merged['currentStreak'] ?? 0);
    $merged['bestStreak'] = bl_round_nonneg($merged['bestStreak'] ?? 0);
    $merged['trackCoinSpeedPercent'] = max(100, (int)round((float)($merged['trackCoinSpeedPercent'] ?? 100)));
    $merged['bestTrackCoinSpeedPercent'] = max(100, (int)round((float)($merged['bestTrackCoinSpeedPercent'] ?? $merged['trackCoinSpeedPercent'])));
    $merged['totalCorrect'] = bl_round_nonneg($merged['totalCorrect'] ?? 0);
    $merged['totalRounds'] = bl_round_nonneg($merged['totalRounds'] ?? 0);
    $merged['totalXpEarned'] = bl_round_nonneg($merged['totalXpEarned'] ?? 0);
    $merged['totalCoinsEarned'] = bl_round_nonneg($merged['totalCoinsEarned'] ?? 0);
    $merged['cleanWinStreak'] = bl_round_nonneg($merged['cleanWinStreak'] ?? 0);
    $merged['bestAccuracy'] = max(0, min(1, (float)($merged['bestAccuracy'] ?? 0)));
    $merged['perfectMiniSet'] = bl_round_nonneg($merged['perfectMiniSet'] ?? 0);
    $merged['totalMiniSetsCleared'] = bl_round_nonneg($merged['totalMiniSetsCleared'] ?? 0);
    $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
    $skillMax = ['read'=>4,'banker'=>5,'flow'=>5,'discipline'=>4,'steal'=>4];
    $unlockLevels = ['read'=>1,'banker'=>1,'flow'=>1,'discipline'=>4,'steal'=>8];
    $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills, $skillMax, $unlockLevels, $merged['level'], $merged['skillPoints']);
    $validTiers = ['tier1','tier2','tier3','tier4','tier5'];
    $unlockMap = ['tier1'=>1,'tier2'=>3,'tier3'=>6,'tier4'=>10,'tier5'=>15];
    $selected = trim((string)($merged['selectedTier'] ?? 'tier1')) ?: 'tier1';
    if(!in_array($selected, $validTiers, true) || $merged['level'] < ($unlockMap[$selected] ?? 1)){
      $selected = 'tier1';
      foreach($validTiers as $tierId){
        if($merged['level'] >= ($unlockMap[$tierId] ?? 1)) $selected = $tierId;
      }
    }
    $merged['selectedTier'] = $selected;
    $highest = 'tier1';
    foreach($validTiers as $tierId){
      if($merged['level'] >= ($unlockMap[$tierId] ?? 1)) $highest = $tierId;
    }
    $merged['highestUnlockedTier'] = $highest;
    $merged['currentTier'] = $merged['selectedTier'];
    return $merged;
  }


  if($app === 'ruleshift'){
    $merged['bank'] = bl_round_nonneg($merged['bank'] ?? 0);
    $merged['xp'] = bl_round_nonneg($merged['xp'] ?? 0);
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $merged['skillPoints'] = bl_round_nonneg($merged['skillPoints'] ?? 0);
    $merged['gamesPlayed'] = bl_round_nonneg($merged['gamesPlayed'] ?? 0);
    $merged['correctAnswers'] = bl_round_nonneg($merged['correctAnswers'] ?? 0);
    $merged['wrongAnswers'] = bl_round_nonneg($merged['wrongAnswers'] ?? 0);
    $merged['currentStreak'] = bl_round_nonneg($merged['currentStreak'] ?? 0);
    $merged['bestStreak'] = bl_round_nonneg($merged['bestStreak'] ?? 0);
    $merged['cleanWinStreak'] = bl_round_nonneg($merged['cleanWinStreak'] ?? 0);
    $merged['selectedTier'] = trim((string)($merged['selectedTier'] ?? 'starter')) ?: 'starter';
    $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
    $skillMax = ['focus'=>5,'banker'=>5,'recovery'=>4,'adapt'=>4];
    $unlockLevels = ['focus'=>1,'banker'=>1,'recovery'=>5,'adapt'=>10];
    $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills, $skillMax, $unlockLevels, $merged['level'], $merged['skillPoints']);
    $validTiers = ['starter','switch','opposite','mixed','pressure'];
    $unlockMap = ['starter'=>1,'switch'=>4,'opposite'=>9,'mixed'=>16,'pressure'=>26];
    $selected = $merged['selectedTier'];
    if(!in_array($selected, $validTiers, true) || $merged['level'] < ($unlockMap[$selected] ?? 1)){
      $selected = 'starter';
      foreach($validTiers as $tierId){
        if($merged['level'] >= ($unlockMap[$tierId] ?? 1)) $selected = $tierId;
      }
    }
    $merged['selectedTier'] = $selected;
    return $merged;
  }

  $merged['bank'] = bl_round_nonneg($merged['bank'] ?? 0);
  $merged['xp'] = bl_round_nonneg($merged['xp'] ?? 0);
  $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
  $merged['skillPoints'] = bl_round_nonneg($merged['skillPoints'] ?? 0);
  $merged['gamesPlayed'] = bl_round_nonneg($merged['gamesPlayed'] ?? 0);
  $merged['cleanWinStreak'] = bl_round_nonneg($merged['cleanWinStreak'] ?? 0);
  $merged['selectedTier'] = trim((string)($merged['selectedTier'] ?? 'starter')) ?: 'starter';

  if($app === 'pairs'){
    $merged['boardsCleared'] = bl_round_nonneg($merged['boardsCleared'] ?? 0);
    $merged['currentStreak'] = bl_round_nonneg($merged['currentStreak'] ?? 0);
    $merged['bestStreak'] = bl_round_nonneg($merged['bestStreak'] ?? 0);
    $skillMax = ['insight'=>4,'flow'=>5,'banker'=>5,'recall'=>4,'tempo'=>4];
    $unlockLevels = ['insight'=>6,'flow'=>1,'banker'=>1,'recall'=>1,'tempo'=>12];
    $validTiers = ['starter','field','forge','bastion','citadel','vault'];
  }elseif($app === 'make24'){
    $merged['puzzlesSolved'] = bl_round_nonneg($merged['puzzlesSolved'] ?? 0);
    $skillMax = ['clarity'=>4,'flow'=>5,'banker'=>5,'reserve'=>4,'precision'=>4];
    $unlockLevels = ['clarity'=>4,'flow'=>1,'banker'=>1,'reserve'=>8,'precision'=>1];
    $validTiers = ['starter','field','forge','citadel','crown'];
  }else{
    $merged['wordsSolved'] = bl_round_nonneg($merged['wordsSolved'] ?? 0);
    $merged['currentStreak'] = bl_round_nonneg($merged['currentStreak'] ?? 0);
    $merged['bestStreak'] = bl_round_nonneg($merged['bestStreak'] ?? 0);
    $merged['cleanWinStreak'] = bl_round_nonneg($merged['cleanWinStreak'] ?? 0);
    $skillMax = ['flow'=>5,'banker'=>5,'reserve'=>4,'focus'=>4];
    $unlockLevels = ['flow'=>1,'banker'=>1,'reserve'=>6,'focus'=>8];
    $validTiers = ['tier3','tier4','tier5','tier6','tier7'];
  }

  $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
  $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills, $skillMax, $unlockLevels, $merged['level'], $merged['skillPoints']);
  if(!in_array($merged['selectedTier'], $validTiers, true)){
    $merged['selectedTier'] = $validTiers[0];
  }
  return $merged;
}

function bl_load_profile_row(PDO $db, int $uid, string $app): ?array {
  $aliases = bl_profile_aliases($app);
  if(!$aliases) return null;
  $placeholders = implode(',', array_fill(0, count($aliases), '?'));
  $stmt = $db->prepare('SELECT app, profile_json, updated_at FROM games_profiles WHERE user_id=? AND app IN (' . $placeholders . ') ORDER BY updated_at DESC LIMIT 1');
  $params = array_merge([$uid], $aliases);
  $stmt->execute($params);
  $row = $stmt->fetch();
  return $row ?: null;
}

try{
  $db = bl_games_db();

  if($method === 'GET'){
    $row = bl_load_profile_row($db, $uid, $app);
    if(!$row){
      bl_json(['ok'=>true,'app'=>$app,'profile'=>bl_default_game_profile($app)]);
    }
    $profile = json_decode((string)($row['profile_json'] ?? '{}'), true);
    $normalised = bl_normalise_game_profile($app, is_array($profile) ? $profile : []);
    bl_json(['ok'=>true,'app'=>$app,'profile'=>$normalised]);
  }

  if($method === 'POST'){
    if(!is_array($payload)) $payload = bl_input_json();
    $profile = bl_normalise_game_profile($app, is_array($payload['profile'] ?? null) ? $payload['profile'] : []);
    $now = bl_now();
    $json = json_encode($profile, JSON_UNESCAPED_SLASHES);

    $stmt = $db->prepare('INSERT INTO games_profiles(user_id, app, profile_json, created_at, updated_at) VALUES(:u,:a,:j,:c,:u2)
      ON CONFLICT(user_id, app) DO UPDATE SET profile_json=excluded.profile_json, updated_at=excluded.updated_at');
    $stmt->execute([':u'=>$uid, ':a'=>$app, ':j'=>$json, ':c'=>$now, ':u2'=>$now]);
    bl_json(['ok'=>true,'app'=>$app,'profile'=>$profile]);
  }

  bl_json(['ok'=>false,'error'=>'method_not_allowed'], 405);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'games_profile_failed'], 500);
}
