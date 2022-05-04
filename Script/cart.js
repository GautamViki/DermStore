//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// {
let dataArr = JSON.parse(localStorage.getItem("CartItems"));
// console.log(dataArr);

dataArr.forEach((el, idx) => {
      //   console.log(el.title);
      let cartBox = document.createElement("div");
      // cartBox.style.height="100px";
      cartBox.style.border = "1px solid rgb(192, 192, 192)";
      cartBox.style.borderLeft = "none";
      cartBox.style.borderRight = "none";
      cartBox.style.borderBottom = "none";
      cartBox.style.padding = "10px 0px";
      cartBox.style.display = "flex";

      let image = document.createElement("img");
      image.src = el.imageURL;
      image.style.height = "100px";
      image.style.width = "80px";
      image.style.marginRight = "10px";

      let title = document.createElement("p");
      title.innerText = el.productName;
      // title.style.border="1px solid red"

      let fevi = document.createElement("p");
      fevi.innerText = "Save to My Favorites";
      fevi.style.cursor = "pointer";
      fevi.style.width = "26%";
      fevi.style.padding = "10px";
      fevi.addEventListener("mouseover", function () {
            fevi.style.backgroundColor = "#e0e6ef";
      });
      fevi.addEventListener("mouseout", function () {
            fevi.style.backgroundColor = "white";
      });

      let avl = document.createElement("p");
      avl.innerText = "In stock - Usually dispatched within 24 hours";

      let titleDiv = document.createElement("div");
      titleDiv.style.width = "42.8%";
      // titleDiv.style.fontSize="15px"
      titleDiv.append(title, avl, fevi);

      let price = document.createElement("p");
      price.innerText = el.price;
      price.style.width = "13%";
      price.style.border = "1px solid white";
      price.style.alignItems = "center";
      price.style.display = "flex";
      price.style.justifyContent = "center";

      let qty = document.createElement("div");
      qty.style.display = "flex";
      qty.style.width = "13%";
      qty.style.gap = "15px";
      qty.style.border = "1px solid white";
      qty.style.alignItems = "center";
      qty.style.justifyContent = "center";
      qty.style.fontWeight = "400";

      let counting = document.createElement("p");
      counting.innerText = "1";

      let decButton = document.createElement("p");
      decButton.innerText = `-`;
      decButton.style.cursor = "pointer";

      decButton.addEventListener("click", function () {
            let count = Number(counting.innerText);
            let pr = Number(totalPrice.innerText);
            console.log(pr);
            let arrTo = decreFunc(el, idx, count, pr);
            if (arrTo[0] <= 0) {
                  cartBox.style.border = "none";
                  cartBox.innerHTML = null;
            }
            counting.innerText = arrTo[0];
            totalPrice.innerText = arrTo[1];
      });

      let incButton = document.createElement("p");
      incButton.innerText = " +";
      incButton.style.cursor = "pointer";
      incButton.addEventListener("click", function () {
            let count = Number(counting.innerText);
            let pr = Number(totalPrice.innerText);
            console.log(pr, typeof pr);
            let incArr = increFunc(el, idx, count, pr);
            counting.innerText = incArr[0];
            totalPrice.innerText = incArr[1];
            console.log(count);
      });

      qty.append(decButton, counting, incButton);

      let totalPrice = document.createElement("p");
      totalPrice.innerText = el.price;
      totalPrice.style.width = "13%";
      totalPrice.style.border = "1px solid white";
      totalPrice.style.alignItems = "center";
      totalPrice.style.display = "flex";
      totalPrice.style.justifyContent = "center";
      totalPrice.style.fontWeight = "600";

      cartBox.append(image, titleDiv, price, qty, totalPrice);

      document.getElementById("cartDivShowLeft").append(cartBox);
});

let decreFunc = (el, idx, count, pr) => {
      count--;
      pr = pr - Number(el.price);
      console.log(typeof pr, pr);
      return [count, pr];
};

let increFunc = (el, idx, count, pr) => {
      count++;
      pr = pr + Number(el.price);
      console.log(pr);
      return [count, pr];
};
