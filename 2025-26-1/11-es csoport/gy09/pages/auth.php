<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bejelentkezés / Regisztráció</title>
    <link rel="stylesheet" href="../style/auth.css">
    <link rel="stylesheet" href="../style/navbar.css">
</head>
<?php function LoginComponent() { ?>
    <h2>Bejelentkezés</h2>
    
    <label for="login-email">Email</label>
    <input type="email" id="login-email" name="email" placeholder="you@example.com">

    <label for="login-password">Jelszó</label>
    <input type="password" id="login-password" name="password" placeholder="********">

    <button type="submit">Belépés</button>

    <p class="switch-form">
        Nincs még fiókod? <a href="/pages/auth.php?newUser">Regisztrálj</a>
    </p>
<?php } ?>

<?php function RegisterComponent() { ?>
    <h2>Regisztráció</h2>

    <label for="reg-name">Teljes név</label>
    <input type="text" id="reg-name" name="name" placeholder="Kiss Péter">

    <label for="reg-email">Email</label>
    <input type="email" id="reg-email" name="email" placeholder="you@example.com">

    <label for="reg-password">Jelszó</label>
    <input type="password" id="reg-password" name="password" placeholder="********">

    <label for="reg-confirm">Jelszó megerősítése</label>
    <input type="password" id="reg-confirm" name="confirm" placeholder="********">

    <button type="submit">Regisztrálok</button>
    
    <p class="switch-form">
        Már van fiókod? <a href="/pages/auth.php">Jelentkezz be</a>
    </p>
<?php } ?>

<?php 
    // TODO:
    // - Validate input
    // - Register - add to file
    // - Login - check user data

    $errors = [];
    if(isset($_GET["newUser"])) // Register
    {

    }
    else // Login
    {
        $login_payload = [
            "email" => $_GET["email"] ?? "",
            "password" => $_GET["password"] ?? "",
        ];

        // Validate email
        if ($login_payload["email"] == "") {
            $errors["email"] = "Email is required.";
        } else {
            $email = filter_var($login_payload["email"], FILTER_SANITIZE_EMAIL);

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors["email"] = "Invalid email format.";
            }
        }

        // Validate password
        if ($login_payload["password"] == "")
        {
            $errors["password"] = "Password is required.";
        }
    }
?>

<body>
    <nav class="navbar">
        <div class="logo">
            <img src="../images/logo.png" alt="Logo">
            <span>Szigetes</span>
        </div>
        <ul class="nav-links">
            <li><a href="index.php">Főoldal</a></li>
            <li><a href="/pages/tickets.php">Jegyvásárlás</a></li>
            <li><a href="#">Jegyek kezelése</a></li>
            <li><a href="#">Fellépők hozzáadása</a></li>
        </ul>
    </nav>

    <div class="auth-container">
        <div class="auth-box">
            <form class="auth-form" method="POST">
                <?= isset($_GET["newUser"]) ? RegisterComponent() : LoginComponent() ?>
            </form>
        </div>
    </div>

</body>

</html>