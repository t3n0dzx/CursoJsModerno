//Selecciona el elemento por su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero)

//Si la clase existe mas de una vez
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor)

//si una clase no existe
const no_existe = document.getElementsByClassName('no-existe');
console.log(no_existe)