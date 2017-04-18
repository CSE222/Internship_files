
function signup ()
{
    var usn,mail,pw,cpw,pattrn;
  
    usn=document.getElementById('username').value;
    var pattrn = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    if(pattrn.test(usn))
    {
        alert("Username should not have special characters");
        return false;
    }
    if(usn === "" || usn === null)
    {
     alert("Username must be filled up");
     return false;
    }
    mail=document.getElementById('email').value;
    if(mail === "" || mail === null)
    {
     alert("E-mail must be filled up");
     return false;
    }
    var code,f,i;f=0;
    for (i = 0, len = mail.length; i < len; i++) 
    {
        code = mail.charAt(i);
        if((code === '@'))
            {
                f++;
            }
 
    }
    if(f!==1)
    {
     alert("Invalid e-mail address");
 
     return false;
    }
 
    if(!((mail.indexOf(".com") >-1)|| mail.indexOf(".in")>-1))
    {
        alert("Invalid e-mail address");
        return false;  
    }
    
    pw=document.getElementById('password').value;
    if(pw === "" || pw === null)
    {
     alert("Password must be filled up");
     return false;
    }
    var pattrn = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?.@_]/);
    if(pattrn.test(pw))
    {
        alert("Password should have only letters and digits ");
        return false;
    } 
    var len,ff=0;f=0;
  
    if(pw.length<8)
    {
        alert("Password must be of at least 8 characters");
        return false;
    }
  for (i = 0, len = pw.length; i < len; i++) 
   {
        code = pw.charCodeAt(i);
            if (code > 47 && code < 58)
                {
                    f=1;
                }
            if ((code > 64 && code < 91)|| (code > 96 && code < 123)) 
                {
                    ff=1;
                }
   }
    if(!(f===1 && ff===1))
        { 
            alert("Password must contain a combination of alphabets and digits");
            return false;
        }
  cpw=document.getElementById('cpwd').value;
    if(cpw === "" || cpw === null)
    {
        alert("Confirm password");
        return false;
    }
  if (!(pw===cpw))
    { 
        alert("Passwords do not match");
        return false;
    }
   db=document.getElementById('dob').value;
   
  pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  if (db === null || db === "" || !pattern.test(db)) 
    {
        alert("Date is invalid.(Follow the format dd-mm-yyyy)");
        return false;
    }
    if(document.getElementById('agree').checked === false)
    { 
        alert("You must agree to the conditions to sign-up");
        return false;
    } 
    return true;
    

    }
    function submitForm() {

            
            var usn = document.getElementById("username").value;
            var pw = document.getElementById("cpwd").value;
            var mail = document.getElementById("email").value;
            var db = document.getElementById("dob").value;
            var country = document.getElementById("country").value;
            var gender = document.getElementById("gender").value;
            var category=document.getElementById("category").value;
           var flag = signup();
           usn.trim();pw.trim();mail.trim();db.trim();country.trim();gender.trim();category.trim();
            var fields = '&username='+usn+'&password='+pw+'&email='+mail+'&dob='+db+'&country='+country+'&gender='+gender+'&category='+category;
           fields.trim();
      
            
            if (flag === true)
            {
               
               $.ajax({
                  
                    type: "POST",
                    url: "../signup.php",
                    data: fields,
                  "cache": false,
                    success: function (data)
                    { 
                          data.trim();
                        alert("Ajax");
                       
                        
                        var obj = jQuery.parseJSON(data);
                       console.log(obj);
                        
                        
                    }

                });
            }
            else
            {
                alert("Data is not valid yet");
                return false;
            }
        };







