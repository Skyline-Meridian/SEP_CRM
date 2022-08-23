<?php
$servername = "localhost";
$username = "root";
$password = "123456789";
$dbname="skyline";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
include_once "../Model/model.php";
$model=new Model($conn);
?>