<?php
include '../config/config.php';

$sql = "SELECT COUNT(*) FROM register";

$rs_result = $conn->prepare($sql);
$rs_result->execute();

$row = $rs_result->fetch();
$total_records = $row[0];

// Number of pages required.


$limit = 3;

$total_pages = ceil($total_records / $limit);

echo $total_pages;