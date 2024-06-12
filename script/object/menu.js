//=
//()
//#
//" " ' '
//!
const menu = document.querySelector("#img_menu");
const contentMenu = document.querySelector("#nav_content");
const listMenu = document.querySelector("ul");

menu.addEventListener("click", (item) => {
    //Cambio de imagen
    if(contentMenu.style.visibility === "hidden"){
        item.target.style.backgroundImage = "url('../../recursos/images/close.png')";
        item.target.style.width = "15.56px";
        item.target.style.height = "15.56px";   
        mostrarMenu();
    }else{
        item.target.style.backgroundImage = "url('../../recursos/images/menu.png')";
        item.target.style.width = "20px";
        item.target.style.height = "12px";   
        esconderMenu();
    }
});

const mostrarMenu = () => {
    //transition propiedades visible
    contentMenu.style.visibility = "visible";
    contentMenu.style.opacity = "1";
    listMenu.style.transform = "translateY(0%) rotateX(0deg)";
};

const esconderMenu = () => {
    //transition propiedades hidden
    contentMenu.style.visibility = "hidden";
    contentMenu.style.opacity = "0";
    listMenu.style.transform = "translateY(20%) rotateX(-30deg)";
}
