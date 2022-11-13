
document.addEventListener('DOMContentLoaded',function(){
    
// Realizo funcion para mostrar email predeterminado en el input
// y cuando no este guardado en el almacenamiento local que redireccione a la pantalla de inicio

     function showEmailInput(){
        let getEmail = JSON.parse (localStorage.getItem('email'));
        const user = document.querySelector('#email');
        
        if (localStorage.getItem('email') !== null){
            user.value = getEmail;
        } else {
            window.location ='login.html';
        }
     }
 showEmailInput()

 // Almaceno los datos del botón guardar en los inputs correspondientes

    let name = document.getElementById('firstName');
    let surname = document.getElementById('firstSurname');
    let secondName = document.getElementById('secondName');
    let secondSurname = document.getElementById('secondSurname');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let infomissing = false;
        
    name.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('surname');
    secondName.value = localStorage.getItem('secondName'); 
    secondSurname.value = localStorage.getItem('secondSurname');
    phone.value = localStorage.getItem('phone');
    name.value = localStorage.getItem('name');

// Realizo las validaciones del boton guardar cambios

    let profileForm = document.getElementById('profile-info');
    profileForm.addEventListener('submit', function(e){
    
        e.preventDefault();
        e.preventDefault();
    
// Quito las clases que marcan como invalidos

       name.classList.remove('is-invalid');
       surname.classList.remove('is-invalid');
       email.classList.remove('is-invalid');

// Pregunto si el campo esta vacío, agrego clase 'is-invalid'
// De lo contrario almaceno en localstorage

       if (name.value === ""){
        name.classList.add('is-invalid');
        infomissing = true;
       } else {
        localStorage.setItem('name',name.value)
       }

       if (surname.value === ""){
        surname.classList.add('is-invalid');
        infomissing = true;
       } else {
        localStorage.setItem('surname',surname.value)
       }

       if (email.value === ""){
        email.classList.add('is-invalid');
        infomissing = true;
       } 

       localStorage.setItem('secondName',secondName.value)
       localStorage.setItem('secondSurname',secondSurname.value)
       localStorage.setItem('phone',phone.value)

    })
})