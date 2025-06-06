const menu_btn = window.document.getElementById("menu")
const menu = document.getElementById("menu_botao")
var state;




menu_btn.addEventListener('click', function(){

    if(state != true)
    {
        menu_btn.style.transform = "rotate(90deg)";
        menu_btn.style.transitionDelay = "5ms";
        menu.style.display = "flex";
        menu.style.flexDirection = "column"
        menu.style.alignItems = "center";
        menu.style.textAlign = "center ";
        state = true;
    }
    else
    {
        menu_btn.style.transform = "rotate(-90deg)";
        menu.style.display = "none";
        state = false;
    }




})
