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
carrito.push(producto3);

/*
//metodo para poner al inicio del array
carrito.unshift(producto3);

console.table(carrito);


//eliminar ultimo elemento de un arreglo
carrito.pop();

console.table(carrito);


//Eliminar del inicio del arreglo
carrito.shift();
*/

carrito.splice(1,0)
console.table(carrito);


