<?php 
include_once "misc/file_functions.php";

function is_logged_in() {
    return isset($_SESSION["logged_in"]) && $_SESSION["logged_in"];
}

function get_users() {
    return get_data_from_file("data/users.json");
}

function is_valid_login($username, $password) {
    $user_list = get_users();

    foreach($user_list as $user) 
    {
        if($user->username == $username)
        {
            return $user->password == $password;
        }
    }

    return false;
}

function get_user($username)
{
    $user_list = get_users();

    foreach($user_list as $user)
    {
        if($user->username == $username)
        {
            return $user;
        }
    }

    return NULL;
}

?>