const form = document.getElementById("formulario");
const notificaciones = document.getElementById("notificaciones");
const message = document.querySelector('.notificaciones__message');

const mostrarNotificacionesError = () => {
    if(!notificaciones.classList.contains('notificaciones--hide')){
        notificaciones.classList.add('notificaciones--hide');
    }else{
        notificaciones.style.display = "block";
        setTimeout(()=>{
            notificaciones.classList.remove('notificaciones--hide');
            notificaciones.classList.add('notificaciones--show');
        },500);
        setTimeout(() => {
            if(notificaciones.style.display === 'block'){
                notificaciones.classList.remove('notificaciones--show');
                notificaciones.classList.add('notificaciones--hide');
                setTimeout(() => {
                    notificaciones.style.display = "none";
                },1000);
            }
        },8000);
    }
}

const mostrarNotificacionSuccess = (tag) => {
    tag.textContent = 'Contacto enviado correctamente';
    tag.classList.add('notificaciones__message');
    notificaciones.classList.add('notificaciones--enviado'); //class &--enviado
    message.innerText = "";
    message.appendChild(tag);
    notificaciones.style.display = "block";
    setTimeout(()=>{
        notificaciones.classList.remove('notificaciones--hide');
        notificaciones.classList.add('notificaciones--show');
    },500);
    setTimeout(() => {
        if(notificaciones.style.display === 'block'){
            notificaciones.classList.remove('notificaciones--show');
            notificaciones.classList.add('notificaciones--hide');
            setTimeout(() => {
                notificaciones.style.display = "none";
            },1000);
        }
    },8000);
}


form.addEventListener('submit',(form) => { //mostrar todo los mensajes de error en uno
    form.preventDefault()
    let nombre = document.getElementById("nombre"); 
    let email = document.getElementById("email");
    let checkbox = document.getElementById("check");
    let message_nombre = document.getElementById("message_nombre");
    let message_email = document.getElementById("message_email");
    
    setTimeout(() => {
        if(nombre.value === "" || email.value === "" || /[^a-zA-Z\s*]/.test(nombre.value) || nombre.value.length < 2 
        || (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) === false || !checkbox.checked){
            //VALIDACION DUO VACIO
            if(nombre.value === "" || email.value === ""){ 
                if(nombre.value === ""){
                    nombre.placeholder = 'El campo nombre es necesario';
                    if(nombre.classList.contains('border_green')){
                        nombre.classList.remove('border_green');
                    }
                    if(message_nombre.innerText != ""){
                        message_nombre.innerText = "";
                    }
                    nombre.classList.add('border_red');
                }
                if(email.value === ""){
                    email.placeholder = 'El campo email es necesario';
                    if(email.classList.contains('border_green')){
                        email.classList.remove('border_green');
                    }
                    if(message_email.innerText != ""){
                        message_email.innerText = "";
                    }
                    email.classList.add('border_red');
                } 
            }else{
                //VALIDACION NOMBRE
                    if(/[^a-zA-Z\s*]/.test(nombre.value)){
                        message_nombre.innerText = 'El campo nombre solo admite letras';
                        if(nombre.classList.contains('border_green')){
                            nombre.classList.remove('border_green');
                        }
                        nombre.classList.add('border_red');
                    }else if(nombre.value.length < 2){
                        message_nombre.innerText = 'El nombre tiene que tener un minimo de 2 letras'
                        if(nombre.classList.contains('border_green')){
                            nombre.classList.remove('border_green');
                        }
                        nombre.classList.add('border_red');
                    }else{
                        if(nombre.classList.contains('border_red')){
                            nombre.classList.remove('border_red');
                        }
                        nombre.classList.add('border_green');
                        message_nombre.innerText = 'Nombre Correcto'
                    }
                // y CORREO
                    if((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) === true ){
                        message_email.innerText = 'Correo valido';
                        if(email.classList.contains('border_red')){
                            email.classList.remove('border_red');
                        }
                        email.classList.add('border_green');
                    }else{
                        message_email.innerText = 'Correo no valido';
                        if(email.classList.contains('border_green')){
                            email.classList.remove('border_green');
                        }
                        email.classList.add('border_red');
                    }
            }
            //CHECK
            if(!checkbox.checked){
                if(checkbox.classList.contains('border_green_complete')){
                    checkbox.classList.remove('border_green_complete');
                }
                checkbox.classList.add('border_red_complete'); 
            }else{
                if(checkbox.classList.contains('border_red_complete')){
                    checkbox.classList.remove('border_red_complete');
                }
                checkbox.classList.add('border_green_complete'); 
            }

            mostrarNotificacionesError();
        }
        else{// nombre, email //https://retool.com/api-generator
            const values = {
                nombre: form.target.nombre.value,
                correo: form.target.email.value
            }

            fetch('https://retoolapi.dev/hJrtzq/oxygenshop',{
                method: 'POST',
                body: JSON.stringify(values), //Objeto -> JSON
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(jsondatos => {
                console.log(jsondatos);
                mostrarNotificacionSuccess(document.createElement('h3'));
                
            }).catch((error) => {
                console.log(error);
            })
        }
    },1000);
});