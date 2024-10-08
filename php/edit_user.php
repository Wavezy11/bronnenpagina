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

// Fetch user data
$sql = "SELECT id, email, username, admin FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    die("User not found.");
}

$user = $result->fetch_assoc();

// Update user data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $admin = isset($_POST['admin']) ? 1 : 0;

    $updateSql = "UPDATE users SET email = ?, username = ?, admin = ? WHERE id = ?";
    $updateStmt = $conn->prepare($updateSql);
    $updateStmt->bind_param("ssii", $email, $username, $admin, $userId);

    if ($updateStmt->execute()) {
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Error updating user: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
    <link rel="stylesheet" href="../css/dashboard.css">
</head>
<body>
    <header>
        <h1>Edit User</h1>
        <a id="href" href="dashboard.php">Back to Dashboard</a>
    </header>

    <main>
        <form method="post" action="">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>

            <label for="admin">Admin:</label>
            <input type="checkbox" id="admin" name="admin" <?php echo $user['admin'] ? 'checked' : ''; ?>>

            <button type="submit">Update User</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 PIT</p>
    </footer>
</body>
</html>

<?php

$conn->close();
?>
