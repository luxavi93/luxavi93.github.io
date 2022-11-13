
const catName = localStorage.getItem('catName')
const nodeCat = document.querySelector('.categoryName');
const showCat = nodeCat.appendChild(document.createTextNode(catName))

const idCat = localStorage.getItem("catID");

function mostrarCategoria(){
if (idCat==101){
    fetch (AUTOS_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==102){
    fetch (JUGUETES_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==103){
    fetch (MUEBLES_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==104){
    fetch (HERRAMIENTAS_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==105){
    fetch (COMPUTADORAS_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==106){
    fetch (VESTIMENTA_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==107){
    fetch (ELECTRODOMESTICOS_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==108){
    fetch (DEPORTE_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products))
    .catch (err=>console.log(err))
}else if (idCat==109){
    fetch (CELULARES_URL)
    .then (response => response.json())
    .then (data => mostrarData(data.products),
    
    )
    .catch (err=>console.log(err))
}
}
mostrarCategoria();

function mostrarData (data) {
    
    let products = data
    console.log(data)
    let htmlContentToAppend = ""
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

document.addEventListener("DOMContentLoaded",function(){




    
})

