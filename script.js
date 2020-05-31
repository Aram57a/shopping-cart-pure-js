import {getFromBackEnd} from "./utils/http.js";
console.log(getFromBackEnd())

const shopItemsContainer = document.getElementById("items");
const cartItems = document.getElementById("modal-items");
let cartNumber=[];
getFromBackEnd()
 .then(res=>{
     console.log("res", res);
     
     let items="";
     res.forEach(item=>{
         items += `
         <div class="grid-item">
                    <div class="flex-cartandphoto">
                    <h2>${item.price}</h2>
                    <img src="${item.img}">
                    <h1>${item.title}</h1>
                    <input type="button" value="Add to cart" onclick="addToCart(${item.id}, ${item})" id="${item.id}"> 
                    </div>
        </div>`           
     })
     shopItemsContainer.innerHTML=items;
     console.log("items", items)
 })

 window.addToCart=function (itemID,item){
    cartNumber.push(itemID)
    document.getElementById("cart-number").innerHTML=cartNumber.length;
    cartItems.innerHTML=item;
    return disableButton(itemID);
 }
function disableButton(itemID){
    let button=document.getElementById(itemID);
    button.disabled=true;
}
document.getElementById("icon")
console.log("shopItemsContainer", shopItemsContainer)