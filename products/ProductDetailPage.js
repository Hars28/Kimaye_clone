
import { header } from "../ashish$$/components/header.js"

document.getElementById("proHead").innerHTML = header();




function showproduct(event) {
  event.preventDefault();
  var searchInput = document.querySelector(".typeany").value;
  if (searchInput == "ALL FRUITS") {
    window.location.href = "ProductPage.html";
  }
}

const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
let currSlide = 0;
const slides = document.querySelectorAll(".product");
const maxSlide = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  console.log("right", currSlide);
  if (currSlide == maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};

const prevSlide = function () {
  console.log("left", currSlide);
  if (currSlide == 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);




var numberplus = document.querySelector(".number").textContent;
document.querySelector(".minus").addEventListener("click", function () {
  if (numberplus <= 0) {
    document.querySelector(".minus").addEventListener("click");
  }
  numberplus = +numberplus - 1;
  document.querySelector(".number").textContent = numberplus;
})

document.querySelector(".plus").addEventListener("click", function () {
  numberplus = +numberplus + 1;
  document.querySelector(".number").textContent = numberplus;
})


document.querySelector(".add").addEventListener("click", additems);

var cartData = [];

function additems() {
  var name = document.querySelector(".product_name").textContent;
  var img = document.createElement("img");
  img.src = "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-cover.progressive.jpg?v=1639461484/";
  var photo = img.src;
  var pac = document.querySelector(".packvalue").textContent;
  var price = document.querySelector(".price").textContent;
  var qty = document.querySelector(".number").textContent;

  var details = {
    name: name,
    image: photo,
    packs: pac,
    price: 144,
    qty: qty,
  };

  cartData.push(details);

  localStorage.setItem("cartData", JSON.stringify(cartData));
};
