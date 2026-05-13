

const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
}, {
  threshold: 0.2 // ativa quando 20% do elemento aparece
});

elementos.forEach(el => observer.observe(el));

window.addEventListener('load',()=>{
    const targetHeader = document.getElementById("main-header");
    targetHeader.scrollIntoView({
        behavior: "smooth",
        block:'start'
    });
})