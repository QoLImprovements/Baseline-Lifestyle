<?php
declare(strict_types=1);

require_once __DIR__ . '/resource_authority.php';

function bl_account_resource_payload(array $user): array {
  $uid = (int)($user['id'] ?? 0);
  if($uid <= 0) throw new InvalidArgumentException('invalid_user_id');
  $created = (int)($user['created_at'] ?? time());
  $updated = (int)($user['updated_at'] ?? $created);
  $lastLogin = isset($user['last_login_at']) && is_numeric($user['last_login_at'])
    ? gmdate('c', (int)$user['last_login_at'])
    : null;
  return [
    'userId'=>$uid,
    'name'=>trim((string)($user['name'] ?? '')),
    'email'=>trim((string)($user['email'] ?? '')),
    'authProvider'=>trim((string)($user['auth_provider'] ?? 'password')) ?: 'password',
    'createdAt'=>gmdate('c', $created > 0 ? $created : time()),
    'updatedAt'=>gmdate('c', $updated > 0 ? $updated : time()),
    'lastLoginAt'=>$lastLogin,
  ];
}

function bl_account_resource_sync(array $user): void {
  if(bl_resource_authority() === 'sqlite') return;
  $account = bl_account_resource_payload($user);
  $uid = (int)$account['userId'];
  $folder = bl_saved_user_folder($uid);
  bl_resource_file_mutate(
    bl_saved_user_resource_path($uid, 'account'),
    [],
    static fn(array $current): array => $account
  );
  bl_resource_file_mutate(
    bl_saved_account_index_path(),
    ['byName'=>[],'byEmail'=>[]],
    static function(array $index) use ($account, $folder): array {
      $byName = is_array($index['byName'] ?? null) ? $index['byName'] : [];
      $byEmail = is_array($index['byEmail'] ?? null) ? $index['byEmail'] : [];
      foreach($byName as $key=>$value){
        if((string)$value === $folder) unset($byName[$key]);
      }
      foreach($byEmail as $key=>$value){
        if((string)$value === $folder) unset($byEmail[$key]);
      }
      $name = strtolower(trim((string)$account['name']));
      $email = strtolower(trim((string)$account['email']));
      if($name !== '') $byName[$name] = $folder;
      if($email !== '') $byEmail[$email] = $folder;
      ksort($byName);
      ksort($byEmail);
      return ['byName'=>$byName,'byEmail'=>$byEmail];
    }
  );
}

function bl_account_resource_sync_by_id(PDO $db, int $uid): void {
  if(bl_resource_authority() === 'sqlite') return;
  $stmt = $db->prepare('SELECT * FROM users WHERE id=:id LIMIT 1');
  $stmt->execute([':id'=>$uid]);
  $user = $stmt->fetch();
  if(is_array($user)) bl_account_resource_sync($user);
}
