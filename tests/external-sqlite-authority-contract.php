<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/sitewide/migration/sqlite_external_authority.php';

function bl_external_test_assert(bool $condition, string $message): void {
  if(!$condition) throw new RuntimeException($message);
}

function bl_external_test_remove_tree(string $directory): void {
  if(!is_dir($directory)) return;
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($directory, FilesystemIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
  );
  foreach($iterator as $item){
    if($item->isDir()) @rmdir($item->getPathname());
    else @unlink($item->getPathname());
  }
  @rmdir($directory);
}

function bl_external_test_database(string $path): void {
  @mkdir(dirname($path), 0700, true);
  $db = new PDO('sqlite:' . $path, null, null, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  foreach(bl_external_sqlite_expected_tables() as $table){
    $db->exec('CREATE TABLE "' . $table . '"(id INTEGER PRIMARY KEY)');
  }
  $db->exec('INSERT INTO users(id) VALUES(1)');
  $db->exec('PRAGMA user_version = 20260720');
  $db = null;
  @chmod($path, 0600);
}

if(!extension_loaded('pdo_sqlite')) throw new RuntimeException('pdo_sqlite_required_for_external_authority_contract');

$base = sys_get_temp_dir() . '/baseline-external-sqlite-' . bin2hex(random_bytes(8));
$documentRoot = $base . '/public_html';
$privateDatabase = $base . '/Saved Data/Database/baseline.sqlite';
$publicDatabase = $documentRoot . '/sitewide/api/baseline.sqlite';
$evidencePath = $base . '/Saved Data/Evidence/verification.json';
@mkdir($documentRoot, 0700, true);

try{
  bl_external_test_database($privateDatabase);
  $private = bl_external_sqlite_inspect($privateDatabase, $documentRoot);
  bl_external_test_assert(($private['ok'] ?? false) === true, 'healthy external database did not pass');
  bl_external_test_assert(($private['gates']['outsideDocumentRoot'] ?? false) === true, 'external location gate did not pass');
  bl_external_test_assert(($private['counts']['users'] ?? 0) === 1, 'safe account count missing');
  bl_external_test_assert(($private['decision']['authorityChangedByThisCommand'] ?? true) === false, 'inspection changed authority');

  bl_external_sqlite_write_evidence($evidencePath, $private);
  bl_external_test_assert(is_file($evidencePath), 'evidence was not written');
  $raw = file_get_contents($evidencePath);
  bl_external_test_assert(is_string($raw), 'evidence could not be read');
  bl_external_test_assert(!str_contains($raw, 'Peter'), 'evidence exposed an account name');
  bl_external_test_assert(!str_contains($raw, '@'), 'evidence exposed an email-like value');
  if(DIRECTORY_SEPARATOR === '/'){
    bl_external_test_assert(((int)fileperms($evidencePath) & 0777) === 0600, 'evidence permissions are not private');
  }

  bl_external_test_database($publicDatabase);
  $public = bl_external_sqlite_inspect($publicDatabase, $documentRoot);
  bl_external_test_assert(($public['ok'] ?? true) === false, 'database inside document root was accepted');
  bl_external_test_assert(($public['gates']['outsideDocumentRoot'] ?? true) === false, 'document-root gate did not fail');

  if(DIRECTORY_SEPARATOR === '/'){
    $link = $base . '/Saved Data/Database/linked.sqlite';
    if(@symlink($privateDatabase, $link)){
      $rejected = false;
      try{
        bl_external_sqlite_inspect($link, $documentRoot);
      }catch(BaselineExternalSqliteException $error){
        $rejected = $error->getMessage() === 'database_is_symlink';
      }
      bl_external_test_assert($rejected, 'database symlink was accepted');
    }
  }

  echo "external SQLite authority verification contract passed\n";
}finally{
  bl_external_test_remove_tree($base);
}
