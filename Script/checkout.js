// console.log(inp(email))

let placedOrderFunc = () => {
      event.preventDefault();
      //   let err = document.createElement("span");
      let email = document.getElementById("email").value;
      //   console.log(email.length);
      {
            let err = document.querySelector("#err-email");
            if (email.length === 0) {
                  err.style.marginTop = "3px";
                  err.style.fontWeight = "bold";
                  err.innerHTML = "*This field is required.";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }

      let name = document.getElementById("name").value;
      //   console.log(name.length);
      {
            let err = document.querySelector("#err-name");
            if (name.length === 0) {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "-15px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }
      let num = document.getElementById("number").value;
      {
            let err = document.querySelector("#err-number");
            if (num.length === 0) {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "-0px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }
      let cardNum = document.getElementById("cardNumber").value;
      {
            let err = document.querySelector("#err-cardNumber");
            if (cardNum.length === 0) {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "-15px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }
      let nameOnCard = document.getElementById("nameOnCard").value;
      {
            let err = document.querySelector("#err-nameOn-card");
            if (nameOnCard.length === 0) {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "-15px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }

      let month = document.getElementById("month").value;
      let year = document.getElementById("year").value;
      //   console.log(month, year);
      {
            let err = document.getElementById("err-date");
            if (month === "" || year === "") {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "3px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }
      let cvv = document.getElementById("CVV").value;
      {
            let err = document.querySelector("#err-cvv");
            if (cvv.length === 0) {
                  err.innerText = "*This field is required.";
                  err.style.fontWeight = "bold";
                  err.style.marginTop = "3px";
                  err.style.color = "#c23227";
                  err.style.borderRadius = "3px";
                  err.style.padding = "12px";
                  err.style.backgroundColor = "#fae8e6";
            } else {
                  err.innerHTML = "";
            }
      }
      if(cvv==="" || month===""||year===""|| nameOnCard==="" ||cardNum===""||num===""||name===""||email===""){
          console.log("fill")
          return;
      }
      else{
          window.open("/orderPlaced.html","_self")
      }
};

document
      .getElementById("clickPayment")
      .addEventListener("click", placedOrderFunc);
