function validate()
{
    var usn,mail,pw,cpw;
  
    usn=document.getElementById('usn').value;
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
    } pw=document.getElementById('pwd').value;
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
   
  
  if (db === null || db === "" ) 
    {
        alert("Date field is empty");
        return false;
    }
    return true;
}
function updatepwd()
{
    var usn = document.getElementById("usn").value;
            var pw = document.getElementById("cpwd").value;
            var mail = document.getElementById("email").value;
            var db = document.getElementById("dob").value;
            
           var flag = validate();
           usn.trim();pw.trim();mail.trim();db.trim();
            var fields = '&username='+usn+'&pwd='+pw+'&email='+mail+'&dob='+db;
           fields.trim();
      
            
            if (flag === true)
            {
               alert(fields);
               $.ajax({
                  
                    type: "POST",
                    url: "forgot.php",
                    data: fields,
                    
                  "cache": false,
                    success: function (data)
                    { 
                          data.trim();
                        alert("Ajax");
                       alert(data);
                        
                        var obj = jQuery.parseJSON(data);
                       console.log(obj);
                        
                        
                    }

                });
            }
            else
            {
                alert("Not entering ajax");
                return false;
            }
}

