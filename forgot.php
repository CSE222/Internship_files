<?php
include 'database.php';
$username=$pwd=$email=$dob="";

        if ($_SERVER["REQUEST_METHOD"] == "POST") 
            {
            $username =trim($_POST ['username']);
            $email =trim($_POST['email']);
            $dob=trim($_POST['dob']);
            $pwd=trim($_POST['pwd']);
            } 
$query="Select username,email,country,gender,dob,category from login1 where username='$username' and email='$email' and dob='$dob' " ;
            $result=mysqli_query($connect,$query);
                if (!$result)
                {
                echo("Error description: " . mysqli_error($connect));
                die("Nothing can be displayed, something went wrong."); 
                } 
               $row=mysqli_fetch_assoc($result);

       $x=mysqli_num_rows($result); 

if($x!=0)
{
    $query1="Update login1 set pwd='$pwd' where username='$username' " ;
            $result1=mysqli_query($connect,$query1);
                if (!$result1)
                {
                echo("Error description: " . mysqli_error($connect));
                die("Password cannot be updated, something went wrong."); 
                } 
               
            
echo 'Password has been updated successfully!';

}
else
{
echo'Password could not be updated! Incorrect details.';

}
?>
    

