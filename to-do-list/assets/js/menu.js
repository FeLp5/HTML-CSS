const menu_btn = window.document.querySelector(".menu")
const menu = document.getElementById("menu_botao")

var state;


menu_btn.addEventListener('click', function(){

    if(state != true)
    {
        menu.style.display = "flex";
        state = true;
    }
    else
    {
        menu.style.display = "none";
        state = false;
    }




})
