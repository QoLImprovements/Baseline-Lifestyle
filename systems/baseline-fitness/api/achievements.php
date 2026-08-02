<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();

function bl_fitness_achievement_defs(int $totalDone, int $completedPlans, int $maxStreak): array {
  return [
    ['code'=>'first_session','title'=>'First Session','desc'=>'Complete your first workout session.','unlocks'=>$totalDone >= 1],
    ['code'=>'sessions_10','title'=>'10 Sessions','desc'=>'Complete 10 workout sessions.','unlocks'=>$totalDone >= 10],
    ['code'=>'sessions_30','title'=>'30 Sessions','desc'=>'Complete 30 workout sessions (consistency milestone).','unlocks'=>$totalDone >= 30],
    ['code'=>'sessions_60','title'=>'60 Sessions','desc'=>'Complete 60 workout sessions.','unlocks'=>$totalDone >= 60],
    ['code'=>'streak_7','title'=>'7-Session Streak','desc'=>'Complete 7 planned sessions in a row in the same plan.','unlocks'=>$maxStreak >= 7],
    ['code'=>'plan_complete','title'=>'Plan Completed','desc'=>'Finish all scheduled sessions in a plan.','unlocks'=>$completedPlans >= 1],
  ];
}

function bl_fitness_stats_from_resource(array $data): array {
  $totalDone = 0;
  $completedPlans = 0;
  $maxStreak = 0;
  $startDate = '';
  foreach(($data['plans'] ?? []) as $plan){
    if(!is_array($plan)) continue;
    $sessions = bl_fitness_public_sessions($plan);
    if($sessions === []) continue;
    $allDone = true;
    $streak = 0;
    $best = 0;
    foreach($sessions as $session){
      $date = (string)($session['scheduled_date'] ?? '');
      if($date !== '' && ($startDate === '' || strcmp($date, $startDate) < 0)) $startDate = $date;
      if(($session['status'] ?? '') === 'done'){
        $totalDone++;
        $streak++;
        $best = max($best, $streak);
      }else{
        $allDone = false;
        $streak = 0;
      }
    }
    if($allDone) $completedPlans++;
    $maxStreak = max($maxStreak, $best);
  }
  return ['totalDone'=>$totalDone,'completedPlans'=>$completedPlans,'maxStreak'=>$maxStreak,'startDate'=>$startDate];
}

try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $stats = bl_fitness_stats_from_resource($resource['data']);
    $defs = bl_fitness_achievement_defs($stats['totalDone'], $stats['completedPlans'], $stats['maxStreak']);
    $map = [];
    foreach(($resource['data']['achievements'] ?? []) as $row){
      if(!is_array($row)) continue;
      $code = (string)($row['code'] ?? '');
      if($code !== '') $map[$code] = is_string($row['unlockedAt'] ?? null) ? $row['unlockedAt'] : gmdate('c');
    }
    $changed = false;
    foreach($defs as $definition){
      $code = $definition['code'];
      if($definition['unlocks'] && !isset($map[$code])){
        $map[$code] = gmdate('c');
        $changed = true;
      }
    }
    if($changed){
      $resource['data']['achievements'] = [];
      foreach($map as $code=>$unlockedAt) $resource['data']['achievements'][] = ['code'=>$code,'unlockedAt'=>$unlockedAt];
      usort($resource['data']['achievements'], static fn(array $a,array $b): int => strcmp($a['unlockedAt'], $b['unlockedAt']));
      $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
      $resource['revision'] = (int)($written['revision'] ?? $resource['revision']);
    }
    $out = [];
    foreach($defs as $definition){
      $code = $definition['code'];
      $out[] = [
        'code'=>$code,
        'title'=>$definition['title'],
        'desc'=>$definition['desc'],
        'unlocked'=>isset($map[$code]),
        'unlocked_at'=>isset($map[$code]) ? bl_resource_timestamp($map[$code]) : null,
      ];
    }
    bl_json(['ok'=>true,'stats'=>$stats,'achievements'=>$out,'revision'=>$resource['revision']]);
  }

  $db = bl_fitness_db();
  $doneStmt = $db->prepare('SELECT COUNT(1) as c FROM plan_sessions WHERE user_id=:u AND status="done"');
  $doneStmt->execute([':u'=>$uid]);
  $totalDone = (int)(($doneStmt->fetch()['c'] ?? 0));
  $minStmt = $db->prepare('SELECT MIN(scheduled_date) as d FROM plan_sessions WHERE user_id=:u');
  $minStmt->execute([':u'=>$uid]);
  $startDate = (string)(($minStmt->fetch()['d'] ?? ''));
  $plans = $db->prepare('SELECT id FROM plans WHERE user_id=:u');
  $plans->execute([':u'=>$uid]);
  $completedPlans = 0;
  $maxStreak = 0;
  $sessStmt = $db->prepare('SELECT status FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
  foreach(($plans->fetchAll() ?: []) as $pr){
    $pid = (int)($pr['id'] ?? 0);
    if($pid <= 0) continue;
    $sessStmt->execute([':p'=>$pid]);
    $sessions = $sessStmt->fetchAll() ?: [];
    if($sessions === []) continue;
    $done = 0;
    $streak = 0;
    $best = 0;
    foreach($sessions as $session){
      if(($session['status'] ?? '') === 'done'){
        $done++;
        $streak++;
        $best = max($best, $streak);
      }else $streak = 0;
    }
    if($done === count($sessions)) $completedPlans++;
    $maxStreak = max($maxStreak, $best);
  }
  $defs = bl_fitness_achievement_defs($totalDone, $completedPlans, $maxStreak);
  $now = time();
  $ins = $db->prepare('INSERT OR IGNORE INTO achievements(user_id, code, unlocked_at) VALUES(:u,:c,:t)');
  foreach($defs as $definition){
    if($definition['unlocks']) $ins->execute([':u'=>$uid,':c'=>$definition['code'],':t'=>$now]);
  }
  $rows = $db->prepare('SELECT code, unlocked_at FROM achievements WHERE user_id=:u ORDER BY unlocked_at ASC');
  $rows->execute([':u'=>$uid]);
  $unlockedMap = [];
  foreach(($rows->fetchAll() ?: []) as $row) $unlockedMap[(string)$row['code']] = (int)$row['unlocked_at'];
  $out = [];
  foreach($defs as $definition){
    $code = $definition['code'];
    $out[] = ['code'=>$code,'title'=>$definition['title'],'desc'=>$definition['desc'],'unlocked'=>array_key_exists($code, $unlockedMap),'unlocked_at'=>$unlockedMap[$code] ?? null];
  }
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'stats'=>['totalDone'=>$totalDone,'completedPlans'=>$completedPlans,'maxStreak'=>$maxStreak,'startDate'=>$startDate],'achievements'=>$out]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'achievements_failed'], 500);
}
