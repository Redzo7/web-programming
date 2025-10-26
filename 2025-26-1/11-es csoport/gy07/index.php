<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First PHP</title>
</head>
<body>
    <?php 
        /*
        <?php echo "valami" ?> === <?= "valami" ?>
        */
    ?>
    <?php 
        $people = [
            [
                "name" => "Jóska",
                "age" => 23,
                "color" => "#0000FF"
            ],
            [
                "name" => "Géza",
                "age" => 36,
            ],
            [
                "name" => "Lukrécia",
                "age" => 17,
                "color" => "#FF0000"
            ]
            ];
        ?>

        <?php function PersonTableHeader($keys) { ?>
            <thead>
                <tr>
                    <?php foreach( $keys as $key ): ?>
                        <th><?= $key ?></th>
                    <?php endforeach; ?>
                </tr>
            </thead>
        <?php } ?>
        
        <?php function PersonRow($person) { ?>
            <tr>
                <td style="background-color: <?= $person["color"] ?? "" ?>;"> <?php echo $person["name"]; ?> </td>
                <td style="background-color: <?= $person["age"] < 18 ? "red" : "" ?>;"> <?= $person["age"] ?> </td>
                <td> <?= $person["color"] ?? NULL ?? "" ?></td>
            </tr>
        <?php } ?>

    <table border="1">
        <?= PersonTableHeader( array_keys($people[0]) ) ?>
        <?php // filterezem a $people-t, 18 év felettiek legyenek ?>
        <?php foreach($people as $curr): ?>
            <?= PersonRow($curr) ?>
        <?php endforeach; ?>
    </table>
</body>
</html>