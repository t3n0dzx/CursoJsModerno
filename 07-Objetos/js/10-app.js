"use strict"


/* Unir dos objectos */

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

const medidas = {
    peso : "1kg",
    medida : "2m"
};

console.log(producto);
console.log(medidas);

const resultado1 = Object.assign(producto, medidas);
console.log(resultado1);

const resultado2 = {...producto,...medidas};
console.log(resultado2);




