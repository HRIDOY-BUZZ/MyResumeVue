<?php
    include('db_connect.php');

    $data = json_decode(file_get_contents("php://input"));

    if($data)
    {   
        $firstName  = $data->firstName;
        $lastName   = $data->lastName;
        $email      = $data->email;
        $message    = $data->message;

        if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
            // If any required field is empty, return an error
            http_response_code(400);
            echo 'All fields are required.';
            exit;
        }

        // Save the form data to the database
        $stmt = $pdo->prepare('INSERT INTO contact (first_name, last_name, email, message) VALUES (?, ?, ?, ?)');
        $stmt->execute([$firstName, $lastName, $email, $message]);

        //Success
        http_response_code(200);
        echo "Thank you for sending me the message. I have recieved you message successfully!";
    }
    else
    {
        http_response_code(200);
        echo "No Data Received";
    }
?>