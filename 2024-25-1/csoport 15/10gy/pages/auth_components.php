<?php 
/*

    {
        "id": 0,
        "username": "Próba Pali",
        "password": "test123",
        "isAdmin": true,
        "age": 20
    }

*/

?>
<?php function login() { ?>
    <form method="POST" action="actions/login.php">
        <label for="username">Username</label>
        <input type="text" name="username" value="<?= $_SESSION["invalues"]["username"] ?? "" ?>">
        
        <br>

        <label for="password">Password</label>
        <input type="password" name="password">

        <br>

        <input type="submit" value="Login">
    </form>
<?php } ?>


<?php function register() { ?>
    <form method="POST" action="actions/register.php">
        <label for="username">Username</label>
        <input type="text" name="username" value="">
        
        <br>

        <label for="password">Password</label>
        <input type="password" name="password">

        <br>

        <label for="age">Age</label>
        <input type="number" name="age">

        <br>

        <input type="submit" value="Register">
    </form>
<?php } ?>