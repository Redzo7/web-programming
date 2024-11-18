<?php 
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

include_once "misc/song_functions.php";
include_once "misc/nav_functions.php";
include_once "misc/file_functions.php";

$_SESSION["errors"] = [];
$post_song_data = (object)[
    "title" => $_POST["m_title"],
    "artist" => $_POST["m_artist"],
    "length_sec" => $_POST["m_length_sec"]
];

$_SESSION["invalues"] = [
    "m_title" => $_POST["m_title"],
    "m_artist" => $_POST["m_artist"],
    "m_length_sec" => $_POST["m_length_sec"]
];

$error_count = 0;

// validate m_title
$_SESSION["errors"]["m_title"] = [];
if( is_empty_string($post_song_data->title ))
{
    array_push( $_SESSION["errors"]["m_title"], "Title cannot be empty.");
    $error_count++;
}

// validate m_artist
$_SESSION["errors"]["m_artist"] = [];
if( is_empty_string($post_song_data->artist ))
{
    array_push( $_SESSION["errors"]["m_artist"], "Artist name cannot be empty.");
    $error_count++;
}

// validate m_length_sec
$_SESSION["errors"]["m_length_sec"] = [];
if( is_empty_string($post_song_data->length_sec ))
{
    array_push( $_SESSION["errors"]["m_length_sec"], "Song length cannot be empty.");
    $error_count++;
}
if( !is_numeric( $post_song_data->length_sec ) )
{
    array_push( $_SESSION["errors"]["m_length_sec"], "Song length must be numeric.");
    $error_count++;
}

if( $error_count <= 0)
{
    /*
    // 1. kiolvasni a már meglévő adatokat
    $songs = json_decode(file_get_contents("data/songs.json"));
    
    // 2. létrehozni egy objektumot az új dalnak
    $new_song = (object)[
        "id" => count($songs),
        "title" => $post_song_data->title,
        "artist" => $post_song_data->artist,
        "length_sec" => intval($post_song_data->length_sec)
    ];

    // 3. Bepusholni a tömbbe
    array_push($songs, $new_song);

    // 4. visszaírni a fájlba a zenéket
    file_put_contents("data/songs.json", json_encode($songs));
    */

    $new_song = (object)[
        "title" => $post_song_data->title,
        "artist" => $post_song_data->artist,
        "length_sec" => intval($post_song_data->length_sec)
    ];

    save_record("data/songs.json", $new_song);

    // Reset mentett értékeket
    $_SESSION["invalues"] = [];
}

redirect("../index.php");

?>