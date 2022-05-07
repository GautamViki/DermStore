import { vikasHead, footer } from "../components/header.js";
document.getElementById("_header").innerHTML = vikasHead();
document.getElementById("footer").innerHTML = footer();

let dataArr = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-length").innerText = dataArr.length;
// console.log(dataArr);
let appendData = (dataArr) => {
      document.getElementById("cart-show").innerHTML = null;
      let totalCostOfAllProducts = 0;
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
            image.src = el.producturl;
            image.style.height = "150px";
            image.style.width = "150px";
            image.style.marginRight = "10px";

            let title = document.createElement("p");
            title.innerText = el.productname;
            // title.style.border="1px solid red"

            let fevi = document.createElement("p");
            fevi.innerText = "Save to My Favorites";
            fevi.style.cursor = "pointer";
            fevi.style.width = "35%";
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
            titleDiv.style.width = "39.2%";
            // titleDiv.style.fontSize="15px"
            titleDiv.append(title, avl, fevi);

            let price = document.createElement("p");
            price.innerText = el.price;
            price.style.width = "14%";
            price.style.border = "1px solid white";
            price.style.alignItems = "center";
            price.style.display = "flex";
            price.style.justifyContent = "center";

            let qty = document.createElement("div");
            qty.style.display = "flex";
            qty.style.width = "16%";
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
                  // console.log(pr);
                  let arrTo = decreFunc(el, idx, count, pr);
                  if (arrTo[0] <= 0) {
                        cartBox.style.border = "none";
                        cartBox.innerHTML = null;
                        // dataArr.splice(idx, 1);
                  }
                  counting.innerText = arrTo[0];
                  totalPrice.innerText = arrTo[1];
                  totalCostOfAllProducts =
                        totalCostOfAllProducts - Number(el.price);
                  // console.log(totalCostOfAllProducts);
                  document.querySelector(
                        ".total"
                  ).innerText = `$${totalCostOfAllProducts}`;
            });

            let incButton = document.createElement("p");
            incButton.innerText = " +";
            incButton.style.cursor = "pointer";
            incButton.addEventListener("click", function () {
                  let count = Number(counting.innerText);
                  let pr = Number(totalPrice.innerText);
                  // console.log(pr, typeof pr);
                  let incArr = increFunc(el, idx, count, pr);
                  counting.innerText = incArr[0];
                  totalPrice.innerText = incArr[1];
                  totalCostOfAllProducts =
                        totalCostOfAllProducts + Number(el.price);
                  // Number(totalPrice.innerText);
                  // console.log(totalCostOfAllProducts);
                  document.querySelector(
                        ".total"
                  ).innerText = `$${totalCostOfAllProducts}`;
            });

            qty.append(decButton, counting, incButton);

            let totalPrice = document.createElement("p");
            totalPrice.innerText = el.price;
            totalPrice.style.width = "14%";
            totalPrice.style.border = "1px solid white";
            totalPrice.style.alignItems = "center";
            totalPrice.style.display = "flex";
            totalPrice.style.justifyContent = "center";
            totalPrice.style.fontWeight = "600";

            let deleteDiv = document.createElement("div");
            // deleteDiv.style.border="1px solid red"
            deleteDiv.style.display = "flex";
            deleteDiv.style.justifyContent = "center";
            deleteDiv.style.alignItems = "center";
            deleteDiv.style.textAlign = "center";

            let deleteItem = document.createElement("p");
            deleteItem.innerText = "X";
            deleteItem.style.width = "25px";
            deleteItem.style.height = "25px";
            // deleteItem.style.border="1px solid red";
            deleteItem.style.display = "flex";
            deleteItem.style.justifyContent = "center";
            deleteItem.style.alignItems = "center";
            deleteItem.style.backgroundColor = "#e0e6ef";
            deleteItem.style.cursor = "pointer";
            deleteItem.addEventListener("mouseout", function () {
                  deleteItem.style.backgroundColor = "#e0e6ef";
            });
            deleteItem.addEventListener("mouseover", function () {
                  deleteItem.style.backgroundColor = "white";
            });
            deleteItem.addEventListener("click", function () {
                  // console.log(el, idx);
                  deleteItemFunc(el, idx);
                  // console.log(el, idx);
            });

            deleteDiv.append(deleteItem);

            cartBox.append(image, titleDiv, price, qty, totalPrice, deleteDiv);

            document.getElementById("cart-show").append(cartBox);

            totalCostOfAllProducts =
                  totalCostOfAllProducts + Number(totalPrice.innerText);
      });
      // console.log(totalCostOfAllProducts);
      document.querySelector(".total").innerText = `$${totalCostOfAllProducts}`;
};

let decreFunc = (el, idx, count, pr) => {
      count--;
      pr = pr - Number(el.price);
      console.log(typeof pr, pr);
      if (count == 0) {
            dataArr.splice(idx, 1);
            document.getElementById("cart-length").innerText = dataArr.length;
            localStorage.setItem("cart", JSON.stringify(dataArr));
      }
      return [count, pr];
};

let increFunc = (el, idx, count, pr) => {
      count++;
      pr = pr + Number(el.price);
      // console.log(pr);
      return [count, pr];
};

let deleteItemFunc = (el, idx) => {
      dataArr.splice(idx, 1);
      console.log(dataArr);
      document.getElementById("cart-length").innerText = dataArr.length;
      localStorage.setItem("cart", JSON.stringify(dataArr));
      appendData(dataArr);
};
appendData(dataArr);
