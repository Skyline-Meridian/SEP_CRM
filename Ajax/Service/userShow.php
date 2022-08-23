<?php

include '../config/config.php';


$limit = 3; // Number of entries to show in a page.
// Look for a GET variable page if not found default is 1.
if (isset($_POST["page"])) {
    $pn = $_POST["page"];
} else {
    $pn = 1;
};

$start_from = ($pn - 1) * $limit;

$sql = "SELECT * FROM register LIMIT $start_from, $limit";

$rs_result = $conn->prepare($sql);

$rs_result->execute();
$row = $rs_result->fetchAll();

echo json_encode($row);



?>
