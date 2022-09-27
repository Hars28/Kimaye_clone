





import {header} from "../ashish$$/components/header.js"
document.getElementById("head1").innerHTML=header()




    document.querySelector(".searchbar").addEventListener("click", showsearch);

    function showsearch(){
        document.querySelector("#searchform").style.display = "block";
    }
    
    // navbar hide search dropdown Option
    
    document.querySelector(".hidebar").addEventListener("click", closesearch);
    
    function closesearch(){
        document.querySelector("#searchform").style.display = "none";
    }
    
    
    // navbar search SUBMIT button function
    
    document.querySelector("form").addEventListener("submit", showproduct);
    
    function showproduct(event){
        event.preventDefault();
        var searchInput = document.querySelector(".typeany").value;
        if(searchInput == "ALL FRUITS"){
            window.location.href = "ProductPage.html";
        }
    }
    
    // function for go to home page.
    
    document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
        window.location.href = "index.html";
    })
    
    // function for go to log-in page
    
    document.querySelector(".gotologin").addEventListener("click", function(){
        window.location.href = "Signin.html";
    })
    
    // function for go to cart page
    
    document.querySelector(".gotocart").addEventListener("click", function(){
        window.location.href = "cart.html";
    })
    
    // gotoallfruits function
    
    document.querySelector("#gotoallfruits").addEventListener("click", function(){
        window.location.href = "ProductPage.html";
    })
    
    document.querySelector("#gotoallfruits1").addEventListener("click", function(){
        window.location.href = "ProductPage.html";
    })
    
    // slider function
    
    document.querySelector(".next").addEventListener("click", nextimage);
    document.querySelector(".prev").addEventListener("click", previmage);
    
    var image = [ "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/1_1512x.jpg?v=1599587622",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Banner_14_09_1512x.jpg?v=1600179622",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Picture5_1512x.jpg?v=1637134351",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Papaya-desktop-banner_1512x.jpg?v=1633939948"
    ];
    
    var info = ["ASSURED SAFETY","WE SERVE YOU THE","MAKE THE BERRY SEASON MERRY","THE FRUIT OF THE ANGELS"];
    var info1 = ["FROM FARM TO HOME", "APPLES OF OUR EYE", "WITH KIMAYE BERRY COMBO","KIMAYE PAPAYA"];
    var info2 = ["We are #all safe all good", "Stringent quality check ensure only the best fruits earn the Kimaye badge", "Berry Season","100% Traceable | Naturally Ripened"]
    
    var slider_content = document.querySelector("#box");
    
    var head = document.querySelector("#box>div>h1");
    var head1 = document.querySelector("#box>div>h2");
    var head2 = document.querySelector("#box>div>p");
    
    var boxdiv = document.querySelector("#box>div");
    
    
    var i = image.length;
    
    function nextimage(){
        if(i<image.length){
            i = i+1;
        }
        else{
            i = 1;
        }
        slider_content.style.backgroundImage = "url("+image[i-1]+")";
        slider_content.style.transition= "0.75s all ease-in-out";
        head.textContent = info[i-1];
        head.style.color= "black";
        head1.textContent = info1[i-1];
        head2.textContent = info2[i-1];
        head2.style.color = "black";
        boxdiv.style.paddingTop = "100px";
        boxdiv.style.transition= "0.75s all ease-in-out";
    }
    
    function previmage(){
        if(i<image.length+1 && i>1){
            i = i-1;
        }
        else{
            i = image.length;
        }
        slider_content.style.backgroundImage = "url("+image[i-1]+")";
        slider_content.style.transition= "0.75s all ease-in-out";
        head.textContent = info[i-1];
        head.style.color= "black";
        head1.textContent = info1[i-1];
        head2.textContent = info2[i-1];
        head2.style.color = "black";
    }
    
    // bottom slider2 function
    
    document.querySelector(".next1").addEventListener("click", nextimage1);
    document.querySelector(".prev1").addEventListener("click", previmage1);
    
    var image1 = [ "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_720x.jpg?v=1625638895",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Untitled_design_51-min.png?v=1614342058",
    ];
    
    var image2 = [ "https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Blog_-_Benefits_of_fruits_720x.jpg?v=1625147388",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/immune_system_1728x-min.jpg?v=1614342138",
    ];
    
    var infor1 = ["How To Remove And Clean Harmful Pesticides From Fruits","Grapes: How they reached India, types and health benefits"];
    var infor2 = ["Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves...", "Grapes are one of the most diverse and devoured fruits in india. Known for it's sweet flavours and nutrients,..."];
    var infor3 = ["Why Should You Eat Fruits More Often?", "Make Immunity your Best Friend"];
    var infor4 = ["David Thoreau once stated, Live in each season as it passes: breathe the air, drink the drink, taste the...", "Immunity in the New Normal The pandemic's biggest mystery is our immune system. But, do we really understand how..."];
    
    var slider_content1 = document.querySelector(".slider2>div:nth-child(1)");
    var slider_content2 = document.querySelector(".slider2>div:nth-child(2)");
    
    var heading1 = document.querySelector(".slider2>div:nth-child(1)>h2");
    var heading2 = document.querySelector(".slider2>div:nth-child(1)>p");
    var heading3 = document.querySelector(".slider2>div:nth-child(2)>h2");
    var heading4 = document.querySelector(".slider2>div:nth-child(2)>p");
    
    
    var j = image1.length;
    
    function nextimage1(){
        if(j<image1.length){
            j = j+1;
        }
        else{
            j = 1;
        }
        slider_content1.style.backgroundImage = "url("+image1[j-1]+")";
        slider_content2.style.backgroundImage = "url("+image2[j-1]+")";
        heading1.textContent = infor1[j-1];
        heading2.textContent = infor2[j-1];
        heading3.textContent = infor3[j-1];
        heading4.textContent = infor4[j-1];
    }
    
    function previmage1(){
        if(j<image1.length+1 && j>1){
            j = j-1;
        }
        else{
            j = image1.length;
        }
        slider_content1.style.backgroundImage = "url("+image1[j-1]+")";
        slider_content2.style.backgroundImage = "url("+image2[j-1]+")";
        heading1.textContent = infor1[j-1];
        heading2.textContent = infor2[j-1];
        heading3.textContent = infor3[j-1];
        heading4.textContent = infor4[j-1];
    }
