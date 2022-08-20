document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('login');

    form.addEventListener('submit', (evento) =>{
        evento.preventDefault();

        const user = form.querySelector('#email')
        const pass = form.querySelector('#pwd')

        if (user.value == ''|| pass.value==''){
            alert('Email y/o contraseña incorrecta')
        } else{
            window.location = "home.html"
        }
    })

})