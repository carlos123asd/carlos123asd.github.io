import { mostrarNotificacionSuccess } from './helperNotification.js';
import { mostrarNotificacionesError } from './helperNotification.js';

const form = document.getElementById("formulario");

const switchNotificationSuccess = (element) => {
    if(element.classList.contains('border_red')){
        element.classList.remove('border_red');
    }
    element.classList.add('border_green');
}

const switchNotificationError = (element) => {
    if(element.classList.contains('border_green')){
        element.classList.remove('border_green');
    }
    element.classList.add('border_red');
}

const allSuccess = () => {
    //Verde para los inputs
    document.querySelectorAll("form input[type='text'").forEach(item => {
        if(item.classList.contains('border_red')){
            item.classList.remove('border_red')
        }
        item.classList.add('border_green');
    })
    //cambiar mensajes span
    document.querySelectorAll('form span').forEach(item => {
        if(item.id === 'message_nombre'){  
            item.innerText = 'Nombre Valido';
        }
        else if(item.id === 'message_email'){
            item.innerText = 'Correo Valido';
        }
    })
    //verde para el checkbox
    if(document.getElementById('check').classList.contains('border_red_complete')){
        document.getElementById('check').classList.remove('border_red_complete');
    }
    document.getElementById('check').classList.add('border_green_complete');
}

const cleanInputs = () => {
    //clean para los inputs
    document.querySelectorAll("form input[type='text'").forEach(item => {
            item.classList.remove('border_green')
            item.value = ''
    })
    //clean mensajes span
    document.querySelectorAll('form span').forEach(item => {
            item.innerText = '';
    })
    //clean para el checkbox
    document.getElementById('check').classList.remove('border_green_complete');
}


form.addEventListener('submit',(form) => {
    form.preventDefault()
    let checkbox = document.getElementById("check");
    let message_nombre = document.getElementById("message_nombre");
    let message_email = document.getElementById("message_email");
    if(form.target.nombre.value === "" || form.target.email.value === "" || /^[A-Z ]+$/i.test(form.target.nombre.value) === false
        || form.target.nombre.value.length < 2 || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(form.target.email.value) === false
         || checkbox.checked === false){
        //VALIDACION NOMBRE
        if(form.target.nombre.value === ""){
            form.target.nombre.placeholder = 'El campo nombre es necesario';
            switchNotificationError(form.target.nombre)
            if(message_nombre.innerText != ""){
                message_nombre.innerText = "";
            }
        }else{
            if(/[^a-zA-Z\s*]/.test(form.target.nombre.value)){
                message_nombre.innerText = 'El campo nombre solo admite letras';
                switchNotificationError(form.target.nombre)
            }else if(form.target.nombre.value.length < 2){
                message_nombre.innerText = 'El nombre tiene que tener un minimo de 2 letras'
                switchNotificationError(form.target.nombre)
            }else{
                switchNotificationSuccess(form.target.nombre)
                message_nombre.innerText = 'Nombre Correcto'
            }
        }
        // VALIDACION CORREO
        if(form.target.email.value === ""){
            form.target.email.placeholder = 'El campo email es necesario'; 
            switchNotificationError(form.target.email)
            if(message_email.innerText != ""){
                message_email.innerText = "";
            }
        }else{
            if((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(form.target.email.value)) === true ){
                message_email.innerText = 'Correo valido';
                switchNotificationSuccess(form.target.email)
            }else{
                message_email.innerText = 'Correo no valido';
                switchNotificationError(form.target.email)
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
    else{
        allSuccess();
        // nombre, email //https://retool.com/api-generator
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
            mostrarNotificacionSuccess(document.createElement('h3'),'Contacto enviado correctamente');
            cleanInputs();
        }).catch((error) => {
            console.log(error);
        })
    }
});