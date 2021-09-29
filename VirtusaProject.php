<?php
    $server = "localhost:3307";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server,$username,$password);

    if(!$con){
        die("connection to this database falied due to " . mysqli_connect());
    }
    echo "Database Connection Successful";  

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = "INSERT INTO `signup` (`Name`, `Email`, `Phone`, `DT`) VALUES ('$name', '$email', '$phone', current_timestamp());";
    echo $sql;
?>