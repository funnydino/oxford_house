<?php

/*КЛЮЧИ*/
define('SITE_KEY', '6Lcmw-sZAAAAAJtZj1Q3abNdYCPvyYznCykMLdcT');
define('SECRET_KEY', '6Lcmw-sZAAAAAJfKYM-7ihv2PsfdyYdzcu_jn1n_');

/*ОБРАБОТКА ЗАПРОСА*/
if($_POST){
    /*СОЗДАЕМ ФУНКЦИЮ КОТОРАЯ ДЕЛАЕТ ЗАПРОС НА GOOGLE СЕРВИС*/
    function getCaptcha($SecretKey) {
        $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
        $Return = json_decode($Response);
        return $Return;
    }
    
    /*ПРОИЗВОДИМ ЗАПРОС НА GOOGLE СЕРВИС И ЗАПИСЫВАЕМ ОТВЕТ*/
    $Return = getCaptcha($_POST['g-recaptcha-response']);
    /*ВЫВОДИМ НА ЭКРАН ПОЛУЧЕННЫЙ ОТВЕТ*/
    var_dump($Return);
    
    /*ЕСЛИ ЗАПРОС УДАЧНО ОТПРАВЛЕН И ЗНАЧЕНИЕ score БОЛЬШЕ 0,5 ВЫПОЛНЯЕМ КОД*/
    if($Return->success == true && $Return->score > 0.5){
        echo "Success!";
    }
    else {
        echo "You are Robot";
    }
}

?>