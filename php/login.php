<?php
include "./base.php";
$username = $_POST["username"];
$password =$_POST["password"];

$sql = "select * from intendant where A_username = '$username' and A_password='$password' ";

$res = mysql_query($sql); 

$row =mysql_fetch_assoc($res);


if($row){
    // setcookie("message ",$row);
    print_r(json_encode($row));

}else{
    print("账号密码错误");
}
?>