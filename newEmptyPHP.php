<div class="headerph">
            <?php echo 'Your account at xyz has been successfully created!'; ?>
        </div>
        <div class="details"> 
            <div class="details1">
                <?php echo "Name: $name"; ?>
            </div>
            <div class="details2">
                <?php echo "E-mail: $email"; ?>
            </div>
            <div class="details3">
                <?php echo "Date of birth: $dob"; ?>
            </div>
            <div class="detail4"> 
                <?php echo "Gender: $gender"; ?> 
            </div>
            <div class="details5">
                <?php
                echo "Country: $country";
                ?> 
            
            </div>
            
           <?php 
           $query="INSERT into login1(username,email,pwd,country,gender,dob,category ) values ('$name','$email','$pwd','$country','$gender','$dob','$category' )" ;
           $result = mysqli_query($connect,$query);
    if (!$result)
        {
        echo("Error description: " . mysqli_error($connect));
       die("Nothing was inserted, something went wrong.");
                }
          
           ?>
        </div>
    </body> 
</html>



=====================================




<?php 
include 'database.php';
   
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
           
      
           
            echo 'Your account at xyz has been successfully created!'; 
           
          
            echo "Name: $name"; 
            
           
            echo "E-mail: $email"; 
           
            
            echo "Date of birth: $dob"; 
            
            
            echo "Gender: $gender";
            
            
            echo "Country: $country";
            
           
            $query="INSERT into login1(username,email,pwd,country,gender,dob,category ) values ('$name','$email','$pwd','$country','$gender','$dob','$category' )" ;
            $result = mysqli_query($connect,$query);
                if (!$result)
                {
                echo("Error description: " . mysqli_error($connect));
                die("Nothing was inserted, something went wrong.");
                }
                
          
           
       
?>