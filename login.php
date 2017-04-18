<?php
include "database.php";
 $usn=$pwd="";

        if ($_SERVER["REQUEST_METHOD"] == "POST") 
            {
            $usn =$_POST ['usn'];
            $pwd =$_POST['pwd'];
            } 
$query="Select username,email,country,gender,dob,category from login1 where username='$usn' and pwd='$pwd' " ;
            $result=mysqli_query($connect,$query);
            $x=  mysqli_num_rows($result);
            
                if (!$result)
                {
                echo("Error description: " . mysqli_error($connect));
                die("Nothing can be displayed, something went wrong."); 
                } 
                if($x==0)
                {
                    echo'Invalid Username or Password!';
                }
                else
                {
               $row=mysqli_fetch_assoc($result);
               echo " Name=".$row['username'];
               echo " E-mail=".$row['email'];
               echo " Country=".$row['country'];
               echo " Gender=".$row['gender'];
               echo " Date of birth=".$row['dob'];
               echo "Category=".$row['category'];
                }
               



?>