<?php 

include_once "../misc/song_functions.php";
include_once "../misc/nav_functions.php";
session_start();

var_dump($_POST);

$_SESSION["errors"] = [];
$post_song_data = (object)[
    "title" => $_POST["m_title"],
    "artist" => $_POST["m_artist"],
    "length_sec" => $_POST["m_length_sec"]
];

if( is_empty_string($post_song_data->title) 
    || is_empty_string($post_song_data->artist)
    || is_empty_string($post_song_data->length_sec))
{
    $_SESSION["errors"]["missing_data"] = "Cannot upload song with any empty parameters.";
}

redirect("../index.php");
/*
if(count($_SESSION["errors"]) > 0)
{
    redirect("index.php");
}
else
{
    redirect("index.php?successful");
}
*/

?>