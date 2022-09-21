<?php
include '../config/config.php';

// $from['email'] = $_POST['email'];
$from['token'] = $_POST['token'];

$email = $model->Validation("forget_password","token",$from['token']);

    if ($email) {
    echo $email;
    exit();
    }
    echo $email;

?>
