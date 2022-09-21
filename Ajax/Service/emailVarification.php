<?php
include '../config/config.php';

$from['email'] = $_POST['email'];

$email = $model->Validation("users","email",$from['email']);

    if ($email) {
    echo $email;
    exit();
    }
    echo $email;
    // $insert = $model->InsertData("users",$from);
    // echo "New record created successfully. Last inserted ID is:$insert";
?>
