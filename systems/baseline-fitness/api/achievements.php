<?php
declare(strict_types=1);
require __DIR__ . '/schema.php';

$uid = bl_require_user_id();

try{
  $db = bl_fitness_db();

  // Basic stats
  $doneStmt = $db->prepare('SELECT COUNT(1) as c FROM plan_sessions WHERE user_id=:u AND status="done"');
  $doneStmt->execute([':u'=>$uid]);
  $totalDone = (int)(($doneStmt->fetch()['c'] ?? 0));

  $minStmt = $db->prepare('SELECT MIN(scheduled_date) as d FROM plan_sessions WHERE user_id=:u');
  $minStmt->execute([':u'=>$uid]);
  $startDate = (string)(($minStmt->fetch()['d'] ?? ''));

  // Completed plans + max streak (consecutive done sessions within any plan)
  $plans = $db->prepare('SELECT id FROM plans WHERE user_id=:u');
  $plans->execute([':u'=>$uid]);
  $planRows = $plans->fetchAll() ?: [];

  $completedPlans = 0;
  $maxStreak = 0;

  $sessStmt = $db->prepare('SELECT session_index, status FROM plan_sessions WHERE plan_id=:p ORDER BY session_index ASC');
  foreach($planRows as $pr){
    $pid = (int)($pr['id'] ?? 0);
    if($pid <= 0) continue;
    $sessStmt->execute([':p'=>$pid]);
    $sess = $sessStmt->fetchAll() ?: [];
    if(!count($sess)) continue;

    $all = count($sess);
    $done = 0;
    $streak = 0;
    $best = 0;
    foreach($sess as $s){
      if(($s['status'] ?? '') === 'done'){
        $done++;
        $streak++;
        if($streak > $best) $best = $streak;
      }else{
        $streak = 0;
      }
    }
    if($done === $all) $completedPlans++;
    if($best > $maxStreak) $maxStreak = $best;
  }

  $defs = [
    [
      'code' => 'first_session',
      'title' => 'First Session',
      'desc' => 'Complete your first workout session.',
      'unlocks' => ($totalDone >= 1),
    ],
    [
      'code' => 'sessions_10',
      'title' => '10 Sessions',
      'desc' => 'Complete 10 workout sessions.',
      'unlocks' => ($totalDone >= 10),
    ],
    [
      'code' => 'sessions_30',
      'title' => '30 Sessions',
      'desc' => 'Complete 30 workout sessions (consistency milestone).',
      'unlocks' => ($totalDone >= 30),
    ],
    [
      'code' => 'sessions_60',
      'title' => '60 Sessions',
      'desc' => 'Complete 60 workout sessions.',
      'unlocks' => ($totalDone >= 60),
    ],
    [
      'code' => 'streak_7',
      'title' => '7-Session Streak',
      'desc' => 'Complete 7 planned sessions in a row in the same plan.',
      'unlocks' => ($maxStreak >= 7),
    ],
    [
      'code' => 'plan_complete',
      'title' => 'Plan Completed',
      'desc' => 'Finish all scheduled sessions in a plan.',
      'unlocks' => ($completedPlans >= 1),
    ],
  ];

  $now = time();
  $ins = $db->prepare('INSERT OR IGNORE INTO achievements(user_id, code, unlocked_at) VALUES(:u,:c,:t)');
  foreach($defs as $a){
    if($a['unlocks']){
      $ins->execute([':u'=>$uid, ':c'=>$a['code'], ':t'=>$now]);
    }
  }

  $rows = $db->prepare('SELECT code, unlocked_at FROM achievements WHERE user_id=:u ORDER BY unlocked_at ASC');
  $rows->execute([':u'=>$uid]);
  $unlocked = $rows->fetchAll() ?: [];

  $unlockedMap = [];
  foreach($unlocked as $r){
    $unlockedMap[(string)$r['code']] = (int)$r['unlocked_at'];
  }

  // Return definitions enriched with unlocked time.
  $out = [];
  foreach($defs as $a){
    $code = $a['code'];
    $out[] = [
      'code'=>$code,
      'title'=>$a['title'],
      'desc'=>$a['desc'],
      'unlocked'=>array_key_exists($code, $unlockedMap),
      'unlocked_at'=>$unlockedMap[$code] ?? null,
    ];
  }

  bl_json([
    'ok'=>true,
    'stats'=>[
      'totalDone'=>$totalDone,
      'completedPlans'=>$completedPlans,
      'maxStreak'=>$maxStreak,
      'startDate'=>$startDate,
    ],
    'achievements'=>$out,
  ]);

}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'achievements_failed'], 500);
}
