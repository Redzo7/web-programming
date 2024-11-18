<?php
    if(session_status() !== PHP_SESSION_ACTIVE) session_start();

    include_once "pages/songs.php";
    include_once "pages/navbar.php";
    include_once "misc/error_functions.php";
    
    $_SESSION["user"]["id"] = 3;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenekereső</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?= NavBar(); ?>

    <!-- zene lista... -->
    <?= songs_page() ?>

    <?php 
    
    /*
    <?= $age ?>
    ugyanaz
    <?php echo $age ?>

    $age = int
    */

    ?>
</body>
</html>