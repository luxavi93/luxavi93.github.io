const obtenerID = localStorage.getItem("prodID");
const productInfo = PRODUCT_INFO_URL + obtenerID + EXT_TYPE;

fetch (productInfo)
.then (response => response.json())
.then (data => mostrarProductInfo(data))
.catch (err=>console.log(err))


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
          <strong>Imagenes Ilustrativas</strong>
          <div class="card-group" style="width:500px ; height:500px ">
                  <img src="${data.images[0]}" alt="" class="img-thumbnail">
          </div>
          
          
            `
            document.getElementById("product-info").innerHTML = htmlContentToAppend;    
}

fetch (productInfo)
.then (response => response.json())
.then (data => mostrarProductosRelacionados (data.relatedProducts))
.catch (err=>console.log(err))

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

/*let commentSubmit = document.getElementById("commentSubmit")
let array =[];
function showCommments(){
  let htmlContentToAppend="";
  if (localStorage.getItem("list")){
    array = JSON.parse(localStorage.getItem("list"))
    array.forEach(element => {
      htmlContentToAppend += `<li class="list-group-item">${element}</li>`
    });
  } else {
    localStorage.setItem("list", "");
  }

}

document.addEventListener("DOMContentLoaded",function(e){
commentSubmit.addEventListener("click", function(e){
  e.preventDefault()
  console.log(commentSubmit)

})
})*/

const productComments = PRODUCT_INFO_COMMENTS_URL + obtenerID + EXT_TYPE
console.log(productComments)

