const CART_25801_ID= CART_INFO_URL + 25801 +  EXT_TYPE;

/*fetch (CART_25801_ID)
.then (response => response.json())
.then (data => mostrarData(data.articles))
.catch (err=>console.log(err))*/

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
         <td><input type="number" name="productCountInput" class="form-control" id="productCountInput" style="width:70px ; height:20px" value="0"
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
} 
let productCost = 0
let productCount = 0
let comissionPercentage = 0.15

function updateCostCart(){
  let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow =  articulo.unitCost
    let comissionToShow = Math.round((comissionPercentage * 100))
    let totalCostToShow =  ((Math.round(productCost * comissionPercentage * 100) / 100) + parseInt(productCost));

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;

}


document.addEventListener("DOMContentLoaded",function(e){
  getJSONData(CART_25801_ID).then(function(resultObj){
    if (resultObj.status === "ok"){
        currentCategoriesArray = 
       mostrarData(resultObj.data.articles)
      
    }
    
  let subtotalCart = document.getElementById("productCountInput")


  subtotalCart.addEventListener("change",function(e){
  
   subtotal_modified = subtotalCart.value * articulo.unitCost
    //document.getElementById("subtotal").innerHTML = articulo.currency + " " + subtotal_modified
    //document.getElementById("productCostText").innerHTML = articulo.currency + " " +subtotal_modified;
   
  
    document.getElementById("premiumradio").addEventListener("mouseover", function(){
      
      updateCostCart()
    });
    
    document.getElementById("expressradio").addEventListener("mouseover", function(){
      
      updateCostCart()
    });
    
    document.getElementById("standardradio").addEventListener("load", function(){
      let comissionPercentage = 0.05;
      comission.innerHTML = articulo.currency + " " +(comissionPercentage * subtotal_modified)
    });
  
  
  })
  //modal mode
    const inputCredit = document.getElementById("cardradio")
    const inputTransfer = document.getElementById("transferradio")
    const numberCount = document.getElementById("countNumberInput")
    const cardNumber = document.getElementById("cardNumberInput")
    const secureCode = document.getElementById("secureCodeInput")
    const expiration = document.getElementById("expirationInput")
    
    inputCredit.addEventListener("click",function(){
    if (inputTransfer !== inputCredit){
      numberCount.setAttribute("disabled","disabled")
      cardNumber.removeAttribute("disabled")
      secureCode.removeAttribute("disabled")
      expiration.removeAttribute("disabled")
    }
    })
    
    inputTransfer.addEventListener("click",function(){
      if (inputTransfer !== inputCredit){
        cardNumber.setAttribute("disabled","disabled")
        secureCode.setAttribute("disabled","disabled")
        expiration.setAttribute("disabled","disabled")
        numberCount.removeAttribute("disabled")
      }
      
      })

  });
 
  
  
})














