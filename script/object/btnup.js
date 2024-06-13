const btnup = document.getElementById('btnup');
btn.addEventListener('click',() => {
    setTimeout(() => {
        window.scrollTo({top:'top'});
    },600);
});