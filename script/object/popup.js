//https://retoolapi.dev/i6orit/OxygenShopSubs
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
        })
        //
    }else{
        document.getElementById('message_subs').innerText = 'Correo no valido';
    }
});
 //close button
document.getElementById('closepopup').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
    sessionStorage.setItem("popup", true);
});
//close out
window.addEventListener('click',(event) => {
    if (!document.querySelector('.popup').contains(event.target)){
        document.querySelector('.popup').style.display = 'none';
        sessionStorage.setItem("popup", true);
    }
});
//Muestra despues de 5 seg y evalua en sessionStorage
if(sessionStorage.getItem('popup') === null){
    setTimeout(() => {
        document.querySelector('.popup').style.display = 'block'
    },5000);
}
