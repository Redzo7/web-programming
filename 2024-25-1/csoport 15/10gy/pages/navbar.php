<?php
    include_once "misc/auth_functions.php";
?>

<?php function NavBar() { ?>
    <nav>
        <ul>
            <div id="nav_left">
                <li><a href="/song_list.php">Song list</a></li>
                <li><a href="/create_song.php">Add song</a></li>
            </div>
            <div id="nav_right">
                <?php if( is_logged_in() ): ?>
                    <li>
                        <a class="<?= $_SESSION["is_admin"] ? "admin" : "" ?>">
                            <?= $_SESSION["username"] ?? "" ?>
                        </a>
                    </li>
                    <li><a href="actions/logout.php">Logout</a></li>
                <?php else: ?>
                    <li><a href="auth.php?login">Login</a></li>
                    <li><a href="auth.php">Register</a></li>
                <?php endif ?>
            </div>

        </ul>
    </nav>
<?php } ?>