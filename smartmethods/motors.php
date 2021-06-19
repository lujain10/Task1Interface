<?php  
require_once "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
	$motor1=$_POST["motor1"];$motor2=$_POST["motor2"];$motor3=$_POST["motor3"];$motor4=$_POST["motor4"];$motor5=$_POST["motor5"];$motor6=$_POST["motor6"];
	$sql = "UPDATE motors SET motor1=$motor1,motor2=$motor2,motor3=$motor3,motor4=$motor4,motor5=$motor5,motor6=$motor6";

	if(mysqli_query($link,$sql)){header("location: index.html");}
}
?>