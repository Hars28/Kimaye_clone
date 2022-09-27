
import {header} from "./components/header.js";
document.getElementById("header").innerHTML=header();






let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }

let data1 = [
{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_334275008-2-opt2-1900px_540x.jpg?v=1627119119",
    title:"Top Fruit Safety Tips You Should Be Swearing By Every Time You Consume Them" ,
    title1:"Fresh fruits bring with them a horde of health benefits, but it’s the way we consume them that is more important. While fruits have the ability to prevent many diseases such as cancer, heart stroke,...",
      read1:"Read More"
},

{
   url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_540x.jpg?v=1626676701",
title:"Fruits Rich In Vitamin C That You Should Be Eating Everyday",
title1:"Remember the times when our mothers used to chase us every day with a bowl of fruits when we were kids. Well, she had pretty good reasons behind doing the same. Fruits, especially the ones...",
read1:"Read More"


},

{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_540x.jpg?v=1625638895",
    title:"How To Remove And Clean Harmful Pesticides From Fruits",
    title1:"Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves to delicious fruits like mangoes, water melons, grapes and so on. After all, aside of helping...",
    read1:"Read More"

},

{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Blog_-_Benefits_of_fruits_540x.jpg?v=1625147388",
    title:"Why Should You Eat Fruits More Often?",
    title1:"David Thoreau once stated, “Live in each season as it passes: breathe the air, drink the drink, taste the seasonal fruit.” Rings true as, the more we tend to treat our cravings with junk and...",
    read1:"Read More"

},

{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_540x.png?v=1614341965",
    title:"Grapes: How they reached India, types and health benefits",
    title1:"Grapes are one of the most diverse and devoured fruits in India. Known for its sweet flavours and nutrients, grapes are hard to ignore. They come in various types and are carefully nurtured into fresh...",
    read1:"Read More"

},


{ 
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_540x.jpg?v=1614342193",
    title:"Make Immunity your Best Friend",
    title1:"Immunity in the New Normal The pandemic’s biggest mystery is our immune system. But, do we really understand how it functions? In simple terms, it’s your body’s armour against illnesses. The immune system also aids...",
    read1:"Read More"
    
},

{ 
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_540x.jpg?v=1614342435",
    title:"Nourish yourself with these 'fruitful' nutrients",
    title1:"October 5, 2020 (IANSlife) “Yatha Annam Tatha Mannam,” Prime Minister Narendra Modi recalled the maxim during his ‘Mann ki Baat session’ a few days back, which signifies that’ mental and intellectual development is directly related to...",
    read1:"Read More"

},

{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_540x.jpg?v=1614342271",
    title:"Healthy at Heart",
    title1:"September 28, 2020 (IANSlife) This World Heart Day, let’s have a light-hearted conversation about the importance of having a healthy heart and how one should take care of it.  Being aware of cardiovascular diseases and measures...",
    read1:"Read More"
    // read1:"Read More"

},

{
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/craving_blog-min_540x.jpg?v=1614342502",
    title:"Craving for Something Delicious During the Lockdown? We Got You!",
    title1:"We know that you’ve been spending your time working from home and being committed to your fitness goals. But, what about those cravings that sneak up on you once in a while? Well, we are...",
    read1:"Read More"

},

{
     url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-1-min_540x.jpg?v=1614342545",
    title:"A fruitful monsoon diet",
    title1:"August 3, 2020 (IANSlife) Monsoon demands some extra effort to stay fit and healthy. Since our immunity takes a dip during monsoons, making us susceptible to all kinds of infections. Especially amidst the Coronavirus pandemic, it’s...",
    read1:"Read More"

},


{ 
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/consume_fruits-min_540x.jpg?v=1614598062",
    title:"Do fruits have a time table",
    title1:"The right time to consume fruits Fruits are known to be an essential source of vitamins and minerals, and an excellent way to improve your overall health. Not just that, if you keep on consuming...",
    read1:"Read More"

},


{ 
    url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/working_out_at_home-min_540x.jpg?v=1614598096",
    title:"Meet your health goals during the lockdown",
    title1:"May 17, 2020 (IANSlife) Work from Home during quarantine has changed our lifestyles; keeping a check on nutrition can be tough when our home is our office.   Unlike at the office, here we have plenty of packed...",
    read1:"Read More"

}


]


let displaydata=(data1)=>{
    data1.map(function(el){
        let div1 = creat("div");
        div1.style.height="600px"
        div1.style.width="380px"
        div1.id="ak_databox"


        let img1 = creat("img");
        img1.id="ak_img"
        let p1 = creat("h3");
         p1.id="ak_p1"
        let p2 = creat ("p");
        p2.id="ak_p2"
        let more = creat("h4");
        more.id="ak_more"
        more.addEventListener("click",myfun);
        function myfun(){
            window.location.href="page.html"
        }
        

        img1.src=el.url;
        p1.innerText =el.title;
        p2.innerText=el.title1;
       
        more.innerText=el.read1
         div1.append(img1,p1,p2,more);
         get("ak_col1").append(div1);
    })
}
displaydata(data1);


import { footer } from "./components/footer.js";
document.getElementById("footer").innerHTML=footer();