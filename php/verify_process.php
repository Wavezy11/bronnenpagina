<?php
session_start();


require '../../vendor/autoload.php'; // Adjust the number of '../' as needed
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$dbname = $_ENV['DB_NAME'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Get email from the login form
    $password_input = $_POST['password']; 
  
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user_data = $result->fetch_assoc();
    // Check if user exists and verify password
    if ($user_data && password_verify($password_input, $user_data['password'])) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $user_data['username'];
        // Redirect to the index page
        header("Location: index.php");
        exit();
    } else {
        echo "Invalid email or password.";
    }
}
?>