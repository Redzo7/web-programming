<?php function NavBar() { ?>
    <nav>
        <ul>
            <li><a href="/song_list.php">Song list</a></li>
            <li><a href="/create_song.php">Add song</a></li>

            <?php if(!isset($_SESSION["user"]["id"])): ?>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            <?php else: ?>
                <li><a href="">Logout</a></li>
            <?php endif ?>
        </ul>
    </nav>
<?php } ?>