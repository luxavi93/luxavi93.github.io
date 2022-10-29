const CART_25801_ID= CART_INFO_URL + 25801 +  EXT_TYPE;

fetch (CART_25801_ID)
.then (response => response.json())
.then (data => mostrarData(data.articles))
.catch (err=>console.log(err))


function mostrarData (data) {
    
  
    let products = data
    let subtotal_modified =""
    let htmlContentToAppend = ""
    for (articulo of products){
       htmlContentToAppend += `
            <h3>Articulos a comprar</h3>
            
<div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
         <th scope="col"></th>
         <th scope="col">Nombre</th>
         <th scope="col">Costo</th>
         <th scope="col">Cantidad</th>
         <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
       <tr >
         <th scope="row-5"><img src="${articulo.image}" alt="..." class="img-thumbnail" style="width:100px ; height:50px"></th>
         <td>${articulo.name}</td>
         <td>${articulo.currency} ${articulo.unitCost}</td>
         <td><input type="number" name="productCountInput" class="form-control" id="productCountInput" style="width:70px ; height:20px" value="1"
          min="0">   
         </td>
         <td id="subtotal">${subtotal_modified} </td>
       </tr>
     </tbody>
    </table>
</div>
            
            `
            document.getElementById("cart-container").innerHTML = htmlContentToAppend;
            
    }
let subtotalCart = document.getElementById("productCountInput")

subtotalCart.addEventListener("change",function(e){

  subtotal_modified = subtotalCart.value * articulo.unitCost
  document.getElementById("subtotal").innerHTML = articulo.currency + " " + subtotal_modified
})
    
} 

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})














