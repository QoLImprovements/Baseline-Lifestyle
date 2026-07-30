<?php
declare(strict_types=1);

ob_start();
require __DIR__ . '/../../systems/charity-shop/charity-shop.php';
$page = (string)ob_get_clean();

$coherenceScript = '  <script defer src="/systems/charity-shop/js/charity-shop-coherence.js?v=CHARITY_SHOP_COHERENCE_20260730_2"></script>' . "\n";
$page = str_replace('</head>', $coherenceScript . '</head>', $page);

echo $page;
