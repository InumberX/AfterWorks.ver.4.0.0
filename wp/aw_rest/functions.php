<?php

// 固定ページ投稿時の処理
function createJsonPage($post_id) {
 // ドキュメントルート
 $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
 // JSON格納ディレクトリ 
 $JSON_DIR = $DOCUMENT_ROOT . 'json/page/';

 // JSONを出力するページのタイトル
 $PAGE_TITLE_ARRAY = array(
  'INDEX',
  'ABOUT',
  'WORKS'
 );
 $PAGE_TITLE_ARRAY_LENGTH = count($PAGE_TITLE_ARRAY);

 // JSON出力ディレクトリ
 $outputDir = '';
 // JSON出力判定
 $isOutput = false;

 // 配列データ
 $dataArray = '';
 // JSONデータ
 $dataJson = '';

 // データを取得
 $post = get_post($post_id);
 // タイトル
 $title = $post->post_title;

 for($i = 0; $i < $PAGE_TITLE_ARRAY_LENGTH; $i++) {
  // JSON出力を行うページの場合
  if($PAGE_TITLE_ARRAY[$i] == $title) {
   // カスタムフィールドを取得
   $smartCustomFields = getCustomFields($_POST['smart-custom-fields']);

   $dataArray = array(
    'id' => $post_id,
    'title' => $title,
    'createDate' => mysql2date('Y/m/d H:i:s', $post->post_date),
    'updateDate' => mysql2date('Y/m/d H:i:s', $post->post_modified),
    'contents' => $smartCustomFields
   );

   // JSON出力ディレクトリを設定
   $outputUrl = $JSON_DIR . mb_strtolower($title) . '.json';
   $isOutput = true;

   break;
  }
 }
 
 // JSON出力を行う場合
 if($isOutput) {
  // JSON生成
  $dataJson = json_encode($dataArray);
  // JSON出力
  file_put_contents($outputUrl , $dataJson);
 }

}

// カスタムフィールドを加工する処理
function getCustomFields($customFields) {

 foreach($customFields as $key => $value){
  // 末尾が「Img」の場合
  if(mb_substr($key, -3) == 'Img') {
   $length = count($customFields[$key]);
   // 画像IDをパスに変換
   for($i = 0; $i < $length; $i++) {
    $imageId = $customFields[$key][$i];
    $imageSrc = wp_get_attachment_image_src($imageId, 'full');
    if($imageSrc) {
      $customFields[$key][$i] = $imageSrc[0];
    }
   }
  }
 }

 return $customFields;

}

// 固定ページ更新時
add_action('publish_page', 'createJsonPage');

?>