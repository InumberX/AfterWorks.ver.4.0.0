<?php

include(get_template_directory() . '/template-parts/env.php');

// 固定ページ投稿時の処理
function createJsonPage($post_id)
{
    global $json_path_page;

    // データを取得
    $post = get_post($post_id);
    // タイトル
    $title = $post->post_title;

    // カスタムフィールドを取得
    $smart_custom_fields = getCustomFields($_POST['smart-custom-fields']);

    // 記事データ（配列）
    $data_array = array(
        'id' => $post_id,
        'title' => $title,
        'createDate' => mysql2date('Y/m/d H:i', $post->post_date),
        'updateDate' => mysql2date('Y/m/d H:i', $post->post_modified),
        'contents' => $smart_custom_fields
    );

    // JSONファイル名を設定
    $json_output_dir = $json_path_page . '/' . mb_strtolower($title) . '.json';

    // JSON生成
    $data_json = json_encode($data_array, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    // JSON出力
    file_put_contents($json_output_dir, $data_json);
}

// カスタムフィールドを加工する処理
function getCustomFields($custom_fields)
{
    foreach ($custom_fields as $key => $value) {
        // 末尾が「Img」の場合
        if (mb_substr($key, -3) == 'Img') {
            // 画像IDをパスに変換
            foreach ($custom_fields[$key] as $sub_key => $sub_value) {
                $image_id = $custom_fields[$key][$sub_key];
                $image_src = wp_get_attachment_image_src($image_id, 'full');
                if ($image_src) {
                    $custom_fields[$key][$sub_key] = $image_src[0];
                }
            }
        } else {
            // 末尾が「Img」以外の場合
            // ダブルクォーテーションをエスケープ
            foreach ($custom_fields[$key] as $sub_key => $sub_value) {
                $value = $custom_fields[$key][$sub_key];
                $value = str_replace('"', "&quot;", $value);
                $value = str_replace('\\', "", $value);
                $custom_fields[$key][$sub_key] = $value;
            }
        }
    }

    return $custom_fields;
}

// 固定ページ更新時
add_action('publish_page', 'createJsonPage');

/* ---------------------------------------
  管理画面カスタマイズ
--------------------------------------- */
function remove_dashboard_widgets()
{
    global $wp_meta_boxes;
    // 現在の状況
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
    // アクティビティ
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
    // 最近のコメント
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
    // 被リンク
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
    // プラグイン
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
    // サイトヘルス
    // unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health']);
    // クイック投稿
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    // 最近の下書き
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
    // WordPressブログ
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
    // WordPressフォーラム
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');
remove_action('welcome_panel', 'wp_welcome_panel');

function remove_menus()
{
    // ダッシュボード
    // remove_menu_page('index.php');
    // 投稿
    // remove_menu_page('edit.php');
    // メディア
    // remove_menu_page('upload.php');
    // 固定
    // remove_menu_page('edit.php?post_type=page');
    // コメント
    remove_menu_page('edit-comments.php');

    if (!current_user_can('administrator')) {
        // 外観
        remove_menu_page('themes.php');
        // プラグイン
        remove_menu_page('plugins.php');
        // ユーザー
        remove_menu_page('users.php');
        // ツール
        remove_menu_page('tools.php');
        // 設定
        remove_menu_page('options-general.php');
    }
}
add_action('admin_menu', 'remove_menus');

function my_remove_post_support()
{
    // タイトル
    // remove_post_type_support('post', 'title');
    // 本文
    // remove_post_type_support('post', 'editor');
    // 作成者
    // remove_post_type_support('post', 'author');
    // アイキャッチ画像
    // remove_post_type_support('post', 'thumbnail');
    // 抜粋
    // remove_post_type_support('post', 'excerpt');
    // トラックバック
    remove_post_type_support('post', 'trackbacks');
    // カスタムフィールド
    // remove_post_type_support('post', 'custom-fields');
    // コメント
    remove_post_type_support('post', 'comments');
    // リビジョン
    // remove_post_type_support('post', 'revisions');
    // 表示順
    // remove_post_type_support('post', 'page-attributes');
    // 投稿フォーマット
    // remove_post_type_support('post', 'post-formats');

    // タイトル
    // remove_post_type_support('page', 'title');
    // 本文
    // remove_post_type_support('page', 'editor');
    // 作成者
    // remove_post_type_support('page', 'author');
    // アイキャッチ画像
    // remove_post_type_support('page', 'thumbnail');
    // 抜粋
    // remove_post_type_support('page', 'excerpt');
    // トラックバック
    remove_post_type_support('page', 'trackbacks');
    // カスタムフィールド
    // remove_post_type_support('page', 'custom-fields');
    // コメント
    remove_post_type_support('page', 'comments');
    // リビジョン
    // remove_post_type_support('page', 'revisions');
    // 表示順
    // remove_post_type_support('page', 'page-attributes');
    // 投稿フォーマット
    // remove_post_type_support('page', 'post-formats');
}
add_action('init', 'my_remove_post_support');
