fetch (AUTOS_URL)
.then (response => response.json())
.then (data => mostrarData(data.products))
.catch (err=>console.log(err))

function mostrarData (data) {
    let products = data
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