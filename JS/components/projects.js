const projectBtn = document.getElementById("projects-btn");
const targetSectionProject = document.getElementById("section-projects");

projectBtn.addEventListener("click",()=>{
    targetSectionProject.scrollIntoView({
        behavior: "smooth",
        block:'start'
    });
});