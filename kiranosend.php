<?php

$webSite = 'NEXFORCE'; // Указываем название сайта
$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "1684768727:AAHDOZFWmLDFzB7qAiLbjpeo_sjfLMnqe5M";
$chatId = "-4723914935"; // chatId - группы "Правки по сайтам - KIRANO"

$arr = [
    'Новая заявка с сайта: ' => $webSite,
    'Имя: ' => $name,
    'Телефон: ' => $phone,
];


$message = '';

foreach ($arr as $key => $value) {
    $message .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chatId}&parse_mode=html&text={$message}", "r");

if ($sendToTelegram) {
    header('Location: ./success.html');
} else {
    header('Location: ./index.html');
}
