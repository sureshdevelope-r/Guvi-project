<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to the login page if not logged in
    header("Location: login.html");
    exit();
}

// Include the connection.php file to establish a database connection
include('connection.php');

// Get the user ID from the session
$user_id = $_SESSION['user_id'];

// Fetch user data from the database
$sql = "SELECT * FROM register WHERE id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $name = $row['name'];
    $phone = $row['phone'];
    $gender = $row['gender'];
    $age = $row['age'];
    $dob = $row['dob'];
} else {
    echo "User not found.";
    exit();
}

// Handling form submission for updating user data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $gender = $_POST["gender"];
    $age = $_POST["age"];
    $dob = $_POST["dob"];

    // Update user data in the database
    $update_sql = "UPDATE register SET name = '$name', phone = '$phone', gender = '$gender', age = '$age', dob = '$dob' WHERE id = '$user_id'";

    if ($conn->query($update_sql) === TRUE) {
        echo "Profile updated successfully";
        // Optionally, you can redirect the user to another page after successful update
    } else {
        echo "Error: " . $update_sql . "<br>" . $conn->error;
    }
}

// Closing the database connection
$conn->close();
?>
