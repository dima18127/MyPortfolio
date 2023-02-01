<?php

$name = $_POST['name'];
$phone = $_POST['text'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$token = "5827256424:AAGPsj2F6e2zoZtwHJ43r5nca46l3Z5bqEs";
$chat_id = "-816702591";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
    'Сообщение:' => $msg
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram && $sendToTelegram2) {
    header('Location: thanks.html');
} else {
    echo "Error";
}
