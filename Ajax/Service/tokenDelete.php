<?php
include '../config/config.php';

$email=$_POST['email'];
$DeleteData=$model->DeleteData("forget_password","email",$email);

echo $DeleteData;
?>