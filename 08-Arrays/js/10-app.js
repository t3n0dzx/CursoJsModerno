const carrito = [
    {nombre : "MonitorV 20 pulgadas",precio : 200},
    {nombre : "MonitorW 30 pulgadas",precio : 300},
    {nombre : "MonitorY 40 pulgadas",precio : 400},
    {nombre : "MonitorX 50 pulgadas",precio : 500},
    {nombre : "MonitorZ60 pulgadas",precio : 600}
]


/* for(let i = 0; i < carrito.length ; i++){
    console.log(`${carrito[i].nombre} - precio:${carrito[i].precio}`);
}
 */

/* carrito.forEach(function(producto){
    //console.log(producto)
    console.log(`${producto.nombre} - precio:${producto.precio}`); 
}); */


//te permite crear un nuevo arreglo
let nuevoArreglo = carrito.map(function(producto){
    //console.log(producto)
    return `${producto.nombre} - precio:${producto.precio}` 
});

console.log(nuevoArreglo);

