<?php

// ===============================================
// 基本設定
// ===============================================
mb_language('ja');
mb_internal_encoding("UTF-8");
mb_http_output("UTF-8");
require_once("../convert.php");
require_once("../env.php");

date_default_timezone_set('Asia/Tokyo');

// Content-TypeをJSONに指定する
header('Content-Type: application/json');

$is_error = false;

$result = new stdClass;

$mail_values = array();

// 入力項目を展開する
$request_body = file_get_contents('php://input');
$post_data = json_decode($request_body, true);
$frm_data = null;

// 入力情報が存在する場合
if (isset($post_data['frmData'])) {
    $frm_data = $post_data['frmData'];
}
// 存在しない場合
else {
    $is_error = true;
}

// エラーがない場合
if (!$is_error) {
    // -----------------------------------------------
    // メール送信
    // -----------------------------------------------
    $param = [
        'authKey' => $auth_key,
        'frmData' => json_encode($frm_data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
    ];

    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, $send_mail_url);
    curl_setopt($curl, CURLOPT_POST, TRUE);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $param);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl);

    $response_header_size = curl_getinfo($curl, CURLINFO_HEADER_SIZE);
    $response_header = substr($response, 0, $header_size);
    $response_body = substr($response, $header_size);
    $response_result = json_decode($response_body, true);

    curl_close($curl);
}

// エラーがない場合
if ($response_result['result']['actStatus'] === 'success' && !$is_error) {
    $result->actStatus = 'success';
}
// エラーがある場合
else {
    $result->actStatus = 'error';
}

echo json_encode(compact('result'));
