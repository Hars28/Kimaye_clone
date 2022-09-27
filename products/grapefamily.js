
import { header } from "../ashish$$/components/header.js"

document.getElementById("grHead").innerHTML = header();

var data = [
    {

        name: "Kimaye Three Grape Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_900x.png?v=1642492575",
        price: "₹152",
    },
    {

        name: "Variety: Sharad Seedless (500g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/b2fdf9f3-93a9-4ae2-bd80-bfaf63af08d9_720x.png?v=1615017122",
        price: "₹ 99",
    },
    {

        name: "Red Globe Imported (400g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_720x.png?v=1614765886",
        price: "₹ 219",

    },
    {

        name: "Kimaye Grapes (Sonaka Seedless) (500g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/9ebb0dfa-3897-42a3-97be-5a0ecb8491f8_720x.png?v=1615016898",
        price: "₹ 99",

    },
    {

        name: "Kimaye Grapes (Jumbo Seedless) (500g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dbe751de-009c-4454-a3f1-42375be8bb15_720x.png?v=1614859367",
        price: "₹ 107",

    },
    {

        name: "Kimaye Grapes (Flame Seedless (500g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/069bdaa3-eca4-4f4c-8f02-970a626f7be3_720x.png?v=1616393545",
        price: "₹ 109",

    },
    {

        name: "Kimaye Blueberry-Green Grapes Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_720x.png?v=1642492910",
        price: "₹ 492",

    },
    {

        name: "Green & Black Grapes Combo (250g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_720x.png?v=1641883595",
        price: "₹ 98",
    },

];



var cartarray = JSON.parse(localStorage.getItem("cartData")) || [];

data.map(function (elem, index) {
    var firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "main")

    var img = document.createElement("img");
    img.setAttribute("class", "img")
    img.setAttribute("src", elem.image);
    var h4 = document.createElement("p");
    h4.setAttribute("class", "nameoff")
    h4.textContent = elem.name;
    var para = document.createElement("p");

    para.setAttribute("class", "prc")
    para.textContent = elem.price;


    var btn = document.createElement("button");
    btn.innerText="ADD TO CART"
    btn.setAttribute("class","addBtn")
  
    firstDiv.append(img, h4, para,btn);
    document.getElementById("contner").append(firstDiv);
});

// function for go to cart page

document.querySelector(".img").addEventListener("click", function () {
    window.location.href = "ProductDetailPage.html";
});


import { footer } from "../ashish$$/components/footer.js"

document.getElementById("grfoot").innerHTML = footer();