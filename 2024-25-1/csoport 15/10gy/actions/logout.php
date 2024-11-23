<?php 

include_once "misc/nav_functions.php";

session_start();

unset($_SESSION["logged_in"]);
unset($_SESSION["username"]);
unset($_SESSION["is_admin"]);

redirect("/index.php");

?>