
import {navbar} from "../components/navbar.js";
// console.log(navbar);
document.getElementById("navbar").innerHTML=navbar();


const url1="https://kfc-clone-project.herokuapp.com/api/KFC_BIG_TREAT_WEEK";
const url2="https://kfc-clone-project.herokuapp.com/api/HOT_DEALS";
const url3="https://kfc-clone-project.herokuapp.com/api/CHICKEN_BUCKETS";
const url4="https://kfc-clone-project.herokuapp.com/api/BOX_MEALS";
const url5="https://kfc-clone-project.herokuapp.com/api/BURGERS";
const url6="https://kfc-clone-project.herokuapp.com/apihttp://localhost:2001/BIRYANI_BUCKETS";
const url7="https://kfc-clone-project.herokuapp.com/api/SNACK";
const url8="https://kfc-clone-project.herokuapp.com/api/BEVERAGES_AND_DESSERTS";


async function getData1(){
    try{
        let res= await fetch(url1);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}

async function getData2(){
    try{
        let res= await fetch(url2);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData3(){
    try{
        let res= await fetch(url3);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData4(){
    try{
        let res= await fetch(url4);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData5(){
    try{
        let res= await fetch(url5);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData6(){
    try{
        let res= await fetch(url6);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData7(){
    try{
        let res= await fetch(url7);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}
async function getData8(){
    try{
        let res= await fetch(url8);

        let products =await res.json();
        console.log(products);
        appendData(products);
    } catch(err){
        console.log(err);
    }
}



getData1();
// getData2();
// getData3();
// getData4();
// getData5();
// getData6();
// getData7();
// getData8();

let prod =document.getElementById("prod");

let kfcdata=JSON.parse(localStorage.getItem("KFCdata"))||[]

function appendData(products){
    prod.innerHTML=null;
    products.forEach(function(el){
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
        let descrip=document.createElement("p");
        descrip.innerText=el.description;
        descrip.setAttribute("class","descrip");
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.setAttribute("class","btn");
        btn.addEventListener("click",function(){
            addtocart(el);
        })
        div.append(img,name,price,descrip,btn);
        prod.append(div);
    });
}

function addtocart(el){
    kfcdata.push(el);
    localStorage.setItem("KFCdata",JSON.stringify(kfcdata));
    alert("Item added..!");
    window.location.reload();
}

let L1=document.getElementById("L1");
L1.addEventListener("click",function(){
    getData1();
})
let L2=document.getElementById("L2");
L2.addEventListener("click",function(){
    getData2();
})
let L3=document.getElementById("L3");
L3.addEventListener("click",function(){
    getData3();
})
let L4=document.getElementById("L4");
L4.addEventListener("click",function(){
    getData4();
})
let L5=document.getElementById("L5");
L5.addEventListener("click",function(){
    getData5();
})
let L6=document.getElementById("L6");
L6.addEventListener("click",function(){
    getData6();
})
let L7=document.getElementById("L7");
L7.addEventListener("click",function(){
    getData7();
})
let L8=document.getElementById("L8");
L8.addEventListener("click",function(){
    getData8();
})

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