<?php  
require_once "config.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
	$sql = "UPDATE button SET button='on'";
	if(mysqli_query($link,$sql)){header("location: index.html");}
}
?>