<?php
include '../config/config.php';

$id=$_POST['id'];

$from['fullName'] = $_POST['fullName'];
$from['mobileNumber'] = $_POST['mobileNumber'];
$from['email'] = $_POST['email'];
$from['role'] = $_POST['role'];
$from['status'] = $_POST['status'];

$UpdateData=$model->UpdateData("users",$from,"id",$id);
echo $UpdateData;

?>
