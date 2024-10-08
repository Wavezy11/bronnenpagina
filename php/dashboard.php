<?php
session_start();

// Load environment variables from .env file
require '../../vendor/autoload.php'; // Adjust the number of '../' as needed
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// Check if user is logged in and is an admin
if (!isset($_SESSION['loggedin']) || $_SESSION['admin'] != 1) {
    header("Location: ../index.php"); // Redirect to index page if not admin
    exit();
}

// Database connection parameters from .env file
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

// Fetch users from database
$sql = "SELECT id, email, username, admin FROM users";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <style>
        /* Add a background color for the logged-in user */
        .highlight {
            background-color: yellow; /* Light green color, adjust as needed */
        }
    </style>
</head>
<body>
    <header>
        <h1>Admin Dashboard</h1>
        <a id="href" href="../php/logout.php">Uitloggen</a>
    </header>

    <main>
        <section>
           
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Admin</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $is_self = $_SESSION['username'] == $row['username'];
                            $highlight_class = $is_self ? 'highlight' : '';
                            echo "<tr class='" . htmlspecialchars($highlight_class) . "'>";
                            echo "<td>" . htmlspecialchars($row['id']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                            echo "<td>" . htmlspecialchars($row['username']) . "</td>";
                            echo "<td>" . ($row['admin'] == 1 ? 'Yes' : 'No') . "</td>";
                            echo "<td>";
                            if (!$is_self) {
                                echo "<a href='edit_user.php?id=" . $row['id'] . "'>Edit</a> | ";
                            }
                            echo "<a href='delete_user.php?id=" . $row['id'] . "'>Delete</a>";
                            echo "</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='5'>No users found</td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 PIT</p>
    </footer>

    <script src="../js/dashboard.js"></script>
</body>
</html>

<?php
// Close the connection
$conn->close();
?>
