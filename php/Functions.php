<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions and strings</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;

        }
        .container{
            max-width: 80%;
            background-color: rgb(238, 216, 188);
            margin: auto;
            padding:23px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1> Fuctions and Strings </h2>
        <?php
        //FUNCTIONS
        function print69(){
            echo "<br>SIXTY NINE";
        }
        print69();
        //STRINGS
        $str= "<br>HI! Hello Wassup<br>";
        echo $str;
        $len=strlen($str);
        echo "Length of string is ". $len . " Thanks<br>";
        echo "The number of words is ". str_word_count($str). " Thank You! <br>";
        echo "The reversed string is ". strrev($str) ." ok";
        ?>
    </div>
    
</body>
</html>