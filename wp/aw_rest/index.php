<?php
// ヘッダー取得
get_header();
?>
<body>

<?php

echo $_SERVER['SERVER_NAME'] . "<br>";

echo (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] . "<br>";

echo $_SERVER['DOCUMENT_ROOT'] . "<br>";

echo __FILE__ . "<br>";

?>

</body>