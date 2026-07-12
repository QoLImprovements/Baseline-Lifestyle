<?php
declare(strict_types=1);
require __DIR__ . '/../../../sitewide/api/config.php';

bl_session_start();

function bl_badminton_login_norm(string $value): string { return strtolower(trim($value)); }
function bl_badminton_login_user_tokens(): array {
  $tokens = [];
  $uid = bl_authed_uid();
  $name = bl_badminton_login_norm(bl_authed_name());
  $email = bl_badminton_login_norm(bl_authed_email());
  if($uid > 0) $tokens[] = 'uid:' . $uid;
  if($name !== '') $tokens[] = 'name:' . $name;
  if($email !== '') $tokens[] = 'email:' . $email;
  return array_values(array_unique($tokens));
}
function bl_badminton_login_moderator_tokens(): array {
  $tokens = ['name:peterbw','name:peter bates-wilkinson','name:peter bates wilkinson','email:bateswilkinson@gmail.com'];
  $uid = (int)bl_env('BL_BADMINTON_DEVELOPER_UID', '1');
  $name = bl_badminton_login_norm(bl_env('BL_BADMINTON_DEVELOPER_NAME'));
  $email = bl_badminton_login_norm(bl_env('BL_BADMINTON_DEVELOPER_EMAIL'));
  if($uid > 0) $tokens[] = 'uid:' . $uid;
  if($name !== '') $tokens[] = 'name:' . $name;
  if($email !== '') $tokens[] = 'email:' . $email;
  $extra = bl_env('BL_BADMINTON_MODERATOR_ALIASES');
  if($extra !== ''){
    foreach(explode(',', $extra) as $entry){
      $value = bl_badminton_login_norm($entry);
      if($value === '') continue;
      $tokens[] = str_contains($value, '@') ? 'email:' . $value : 'name:' . $value;
    }
  }
  return array_values(array_unique($tokens));
}
function bl_badminton_login_player_admin_tokens(array $state): array {
  $tokens = [];
  foreach(($state['players'] ?? []) as $player){
    if(!is_array($player) || empty($player['badmintonSessionsAdmin'])) continue;
    foreach(['loginUsername','loginName','linkedLogin','linkedLoginName','username','login'] as $key){
      $value = bl_badminton_login_norm((string)($player[$key] ?? ''));
      if($value !== '') $tokens[] = 'name:' . $value;
    }
    foreach(['loginEmail','linkedEmail','email'] as $key){
      $value = bl_badminton_login_norm((string)($player[$key] ?? ''));
      if($value !== '') $tokens[] = 'email:' . $value;
    }
    foreach(['userId','uid','linkedUserId','loginUserId'] as $key){
      $id = (int)($player[$key] ?? 0);
      if($id > 0) $tokens[] = 'uid:' . $id;
    }
  }
  return array_values(array_unique($tokens));
}
function bl_badminton_login_load_state(PDO $db): array {
  $db->exec('CREATE TABLE IF NOT EXISTS badminton_state_store (state_key TEXT PRIMARY KEY, state_json TEXT NOT NULL, updated_at INTEGER NOT NULL)');
  $stmt = $db->prepare('SELECT state_json FROM badminton_state_store WHERE state_key=:k LIMIT 1');
  $stmt->execute([':k'=>'global']);
  $row = $stmt->fetch();
  if(!$row) return [];
  $decoded = json_decode((string)$row['state_json'], true);
  return is_array($decoded) ? $decoded : [];
}

try{
  $userTokens = bl_badminton_login_user_tokens();
  if(!$userTokens) bl_json(['ok'=>false,'error'=>'login_required'], 401);
  $db = bl_db();
  $state = bl_badminton_login_load_state($db);
  $allowedTokens = array_merge(bl_badminton_login_moderator_tokens(), bl_badminton_login_player_admin_tokens($state));
  if(!array_intersect($userTokens, $allowedTokens)){
    bl_json(['ok'=>false,'error'=>'badminton_admin_required'], 403);
  }

  $rows = $db->query('SELECT id, name, email, auth_provider FROM users ORDER BY lower(name), lower(email)')->fetchAll() ?: [];
  $users = [];
  foreach($rows as $row){
    $users[] = [
      'id' => (int)($row['id'] ?? 0),
      'name' => (string)($row['name'] ?? ''),
      'email' => (string)($row['email'] ?? ''),
      'provider' => (string)($row['auth_provider'] ?? 'password'),
    ];
  }
  bl_json(['ok'=>true,'users'=>$users]);
}catch(Throwable $e){
  bl_json(['ok'=>false,'error'=>'badminton_logins_failed'], 500);
}
