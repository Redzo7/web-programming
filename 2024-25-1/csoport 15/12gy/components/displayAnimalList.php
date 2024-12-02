<?php 
    include_once "misc/animal_crud.php";
?>

<?php function displayAnimalList() { ?>
    <?php 
        $animals = get_animals();
    ?>
    <table border="1px solid black">
        <?php foreach($animals as $animal): ?>
            <tr>
                <td> <?= $animal["name"] ?> </td>
                <td> <?= $animal["type"] ?> </td>
                <td> 
                    <ul>
                        <?php foreach( $animal["likes"] as $like ): ?>
                            <li><?= $like ?></li>
                        <?php endforeach; ?>
                    </ul>       
                </td>
                <td> <?= $animal["age"] ?> </td>
                <td>
                    <a href="actions/editAnimal.php">Edit</a>
                </td>
                <td>
                    <a href="actions/deleteAnimal.php">Delete</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
<?php } ?>