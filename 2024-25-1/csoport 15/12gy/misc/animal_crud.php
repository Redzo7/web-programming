<?php

function get_animals($filter = "")
{
    return json_decode(file_get_contents("animals.json"), true);
}

// function get_animal_by_id($id)

function save_animal($animal)
{
    $animals = get_animals();

    array_push($animals, $animal);

    file_put_contents("animals.json", json_encode($animals));
}

?>