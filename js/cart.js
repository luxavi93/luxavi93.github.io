const CART_25801_ID= CART_INFO_URL + 25801 +  EXT_TYPE;

fetch (CART_25801_ID)
.then (response => response.json())
.then (data => mostrarData(data.articles))
.catch (err=>console.log(err))


function mostrarData (data) {
    
  
    let products = data
    
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
      <th scope="row-5"><img src="${articulo.image}" alt="..." class="img-thumbnail" style="width:200px ; height:100px"></th>
      <td>${articulo.name}</td>
      <td>${articulo.currency} ${articulo.unitCost}</td>
      <td><input type="number" name="productCountInput" class="form-control" id="productCountInput" style="width:70px ; height:20px" value="2"
      min="0">
      
      </div></td>
      <td id="subtotal">${articulo.currency}  </td>
    </tr>
  </tbody>
  </table>
</div>
            
            `
            document.getElementById("cart-container").innerHTML = htmlContentToAppend;
            console.log(articulo.unitCost)
            console.log(productCountInput.value)
            console.log(subtotal)
function multiplicarSubtotal(){
  let multiplo = productCountInput.value
  let unidadCosto = articulo.unitCost
  return multiplo * unidadCosto
}
console.log(multiplicarSubtotal(data))
    
} 

}

/*<div class="table-responsive">
  <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="${articulo.image}" alt="..." class="img-thumbnail"></th>
      <td>${articulo.name}</td>
      <td>${articulo.currency}${articulo.unitCost}</td>
      <td>${articulo.count}</td>
      <td>${articulo.currency}${articulo.unitCost}</td>
    </tr>
  </tbody>
  </table>
</div>
<div ${articulo.id} class="mt-5 list-group-item list-group-item-action ">
                <div class="row">
                    <div class="col-2">
                        <img src="${articulo.image}" alt="..." class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-10 justify-content-between">
                            <h4 class="mb-1">${articulo.name} </h4>
                            
                        </div>
                        <p class="text-start mb-1 mt-3">${articulo.unitCost}</p>
                        <p class="text- mb-1 mt-3">${articulo.unitCost}</p>
                    </div>
                </div>
            </div>

<input type="number" name="cartCostInput" class="form-control" id="cartCostInput" placeholder="" required="">
        
        </div>
        */