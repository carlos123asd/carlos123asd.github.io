const contentNotification = document.getElementById('notificaciones');
const notificationmessage = document.querySelector('.notificaciones__message');

const mostrarNotificacionSuccess = (tag,message) => {
    tag.textContent = message;
    tag.classList.add('notificaciones__message');
    contentNotification.classList.add('notificaciones--enviado');
    const childrenmessage = notificationmessage.children;
    childrenmessage.item(0).style.display = 'none';
    childrenmessage.item(1).style.display = 'none';
    notificationmessage.appendChild(tag);
    contentNotification.style.display = "block";
    setTimeout(()=>{
        contentNotification.classList.remove('notificaciones--hide');
        contentNotification.classList.add('notificaciones--show');
    },500);
    setTimeout(() => {
        if(contentNotification.style.display === 'block'){
            contentNotification.classList.remove('notificaciones--show');
            contentNotification.classList.add('notificaciones--hide');
            setTimeout(() => {
                contentNotification.style.display = "none";
                childrenmessage.item(0).style.display = 'block';
                childrenmessage.item(1).style.display = 'block';
                childrenmessage.item(2).style.display = 'none';
                contentNotification.classList.remove('notificaciones--enviado');
            },1000);
        }
    },8000);
}

const mostrarNotificacionesError = () => {
    if(!contentNotification.classList.contains('notificaciones--hide')){
        contentNotification.classList.add('notificaciones--hide');
    }else{
        contentNotification.style.display = "block";
        setTimeout(()=>{
            contentNotification.classList.remove('notificaciones--hide');
            contentNotification.classList.add('notificaciones--show');
        },500);
        setTimeout(() => {
            if(contentNotification.style.display === 'block'){
                contentNotification.classList.remove('notificaciones--show');
                contentNotification.classList.add('notificaciones--hide');
                setTimeout(() => {
                    contentNotification.style.display = "none";
                },1000);
            }
        },8000);
    }
}


export {mostrarNotificacionSuccess,mostrarNotificacionesError};