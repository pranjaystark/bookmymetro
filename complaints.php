<?php 

include('./dbconnect.php');

$comp = $_POST['comp'];

$count=1;

$sql = "select * from complaints";
if($result = mysqli_query($link, $sql)){
	    if(mysqli_num_rows($result) > 0){
	    	while($row = mysqli_fetch_array($result)) $count++;
	    }
	}


$insertquery = "insert into tickets values($count, '$comp')";

if(mysqli_query($link, $insertquery)){
    echo "Your complaint sent to the admin successfully. Thank you for your time.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

mysqli_close($link);
?>