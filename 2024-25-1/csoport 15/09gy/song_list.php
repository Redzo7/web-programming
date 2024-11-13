<?php 
    session_start();

    include_once "pages/navbar.php";
    include_once "pages/songs.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenelista</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?= NavBar(); ?>
    <?= songs_page() ?>
</body>
</html>