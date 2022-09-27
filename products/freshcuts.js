
import { header } from "../ashish$$/components/header.js"

document.getElementById("cutHead").innerHTML = header();


var data = [
    {

        name: "Pomegranate Seeds (Arils Cup)125g",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_900x.png?v=1613364164",
        price: "55 ",
        cart: "Add to Card"


    },
    {

        name: "Coconut Chunks Cup (100g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_720x.png?v=1611811511",
        price: "51 – 130",
        cart: "Add to Card"
    },
    {

        name: "Grated Coconut Punnet",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_720x.png?v=1611811509",
        price: "51",
        cart: "Add to Card"
    },
    {

        name: "Kimaye Arils-Coco Cup (125g)",
        image: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_720x.png?v=1614324446",
        price: "55 – 140",
        cart: "Add to Card"

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
    para.textContent = "₹" + elem.price;

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

document.getElementById("freshfoot").innerHTML = footer();

