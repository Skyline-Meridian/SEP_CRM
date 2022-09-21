<?php
include '../config/config.php';

$from['fullName'] = $_POST['fullName'];
$from['mobileNumber'] = $_POST['mobileNumber'];
$from['email'] = $_POST['email'];
$from['password'] = $_POST['password'];
$from['role'] = $_POST['role'];
$from['status'] = $_POST['status'];

$mobileNumber = $model->Validation("users","mobileNumber",$from['mobileNumber']);
$email = $model->Validation("users","email",$from['email']);

    if ($mobileNumber) {
    echo "mobile Number Alreday Exit: $from[mobileNumber]";
    exit();
    }

    if ($email) {
    echo "Email Alreday Exit: $from[email]";
    exit();
    }

    $insert = $model->InsertData("users",$from);
    echo "New record created successfully. Last inserted ID is:$insert";
?>
