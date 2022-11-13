//Capturo elementos para mostrar las categorias correspondientes

const catName = localStorage.getItem('catName');
const nodeCat = document.querySelector('.categoryName');
const showCat = nodeCat.appendChild(document.createTextNode(catName))

const idCat = localStorage.getItem("catID");
const PRODUCTS_ID_URL = PRODUCTS_URL + idCat + EXT_TYPE;

// Con la función mostrarData muestro en el contenedor los elementos de cada productos 

function mostrarData (data) {

    let products = data;
    console.log(data);
    let htmlContentToAppend = "";
    for (articulo of products){
       htmlContentToAppend += `
            <div onclick="setCatID(${articulo.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${articulo.image}" alt="${articulo.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${articulo.name} - ${articulo.currency} ${articulo.cost}</h4>
                            <small class="text-muted">${articulo.soldCount} artículos</small>
                        </div>
                        <p class="text-start mb-1 mt-3">${articulo.description}</p>
                    </div>
                </div>
            </div>
            `
            document.getElementById("auto-list").innerHTML = htmlContentToAppend;
    }    
}

// setCatID guarda en localstorage los ID de cada producto
function setCatID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
}

const ORDER_ASC_BY_NAME = "PF";
const ORDER_DESC_BY_NAME = "LG";
const ORDER_BY_PROD_COUNT = "Cant.";

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}
function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentCategoriesArray = productsArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(PRODUCTS_ID_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           mostrarData(resultObj.data.products)
        }
    })

})

