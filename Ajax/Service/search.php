<?php
include '../config/config.php';
$columnValue = $_POST['search'];
$columnName = $_POST['select'];

$startDate = $_POST['form_date'];
$endDate = $_POST['to_date'];

$pageSize = 10;
$pageNo = 0;

$offset = $pageNo * $pageSize;

$mainQuery = "SELECT * from register";
$dateSearch = ($startDate && $endDate) ? "(startDateTime BETWEEN '$startDate' AND '$endDate')" : "";
$inputSearch = $columnValue ? "($columnName LIKE '%$columnValue%')" : "";
$pagination = "LIMIT $pageSize OFFSET $offset";

$sql = "$mainQuery";
$sql .= ($dateSearch || $inputSearch) ? " WHERE " : "";
$sql .= "$dateSearch";
$sql .= ($dateSearch && $inputSearch) ? " AND " : "";
$sql .= "$inputSearch";
$sql .= " $pagination";

// echo $sql;
$rs_result = $conn->prepare($sql);

$rs_result->execute();

if ($rs_result->rowCount()) {

	$row = $rs_result->fetchAll();
	echo json_encode($row);
	// foreach ($row as $value) {
	// 	echo "<div class='card m-2 ' style='width: 18rem;'>";
	// 	echo "<img class='card-img-top' src='./images/$value[image1]' alt='Card image cap'>";
	// 	echo "<div class='card-body'>";
	// 	echo "<h5 class='card-title'>$value[categoryId]</h5>";
	// 	echo "<p class='card-text'>$value[eventDescription]</p>";
	// 	echo "<a href='showData.php?id=" . $value['id'] . "' class='btn btn-primary'>More</a>";
	// 	echo "</div>";
	// 	echo "</div>";
	// }
} else {
	echo "no";
}
