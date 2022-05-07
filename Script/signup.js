function count(){
    var Username = document.getElementById("userN").value;
  
    if(Username.length<1){
       
    document.getElementById("name").style.visibility="visible" ;
    }

    var Useremail = document.getElementById("email").value;
    if(Useremail.length<1){
     document.getElementById("X-name").style.visibility="visible" ;
    } 
    else{
        window.location.href="login.html"
    }

    // var Userpass=document.getElementById("password").value;
    // if(Userpass>6){
    //     document.getElementById("Y-name").style.visibility="visible" ;
    // }




   localStorage.setItem("userName",document.getElementById("userN").value);
   localStorage.setItem("userPassword",document.getElementById("password").value);
   localStorage.setItem("userEmail",document.getElementById("email").value);
   localStorage.setItem("userPhone",document.getElementById("phone").value);
   
   
}
