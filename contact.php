<!DOCTYPE html>
<html lang="en">
<body>

<?php
   if(isset($_POST['send'])) {
   // Prepare the email
   $to = 'steve-breen@comcast.net';
   $subject = 'Message sent from website';
   $message = $_POST['message'];

   $header = "From: $name <$mail_from>";

   // Send it
   $sent = mail($to, $subject, $message);
   if($sent) {
   echo 'Your message has been sent successfully!';
   } else {
   echo 'Sorry, your message could not send.';
   }
   }
?>

</body>
</html>
