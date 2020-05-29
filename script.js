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
                        <img src="${item.img}">
                        <input type="button" value="Add to cart">
                    </div>
                </div>`
     })
     shopItemsContainer.innerHTML=items;
     console.log("items", items)
 })
console.log("shopItemsContainer", shopItemsContainer)