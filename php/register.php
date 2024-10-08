<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="../css/register.css">
</head>
<body>
    <header>
        <div class="header-content">
            <h1>Register</h1>
        </div>
    </header>

    <main>
        <form id="register-form" method="POST" action="register_process.php">
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
        <p id="register">Already have an account? <a href="login.php">Login</a></p>
    </main>
</body>
</html>
