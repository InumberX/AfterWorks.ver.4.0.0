<?php

// テーマのセットアップ
if ( ! function_exists( 'setup' ) ) :
 function setup() {

  // 管理バーを非表示にする
  add_filter( 'show_admin_bar', '__return_false' );
  
  // titleタグをhead内に生成する
  add_theme_support( 'title-tag' );

  function wp_document_title_separator( $separator ) {
   $separator = '|';
   return $separator;
  }
  add_filter( 'document_title_separator', 'wp_document_title_separator' );

  // HTML5でマークアップさせる
  add_theme_support('html5', array(
   'search-form',
   'comment-form',
   'comment-list',
   'gallery',
   'caption',
  ));

  // Feedのリンクを自動で生成する
  add_theme_support( 'automatic-feed-links' );

  // アイキャッチ画像を使用する設定
  add_theme_support( 'post-thumbnails' );
  add_filter('wp_calculate_image_srcset_meta', '__return_null');
  add_filter( 'post_thumbnail_html', 'custom_attribute' );
  function custom_attribute( $html ){
   // width height を削除する
   $html = preg_replace('/(width|height)="\d*"\s/', '', $html);
   return $html;
  }
 }

endif;
add_action( 'after_setup_theme', 'setup' );

// 固定ページ投稿時の処理
function createJsonPage($post_id) {
 // ドキュメントルート
 $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
 // JSON格納ディレクトリ 
 $JSON_DIR = $DOCUMENT_ROOT . 'json/page/';

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

 // トップページの場合
 if($title == 'INDEX') {

  // カスタムフィールドを取得
  $smartCustomFields = $_POST['smart-custom-fields'];

  $dataArray = array(
   'id' => $post_id,
   'title' => $title,
   'createDate' => mysql2date('Y/m/d H:i:s', $post->post_date),
   'updateDate' => mysql2date('Y/m/d H:i:s', $post->post_modified),
   'message' => $smartCustomFields['indexMessage'][0]
  );
  // JSON出力ディレクトリを設定
  $outputUrl = $JSON_DIR . 'index.json';
  $isOutput = true;
 }

/*
$arr = array(
"res" => array(
"blogData" => array(
[
"author" => "鈴木1",
"days" => array(
[
"day" => "01",
"month" => "01",
"year" => "2000"
]
),
"id" => "1",
"content" => "1の内容内容内容内容内容内容内容内容内容内容内容内容",
"category" => array(
"日記"
),
"title" => "タイトル１"
],
[
"author" => "田中",
"days" => array(
[
"day" => "02",
"month" => "01",
"year" => "2010"
]
),
"id" => "2",
"content" => "2の内容内容内容内容内容内容内容内容内容内容内容内容",
"category" => array(
"旅行"
),
"title" => "タイトル２"
]
)
)
);
*/
 
 // JSON出力を行う場合
 if($isOutput) {
  // JSON生成
  $dataJson = json_encode($dataArray);
  // JSON出力
  file_put_contents($outputUrl , $dataJson);
 }

}

add_action('publish_news', 'createJsonPage');
add_action('publish_page', 'createJsonPage');

?>