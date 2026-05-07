

const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo'); // anima ao sair também
    }
  });
}, {
  threshold: 0.2 // ativa quando 20% do elemento aparece
});

elementos.forEach(el => observer.observe(el));