<?php
if(isset($_POST['name']))
{
    $server = "localhost:3307";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server,$username,$password);

    if(!$con){
        die("connection to this database falied due to " . mysqli_connect());
    }
    //echo "Database Connection Successful";  

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = "INSERT INTO `insta_book`.`signup` (`Name`, `Email`, `Phone`, `DT`) VALUES ('$name', '$email', '$phone', current_timestamp());";
    //echo $sql;

    if($con->query($sql)== true){
        //echo "Successfully inserted";
    }
    else{
        echo "ERROR: $sql <br> $con -> error";
    }
    $con -> close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InstaBook.com</title>
    <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="https://www.guesty.com/wp-content/uploads/2019/06/cut-to-size9.jpg" class="bg">
    <div class="container">
        <h2>Welcome To InstaBook!</h2>
        <p> Book anything to/from anywhere </p>
        <p>Please enter your details and signup to proceed further</p>
        <form action="VirtusaProject.php" method="post">
            <input type="text" name="name" id="name" placeholder="Enter your name">
            <input type="text" name="email" id="email" placeholder="Enter your email">
            <input type="phone" name="phone" id="phone" placeholder="Enter your Phone Number">
            <button class="btn">Submit</button>
            <button class="reset">Reset</button>
        </form>
    </div>
</body> 
</html>
