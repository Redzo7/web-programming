<?php 

$key = $_GET['key'];

$test_data = [
    'name' => 'Jani',
    'age' => 16,
    'default' => 'invalid...'
];

http_response_code(200);
print( json_encode(["value" => $test_data[$key] ?? 'non-existing key...']) );
exit;
?>