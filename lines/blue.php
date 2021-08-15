<?php

include('../dbconnect.php');

$sql = "select * from blueline";

if($result = mysqli_query($link, $sql)){
	    if(mysqli_num_rows($result) > 0){
	        echo "<table border='1'>";
	            echo "<tr>";
	                echo "<th>No.</th>";
	                echo "<th>Station Name</th>";
	            echo "</tr>";
	        while($row = mysqli_fetch_array($result)){
	            echo "<tr>";
	                echo "<td>" . $row['sid'] . ".</td>";
	                echo "<td>" . $row['name'] . "</td>";
	            echo "</tr>";
	        }
	        echo "</table>";
	        echo '<br>';
	        // Free result set
	        mysqli_free_result($result);
	    } else{
	        echo "No station found.";
	    }
	} else{
	    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
	}

mysqli_close($link);

?>