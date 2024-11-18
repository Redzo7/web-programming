<?php
    if(session_status() !== PHP_SESSION_ACTIVE) session_start();
    include_once "misc/song_functions.php";
    include_once "misc/error_functions.php";
?>

<?php function songs_page() { ?>
    <?php $song_list = get_songs() ?>
    <h2>Zene lista</h2>
    <ul>
        <?php foreach($song_list as $song): ?>
            <li> <?= $song->title ?> </li>
        <?php endforeach ?>
    </ul>
<?php } ?>

<?php function create_song_component() { ?>
    <form action="actions/add_song.php" method="POST">
        Title: <input type="text" name="m_title" value="<?= $_SESSION["invalues"]["m_title"] ?? "" ?>">
        <?= display_errors($_SESSION["errors"]["m_title"]); ?>
        <br>

        Artist: <input type="text" name="m_artist"  value="<?= $_SESSION["invalues"]["m_artist"] ?? "" ?>">
        <?= display_errors($_SESSION["errors"]["m_artist"]); ?>
        <br>

        Length (sec): <input type="number" name="m_length_sec" value="<?= $_SESSION["invalues"]["m_length_sec"] ?? "" ?>">
        <?= display_errors($_SESSION["errors"]["m_length_sec"]); ?>
        <br>

        <button type="submit">SEND</button>
    </form>
<?php } ?>