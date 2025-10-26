<?php

// Comment
// php main.php -- értelmezzük a main.php-t
// php -S localhost:8080 -- lokális szerver

echo "Hello world!" . "<br>";
echo 'Hello world!' . "<br>";

$number = 15;
$str = "string";
$name = "Rezső";

echo "Hello' \" $name" . "<br>"; // behelyettesít!!
echo 'Hello" $name' . "<br>";

$👺👻 = "test";

echo $👺👻 . "<br>";

$array = [2, 3, 4, 5, 6];
$array2 = [2, "3", 4, false, 6];

// echo $array; WARNING
// echo $array2; WARNING
var_dump($array);
var_dump($array2);

echo (3 + (int) "3" * 3) . "<br>";

// 
$associative_arr = [
    "name" => "Rapunzel",
    "hair_color" => "blonde",
    "home" => "tower"
];

// v01
foreach ($array as $current) {
    echo $current . "<br>";
}

// v02
foreach ($array as $key => $value) {
    echo "[$key] => $value";
}

// associative array
foreach ($associative_arr as $key => $value) {
    echo "[$key] => $value";
}

// echo phpinfo();
// var_dump($_SERVER);

function increase($num)
{
    $num = $num + 1;
    $number = 23;
    return $num;
}

function increase2()
{
    global $number;
    $number++;
}

function increase3(&$num)
{
    $num++;
}

echo "<br>";

echo $number . "<br>";
$number = increase($number);
echo $number . "<br>";
increase2();
echo $number . "<br>";
increase3($number);
echo $number . "<br>";

echo array_sum($array) . "<br>";

/* 
array_map( callback fn, array ) --- másolás
* array_filter( array, callback fn ) --- kiválogatás
array_reduce( array, callback fn ) --- összegzés
array_sum( array ) --- sum of numbers in array
array_walk( array, callback fn ) --- iteráció

* in_array(what, where) --- keresés;
array_search(what, where) --- keresés, indexet ad vissza;

* array_keys(array) --- kulcsok tömbként
* array_values(array) --- értékek tömbként

*/

if (true) {
    echo "ez";
} elseif (true) {
    echo "emez";
} else {
    echo "amaz";
}

$filtered = array_filter($array, function ($elem) {
    return $elem % 2 == 0;
});

var_dump($filtered);