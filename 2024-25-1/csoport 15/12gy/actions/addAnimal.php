<?php 

include_once "misc/nav_functions.php";
include_once "misc/animal_type_functions.php";
include_once "misc/animal_crud.php";

session_start();

$animalData = [
    "name" =>  $_POST["name"] ?? "",
    "age" => $_POST["age"] ?? "",
    "type" => $_POST["type"] ?? "",
    "likes" => $_POST["likes"] ?? []
];

$error_count = 0;
$_SESSION["error"] = [];

// Name
$error_message = "";
if(strlen($animalData["name"]) <= 0)
{
    $error_message = $error_message . "Name cannot be empty.";
    $error_count++;

    $_SESSION["error"]["name"] = $error_message;
}

// Types
$error_message = "";
if(strlen($animalData["type"]) <= 0)
{
    $error_message = $error_message . "Animal type cannot be empty. ";
    $error_count++;

    $_SESSION["error"]["type"] = $error_message;
}
else
{
    if(!valid_type( $animalData["type"]) )
    {
        $error_message = $error_message . "Animal type must contain a valid value. ";
        $error_count++;

        $_SESSION["error"]["type"] = $error_message;
    }
}

// Likes
$error_message = "";
if(!is_array( $animalData["likes"] ))
{
    $error_message = $error_message . "Likes must be an array. ";
    $error_count++;

    $_SESSION["error"]["likes"] = $error_message;
}
else
{
    foreach($animalData["likes"] as $like)
    {
        if(!valid_like($like))
        {
            $error_message = $error_message . "Likes must contain only valid values. ";
            $error_count++;
        
            $_SESSION["error"]["likes"] = $error_message;
            break;
        }
    }
}

// Likes
$error_message = "";
if(strlen($animalData["age"]) <= 0)
{
    $error_message = $error_message . "Age cannot be empty. ";
    $error_count++;

    $_SESSION["error"]["age"] = $error_message;
}
else
{
    if(!is_numeric($animalData["age"]))
    {
        $error_message = $error_message . "Age must contain a number. ";
        $error_count++;
    
        $_SESSION["error"]["age"] = $error_message;
    }
    else if(intval($animalData["age"]) <= 0)
    {
        $error_message = $error_message . "Age must be positive. ";
        $error_count++;
    
        $_SESSION["error"]["age"] = $error_message;
    }
}


if($error_count == 0)
{
    // save new record, redirect
    save_animal($animalData);
    redirect("/index.php?success");
}
else
{
    // redirect, display errors
    $_SESSION["values"] = $animalData;
    redirect("/index.php?no_success");
}


?>