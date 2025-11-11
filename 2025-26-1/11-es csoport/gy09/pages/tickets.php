<!DOCTYPE html>
<html lang="hu">

<?php 

// include(path)
// include_once(path)

// valami2.php tartalma:
// <?php include("valami.php");
// Hiba: újradefiniálás!!

include_once("../storage.php");

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Szigetes - Jegyvásárlás</title>
    <link rel="stylesheet" href="../style/navbar.css">
    <link rel="stylesheet" href="../style/form.css">
</head>

<body>
    <?php

    function validateDate($date, $format = 'Y-m-d')
    {
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }

    $errors = [];
    $ticket_request = [
        "name" => $_GET["name"] ?? "",
        "email" => $_GET["email"] ?? "",
        "birth_date" => $_GET["birth_date"] ?? "",
        "ticket_type" => $_GET["ticket_type"] ?? "",
        "payment_method" => $_GET["payment_method"] ?? "",
        "gdpr" => isset($_GET["gdpr"]) && $_GET["gdpr"] == "on",
        "newsletter" => isset($_GET["newsletter"]) && $_GET["newsletter"] == "on",
    ];

    // Validation
    if(count($_GET) != 0)
    {
        // Validate Name 
        /// if( !isset($_GET["name"]) || $_GET["name"] == "" ) Prev.
        if ($ticket_request["name"] == "") {
            $errors["name"] = "Name is required.";
        }

        // Validate Email
        if ($ticket_request["email"] == "") {
            $errors["email"] = "Email is required.";
        } else {
            $email = filter_var($ticket_request["email"], FILTER_SANITIZE_EMAIL);

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors["email"] = "Invalid email format.";
            }
        }

        // Date
        if($ticket_request["birth_date"] == "")
        {
            $errors["birth_date"] = "Birth date is required.";
        }
        else if(!validateDate($ticket_request["birth_date"]))
        {
            $errors["birth_date"] = "Birth date must be in Y-m-d format.";
        }
        else
        {
            $date = strtotime($ticket_request["birth_date"]);
            $eighteen = strtotime("+18 years", $date);

            if(time() <= $eighteen)
            {
                $errors["birth_date"] = "Only adults may buy tickets to this festival.";
            }
        }
    
        // Ticket type
        if ($ticket_request["ticket_type"] == "") {
            $errors["ticket_type"] = "Ticket type is required.";
        } else {
            $valid_ticket_types = ["vip_season", "normal_season", "daily1", "daily2", "daily3"];
            if (!in_array($ticket_request["ticket_type"], $valid_ticket_types)) {
                $errors["ticket_type"] = "Selected ticket type is invalid";
            }
        }

        // Payment Method
        if ($ticket_request["payment_method"] == "") {
            $errors["payment_method"] = "Payment method is required.";
        } else {
            $valid_payment_method = ["local"];
            if (!in_array($ticket_request["payment_method"], $valid_payment_method)) {
                $errors["payment_method"] = "Selected payment method is invalid";
            }
        }

        // GDPR
        if (!$ticket_request["gdpr"]) {
            $errors["gdpr"] = "Accepting terms and conditions is mandatory";
        }

        if (count($errors) == 0) {
            $storage = new Storage( new JsonIO('../data/tickets.json') );
            $storage->add( $ticket_request );
        }
    }
    ?>
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

    <!-- GET POST DELETE PUT -->
    <form action="" method="GET">
        <label for="name">Teljes név</label>
        <input type="text" name="name" id="name" value="<?= $ticket_request["name"] ?>">
        <span class="error"><?= $errors["name"] ?? "" ?></span>

        <label for="email">Ímél cím</label>
        <input type="email" name="email" id="email" value="<?= $ticket_request["email"] ?>">
        <span class="error"><?= $errors["email"] ?? "" ?></span>

        <label for="birth_date">Születési dátum</label>
        <input type="date" name="birth_date" id="birth_date" value="<?= $ticket_request["birth_date"] ?>">
        <span class="error"><?= $errors["birth_date"] ?? "" ?></span>

        <label>Jegytípus</label>
        <div class="option-group">
            <label>VIP bérlet <input type="radio" name="ticket_type" value="vip_season"
                    <?= $ticket_request["ticket_type"] == "vip_season" ? "checked" : "" ?>></label>
            <label>Normál bérlet <input type="radio" name="ticket_type" value="normal_season"
                    <?= $ticket_request["ticket_type"] == "normal_season" ? "checked" : "" ?>></label>
            <label>Hétfői napijegy <input type="radio" name="ticket_type" value="daily1"
                    <?= $ticket_request["ticket_type"] == "daily1" ? "checked" : "" ?>></label>
            <label>Keddi napijegy <input type="radio" name="ticket_type" value="daily2"
                    <?= $ticket_request["ticket_type"] == "daily2" ? "checked" : "" ?>></label>
            <label>Szerdai napijegy <input type="radio" name="ticket_type" value="daily3"
                    <?= $ticket_request["ticket_type"] == "daily3" ? "checked" : "" ?>></label>
        </div>
        <span class="error"><?= $errors["ticket_type"] ?? "" ?></span>

        <label>Fizetési mód</label>
        <select name="payment_method">
            <option value="local" <?= $ticket_request["payment_method"] == "local" ? "selected" : "" ?>>Lokális pénztárca
            </option>
        </select>
        <span class="error"><?= $errors["payment_method"] ?? "" ?>
        </span>

        <label><input type="checkbox" name="gdpr" <?= $ticket_request["gdpr"] ? "checked" : "" ?>>Elfogadom az
            adatkezelést.</label>
        <span class="error">
            <?= $errors["gdpr"] ?? "" ?>
        </span>

        <label><input type="checkbox" name="newsletter" <?= $ticket_request["newsletter"] ? "checked" : "" ?>>Feliratkozom a
            hírlevélre</label>
        <span class="error">
            <?= $errors["newsletter"] ?? "" ?>
        </span>

        <input type="submit" value="Buy ticket">
    </form>
</body>

</html>