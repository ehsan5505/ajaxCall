<?php
require_once('conn.php');
$query = "SELECT * from ".TABLE;
$con->query($query);
$result = $con->fetch();

    header("Content-Type:application/json");
    // $json = file_get_contents("student.json");
    echo json_encode($result);
    echo $json;

?>