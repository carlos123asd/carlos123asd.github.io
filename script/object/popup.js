//https://retoolapi.dev/i6orit/OxygenShopSubs
const email = document.getElementById('emailsubs');
const notificacionessub = document.getElementById("notificaciones");
const messagesub = document.querySelector('.notificaciones__message');

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
            mostrarNotificacionSucces(document.createElement('h3'));
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


const mostrarNotificacionSucces = (tag) => {
    tag.textContent = 'Subscripción enviado correctamente';
    tag.classList.add('notificaciones__message');
    notificacionessub.classList.add('notificaciones--enviado');
    messagesub.innerText = "";
    messagesub.appendChild(tag);
    notificacionessub.style.display = "block";
    setTimeout(()=>{
        notificacionessub.classList.remove('notificaciones--hide');
        notificacionessub.classList.add('notificaciones--show');
    },500);
    setTimeout(() => {
        if(notificacionessub.style.display === 'block'){
            notificacionessub.classList.remove('notificaciones--show');
            notificacionessub.classList.add('notificaciones--hide');
            setTimeout(() => {
                notificacionessub.style.display = "none";
            },1000);
        }
    },8000);
}