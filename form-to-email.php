<?php
	if(!isset($_POST["enviar"]))
	{
		echo "error; you need to submit the form!";
	}
	$name = $_POST['cnome'];
	$visitor_email = $_POST['cmail'];
	$message = $_POST['cmsg'];

	//Validate First
	if(empty($name)||empty($visitor_email)){
		echo "Name and email are mandatory!";
	}

	$email_from ="nikolas.yugi@gmail.com";
	$email_subject = "Locação de Tapumes";
	$email_body = "You have received a new message from the user $name. \n". "email adress: $visitor_email \n". "Here is the message:\n $message";
	$to = "ni_yugi@hotmail.com";
	$headers = "From:" $email_from "\r\n";

	//Send the email
	mail($to,$email_subject,$email_body,$headers);
	$thankYou="<p>Thank you! Your message has been sent.</p>";
?>