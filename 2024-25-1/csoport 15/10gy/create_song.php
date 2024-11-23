<?php 
    if(session_status() !== PHP_SESSION_ACTIVE) session_start();

    include_once "misc/nav_functions.php";
    include_once "misc/auth_functions.php";

    if(!is_logged_in())
    {
        redirect("/auth.php?login");
    }

    include_once "pages/navbar.php";
    include_once "pages/songs.php";
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zene feltöltése</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?= NavBar(); ?>
    
    <?= create_song_component(); ?>
</body>
</html>