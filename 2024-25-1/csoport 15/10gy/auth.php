<?php 
    if(session_status() !== PHP_SESSION_ACTIVE) session_start();

    include_once "pages/navbar.php";
    include_once "pages/auth_components.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?= NavBar(); ?>

    <?= isset($_GET["login"]) ? login() : register() ?> 
</body>
</html>