import { vikasHead,footer } from "../components/header.js";
document.getElementById("_header").innerHTML=vikasHead();
document.getElementById("footer").innerHTML=footer();






 let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

 let inputdata = [
   {
     price: 29,
     categories: "masks",
     productname: "Dove Intense Repair Shampoo 650ml",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",
     strickedoff: "$29.00",
   },
   {
     price: 30,
     categories: "moisturizes",
     productname:
       "Wow Skin Science Green Tea & Tea Tree Anti-Dandruff Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311903680_1.jpg",
     strickedoff: "$30.00",
   },
   {
     price: 34,
     categories: "masks",
     productname:
       "Organic Harvests Color Protect Quinoa Shampoo, Sulfate-Free Shampoo For",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/0/e08092aorgaa00000032_p.jpg",
     strickedoff: "$34.00",
   },
   {
     price: 58,
     categories: "moisturizes",
     productname:
       "Schwarzkopf Professional Bonacure Collagen Volume Boost Micellar",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429633_2.jpg",
     strickedoff: "$58.00",
   },
   {
     price: 52,
     categories: "masks",
     productname:
       "Schwarzkopf Professional Bonacure Hyaluronic Moisture Kick Micellar",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/4045787429138.jpg",
     strickedoff: "$52.00",
   },
   {
     price: 24,
     categories: "moisturizes",
     productname: "Mamaearth Almond Shampoo With Almond Oil And Vitamin E",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/d/9d026918906087777199_7.jpg",
     strickedoff: "$29.00",
   },
   {
     price: 64,
     categories: "masks",
     productname: "WOW Skin Science Moroccan Argan Oil Shampoo - 300ml",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311900788_1_1.jpg",
     strickedoff: "$64.00",
   },
   {
     price: 72,
     categories: "moisturizes",
     productname: "Wow Onion Hair Care Combo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/y/nywowbndl0064.jpg",
     strickedoff: "$72.00",
   },
   {
     price: 15,
     categories: "masks",
     productname: "WOW Skin Science Himalayan Rose Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/a/7af639c8904311904274__1_.jpg",
     strickedoff: "$15.00",
   },
   {
     price: 8,
     categories: "moisturizes",
     productname: "WOW Skin Science Hair Loss Control Therapy Shampoo",

     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311900009_1_.jpg",
     strickedoff: "$8.00",
   },
   {
     price: 45,
     categories: "masks",
     productname:
       "WOW Skin Science Onion Black Seed Oil Ultimate Hair Care Kit",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/n/y/nywowbndl0052n.jpg",
     strickedoff: "$45.00",
   },
   {
     price: 28,
     categories: "moisturizes",
     productname:
       "WOW Skin Science Amla Shampoo For Weak Roots & Thin Damage Prone Hair",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/e/ce32bed8906105613409_1.jpg",
     strickedoff: "$28.00",
   },
   {
     price: 44,
     categories: "cleansers",
     productname:
       "WOW Skin Science Rice Water Shampoo With Rice Water, Rice Keratin & Lavender",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/3/63aebed8906105615144_1.jpg",
     strickedoff: "$44.00",
   },
   {
     price: 26,
     categories: "cleansers",
     productname:
       "Schwarzkopf Professional Bonacure Peptide Repair Rescue Micellar Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/6/16_17_5.jpg",
     strickedoff: "$26.00",
   },
   {
     price: 24,
     categories: "cleansers",
     productname: "Sebastian Professional Hydre Moisturizing Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/_/6_87_8.jpg",
     strickedoff: "$24.00",
   },
   {
     price: 20,
     categories: "cleansers",
     productname:
       "Sebastian Professional Penetraitt Strengthening And Repair- Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/_/4_98_12.jpg",
     strickedoff: "$20.00",
   },
   {
     price: 24,
     categories: "cleansers",
     productname: "Garnier Fructis Hair Care Combo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/2/52_2.jpg",
     strickedoff: "$24.00",
   },
   {
     price: 34,
     categories: "eyecare",
     productname: "WOW Skin Science Coconut Milk Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/14_16_5.jpg",
     strickedoff: "$34.00",
   },
   {
     price: 78,
     categories: "eyecare",
     productname:
       "Sunsilk Nourishing Soft & Smooth Shampoo 650ml Each - Pack Of 2",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/_/5.jpeg",
     strickedoff: "$85.00",
   },
   {
     price: 37,
     categories: "eyecare",
     productname: "WOW Skin Science Apple Cider Vinegar Shampoo - 300ml",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/144_2.jpg",
     strickedoff: "$37.00",
   },
   {
     price: 60,
     categories: "toner",
     productname:
       "Clinic Plus Strong & Thick Health Shampoo With Almond Oil -Pack Of 2",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/3/139_1.jpg",
     strickedoff: "$60.00",
   },
   {
     price: 40,
     categories: "toner",
     productname:
       "Clinic Plus Strong & Long Health Shampoo - 650ml Each (Pack Of 2)",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/3/138.jpeg",
     strickedoff: "$40.00",
   },
   {
     price: "405.00 ",
     categories: "toner",
     productname: "WOW Skin Science Red Onion Black Seed Oil Shampoo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/6/263.jpg",
     strickedoff: "₹445.00",
   },
   {
     price: 82,
     categories: "serums",
     productname:
       "WOW Skin Science Red Onion Black Seed Oil Shampoo & Conditioner Kit",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/5/253.jpg",
     strickedoff: "$82.00",
   },
   {
     price: 50,
     categories: "serums",
     productname:
       "WOW Skin Science Onion Black Seed Oil Hair Care Kit (Shampoo + Hair",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/5/252.jpg",
     strickedoff: "$50.00",
   },
   {
     price: 20,
     categories: "lipcare",
     productname:
       "Wella Professionals INVIGO Nutri Enrich Deep Nourishing Mask, Shampoo ",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/7/57.jpg",
     strickedoff: "$20.00",
   },
   {
     price: 37,
     categories: "necks",
     productname:
       "Wella Professionals 3 In 1: Re-Energize, Recover & Protect Combo",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/6/56.jpg",
     strickedoff: "$37.00",
   },
   {
     price: 60,
     categories: "tools",
     productname:
       "Wella Professionals Double Dose Combo: Nourish And Smoothen",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53.jpg",
     strickedoff: "$60.00",
   },
   {
     price: "405.00",
     categories: "moisturizes",
     productname:
       "Mamaearth Rice Water Shampoo With Rice Water And Keratin & Rice Hair Oil",
     producturl:
       "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/7/47_2.jpg",
     strickedoff: "₹445.00",
   },
 ];


 window.addEventListener("load", function () {
    display_store_data(inputdata);
  });
 
  // ============================================sorting==========================================//
  let selected = document.getElementById("sort");
  selected.addEventListener("change",sortfun);
  function sortfun() {
     let  select = selected.value;
 
    if (select === "default") {
      console.log("default");
      window.location.reload();
    }
 
    if (select === "best_sellers") {
      inputdata.sort(function (a, b) {
        if (a.productname > b.productname) return -1;
        if (a.productname < b.productname) return 1;
        return 0;
      });
      // console.log("Hello best seller")
      display_store_data(inputdata);
    }
 
    if (select === "a_z") {
      inputdata.sort(function (a, b) {
        if (a.productname > b.productname) return 1;
        if (a.productname < b.productname) return -1;
        return 0;
      });
      // console.log("Hello A-Z")
      display_store_data(inputdata);
    }
 
    if (select === "lth") {
      inputdata.sort(function (a, b) {
        return a.price - b.price;
      });
      // console.log("Hello Low to High")
      display_store_data(inputdata);
    }
 
    if (select === "htl") {
      inputdata.sort(function (a, b) {
        return b.price - a.price;
      });
      // console.log("Hello High to Low")
      display_store_data(inputdata);
    }
 
    if (select === "new") {
      inputdata.sort(function (a, b) {
        if (a.productname > b.productname) return -1;
        if (a.productname < b.productname) return 1;
        return 0;
      });
      // console.log("Hello best seller")
      display_store_data(inputdata);
    }
  };
 
  // ========================================sorting ended=======================================//
 
  // filter function
 
  let selecte = document.querySelector(".leftSort");
  selecte.addEventListener("change",filterproduct);
 
  function filterproduct () {
     let select = selecte.value;
 
    let filterlist = inputdata.filter(function (el) {
      return el.categories === select;
    });
    console.log("Hehehe");
    display_store_data(filterlist);
  };
 
 function display_store_data(inputdata) {
   let monster = document.getElementById("rockybhai");
   monster.innerText = "";

   inputdata.map(function (el) {
     let div = document.createElement("div");
     div.setAttribute("class", "popatlal");

     let img_div = document.createElement("div");
     img_div.setAttribute("class", "photoboss");
     let img = document.createElement("img");
     img.setAttribute("class", "photo");
     img.src = el.producturl;

     let name_div = document.createElement("div");
     name_div.setAttribute("class", "popatlal2");

     let names = document.createElement("p");
     names.innerText = el.productname;

     var div_starRating = document.createElement("div");
     div_starRating.setAttribute("class", "starRating");

     var span1_fa_fa_star_checked = document.createElement("span");
     span1_fa_fa_star_checked.setAttribute("class", "fa fa-star checked");

     div_starRating.append(span1_fa_fa_star_checked);

     var span2_fa_fa_star_checked = document.createElement("span");
     span2_fa_fa_star_checked.setAttribute("class", "fa fa-star checked");

     div_starRating.append(span2_fa_fa_star_checked);

     var span3_fa_fa_star_checked = document.createElement("span");
     span3_fa_fa_star_checked.setAttribute("class", "fa fa-star checked");

     div_starRating.append(span3_fa_fa_star_checked);

     var span4_fa_fa_star = document.createElement("span");
     span4_fa_fa_star.setAttribute("class", "fa fa-star");

     div_starRating.append(span4_fa_fa_star);

     var span5_fa_fa_star = document.createElement("span");
     span5_fa_fa_star.setAttribute("class", "fa fa-star");

     div_starRating.append(span5_fa_fa_star);

     let price = document.createElement("h4");
     price.innerText = el.strickedoff;

     let btn = document.createElement("button");
     btn.innerText = "QUICK BUY";
     btn.setAttribute("class", "btn_remove");
     btn.addEventListener("click", function () {
       addtocart(el);
     });

     img_div.append(img);
     name_div.append(names, div_starRating, price, btn);
     div.append(img_div, name_div);

     monster.append(div);
   });
 }

 function addtocart(el) {
   console.log("chill bro");
   cartdata.push(el);
   localStorage.setItem("cart", JSON.stringify(cartdata));
 }