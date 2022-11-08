<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning PHP</title>
    <style>
        .container{
            background-color: rgb(206, 248, 255);
            max-width: 100%;
            height: auto;
            margin: auto;
            border: solid rgb(29, 52, 202) 4px;
            border-style: dashed; 
            border-radius: 4px ;

        }
    </style>
</head>
<body>
    <div class="container">
        <h1>This is my first php website</h1>
        <?php
        echo "Hello world and this is printed using PHP";
        echo "<br>";
        $var1=32;
        $var2=69;
        echo $var1;
        echo $var2;
        // Operators in PHP
        // Arithmatic
        echo "<br>";
        echo "The value of variable 1 + variable 2 is ";
        echo $var1+$var2;
        echo "<br>";
        // Assignment 
        $newvar=$var1;
        echo"The value of new variable is ";
        echo $newvar;
        echo "<br>";
        // Increment 
        $var1++;
        $var1--;
        // Comparison
        echo var_dump(1==2);
        // Logical Operators
        // and (&&)
        // or (||)
        // xor !
        ?>
    </div>
    <?php
    // Data Types in PHP 
    // 1. String
    // 2. Integer
    // 3. Float 
    // 4. Boolean
    // 5. Array 
    // 6. Object
    echo "<br>";
    $var1="Adnan (string)";
    var_dump($var1);
    // Constant
    define('PI',3.14);
    echo "<br> Constant ";
    echo PI;
    ?>
</body>
</html>