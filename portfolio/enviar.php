<?php
if(isset($_POST['enviar'])) {
    if(!empty($_POST['name']) && !empty($_POST['message']) && !empty($_POST['email'])) {
        $name = $_POST['name'];
        $message = $_POST['message'];
        $email = $_POST['email'];
        $header = "From: noreply@example.com"."\r\n";
        $header.= "Reply-To: noreply@example.com";
        $header.= "X-Mailer: PHP/". phpversion();
        $mail = @mail($email, $message);
        if($mail) {
            echo "<h4>¡Su mensaje se envió con éxito!</h4>";
        }
    }
}
?>