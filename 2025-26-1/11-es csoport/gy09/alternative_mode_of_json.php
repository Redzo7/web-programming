<?php
// file_get_contents(), file_put_contents()
    // json_decode(); json_encode()
    // Save data to file - Create
    // 1. read from file -> convert to associative array
    // 2. add new data to array
    // 3. convert json string -> write to file
    
    $res = @file_get_contents('../data/tickets.json'); // Step 1.1
    if($res)
    {
        $data = json_decode($res, true); // Step 1.2
        
        $data[] = $ticket_request; // Step 2.
        file_put_contents('../data/tickets.json', json_encode($data));
    } 
    
    // CRUD
    // Create - Read - Update - Delete
    // param: condition
    function read_data($file, $condition)
    {
        $res = @file_get_contents($file);
        if($res)
        {
            $data = json_decode($res, true); // Step 1.2
            $filtered = array_filter($data, $condition);
            return $filtered;
        }
        return [];
    }
