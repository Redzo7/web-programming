<?php 

function save_record($path, $insert_obj)
{
    // 1. Get values saved in file
    $arr = json_decode(file_get_contents($path));

    // 2. data conversion and preparation for saving 
    // parameter: $insert_obj
    $insert_obj->id = count($arr);

    // 3. push into container
    array_push($arr, $insert_obj);

    // 4. save into file
    file_put_contents($path, json_encode($arr));
}

function get_data_from_file($path)
{
    $data = json_decode(file_get_contents($path));
    return $data;
}

?>