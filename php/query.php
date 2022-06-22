
<?php
include "./base.php";
$sql = $_GET["sql"];
$res = mysql_query($sql); 
$arr =array();

while($row =mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
print_r(json_encode($arr))
?>

