<?php
include '../config/config.php';

$from['email'] = $_POST['email'];
$from['password'] = $_POST['password'];

$data = $model->CheckLogin("users", "email,password", $from);
$CheckActiveAccount = $model->CheckActiveAccount("users", "status", $from);

if (!$data) {
    echo "email and password InVaild!";
    exit();
}
if (!$CheckActiveAccount) {
    echo "your account not active";
    exit();
}
$Account = $model->CheckActiveAccount("users", "role", $from);
// if (!$Account) {
//     echo $Account;
// }
echo $Account;
?>
