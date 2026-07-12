<?php
$query = $_SERVER['QUERY_STRING'] ?? '';
$target = '/sitewide/api/password_reset.php' . ($query !== '' ? '?' . $query : '');
header('Location: ' . $target, true, 307);
exit;
