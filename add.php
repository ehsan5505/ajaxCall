<?php
require_once("conn.php");

$first = cleanup($_POST['first']);
$last = cleanup($_POST['last']);
$sid = cleanup($_POST['sid']);
$cgpa = cleanup($_POST['cgpa']);
$batch = cleanup($_POST['batch']);

$query = "INSERT INTO ".TABLE." (sid,first,last,cgpa,batch) VALUES($sid,'$first','$last',$cgpa,'$batch')";

if($con->query($query)){
    echo "success";
}else{
    echo "error :".$con->get_error();
}

function cleanup($data){
    return trim(htmlentities(strip_tags($data)));
}