<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditional Statemnets</title>
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
        <h1>Learning PHP</h1>
        This is a container
        <br>
        <?php
        $age = 10;
        //If else
        if($age>=18){
                echo "Yayy! Party...";
        }
        else{
            echo "Stay Home.. Stay Safe";
        }
        // Arrays in PHP
        echo"<br>";
        $languages= array("C++", "Python","PHP");
        echo $languages[2];
        echo count($languages);
        echo"<br>";
        //Loops in PHP
        $a=0;
        while ($a < count($languages)){
            echo "<br>The value of language is: ";
            echo $languages[$a];
            $a++;
        }
        for ($a=0; $a < 10; $a++) { 
            echo "<br> The value of a is: ";
            echo $a;
        }

        //FOR EACH LOOP
        foreach ($languages as $value){
            echo "<br> The value from foreach loop is: ";
            echo $value;
        }
        
        ?>
    </div>
</body>
</html>