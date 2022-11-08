<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "xyz@mail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $phone = $_POST['phone']; //getting customer Phome number
 $msg = $_POST['msg']; //getting msg line from client
 $msg2 = "Confirmation: Message was submitted successfully to xyz"; // For customer confirmation
 
 //Email body I will receive
 $message = "Cleint Name: " . $name . "\n"
 ."Cleint Email: " . $fromEmail . "\n"
 . "Phone Number: " . $phone . "\n\n"
 . "Client Message: " . "\n" . $_POST['msg'];
 
 //Message for client confirmation
 $message2 = "Dear " . $name . "\n"
 . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $_POST['msg'] . "\n\n"
 . "Regards," . "\n" . "- xyz";
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 $headers2 = "From: " . $mailto; // This will receive client
 
 //PHP mailer function
 
  $result1 = mail($mailto, $msg, $message, $headers); // This email sent to My address
  $result2 = mail($fromEmail, $msg2, $message2, $headers2); //This confirmation email to client
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 
}
 
?>