<?php

// トップページ
$baseUrl = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"];

// トップページにリダイレクト
header('Location: ' . $baseUrl, true, 301);
exit;

?>