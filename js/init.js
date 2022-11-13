const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const AUTOS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const JUGUETES_URL = "https://japceibal.github.io/emercado-api/cats_products/102.json";
const MUEBLES_URL = "https://japceibal.github.io/emercado-api/cats_products/103.json";
const HERRAMIENTAS_URL = "https://japceibal.github.io/emercado-api/cats_products/104.json";
const COMPUTADORAS_URL = "https://japceibal.github.io/emercado-api/cats_products/105.json";
const VESTIMENTA_URL = "https://japceibal.github.io/emercado-api/cats_products/106.json";
const ELECTRODOMESTICOS_URL = "https://japceibal.github.io/emercado-api/cats_products/107.json";
const DEPORTE_URL = "https://japceibal.github.io/emercado-api/cats_products/108.json";
const CELULARES_URL = "https://japceibal.github.io/emercado-api/cats_products/109.json";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función para mostrar email en la barra de navegación 

function showEmail(){

// Obtengo email desde el login y creo un div en la barra que contenga el email

  let valueEmail = JSON.parse (localStorage.getItem('email'));
  let node = document.getElementById('navbarNav');
  let showUser = document.createTextNode(valueEmail);
  let showTextUser = showUser.textContent;

  let linkUser = node.appendChild(document.createElement("div"));
  linkUser.className = "dropdown";
  linkUser.textContent = showTextUser;
  linkUser.id ="link-user";

// Genero en el div un dropdown con las redirecciones a las páginas correspondientes 

addDropdown = `<a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    ${showTextUser}
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" href="login.html">Cerrar sesión</a></li>
  </ul>`
document.getElementById("link-user").innerHTML = addDropdown
}

//Finalmente llamo a la función

showEmail()

