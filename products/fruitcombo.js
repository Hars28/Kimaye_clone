
import { header } from "../ashish$$/components/header.js"

document.getElementById("freshHead").innerHTML = header();

var data = [
    {

        name: "Kimaye Three Grape Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_900x.png?v=1642492575",
        price: "₹152",
    },
    {

        name: "Kimaye Blueberry-Green Grapes Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_900x.png?v=1642492910",
        price: "₹ 492",
    },
    {

        name: "Green & Black Grapes Combo (250g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_720x.png?v=1641883595",
        price: "₹ 98",
    },
    {

        name: "Kimaye Wholesome Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_720x.jpg?v=1618497683",
        price: "₹ 914",

    },
    {

        name: "Kimaye Wholesome Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_720x.png?v=1617983685",
        price: "₹ 527",

    },
    {

        name: "Kimaye Summer Combo",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_720x.jpg?v=1649415923",
        price: "₹ 477",

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
    btn.innerText = "ADD TO CART"
    btn.setAttribute("class", "addBtn")

    firstDiv.append(img, h4, para, btn);
    document.getElementById("contner").append(firstDiv);
});

document.querySelector(".img").addEventListener("click", function () {
    window.location.href = "ProductDetailPage.html";
});

import { footer } from "../ashish$$/components/footer.js"

document.getElementById("frfoot").innerHTML = footer();
