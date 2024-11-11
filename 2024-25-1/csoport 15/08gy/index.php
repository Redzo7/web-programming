<?php
    include_once "pages/songs.php";
    
    session_start();

    $logged_in = true;
    if(!$logged_in) {}
    /*
    $name = isset( $_GET["name"] ) ? $_GET["name"] : "";
    var_dump($name);
    $age = $_GET["age"] ?? "";
    var_dump($age);
    */

    //var_dump($_POST);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenekereső</title>
</head>
<body>
    <!-- zene lista... -->
    <?= songs_page() ?>

    <form action="actions/add_song.php" method="POST">
        Title: <input type="text" name="m_title"><br>
        Artist: <input type="text" name="m_artist"><br>
        Length (sec): <input type="number" name="m_length_sec"><br>

        <button type="submit">SEND</button>
    </form>

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