"use strict"

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

//congelar el objeto para no poder modificarlo;
//Puedes modificar el valor de las llaves pero no puedes agregar ni quitar propiedades al objecto
Object.seal(producto);

console.log(producto);
//console.log(Object.isFrozen(producto));

console.log(Object.isSealed(producto));