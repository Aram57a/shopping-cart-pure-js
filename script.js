import {getFromBackEnd} from "./utils/http.js";
console.log(getFromBackEnd())

const shopItemsContainer = document.getElementById("items");

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
                    <input type="button" value="Add to cart"
                    </div>
                </div>`
     })
     shopItemsContainer.innerHTML=items;
     console.log("items", items)
 })
console.log("shopItemsContainer", shopItemsContainer)