<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php'; // Zorg ervoor dat je de juiste pad hebt naar autoload.php van Composer
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$dbname = $_ENV['DB_NAME'];

// $host = $_ENV['HOST'];
// $email = $_ENV['EMAIL'];
// $wachtwoord = $_ENV['WACHTWOORD'];
// $port = $_ENV['PORT'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $mail = new PHPMailer(true); 

    try {

        $mail->isSMTP();
        $mail->Host       = 'smtp.office365.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'WavezzIWNL@outlook.com'; 
        $mail->Password   = 'Teringlijer013'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Ontvanger
        $mail->setFrom($email, 'PIT');
        $mail->addAddress($email); 
        $mail->addAddress($email, 'PIT');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Bevestiging van je contactbericht';

        // HTML-inhoud van de e-mail
        $mail->Body = '
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
                .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #d1e0e0; padding: 10px; text-align: center; }
                .header h1 { margin: 0; font-size: 1.5rem; color: black; }
                .content { background-color: #f1f1f1; padding: 20px; border-radius: 5px; }
                .content p { margin: 10px 0; }
                .footer { background-color: #d1e0e0; padding: 10px; text-align: center; font-size: 0.8rem; }
                .footer a { color: #007bff; text-decoration: none; }
                .footer a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Bevestiging van je contactbericht</h1>
                </div>
                <div class="content">
                    <p>Beste ' . $name . ',</p>
                    <p>Bedankt voor je bericht. We hebben het ontvangen en zullen je zo snel mogelijk antwoorden.</p>
                    <p><strong>Je bericht was:</strong></p>
                    <p>' . nl2br($message) . '</p>
                    <p>Met vriendelijke groet,<br>Je Bedrijf</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 PIT | <a href="https://www.PIT.nl">www.PIT.nl</a></p>
                </div>
            </div>
        </body>
        </html>';

        // Verzend e-mail
        $mail->send();
        echo '<div class="notification success">Het bericht is succesvol verzonden!</div>';
    } catch (Exception $e) {
        echo '<div class="notification error">Het bericht kon niet worden verzonden. Mailer Error: ' . $mail->ErrorInfo . '</div>';
    }
} else {
     
    ?>
    <!DOCTYPE html>
    <html lang="nl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact</title>
        <link rel="stylesheet" href="../css/contact.css">
        <style>
           
            .notification {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 20px;
                border-radius: 5px;
                color: #fff;
                font-size: 1rem;
                z-index: 1000;
                width: 80%;
                max-width: 500px;
                text-align: center;
                display: none;
            }

            .notification.success {
                background-color: #28a745; /* Groene achtergrond voor succes */
                animation: slideIn 0.5s ease-out;
            }

            .notification.error {
                background-color: #dc3545; /* Rode achtergrond voor fout */
                animation: slideIn 0.5s ease-out;
            }

            @keyframes slideIn {
                from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }

            /* Stijl voor het formulier en andere pagina-elementen */
            /* (je bestaande CSS hier) */
        </style>
    </head>
    <body>
        <header>
            <div class="header-content">
                <h1>Contact</h1>
            </div>
        </header>
        <main>
            <form action="contact.php" method="post">
                <h2>Neem contact met ons op</h2>
                <label for="name">Naam</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Bericht</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit">Verstuur</button>
            </form>
        </main>
        <footer class="footer-content">
            <p>&copy; 2024 PIT</p>
        </footer>
        <script>
            // Laat de notificatie zien als er een succesvol bericht of een fout is
            document.addEventListener('DOMContentLoaded', function() {
                var notifications = document.querySelectorAll('.notification');
                if (notifications.length) {
                    notifications.forEach(function(notification) {
                        notification.style.display = 'block';
                        setTimeout(function() {
                            notification.style.opacity = '0';
                            setTimeout(function() {
                                notification.style.display = 'none';
                            }, 500);
                        }, 3000); // Laat notificatie 3 seconden zien
                    });
                }
            });
        </script>
    </body>
    </html>
    <?php
}
?>
