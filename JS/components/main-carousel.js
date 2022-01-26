//passos para acessar o carousel
//#1 Acessar a janela (browser)
//#2 Pegar o HTML inteiro para ter o botão
//#3 Pegar o botão
//#4 Clicar no botão
//#5 acessar a janela (browser)
//#6 Pegar o HTML
//#7 Pegar o 'elements
//#8 mover o 'elements' para a direita

//#9 


//query significa 'busca' e selector de seletor
const btnRight = window.document.querySelector(".button-arrow.-right");
const btnLeft = window.document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");
var pixels = 0;
//cria uma variavel para somar os 'pxs' para que possamos mover o carousel


//adicionamos o listener para entender o que está ocorrendo com o botão
btnRight.addEventListener('click', function(){
    pixels = pixels +200;
    elements.style = `transform: translateX(${pixels}px)`;

});


//adicionamos o listener para entender o que está ocorrendo com o botão
btnLeft.addEventListener('click', function(){
    pixels = pixels - 200;
    elements.style = `transform: translateX(${pixels}px)`;

});