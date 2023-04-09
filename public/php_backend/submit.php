<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

    if(isset($_POST))
    {
        print_r('<pre>');
        print_r($_POST);
        print_r('</pre>');
        
        http_response_code(200);
        echo json_encode(['message' => 'Form data submitted successfully.']);
    }
?>