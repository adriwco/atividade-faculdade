// --------------------------------------------------------------------------------------------

/*
HEIGHT E WIDTH: Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
*/
const section0 = document.querySelector('.animais');

section0.clientHeight; // height + padding
section0.offsetHeight; // height + padding + border
section0.scrollHeight; // height total, mesmo dentro de scroll
// Mesma coisa para o Width, clientWidth ...

// --------------------------------------------------------------------------------------------

/*
OFFSETTOP E OFFSETLEFT
*/
const section1 = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section1.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section1.offsetLeft;

// --------------------------------------------------------------------------------------------

/*
getBoundingClientRect(): Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
*/
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// --------------------------------------------------------------------------------------------

/*
WINDOW
*/
window.innerWidth; // width da janela
window.innerHeight; // height da janela
window.outerWidth; // soma dev tools também
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// --------------------------------------------------------------------------------------------

/*
MATCHMEDIA(); Utilize um media-querie como no CSS para verificar a largura do browser
*/
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
/*
DICA no console: 
- Selecione o elemento no inspetor (dom)
- Abra o console e digite $0 para selecionar o mesmo
- Os elementos selecionados anteriormente são $1, $2 ...
*/

// --------------------------------------------------------------------------------------------

/*
EXERCÍCIO
*/
// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagens = document.querySelectorAll('.iamgem1');
imagens[0].offsetTop;
// Retorne a soma da largura de todas as imagens
function somaImagens(){
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  })
  console.log(soma)
}
window.onload = function(){
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link)=>{
  const pxAtualW = link.offsetWidth;
  const pxAtualH = link.offsetHeight;
  if(pxAtualH >= 48 && pxAtualW >= 48){
    console.log('tudo ok')
  }else{
    console.log(link)
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if(window.matchMedia('(max-width: 720px)').matches){
  const menuTeste = document.querySelector('.menu');
  menuTeste.classList.add('menu-mobile');
}
