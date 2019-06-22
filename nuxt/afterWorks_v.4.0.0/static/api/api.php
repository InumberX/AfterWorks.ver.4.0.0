<?php

// ===============================================
// 初期設定
// ===============================================
mb_language('ja');
mb_internal_encoding("UTF-8");
mb_http_output("UTF-8");
require_once("convert.php");

// Content-TypeをJSONに設定
header('Content-Type: application/json');

$isError = false;
$result = '';

// 送信情報を取得
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// 申し込み情報を確認
foreach ($data['applicant'][0] as $name => $value) {
 // お名前が入力されていない場合
 if($name == 'name' && empty($value)) {
  $isError = true;
  break;
 }
 // メールアドレスが入力されていない、または使用できない形式の場合
 else if($name == 'mail' && ((empty($value) || !preg_match('/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/', $value)))) {
  $isError = true;
  break;
 }
 // お問い合わせ内容が入力されていない場合
 else if($name == 'inquiry' && empty($value)) {
  $isError = true;
  break;
 }
}

// エラーがない場合
if(!$isError) {
 $result = 'SUCCESS';

 // -----------------------------------------------
 // メール送信
 // -----------------------------------------------
 $mail_to_address     = "inumberx@gmail.com";
 $mail_to_name        = "N/NE";
 $mail_from_adress    = "inumberx@gmail.com";
 $mail_from_name      = "N/NE";
 $chk_date  = date("Y/m/d-H:i:s");
 $ret_mail1 = '';
 $ret_mail2 = '';

 // -----------------------------------------------
 // メール送信
 // -----------------------------------------------
 // 申し込み情報
 // お名前
 $appName = convStrg($data['applicant'][0]['name']);
 // メールアドレス
 $appMail = convMail($data['applicant'][0]['mail']);
 // お問い合わせ内容
 $appInquiry = convStrg($data['applicant'][0]['inquiry']);

 // 1通目
 // タイトル
 $m_subject = "[After Works.]お問い合わせ完了のお知らせ";

 // 本文
 $m_body  = "";
 $m_body .= "{$appName} 様\n";
 $m_body .= "\n";
 $m_body .= "お問い合わせをいただきありがとうございます。\n";
 $m_body .= "下記内容にて承りました。\n";
 $m_body .= "\n";
 $m_body .= "● お問い合わせ内容\n";
 $m_body .= "----------------------------------------\n";
 $m_body .= "お名前　　　　　　　 : {$appName} 様\n";
 $m_body .= "メールアドレス　　　 : {$appMail}\n";
 $m_body .= "お問い合わせ内容　　　 : {$appInquiry}\n";
 $m_body .= "----------------------------------------\n";
 $m_body .= "\n";

 $m_body .= "\n";
 $m_body .= "お問い合わせ日時 ： {$chk_date}\n";
 $m_body .= "\n";
 $m_body .= "このメールは送信専用アドレスから配信されています。\n";
 $m_body .= "ご返信いただいてもお応えできませんので、ご了承ください。\n";
 $m_body .= "\n";
 $m_body .= "ご不明な点がありましたら、下記連絡先までお問い合わせください。\n";
 $m_body .= "\n";
 $m_body .= "--------------------------------------------------\n";
 $m_body .= "Name         ： TOMOHIRO UENO\n";
 $m_body .= "Mail Address ： inumberx@gmail.com\n";
 $m_body .= "Home Page    ： https://afterworks.jp/\n";
 $m_body .= "--------------------------------------------------\n";

 $m_to = mb_encode_mimeheader(mb_convert_encoding($appName,  "ISO-2022-JP","AUTO"))."<".$appMail.">";
 $m_from = mb_encode_mimeheader($mail_from_name) . "<" . $mail_from_adress . ">";
 $m_header = "From: " . $m_from . "\n" . "Reply-to: " . $m_from;
 $m_body = mb_convert_encoding($m_body, "ISO-2022-JP", "AUTO");
 $ret_mail1 = mb_send_mail($m_to, $m_subject, $m_body, $m_header) ? 'OK' : '';

 // 2通目
 // タイトル
 $m_subject = "[After Works.]お問い合わせのお知らせ";

 // 本文
 $m_body  = "";
 $m_body .= "お問い合わせがありました。\n";
 $m_body .= "下記内容をご確認ください。\n";
 $m_body .= "\n";
 $m_body .= "● お申込み内容\n";
 $m_body .= "----------------------------------------\n";
 $m_body .= "お名前　　　　　　　 : {$appName} 様\n";
 $m_body .= "メールアドレス　　　 : {$appMail}\n";
 $m_body .= "お問い合わせ内容　　　 : {$appInquiry}\n";
 $m_body .= "----------------------------------------\n";
 $m_body .= "\n";

 $m_body .= "\n";
 $m_body .= "お問い合わせ日時 ： {$chk_date}\n";
 $m_body .= "\n";

 $m_to = mb_encode_mimeheader(mb_convert_encoding($mail_to_name,  "ISO-2022-JP","AUTO"))."<".$mail_to_address.">";
 $m_from = mb_encode_mimeheader($mail_from_name) . "<" . $mail_from_adress . ">";
 $m_header = "From: " . $m_from . "\n" . "Reply-to: " . $m_from;
 $m_body = mb_convert_encoding($m_body, "ISO-2022-JP", "AUTO");
 $ret_mail2 = mb_send_mail($m_to, $m_subject, $m_body, $m_header) ? 'OK' : '';

} else {
 // エラーがあった場合
 $result = 'ERROR';
}

echo json_encode(compact('result'));

?>