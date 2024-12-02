<?php 
function get_types()
{
    return ["cat", "dog", "bear", "goldfish"];
}

function get_likes()
{
    return ["laserpointer", "fish", "bugs", "hook", "málna"];
}

function valid_type($type)
{
    $types = get_types();

    return in_array($type, $types);
}

function valid_like($like)
{
    $likes = get_likes();

    return in_array($like, $likes);
}

?>