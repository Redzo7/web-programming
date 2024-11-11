<?php 
    $animal = [
        "breed" => "dog",
        "name" => "Bodri",
        "color" => "spotted"
    ];

    

    $animal_list = [
        (object)[
            "breed" => "dog",
            "name" => "Bodri",
            "color" => "spotted"
        ],
        (object)[
            "breed" => "cat",
            "name" => "Cirmi",
            "color" => "black"
        ]
    ];

    $animalObj = $animal_list[0];

    var_dump($animal);
    var_dump($animalObj);

    // attributumok elérése:ű

    // asszoc. tömb
    var_dump($animal["name"]);
    
    // objektum
    var_dump($animalObj->breed);
?>