
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