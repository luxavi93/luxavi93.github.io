const obtenerID = localStorage.getItem("prodID");
const productInfo = PRODUCT_INFO_URL + obtenerID + EXT_TYPE;


function mostrarProductInfo (data) {    
    let htmlContentToAppend = ""     
     htmlContentToAppend = `
        <h2 class="mt-5">${data.name}</h2>
        <hr>
        <div class="row">
            <strong>Precio</strong>
          <p>${data.currency} + ${data.cost}</p>
           <strong>Descripción</strong>
           <p>${data.description}</p>
           <strong>Categorias</strong>
           <p>${data.category}</p>
          <strong>Cantidades de vendidos</strong>
          <p>${data.soldCount}</p>         
            `
            document.getElementById("product-info").innerHTML = htmlContentToAppend;    
}

function mostrarImagenes(data){
  let images =data;
  let htmlContentToAppend =""
  for(articulo of images){
    htmlContentToAppend +=`
             
    <div class="card-group mr-5" style="width:300px ; height:300px ">
    <img src="${articulo}" alt="" class="img-thumbnail">
</div>

    `
    document.getElementById("product-img").innerHTML = htmlContentToAppend
  }
}

function mostrarProductosRelacionados (data) {
    let products = data
    
    let htmlContentToAppend = ""
    for (articulo of products){
       htmlContentToAppend += `
            <div onclick="setRelatedProductsID(${articulo.id})" class="card-group cursor-active pb-3" style="width:300px ; height:300px ">
                <div class="card">
                    <img src="${articulo.image}" alt="..." class="card-img-top" >
                    <div class="card-body">
                        <h4 class="card-title">${articulo.name}</h4>
                    </div>
                </div>
            </div>
            `
            document.getElementById("related-products").innerHTML = htmlContentToAppend;
    } 
    
}

function setRelatedProductsID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

const productComments = PRODUCT_INFO_COMMENTS_URL + obtenerID + EXT_TYPE
console.log(productComments)


document.addEventListener("DOMContentLoaded",function(e){
  getJSONData(productInfo).then(function(resultObj){
      if (resultObj.status === "ok"){
         mostrarProductInfo(resultObj.data)
         mostrarImagenes(resultObj.data.images)
         mostrarProductosRelacionados (resultObj.data.relatedProducts)
      }
  })

})

