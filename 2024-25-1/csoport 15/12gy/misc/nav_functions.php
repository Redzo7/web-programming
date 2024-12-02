<?php 

function redirect($dir)
{
    header("Location: ". $dir);
    die;
}

?>