<?php
declare(strict_types=1);
// Backwards-compatible alias. The maintained Google OAuth entrypoint is google_start.php.
if(isset($_GET['return']) && !isset($_GET['return_to'])){
  $_GET['return_to'] = (string)$_GET['return'];
}
require __DIR__ . '/google_start.php';
