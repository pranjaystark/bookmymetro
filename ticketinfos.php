<?php


include('./dbconnect.php');

$count=1;

$sql = "select * from tickets";
if($result = mysqli_query($link, $sql)){
	    if(mysqli_num_rows($result) > 0){
	    	while($row = mysqli_fetch_array($result)) $count++;
	    }
	}

$maxsfreq = 0;
$maxsfindex = 0;
$minsfreq = $count;
$minsfindex = 0;

$sfrequencies = array ();
$sql = "SELECT source, COUNT(*) AS freq FROM tickets GROUP BY source";
$result = mysqli_query($link, $sql);
while($row = mysqli_fetch_array($result)) {
    $sfrequencies[$row[0]] = $row[1];
    if($sfrequencies[$row[0]]>$maxsfreq)
    {
    	$maxsfreq = $sfrequencies[$row[0]];
    	$maxsfindex = $row[0];
    }
    if($sfrequencies[$row[0]]<$minsfreq)
    {
    	$minsfreq = $sfrequencies[$row[0]];
    	$minsfindex = $row[0];
    }
}


$maxdfreq = 0;
$maxdfindex = 0;
$mindfreq = $count;
$mindfindex = 0;


$dfrequencies = array ();
$sql = "SELECT destination, COUNT(*) AS freq FROM tickets GROUP BY destination";
$result = mysqli_query($link, $sql);
while($row = mysqli_fetch_array($result)) {
    $dfrequencies[$row[0]] = $row[1];
    if($dfrequencies[$row[0]]>$maxdfreq)
    {
    	$maxdfreq = $dfrequencies[$row[0]];
    	$maxdfindex = $row[0];
    }
    if($dfrequencies[$row[0]]<$mindfreq)
    {
    	$mindfreq = $dfrequencies[$row[0]];
    	$mindfindex = $row[0];
    }
}


echo "Total no. of tickets booked till now: ".($count-1)."<br>";
$total = 40*($count-1);
echo "Total revenue generated till now: ".$total."<br>";
echo "Max tickets booked from: ".$maxsfindex." and number of tickets: ".$maxsfreq."<br>";
echo "Min tickets booked from: ".$minsfindex." and number of tickets: ".$minsfreq."<br>";
echo "Max tickets booked to: ".$maxdfindex." and number of tickets: ".$maxdfreq."<br>";
echo "Min tickets booked to: ".$mindfindex." and number of tickets: ".$mindfreq."<br>";
?>