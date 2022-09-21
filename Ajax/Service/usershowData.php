<?php
include '../config/config.php';

$sql="SELECT * FROM register WHERE id='".$_POST['id']."'"; 
					$rs_result = $conn->prepare($sql);
					$rs_result->execute();
					$row=$rs_result->fetchAll();
                    echo json_encode($row);
                
?>