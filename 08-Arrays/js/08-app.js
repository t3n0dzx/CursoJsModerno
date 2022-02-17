const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

//const nombre1 = producto.nombre;
//console.log(nombre1);

//Destructuring de objectos
/**
 * Se puede obtener el valor de la propiedad 
 * y al mismo tiempo crear y asignarla a una variable 
 **/
const {nombre,precio,disponible} = producto;

console.log(disponible)

//Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [primero, ...tercero] = numeros;

console.log(tercero)

