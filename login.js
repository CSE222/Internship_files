

function validate()
{
    var usn=document.getElementById('usn');
    var pwd=document.getElementById('pwd'); 
   if(usn === "" || usn === null)
    {
     alert("Username must be filled up");
     return false;
    }
   if(pwd === "" || pwd === null)
    {
     alert("Username must be filled up");
     return false;
    }
    return true;
}
function submitf()
{
    var usn=document.getElementById('usn').value;
    var pwd=document.getElementById('pwd').value;
    var flag=validate();
    var fields='&usn='+usn+'&pwd='+pwd;
    if(flag==true)
    {
         $.ajax({
                  
                    type: "POST",
                    url: "http://localhost/signup/login.php",
                    data: fields,
                    success: function (data)
                    {
                        alert("Ajax");
                         alert(data);
                       
                        
                        var obj = jQuery.parseJSON(data);
                       console.log(obj);
                        
                        
                    }

                });
    }
    else
    {
        alert("Enter the required fields");
    }
}

