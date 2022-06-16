// http://localhost:2000/KFC_BIG_TREAT_WEEK
// http://localhost:2000/HOT_DEALS
// http://localhost:2000/CHICKEN_BUCKETS
// http://localhost:2000/BOX_MEALS
// http://localhost:2000/BURGERS
// http://localhost:2000/BIRYANI_BUCKETS
// http://localhost:2000/SNACK
// http://localhost:2000/BEVERAGES_AND_DESSERTS

import {navbar} from "../components/navbar.js";
    // console.log(navbar);
    document.getElementById("navbar").innerHTML=navbar();

let kfcdata=JSON.parse(localStorage.getItem("KFCdata"))||[]

let qty=document.querySelector("#cartpa");
// console.log(qty);
let cartqty=kfcdata.length;
console.log(cartqty);
qty.innerText=cartqty;

let totalprice=kfcdata.reduce(function(sum,el){
    return sum+Number(el.price);
},0);

console.log(totalprice);
document.querySelector("#price").innerText=`₹${totalprice}`;