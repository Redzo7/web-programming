<?php

include_once "misc/auth_functions.php";
include_once "misc/song_functions.php";
include_once "misc/nav_functions.php";

session_start();

$_SESSION["errors"] = [];
$error_count = 0;

// átalakítani az inputot (kiszűrjük az undefined-et)
$login_data = [];
$login_data["username"] = $_POST["username"] ?? "";
$login_data["password"] = $_POST["password"] ?? "";

$_SESSION["errors"]["username"] = [];
if( is_empty_string($login_data["username"] ))
{
    array_push( $_SESSION["errors"]["username"], "Username cannot be empty.");
    $error_count++;
}

$_SESSION["errors"]["password"] = [];
if( is_empty_string($login_data["password"] ))
{
    array_push( $_SESSION["errors"]["password"], "Password cannot be empty.");
    $error_count++;
}

if($error_count > 0)
{
    $_SESSION["invalues"]["username"] = $login_data["username"];
    redirect("auth.php");
}
else
{
    $user_data = get_user($login_data["username"]);

    $_SESSION["logged_in"] = true;
    $_SESSION["username"] = $user_data->username;
    $_SESSION["is_admin"] = $user_data->isAdmin;
    redirect("/index.php");
}

$valid = is_valid_login($login_data["username"], $login_data["password"]);

?>