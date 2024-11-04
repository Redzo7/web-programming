<?php

// belelépni a mappánkba
// php -S localhost:8080

$num = 15;
$isVerified = true;
$temperature_c = 15;
$temperature_C = 16.5;
$description = "my description $num";
$name = 'assdgsdg $num';

// echo --
// var_dump --
echo $description;
echo "<br>";
var_dump($description);

echo "<br>" . $name . " " . $num . "<br>";

$input_age_value = "43";
$input_age_value_invalid = "fgf1sdfsdf5asd";

var_dump((int)$input_age_value);
var_dump((int)$input_age_value_invalid);

$null = NULL;

echo NULL ?? $null ?? 15;

// összetett típusok
$magical_arr = [0 => "unicorn", 1 => "centaur", 2 => "cho'gath", "duplacsokis párna"];
$🦄🦄🍰 = "wow";

echo $🦄🦄🍰 . "<br>";
// echo $magical; // WARNING

var_dump($magical_arr);
echo count($magical_arr) . "<br>";
echo strlen($🦄🦄🍰) . "<br>";

$rapunzel = [
    "name" => "Rapunzel", 
    "age" => 18, 
    "hair_length" => "long..."
];

var_dump($rapunzel);

foreach($magical_arr as $thing) {
    echo $thing . "<br>";
}

foreach($rapunzel as $key => $value)
    echo "Rapunzel's $key is $value<br>";

/*
function increase()
{
    global $num;
    $num++;
}
*/

function increase2(&$num) // & referencia szintű paraméterátadás
{
    $num++;
}
$new_num = 10;

echo $new_num . "<br>";
increase2($new_num);
echo $new_num . "<br>";

/*
array_map( callback fn, array )     --- másolás
array_filter( array, callback fm )  --- kiválogatás
array_reduce( array, callback fn, initial value ) --- általános összegzés
array_sum( array ) -- összegzés
array_walk( array, callable fn ) -- iteráció

in_array(what, arr) -- benne van-e
array_search(what, arr) -- indexet ad vissza

array_keys( arr ) -- kulcsok tömbként
array_values( arr )
*/

$numbers = [1,2,3,4,5,6,7, -4, -5];
$even_nums = array_filter($numbers, function($elem) {
    return $elem % 2 == 0;
});

var_dump($even_nums);

?>