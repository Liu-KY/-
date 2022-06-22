<?php
include "./base.php";
$sql = $_GET["sql"];
$res = mysql_query($sql); 

if($res){
    print_r("添加成功")
}else{
    print_r("添加失败")
}
?>