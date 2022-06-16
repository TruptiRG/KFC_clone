
import {navbar} from "../components/navbar.js";
// console.log(navbar);
document.getElementById("navbar").innerHTML=navbar();
// function gotomenu(){
//     window.location.href="menu.html";
// }

let kfcdata=JSON.parse(localStorage.getItem("KFCdata"))||[]
console.log(kfcdata);

let qty=document.querySelector("#cartpa");
let cartqty=kfcdata.length;
console.log(cartqty);
qty.innerText=cartqty;

if(cartqty>0){
    document.querySelector("#cartdata").style.display="none";
}

let cartDiv=document.getElementById("cartdata_present");

kfcdata.map(function(el,index){
    // cartDiv.innerHTML=null;
    let div=document.createElement("div");
        div.setAttribute("class","div");

        let img=document.createElement("img");
        img.src=el.img;
        img.setAttribute("class","pimg");
        let name=document.createElement("h5");
        name.innerText=el.name;
        name.setAttribute("class","name");
        let price=document.createElement("p");
        price.innerText=`₹${el.price}`;
        price.setAttribute("class","price");
        // let descrip=document.createElement("p");
        // descrip.innerText=el.description;
        // descrip.setAttribute("class","descrip");
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("class","btn");
        btn.addEventListener("click",function(){
            remove(el,index);
        })
        div.append(img,name,price,btn);
        cartDiv.append(div);  
});

function remove(el,index){
    kfcdata.splice(index,1);
    localStorage.setItem("KFCdata",JSON.stringify(kfcdata));
    window.location.reload();
}

let totalprice=kfcdata.reduce(function(sum,el){
    return sum+Number(el.price);
},0);

document.querySelector("#price").innerText=`₹${totalprice}`;

let item=document.getElementById("itemhere");
item.innerText=`${cartqty} ITEM`;

let subtotalprice=document.getElementById("subtotalprice");
subtotalprice.innerText=`₹${totalprice}`;

let gstprice=document.getElementById("gstprice");
gstprice.innerText=`₹19`;

let alltotal=document.getElementById("alltotal");
alltotal.innerText=`₹ ${totalprice+19}`;

if(cartqty==0){
    document.querySelector("#checkoutdiv").style.display="none";
}

// function checkout(){
//     window.location.href="https://online.kfc.co.in/checkout";
// }