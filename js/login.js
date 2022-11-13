document.addEventListener('DOMContentLoaded', function(e){
    const form = document.getElementById('login');

// Valido email y contraseña al ejecutar Ingresar

    form.addEventListener('submit', (evento) =>{
        evento.preventDefault();
         
        const user = form.querySelector('#email');
        const pass = form.querySelector('#pwd');
        localStorage.setItem ('email',JSON.stringify (user.value));

// Pregunto si el email o la contraseña están vacías que muestre una alerta
// De lo contrario redirijo a la pagina de inicio con el email guardado 

        if (user.value == ''|| pass.value ==''){
            alert('Email y/o contraseña incorrecta');
        } else {
            window.location = 'home.html' ;           
            }
        })
        
})

// Cuando redirijo a la pagina, se borran los datos almacenados
    localStorage.clear();