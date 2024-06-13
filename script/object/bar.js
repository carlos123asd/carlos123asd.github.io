const progreso = document.querySelector('#progress');
const btn = document.querySelector('#btnup');

window.addEventListener("load",() => {
    requestAnimationFrame(update);
})

const update = () => {
    let calc = (window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100;
    progreso.style.width = `${calc}%`;
    if(Math.floor(calc) > 30){
        btn.style.opacity = '1'
    }else{
        btn.style.opacity = '0'
    }
    progreso.style.top = '0';
    requestAnimationFrame(update);
}

//Calculo directamente proporcional 
/*
px                                 %
(window height - body height)px   100%    
scrollY(variable)px                x?

=> (window height - body height)px  X  100% /  scrollY(variable)px 

*/