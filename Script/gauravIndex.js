import { vikasHead, footer } from "../components/header.js";
document.getElementById("_header").innerHTML = vikasHead();
document.getElementById("footerr").innerHTML = footer();

let cartdata = JSON.parse(localStorage.getItem("cart"));
 document.getElementById("cart-length").innerText=cartdata.length;