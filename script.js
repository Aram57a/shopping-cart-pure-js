let res =[
    {
      "id": 0,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    },
    {
      "id": 1,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    },
    {
      "id": 2,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    },
    {
      "id": 3,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    },
    {
      "id": 4,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    },
    {
      "id": 5,
      "img": "https://www.sunrise.ch/en/residential/geraete/handys/apple-iphone-11-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwMTc4.format-hardware-configurator-l.png",
      "title": "Samsung Galaxy",
      "price": 550
    }
  ] 
const shopItemsContainer = document.getElementById("items");
let cartItems = document.getElementById("modal-items");
let cartNumber=0;
const getFromBackEnd=()=>{
    let items="";
    res.forEach(item=>{
        items += `
        <div class="grid-item">
                   <div class="flex-cartandphoto">
                   <h2>${item.price}</h2>
                   <img src="${item.img}">
                   <h1>${item.title}</h1>
                   <button onclick="addToCart(${item.id})" id="${item.id}"> Add to Cart </button>
                   </div>
       </div>`           
    })
    return items;
}
shopItemsContainer.innerHTML=getFromBackEnd();
window.addToCart=function (itemID){
    cartNumber++;
    document.getElementById("cart-number").innerHTML= cartNumber;
    let itemPrice=res.find(el=>el.id==itemID).price;
    let itemTitle=res.find(el=>el.id==itemID).title;
    cartItems.innerHTML+=`<div class="modal-items-flex ">
                           <div>
                            <h2>Item Price: ${itemPrice}</h2>
                            <h2 class="underscore">Item Name: ${itemTitle}</h2>
                           </div>
                           <div class="modal-item-delete">+</div>
                           </div>
                           `
    console.log(cartItems)
    return disableButton(itemID);
 }
function disableButton(itemID){
    let button=document.getElementById(itemID);
    button.disabled=true;
}
let cartButton= document.getElementById("icon-basket")
cartButton.onclick=function (){
  document.querySelector(".bg-modal").style.display="flex";

}
let closeButton=document.getElementById("close-icon")
closeButton.onclick=function (){
  document.querySelector(".bg-modal").style.display="none";
}
/*
let removeButton=document.querySelector(".modal-item-delete");

removeButton.onclick=function(e){
  e.target.parentElement.remove();
}*/
cartItems.addEventListener('click', (e) => {
  document.getElementById("cart-number").innerHTML--;
  const btn = e.target.closest('.modal-item-delete');
  //if (!btn) return;
  btn.parentElement.remove();
});