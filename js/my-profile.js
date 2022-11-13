let form = document.getElementById("form")
    
    function mostrarEmail(){
        let getEmail = JSON.parse (localStorage.getItem('email'));
        const user = form.querySelector('#email')
        
        if (localStorage.getItem('email') !== null){
            user.value = getEmail
        }
        }
        mostrarEmail()
        
document.addEventListener("DOMContentLoaded",function(){
    
        
})