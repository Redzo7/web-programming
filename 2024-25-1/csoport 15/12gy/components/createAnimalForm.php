<?php 
    include_once "misc/animal_type_functions.php";
    session_start();
?>

<?php function createAnimalForm() { ?>
    <?php 
        $types = get_types();
        $likes = get_likes();
        $animalData = [
            "name" => $_SESSION["values"]["name"] ?? "",
            "type" => $_SESSION["values"]["type"] ?? "",
            "likes" => $_SESSION["values"]["likes"] ?? [],
            "age" => $_SESSION["values"]["age"] ?? ""
        ];
        
    ?>
    <h1>Add Animal</h1>
    <form action="./actions/addAnimal.php" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="<?= $animalData["name"] ?>">
        <p class="error">
            <?= $_SESSION["error"]["name"] ?? "" ?>
        </p>
        
        <br>

        <h2>Select Type</h2>
        <?php foreach($types as $type): ?>
            <input 
                type="radio" 
                name="type" 
                id="<?= $type ?>" 
                value="<?= $type ?>"
                <?= $animalData["type"] == $type ? "checked" : "" ?>
            >
            <label for="<?= $type ?>">
                <?= $type ?>
            </label>

            <br>
        <?php endforeach; ?>
        <p class="error">
            <?= $_SESSION["error"]["type"] ?? "" ?>
        </p>

        <br>
        
        <h2>Select Likes</h2>
        <?php foreach($likes as $like): ?>
            <input 
                type="checkbox" 
                name="likes[]" 
                id="<?= $like ?>" 
                value="<?= $like ?>"
                <?= in_array($like, $animalData["likes"]) ? "checked" : "" ?>
            >
            <label for="<?= $like ?>">
                <?= $like ?>
            </label>

            <br>
        <?php endforeach; ?>
        <p class="error">
            <?= $_SESSION["error"]["likes"] ?? "" ?>
        </p>
        
        <br>

        <label for="age">Age</label>
        <input type="number" name="age" id="age" value="<?= $animalData["age"] ?>">
        <p class="error">
            <?= $_SESSION["error"]["age"] ?? "" ?>
        </p>
    
        <br>
        <br>

        <input type="submit" value="Add">
    </form>
<?php } ?>