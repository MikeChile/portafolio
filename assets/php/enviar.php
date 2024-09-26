<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Incluir el autoloader de PHPMailer
require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Configura el servidor SMTP
    $mail->SMTPAuth = true;
    $mail->AuthType = 'LOGIN';
    $mail->Username = 'mxzthemaster@gmail.com';  // Correo electrónico del remitente
    $mail->Password = 'kqzsvwgywoqonamz';  // Contraseña de aplicacion
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $nombre . ' ' . $apellido);
    $mail->addAddress('mxzthemaster@gmail.com');
    $mail->Subject = 'Mensaje de ' . $nombre . ' ' . $apellido;
    $mail->Body = $mensaje;

    if ($mail->send()) {
        echo 'Correo electrónico enviado con éxito!';
    } else {
        echo 'Error al enviar el correo electrónico: ' . $mail->ErrorInfo;
    }
}
