var login_email = localStorage.getItem("userEmail");
var login_password = JSON.parse(localStorage.getItem("userPassword"));

function login() {
      var input_email = document.getElementById("email").value;
      var input_password = document.getElementById("password").value;
      if (input_email == login_email && input_password == login_password) {
            window.location.href = "index.html";
      } else {
            alert("invalid input ");
            console.log(input_email, input_password);
      }
}
