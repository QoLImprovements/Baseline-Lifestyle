<?php
declare(strict_types=1);
require __DIR__ . '/fitness_resource.php';

$uid = bl_require_user_id();
$d = bl_input_json();
$planId = (int)($d['planId'] ?? ($d['plan_id'] ?? 0));

try{
  $mode = bl_resource_authority();
  if($mode === 'saved-data'){
    $resource = bl_fitness_resource_read($uid);
    $expected = bl_resource_required_revision_from_input($d);
    if($expected !== $resource['revision']) throw new BaselineSavedDataConflictException('revision_conflict');
    $index = $planId > 0 ? bl_fitness_find_plan_index($resource['data'], $planId) : bl_fitness_latest_plan_index($resource['data']);
    if($index === null) bl_json(['ok'=>false,'error'=>$planId > 0 ? 'not_found' : 'no_plan'], 404);
    $planId = bl_fitness_plan_id($resource['data']['plans'][$index]);
    array_splice($resource['data']['plans'], $index, 1);
    if(is_array($resource['data']['activeWorkout'] ?? null) && (int)($resource['data']['activeWorkout']['planId'] ?? 0) === $planId){
      unset($resource['data']['activeWorkout']);
    }

    $selectedPlanId = max(0, (int)($resource['data']['selectedPlanId'] ?? 0));
    if($selectedPlanId === $planId){
      $remaining = array_values(array_filter($resource['data']['plans'] ?? [], 'is_array'));
      usort($remaining, static function(array $left, array $right): int {
        $leftName = trim((string)(bl_fitness_plan_json($left)['name'] ?? ''));
        $rightName = trim((string)(bl_fitness_plan_json($right)['name'] ?? ''));
        $byName = strnatcasecmp($leftName, $rightName);
        return $byName !== 0 ? $byName : (bl_fitness_plan_id($left) <=> bl_fitness_plan_id($right));
      });
      $nextSelected = $remaining === [] ? 0 : bl_fitness_plan_id($remaining[0]);
      if($nextSelected > 0) $resource['data']['selectedPlanId'] = $nextSelected;
      else unset($resource['data']['selectedPlanId']);
    }

    $written = bl_fitness_resource_write($uid, $resource['data'], $resource['revision']);
    bl_json([
      'ok'=>true,
      'planId'=>$planId,
      'selectedPlanId'=>max(0, (int)($resource['data']['selectedPlanId'] ?? 0)),
      'revision'=>(int)($written['revision'] ?? 0),
    ]);
  }

  $db = bl_fitness_db();
  if($planId <= 0){
    $p = $db->prepare('SELECT id FROM plans WHERE user_id=:u ORDER BY created_at DESC LIMIT 1');
    $p->execute([':u'=>$uid]);
    $row = $p->fetch();
    if(!$row) bl_json(['ok'=>false,'error'=>'no_plan'], 404);
    $planId = (int)$row['id'];
  }
  $own = $db->prepare('SELECT id FROM plans WHERE id=:p AND user_id=:u LIMIT 1');
  $own->execute([':p'=>$planId, ':u'=>$uid]);
  if(!$own->fetch()) bl_json(['ok'=>false,'error'=>'not_found'], 404);
  $db->beginTransaction();
  $db->prepare('DELETE FROM plan_sessions WHERE plan_id=:p AND user_id=:u')->execute([':p'=>$planId, ':u'=>$uid]);
  $db->prepare('DELETE FROM plans WHERE id=:p AND user_id=:u')->execute([':p'=>$planId, ':u'=>$uid]);
  $db->commit();
  if($mode === 'mirror') bl_fitness_mirror_sqlite($db, $uid);
  bl_json(['ok'=>true,'planId'=>$planId]);
}catch(BaselineSavedDataConflictException $e){
  bl_resource_conflict_response($e);
}catch(InvalidArgumentException $e){
  if($e->getMessage() === 'invalid_expected_revision') bl_json(['ok'=>false,'error'=>'invalid_expected_revision'], 400);
  bl_json(['ok'=>false,'error'=>'delete_failed'], 500);
}catch(Throwable $e){
  if(isset($db) && $db instanceof PDO && $db->inTransaction()) $db->rollBack();
  bl_json(['ok'=>false,'error'=>'delete_failed'], 500);
}
