const skill_btn = window.document.querySelector(".-sk");
const projeto_btn = window.document.querySelector(".-pj");
const sobre_btn = window.document.querySelector(".-ab");
const contato_btn = window.document.querySelector(".-ct");
const skill_container = window.document.querySelector(".main-section");

const skill_btn_menu = window.document.querySelector(".-sk-menu");
const projeto_btn_menu = window.document.querySelector(".-pj-menu");
const sobre_btn_menu = window.document.querySelector(".-ab-menu");
const contato_btn_menu = window.document.querySelector(".-ct-menu");




const section_project = window.document.querySelector(".main-section")

// console.log(element)


function main_call(none)
{
    skill_btn.addEventListener('click', function()
    {
        // alert('to ouvino')
        const habilidades = window.document.getElementById('wrapper-skill-id');

        const offset = -200; // negativo = sobe 100px a mais
        const top = habilidades.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({top: top,behavior: "smooth"});
        // window.scroll(0, 410)


    })


    projeto_btn.addEventListener('click', function()
    {
        // alert('to ouvino')

        const projetos = window.document.getElementById('wrapper-project-id');

        const offset = -80; // negativo = sobe 100px a mais
        const top = projetos.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({top: top,behavior: "smooth"});
       

    })

    sobre_btn.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 1610)


    })

    contato_btn.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 2200)


    })

    //cellphone

    skill_btn_menu.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 410)


    })


    projeto_btn_menu.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 1540)


    })

    sobre_btn_menu.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 1930)


    })

    contato_btn_menu.addEventListener('click', function()
    {
        // alert('to ouvino')
        window.scroll(0, 2500)
        

    })


    

    
}

main_call()