
<?php

include('connection.php');


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name1 = $_POST["name1"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $gender = $_POST["gender"];
    $age = $_POST["age"];
    $dob = $_POST["dob"];
    $password1 = $_POST["password1"];

    
    $sql = "INSERT INTO register (email, password1) VALUES ('$email','$password1')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();

