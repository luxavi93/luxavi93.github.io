const CART_25801_ID= CART_INFO_URL + 25801 +  EXT_TYPE;

// La función mostrarData crea una tabla con los elementos procedentes del json del producto 25801

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
         <td><input type="number" required name="productCountInput" class="form-control" id="productCountInput" style="width:100px ; height:20px" value="0"
          min="0">   
          <div class="invalid-feedback">
          Ingrese mayor a 0
        </div>
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

let productCost = 0;
let comissionPercentage = 0.15;
let DOLLAR_CURRENCY = "USD";

// La funcion updateCostCart actualiza los datos del carrito

function updateCostCart(){
  let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = DOLLAR_CURRENCY +" "+ subtotal_modified;
    let comissionToShow = DOLLAR_CURRENCY +" "+ (Math.round(comissionPercentage * subtotal_modified))
    let totalCostToShow =  DOLLAR_CURRENCY +" "+ ((Math.round(comissionPercentage * subtotal_modified )) + parseInt(subtotal_modified));

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;

}
 
// 

document.addEventListener("DOMContentLoaded",function(e){
  getJSONData(CART_25801_ID).then(function(resultObj){
    if (resultObj.status === "ok"){
       mostrarData(resultObj.data.articles)
    }

//Funcion para modificar el subtotal del carrito y actualizarlo en tabla de costos

  let subtotalCart = document.getElementById("productCountInput")
  subtotalCart.addEventListener("change",function(e){
  
     subtotal_modified = subtotalCart.value * articulo.unitCost;
      document.getElementById("subtotal").innerHTML = articulo.currency + " " + subtotal_modified;
      document.getElementById("productCostText").innerHTML = articulo.currency + " " +subtotal_modified;
     productCost= this.value;
     updateCostCart()
     productCountInput.classList.remove('is-invalid');
    
    })
  })

 //Seleccion del input radio del tipo de envío y actualizarlo en tabla de costos

  document.getElementById("premiumradio").addEventListener("change", function(){
    comissionPercentage = 0.15;
    updateCostCart()
  });
  
  document.getElementById("expressradio").addEventListener("change", function(){
    comissionPercentage = 0.07;
    updateCostCart()
  });
  
  document.getElementById("standardradio").addEventListener("change", function(){
    comissionPercentage = 0.05;
    updateCostCart()
    
  });
  
//Realizo funciones para que el modal seleccione el tipo de pago y desactive la opción no activa


    const inputCredit = document.getElementById("cardradio");
    const inputTransfer = document.getElementById("transferradio");
    const numberCount = document.getElementById("countNumberInput");
    const cardNumber = document.getElementById("cardNumberInput");
    const secureCode = document.getElementById("secureCodeInput");
    const expiration = document.getElementById("expirationInput");
    let selectCard = document.getElementById("selectCard");
    let closeModal = document.getElementById('closeModal')


    inputCredit.addEventListener("click",function(e){
      
      if (inputTransfer !== inputCredit){  
        numberCount.setAttribute("disabled","disabled");
        cardNumber.removeAttribute("disabled");
        secureCode.removeAttribute("disabled");
        expiration.removeAttribute("disabled");
       selectCard.innerHTML ="Tarjeta de credito"
      }

       cardNumber.addEventListener("change",()=>{ 
      if(cardNumber.value !=="" ){
        closeModal.removeAttribute('disabled')  
         }
        })

  secureCode.addEventListener("change",()=>{ 
      if(cardNumber.value !=="" ){
      closeModal.removeAttribute('disabled')  
         }
       }) 

   expiration.addEventListener("change",()=>{ 
      if(expiration.value !=="" ){
      closeModal.removeAttribute('disabled')  
         }
       }) 
    })

    inputTransfer.addEventListener("click",function(){
      
        if (inputTransfer !== inputCredit){
          cardNumber.setAttribute("disabled","disabled")
          secureCode.setAttribute("disabled","disabled")
          expiration.setAttribute("disabled","disabled")
          numberCount.removeAttribute("disabled")
          selectCard.innerHTML ="Transferencia bancaria"

            }  
          numberCount.addEventListener('change',function(e){
           closeModal.removeAttribute('disabled')  
              })
      }) 

//Genero validaciones necesarias para comprar con exito

let cartForm = document.getElementById("cart-info")
cartForm.addEventListener("submit", function(e){

  e.preventDefault(); 
  e.preventDefault();

  let streetInput = document.getElementById("streetInput");
  let numberInput = document.getElementById("numberInput");
  let cornerInput = document.getElementById("cornerInput");
  let seleccionar = document.getElementById("selectCard") 
  infoMissing = false

//Quito las clases que marcan como inválidos

  streetInput.classList.remove('is-invalid');
  numberInput.classList.remove('is-invalid');
  cornerInput.classList.remove('is-invalid');
  seleccionar.classList.remove('is-invalid');

// Se controla que se haya ingresado la calle, el numero, la esquina del envío 
// Así como la cantidad del carrito sea mayor a 0
 
  if (streetInput.value === "")
  {
      streetInput.classList.add('is-invalid');
      infoMissing = true;
  }
  
  if (numberInput.value === "")
  {
      numberInput.classList.add('is-invalid');
      infoMissing = true;
  }

  if (cornerInput.value === "")
  {
      cornerInput.classList.add('is-invalid');
      infoMissing = true;
  }

  //Consulto por la cantidad del producto mayor a 0
  if (productCountInput.value <= 0)
  {
    productCountInput.classList.add('is-invalid');
      infoMissing = true;
  }
  
  // Consulto por validacion en el modal de forma de pago
  if (seleccionar.textContent==="No has seleccionado")
  {
    seleccionar.classList.add('is-invalid');
      infoMissing = true;
  }

  if(!infoMissing)
  {
      //Aquí ingresa si pasó los controles, irá a enviar
      //la solicitud para crear la publicación.
      
      getJSONData(CART_BUY_URL).then(function(resultObj){
        let msgToShowHTML = document.getElementById('resultSpan');
        let msgToShow = '';
        let MSG = 'Falta rellenar campos'

        //Si la publicación fue exitosa, devolverá mensaje de éxito,
        //de lo contrario, devolverá mensaje de error.
        //FUNCIONALIDAD NO IMPLEMENTADA
        if (resultObj.status === 'ok')
        {
            msgToShow = resultObj.data.msg;
            document.getElementById("alertResult").classList.add('alert-success');
        }
        else if (resultObj.status === 'error')
        {
            msgToShow = MSG;
            document.getElementById("alertResult").classList.add('alert-danger');
        }

        msgToShowHTML.innerHTML = msgToShow;
        document.getElementById("alertResult").classList.add("show");
      });
  }
}); 


})














