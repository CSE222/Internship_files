
<?php 
include 'database.php';
    echo ' <link rel="stylesheet" href="signupph.css"> ';
        $name = $email = $gender = $dob = $country =$pwd= $category="";

        if ($_SERVER["REQUEST_METHOD"] == "POST") 
            {
            $name =trim($_POST ['username']);
          
           
            $email = trim($_POST['email']);
             
            $dob = trim($_POST['dob']);
             
            $gender = trim($_POST['gender']);
            
            $country =trim($_POST['country']);
            
            $category =trim($_POST['category']);
             
            $pwd =trim($_POST['password']);
             
            } 
           
      
            echo '<div class="headerph">';
            echo 'Your account at xyz has been successfully created!'; 
            echo '</div>';
            echo '<div class="details"> ';
            echo ' <div class="details1">';
            echo "Name: $name"; 
            echo '</div>';
            echo '<div class="details2">';
            echo "E-mail: $email"; 
            echo '</div>';
            echo '<div class="details3">';
            echo "Date of birth: $dob"; 
            echo '</div>';
            echo '<div class="detail4"> ';
            echo "Gender: $gender";
            echo '</div>';
            echo '<div class="details5">';
            echo "Country: $country";
            echo '</div>';
           
            $query="INSERT into login1(username,email,pwd,country,gender,dob,category ) values ('$name','$email','$pwd','$country','$gender','$dob','$category' )" ;
            $result = mysqli_query($connect,$query);
                if (!$result)
                {
                echo("Error description: " . mysqli_error($connect));
                die("Nothing was inserted, something went wrong.");
                }
                
          
           
        echo '</div>';
    echo '</div>';
?>



