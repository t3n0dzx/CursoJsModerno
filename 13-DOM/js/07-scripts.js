/* const encabezado = document.querySelector('h1');
console.log(encabezado)

encabezado.style.backgroundColor = 'red';

encabezado.style.fontFamily = 'Ariel';
encabezado.style.textTransform = 'uppercase'; */


const card = document.querySelector('.card');
card.classList.add('nueva-clase','segunda-clase');
card.classList.remove('card');

console.log(card.classList);