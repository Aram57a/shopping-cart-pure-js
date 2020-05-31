export const getFromBackEnd=()=>{

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
     return items;

 }