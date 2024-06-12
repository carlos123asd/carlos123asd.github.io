//=
//()
//#
//" " ' '
//!
const menu = document.querySelector("#img_menu");
const contentMenu = document.querySelector("#nav_content");
const listMenu = document.querySelector("ul");

menu.addEventListener("click", (item) => {
    if(!contentMenu.classList.contains('hide_menu') && !contentMenu.classList.contains('show_menu')){
        mostrarMenu(item);
    }else{
        if(contentMenu.classList.contains('show_menu')){
            esconderMenu(item);
        }else{
            mostrarMenu(item);
        }  
    }
});

const mostrarMenu = (img) => {
    //cambiar imagen
    img.target.style.backgroundImage = "url('../../recursos/images/close.png')";
    img.target.style.width = '15.56px';
    img.target.style.height = '15.56px';
    //transition propiedades visible
    contentMenu.classList.remove('visibility_hidden');
    contentMenu.classList.remove('hide_menu');
    listMenu.classList.remove('hide_lista');
    contentMenu.classList.add('visibility_visible');
    contentMenu.classList.add('show_menu');
    listMenu.classList.add('show_lista');
};

const esconderMenu = (img) => {
    //cambiar imagen
    img.target.style.backgroundImage = "url('../../recursos/images/menu.png')";
    img.target.style.width = '20px';
    img.target.style.height = '12px';
    //transition propiedades hidden
    contentMenu.classList.remove('visibility_visible');
    contentMenu.classList.remove('show_menu');
    listMenu.classList.remove('show_lista');
    contentMenu.classList.add('hide_menu');
    listMenu.classList.add('hide_lista');
    setTimeout(() => {
        contentMenu.classList.add('visibility_hidden');
    },1000)
}
