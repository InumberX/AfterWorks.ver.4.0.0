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

?>