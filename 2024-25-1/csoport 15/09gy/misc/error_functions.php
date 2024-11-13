<?php function display_errors($error_list) { ?>
    <ul class="error">
        <?php foreach($error_list as $err): ?>
            <li> <?= $err ?> </li>
        <?php endforeach ?>
    </ul>
<?php } ?>