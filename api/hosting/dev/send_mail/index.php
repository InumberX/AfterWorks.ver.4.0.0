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
$post_data = $_POST;
$frm_data = null;

// 認証キーが一致した場合
if (!$is_error && isset($post_data['authKey']) && $post_data['authKey'] === $auth_key) {
}
// 一致しない場合
else {
    $is_error = true;
}


// 入力情報が存在する場合
if (!$is_error && isset($post_data['frmData'])) {
    $frm_data = json_decode($post_data['frmData'], true);
}
// 存在しない場合
else {
    $is_error = true;
}

// JSON格納ディレクトリ
$json_dir_frm_info = $json_path_frm_info;

// 入力項目JSONを取得する
if (file_exists($json_dir_frm_info) && !$is_error) {
    $frm_info_data = json_decode(file_get_contents($json_dir_frm_info), true);
} else {
    $is_error = true;
}

// エラーがない場合
if (!$is_error) {
    // 入力情報を確認
    foreach ($frm_info_data as $frm_info_name => $frm_info_value) {
        $this_frm_data = $frm_data[$frm_info_name];
        // メールの場合
        if ($frm_info_value['type'] === 'mail') {
            $value = convMail($this_frm_data['val']);
            $mail = $value;
        }
        // 氏名の場合
        elseif ($frm_info_value['fieldName'] === 'name') {
            $value = convStrg($this_frm_data['val']);
            $name = $value;
        }
        // 上記以外の場合
        else {

            // 配列の場合
            if (is_array($this_frm_data['val'])) {
                $tmp_value = '';
                for ($i = 0, $i_length = count($this_frm_data['val']); $i < $i_length; $i++) {
                    $tmp_value .= $this_frm_data['val'][$i];
                    if ($i < $i_length - 1) {
                        $tmp_value .= ', ';
                    }
                }

                $value = convStrg($tmp_value);
            }
            // 上記以外の場合
            else {
                $value = convStrg($this_frm_data['val']);
            }
        }
        // 入力されている場合
        if (!empty($value)) {
            // バリデーションチェックを行う
            foreach ($frm_info_value['rules'] as $rule_name => $rule_value) {
                // 必須チェックの場合
                if ($rule_name === 'required' && $rule_value == true) {
                    if (empty($value)) {
                        $is_error = true;
                        break;
                    }
                }
                // 最大値チェックの場合
                elseif ($rule_name === 'max' && empty($rule_value)) {
                    if (mb_strlen($value) > (int) $rule_value) {
                        $is_error = true;
                        break;
                    }
                }
                // 最小値チェックの場合
                elseif ($rule_name === 'min' && empty($rule_value)) {
                    if (mb_strlen($value) < (int) $rule_value) {
                        $is_error = true;
                        break;
                    }
                }
                // メールアドレスチェックの場合
                elseif ($rule_name === 'email' && $rule_value == true) {
                    if (!preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $value)) {
                        $is_error = true;
                        break;
                    }
                }
                // 正規表現チェックの場合
                elseif ($rule_name === 'regex' && empty($rule_value)) {
                    if (!preg_match($rule_value, $value)) {
                        $is_error = true;
                        break;
                    }
                }
            }
            // エラーがある場合
            if ($is_error) {
                break;
            }
            // エラーがない場合
            else {
                array_push($mail_values, array(
                    'field_name' => $frm_info_value['fieldName'],
                    'name' => $frm_info_value['name'],
                    'text' => $value
                ));
            }
        }
    }
}

// エラーがない場合
if (!$is_error) {
    // -----------------------------------------------
    // メール送信
    // -----------------------------------------------
    $ret_mail = '';

    $mail_to_address = $mail_info_to_address;
    $mail_to_name = $mail_info_to_name;
    $mail_from_adress = $mail_info_from_adress;
    $mail_from_name = $mail_info_from_name;

    // タイトル
    $m_subject = "【開発】お問い合わせ完了のお知らせ";

    // 送信日時
    $send_date  = date("Y/m/d-H:i:s");

    // 本文
    $m_body  = "";
    $m_body .= "{$name}様\n";
    $m_body .= "\n";
    $m_body .= "お問い合わせをいただきありがとうございます。\n";
    $m_body .= "下記内容にてお問い合わせを承りました。\n";
    $m_body .= "\n";
    $m_body .= "● お問い合わせ内容\n";
    $m_body .= "----------------------------------------\n";

    for ($i = 0, $i_length = count($mail_values); $i < $i_length; $i++) {
        // 氏名の場合
        if ($mail_values[$i]['field_name'] === 'name') {
            $m_body .= "{$mail_values[$i]['name']} ： {$mail_values[$i]['text']}様\n";
        }
        // 上記以外の場合
        else {
            $m_body .= "{$mail_values[$i]['name']} ： {$mail_values[$i]['text']}\n";
        }
    }

    $m_body .= "----------------------------------------\n";
    $m_body .= "\n";
    $m_body .= "お問い合わせ日時 ： {$send_date}\n";
    $m_body .= "\n";
    $m_body .= "このメールは送信専用アドレスから配信されています。\n";
    $m_body .= "ご返信いただいてもお応えできませんので、ご了承ください。\n";
    $m_body .= "\n";
    $m_body .= "ご不明な点がありましたら、下記連絡先までお問い合わせください。\n";
    $m_body .= "\n";
    $m_body .= "--------------------------------------------------\n";
    $m_body .= "Name      ： {$mail_info_footer_name}\n";
    $m_body .= "Mail      ： {$mail_info_footer_address}\n";
    $m_body .= "Home Page ： {$mail_info_footer_url}\n";
    $m_body .= "--------------------------------------------------\n";

    // メール送信
    $m_to = mb_encode_mimeheader(mb_convert_encoding($name,  "ISO-2022-JP", "AUTO")) . "<" . $mail . ">";
    $m_from = mb_encode_mimeheader($mail_from_name) . "<" . $mail_from_adress . ">";
    $m_header = "From: " . $m_from . "\n" . "Reply-to: " . $m_from;
    $m_body = mb_convert_encoding($m_body, "ISO-2022-JP", "AUTO");
    $ret_mail = mb_send_mail($m_to, $m_subject, $m_body, $m_header) ? 'OK' : '';

    // お知らせメール
    $ret_mail = '';
    $m_subject = "【開発】お問い合わせのお知らせ";

    // 本文
    $m_body  = "";
    $m_body .= "お問い合わせがありました。\n";
    $m_body .= "下記内容をご確認ください。\n";
    $m_body .= "\n";
    $m_body .= "● お問い合わせ内容\n";
    $m_body .= "----------------------------------------\n";

    for ($i = 0, $i_length = count($mail_values); $i < $i_length; $i++) {
        // 氏名の場合
        if ($mail_values[$i]['field_name'] === 'name') {
            $m_body .= "{$mail_values[$i]['name']} ： {$mail_values[$i]['text']}様\n";
        }
        // 上記以外の場合
        else {
            $m_body .= "{$mail_values[$i]['name']} ： {$mail_values[$i]['text']}\n";
        }
    }

    $m_body .= "----------------------------------------\n";
    $m_body .= "\n";
    $m_body .= "お問い合わせ日時 ： {$send_date}\n";

    // メール送信
    $m_to = mb_encode_mimeheader(mb_convert_encoding($mail_to_name,  "ISO-2022-JP", "AUTO")) . "<" . $mail_to_address . ">";
    $m_from = mb_encode_mimeheader($mail_from_name) . "<" . $mail_from_adress . ">";
    $m_header = "From: " . $m_from . "\n" . "Reply-to: " . $m_from;
    $m_body = mb_convert_encoding($m_body, "ISO-2022-JP", "AUTO");
    $ret_mail = mb_send_mail($m_to, $m_subject, $m_body, $m_header) ? 'OK' : '';
}

// エラーがない場合
if (!$is_error) {
    $result->actStatus = 'success';
}
// エラーがある場合
else {
    $result->actStatus = 'error';
}

echo json_encode(compact('result'));
