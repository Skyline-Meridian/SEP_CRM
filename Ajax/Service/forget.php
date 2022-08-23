<?php
include '../config/config.php';
$email=$_POST['email'];
$from['password'] = $_POST['password'];
$UpdateData=$model->UpdateData("users",$from,"email",$email);//table,password,email=milesh
echo $UpdateData;
?>