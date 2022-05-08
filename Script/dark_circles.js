import { vikasHead, footer } from "../components/header.js";
document.getElementById("_header").innerHTML = vikasHead();
document.getElementById("footer").innerHTML = footer();

let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-length").innerText=cartdata.length;

let inputdata = [
      {
            price: 29,
            categories: "masks",
            productname:
                  "Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
            strickedoff: "$29.00",
      },
      {
            price: 30,
            categories: "moisturizes",
            productname: "Wow Skin Science Caffeine Face Serum",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",
            strickedoff: "$30.00",
      },
      {
            price: 34,
            categories: "masks",
            productname: "WOW Skin Science Activated Charcoal Face Scrub",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg",
            strickedoff: "$34.00",
      },
      {
            price: 58,
            categories: "moisturizes",
            productname: "WOW Skin Science Activated Charcoal Face Mask",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/c/activated_charcoal_face_mask2.jpg",
            strickedoff: "$58.00",
      },
      {
            price: 52,
            categories: "masks",
            productname:
                  "Lotus Organics+ Bakuchiol Plant Retinol Miracle Facial Oil",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/d/fd794d08904304373124.jpg",
            strickedoff: "$52.00",
      },
      {
            price: 24,
            categories: "moisturizes",
            productname:
                  "Organic Harvest Masseuscious Damage Control Cleanser With Acai Berry",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg",
            strickedoff: "$29.00",
      },
      {
            price: 64,
            categories: "masks",
            productname: "WOW Skin Science AM2PM Sunscreen SPF 50 Lotion",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/b/7ba61598904352001284_1.jpg",
            strickedoff: "$64.00",
      },
      {
            price: 72,
            categories: "moisturizes",
            productname:
                  "WOW Skin Science Activated Charcoal Peel Off Face Mask",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901631_1.jpg",
            strickedoff: "$72.00",
      },
      {
            price: 15,
            categories: "masks",
            productname:
                  "Mamaearth Flowers Of Youth Essence Serum With Hyaluronic Acid & Hibiscus For Youthful Skin",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/e/3eb5e308904311902874_1.jpg",
            strickedoff: "$15.00",
      },
      {
            price: 8,
            categories: "moisturizes",
            productname:
                  "Biotique Advanced Organics Tea Tree Treament Oil Essential Oil For Face",

            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/5/759639c8904311903499__1_.jpg",
            strickedoff: "$8.00",
      },
      {
            price: 45,
            categories: "masks",
            productname:
                  "WOW Skin Science Kids Cool-The-Rays Sunscreen Cream - SPF 30+ PA+++",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aae1c478906105612136-2.jpg",
            strickedoff: "$45.00",
      },
      {
            price: 28,
            categories: "moisturizes",
            productname: "WOW Skin Science Raw African Shea Body Butter",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/0/70bf0be8904311901860_1.jpg",
            strickedoff: "$28.00",
      },
      {
            price: 44,
            categories: "cleansers",
            productname:
                  "WOW Skin Science Apple Cider Vinegar Face Wash Bottle",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/e/ee32c478906105612372-2.jpg",
            strickedoff: "$44.00",
      },
      {
            price: 26,
            categories: "cleansers",
            productname: "WOW Skin Science Hyaluronic Acid Face Serum",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/e/ee32c478906105612372-2.jpg",
            strickedoff: "$26.00",
      },
      {
            price: 24,
            categories: "cleansers",
            productname: "Maybelline New York Clear Glow BB Cream - Radiance",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/d/8d895398904311905103__5_.jpg",
            strickedoff: "$24.00",
      },
      {
            price: 20,
            categories: "cleansers",
            productname: "WOW Skin Science Ubtan Face Serum",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/2/b2917c28904311900818-_2_.jpg",
            strickedoff: "$20.00",
      },
      {
            price: 24,
            categories: "cleansers",
            productname:
                  "Garnier Skin Naturals Micellar Cleansing Water With BB Cream",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901587_1__1.jpg",
            strickedoff: "$24.00",
      },
      {
            price: 34,
            categories: "eyecare",
            productname: "Maybelline New York Clear Smooth BB Cream - 01 Fresh",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/0/1/01_fresh.jpg",
            strickedoff: "$34.00",
      },
      {
            price: 78,
            categories: "eyecare",
            productname:
                  "Colorbar Flawless Touch Contour And Highlighter - Neutral",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/7/171.jpg",
            strickedoff: "$85.00",
      },
      {
            price: 37,
            categories: "eyecare",
            productname: "Miss Claire Make Up Palette 9955-1 (Make Up Kit)",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/4/149.jpg",
            strickedoff: "$37.00",
      },
      {
            price: 60,
            categories: "toner",
            productname: "Miss Claire Make Up Palette 9955-2 (Make Up Kit)",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/3/134.jpg",
            strickedoff: "$60.00",
      },
      {
            price: 40,
            categories: "toner",
            productname: "O3+ Bright Glow BB Cream SPF 30 PA+++",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/6/86.jpg",
            strickedoff: "$40.00",
      },
      {
            price: "405.00 ",
            categories: "toner",
            productname:
                  "NYX Professional Makeup Highlight & Contour Pro Palette Matte Finish",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/b/sb6.jpg",
            strickedoff: "₹445.00",
      },
      {
            price: 82,
            categories: "serums",
            productname:
                  "Swiss Beauty Long Lasting Makeup Fixer Natural Aloe Vera With Vitamin-E",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/w/sw2.jpg",
            strickedoff: "$82.00",
      },
      {
            price: 50,
            categories: "serums",
            productname:
                  "Faces Canada Weightless Stay Matte Compact SPF-20 Vitamin E & Shea",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/g/hgjf.jpg",
            strickedoff: "$50.00",
      },
      {
            price: 20,
            categories: "lipcare",
            productname: "Blue Heaven High Coverage Foundation With Primer",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/r/primer_1.jpg",
            strickedoff: "$20.00",
      },
      {
            price: 37,
            categories: "necks",
            productname:
                  "Lakme Absolute Illuminating Blush Shimmer Brick - In Pink",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/7/37_4_2.jpg",
            strickedoff: "$37.00",
      },
      {
            price: 60,
            categories: "tools",
            productname: "Miss Claire Make Up Palette 9924 (Make Up Kit)",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/6/160.jpg",
            strickedoff: "$60.00",
      },
      {
            price: "405.00",
            categories: "moisturizes",
            productname: "Miss Claire Make Up Palette 9929 (Make Up Kit)",
            producturl:
                  "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/5/159.jpg",
            strickedoff: "₹445.00",
      },
];

window.addEventListener("load", function () {
      display_store_data(inputdata);
});

// ============================================sorting==========================================//
let selected = document.getElementById("sort");
selected.addEventListener("change", sortfun);
function sortfun() {
      let select = selected.value;

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
}

// ========================================sorting ended=======================================//

// filter function

let selecte = document.querySelector(".leftSort");
selecte.addEventListener("change", filterproduct);

function filterproduct() {
      let select = selecte.value;

      let filterlist = inputdata.filter(function (el) {
            return el.categories === select;
      });
      console.log("Hehehe");
      display_store_data(filterlist);
}

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
            span1_fa_fa_star_checked.setAttribute(
                  "class",
                  "fa fa-star checked"
            );

            div_starRating.append(span1_fa_fa_star_checked);

            var span2_fa_fa_star_checked = document.createElement("span");
            span2_fa_fa_star_checked.setAttribute(
                  "class",
                  "fa fa-star checked"
            );

            div_starRating.append(span2_fa_fa_star_checked);

            var span3_fa_fa_star_checked = document.createElement("span");
            span3_fa_fa_star_checked.setAttribute(
                  "class",
                  "fa fa-star checked"
            );

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
      document.getElementById("cart-length").innerText=cartdata.length;
      localStorage.setItem("cart", JSON.stringify(cartdata));
}
