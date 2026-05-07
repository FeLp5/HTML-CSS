const aboutBtn = document.getElementById("about-btn");
const targetSectionAbout = document.getElementById("section-about");

aboutBtn.addEventListener("click",()=>{
    targetSectionAbout.scrollIntoView({
        behavior: "smooth",
        block:'start'
    });
});