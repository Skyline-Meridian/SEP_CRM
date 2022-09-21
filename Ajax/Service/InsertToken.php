<?php
include '../config/config.php';


$from['email'] = $_POST['email'];
$from['token'] = $_POST['token'];

$insert = $model->InsertData("forget_password",$from);
echo "New record created successfully. Last inserted ID is:$insert";

?>
