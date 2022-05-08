function count() {
      var Username = document.getElementById("userN").value;

      if (Username.length < 1) {
            document.getElementById("name").style.visibility = "visible";
      }

      var Useremail = document.getElementById("email").value;
    
            window.location.href = "login.html";
    

      // var Userpass=document.getElementById("password").value;
      // if(Userpass>6){
      //     document.getElementById("Y-name").style.visibility="visible" ;
      // }

      let pass = document.getElementById("password").value;
      let conPass = document.getElementById("confirmPass").value;
      if (pass === conPass) {
            localStorage.setItem("userPassword", JSON.stringify(pass));
            window.location.href = "login.html";
      } else {
            alert("your password does not match");
            window.location.href = "signup.html";
            // return;
      }
      localStorage.setItem("userName", document.getElementById("userN").value);
      //    localStorage.setItem("userPassword",document.getElementById("password").value);
      localStorage.setItem("userEmail", document.getElementById("email").value);
      localStorage.setItem("userPhone", document.getElementById("phone").value);
}
