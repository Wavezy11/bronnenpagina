<?php
session_start();


require '../../vendor/autoload.php'; // Adjust the number of '../' as needed
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


// Check if user is logged in and is an admin
if (!isset($_SESSION['loggedin']) || $_SESSION['admin'] != 1) {
    header("Location: ../index.php"); // Redirect to index page if not admin
    exit();
}

// Database connection parameters
$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$dbname = $_ENV['DB_NAME'];

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user ID from URL
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    die("Invalid user ID.");
}

$userId = (int)$_GET['id'];

// Delete user
$sql = "DELETE FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);

if ($stmt->execute()) {
    header("Location: dashboard.php");
    exit();
} else {
    echo "Error deleting user: " . $conn->error;
}

// Close the connection
$conn->close();
?>
