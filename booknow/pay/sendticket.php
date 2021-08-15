<?php

include('../../dbconnect.php');

$mobno = $_POST['mobno'];
$from = $_POST['from'];
$to = $_POST['to'];

$count=1;

$sql = "select * from tickets";
if($result = mysqli_query($link, $sql)){
	    if(mysqli_num_rows($result) > 0){
	    	while($row = mysqli_fetch_array($result)) $count++;
	    }
	}


$insertquery = "insert into tickets values($count, '$mobno', '$from' , '$to', NOW(), 40)";

if(mysqli_query($link, $insertquery)){
    echo "Ticket sent to your provided mobile no. successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

mysqli_close($link);

?>