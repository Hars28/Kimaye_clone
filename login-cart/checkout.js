document.querySelector("#cont").addEventListener("click",success1)
function success1(){
    alert("Your order has been placed.Thank you for shopping with us")
window.location.href="index.html"
}


let total1 = JSON.parse(localStorage.getItem("total"))||0
document.querySelector("#price1").innerText=total1;
import {header} from "./components/header.js"
document.getElementById("head1").innerHTML=header()

import {footer} from "./components/footer.js"
document.getElementById("foot1").innerHTML=footer()
