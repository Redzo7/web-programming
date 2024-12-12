<?php
$input_key = $_GET['key'] ?? 'default';
$arr = [
    'name' => 'Jani',
    'age'  => 16,
    'likes' => ['ice cream', 'candy'],
    'default' => 'no key given...'
];

print(json_encode( ['result' => $arr[$input_key]] ));