<?php
declare(strict_types=1);

function bl_profile_aliases(string $app): array {
  return [
    'pairs'=>['pairs'],
    'make24'=>['make24','baseline24'],
    'detectword'=>['detectword','wordgrid','baselinewordgrid','baselinewordle','wordle'],
    'ninja'=>['ninja','baselineninja'],
    'trackcoin'=>['trackcoin'],
    'ruleshift'=>['ruleshift'],
    'crossnumber'=>['crossnumber'],
  ][$app] ?? [];
}

function bl_default_game_profile(string $app): array {
  $defaults = [
    'pairs'=>[
      'app'=>'pairs','bank'=>0,'xp'=>0,'level'=>1,'skillPoints'=>1,'currentStreak'=>0,'bestStreak'=>0,
      'cleanWinStreak'=>0,'boardsCleared'=>0,'gamesPlayed'=>0,
      'skills'=>['insight'=>0,'flow'=>0,'banker'=>0,'recall'=>0,'tempo'=>0],'selectedTier'=>'starter',
    ],
    'make24'=>[
      'app'=>'make24','bank'=>0,'xp'=>0,'level'=>1,'skillPoints'=>1,'cleanWinStreak'=>0,'puzzlesSolved'=>0,
      'gamesPlayed'=>0,'skills'=>['clarity'=>0,'flow'=>0,'banker'=>0,'reserve'=>0,'precision'=>0],'selectedTier'=>'starter',
    ],
    'detectword'=>[
      'app'=>'detectword','bank'=>0,'xp'=>0,'level'=>1,'skillPoints'=>1,'wordsSolved'=>0,'gamesPlayed'=>0,
      'currentStreak'=>0,'bestStreak'=>0,'cleanWinStreak'=>0,
      'skills'=>['flow'=>0,'banker'=>0,'reserve'=>0,'focus'=>0],'selectedTier'=>'tier3',
    ],
    'ninja'=>[
      'app'=>'ninja','coins'=>0,'xp'=>0,'level'=>1,'stage'=>1,'enemyHp'=>0,'highestStage'=>1,'totalKills'=>0,
      'bossesDefeated'=>0,'totalCoinsEarned'=>0,'prestigeCount'=>0,'spirit'=>0,'prestigeEarnedTotal'=>0,
      'lastSeenAt'=>0,'offlineSummary'=>'','bonusCache'=>[],
      'upgrades'=>['blade'=>0,'drills'=>0,'treasury'=>0,'meditation'=>0,'breaker'=>0],
    ],
    'trackcoin'=>[
      'app'=>'trackcoin','xp'=>0,'level'=>1,'coins'=>0,'selectedTier'=>'tier1','currentTier'=>'tier1',
      'highestUnlockedTier'=>'tier1','bestStreak'=>0,'currentStreak'=>0,'trackCoinSpeedPercent'=>100,
      'bestTrackCoinSpeedPercent'=>100,'totalCorrect'=>0,'totalRounds'=>0,'totalXpEarned'=>0,
      'totalCoinsEarned'=>0,'cleanWinStreak'=>0,'bestAccuracy'=>0,'perfectMiniSet'=>0,
      'totalMiniSetsCleared'=>0,'skillPoints'=>1,
      'skills'=>['read'=>0,'banker'=>0,'flow'=>0,'discipline'=>0,'steal'=>0],
    ],
    'ruleshift'=>[
      'app'=>'ruleshift','bank'=>0,'xp'=>0,'level'=>1,'skillPoints'=>1,'gamesPlayed'=>0,'correctAnswers'=>0,
      'wrongAnswers'=>0,'currentStreak'=>0,'bestStreak'=>0,'cleanWinStreak'=>0,'selectedTier'=>'starter',
      'skills'=>['focus'=>0,'banker'=>0,'recovery'=>0,'adapt'=>0],
    ],
    'crossnumber'=>[
      'app'=>'crossnumber','bank'=>0,'xp'=>0,'level'=>1,'skillPoints'=>1,'puzzlesSolved'=>0,'gamesPlayed'=>0,
      'currentStreak'=>0,'bestStreak'=>0,'cleanWinStreak'=>0,'roundCounter'=>0,'bestScore'=>0,'selectedTier'=>'starter',
      'skills'=>['insight'=>0,'flow'=>0,'banker'=>0,'precision'=>0,'structure'=>0],'activeRound'=>null,
    ],
  ];
  return $defaults[$app] ?? ['app'=>$app];
}

function bl_round_nonneg($value): int {
  return max(0, (int)round((float)$value));
}

function bl_clamp_skill_set(array $baseSkills, array $sourceSkills, array $skillMax, array $unlockLevels, int $level, int &$skillPoints): array {
  $skills = $baseSkills;
  foreach($skillMax as $key=>$maximum){
    $current = max(0, min($maximum, (int)round((float)($sourceSkills[$key] ?? 0))));
    $allowed = $level >= ($unlockLevels[$key] ?? 1) ? $current : 0;
    if($current > $allowed) $skillPoints += $current - $allowed;
    $skills[$key] = $allowed;
  }
  return $skills;
}

function bl_game_allowed_tier(string $selected, array $tiers, array $unlockLevels, int $level): string {
  if(in_array($selected, $tiers, true) && $level >= ($unlockLevels[$selected] ?? 1)) return $selected;
  $allowed = $tiers[0];
  foreach($tiers as $tier){
    if($level >= ($unlockLevels[$tier] ?? 1)) $allowed = $tier;
  }
  return $allowed;
}

function bl_normalise_game_profile(string $app, array $profile): array {
  $base = bl_default_game_profile($app);
  $merged = array_replace_recursive($base, $profile);
  $merged['app'] = $app;

  if($app === 'ninja'){
    foreach(['coins','xp','totalKills','bossesDefeated','totalCoinsEarned','prestigeCount','spirit','prestigeEarnedTotal'] as $key){
      $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    }
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $merged['stage'] = max(1, (int)round((float)($merged['stage'] ?? 1)));
    $merged['enemyHp'] = max(0, (float)($merged['enemyHp'] ?? 0));
    $merged['highestStage'] = max($merged['stage'], (int)round((float)($merged['highestStage'] ?? $merged['stage'])));
    $merged['lastSeenAt'] = max(0, (int)round((float)($merged['lastSeenAt'] ?? 0)));
    $merged['offlineSummary'] = trim((string)($merged['offlineSummary'] ?? ''));
    $merged['bonusCache'] = is_array($merged['bonusCache'] ?? null) ? $merged['bonusCache'] : [];
    $upgrades = is_array($merged['upgrades'] ?? null) ? $merged['upgrades'] : [];
    $merged['upgrades'] = $base['upgrades'];
    foreach(array_keys($base['upgrades']) as $key) $merged['upgrades'][$key] = bl_round_nonneg($upgrades[$key] ?? 0);
    return $merged;
  }

  if($app === 'trackcoin'){
    foreach(['xp','coins','skillPoints','currentStreak','bestStreak','totalCorrect','totalRounds','totalXpEarned','totalCoinsEarned','cleanWinStreak','perfectMiniSet','totalMiniSetsCleared'] as $key){
      $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    }
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $merged['trackCoinSpeedPercent'] = max(100, (int)round((float)($merged['trackCoinSpeedPercent'] ?? 100)));
    $merged['bestTrackCoinSpeedPercent'] = max(100, (int)round((float)($merged['bestTrackCoinSpeedPercent'] ?? $merged['trackCoinSpeedPercent'])));
    $merged['bestAccuracy'] = max(0, min(1, (float)($merged['bestAccuracy'] ?? 0)));
    $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
    $merged['skills'] = bl_clamp_skill_set(
      $base['skills'], $skills,
      ['read'=>4,'banker'=>5,'flow'=>5,'discipline'=>4,'steal'=>4],
      ['read'=>1,'banker'=>1,'flow'=>1,'discipline'=>4,'steal'=>8],
      $merged['level'], $merged['skillPoints']
    );
    $tiers = ['tier1','tier2','tier3','tier4','tier5'];
    $unlock = ['tier1'=>1,'tier2'=>3,'tier3'=>6,'tier4'=>10,'tier5'=>15];
    $merged['selectedTier'] = bl_game_allowed_tier(trim((string)($merged['selectedTier'] ?? 'tier1')), $tiers, $unlock, $merged['level']);
    $merged['highestUnlockedTier'] = bl_game_allowed_tier('invalid', $tiers, $unlock, $merged['level']);
    $merged['currentTier'] = $merged['selectedTier'];
    return $merged;
  }

  if($app === 'ruleshift'){
    foreach(['bank','xp','skillPoints','gamesPlayed','correctAnswers','wrongAnswers','currentStreak','bestStreak','cleanWinStreak'] as $key){
      $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    }
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
    $merged['skills'] = bl_clamp_skill_set(
      $base['skills'], $skills,
      ['focus'=>5,'banker'=>5,'recovery'=>4,'adapt'=>4],
      ['focus'=>1,'banker'=>1,'recovery'=>5,'adapt'=>10],
      $merged['level'], $merged['skillPoints']
    );
    $tiers = ['starter','switch','opposite','mixed','pressure'];
    $unlock = ['starter'=>1,'switch'=>4,'opposite'=>9,'mixed'=>16,'pressure'=>26];
    $merged['selectedTier'] = bl_game_allowed_tier(trim((string)($merged['selectedTier'] ?? 'starter')), $tiers, $unlock, $merged['level']);
    return $merged;
  }

  if($app === 'crossnumber'){
    foreach(['bank','xp','skillPoints','puzzlesSolved','gamesPlayed','currentStreak','bestStreak','cleanWinStreak','roundCounter','bestScore'] as $key){
      $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    }
    $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
    $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];
    $merged['skills'] = bl_clamp_skill_set(
      $base['skills'], $skills,
      ['insight'=>4,'flow'=>5,'banker'=>5,'precision'=>4,'structure'=>4],
      ['insight'=>6,'flow'=>1,'banker'=>1,'precision'=>1,'structure'=>12],
      $merged['level'], $merged['skillPoints']
    );
    $tiers = ['starter','field','forge','circuit','citadel','masterwork'];
    $unlock = ['starter'=>1,'field'=>4,'forge'=>9,'circuit'=>16,'citadel'=>26,'masterwork'=>40];
    $merged['selectedTier'] = bl_game_allowed_tier(trim((string)($merged['selectedTier'] ?? 'starter')), $tiers, $unlock, $merged['level']);
    $merged['activeRound'] = is_array($merged['activeRound'] ?? null) ? $merged['activeRound'] : null;
    return $merged;
  }

  foreach(['bank','xp','skillPoints','gamesPlayed','cleanWinStreak'] as $key) $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
  $merged['level'] = max(1, (int)round((float)($merged['level'] ?? 1)));
  $selected = trim((string)($merged['selectedTier'] ?? ''));
  $skills = is_array($merged['skills'] ?? null) ? $merged['skills'] : [];

  if($app === 'pairs'){
    foreach(['boardsCleared','currentStreak','bestStreak'] as $key) $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills,
      ['insight'=>4,'flow'=>5,'banker'=>5,'recall'=>4,'tempo'=>4],
      ['insight'=>6,'flow'=>1,'banker'=>1,'recall'=>1,'tempo'=>12],
      $merged['level'], $merged['skillPoints']);
    $tiers = ['starter','field','forge','bastion','citadel','vault'];
  }elseif($app === 'make24'){
    $merged['puzzlesSolved'] = bl_round_nonneg($merged['puzzlesSolved'] ?? 0);
    $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills,
      ['clarity'=>4,'flow'=>5,'banker'=>5,'reserve'=>4,'precision'=>4],
      ['clarity'=>4,'flow'=>1,'banker'=>1,'reserve'=>8,'precision'=>1],
      $merged['level'], $merged['skillPoints']);
    $tiers = ['starter','field','forge','citadel','crown'];
  }else{
    foreach(['wordsSolved','currentStreak','bestStreak','cleanWinStreak'] as $key) $merged[$key] = bl_round_nonneg($merged[$key] ?? 0);
    $merged['skills'] = bl_clamp_skill_set($base['skills'], $skills,
      ['flow'=>5,'banker'=>5,'reserve'=>4,'focus'=>4],
      ['flow'=>1,'banker'=>1,'reserve'=>6,'focus'=>8],
      $merged['level'], $merged['skillPoints']);
    $tiers = ['tier3','tier4','tier5','tier6','tier7'];
  }
  $merged['selectedTier'] = in_array($selected, $tiers, true) ? $selected : $tiers[0];
  return $merged;
}
