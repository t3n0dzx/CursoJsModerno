//Añadir nuevos elementos al fin o al principio de un array

/* const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];

//Agregar al final del arreglo
meses.push("Abril");



console.log(meses); */

const carrito = [];

const producto = {
    nombre :"Monitor 32 pulgadas",
    precio : 400
};

const producto2 = {
    nombre :"Celular",
    precio : 300
};

const producto3 = {
    nombre :"teclado",
    precio : 200
};

//metodo para aladir al final de un array
carrito.push(producto);
carrito.push(producto2);

//metodo para poner al inicio del array
carrito.unshift(producto3);

console.table(carrito);