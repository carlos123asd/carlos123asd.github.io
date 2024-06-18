//https://retoolapi.dev/i6orit/OxygenShopSubs
import { mostrarNotificacionSuccess } from '../helperNotification.js';

const email = document.getElementById('emailsubs');


document.getElementById('btnsubs').addEventListener('click',() => {
    if((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) === true){
        const valueemail = {
            correo: email.value
        }
        fetch('https://retoolapi.dev/i6orit/OxygenShopSubs',{
            method: 'POST',
            body: JSON.stringify(valueemail),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            if(response.ok){
                return response.json();
            }
        }).then(jsondatos => {
            console.log("Subscripcion: "+jsondatos);
            mostrarNotificacionSuccess(document.createElement('h3'),'¡Gracias por su subscripcion en OxygenShop!');
            displayNonePopUp();
        })
    }else{
        document.getElementById('message_subs').innerText = 'Correo no valido'; 
        if(!document.getElementById('emailsubs').classList.contains('popup__inputs__content--error')){
            document.getElementById('emailsubs').classList.add('popup__inputs__content--error');
            document.getElementById('message_subs').classList.add('popup__inputs__content--msgerror')
        }
    }
});
 //close button
document.getElementById('closepopup').addEventListener('click', () => {
    displayNonePopUp()
});
//close out
window.addEventListener('click',(event) => {
    if (!document.querySelector('.popup').contains(event.target)){
        displayNonePopUp();
    }
});
//Muestra despues de 5 seg y evalua en sessionStorage
if(sessionStorage.getItem('popup') === null){
    setTimeout(() => {
        document.querySelector('.popup').style.display = 'block'
    },5000);
}

const displayNonePopUp = () => {
    document.querySelector('.popup').style.display = 'none';
    sessionStorage.setItem("popup", true);
};