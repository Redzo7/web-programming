<?php function NavBar() { ?>
    <nav>
        <ul>
            <div id="nav_left">
                <li><a href="/song_list.php">Song list</a></li>
                <li><a href="/create_song.php">Add song</a></li>
            </div>
            <div id="nav_right">
                <?php if(!isset($_SESSION["user"]["id"])): ?>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                <?php else: ?>
                    <li><a href="">Logout</a></li>
                <?php endif ?>
            </div>

        </ul>
    </nav>
<?php } ?>