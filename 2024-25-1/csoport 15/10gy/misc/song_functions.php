<?php 

include_once "misc/file_functions.php";

function is_empty_string($str)
{
    return strlen($str) <= 0;
}

function get_songs( /* $filter = "" */ )
{
    $songs = get_data_from_file("data/songs.json");

    // TODO: Filter data

    return $songs;
}