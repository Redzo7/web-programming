<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First page</title>
    <style>
        .loggedIn {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <?php $names = ["Anna", "Béla", "Cecilia"]; ?>
    
    <?php function UserListElem($userObj) { ?>
        <li class="<?= $userObj["isLoggedIn"] ? "loggedIn" : "" ?>" style="background-color: <?= $userObj["favourite_color"] ?>">
            <?= $userObj["name"]; ?>
        </li>
    <?php } ?>

    <?php 
    $users = [
        [
            "name" => "Anna",
            "isLoggedIn" => true,
            "favourite_color" => "#fafafa"
        ],
        [
            "name" => "Béla",
            "isLoggedIn" => false,
            "favourite_color" => "#61972f"
        ],
        [
            "name" => "Cecília",
            "isLoggedIn" => true,
            "favourite_color" => "#ff8311"
        ],
    ]; 
    ?>
    <ul>
        <!-- HTML komment
            <?php foreach($names as $name) {
                /* PHP komment */
                
                echo "<li>" . $name . "</li>";
            }
            ?>
        -->
        <!--
        <?php foreach($users as $userObj) :  ?>
            <li class="<?= $userObj["isLoggedIn"] ? "loggedIn" : "" ?>" style="background-color: <?= $userObj["favourite_color"] ?>">
                <?php
                // ternáris operátor:
                // bool value ? value if true : value if false 
                ?>
                <?= $userObj["name"]; ?>
            </li>
        <?php endforeach ?>

        <?php if(true) { ?>

        <?php } else { ?>

        <?php } ?>


        <?php if(true) : ?>

        <?php else : ?>
            
        <?php endif ?>
        
        -->

        <?php foreach($users as $userObj) : ?>
            <?= UserListElem($userObj) ?>
        <?php endforeach ?>
    </ul>
</body>
</html>