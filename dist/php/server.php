<?php
//echo var_dump($_POST);
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
 https://api.telegram.org/bot1186329962:AAFgmZyYzCvM7r_rZmahwN8so-UmjzMTp0I/getUpdates
где  XXXXXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее  */

$user_name = $_POST['user_name'];
$email = $_POST['email'];
$user_phone = $_POST['phone'];
$message = $_POST['message'];

$token = "1186329962:AAFgmZyYzCvM7r_rZmahwN8so-UmjzMTp0I";
$chat_id = "-182167303";
$arr = array(
    'Имя пользователя: ' => $user_name,
    'Номер телефона: ' => $user_phone,
    'Email: ' => $email,
    'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if($sendToTelegram){
    return true;
} else {
   echo "Ошибка! Попробуйте через несколько минут!";
}

?>
